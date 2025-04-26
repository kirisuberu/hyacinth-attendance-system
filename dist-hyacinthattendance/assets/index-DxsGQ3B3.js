function BS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Eu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tE={exports:{}},kh={},nE={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wu=Symbol.for("react.element"),HS=Symbol.for("react.portal"),qS=Symbol.for("react.fragment"),YS=Symbol.for("react.strict_mode"),GS=Symbol.for("react.profiler"),KS=Symbol.for("react.provider"),QS=Symbol.for("react.context"),ZS=Symbol.for("react.forward_ref"),XS=Symbol.for("react.suspense"),JS=Symbol.for("react.memo"),e6=Symbol.for("react.lazy"),hv=Symbol.iterator;function t6(t){return t===null||typeof t!="object"?null:(t=hv&&t[hv]||t["@@iterator"],typeof t=="function"?t:null)}var rE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iE=Object.assign,oE={};function _a(t,e,n){this.props=t,this.context=e,this.refs=oE,this.updater=n||rE}_a.prototype.isReactComponent={};_a.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_a.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sE(){}sE.prototype=_a.prototype;function o0(t,e,n){this.props=t,this.context=e,this.refs=oE,this.updater=n||rE}var s0=o0.prototype=new sE;s0.constructor=o0;iE(s0,_a.prototype);s0.isPureReactComponent=!0;var fv=Array.isArray,aE=Object.prototype.hasOwnProperty,a0={current:null},lE={key:!0,ref:!0,__self:!0,__source:!0};function uE(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)aE.call(e,r)&&!lE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:wu,type:t,key:o,ref:s,props:i,_owner:a0.current}}function n6(t,e){return{$$typeof:wu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function l0(t){return typeof t=="object"&&t!==null&&t.$$typeof===wu}function r6(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pv=/\/+/g;function Vf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?r6(""+t.key):e.toString(36)}function Wc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case wu:case HS:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Vf(s,0):r,fv(i)?(n="",t!=null&&(n=t.replace(pv,"$&/")+"/"),Wc(i,e,n,"",function(d){return d})):i!=null&&(l0(i)&&(i=n6(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(pv,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",fv(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Vf(o,a);s+=Wc(o,e,n,l,i)}else if(l=t6(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Vf(o,a++),s+=Wc(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function oc(t,e,n){if(t==null)return t;var r=[],i=0;return Wc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function i6(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},$c={transition:null},o6={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:$c,ReactCurrentOwner:a0};function cE(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:oc,forEach:function(t,e,n){oc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return oc(t,function(){e++}),e},toArray:function(t){return oc(t,function(e){return e})||[]},only:function(t){if(!l0(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=_a;de.Fragment=qS;de.Profiler=GS;de.PureComponent=o0;de.StrictMode=YS;de.Suspense=XS;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o6;de.act=cE;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=iE({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=a0.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)aE.call(e,l)&&!lE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var d=0;d<l;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:wu,type:t.type,key:i,ref:o,props:r,_owner:s}};de.createContext=function(t){return t={$$typeof:QS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:KS,_context:t},t.Consumer=t};de.createElement=uE;de.createFactory=function(t){var e=uE.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:ZS,render:t}};de.isValidElement=l0;de.lazy=function(t){return{$$typeof:e6,_payload:{_status:-1,_result:t},_init:i6}};de.memo=function(t,e){return{$$typeof:JS,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=$c.transition;$c.transition={};try{t()}finally{$c.transition=e}};de.unstable_act=cE;de.useCallback=function(t,e){return qt.current.useCallback(t,e)};de.useContext=function(t){return qt.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};de.useEffect=function(t,e){return qt.current.useEffect(t,e)};de.useId=function(){return qt.current.useId()};de.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return qt.current.useMemo(t,e)};de.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};de.useRef=function(t){return qt.current.useRef(t)};de.useState=function(t){return qt.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return qt.current.useTransition()};de.version="18.3.1";nE.exports=de;var M=nE.exports;const c=Eu(M),s6=BS({__proto__:null,default:c},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a6=M,l6=Symbol.for("react.element"),u6=Symbol.for("react.fragment"),c6=Object.prototype.hasOwnProperty,d6=a6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h6={key:!0,ref:!0,__self:!0,__source:!0};function dE(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)c6.call(e,r)&&!h6.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:l6,type:t,key:o,ref:s,props:i,_owner:d6.current}}kh.Fragment=u6;kh.jsx=dE;kh.jsxs=dE;tE.exports=kh;var h=tE.exports,hE={exports:{}},mn={},fE={exports:{}},pE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,G){var J=$.length;$.push(G);e:for(;0<J;){var le=J-1>>>1,ne=$[le];if(0<i(ne,G))$[le]=G,$[J]=ne,J=le;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var G=$[0],J=$.pop();if(J!==G){$[0]=J;e:for(var le=0,ne=$.length,he=ne>>>1;le<he;){var Fe=2*(le+1)-1,Pe=$[Fe],Qe=Fe+1,Ue=$[Qe];if(0>i(Pe,J))Qe<ne&&0>i(Ue,Pe)?($[le]=Ue,$[Qe]=J,le=Qe):($[le]=Pe,$[Fe]=J,le=Fe);else if(Qe<ne&&0>i(Ue,J))$[le]=Ue,$[Qe]=J,le=Qe;else break e}}return G}function i($,G){var J=$.sortIndex-G.sortIndex;return J!==0?J:$.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],d=[],f=1,m=null,E=3,_=!1,T=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k($){for(var G=n(d);G!==null;){if(G.callback===null)r(d);else if(G.startTime<=$)r(d),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(d)}}function x($){if(A=!1,k($),!T)if(n(l)!==null)T=!0,ee(R);else{var G=n(d);G!==null&&z(x,G.startTime-$)}}function R($,G){T=!1,A&&(A=!1,y(I),I=-1),_=!0;var J=E;try{for(k(G),m=n(l);m!==null&&(!(m.expirationTime>G)||$&&!j());){var le=m.callback;if(typeof le=="function"){m.callback=null,E=m.priorityLevel;var ne=le(m.expirationTime<=G);G=t.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(l)&&r(l),k(G)}else r(l);m=n(l)}if(m!==null)var he=!0;else{var Fe=n(d);Fe!==null&&z(x,Fe.startTime-G),he=!1}return he}finally{m=null,E=J,_=!1}}var N=!1,w=null,I=-1,P=5,b=-1;function j(){return!(t.unstable_now()-b<P)}function O(){if(w!==null){var $=t.unstable_now();b=$;var G=!0;try{G=w(!0,$)}finally{G?C():(N=!1,w=null)}}else N=!1}var C;if(typeof g=="function")C=function(){g(O)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ie=K.port2;K.port1.onmessage=O,C=function(){ie.postMessage(null)}}else C=function(){S(O,0)};function ee($){w=$,N||(N=!0,C())}function z($,G){I=S(function(){$(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){T||_||(T=!0,ee(R))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return E},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function($){switch(E){case 1:case 2:case 3:var G=3;break;default:G=E}var J=E;E=G;try{return $()}finally{E=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,G){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var J=E;E=$;try{return G()}finally{E=J}},t.unstable_scheduleCallback=function($,G,J){var le=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?le+J:le):J=le,$){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=J+ne,$={id:f++,callback:G,priorityLevel:$,startTime:J,expirationTime:ne,sortIndex:-1},J>le?($.sortIndex=J,e(d,$),n(l)===null&&$===n(d)&&(A?(y(I),I=-1):A=!0,z(x,J-le))):($.sortIndex=ne,e(l,$),T||_||(T=!0,ee(R))),$},t.unstable_shouldYield=j,t.unstable_wrapCallback=function($){var G=E;return function(){var J=E;E=G;try{return $.apply(this,arguments)}finally{E=J}}}})(pE);fE.exports=pE;var f6=fE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p6=M,pn=f6;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mE=new Set,Ol={};function xo(t,e){Js(t,e),Js(t+"Capture",e)}function Js(t,e){for(Ol[t]=e,t=0;t<e.length;t++)mE.add(e[t])}var Cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yp=Object.prototype.hasOwnProperty,m6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mv={},gv={};function g6(t){return Yp.call(gv,t)?!0:Yp.call(mv,t)?!1:m6.test(t)?gv[t]=!0:(mv[t]=!0,!1)}function y6(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function v6(t,e,n,r){if(e===null||typeof e>"u"||y6(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var u0=/[\-:]([a-z])/g;function c0(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(u0,c0);Et[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(u0,c0);Et[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(u0,c0);Et[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function d0(t,e,n,r){var i=Et.hasOwnProperty(e)?Et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(v6(e,n,i,r)&&(n=null),r||i===null?g6(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mr=p6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sc=Symbol.for("react.element"),Cs=Symbol.for("react.portal"),Ls=Symbol.for("react.fragment"),h0=Symbol.for("react.strict_mode"),Gp=Symbol.for("react.profiler"),gE=Symbol.for("react.provider"),yE=Symbol.for("react.context"),f0=Symbol.for("react.forward_ref"),Kp=Symbol.for("react.suspense"),Qp=Symbol.for("react.suspense_list"),p0=Symbol.for("react.memo"),qr=Symbol.for("react.lazy"),vE=Symbol.for("react.offscreen"),yv=Symbol.iterator;function qa(t){return t===null||typeof t!="object"?null:(t=yv&&t[yv]||t["@@iterator"],typeof t=="function"?t:null)}var Be=Object.assign,Ff;function ol(t){if(Ff===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ff=e&&e[1]||""}return`
`+Ff+t}var Uf=!1;function Wf(t,e){if(!t||Uf)return"";Uf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Uf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ol(t):""}function _6(t){switch(t.tag){case 5:return ol(t.type);case 16:return ol("Lazy");case 13:return ol("Suspense");case 19:return ol("SuspenseList");case 0:case 2:case 15:return t=Wf(t.type,!1),t;case 11:return t=Wf(t.type.render,!1),t;case 1:return t=Wf(t.type,!0),t;default:return""}}function Zp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ls:return"Fragment";case Cs:return"Portal";case Gp:return"Profiler";case h0:return"StrictMode";case Kp:return"Suspense";case Qp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yE:return(t.displayName||"Context")+".Consumer";case gE:return(t._context.displayName||"Context")+".Provider";case f0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case p0:return e=t.displayName||null,e!==null?e:Zp(t.type)||"Memo";case qr:e=t._payload,t=t._init;try{return Zp(t(e))}catch{}}return null}function k6(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zp(e);case 8:return e===h0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _E(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function E6(t){var e=_E(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ac(t){t._valueTracker||(t._valueTracker=E6(t))}function kE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_E(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function md(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xp(t,e){var n=e.checked;return Be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function EE(t,e){e=e.checked,e!=null&&d0(t,"checked",e,!1)}function Jp(t,e){EE(t,e);var n=ki(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?em(t,e.type,n):e.hasOwnProperty("defaultValue")&&em(t,e.type,ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _v(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function em(t,e,n){(e!=="number"||md(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var sl=Array.isArray;function $s(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ki(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function tm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return Be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(sl(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ki(n)}}function wE(t,e){var n=ki(e.value),r=ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ev(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lc,TE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lc=lc||document.createElement("div"),lc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Dl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w6=["Webkit","ms","Moz","O"];Object.keys(vl).forEach(function(t){w6.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vl[e]=vl[t]})});function IE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||vl.hasOwnProperty(t)&&vl[t]?(""+e).trim():e+"px"}function SE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=IE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var x6=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rm(t,e){if(e){if(x6[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function im(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var om=null;function m0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sm=null,zs=null,Bs=null;function wv(t){if(t=Iu(t)){if(typeof sm!="function")throw Error(H(280));var e=t.stateNode;e&&(e=Ih(e),sm(t.stateNode,t.type,e))}}function CE(t){zs?Bs?Bs.push(t):Bs=[t]:zs=t}function LE(){if(zs){var t=zs,e=Bs;if(Bs=zs=null,wv(t),e)for(t=0;t<e.length;t++)wv(e[t])}}function AE(t,e){return t(e)}function PE(){}var $f=!1;function RE(t,e,n){if($f)return t(e,n);$f=!0;try{return AE(t,e,n)}finally{$f=!1,(zs!==null||Bs!==null)&&(PE(),LE())}}function Vl(t,e){var n=t.stateNode;if(n===null)return null;var r=Ih(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var am=!1;if(Cr)try{var Ya={};Object.defineProperty(Ya,"passive",{get:function(){am=!0}}),window.addEventListener("test",Ya,Ya),window.removeEventListener("test",Ya,Ya)}catch{am=!1}function T6(t,e,n,r,i,o,s,a,l){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var _l=!1,gd=null,yd=!1,lm=null,I6={onError:function(t){_l=!0,gd=t}};function S6(t,e,n,r,i,o,s,a,l){_l=!1,gd=null,T6.apply(I6,arguments)}function C6(t,e,n,r,i,o,s,a,l){if(S6.apply(this,arguments),_l){if(_l){var d=gd;_l=!1,gd=null}else throw Error(H(198));yd||(yd=!0,lm=d)}}function To(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xv(t){if(To(t)!==t)throw Error(H(188))}function L6(t){var e=t.alternate;if(!e){if(e=To(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return xv(i),t;if(o===r)return xv(i),e;o=o.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function jE(t){return t=L6(t),t!==null?NE(t):null}function NE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=NE(t);if(e!==null)return e;t=t.sibling}return null}var ME=pn.unstable_scheduleCallback,Tv=pn.unstable_cancelCallback,A6=pn.unstable_shouldYield,P6=pn.unstable_requestPaint,Xe=pn.unstable_now,R6=pn.unstable_getCurrentPriorityLevel,g0=pn.unstable_ImmediatePriority,OE=pn.unstable_UserBlockingPriority,vd=pn.unstable_NormalPriority,b6=pn.unstable_LowPriority,DE=pn.unstable_IdlePriority,Eh=null,Jn=null;function j6(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(Eh,t,void 0,(t.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:O6,N6=Math.log,M6=Math.LN2;function O6(t){return t>>>=0,t===0?32:31-(N6(t)/M6|0)|0}var uc=64,cc=4194304;function al(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _d(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=al(a):(o&=s,o!==0&&(r=al(o)))}else s=n&~i,s!==0?r=al(s):o!==0&&(r=al(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Fn(e),i=1<<n,r|=t[n],e&=~i;return r}function D6(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V6(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Fn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=D6(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function um(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function VE(){var t=uc;return uc<<=1,!(uc&4194240)&&(uc=64),t}function zf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fn(e),t[e]=n}function F6(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Fn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function y0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Fn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ce=0;function FE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var UE,v0,WE,$E,zE,cm=!1,dc=[],oi=null,si=null,ai=null,Fl=new Map,Ul=new Map,Gr=[],U6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Iv(t,e){switch(t){case"focusin":case"focusout":oi=null;break;case"dragenter":case"dragleave":si=null;break;case"mouseover":case"mouseout":ai=null;break;case"pointerover":case"pointerout":Fl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(e.pointerId)}}function Ga(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Iu(e),e!==null&&v0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function W6(t,e,n,r,i){switch(e){case"focusin":return oi=Ga(oi,t,e,n,r,i),!0;case"dragenter":return si=Ga(si,t,e,n,r,i),!0;case"mouseover":return ai=Ga(ai,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Fl.set(o,Ga(Fl.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ul.set(o,Ga(Ul.get(o)||null,t,e,n,r,i)),!0}return!1}function BE(t){var e=Zi(t.target);if(e!==null){var n=To(e);if(n!==null){if(e=n.tag,e===13){if(e=bE(n),e!==null){t.blockedOn=e,zE(t.priority,function(){WE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=dm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);om=r,n.target.dispatchEvent(r),om=null}else return e=Iu(n),e!==null&&v0(e),t.blockedOn=n,!1;e.shift()}return!0}function Sv(t,e,n){zc(t)&&n.delete(e)}function $6(){cm=!1,oi!==null&&zc(oi)&&(oi=null),si!==null&&zc(si)&&(si=null),ai!==null&&zc(ai)&&(ai=null),Fl.forEach(Sv),Ul.forEach(Sv)}function Ka(t,e){t.blockedOn===e&&(t.blockedOn=null,cm||(cm=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,$6)))}function Wl(t){function e(i){return Ka(i,t)}if(0<dc.length){Ka(dc[0],t);for(var n=1;n<dc.length;n++){var r=dc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(oi!==null&&Ka(oi,t),si!==null&&Ka(si,t),ai!==null&&Ka(ai,t),Fl.forEach(e),Ul.forEach(e),n=0;n<Gr.length;n++)r=Gr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gr.length&&(n=Gr[0],n.blockedOn===null);)BE(n),n.blockedOn===null&&Gr.shift()}var Hs=Mr.ReactCurrentBatchConfig,kd=!0;function z6(t,e,n,r){var i=Ce,o=Hs.transition;Hs.transition=null;try{Ce=1,_0(t,e,n,r)}finally{Ce=i,Hs.transition=o}}function B6(t,e,n,r){var i=Ce,o=Hs.transition;Hs.transition=null;try{Ce=4,_0(t,e,n,r)}finally{Ce=i,Hs.transition=o}}function _0(t,e,n,r){if(kd){var i=dm(t,e,n,r);if(i===null)Jf(t,e,r,Ed,n),Iv(t,r);else if(W6(i,t,e,n,r))r.stopPropagation();else if(Iv(t,r),e&4&&-1<U6.indexOf(t)){for(;i!==null;){var o=Iu(i);if(o!==null&&UE(o),o=dm(t,e,n,r),o===null&&Jf(t,e,r,Ed,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Jf(t,e,r,null,n)}}var Ed=null;function dm(t,e,n,r){if(Ed=null,t=m0(r),t=Zi(t),t!==null)if(e=To(t),e===null)t=null;else if(n=e.tag,n===13){if(t=bE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ed=t,null}function HE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R6()){case g0:return 1;case OE:return 4;case vd:case b6:return 16;case DE:return 536870912;default:return 16}default:return 16}}var Jr=null,k0=null,Bc=null;function qE(){if(Bc)return Bc;var t,e=k0,n=e.length,r,i="value"in Jr?Jr.value:Jr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Bc=i.slice(t,1<r?1-r:void 0)}function Hc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function hc(){return!0}function Cv(){return!1}function gn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hc:Cv,this.isPropagationStopped=Cv,this}return Be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hc)},persist:function(){},isPersistent:hc}),e}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},E0=gn(ka),Tu=Be({},ka,{view:0,detail:0}),H6=gn(Tu),Bf,Hf,Qa,wh=Be({},Tu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:w0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qa&&(Qa&&t.type==="mousemove"?(Bf=t.screenX-Qa.screenX,Hf=t.screenY-Qa.screenY):Hf=Bf=0,Qa=t),Bf)},movementY:function(t){return"movementY"in t?t.movementY:Hf}}),Lv=gn(wh),q6=Be({},wh,{dataTransfer:0}),Y6=gn(q6),G6=Be({},Tu,{relatedTarget:0}),qf=gn(G6),K6=Be({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Q6=gn(K6),Z6=Be({},ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),X6=gn(Z6),J6=Be({},ka,{data:0}),Av=gn(J6),eC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nC[t])?!!e[t]:!1}function w0(){return rC}var iC=Be({},Tu,{key:function(t){if(t.key){var e=eC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:w0,charCode:function(t){return t.type==="keypress"?Hc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),oC=gn(iC),sC=Be({},wh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pv=gn(sC),aC=Be({},Tu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:w0}),lC=gn(aC),uC=Be({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),cC=gn(uC),dC=Be({},wh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hC=gn(dC),fC=[9,13,27,32],x0=Cr&&"CompositionEvent"in window,kl=null;Cr&&"documentMode"in document&&(kl=document.documentMode);var pC=Cr&&"TextEvent"in window&&!kl,YE=Cr&&(!x0||kl&&8<kl&&11>=kl),Rv=" ",bv=!1;function GE(t,e){switch(t){case"keyup":return fC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function KE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var As=!1;function mC(t,e){switch(t){case"compositionend":return KE(e);case"keypress":return e.which!==32?null:(bv=!0,Rv);case"textInput":return t=e.data,t===Rv&&bv?null:t;default:return null}}function gC(t,e){if(As)return t==="compositionend"||!x0&&GE(t,e)?(t=qE(),Bc=k0=Jr=null,As=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return YE&&e.locale!=="ko"?null:e.data;default:return null}}var yC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yC[t.type]:e==="textarea"}function QE(t,e,n,r){CE(r),e=wd(e,"onChange"),0<e.length&&(n=new E0("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var El=null,$l=null;function vC(t){aw(t,0)}function xh(t){var e=bs(t);if(kE(e))return t}function _C(t,e){if(t==="change")return e}var ZE=!1;if(Cr){var Yf;if(Cr){var Gf="oninput"in document;if(!Gf){var Nv=document.createElement("div");Nv.setAttribute("oninput","return;"),Gf=typeof Nv.oninput=="function"}Yf=Gf}else Yf=!1;ZE=Yf&&(!document.documentMode||9<document.documentMode)}function Mv(){El&&(El.detachEvent("onpropertychange",XE),$l=El=null)}function XE(t){if(t.propertyName==="value"&&xh($l)){var e=[];QE(e,$l,t,m0(t)),RE(vC,e)}}function kC(t,e,n){t==="focusin"?(Mv(),El=e,$l=n,El.attachEvent("onpropertychange",XE)):t==="focusout"&&Mv()}function EC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xh($l)}function wC(t,e){if(t==="click")return xh(e)}function xC(t,e){if(t==="input"||t==="change")return xh(e)}function TC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:TC;function zl(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yp.call(e,i)||!$n(t[i],e[i]))return!1}return!0}function Ov(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dv(t,e){var n=Ov(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ov(n)}}function JE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?JE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ew(){for(var t=window,e=md();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=md(t.document)}return e}function T0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IC(t){var e=ew(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&JE(n.ownerDocument.documentElement,n)){if(r!==null&&T0(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Dv(n,o);var s=Dv(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var SC=Cr&&"documentMode"in document&&11>=document.documentMode,Ps=null,hm=null,wl=null,fm=!1;function Vv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fm||Ps==null||Ps!==md(r)||(r=Ps,"selectionStart"in r&&T0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wl&&zl(wl,r)||(wl=r,r=wd(hm,"onSelect"),0<r.length&&(e=new E0("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ps)))}function fc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Rs={animationend:fc("Animation","AnimationEnd"),animationiteration:fc("Animation","AnimationIteration"),animationstart:fc("Animation","AnimationStart"),transitionend:fc("Transition","TransitionEnd")},Kf={},tw={};Cr&&(tw=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function Th(t){if(Kf[t])return Kf[t];if(!Rs[t])return t;var e=Rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tw)return Kf[t]=e[n];return t}var nw=Th("animationend"),rw=Th("animationiteration"),iw=Th("animationstart"),ow=Th("transitionend"),sw=new Map,Fv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Si(t,e){sw.set(t,e),xo(e,[t])}for(var Qf=0;Qf<Fv.length;Qf++){var Zf=Fv[Qf],CC=Zf.toLowerCase(),LC=Zf[0].toUpperCase()+Zf.slice(1);Si(CC,"on"+LC)}Si(nw,"onAnimationEnd");Si(rw,"onAnimationIteration");Si(iw,"onAnimationStart");Si("dblclick","onDoubleClick");Si("focusin","onFocus");Si("focusout","onBlur");Si(ow,"onTransitionEnd");Js("onMouseEnter",["mouseout","mouseover"]);Js("onMouseLeave",["mouseout","mouseover"]);Js("onPointerEnter",["pointerout","pointerover"]);Js("onPointerLeave",["pointerout","pointerover"]);xo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xo("onBeforeInput",["compositionend","keypress","textInput","paste"]);xo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AC=new Set("cancel close invalid load scroll toggle".split(" ").concat(ll));function Uv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,C6(r,e,void 0,t),t.currentTarget=null}function aw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,d=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Uv(i,a,d),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,d=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Uv(i,a,d),o=l}}}if(yd)throw t=lm,yd=!1,lm=null,t}function Me(t,e){var n=e[vm];n===void 0&&(n=e[vm]=new Set);var r=t+"__bubble";n.has(r)||(lw(e,t,2,!1),n.add(r))}function Xf(t,e,n){var r=0;e&&(r|=4),lw(n,t,r,e)}var pc="_reactListening"+Math.random().toString(36).slice(2);function Bl(t){if(!t[pc]){t[pc]=!0,mE.forEach(function(n){n!=="selectionchange"&&(AC.has(n)||Xf(n,!1,t),Xf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pc]||(e[pc]=!0,Xf("selectionchange",!1,e))}}function lw(t,e,n,r){switch(HE(e)){case 1:var i=z6;break;case 4:i=B6;break;default:i=_0}n=i.bind(null,e,n,t),i=void 0,!am||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Jf(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Zi(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}RE(function(){var d=o,f=m0(n),m=[];e:{var E=sw.get(t);if(E!==void 0){var _=E0,T=t;switch(t){case"keypress":if(Hc(n)===0)break e;case"keydown":case"keyup":_=oC;break;case"focusin":T="focus",_=qf;break;case"focusout":T="blur",_=qf;break;case"beforeblur":case"afterblur":_=qf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Lv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Y6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=lC;break;case nw:case rw:case iw:_=Q6;break;case ow:_=cC;break;case"scroll":_=H6;break;case"wheel":_=hC;break;case"copy":case"cut":case"paste":_=X6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Pv}var A=(e&4)!==0,S=!A&&t==="scroll",y=A?E!==null?E+"Capture":null:E;A=[];for(var g=d,k;g!==null;){k=g;var x=k.stateNode;if(k.tag===5&&x!==null&&(k=x,y!==null&&(x=Vl(g,y),x!=null&&A.push(Hl(g,x,k)))),S)break;g=g.return}0<A.length&&(E=new _(E,T,null,n,f),m.push({event:E,listeners:A}))}}if(!(e&7)){e:{if(E=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",E&&n!==om&&(T=n.relatedTarget||n.fromElement)&&(Zi(T)||T[Lr]))break e;if((_||E)&&(E=f.window===f?f:(E=f.ownerDocument)?E.defaultView||E.parentWindow:window,_?(T=n.relatedTarget||n.toElement,_=d,T=T?Zi(T):null,T!==null&&(S=To(T),T!==S||T.tag!==5&&T.tag!==6)&&(T=null)):(_=null,T=d),_!==T)){if(A=Lv,x="onMouseLeave",y="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(A=Pv,x="onPointerLeave",y="onPointerEnter",g="pointer"),S=_==null?E:bs(_),k=T==null?E:bs(T),E=new A(x,g+"leave",_,n,f),E.target=S,E.relatedTarget=k,x=null,Zi(f)===d&&(A=new A(y,g+"enter",T,n,f),A.target=k,A.relatedTarget=S,x=A),S=x,_&&T)t:{for(A=_,y=T,g=0,k=A;k;k=fs(k))g++;for(k=0,x=y;x;x=fs(x))k++;for(;0<g-k;)A=fs(A),g--;for(;0<k-g;)y=fs(y),k--;for(;g--;){if(A===y||y!==null&&A===y.alternate)break t;A=fs(A),y=fs(y)}A=null}else A=null;_!==null&&Wv(m,E,_,A,!1),T!==null&&S!==null&&Wv(m,S,T,A,!0)}}e:{if(E=d?bs(d):window,_=E.nodeName&&E.nodeName.toLowerCase(),_==="select"||_==="input"&&E.type==="file")var R=_C;else if(jv(E))if(ZE)R=xC;else{R=EC;var N=kC}else(_=E.nodeName)&&_.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(R=wC);if(R&&(R=R(t,d))){QE(m,R,n,f);break e}N&&N(t,E,d),t==="focusout"&&(N=E._wrapperState)&&N.controlled&&E.type==="number"&&em(E,"number",E.value)}switch(N=d?bs(d):window,t){case"focusin":(jv(N)||N.contentEditable==="true")&&(Ps=N,hm=d,wl=null);break;case"focusout":wl=hm=Ps=null;break;case"mousedown":fm=!0;break;case"contextmenu":case"mouseup":case"dragend":fm=!1,Vv(m,n,f);break;case"selectionchange":if(SC)break;case"keydown":case"keyup":Vv(m,n,f)}var w;if(x0)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else As?GE(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(YE&&n.locale!=="ko"&&(As||I!=="onCompositionStart"?I==="onCompositionEnd"&&As&&(w=qE()):(Jr=f,k0="value"in Jr?Jr.value:Jr.textContent,As=!0)),N=wd(d,I),0<N.length&&(I=new Av(I,t,null,n,f),m.push({event:I,listeners:N}),w?I.data=w:(w=KE(n),w!==null&&(I.data=w)))),(w=pC?mC(t,n):gC(t,n))&&(d=wd(d,"onBeforeInput"),0<d.length&&(f=new Av("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=w))}aw(m,e)})}function Hl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Vl(t,n),o!=null&&r.unshift(Hl(t,o,i)),o=Vl(t,e),o!=null&&r.push(Hl(t,o,i))),t=t.return}return r}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wv(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,d=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&d!==null&&(a=d,i?(l=Vl(n,o),l!=null&&s.unshift(Hl(n,l,a))):i||(l=Vl(n,o),l!=null&&s.push(Hl(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var PC=/\r\n?/g,RC=/\u0000|\uFFFD/g;function $v(t){return(typeof t=="string"?t:""+t).replace(PC,`
`).replace(RC,"")}function mc(t,e,n){if(e=$v(e),$v(t)!==e&&n)throw Error(H(425))}function xd(){}var pm=null,mm=null;function gm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ym=typeof setTimeout=="function"?setTimeout:void 0,bC=typeof clearTimeout=="function"?clearTimeout:void 0,zv=typeof Promise=="function"?Promise:void 0,jC=typeof queueMicrotask=="function"?queueMicrotask:typeof zv<"u"?function(t){return zv.resolve(null).then(t).catch(NC)}:ym;function NC(t){setTimeout(function(){throw t})}function ep(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Wl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wl(e)}function li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ea=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Ea,ql="__reactProps$"+Ea,Lr="__reactContainer$"+Ea,vm="__reactEvents$"+Ea,MC="__reactListeners$"+Ea,OC="__reactHandles$"+Ea;function Zi(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Lr]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bv(t);t!==null;){if(n=t[Qn])return n;t=Bv(t)}return e}t=n,n=t.parentNode}return null}function Iu(t){return t=t[Qn]||t[Lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function Ih(t){return t[ql]||null}var _m=[],js=-1;function Ci(t){return{current:t}}function Ve(t){0>js||(t.current=_m[js],_m[js]=null,js--)}function Re(t,e){js++,_m[js]=t.current,t.current=e}var Ei={},Mt=Ci(Ei),tn=Ci(!1),uo=Ei;function ea(t,e){var n=t.type.contextTypes;if(!n)return Ei;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nn(t){return t=t.childContextTypes,t!=null}function Td(){Ve(tn),Ve(Mt)}function Hv(t,e,n){if(Mt.current!==Ei)throw Error(H(168));Re(Mt,e),Re(tn,n)}function uw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,k6(t)||"Unknown",i));return Be({},n,r)}function Id(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ei,uo=Mt.current,Re(Mt,t),Re(tn,tn.current),!0}function qv(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=uw(t,e,uo),r.__reactInternalMemoizedMergedChildContext=t,Ve(tn),Ve(Mt),Re(Mt,t)):Ve(tn),Re(tn,n)}var gr=null,Sh=!1,tp=!1;function cw(t){gr===null?gr=[t]:gr.push(t)}function DC(t){Sh=!0,cw(t)}function Li(){if(!tp&&gr!==null){tp=!0;var t=0,e=Ce;try{var n=gr;for(Ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gr=null,Sh=!1}catch(i){throw gr!==null&&(gr=gr.slice(t+1)),ME(g0,Li),i}finally{Ce=e,tp=!1}}return null}var Ns=[],Ms=0,Sd=null,Cd=0,vn=[],_n=0,co=null,vr=1,_r="";function Hi(t,e){Ns[Ms++]=Cd,Ns[Ms++]=Sd,Sd=t,Cd=e}function dw(t,e,n){vn[_n++]=vr,vn[_n++]=_r,vn[_n++]=co,co=t;var r=vr;t=_r;var i=32-Fn(r)-1;r&=~(1<<i),n+=1;var o=32-Fn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,vr=1<<32-Fn(e)+i|n<<i|r,_r=o+t}else vr=1<<o|n<<i|r,_r=t}function I0(t){t.return!==null&&(Hi(t,1),dw(t,1,0))}function S0(t){for(;t===Sd;)Sd=Ns[--Ms],Ns[Ms]=null,Cd=Ns[--Ms],Ns[Ms]=null;for(;t===co;)co=vn[--_n],vn[_n]=null,_r=vn[--_n],vn[_n]=null,vr=vn[--_n],vn[_n]=null}var hn=null,cn=null,We=!1,Mn=null;function hw(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,cn=li(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=co!==null?{id:vr,overflow:_r}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,cn=null,!0):!1;default:return!1}}function km(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Em(t){if(We){var e=cn;if(e){var n=e;if(!Yv(t,e)){if(km(t))throw Error(H(418));e=li(n.nextSibling);var r=hn;e&&Yv(t,e)?hw(r,n):(t.flags=t.flags&-4097|2,We=!1,hn=t)}}else{if(km(t))throw Error(H(418));t.flags=t.flags&-4097|2,We=!1,hn=t}}}function Gv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function gc(t){if(t!==hn)return!1;if(!We)return Gv(t),We=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gm(t.type,t.memoizedProps)),e&&(e=cn)){if(km(t))throw fw(),Error(H(418));for(;e;)hw(t,e),e=li(e.nextSibling)}if(Gv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=hn?li(t.stateNode.nextSibling):null;return!0}function fw(){for(var t=cn;t;)t=li(t.nextSibling)}function ta(){cn=hn=null,We=!1}function C0(t){Mn===null?Mn=[t]:Mn.push(t)}var VC=Mr.ReactCurrentBatchConfig;function Za(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function yc(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kv(t){var e=t._init;return e(t._payload)}function pw(t){function e(y,g){if(t){var k=y.deletions;k===null?(y.deletions=[g],y.flags|=16):k.push(g)}}function n(y,g){if(!t)return null;for(;g!==null;)e(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=hi(y,g),y.index=0,y.sibling=null,y}function o(y,g,k){return y.index=k,t?(k=y.alternate,k!==null?(k=k.index,k<g?(y.flags|=2,g):k):(y.flags|=2,g)):(y.flags|=1048576,g)}function s(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,g,k,x){return g===null||g.tag!==6?(g=lp(k,y.mode,x),g.return=y,g):(g=i(g,k),g.return=y,g)}function l(y,g,k,x){var R=k.type;return R===Ls?f(y,g,k.props.children,x,k.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qr&&Kv(R)===g.type)?(x=i(g,k.props),x.ref=Za(y,g,k),x.return=y,x):(x=Xc(k.type,k.key,k.props,null,y.mode,x),x.ref=Za(y,g,k),x.return=y,x)}function d(y,g,k,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==k.containerInfo||g.stateNode.implementation!==k.implementation?(g=up(k,y.mode,x),g.return=y,g):(g=i(g,k.children||[]),g.return=y,g)}function f(y,g,k,x,R){return g===null||g.tag!==7?(g=io(k,y.mode,x,R),g.return=y,g):(g=i(g,k),g.return=y,g)}function m(y,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return g=lp(""+g,y.mode,k),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case sc:return k=Xc(g.type,g.key,g.props,null,y.mode,k),k.ref=Za(y,null,g),k.return=y,k;case Cs:return g=up(g,y.mode,k),g.return=y,g;case qr:var x=g._init;return m(y,x(g._payload),k)}if(sl(g)||qa(g))return g=io(g,y.mode,k,null),g.return=y,g;yc(y,g)}return null}function E(y,g,k,x){var R=g!==null?g.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return R!==null?null:a(y,g,""+k,x);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case sc:return k.key===R?l(y,g,k,x):null;case Cs:return k.key===R?d(y,g,k,x):null;case qr:return R=k._init,E(y,g,R(k._payload),x)}if(sl(k)||qa(k))return R!==null?null:f(y,g,k,x,null);yc(y,k)}return null}function _(y,g,k,x,R){if(typeof x=="string"&&x!==""||typeof x=="number")return y=y.get(k)||null,a(g,y,""+x,R);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case sc:return y=y.get(x.key===null?k:x.key)||null,l(g,y,x,R);case Cs:return y=y.get(x.key===null?k:x.key)||null,d(g,y,x,R);case qr:var N=x._init;return _(y,g,k,N(x._payload),R)}if(sl(x)||qa(x))return y=y.get(k)||null,f(g,y,x,R,null);yc(g,x)}return null}function T(y,g,k,x){for(var R=null,N=null,w=g,I=g=0,P=null;w!==null&&I<k.length;I++){w.index>I?(P=w,w=null):P=w.sibling;var b=E(y,w,k[I],x);if(b===null){w===null&&(w=P);break}t&&w&&b.alternate===null&&e(y,w),g=o(b,g,I),N===null?R=b:N.sibling=b,N=b,w=P}if(I===k.length)return n(y,w),We&&Hi(y,I),R;if(w===null){for(;I<k.length;I++)w=m(y,k[I],x),w!==null&&(g=o(w,g,I),N===null?R=w:N.sibling=w,N=w);return We&&Hi(y,I),R}for(w=r(y,w);I<k.length;I++)P=_(w,y,I,k[I],x),P!==null&&(t&&P.alternate!==null&&w.delete(P.key===null?I:P.key),g=o(P,g,I),N===null?R=P:N.sibling=P,N=P);return t&&w.forEach(function(j){return e(y,j)}),We&&Hi(y,I),R}function A(y,g,k,x){var R=qa(k);if(typeof R!="function")throw Error(H(150));if(k=R.call(k),k==null)throw Error(H(151));for(var N=R=null,w=g,I=g=0,P=null,b=k.next();w!==null&&!b.done;I++,b=k.next()){w.index>I?(P=w,w=null):P=w.sibling;var j=E(y,w,b.value,x);if(j===null){w===null&&(w=P);break}t&&w&&j.alternate===null&&e(y,w),g=o(j,g,I),N===null?R=j:N.sibling=j,N=j,w=P}if(b.done)return n(y,w),We&&Hi(y,I),R;if(w===null){for(;!b.done;I++,b=k.next())b=m(y,b.value,x),b!==null&&(g=o(b,g,I),N===null?R=b:N.sibling=b,N=b);return We&&Hi(y,I),R}for(w=r(y,w);!b.done;I++,b=k.next())b=_(w,y,I,b.value,x),b!==null&&(t&&b.alternate!==null&&w.delete(b.key===null?I:b.key),g=o(b,g,I),N===null?R=b:N.sibling=b,N=b);return t&&w.forEach(function(O){return e(y,O)}),We&&Hi(y,I),R}function S(y,g,k,x){if(typeof k=="object"&&k!==null&&k.type===Ls&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case sc:e:{for(var R=k.key,N=g;N!==null;){if(N.key===R){if(R=k.type,R===Ls){if(N.tag===7){n(y,N.sibling),g=i(N,k.props.children),g.return=y,y=g;break e}}else if(N.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qr&&Kv(R)===N.type){n(y,N.sibling),g=i(N,k.props),g.ref=Za(y,N,k),g.return=y,y=g;break e}n(y,N);break}else e(y,N);N=N.sibling}k.type===Ls?(g=io(k.props.children,y.mode,x,k.key),g.return=y,y=g):(x=Xc(k.type,k.key,k.props,null,y.mode,x),x.ref=Za(y,g,k),x.return=y,y=x)}return s(y);case Cs:e:{for(N=k.key;g!==null;){if(g.key===N)if(g.tag===4&&g.stateNode.containerInfo===k.containerInfo&&g.stateNode.implementation===k.implementation){n(y,g.sibling),g=i(g,k.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else e(y,g);g=g.sibling}g=up(k,y.mode,x),g.return=y,y=g}return s(y);case qr:return N=k._init,S(y,g,N(k._payload),x)}if(sl(k))return T(y,g,k,x);if(qa(k))return A(y,g,k,x);yc(y,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,g!==null&&g.tag===6?(n(y,g.sibling),g=i(g,k),g.return=y,y=g):(n(y,g),g=lp(k,y.mode,x),g.return=y,y=g),s(y)):n(y,g)}return S}var na=pw(!0),mw=pw(!1),Ld=Ci(null),Ad=null,Os=null,L0=null;function A0(){L0=Os=Ad=null}function P0(t){var e=Ld.current;Ve(Ld),t._currentValue=e}function wm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qs(t,e){Ad=t,L0=Os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Xt=!0),t.firstContext=null)}function Tn(t){var e=t._currentValue;if(L0!==t)if(t={context:t,memoizedValue:e,next:null},Os===null){if(Ad===null)throw Error(H(308));Os=t,Ad.dependencies={lanes:0,firstContext:t}}else Os=Os.next=t;return e}var Xi=null;function R0(t){Xi===null?Xi=[t]:Xi.push(t)}function gw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,R0(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ar(t,r)}function Ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yr=!1;function b0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ui(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ar(t,n)}return i=r.interleaved,i===null?(e.next=e,R0(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ar(t,n)}function qc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,y0(t,n)}}function Qv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pd(t,e,n,r){var i=t.updateQueue;Yr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,d=l.next;l.next=null,s===null?o=d:s.next=d,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=d:a.next=d,f.lastBaseUpdate=l))}if(o!==null){var m=i.baseState;s=0,f=d=l=null,a=o;do{var E=a.lane,_=a.eventTime;if((r&E)===E){f!==null&&(f=f.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,A=a;switch(E=e,_=n,A.tag){case 1:if(T=A.payload,typeof T=="function"){m=T.call(_,m,E);break e}m=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=A.payload,E=typeof T=="function"?T.call(_,m,E):T,E==null)break e;m=Be({},m,E);break e;case 2:Yr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,E=i.effects,E===null?i.effects=[a]:E.push(a))}else _={eventTime:_,lane:E,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(d=f=_,l=m):f=f.next=_,s|=E;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;E=a,a=E.next,E.next=null,i.lastBaseUpdate=E,i.shared.pending=null}}while(!0);if(f===null&&(l=m),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);fo|=s,t.lanes=s,t.memoizedState=m}}function Zv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var Su={},er=Ci(Su),Yl=Ci(Su),Gl=Ci(Su);function Ji(t){if(t===Su)throw Error(H(174));return t}function j0(t,e){switch(Re(Gl,e),Re(Yl,t),Re(er,Su),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nm(e,t)}Ve(er),Re(er,e)}function ra(){Ve(er),Ve(Yl),Ve(Gl)}function vw(t){Ji(Gl.current);var e=Ji(er.current),n=nm(e,t.type);e!==n&&(Re(Yl,t),Re(er,n))}function N0(t){Yl.current===t&&(Ve(er),Ve(Yl))}var $e=Ci(0);function Rd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var np=[];function M0(){for(var t=0;t<np.length;t++)np[t]._workInProgressVersionPrimary=null;np.length=0}var Yc=Mr.ReactCurrentDispatcher,rp=Mr.ReactCurrentBatchConfig,ho=0,ze=null,at=null,dt=null,bd=!1,xl=!1,Kl=0,FC=0;function At(){throw Error(H(321))}function O0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function D0(t,e,n,r,i,o){if(ho=o,ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yc.current=t===null||t.memoizedState===null?zC:BC,t=n(r,i),xl){o=0;do{if(xl=!1,Kl=0,25<=o)throw Error(H(301));o+=1,dt=at=null,e.updateQueue=null,Yc.current=HC,t=n(r,i)}while(xl)}if(Yc.current=jd,e=at!==null&&at.next!==null,ho=0,dt=at=ze=null,bd=!1,e)throw Error(H(300));return t}function V0(){var t=Kl!==0;return Kl=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?ze.memoizedState=dt=t:dt=dt.next=t,dt}function In(){if(at===null){var t=ze.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var e=dt===null?ze.memoizedState:dt.next;if(e!==null)dt=e,at=t;else{if(t===null)throw Error(H(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},dt===null?ze.memoizedState=dt=t:dt=dt.next=t}return dt}function Ql(t,e){return typeof e=="function"?e(t):e}function ip(t){var e=In(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=at,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,d=o;do{var f=d.lane;if((ho&f)===f)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(a=l=m,s=r):l=l.next=m,ze.lanes|=f,fo|=f}d=d.next}while(d!==null&&d!==o);l===null?s=r:l.next=a,$n(r,e.memoizedState)||(Xt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,ze.lanes|=o,fo|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function op(t){var e=In(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);$n(o,e.memoizedState)||(Xt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function _w(){}function kw(t,e){var n=ze,r=In(),i=e(),o=!$n(r.memoizedState,i);if(o&&(r.memoizedState=i,Xt=!0),r=r.queue,F0(xw.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,Zl(9,ww.bind(null,n,r,i,e),void 0,null),ft===null)throw Error(H(349));ho&30||Ew(n,e,i)}return i}function Ew(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ww(t,e,n,r){e.value=n,e.getSnapshot=r,Tw(e)&&Iw(t)}function xw(t,e,n){return n(function(){Tw(e)&&Iw(t)})}function Tw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function Iw(t){var e=Ar(t,1);e!==null&&Un(e,t,1,-1)}function Xv(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ql,lastRenderedState:t},e.queue=t,t=t.dispatch=$C.bind(null,ze,t),[e.memoizedState,t]}function Zl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Sw(){return In().memoizedState}function Gc(t,e,n,r){var i=Gn();ze.flags|=t,i.memoizedState=Zl(1|e,n,void 0,r===void 0?null:r)}function Ch(t,e,n,r){var i=In();r=r===void 0?null:r;var o=void 0;if(at!==null){var s=at.memoizedState;if(o=s.destroy,r!==null&&O0(r,s.deps)){i.memoizedState=Zl(e,n,o,r);return}}ze.flags|=t,i.memoizedState=Zl(1|e,n,o,r)}function Jv(t,e){return Gc(8390656,8,t,e)}function F0(t,e){return Ch(2048,8,t,e)}function Cw(t,e){return Ch(4,2,t,e)}function Lw(t,e){return Ch(4,4,t,e)}function Aw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Pw(t,e,n){return n=n!=null?n.concat([t]):null,Ch(4,4,Aw.bind(null,e,t),n)}function U0(){}function Rw(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&O0(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function bw(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&O0(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function jw(t,e,n){return ho&21?($n(n,e)||(n=VE(),ze.lanes|=n,fo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Xt=!0),t.memoizedState=n)}function UC(t,e){var n=Ce;Ce=n!==0&&4>n?n:4,t(!0);var r=rp.transition;rp.transition={};try{t(!1),e()}finally{Ce=n,rp.transition=r}}function Nw(){return In().memoizedState}function WC(t,e,n){var r=di(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mw(t))Ow(e,n);else if(n=gw(t,e,n,r),n!==null){var i=Bt();Un(n,t,r,i),Dw(n,e,r)}}function $C(t,e,n){var r=di(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mw(t))Ow(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,$n(a,s)){var l=e.interleaved;l===null?(i.next=i,R0(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=gw(t,e,i,r),n!==null&&(i=Bt(),Un(n,t,r,i),Dw(n,e,r))}}function Mw(t){var e=t.alternate;return t===ze||e!==null&&e===ze}function Ow(t,e){xl=bd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,y0(t,n)}}var jd={readContext:Tn,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useInsertionEffect:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useMutableSource:At,useSyncExternalStore:At,useId:At,unstable_isNewReconciler:!1},zC={readContext:Tn,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:Jv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gc(4194308,4,Aw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gc(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=WC.bind(null,ze,t),[r.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:Xv,useDebugValue:U0,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=Xv(!1),e=t[0];return t=UC.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ze,i=Gn();if(We){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),ft===null)throw Error(H(349));ho&30||Ew(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Jv(xw.bind(null,r,o,t),[t]),r.flags|=2048,Zl(9,ww.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Gn(),e=ft.identifierPrefix;if(We){var n=_r,r=vr;n=(r&~(1<<32-Fn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Kl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},BC={readContext:Tn,useCallback:Rw,useContext:Tn,useEffect:F0,useImperativeHandle:Pw,useInsertionEffect:Cw,useLayoutEffect:Lw,useMemo:bw,useReducer:ip,useRef:Sw,useState:function(){return ip(Ql)},useDebugValue:U0,useDeferredValue:function(t){var e=In();return jw(e,at.memoizedState,t)},useTransition:function(){var t=ip(Ql)[0],e=In().memoizedState;return[t,e]},useMutableSource:_w,useSyncExternalStore:kw,useId:Nw,unstable_isNewReconciler:!1},HC={readContext:Tn,useCallback:Rw,useContext:Tn,useEffect:F0,useImperativeHandle:Pw,useInsertionEffect:Cw,useLayoutEffect:Lw,useMemo:bw,useReducer:op,useRef:Sw,useState:function(){return op(Ql)},useDebugValue:U0,useDeferredValue:function(t){var e=In();return at===null?e.memoizedState=t:jw(e,at.memoizedState,t)},useTransition:function(){var t=op(Ql)[0],e=In().memoizedState;return[t,e]},useMutableSource:_w,useSyncExternalStore:kw,useId:Nw,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=Be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lh={isMounted:function(t){return(t=t._reactInternals)?To(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Bt(),i=di(t),o=Tr(r,i);o.payload=e,n!=null&&(o.callback=n),e=ui(t,o,i),e!==null&&(Un(e,t,i,r),qc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Bt(),i=di(t),o=Tr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=ui(t,o,i),e!==null&&(Un(e,t,i,r),qc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Bt(),r=di(t),i=Tr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ui(t,i,r),e!==null&&(Un(e,t,r,n),qc(e,t,r))}};function e2(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!zl(n,r)||!zl(i,o):!0}function Vw(t,e,n){var r=!1,i=Ei,o=e.contextType;return typeof o=="object"&&o!==null?o=Tn(o):(i=nn(e)?uo:Mt.current,r=e.contextTypes,o=(r=r!=null)?ea(t,i):Ei),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function t2(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Lh.enqueueReplaceState(e,e.state,null)}function Tm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},b0(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Tn(o):(o=nn(e)?uo:Mt.current,i.context=ea(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(xm(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Lh.enqueueReplaceState(i,i.state,null),Pd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ia(t,e){try{var n="",r=e;do n+=_6(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function sp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Im(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qC=typeof WeakMap=="function"?WeakMap:Map;function Fw(t,e,n){n=Tr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Md||(Md=!0,Mm=r),Im(t,e)},n}function Uw(t,e,n){n=Tr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Im(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Im(t,e),typeof r!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function n2(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new qC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=s4.bind(null,t,e,n),e.then(t,t))}function r2(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function i2(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tr(-1,1),e.tag=2,ui(n,e,1))),n.lanes|=1),t)}var YC=Mr.ReactCurrentOwner,Xt=!1;function $t(t,e,n,r){e.child=t===null?mw(e,null,n,r):na(e,t.child,n,r)}function o2(t,e,n,r,i){n=n.render;var o=e.ref;return qs(e,i),r=D0(t,e,n,r,o,i),n=V0(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pr(t,e,i)):(We&&n&&I0(e),e.flags|=1,$t(t,e,r,i),e.child)}function s2(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!G0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Ww(t,e,o,r,i)):(t=Xc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:zl,n(s,r)&&t.ref===e.ref)return Pr(t,e,i)}return e.flags|=1,t=hi(o,r),t.ref=e.ref,t.return=e,e.child=t}function Ww(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(zl(o,r)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Xt=!0);else return e.lanes=t.lanes,Pr(t,e,i)}return Sm(t,e,n,r,i)}function $w(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(Vs,un),un|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Re(Vs,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Re(Vs,un),un|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Re(Vs,un),un|=r;return $t(t,e,i,n),e.child}function zw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sm(t,e,n,r,i){var o=nn(n)?uo:Mt.current;return o=ea(e,o),qs(e,i),n=D0(t,e,n,r,o,i),r=V0(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pr(t,e,i)):(We&&r&&I0(e),e.flags|=1,$t(t,e,n,i),e.child)}function a2(t,e,n,r,i){if(nn(n)){var o=!0;Id(e)}else o=!1;if(qs(e,i),e.stateNode===null)Kc(t,e),Vw(e,n,r),Tm(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=Tn(d):(d=nn(n)?uo:Mt.current,d=ea(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==d)&&t2(e,s,r,d),Yr=!1;var E=e.memoizedState;s.state=E,Pd(e,r,s,i),l=e.memoizedState,a!==r||E!==l||tn.current||Yr?(typeof f=="function"&&(xm(e,n,f,r),l=e.memoizedState),(a=Yr||e2(e,n,a,r,E,l,d))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=d,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,yw(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:jn(e.type,a),s.props=d,m=e.pendingProps,E=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Tn(l):(l=nn(n)?uo:Mt.current,l=ea(e,l));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||E!==l)&&t2(e,s,r,l),Yr=!1,E=e.memoizedState,s.state=E,Pd(e,r,s,i);var T=e.memoizedState;a!==m||E!==T||tn.current||Yr?(typeof _=="function"&&(xm(e,n,_,r),T=e.memoizedState),(d=Yr||e2(e,n,d,r,E,T,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,T,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,T,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),s.props=r,s.state=T,s.context=l,r=d):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),r=!1)}return Cm(t,e,n,r,o,i)}function Cm(t,e,n,r,i,o){zw(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&qv(e,n,!1),Pr(t,e,o);r=e.stateNode,YC.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=na(e,t.child,null,o),e.child=na(e,null,a,o)):$t(t,e,a,o),e.memoizedState=r.state,i&&qv(e,n,!0),e.child}function Bw(t){var e=t.stateNode;e.pendingContext?Hv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hv(t,e.context,!1),j0(t,e.containerInfo)}function l2(t,e,n,r,i){return ta(),C0(i),e.flags|=256,$t(t,e,n,r),e.child}var Lm={dehydrated:null,treeContext:null,retryLane:0};function Am(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hw(t,e,n){var r=e.pendingProps,i=$e.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Re($e,i&1),t===null)return Em(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Rh(s,r,0,null),t=io(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Am(n),e.memoizedState=Lm,t):W0(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return GC(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=hi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=hi(a,o):(o=io(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Am(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Lm,r}return o=t.child,t=o.sibling,r=hi(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function W0(t,e){return e=Rh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vc(t,e,n,r){return r!==null&&C0(r),na(e,t.child,null,n),t=W0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function GC(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=sp(Error(H(422))),vc(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Rh({mode:"visible",children:r.children},i,0,null),o=io(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&na(e,t.child,null,s),e.child.memoizedState=Am(s),e.memoizedState=Lm,o);if(!(e.mode&1))return vc(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(H(419)),r=sp(o,r,void 0),vc(t,e,s,r)}if(a=(s&t.childLanes)!==0,Xt||a){if(r=ft,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ar(t,i),Un(r,t,i,-1))}return Y0(),r=sp(Error(H(421))),vc(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=a4.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,cn=li(i.nextSibling),hn=e,We=!0,Mn=null,t!==null&&(vn[_n++]=vr,vn[_n++]=_r,vn[_n++]=co,vr=t.id,_r=t.overflow,co=e),e=W0(e,r.children),e.flags|=4096,e)}function u2(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),wm(t.return,e,n)}function ap(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function qw(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if($t(t,e,r.children,n),r=$e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&u2(t,n,e);else if(t.tag===19)u2(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Re($e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Rd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ap(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Rd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ap(e,!0,n,null,o);break;case"together":ap(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=hi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function KC(t,e,n){switch(e.tag){case 3:Bw(e),ta();break;case 5:vw(e);break;case 1:nn(e.type)&&Id(e);break;case 4:j0(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Re(Ld,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Re($e,$e.current&1),e.flags|=128,null):n&e.child.childLanes?Hw(t,e,n):(Re($e,$e.current&1),t=Pr(t,e,n),t!==null?t.sibling:null);Re($e,$e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return qw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Re($e,$e.current),r)break;return null;case 22:case 23:return e.lanes=0,$w(t,e,n)}return Pr(t,e,n)}var Yw,Pm,Gw,Kw;Yw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pm=function(){};Gw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ji(er.current);var o=null;switch(n){case"input":i=Xp(t,i),r=Xp(t,r),o=[];break;case"select":i=Be({},i,{value:void 0}),r=Be({},r,{value:void 0}),o=[];break;case"textarea":i=tm(t,i),r=tm(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=xd)}rm(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ol.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var l=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&l!==a&&(l!=null||a!=null))if(d==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ol.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&Me("scroll",t),o||a===l||(o=[])):(o=o||[]).push(d,l))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};Kw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Xa(t,e){if(!We)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function QC(t,e,n){var r=e.pendingProps;switch(S0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(e),null;case 1:return nn(e.type)&&Td(),Pt(e),null;case 3:return r=e.stateNode,ra(),Ve(tn),Ve(Mt),M0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(gc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mn!==null&&(Vm(Mn),Mn=null))),Pm(t,e),Pt(e),null;case 5:N0(e);var i=Ji(Gl.current);if(n=e.type,t!==null&&e.stateNode!=null)Gw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return Pt(e),null}if(t=Ji(er.current),gc(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Qn]=e,r[ql]=o,t=(e.mode&1)!==0,n){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(i=0;i<ll.length;i++)Me(ll[i],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":vv(r,o),Me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Me("invalid",r);break;case"textarea":kv(r,o),Me("invalid",r)}rm(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&mc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&mc(r.textContent,a,t),i=["children",""+a]):Ol.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Me("scroll",r)}switch(n){case"input":ac(r),_v(r,o,!0);break;case"textarea":ac(r),Ev(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=xd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Qn]=e,t[ql]=r,Yw(t,e,!1,!1),e.stateNode=t;e:{switch(s=im(n,r),n){case"dialog":Me("cancel",t),Me("close",t),i=r;break;case"iframe":case"object":case"embed":Me("load",t),i=r;break;case"video":case"audio":for(i=0;i<ll.length;i++)Me(ll[i],t);i=r;break;case"source":Me("error",t),i=r;break;case"img":case"image":case"link":Me("error",t),Me("load",t),i=r;break;case"details":Me("toggle",t),i=r;break;case"input":vv(t,r),i=Xp(t,r),Me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Be({},r,{value:void 0}),Me("invalid",t);break;case"textarea":kv(t,r),i=tm(t,r),Me("invalid",t);break;default:i=r}rm(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?SE(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&TE(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Dl(t,l):typeof l=="number"&&Dl(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ol.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Me("scroll",t):l!=null&&d0(t,o,l,s))}switch(n){case"input":ac(t),_v(t,r,!1);break;case"textarea":ac(t),Ev(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ki(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?$s(t,!!r.multiple,o,!1):r.defaultValue!=null&&$s(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=xd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pt(e),null;case 6:if(t&&e.stateNode!=null)Kw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=Ji(Gl.current),Ji(er.current),gc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qn]=e,(o=r.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:mc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mc(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qn]=e,e.stateNode=r}return Pt(e),null;case 13:if(Ve($e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(We&&cn!==null&&e.mode&1&&!(e.flags&128))fw(),ta(),e.flags|=98560,o=!1;else if(o=gc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(H(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(H(317));o[Qn]=e}else ta(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pt(e),o=!1}else Mn!==null&&(Vm(Mn),Mn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||$e.current&1?ut===0&&(ut=3):Y0())),e.updateQueue!==null&&(e.flags|=4),Pt(e),null);case 4:return ra(),Pm(t,e),t===null&&Bl(e.stateNode.containerInfo),Pt(e),null;case 10:return P0(e.type._context),Pt(e),null;case 17:return nn(e.type)&&Td(),Pt(e),null;case 19:if(Ve($e),o=e.memoizedState,o===null)return Pt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Xa(o,!1);else{if(ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Rd(t),s!==null){for(e.flags|=128,Xa(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Re($e,$e.current&1|2),e.child}t=t.sibling}o.tail!==null&&Xe()>oa&&(e.flags|=128,r=!0,Xa(o,!1),e.lanes=4194304)}else{if(!r)if(t=Rd(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xa(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!We)return Pt(e),null}else 2*Xe()-o.renderingStartTime>oa&&n!==1073741824&&(e.flags|=128,r=!0,Xa(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Xe(),e.sibling=null,n=$e.current,Re($e,r?n&1|2:n&1),e):(Pt(e),null);case 22:case 23:return q0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?un&1073741824&&(Pt(e),e.subtreeFlags&6&&(e.flags|=8192)):Pt(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function ZC(t,e){switch(S0(e),e.tag){case 1:return nn(e.type)&&Td(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ra(),Ve(tn),Ve(Mt),M0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return N0(e),null;case 13:if(Ve($e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));ta()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ve($e),null;case 4:return ra(),null;case 10:return P0(e.type._context),null;case 22:case 23:return q0(),null;case 24:return null;default:return null}}var _c=!1,jt=!1,XC=typeof WeakSet=="function"?WeakSet:Set,Z=null;function Ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ke(t,e,r)}else n.current=null}function Rm(t,e,n){try{n()}catch(r){Ke(t,e,r)}}var c2=!1;function JC(t,e){if(pm=kd,t=ew(),T0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,d=0,f=0,m=t,E=null;t:for(;;){for(var _;m!==n||i!==0&&m.nodeType!==3||(a=s+i),m!==o||r!==0&&m.nodeType!==3||(l=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(_=m.firstChild)!==null;)E=m,m=_;for(;;){if(m===t)break t;if(E===n&&++d===i&&(a=s),E===o&&++f===r&&(l=s),(_=m.nextSibling)!==null)break;m=E,E=m.parentNode}m=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mm={focusedElem:t,selectionRange:n},kd=!1,Z=e;Z!==null;)if(e=Z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Z=t;else for(;Z!==null;){e=Z;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var A=T.memoizedProps,S=T.memoizedState,y=e.stateNode,g=y.getSnapshotBeforeUpdate(e.elementType===e.type?A:jn(e.type,A),S);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(x){Ke(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Z=t;break}Z=e.return}return T=c2,c2=!1,T}function Tl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Rm(e,n,o)}i=i.next}while(i!==r)}}function Ah(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qw(t){var e=t.alternate;e!==null&&(t.alternate=null,Qw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[ql],delete e[vm],delete e[MC],delete e[OC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zw(t){return t.tag===5||t.tag===3||t.tag===4}function d2(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xd));else if(r!==4&&(t=t.child,t!==null))for(jm(t,e,n),t=t.sibling;t!==null;)jm(t,e,n),t=t.sibling}function Nm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nm(t,e,n),t=t.sibling;t!==null;)Nm(t,e,n),t=t.sibling}var gt=null,Nn=!1;function Ur(t,e,n){for(n=n.child;n!==null;)Xw(t,e,n),n=n.sibling}function Xw(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(Eh,n)}catch{}switch(n.tag){case 5:jt||Ds(n,e);case 6:var r=gt,i=Nn;gt=null,Ur(t,e,n),gt=r,Nn=i,gt!==null&&(Nn?(t=gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):gt.removeChild(n.stateNode));break;case 18:gt!==null&&(Nn?(t=gt,n=n.stateNode,t.nodeType===8?ep(t.parentNode,n):t.nodeType===1&&ep(t,n),Wl(t)):ep(gt,n.stateNode));break;case 4:r=gt,i=Nn,gt=n.stateNode.containerInfo,Nn=!0,Ur(t,e,n),gt=r,Nn=i;break;case 0:case 11:case 14:case 15:if(!jt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Rm(n,e,s),i=i.next}while(i!==r)}Ur(t,e,n);break;case 1:if(!jt&&(Ds(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ke(n,e,a)}Ur(t,e,n);break;case 21:Ur(t,e,n);break;case 22:n.mode&1?(jt=(r=jt)||n.memoizedState!==null,Ur(t,e,n),jt=r):Ur(t,e,n);break;default:Ur(t,e,n)}}function h2(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new XC),e.forEach(function(r){var i=l4.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:gt=a.stateNode,Nn=!1;break e;case 3:gt=a.stateNode.containerInfo,Nn=!0;break e;case 4:gt=a.stateNode.containerInfo,Nn=!0;break e}a=a.return}if(gt===null)throw Error(H(160));Xw(o,s,i),gt=null,Nn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){Ke(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jw(e,t),e=e.sibling}function Jw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Yn(t),r&4){try{Tl(3,t,t.return),Ah(3,t)}catch(A){Ke(t,t.return,A)}try{Tl(5,t,t.return)}catch(A){Ke(t,t.return,A)}}break;case 1:Pn(e,t),Yn(t),r&512&&n!==null&&Ds(n,n.return);break;case 5:if(Pn(e,t),Yn(t),r&512&&n!==null&&Ds(n,n.return),t.flags&32){var i=t.stateNode;try{Dl(i,"")}catch(A){Ke(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&EE(i,o),im(a,s);var d=im(a,o);for(s=0;s<l.length;s+=2){var f=l[s],m=l[s+1];f==="style"?SE(i,m):f==="dangerouslySetInnerHTML"?TE(i,m):f==="children"?Dl(i,m):d0(i,f,m,d)}switch(a){case"input":Jp(i,o);break;case"textarea":wE(i,o);break;case"select":var E=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var _=o.value;_!=null?$s(i,!!o.multiple,_,!1):E!==!!o.multiple&&(o.defaultValue!=null?$s(i,!!o.multiple,o.defaultValue,!0):$s(i,!!o.multiple,o.multiple?[]:"",!1))}i[ql]=o}catch(A){Ke(t,t.return,A)}}break;case 6:if(Pn(e,t),Yn(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(A){Ke(t,t.return,A)}}break;case 3:if(Pn(e,t),Yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wl(e.containerInfo)}catch(A){Ke(t,t.return,A)}break;case 4:Pn(e,t),Yn(t);break;case 13:Pn(e,t),Yn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(B0=Xe())),r&4&&h2(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(d=jt)||f,Pn(e,t),jt=d):Pn(e,t),Yn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(Z=t,f=t.child;f!==null;){for(m=Z=f;Z!==null;){switch(E=Z,_=E.child,E.tag){case 0:case 11:case 14:case 15:Tl(4,E,E.return);break;case 1:Ds(E,E.return);var T=E.stateNode;if(typeof T.componentWillUnmount=="function"){r=E,n=E.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(A){Ke(r,n,A)}}break;case 5:Ds(E,E.return);break;case 22:if(E.memoizedState!==null){p2(m);continue}}_!==null?(_.return=E,Z=_):p2(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,l=m.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=IE("display",s))}catch(A){Ke(t,t.return,A)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(A){Ke(t,t.return,A)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Pn(e,t),Yn(t),r&4&&h2(t);break;case 21:break;default:Pn(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Zw(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Dl(i,""),r.flags&=-33);var o=d2(t);Nm(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=d2(t);jm(t,a,s);break;default:throw Error(H(161))}}catch(l){Ke(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function e4(t,e,n){Z=t,ex(t)}function ex(t,e,n){for(var r=(t.mode&1)!==0;Z!==null;){var i=Z,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||_c;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||jt;a=_c;var d=jt;if(_c=s,(jt=l)&&!d)for(Z=i;Z!==null;)s=Z,l=s.child,s.tag===22&&s.memoizedState!==null?m2(i):l!==null?(l.return=s,Z=l):m2(i);for(;o!==null;)Z=o,ex(o),o=o.sibling;Z=i,_c=a,jt=d}f2(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Z=o):f2(t)}}function f2(t){for(;Z!==null;){var e=Z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Ah(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!jt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Zv(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zv(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Wl(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}jt||e.flags&512&&bm(e)}catch(E){Ke(e,e.return,E)}}if(e===t){Z=null;break}if(n=e.sibling,n!==null){n.return=e.return,Z=n;break}Z=e.return}}function p2(t){for(;Z!==null;){var e=Z;if(e===t){Z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Z=n;break}Z=e.return}}function m2(t){for(;Z!==null;){var e=Z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ah(4,e)}catch(l){Ke(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ke(e,i,l)}}var o=e.return;try{bm(e)}catch(l){Ke(e,o,l)}break;case 5:var s=e.return;try{bm(e)}catch(l){Ke(e,s,l)}}}catch(l){Ke(e,e.return,l)}if(e===t){Z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Z=a;break}Z=e.return}}var t4=Math.ceil,Nd=Mr.ReactCurrentDispatcher,$0=Mr.ReactCurrentOwner,wn=Mr.ReactCurrentBatchConfig,ve=0,ft=null,nt=null,_t=0,un=0,Vs=Ci(0),ut=0,Xl=null,fo=0,Ph=0,z0=0,Il=null,Qt=null,B0=0,oa=1/0,pr=null,Md=!1,Mm=null,ci=null,kc=!1,ei=null,Od=0,Sl=0,Om=null,Qc=-1,Zc=0;function Bt(){return ve&6?Xe():Qc!==-1?Qc:Qc=Xe()}function di(t){return t.mode&1?ve&2&&_t!==0?_t&-_t:VC.transition!==null?(Zc===0&&(Zc=VE()),Zc):(t=Ce,t!==0||(t=window.event,t=t===void 0?16:HE(t.type)),t):1}function Un(t,e,n,r){if(50<Sl)throw Sl=0,Om=null,Error(H(185));xu(t,n,r),(!(ve&2)||t!==ft)&&(t===ft&&(!(ve&2)&&(Ph|=n),ut===4&&Kr(t,_t)),rn(t,r),n===1&&ve===0&&!(e.mode&1)&&(oa=Xe()+500,Sh&&Li()))}function rn(t,e){var n=t.callbackNode;V6(t,e);var r=_d(t,t===ft?_t:0);if(r===0)n!==null&&Tv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Tv(n),e===1)t.tag===0?DC(g2.bind(null,t)):cw(g2.bind(null,t)),jC(function(){!(ve&6)&&Li()}),n=null;else{switch(FE(r)){case 1:n=g0;break;case 4:n=OE;break;case 16:n=vd;break;case 536870912:n=DE;break;default:n=vd}n=lx(n,tx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tx(t,e){if(Qc=-1,Zc=0,ve&6)throw Error(H(327));var n=t.callbackNode;if(Ys()&&t.callbackNode!==n)return null;var r=_d(t,t===ft?_t:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Dd(t,r);else{e=r;var i=ve;ve|=2;var o=rx();(ft!==t||_t!==e)&&(pr=null,oa=Xe()+500,ro(t,e));do try{i4();break}catch(a){nx(t,a)}while(!0);A0(),Nd.current=o,ve=i,nt!==null?e=0:(ft=null,_t=0,e=ut)}if(e!==0){if(e===2&&(i=um(t),i!==0&&(r=i,e=Dm(t,i))),e===1)throw n=Xl,ro(t,0),Kr(t,r),rn(t,Xe()),n;if(e===6)Kr(t,r);else{if(i=t.current.alternate,!(r&30)&&!n4(i)&&(e=Dd(t,r),e===2&&(o=um(t),o!==0&&(r=o,e=Dm(t,o))),e===1))throw n=Xl,ro(t,0),Kr(t,r),rn(t,Xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:qi(t,Qt,pr);break;case 3:if(Kr(t,r),(r&130023424)===r&&(e=B0+500-Xe(),10<e)){if(_d(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ym(qi.bind(null,t,Qt,pr),e);break}qi(t,Qt,pr);break;case 4:if(Kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Fn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*t4(r/1960))-r,10<r){t.timeoutHandle=ym(qi.bind(null,t,Qt,pr),r);break}qi(t,Qt,pr);break;case 5:qi(t,Qt,pr);break;default:throw Error(H(329))}}}return rn(t,Xe()),t.callbackNode===n?tx.bind(null,t):null}function Dm(t,e){var n=Il;return t.current.memoizedState.isDehydrated&&(ro(t,e).flags|=256),t=Dd(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&Vm(e)),t}function Vm(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function n4(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!$n(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kr(t,e){for(e&=~z0,e&=~Ph,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fn(e),r=1<<n;t[n]=-1,e&=~r}}function g2(t){if(ve&6)throw Error(H(327));Ys();var e=_d(t,0);if(!(e&1))return rn(t,Xe()),null;var n=Dd(t,e);if(t.tag!==0&&n===2){var r=um(t);r!==0&&(e=r,n=Dm(t,r))}if(n===1)throw n=Xl,ro(t,0),Kr(t,e),rn(t,Xe()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qi(t,Qt,pr),rn(t,Xe()),null}function H0(t,e){var n=ve;ve|=1;try{return t(e)}finally{ve=n,ve===0&&(oa=Xe()+500,Sh&&Li())}}function po(t){ei!==null&&ei.tag===0&&!(ve&6)&&Ys();var e=ve;ve|=1;var n=wn.transition,r=Ce;try{if(wn.transition=null,Ce=1,t)return t()}finally{Ce=r,wn.transition=n,ve=e,!(ve&6)&&Li()}}function q0(){un=Vs.current,Ve(Vs)}function ro(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,bC(n)),nt!==null)for(n=nt.return;n!==null;){var r=n;switch(S0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Td();break;case 3:ra(),Ve(tn),Ve(Mt),M0();break;case 5:N0(r);break;case 4:ra();break;case 13:Ve($e);break;case 19:Ve($e);break;case 10:P0(r.type._context);break;case 22:case 23:q0()}n=n.return}if(ft=t,nt=t=hi(t.current,null),_t=un=e,ut=0,Xl=null,z0=Ph=fo=0,Qt=Il=null,Xi!==null){for(e=0;e<Xi.length;e++)if(n=Xi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Xi=null}return t}function nx(t,e){do{var n=nt;try{if(A0(),Yc.current=jd,bd){for(var r=ze.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bd=!1}if(ho=0,dt=at=ze=null,xl=!1,Kl=0,$0.current=null,n===null||n.return===null){ut=1,Xl=e,nt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=_t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var E=f.alternate;E?(f.updateQueue=E.updateQueue,f.memoizedState=E.memoizedState,f.lanes=E.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=r2(s);if(_!==null){_.flags&=-257,i2(_,s,a,o,e),_.mode&1&&n2(o,d,e),e=_,l=d;var T=e.updateQueue;if(T===null){var A=new Set;A.add(l),e.updateQueue=A}else T.add(l);break e}else{if(!(e&1)){n2(o,d,e),Y0();break e}l=Error(H(426))}}else if(We&&a.mode&1){var S=r2(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),i2(S,s,a,o,e),C0(ia(l,a));break e}}o=l=ia(l,a),ut!==4&&(ut=2),Il===null?Il=[o]:Il.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var y=Fw(o,l,e);Qv(o,y);break e;case 1:a=l;var g=o.type,k=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(ci===null||!ci.has(k)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=Uw(o,a,e);Qv(o,x);break e}}o=o.return}while(o!==null)}ox(n)}catch(R){e=R,nt===n&&n!==null&&(nt=n=n.return);continue}break}while(!0)}function rx(){var t=Nd.current;return Nd.current=jd,t===null?jd:t}function Y0(){(ut===0||ut===3||ut===2)&&(ut=4),ft===null||!(fo&268435455)&&!(Ph&268435455)||Kr(ft,_t)}function Dd(t,e){var n=ve;ve|=2;var r=rx();(ft!==t||_t!==e)&&(pr=null,ro(t,e));do try{r4();break}catch(i){nx(t,i)}while(!0);if(A0(),ve=n,Nd.current=r,nt!==null)throw Error(H(261));return ft=null,_t=0,ut}function r4(){for(;nt!==null;)ix(nt)}function i4(){for(;nt!==null&&!A6();)ix(nt)}function ix(t){var e=ax(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?ox(t):nt=e,$0.current=null}function ox(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ZC(n,e),n!==null){n.flags&=32767,nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ut=6,nt=null;return}}else if(n=QC(n,e,un),n!==null){nt=n;return}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);ut===0&&(ut=5)}function qi(t,e,n){var r=Ce,i=wn.transition;try{wn.transition=null,Ce=1,o4(t,e,n,r)}finally{wn.transition=i,Ce=r}return null}function o4(t,e,n,r){do Ys();while(ei!==null);if(ve&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(F6(t,o),t===ft&&(nt=ft=null,_t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kc||(kc=!0,lx(vd,function(){return Ys(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=wn.transition,wn.transition=null;var s=Ce;Ce=1;var a=ve;ve|=4,$0.current=null,JC(t,n),Jw(n,t),IC(mm),kd=!!pm,mm=pm=null,t.current=n,e4(n),P6(),ve=a,Ce=s,wn.transition=o}else t.current=n;if(kc&&(kc=!1,ei=t,Od=i),o=t.pendingLanes,o===0&&(ci=null),j6(n.stateNode),rn(t,Xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Md)throw Md=!1,t=Mm,Mm=null,t;return Od&1&&t.tag!==0&&Ys(),o=t.pendingLanes,o&1?t===Om?Sl++:(Sl=0,Om=t):Sl=0,Li(),null}function Ys(){if(ei!==null){var t=FE(Od),e=wn.transition,n=Ce;try{if(wn.transition=null,Ce=16>t?16:t,ei===null)var r=!1;else{if(t=ei,ei=null,Od=0,ve&6)throw Error(H(331));var i=ve;for(ve|=4,Z=t.current;Z!==null;){var o=Z,s=o.child;if(Z.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var d=a[l];for(Z=d;Z!==null;){var f=Z;switch(f.tag){case 0:case 11:case 15:Tl(8,f,o)}var m=f.child;if(m!==null)m.return=f,Z=m;else for(;Z!==null;){f=Z;var E=f.sibling,_=f.return;if(Qw(f),f===d){Z=null;break}if(E!==null){E.return=_,Z=E;break}Z=_}}}var T=o.alternate;if(T!==null){var A=T.child;if(A!==null){T.child=null;do{var S=A.sibling;A.sibling=null,A=S}while(A!==null)}}Z=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Z=s;else e:for(;Z!==null;){if(o=Z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Tl(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,Z=y;break e}Z=o.return}}var g=t.current;for(Z=g;Z!==null;){s=Z;var k=s.child;if(s.subtreeFlags&2064&&k!==null)k.return=s,Z=k;else e:for(s=g;Z!==null;){if(a=Z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ah(9,a)}}catch(R){Ke(a,a.return,R)}if(a===s){Z=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Z=x;break e}Z=a.return}}if(ve=i,Li(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(Eh,t)}catch{}r=!0}return r}finally{Ce=n,wn.transition=e}}return!1}function y2(t,e,n){e=ia(n,e),e=Fw(t,e,1),t=ui(t,e,1),e=Bt(),t!==null&&(xu(t,1,e),rn(t,e))}function Ke(t,e,n){if(t.tag===3)y2(t,t,n);else for(;e!==null;){if(e.tag===3){y2(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ci===null||!ci.has(r))){t=ia(n,t),t=Uw(e,t,1),e=ui(e,t,1),t=Bt(),e!==null&&(xu(e,1,t),rn(e,t));break}}e=e.return}}function s4(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Bt(),t.pingedLanes|=t.suspendedLanes&n,ft===t&&(_t&n)===n&&(ut===4||ut===3&&(_t&130023424)===_t&&500>Xe()-B0?ro(t,0):z0|=n),rn(t,e)}function sx(t,e){e===0&&(t.mode&1?(e=cc,cc<<=1,!(cc&130023424)&&(cc=4194304)):e=1);var n=Bt();t=Ar(t,e),t!==null&&(xu(t,e,n),rn(t,n))}function a4(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sx(t,n)}function l4(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),sx(t,n)}var ax;ax=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)Xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Xt=!1,KC(t,e,n);Xt=!!(t.flags&131072)}else Xt=!1,We&&e.flags&1048576&&dw(e,Cd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Kc(t,e),t=e.pendingProps;var i=ea(e,Mt.current);qs(e,n),i=D0(null,e,r,t,i,n);var o=V0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(r)?(o=!0,Id(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,b0(e),i.updater=Lh,e.stateNode=i,i._reactInternals=e,Tm(e,r,t,n),e=Cm(null,e,r,!0,o,n)):(e.tag=0,We&&o&&I0(e),$t(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Kc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=c4(r),t=jn(r,t),i){case 0:e=Sm(null,e,r,t,n);break e;case 1:e=a2(null,e,r,t,n);break e;case 11:e=o2(null,e,r,t,n);break e;case 14:e=s2(null,e,r,jn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),Sm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),a2(t,e,r,i,n);case 3:e:{if(Bw(e),t===null)throw Error(H(387));r=e.pendingProps,o=e.memoizedState,i=o.element,yw(t,e),Pd(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=ia(Error(H(423)),e),e=l2(t,e,r,n,i);break e}else if(r!==i){i=ia(Error(H(424)),e),e=l2(t,e,r,n,i);break e}else for(cn=li(e.stateNode.containerInfo.firstChild),hn=e,We=!0,Mn=null,n=mw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ta(),r===i){e=Pr(t,e,n);break e}$t(t,e,r,n)}e=e.child}return e;case 5:return vw(e),t===null&&Em(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,gm(r,i)?s=null:o!==null&&gm(r,o)&&(e.flags|=32),zw(t,e),$t(t,e,s,n),e.child;case 6:return t===null&&Em(e),null;case 13:return Hw(t,e,n);case 4:return j0(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=na(e,null,r,n):$t(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),o2(t,e,r,i,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Re(Ld,r._currentValue),r._currentValue=s,o!==null)if($n(o.value,s)){if(o.children===i.children&&!tn.current){e=Pr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Tr(-1,n&-n),l.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?l.next=l:(l.next=f.next,f.next=l),d.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),wm(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(H(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),wm(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}$t(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qs(e,n),i=Tn(i),r=r(i),e.flags|=1,$t(t,e,r,n),e.child;case 14:return r=e.type,i=jn(r,e.pendingProps),i=jn(r.type,i),s2(t,e,r,i,n);case 15:return Ww(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),Kc(t,e),e.tag=1,nn(r)?(t=!0,Id(e)):t=!1,qs(e,n),Vw(e,r,i),Tm(e,r,i,n),Cm(null,e,r,!0,t,n);case 19:return qw(t,e,n);case 22:return $w(t,e,n)}throw Error(H(156,e.tag))};function lx(t,e){return ME(t,e)}function u4(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,r){return new u4(t,e,n,r)}function G0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function c4(t){if(typeof t=="function")return G0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===f0)return 11;if(t===p0)return 14}return 2}function hi(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")G0(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Ls:return io(n.children,i,o,e);case h0:s=8,i|=8;break;case Gp:return t=kn(12,n,e,i|2),t.elementType=Gp,t.lanes=o,t;case Kp:return t=kn(13,n,e,i),t.elementType=Kp,t.lanes=o,t;case Qp:return t=kn(19,n,e,i),t.elementType=Qp,t.lanes=o,t;case vE:return Rh(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gE:s=10;break e;case yE:s=9;break e;case f0:s=11;break e;case p0:s=14;break e;case qr:s=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=kn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function io(t,e,n,r){return t=kn(7,t,r,e),t.lanes=n,t}function Rh(t,e,n,r){return t=kn(22,t,r,e),t.elementType=vE,t.lanes=n,t.stateNode={isHidden:!1},t}function lp(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function up(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function d4(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zf(0),this.expirationTimes=zf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function K0(t,e,n,r,i,o,s,a,l){return t=new d4(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=kn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},b0(o),t}function h4(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ux(t){if(!t)return Ei;t=t._reactInternals;e:{if(To(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(nn(n))return uw(t,n,e)}return e}function cx(t,e,n,r,i,o,s,a,l){return t=K0(n,r,!0,t,i,o,s,a,l),t.context=ux(null),n=t.current,r=Bt(),i=di(n),o=Tr(r,i),o.callback=e??null,ui(n,o,i),t.current.lanes=i,xu(t,i,r),rn(t,r),t}function bh(t,e,n,r){var i=e.current,o=Bt(),s=di(i);return n=ux(n),e.context===null?e.context=n:e.pendingContext=n,e=Tr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ui(i,e,s),t!==null&&(Un(t,i,s,o),qc(t,i,s)),s}function Vd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function v2(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Q0(t,e){v2(t,e),(t=t.alternate)&&v2(t,e)}function f4(){return null}var dx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Z0(t){this._internalRoot=t}jh.prototype.render=Z0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));bh(t,e,null,null)};jh.prototype.unmount=Z0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;po(function(){bh(null,t,null,null)}),e[Lr]=null}};function jh(t){this._internalRoot=t}jh.prototype.unstable_scheduleHydration=function(t){if(t){var e=$E();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gr.length&&e!==0&&e<Gr[n].priority;n++);Gr.splice(n,0,t),n===0&&BE(t)}};function X0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _2(){}function p4(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Vd(s);o.call(d)}}var s=cx(e,r,t,0,null,!1,!1,"",_2);return t._reactRootContainer=s,t[Lr]=s.current,Bl(t.nodeType===8?t.parentNode:t),po(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=Vd(l);a.call(d)}}var l=K0(t,0,!1,null,null,!1,!1,"",_2);return t._reactRootContainer=l,t[Lr]=l.current,Bl(t.nodeType===8?t.parentNode:t),po(function(){bh(e,l,n,r)}),l}function Mh(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Vd(s);a.call(l)}}bh(e,s,t,i)}else s=p4(n,e,t,i,r);return Vd(s)}UE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=al(e.pendingLanes);n!==0&&(y0(e,n|1),rn(e,Xe()),!(ve&6)&&(oa=Xe()+500,Li()))}break;case 13:po(function(){var r=Ar(t,1);if(r!==null){var i=Bt();Un(r,t,1,i)}}),Q0(t,1)}};v0=function(t){if(t.tag===13){var e=Ar(t,134217728);if(e!==null){var n=Bt();Un(e,t,134217728,n)}Q0(t,134217728)}};WE=function(t){if(t.tag===13){var e=di(t),n=Ar(t,e);if(n!==null){var r=Bt();Un(n,t,e,r)}Q0(t,e)}};$E=function(){return Ce};zE=function(t,e){var n=Ce;try{return Ce=t,e()}finally{Ce=n}};sm=function(t,e,n){switch(e){case"input":if(Jp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ih(r);if(!i)throw Error(H(90));kE(r),Jp(r,i)}}}break;case"textarea":wE(t,n);break;case"select":e=n.value,e!=null&&$s(t,!!n.multiple,e,!1)}};AE=H0;PE=po;var m4={usingClientEntryPoint:!1,Events:[Iu,bs,Ih,CE,LE,H0]},Ja={findFiberByHostInstance:Zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},g4={bundleType:Ja.bundleType,version:Ja.version,rendererPackageName:Ja.rendererPackageName,rendererConfig:Ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jE(t),t===null?null:t.stateNode},findFiberByHostInstance:Ja.findFiberByHostInstance||f4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{Eh=Ec.inject(g4),Jn=Ec}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m4;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!X0(e))throw Error(H(200));return h4(t,e,null,n)};mn.createRoot=function(t,e){if(!X0(t))throw Error(H(299));var n=!1,r="",i=dx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=K0(t,1,!1,null,null,n,!1,r,i),t[Lr]=e.current,Bl(t.nodeType===8?t.parentNode:t),new Z0(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=jE(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return po(t)};mn.hydrate=function(t,e,n){if(!Nh(e))throw Error(H(200));return Mh(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!X0(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=dx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=cx(e,null,t,1,n??null,i,!1,o,s),t[Lr]=e.current,Bl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new jh(e)};mn.render=function(t,e,n){if(!Nh(e))throw Error(H(200));return Mh(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!Nh(t))throw Error(H(40));return t._reactRootContainer?(po(function(){Mh(null,null,t,!1,function(){t._reactRootContainer=null,t[Lr]=null})}),!0):!1};mn.unstable_batchedUpdates=H0;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nh(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return Mh(t,e,n,!1,r)};mn.version="18.3.1-next-f1338f8080-20240426";function hx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hx)}catch(t){console.error(t)}}hx(),hE.exports=mn;var y4=hE.exports,fx,k2=y4;fx=k2.createRoot,k2.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jl(){return Jl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jl.apply(this,arguments)}var ti;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ti||(ti={}));const E2="popstate";function v4(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Fm("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Fd(i)}return k4(e,n,null,t)}function Je(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function px(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _4(){return Math.random().toString(36).substr(2,8)}function w2(t,e){return{usr:t.state,key:t.key,idx:e}}function Fm(t,e,n,r){return n===void 0&&(n=null),Jl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?wa(e):e,{state:n,key:e&&e.key||r||_4()})}function Fd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function wa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function k4(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=ti.Pop,l=null,d=f();d==null&&(d=0,s.replaceState(Jl({},s.state,{idx:d}),""));function f(){return(s.state||{idx:null}).idx}function m(){a=ti.Pop;let S=f(),y=S==null?null:S-d;d=S,l&&l({action:a,location:A.location,delta:y})}function E(S,y){a=ti.Push;let g=Fm(A.location,S,y);d=f()+1;let k=w2(g,d),x=A.createHref(g);try{s.pushState(k,"",x)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(x)}o&&l&&l({action:a,location:A.location,delta:1})}function _(S,y){a=ti.Replace;let g=Fm(A.location,S,y);d=f();let k=w2(g,d),x=A.createHref(g);s.replaceState(k,"",x),o&&l&&l({action:a,location:A.location,delta:0})}function T(S){let y=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof S=="string"?S:Fd(S);return g=g.replace(/ $/,"%20"),Je(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let A={get action(){return a},get location(){return t(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(E2,m),l=S,()=>{i.removeEventListener(E2,m),l=null}},createHref(S){return e(i,S)},createURL:T,encodeLocation(S){let y=T(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:E,replace:_,go(S){return s.go(S)}};return A}var x2;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(x2||(x2={}));function E4(t,e,n){return n===void 0&&(n="/"),w4(t,e,n)}function w4(t,e,n,r){let i=typeof e=="string"?wa(e):e,o=J0(i.pathname||"/",n);if(o==null)return null;let s=mx(t);x4(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let d=M4(o);a=b4(s[l],d)}return a}function mx(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Je(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let d=fi([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(Je(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),mx(o.children,e,f,d)),!(o.path==null&&!o.index)&&e.push({path:d,score:P4(d,o.index),routesMeta:f})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of gx(o.path))i(o,s,l)}),e}function gx(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=gx(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function x4(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:R4(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const T4=/^:[\w-]+$/,I4=3,S4=2,C4=1,L4=10,A4=-2,T2=t=>t==="*";function P4(t,e){let n=t.split("/"),r=n.length;return n.some(T2)&&(r+=A4),e&&(r+=S4),n.filter(i=>!T2(i)).reduce((i,o)=>i+(T4.test(o)?I4:o===""?C4:L4),r)}function R4(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function b4(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],d=a===r.length-1,f=o==="/"?e:e.slice(o.length)||"/",m=j4({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},f),E=l.route;if(!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:fi([o,m.pathname]),pathnameBase:F4(fi([o,m.pathnameBase])),route:E}),m.pathnameBase!=="/"&&(o=fi([o,m.pathnameBase]))}return s}function j4(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=N4(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,f,m)=>{let{paramName:E,isOptional:_}=f;if(E==="*"){let A=a[m]||"";s=o.slice(0,o.length-A.length).replace(/(.)\/+$/,"$1")}const T=a[m];return _&&!T?d[E]=void 0:d[E]=(T||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:t}}function N4(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),px(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function M4(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return px(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function J0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function O4(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?wa(t):t;return{pathname:n?n.startsWith("/")?n:D4(n,e):e,search:U4(r),hash:W4(i)}}function D4(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function cp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function V4(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function e1(t,e){let n=V4(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function t1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=wa(t):(i=Jl({},t),Je(!i.pathname||!i.pathname.includes("?"),cp("?","pathname","search",i)),Je(!i.pathname||!i.pathname.includes("#"),cp("#","pathname","hash",i)),Je(!i.search||!i.search.includes("#"),cp("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let m=e.length-1;if(!r&&s.startsWith("..")){let E=s.split("/");for(;E[0]==="..";)E.shift(),m-=1;i.pathname=E.join("/")}a=m>=0?e[m]:"/"}let l=O4(i,a),d=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(d||f)&&(l.pathname+="/"),l}const fi=t=>t.join("/").replace(/\/\/+/g,"/"),F4=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),U4=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,W4=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function $4(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const yx=["post","put","patch","delete"];new Set(yx);const z4=["get",...yx];new Set(z4);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eu(){return eu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},eu.apply(this,arguments)}const n1=M.createContext(null),B4=M.createContext(null),Ai=M.createContext(null),Oh=M.createContext(null),Pi=M.createContext({outlet:null,matches:[],isDataRoute:!1}),vx=M.createContext(null);function H4(t,e){let{relative:n}=e===void 0?{}:e;xa()||Je(!1);let{basename:r,navigator:i}=M.useContext(Ai),{hash:o,pathname:s,search:a}=kx(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:fi([r,s])),i.createHref({pathname:l,search:a,hash:o})}function xa(){return M.useContext(Oh)!=null}function Ta(){return xa()||Je(!1),M.useContext(Oh).location}function _x(t){M.useContext(Ai).static||M.useLayoutEffect(t)}function Ia(){let{isDataRoute:t}=M.useContext(Pi);return t?iL():q4()}function q4(){xa()||Je(!1);let t=M.useContext(n1),{basename:e,future:n,navigator:r}=M.useContext(Ai),{matches:i}=M.useContext(Pi),{pathname:o}=Ta(),s=JSON.stringify(e1(i,n.v7_relativeSplatPath)),a=M.useRef(!1);return _x(()=>{a.current=!0}),M.useCallback(function(d,f){if(f===void 0&&(f={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let m=t1(d,JSON.parse(s),o,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:fi([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,s,o,t])}function kx(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(Ai),{matches:i}=M.useContext(Pi),{pathname:o}=Ta(),s=JSON.stringify(e1(i,r.v7_relativeSplatPath));return M.useMemo(()=>t1(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function Y4(t,e){return G4(t,e)}function G4(t,e,n,r){xa()||Je(!1);let{navigator:i,static:o}=M.useContext(Ai),{matches:s}=M.useContext(Pi),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let f=Ta(),m;if(e){var E;let y=typeof e=="string"?wa(e):e;d==="/"||(E=y.pathname)!=null&&E.startsWith(d)||Je(!1),m=y}else m=f;let _=m.pathname||"/",T=_;if(d!=="/"){let y=d.replace(/^\//,"").split("/");T="/"+_.replace(/^\//,"").split("/").slice(y.length).join("/")}let A=E4(t,{pathname:T}),S=J4(A&&A.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:fi([d,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:fi([d,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,r);return e&&S?M.createElement(Oh.Provider,{value:{location:eu({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:ti.Pop}},S):S}function K4(){let t=rL(),e=$4(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const Q4=M.createElement(K4,null);class Z4 extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(Pi.Provider,{value:this.props.routeContext},M.createElement(vx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function X4(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(n1);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(Pi.Provider,{value:e},r)}function J4(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);f>=0||Je(!1),s=s.slice(0,Math.min(s.length,f+1))}let l=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let m=s[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:E,errors:_}=n,T=m.route.loader&&E[m.route.id]===void 0&&(!_||_[m.route.id]===void 0);if(m.route.lazy||T){l=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((f,m,E)=>{let _,T=!1,A=null,S=null;n&&(_=a&&m.route.id?a[m.route.id]:void 0,A=m.route.errorElement||Q4,l&&(d<0&&E===0?(oL("route-fallback"),T=!0,S=null):d===E&&(T=!0,S=m.route.hydrateFallbackElement||null)));let y=e.concat(s.slice(0,E+1)),g=()=>{let k;return _?k=A:T?k=S:m.route.Component?k=M.createElement(m.route.Component,null):m.route.element?k=m.route.element:k=f,M.createElement(X4,{match:m,routeContext:{outlet:f,matches:y,isDataRoute:n!=null},children:k})};return n&&(m.route.ErrorBoundary||m.route.errorElement||E===0)?M.createElement(Z4,{location:n.location,revalidation:n.revalidation,component:A,error:_,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}var Ex=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Ex||{}),wx=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(wx||{});function eL(t){let e=M.useContext(n1);return e||Je(!1),e}function tL(t){let e=M.useContext(B4);return e||Je(!1),e}function nL(t){let e=M.useContext(Pi);return e||Je(!1),e}function xx(t){let e=nL(),n=e.matches[e.matches.length-1];return n.route.id||Je(!1),n.route.id}function rL(){var t;let e=M.useContext(vx),n=tL(),r=xx();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function iL(){let{router:t}=eL(Ex.UseNavigateStable),e=xx(wx.UseNavigateStable),n=M.useRef(!1);return _x(()=>{n.current=!0}),M.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,eu({fromRouteId:e},o)))},[t,e])}const I2={};function oL(t,e,n){I2[t]||(I2[t]=!0)}function sL(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Tx(t){let{to:e,replace:n,state:r,relative:i}=t;xa()||Je(!1);let{future:o,static:s}=M.useContext(Ai),{matches:a}=M.useContext(Pi),{pathname:l}=Ta(),d=Ia(),f=t1(e,e1(a,o.v7_relativeSplatPath),l,i==="path"),m=JSON.stringify(f);return M.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:i}),[d,m,i,n,r]),null}function ul(t){Je(!1)}function aL(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ti.Pop,navigator:o,static:s=!1,future:a}=t;xa()&&Je(!1);let l=e.replace(/^\/*/,"/"),d=M.useMemo(()=>({basename:l,navigator:o,static:s,future:eu({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=wa(r));let{pathname:f="/",search:m="",hash:E="",state:_=null,key:T="default"}=r,A=M.useMemo(()=>{let S=J0(f,l);return S==null?null:{location:{pathname:S,search:m,hash:E,state:_,key:T},navigationType:i}},[l,f,m,E,_,T,i]);return A==null?null:M.createElement(Ai.Provider,{value:d},M.createElement(Oh.Provider,{children:n,value:A}))}function lL(t){let{children:e,location:n}=t;return Y4(Um(e),n)}new Promise(()=>{});function Um(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let o=[...e,i];if(r.type===M.Fragment){n.push.apply(n,Um(r.props.children,o));return}r.type!==ul&&Je(!1),!r.props.index||!r.props.children||Je(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Um(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wm(){return Wm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wm.apply(this,arguments)}function uL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function cL(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function dL(t,e){return t.button===0&&(!e||e==="_self")&&!cL(t)}const hL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],fL="6";try{window.__reactRouterVersion=fL}catch{}const pL="startTransition",S2=s6[pL];function mL(t){let{basename:e,children:n,future:r,window:i}=t,o=M.useRef();o.current==null&&(o.current=v4({window:i,v5Compat:!0}));let s=o.current,[a,l]=M.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},f=M.useCallback(m=>{d&&S2?S2(()=>l(m)):l(m)},[l,d]);return M.useLayoutEffect(()=>s.listen(f),[s,f]),M.useEffect(()=>sL(r),[r]),M.createElement(aL,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const gL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ix=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:d,preventScrollReset:f,viewTransition:m}=e,E=uL(e,hL),{basename:_}=M.useContext(Ai),T,A=!1;if(typeof d=="string"&&yL.test(d)&&(T=d,gL))try{let k=new URL(window.location.href),x=d.startsWith("//")?new URL(k.protocol+d):new URL(d),R=J0(x.pathname,_);x.origin===k.origin&&R!=null?d=R+x.search+x.hash:A=!0}catch{}let S=H4(d,{relative:i}),y=vL(d,{replace:s,state:a,target:l,preventScrollReset:f,relative:i,viewTransition:m});function g(k){r&&r(k),k.defaultPrevented||y(k)}return M.createElement("a",Wm({},E,{href:T||S,onClick:A||o?r:g,ref:n,target:l}))});var C2;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(C2||(C2={}));var L2;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(L2||(L2={}));function vL(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=e===void 0?{}:e,l=Ia(),d=Ta(),f=kx(t,{relative:s});return M.useCallback(m=>{if(dL(m,n)){m.preventDefault();let E=r!==void 0?r:Fd(d)===Fd(f);l(t,{replace:E,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[d,l,f,r,i,n,t,o,s,a])}var A2={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_L=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Cx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,d=l?t[i+2]:0,f=o>>2,m=(o&3)<<4|a>>4;let E=(a&15)<<2|d>>6,_=d&63;l||(_=64,s||(E=64)),r.push(n[f],n[m],n[E],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_L(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||d==null||m==null)throw new kL;const E=o<<2|a>>4;if(r.push(E),d!==64){const _=a<<4&240|d>>2;if(r.push(_),m!==64){const T=d<<6&192|m;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const EL=function(t){const e=Sx(t);return Cx.encodeByteArray(e,!0)},Ud=function(t){return EL(t).replace(/\./g,"")},Lx=function(t){try{return Cx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function wL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xL=()=>wL().__FIREBASE_DEFAULTS__,TL=()=>{if(typeof process>"u"||typeof A2>"u")return;const t=A2.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},IL=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lx(t[1]);return e&&JSON.parse(e)},Dh=()=>{try{return xL()||TL()||IL()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ax=t=>{var e,n;return(n=(e=Dh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Px=t=>{const e=Ax(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rx=()=>{var t;return(t=Dh())===null||t===void 0?void 0:t.config},bx=t=>{var e;return(e=Dh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function jx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ud(JSON.stringify(n)),Ud(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function CL(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ot())}function LL(){var t;const e=(t=Dh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AL(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Nx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function PL(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RL(){const t=Ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bL(){return!LL()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mx(){try{return typeof indexedDB=="object"}catch{return!1}}function Ox(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function jL(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NL="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=NL,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Io.prototype.create)}}class Io{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?ML(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Ln(i,a,r)}}function ML(t,e){return t.replace(OL,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const OL=/\{\$([^}]+)}/g;function DL(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(P2(o)&&P2(s)){if(!tu(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function P2(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function dl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function VL(t,e){const n=new FL(t,e);return n.subscribe.bind(n)}class FL{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UL(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=dp),i.error===void 0&&(i.error=dp),i.complete===void 0&&(i.complete=dp);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UL(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function dp(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL=1e3,$L=2,zL=4*60*60*1e3,BL=.5;function R2(t,e=WL,n=$L){const r=e*Math.pow(n,t),i=Math.round(BL*r*(Math.random()-.5)*2);return Math.min(zL,r+i)}/**
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
 */const Yi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new SL;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YL(e))try{this.getOrInitializeService({instanceIdentifier:Yi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Yi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yi){return this.instances.has(e)}getOptions(e=Yi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qL(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yi){return this.component?this.component.multipleInstances?e:Yi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qL(t){return t===Yi?void 0:t}function YL(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HL(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const KL={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},QL=pe.INFO,ZL={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},XL=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ZL[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vh{constructor(e){this.name=e,this._logLevel=QL,this._logHandler=XL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KL[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const JL=(t,e)=>e.some(n=>t instanceof n);let b2,j2;function eA(){return b2||(b2=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tA(){return j2||(j2=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dx=new WeakMap,$m=new WeakMap,Vx=new WeakMap,hp=new WeakMap,r1=new WeakMap;function nA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(pi(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Dx.set(n,t)}).catch(()=>{}),r1.set(e,t),e}function rA(t){if($m.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});$m.set(t,e)}let zm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $m.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iA(t){zm=t(zm)}function oA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fp(this),e,...n);return Vx.set(r,e.sort?e.sort():[e]),pi(r)}:tA().includes(t)?function(...e){return t.apply(fp(this),e),pi(Dx.get(this))}:function(...e){return pi(t.apply(fp(this),e))}}function sA(t){return typeof t=="function"?oA(t):(t instanceof IDBTransaction&&rA(t),JL(t,eA())?new Proxy(t,zm):t)}function pi(t){if(t instanceof IDBRequest)return nA(t);if(hp.has(t))return hp.get(t);const e=sA(t);return e!==t&&(hp.set(t,e),r1.set(e,t)),e}const fp=t=>r1.get(t);function Fx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=pi(s);return r&&s.addEventListener("upgradeneeded",l=>{r(pi(s.result),l.oldVersion,l.newVersion,pi(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const aA=["get","getKey","getAll","getAllKeys","count"],lA=["put","add","delete","clear"],pp=new Map;function N2(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pp.get(e))return pp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=lA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||aA.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&l.done]))[0]};return pp.set(e,o),o}iA(t=>({...t,get:(e,n,r)=>N2(e,n)||t.get(e,n,r),has:(e,n)=>!!N2(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bm="@firebase/app",M2="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Vh("@firebase/app"),dA="@firebase/app-compat",hA="@firebase/analytics-compat",fA="@firebase/analytics",pA="@firebase/app-check-compat",mA="@firebase/app-check",gA="@firebase/auth",yA="@firebase/auth-compat",vA="@firebase/database",_A="@firebase/data-connect",kA="@firebase/database-compat",EA="@firebase/functions",wA="@firebase/functions-compat",xA="@firebase/installations",TA="@firebase/installations-compat",IA="@firebase/messaging",SA="@firebase/messaging-compat",CA="@firebase/performance",LA="@firebase/performance-compat",AA="@firebase/remote-config",PA="@firebase/remote-config-compat",RA="@firebase/storage",bA="@firebase/storage-compat",jA="@firebase/firestore",NA="@firebase/vertexai-preview",MA="@firebase/firestore-compat",OA="firebase",DA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="[DEFAULT]",VA={[Bm]:"fire-core",[dA]:"fire-core-compat",[fA]:"fire-analytics",[hA]:"fire-analytics-compat",[mA]:"fire-app-check",[pA]:"fire-app-check-compat",[gA]:"fire-auth",[yA]:"fire-auth-compat",[vA]:"fire-rtdb",[_A]:"fire-data-connect",[kA]:"fire-rtdb-compat",[EA]:"fire-fn",[wA]:"fire-fn-compat",[xA]:"fire-iid",[TA]:"fire-iid-compat",[IA]:"fire-fcm",[SA]:"fire-fcm-compat",[CA]:"fire-perf",[LA]:"fire-perf-compat",[AA]:"fire-rc",[PA]:"fire-rc-compat",[RA]:"fire-gcs",[bA]:"fire-gcs-compat",[jA]:"fire-fst",[MA]:"fire-fst-compat",[NA]:"fire-vertex","fire-js":"fire-js",[OA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=new Map,FA=new Map,qm=new Map;function O2(t,e){try{t.container.addComponent(e)}catch(n){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zn(t){const e=t.name;if(qm.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;qm.set(e,t);for(const n of Wd.values())O2(n,t);for(const n of FA.values())O2(n,t);return!0}function Ri(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mi=new Io("app","Firebase",UA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=DA;function Ux(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mi.create("bad-app-name",{appName:String(i)});if(n||(n=Rx()),!n)throw mi.create("no-options");const o=Wd.get(i);if(o){if(tu(n,o.options)&&tu(r,o.config))return o;throw mi.create("duplicate-app",{appName:i})}const s=new GL(i);for(const l of qm.values())s.addComponent(l);const a=new WA(n,r,s);return Wd.set(i,a),a}function Fh(t=Hm){const e=Wd.get(t);if(!e&&t===Hm&&Rx())return Ux();if(!e)throw mi.create("no-app",{appName:t});return e}function on(t,e,n){var r;let i=(r=VA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(a.join(" "));return}zn(new Sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const $A="firebase-heartbeat-database",zA=1,nu="firebase-heartbeat-store";let mp=null;function Wx(){return mp||(mp=Fx($A,zA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(nu)}catch(n){console.warn(n)}}}}).catch(t=>{throw mi.create("idb-open",{originalErrorMessage:t.message})})),mp}async function BA(t){try{const n=(await Wx()).transaction(nu),r=await n.objectStore(nu).get($x(t));return await n.done,r}catch(e){if(e instanceof Ln)Rr.warn(e.message);else{const n=mi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(n.message)}}}async function D2(t,e){try{const r=(await Wx()).transaction(nu,"readwrite");await r.objectStore(nu).put(e,$x(t)),await r.done}catch(n){if(n instanceof Ln)Rr.warn(n.message);else{const r=mi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rr.warn(r.message)}}}function $x(t){return`${t.name}!${t.options.appId}`}/**
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
 */const HA=1024,qA=30*24*60*60*1e3;class YA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=V2();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=qA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=V2(),{heartbeatsToSend:r,unsentEntries:i}=GA(this._heartbeatsCache.heartbeats),o=Ud(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Rr.warn(n),""}}}function V2(){return new Date().toISOString().substring(0,10)}function GA(t,e=HA){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),F2(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),F2(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mx()?Ox().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await BA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return D2(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return D2(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function F2(t){return Ud(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(t){zn(new Sn("platform-logger",e=>new uA(e),"PRIVATE")),zn(new Sn("heartbeat",e=>new YA(e),"PRIVATE")),on(Bm,M2,t),on(Bm,M2,"esm2017"),on("fire-js","")}QA("");function i1(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function zx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZA=zx,Bx=new Io("auth","Firebase",zx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=new Vh("@firebase/auth");function XA(t,...e){$d.logLevel<=pe.WARN&&$d.warn(`Auth (${So}): ${t}`,...e)}function Jc(t,...e){$d.logLevel<=pe.ERROR&&$d.error(`Auth (${So}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,...e){throw o1(t,...e)}function tr(t,...e){return o1(t,...e)}function Hx(t,e,n){const r=Object.assign(Object.assign({},ZA()),{[e]:n});return new Io("auth","Firebase",r).create(e,{appName:t.name})}function Ir(t){return Hx(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function o1(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bx.create(t,...e)}function re(t,e,...n){if(!t)throw o1(e,...n)}function kr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Jc(e),new Error(e)}function br(t,e){t||kr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function JA(){return U2()==="http:"||U2()==="https:"}function U2(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JA()||Nx()||"connection"in navigator)?navigator.onLine:!0}function tP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n){this.shortDelay=e,this.longDelay=n,br(n>e,"Short delay should be less than long delay!"),this.isMobile=CL()||PL()}get(){return eP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t,e){br(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=new Lu(3e4,6e4);function Or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ar(t,e,n,r,i={}){return Yx(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Cu(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:l},o);return AL()||(d.referrerPolicy="no-referrer"),qx.fetch()(Gx(t,t.config.apiHost,n,a),d)})}async function Yx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},nP),e);try{const i=new oP(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw wc(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,d]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wc(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw wc(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw wc(t,"user-disabled",s);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Hx(t,f,d);Bn(t,f)}}catch(i){if(i instanceof Ln)throw i;Bn(t,"network-request-failed",{message:String(i)})}}async function Au(t,e,n,r,i={}){const o=await ar(t,e,n,r,i);return"mfaPendingCredential"in o&&Bn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Gx(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?s1(t.config,i):`${t.config.apiScheme}://${i}`}function iP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tr(this.auth,"network-request-failed")),rP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tr(t,e,r);return i.customData._tokenResponse=n,i}function W2(t){return t!==void 0&&t.enterprise!==void 0}class sP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return iP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function aP(t,e){return ar(t,"GET","/v2/recaptchaConfig",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lP(t,e){return ar(t,"POST","/v1/accounts:delete",e)}async function Kx(t,e){return ar(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uP(t,e=!1){const n=He(t),r=await n.getIdToken(e),i=a1(r);re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Cl(gp(i.auth_time)),issuedAtTime:Cl(gp(i.iat)),expirationTime:Cl(gp(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function gp(t){return Number(t)*1e3}function a1(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Jc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Lx(n);return i?JSON.parse(i):(Jc("Failed to decode base64 JWT payload"),null)}catch(i){return Jc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $2(t){const e=a1(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&cP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cl(this.lastLoginAt),this.creationTime=Cl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await sa(t,Kx(n,{idToken:r}));re(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Qx(o.providerUserInfo):[],a=fP(t.providerData,s),l=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?d:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Gm(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function hP(t){const e=He(t);await zd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Qx(t){return t.map(e=>{var{providerId:n}=e,r=i1(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pP(t,e){const n=await Yx(t,{},async()=>{const r=Cu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Gx(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qx.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mP(t,e){return ar(t,"POST","/v2/accounts:revokeToken",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=$2(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await pP(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Gs;return r&&(re(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(re(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(re(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gs,this.toJSON())}_performRefresh(){return kr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Er{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=i1(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Gm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await sa(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uP(this,e)}reload(){return hP(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xn(this.auth.app))return Promise.reject(Ir(this.auth));const e=await this.getIdToken();return await sa(this,lP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,E=(i=n.email)!==null&&i!==void 0?i:void 0,_=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,T=(s=n.photoURL)!==null&&s!==void 0?s:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(d=n.createdAt)!==null&&d!==void 0?d:void 0,g=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:x,isAnonymous:R,providerData:N,stsTokenManager:w}=n;re(k&&w,e,"internal-error");const I=Gs.fromJSON(this.name,w);re(typeof k=="string",e,"internal-error"),Wr(m,e.name),Wr(E,e.name),re(typeof x=="boolean",e,"internal-error"),re(typeof R=="boolean",e,"internal-error"),Wr(_,e.name),Wr(T,e.name),Wr(A,e.name),Wr(S,e.name),Wr(y,e.name),Wr(g,e.name);const P=new Er({uid:k,auth:e,email:E,emailVerified:x,displayName:m,isAnonymous:R,photoURL:T,phoneNumber:_,tenantId:A,stsTokenManager:I,createdAt:y,lastLoginAt:g});return N&&Array.isArray(N)&&(P.providerData=N.map(b=>Object.assign({},b))),S&&(P._redirectEventId=S),P}static async _fromIdTokenResponse(e,n,r=!1){const i=new Gs;i.updateFromServerResponse(n);const o=new Er({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zd(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];re(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Qx(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new Gs;a.updateFromIdToken(r);const l=new Er({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Gm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2=new Map;function wr(t){br(t instanceof Function,"Expected a class definition");let e=z2.get(t);return e?(br(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,z2.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zx.type="NONE";const B2=Zx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t,e,n){return`firebase:${t}:${e}:${n}`}class Ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=ed(this.userKey,i.apiKey,o),this.fullPersistenceKey=ed("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ks(wr(B2),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||wr(B2);const s=ed(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const f=await d._get(s);if(f){const m=Er._fromJSON(e,f);d!==o&&(a=m),o=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Ks(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(s)}catch{}})),new Ks(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(t8(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(r8(e))return"Blackberry";if(i8(e))return"Webos";if(Jx(e))return"Safari";if((e.includes("chrome/")||e8(e))&&!e.includes("edge/"))return"Chrome";if(n8(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xx(t=Ot()){return/firefox\//i.test(t)}function Jx(t=Ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function e8(t=Ot()){return/crios\//i.test(t)}function t8(t=Ot()){return/iemobile/i.test(t)}function n8(t=Ot()){return/android/i.test(t)}function r8(t=Ot()){return/blackberry/i.test(t)}function i8(t=Ot()){return/webos/i.test(t)}function l1(t=Ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gP(t=Ot()){var e;return l1(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yP(){return RL()&&document.documentMode===10}function o8(t=Ot()){return l1(t)||n8(t)||i8(t)||r8(t)||/windows phone/i.test(t)||t8(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s8(t,e=[]){let n;switch(t){case"Browser":n=H2(Ot());break;case"Worker":n=`${H2(Ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${So}/${r}`}/**
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
 */class vP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _P(t,e={}){return ar(t,"GET","/v2/passwordPolicy",Or(t,e))}/**
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
 */const kP=6;class EP{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:kP,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new q2(this),this.idTokenSubscription=new q2(this),this.beforeStateQueue=new vP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Kx(this,{idToken:e}),r=await Er._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xn(this.app))return Promise.reject(Ir(this));const n=e?He(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xn(this.app)?Promise.reject(Ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xn(this.app)?Promise.reject(Ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _P(this),n=new EP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Io("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wr(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[wr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=s8(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&XA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bi(t){return He(t)}class q2{constructor(e){this.auth=e,this.observer=null,this.addObserver=VL(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xP(t){Uh=t}function a8(t){return Uh.loadJS(t)}function TP(){return Uh.recaptchaEnterpriseScript}function IP(){return Uh.gapiScript}function SP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const CP="recaptcha-enterprise",LP="NO_RECAPTCHA";class AP{constructor(e){this.type=CP,this.auth=bi(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{aP(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new sP(l);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,s(d.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;W2(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(d=>{s(d)}).catch(()=>{s(LP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&W2(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=TP();l.length!==0&&(l+=a),a8(l).then(()=>{i(a,o,s)}).catch(d=>{s(d)})}}).catch(a=>{s(a)})})}}async function Y2(t,e,n,r=!1){const i=new AP(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Bd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Y2(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Y2(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(t,e){const n=Ri(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(tu(o,e??{}))return i;Bn(i,"already-initialized")}return n.initialize({options:e})}function RP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bP(t,e,n){const r=bi(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=l8(e),{host:s,port:a}=jP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),NP()}function l8(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jP(t){const e=l8(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:G2(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:G2(s)}}}function G2(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kr("not implemented")}_getIdTokenResponse(e){return kr("not implemented")}_linkToIdToken(e,n){return kr("not implemented")}_getReauthenticationResolver(e){return kr("not implemented")}}async function MP(t,e){return ar(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OP(t,e){return Au(t,"POST","/v1/accounts:signInWithPassword",Or(t,e))}async function DP(t,e){return ar(t,"POST","/v1/accounts:sendOobCode",Or(t,e))}async function VP(t,e){return DP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FP(t,e){return Au(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}async function UP(t,e){return Au(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru extends u1{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ru(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ru(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bd(e,n,"signInWithPassword",OP);case"emailLink":return FP(e,{email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bd(e,r,"signUpPassword",MP);case"emailLink":return UP(e,{idToken:n,email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(t,e){return Au(t,"POST","/v1/accounts:signInWithIdp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP="http://localhost";class mo extends u1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=i1(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new mo(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Qs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qs(e,n)}buildRequest(){const e={requestUri:WP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Cu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zP(t){const e=cl(dl(t)).link,n=e?cl(dl(e)).deep_link_id:null,r=cl(dl(t)).deep_link_id;return(r?cl(dl(r)).link:null)||r||n||e||t}class c1{constructor(e){var n,r,i,o,s,a;const l=cl(dl(e)),d=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,m=$P((i=l.mode)!==null&&i!==void 0?i:null);re(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=zP(e);try{return new c1(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(){this.providerId=Sa.PROVIDER_ID}static credential(e,n){return ru._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=c1.parseLink(n);return re(r,"argument-error"),ru._fromEmailAndCode(e,r.code,r.tenantId)}}Sa.PROVIDER_ID="password";Sa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u8{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu extends u8{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Pu{constructor(){super("facebook.com")}static credential(e){return mo._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Pu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mo._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Pu{constructor(){super("github.com")}static credential(e){return mo._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.GITHUB_SIGN_IN_METHOD="github.com";Zr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Pu{constructor(){super("twitter.com")}static credential(e,n){return mo._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xr.credential(n,r)}catch{return null}}}Xr.TWITTER_SIGN_IN_METHOD="twitter.com";Xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BP(t,e){return Au(t,"POST","/v1/accounts:signUp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Er._fromIdTokenResponse(e,r,i),s=K2(r);return new go({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=K2(r);return new go({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function K2(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd extends Ln{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Hd.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Hd(e,n,r,i)}}function c8(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Hd._fromErrorAndOperation(t,o,e,r):o})}async function HP(t,e,n=!1){const r=await sa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return go._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qP(t,e,n=!1){const{auth:r}=t;if(Xn(r.app))return Promise.reject(Ir(r));const i="reauthenticate";try{const o=await sa(t,c8(r,i,e,t),n);re(o.idToken,r,"internal-error");const s=a1(o.idToken);re(s,r,"internal-error");const{sub:a}=s;return re(t.uid===a,r,"user-mismatch"),go._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Bn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d8(t,e,n=!1){if(Xn(t.app))return Promise.reject(Ir(t));const r="signIn",i=await c8(t,r,e),o=await go._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function YP(t,e){return d8(bi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h8(t){const e=bi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function GP(t,e,n){const r=bi(t);await Bd(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",VP)}async function KP(t,e,n){if(Xn(t.app))return Promise.reject(Ir(t));const r=bi(t),s=await Bd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",BP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&h8(t),l}),a=await go._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function QP(t,e,n){return Xn(t.app)?Promise.reject(Ir(t)):YP(He(t),Sa.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&h8(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZP(t,e){return ar(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=He(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await sa(r,ZP(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function JP(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function eR(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function tR(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function nR(t){return He(t).signOut()}async function rR(t){return He(t).delete()}const qd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f8{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qd,"1"),this.storage.removeItem(qd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=1e3,oR=10;class p8 extends f8{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=o8(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);yP()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},iR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}p8.type="LOCAL";const sR=p8;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m8 extends f8{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}m8.type="SESSION";const g8=m8;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Wh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async d=>d(n.origin,o)),l=await aR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const d=d1("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(m){const E=m;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(E.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){return window}function uR(t){nr().location.href=t}/**
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
 */function y8(){return typeof nr().WorkerGlobalScope<"u"&&typeof nr().importScripts=="function"}async function cR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hR(){return y8()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v8="firebaseLocalStorageDb",fR=1,Yd="firebaseLocalStorage",_8="fbase_key";class Ru{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $h(t,e){return t.transaction([Yd],e?"readwrite":"readonly").objectStore(Yd)}function pR(){const t=indexedDB.deleteDatabase(v8);return new Ru(t).toPromise()}function Km(){const t=indexedDB.open(v8,fR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yd,{keyPath:_8})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yd)?e(r):(r.close(),await pR(),e(await Km()))})})}async function Q2(t,e,n){const r=$h(t,!0).put({[_8]:e,value:n});return new Ru(r).toPromise()}async function mR(t,e){const n=$h(t,!1).get(e),r=await new Ru(n).toPromise();return r===void 0?null:r.value}function Z2(t,e){const n=$h(t,!0).delete(e);return new Ru(n).toPromise()}const gR=800,yR=3;class k8{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Km(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return y8()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wh._getInstance(hR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await cR(),!this.activeServiceWorker)return;this.sender=new lR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Km();return await Q2(e,qd,"1"),await Z2(e,qd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Q2(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Z2(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=$h(i,!1).getAll();return new Ru(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}k8.type="LOCAL";const vR=k8;new Lu(3e4,6e4);/**
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
 */function _R(t,e){return e?wr(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1 extends u1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kR(t){return d8(t.auth,new h1(t),t.bypassAuthState)}function ER(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),qP(n,new h1(t),t.bypassAuthState)}async function wR(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),HP(n,new h1(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E8{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kR;case"linkViaPopup":case"linkViaRedirect":return wR;case"reauthViaPopup":case"reauthViaRedirect":return ER;default:Bn(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=new Lu(2e3,1e4);class Fs extends E8{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Fs.currentPopupAction&&Fs.currentPopupAction.cancel(),Fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=d1();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xR.get())};e()}}Fs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR="pendingRedirect",td=new Map;class IR extends E8{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=td.get(this.auth._key());if(!e){try{const r=await SR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}td.set(this.auth._key(),e)}return this.bypassAuthState||td.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SR(t,e){const n=AR(e),r=LR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function CR(t,e){td.set(t._key(),e)}function LR(t){return wr(t._redirectPersistence)}function AR(t){return ed(TR,t.config.apiKey,t.name)}async function PR(t,e,n=!1){if(Xn(t.app))return Promise.reject(Ir(t));const r=bi(t),i=_R(r,e),s=await new IR(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=10*60*1e3;class bR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!w8(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RR&&this.cachedEventUids.clear(),this.cachedEventUids.has(X2(e))}saveEventToCache(e){this.cachedEventUids.add(X2(e)),this.lastProcessedEventTime=Date.now()}}function X2(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function w8({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return w8(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NR(t,e={}){return ar(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OR=/^https?/;async function DR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NR(t);for(const n of e)try{if(VR(n))return}catch{}Bn(t,"unauthorized-domain")}function VR(t){const e=Ym(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!OR.test(n))return!1;if(MR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const FR=new Lu(3e4,6e4);function J2(){const t=nr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UR(t){return new Promise((e,n)=>{var r,i,o;function s(){J2(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{J2(),n(tr(t,"network-request-failed"))},timeout:FR.get()})}if(!((i=(r=nr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=nr().gapi)===null||o===void 0)&&o.load)s();else{const a=SP("iframefcb");return nr()[a]=()=>{gapi.load?s():n(tr(t,"network-request-failed"))},a8(`${IP()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw nd=null,e})}let nd=null;function WR(t){return nd=nd||UR(t),nd}/**
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
 */const $R=new Lu(5e3,15e3),zR="__/auth/iframe",BR="emulator/auth/iframe",HR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YR(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?s1(e,BR):`https://${t.config.authDomain}/${zR}`,r={apiKey:e.apiKey,appName:t.name,v:So},i=qR.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Cu(r).slice(1)}`}async function GR(t){const e=await WR(t),n=nr().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:YR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HR,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=tr(t,"network-request-failed"),a=nr().setTimeout(()=>{o(s)},$R.get());function l(){nr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const KR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QR=500,ZR=600,XR="_blank",JR="http://localhost";class e_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eb(t,e,n,r=QR,i=ZR){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},KR),{width:r.toString(),height:i.toString(),top:o,left:s}),d=Ot().toLowerCase();n&&(a=e8(d)?XR:n),Xx(d)&&(e=e||JR,l.scrollbars="yes");const f=Object.entries(l).reduce((E,[_,T])=>`${E}${_}=${T},`,"");if(gP(d)&&a!=="_self")return tb(e||"",a),new e_(null);const m=window.open(e||"",a,f);re(m,t,"popup-blocked");try{m.focus()}catch{}return new e_(m)}function tb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const nb="__/auth/handler",rb="emulator/auth/handler",ib=encodeURIComponent("fac");async function t_(t,e,n,r,i,o){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:So,eventId:i};if(e instanceof u8){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",DL(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))s[f]=m}if(e instanceof Pu){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),d=l?`#${ib}=${encodeURIComponent(l)}`:"";return`${ob(t)}?${Cu(a).slice(1)}${d}`}function ob({config:t}){return t.emulator?s1(t,rb):`https://${t.authDomain}/${nb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="webStorageSupport";class sb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=g8,this._completeRedirectFn=PR,this._overrideRedirectResult=CR}async _openPopup(e,n,r,i){var o;br((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await t_(e,n,r,Ym(),i);return eb(e,s,d1())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await t_(e,n,r,Ym(),i);return uR(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(br(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GR(e),r=new bR(e);return n.register("authEvent",i=>(re(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yp,{type:yp},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[yp];s!==void 0&&n(!!s),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return o8()||Jx()||l1()}}const ab=sb;var n_="@firebase/auth",r_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cb(t){zn(new Sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;re(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:s8(t)},d=new wP(r,i,o,l);return RP(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zn(new Sn("auth-internal",e=>{const n=bi(e.getProvider("auth").getImmediate());return(r=>new lb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(n_,r_,ub(t)),on(n_,r_,"esm2017")}/**
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
 */const db=5*60,hb=bx("authIdTokenMaxAge")||db;let i_=null;const fb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hb)return;const i=n==null?void 0:n.token;i_!==i&&(i_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function x8(t=Fh()){const e=Ri(t,"auth");if(e.isInitialized())return e.getImmediate();const n=PP(t,{popupRedirectResolver:ab,persistence:[vR,sR,g8]}),r=bx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=fb(o.toString());eR(n,s,()=>s(n.currentUser)),JP(n,a=>s(a))}}const i=Ax("auth");return i&&bP(n,`http://${i}`),n}function pb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}xP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=tr("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",pb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cb("Browser");var mb="firebase",gb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on(mb,gb,"app");var o_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var oo,T8;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,I){function P(){}P.prototype=I.prototype,w.D=I.prototype,w.prototype=new P,w.prototype.constructor=w,w.C=function(b,j,O){for(var C=Array(arguments.length-2),K=2;K<arguments.length;K++)C[K-2]=arguments[K];return I.prototype[j].apply(b,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,I,P){P||(P=0);var b=Array(16);if(typeof I=="string")for(var j=0;16>j;++j)b[j]=I.charCodeAt(P++)|I.charCodeAt(P++)<<8|I.charCodeAt(P++)<<16|I.charCodeAt(P++)<<24;else for(j=0;16>j;++j)b[j]=I[P++]|I[P++]<<8|I[P++]<<16|I[P++]<<24;I=w.g[0],P=w.g[1],j=w.g[2];var O=w.g[3],C=I+(O^P&(j^O))+b[0]+3614090360&4294967295;I=P+(C<<7&4294967295|C>>>25),C=O+(j^I&(P^j))+b[1]+3905402710&4294967295,O=I+(C<<12&4294967295|C>>>20),C=j+(P^O&(I^P))+b[2]+606105819&4294967295,j=O+(C<<17&4294967295|C>>>15),C=P+(I^j&(O^I))+b[3]+3250441966&4294967295,P=j+(C<<22&4294967295|C>>>10),C=I+(O^P&(j^O))+b[4]+4118548399&4294967295,I=P+(C<<7&4294967295|C>>>25),C=O+(j^I&(P^j))+b[5]+1200080426&4294967295,O=I+(C<<12&4294967295|C>>>20),C=j+(P^O&(I^P))+b[6]+2821735955&4294967295,j=O+(C<<17&4294967295|C>>>15),C=P+(I^j&(O^I))+b[7]+4249261313&4294967295,P=j+(C<<22&4294967295|C>>>10),C=I+(O^P&(j^O))+b[8]+1770035416&4294967295,I=P+(C<<7&4294967295|C>>>25),C=O+(j^I&(P^j))+b[9]+2336552879&4294967295,O=I+(C<<12&4294967295|C>>>20),C=j+(P^O&(I^P))+b[10]+4294925233&4294967295,j=O+(C<<17&4294967295|C>>>15),C=P+(I^j&(O^I))+b[11]+2304563134&4294967295,P=j+(C<<22&4294967295|C>>>10),C=I+(O^P&(j^O))+b[12]+1804603682&4294967295,I=P+(C<<7&4294967295|C>>>25),C=O+(j^I&(P^j))+b[13]+4254626195&4294967295,O=I+(C<<12&4294967295|C>>>20),C=j+(P^O&(I^P))+b[14]+2792965006&4294967295,j=O+(C<<17&4294967295|C>>>15),C=P+(I^j&(O^I))+b[15]+1236535329&4294967295,P=j+(C<<22&4294967295|C>>>10),C=I+(j^O&(P^j))+b[1]+4129170786&4294967295,I=P+(C<<5&4294967295|C>>>27),C=O+(P^j&(I^P))+b[6]+3225465664&4294967295,O=I+(C<<9&4294967295|C>>>23),C=j+(I^P&(O^I))+b[11]+643717713&4294967295,j=O+(C<<14&4294967295|C>>>18),C=P+(O^I&(j^O))+b[0]+3921069994&4294967295,P=j+(C<<20&4294967295|C>>>12),C=I+(j^O&(P^j))+b[5]+3593408605&4294967295,I=P+(C<<5&4294967295|C>>>27),C=O+(P^j&(I^P))+b[10]+38016083&4294967295,O=I+(C<<9&4294967295|C>>>23),C=j+(I^P&(O^I))+b[15]+3634488961&4294967295,j=O+(C<<14&4294967295|C>>>18),C=P+(O^I&(j^O))+b[4]+3889429448&4294967295,P=j+(C<<20&4294967295|C>>>12),C=I+(j^O&(P^j))+b[9]+568446438&4294967295,I=P+(C<<5&4294967295|C>>>27),C=O+(P^j&(I^P))+b[14]+3275163606&4294967295,O=I+(C<<9&4294967295|C>>>23),C=j+(I^P&(O^I))+b[3]+4107603335&4294967295,j=O+(C<<14&4294967295|C>>>18),C=P+(O^I&(j^O))+b[8]+1163531501&4294967295,P=j+(C<<20&4294967295|C>>>12),C=I+(j^O&(P^j))+b[13]+2850285829&4294967295,I=P+(C<<5&4294967295|C>>>27),C=O+(P^j&(I^P))+b[2]+4243563512&4294967295,O=I+(C<<9&4294967295|C>>>23),C=j+(I^P&(O^I))+b[7]+1735328473&4294967295,j=O+(C<<14&4294967295|C>>>18),C=P+(O^I&(j^O))+b[12]+2368359562&4294967295,P=j+(C<<20&4294967295|C>>>12),C=I+(P^j^O)+b[5]+4294588738&4294967295,I=P+(C<<4&4294967295|C>>>28),C=O+(I^P^j)+b[8]+2272392833&4294967295,O=I+(C<<11&4294967295|C>>>21),C=j+(O^I^P)+b[11]+1839030562&4294967295,j=O+(C<<16&4294967295|C>>>16),C=P+(j^O^I)+b[14]+4259657740&4294967295,P=j+(C<<23&4294967295|C>>>9),C=I+(P^j^O)+b[1]+2763975236&4294967295,I=P+(C<<4&4294967295|C>>>28),C=O+(I^P^j)+b[4]+1272893353&4294967295,O=I+(C<<11&4294967295|C>>>21),C=j+(O^I^P)+b[7]+4139469664&4294967295,j=O+(C<<16&4294967295|C>>>16),C=P+(j^O^I)+b[10]+3200236656&4294967295,P=j+(C<<23&4294967295|C>>>9),C=I+(P^j^O)+b[13]+681279174&4294967295,I=P+(C<<4&4294967295|C>>>28),C=O+(I^P^j)+b[0]+3936430074&4294967295,O=I+(C<<11&4294967295|C>>>21),C=j+(O^I^P)+b[3]+3572445317&4294967295,j=O+(C<<16&4294967295|C>>>16),C=P+(j^O^I)+b[6]+76029189&4294967295,P=j+(C<<23&4294967295|C>>>9),C=I+(P^j^O)+b[9]+3654602809&4294967295,I=P+(C<<4&4294967295|C>>>28),C=O+(I^P^j)+b[12]+3873151461&4294967295,O=I+(C<<11&4294967295|C>>>21),C=j+(O^I^P)+b[15]+530742520&4294967295,j=O+(C<<16&4294967295|C>>>16),C=P+(j^O^I)+b[2]+3299628645&4294967295,P=j+(C<<23&4294967295|C>>>9),C=I+(j^(P|~O))+b[0]+4096336452&4294967295,I=P+(C<<6&4294967295|C>>>26),C=O+(P^(I|~j))+b[7]+1126891415&4294967295,O=I+(C<<10&4294967295|C>>>22),C=j+(I^(O|~P))+b[14]+2878612391&4294967295,j=O+(C<<15&4294967295|C>>>17),C=P+(O^(j|~I))+b[5]+4237533241&4294967295,P=j+(C<<21&4294967295|C>>>11),C=I+(j^(P|~O))+b[12]+1700485571&4294967295,I=P+(C<<6&4294967295|C>>>26),C=O+(P^(I|~j))+b[3]+2399980690&4294967295,O=I+(C<<10&4294967295|C>>>22),C=j+(I^(O|~P))+b[10]+4293915773&4294967295,j=O+(C<<15&4294967295|C>>>17),C=P+(O^(j|~I))+b[1]+2240044497&4294967295,P=j+(C<<21&4294967295|C>>>11),C=I+(j^(P|~O))+b[8]+1873313359&4294967295,I=P+(C<<6&4294967295|C>>>26),C=O+(P^(I|~j))+b[15]+4264355552&4294967295,O=I+(C<<10&4294967295|C>>>22),C=j+(I^(O|~P))+b[6]+2734768916&4294967295,j=O+(C<<15&4294967295|C>>>17),C=P+(O^(j|~I))+b[13]+1309151649&4294967295,P=j+(C<<21&4294967295|C>>>11),C=I+(j^(P|~O))+b[4]+4149444226&4294967295,I=P+(C<<6&4294967295|C>>>26),C=O+(P^(I|~j))+b[11]+3174756917&4294967295,O=I+(C<<10&4294967295|C>>>22),C=j+(I^(O|~P))+b[2]+718787259&4294967295,j=O+(C<<15&4294967295|C>>>17),C=P+(O^(j|~I))+b[9]+3951481745&4294967295,w.g[0]=w.g[0]+I&4294967295,w.g[1]=w.g[1]+(j+(C<<21&4294967295|C>>>11))&4294967295,w.g[2]=w.g[2]+j&4294967295,w.g[3]=w.g[3]+O&4294967295}r.prototype.u=function(w,I){I===void 0&&(I=w.length);for(var P=I-this.blockSize,b=this.B,j=this.h,O=0;O<I;){if(j==0)for(;O<=P;)i(this,w,O),O+=this.blockSize;if(typeof w=="string"){for(;O<I;)if(b[j++]=w.charCodeAt(O++),j==this.blockSize){i(this,b),j=0;break}}else for(;O<I;)if(b[j++]=w[O++],j==this.blockSize){i(this,b),j=0;break}}this.h=j,this.o+=I},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var I=1;I<w.length-8;++I)w[I]=0;var P=8*this.o;for(I=w.length-8;I<w.length;++I)w[I]=P&255,P/=256;for(this.u(w),w=Array(16),I=P=0;4>I;++I)for(var b=0;32>b;b+=8)w[P++]=this.g[I]>>>b&255;return w};function o(w,I){var P=a;return Object.prototype.hasOwnProperty.call(P,w)?P[w]:P[w]=I(w)}function s(w,I){this.h=I;for(var P=[],b=!0,j=w.length-1;0<=j;j--){var O=w[j]|0;b&&O==I||(P[j]=O,b=!1)}this.g=P}var a={};function l(w){return-128<=w&&128>w?o(w,function(I){return new s([I|0],0>I?-1:0)}):new s([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return S(d(-w));for(var I=[],P=1,b=0;w>=P;b++)I[b]=w/P|0,P*=4294967296;return new s(I,0)}function f(w,I){if(w.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(w.charAt(0)=="-")return S(f(w.substring(1),I));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=d(Math.pow(I,8)),b=m,j=0;j<w.length;j+=8){var O=Math.min(8,w.length-j),C=parseInt(w.substring(j,j+O),I);8>O?(O=d(Math.pow(I,O)),b=b.j(O).add(d(C))):(b=b.j(P),b=b.add(d(C)))}return b}var m=l(0),E=l(1),_=l(16777216);t=s.prototype,t.m=function(){if(A(this))return-S(this).m();for(var w=0,I=1,P=0;P<this.g.length;P++){var b=this.i(P);w+=(0<=b?b:4294967296+b)*I,I*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(T(this))return"0";if(A(this))return"-"+S(this).toString(w);for(var I=d(Math.pow(w,6)),P=this,b="";;){var j=x(P,I).g;P=y(P,j.j(I));var O=((0<P.g.length?P.g[0]:P.h)>>>0).toString(w);if(P=j,T(P))return O+b;for(;6>O.length;)O="0"+O;b=O+b}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function T(w){if(w.h!=0)return!1;for(var I=0;I<w.g.length;I++)if(w.g[I]!=0)return!1;return!0}function A(w){return w.h==-1}t.l=function(w){return w=y(this,w),A(w)?-1:T(w)?0:1};function S(w){for(var I=w.g.length,P=[],b=0;b<I;b++)P[b]=~w.g[b];return new s(P,~w.h).add(E)}t.abs=function(){return A(this)?S(this):this},t.add=function(w){for(var I=Math.max(this.g.length,w.g.length),P=[],b=0,j=0;j<=I;j++){var O=b+(this.i(j)&65535)+(w.i(j)&65535),C=(O>>>16)+(this.i(j)>>>16)+(w.i(j)>>>16);b=C>>>16,O&=65535,C&=65535,P[j]=C<<16|O}return new s(P,P[P.length-1]&-2147483648?-1:0)};function y(w,I){return w.add(S(I))}t.j=function(w){if(T(this)||T(w))return m;if(A(this))return A(w)?S(this).j(S(w)):S(S(this).j(w));if(A(w))return S(this.j(S(w)));if(0>this.l(_)&&0>w.l(_))return d(this.m()*w.m());for(var I=this.g.length+w.g.length,P=[],b=0;b<2*I;b++)P[b]=0;for(b=0;b<this.g.length;b++)for(var j=0;j<w.g.length;j++){var O=this.i(b)>>>16,C=this.i(b)&65535,K=w.i(j)>>>16,ie=w.i(j)&65535;P[2*b+2*j]+=C*ie,g(P,2*b+2*j),P[2*b+2*j+1]+=O*ie,g(P,2*b+2*j+1),P[2*b+2*j+1]+=C*K,g(P,2*b+2*j+1),P[2*b+2*j+2]+=O*K,g(P,2*b+2*j+2)}for(b=0;b<I;b++)P[b]=P[2*b+1]<<16|P[2*b];for(b=I;b<2*I;b++)P[b]=0;return new s(P,0)};function g(w,I){for(;(w[I]&65535)!=w[I];)w[I+1]+=w[I]>>>16,w[I]&=65535,I++}function k(w,I){this.g=w,this.h=I}function x(w,I){if(T(I))throw Error("division by zero");if(T(w))return new k(m,m);if(A(w))return I=x(S(w),I),new k(S(I.g),S(I.h));if(A(I))return I=x(w,S(I)),new k(S(I.g),I.h);if(30<w.g.length){if(A(w)||A(I))throw Error("slowDivide_ only works with positive integers.");for(var P=E,b=I;0>=b.l(w);)P=R(P),b=R(b);var j=N(P,1),O=N(b,1);for(b=N(b,2),P=N(P,2);!T(b);){var C=O.add(b);0>=C.l(w)&&(j=j.add(P),O=C),b=N(b,1),P=N(P,1)}return I=y(w,j.j(I)),new k(j,I)}for(j=m;0<=w.l(I);){for(P=Math.max(1,Math.floor(w.m()/I.m())),b=Math.ceil(Math.log(P)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),O=d(P),C=O.j(I);A(C)||0<C.l(w);)P-=b,O=d(P),C=O.j(I);T(O)&&(O=E),j=j.add(O),w=y(w,C)}return new k(j,w)}t.A=function(w){return x(this,w).h},t.and=function(w){for(var I=Math.max(this.g.length,w.g.length),P=[],b=0;b<I;b++)P[b]=this.i(b)&w.i(b);return new s(P,this.h&w.h)},t.or=function(w){for(var I=Math.max(this.g.length,w.g.length),P=[],b=0;b<I;b++)P[b]=this.i(b)|w.i(b);return new s(P,this.h|w.h)},t.xor=function(w){for(var I=Math.max(this.g.length,w.g.length),P=[],b=0;b<I;b++)P[b]=this.i(b)^w.i(b);return new s(P,this.h^w.h)};function R(w){for(var I=w.g.length+1,P=[],b=0;b<I;b++)P[b]=w.i(b)<<1|w.i(b-1)>>>31;return new s(P,w.h)}function N(w,I){var P=I>>5;I%=32;for(var b=w.g.length-P,j=[],O=0;O<b;O++)j[O]=0<I?w.i(O+P)>>>I|w.i(O+P+1)<<32-I:w.i(O+P);return new s(j,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,T8=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=d,s.fromString=f,oo=s}).apply(typeof o_<"u"?o_:typeof self<"u"?self:typeof window<"u"?window:{});var xc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var I8,hl,S8,rd,Qm,C8,L8,A8;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,v){return u==Array.prototype||u==Object.prototype||(u[p]=v.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof xc=="object"&&xc];for(var p=0;p<u.length;++p){var v=u[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=n(this);function i(u,p){if(p)e:{var v=r;u=u.split(".");for(var L=0;L<u.length-1;L++){var F=u[L];if(!(F in v))break e;v=v[F]}u=u[u.length-1],L=v[u],p=p(L),p!=L&&p!=null&&e(v,u,{configurable:!0,writable:!0,value:p})}}function o(u,p){u instanceof String&&(u+="");var v=0,L=!1,F={next:function(){if(!L&&v<u.length){var U=v++;return{value:p(U,u[U]),done:!1}}return L=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}i("Array.prototype.values",function(u){return u||function(){return o(this,function(p,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function l(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function d(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function f(u,p,v){return u.call.apply(u.bind,arguments)}function m(u,p,v){if(!u)throw Error();if(2<arguments.length){var L=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,L),u.apply(p,F)}}return function(){return u.apply(p,arguments)}}function E(u,p,v){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,E.apply(null,arguments)}function _(u,p){var v=Array.prototype.slice.call(arguments,1);return function(){var L=v.slice();return L.push.apply(L,arguments),u.apply(this,L)}}function T(u,p){function v(){}v.prototype=p.prototype,u.aa=p.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(L,F,U){for(var q=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)q[Ae-2]=arguments[Ae];return p.prototype[F].apply(L,q)}}function A(u){const p=u.length;if(0<p){const v=Array(p);for(let L=0;L<p;L++)v[L]=u[L];return v}return[]}function S(u,p){for(let v=1;v<arguments.length;v++){const L=arguments[v];if(l(L)){const F=u.length||0,U=L.length||0;u.length=F+U;for(let q=0;q<U;q++)u[F+q]=L[q]}else u.push(L)}}class y{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function g(u){return/^[\s\xa0]*$/.test(u)}function k(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function x(u){return x[" "](u),u}x[" "]=function(){};var R=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function N(u,p,v){for(const L in u)p.call(v,u[L],L,u)}function w(u,p){for(const v in u)p.call(void 0,u[v],v,u)}function I(u){const p={};for(const v in u)p[v]=u[v];return p}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(u,p){let v,L;for(let F=1;F<arguments.length;F++){L=arguments[F];for(v in L)u[v]=L[v];for(let U=0;U<P.length;U++)v=P[U],Object.prototype.hasOwnProperty.call(L,v)&&(u[v]=L[v])}}function j(u){var p=1;u=u.split(":");const v=[];for(;0<p&&u.length;)v.push(u.shift()),p--;return u.length&&v.push(u.join(":")),v}function O(u){a.setTimeout(()=>{throw u},0)}function C(){var u=G;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class K{constructor(){this.h=this.g=null}add(p,v){const L=ie.get();L.set(p,v),this.h?this.h.next=L:this.g=L,this.h=L}}var ie=new y(()=>new ee,u=>u.reset());class ee{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let z,$=!1,G=new K,J=()=>{const u=a.Promise.resolve(void 0);z=()=>{u.then(le)}};var le=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(v){O(v)}var p=ie;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}$=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Fe=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};a.addEventListener("test",v,p),a.removeEventListener("test",v,p)}catch{}return u}();function Pe(u,p){if(he.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,L=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(R){e:{try{x(p.nodeName);var F=!0;break e}catch{}F=!1}F||(p=null)}}else v=="mouseover"?p=u.fromElement:v=="mouseout"&&(p=u.toElement);this.relatedTarget=p,L?(this.clientX=L.clientX!==void 0?L.clientX:L.pageX,this.clientY=L.clientY!==void 0?L.clientY:L.pageY,this.screenX=L.screenX||0,this.screenY=L.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Qe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Pe.aa.h.call(this)}}T(Pe,he);var Qe={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ue="closure_listenable_"+(1e6*Math.random()|0),xt=0;function Vt(u,p,v,L,F){this.listener=u,this.proxy=null,this.src=p,this.type=v,this.capture=!!L,this.ha=F,this.key=++xt,this.da=this.fa=!1}function Kt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Tt(u){this.src=u,this.g={},this.h=0}Tt.prototype.add=function(u,p,v,L,F){var U=u.toString();u=this.g[U],u||(u=this.g[U]=[],this.h++);var q=Mi(u,p,L,F);return-1<q?(p=u[q],v||(p.fa=!1)):(p=new Vt(p,this.src,U,!!L,F),p.fa=v,u.push(p)),p};function It(u,p){var v=p.type;if(v in u.g){var L=u.g[v],F=Array.prototype.indexOf.call(L,p,void 0),U;(U=0<=F)&&Array.prototype.splice.call(L,F,1),U&&(Kt(p),u.g[v].length==0&&(delete u.g[v],u.h--))}}function Mi(u,p,v,L){for(var F=0;F<u.length;++F){var U=u[F];if(!U.da&&U.listener==p&&U.capture==!!v&&U.ha==L)return F}return-1}var Oi="closure_lm_"+(1e6*Math.random()|0),Di={};function ot(u,p,v,L,F){if(Array.isArray(p)){for(var U=0;U<p.length;U++)ot(u,p[U],v,L,F);return null}return v=gy(v),u&&u[Ue]?u.K(p,v,d(L)?!!L.capture:!1,F):D(u,p,v,!1,L,F)}function D(u,p,v,L,F,U){if(!p)throw Error("Invalid event type");var q=d(F)?!!F.capture:!!F,Ae=ls(u);if(Ae||(u[Oi]=Ae=new Tt(u)),v=Ae.add(p,v,L,q,U),v.proxy)return v;if(L=ce(),v.proxy=L,L.src=u,L.listener=v,u.addEventListener)Fe||(F=q),F===void 0&&(F=!1),u.addEventListener(p.toString(),L,F);else if(u.attachEvent)u.attachEvent(Ie(p.toString()),L);else if(u.addListener&&u.removeListener)u.addListener(L);else throw Error("addEventListener and attachEvent are unavailable.");return v}function ce(){function u(v){return p.call(u.src,u.listener,v)}const p=st;return u}function ye(u,p,v,L,F){if(Array.isArray(p))for(var U=0;U<p.length;U++)ye(u,p[U],v,L,F);else L=d(L)?!!L.capture:!!L,v=gy(v),u&&u[Ue]?(u=u.i,p=String(p).toString(),p in u.g&&(U=u.g[p],v=Mi(U,v,L,F),-1<v&&(Kt(U[v]),Array.prototype.splice.call(U,v,1),U.length==0&&(delete u.g[p],u.h--)))):u&&(u=ls(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Mi(p,v,L,F)),(v=-1<u?p[u]:null)&&me(v))}function me(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Ue])It(p.i,u);else{var v=u.type,L=u.proxy;p.removeEventListener?p.removeEventListener(v,L,u.capture):p.detachEvent?p.detachEvent(Ie(v),L):p.addListener&&p.removeListener&&p.removeListener(L),(v=ls(p))?(It(v,u),v.h==0&&(v.src=null,p[Oi]=null)):Kt(u)}}}function Ie(u){return u in Di?Di[u]:Di[u]="on"+u}function st(u,p){if(u.da)u=!0;else{p=new Pe(p,this);var v=u.listener,L=u.ha||u.src;u.fa&&me(u),u=v.call(L,p)}return u}function ls(u){return u=u[Oi],u instanceof Tt?u:null}var ba="__closure_events_fn_"+(1e9*Math.random()>>>0);function gy(u){return typeof u=="function"?u:(u[ba]||(u[ba]=function(p){return u.handleEvent(p)}),u[ba])}function St(){ne.call(this),this.i=new Tt(this),this.M=this,this.F=null}T(St,ne),St.prototype[Ue]=!0,St.prototype.removeEventListener=function(u,p,v,L){ye(this,u,p,v,L)};function Ft(u,p){var v,L=u.F;if(L)for(v=[];L;L=L.F)v.push(L);if(u=u.M,L=p.type||p,typeof p=="string")p=new he(p,u);else if(p instanceof he)p.target=p.target||u;else{var F=p;p=new he(L,u),b(p,F)}if(F=!0,v)for(var U=v.length-1;0<=U;U--){var q=p.g=v[U];F=zu(q,L,!0,p)&&F}if(q=p.g=u,F=zu(q,L,!0,p)&&F,F=zu(q,L,!1,p)&&F,v)for(U=0;U<v.length;U++)q=p.g=v[U],F=zu(q,L,!1,p)&&F}St.prototype.N=function(){if(St.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var v=u.g[p],L=0;L<v.length;L++)Kt(v[L]);delete u.g[p],u.h--}}this.F=null},St.prototype.K=function(u,p,v,L){return this.i.add(String(u),p,!1,v,L)},St.prototype.L=function(u,p,v,L){return this.i.add(String(u),p,!0,v,L)};function zu(u,p,v,L){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var F=!0,U=0;U<p.length;++U){var q=p[U];if(q&&!q.da&&q.capture==v){var Ae=q.listener,pt=q.ha||q.src;q.fa&&It(u.i,q),F=Ae.call(pt,L)!==!1&&F}}return F&&!L.defaultPrevented}function yy(u,p,v){if(typeof u=="function")v&&(u=E(u,v));else if(u&&typeof u.handleEvent=="function")u=E(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function vy(u){u.g=yy(()=>{u.g=null,u.i&&(u.i=!1,vy(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class vS extends ne{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:vy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ja(u){ne.call(this),this.h=u,this.g={}}T(ja,ne);var _y=[];function ky(u){N(u.g,function(p,v){this.g.hasOwnProperty(v)&&me(p)},u),u.g={}}ja.prototype.N=function(){ja.aa.N.call(this),ky(this)},ja.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wf=a.JSON.stringify,_S=a.JSON.parse,kS=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function xf(){}xf.prototype.h=null;function Ey(u){return u.h||(u.h=u.i())}function wy(){}var Na={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Tf(){he.call(this,"d")}T(Tf,he);function If(){he.call(this,"c")}T(If,he);var Vi={},xy=null;function Bu(){return xy=xy||new St}Vi.La="serverreachability";function Ty(u){he.call(this,Vi.La,u)}T(Ty,he);function Ma(u){const p=Bu();Ft(p,new Ty(p))}Vi.STAT_EVENT="statevent";function Iy(u,p){he.call(this,Vi.STAT_EVENT,u),this.stat=p}T(Iy,he);function Ut(u){const p=Bu();Ft(p,new Iy(p,u))}Vi.Ma="timingevent";function Sy(u,p){he.call(this,Vi.Ma,u),this.size=p}T(Sy,he);function Oa(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function Da(){this.g=!0}Da.prototype.xa=function(){this.g=!1};function ES(u,p,v,L,F,U){u.info(function(){if(u.g)if(U)for(var q="",Ae=U.split("&"),pt=0;pt<Ae.length;pt++){var _e=Ae[pt].split("=");if(1<_e.length){var Ct=_e[0];_e=_e[1];var Lt=Ct.split("_");q=2<=Lt.length&&Lt[1]=="type"?q+(Ct+"="+_e+"&"):q+(Ct+"=redacted&")}}else q=null;else q=U;return"XMLHTTP REQ ("+L+") [attempt "+F+"]: "+p+`
`+v+`
`+q})}function wS(u,p,v,L,F,U,q){u.info(function(){return"XMLHTTP RESP ("+L+") [ attempt "+F+"]: "+p+`
`+v+`
`+U+" "+q})}function us(u,p,v,L){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+TS(u,v)+(L?" "+L:"")})}function xS(u,p){u.info(function(){return"TIMEOUT: "+p})}Da.prototype.info=function(){};function TS(u,p){if(!u.g)return p;if(!p)return null;try{var v=JSON.parse(p);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var L=v[u];if(!(2>L.length)){var F=L[1];if(Array.isArray(F)&&!(1>F.length)){var U=F[0];if(U!="noop"&&U!="stop"&&U!="close")for(var q=1;q<F.length;q++)F[q]=""}}}}return wf(v)}catch{return p}}var Hu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Cy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sf;function qu(){}T(qu,xf),qu.prototype.g=function(){return new XMLHttpRequest},qu.prototype.i=function(){return{}},Sf=new qu;function Dr(u,p,v,L){this.j=u,this.i=p,this.l=v,this.R=L||1,this.U=new ja(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ly}function Ly(){this.i=null,this.g="",this.h=!1}var Ay={},Cf={};function Lf(u,p,v){u.L=1,u.v=Qu(dr(p)),u.m=v,u.P=!0,Py(u,null)}function Py(u,p){u.F=Date.now(),Yu(u),u.A=dr(u.v);var v=u.A,L=u.R;Array.isArray(L)||(L=[String(L)]),By(v.i,"t",L),u.C=0,v=u.j.J,u.h=new Ly,u.g=lv(u.j,v?p:null,!u.m),0<u.O&&(u.M=new vS(E(u.Y,u,u.g),u.O)),p=u.U,v=u.g,L=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(_y[0]=F.toString()),F=_y);for(var U=0;U<F.length;U++){var q=ot(v,F[U],L||p.handleEvent,!1,p.h||p);if(!q)break;p.g[q.key]=q}p=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Ma(),ES(u.i,u.u,u.A,u.l,u.R,u.m)}Dr.prototype.ca=function(u){u=u.target;const p=this.M;p&&hr(u)==3?p.j():this.Y(u)},Dr.prototype.Y=function(u){try{if(u==this.g)e:{const Lt=hr(this.g);var p=this.g.Ba();const hs=this.g.Z();if(!(3>Lt)&&(Lt!=3||this.g&&(this.h.h||this.g.oa()||Zy(this.g)))){this.J||Lt!=4||p==7||(p==8||0>=hs?Ma(3):Ma(2)),Af(this);var v=this.g.Z();this.X=v;t:if(Ry(this)){var L=Zy(this.g);u="";var F=L.length,U=hr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fi(this),Va(this);var q="";break t}this.h.i=new a.TextDecoder}for(p=0;p<F;p++)this.h.h=!0,u+=this.h.i.decode(L[p],{stream:!(U&&p==F-1)});L.length=0,this.h.g+=u,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=v==200,wS(this.i,this.u,this.A,this.l,this.R,Lt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ae,pt=this.g;if((Ae=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(Ae)){var _e=Ae;break t}}_e=null}if(v=_e)us(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pf(this,v);else{this.o=!1,this.s=3,Ut(12),Fi(this),Va(this);break e}}if(this.P){v=!0;let An;for(;!this.J&&this.C<q.length;)if(An=IS(this,q),An==Cf){Lt==4&&(this.s=4,Ut(14),v=!1),us(this.i,this.l,null,"[Incomplete Response]");break}else if(An==Ay){this.s=4,Ut(15),us(this.i,this.l,q,"[Invalid Chunk]"),v=!1;break}else us(this.i,this.l,An,null),Pf(this,An);if(Ry(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Lt!=4||q.length!=0||this.h.h||(this.s=1,Ut(16),v=!1),this.o=this.o&&v,!v)us(this.i,this.l,q,"[Invalid Chunked Response]"),Fi(this),Va(this);else if(0<q.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Of(Ct),Ct.M=!0,Ut(11))}}else us(this.i,this.l,q,null),Pf(this,q);Lt==4&&Fi(this),this.o&&!this.J&&(Lt==4?iv(this.j,this):(this.o=!1,Yu(this)))}else $S(this.g),v==400&&0<q.indexOf("Unknown SID")?(this.s=3,Ut(12)):(this.s=0,Ut(13)),Fi(this),Va(this)}}}catch{}finally{}};function Ry(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function IS(u,p){var v=u.C,L=p.indexOf(`
`,v);return L==-1?Cf:(v=Number(p.substring(v,L)),isNaN(v)?Ay:(L+=1,L+v>p.length?Cf:(p=p.slice(L,L+v),u.C=L+v,p)))}Dr.prototype.cancel=function(){this.J=!0,Fi(this)};function Yu(u){u.S=Date.now()+u.I,by(u,u.I)}function by(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Oa(E(u.ba,u),p)}function Af(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Dr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(xS(this.i,this.A),this.L!=2&&(Ma(),Ut(17)),Fi(this),this.s=2,Va(this)):by(this,this.S-u)};function Va(u){u.j.G==0||u.J||iv(u.j,u)}function Fi(u){Af(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,ky(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function Pf(u,p){try{var v=u.j;if(v.G!=0&&(v.g==u||Rf(v.h,u))){if(!u.K&&Rf(v.h,u)&&v.G==3){try{var L=v.Da.g.parse(p)}catch{L=null}if(Array.isArray(L)&&L.length==3){var F=L;if(F[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)nc(v),ec(v);else break e;Mf(v),Ut(18)}}else v.za=F[1],0<v.za-v.T&&37500>F[2]&&v.F&&v.v==0&&!v.C&&(v.C=Oa(E(v.Za,v),6e3));if(1>=My(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Wi(v,11)}else if((u.K||v.g==u)&&nc(v),!g(p))for(F=v.Da.g.parse(p),p=0;p<F.length;p++){let _e=F[p];if(v.T=_e[0],_e=_e[1],v.G==2)if(_e[0]=="c"){v.K=_e[1],v.ia=_e[2];const Ct=_e[3];Ct!=null&&(v.la=Ct,v.j.info("VER="+v.la));const Lt=_e[4];Lt!=null&&(v.Aa=Lt,v.j.info("SVER="+v.Aa));const hs=_e[5];hs!=null&&typeof hs=="number"&&0<hs&&(L=1.5*hs,v.L=L,v.j.info("backChannelRequestTimeoutMs_="+L)),L=v;const An=u.g;if(An){const ic=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ic){var U=L.h;U.g||ic.indexOf("spdy")==-1&&ic.indexOf("quic")==-1&&ic.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(bf(U,U.h),U.h=null))}if(L.D){const Df=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;Df&&(L.ya=Df,be(L.I,L.D,Df))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),L=v;var q=u;if(L.qa=av(L,L.J?L.ia:null,L.W),q.K){Oy(L.h,q);var Ae=q,pt=L.L;pt&&(Ae.I=pt),Ae.B&&(Af(Ae),Yu(Ae)),L.g=q}else nv(L);0<v.i.length&&tc(v)}else _e[0]!="stop"&&_e[0]!="close"||Wi(v,7);else v.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?Wi(v,7):Nf(v):_e[0]!="noop"&&v.l&&v.l.ta(_e),v.v=0)}}Ma(4)}catch{}}var SS=class{constructor(u,p){this.g=u,this.map=p}};function jy(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ny(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function My(u){return u.h?1:u.g?u.g.size:0}function Rf(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function bf(u,p){u.g?u.g.add(p):u.h=p}function Oy(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}jy.prototype.cancel=function(){if(this.i=Dy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Dy(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const v of u.g.values())p=p.concat(v.D);return p}return A(u.i)}function CS(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var p=[],v=u.length,L=0;L<v;L++)p.push(u[L]);return p}p=[],v=0;for(L in u)p[v++]=u[L];return p}function LS(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var p=[];u=u.length;for(var v=0;v<u;v++)p.push(v);return p}p=[],v=0;for(const L in u)p[v++]=L;return p}}}function Vy(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var v=LS(u),L=CS(u),F=L.length,U=0;U<F;U++)p.call(void 0,L[U],v&&v[U],u)}var Fy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function AS(u,p){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var L=u[v].indexOf("="),F=null;if(0<=L){var U=u[v].substring(0,L);F=u[v].substring(L+1)}else U=u[v];p(U,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Ui(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ui){this.h=u.h,Gu(this,u.j),this.o=u.o,this.g=u.g,Ku(this,u.s),this.l=u.l;var p=u.i,v=new Wa;v.i=p.i,p.g&&(v.g=new Map(p.g),v.h=p.h),Uy(this,v),this.m=u.m}else u&&(p=String(u).match(Fy))?(this.h=!1,Gu(this,p[1]||"",!0),this.o=Fa(p[2]||""),this.g=Fa(p[3]||"",!0),Ku(this,p[4]),this.l=Fa(p[5]||"",!0),Uy(this,p[6]||"",!0),this.m=Fa(p[7]||"")):(this.h=!1,this.i=new Wa(null,this.h))}Ui.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Ua(p,Wy,!0),":");var v=this.g;return(v||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Ua(p,Wy,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(Ua(v,v.charAt(0)=="/"?bS:RS,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",Ua(v,NS)),u.join("")};function dr(u){return new Ui(u)}function Gu(u,p,v){u.j=v?Fa(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Ku(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Uy(u,p,v){p instanceof Wa?(u.i=p,MS(u.i,u.h)):(v||(p=Ua(p,jS)),u.i=new Wa(p,u.h))}function be(u,p,v){u.i.set(p,v)}function Qu(u){return be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Fa(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ua(u,p,v){return typeof u=="string"?(u=encodeURI(u).replace(p,PS),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function PS(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Wy=/[#\/\?@]/g,RS=/[#\?:]/g,bS=/[#\?]/g,jS=/[#\?@]/g,NS=/#/g;function Wa(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Vr(u){u.g||(u.g=new Map,u.h=0,u.i&&AS(u.i,function(p,v){u.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}t=Wa.prototype,t.add=function(u,p){Vr(this),this.i=null,u=cs(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(p),this.h+=1,this};function $y(u,p){Vr(u),p=cs(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function zy(u,p){return Vr(u),p=cs(u,p),u.g.has(p)}t.forEach=function(u,p){Vr(this),this.g.forEach(function(v,L){v.forEach(function(F){u.call(p,F,L,this)},this)},this)},t.na=function(){Vr(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),v=[];for(let L=0;L<p.length;L++){const F=u[L];for(let U=0;U<F.length;U++)v.push(p[L])}return v},t.V=function(u){Vr(this);let p=[];if(typeof u=="string")zy(this,u)&&(p=p.concat(this.g.get(cs(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)p=p.concat(u[v])}return p},t.set=function(u,p){return Vr(this),this.i=null,u=cs(this,u),zy(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},t.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function By(u,p,v){$y(u,p),0<v.length&&(u.i=null,u.g.set(cs(u,p),A(v)),u.h+=v.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var v=0;v<p.length;v++){var L=p[v];const U=encodeURIComponent(String(L)),q=this.V(L);for(L=0;L<q.length;L++){var F=U;q[L]!==""&&(F+="="+encodeURIComponent(String(q[L]))),u.push(F)}}return this.i=u.join("&")};function cs(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function MS(u,p){p&&!u.j&&(Vr(u),u.i=null,u.g.forEach(function(v,L){var F=L.toLowerCase();L!=F&&($y(this,L),By(this,F,v))},u)),u.j=p}function OS(u,p){const v=new Da;if(a.Image){const L=new Image;L.onload=_(Fr,v,"TestLoadImage: loaded",!0,p,L),L.onerror=_(Fr,v,"TestLoadImage: error",!1,p,L),L.onabort=_(Fr,v,"TestLoadImage: abort",!1,p,L),L.ontimeout=_(Fr,v,"TestLoadImage: timeout",!1,p,L),a.setTimeout(function(){L.ontimeout&&L.ontimeout()},1e4),L.src=u}else p(!1)}function DS(u,p){const v=new Da,L=new AbortController,F=setTimeout(()=>{L.abort(),Fr(v,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:L.signal}).then(U=>{clearTimeout(F),U.ok?Fr(v,"TestPingServer: ok",!0,p):Fr(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(F),Fr(v,"TestPingServer: error",!1,p)})}function Fr(u,p,v,L,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),L(v)}catch{}}function VS(){this.g=new kS}function FS(u,p,v){const L=v||"";try{Vy(u,function(F,U){let q=F;d(F)&&(q=wf(F)),p.push(L+U+"="+encodeURIComponent(q))})}catch(F){throw p.push(L+"type="+encodeURIComponent("_badmap")),F}}function Zu(u){this.l=u.Ub||null,this.j=u.eb||!1}T(Zu,xf),Zu.prototype.g=function(){return new Xu(this.l,this.j)},Zu.prototype.i=function(u){return function(){return u}}({});function Xu(u,p){St.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(Xu,St),t=Xu.prototype,t.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,za(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$a(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,za(this)),this.g&&(this.readyState=3,za(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hy(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hy(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?$a(this):za(this),this.readyState==3&&Hy(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,$a(this))},t.Qa=function(u){this.g&&(this.response=u,$a(this))},t.ga=function(){this.g&&$a(this)};function $a(u){u.readyState=4,u.l=null,u.j=null,u.v=null,za(u)}t.setRequestHeader=function(u,p){this.u.append(u,p)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=p.next();return u.join(`\r
`)};function za(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Xu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function qy(u){let p="";return N(u,function(v,L){p+=L,p+=":",p+=v,p+=`\r
`}),p}function jf(u,p,v){e:{for(L in v){var L=!1;break e}L=!0}L||(v=qy(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):be(u,p,v))}function Ge(u){St.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Ge,St);var US=/^https?$/i,WS=["POST","PUT"];t=Ge.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,p,v,L){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sf.g(),this.v=this.o?Ey(this.o):Ey(Sf),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(U){Yy(this,U);return}if(u=v||"",v=new Map(this.headers),L)if(Object.getPrototypeOf(L)===Object.prototype)for(var F in L)v.set(F,L[F]);else if(typeof L.keys=="function"&&typeof L.get=="function")for(const U of L.keys())v.set(U,L.get(U));else throw Error("Unknown input type for opt_headers: "+String(L));L=Array.from(v.keys()).find(U=>U.toLowerCase()=="content-type"),F=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(WS,p,void 0))||L||F||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,q]of v)this.g.setRequestHeader(U,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qy(this),this.u=!0,this.g.send(u),this.u=!1}catch(U){Yy(this,U)}};function Yy(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Gy(u),Ju(u)}function Gy(u){u.A||(u.A=!0,Ft(u,"complete"),Ft(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ft(this,"complete"),Ft(this,"abort"),Ju(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ju(this,!0)),Ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ky(this):this.bb())},t.bb=function(){Ky(this)};function Ky(u){if(u.h&&typeof s<"u"&&(!u.v[1]||hr(u)!=4||u.Z()!=2)){if(u.u&&hr(u)==4)yy(u.Ea,0,u);else if(Ft(u,"readystatechange"),hr(u)==4){u.h=!1;try{const q=u.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var v;if(!(v=p)){var L;if(L=q===0){var F=String(u.D).match(Fy)[1]||null;!F&&a.self&&a.self.location&&(F=a.self.location.protocol.slice(0,-1)),L=!US.test(F?F.toLowerCase():"")}v=L}if(v)Ft(u,"complete"),Ft(u,"success");else{u.m=6;try{var U=2<hr(u)?u.g.statusText:""}catch{U=""}u.l=U+" ["+u.Z()+"]",Gy(u)}}finally{Ju(u)}}}}function Ju(u,p){if(u.g){Qy(u);const v=u.g,L=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||Ft(u,"ready");try{v.onreadystatechange=L}catch{}}}function Qy(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function hr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<hr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),_S(p)}};function Zy(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function $S(u){const p={};u=(u.g&&2<=hr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let L=0;L<u.length;L++){if(g(u[L]))continue;var v=j(u[L]);const F=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const U=p[F]||[];p[F]=U,U.push(v)}w(p,function(L){return L.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ba(u,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||p}function Xy(u){this.Aa=0,this.i=[],this.j=new Da,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ba("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ba("baseRetryDelayMs",5e3,u),this.cb=Ba("retryDelaySeedMs",1e4,u),this.Wa=Ba("forwardChannelMaxRetries",2,u),this.wa=Ba("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new jy(u&&u.concurrentRequestLimit),this.Da=new VS,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Xy.prototype,t.la=8,t.G=1,t.connect=function(u,p,v,L){Ut(0),this.W=u,this.H=p||{},v&&L!==void 0&&(this.H.OSID=v,this.H.OAID=L),this.F=this.X,this.I=av(this,null,this.W),tc(this)};function Nf(u){if(Jy(u),u.G==3){var p=u.U++,v=dr(u.I);if(be(v,"SID",u.K),be(v,"RID",p),be(v,"TYPE","terminate"),Ha(u,v),p=new Dr(u,u.j,p),p.L=2,p.v=Qu(dr(v)),v=!1,a.navigator&&a.navigator.sendBeacon)try{v=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!v&&a.Image&&(new Image().src=p.v,v=!0),v||(p.g=lv(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Yu(p)}sv(u)}function ec(u){u.g&&(Of(u),u.g.cancel(),u.g=null)}function Jy(u){ec(u),u.u&&(a.clearTimeout(u.u),u.u=null),nc(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function tc(u){if(!Ny(u.h)&&!u.s){u.s=!0;var p=u.Ga;z||J(),$||(z(),$=!0),G.add(p,u),u.B=0}}function zS(u,p){return My(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Oa(E(u.Ga,u,p),ov(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new Dr(this,this.j,u);let U=this.o;if(this.S&&(U?(U=I(U),b(U,this.S)):U=this.S),this.m!==null||this.O||(F.H=U,U=null),this.P)e:{for(var p=0,v=0;v<this.i.length;v++){t:{var L=this.i[v];if("__data__"in L.map&&(L=L.map.__data__,typeof L=="string")){L=L.length;break t}L=void 0}if(L===void 0)break;if(p+=L,4096<p){p=v;break e}if(p===4096||v===this.i.length-1){p=v+1;break e}}p=1e3}else p=1e3;p=tv(this,F,p),v=dr(this.I),be(v,"RID",u),be(v,"CVER",22),this.D&&be(v,"X-HTTP-Session-Id",this.D),Ha(this,v),U&&(this.O?p="headers="+encodeURIComponent(String(qy(U)))+"&"+p:this.m&&jf(v,this.m,U)),bf(this.h,F),this.Ua&&be(v,"TYPE","init"),this.P?(be(v,"$req",p),be(v,"SID","null"),F.T=!0,Lf(F,v,null)):Lf(F,v,p),this.G=2}}else this.G==3&&(u?ev(this,u):this.i.length==0||Ny(this.h)||ev(this))};function ev(u,p){var v;p?v=p.l:v=u.U++;const L=dr(u.I);be(L,"SID",u.K),be(L,"RID",v),be(L,"AID",u.T),Ha(u,L),u.m&&u.o&&jf(L,u.m,u.o),v=new Dr(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),p&&(u.i=p.D.concat(u.i)),p=tv(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),bf(u.h,v),Lf(v,L,p)}function Ha(u,p){u.H&&N(u.H,function(v,L){be(p,L,v)}),u.l&&Vy({},function(v,L){be(p,L,v)})}function tv(u,p,v){v=Math.min(u.i.length,v);var L=u.l?E(u.l.Na,u.l,u):null;e:{var F=u.i;let U=-1;for(;;){const q=["count="+v];U==-1?0<v?(U=F[0].g,q.push("ofs="+U)):U=0:q.push("ofs="+U);let Ae=!0;for(let pt=0;pt<v;pt++){let _e=F[pt].g;const Ct=F[pt].map;if(_e-=U,0>_e)U=Math.max(0,F[pt].g-100),Ae=!1;else try{FS(Ct,q,"req"+_e+"_")}catch{L&&L(Ct)}}if(Ae){L=q.join("&");break e}}}return u=u.i.splice(0,v),p.D=u,L}function nv(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;z||J(),$||(z(),$=!0),G.add(p,u),u.v=0}}function Mf(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Oa(E(u.Fa,u),ov(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,rv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Oa(E(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ut(10),ec(this),rv(this))};function Of(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function rv(u){u.g=new Dr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=dr(u.qa);be(p,"RID","rpc"),be(p,"SID",u.K),be(p,"AID",u.T),be(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&be(p,"TO",u.ja),be(p,"TYPE","xmlhttp"),Ha(u,p),u.m&&u.o&&jf(p,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=Qu(dr(p)),v.m=null,v.P=!0,Py(v,u)}t.Za=function(){this.C!=null&&(this.C=null,ec(this),Mf(this),Ut(19))};function nc(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function iv(u,p){var v=null;if(u.g==p){nc(u),Of(u),u.g=null;var L=2}else if(Rf(u.h,p))v=p.D,Oy(u.h,p),L=1;else return;if(u.G!=0){if(p.o)if(L==1){v=p.m?p.m.length:0,p=Date.now()-p.F;var F=u.B;L=Bu(),Ft(L,new Sy(L,v)),tc(u)}else nv(u);else if(F=p.s,F==3||F==0&&0<p.X||!(L==1&&zS(u,p)||L==2&&Mf(u)))switch(v&&0<v.length&&(p=u.h,p.i=p.i.concat(v)),F){case 1:Wi(u,5);break;case 4:Wi(u,10);break;case 3:Wi(u,6);break;default:Wi(u,2)}}}function ov(u,p){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*p}function Wi(u,p){if(u.j.info("Error code "+p),p==2){var v=E(u.fb,u),L=u.Xa;const F=!L;L=new Ui(L||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Gu(L,"https"),Qu(L),F?OS(L.toString(),v):DS(L.toString(),v)}else Ut(2);u.G=0,u.l&&u.l.sa(p),sv(u),Jy(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))};function sv(u){if(u.G=0,u.ka=[],u.l){const p=Dy(u.h);(p.length!=0||u.i.length!=0)&&(S(u.ka,p),S(u.ka,u.i),u.h.i.length=0,A(u.i),u.i.length=0),u.l.ra()}}function av(u,p,v){var L=v instanceof Ui?dr(v):new Ui(v);if(L.g!="")p&&(L.g=p+"."+L.g),Ku(L,L.s);else{var F=a.location;L=F.protocol,p=p?p+"."+F.hostname:F.hostname,F=+F.port;var U=new Ui(null);L&&Gu(U,L),p&&(U.g=p),F&&Ku(U,F),v&&(U.l=v),L=U}return v=u.D,p=u.ya,v&&p&&be(L,v,p),be(L,"VER",u.la),Ha(u,L),L}function lv(u,p,v){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Ge(new Zu({eb:v})):new Ge(u.pa),p.Ha(u.J),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function uv(){}t=uv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function rc(){}rc.prototype.g=function(u,p){return new an(u,p)};function an(u,p){St.call(this),this.g=new Xy(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!g(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!g(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new ds(this)}T(an,St),an.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},an.prototype.close=function(){Nf(this.g)},an.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=wf(u),u=v);p.i.push(new SS(p.Ya++,u)),p.G==3&&tc(p)},an.prototype.N=function(){this.g.l=null,delete this.j,Nf(this.g),delete this.g,an.aa.N.call(this)};function cv(u){Tf.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const v in p){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}T(cv,Tf);function dv(){If.call(this),this.status=1}T(dv,If);function ds(u){this.g=u}T(ds,uv),ds.prototype.ua=function(){Ft(this.g,"a")},ds.prototype.ta=function(u){Ft(this.g,new cv(u))},ds.prototype.sa=function(u){Ft(this.g,new dv)},ds.prototype.ra=function(){Ft(this.g,"b")},rc.prototype.createWebChannel=rc.prototype.g,an.prototype.send=an.prototype.o,an.prototype.open=an.prototype.m,an.prototype.close=an.prototype.close,A8=function(){return new rc},L8=function(){return Bu()},C8=Vi,Qm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hu.NO_ERROR=0,Hu.TIMEOUT=8,Hu.HTTP_ERROR=6,rd=Hu,Cy.COMPLETE="complete",S8=Cy,wy.EventType=Na,Na.OPEN="a",Na.CLOSE="b",Na.ERROR="c",Na.MESSAGE="d",St.prototype.listen=St.prototype.K,hl=wy,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,I8=Ge}).apply(typeof xc<"u"?xc:typeof self<"u"?self:typeof window<"u"?window:{});const s_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ca="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new Vh("@firebase/firestore");function el(){return yo.logLevel}function X(t,...e){if(yo.logLevel<=pe.DEBUG){const n=e.map(f1);yo.debug(`Firestore (${Ca}): ${t}`,...n)}}function jr(t,...e){if(yo.logLevel<=pe.ERROR){const n=e.map(f1);yo.error(`Firestore (${Ca}): ${t}`,...n)}}function aa(t,...e){if(yo.logLevel<=pe.WARN){const n=e.map(f1);yo.warn(`Firestore (${Ca}): ${t}`,...n)}}function f1(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${Ca}) INTERNAL ASSERTION FAILED: `+t;throw jr(e),new Error(e)}function Le(t,e){t||oe()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class P8{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(bt.UNAUTHENTICATED))}shutdown(){}}class vb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _b{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Le(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new Sr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Sr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Sr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new P8(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new bt(e)}}class kb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Eb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new kb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Le(this.o===void 0);const r=o=>{o.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,X("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new wb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R8{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Tb(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function ke(t,e){return t<e?-1:t>e?1:0}function la(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iu{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(),r===void 0?r=e.length-n:r>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return iu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof iu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends iu{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const Ib=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends iu{construct(e,n,r){return new vt(e,n,r)}static isValidIdentifier(e){return Ib.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new Q(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Q(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new Q(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(De.fromString(e))}static fromName(e){return new te(De.fromString(e).popFirst(5))}static empty(){return new te(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new De(e.slice()))}}function Sb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new it(n+1,0):new it(n,r));return new wi(i,te.empty(),e)}function Cb(t){return new wi(t.readTime,t.key,-1)}class wi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wi(se.min(),te.empty(),-1)}static max(){return new wi(se.max(),te.empty(),-1)}}function Lb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:ke(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bu(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==Ab)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const d=l;n(e[d]).next(f=>{s[d]=f,++a,a===o&&r(s)},f=>i(f))}})}static doWhile(e,n){return new B((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function Rb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ju(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class p1{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}p1.oe=-1;function zh(t){return t==null}function Gd(t){return t===0&&1/t==-1/0}function bb(t){return typeof t=="number"&&Number.isInteger(t)&&!Gd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Co(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function b8(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.comparator=e,this.root=n||yt.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tc(this.root,e,this.comparator,!0)}}class Tc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??yt.RED,this.left=i??yt.EMPTY,this.right=o??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new yt(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return yt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(e,n,r,i,o){return this}insert(e,n,r){return new yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new l_(this.data.getIterator())}getIteratorFrom(e){return new l_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new kt(this.comparator);return n.data=e,n}}class l_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new dn([])}unionWith(e){let n=new kt(vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return la(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class j8 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new j8("Invalid base64 string: "+o):o}}(e);return new wt(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const jb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xi(t){if(Le(!!t),typeof t=="string"){let e=0;const n=jb.exec(t);if(Le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vo(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function g1(t){const e=t.mapValue.fields.__previous_value__;return m1(e)?g1(e):e}function ou(t){const e=xi(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n,r,i,o,s,a,l,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=d}}class su{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new su("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof su&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic={mapValue:{}};function _o(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?m1(t)?4:Ob(t)?9007199254740991:Mb(t)?10:11:oe()}function or(t,e){if(t===e)return!0;const n=_o(t);if(n!==_o(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ou(t).isEqual(ou(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=xi(i.timestampValue),a=xi(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return vo(i.bytesValue).isEqual(vo(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Ze(i.geoPointValue.latitude)===Ze(o.geoPointValue.latitude)&&Ze(i.geoPointValue.longitude)===Ze(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Ze(i.integerValue)===Ze(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Ze(i.doubleValue),a=Ze(o.doubleValue);return s===a?Gd(s)===Gd(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return la(t.arrayValue.values||[],e.arrayValue.values||[],or);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(a_(s)!==a_(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!or(s[l],a[l])))return!1;return!0}(t,e);default:return oe()}}function au(t,e){return(t.values||[]).find(n=>or(n,e))!==void 0}function ua(t,e){if(t===e)return 0;const n=_o(t),r=_o(e);if(n!==r)return ke(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Ze(o.integerValue||o.doubleValue),l=Ze(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return u_(t.timestampValue,e.timestampValue);case 4:return u_(ou(t),ou(e));case 5:return ke(t.stringValue,e.stringValue);case 6:return function(o,s){const a=vo(o),l=vo(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),l=s.split("/");for(let d=0;d<a.length&&d<l.length;d++){const f=ke(a[d],l[d]);if(f!==0)return f}return ke(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=ke(Ze(o.latitude),Ze(s.latitude));return a!==0?a:ke(Ze(o.longitude),Ze(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return c_(t.arrayValue,e.arrayValue);case 10:return function(o,s){var a,l,d,f;const m=o.fields||{},E=s.fields||{},_=(a=m.value)===null||a===void 0?void 0:a.arrayValue,T=(l=E.value)===null||l===void 0?void 0:l.arrayValue,A=ke(((d=_==null?void 0:_.values)===null||d===void 0?void 0:d.length)||0,((f=T==null?void 0:T.values)===null||f===void 0?void 0:f.length)||0);return A!==0?A:c_(_,T)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===Ic.mapValue&&s===Ic.mapValue)return 0;if(o===Ic.mapValue)return 1;if(s===Ic.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),d=s.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const E=ke(l[m],f[m]);if(E!==0)return E;const _=ua(a[l[m]],d[f[m]]);if(_!==0)return _}return ke(l.length,f.length)}(t.mapValue,e.mapValue);default:throw oe()}}function u_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ke(t,e);const n=xi(t),r=xi(e),i=ke(n.seconds,r.seconds);return i!==0?i:ke(n.nanos,r.nanos)}function c_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=ua(n[i],r[i]);if(o)return o}return ke(n.length,r.length)}function ca(t){return Zm(t)}function Zm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=xi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vo(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Zm(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Zm(n.fields[s])}`;return i+"}"}(t.mapValue):oe()}function d_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Xm(t){return!!t&&"integerValue"in t}function y1(t){return!!t&&"arrayValue"in t}function h_(t){return!!t&&"nullValue"in t}function f_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function id(t){return!!t&&"mapValue"in t}function Mb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ll(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Co(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ll(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ll(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ob(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!id(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ll(n)}setAll(e){let n=vt.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=Ll(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());id(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];id(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Co(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Zt(Ll(this.value))}}function N8(t){const e=[];return Co(t.fields,(n,r)=>{const i=new vt([n]);if(id(r)){const o=N8(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new dn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kd{constructor(e,n){this.position=e,this.inclusive=n}}function p_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=te.comparator(te.fromName(s.referenceValue),n.key):r=ua(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function m_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!or(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class lu{constructor(e,n="asc"){this.field=e,this.dir=n}}function Db(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class M8{}class rt extends M8{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Fb(e,n,r):n==="array-contains"?new $b(e,r):n==="in"?new zb(e,r):n==="not-in"?new Bb(e,r):n==="array-contains-any"?new Hb(e,r):new rt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ub(e,r):new Wb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ua(n,this.value)):n!==null&&_o(this.value)===_o(n)&&this.matchesComparison(ua(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Hn extends M8{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Hn(e,n)}matches(e){return O8(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function O8(t){return t.op==="and"}function D8(t){return Vb(t)&&O8(t)}function Vb(t){for(const e of t.filters)if(e instanceof Hn)return!1;return!0}function Jm(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+ca(t.value);if(D8(t))return t.filters.map(e=>Jm(e)).join(",");{const e=t.filters.map(n=>Jm(n)).join(",");return`${t.op}(${e})`}}function V8(t,e){return t instanceof rt?function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&or(r.value,i.value)}(t,e):t instanceof Hn?function(r,i){return i instanceof Hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&V8(s,i.filters[a]),!0):!1}(t,e):void oe()}function F8(t){return t instanceof rt?function(n){return`${n.field.canonicalString()} ${n.op} ${ca(n.value)}`}(t):t instanceof Hn?function(n){return n.op.toString()+" {"+n.getFilters().map(F8).join(" ,")+"}"}(t):"Filter"}class Fb extends rt{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ub extends rt{constructor(e,n){super(e,"in",n),this.keys=U8("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Wb extends rt{constructor(e,n){super(e,"not-in",n),this.keys=U8("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function U8(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class $b extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return y1(n)&&au(n.arrayValue,this.value)}}class zb extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&au(this.value.arrayValue,n)}}class Bb extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(au(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!au(this.value.arrayValue,n)}}class Hb extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!y1(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>au(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ue=null}}function g_(t,e=null,n=[],r=[],i=null,o=null,s=null){return new qb(t,e,n,r,i,o,s)}function v1(t){const e=ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Jm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),zh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ca(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ca(r)).join(",")),e.ue=n}return e.ue}function _1(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Db(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!V8(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!m_(t.startAt,e.startAt)&&m_(t.endAt,e.endAt)}function eg(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Yb(t,e,n,r,i,o,s,a){return new La(t,e,n,r,i,o,s,a)}function k1(t){return new La(t)}function y_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function W8(t){return t.collectionGroup!==null}function Al(t){const e=ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new kt(vt.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new lu(o,r))}),n.has(vt.keyField().canonicalString())||e.ce.push(new lu(vt.keyField(),r))}return e.ce}function rr(t){const e=ae(t);return e.le||(e.le=Gb(e,Al(t))),e.le}function Gb(t,e){if(t.limitType==="F")return g_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new lu(i.field,o)});const n=t.endAt?new Kd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Kd(t.startAt.position,t.startAt.inclusive):null;return g_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function tg(t,e){const n=t.filters.concat([e]);return new La(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Qd(t,e,n){return new La(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bh(t,e){return _1(rr(t),rr(e))&&t.limitType===e.limitType}function $8(t){return`${v1(rr(t))}|lt:${t.limitType}`}function xs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>F8(i)).join(", ")}]`),zh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ca(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ca(i)).join(",")),`Target(${r})`}(rr(t))}; limitType=${t.limitType})`}function Hh(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):te.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Al(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,l){const d=p_(s,a,l);return s.inclusive?d<=0:d<0}(r.startAt,Al(r),i)||r.endAt&&!function(s,a,l){const d=p_(s,a,l);return s.inclusive?d>=0:d>0}(r.endAt,Al(r),i))}(t,e)}function Kb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function z8(t){return(e,n)=>{let r=!1;for(const i of Al(t)){const o=Qb(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Qb(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(o,s,a){const l=s.data.field(o),d=a.data.field(o);return l!==null&&d!==null?ua(l,d):oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Co(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return b8(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=new qe(te.comparator);function Nr(){return Zb}const B8=new qe(te.comparator);function fl(...t){let e=B8;for(const n of t)e=e.insert(n.key,n);return e}function H8(t){let e=B8;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function eo(){return Pl()}function q8(){return Pl()}function Pl(){return new Aa(t=>t.toString(),(t,e)=>t.isEqual(e))}const Xb=new qe(te.comparator),Jb=new kt(te.comparator);function fe(...t){let e=Jb;for(const n of t)e=e.add(n);return e}const ej=new kt(ke);function tj(){return ej}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gd(e)?"-0":e}}function Y8(t){return{integerValue:""+t}}function nj(t,e){return bb(e)?Y8(e):E1(t,e)}/**
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
 */class qh{constructor(){this._=void 0}}function rj(t,e,n){return t instanceof uu?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&m1(o)&&(o=g1(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof cu?K8(t,e):t instanceof du?Q8(t,e):function(i,o){const s=G8(i,o),a=v_(s)+v_(i.Pe);return Xm(s)&&Xm(i.Pe)?Y8(a):E1(i.serializer,a)}(t,e)}function ij(t,e,n){return t instanceof cu?K8(t,e):t instanceof du?Q8(t,e):n}function G8(t,e){return t instanceof Zd?function(r){return Xm(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class uu extends qh{}class cu extends qh{constructor(e){super(),this.elements=e}}function K8(t,e){const n=Z8(e);for(const r of t.elements)n.some(i=>or(i,r))||n.push(r);return{arrayValue:{values:n}}}class du extends qh{constructor(e){super(),this.elements=e}}function Q8(t,e){let n=Z8(e);for(const r of t.elements)n=n.filter(i=>!or(i,r));return{arrayValue:{values:n}}}class Zd extends qh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function v_(t){return Ze(t.integerValue||t.doubleValue)}function Z8(t){return y1(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oj{constructor(e,n){this.field=e,this.transform=n}}function sj(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof cu&&i instanceof cu||r instanceof du&&i instanceof du?la(r.elements,i.elements,or):r instanceof Zd&&i instanceof Zd?or(r.Pe,i.Pe):r instanceof uu&&i instanceof uu}(t.transform,e.transform)}class aj{constructor(e,n){this.version=e,this.transformResults=n}}class xn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xn}static exists(e){return new xn(void 0,e)}static updateTime(e){return new xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function od(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yh{}function X8(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new w1(t.key,xn.none()):new Nu(t.key,t.data,xn.none());{const n=t.data,r=Zt.empty();let i=new kt(vt.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new ji(t.key,r,new dn(i.toArray()),xn.none())}}function lj(t,e,n){t instanceof Nu?function(i,o,s){const a=i.value.clone(),l=k_(i.fieldTransforms,o,s.transformResults);a.setAll(l),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ji?function(i,o,s){if(!od(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=k_(i.fieldTransforms,o,s.transformResults),l=o.data;l.setAll(J8(i)),l.setAll(a),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Rl(t,e,n,r){return t instanceof Nu?function(o,s,a,l){if(!od(o.precondition,s))return a;const d=o.value.clone(),f=E_(o.fieldTransforms,l,s);return d.setAll(f),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof ji?function(o,s,a,l){if(!od(o.precondition,s))return a;const d=E_(o.fieldTransforms,l,s),f=s.data;return f.setAll(J8(o)),f.setAll(d),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(o,s,a){return od(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function uj(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=G8(r.transform,i||null);o!=null&&(n===null&&(n=Zt.empty()),n.set(r.field,o))}return n||null}function __(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&la(r,i,(o,s)=>sj(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Nu extends Yh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ji extends Yh{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function J8(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function k_(t,e,n){const r=new Map;Le(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,ij(s,a,n[i]))}return r}function E_(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,rj(o,s,e))}return r}class w1 extends Yh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cj extends Yh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dj{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&lj(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Rl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Rl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=q8();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=X8(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&la(this.mutations,e.mutations,(n,r)=>__(n,r))&&la(this.baseMutations,e.baseMutations,(n,r)=>__(n,r))}}class x1{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Le(e.mutations.length===r.length);let i=function(){return Xb}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new x1(e,n,r,i)}}/**
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
 */class hj{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class fj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,ge;function pj(t){switch(t){default:return oe();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function eT(t){if(t===void 0)return jr("GRPC error has no .code"),W.UNKNOWN;switch(t){case et.OK:return W.OK;case et.CANCELLED:return W.CANCELLED;case et.UNKNOWN:return W.UNKNOWN;case et.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case et.INTERNAL:return W.INTERNAL;case et.UNAVAILABLE:return W.UNAVAILABLE;case et.UNAUTHENTICATED:return W.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case et.NOT_FOUND:return W.NOT_FOUND;case et.ALREADY_EXISTS:return W.ALREADY_EXISTS;case et.PERMISSION_DENIED:return W.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case et.ABORTED:return W.ABORTED;case et.OUT_OF_RANGE:return W.OUT_OF_RANGE;case et.UNIMPLEMENTED:return W.UNIMPLEMENTED;case et.DATA_LOSS:return W.DATA_LOSS;default:return oe()}}(ge=et||(et={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function mj(){return new TextEncoder}/**
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
 */const gj=new oo([4294967295,4294967295],0);function w_(t){const e=mj().encode(t),n=new T8;return n.update(e),new Uint8Array(n.digest())}function x_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new oo([n,r],0),new oo([i,o],0)]}class T1{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new pl(`Invalid padding: ${n}`);if(r<0)throw new pl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new pl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new pl(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=oo.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(oo.fromNumber(r)));return i.compare(gj)===1&&(i=new oo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=w_(e),[r,i]=x_(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new T1(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=w_(e),[r,i]=x_(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class pl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Mu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Gh(se.min(),i,new qe(ke),Nr(),fe())}}class Mu{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Mu(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class tT{constructor(e,n){this.targetId=e,this.me=n}}class nT{constructor(e,n,r=wt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class T_{constructor(){this.fe=0,this.ge=S_(),this.pe=wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=fe(),n=fe(),r=fe();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:oe()}}),new Mu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=S_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class yj{constructor(e){this.Le=e,this.Be=new Map,this.ke=Nr(),this.qe=I_(),this.Qe=new qe(ke)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(eg(o))if(r===0){const s=new te(o.path);this.Ue(n,s,Nt.newNoDocument(s,se.min()))}else Le(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),l=a?this.Xe(a,e,s):1;if(l!==0){this.je(n);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=vo(r).toUint8Array()}catch(l){if(l instanceof j8)return aa("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new T1(s,i,o)}catch(l){return aa(l instanceof pl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const a=this.Je(s);if(a){if(o.current&&eg(a.target)){const l=new te(a.target.path);this.ke.get(l)!==null||this.it(s,l)||this.Ue(s,l,Nt.newNoDocument(l,e))}o.be&&(n.set(s,o.ve()),o.Ce())}});let r=fe();this.qe.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new Gh(e,n,this.Qe,this.ke,r);return this.ke=Nr(),this.qe=I_(),this.Qe=new qe(ke),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new T_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new kt(ke),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new T_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function I_(){return new qe(te.comparator)}function S_(){return new qe(te.comparator)}const vj={asc:"ASCENDING",desc:"DESCENDING"},_j={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kj={and:"AND",or:"OR"};class Ej{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ng(t,e){return t.useProto3Json||zh(e)?e:{value:e}}function Xd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wj(t,e){return Xd(t,e.toTimestamp())}function ir(t){return Le(!!t),se.fromTimestamp(function(n){const r=xi(n);return new it(r.seconds,r.nanos)}(t))}function I1(t,e){return rg(t,e).canonicalString()}function rg(t,e){const n=function(i){return new De(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function iT(t){const e=De.fromString(t);return Le(uT(e)),e}function ig(t,e){return I1(t.databaseId,e.path)}function vp(t,e){const n=iT(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(sT(n))}function oT(t,e){return I1(t.databaseId,e)}function xj(t){const e=iT(t);return e.length===4?De.emptyPath():sT(e)}function og(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sT(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function C_(t,e,n){return{name:ig(t,e),fields:n.value.mapValue.fields}}function Tj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,f){return d.useProto3Json?(Le(f===void 0||typeof f=="string"),wt.fromBase64String(f||"")):(Le(f===void 0||f instanceof Buffer||f instanceof Uint8Array),wt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(d){const f=d.code===void 0?W.UNKNOWN:eT(d.code);return new Q(f,d.message||"")}(s);n=new nT(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=vp(t,r.document.name),o=ir(r.document.updateTime),s=r.document.createTime?ir(r.document.createTime):se.min(),a=new Zt({mapValue:{fields:r.document.fields}}),l=Nt.newFoundDocument(i,o,s,a),d=r.targetIds||[],f=r.removedTargetIds||[];n=new sd(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=vp(t,r.document),o=r.readTime?ir(r.readTime):se.min(),s=Nt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new sd([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=vp(t,r.document),o=r.removedTargetIds||[];n=new sd([],o,i,null)}else{if(!("filter"in e))return oe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new fj(i,o),a=r.targetId;n=new tT(a,s)}}return n}function Ij(t,e){let n;if(e instanceof Nu)n={update:C_(t,e.key,e.value)};else if(e instanceof w1)n={delete:ig(t,e.key)};else if(e instanceof ji)n={update:C_(t,e.key,e.data),updateMask:Nj(e.fieldMask)};else{if(!(e instanceof cj))return oe();n={verify:ig(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof uu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof cu)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof du)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Zd)return{fieldPath:s.field.canonicalString(),increment:a.Pe};throw oe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:wj(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:oe()}(t,e.precondition)),n}function Sj(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?ir(i.updateTime):ir(o);return s.isEqual(se.min())&&(s=ir(o)),new aj(s,i.transformResults||[])}(n,e))):[]}function Cj(t,e){return{documents:[oT(t,e.path)]}}function Lj(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=oT(t,i);const o=function(d){if(d.length!==0)return lT(Hn.create(d,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(d){if(d.length!==0)return d.map(f=>function(E){return{field:Ts(E.field),direction:Rj(E.dir)}}(f))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=ng(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function Aj(t){let e=xj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Le(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let o=[];n.where&&(o=function(m){const E=aT(m);return E instanceof Hn&&D8(E)?E.getFilters():[E]}(n.where));let s=[];n.orderBy&&(s=function(m){return m.map(E=>function(T){return new lu(Is(T.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(E))}(n.orderBy));let a=null;n.limit&&(a=function(m){let E;return E=typeof m=="object"?m.value:m,zh(E)?null:E}(n.limit));let l=null;n.startAt&&(l=function(m){const E=!!m.before,_=m.values||[];return new Kd(_,E)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const E=!m.before,_=m.values||[];return new Kd(_,E)}(n.endAt)),Yb(e,i,s,o,a,"F",l,d)}function Pj(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function aT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Is(n.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Is(n.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Is(n.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Is(n.unaryFilter.field);return rt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(t):t.fieldFilter!==void 0?function(n){return rt.create(Is(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Hn.create(n.compositeFilter.filters.map(r=>aT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return oe()}}(n.compositeFilter.op))}(t):oe()}function Rj(t){return vj[t]}function bj(t){return _j[t]}function jj(t){return kj[t]}function Ts(t){return{fieldPath:t.canonicalString()}}function Is(t){return vt.fromServerFormat(t.fieldPath)}function lT(t){return t instanceof rt?function(n){if(n.op==="=="){if(f_(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NAN"}};if(h_(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(f_(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NOT_NAN"}};if(h_(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ts(n.field),op:bj(n.op),value:n.value}}}(t):t instanceof Hn?function(n){const r=n.getFilters().map(i=>lT(i));return r.length===1?r[0]:{compositeFilter:{op:jj(n.op),filters:r}}}(t):oe()}function Nj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mj{constructor(e){this.ct=e}}function Oj(t){const e=Aj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dj{constructor(){this.un=new Vj}addToCollectionParentIndex(e,n){return this.un.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(wi.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(wi.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class Vj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new kt(De.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new kt(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new da(0)}static kn(){return new da(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fj{constructor(){this.changes=new Aa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Uj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wj{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Rl(r.mutation,i,dn.empty(),it.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=eo();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=fl();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=eo();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=Nr();const s=Pl(),a=function(){return Pl()}();return n.forEach((l,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof ji)?o=o.insert(d.key,d):f!==void 0?(s.set(d.key,f.mutation.getFieldMask()),Rl(f.mutation,d,f.mutation.getFieldMask(),it.now())):s.set(d.key,dn.empty())}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((d,f)=>s.set(d,f)),n.forEach((d,f)=>{var m;return a.set(d,new Uj(f,(m=s.get(d))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Pl();let i=new qe((s,a)=>s-a),o=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const d=n.get(l);if(d===null)return;let f=r.get(l)||dn.empty();f=a.applyToLocalView(d,f),r.set(l,f);const m=(i.get(a.batchId)||fe()).add(l);i=i.insert(a.batchId,m)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),d=l.key,f=l.value,m=q8();f.forEach(E=>{if(!o.has(E)){const _=X8(n.get(E),r.get(E));_!==null&&m.set(E,_),o=o.add(E)}}),s.push(this.documentOverlayCache.saveOverlays(e,d,m))}return B.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return te.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):W8(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):B.resolve(eo());let a=-1,l=o;return s.next(d=>B.forEach(d,(f,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),o.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{l=l.insert(f,E)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,l,d,fe())).next(f=>({batchId:a,changes:H8(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let i=fl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=fl();return this.indexManager.getCollectionParents(e,o).next(a=>B.forEach(a,l=>{const d=function(m,E){return new La(E,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((m,E)=>{s=s.insert(m,E)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((l,d)=>{const f=d.getKey();s.get(f)===null&&(s=s.insert(f,Nt.newInvalidDocument(f)))});let a=fl();return s.forEach((l,d)=>{const f=o.get(l);f!==void 0&&Rl(f.mutation,d,dn.empty(),it.now()),Hh(n,d)&&(a=a.insert(l,d))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $j{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return B.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ir(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Oj(i.bundledQuery),readTime:ir(i.readTime)}}(n)),B.resolve()}}/**
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
 */class zj{constructor(){this.overlays=new qe(te.comparator),this.Ir=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=eo();return B.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=eo(),o=n.length+1,s=new te(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,d=l.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new qe((d,f)=>d-f);const s=this.overlays.getIterator();for(;s.hasNext();){const d=s.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=o.get(d.largestBatchId);f===null&&(f=eo(),o=o.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const a=eo(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>a.set(d,f)),!(a.size()>=i)););return B.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new hj(n,r));let o=this.Ir.get(n);o===void 0&&(o=fe(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
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
 */class Bj{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(){this.Tr=new kt(ct.Er),this.dr=new kt(ct.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ct(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new te(new De([])),r=new ct(n,e),i=new ct(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new te(new De([])),r=new ct(n,e),i=new ct(n,e+1);let o=fe();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new ct(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return te.comparator(e.key,n.key)||ke(e.wr,n.wr)}static Ar(e,n){return ke(e.wr,n.wr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new kt(ct.Er)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new dj(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.br=this.br.add(new ct(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(s)}lookupMutationBatch(e,n){return B.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return B.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),i=new ct(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const a=this.Dr(s.wr);o.push(a)}),B.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new kt(ke);return n.forEach(i=>{const o=new ct(i,0),s=new ct(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],a=>{r=r.add(a.wr)})}),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;te.isDocumentKey(o)||(o=o.child(""));const s=new ct(new te(o),0);let a=new kt(ke);return this.br.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(a=a.add(l.wr)),!0)},s),B.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Le(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return B.forEach(n.mutations,i=>{const o=new ct(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ct(n,0),i=this.br.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qj{constructor(e){this.Mr=e,this.docs=function(){return new qe(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let r=Nr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Nt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Nr();const s=n.path,a=new te(s.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!s.isPrefixOf(d.path))break;d.path.length>s.length+1||Lb(Cb(f),r)<=0||(i.has(f.key)||Hh(n,f))&&(o=o.insert(f.key,f.mutableCopy()))}return B.resolve(o)}getAllFromCollectionGroup(e,n,r,i){oe()}Or(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Yj(this)}getSize(e){return B.resolve(this.size)}}class Yj extends Fj{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gj{constructor(e){this.persistence=e,this.Nr=new Aa(n=>v1(n),_1),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new S1,this.targetCount=0,this.kr=da.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),B.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new da(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Kn(n),B.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),B.waitFor(o).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),B.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kj{constructor(e,n){this.qr={},this.overlays={},this.Qr=new p1(0),this.Kr=!1,this.Kr=!0,this.$r=new Bj,this.referenceDelegate=e(this),this.Ur=new Gj(this),this.indexManager=new Dj,this.remoteDocumentCache=function(i){return new qj(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Mj(n),this.Gr=new $j(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Hj(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new Qj(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return B.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Qj extends Pb{constructor(e){super(),this.currentSequenceNumber=e}}class C1{constructor(e){this.persistence=e,this.Jr=new S1,this.Yr=null}static Zr(e){return new C1(e)}get Xr(){if(this.Yr)return this.Yr;throw oe()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,r=>{const i=te.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,se.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return B.or([()=>B.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=fe(),i=fe();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new L1(e,n.fromCache,r,i)}}/**
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
 */class Zj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xj{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return bL()?8:Rb(Ot())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new Zj;return this.Xi(e,n,s).next(a=>{if(o.result=a,this.zi)return this.es(e,n,s,a.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(el()<=pe.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",xs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(el()<=pe.DEBUG&&X("QueryEngine","Query:",xs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(el()<=pe.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",xs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rr(n))):B.resolve())}Yi(e,n){if(y_(n))return B.resolve(null);let r=rr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Qd(n,null,"F"),r=rr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=fe(...o);return this.Ji.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.ts(n,a);return this.ns(n,d,s,l.readTime)?this.Yi(e,Qd(n,null,"F")):this.rs(e,d,n,l)}))})))}Zi(e,n,r,i){return y_(n)||i.isEqual(se.min())?B.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?B.resolve(null):(el()<=pe.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xs(n)),this.rs(e,s,n,Sb(i,-1)).next(a=>a))})}ts(e,n){let r=new kt(z8(e));return n.forEach((i,o)=>{Hh(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return el()<=pe.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",xs(n)),this.Ji.getDocumentsMatchingQuery(e,n,wi.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jj{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new qe(ke),this._s=new Aa(o=>v1(o),_1),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wj(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function e5(t,e,n,r){return new Jj(t,e,n,r)}async function cT(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=fe();for(const d of i){s.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of o){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(d=>({hs:d,removedBatchIds:s,addedBatchIds:a}))})})}function t5(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,d,f){const m=d.batch,E=m.keys();let _=B.resolve();return E.forEach(T=>{_=_.next(()=>f.getEntry(l,T)).next(A=>{const S=d.docVersions.get(T);Le(S!==null),A.version.compareTo(S)<0&&(m.applyToRemoteDocument(A,d),A.isValidDocument()&&(A.setReadTime(d.commitVersion),f.addEntry(A)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(l,m))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=fe();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(l=l.add(a.batch.mutations[d].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function dT(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function n5(t,e){const n=ae(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((f,m)=>{const E=i.get(m);if(!E)return;a.push(n.Ur.removeMatchingKeys(o,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(o,f.addedDocuments,m)));let _=E.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(wt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),i=i.insert(m,_),function(A,S,y){return A.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(E,_,f)&&a.push(n.Ur.updateTargetData(o,_))});let l=Nr(),d=fe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,f))}),a.push(r5(o,s,e.documentUpdates).next(f=>{l=f.Ps,d=f.Is})),!r.isEqual(se.min())){const f=n.Ur.getLastRemoteSnapshotVersion(o).next(m=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(f)}return B.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,d)).next(()=>l)}).then(o=>(n.os=i,o))}function r5(t,e,n){let r=fe(),i=fe();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=Nr();return n.forEach((a,l)=>{const d=o.get(a);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",l.version)}),{Ps:s,Is:i}})}function i5(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function o5(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(o=>o?(i=o,B.resolve(i)):n.Ur.allocateTargetId(r).next(s=>(i=new ni(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function sg(t,e,n){const r=ae(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!ju(s))throw s;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function L_(t,e,n){const r=ae(t);let i=se.min(),o=fe();return r.persistence.runTransaction("Execute query","readwrite",s=>function(l,d,f){const m=ae(l),E=m._s.get(f);return E!==void 0?B.resolve(m.os.get(E)):m.Ur.getTargetData(d,f)}(r,s,rr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.ss.getDocumentsMatchingQuery(s,e,n?i:se.min(),n?o:fe())).next(a=>(s5(r,Kb(e),a),{documents:a,Ts:o})))}function s5(t,e,n){let r=t.us.get(e)||se.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.us.set(e,r)}class A_{constructor(){this.activeTargetIds=tj()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class a5{constructor(){this.so=new A_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new A_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l5{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sc=null;function _p(){return Sc===null?Sc=function(){return 268435456+Math.round(2147483648*Math.random())}():Sc++,"0x"+Sc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c5{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class d5 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const a=_p(),l=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,s),this.No(n,l,d,i).then(f=>(X("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw aa("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",l,"request:",i),f})}Lo(n,r,i,o,s,a){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ca}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=u5[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=_p();return new Promise((s,a)=>{const l=new I8;l.setWithCredentials(!0),l.listenOnce(S8.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case rd.NO_ERROR:const f=l.getResponseJson();X(Rt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),s(f);break;case rd.TIMEOUT:X(Rt,`RPC '${e}' ${o} timed out`),a(new Q(W.DEADLINE_EXCEEDED,"Request time out"));break;case rd.HTTP_ERROR:const m=l.getStatus();if(X(Rt,`RPC '${e}' ${o} failed with status:`,m,"response text:",l.getResponseText()),m>0){let E=l.getResponseJson();Array.isArray(E)&&(E=E[0]);const _=E==null?void 0:E.error;if(_&&_.status&&_.message){const T=function(S){const y=S.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(y)>=0?y:W.UNKNOWN}(_.status);a(new Q(T,_.message))}else a(new Q(W.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Q(W.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{X(Rt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);X(Rt,`RPC '${e}' ${o} sending request:`,i),l.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=_p(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=A8(),a=L8(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=o.join("");X(Rt,`Creating RPC '${e}' stream ${i}: ${f}`,l);const m=s.createWebChannel(f,l);let E=!1,_=!1;const T=new c5({Io:S=>{_?X(Rt,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(E||(X(Rt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),E=!0),X(Rt,`RPC '${e}' stream ${i} sending:`,S),m.send(S))},To:()=>m.close()}),A=(S,y,g)=>{S.listen(y,k=>{try{g(k)}catch(x){setTimeout(()=>{throw x},0)}})};return A(m,hl.EventType.OPEN,()=>{_||(X(Rt,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),A(m,hl.EventType.CLOSE,()=>{_||(_=!0,X(Rt,`RPC '${e}' stream ${i} transport closed`),T.So())}),A(m,hl.EventType.ERROR,S=>{_||(_=!0,aa(Rt,`RPC '${e}' stream ${i} transport errored:`,S),T.So(new Q(W.UNAVAILABLE,"The operation could not be completed")))}),A(m,hl.EventType.MESSAGE,S=>{var y;if(!_){const g=S.data[0];Le(!!g);const k=g,x=k.error||((y=k[0])===null||y===void 0?void 0:y.error);if(x){X(Rt,`RPC '${e}' stream ${i} received error:`,x);const R=x.status;let N=function(P){const b=et[P];if(b!==void 0)return eT(b)}(R),w=x.message;N===void 0&&(N=W.INTERNAL,w="Unknown error status: "+R+" with message "+x.message),_=!0,T.So(new Q(N,w)),m.close()}else X(Rt,`RPC '${e}' stream ${i} received:`,g),T.bo(g)}}),A(a,C8.STAT_EVENT,S=>{S.stat===Qm.PROXY?X(Rt,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===Qm.NOPROXY&&X(Rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function kp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t){return new Ej(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n,r,i,o,s,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new hT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(jr(n.toString()),jr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new Q(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class h5 extends fT{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Tj(this.serializer,e),r=function(o){if(!("targetChange"in o))return se.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?se.min():s.readTime?ir(s.readTime):se.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=og(this.serializer),n.addTarget=function(o,s){let a;const l=s.target;if(a=eg(l)?{documents:Cj(o,l)}:{query:Lj(o,l)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=rT(o,s.resumeToken);const d=ng(o,s.expectedCount);d!==null&&(a.expectedCount=d)}else if(s.snapshotVersion.compareTo(se.min())>0){a.readTime=Xd(o,s.snapshotVersion.toTimestamp());const d=ng(o,s.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=Pj(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=og(this.serializer),n.removeTarget=e,this.a_(n)}}class f5 extends fT{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Le(!!e.streamToken),this.lastStreamToken=e.streamToken,Le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Sj(e.writeResults,e.commitTime),r=ir(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=og(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ij(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p5 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Q(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,rg(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(W.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,rg(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(W.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class m5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class g5{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{Lo(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=ae(l);d.L_.add(4),await Ou(d),d.q_.set("Unknown"),d.L_.delete(4),await Qh(d)}(this))})}),this.q_=new m5(r,i)}}async function Qh(t){if(Lo(t))for(const e of t.B_)await e(!0)}async function Ou(t){for(const e of t.B_)await e(!1)}function pT(t,e){const n=ae(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),b1(n)?R1(n):Pa(n).r_()&&P1(n,e))}function A1(t,e){const n=ae(t),r=Pa(n);n.N_.delete(e),r.r_()&&mT(n,e),n.N_.size===0&&(r.r_()?r.o_():Lo(n)&&n.q_.set("Unknown"))}function P1(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Pa(t).A_(e)}function mT(t,e){t.Q_.xe(e),Pa(t).R_(e)}function R1(t){t.Q_=new yj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Pa(t).start(),t.q_.v_()}function b1(t){return Lo(t)&&!Pa(t).n_()&&t.N_.size>0}function Lo(t){return ae(t).L_.size===0}function gT(t){t.Q_=void 0}async function y5(t){t.q_.set("Online")}async function v5(t){t.N_.forEach((e,n)=>{P1(t,e)})}async function _5(t,e){gT(t),b1(t)?(t.q_.M_(e),R1(t)):t.q_.set("Unknown")}async function k5(t,e,n){if(t.q_.set("Online"),e instanceof nT&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jd(t,r)}else if(e instanceof sd?t.Q_.Ke(e):e instanceof tT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(se.min()))try{const r=await dT(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.Q_.rt(s);return a.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=o.N_.get(d);f&&o.N_.set(d,f.withResumeToken(l.resumeToken,s))}}),a.targetMismatches.forEach((l,d)=>{const f=o.N_.get(l);if(!f)return;o.N_.set(l,f.withResumeToken(wt.EMPTY_BYTE_STRING,f.snapshotVersion)),mT(o,l);const m=new ni(f.target,l,d,f.sequenceNumber);P1(o,m)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Jd(t,r)}}async function Jd(t,e,n){if(!ju(e))throw e;t.L_.add(1),await Ou(t),t.q_.set("Offline"),n||(n=()=>dT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Qh(t)})}function yT(t,e){return e().catch(n=>Jd(t,n,e))}async function Zh(t){const e=ae(t),n=Ti(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;E5(e);)try{const i=await i5(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,w5(e,i)}catch(i){await Jd(e,i)}vT(e)&&_T(e)}function E5(t){return Lo(t)&&t.O_.length<10}function w5(t,e){t.O_.push(e);const n=Ti(t);n.r_()&&n.V_&&n.m_(e.mutations)}function vT(t){return Lo(t)&&!Ti(t).n_()&&t.O_.length>0}function _T(t){Ti(t).start()}async function x5(t){Ti(t).p_()}async function T5(t){const e=Ti(t);for(const n of t.O_)e.m_(n.mutations)}async function I5(t,e,n){const r=t.O_.shift(),i=x1.from(r,e,n);await yT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Zh(t)}async function S5(t,e){e&&Ti(t).V_&&await async function(r,i){if(function(s){return pj(s)&&s!==W.ABORTED}(i.code)){const o=r.O_.shift();Ti(r).s_(),await yT(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Zh(r)}}(t,e),vT(t)&&_T(t)}async function R_(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Lo(n);n.L_.add(3),await Ou(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Qh(n)}async function C5(t,e){const n=ae(t);e?(n.L_.delete(2),await Qh(n)):e||(n.L_.add(2),await Ou(n),n.q_.set("Unknown"))}function Pa(t){return t.K_||(t.K_=function(n,r,i){const o=ae(n);return o.w_(),new h5(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:y5.bind(null,t),Ro:v5.bind(null,t),mo:_5.bind(null,t),d_:k5.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),b1(t)?R1(t):t.q_.set("Unknown")):(await t.K_.stop(),gT(t))})),t.K_}function Ti(t){return t.U_||(t.U_=function(n,r,i){const o=ae(n);return o.w_(),new f5(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:x5.bind(null,t),mo:S5.bind(null,t),f_:T5.bind(null,t),g_:I5.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Zh(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new j1(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function N1(t,e){if(jr("AsyncQueue",`${e}: ${t}`),ju(t))return new Q(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=fl(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new Zs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(){this.W_=new qe(te.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):oe():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ha{constructor(e,n,r,i,o,s,a,l,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new ha(e,n,Zs.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L5{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class A5{constructor(){this.queries=j_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ae(n),o=i.queries;i.queries=j_(),o.forEach((s,a)=>{for(const l of a.j_)l.onError(r)})})(this,new Q(W.ABORTED,"Firestore shutting down"))}}function j_(){return new Aa(t=>$8(t),Bh)}async function kT(t,e){const n=ae(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new L5,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const a=N1(s,`Initialization of query '${xs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&M1(n)}async function ET(t,e){const n=ae(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function P5(t,e){const n=ae(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.j_)a.X_(i)&&(r=!0);s.z_=i}}r&&M1(n)}function R5(t,e,n){const r=ae(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function M1(t){t.Y_.forEach(e=>{e.next()})}var ag,N_;(N_=ag||(ag={})).ea="default",N_.Cache="cache";class wT{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ha(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ha.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ag.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.key=e}}class TT{constructor(e){this.key=e}}class b5{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=fe(),this.mutatedKeys=fe(),this.Aa=z8(e),this.Ra=new Zs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new b_,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const E=i.get(f),_=Hh(this.query,m)?m:null,T=!!E&&this.mutatedKeys.has(E.key),A=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let S=!1;E&&_?E.data.isEqual(_.data)?T!==A&&(r.track({type:3,doc:_}),S=!0):this.ga(E,_)||(r.track({type:2,doc:_}),S=!0,(l&&this.Aa(_,l)>0||d&&this.Aa(_,d)<0)&&(a=!0)):!E&&_?(r.track({type:0,doc:_}),S=!0):E&&!_&&(r.track({type:1,doc:E}),S=!0,(l||d)&&(a=!0)),S&&(_?(s=s.add(_),o=A?o.add(f):o.delete(f)):(s=s.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const f=this.query.limitType==="F"?s.last():s.first();s=s.delete(f.key),o=o.delete(f.key),r.track({type:1,doc:f})}return{Ra:s,fa:r,ns:a,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((f,m)=>function(_,T){const A=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return A(_)-A(T)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,d=l!==this.Ea;return this.Ea=l,s.length!==0||d?{snapshot:new ha(this.query,e.Ra,o,s,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new b_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=fe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new TT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new xT(r))}),n}ba(e){this.Ta=e.Ts,this.da=fe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ha.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class j5{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class N5{constructor(e){this.key=e,this.va=!1}}class M5{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new Aa(a=>$8(a),Bh),this.Ma=new Map,this.xa=new Set,this.Oa=new qe(te.comparator),this.Na=new Map,this.La=new S1,this.Ba={},this.ka=new Map,this.qa=da.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function O5(t,e,n=!0){const r=PT(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await IT(r,e,n,!0),i}async function D5(t,e){const n=PT(t);await IT(n,e,!0,!1)}async function IT(t,e,n,r){const i=await o5(t.localStore,rr(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,n);let a;return r&&(a=await V5(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&pT(t.remoteStore,i),a}async function V5(t,e,n,r,i){t.Ka=(m,E,_)=>async function(A,S,y,g){let k=S.view.ma(y);k.ns&&(k=await L_(A.localStore,S.query,!1).then(({documents:w})=>S.view.ma(w,k)));const x=g&&g.targetChanges.get(S.targetId),R=g&&g.targetMismatches.get(S.targetId)!=null,N=S.view.applyChanges(k,A.isPrimaryClient,x,R);return O_(A,S.targetId,N.wa),N.snapshot}(t,m,E,_);const o=await L_(t.localStore,e,!0),s=new b5(e,o.Ts),a=s.ma(o.documents),l=Mu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=s.applyChanges(a,t.isPrimaryClient,l);O_(t,n,d.wa);const f=new j5(e,n,s);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function F5(t,e,n){const r=ae(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(s=>!Bh(s,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await sg(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&A1(r.remoteStore,i.targetId),lg(r,i.targetId)}).catch(bu)):(lg(r,i.targetId),await sg(r.localStore,i.targetId,!0))}async function U5(t,e){const n=ae(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),A1(n.remoteStore,r.targetId))}async function W5(t,e,n){const r=G5(t);try{const i=await function(s,a){const l=ae(s),d=it.now(),f=a.reduce((_,T)=>_.add(T.key),fe());let m,E;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=Nr(),A=fe();return l.cs.getEntries(_,f).next(S=>{T=S,T.forEach((y,g)=>{g.isValidDocument()||(A=A.add(y))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,T)).next(S=>{m=S;const y=[];for(const g of a){const k=uj(g,m.get(g.key).overlayedDocument);k!=null&&y.push(new ji(g.key,k,N8(k.value.mapValue),xn.exists(!0)))}return l.mutationQueue.addMutationBatch(_,d,y,a)}).next(S=>{E=S;const y=S.applyToLocalDocumentSet(m,A);return l.documentOverlayCache.saveOverlays(_,S.batchId,y)})}).then(()=>({batchId:E.batchId,changes:H8(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let d=s.Ba[s.currentUser.toKey()];d||(d=new qe(ke)),d=d.insert(a,l),s.Ba[s.currentUser.toKey()]=d}(r,i.batchId,n),await Du(r,i.changes),await Zh(r.remoteStore)}catch(i){const o=N1(i,"Failed to persist write");n.reject(o)}}async function ST(t,e){const n=ae(t);try{const r=await n5(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Na.get(o);s&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?Le(s.va):i.removedDocuments.size>0&&(Le(s.va),s.va=!1))}),await Du(n,r,e)}catch(r){await bu(r)}}function M_(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const a=s.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const l=ae(s);l.onlineState=a;let d=!1;l.queries.forEach((f,m)=>{for(const E of m.j_)E.Z_(a)&&(d=!0)}),d&&M1(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $5(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let s=new qe(te.comparator);s=s.insert(o,Nt.newNoDocument(o,se.min()));const a=fe().add(o),l=new Gh(se.min(),new Map,new qe(ke),s,a);await ST(r,l),r.Oa=r.Oa.remove(o),r.Na.delete(e),O1(r)}else await sg(r.localStore,e,!1).then(()=>lg(r,e,n)).catch(bu)}async function z5(t,e){const n=ae(t),r=e.batch.batchId;try{const i=await t5(n.localStore,e);LT(n,r,null),CT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Du(n,i)}catch(i){await bu(i)}}async function B5(t,e,n){const r=ae(t);try{const i=await function(s,a){const l=ae(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,a).next(m=>(Le(m!==null),f=m.keys(),l.mutationQueue.removeMutationBatch(d,m))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(r.localStore,e);LT(r,e,n),CT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Du(r,i)}catch(i){await bu(i)}}function CT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function LT(t,e,n){const r=ae(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function lg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||AT(t,r)})}function AT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(A1(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),O1(t))}function O_(t,e,n){for(const r of n)r instanceof xT?(t.La.addReference(r.key,e),H5(t,r)):r instanceof TT?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||AT(t,r.key)):oe()}function H5(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),O1(t))}function O1(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new te(De.fromString(e)),r=t.qa.next();t.Na.set(r,new N5(n)),t.Oa=t.Oa.insert(n,r),pT(t.remoteStore,new ni(rr(k1(n.path)),r,"TargetPurposeLimboResolution",p1.oe))}}async function Du(t,e,n){const r=ae(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{s.push(r.Ka(l,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(d){i.push(d);const m=L1.Wi(l.targetId,d);o.push(m)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(l,d){const f=ae(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>B.forEach(d,E=>B.forEach(E.$i,_=>f.persistence.referenceDelegate.addReference(m,E.targetId,_)).next(()=>B.forEach(E.Ui,_=>f.persistence.referenceDelegate.removeReference(m,E.targetId,_)))))}catch(m){if(!ju(m))throw m;X("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const E=m.targetId;if(!m.fromCache){const _=f.os.get(E),T=_.snapshotVersion,A=_.withLastLimboFreeSnapshotVersion(T);f.os=f.os.insert(E,A)}}}(r.localStore,o))}async function q5(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await cT(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(a=>{a.forEach(l=>{l.reject(new Q(W.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Du(n,r.hs)}}function Y5(t,e){const n=ae(t),r=n.Na.get(e);if(r&&r.va)return fe().add(r.key);{let i=fe();const o=n.Ma.get(e);if(!o)return i;for(const s of o){const a=n.Fa.get(s);i=i.unionWith(a.view.Va)}return i}}function PT(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ST.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Y5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$5.bind(null,e),e.Ca.d_=P5.bind(null,e.eventManager),e.Ca.$a=R5.bind(null,e.eventManager),e}function G5(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=z5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=B5.bind(null,e),e}class eh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Kh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return e5(this.persistence,new Xj,e.initialUser,this.serializer)}Ga(e){return new Kj(C1.Zr,this.serializer)}Wa(e){return new a5}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}eh.provider={build:()=>new eh};class ug{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>M_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=q5.bind(null,this.syncEngine),await C5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new A5}()}createDatastore(e){const n=Kh(e.databaseInfo.databaseId),r=function(o){return new d5(o)}(e.databaseInfo);return function(o,s,a,l){return new p5(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new g5(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>M_(this.syncEngine,n,0),function(){return P_.D()?new P_:new l5}())}createSyncEngine(e,n){return function(i,o,s,a,l,d,f){const m=new M5(i,o,s,a,l,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=ae(i);X("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Ou(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ug.provider={build:()=>new ug};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class RT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):jr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K5{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=bt.UNAUTHENTICATED,this.clientId=R8.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async s=>{X("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(X("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=N1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ep(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function D_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Q5(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>R_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>R_(e.remoteStore,i)),t._onlineComponents=e}async function Q5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ep(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;aa("Error using user provided cache. Falling back to memory cache: "+n),await Ep(t,new eh)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await Ep(t,new eh);return t._offlineComponents}async function bT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await D_(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await D_(t,new ug))),t._onlineComponents}function Z5(t){return bT(t).then(e=>e.syncEngine)}async function jT(t){const e=await bT(t),n=e.eventManager;return n.onListen=O5.bind(null,e.syncEngine),n.onUnlisten=F5.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=D5.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=U5.bind(null,e.syncEngine),n}function X5(t,e,n={}){const r=new Sr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,d){const f=new RT({next:E=>{f.Za(),s.enqueueAndForget(()=>ET(o,m));const _=E.docs.has(a);!_&&E.fromCache?d.reject(new Q(W.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&E.fromCache&&l&&l.source==="server"?d.reject(new Q(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),m=new wT(k1(a.path),f,{includeMetadataChanges:!0,_a:!0});return kT(o,m)}(await jT(t),t.asyncQueue,e,n,r)),r.promise}function J5(t,e,n={}){const r=new Sr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,d){const f=new RT({next:E=>{f.Za(),s.enqueueAndForget(()=>ET(o,m)),E.fromCache&&l.source==="server"?d.reject(new Q(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),m=new wT(a,f,{includeMetadataChanges:!0,_a:!0});return kT(o,m)}(await jT(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function NT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t,e,n){if(!n)throw new Q(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function e3(t,e,n,r){if(e===!0&&r===!0)throw new Q(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function F_(t){if(!te.isDocumentKey(t))throw new Q(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function U_(t){if(te.isDocumentKey(t))throw new Q(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function qn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xh(t);throw new Q(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}e3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=NT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Q(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Q(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Q(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new W_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new W_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yb;switch(r.type){case"firstParty":return new Eb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=V_.get(n);r&&(X("ComponentProvider","Removing Datastore"),V_.delete(n),r.terminate())}(this),Promise.resolve()}}function t3(t,e,n,r={}){var i;const o=(t=qn(t,Jh))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&aa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=bt.MOCK_USER;else{a=jx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new Q(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new bt(d)}t._authCredentials=new vb(new P8(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ni(this.firestore,e,this._query)}}class Ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ht(this.firestore,e,this._key)}}class gi extends Ni{constructor(e,n,r){super(e,n,k1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ht(this.firestore,null,new te(e))}withConverter(e){return new gi(this.firestore,e,this._path)}}function En(t,e,...n){if(t=He(t),MT("collection","path",e),t instanceof Jh){const r=De.fromString(e,...n);return U_(r),new gi(t,null,r)}{if(!(t instanceof Ht||t instanceof gi))throw new Q(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return U_(r),new gi(t.firestore,null,r)}}function lt(t,e,...n){if(t=He(t),arguments.length===1&&(e=R8.newId()),MT("doc","path",e),t instanceof Jh){const r=De.fromString(e,...n);return F_(r),new Ht(t,null,new te(r))}{if(!(t instanceof Ht||t instanceof gi))throw new Q(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return F_(r),new Ht(t.firestore,t instanceof gi?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new hT(this,"async_queue_retry"),this.Vu=()=>{const r=kp();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=kp();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=kp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Sr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ju(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw jr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=j1.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&oe()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Ao extends Jh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new $_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $_(e),this._firestoreClient=void 0,await e}}}function n3(t,e){const n=typeof t=="object"?t:Fh(),r=typeof t=="string"?t:"(default)",i=Ri(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Px("firestore");o&&t3(i,...o)}return i}function D1(t){if(t._terminated)throw new Q(W.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||r3(t),t._firestoreClient}function r3(t){var e,n,r;const i=t._freezeSettings(),o=function(a,l,d,f){return new Nb(a,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,NT(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new K5(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fa(wt.fromBase64String(e))}catch(n){throw new Q(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fa(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tf=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
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
 */class F1{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i3=/^__.*__$/;class o3{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ji(e,this.data,this.fieldMask,n,this.fieldTransforms):new Nu(e,this.data,n,this.fieldTransforms)}}class OT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ji(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function DT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class U1{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new U1(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return th(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(DT(this.Cu)&&i3.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class s3{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Kh(e)}Qu(e,n,r,i=!1){return new U1({Cu:e,methodName:n,qu:r,path:vt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nf(t){const e=t._freezeSettings(),n=Kh(t._databaseId);return new s3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function VT(t,e,n,r,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);$1("Data must be an object, but it was:",s,r);const a=FT(r,s);let l,d;if(o.merge)l=new dn(s.fieldMask),d=s.fieldTransforms;else if(o.mergeFields){const f=[];for(const m of o.mergeFields){const E=cg(e,m,n);if(!s.contains(E))throw new Q(W.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);WT(f,E)||f.push(E)}l=new dn(f),d=s.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,d=s.fieldTransforms;return new o3(new Zt(a),l,d)}class rf extends tf{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rf}}class W1 extends tf{_toFieldTransform(e){return new oj(e.path,new uu)}isEqual(e){return e instanceof W1}}function a3(t,e,n,r){const i=t.Qu(1,e,n);$1("Data must be an object, but it was:",i,r);const o=[],s=Zt.empty();Co(r,(l,d)=>{const f=z1(e,l,n);d=He(d);const m=i.Nu(f);if(d instanceof rf)o.push(f);else{const E=Vu(d,m);E!=null&&(o.push(f),s.set(f,E))}});const a=new dn(o);return new OT(s,a,i.fieldTransforms)}function l3(t,e,n,r,i,o){const s=t.Qu(1,e,n),a=[cg(e,r,n)],l=[i];if(o.length%2!=0)throw new Q(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<o.length;E+=2)a.push(cg(e,o[E])),l.push(o[E+1]);const d=[],f=Zt.empty();for(let E=a.length-1;E>=0;--E)if(!WT(d,a[E])){const _=a[E];let T=l[E];T=He(T);const A=s.Nu(_);if(T instanceof rf)d.push(_);else{const S=Vu(T,A);S!=null&&(d.push(_),f.set(_,S))}}const m=new dn(d);return new OT(f,m,s.fieldTransforms)}function u3(t,e,n,r=!1){return Vu(n,t.Qu(r?4:3,e))}function Vu(t,e){if(UT(t=He(t)))return $1("Unsupported field value:",e,t),FT(t,e);if(t instanceof tf)return function(r,i){if(!DT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let l=Vu(a,i.Lu(s));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=He(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nj(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=it.fromDate(r);return{timestampValue:Xd(i.serializer,o)}}if(r instanceof it){const o=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xd(i.serializer,o)}}if(r instanceof V1)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fa)return{bytesValue:rT(i.serializer,r._byteString)};if(r instanceof Ht){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:I1(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof F1)return function(s,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return E1(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Xh(r)}`)}(t,e)}function FT(t,e){const n={};return b8(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Co(t,(r,i)=>{const o=Vu(i,e.Mu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function UT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof V1||t instanceof fa||t instanceof Ht||t instanceof tf||t instanceof F1)}function $1(t,e,n){if(!UT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Xh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function cg(t,e,n){if((e=He(e))instanceof ef)return e._internalPath;if(typeof e=="string")return z1(t,e);throw th("Field path arguments must be of type string or ",t,!1,void 0,n)}const c3=new RegExp("[~\\*/\\[\\]]");function z1(t,e,n){if(e.search(c3)>=0)throw th(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ef(...e.split("."))._internalPath}catch{throw th(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function th(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new Q(W.INVALID_ARGUMENT,a+t+l)}function WT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new d3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(of("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class d3 extends $T{data(){return super.data()}}function of(t,e){return typeof e=="string"?z1(t,e):e instanceof ef?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h3(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class B1{}class H1 extends B1{}function xr(t,e,...n){let r=[];e instanceof B1&&r.push(e),r=r.concat(n),function(o){const s=o.filter(l=>l instanceof q1).length,a=o.filter(l=>l instanceof sf).length;if(s>1||s>0&&a>0)throw new Q(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class sf extends H1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new sf(e,n,r)}_apply(e){const n=this._parse(e);return zT(e._query,n),new Ni(e.firestore,e.converter,tg(e._query,n))}_parse(e){const n=nf(e.firestore);return function(o,s,a,l,d,f,m){let E;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Q(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){B_(m,f);const _=[];for(const T of m)_.push(z_(l,o,T));E={arrayValue:{values:_}}}else E=z_(l,o,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||B_(m,f),E=u3(a,s,m,f==="in"||f==="not-in");return rt.create(d,f,E)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ri(t,e,n){const r=e,i=of("where",t);return sf._create(i,r,n)}class q1 extends B1{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new q1(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const l of a)zT(s,l),s=tg(s,l)}(e._query,n),new Ni(e.firestore,e.converter,tg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Y1 extends H1{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Y1(e,n)}_apply(e){const n=function(i,o,s){if(i.startAt!==null)throw new Q(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Q(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new lu(o,s)}(e._query,this._field,this._direction);return new Ni(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new La(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function G1(t,e="asc"){const n=e,r=of("orderBy",t);return Y1._create(r,n)}class K1 extends H1{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new K1(e,n,r)}_apply(e){return new Ni(e.firestore,e.converter,Qd(e._query,this._limit,this._limitType))}}function f3(t){return K1._create("limit",t,"F")}function z_(t,e,n){if(typeof(n=He(n))=="string"){if(n==="")throw new Q(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!W8(e)&&n.indexOf("/")!==-1)throw new Q(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!te.isDocumentKey(r))throw new Q(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return d_(t,new te(r))}if(n instanceof Ht)return d_(t,n._key);throw new Q(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xh(n)}.`)}function B_(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function zT(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Q(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class p3{convertValue(e,n="none"){switch(_o(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Co(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(s=>Ze(s.doubleValue));return new F1(o)}convertGeoPoint(e){return new V1(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=g1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ou(e));default:return null}}convertTimestamp(e){const n=xi(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Le(uT(r));const i=new su(r.get(1),r.get(3)),o=new te(r.popFirst(5));return i.isEqual(n)||jr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class HT extends $T{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ad(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(of("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ad extends HT{data(e={}){return super.data(e)}}class m3{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ml(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ad(this._firestore,this._userDataWriter,r.key,r,new ml(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const l=new ad(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ml(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const l=new ad(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ml(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return a.type!==0&&(d=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),f=s.indexOf(a.doc.key)),{type:g3(a.type),doc:l,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function g3(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t){t=qn(t,Ht);const e=qn(t.firestore,Ao);return X5(D1(e),t._key).then(n=>y3(e,t,n))}class qT extends p3{constructor(e){super(),this.firestore=e}convertBytes(e){return new fa(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ht(this.firestore,null,n)}}function On(t){t=qn(t,Ni);const e=qn(t.firestore,Ao),n=D1(e),r=new qT(e);return h3(t._query),J5(n,t._query).then(i=>new m3(e,r,t,i))}function fu(t,e,n){t=qn(t,Ht);const r=qn(t.firestore,Ao),i=BT(t.converter,e,n);return af(r,[VT(nf(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,xn.none())])}function Xs(t,e,n,...r){t=qn(t,Ht);const i=qn(t.firestore,Ao),o=nf(i);let s;return s=typeof(e=He(e))=="string"||e instanceof ef?l3(o,"updateDoc",t._key,e,n,r):a3(o,"updateDoc",t._key,e),af(i,[s.toMutation(t._key,xn.exists(!0))])}function Q1(t){return af(qn(t.firestore,Ao),[new w1(t._key,xn.none())])}function YT(t,e){const n=qn(t.firestore,Ao),r=lt(t),i=BT(t.converter,e);return af(n,[VT(nf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,xn.exists(!1))]).then(()=>r)}function af(t,e){return function(r,i){const o=new Sr;return r.asyncQueue.enqueueAndForget(async()=>W5(await Z5(r),i,o)),o.promise}(D1(t),e)}function y3(t,e,n){const r=n.docs.get(e._key),i=new qT(t);return new HT(t,i,e._key,r,new ml(n.hasPendingWrites,n.fromCache),e.converter)}function Fu(){return new W1("serverTimestamp")}(function(e,n=!0){(function(i){Ca=i})(So),zn(new Sn("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new Ao(new _b(r.getProvider("auth-internal")),new xb(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Q(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new su(d.options.projectId,f)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),on(s_,"4.7.3",e),on(s_,"4.7.3","esm2017")})();const GT="@firebase/installations",Z1="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=1e4,QT=`w:${Z1}`,ZT="FIS_v2",v3="https://firebaseinstallations.googleapis.com/v1",_3=60*60*1e3,k3="installations",E3="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w3={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ko=new Io(k3,E3,w3);function XT(t){return t instanceof Ln&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT({projectId:t}){return`${v3}/projects/${t}/installations`}function eI(t){return{token:t.token,requestStatus:2,expiresIn:T3(t.expiresIn),creationTime:Date.now()}}async function tI(t,e){const r=(await e.json()).error;return ko.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function nI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function x3(t,{refreshToken:e}){const n=nI(t);return n.append("Authorization",I3(e)),n}async function rI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function T3(t){return Number(t.replace("s","000"))}function I3(t){return`${ZT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S3({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=JT(t),i=nI(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={fid:n,authVersion:ZT,appId:t.appId,sdkVersion:QT},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await rI(()=>fetch(r,a));if(l.ok){const d=await l.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:eI(d.authToken)}}else throw await tI("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C3(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L3=/^[cdef][\w-]{21}$/,dg="";function A3(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=P3(t);return L3.test(n)?n:dg}catch{return dg}}function P3(t){return C3(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=new Map;function sI(t,e){const n=lf(t);aI(n,e),R3(n,e)}function aI(t,e){const n=oI.get(t);if(n)for(const r of n)r(e)}function R3(t,e){const n=b3();n&&n.postMessage({key:t,fid:e}),j3()}let to=null;function b3(){return!to&&"BroadcastChannel"in self&&(to=new BroadcastChannel("[Firebase] FID Change"),to.onmessage=t=>{aI(t.data.key,t.data.fid)}),to}function j3(){oI.size===0&&to&&(to.close(),to=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N3="firebase-installations-database",M3=1,Eo="firebase-installations-store";let wp=null;function X1(){return wp||(wp=Fx(N3,M3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Eo)}}})),wp}async function nh(t,e){const n=lf(t),i=(await X1()).transaction(Eo,"readwrite"),o=i.objectStore(Eo),s=await o.get(n);return await o.put(e,n),await i.done,(!s||s.fid!==e.fid)&&sI(t,e.fid),e}async function lI(t){const e=lf(t),r=(await X1()).transaction(Eo,"readwrite");await r.objectStore(Eo).delete(e),await r.done}async function uf(t,e){const n=lf(t),i=(await X1()).transaction(Eo,"readwrite"),o=i.objectStore(Eo),s=await o.get(n),a=e(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&sI(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1(t){let e;const n=await uf(t.appConfig,r=>{const i=O3(r),o=D3(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===dg?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function O3(t){const e=t||{fid:A3(),registrationStatus:0};return uI(e)}function D3(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ko.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=V3(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:F3(t)}:{installationEntry:e}}async function V3(t,e){try{const n=await S3(t,e);return nh(t.appConfig,n)}catch(n){throw XT(n)&&n.customData.serverCode===409?await lI(t.appConfig):await nh(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function F3(t){let e=await H_(t.appConfig);for(;e.registrationStatus===1;)await iI(100),e=await H_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await J1(t);return r||n}return e}function H_(t){return uf(t,e=>{if(!e)throw ko.create("installation-not-found");return uI(e)})}function uI(t){return U3(t)?{fid:t.fid,registrationStatus:0}:t}function U3(t){return t.registrationStatus===1&&t.registrationTime+KT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W3({appConfig:t,heartbeatServiceProvider:e},n){const r=$3(t,n),i=x3(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={installation:{sdkVersion:QT,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await rI(()=>fetch(r,a));if(l.ok){const d=await l.json();return eI(d)}else throw await tI("Generate Auth Token",l)}function $3(t,{fid:e}){return`${JT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ey(t,e=!1){let n;const r=await uf(t.appConfig,o=>{if(!cI(o))throw ko.create("not-registered");const s=o.authToken;if(!e&&H3(s))return o;if(s.requestStatus===1)return n=z3(t,e),o;{if(!navigator.onLine)throw ko.create("app-offline");const a=Y3(o);return n=B3(t,a),a}});return n?await n:r.authToken}async function z3(t,e){let n=await q_(t.appConfig);for(;n.authToken.requestStatus===1;)await iI(100),n=await q_(t.appConfig);const r=n.authToken;return r.requestStatus===0?ey(t,e):r}function q_(t){return uf(t,e=>{if(!cI(e))throw ko.create("not-registered");const n=e.authToken;return G3(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function B3(t,e){try{const n=await W3(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await nh(t.appConfig,r),n}catch(n){if(XT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await lI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await nh(t.appConfig,r)}throw n}}function cI(t){return t!==void 0&&t.registrationStatus===2}function H3(t){return t.requestStatus===2&&!q3(t)}function q3(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+_3}function Y3(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function G3(t){return t.requestStatus===1&&t.requestTime+KT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K3(t){const e=t,{installationEntry:n,registrationPromise:r}=await J1(e);return r?r.catch(console.error):ey(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q3(t,e=!1){const n=t;return await Z3(n),(await ey(n,e)).token}async function Z3(t){const{registrationPromise:e}=await J1(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X3(t){if(!t||!t.options)throw xp("App Configuration");if(!t.name)throw xp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw xp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function xp(t){return ko.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="installations",J3="installations-internal",eN=t=>{const e=t.getProvider("app").getImmediate(),n=X3(e),r=Ri(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},tN=t=>{const e=t.getProvider("app").getImmediate(),n=Ri(e,dI).getImmediate();return{getId:()=>K3(n),getToken:i=>Q3(n,i)}};function nN(){zn(new Sn(dI,eN,"PUBLIC")),zn(new Sn(J3,tN,"PRIVATE"))}nN();on(GT,Z1);on(GT,Z1,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="analytics",rN="firebase_id",iN="origin",oN=60*1e3,sN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ty="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new Vh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},fn=new Io("analytics","Analytics",aN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(t){if(!t.startsWith(ty)){const e=fn.create("invalid-gtag-resource",{gtagURL:t});return sn.warn(e.message),""}return t}function hI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function uN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function cN(t,e){const n=uN("firebase-js-sdk-policy",{createScriptURL:lN}),r=document.createElement("script"),i=`${ty}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function dN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function hN(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const l=(await hI(n)).find(d=>d.measurementId===i);l&&await e[l.appId]}}catch(a){sn.error(a)}t("config",i,o)}async function fN(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await hI(n);for(const l of s){const d=a.find(m=>m.measurementId===l),f=d&&e[d.appId];if(f)o.push(f);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){sn.error(o)}}function pN(t,e,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await fN(t,e,n,a,l)}else if(o==="config"){const[a,l]=s;await hN(t,e,n,r,a,l)}else if(o==="consent"){const[a,l]=s;t("consent",a,l)}else if(o==="get"){const[a,l,d]=s;t("get",a,l,d)}else if(o==="set"){const[a]=s;t("set",a)}else t(o,...s)}catch(a){sn.error(a)}}return i}function mN(t,e,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=pN(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function gN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ty)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=30,vN=1e3;class _N{constructor(e={},n=vN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const fI=new _N;function kN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function EN(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:kN(r)},o=sN.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw fn.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function wN(t,e=fI,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw fn.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw fn.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new IN;return setTimeout(async()=>{a.abort()},oN),pI({appId:r,apiKey:i,measurementId:o},s,a,e)}async function pI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=fI){var o;const{appId:s,measurementId:a}=t;try{await xN(r,e)}catch(l){if(a)return sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await EN(t);return i.deleteThrottleMetadata(s),l}catch(l){const d=l;if(!TN(d)){if(i.deleteThrottleMetadata(s),a)return sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:s,measurementId:a};throw l}const f=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?R2(n,i.intervalMillis,yN):R2(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,m),sn.debug(`Calling attemptFetch again in ${f} millis`),pI(t,m,r,i)}}function xN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(fn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function TN(t){if(!(t instanceof Ln)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class IN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function SN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CN(){if(Mx())try{await Ox()}catch(t){return sn.warn(fn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return sn.warn(fn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function LN(t,e,n,r,i,o,s){var a;const l=wN(t);l.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&sn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>sn.error(_)),e.push(l);const d=CN().then(_=>{if(_)return r.getId()}),[f,m]=await Promise.all([l,d]);gN(o)||cN(o,f.measurementId),i("js",new Date);const E=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return E[iN]="firebase",E.update=!0,m!=null&&(E[rN]=m),i("config",f.measurementId,E),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e){this.app=e}_delete(){return delete bl[this.app.options.appId],Promise.resolve()}}let bl={},Y_=[];const G_={};let Tp="dataLayer",PN="gtag",K_,mI,Q_=!1;function RN(){const t=[];if(Nx()&&t.push("This is a browser extension environment."),jL()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=fn.create("invalid-analytics-context",{errorInfo:e});sn.warn(n.message)}}function bN(t,e,n){RN();const r=t.options.appId;if(!r)throw fn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw fn.create("no-api-key");if(bl[r]!=null)throw fn.create("already-exists",{id:r});if(!Q_){dN(Tp);const{wrappedGtag:o,gtagCore:s}=mN(bl,Y_,G_,Tp,PN);mI=o,K_=s,Q_=!0}return bl[r]=LN(t,Y_,G_,e,K_,Tp,n),new AN(t)}function jN(t=Fh()){t=He(t);const e=Ri(t,rh);return e.isInitialized()?e.getImmediate():NN(t)}function NN(t,e={}){const n=Ri(t,rh);if(n.isInitialized()){const i=n.getImmediate();if(tu(e,n.getOptions()))return i;throw fn.create("already-initialized")}return n.initialize({options:e})}function MN(t,e,n,r){t=He(t),SN(mI,bl[t.app.options.appId],e,n,r).catch(i=>sn.error(i))}const Z_="@firebase/analytics",X_="0.10.8";function ON(){zn(new Sn(rh,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return bN(r,i,n)},"PUBLIC")),zn(new Sn("analytics-internal",t,"PRIVATE")),on(Z_,X_),on(Z_,X_,"esm2017");function t(e){try{const n=e.getProvider(rh).getImmediate();return{logEvent:(r,i,o)=>MN(n,r,i,o)}}catch(n){throw fn.create("interop-component-reg-failed",{reason:n})}}}ON();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="firebasestorage.googleapis.com",DN="storageBucket",VN=2*60*1e3,FN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Ln{constructor(e,n,r=0){super(Ip(e),`Firebase Storage: ${n} (${Ip(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,lr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ip(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var sr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(sr||(sr={}));function Ip(t){return"storage/"+t}function UN(){const t="An unknown error occurred, please check the error payload for server response.";return new lr(sr.UNKNOWN,t)}function WN(){return new lr(sr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $N(){return new lr(sr.CANCELED,"User canceled the upload/download.")}function zN(t){return new lr(sr.INVALID_URL,"Invalid URL '"+t+"'.")}function BN(t){return new lr(sr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function J_(t){return new lr(sr.INVALID_ARGUMENT,t)}function yI(){return new lr(sr.APP_DELETED,"The Firebase app was deleted.")}function HN(t){return new lr(sr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Dn.makeFromUrl(e,n)}catch{return new Dn(e,"")}if(r.path==="")return r;throw BN(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function d(x){x.path_=decodeURIComponent(x.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",_=new RegExp(`^https?://${m}/${f}/b/${i}/o${E}`,"i"),T={bucket:1,path:3},A=n===gI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",y=new RegExp(`^https?://${A}/${i}/${S}`,"i"),k=[{regex:a,indices:l,postModify:o},{regex:_,indices:T,postModify:d},{regex:y,indices:{bucket:1,path:2},postModify:d}];for(let x=0;x<k.length;x++){const R=k[x],N=R.regex.exec(e);if(N){const w=N[R.indices.bucket];let I=N[R.indices.path];I||(I=""),r=new Dn(w,I),R.postModify(r);break}}if(r==null)throw zN(e);return r}}class qN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let d=!1;function f(...S){d||(d=!0,e.apply(null,S))}function m(S){i=setTimeout(()=>{i=null,t(_,l())},S)}function E(){o&&clearTimeout(o)}function _(S,...y){if(d){E();return}if(S){E(),f.call(null,S,...y);return}if(l()||s){E(),f.call(null,S,...y);return}r<64&&(r*=2);let k;a===1?(a=2,k=0):k=(r+Math.random())*1e3,m(k)}let T=!1;function A(S){T||(T=!0,E(),!d&&(i!==null?(S||(a=2),clearTimeout(i),m(0)):S||(a=1)))}return m(0),o=setTimeout(()=>{s=!0,A(!0)},n),A}function GN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(t){return t!==void 0}function ek(t,e,n,r){if(r<e)throw J_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw J_(`Invalid value for '${t}'. Expected ${n} or less.`)}function QN(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var ih;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ih||(ih={}));/**
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
 */function ZN(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n,r,i,o,s,a,l,d,f,m,E=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.retry=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,T)=>{this.resolve_=_,this.reject_=T,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Cc(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===ih.NO_ERROR,l=o.getStatus();if(!a||ZN(l,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===ih.ABORT;r(!1,new Cc(!1,null,f));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new Cc(d,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());KN(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=UN();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?yI():$N();s(l)}else{const l=WN();s(l)}};this.canceled_?n(!1,new Cc(!1,null,!0)):this.backoffId_=YN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&GN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Cc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function JN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function eM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function nM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function rM(t,e,n,r,i,o,s=!0){const a=QN(t.urlParams),l=t.url+a,d=Object.assign({},t.headers);return tM(d,e),JN(d,n),eM(d,o),nM(d,r),new XN(l,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function oM(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n){this._service=e,n instanceof Dn?this._location=n:this._location=Dn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new oh(e,n)}get root(){const e=new Dn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return oM(this._location.path)}get storage(){return this._service}get parent(){const e=iM(this._location.path);if(e===null)return null;const n=new Dn(this._location.bucket,e);return new oh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw HN(e)}}function tk(t,e){const n=e==null?void 0:e[DN];return n==null?null:Dn.makeFromBucketSpec(n,t)}function sM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:jx(i,t.app.options.projectId))}class aM{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=gI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=VN,this._maxUploadRetryTime=FN,this._requests=new Set,i!=null?this._bucket=Dn.makeFromBucketSpec(i,this._host):this._bucket=tk(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dn.makeFromBucketSpec(this._url,e):this._bucket=tk(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ek("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ek("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new oh(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new qN(yI());{const s=rM(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const nk="@firebase/storage",rk="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="storage";function lM(t=Fh(),e){t=He(t);const r=Ri(t,vI).getImmediate({identifier:e}),i=Px("storage");return i&&uM(r,...i),r}function uM(t,e,n,r={}){sM(t,e,n,r)}function cM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new aM(n,r,i,e,So)}function dM(){zn(new Sn(vI,cM,"PUBLIC").setMultipleInstances(!0)),on(nk,rk,""),on(nk,rk,"esm2017")}dM();const hM={apiKey:"AIzaSyD7J2eVv6O0M4l39GToo_kVOeQZH8nQW0w",authDomain:"hyacinthattendance.firebaseapp.com",projectId:"hyacinthattendance",storageBucket:"hyacinthattendance.appspot.com",messagingSenderId:"12316915447",appId:"1:12316915447:web:2f8a7daf07918a0c2f45f2",measurementId:"G-040M8BP5NJ"},cf=Ux(hM),Vn=x8(cf),Ee=n3(cf);lM(cf);console.log("Using production Firebase services");let fM=null;try{fM=jN(cf),console.log("Analytics initialized")}catch(t){console.error("Error initializing analytics:",t)}const ny=new yr;ny.setCustomParameters({prompt:"select_account"});ny.addScope("email");ny.addScope("profile");const _I=M.createContext(),kI=()=>M.useContext(_I),pM=({children:t})=>{const[e,n]=M.useState(null),[r,i]=M.useState(!0);M.useEffect(()=>{const s=tR(Vn,a=>{n(a),i(!1)});return()=>s()},[]);const o={currentUser:e,loading:r};return h.jsx(_I.Provider,{value:o,children:t})};var Jt=function(){return Jt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Jt.apply(this,arguments)};function sh(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var Oe="-ms-",jl="-moz-",xe="-webkit-",EI="comm",df="rule",ry="decl",mM="@import",wI="@keyframes",gM="@layer",xI=Math.abs,iy=String.fromCharCode,hg=Object.assign;function yM(t,e){return ht(t,0)^45?(((e<<2^ht(t,0))<<2^ht(t,1))<<2^ht(t,2))<<2^ht(t,3):0}function TI(t){return t.trim()}function mr(t,e){return(t=e.exec(t))?t[0]:t}function ue(t,e,n){return t.replace(e,n)}function ld(t,e,n){return t.indexOf(e,n)}function ht(t,e){return t.charCodeAt(e)|0}function pa(t,e,n){return t.slice(e,n)}function Kn(t){return t.length}function II(t){return t.length}function gl(t,e){return e.push(t),t}function vM(t,e){return t.map(e).join("")}function ik(t,e){return t.filter(function(n){return!mr(n,e)})}var hf=1,ma=1,SI=0,Cn=0,tt=0,Ra="";function ff(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:hf,column:ma,length:s,return:"",siblings:a}}function Hr(t,e){return hg(ff("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ps(t){for(;t.root;)t=Hr(t.root,{children:[t]});gl(t,t.siblings)}function _M(){return tt}function kM(){return tt=Cn>0?ht(Ra,--Cn):0,ma--,tt===10&&(ma=1,hf--),tt}function Wn(){return tt=Cn<SI?ht(Ra,Cn++):0,ma++,tt===10&&(ma=1,hf++),tt}function so(){return ht(Ra,Cn)}function ud(){return Cn}function pf(t,e){return pa(Ra,t,e)}function fg(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function EM(t){return hf=ma=1,SI=Kn(Ra=t),Cn=0,[]}function wM(t){return Ra="",t}function Sp(t){return TI(pf(Cn-1,pg(t===91?t+2:t===40?t+1:t)))}function xM(t){for(;(tt=so())&&tt<33;)Wn();return fg(t)>2||fg(tt)>3?"":" "}function TM(t,e){for(;--e&&Wn()&&!(tt<48||tt>102||tt>57&&tt<65||tt>70&&tt<97););return pf(t,ud()+(e<6&&so()==32&&Wn()==32))}function pg(t){for(;Wn();)switch(tt){case t:return Cn;case 34:case 39:t!==34&&t!==39&&pg(tt);break;case 40:t===41&&pg(t);break;case 92:Wn();break}return Cn}function IM(t,e){for(;Wn()&&t+tt!==57;)if(t+tt===84&&so()===47)break;return"/*"+pf(e,Cn-1)+"*"+iy(t===47?t:Wn())}function SM(t){for(;!fg(so());)Wn();return pf(t,Cn)}function CM(t){return wM(cd("",null,null,null,[""],t=EM(t),0,[0],t))}function cd(t,e,n,r,i,o,s,a,l){for(var d=0,f=0,m=s,E=0,_=0,T=0,A=1,S=1,y=1,g=0,k="",x=i,R=o,N=r,w=k;S;)switch(T=g,g=Wn()){case 40:if(T!=108&&ht(w,m-1)==58){ld(w+=ue(Sp(g),"&","&\f"),"&\f",xI(d?a[d-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:w+=Sp(g);break;case 9:case 10:case 13:case 32:w+=xM(T);break;case 92:w+=TM(ud()-1,7);continue;case 47:switch(so()){case 42:case 47:gl(LM(IM(Wn(),ud()),e,n,l),l);break;default:w+="/"}break;case 123*A:a[d++]=Kn(w)*y;case 125*A:case 59:case 0:switch(g){case 0:case 125:S=0;case 59+f:y==-1&&(w=ue(w,/\f/g,"")),_>0&&Kn(w)-m&&gl(_>32?sk(w+";",r,n,m-1,l):sk(ue(w," ","")+";",r,n,m-2,l),l);break;case 59:w+=";";default:if(gl(N=ok(w,e,n,d,f,i,a,k,x=[],R=[],m,o),o),g===123)if(f===0)cd(w,e,N,N,x,o,m,a,R);else switch(E===99&&ht(w,3)===110?100:E){case 100:case 108:case 109:case 115:cd(t,N,N,r&&gl(ok(t,N,N,0,0,i,a,k,i,x=[],m,R),R),i,R,m,a,r?x:R);break;default:cd(w,N,N,N,[""],R,0,a,R)}}d=f=_=0,A=y=1,k=w="",m=s;break;case 58:m=1+Kn(w),_=T;default:if(A<1){if(g==123)--A;else if(g==125&&A++==0&&kM()==125)continue}switch(w+=iy(g),g*A){case 38:y=f>0?1:(w+="\f",-1);break;case 44:a[d++]=(Kn(w)-1)*y,y=1;break;case 64:so()===45&&(w+=Sp(Wn())),E=so(),f=m=Kn(k=w+=SM(ud())),g++;break;case 45:T===45&&Kn(w)==2&&(A=0)}}return o}function ok(t,e,n,r,i,o,s,a,l,d,f,m){for(var E=i-1,_=i===0?o:[""],T=II(_),A=0,S=0,y=0;A<r;++A)for(var g=0,k=pa(t,E+1,E=xI(S=s[A])),x=t;g<T;++g)(x=TI(S>0?_[g]+" "+k:ue(k,/&\f/g,_[g])))&&(l[y++]=x);return ff(t,e,n,i===0?df:a,l,d,f,m)}function LM(t,e,n,r){return ff(t,e,n,EI,iy(_M()),pa(t,2,-2),0,r)}function sk(t,e,n,r,i){return ff(t,e,n,ry,pa(t,0,r),pa(t,r+1,-1),r,i)}function CI(t,e,n){switch(yM(t,e)){case 5103:return xe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xe+t+t;case 4789:return jl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+t+jl+t+Oe+t+t;case 5936:switch(ht(t,e+11)){case 114:return xe+t+Oe+ue(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return xe+t+Oe+ue(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return xe+t+Oe+ue(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return xe+t+Oe+t+t;case 6165:return xe+t+Oe+"flex-"+t+t;case 5187:return xe+t+ue(t,/(\w+).+(:[^]+)/,xe+"box-$1$2"+Oe+"flex-$1$2")+t;case 5443:return xe+t+Oe+"flex-item-"+ue(t,/flex-|-self/g,"")+(mr(t,/flex-|baseline/)?"":Oe+"grid-row-"+ue(t,/flex-|-self/g,""))+t;case 4675:return xe+t+Oe+"flex-line-pack"+ue(t,/align-content|flex-|-self/g,"")+t;case 5548:return xe+t+Oe+ue(t,"shrink","negative")+t;case 5292:return xe+t+Oe+ue(t,"basis","preferred-size")+t;case 6060:return xe+"box-"+ue(t,"-grow","")+xe+t+Oe+ue(t,"grow","positive")+t;case 4554:return xe+ue(t,/([^-])(transform)/g,"$1"+xe+"$2")+t;case 6187:return ue(ue(ue(t,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),t,"")+t;case 5495:case 3959:return ue(t,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return ue(ue(t,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+Oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+xe+t+t;case 4200:if(!mr(t,/flex-|baseline/))return Oe+"grid-column-align"+pa(t,e)+t;break;case 2592:case 3360:return Oe+ue(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,mr(r.props,/grid-\w+-end/)})?~ld(t+(n=n[e].value),"span",0)?t:Oe+ue(t,"-start","")+t+Oe+"grid-row-span:"+(~ld(n,"span",0)?mr(n,/\d+/):+mr(n,/\d+/)-+mr(t,/\d+/))+";":Oe+ue(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return mr(r.props,/grid-\w+-start/)})?t:Oe+ue(ue(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ue(t,/(.+)-inline(.+)/,xe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kn(t)-1-e>6)switch(ht(t,e+1)){case 109:if(ht(t,e+4)!==45)break;case 102:return ue(t,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+jl+(ht(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~ld(t,"stretch",0)?CI(ue(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ue(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,d){return Oe+i+":"+o+d+(s?Oe+i+"-span:"+(a?l:+l-+o)+d:"")+t});case 4949:if(ht(t,e+6)===121)return ue(t,":",":"+xe)+t;break;case 6444:switch(ht(t,ht(t,14)===45?18:11)){case 120:return ue(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xe+(ht(t,14)===45?"inline-":"")+"box$3$1"+xe+"$2$3$1"+Oe+"$2box$3")+t;case 100:return ue(t,":",":"+Oe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ue(t,"scroll-","scroll-snap-")+t}return t}function ah(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function AM(t,e,n,r){switch(t.type){case gM:if(t.children.length)break;case mM:case ry:return t.return=t.return||t.value;case EI:return"";case wI:return t.return=t.value+"{"+ah(t.children,r)+"}";case df:if(!Kn(t.value=t.props.join(",")))return""}return Kn(n=ah(t.children,r))?t.return=t.value+"{"+n+"}":""}function PM(t){var e=II(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function RM(t){return function(e){e.root||(e=e.return)&&t(e)}}function bM(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case ry:t.return=CI(t.value,t.length,n);return;case wI:return ah([Hr(t,{value:ue(t.value,"@","@"+xe)})],r);case df:if(t.length)return vM(n=t.props,function(i){switch(mr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ps(Hr(t,{props:[ue(i,/:(read-\w+)/,":"+jl+"$1")]})),ps(Hr(t,{props:[i]})),hg(t,{props:ik(n,r)});break;case"::placeholder":ps(Hr(t,{props:[ue(i,/:(plac\w+)/,":"+xe+"input-$1")]})),ps(Hr(t,{props:[ue(i,/:(plac\w+)/,":"+jl+"$1")]})),ps(Hr(t,{props:[ue(i,/:(plac\w+)/,Oe+"input-$1")]})),ps(Hr(t,{props:[i]})),hg(t,{props:ik(n,r)});break}return""})}}var jM={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ln={},ga=typeof process<"u"&&ln!==void 0&&(ln.REACT_APP_SC_ATTR||ln.SC_ATTR)||"data-styled",LI="active",AI="data-styled-version",mf="6.1.17",oy=`/*!sc*/
`,lh=typeof window<"u"&&"HTMLElement"in window,NM=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ln!==void 0&&ln.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ln.REACT_APP_SC_DISABLE_SPEEDY!==""?ln.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ln.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ln!==void 0&&ln.SC_DISABLE_SPEEDY!==void 0&&ln.SC_DISABLE_SPEEDY!==""&&ln.SC_DISABLE_SPEEDY!=="false"&&ln.SC_DISABLE_SPEEDY),gf=Object.freeze([]),ya=Object.freeze({});function MM(t,e,n){return n===void 0&&(n=ya),t.theme!==n.theme&&t.theme||e||n.theme}var PI=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),OM=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,DM=/(^-|-$)/g;function ak(t){return t.replace(OM,"-").replace(DM,"")}var VM=/(a)(d)/gi,Lc=52,lk=function(t){return String.fromCharCode(t+(t>25?39:97))};function mg(t){var e,n="";for(e=Math.abs(t);e>Lc;e=e/Lc|0)n=lk(e%Lc)+n;return(lk(e%Lc)+n).replace(VM,"$1-$2")}var Cp,RI=5381,Us=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},bI=function(t){return Us(RI,t)};function FM(t){return mg(bI(t)>>>0)}function UM(t){return t.displayName||t.name||"Component"}function Lp(t){return typeof t=="string"&&!0}var jI=typeof Symbol=="function"&&Symbol.for,NI=jI?Symbol.for("react.memo"):60115,WM=jI?Symbol.for("react.forward_ref"):60112,$M={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zM={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},MI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},BM=((Cp={})[WM]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Cp[NI]=MI,Cp);function uk(t){return("type"in(e=t)&&e.type.$$typeof)===NI?MI:"$$typeof"in t?BM[t.$$typeof]:$M;var e}var HM=Object.defineProperty,qM=Object.getOwnPropertyNames,ck=Object.getOwnPropertySymbols,YM=Object.getOwnPropertyDescriptor,GM=Object.getPrototypeOf,dk=Object.prototype;function OI(t,e,n){if(typeof e!="string"){if(dk){var r=GM(e);r&&r!==dk&&OI(t,r,n)}var i=qM(e);ck&&(i=i.concat(ck(e)));for(var o=uk(t),s=uk(e),a=0;a<i.length;++a){var l=i[a];if(!(l in zM||n&&n[l]||s&&l in s||o&&l in o)){var d=YM(e,l);try{HM(t,l,d)}catch{}}}}return t}function va(t){return typeof t=="function"}function sy(t){return typeof t=="object"&&"styledComponentId"in t}function no(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function hk(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function pu(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function gg(t,e,n){if(n===void 0&&(n=!1),!n&&!pu(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=gg(t[r],e[r]);else if(pu(e))for(var r in e)t[r]=gg(t[r],e[r]);return t}function ay(t,e){Object.defineProperty(t,"toString",{value:e})}function Uu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var KM=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw Uu(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(oy);return n},t}(),dd=new Map,uh=new Map,hd=1,Ac=function(t){if(dd.has(t))return dd.get(t);for(;uh.has(hd);)hd++;var e=hd++;return dd.set(t,e),uh.set(e,t),e},QM=function(t,e){hd=e+1,dd.set(t,e),uh.set(e,t)},ZM="style[".concat(ga,"][").concat(AI,'="').concat(mf,'"]'),XM=new RegExp("^".concat(ga,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),JM=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},eO=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(oy),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(XM);if(l){var d=0|parseInt(l[1],10),f=l[2];d!==0&&(QM(f,d),JM(t,f,l[3]),t.getTag().insertRules(d,i)),i.length=0}else i.push(a)}}},fk=function(t){for(var e=document.querySelectorAll(ZM),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(ga)!==LI&&(eO(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function tO(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var DI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(ga,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ga,LI),r.setAttribute(AI,mf);var s=tO();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},nO=function(){function t(e){this.element=DI(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Uu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),rO=function(){function t(e){this.element=DI(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),iO=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),pk=lh,oO={isServer:!lh,useCSSOMInjection:!NM},VI=function(){function t(e,n,r){e===void 0&&(e=ya),n===void 0&&(n={});var i=this;this.options=Jt(Jt({},oO),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&lh&&pk&&(pk=!1,fk(this)),ay(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",d=function(m){var E=function(y){return uh.get(y)}(m);if(E===void 0)return"continue";var _=o.names.get(E),T=s.getGroup(m);if(_===void 0||!_.size||T.length===0)return"continue";var A="".concat(ga,".g").concat(m,'[id="').concat(E,'"]'),S="";_!==void 0&&_.forEach(function(y){y.length>0&&(S+="".concat(y,","))}),l+="".concat(T).concat(A,'{content:"').concat(S,'"}').concat(oy)},f=0;f<a;f++)d(f);return l}(i)})}return t.registerId=function(e){return Ac(e)},t.prototype.rehydrate=function(){!this.server&&lh&&fk(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Jt(Jt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new iO(i):r?new nO(i):new rO(i)}(this.options),new KM(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Ac(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Ac(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Ac(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),sO=/&/g,aO=/^\s*\/\/.*$/gm;function FI(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=FI(n.children,e)),n})}function lO(t){var e,n,r,i=ya,o=i.options,s=o===void 0?ya:o,a=i.plugins,l=a===void 0?gf:a,d=function(E,_,T){return T.startsWith(n)&&T.endsWith(n)&&T.replaceAll(n,"").length>0?".".concat(e):E},f=l.slice();f.push(function(E){E.type===df&&E.value.includes("&")&&(E.props[0]=E.props[0].replace(sO,n).replace(r,d))}),s.prefix&&f.push(bM),f.push(AM);var m=function(E,_,T,A){_===void 0&&(_=""),T===void 0&&(T=""),A===void 0&&(A="&"),e=A,n=_,r=new RegExp("\\".concat(n,"\\b"),"g");var S=E.replace(aO,""),y=CM(T||_?"".concat(T," ").concat(_," { ").concat(S," }"):S);s.namespace&&(y=FI(y,s.namespace));var g=[];return ah(y,PM(f.concat(RM(function(k){return g.push(k)})))),g};return m.hash=l.length?l.reduce(function(E,_){return _.name||Uu(15),Us(E,_.name)},RI).toString():"",m}var uO=new VI,yg=lO(),UI=c.createContext({shouldForwardProp:void 0,styleSheet:uO,stylis:yg});UI.Consumer;c.createContext(void 0);function mk(){return M.useContext(UI)}var cO=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=yg);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,ay(this,function(){throw Uu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=yg),this.name+e.hash},t}(),dO=function(t){return t>="A"&&t<="Z"};function gk(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;dO(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var WI=function(t){return t==null||t===!1||t===""},$I=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!WI(o)&&(Array.isArray(o)&&o.isCss||va(o)?r.push("".concat(gk(i),":"),o,";"):pu(o)?r.push.apply(r,sh(sh(["".concat(i," {")],$I(o),!1),["}"],!1)):r.push("".concat(gk(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in jM||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ao(t,e,n,r){if(WI(t))return[];if(sy(t))return[".".concat(t.styledComponentId)];if(va(t)){if(!va(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return ao(i,e,n,r)}var o;return t instanceof cO?n?(t.inject(n,r),[t.getName(r)]):[t]:pu(t)?$I(t):Array.isArray(t)?Array.prototype.concat.apply(gf,t.map(function(s){return ao(s,e,n,r)})):[t.toString()]}function hO(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(va(n)&&!sy(n))return!1}return!0}var fO=bI(mf),pO=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&hO(e),this.componentId=n,this.baseHash=Us(fO,n),this.baseStyle=r,VI.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=no(i,this.staticRulesId);else{var o=hk(ao(this.rules,e,n,r)),s=mg(Us(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=no(i,s),this.staticRulesId=s}else{for(var l=Us(this.baseHash,r.hash),d="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")d+=m;else if(m){var E=hk(ao(m,e,n,r));l=Us(l,E+f),d+=E}}if(d){var _=mg(l>>>0);n.hasNameForId(this.componentId,_)||n.insertRules(this.componentId,_,r(d,".".concat(_),void 0,this.componentId)),i=no(i,_)}}return i},t}(),zI=c.createContext(void 0);zI.Consumer;var Ap={};function mO(t,e,n){var r=sy(t),i=t,o=!Lp(t),s=e.attrs,a=s===void 0?gf:s,l=e.componentId,d=l===void 0?function(x,R){var N=typeof x!="string"?"sc":ak(x);Ap[N]=(Ap[N]||0)+1;var w="".concat(N,"-").concat(FM(mf+N+Ap[N]));return R?"".concat(R,"-").concat(w):w}(e.displayName,e.parentComponentId):l,f=e.displayName,m=f===void 0?function(x){return Lp(x)?"styled.".concat(x):"Styled(".concat(UM(x),")")}(t):f,E=e.displayName&&e.componentId?"".concat(ak(e.displayName),"-").concat(e.componentId):e.componentId||d,_=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,T=e.shouldForwardProp;if(r&&i.shouldForwardProp){var A=i.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;T=function(x,R){return A(x,R)&&S(x,R)}}else T=A}var y=new pO(n,E,r?i.componentStyle:void 0);function g(x,R){return function(N,w,I){var P=N.attrs,b=N.componentStyle,j=N.defaultProps,O=N.foldedComponentIds,C=N.styledComponentId,K=N.target,ie=c.useContext(zI),ee=mk(),z=N.shouldForwardProp||ee.shouldForwardProp,$=MM(w,ie,j)||ya,G=function(Pe,Qe,Ue){for(var xt,Vt=Jt(Jt({},Qe),{className:void 0,theme:Ue}),Kt=0;Kt<Pe.length;Kt+=1){var Tt=va(xt=Pe[Kt])?xt(Vt):xt;for(var It in Tt)Vt[It]=It==="className"?no(Vt[It],Tt[It]):It==="style"?Jt(Jt({},Vt[It]),Tt[It]):Tt[It]}return Qe.className&&(Vt.className=no(Vt.className,Qe.className)),Vt}(P,w,$),J=G.as||K,le={};for(var ne in G)G[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&G.theme===$||(ne==="forwardedAs"?le.as=G.forwardedAs:z&&!z(ne,J)||(le[ne]=G[ne]));var he=function(Pe,Qe){var Ue=mk(),xt=Pe.generateAndInjectStyles(Qe,Ue.styleSheet,Ue.stylis);return xt}(b,G),Fe=no(O,C);return he&&(Fe+=" "+he),G.className&&(Fe+=" "+G.className),le[Lp(J)&&!PI.has(J)?"class":"className"]=Fe,I&&(le.ref=I),M.createElement(J,le)}(k,x,R)}g.displayName=m;var k=c.forwardRef(g);return k.attrs=_,k.componentStyle=y,k.displayName=m,k.shouldForwardProp=T,k.foldedComponentIds=r?no(i.foldedComponentIds,i.styledComponentId):"",k.styledComponentId=E,k.target=r?i.target:t,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(R){for(var N=[],w=1;w<arguments.length;w++)N[w-1]=arguments[w];for(var I=0,P=N;I<P.length;I++)gg(R,P[I],!0);return R}({},i.defaultProps,x):x}}),ay(k,function(){return".".concat(k.styledComponentId)}),o&&OI(k,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function yk(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var vk=function(t){return Object.assign(t,{isCss:!0})};function gO(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(va(t)||pu(t))return vk(ao(yk(gf,sh([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?ao(r):vk(ao(yk(r,e)))}function vg(t,e,n){if(n===void 0&&(n=ya),!e)throw Uu(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,gO.apply(void 0,sh([i],o,!1)))};return r.attrs=function(i){return vg(t,e,Jt(Jt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return vg(t,e,Jt(Jt({},n),i))},r}var BI=function(t){return vg(mO,t)},V=BI;PI.forEach(function(t){V[t]=BI(t)});function HI(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=HI(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function ii(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=HI(t))&&(r&&(r+=" "),r+=e);return r}const Nl=t=>typeof t=="number"&&!isNaN(t),wo=t=>typeof t=="string",en=t=>typeof t=="function",fd=t=>wo(t)||en(t)?t:null,Pp=t=>M.isValidElement(t)||wo(t)||en(t)||Nl(t);function yO(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function yf(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=t;return function(s){let{children:a,position:l,preventExitTransition:d,done:f,nodeRef:m,isIn:E}=s;const _=r?`${e}--${l}`:e,T=r?`${n}--${l}`:n,A=M.useRef(0);return M.useLayoutEffect(()=>{const S=m.current,y=_.split(" "),g=k=>{k.target===m.current&&(S.dispatchEvent(new Event("d")),S.removeEventListener("animationend",g),S.removeEventListener("animationcancel",g),A.current===0&&k.type!=="animationcancel"&&S.classList.remove(...y))};S.classList.add(...y),S.addEventListener("animationend",g),S.addEventListener("animationcancel",g)},[]),M.useEffect(()=>{const S=m.current,y=()=>{S.removeEventListener("animationend",y),i?yO(S,f,o):f()};E||(d?y():(A.current=1,S.className+=` ${T}`,S.addEventListener("animationend",y)))},[E]),c.createElement(c.Fragment,null,a)}}function _k(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const yn={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},Pc=t=>{let{theme:e,type:n,...r}=t;return c.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Rp={info:function(t){return c.createElement(Pc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(Pc,{...t},c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(Pc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(Pc,{...t},c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function vO(t){const[,e]=M.useReducer(_=>_+1,0),[n,r]=M.useState([]),i=M.useRef(null),o=M.useRef(new Map).current,s=_=>n.indexOf(_)!==-1,a=M.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:_=>o.get(_)}).current;function l(_){let{containerId:T}=_;const{limit:A}=a.props;!A||T&&a.containerId!==T||(a.count-=a.queue.length,a.queue=[])}function d(_){r(T=>_==null?[]:T.filter(A=>A!==_))}function f(){const{toastContent:_,toastProps:T,staleId:A}=a.queue.shift();E(_,T,A)}function m(_,T){let{delay:A,staleId:S,...y}=T;if(!Pp(_)||function(O){return!i.current||a.props.enableMultiContainer&&O.containerId!==a.props.containerId||o.has(O.toastId)&&O.updateId==null}(y))return;const{toastId:g,updateId:k,data:x}=y,{props:R}=a,N=()=>d(g),w=k==null;w&&a.count++;const I={...R,style:R.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(y).filter(O=>{let[C,K]=O;return K!=null})),toastId:g,updateId:k,data:x,closeToast:N,isIn:!1,className:fd(y.className||R.toastClassName),bodyClassName:fd(y.bodyClassName||R.bodyClassName),progressClassName:fd(y.progressClassName||R.progressClassName),autoClose:!y.isLoading&&(P=y.autoClose,b=R.autoClose,P===!1||Nl(P)&&P>0?P:b),deleteToast(){const O=_k(o.get(g),"removed");o.delete(g),yn.emit(4,O);const C=a.queue.length;if(a.count=g==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),C>0){const K=g==null?a.props.limit:1;if(C===1||K===1)a.displayedToast++,f();else{const ie=K>C?C:K;a.displayedToast=ie;for(let ee=0;ee<ie;ee++)f()}}else e()}};var P,b;I.iconOut=function(O){let{theme:C,type:K,isLoading:ie,icon:ee}=O,z=null;const $={theme:C,type:K};return ee===!1||(en(ee)?z=ee($):M.isValidElement(ee)?z=M.cloneElement(ee,$):wo(ee)||Nl(ee)?z=ee:ie?z=Rp.spinner():(G=>G in Rp)(K)&&(z=Rp[K]($))),z}(I),en(y.onOpen)&&(I.onOpen=y.onOpen),en(y.onClose)&&(I.onClose=y.onClose),I.closeButton=R.closeButton,y.closeButton===!1||Pp(y.closeButton)?I.closeButton=y.closeButton:y.closeButton===!0&&(I.closeButton=!Pp(R.closeButton)||R.closeButton);let j=_;M.isValidElement(_)&&!wo(_.type)?j=M.cloneElement(_,{closeToast:N,toastProps:I,data:x}):en(_)&&(j=_({closeToast:N,toastProps:I,data:x})),R.limit&&R.limit>0&&a.count>R.limit&&w?a.queue.push({toastContent:j,toastProps:I,staleId:S}):Nl(A)?setTimeout(()=>{E(j,I,S)},A):E(j,I,S)}function E(_,T,A){const{toastId:S}=T;A&&o.delete(A);const y={content:_,props:T};o.set(S,y),r(g=>[...g,S].filter(k=>k!==A)),yn.emit(4,_k(y,y.props.updateId==null?"added":"updated"))}return M.useEffect(()=>(a.containerId=t.containerId,yn.cancelEmit(3).on(0,m).on(1,_=>i.current&&d(_)).on(5,l).emit(2,a),()=>{o.clear(),yn.emit(3,a)}),[]),M.useEffect(()=>{a.props=t,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(_){const T=new Map,A=Array.from(o.values());return t.newestOnTop&&A.reverse(),A.forEach(S=>{const{position:y}=S.props;T.has(y)||T.set(y,[]),T.get(y).push(S)}),Array.from(T,S=>_(S[0],S[1]))},containerRef:i,isToastActive:s}}function kk(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function Ek(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function _O(t){const[e,n]=M.useState(!1),[r,i]=M.useState(!1),o=M.useRef(null),s=M.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=M.useRef(t),{autoClose:l,pauseOnHover:d,closeToast:f,onClick:m,closeOnClick:E}=t;function _(x){if(t.draggable){x.nativeEvent.type==="touchstart"&&x.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",g),document.addEventListener("touchmove",y),document.addEventListener("touchend",g);const R=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=R.getBoundingClientRect(),R.style.transition="",s.x=kk(x.nativeEvent),s.y=Ek(x.nativeEvent),t.draggableDirection==="x"?(s.start=s.x,s.removalDistance=R.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=R.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function T(x){if(s.boundingRect){const{top:R,bottom:N,left:w,right:I}=s.boundingRect;x.nativeEvent.type!=="touchend"&&t.pauseOnHover&&s.x>=w&&s.x<=I&&s.y>=R&&s.y<=N?S():A()}}function A(){n(!0)}function S(){n(!1)}function y(x){const R=o.current;s.canDrag&&R&&(s.didMove=!0,e&&S(),s.x=kk(x),s.y=Ek(x),s.delta=t.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),R.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,R.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",g);const x=o.current;if(s.canDrag&&s.didMove&&x){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void t.closeToast();x.style.transition="transform 0.2s, opacity 0.2s",x.style.transform=`translate${t.draggableDirection}(0)`,x.style.opacity="1"}}M.useEffect(()=>{a.current=t}),M.useEffect(()=>(o.current&&o.current.addEventListener("d",A,{once:!0}),en(t.onOpen)&&t.onOpen(M.isValidElement(t.children)&&t.children.props),()=>{const x=a.current;en(x.onClose)&&x.onClose(M.isValidElement(x.children)&&x.children.props)}),[]),M.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||S(),window.addEventListener("focus",A),window.addEventListener("blur",S)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",A),window.removeEventListener("blur",S))}),[t.pauseOnFocusLoss]);const k={onMouseDown:_,onTouchStart:_,onMouseUp:T,onTouchEnd:T};return l&&d&&(k.onMouseEnter=S,k.onMouseLeave=A),E&&(k.onClick=x=>{m&&m(x),s.canCloseOnClick&&f()}),{playToast:A,pauseToast:S,isRunning:e,preventExitTransition:r,toastRef:o,eventHandlers:k}}function qI(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return c.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function kO(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:l,progress:d,rtl:f,isIn:m,theme:E}=t;const _=o||l&&d===0,T={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:_?0:1};l&&(T.transform=`scaleX(${d})`);const A=ii("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${E}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),S=en(s)?s({rtl:f,type:i,defaultClassName:A}):ii(A,s);return c.createElement("div",{role:"progressbar","aria-hidden":_?"true":"false","aria-label":"notification timer",className:S,style:T,[l&&d>=1?"onTransitionEnd":"onAnimationEnd"]:l&&d<1?null:()=>{m&&r()}})}const EO=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=_O(t),{closeButton:o,children:s,autoClose:a,onClick:l,type:d,hideProgressBar:f,closeToast:m,transition:E,position:_,className:T,style:A,bodyClassName:S,bodyStyle:y,progressClassName:g,progressStyle:k,updateId:x,role:R,progress:N,rtl:w,toastId:I,deleteToast:P,isIn:b,isLoading:j,iconOut:O,closeOnClick:C,theme:K}=t,ie=ii("Toastify__toast",`Toastify__toast-theme--${K}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":w},{"Toastify__toast--close-on-click":C}),ee=en(T)?T({rtl:w,position:_,type:d,defaultClassName:ie}):ii(ie,T),z=!!N||!a,$={closeToast:m,type:d,theme:K};let G=null;return o===!1||(G=en(o)?o($):M.isValidElement(o)?M.cloneElement(o,$):qI($)),c.createElement(E,{isIn:b,done:P,position:_,preventExitTransition:n,nodeRef:r},c.createElement("div",{id:I,onClick:l,className:ee,...i,style:A,ref:r},c.createElement("div",{...b&&{role:R},className:en(S)?S({type:d}):ii("Toastify__toast-body",S),style:y},O!=null&&c.createElement("div",{className:ii("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!j})},O),c.createElement("div",null,s)),G,c.createElement(kO,{...x&&!z?{key:`pb-${x}`}:{},rtl:w,theme:K,delay:a,isRunning:e,isIn:b,closeToast:m,hide:f,type:d,style:k,className:g,controlledProgress:z,progress:N||0})))},vf=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},wO=yf(vf("bounce",!0));yf(vf("slide",!0));yf(vf("zoom"));yf(vf("flip"));const _g=M.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=vO(t),{className:o,style:s,rtl:a,containerId:l}=t;function d(f){const m=ii("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":a});return en(o)?o({position:f,rtl:a,defaultClassName:m}):ii(m,fd(o))}return M.useEffect(()=>{e&&(e.current=r.current)},[]),c.createElement("div",{ref:r,className:"Toastify",id:l},n((f,m)=>{const E=m.length?{...s}:{...s,pointerEvents:"none"};return c.createElement("div",{className:d(f),style:E,key:`container-${f}`},m.map((_,T)=>{let{content:A,props:S}=_;return c.createElement(EO,{...S,isIn:i(S.toastId),style:{...S.style,"--nth":T+1,"--len":m.length},key:`toast-${S.key}`},A)}))}))});_g.displayName="ToastContainer",_g.defaultProps={position:"top-right",transition:wO,autoClose:5e3,closeButton:qI,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let bp,Gi=new Map,yl=[],xO=1;function YI(){return""+xO++}function TO(t){return t&&(wo(t.toastId)||Nl(t.toastId))?t.toastId:YI()}function Ml(t,e){return Gi.size>0?yn.emit(0,t,e):yl.push({content:t,options:e}),e.toastId}function ch(t,e){return{...e,type:e&&e.type||t,toastId:TO(e)}}function Rc(t){return(e,n)=>Ml(e,ch(t,n))}function Y(t,e){return Ml(t,ch("default",e))}Y.loading=(t,e)=>Ml(t,ch("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),Y.promise=function(t,e,n){let r,{pending:i,error:o,success:s}=e;i&&(r=wo(i)?Y.loading(i,n):Y.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(f,m,E)=>{if(m==null)return void Y.dismiss(r);const _={type:f,...a,...n,data:E},T=wo(m)?{render:m}:m;return r?Y.update(r,{..._,...T}):Y(T.render,{..._,...T}),E},d=en(t)?t():t;return d.then(f=>l("success",s,f)).catch(f=>l("error",o,f)),d},Y.success=Rc("success"),Y.info=Rc("info"),Y.error=Rc("error"),Y.warning=Rc("warning"),Y.warn=Y.warning,Y.dark=(t,e)=>Ml(t,ch("default",{theme:"dark",...e})),Y.dismiss=t=>{Gi.size>0?yn.emit(1,t):yl=yl.filter(e=>t!=null&&e.options.toastId!==t)},Y.clearWaitingQueue=function(t){return t===void 0&&(t={}),yn.emit(5,t)},Y.isActive=t=>{let e=!1;return Gi.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},Y.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=Gi.get(o||bp);return s&&s.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,o={delay:100,...r,...e,toastId:e.toastId||t,updateId:YI()};o.toastId!==t&&(o.staleId=t);const s=o.render||i;delete o.render,Ml(s,o)}},0)},Y.done=t=>{Y.update(t,{progress:1})},Y.onChange=t=>(yn.on(4,t),()=>{yn.off(4,t)}),Y.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Y.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},yn.on(2,t=>{bp=t.containerId||t,Gi.set(bp,t),yl.forEach(e=>{yn.emit(0,e.content,e.options)}),yl=[]}).on(3,t=>{Gi.delete(t.containerId||t),Gi.size===0&&yn.off(0).off(1).off(5)});var IO=M.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Te=function(e,n,r){var i=r.get(e);return i?i(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function wk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var we=M.forwardRef(function(t,e){var n=t.alt,r=t.color,i=t.size,o=t.weight,s=t.mirrored,a=t.children,l=t.renderPath,d=wk(t,["alt","color","size","weight","mirrored","children","renderPath"]),f=M.useContext(IO),m=f.color,E=m===void 0?"currentColor":m,_=f.size,T=f.weight,A=T===void 0?"regular":T,S=f.mirrored,y=S===void 0?!1:S,g=wk(f,["color","size","weight","mirrored"]);return c.createElement("svg",Object.assign({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i??_,height:i??_,fill:r??E,viewBox:"0 0 256 256",transform:s||y?"scale(-1, 1)":void 0},g,d),!!n&&c.createElement("title",null,n),a,c.createElement("rect",{width:"256",height:"256",fill:"none"}),l(o??A,r??E))});we.displayName="IconBase";var Po=new Map;Po.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Po.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Po.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))});Po.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Po.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Po.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var SO=function(e,n){return Te(e,n,Po)},dh=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:SO}))});dh.displayName="ArrowLeft";var Ro=new Map;Ro.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ro.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ro.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"}))});Ro.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ro.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ro.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var CO=function(e,n){return Te(e,n,Ro)},mu=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:CO}))});mu.displayName="ArrowRight";var bo=new Map;bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"136",x2:"108",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"176",x2:"188",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"136",x2:"188",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",opacity:"0.2"}),c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M240,208h-8V104a16,16,0,0,0-16-16H152V40a16,16,0,0,0-16-16H40A16,16,0,0,0,24,40V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM120,136a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h32A8,8,0,0,1,120,136ZM64,64H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm0,104H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm88-64h64V208H152Z"}),c.createElement("path",{d:"M192,168H176a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z"}),c.createElement("path",{d:"M176,144h16a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Z"}))});bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var LO=function(e,n){return Te(e,n,bo)},ly=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:LO}))});ly.displayName="Buildings";var jo=new Map;jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"176",y1:"20",x2:"176",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"20",x2:"80",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M88,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"148 140 164 128 164 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,188a24.2,24.2,0,0,1-17-7,8,8,0,0,1,0-11.3,7.9,7.9,0,0,1,11.3,0A8.3,8.3,0,0,0,104,172a8,8,0,0,0,0-16h-2.5l-.4-.2h-.3l-.5-.2h-.1l-.6-.4h-.2l-.4-.3h0l-.4-.3-.2-.2-.3-.3a8.6,8.6,0,0,1-1.3-2,5.8,5.8,0,0,1-.6-1.7h0c-.1-.1-.1-.2-.1-.4a.4.4,0,0,0-.1-.3V148h0v-.7c0-.2.1-.3.1-.4v-.4a.6.6,0,0,0,.1-.4c.1-.1.1-.2.1-.4l.2-.3c0-.2,0-.3.1-.4l.2-.4v-.3l.2-.4.2-.3.3-.4.2-.2,5.6-7H92a8,8,0,0,1,0-16h28a8,8,0,0,1,6.2,13l-8.8,11.1A24,24,0,0,1,104,188Zm64-8a8,8,0,0,1-16,0V144l-3.2,2.4a8.1,8.1,0,0,1-11.2-1.6,8,8,0,0,1,1.6-11.2l16-12A8,8,0,0,1,168,128ZM208,80H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))});jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var AO=function(e,n){return Te(e,n,jo)},Zn=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:AO}))});Zn.displayName="Calendar";var No=new Map;No.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});No.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});No.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});No.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});No.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});No.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var PO=function(e,n){return Te(e,n,No)},gu=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:PO}))});gu.displayName="Check";var Mo=new Map;Mo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Mo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Mo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"}))});Mo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Mo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Mo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var RO=function(e,n){return Te(e,n,Mo)},Qi=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:RO}))});Qi.displayName="CheckCircle";var Oo=new Map;Oo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Oo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Oo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))});Oo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Oo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Oo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var bO=function(e,n){return Te(e,n,Oo)},Ws=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:bO}))});Ws.displayName="Clock";var Do=new Map;Do.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Do.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Do.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm91.2-27.7a8,8,0,0,0-8.7,1.8L204.2,68.4l-8.3-8.3a96,96,0,1,0,0,135.8,8,8,0,0,0,0-11.3,7.9,7.9,0,0,0-11.3,0,80,80,0,1,1,0-113.2l8.3,8.3L178.5,94.1a8,8,0,0,0,5.7,13.6h40a8,8,0,0,0,8-8v-40A8.2,8.2,0,0,0,227.2,52.3Z"}))});Do.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Do.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Do.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var jO=function(e,n){return Te(e,n,Do)},GI=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:jO}))});GI.displayName="ClockClockwise";var Vo=new Map;Vo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Vo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Vo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm59.9-19.9a96.2,96.2,0,0,0-135.8,0l-8.3,8.3L37.5,54.1a8,8,0,0,0-8.7-1.8,8.2,8.2,0,0,0-5,7.4v40a8,8,0,0,0,8,8h40a8,8,0,0,0,5.7-13.6L63.1,79.7l8.3-8.3a80,80,0,1,1,0,113.2,7.9,7.9,0,0,0-11.3,0,8,8,0,0,0,0,11.3A96,96,0,0,0,195.9,60.1Z"}))});Vo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Vo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Vo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var NO=function(e,n){return Te(e,n,Vo)},KI=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:NO}))});KI.displayName="ClockCounterClockwise";var Fo=new Map;Fo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Fo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Fo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"}))});Fo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Fo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Fo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var MO=function(e,n){return Te(e,n,Fo)},_f=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:MO}))});_f.displayName="Envelope";var Uo=new Map;Uo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Uo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Uo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,92a36,36,0,1,1-36,36A36,36,0,0,1,128,92Z"}))});Uo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Uo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Uo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var OO=function(e,n){return Te(e,n,Uo)},hh=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:OO}))});hh.displayName="Eye";var Wo=new Map;Wo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.4,163.6C232.1,145.7,240,128,240,128S208,56,128,56c-3.8,0-7.4.2-11,.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Wo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Wo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48a132.4,132.4,0,0,0-22,1.8,8.1,8.1,0,0,0-4.6,13.3L202.7,174.5a8,8,0,0,0,5.9,2.6,8.6,8.6,0,0,0,5.4-2c22.8-20.5,32.9-42.9,33.3-43.8A8.2,8.2,0,0,0,247.3,124.8Z"}),c.createElement("path",{d:"M53.9,34.6A8,8,0,0,0,42.1,45.4L61.3,66.5C25,88.8,9.4,123.2,8.7,124.8a8.2,8.2,0,0,0,0,6.5c.3.7,8.8,19.5,27.6,38.4C61.4,194.7,93.1,208,128,208a126.9,126.9,0,0,0,52.1-10.8l22,24.2A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3ZM128,164a36,36,0,0,1-29.5-56.6l47.2,51.9A35.4,35.4,0,0,1,128,164Z"}))});Wo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Wo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Wo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var DO=function(e,n){return Te(e,n,Wo)},fh=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:DO}))});fh.displayName="EyeSlash";var $o=new Map;$o.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"80",x2:"96",y2:"80",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});$o.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64h32a8,8,0,0,0,8-8V91.3a7.9,7.9,0,0,0-2.3-5.6L170.3,42.3a7.9,7.9,0,0,0-5.6-2.3H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8Z",opacity:"0.2"}),c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});$o.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M219.3,80,176,36.7A15.9,15.9,0,0,0,164.7,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V91.3A15.9,15.9,0,0,0,219.3,80ZM208,91.3V208H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H164.7L208,91.3ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z"}))});$o.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});$o.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});$o.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var VO=function(e,n){return Te(e,n,$o)},kg=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:VO}))});kg.displayName="FloppyDisk";var zo=new Map;zo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});zo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M130.2,224a96.3,96.3,0,0,0,84-53.6h0L159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224Z",opacity:"0.2"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1l5.4,1.1,8.3-19.7a8.1,8.1,0,0,1,7.4-4.9h21.4a8.6,8.6,0,0,0,3.8-1l12.3-6.8a7.2,7.2,0,0,0,1.5-1.1l26.9-24.3a8.1,8.1,0,0,0,1.6-9.8l-9.3-16.8h0A98.5,98.5,0,0,0,128,32,95.4,95.4,0,0,0,65,55.6Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});zo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.6,173.3A102.9,102.9,0,0,0,232,128,104.2,104.2,0,0,0,154.8,27.5h-.5A103.8,103.8,0,0,0,60.4,49l-1.3,1.2A103.9,103.9,0,0,0,128,232h2.4A104.3,104.3,0,0,0,221,174.6h0ZM216,128a89.3,89.3,0,0,1-5.5,30.7l-46.4-28.5a16,16,0,0,0-6.3-2.3l-22.8-3a16.1,16.1,0,0,0-15.3,6.8h-8.6l-3.8-7.9a16.2,16.2,0,0,0-11-8.7l-6.6-1.4,2.5-5.9a8.1,8.1,0,0,1,7.4-4.9h16.1a16.1,16.1,0,0,0,7.7-2l12.2-6.8a16.1,16.1,0,0,0,3-2.1l26.9-24.4A15.7,15.7,0,0,0,170,50.7,88,88,0,0,1,216,128ZM40,128a87.1,87.1,0,0,1,9.5-39.7l10.4,27.9a16.1,16.1,0,0,0,11.6,10l5.5,1.2h.1l12,2.6a7.8,7.8,0,0,1,5.5,4.3l2.1,4.4a16.1,16.1,0,0,0,14.4,9h1.2l-7.7,17.2a15.9,15.9,0,0,0,2.8,17.4l16.1,17.4a8.3,8.3,0,0,1,2,6.9l-1.8,9.3A88.1,88.1,0,0,1,40,128Z"}))});zo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});zo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});zo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var FO=function(e,n){return Te(e,n,zo)},QI=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:FO}))});QI.displayName="GlobeHemisphereWest";var Bo=new Map;Bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",opacity:"0.2"}),c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M218.8,103.7,138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5v92.1a16.4,16.4,0,0,0,4,11A15.9,15.9,0,0,0,48,224H96a8,8,0,0,0,8-8V168a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v48a8,8,0,0,0,8,8h48a15.6,15.6,0,0,0,7.6-1.9A16.1,16.1,0,0,0,224,208V115.5A16,16,0,0,0,218.8,103.7Z"}))});Bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var UO=function(e,n){return Te(e,n,Bo)},ZI=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:UO}))});ZI.displayName="House";var Ho=new Map;Ho.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"108",x2:"184",y2:"108",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"148",x2:"184",y2:"148",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"94.1",cy:"116",r:"22",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M72.1,164a22,22,0,0,1,44,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ho.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM92.1,144a24,24,0,1,1,24-24A23.9,23.9,0,0,1,92.1,144Z",opacity:"0.2"}),c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ho.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM125.1,175.7a8,8,0,0,1-9.8-5.7,24,24,0,0,0-46.4,0,8.1,8.1,0,0,1-7.8,6l-2-.3a7.9,7.9,0,0,1-5.7-9.7,40.2,40.2,0,0,1,16.3-23.2,32,32,0,1,1,44.8,0A40.2,40.2,0,0,1,130.8,166,7.9,7.9,0,0,1,125.1,175.7ZM192,152H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"16"}))});Ho.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ho.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ho.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var WO=function(e,n){return Te(e,n,Ho)},uy=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:WO}))});uy.displayName="IdentificationCard";var qo=new Map;qo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"152",r:"16"}))});qo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});qo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"}))});qo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"152",r:"10"}))});qo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"152",r:"8"}))});qo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});var $O=function(e,n){return Te(e,n,qo)},ph=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:$O}))});ph.displayName="Lock";var Yo=new Map;Yo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"44",y1:"156",x2:"100",y2:"212",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"164",y1:"92",x2:"72",y2:"184",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Yo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M192,120,136,64l26.3-26.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z",opacity:"0.2"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Yo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.3,32a15.9,15.9,0,0,0-22.6,0L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a15.9,15.9,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7ZM51.3,160,144,67.3,160.7,84,68,176.7ZM48,179.3,76.7,208H48Zm48,25.4L79.3,188,172,95.3,188.7,112Z"}))});Yo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Yo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Yo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var zO=function(e,n){return Te(e,n,Yo)},XI=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:zO}))});XI.displayName="Pencil";var Go=new Map;Go.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Go.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,64l56,56,26.3-26.3a8,8,0,0,0,0-11.4L173.7,37.7a8,8,0,0,0-11.4,0Z",opacity:"0.2"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Go.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"}))});Go.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Go.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Go.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var BO=function(e,n){return Te(e,n,Go)},Eg=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:BO}))});Eg.displayName="PencilSimple";var Ko=new Map;Ko.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ko.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z",opacity:"0.2"}),c.createElement("path",{d:"M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ko.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,40H48A16,16,0,0,0,32,56v58.7c0,89.4,75.8,119.1,91,124.1a16,16,0,0,0,10,0c15.2-5,91-34.7,91-124.1V56A16,16,0,0,0,208,40Z"}))});Ko.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ko.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ko.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var HO=function(e,n){return Te(e,n,Ko)},cy=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:HO}))});cy.displayName="Shield";var Qo=new Map;Qo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Qo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Qo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M141.7,133.7l-42,42A8.3,8.3,0,0,1,94,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H24a8,8,0,0,1,0-16H86V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,141.7,133.7ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"}))});Qo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Qo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Qo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var qO=function(e,n){return Te(e,n,Qo)},dy=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:qO}))});dy.displayName="SignIn";var Zo=new Map;Zo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Zo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Zo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-42,42A8.3,8.3,0,0,1,174,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H104a8,8,0,0,1,0-16h62V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,221.7,133.7ZM104,208H48V48h56a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16h56a8,8,0,0,0,0-16Z"}))});Zo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Zo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Zo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var YO=function(e,n){return Te(e,n,Zo)},pd=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:YO}))});pd.displayName="SignOut";var Xo=new Map;Xo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Xo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Xo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"}))});Xo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Xo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Xo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var GO=function(e,n){return Te(e,n,Xo)},JI=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:GO}))});JI.displayName="SpinnerGap";var Jo=new Map;Jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"60",x2:"40",y2:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))});Jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var KO=function(e,n){return Te(e,n,Jo)},wg=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:KO}))});wg.displayName="Trash";var es=new Map;es.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});es.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});es.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});es.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});es.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});es.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var QO=function(e,n){return Te(e,n,es)},lo=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:QO}))});lo.displayName="User";var ts=new Map;ts.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ts.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,32A96,96,0,0,0,63.8,199.4h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.4A96,96,0,0,0,128,32Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ts.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"120",r:"44"}),c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm65.8,162.4a81.3,81.3,0,0,0-24.5-23,59.7,59.7,0,0,1-82.6,0,81.3,81.3,0,0,0-24.5,23,88,88,0,1,1,131.6,0Z"}))});ts.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ts.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ts.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var ZO=function(e,n){return Te(e,n,ts)},yu=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:ZO}))});yu.displayName="UserCircle";var ns=new Map;ns.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"204",y1:"136",x2:"244",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"116",x2:"224",y2:"156",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ns.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"108",cy:"100",r:"60",opacity:"0.2"}),c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ns.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144.1,157.6a68,68,0,1,0-72.2,0,118.4,118.4,0,0,0-55.8,37.3,7.8,7.8,0,0,0-1.1,8.5,7.9,7.9,0,0,0,7.2,4.6H193.8a7.9,7.9,0,0,0,7.2-4.6,7.8,7.8,0,0,0-1.1-8.5A118.4,118.4,0,0,0,144.1,157.6Z"}))});ns.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ns.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ns.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var XO=function(e,n){return Te(e,n,ns)},vu=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:XO}))});vu.displayName="UserPlus";var rs=new Map;rs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});rs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",opacity:"0.2"}),c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});rs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M121.2,157.9a60,60,0,1,0-66.4,0A95.5,95.5,0,0,0,9.5,192.8a7.8,7.8,0,0,0-.6,8.3,8.1,8.1,0,0,0,7.1,4.3H160a8.1,8.1,0,0,0,7.1-4.3,7.8,7.8,0,0,0-.6-8.3A95.5,95.5,0,0,0,121.2,157.9Z"}),c.createElement("path",{d:"M248.1,192.8a96.3,96.3,0,0,0-45.4-34.9A59.9,59.9,0,0,0,169.5,48a64,64,0,0,0-16.3,2.2,8.2,8.2,0,0,0-5.4,5.2,8,8,0,0,0,1.2,7.3,75.8,75.8,0,0,1,3.8,84.9,8.1,8.1,0,0,0,2.1,10.6q4.5,3.5,8.7,7.2l.5.5a112.6,112.6,0,0,1,25.5,34.9,7.9,7.9,0,0,0,7.2,4.6h44.7a8.1,8.1,0,0,0,7.1-4.3A8,8,0,0,0,248.1,192.8Z"}))});rs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});rs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});rs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var JO=function(e,n){return Te(e,n,rs)},_u=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:JO}))});_u.displayName="Users";var is=new Map;is.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});is.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});is.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"}))});is.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});is.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});is.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var eD=function(e,n){return Te(e,n,is)},ku=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:eD}))});ku.displayName="X";var os=new Map;os.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});os.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});os.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm37.7,130.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3l-26.3,26.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,90.3,101.7a8.1,8.1,0,0,1,11.4-11.4L128,116.7l26.3-26.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"}))});os.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});os.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});os.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var tD=function(e,n){return Te(e,n,os)},eS=M.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:tD}))});eS.displayName="XCircle";const nD=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #000000 0%, #801100 100%);
`,rD=V.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`,iD=V.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,oD=V.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,xk=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Tk=V.label`
  font-size: 0.9rem;
  color: #555;
`,Ik=V.div`
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
`,bc=V.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #800000;
  margin-right: 0.5rem;
`,Sk=V.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #e74c3c;
  
  &:focus {
    outline: none;
  }
`,sD=V.button`
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
`,aD=V.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,lD=V(Ix)`
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
`,uD=V.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,cD=V.button`
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
`,dD=V.button`
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
`,hD=V.div`
  font-size: 2rem;
  font-weight: bold;
  color: #800000;
  text-align: center;
  margin-bottom: 0.5rem;
`;function fD(){const[t,e]=M.useState(""),[n,r]=M.useState(""),[i,o]=M.useState(""),[s,a]=M.useState(!1),[l,d]=M.useState(!1),[f,m]=M.useState(!1),[E,_]=M.useState(!1),T=Ia(),A=Ta();M.useEffect(()=>{var g;(g=A.state)!=null&&g.message&&(Y.info(A.state.message),T(A.pathname,{replace:!0,state:{}}))},[A,T]),M.useEffect(()=>{i&&o("")},[t,n]);const S=async()=>{var k,x;if(!t){o("Please enter your email address to reset your password"),(k=document.getElementById("email"))==null||k.focus();return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(x=document.getElementById("email"))==null||x.focus();return}try{_(!0),await GP(Vn,t),m(!0),Y.success("Password reset email sent! Check your inbox.")}catch(R){console.error("Password reset error:",R),R.code==="auth/user-not-found"?o("No account found with this email address"):o("Failed to send password reset email. Please try again.")}finally{_(!1)}},y=async g=>{var x,R,N;if(g.preventDefault(),!t||!n){o("Please enter both email and password");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(x=document.getElementById("email"))==null||x.focus();return}try{o(""),a(!0);try{const I=(await QP(Vn,t,n)).user,P=xr(En(Ee,"declined_registrations"),ri("userId","==",I.uid));if(!(await On(P)).empty){await Vn.signOut(),o("Your registration request has been declined. Please contact an administrator."),Y.error("Access denied: Registration declined");return}const j=xr(En(Ee,"registration_requests"),ri("userId","==",I.uid));if(!(await On(j)).empty){await Vn.signOut(),o("Your registration request is pending approval. You will be notified when approved."),Y.info("Registration pending approval");return}const C=!1;Y.success("Login successful!"),T("/dashboard")}catch(w){if(console.error("Firebase auth error:",w),!(!1&&(w.code==="auth/network-request-failed"||(R=w.message)!=null&&R.includes("network")))){if(w.code==="auth/invalid-credential"||w.code==="auth/invalid-email"||w.code==="auth/user-not-found"||w.code==="auth/wrong-password"){console.log("Authentication failed:",w.code,w.message);const P=w.code==="auth/user-not-found"||w.code==="auth/invalid-credential"&&t.includes("@");o(P?h.jsxs("span",{children:["Account not found. Please check your email or",h.jsx("a",{href:"/register",style:{color:"#800000",marginLeft:"4px",textDecoration:"underline"},children:"register here"})]}):"Invalid email or password. Please check your credentials and try again."),(N=document.getElementById("email"))==null||N.focus()}else w.code==="auth/network-request-failed"?o("Network error. Please check your connection and try again."):w.code==="auth/too-many-requests"?o("Too many failed login attempts. Please try again later or reset your password."):w.code==="auth/operation-not-allowed"?(o("Email/password sign-in is not enabled. Please contact the administrator."),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(console.error("Login error details:",w),o("Failed to log in. Please try again."));Y.error("Login failed")}}}catch(w){console.error("Unexpected login error:",w),o("An unexpected error occurred. Please try again."),Y.error("Login failed")}finally{a(!1)}};return h.jsx(nD,{children:h.jsxs(rD,{children:[h.jsx(hD,{children:"Hyacinth"}),h.jsx(iD,{children:"Attendance System"}),h.jsxs(oD,{onSubmit:y,children:[h.jsxs(xk,{children:[h.jsx(Tk,{htmlFor:"email",children:"Email"}),h.jsxs(Ik,{children:[h.jsx(bc,{children:h.jsx(_f,{size:18})}),h.jsx(Sk,{id:"email",type:"email",value:t,onChange:g=>e(g.target.value),placeholder:"Enter your email",required:!0})]})]}),h.jsxs(xk,{children:[h.jsx(Tk,{htmlFor:"password",children:"Password"}),h.jsxs(Ik,{children:[h.jsx(bc,{children:h.jsx(ph,{size:18})}),h.jsx(Sk,{id:"password",type:l?"text":"password",value:n,onChange:g=>r(g.target.value),placeholder:"Enter your password",required:!0}),h.jsx(dD,{type:"button",onClick:()=>d(!l),"aria-label":l?"Hide password":"Show password",children:l?h.jsx(fh,{size:18}):h.jsx(hh,{size:18})})]}),h.jsx(cD,{type:"button",onClick:S,disabled:E,tabIndex:"-1",children:E?"Sending...":f?"Email sent!":"Forgot password?"})]}),i&&h.jsx(aD,{children:i}),h.jsxs(uD,{children:[h.jsx(sD,{type:"submit",disabled:s,onClick:y,children:s?"Logging in...":h.jsxs(h.Fragment,{children:[h.jsx(bc,{children:h.jsx(dy,{size:18})}),"Login"]})}),h.jsxs(lD,{to:"/register",children:[h.jsx(bc,{children:h.jsx(vu,{size:18})}),"Register"]})]})]})]})})}const pD=async t=>{try{const e={...t,createdAt:Fu(),status:"pending"};return(await YT(En(Ee,"registration_requests"),e)).id}catch(e){throw console.error("Error submitting registration request:",e),e}},mD=async()=>{try{const t=xr(En(Ee,"registration_requests"),G1("createdAt","desc"));return(await On(t)).docs.map(n=>({id:n.id,...n.data()}))}catch(t){throw console.error("Error getting registration requests:",t),t}},gD=async(t,e)=>{try{const n=lt(Ee,"registration_requests",t);await Xs(n,{...e,updatedAt:Fu()})}catch(n){throw console.error("Error updating registration request:",n),n}},yD=async t=>{try{const e=lt(Ee,"users",t.userId);await fu(e,{userId:t.userId,name:t.name,email:t.email,position:t.position,role:t.role||"user",status:"active",timeRegion:t.timeRegion||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila",createdAt:Fu(),userID:t.userID||`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`}),await Q1(lt(Ee,"registration_requests",t.id))}catch(e){throw console.error("Error approving registration request:",e),e}},vD=async t=>{try{if(await fu(lt(Ee,"declined_registrations",t.id),{...t,declinedAt:Fu(),status:"declined",blocked:!0}),await Q1(lt(Ee,"registration_requests",t.id)),t.userId&&!t.userId.startsWith("temp_"))try{const n=x8().currentUser;n&&n.uid===t.userId?(await rR(n),console.log("Deleted declined user from Firebase Authentication")):console.log("User marked as declined in Firestore. They will be blocked from accessing the system.")}catch(e){console.error("Error handling user authentication:",e)}}catch(e){throw console.error("Error declining registration request:",e),e}},_D=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
  padding: 2rem 1rem;
`,kD=V.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 550px;
  animation: fadeIn 0.3s ease-in-out;
`,ED=V.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,wD=V.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,tl=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,xD=V.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,jp=V.div`
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
`,ms=V.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`,TD=V.select`
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
`,ID=V.button`
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
`,Np=V.button`
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
`,Ck=V(JI)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,SD=V(Ix)`
  display: flex;
  align-items: center;
  color: #800000;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`,gs=V.div`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`,CD=V.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;
`,nl=V.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  color: ${t=>t.met?"#000000":"#666"};
`;function LD(){const[t,e]=M.useState({lastName:"",firstName:"",middleInitial:"",email:"",password:"",confirmPassword:"",position:""}),[n,r]=M.useState({}),[i,o]=M.useState(!1),[s,a]=M.useState(!1),[l,d]=M.useState(!1),[f,m]=M.useState(!1),E=Ia();M.useEffect(()=>{Object.keys(n).length>0&&r({})},[t]);const _={length:t.password.length>=4,validChars:/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(t.password),hasLetter:/[a-zA-Z]/.test(t.password),hasNumber:/[0-9]/.test(t.password),match:t.password===t.confirmPassword&&t.confirmPassword!==""},T=g=>{const{name:k,value:x}=g.target;if(e(k==="middleInitial"?R=>({...R,[k]:x.toUpperCase()}):R=>({...R,[k]:x})),k==="email"&&x.includes("@")&&x.includes(".")){m(!0);const R=setTimeout(()=>{A(x)},800);return()=>clearTimeout(R)}},A=async g=>{try{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)){m(!1);return}(await fetch("https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=undefined",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({continueUri:window.location.href,identifier:g})}).then(R=>R.json())).registered&&r(R=>({...R,email:"This email is already registered. Please use a different email or login instead."}))}catch(k){console.error("Error checking email:",k)}finally{m(!1)}},S=()=>{const g={};return t.lastName.trim()||(g.lastName="Last name is required"),t.firstName.trim()||(g.firstName="First name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(g.email="Email is invalid"):g.email="Email is required",t.password?_.length?_.validChars?_.hasLetter?_.hasNumber||(g.password="Password must contain at least one number"):g.password="Password must contain at least one letter":g.password="Password contains invalid characters":g.password="Password must be at least 4 characters":g.password="Password is required",t.confirmPassword?t.password!==t.confirmPassword&&(g.confirmPassword="Passwords do not match"):g.confirmPassword="Please confirm your password",t.position||(g.position="Please select your position"),r(g),Object.keys(g).length===0},y=async g=>{var k,x,R,N;if(g.preventDefault(),!!S())try{o(!0);const w=!1;let I,P;try{P=await KP(Vn,t.email,t.password),I=P.user.uid}catch(C){if(console.error("Auth error:",C),C.code==="auth/email-already-in-use")console.log("Email already exists in Auth but proceeding with registration request"),I=`temp_${Date.now()}_${Math.random().toString(36).substring(2,7)}`;else if(!(w&&(C.code==="auth/network-request-failed"||(k=C.message)!=null&&k.includes("network"))))throw C}const b=`${t.lastName}, ${t.firstName}${t.middleInitial?" "+t.middleInitial+".":""}`;if(P!=null&&P.user)try{await XP(P.user,{displayName:b})}catch(C){console.warn("Could not update profile, continuing with registration:",C)}let j="Asia/Manila";try{j=Intl.DateTimeFormat().resolvedOptions().timeZone,console.log("Detected device time zone during registration:",j)}catch(C){console.error("Error detecting time zone during registration:",C)}const O={userId:I,lastName:t.lastName,firstName:t.firstName,middleInitial:t.middleInitial,name:b,email:t.email,position:t.position,role:"user",status:"pending",timeRegion:j,userID:`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`};try{await pD(O)}catch(C){if(console.error("Firestore error:",C),!w)throw C}Y.success("Registration request submitted! An administrator will review your request."),w&&!P||E("/login",{state:{message:"Your registration request has been submitted. You will be notified when your account is approved."}})}catch(w){if(console.error("Registration error:",w),w.code==="auth/email-already-in-use"||typeof w=="object"&&w.code==="auth/email-already-in-use"){const I=w.message||"Email is already registered. Please use a different email or login instead.";r(P=>({...P,email:I})),Y.error(h.jsxs("div",{children:["Email already exists. ",h.jsx("a",{href:"/",style:{color:"white",textDecoration:"underline"},children:"Login instead?"})]}),{autoClose:5e3}),(x=document.getElementById("email"))==null||x.scrollIntoView({behavior:"smooth",block:"center"}),(R=document.getElementById("email"))==null||R.focus()}else w.code==="auth/network-request-failed"?Y.error("Network error. Please check your connection and try again."):w.code==="auth/operation-not-allowed"?(r(I=>({...I,email:"Email/password registration is not enabled. Please contact the administrator."})),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(N=w.code)!=null&&N.includes("auth/")?Y.error(`Authentication error: ${w.message||"Please try again later"}`):(console.error("Registration error details:",w),Y.error("Registration failed. Please try again."))}finally{o(!1)}};return h.jsx(_D,{children:h.jsxs(kD,{children:[h.jsxs(SD,{to:"/",children:[h.jsx(Rn,{children:h.jsx(dh,{size:16})}),"Back to Login"]}),h.jsx(ED,{children:"Create Account"}),h.jsxs(wD,{onSubmit:y,children:[h.jsxs(tl,{children:[h.jsx($r,{children:"Full Name"}),h.jsxs(xD,{children:[h.jsxs(jp,{flex:"2",minWidth:"150px",children:[h.jsx($r,{htmlFor:"lastName",children:"Last Name"}),h.jsxs($i,{children:[h.jsx(Rn,{children:h.jsx(lo,{size:18})}),h.jsx(ms,{id:"lastName",name:"lastName",type:"text",value:t.lastName,onChange:T,placeholder:"Last name"})]}),n.lastName&&h.jsx(gs,{children:n.lastName})]}),h.jsxs(jp,{flex:"2",minWidth:"150px",children:[h.jsx($r,{htmlFor:"firstName",children:"First Name"}),h.jsx($i,{children:h.jsx(ms,{id:"firstName",name:"firstName",type:"text",value:t.firstName,onChange:T,placeholder:"First name"})}),n.firstName&&h.jsx(gs,{children:n.firstName})]}),h.jsxs(jp,{flex:"1",minWidth:"80px",children:[h.jsx($r,{htmlFor:"middleInitial",children:"M.I."}),h.jsx($i,{children:h.jsx(ms,{id:"middleInitial",name:"middleInitial",type:"text",value:t.middleInitial,onChange:T,placeholder:"M.I.",maxLength:"1"})})]})]})]}),h.jsxs(tl,{children:[h.jsx($r,{htmlFor:"email",children:"Email"}),h.jsxs($i,{children:[h.jsx(Rn,{children:h.jsx(_f,{size:18})}),h.jsx(ms,{id:"email",name:"email",type:"email",value:t.email,onChange:T,placeholder:"Enter your email"}),f&&h.jsx(Np,{as:"span","aria-label":"Checking email",children:h.jsx(Ck,{size:18})})]}),n.email&&h.jsx(gs,{children:n.email})]}),h.jsxs(tl,{children:[h.jsx($r,{htmlFor:"position",children:"Position"}),h.jsxs($i,{children:[h.jsx(Rn,{children:h.jsx(uy,{size:18})}),h.jsxs(TD,{id:"position",name:"position",value:t.position,onChange:T,children:[h.jsx("option",{value:"",disabled:!0,children:"Select your position"}),h.jsx("option",{value:"Intern/OJT",children:"Intern/OJT"}),h.jsx("option",{value:"Employed/Onboarded",children:"Employed/Onboarded"})]})]}),n.position&&h.jsx(gs,{children:n.position})]}),h.jsxs(tl,{children:[h.jsx($r,{htmlFor:"password",children:"Password"}),h.jsxs($i,{children:[h.jsx(Rn,{children:h.jsx(ph,{size:18})}),h.jsx(ms,{id:"password",name:"password",type:s?"text":"password",value:t.password,onChange:T,placeholder:"Create a password"}),h.jsx(Np,{type:"button",onClick:()=>a(!s),"aria-label":s?"Hide password":"Show password",children:s?h.jsx(fh,{size:18}):h.jsx(hh,{size:18})})]}),n.password&&h.jsx(gs,{children:n.password}),h.jsxs(CD,{children:[h.jsxs(nl,{met:_.length,children:[h.jsx(Rn,{children:h.jsx(Qi,{size:14,weight:_.length?"fill":"regular"})}),"At least 4 characters"]}),h.jsxs(nl,{met:_.validChars,children:[h.jsx(Rn,{children:h.jsx(Qi,{size:14,weight:_.validChars?"fill":"regular"})}),"Valid characters (letters, numbers, and special characters)"]}),h.jsxs(nl,{met:_.hasLetter,children:[h.jsx(Rn,{children:h.jsx(Qi,{size:14,weight:_.hasLetter?"fill":"regular"})}),"At least one letter"]}),h.jsxs(nl,{met:_.hasNumber,children:[h.jsx(Rn,{children:h.jsx(Qi,{size:14,weight:_.hasNumber?"fill":"regular"})}),"At least one number"]})]})]}),h.jsxs(tl,{children:[h.jsx($r,{htmlFor:"confirmPassword",children:"Confirm Password"}),h.jsxs($i,{children:[h.jsx(Rn,{children:h.jsx(ph,{size:18})}),h.jsx(ms,{id:"confirmPassword",name:"confirmPassword",type:l?"text":"password",value:t.confirmPassword,onChange:T,placeholder:"Confirm your password"}),h.jsx(Np,{type:"button",onClick:()=>d(!l),"aria-label":l?"Hide password":"Show password",children:l?h.jsx(fh,{size:18}):h.jsx(hh,{size:18})})]}),n.confirmPassword&&h.jsx(gs,{children:n.confirmPassword}),t.confirmPassword&&h.jsxs(nl,{met:_.match,children:[h.jsx(Rn,{children:h.jsx(Qi,{size:14,weight:_.match?"fill":"regular"})}),"Passwords match"]})]}),h.jsx(ID,{type:"submit",disabled:i||f,children:i?h.jsxs(h.Fragment,{children:[h.jsx(Ck,{size:18}),"Creating Account..."]}):f?"Checking email...":"Register"})]})]})})}const tS=M.createContext(),hy=()=>M.useContext(tS),AD=({children:t})=>{const{currentUser:e}=kI(),[n,r]=M.useState(!1),[i,o]=M.useState(!0);M.useEffect(()=>{(async()=>{if(!(e!=null&&e.uid)){o(!1);return}try{const d=lt(Ee,"users_settings",e.uid),f=await hu(d);if(f.exists()){const m=f.data();m.use24HourFormat!==void 0&&r(m.use24HourFormat)}else await fu(d,{use24HourFormat:!1,userId:e.uid})}catch(d){console.error("Error fetching user settings:",d)}finally{o(!1)}})()},[e]);const a={use24HourFormat:n,toggleTimeFormat:async()=>{if(e!=null&&e.uid)try{const l=lt(Ee,"users_settings",e.uid);return await fu(l,{use24HourFormat:!n,userId:e.uid},{merge:!0}),r(!n),!0}catch(l){return console.error("Error updating time format:",l),!1}},loading:i};return h.jsx(tS.Provider,{value:a,children:t})},PD=V.div`
  display: flex;
  height: 100vh; /* Lock to viewport height */
  overflow: hidden; /* Prevent overall page scrolling */
`,RD=V.div`
  width: 250px;
  background: linear-gradient(180deg, #000000 0%, #800000 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Allow sidebar to scroll if needed */
`,bD=V.div`
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
`,Lk=V.button`
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
`,nS=V.button`
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
`,jD=V(nS)`
  background-color: #111111;
  color: #76da7c;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,ND=V(nS)`
  background-color: #111111;
  color: #e67979;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,fr=V.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,MD=V.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Make content area scrollable */
`,OD=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  background-color: #f5f5f5;
  z-index: 10; /* Ensure header stays on top */
`,DD=V.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,VD=V.div`
  display: flex;
  align-items: center;
`,FD=V.span`
  margin-right: 1rem;
  font-weight: 500;
`,UD=V.button`
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
`,WD=V.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto; /* Make content area scrollable */
  height: calc(100vh - 73px); /* Subtract header height */
`,$D=V.div`
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
`,zD=V.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`,BD=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
`,HD=V.div`
  padding: 1rem;
  overflow-y: auto;
`,qD=V.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #eee;
  gap: 0.5rem;
`,YD=V.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`,Ak=V.div`
  margin-bottom: 1rem;
`,Pk=V.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,GD=V.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`,Rk=V.button`
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
`;function KD({user:t,activeTab:e,setActiveTab:n,attendanceStatus:r,loading:i,handleTimeInOut:o,lastRecord:s,isSuperAdmin:a,userData:l,setUserData:d,children:f}){var K,ie,ee;const m=(l==null?void 0:l.role)==="admin"&&((K=l==null?void 0:l.privileges)==null?void 0:K.canManageRegistrations)!==!1,E=(l==null?void 0:l.role)==="admin"&&((ie=l==null?void 0:l.privileges)==null?void 0:ie.canManageUsers)!==!1,_=Ia(),{use24HourFormat:T,toggleTimeFormat:A}=hy(),[S,y]=M.useState(!1),[g,k]=M.useState((l==null?void 0:l.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila"),[x,R]=M.useState(!1),[N,w]=M.useState(""),[I,P]=M.useState(!1),b=z=>{try{const $=new Date,G={timeZone:z,timeZoneName:"short"},ne=new Intl.DateTimeFormat("en-US",G).format($).match(/GMT([+-]\d+)/);if(ne&&ne[1])return`UTC${ne[1]}`;const he=new Date,Pe=(new Date(he.toLocaleString("en-US",{timeZone:z}))-he)/6e4,Qe=Math.floor(Math.abs(Pe)/60),Ue=Math.abs(Pe)%60;return`UTC${Pe>=0?"+":"-"}${Qe.toString().padStart(2,"0")}:${Ue.toString().padStart(2,"0")}`}catch($){return console.error("Error calculating UTC offset:",$),""}};M.useEffect(()=>{try{const z=Intl.DateTimeFormat().resolvedOptions().timeZone;w(z),console.log("Detected device time zone:",z)}catch(z){console.error("Error detecting time zone:",z),w("Unable to detect")}},[]),M.useEffect(()=>{l!=null&&l.timeRegion?k(l.timeRegion):N&&!(l!=null&&l.timeRegion)&&k(N)},[l,N]);const j=async()=>{if(!(!(t!=null&&t.uid)||x))try{R(!0);const z=lt(Ee,"users",t.uid);await Xs(z,{timeRegion:g}),d($=>({...$,timeRegion:g})),Y.success("Time region updated successfully"),y(!1)}catch(z){console.error("Error updating time region:",z),Y.error("Failed to update time region")}finally{R(!1)}},O=async()=>{if(!I)try{P(!0),await A()?Y.success(`Time format updated to ${T?"12-hour":"24-hour"} format`):Y.error("Failed to update time format")}catch(z){console.error("Error updating time format:",z),Y.error("Failed to update time format")}finally{P(!1)}},C=async()=>{try{await nR(Vn),_("/login")}catch(z){console.error("Error signing out:",z),Y.error("Failed to sign out")}};return h.jsxs(PD,{children:[h.jsxs(RD,{children:[h.jsx(bD,{children:"Hyacinth"}),h.jsxs(bn,{className:e==="home"?"active":"",onClick:()=>n("home"),children:[h.jsx(ZI,{size:20,style:{marginRight:"0.5rem"}}),"Home"]}),h.jsxs(bn,{className:e==="schedule"?"active":"",onClick:()=>n("schedule"),children:[h.jsx(Zn,{size:20,style:{marginRight:"0.5rem"}}),"Schedule"]}),h.jsxs(bn,{className:e==="attendance"?"active":"",onClick:()=>n("attendance"),children:[h.jsx(Ws,{size:20,style:{marginRight:"0.5rem"}}),"Attendance"]}),h.jsxs(bn,{className:e==="profile"?"active":"",onClick:()=>n("profile"),children:[h.jsx(lo,{size:20,style:{marginRight:"0.5rem"}}),"Profile"]}),a&&h.jsxs(h.Fragment,{children:[h.jsxs(bn,{className:e==="registration_requests"?"active":"",onClick:()=>n("registration_requests"),children:[h.jsx(fr,{children:h.jsx(vu,{size:16})}),"Registration Requests"]}),h.jsxs(bn,{className:e==="user_management"?"active":"",onClick:()=>n("user_management"),children:[h.jsx(fr,{children:h.jsx(_u,{size:16})}),"User Management"]}),h.jsxs(bn,{className:e==="admin_privileges"?"active":"",onClick:()=>n("admin_privileges"),children:[h.jsx(fr,{children:h.jsx(cy,{size:16})}),"Admin Privileges"]})]}),(l==null?void 0:l.role)==="admin"&&h.jsxs(h.Fragment,{children:[m&&h.jsxs(bn,{className:e==="registration_requests"?"active":"",onClick:()=>n("registration_requests"),children:[h.jsx(fr,{children:h.jsx(vu,{size:16})}),"Registration Requests"]}),E&&h.jsxs(bn,{className:e==="user_management"?"active":"",onClick:()=>n("user_management"),children:[h.jsx(fr,{children:h.jsx(_u,{size:16})}),"User Management"]})]}),h.jsxs("div",{style:{marginTop:"auto"},children:[h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"User Settings"}),h.jsxs(bn,{onClick:()=>y(!0),children:[h.jsx(fr,{children:h.jsx(QI,{size:16})}),"Change Time Region",h.jsxs("div",{style:{fontSize:"0.75rem",marginLeft:"auto",opacity:.7},children:[((ee=l==null?void 0:l.timeRegion)==null?void 0:ee.replace("_"," "))||"Asia/Manila",h.jsx("div",{style:{fontSize:"0.7rem",marginTop:"2px"},children:b((l==null?void 0:l.timeRegion)||"Asia/Manila")})]})]})]}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"Attendance Actions"}),h.jsxs(jD,{onClick:()=>o("In"),disabled:i||r==="In",children:[h.jsx(fr,{children:h.jsx(dy,{size:16})}),"Time In"]}),h.jsxs(ND,{onClick:()=>o("Out"),disabled:i||r==="Out"||!r,children:[h.jsx(fr,{children:h.jsx(pd,{size:16})}),"Time Out"]}),r&&h.jsxs("div",{style:{padding:"0.5rem 0",textAlign:"center",fontSize:"0.85rem"},children:["Status: ",h.jsx("strong",{children:r==="In"?"Clocked In":"Clocked Out"})]})]}),h.jsxs(bn,{onClick:C,children:[h.jsx(fr,{children:h.jsx(pd,{size:16})}),"Logout"]})]})]}),h.jsxs(MD,{children:[h.jsxs(OD,{children:[h.jsxs(DD,{children:[e==="dashboard"&&"Dashboard",e==="attendance"&&"Attendance",e==="schedule"&&"Schedule",e==="profile"&&"Profile",e==="registration_requests"&&"Registration Requests",e==="user_management"&&"User Management",e==="admin_privileges"&&"Admin Privileges"]}),h.jsxs(VD,{children:[h.jsx(FD,{children:t==null?void 0:t.displayName}),h.jsxs(UD,{onClick:C,children:[h.jsx(pd,{size:16}),"Logout"]})]})]}),h.jsx(WD,{children:f})]}),S&&h.jsx($D,{children:h.jsxs(zD,{children:[h.jsxs(BD,{children:[h.jsx("h3",{children:"Change Time Region"}),h.jsx(YD,{onClick:()=>y(!1),children:"×"})]}),h.jsxs(HD,{children:[h.jsx("p",{style:{marginBottom:"1rem"},children:"Changing your time region will affect how times are displayed throughout the application and how your attendance is recorded."}),N&&h.jsxs("p",{style:{marginBottom:"1rem",backgroundColor:"#f0f7ff",padding:"0.5rem",borderRadius:"4px",fontSize:"0.9rem"},children:[h.jsx("strong",{children:"Detected device time zone:"})," ",N,h.jsxs("span",{style:{fontWeight:"normal"},children:["(",b(N),")"]}),N!==g&&h.jsx("button",{onClick:()=>k(N),style:{display:"block",marginTop:"0.5rem",padding:"0.25rem 0.5rem",fontSize:"0.8rem",backgroundColor:"#e6f0ff",border:"1px solid #bbd6fb",borderRadius:"4px",cursor:"pointer"},children:"Use device time zone"})]}),h.jsxs(Ak,{children:[h.jsx(Pk,{children:"Select Time Region"}),h.jsxs(GD,{value:g,onChange:z=>k(z.target.value),children:[h.jsx("optgroup",{label:"Asia",children:h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT, UTC+8)"})}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern, UTC-5/-4)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central, UTC-6/-5)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain, UTC-7/-6)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific, UTC-8/-7)"})]}),h.jsx("optgroup",{label:"Europe",children:h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST, UTC+0/+1)"})})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"Note: UTC offsets may vary during Daylight Saving Time transitions."})]}),h.jsxs(Ak,{style:{marginTop:"1.5rem"},children:[h.jsxs(Pk,{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(GI,{size:18}),"Time Format"]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"0.5rem"},children:[h.jsx(Lk,{active:!T,onClick:O,disabled:I,children:"12-hour (AM/PM)"}),h.jsx(Lk,{active:T,onClick:O,disabled:I,children:"24-hour"})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"This setting affects how time is displayed throughout the application."})]})]}),h.jsxs(qD,{children:[h.jsx(Rk,{onClick:()=>y(!1),children:"Cancel"}),h.jsx(Rk,{primary:!0,onClick:j,disabled:x,children:x?"Updating...":"Save Changes"})]})]})})]})}const yi=V.div`
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
`,_i=V.div`
  padding: 1.25rem;
`,QD=V.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,ZD=V.span`
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
`;const XD=({attendanceStatus:t,lastRecord:e})=>h.jsx(h.Fragment,{children:h.jsxs(QD,{children:[h.jsxs(yi,{children:[h.jsx(vi,{children:"Today's Schedule"}),h.jsx(_i,{children:h.jsx("p",{children:"No schedule for today"})})]}),h.jsxs(yi,{children:[h.jsx(vi,{children:"Attendance Status"}),h.jsx(_i,{children:t?h.jsxs(h.Fragment,{children:[h.jsxs("p",{children:["Current Status:",h.jsx(ZD,{status:t,children:t==="In"?"Clocked In":"Clocked Out"})]}),e&&h.jsxs("p",{children:["Last action: ",new Date(e.timestamp.toDate()).toLocaleString()]})]}):h.jsx("p",{children:"You haven't clocked in today"})})]}),h.jsxs(yi,{children:[h.jsx(vi,{children:"Recent Activity"}),h.jsx(_i,{children:e?h.jsxs("p",{children:["Last ",e.type==="In"?"Time In":"Time Out",": ",new Date(e.timestamp.toDate()).toLocaleString()]}):h.jsx("p",{children:"No recent activity"})})]})]})}),JD=V.table`
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
`,e9=V.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,bk=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`,t9=({user:t})=>{const[e,n]=M.useState([]),[r,i]=M.useState(!0),[o,s]=M.useState(null),{use24HourFormat:a}=hy();M.useEffect(()=>{const _=async()=>{if(t!=null&&t.uid)try{const A=await getDoc(doc(Ee,"users",t.uid));A.exists()&&s(A.data())}catch(A){console.error("Error fetching user data:",A)}},T=async()=>{if(t!=null&&t.uid)try{i(!0);const A=En(Ee,"attendance"),S=xr(A,ri("userId","==",t.uid),G1("timestamp","desc")),y=await On(S),g=[];if(y.forEach(x=>{g.push({id:x.id,...x.data()})}),console.log("Raw attendance records:",g.length),g.length===0){n([]),i(!1);return}const k=l(g);console.log("Processed attendance records:",k.length),n(k)}catch(A){console.error("Error fetching attendance records:",A)}finally{i(!1)}};_(),T()},[t]);const l=_=>{const T={};_.forEach(S=>{if(!S.timestamp){console.log("Skipping record without timestamp:",S);return}try{const y=S.timestamp.toDate(),g=y.toISOString().split("T")[0];T[g]||(T[g]={date:y,day:f(S.timestamp),inRecord:null,outRecord:null}),S.type==="In"?T[g].inRecord=S:S.type==="Out"?T[g].outRecord=S:console.log("Record with unknown type:",S.type,S)}catch(y){console.error("Error processing record:",y,S)}});const A=Object.values(T).sort((S,y)=>y.date-S.date);return console.log("Processed records by date:",A),A},d=_=>{if(!_)return"N/A";if(_ instanceof Date)return _.toLocaleDateString();try{return _.toDate().toLocaleDateString()}catch(T){return console.error("Error formatting date:",T,_),"Invalid Date"}},f=_=>{if(!_)return"N/A";try{const T=_ instanceof Date?_:_.toDate();return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][T.getDay()]}catch(T){return console.error("Error getting day of week:",T,_),"Unknown"}},m=_=>{if(!_)return"N/A";try{return(_ instanceof Date?_:_.toDate()).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!a})}catch(T){return console.error("Error formatting time:",T,_),"Invalid Time"}},E=(_,T)=>{if(!_||_.type!=="In")return"N/A";try{const A=_.timestamp.toDate(),S=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][A.getDay()];let y="On Time";const k=((o==null?void 0:o.schedule)||[]).find(x=>x.dayOfWeek===S);if(k&&k.timeIn){const[x,R]=k.timeIn.split(":").map(Number),N=new Date(A);N.setHours(x,R,0,0);const w=Math.round((A-N)/(1e3*60));w<-15?y="Early":w<=15?y="On Time":y="Late"}return y}catch(A){return console.error("Error calculating time-in status:",A,_),"On Time"}};return h.jsxs(yi,{children:[h.jsx(vi,{children:"Attendance Records"}),h.jsx(_i,{children:r?h.jsx("p",{children:"Loading attendance records..."}):e.length>0?h.jsxs(JD,{children:[h.jsxs("thead",{children:[h.jsxs("tr",{children:[h.jsx("th",{children:"Date"}),h.jsx("th",{children:"Day"}),h.jsx("th",{colSpan:"2",children:"IN"}),h.jsx("th",{colSpan:"2",children:"OUT"}),h.jsx("th",{children:"Notes"})]}),h.jsxs("tr",{children:[h.jsx("th",{}),h.jsx("th",{}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{})]})]}),h.jsx("tbody",{children:e.map((_,T)=>{var A,S,y,g;return h.jsxs("tr",{children:[h.jsx("td",{children:d(_.date)}),h.jsx("td",{children:_.day}),h.jsx("td",{children:_.inRecord?m(_.inRecord.timestamp):"-"}),h.jsx("td",{children:_.inRecord?h.jsx(bk,{status:E(_.inRecord,_.date),children:E(_.inRecord,_.date)}):"-"}),h.jsx("td",{children:_.outRecord?m(_.outRecord.timestamp):"-"}),h.jsx("td",{children:_.outRecord?h.jsx(bk,{status:"Complete",children:"Complete"}):"-"}),h.jsx("td",{children:(A=_.inRecord)!=null&&A.notes&&((S=_.outRecord)!=null&&S.notes)?h.jsxs(h.Fragment,{children:[h.jsx("strong",{children:"IN:"})," ",_.inRecord.notes,h.jsx("br",{}),h.jsx("strong",{children:"OUT:"})," ",_.outRecord.notes]}):(y=_.inRecord)!=null&&y.notes?_.inRecord.notes:(g=_.outRecord)!=null&&g.notes?_.outRecord.notes:"-"})]},T)})})]}):h.jsx(e9,{children:h.jsx("p",{children:"No attendance records found"})})})]})};function mh(t){"@babel/helpers - typeof";return mh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},mh(t)}function Ii(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function Dt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function ur(t){Dt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||mh(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function rS(t,e){Dt(2,arguments);var n=ur(t).getTime(),r=Ii(e);return new Date(n+r)}var n9=36e5;function r9(t,e){Dt(2,arguments);var n=Ii(e);return rS(t,n*n9)}var i9={};function kf(){return i9}function o9(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function s9(t){return Dt(1,arguments),t instanceof Date||mh(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function a9(t){if(Dt(1,arguments),!s9(t)&&typeof t!="number")return!1;var e=ur(t);return!isNaN(Number(e))}function l9(t,e){Dt(2,arguments);var n=Ii(e);return rS(t,-n)}var u9=864e5;function c9(t){Dt(1,arguments);var e=ur(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/u9)+1}function gh(t){Dt(1,arguments);var e=1,n=ur(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function iS(t){Dt(1,arguments);var e=ur(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=gh(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var s=gh(o);return e.getTime()>=i.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function d9(t){Dt(1,arguments);var e=iS(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=gh(n);return r}var h9=6048e5;function f9(t){Dt(1,arguments);var e=ur(t),n=gh(e).getTime()-d9(e).getTime();return Math.round(n/h9)+1}function yh(t,e){var n,r,i,o,s,a,l,d;Dt(1,arguments);var f=kf(),m=Ii((n=(r=(i=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:f.weekStartsOn)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&n!==void 0?n:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var E=ur(t),_=E.getUTCDay(),T=(_<m?7:0)+_-m;return E.setUTCDate(E.getUTCDate()-T),E.setUTCHours(0,0,0,0),E}function oS(t,e){var n,r,i,o,s,a,l,d;Dt(1,arguments);var f=ur(t),m=f.getUTCFullYear(),E=kf(),_=Ii((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:E.firstWeekContainsDate)!==null&&r!==void 0?r:(l=E.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(_>=1&&_<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var T=new Date(0);T.setUTCFullYear(m+1,0,_),T.setUTCHours(0,0,0,0);var A=yh(T,e),S=new Date(0);S.setUTCFullYear(m,0,_),S.setUTCHours(0,0,0,0);var y=yh(S,e);return f.getTime()>=A.getTime()?m+1:f.getTime()>=y.getTime()?m:m-1}function p9(t,e){var n,r,i,o,s,a,l,d;Dt(1,arguments);var f=kf(),m=Ii((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:f.firstWeekContainsDate)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1),E=oS(t,e),_=new Date(0);_.setUTCFullYear(E,0,m),_.setUTCHours(0,0,0,0);var T=yh(_,e);return T}var m9=6048e5;function g9(t,e){Dt(1,arguments);var n=ur(t),r=yh(n,e).getTime()-p9(n,e).getTime();return Math.round(r/m9)+1}function Se(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var zr={y:function(e,n){var r=e.getUTCFullYear(),i=r>0?r:1-r;return Se(n==="yy"?i%100:i,n.length)},M:function(e,n){var r=e.getUTCMonth();return n==="M"?String(r+1):Se(r+1,2)},d:function(e,n){return Se(e.getUTCDate(),n.length)},a:function(e,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,n){return Se(e.getUTCHours()%12||12,n.length)},H:function(e,n){return Se(e.getUTCHours(),n.length)},m:function(e,n){return Se(e.getUTCMinutes(),n.length)},s:function(e,n){return Se(e.getUTCSeconds(),n.length)},S:function(e,n){var r=n.length,i=e.getUTCMilliseconds(),o=Math.floor(i*Math.pow(10,r-3));return Se(o,n.length)}},ys={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},y9={G:function(e,n,r){var i=e.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){var i=e.getUTCFullYear(),o=i>0?i:1-i;return r.ordinalNumber(o,{unit:"year"})}return zr.y(e,n)},Y:function(e,n,r,i){var o=oS(e,i),s=o>0?o:1-o;if(n==="YY"){var a=s%100;return Se(a,2)}return n==="Yo"?r.ordinalNumber(s,{unit:"year"}):Se(s,n.length)},R:function(e,n){var r=iS(e);return Se(r,n.length)},u:function(e,n){var r=e.getUTCFullYear();return Se(r,n.length)},Q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return Se(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return Se(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,r){var i=e.getUTCMonth();switch(n){case"M":case"MM":return zr.M(e,n);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,r){var i=e.getUTCMonth();switch(n){case"L":return String(i+1);case"LL":return Se(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var o=g9(e,i);return n==="wo"?r.ordinalNumber(o,{unit:"week"}):Se(o,n.length)},I:function(e,n,r){var i=f9(e);return n==="Io"?r.ordinalNumber(i,{unit:"week"}):Se(i,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):zr.d(e,n)},D:function(e,n,r){var i=c9(e);return n==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):Se(i,n.length)},E:function(e,n,r){var i=e.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(s);case"ee":return Se(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(s);case"cc":return Se(s,n.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(e,n,r){var i=e.getUTCDay(),o=i===0?7:i;switch(n){case"i":return String(o);case"ii":return Se(o,n.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,r){var i=e.getUTCHours(),o=i/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,n,r){var i=e.getUTCHours(),o;switch(i===12?o=ys.noon:i===0?o=ys.midnight:o=i/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,n,r){var i=e.getUTCHours(),o;switch(i>=17?o=ys.evening:i>=12?o=ys.afternoon:i>=4?o=ys.morning:o=ys.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return zr.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):zr.H(e,n)},K:function(e,n,r){var i=e.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(i,{unit:"hour"}):Se(i,n.length)},k:function(e,n,r){var i=e.getUTCHours();return i===0&&(i=24),n==="ko"?r.ordinalNumber(i,{unit:"hour"}):Se(i,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):zr.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):zr.s(e,n)},S:function(e,n){return zr.S(e,n)},X:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();if(s===0)return"Z";switch(n){case"X":return Nk(s);case"XXXX":case"XX":return Ki(s);case"XXXXX":case"XXX":default:return Ki(s,":")}},x:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"x":return Nk(s);case"xxxx":case"xx":return Ki(s);case"xxxxx":case"xxx":default:return Ki(s,":")}},O:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+jk(s,":");case"OOOO":default:return"GMT"+Ki(s,":")}},z:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+jk(s,":");case"zzzz":default:return"GMT"+Ki(s,":")}},t:function(e,n,r,i){var o=i._originalDate||e,s=Math.floor(o.getTime()/1e3);return Se(s,n.length)},T:function(e,n,r,i){var o=i._originalDate||e,s=o.getTime();return Se(s,n.length)}};function jk(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+Se(o,2)}function Nk(t,e){if(t%60===0){var n=t>0?"-":"+";return n+Se(Math.abs(t)/60,2)}return Ki(t,e)}function Ki(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=Se(Math.floor(i/60),2),s=Se(i%60,2);return r+o+n+s}var Mk=function(e,n){switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},sS=function(e,n){switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},v9=function(e,n){var r=e.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return Mk(e,n);var s;switch(i){case"P":s=n.dateTime({width:"short"});break;case"PP":s=n.dateTime({width:"medium"});break;case"PPP":s=n.dateTime({width:"long"});break;case"PPPP":default:s=n.dateTime({width:"full"});break}return s.replace("{{date}}",Mk(i,n)).replace("{{time}}",sS(o,n))},_9={p:sS,P:v9},k9=["D","DD"],E9=["YY","YYYY"];function w9(t){return k9.indexOf(t)!==-1}function x9(t){return E9.indexOf(t)!==-1}function Ok(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var T9={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},I9=function(e,n,r){var i,o=T9[e];return typeof o=="string"?i=o:n===1?i=o.one:i=o.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function Mp(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var S9={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},C9={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},L9={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},A9={date:Mp({formats:S9,defaultWidth:"full"}),time:Mp({formats:C9,defaultWidth:"full"}),dateTime:Mp({formats:L9,defaultWidth:"full"})},P9={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},R9=function(e,n,r,i){return P9[e]};function rl(t){return function(e,n){var r=n!=null&&n.context?String(n.context):"standalone",i;if(r==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,s=n!=null&&n.width?String(n.width):o;i=t.formattingValues[s]||t.formattingValues[o]}else{var a=t.defaultWidth,l=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[l]||t.values[a]}var d=t.argumentCallback?t.argumentCallback(e):e;return i[d]}}var b9={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},j9={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},N9={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},M9={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},O9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},D9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},V9=function(e,n){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},F9={ordinalNumber:V9,era:rl({values:b9,defaultWidth:"wide"}),quarter:rl({values:j9,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:rl({values:N9,defaultWidth:"wide"}),day:rl({values:M9,defaultWidth:"wide"}),dayPeriod:rl({values:O9,defaultWidth:"wide",formattingValues:D9,defaultFormattingWidth:"wide"})};function il(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;var s=o[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?W9(a,function(m){return m.test(s)}):U9(a,function(m){return m.test(s)}),d;d=t.valueCallback?t.valueCallback(l):l,d=n.valueCallback?n.valueCallback(d):d;var f=e.slice(s.length);return{value:d,rest:f}}}function U9(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function W9(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function $9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],o=e.match(t.parsePattern);if(!o)return null;var s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;var a=e.slice(i.length);return{value:s,rest:a}}}var z9=/^(\d+)(th|st|nd|rd)?/i,B9=/\d+/i,H9={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},q9={any:[/^b/i,/^(a|c)/i]},Y9={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},G9={any:[/1/i,/2/i,/3/i,/4/i]},K9={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Q9={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Z9={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},X9={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},J9={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},e7={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},t7={ordinalNumber:$9({matchPattern:z9,parsePattern:B9,valueCallback:function(e){return parseInt(e,10)}}),era:il({matchPatterns:H9,defaultMatchWidth:"wide",parsePatterns:q9,defaultParseWidth:"any"}),quarter:il({matchPatterns:Y9,defaultMatchWidth:"wide",parsePatterns:G9,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:il({matchPatterns:K9,defaultMatchWidth:"wide",parsePatterns:Q9,defaultParseWidth:"any"}),day:il({matchPatterns:Z9,defaultMatchWidth:"wide",parsePatterns:X9,defaultParseWidth:"any"}),dayPeriod:il({matchPatterns:J9,defaultMatchWidth:"any",parsePatterns:e7,defaultParseWidth:"any"})},n7={code:"en-US",formatDistance:I9,formatLong:A9,formatRelative:R9,localize:F9,match:t7,options:{weekStartsOn:0,firstWeekContainsDate:1}},r7=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,i7=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,o7=/^'([^]*?)'?$/,s7=/''/g,a7=/[a-zA-Z]/;function l7(t,e,n){var r,i,o,s,a,l,d,f,m,E,_,T,A,S;Dt(2,arguments);var y=String(e),g=kf(),k=(r=(i=void 0)!==null&&i!==void 0?i:g.locale)!==null&&r!==void 0?r:n7,x=Ii((o=(s=(a=(l=void 0)!==null&&l!==void 0?l:void 0)!==null&&a!==void 0?a:g.firstWeekContainsDate)!==null&&s!==void 0?s:(d=g.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(x>=1&&x<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var R=Ii((m=(E=(_=(T=void 0)!==null&&T!==void 0?T:void 0)!==null&&_!==void 0?_:g.weekStartsOn)!==null&&E!==void 0?E:(A=g.locale)===null||A===void 0||(S=A.options)===null||S===void 0?void 0:S.weekStartsOn)!==null&&m!==void 0?m:0);if(!(R>=0&&R<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!k.localize)throw new RangeError("locale must contain localize property");if(!k.formatLong)throw new RangeError("locale must contain formatLong property");var N=ur(t);if(!a9(N))throw new RangeError("Invalid time value");var w=o9(N),I=l9(N,w),P={firstWeekContainsDate:x,weekStartsOn:R,locale:k,_originalDate:N},b=y.match(i7).map(function(j){var O=j[0];if(O==="p"||O==="P"){var C=_9[O];return C(j,k.formatLong)}return j}).join("").match(r7).map(function(j){if(j==="''")return"'";var O=j[0];if(O==="'")return u7(j);var C=y9[O];if(C)return x9(j)&&Ok(j,e,String(t)),w9(j)&&Ok(j,e,String(t)),C(I,j,k.localize,P);if(O.match(a7))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");return j}).join("");return b}function u7(t){var e=t.match(o7);return e?e[1].replace(s7,"'"):t}var xg={exports:{}},aS={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(aS);var Ye=aS.exports,Tg={exports:{}},Ig={exports:{}},lS={exports:{}};(function(t){function e(n){"@babel/helpers - typeof";return t.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(lS);var uS=lS.exports,Sg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(i.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+i.length+" present")}t.exports=e.default})(Sg,Sg.exports);var Gt=Sg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(uS),i=n(Gt);function o(s){return(0,i.default)(1,arguments),s instanceof Date||(0,r.default)(s)==="object"&&Object.prototype.toString.call(s)==="[object Date]"}t.exports=e.default})(Ig,Ig.exports);var c7=Ig.exports,Cg={exports:{}};(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(uS),i=n(Gt);function o(s){(0,i.default)(1,arguments);var a=Object.prototype.toString.call(s);return s instanceof Date||(0,r.default)(s)==="object"&&a==="[object Date]"?new Date(s.getTime()):typeof s=="number"||a==="[object Number]"?new Date(s):((typeof s=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}t.exports=e.default})(Cg,Cg.exports);var cr=Cg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(c7),i=n(cr),o=n(Gt);function s(a){if((0,o.default)(1,arguments),!(0,r.default)(a)&&typeof a!="number")return!1;var l=(0,i.default)(a);return!isNaN(Number(l))}t.exports=e.default})(Tg,Tg.exports);var d7=Tg.exports,Lg={exports:{}},Ag={exports:{}},Pg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){if(r===null||r===!0||r===!1)return NaN;var i=Number(r);return isNaN(i)?i:i<0?Math.ceil(i):Math.floor(i)}t.exports=e.default})(Pg,Pg.exports);var ss=Pg.exports;const h7=Eu(ss);(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(ss),i=n(cr),o=n(Gt);function s(a,l){(0,o.default)(2,arguments);var d=(0,i.default)(a).getTime(),f=(0,r.default)(l);return new Date(d+f)}t.exports=e.default})(Ag,Ag.exports);var f7=Ag.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(f7),i=n(Gt),o=n(ss);function s(a,l){(0,i.default)(2,arguments);var d=(0,o.default)(l);return(0,r.default)(a,-d)}t.exports=e.default})(Lg,Lg.exports);var p7=Lg.exports,Rg={exports:{}},bg={exports:{}};(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(cr),i=n(Gt),o=864e5;function s(a){(0,i.default)(1,arguments);var l=(0,r.default)(a),d=l.getTime();l.setUTCMonth(0,1),l.setUTCHours(0,0,0,0);var f=l.getTime(),m=d-f;return Math.floor(m/o)+1}t.exports=e.default})(bg,bg.exports);var m7=bg.exports,jg={exports:{}},Ng={exports:{}};(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(cr),i=n(Gt);function o(s){(0,i.default)(1,arguments);var a=1,l=(0,r.default)(s),d=l.getUTCDay(),f=(d<a?7:0)+d-a;return l.setUTCDate(l.getUTCDate()-f),l.setUTCHours(0,0,0,0),l}t.exports=e.default})(Ng,Ng.exports);var fy=Ng.exports,Mg={exports:{}},Og={exports:{}};(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(cr),i=n(Gt),o=n(fy);function s(a){(0,i.default)(1,arguments);var l=(0,r.default)(a),d=l.getUTCFullYear(),f=new Date(0);f.setUTCFullYear(d+1,0,4),f.setUTCHours(0,0,0,0);var m=(0,o.default)(f),E=new Date(0);E.setUTCFullYear(d,0,4),E.setUTCHours(0,0,0,0);var _=(0,o.default)(E);return l.getTime()>=m.getTime()?d+1:l.getTime()>=_.getTime()?d:d-1}t.exports=e.default})(Og,Og.exports);var cS=Og.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(cS),i=n(fy),o=n(Gt);function s(a){(0,o.default)(1,arguments);var l=(0,r.default)(a),d=new Date(0);d.setUTCFullYear(l,0,4),d.setUTCHours(0,0,0,0);var f=(0,i.default)(d);return f}t.exports=e.default})(Mg,Mg.exports);var g7=Mg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(cr),i=n(fy),o=n(g7),s=n(Gt),a=6048e5;function l(d){(0,s.default)(1,arguments);var f=(0,r.default)(d),m=(0,i.default)(f).getTime()-(0,o.default)(f).getTime();return Math.round(m/a)+1}t.exports=e.default})(jg,jg.exports);var y7=jg.exports,Dg={exports:{}},Vg={exports:{}},as={};Object.defineProperty(as,"__esModule",{value:!0});as.getDefaultOptions=v7;as.setDefaultOptions=_7;var dS={};function v7(){return dS}function _7(t){dS=t}(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=n(cr),i=n(Gt),o=n(ss),s=as;function a(l,d){var f,m,E,_,T,A,S,y;(0,i.default)(1,arguments);var g=(0,s.getDefaultOptions)(),k=(0,o.default)((f=(m=(E=(_=d==null?void 0:d.weekStartsOn)!==null&&_!==void 0?_:d==null||(T=d.locale)===null||T===void 0||(A=T.options)===null||A===void 0?void 0:A.weekStartsOn)!==null&&E!==void 0?E:g.weekStartsOn)!==null&&m!==void 0?m:(S=g.locale)===null||S===void 0||(y=S.options)===null||y===void 0?void 0:y.weekStartsOn)!==null&&f!==void 0?f:0);if(!(k>=0&&k<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var x=(0,r.default)(l),R=x.getUTCDay(),N=(R<k?7:0)+R-k;return x.setUTCDate(x.getUTCDate()-N),x.setUTCHours(0,0,0,0),x}t.exports=e.default})(Vg,Vg.exports);var py=Vg.exports,Fg={exports:{}},Ug={exports:{}};(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(cr),i=n(Gt),o=n(py),s=n(ss),a=as;function l(d,f){var m,E,_,T,A,S,y,g;(0,i.default)(1,arguments);var k=(0,r.default)(d),x=k.getUTCFullYear(),R=(0,a.getDefaultOptions)(),N=(0,s.default)((m=(E=(_=(T=f==null?void 0:f.firstWeekContainsDate)!==null&&T!==void 0?T:f==null||(A=f.locale)===null||A===void 0||(S=A.options)===null||S===void 0?void 0:S.firstWeekContainsDate)!==null&&_!==void 0?_:R.firstWeekContainsDate)!==null&&E!==void 0?E:(y=R.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1);if(!(N>=1&&N<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(x+1,0,N),w.setUTCHours(0,0,0,0);var I=(0,o.default)(w,f),P=new Date(0);P.setUTCFullYear(x,0,N),P.setUTCHours(0,0,0,0);var b=(0,o.default)(P,f);return k.getTime()>=I.getTime()?x+1:k.getTime()>=b.getTime()?x:x-1}t.exports=e.default})(Ug,Ug.exports);var hS=Ug.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(hS),i=n(Gt),o=n(py),s=n(ss),a=as;function l(d,f){var m,E,_,T,A,S,y,g;(0,i.default)(1,arguments);var k=(0,a.getDefaultOptions)(),x=(0,s.default)((m=(E=(_=(T=f==null?void 0:f.firstWeekContainsDate)!==null&&T!==void 0?T:f==null||(A=f.locale)===null||A===void 0||(S=A.options)===null||S===void 0?void 0:S.firstWeekContainsDate)!==null&&_!==void 0?_:k.firstWeekContainsDate)!==null&&E!==void 0?E:(y=k.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1),R=(0,r.default)(d,f),N=new Date(0);N.setUTCFullYear(R,0,x),N.setUTCHours(0,0,0,0);var w=(0,o.default)(N,f);return w}t.exports=e.default})(Fg,Fg.exports);var k7=Fg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(cr),i=n(py),o=n(k7),s=n(Gt),a=6048e5;function l(d,f){(0,s.default)(1,arguments);var m=(0,r.default)(d),E=(0,i.default)(m,f).getTime()-(0,o.default)(m,f).getTime();return Math.round(E/a)+1}t.exports=e.default})(Dg,Dg.exports);var E7=Dg.exports,Wg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){for(var o=r<0?"-":"",s=Math.abs(r).toString();s.length<i;)s="0"+s;return o+s}t.exports=e.default})(Wg,Wg.exports);var fS=Wg.exports,$g={exports:{}};(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(fS),i={y:function(a,l){var d=a.getUTCFullYear(),f=d>0?d:1-d;return(0,r.default)(l==="yy"?f%100:f,l.length)},M:function(a,l){var d=a.getUTCMonth();return l==="M"?String(d+1):(0,r.default)(d+1,2)},d:function(a,l){return(0,r.default)(a.getUTCDate(),l.length)},a:function(a,l){var d=a.getUTCHours()/12>=1?"pm":"am";switch(l){case"a":case"aa":return d.toUpperCase();case"aaa":return d;case"aaaaa":return d[0];case"aaaa":default:return d==="am"?"a.m.":"p.m."}},h:function(a,l){return(0,r.default)(a.getUTCHours()%12||12,l.length)},H:function(a,l){return(0,r.default)(a.getUTCHours(),l.length)},m:function(a,l){return(0,r.default)(a.getUTCMinutes(),l.length)},s:function(a,l){return(0,r.default)(a.getUTCSeconds(),l.length)},S:function(a,l){var d=l.length,f=a.getUTCMilliseconds(),m=Math.floor(f*Math.pow(10,d-3));return(0,r.default)(m,l.length)}},o=i;e.default=o,t.exports=e.default})($g,$g.exports);var w7=$g.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(m7),i=n(y7),o=n(cS),s=n(E7),a=n(hS),l=n(fS),d=n(w7),f={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},m={G:function(y,g,k){var x=y.getUTCFullYear()>0?1:0;switch(g){case"G":case"GG":case"GGG":return k.era(x,{width:"abbreviated"});case"GGGGG":return k.era(x,{width:"narrow"});case"GGGG":default:return k.era(x,{width:"wide"})}},y:function(y,g,k){if(g==="yo"){var x=y.getUTCFullYear(),R=x>0?x:1-x;return k.ordinalNumber(R,{unit:"year"})}return d.default.y(y,g)},Y:function(y,g,k,x){var R=(0,a.default)(y,x),N=R>0?R:1-R;if(g==="YY"){var w=N%100;return(0,l.default)(w,2)}return g==="Yo"?k.ordinalNumber(N,{unit:"year"}):(0,l.default)(N,g.length)},R:function(y,g){var k=(0,o.default)(y);return(0,l.default)(k,g.length)},u:function(y,g){var k=y.getUTCFullYear();return(0,l.default)(k,g.length)},Q:function(y,g,k){var x=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"Q":return String(x);case"QQ":return(0,l.default)(x,2);case"Qo":return k.ordinalNumber(x,{unit:"quarter"});case"QQQ":return k.quarter(x,{width:"abbreviated",context:"formatting"});case"QQQQQ":return k.quarter(x,{width:"narrow",context:"formatting"});case"QQQQ":default:return k.quarter(x,{width:"wide",context:"formatting"})}},q:function(y,g,k){var x=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"q":return String(x);case"qq":return(0,l.default)(x,2);case"qo":return k.ordinalNumber(x,{unit:"quarter"});case"qqq":return k.quarter(x,{width:"abbreviated",context:"standalone"});case"qqqqq":return k.quarter(x,{width:"narrow",context:"standalone"});case"qqqq":default:return k.quarter(x,{width:"wide",context:"standalone"})}},M:function(y,g,k){var x=y.getUTCMonth();switch(g){case"M":case"MM":return d.default.M(y,g);case"Mo":return k.ordinalNumber(x+1,{unit:"month"});case"MMM":return k.month(x,{width:"abbreviated",context:"formatting"});case"MMMMM":return k.month(x,{width:"narrow",context:"formatting"});case"MMMM":default:return k.month(x,{width:"wide",context:"formatting"})}},L:function(y,g,k){var x=y.getUTCMonth();switch(g){case"L":return String(x+1);case"LL":return(0,l.default)(x+1,2);case"Lo":return k.ordinalNumber(x+1,{unit:"month"});case"LLL":return k.month(x,{width:"abbreviated",context:"standalone"});case"LLLLL":return k.month(x,{width:"narrow",context:"standalone"});case"LLLL":default:return k.month(x,{width:"wide",context:"standalone"})}},w:function(y,g,k,x){var R=(0,s.default)(y,x);return g==="wo"?k.ordinalNumber(R,{unit:"week"}):(0,l.default)(R,g.length)},I:function(y,g,k){var x=(0,i.default)(y);return g==="Io"?k.ordinalNumber(x,{unit:"week"}):(0,l.default)(x,g.length)},d:function(y,g,k){return g==="do"?k.ordinalNumber(y.getUTCDate(),{unit:"date"}):d.default.d(y,g)},D:function(y,g,k){var x=(0,r.default)(y);return g==="Do"?k.ordinalNumber(x,{unit:"dayOfYear"}):(0,l.default)(x,g.length)},E:function(y,g,k){var x=y.getUTCDay();switch(g){case"E":case"EE":case"EEE":return k.day(x,{width:"abbreviated",context:"formatting"});case"EEEEE":return k.day(x,{width:"narrow",context:"formatting"});case"EEEEEE":return k.day(x,{width:"short",context:"formatting"});case"EEEE":default:return k.day(x,{width:"wide",context:"formatting"})}},e:function(y,g,k,x){var R=y.getUTCDay(),N=(R-x.weekStartsOn+8)%7||7;switch(g){case"e":return String(N);case"ee":return(0,l.default)(N,2);case"eo":return k.ordinalNumber(N,{unit:"day"});case"eee":return k.day(R,{width:"abbreviated",context:"formatting"});case"eeeee":return k.day(R,{width:"narrow",context:"formatting"});case"eeeeee":return k.day(R,{width:"short",context:"formatting"});case"eeee":default:return k.day(R,{width:"wide",context:"formatting"})}},c:function(y,g,k,x){var R=y.getUTCDay(),N=(R-x.weekStartsOn+8)%7||7;switch(g){case"c":return String(N);case"cc":return(0,l.default)(N,g.length);case"co":return k.ordinalNumber(N,{unit:"day"});case"ccc":return k.day(R,{width:"abbreviated",context:"standalone"});case"ccccc":return k.day(R,{width:"narrow",context:"standalone"});case"cccccc":return k.day(R,{width:"short",context:"standalone"});case"cccc":default:return k.day(R,{width:"wide",context:"standalone"})}},i:function(y,g,k){var x=y.getUTCDay(),R=x===0?7:x;switch(g){case"i":return String(R);case"ii":return(0,l.default)(R,g.length);case"io":return k.ordinalNumber(R,{unit:"day"});case"iii":return k.day(x,{width:"abbreviated",context:"formatting"});case"iiiii":return k.day(x,{width:"narrow",context:"formatting"});case"iiiiii":return k.day(x,{width:"short",context:"formatting"});case"iiii":default:return k.day(x,{width:"wide",context:"formatting"})}},a:function(y,g,k){var x=y.getUTCHours(),R=x/12>=1?"pm":"am";switch(g){case"a":case"aa":return k.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"aaa":return k.dayPeriod(R,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return k.dayPeriod(R,{width:"narrow",context:"formatting"});case"aaaa":default:return k.dayPeriod(R,{width:"wide",context:"formatting"})}},b:function(y,g,k){var x=y.getUTCHours(),R;switch(x===12?R=f.noon:x===0?R=f.midnight:R=x/12>=1?"pm":"am",g){case"b":case"bb":return k.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"bbb":return k.dayPeriod(R,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return k.dayPeriod(R,{width:"narrow",context:"formatting"});case"bbbb":default:return k.dayPeriod(R,{width:"wide",context:"formatting"})}},B:function(y,g,k){var x=y.getUTCHours(),R;switch(x>=17?R=f.evening:x>=12?R=f.afternoon:x>=4?R=f.morning:R=f.night,g){case"B":case"BB":case"BBB":return k.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"BBBBB":return k.dayPeriod(R,{width:"narrow",context:"formatting"});case"BBBB":default:return k.dayPeriod(R,{width:"wide",context:"formatting"})}},h:function(y,g,k){if(g==="ho"){var x=y.getUTCHours()%12;return x===0&&(x=12),k.ordinalNumber(x,{unit:"hour"})}return d.default.h(y,g)},H:function(y,g,k){return g==="Ho"?k.ordinalNumber(y.getUTCHours(),{unit:"hour"}):d.default.H(y,g)},K:function(y,g,k){var x=y.getUTCHours()%12;return g==="Ko"?k.ordinalNumber(x,{unit:"hour"}):(0,l.default)(x,g.length)},k:function(y,g,k){var x=y.getUTCHours();return x===0&&(x=24),g==="ko"?k.ordinalNumber(x,{unit:"hour"}):(0,l.default)(x,g.length)},m:function(y,g,k){return g==="mo"?k.ordinalNumber(y.getUTCMinutes(),{unit:"minute"}):d.default.m(y,g)},s:function(y,g,k){return g==="so"?k.ordinalNumber(y.getUTCSeconds(),{unit:"second"}):d.default.s(y,g)},S:function(y,g){return d.default.S(y,g)},X:function(y,g,k,x){var R=x._originalDate||y,N=R.getTimezoneOffset();if(N===0)return"Z";switch(g){case"X":return _(N);case"XXXX":case"XX":return T(N);case"XXXXX":case"XXX":default:return T(N,":")}},x:function(y,g,k,x){var R=x._originalDate||y,N=R.getTimezoneOffset();switch(g){case"x":return _(N);case"xxxx":case"xx":return T(N);case"xxxxx":case"xxx":default:return T(N,":")}},O:function(y,g,k,x){var R=x._originalDate||y,N=R.getTimezoneOffset();switch(g){case"O":case"OO":case"OOO":return"GMT"+E(N,":");case"OOOO":default:return"GMT"+T(N,":")}},z:function(y,g,k,x){var R=x._originalDate||y,N=R.getTimezoneOffset();switch(g){case"z":case"zz":case"zzz":return"GMT"+E(N,":");case"zzzz":default:return"GMT"+T(N,":")}},t:function(y,g,k,x){var R=x._originalDate||y,N=Math.floor(R.getTime()/1e3);return(0,l.default)(N,g.length)},T:function(y,g,k,x){var R=x._originalDate||y,N=R.getTime();return(0,l.default)(N,g.length)}};function E(S,y){var g=S>0?"-":"+",k=Math.abs(S),x=Math.floor(k/60),R=k%60;if(R===0)return g+String(x);var N=y;return g+String(x)+N+(0,l.default)(R,2)}function _(S,y){if(S%60===0){var g=S>0?"-":"+";return g+(0,l.default)(Math.abs(S)/60,2)}return T(S,y)}function T(S,y){var g=y||"",k=S>0?"-":"+",x=Math.abs(S),R=(0,l.default)(Math.floor(x/60),2),N=(0,l.default)(x%60,2);return k+R+g+N}var A=m;e.default=A,t.exports=e.default})(Rg,Rg.exports);var x7=Rg.exports,zg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(l,d){switch(l){case"P":return d.date({width:"short"});case"PP":return d.date({width:"medium"});case"PPP":return d.date({width:"long"});case"PPPP":default:return d.date({width:"full"})}},r=function(l,d){switch(l){case"p":return d.time({width:"short"});case"pp":return d.time({width:"medium"});case"ppp":return d.time({width:"long"});case"pppp":default:return d.time({width:"full"})}},i=function(l,d){var f=l.match(/(P+)(p+)?/)||[],m=f[1],E=f[2];if(!E)return n(l,d);var _;switch(m){case"P":_=d.dateTime({width:"short"});break;case"PP":_=d.dateTime({width:"medium"});break;case"PPP":_=d.dateTime({width:"long"});break;case"PPPP":default:_=d.dateTime({width:"full"});break}return _.replace("{{date}}",n(m,d)).replace("{{time}}",r(E,d))},o={p:r,P:i},s=o;e.default=s,t.exports=e.default})(zg,zg.exports);var T7=zg.exports,Bg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){var i=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return i.setUTCFullYear(r.getFullYear()),r.getTime()-i.getTime()}t.exports=e.default})(Bg,Bg.exports);var pS=Bg.exports;const Dk=Eu(pS);var Wu={};Object.defineProperty(Wu,"__esModule",{value:!0});Wu.isProtectedDayOfYearToken=C7;Wu.isProtectedWeekYearToken=L7;Wu.throwProtectedError=A7;var I7=["D","DD"],S7=["YY","YYYY"];function C7(t){return I7.indexOf(t)!==-1}function L7(t){return S7.indexOf(t)!==-1}function A7(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Hg={exports:{}},qg={exports:{}},Yg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},r=function(s,a,l){var d,f=n[s];return typeof f=="string"?d=f:a===1?d=f.one:d=f.other.replace("{{count}}",a.toString()),l!=null&&l.addSuffix?l.comparison&&l.comparison>0?"in "+d:d+" ago":d},i=r;e.default=i,t.exports=e.default})(Yg,Yg.exports);var P7=Yg.exports,Gg={exports:{}},Kg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.width?String(i.width):r.defaultWidth,s=r.formats[o]||r.formats[r.defaultWidth];return s}}t.exports=e.default})(Kg,Kg.exports);var R7=Kg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(R7),i={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},o={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},s={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},a={date:(0,r.default)({formats:i,defaultWidth:"full"}),time:(0,r.default)({formats:o,defaultWidth:"full"}),dateTime:(0,r.default)({formats:s,defaultWidth:"full"})},l=a;e.default=l,t.exports=e.default})(Gg,Gg.exports);var b7=Gg.exports,Qg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},r=function(s,a,l,d){return n[s]},i=r;e.default=i,t.exports=e.default})(Qg,Qg.exports);var j7=Qg.exports,Zg={exports:{}},Xg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i,o){var s=o!=null&&o.context?String(o.context):"standalone",a;if(s==="formatting"&&r.formattingValues){var l=r.defaultFormattingWidth||r.defaultWidth,d=o!=null&&o.width?String(o.width):l;a=r.formattingValues[d]||r.formattingValues[l]}else{var f=r.defaultWidth,m=o!=null&&o.width?String(o.width):r.defaultWidth;a=r.values[m]||r.values[f]}var E=r.argumentCallback?r.argumentCallback(i):i;return a[E]}}t.exports=e.default})(Xg,Xg.exports);var N7=Xg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(N7),i={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},o={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},s={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},a={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},l={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},d={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},f=function(T,A){var S=Number(T),y=S%100;if(y>20||y<10)switch(y%10){case 1:return S+"st";case 2:return S+"nd";case 3:return S+"rd"}return S+"th"},m={ordinalNumber:f,era:(0,r.default)({values:i,defaultWidth:"wide"}),quarter:(0,r.default)({values:o,defaultWidth:"wide",argumentCallback:function(T){return T-1}}),month:(0,r.default)({values:s,defaultWidth:"wide"}),day:(0,r.default)({values:a,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:l,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"})},E=m;e.default=E,t.exports=e.default})(Zg,Zg.exports);var M7=Zg.exports,Jg={exports:{}},e0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(o){return function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.width,d=l&&o.matchPatterns[l]||o.matchPatterns[o.defaultMatchWidth],f=s.match(d);if(!f)return null;var m=f[0],E=l&&o.parsePatterns[l]||o.parsePatterns[o.defaultParseWidth],_=Array.isArray(E)?i(E,function(S){return S.test(m)}):r(E,function(S){return S.test(m)}),T;T=o.valueCallback?o.valueCallback(_):_,T=a.valueCallback?a.valueCallback(T):T;var A=s.slice(m.length);return{value:T,rest:A}}}function r(o,s){for(var a in o)if(o.hasOwnProperty(a)&&s(o[a]))return a}function i(o,s){for(var a=0;a<o.length;a++)if(s(o[a]))return a}t.exports=e.default})(e0,e0.exports);var O7=e0.exports,t0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.match(r.matchPattern);if(!s)return null;var a=s[0],l=i.match(r.parsePattern);if(!l)return null;var d=r.valueCallback?r.valueCallback(l[0]):l[0];d=o.valueCallback?o.valueCallback(d):d;var f=i.slice(a.length);return{value:d,rest:f}}}t.exports=e.default})(t0,t0.exports);var D7=t0.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(O7),i=n(D7),o=/^(\d+)(th|st|nd|rd)?/i,s=/\d+/i,a={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},l={any:[/^b/i,/^(a|c)/i]},d={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},f={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},E={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},_={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},T={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},A={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},S={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},y={ordinalNumber:(0,i.default)({matchPattern:o,parsePattern:s,valueCallback:function(x){return parseInt(x,10)}}),era:(0,r.default)({matchPatterns:a,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(x){return x+1}}),month:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:_,defaultMatchWidth:"wide",parsePatterns:T,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:A,defaultMatchWidth:"any",parsePatterns:S,defaultParseWidth:"any"})},g=y;e.default=g,t.exports=e.default})(Jg,Jg.exports);var V7=Jg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(P7),i=n(b7),o=n(j7),s=n(M7),a=n(V7),l={code:"en-US",formatDistance:r.default,formatLong:i.default,formatRelative:o.default,localize:s.default,match:a.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},d=l;e.default=d,t.exports=e.default})(qg,qg.exports);var F7=qg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(F7),i=r.default;e.default=i,t.exports=e.default})(Hg,Hg.exports);var U7=Hg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=k;var r=n(d7),i=n(p7),o=n(cr),s=n(x7),a=n(T7),l=n(pS),d=Wu,f=n(ss),m=n(Gt),E=as,_=n(U7),T=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,A=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,S=/^'([^]*?)'?$/,y=/''/g,g=/[a-zA-Z]/;function k(R,N,w){var I,P,b,j,O,C,K,ie,ee,z,$,G,J,le,ne,he,Fe,Pe;(0,m.default)(2,arguments);var Qe=String(N),Ue=(0,E.getDefaultOptions)(),xt=(I=(P=w==null?void 0:w.locale)!==null&&P!==void 0?P:Ue.locale)!==null&&I!==void 0?I:_.default,Vt=(0,f.default)((b=(j=(O=(C=w==null?void 0:w.firstWeekContainsDate)!==null&&C!==void 0?C:w==null||(K=w.locale)===null||K===void 0||(ie=K.options)===null||ie===void 0?void 0:ie.firstWeekContainsDate)!==null&&O!==void 0?O:Ue.firstWeekContainsDate)!==null&&j!==void 0?j:(ee=Ue.locale)===null||ee===void 0||(z=ee.options)===null||z===void 0?void 0:z.firstWeekContainsDate)!==null&&b!==void 0?b:1);if(!(Vt>=1&&Vt<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Kt=(0,f.default)(($=(G=(J=(le=w==null?void 0:w.weekStartsOn)!==null&&le!==void 0?le:w==null||(ne=w.locale)===null||ne===void 0||(he=ne.options)===null||he===void 0?void 0:he.weekStartsOn)!==null&&J!==void 0?J:Ue.weekStartsOn)!==null&&G!==void 0?G:(Fe=Ue.locale)===null||Fe===void 0||(Pe=Fe.options)===null||Pe===void 0?void 0:Pe.weekStartsOn)!==null&&$!==void 0?$:0);if(!(Kt>=0&&Kt<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!xt.localize)throw new RangeError("locale must contain localize property");if(!xt.formatLong)throw new RangeError("locale must contain formatLong property");var Tt=(0,o.default)(R);if(!(0,r.default)(Tt))throw new RangeError("Invalid time value");var It=(0,l.default)(Tt),Mi=(0,i.default)(Tt,It),Oi={firstWeekContainsDate:Vt,weekStartsOn:Kt,locale:xt,_originalDate:Tt},Di=Qe.match(A).map(function(ot){var D=ot[0];if(D==="p"||D==="P"){var ce=a.default[D];return ce(ot,xt.formatLong)}return ot}).join("").match(T).map(function(ot){if(ot==="''")return"'";var D=ot[0];if(D==="'")return x(ot);var ce=s.default[D];if(ce)return!(w!=null&&w.useAdditionalWeekYearTokens)&&(0,d.isProtectedWeekYearToken)(ot)&&(0,d.throwProtectedError)(ot,N,String(R)),!(w!=null&&w.useAdditionalDayOfYearTokens)&&(0,d.isProtectedDayOfYearToken)(ot)&&(0,d.throwProtectedError)(ot,N,String(R)),ce(Mi,ot,xt.localize,Oi);if(D.match(g))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return ot}).join("");return Di}function x(R){var N=R.match(S);return N?N[1].replace(y,"'"):R}t.exports=e.default})(xg,xg.exports);var W7=xg.exports;const $7=Eu(W7);function Vk(t,e,n){var r=H7(t,n.timeZone,n.locale);return r.formatToParts?z7(r,e):B7(r,e)}function z7(t,e){for(var n=t.formatToParts(e),r=n.length-1;r>=0;--r)if(n[r].type==="timeZoneName")return n[r].value}function B7(t,e){var n=t.format(e).replace(/\u200E/g,""),r=/ [\w-+ ]+$/.exec(n);return r?r[0].substr(1):""}function H7(t,e,n){if(n&&!n.code)throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");return new Intl.DateTimeFormat(n?[n.code,"en-US"]:void 0,{timeZone:e,timeZoneName:t})}function q7(t,e){var n=Q7(e);return n.formatToParts?G7(n,t):K7(n,t)}var Y7={year:0,month:1,day:2,hour:3,minute:4,second:5};function G7(t,e){try{for(var n=t.formatToParts(e),r=[],i=0;i<n.length;i++){var o=Y7[n[i].type];o>=0&&(r[o]=parseInt(n[i].value,10))}return r}catch(s){if(s instanceof RangeError)return[NaN];throw s}}function K7(t,e){var n=t.format(e),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[r[3],r[1],r[2],r[4],r[5],r[6]]}var Op={};function Q7(t){if(!Op[t]){var e=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n=e==="06/25/2014, 00:00:00"||e==="‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";Op[t]=n?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return Op[t]}function my(t,e,n,r,i,o,s){var a=new Date(0);return a.setUTCFullYear(t,e,n),a.setUTCHours(r,i,o,s),a}var Fk=36e5,Z7=6e4,Dp={timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function Ef(t,e,n){var r,i;if(!t||(r=Dp.timezoneZ.exec(t),r))return 0;var o;if(r=Dp.timezoneHH.exec(t),r)return o=parseInt(r[1],10),Uk(o)?-(o*Fk):NaN;if(r=Dp.timezoneHHMM.exec(t),r){o=parseInt(r[2],10);var s=parseInt(r[3],10);return Uk(o,s)?(i=Math.abs(o)*Fk+s*Z7,r[1]==="+"?-i:i):NaN}if(eV(t)){e=new Date(e||Date.now());var a=n?e:X7(e),l=n0(a,t),d=n?l:J7(e,l,t);return-d}return NaN}function X7(t){return my(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}function n0(t,e){var n=q7(t,e),r=my(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime(),i=t.getTime(),o=i%1e3;return i-=o>=0?o:1e3+o,r-i}function J7(t,e,n){var r=t.getTime(),i=r-e,o=n0(new Date(i),n);if(e===o)return e;i-=o-e;var s=n0(new Date(i),n);return o===s?o:Math.max(o,s)}function Uk(t,e){return-23<=t&&t<=23&&(e==null||0<=e&&e<=59)}var Wk={};function eV(t){if(Wk[t])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:t}),Wk[t]=!0,!0}catch{return!1}}var tV=60*1e3,nV={X:function(t,e,n,r){var i=Vp(r.timeZone,t);if(i===0)return"Z";switch(e){case"X":return $k(i);case"XXXX":case"XX":return Ss(i);case"XXXXX":case"XXX":default:return Ss(i,":")}},x:function(t,e,n,r){var i=Vp(r.timeZone,t);switch(e){case"x":return $k(i);case"xxxx":case"xx":return Ss(i);case"xxxxx":case"xxx":default:return Ss(i,":")}},O:function(t,e,n,r){var i=Vp(r.timeZone,t);switch(e){case"O":case"OO":case"OOO":return"GMT"+rV(i,":");case"OOOO":default:return"GMT"+Ss(i,":")}},z:function(t,e,n,r){switch(e){case"z":case"zz":case"zzz":return Vk("short",t,r);case"zzzz":default:return Vk("long",t,r)}}};function Vp(t,e){var n=t?Ef(t,e,!0)/tV:e.getTimezoneOffset();if(Number.isNaN(n))throw new RangeError("Invalid time zone specified: "+t);return n}function vh(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}function Ss(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=vh(Math.floor(i/60),2),s=vh(Math.floor(i%60),2);return r+o+n+s}function $k(t,e){if(t%60===0){var n=t>0?"-":"+";return n+vh(Math.abs(t)/60,2)}return Ss(t,e)}function rV(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+vh(o,2)}var mS=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,Fp=36e5,zk=6e4,iV=2,zt={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:mS};function _h(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(t===null)return new Date(NaN);var n=e||{},r=n.additionalDigits==null?iV:h7(n.additionalDigits);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]")return new Date(t.getTime());if(typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]")return new Date(t);if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var i=oV(t),o=sV(i.date,r),s=o.year,a=o.restDateString,l=aV(a,s);if(isNaN(l))return new Date(NaN);if(l){var d=l.getTime(),f=0,m;if(i.time&&(f=lV(i.time),isNaN(f)))return new Date(NaN);if(i.timeZone||n.timeZone){if(m=Ef(i.timeZone||n.timeZone,new Date(d+f)),isNaN(m))return new Date(NaN)}else m=Dk(new Date(d+f)),m=Dk(new Date(d+f+m));return new Date(d+f+m)}else return new Date(NaN)}function oV(t){var e={},n=zt.dateTimePattern.exec(t),r;if(n?(e.date=n[1],r=n[3]):(n=zt.datePattern.exec(t),n?(e.date=n[1],r=n[2]):(e.date=null,r=t)),r){var i=zt.timeZone.exec(r);i?(e.time=r.replace(i[1],""),e.timeZone=i[1].trim()):e.time=r}return e}function sV(t,e){var n=zt.YYY[e],r=zt.YYYYY[e],i;if(i=zt.YYYY.exec(t)||r.exec(t),i){var o=i[1];return{year:parseInt(o,10),restDateString:t.slice(o.length)}}if(i=zt.YY.exec(t)||n.exec(t),i){var s=i[1];return{year:parseInt(s,10)*100,restDateString:t.slice(s.length)}}return{year:null}}function aV(t,e){if(e===null)return null;var n,r,i,o;if(t.length===0)return r=new Date(0),r.setUTCFullYear(e),r;if(n=zt.MM.exec(t),n)return r=new Date(0),i=parseInt(n[1],10)-1,Hk(e,i)?(r.setUTCFullYear(e,i),r):new Date(NaN);if(n=zt.DDD.exec(t),n){r=new Date(0);var s=parseInt(n[1],10);return dV(e,s)?(r.setUTCFullYear(e,0,s),r):new Date(NaN)}if(n=zt.MMDD.exec(t),n){r=new Date(0),i=parseInt(n[1],10)-1;var a=parseInt(n[2],10);return Hk(e,i,a)?(r.setUTCFullYear(e,i,a),r):new Date(NaN)}if(n=zt.Www.exec(t),n)return o=parseInt(n[1],10)-1,qk(e,o)?Bk(e,o):new Date(NaN);if(n=zt.WwwD.exec(t),n){o=parseInt(n[1],10)-1;var l=parseInt(n[2],10)-1;return qk(e,o,l)?Bk(e,o,l):new Date(NaN)}return null}function lV(t){var e,n,r;if(e=zt.HH.exec(t),e)return n=parseFloat(e[1].replace(",",".")),Up(n)?n%24*Fp:NaN;if(e=zt.HHMM.exec(t),e)return n=parseInt(e[1],10),r=parseFloat(e[2].replace(",",".")),Up(n,r)?n%24*Fp+r*zk:NaN;if(e=zt.HHMMSS.exec(t),e){n=parseInt(e[1],10),r=parseInt(e[2],10);var i=parseFloat(e[3].replace(",","."));return Up(n,r,i)?n%24*Fp+r*zk+i*1e3:NaN}return null}function Bk(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var i=r.getUTCDay()||7,o=e*7+n+1-i;return r.setUTCDate(r.getUTCDate()+o),r}var uV=[31,28,31,30,31,30,31,31,30,31,30,31],cV=[31,29,31,30,31,30,31,31,30,31,30,31];function gS(t){return t%400===0||t%4===0&&t%100!==0}function Hk(t,e,n){if(e<0||e>11)return!1;if(n!=null){if(n<1)return!1;var r=gS(t);if(r&&n>cV[e]||!r&&n>uV[e])return!1}return!0}function dV(t,e){if(e<1)return!1;var n=gS(t);return!(n&&e>366||!n&&e>365)}function qk(t,e,n){return!(e<0||e>52||n!=null&&(n<0||n>6))}function Up(t,e,n){return!(t!=null&&(t<0||t>=25)||e!=null&&(e<0||e>=60)||n!=null&&(n<0||n>=60))}var hV=/([xXOz]+)|''|'(''|[^'])+('|$)/g;function fV(t,e,n){var r=String(e),i=n||{},o=r.match(hV);if(o){var s=_h(i.originalDate||t,i);r=o.reduce(function(a,l){if(l[0]==="'")return a;var d=a.indexOf(l),f=a[d-1]==="'",m=a.replace(l,"'"+nV[l[0]](s,l,null,i)+"'");return f?m.substring(0,d-1)+m.substring(d+1):m},r)}return $7(t,r,i)}var r0={exports:{}},i0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o]);return r}t.exports=e.default})(i0,i0.exports);var pV=i0.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(pV);function i(o){return(0,r.default)({},o)}t.exports=e.default})(r0,r0.exports);var mV=r0.exports;const gV=Eu(mV);function yV(t,e,n){var r=_h(t,n),i=Ef(e,r,!0),o=new Date(r.getTime()-i),s=new Date(0);return s.setFullYear(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()),s.setHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),s}function vV(t,e,n){if(typeof t=="string"&&!t.match(mS)){var r=gV(n);return r.timeZone=e,_h(t,r)}var i=_h(t,n),o=my(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()).getTime(),s=Ef(e,new Date(o));return new Date(o+s)}const Yk=V.table`
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
`,Gk=V.div`
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
`,Kk=V.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #666;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px dashed #ddd;
`,_V=({user:t,userData:e})=>{const[n,r]=M.useState(null),[i,o]=M.useState(!0),[s,a]=M.useState(null),{use24HourFormat:l}=hy(),d=(e==null?void 0:e.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila";M.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{if(o(!0),e&&e.schedule&&Array.isArray(e.schedule)&&e.schedule.length>0)console.log("Using schedule from userData prop:",e.schedule),r(e.schedule);else{const T=lt(Ee,"users",t.uid),A=await hu(T);if(A.exists()){const S=A.data();if(S.schedule&&Array.isArray(S.schedule)&&S.schedule.length>0)console.log("Found user schedule in Firestore:",S.schedule),r(S.schedule);else if(S.scheduleId){const y=S.scheduleId,g=lt(Ee,"schedules",y),k=await hu(g);k.exists()&&r(k.data())}else{const y=En(Ee,"schedules"),g=xr(y,ri("isDefault","==",!0)),k=await On(g);k.empty||r(k.docs[0].data())}}}}catch(T){console.error("Error fetching schedule:",T),a("Failed to load schedule. Please try again later.")}finally{o(!1)}})()},[t,e]);const f=_=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][_],m=(_,T=null,A=d)=>{if(!_)return"N/A";try{if(!T||T===A){const[w,I]=_.split(":"),P=new Date;return P.setHours(parseInt(w,10)),P.setMinutes(parseInt(I,10)),P.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!l})}const[S,y]=_.split(":"),g=new Date;g.setHours(0,0,0,0);const k=new Date(g);k.setHours(parseInt(S,10),parseInt(y,10),0,0);const x=vV(k,T),R=yV(x,A);return fV(R,l?"HH:mm":"h:mm a",{timeZone:A})}catch(S){return console.error("Error formatting time:",S),_}},E=(_,T,A)=>{try{const[S,y]=_.split(":").map(Number),g=new Date;g.setHours(0,0,0,0);const k=new Date(g);k.setHours(S,y,0,0);const x=r9(k,T);return l7(x,"HH:mm")}catch(S){console.error("Error calculating end time:",S);let y=(parseInt(_.split(":")[0],10)+T)%24,g=_.split(":")[1];return`${y.toString().padStart(2,"0")}:${g}`}};return h.jsxs(yi,{children:[h.jsx(vi,{children:"My Schedule"}),h.jsx(_i,{children:i?h.jsx("p",{children:"Loading your schedule..."}):s?h.jsxs(Kk,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx(Zn,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]}):n?h.jsx("div",{children:Array.isArray(n)?h.jsxs(h.Fragment,{children:[h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.map((_,T)=>{const A=new Date,y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(_.dayOfWeek),g=A.getDay()===y,k=_.timeRegion||"Asia/Manila",x=m(_.timeIn,k,d),R=_.shiftDuration||8,N=E(_.timeIn,R),w=m(N,k,d);return h.jsxs(Gk,{isToday:g,children:[h.jsxs("h3",{children:[h.jsx(Zn,{weight:"fill",size:20,style:{color:g?"#1a73e8":"#666"}}),_.dayOfWeek]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx(Ws,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:x}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(mu,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx(Ws,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:w}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"0.75rem",backgroundColor:"#f9f9f9",borderRadius:"8px",fontSize:"0.9rem"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Duration"}),h.jsxs("div",{children:[_.shiftDuration," hours"]})]}),h.jsxs("div",{style:{textAlign:"right"},children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Time Zone"}),h.jsx("div",{style:{fontSize:"0.85rem"},children:d})]})]})]},T)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs(Yk,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.map((_,T)=>{const A=new Date,y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(_.dayOfWeek),g=A.getDay()===y,k=_.timeRegion||"Asia/Manila",x=m(_.timeIn,k,d),R=_.shiftDuration||8,N=E(_.timeIn,R),w=m(N,k,d);return h.jsxs("tr",{style:{backgroundColor:g?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:g?"600":"400",color:g?"#1a73e8":"inherit"},children:[_.dayOfWeek,g&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:x}),h.jsx("td",{children:w}),h.jsxs("td",{children:[_.shiftDuration," hours"]})]},T)})})]}),h.jsxs("div",{style:{marginTop:"1rem",fontSize:"0.85rem",color:"#666",textAlign:"right"},children:["All times shown in your local time zone: ",h.jsx("strong",{children:d})]})]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:{marginBottom:"1.5rem",padding:"1rem",backgroundColor:"#f9f9f9",borderRadius:"8px",borderLeft:"4px solid #4CAF50"},children:[h.jsxs("h3",{style:{margin:"0 0 0.5rem 0",display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Zn,{weight:"fill",size:20,style:{color:"#4CAF50"}}),n.name||"Standard Schedule"]}),h.jsx("p",{style:{margin:0,color:"#666"},children:"Your assigned work schedule"})]}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.shifts&&n.shifts.map((_,T)=>{const S=new Date().getDay()===_.day;return h.jsxs(Gk,{isToday:S,children:[h.jsxs("h3",{children:[h.jsx(Zn,{weight:"fill",size:20,style:{color:S?"#1a73e8":"#666"}}),f(_.day)]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx(Ws,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:m(_.timeIn)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(mu,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx(Ws,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:m(_.timeOut)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]})]},T)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs(Yk,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.shifts&&n.shifts.map((_,T)=>{const S=new Date().getDay()===_.day,y=_.timeIn.split(":").map(Number),g=_.timeOut.split(":").map(Number),k=y[0]+y[1]/60;let R=g[0]+g[1]/60-k;R<0&&(R+=24);const N=Math.round(R*10)/10;return h.jsxs("tr",{style:{backgroundColor:S?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:S?"600":"400",color:S?"#1a73e8":"inherit"},children:[f(_.day),S&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:m(_.timeIn)}),h.jsx("td",{children:m(_.timeOut)}),h.jsxs("td",{children:[N," hours"]})]},T)})})]})]})]})}):h.jsxs(Kk,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx(Zn,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]})})]})},kV=V.div`
  margin-bottom: 1.5rem;
`,vs=V.p`
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`,_s=V.strong`
  min-width: 120px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
`,EV=V.h3`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,ks=V.span`
  color: #333;
  word-break: break-word;
`,wV=({user:t,userData:e,loadingUserData:n})=>h.jsxs(yi,{children:[h.jsx(vi,{children:"User Profile"}),h.jsx(_i,{children:n?h.jsx("p",{children:"Loading user data..."}):h.jsx(h.Fragment,{children:h.jsxs(kV,{children:[h.jsxs(EV,{children:[h.jsx(yu,{size:20,weight:"bold"}),"User Information"]}),h.jsxs(vs,{children:[h.jsxs(_s,{children:[h.jsx(_f,{size:18}),"Email:"]}),h.jsx(ks,{children:t==null?void 0:t.email})]}),h.jsxs(vs,{children:[h.jsxs(_s,{children:[h.jsx(lo,{size:18}),"Name:"]}),h.jsx(ks,{children:t==null?void 0:t.displayName})]}),h.jsxs(vs,{children:[h.jsxs(_s,{children:[h.jsx(uy,{size:18}),"User ID:"]}),h.jsx(ks,{children:t==null?void 0:t.uid})]}),h.jsxs(vs,{children:[h.jsxs(_s,{children:[h.jsx(ly,{size:18}),"Position:"]}),h.jsx(ks,{children:(e==null?void 0:e.position)||"Not specified"})]}),h.jsxs(vs,{children:[h.jsxs(_s,{children:[h.jsx(yu,{size:18}),"Role:"]}),h.jsx(ks,{children:(e==null?void 0:e.role)||"Not specified"})]}),e&&h.jsxs(vs,{children:[h.jsxs(_s,{children:[h.jsx(Zn,{size:18}),"Created At:"]}),h.jsx(ks,{children:(()=>{var r,i;try{return(r=e.createdAt)!=null&&r.seconds?new Date(e.createdAt.seconds*1e3).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):(i=e.createdAt)!=null&&i.toDate?e.createdAt.toDate().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):e.createdAt instanceof Date?e.createdAt.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):typeof e.createdAt=="string"?new Date(e.createdAt).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):`${new Date().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})} (Current)`}catch(o){return console.error("Error formatting timestamp:",o,e.createdAt),"April 26, 2025, 04:27 AM"}})()})]})]})})})]}),xV=V.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,TV=V.div`
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
`,IV=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,SV=V.h3`
  font-size: 1.1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,CV=V.span`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,LV=V.div`
  margin-bottom: 1.5rem;
`,Wp=V.div`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
`,$p=V.span`
  font-weight: 500;
  width: 120px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
`,zp=V.span`
  color: #333;
`,AV=V.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`,$u=V.button`
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
`,PV=V($u)`
  background-color: #4caf50;
  color: white;
  
  &:hover {
    background-color: #43a047;
  }
`,RV=V($u)`
  background-color: #f44336;
  color: white;
  
  &:hover {
    background-color: #e53935;
  }
`,bV=V($u)`
  background-color: #2196f3;
  color: white;
  
  &:hover {
    background-color: #1e88e5;
  }
`,jV=V.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`,NV=V.div`
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
`,MV=V.div`
  background-color: white;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,OV=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,DV=V.h3`
  margin: 0;
  font-size: 1.2rem;
`,VV=V.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`,FV=V.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,jc=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Nc=V.label`
  font-weight: 500;
  color: #555;
`,Bp=V.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,UV=V.select`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,WV=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`,$V=V($u)`
  background-color: #6e8efb;
  color: white;
  
  &:hover {
    background-color: #5a7df9;
  }
`,zV=V($u)`
  background-color: #e0e0e0;
  color: #333;
  
  &:hover {
    background-color: #d5d5d5;
  }
`,BV=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #666;
`,HV=t=>{if(!t)return"N/A";try{let e;if(t!=null&&t.seconds)e=new Date(t.seconds*1e3);else if(t!=null&&t.toDate)e=t.toDate();else if(t instanceof Date)e=t;else if(typeof t=="string")e=new Date(t);else return"Invalid date";return e.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}catch(e){return console.error("Error formatting timestamp:",e),"Invalid date"}},qV=()=>{const[t,e]=M.useState([]),[n,r]=M.useState(!0),[i,o]=M.useState(null),[s,a]=M.useState({name:"",email:"",position:"",role:""}),[l,d]=M.useState(!1);M.useEffect(()=>{f()},[]);const f=async()=>{try{r(!0);const y=await mD();e(y)}catch(y){console.error("Error fetching registration requests:",y),Y.error("Failed to load registration requests")}finally{r(!1)}},m=async y=>{try{d(!0),await yD(y),Y.success(`Registration for ${y.name||y.email} approved`),f()}catch(g){console.error("Error approving registration:",g),Y.error("Failed to approve registration")}finally{d(!1)}},E=async y=>{try{d(!0),await vD(y),Y.success(`Registration for ${y.name||y.email} declined`),Y.warning("Note: The user may still exist in Firebase Authentication. They will be blocked from accessing the system, but the account still exists."),f()}catch(g){console.error("Error declining registration:",g),Y.error("Failed to decline registration")}finally{d(!1)}},_=y=>{o(y),a({name:y.name||"",email:y.email||"",position:y.position||"",role:y.role||"user"})},T=()=>{o(null)},A=y=>{const{name:g,value:k}=y.target;a(x=>({...x,[g]:k}))},S=async y=>{y.preventDefault();try{d(!0),await gD(i.id,{name:s.name,email:s.email,position:s.position,role:s.role}),Y.success("Registration request updated"),o(null),f()}catch(g){console.error("Error updating registration request:",g),Y.error("Failed to update registration request")}finally{d(!1)}};return n?h.jsxs(yi,{children:[h.jsx(vi,{children:"Registration Requests"}),h.jsx(_i,{children:h.jsx(BV,{children:"Loading registration requests..."})})]}):h.jsxs(yi,{children:[h.jsx(vi,{children:"Registration Requests"}),h.jsxs(_i,{children:[h.jsx(xV,{children:t.length===0?h.jsx(jV,{children:h.jsx("p",{children:"No pending registration requests"})}):t.map(y=>h.jsxs(TV,{children:[h.jsxs(IV,{children:[h.jsxs(SV,{children:[h.jsx(lo,{size:18,weight:"bold"}),y.name||y.email]}),h.jsxs(CV,{children:[h.jsx(KI,{size:14}),HV(y.createdAt)]})]}),h.jsxs(LV,{children:[h.jsxs(Wp,{children:[h.jsxs($p,{children:[h.jsx(lo,{size:16}),"Email:"]}),h.jsx(zp,{children:y.email})]}),h.jsxs(Wp,{children:[h.jsxs($p,{children:[h.jsx(ly,{size:16}),"Position:"]}),h.jsx(zp,{children:y.position||"Not specified"})]}),h.jsxs(Wp,{children:[h.jsxs($p,{children:[h.jsx(lo,{size:16}),"Role:"]}),h.jsx(zp,{children:y.role||"user"})]})]}),h.jsxs(AV,{children:[h.jsxs(bV,{onClick:()=>_(y),disabled:l,children:[h.jsx(XI,{size:16}),"Edit"]}),h.jsxs(PV,{onClick:()=>m(y),disabled:l,children:[h.jsx(Qi,{size:16}),"Accept"]}),h.jsxs(RV,{onClick:()=>E(y),disabled:l,children:[h.jsx(eS,{size:16}),"Decline"]})]})]},y.id))}),i&&h.jsx(NV,{children:h.jsxs(MV,{children:[h.jsxs(OV,{children:[h.jsx(DV,{children:"Edit Registration Request"}),h.jsx(VV,{onClick:T,children:"×"})]}),h.jsxs(FV,{onSubmit:S,children:[h.jsxs(jc,{children:[h.jsx(Nc,{htmlFor:"name",children:"Name"}),h.jsx(Bp,{type:"text",id:"name",name:"name",value:s.name,onChange:A,placeholder:"Enter name"})]}),h.jsxs(jc,{children:[h.jsx(Nc,{htmlFor:"email",children:"Email"}),h.jsx(Bp,{type:"email",id:"email",name:"email",value:s.email,onChange:A,placeholder:"Enter email",required:!0})]}),h.jsxs(jc,{children:[h.jsx(Nc,{htmlFor:"position",children:"Position"}),h.jsx(Bp,{type:"text",id:"position",name:"position",value:s.position,onChange:A,placeholder:"Enter position"})]}),h.jsxs(jc,{children:[h.jsx(Nc,{htmlFor:"role",children:"Role"}),h.jsxs(UV,{id:"role",name:"role",value:s.role,onChange:A,children:[h.jsx("option",{value:"user",children:"User"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),h.jsxs(WV,{children:[h.jsx(zV,{type:"button",onClick:T,children:"Cancel"}),h.jsx($V,{type:"submit",disabled:l,children:"Save Changes"})]})]})]})})]})]})},YV=V.div`
  padding: 2rem;
`,GV=V.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,KV=V.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,QV=V.thead`
  background-color: #f5f5f5;
`,Hp=V.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`,zi=V.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`,Br=V.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`,Es=V.button`
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
`,ZV=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.role){case"admin":return"#800000";case"superadmin":return"#000000";default:return"#555555"}}};
  color: white;
`,XV=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.status){case"active":return"#4caf50";case"inactive":return"#f44336";case"pending":return"#ff9800";default:return"#9e9e9e"}}};
  color: white;
`,JV=V.input`
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
`,Mc=V.div`
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
`,Oc=V.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,Dc=V.h3`
  margin-top: 0;
  color: #333;
`,eF=V.p`
  margin-bottom: 1.5rem;
  color: #666;
`,Vc=V.div`
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
`,je=V.div`
  margin-bottom: 1rem;
`,tF=V.div`
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
`,Ne=V.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,mt=V.input`
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
`,Bi=V.select`
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
`,nF=V.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,rF=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,iF=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,oF=V.h4`
  margin: 0;
  color: #333;
`,sF=V.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;V.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;const aF=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,ws=V.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;function lF({isSuperAdmin:t}){const[e,n]=M.useState([]),[r,i]=M.useState(!0),[o,s]=M.useState(""),[a,l]=M.useState(!1),[d,f]=M.useState(null),[m,E]=M.useState(!1),[_,T]=M.useState(!1),[A,S]=M.useState(!1),[y,g]=M.useState(1),[k,x]=M.useState(null),[R,N]=M.useState([]),[w,I]=M.useState({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),[P,b]=M.useState(null),[j,O]=M.useState(!1),[C,K]=M.useState({firstName:"",lastName:"",middleInitial:"",email:"",position:"regular",role:"member",dateOfBirth:"",phoneNumber:"",emergencyContactName:"",emergencyContactPhone:"",emergencyContactRelationship:""}),[ie,ee]=M.useState(1),[z,$]=M.useState({firstName:"",lastName:"",middleInitial:"",email:"",position:"regular",role:"member",status:"active",address:"",contactNumber:"",employeeStatus:"regular"}),G=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],J=D=>!D||!Array.isArray(D)||D.length===0?0:D.reduce((ye,me)=>ye+(parseInt(me.shiftDuration,10)||0),0);M.useEffect(()=>{le()},[]);const le=async()=>{try{i(!0);const D=En(Ee,"users"),ye=(await On(D)).docs.map(me=>{const Ie=me.data();return{id:me.id,userId:Ie.userId||me.id,...Ie,schedule:Ie.schedule||[]}});n(ye),i(!1)}catch(D){console.error("Error fetching users:",D),Y.error("Failed to load users"),i(!1)}},ne=D=>{f(D),l(!0)},he=D=>{let ce="",ye="",me="";if(D.name){const Ie=D.name.trim().split(" ");Ie.length===1?ce=Ie[0]:Ie.length===2?(ce=Ie[0],ye=Ie[1]):Ie.length>=3&&(ce=Ie[0],Ie[1].length===2&&Ie[1].endsWith(".")?(me=Ie[1].charAt(0),ye=Ie.slice(2).join(" ")):(me=Ie[1],ye=Ie.slice(2).join(" ")))}K({firstName:ce,lastName:ye,middleInitial:me,email:D.email||"",position:D.position||"",role:D.role||"member",dateOfBirth:D.dateOfBirth||"",phoneNumber:D.phoneNumber||"",emergencyContactName:D.emergencyContactName||"",emergencyContactPhone:D.emergencyContactPhone||"",emergencyContactRelationship:D.emergencyContactRelationship||""}),x(D),ee(1),T(!0)},Fe=async()=>{if(d)try{const D=d.userId||d.id;await Q1(lt(Ee,"users",D)),n(e.filter(ce=>!(ce.userId===d.userId||ce.id===d.id))),Y.success(`User ${d.name||d.email} has been deleted`),l(!1),f(null)}catch(D){console.error("Error deleting user:",D),Y.error(`Failed to delete user: ${D.message}`)}},Pe=()=>{l(!1),f(null)},Qe=async(D,ce)=>{const ye=ce==="active"?"inactive":"active";try{const me=D.userId||D.id,Ie=lt(Ee,"users",me);await Xs(Ie,{status:ye}),n(e.map(st=>st.userId&&st.userId===D.userId||st.id===D.id?{...st,status:ye}:st)),Y.success(`User status updated to ${ye}`)}catch(me){console.error("Error updating user status:",me),Y.error(`Failed to update user status: ${me.message}`)}},Ue=D=>{x(D),N(D.schedule||[]),E(!0),O(!1),b(null)},xt=async()=>{if(k)try{let D=C.firstName;if(C.middleInitial&&(D+=` ${C.middleInitial}.`),C.lastName&&(D+=` ${C.lastName}`),!D.trim()||!C.email.trim()){Y.error("Name and email are required");return}const ce=k.userId||k.id,ye=lt(Ee,"users",ce);await Xs(ye,{name:D.trim(),email:C.email.trim(),position:C.position.trim(),role:C.role,dateOfBirth:C.dateOfBirth,phoneNumber:C.phoneNumber,emergencyContactName:C.emergencyContactName,emergencyContactPhone:C.emergencyContactPhone,emergencyContactRelationship:C.emergencyContactRelationship}),n(e.map(me=>me.userId&&me.userId===k.userId||me.id===k.id?{...me,name:D.trim(),email:C.email.trim(),position:C.position.trim(),role:C.role,dateOfBirth:C.dateOfBirth,phoneNumber:C.phoneNumber,emergencyContactName:C.emergencyContactName,emergencyContactPhone:C.emergencyContactPhone,emergencyContactRelationship:C.emergencyContactRelationship}:me)),Y.success("User information updated successfully"),T(!1),ee(1)}catch(D){console.error("Error updating user:",D),Y.error(`Failed to update user: ${D.message}`)}},Vt=async()=>{try{let D=z.firstName;if(z.middleInitial&&(D+=` ${z.middleInitial}.`),z.lastName&&(D+=` ${z.lastName}`),!D.trim()||!z.email.trim()){Y.error("Name and email are required");return}const ce=Date.now(),ye=Math.random().toString(36).substring(2,8),me=`uid_${ce}_${ye}`,Ie=D.trim().toLowerCase().replace(/\s+/g,"_"),st=`${z.role}_${Ie}_${ce}`,ls=lt(Ee,"users",st);await fu(ls,{userId:me,name:D.trim(),email:z.email.trim(),position:z.position.trim(),role:z.role,status:z.status,address:z.address.trim(),contactNumber:z.contactNumber.trim(),employeeStatus:z.employeeStatus,createdAt:Fu(),schedule:[]});const ba={id:st,userId:me,name:D.trim(),email:z.email.trim(),position:z.position.trim(),role:z.role,status:z.status,address:z.address.trim(),contactNumber:z.contactNumber.trim(),employeeStatus:z.employeeStatus,schedule:[],createdAt:new Date};n([...e,ba]),Y.success(`User ${D.trim()} added successfully`),S(!1),g(1),$({firstName:"",lastName:"",middleInitial:"",email:"",position:"",role:"member",status:"active",address:"",contactNumber:"",employeeStatus:"regular"})}catch(D){console.error("Error adding user:",D),Y.error(`Failed to add user: ${D.message}`)}},Kt=()=>{if(w.selectedDays.length===0){Y.warning("Please select at least one day of the week");return}const D=new Date,[ce,ye]=w.timeIn.split(":").map(Number);D.setHours(ce,ye,0,0);const me=w.selectedDays.map(st=>({id:`${Date.now()}-${st}`,dayOfWeek:st,timeIn:w.timeIn,timeRegion:w.timeRegion,shiftDuration:parseInt(w.shiftDuration,10),utcTimeIn:D.toISOString()})),Ie=[...R,...me];N(Ie),Y.success(`Added schedule for ${w.selectedDays.length} day(s)`),I({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},Tt=async()=>{if(k)try{const D=k.userId||k.id;console.log("Updating schedule for user with document ID:",D);const ce=lt(Ee,"users",D);await Xs(ce,{schedule:R}),n(e.map(ye=>ye.userId&&ye.userId===k.userId||ye.id===k.id?{...ye,schedule:R}:ye)),Y.success("Schedule updated successfully"),E(!1)}catch(D){console.error("Error updating schedule:",D),Y.error(`Failed to update schedule: ${D.message}`)}},It=D=>{const ce=R.filter(ye=>ye.id!==D);N(ce)},Mi=D=>{b(D),O(!0),I({selectedDays:[D.dayOfWeek],timeIn:D.timeIn,timeRegion:D.timeRegion,shiftDuration:D.shiftDuration.toString()})},Oi=()=>{if(!P)return;if(w.selectedDays.length===0){Y.warning("Please select at least one day of the week");return}const D=new Date,[ce,ye]=w.timeIn.split(":").map(Number);D.setHours(ce,ye,0,0);let me=R.filter(st=>st.id!==P.id);const Ie=w.selectedDays.map(st=>({id:st===P.dayOfWeek?P.id:`${Date.now()}-${st}`,dayOfWeek:st,timeIn:w.timeIn,timeRegion:w.timeRegion,shiftDuration:parseInt(w.shiftDuration,10),utcTimeIn:D.toISOString()}));me=[...me,...Ie],N(me),Y.success(`Updated schedule for ${w.selectedDays.length} day(s)`),I({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),O(!1),b(null)},Di=()=>{O(!1),b(null),I({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},ot=e.filter(D=>{const ce=o.toLowerCase();return D.name&&D.name.toLowerCase().includes(ce)||D.email&&D.email.toLowerCase().includes(ce)||D.role&&D.role.toLowerCase().includes(ce)||D.position&&D.position.toLowerCase().includes(ce)});return h.jsxs(YV,{children:[h.jsxs(GV,{children:[h.jsx(_u,{size:24,weight:"bold"}),"User Management"]}),h.jsx(aF,{children:h.jsx(JV,{type:"text",placeholder:"Search users...",value:o,onChange:D=>s(D.target.value)})}),r?h.jsx("p",{children:"Loading users..."}):h.jsxs(KV,{children:[h.jsx(QV,{children:h.jsxs(Hp,{children:[h.jsx(zi,{children:"Name"}),h.jsx(zi,{children:"Email"}),h.jsx(zi,{children:"Position"}),h.jsx(zi,{children:"Role"}),h.jsx(zi,{children:"Status"}),h.jsx(zi,{children:"Shifts"}),h.jsx(zi,{children:"Actions"})]})}),h.jsx("tbody",{children:ot.length>0?ot.map(D=>h.jsxs(Hp,{children:[h.jsx(Br,{children:D.name||"N/A"}),h.jsx(Br,{children:D.email}),h.jsx(Br,{children:D.position||"N/A"}),h.jsx(Br,{children:h.jsx(ZV,{role:D.role,children:D.role||"member"})}),h.jsx(Br,{children:h.jsx(XV,{status:D.status||"active",children:D.status||"active"})}),h.jsx(Br,{children:D.schedule&&Array.isArray(D.schedule)?h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx("strong",{children:D.schedule.length})," shifts"]}),h.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[J(D.schedule)," total hours"]})]}):"No shifts"}),h.jsxs(Br,{children:[h.jsx(Es,{color:"#000000",onClick:()=>Ue(D),title:"Manage Schedule",children:h.jsx(Zn,{size:20})}),h.jsx(Es,{color:"#1a73e8",onClick:()=>he(D),title:"Edit User",children:h.jsx(Eg,{size:20})}),h.jsx(Es,{color:D.status==="active"?"#f44336":"#4caf50",onClick:()=>Qe(D,D.status||"active"),title:D.status==="active"?"Deactivate user":"Activate user",children:D.status==="active"?h.jsx(ku,{size:20}):h.jsx(gu,{size:20})}),h.jsx(Es,{color:"#f44336",onClick:()=>ne(D),title:"Delete user",children:h.jsx(wg,{size:20})})]})]},D.id)):h.jsx(Hp,{children:h.jsx(Br,{colSpan:6,style:{textAlign:"center"},children:"No users found"})})})]}),a&&h.jsx(Mc,{children:h.jsxs(Oc,{children:[h.jsx(Dc,{children:"Confirm Deletion"}),h.jsxs(eF,{children:["Are you sure you want to delete the user ",(d==null?void 0:d.name)||(d==null?void 0:d.email),"? This action cannot be undone."]}),h.jsxs(Vc,{children:[h.jsx(Wt,{onClick:Pe,children:"Cancel"}),h.jsx(Wt,{primary:!0,onClick:Fe,children:"Delete"})]})]})}),_&&k&&h.jsx(Mc,{children:h.jsxs(Oc,{style:{maxWidth:"500px",width:"100%"},children:[h.jsx(Dc,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(yu,{size:24}),"Edit User: ",k.name||k.email," ",ie>1&&`- Page ${ie} of 2`]})}),ie===1&&h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(je,{children:[h.jsx(Ne,{children:"First Name"}),h.jsx(mt,{type:"text",value:C.firstName,onChange:D=>K({...C,firstName:D.target.value}),placeholder:"First Name"})]}),h.jsxs(je,{children:[h.jsx(Ne,{children:"Middle Initial"}),h.jsx(mt,{type:"text",value:C.middleInitial,onChange:D=>K({...C,middleInitial:D.target.value}),placeholder:"Middle Initial",maxLength:1}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Just the first letter, without period"})]}),h.jsxs(je,{children:[h.jsx(Ne,{children:"Last Name"}),h.jsx(mt,{type:"text",value:C.lastName,onChange:D=>K({...C,lastName:D.target.value}),placeholder:"Last Name"})]}),h.jsxs(je,{children:[h.jsx(Ne,{children:"Email"}),h.jsx(mt,{type:"email",value:C.email,onChange:D=>K({...C,email:D.target.value}),placeholder:"Email Address"})]}),h.jsxs(je,{children:[h.jsx(Ne,{children:"Position"}),h.jsxs(Bi,{value:C.position,onChange:D=>K({...C,position:D.target.value}),children:[h.jsx("option",{value:"regular",children:"Regular"}),h.jsx("option",{value:"probationary",children:"Probationary"}),h.jsx("option",{value:"intern",children:"Intern"})]})]}),h.jsxs(je,{children:[h.jsxs(Ne,{children:["Role ",!t&&h.jsx("span",{style:{fontSize:"0.8rem",color:"#f44336"},children:"(Super Admin only)"})]}),h.jsxs(Bi,{value:C.role,onChange:D=>K({...C,role:D.target.value}),disabled:!t,style:t?{}:{backgroundColor:"#f5f5f5",cursor:"not-allowed"},children:[h.jsx("option",{value:"member",children:"Member"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]}),!t&&h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Only Super Admins can change user roles"})]})]}),ie===2&&h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(je,{children:[h.jsx(Ne,{children:"Date of Birth"}),h.jsx(mt,{type:"date",value:C.dateOfBirth,onChange:D=>K({...C,dateOfBirth:D.target.value})})]}),h.jsxs(je,{children:[h.jsx(Ne,{children:"Phone #"}),h.jsx(mt,{type:"text",value:C.phoneNumber,onChange:D=>K({...C,phoneNumber:D.target.value}),placeholder:"Phone Number"})]}),h.jsxs(je,{children:[h.jsx(Ne,{children:"Emergency Contact Name"}),h.jsx(mt,{type:"text",value:C.emergencyContactName,onChange:D=>K({...C,emergencyContactName:D.target.value}),placeholder:"Emergency Contact Name"})]}),h.jsxs(je,{children:[h.jsx(Ne,{children:"Emergency Contact Phone"}),h.jsx(mt,{type:"text",value:C.emergencyContactPhone,onChange:D=>K({...C,emergencyContactPhone:D.target.value}),placeholder:"Emergency Contact Phone"})]}),h.jsxs(je,{children:[h.jsx(Ne,{children:"Relationship"}),h.jsx(mt,{type:"text",value:C.emergencyContactRelationship,onChange:D=>K({...C,emergencyContactRelationship:D.target.value}),placeholder:"Relationship to Employee"})]})]}),h.jsx(Vc,{children:ie===1?h.jsxs(h.Fragment,{children:[h.jsx(Wt,{onClick:()=>T(!1),children:"Cancel"}),h.jsxs(Wt,{primary:!0,onClick:()=>ee(2),children:[h.jsx(ws,{children:h.jsx(mu,{size:16})}),"Next"]})]}):h.jsxs(h.Fragment,{children:[h.jsxs(Wt,{onClick:()=>ee(1),children:[h.jsx(ws,{children:h.jsx(dh,{size:16})}),"Back"]}),h.jsxs(Wt,{primary:!0,onClick:xt,children:[h.jsx(ws,{children:h.jsx(kg,{size:16})}),"Save Changes"]})]})})]})}),A&&h.jsx(Mc,{children:h.jsxs(Oc,{style:{maxWidth:"500px",width:"100%"},children:[h.jsx(Dc,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(yu,{size:24}),"Add New User ",y>1&&`- Page ${y} of 2`]})}),y===1&&h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(je,{children:[h.jsxs(Ne,{children:["First Name ",h.jsx("span",{style:{color:"red"},children:"*"})]}),h.jsx(mt,{type:"text",value:z.firstName,onChange:D=>$({...z,firstName:D.target.value}),placeholder:"First Name",required:!0})]}),h.jsxs(je,{children:[h.jsx(Ne,{children:"Middle Initial"}),h.jsx(mt,{type:"text",value:z.middleInitial,onChange:D=>$({...z,middleInitial:D.target.value}),placeholder:"Middle Initial",maxLength:1}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Just the first letter, without period"})]}),h.jsxs(je,{children:[h.jsxs(Ne,{children:["Last Name ",h.jsx("span",{style:{color:"red"},children:"*"})]}),h.jsx(mt,{type:"text",value:z.lastName,onChange:D=>$({...z,lastName:D.target.value}),placeholder:"Last Name",required:!0})]}),h.jsxs(je,{children:[h.jsxs(Ne,{children:["Email ",h.jsx("span",{style:{color:"red"},children:"*"})]}),h.jsx(mt,{type:"email",value:z.email,onChange:D=>$({...z,email:D.target.value}),placeholder:"Email Address",required:!0})]}),h.jsxs(je,{children:[h.jsx(Ne,{children:"Position"}),h.jsxs(Bi,{value:z.position,onChange:D=>$({...z,position:D.target.value}),children:[h.jsx("option",{value:"regular",children:"Regular"}),h.jsx("option",{value:"probationary",children:"Probationary"}),h.jsx("option",{value:"intern",children:"Intern"})]})]}),h.jsxs(je,{children:[h.jsxs(Ne,{children:["Role ",!t&&h.jsx("span",{style:{fontSize:"0.8rem",color:"#f44336"},children:"(Super Admin only)"})]}),h.jsxs(Bi,{value:z.role,onChange:D=>$({...z,role:D.target.value}),disabled:!t,style:t?{}:{backgroundColor:"#f5f5f5",cursor:"not-allowed"},children:[h.jsx("option",{value:"member",children:"Member"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]}),!t&&h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Only Super Admins can change user roles"})]}),h.jsxs(je,{children:[h.jsx(Ne,{children:"Status"}),h.jsxs(Bi,{value:z.status,onChange:D=>$({...z,status:D.target.value}),children:[h.jsx("option",{value:"active",children:"Active"}),h.jsx("option",{value:"inactive",children:"Inactive"}),h.jsx("option",{value:"pending",children:"Pending"})]})]})]}),y===2&&h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(je,{children:[h.jsx(Ne,{children:"Address"}),h.jsx(mt,{type:"text",value:z.address,onChange:D=>$({...z,address:D.target.value}),placeholder:"Complete Address"})]}),h.jsxs(je,{children:[h.jsx(Ne,{children:"Contact Number"}),h.jsx(mt,{type:"text",value:z.contactNumber,onChange:D=>$({...z,contactNumber:D.target.value}),placeholder:"Contact Number"})]}),h.jsxs(je,{children:[h.jsx(Ne,{children:"Employee Status"}),h.jsxs(Bi,{value:z.employeeStatus,onChange:D=>$({...z,employeeStatus:D.target.value}),children:[h.jsx("option",{value:"regular",children:"Regular"}),h.jsx("option",{value:"probationary",children:"Probationary"}),h.jsx("option",{value:"intern",children:"Intern"})]})]})]}),h.jsx(Vc,{children:y===1?h.jsxs(h.Fragment,{children:[h.jsx(Wt,{onClick:()=>S(!1),children:"Cancel"}),h.jsxs(Wt,{primary:!0,onClick:()=>g(2),children:[h.jsx(ws,{children:h.jsx(mu,{size:16})}),"Next"]})]}):h.jsxs(h.Fragment,{children:[h.jsxs(Wt,{onClick:()=>g(1),children:[h.jsx(ws,{children:h.jsx(dh,{size:16})}),"Back"]}),h.jsxs(Wt,{primary:!0,onClick:Vt,children:[h.jsx(ws,{children:h.jsx(kg,{size:16})}),"Add User"]})]})})]})}),m&&k&&h.jsx(Mc,{children:h.jsxs(Oc,{style:{maxWidth:"600px",width:"100%"},children:[h.jsx(Dc,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Zn,{size:24}),"Manage Schedule for ",k.name||k.email]})}),h.jsx("div",{style:{marginBottom:"1rem",background:"#f5f9ff",padding:"0.75rem",borderRadius:"6px"},children:h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Total Shifts:"})," ",R.length]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Total Hours:"})," ",J(R)," hours/week"]})]})}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Current Schedule"}),R.length>0?h.jsx(nF,{children:R.map(D=>h.jsxs(rF,{children:[h.jsxs(iF,{children:[h.jsx(oF,{children:D.dayOfWeek}),h.jsxs("div",{children:[h.jsx(Es,{color:"#000000",onClick:()=>Mi(D),title:"Edit schedule",style:{marginRight:"4px"},children:h.jsx(Eg,{size:16})}),h.jsx(Es,{color:"#f44336",onClick:()=>It(D.id),title:"Delete schedule",children:h.jsx(wg,{size:16})})]})]}),h.jsxs(sF,{children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Time In:"})," ",D.timeIn]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Region:"})," ",D.timeRegion]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Duration:"})," ",D.shiftDuration," hours"]})]})]},D.id))}):h.jsx("p",{children:"No schedules found. Add a new schedule below."})]}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:j?"Edit Schedule":"Add New Schedule"}),h.jsxs(je,{children:[h.jsx(Ne,{children:"Days of Week (select multiple)"}),h.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:G.map(D=>h.jsxs(tF,{children:[h.jsx("input",{type:"checkbox",id:`day-${D}`,checked:w.selectedDays.includes(D),onChange:()=>{const ce=w.selectedDays.includes(D)?w.selectedDays.filter(ye=>ye!==D):[...w.selectedDays,D];I({...w,selectedDays:ce})}}),h.jsx("label",{htmlFor:`day-${D}`,children:D})]},D))})]}),h.jsxs(je,{children:[h.jsx(Ne,{children:"Time In"}),h.jsx(mt,{type:"time",value:w.timeIn,onChange:D=>I({...w,timeIn:D.target.value})})]}),h.jsxs(je,{children:[h.jsx(Ne,{children:"Time Region"}),h.jsxs(Bi,{value:w.timeRegion,onChange:D=>I({...w,timeRegion:D.target.value}),children:[h.jsxs("optgroup",{label:"Asia & Pacific",children:[h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT)"}),h.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore (SGT)"}),h.jsx("option",{value:"Asia/Tokyo",children:"Asia/Tokyo (JST)"}),h.jsx("option",{value:"Australia/Sydney",children:"Australia/Sydney (AEST/AEDT)"})]}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific)"}),h.jsx("option",{value:"America/Anchorage",children:"America/Anchorage (Alaska)"}),h.jsx("option",{value:"America/Adak",children:"America/Adak (Hawaii-Aleutian)"}),h.jsx("option",{value:"Pacific/Honolulu",children:"Pacific/Honolulu (Hawaii)"}),h.jsx("option",{value:"America/Phoenix",children:"America/Phoenix (Arizona)"}),h.jsx("option",{value:"America/Toronto",children:"America/Toronto (Eastern Canada)"}),h.jsx("option",{value:"America/Vancouver",children:"America/Vancouver (Pacific Canada)"})]}),h.jsxs("optgroup",{label:"Europe & Africa",children:[h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST)"}),h.jsx("option",{value:"Europe/Paris",children:"Europe/Paris (CET/CEST)"}),h.jsx("option",{value:"Europe/Berlin",children:"Europe/Berlin (CET/CEST)"}),h.jsx("option",{value:"Europe/Moscow",children:"Europe/Moscow (MSK)"})]})]})]}),h.jsxs(je,{children:[h.jsx(Ne,{children:"Shift Duration (hours)"}),h.jsx(mt,{type:"number",min:"1",max:"24",value:w.shiftDuration,onChange:D=>I({...w,shiftDuration:D.target.value})})]}),h.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:j?h.jsxs(h.Fragment,{children:[h.jsx(Wt,{primary:!0,onClick:Oi,children:"Update Schedule"}),h.jsx(Wt,{onClick:Di,children:"Cancel Edit"})]}):h.jsx(Wt,{primary:!0,onClick:Kt,children:"Add Schedule"})})]}),h.jsxs(Vc,{children:[h.jsx(Wt,{onClick:()=>E(!1),children:"Cancel"}),h.jsx(Wt,{primary:!0,onClick:Tt,children:"Save Changes"})]})]})})]})}const uF=V.div`
  padding: 2rem;
`,cF=V.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,dF=V.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,hF=V.thead`
  background-color: #f5f5f5;
`,Qk=V.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`,Fc=V.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`,Uc=V.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`,Zk=V.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Xk=V.button`
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
`,Jk=V.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`,qp=V.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`,eE=V.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,fF=V.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-style: italic;
`;function pF(){const[t,e]=M.useState([]),[n,r]=M.useState(!0),[i,o]=M.useState(!1);M.useEffect(()=>{s()},[]);const s=async()=>{try{r(!0);const l=En(Ee,"users"),f=(await On(l)).docs.filter(m=>m.data().role==="admin").map(m=>{var _,T;const E=m.data();return{id:m.id,userId:E.userId||m.id,name:E.name||"N/A",email:E.email||"N/A",privileges:{canManageUsers:((_=E.privileges)==null?void 0:_.canManageUsers)!==!1,canManageRegistrations:((T=E.privileges)==null?void 0:T.canManageRegistrations)!==!1}}});e(f)}catch(l){console.error("Error fetching admins:",l),Y.error("Failed to load admin users")}finally{r(!1)}},a=async(l,d,f)=>{if(!i)try{o(!0);const m=t.find(A=>A.id===l||A.userId===l);if(!m){Y.error("Admin not found");return}const E=m.userId||m.id,_=lt(Ee,"users",E),T={privileges:{...m.privileges||{},[d]:!f}};await Xs(_,T),e(t.map(A=>A.id===l||A.userId===l?{...A,privileges:{...A.privileges,[d]:!f}}:A)),Y.success("Privilege updated successfully")}catch(m){console.error("Error updating privilege:",m),Y.error(`Failed to update privilege: ${m.message}`)}finally{o(!1)}};return h.jsxs(uF,{children:[h.jsxs(cF,{children:[h.jsx(qp,{children:h.jsx(cy,{size:24,weight:"bold"})}),"Admin Privileges"]}),n?h.jsx("p",{children:"Loading admins..."}):h.jsx(h.Fragment,{children:t.length>0?h.jsxs(dF,{children:[h.jsx(hF,{children:h.jsxs(Qk,{children:[h.jsx(Fc,{children:"Name"}),h.jsx(Fc,{children:"Email"}),h.jsx(Fc,{children:"User Management"}),h.jsx(Fc,{children:"Registration Requests"})]})}),h.jsx("tbody",{children:t.map(l=>{var d,f,m,E;return h.jsxs(Qk,{children:[h.jsx(Uc,{children:l.name}),h.jsx(Uc,{children:l.email}),h.jsx(Uc,{children:h.jsxs(Zk,{children:[h.jsxs(eE,{children:[h.jsx(qp,{children:h.jsx(_u,{size:16})}),"Access"]}),h.jsx(Xk,{enabled:(d=l.privileges)==null?void 0:d.canManageUsers,onClick:()=>{var _;return a(l.id,"canManageUsers",(_=l.privileges)==null?void 0:_.canManageUsers)},disabled:i,children:h.jsx(Jk,{children:(f=l.privileges)!=null&&f.canManageUsers?h.jsx(gu,{size:16}):h.jsx(ku,{size:16})})})]})}),h.jsx(Uc,{children:h.jsxs(Zk,{children:[h.jsxs(eE,{children:[h.jsx(qp,{children:h.jsx(vu,{size:16})}),"Access"]}),h.jsx(Xk,{enabled:(m=l.privileges)==null?void 0:m.canManageRegistrations,onClick:()=>{var _;return a(l.id,"canManageRegistrations",(_=l.privileges)==null?void 0:_.canManageRegistrations)},disabled:i,children:h.jsx(Jk,{children:(E=l.privileges)!=null&&E.canManageRegistrations?h.jsx(gu,{size:16}):h.jsx(ku,{size:16})})})]})})]},l.id||l.userId)})})]}):h.jsx(fF,{children:"No admin users found. Add admin users in the User Management section."})})]})}const mF=V.div`
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
`,gF=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 400px;
  padding: 1.5rem;
`,yF=V.h3`
  color: #333;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
`,vF=V.div`
  margin-bottom: 1.5rem;
`,_F=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`,yS=V.button`
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
`,kF=V(yS)`
  background-color: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #eee;
  }
`,EF=V(yS)`
  background-color: #4caf50;
  color: white;
  border: 1px solid #43a047;
  
  &:hover {
    background-color: #43a047;
  }
`,wF=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`,xF=V.textarea`
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

`;function TF(){var j,O;const[t,e]=M.useState(null),[n,r]=M.useState("dashboard"),[i,o]=M.useState(null),[s,a]=M.useState(null),[l,d]=M.useState(!1),[f,m]=M.useState(null),[E,_]=M.useState(!1),T=Ia();M.useEffect(()=>{const C=Vn.currentUser;if(C){const K={uid:C.uid,email:C.email,displayName:C.displayName||C.email.split("@")[0]};e(K),A(C.uid)}},[]);const A=async C=>{if(C)try{_(!0);try{const ee=xr(En(Ee,"declined_registrations"),ri("userId","==",C));if(!(await On(ee)).empty){Y.error("Your registration request has been declined. Please contact an administrator."),await Vn.signOut(),T("/login");return}}catch(ee){console.error("Error checking declined status:",ee)}try{const ee=xr(En(Ee,"registration_requests"),ri("userId","==",C));if(!(await On(ee)).empty){Y.info("Your registration request is pending approval. You will be notified when approved."),await Vn.signOut(),T("/login");return}}catch(ee){console.error("Error checking pending status:",ee)}const K=lt(Ee,"users",C),ie=await hu(K);if(ie.exists()){const ee=ie.data();m(ee)}else console.log("No user data found in Firestore"),Y.error("Your account is not properly set up. Please contact an administrator."),await Vn.signOut(),T("/login")}catch(K){console.error("Error fetching user data:",K),Y.error("Error loading user data. Please try again later.")}finally{_(!1)}};M.useEffect(()=>{t!=null&&t.uid&&S()},[t]);const S=async()=>{try{const C=En(Ee,"attendance");try{const K=xr(C,ri("userId","==",t.uid),G1("timestamp","desc"),f3(1)),ie=await On(K);if(ie.empty)o(null),a(null);else{const ee=ie.docs[0].data();a(ee),o(ee.type)}}catch(K){if(K.message&&K.message.includes("index is currently building")){console.log("Index is still building, using fallback method");const ie=xr(C,ri("userId","==",t.uid)),ee=await On(ie);if(ee.empty)o(null),a(null);else{let z=null,$=new Date(0);ee.forEach(G=>{var ne;const J=G.data(),le=((ne=J.timestamp)==null?void 0:ne.toDate())||new Date(0);le>$&&($=le,z=J)}),z?(a(z),o(z.type)):(o(null),a(null))}Y.info("System is updating. Some features may be temporarily limited.",{autoClose:5e3,hideProgressBar:!1})}else throw K}}catch(C){console.error("Error fetching attendance status:",C),C.message&&C.message.includes("index")?Y.warning("System is updating attendance records. Please try again in a few minutes."):Y.error("Unable to fetch your attendance status. Please refresh the page.")}},[y,g]=M.useState(!1),[k,x]=M.useState(null),[R,N]=M.useState(""),w=async(C,K)=>{if(C==="Out")return"Complete";try{const ie=await hu(lt(Ee,"users",K));if(!ie.exists())return console.warn("User document not found when determining status"),"On Time";const z=ie.data().schedule||[],$=new Date,G=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][$.getDay()],J=z&&Array.isArray(z)?z.find(Pe=>Pe.dayOfWeek===G):null;if(!J)return console.log("No schedule found for today:",G),"On Time";console.log("Found schedule for today:",J);const[le,ne]=J.timeIn.split(":").map(Number),he=new Date;he.setHours(le,ne,0,0);const Fe=Math.round(($-he)/(1e3*60));return console.log("Time difference in minutes:",Fe),Fe<-15?"Early":Fe<=15?"On Time":"Late"}catch(ie){return console.error("Error determining status:",ie),"On Time"}},I=async C=>{if(t){d(!0);try{const K=it.now(),ie=await w(C,t.uid),ee={userId:t.uid,email:t.email,name:t.displayName,type:C,status:ie,timestamp:K,notes:""};N(""),x(ee),g(!0)}catch(K){console.error("Error preparing time in/out:",K),Y.error("Failed to prepare time in/out. Please try again.")}finally{d(!1)}}},P=async()=>{if(k){d(!0);try{const{status:C,...K}=k;K.notes=R;const ie=await YT(En(Ee,"attendance"),K);Y.success(`Time ${k.type} recorded successfully!`),o(k.type);const ee={...k,notes:R};a(ee),g(!1),x(null),N(""),console.log(`Time ${k.type} recorded with ID: ${ie.id}`)}catch(C){console.error(`Error recording time ${k.type}:`,C),Y.error(`Failed to record time ${k.type}`)}finally{d(!1)}}},b=()=>{g(!1),x(null),N("")};return h.jsxs(h.Fragment,{children:[h.jsxs(KD,{user:t,activeTab:n,setActiveTab:r,attendanceStatus:i,loading:l,handleTimeInOut:I,lastRecord:s,isSuperAdmin:(f==null?void 0:f.role)==="super_admin",userData:f,setUserData:m,children:[n==="dashboard"&&h.jsx(XD,{attendanceStatus:i,lastRecord:s}),n==="attendance"&&h.jsx(t9,{user:t}),n==="schedule"&&h.jsx(_V,{user:t,userData:f}),n==="profile"&&h.jsx(wV,{user:t,userData:f,loadingUserData:E}),n==="registration_requests"&&((f==null?void 0:f.role)==="super_admin"||(f==null?void 0:f.role)==="admin"&&((j=f==null?void 0:f.privileges)==null?void 0:j.canManageRegistrations)!==!1)&&h.jsx(qV,{}),n==="user_management"&&((f==null?void 0:f.role)==="super_admin"||(f==null?void 0:f.role)==="admin"&&((O=f==null?void 0:f.privileges)==null?void 0:O.canManageUsers)!==!1)&&h.jsx(lF,{isSuperAdmin:(f==null?void 0:f.role)==="super_admin"}),n==="admin_privileges"&&(f==null?void 0:f.role)==="super_admin"&&h.jsx(pF,{})]}),y&&k&&h.jsx(mF,{children:h.jsxs(gF,{children:[h.jsxs(yF,{children:["Confirm Time ",k.type]}),h.jsxs(vF,{children:[h.jsxs("p",{children:[h.jsx("strong",{children:"Time:"})," ",k.timestamp.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0})]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Date:"})," ",k.timestamp.toDate().toLocaleDateString()]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Status:"}),h.jsx(wF,{status:k.status,children:k.status})]}),h.jsxs("div",{style:{marginTop:"1rem"},children:[h.jsx("strong",{children:"Notes (Optional):"}),h.jsx(xF,{value:R,onChange:C=>N(C.target.value),placeholder:"Add any notes about this attendance record..."})]})]}),h.jsxs(_F,{children:[h.jsxs(kF,{onClick:b,children:[h.jsx(ku,{size:16,style:{marginRight:"4px"}}),"Cancel"]}),h.jsxs(EF,{onClick:P,children:[h.jsx(gu,{size:16,style:{marginRight:"4px"}}),"Confirm"]})]})]})})]})}const IF=({children:t})=>{const{currentUser:e,loading:n}=kI();return n?h.jsx(SF,{children:"Loading..."}):e?t:h.jsx(Tx,{to:"/",replace:!0})},SF=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #6e8efb;
  background-color: #f5f5f5;
`;function CF(){return h.jsx(h.Fragment,{children:h.jsx(pM,{children:h.jsxs(AD,{children:[h.jsx(mL,{children:h.jsxs(lL,{children:[h.jsx(ul,{path:"/",element:h.jsx(fD,{})}),h.jsx(ul,{path:"/register",element:h.jsx(LD,{})}),h.jsx(ul,{path:"/dashboard",element:h.jsx(IF,{children:h.jsx(TF,{})})}),h.jsx(ul,{path:"*",element:h.jsx(Tx,{to:"/",replace:!0})})]})}),h.jsx(_g,{position:"top-right",autoClose:3e3})]})})})}fx(document.getElementById("root")).render(h.jsx(M.StrictMode,{children:h.jsx(CF,{})}));
