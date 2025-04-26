function e4(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Iu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var uE={exports:{}},Sh={},cE={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Su=Symbol.for("react.element"),t4=Symbol.for("react.portal"),n4=Symbol.for("react.fragment"),r4=Symbol.for("react.strict_mode"),i4=Symbol.for("react.profiler"),o4=Symbol.for("react.provider"),s4=Symbol.for("react.context"),a4=Symbol.for("react.forward_ref"),l4=Symbol.for("react.suspense"),u4=Symbol.for("react.memo"),c4=Symbol.for("react.lazy"),_v=Symbol.iterator;function d4(t){return t===null||typeof t!="object"?null:(t=_v&&t[_v]||t["@@iterator"],typeof t=="function"?t:null)}var dE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hE=Object.assign,fE={};function xa(t,e,n){this.props=t,this.context=e,this.refs=fE,this.updater=n||dE}xa.prototype.isReactComponent={};xa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function pE(){}pE.prototype=xa.prototype;function pg(t,e,n){this.props=t,this.context=e,this.refs=fE,this.updater=n||dE}var mg=pg.prototype=new pE;mg.constructor=pg;hE(mg,xa.prototype);mg.isPureReactComponent=!0;var Ev=Array.isArray,mE=Object.prototype.hasOwnProperty,gg={current:null},gE={key:!0,ref:!0,__self:!0,__source:!0};function yE(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)mE.call(e,r)&&!gE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Su,type:t,key:o,ref:s,props:i,_owner:gg.current}}function h4(t,e){return{$$typeof:Su,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Su}function f4(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wv=/\/+/g;function Bf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?f4(""+t.key):e.toString(36)}function Yc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Su:case t4:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Bf(s,0):r,Ev(i)?(n="",t!=null&&(n=t.replace(wv,"$&/")+"/"),Yc(i,e,n,"",function(d){return d})):i!=null&&(yg(i)&&(i=h4(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(wv,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Ev(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Bf(o,a);s+=Yc(o,e,n,l,i)}else if(l=d4(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Bf(o,a++),s+=Yc(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function uc(t,e,n){if(t==null)return t;var r=[],i=0;return Yc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function p4(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Gc={transition:null},m4={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Gc,ReactCurrentOwner:gg};function vE(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:uc,forEach:function(t,e,n){uc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return uc(t,function(){e++}),e},toArray:function(t){return uc(t,function(e){return e})||[]},only:function(t){if(!yg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=xa;de.Fragment=n4;de.Profiler=i4;de.PureComponent=pg;de.StrictMode=r4;de.Suspense=l4;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m4;de.act=vE;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=hE({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=gg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)mE.call(e,l)&&!gE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var d=0;d<l;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Su,type:t.type,key:i,ref:o,props:r,_owner:s}};de.createContext=function(t){return t={$$typeof:s4,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:o4,_context:t},t.Consumer=t};de.createElement=yE;de.createFactory=function(t){var e=yE.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:a4,render:t}};de.isValidElement=yg;de.lazy=function(t){return{$$typeof:c4,_payload:{_status:-1,_result:t},_init:p4}};de.memo=function(t,e){return{$$typeof:u4,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=Gc.transition;Gc.transition={};try{t()}finally{Gc.transition=e}};de.unstable_act=vE;de.useCallback=function(t,e){return qt.current.useCallback(t,e)};de.useContext=function(t){return qt.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};de.useEffect=function(t,e){return qt.current.useEffect(t,e)};de.useId=function(){return qt.current.useId()};de.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return qt.current.useMemo(t,e)};de.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};de.useRef=function(t){return qt.current.useRef(t)};de.useState=function(t){return qt.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return qt.current.useTransition()};de.version="18.3.1";cE.exports=de;var M=cE.exports;const c=Iu(M),g4=e4({__proto__:null,default:c},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y4=M,v4=Symbol.for("react.element"),k4=Symbol.for("react.fragment"),_4=Object.prototype.hasOwnProperty,E4=y4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w4={key:!0,ref:!0,__self:!0,__source:!0};function kE(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)_4.call(e,r)&&!w4.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:v4,type:t,key:o,ref:s,props:i,_owner:E4.current}}Sh.Fragment=k4;Sh.jsx=kE;Sh.jsxs=kE;uE.exports=Sh;var h=uE.exports,_E={exports:{}},vn={},EE={exports:{}},wE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,G){var J=$.length;$.push(G);e:for(;0<J;){var le=J-1>>>1,ne=$[le];if(0<i(ne,G))$[le]=G,$[J]=ne,J=le;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var G=$[0],J=$.pop();if(J!==G){$[0]=J;e:for(var le=0,ne=$.length,he=ne>>>1;le<he;){var Fe=2*(le+1)-1,Pe=$[Fe],Qe=Fe+1,We=$[Qe];if(0>i(Pe,J))Qe<ne&&0>i(We,Pe)?($[le]=We,$[Qe]=J,le=Qe):($[le]=Pe,$[Fe]=J,le=Fe);else if(Qe<ne&&0>i(We,J))$[le]=We,$[Qe]=J,le=Qe;else break e}}return G}function i($,G){var J=$.sortIndex-G.sortIndex;return J!==0?J:$.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],d=[],f=1,m=null,E=3,k=!1,T=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _($){for(var G=n(d);G!==null;){if(G.callback===null)r(d);else if(G.startTime<=$)r(d),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(d)}}function x($){if(A=!1,_($),!T)if(n(l)!==null)T=!0,ee(R);else{var G=n(d);G!==null&&z(x,G.startTime-$)}}function R($,G){T=!1,A&&(A=!1,y(I),I=-1),k=!0;var J=E;try{for(_(G),m=n(l);m!==null&&(!(m.expirationTime>G)||$&&!j());){var le=m.callback;if(typeof le=="function"){m.callback=null,E=m.priorityLevel;var ne=le(m.expirationTime<=G);G=t.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(l)&&r(l),_(G)}else r(l);m=n(l)}if(m!==null)var he=!0;else{var Fe=n(d);Fe!==null&&z(x,Fe.startTime-G),he=!1}return he}finally{m=null,E=J,k=!1}}var N=!1,w=null,I=-1,P=5,b=-1;function j(){return!(t.unstable_now()-b<P)}function O(){if(w!==null){var $=t.unstable_now();b=$;var G=!0;try{G=w(!0,$)}finally{G?C():(N=!1,w=null)}}else N=!1}var C;if(typeof g=="function")C=function(){g(O)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ie=K.port2;K.port1.onmessage=O,C=function(){ie.postMessage(null)}}else C=function(){S(O,0)};function ee($){w=$,N||(N=!0,C())}function z($,G){I=S(function(){$(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){T||k||(T=!0,ee(R))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return E},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function($){switch(E){case 1:case 2:case 3:var G=3;break;default:G=E}var J=E;E=G;try{return $()}finally{E=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,G){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var J=E;E=$;try{return G()}finally{E=J}},t.unstable_scheduleCallback=function($,G,J){var le=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?le+J:le):J=le,$){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=J+ne,$={id:f++,callback:G,priorityLevel:$,startTime:J,expirationTime:ne,sortIndex:-1},J>le?($.sortIndex=J,e(d,$),n(l)===null&&$===n(d)&&(A?(y(I),I=-1):A=!0,z(x,J-le))):($.sortIndex=ne,e(l,$),T||k||(T=!0,ee(R))),$},t.unstable_shouldYield=j,t.unstable_wrapCallback=function($){var G=E;return function(){var J=E;E=G;try{return $.apply(this,arguments)}finally{E=J}}}})(wE);EE.exports=wE;var x4=EE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T4=M,yn=x4;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xE=new Set,Wl={};function Co(t,e){ra(t,e),ra(t+"Capture",e)}function ra(t,e){for(Wl[t]=e,t=0;t<e.length;t++)xE.add(e[t])}var Pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jp=Object.prototype.hasOwnProperty,I4=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xv={},Tv={};function S4(t){return Jp.call(Tv,t)?!0:Jp.call(xv,t)?!1:I4.test(t)?Tv[t]=!0:(xv[t]=!0,!1)}function C4(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function L4(t,e,n,r){if(e===null||typeof e>"u"||C4(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var vg=/[\-:]([a-z])/g;function kg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vg,kg);Et[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vg,kg);Et[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vg,kg);Et[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function _g(t,e,n,r){var i=Et.hasOwnProperty(e)?Et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(L4(e,n,i,r)&&(n=null),r||i===null?S4(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vr=T4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cc=Symbol.for("react.element"),bs=Symbol.for("react.portal"),js=Symbol.for("react.fragment"),Eg=Symbol.for("react.strict_mode"),em=Symbol.for("react.profiler"),TE=Symbol.for("react.provider"),IE=Symbol.for("react.context"),wg=Symbol.for("react.forward_ref"),tm=Symbol.for("react.suspense"),nm=Symbol.for("react.suspense_list"),xg=Symbol.for("react.memo"),Kr=Symbol.for("react.lazy"),SE=Symbol.for("react.offscreen"),Iv=Symbol.iterator;function Qa(t){return t===null||typeof t!="object"?null:(t=Iv&&t[Iv]||t["@@iterator"],typeof t=="function"?t:null)}var Be=Object.assign,Hf;function ul(t){if(Hf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hf=e&&e[1]||""}return`
`+Hf+t}var qf=!1;function Yf(t,e){if(!t||qf)return"";qf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{qf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ul(t):""}function A4(t){switch(t.tag){case 5:return ul(t.type);case 16:return ul("Lazy");case 13:return ul("Suspense");case 19:return ul("SuspenseList");case 0:case 2:case 15:return t=Yf(t.type,!1),t;case 11:return t=Yf(t.type.render,!1),t;case 1:return t=Yf(t.type,!0),t;default:return""}}function rm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case js:return"Fragment";case bs:return"Portal";case em:return"Profiler";case Eg:return"StrictMode";case tm:return"Suspense";case nm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case IE:return(t.displayName||"Context")+".Consumer";case TE:return(t._context.displayName||"Context")+".Provider";case wg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xg:return e=t.displayName||null,e!==null?e:rm(t.type)||"Memo";case Kr:e=t._payload,t=t._init;try{return rm(t(e))}catch{}}return null}function P4(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rm(e);case 8:return e===Eg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Si(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function CE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function R4(t){var e=CE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function dc(t){t._valueTracker||(t._valueTracker=R4(t))}function LE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=CE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ed(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function im(t,e){var n=e.checked;return Be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Si(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function AE(t,e){e=e.checked,e!=null&&_g(t,"checked",e,!1)}function om(t,e){AE(t,e);var n=Si(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sm(t,e.type,n):e.hasOwnProperty("defaultValue")&&sm(t,e.type,Si(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sm(t,e,n){(e!=="number"||Ed(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var cl=Array.isArray;function qs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Si(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function am(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return Be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(cl(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Si(n)}}function PE(t,e){var n=Si(e.value),r=Si(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Av(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function RE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?RE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var hc,bE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(hc=hc||document.createElement("div"),hc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ul(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},b4=["Webkit","ms","Moz","O"];Object.keys(wl).forEach(function(t){b4.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wl[e]=wl[t]})});function jE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wl.hasOwnProperty(t)&&wl[t]?(""+e).trim():e+"px"}function ME(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var j4=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function um(t,e){if(e){if(j4[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function cm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dm=null;function Tg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hm=null,Ys=null,Gs=null;function Pv(t){if(t=Au(t)){if(typeof hm!="function")throw Error(H(280));var e=t.stateNode;e&&(e=Rh(e),hm(t.stateNode,t.type,e))}}function NE(t){Ys?Gs?Gs.push(t):Gs=[t]:Ys=t}function OE(){if(Ys){var t=Ys,e=Gs;if(Gs=Ys=null,Pv(t),e)for(t=0;t<e.length;t++)Pv(e[t])}}function DE(t,e){return t(e)}function VE(){}var Gf=!1;function FE(t,e,n){if(Gf)return t(e,n);Gf=!0;try{return DE(t,e,n)}finally{Gf=!1,(Ys!==null||Gs!==null)&&(VE(),OE())}}function $l(t,e){var n=t.stateNode;if(n===null)return null;var r=Rh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var fm=!1;if(Pr)try{var Za={};Object.defineProperty(Za,"passive",{get:function(){fm=!0}}),window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{fm=!1}function M4(t,e,n,r,i,o,s,a,l){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var xl=!1,wd=null,xd=!1,pm=null,N4={onError:function(t){xl=!0,wd=t}};function O4(t,e,n,r,i,o,s,a,l){xl=!1,wd=null,M4.apply(N4,arguments)}function D4(t,e,n,r,i,o,s,a,l){if(O4.apply(this,arguments),xl){if(xl){var d=wd;xl=!1,wd=null}else throw Error(H(198));xd||(xd=!0,pm=d)}}function Lo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function WE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rv(t){if(Lo(t)!==t)throw Error(H(188))}function V4(t){var e=t.alternate;if(!e){if(e=Lo(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Rv(i),t;if(o===r)return Rv(i),e;o=o.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function UE(t){return t=V4(t),t!==null?$E(t):null}function $E(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$E(t);if(e!==null)return e;t=t.sibling}return null}var zE=yn.unstable_scheduleCallback,bv=yn.unstable_cancelCallback,F4=yn.unstable_shouldYield,W4=yn.unstable_requestPaint,Xe=yn.unstable_now,U4=yn.unstable_getCurrentPriorityLevel,Ig=yn.unstable_ImmediatePriority,BE=yn.unstable_UserBlockingPriority,Td=yn.unstable_NormalPriority,$4=yn.unstable_LowPriority,HE=yn.unstable_IdlePriority,Ch=null,nr=null;function z4(t){if(nr&&typeof nr.onCommitFiberRoot=="function")try{nr.onCommitFiberRoot(Ch,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:q4,B4=Math.log,H4=Math.LN2;function q4(t){return t>>>=0,t===0?32:31-(B4(t)/H4|0)|0}var fc=64,pc=4194304;function dl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Id(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=dl(a):(o&=s,o!==0&&(r=dl(o)))}else s=n&~i,s!==0?r=dl(s):o!==0&&(r=dl(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-zn(e),i=1<<n,r|=t[n],e&=~i;return r}function Y4(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G4(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-zn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Y4(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function mm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qE(){var t=fc;return fc<<=1,!(fc&4194240)&&(fc=64),t}function Kf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Cu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function K4(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-zn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Sg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-zn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ce=0;function YE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var GE,Cg,KE,QE,ZE,gm=!1,mc=[],ci=null,di=null,hi=null,zl=new Map,Bl=new Map,Zr=[],Q4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jv(t,e){switch(t){case"focusin":case"focusout":ci=null;break;case"dragenter":case"dragleave":di=null;break;case"mouseover":case"mouseout":hi=null;break;case"pointerover":case"pointerout":zl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bl.delete(e.pointerId)}}function Xa(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Au(e),e!==null&&Cg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Z4(t,e,n,r,i){switch(e){case"focusin":return ci=Xa(ci,t,e,n,r,i),!0;case"dragenter":return di=Xa(di,t,e,n,r,i),!0;case"mouseover":return hi=Xa(hi,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return zl.set(o,Xa(zl.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Bl.set(o,Xa(Bl.get(o)||null,t,e,n,r,i)),!0}return!1}function XE(t){var e=no(t.target);if(e!==null){var n=Lo(e);if(n!==null){if(e=n.tag,e===13){if(e=WE(n),e!==null){t.blockedOn=e,ZE(t.priority,function(){KE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ym(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);dm=r,n.target.dispatchEvent(r),dm=null}else return e=Au(n),e!==null&&Cg(e),t.blockedOn=n,!1;e.shift()}return!0}function Mv(t,e,n){Kc(t)&&n.delete(e)}function X4(){gm=!1,ci!==null&&Kc(ci)&&(ci=null),di!==null&&Kc(di)&&(di=null),hi!==null&&Kc(hi)&&(hi=null),zl.forEach(Mv),Bl.forEach(Mv)}function Ja(t,e){t.blockedOn===e&&(t.blockedOn=null,gm||(gm=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,X4)))}function Hl(t){function e(i){return Ja(i,t)}if(0<mc.length){Ja(mc[0],t);for(var n=1;n<mc.length;n++){var r=mc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ci!==null&&Ja(ci,t),di!==null&&Ja(di,t),hi!==null&&Ja(hi,t),zl.forEach(e),Bl.forEach(e),n=0;n<Zr.length;n++)r=Zr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Zr.length&&(n=Zr[0],n.blockedOn===null);)XE(n),n.blockedOn===null&&Zr.shift()}var Ks=Vr.ReactCurrentBatchConfig,Sd=!0;function J4(t,e,n,r){var i=Ce,o=Ks.transition;Ks.transition=null;try{Ce=1,Lg(t,e,n,r)}finally{Ce=i,Ks.transition=o}}function eS(t,e,n,r){var i=Ce,o=Ks.transition;Ks.transition=null;try{Ce=4,Lg(t,e,n,r)}finally{Ce=i,Ks.transition=o}}function Lg(t,e,n,r){if(Sd){var i=ym(t,e,n,r);if(i===null)op(t,e,r,Cd,n),jv(t,r);else if(Z4(i,t,e,n,r))r.stopPropagation();else if(jv(t,r),e&4&&-1<Q4.indexOf(t)){for(;i!==null;){var o=Au(i);if(o!==null&&GE(o),o=ym(t,e,n,r),o===null&&op(t,e,r,Cd,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else op(t,e,r,null,n)}}var Cd=null;function ym(t,e,n,r){if(Cd=null,t=Tg(r),t=no(t),t!==null)if(e=Lo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=WE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cd=t,null}function JE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(U4()){case Ig:return 1;case BE:return 4;case Td:case $4:return 16;case HE:return 536870912;default:return 16}default:return 16}}var ri=null,Ag=null,Qc=null;function ew(){if(Qc)return Qc;var t,e=Ag,n=e.length,r,i="value"in ri?ri.value:ri.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Qc=i.slice(t,1<r?1-r:void 0)}function Zc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function gc(){return!0}function Nv(){return!1}function kn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?gc:Nv,this.isPropagationStopped=Nv,this}return Be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gc)},persist:function(){},isPersistent:gc}),e}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pg=kn(Ta),Lu=Be({},Ta,{view:0,detail:0}),tS=kn(Lu),Qf,Zf,el,Lh=Be({},Lu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==el&&(el&&t.type==="mousemove"?(Qf=t.screenX-el.screenX,Zf=t.screenY-el.screenY):Zf=Qf=0,el=t),Qf)},movementY:function(t){return"movementY"in t?t.movementY:Zf}}),Ov=kn(Lh),nS=Be({},Lh,{dataTransfer:0}),rS=kn(nS),iS=Be({},Lu,{relatedTarget:0}),Xf=kn(iS),oS=Be({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),sS=kn(oS),aS=Be({},Ta,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lS=kn(aS),uS=Be({},Ta,{data:0}),Dv=kn(uS),cS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hS[t])?!!e[t]:!1}function Rg(){return fS}var pS=Be({},Lu,{key:function(t){if(t.key){var e=cS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rg,charCode:function(t){return t.type==="keypress"?Zc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mS=kn(pS),gS=Be({},Lh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vv=kn(gS),yS=Be({},Lu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rg}),vS=kn(yS),kS=Be({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),_S=kn(kS),ES=Be({},Lh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wS=kn(ES),xS=[9,13,27,32],bg=Pr&&"CompositionEvent"in window,Tl=null;Pr&&"documentMode"in document&&(Tl=document.documentMode);var TS=Pr&&"TextEvent"in window&&!Tl,tw=Pr&&(!bg||Tl&&8<Tl&&11>=Tl),Fv=" ",Wv=!1;function nw(t,e){switch(t){case"keyup":return xS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function IS(t,e){switch(t){case"compositionend":return rw(e);case"keypress":return e.which!==32?null:(Wv=!0,Fv);case"textInput":return t=e.data,t===Fv&&Wv?null:t;default:return null}}function SS(t,e){if(Ms)return t==="compositionend"||!bg&&nw(t,e)?(t=ew(),Qc=Ag=ri=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tw&&e.locale!=="ko"?null:e.data;default:return null}}var CS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!CS[t.type]:e==="textarea"}function iw(t,e,n,r){NE(r),e=Ld(e,"onChange"),0<e.length&&(n=new Pg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Il=null,ql=null;function LS(t){mw(t,0)}function Ah(t){var e=Ds(t);if(LE(e))return t}function AS(t,e){if(t==="change")return e}var ow=!1;if(Pr){var Jf;if(Pr){var ep="oninput"in document;if(!ep){var $v=document.createElement("div");$v.setAttribute("oninput","return;"),ep=typeof $v.oninput=="function"}Jf=ep}else Jf=!1;ow=Jf&&(!document.documentMode||9<document.documentMode)}function zv(){Il&&(Il.detachEvent("onpropertychange",sw),ql=Il=null)}function sw(t){if(t.propertyName==="value"&&Ah(ql)){var e=[];iw(e,ql,t,Tg(t)),FE(LS,e)}}function PS(t,e,n){t==="focusin"?(zv(),Il=e,ql=n,Il.attachEvent("onpropertychange",sw)):t==="focusout"&&zv()}function RS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ah(ql)}function bS(t,e){if(t==="click")return Ah(e)}function jS(t,e){if(t==="input"||t==="change")return Ah(e)}function MS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:MS;function Yl(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jp.call(e,i)||!qn(t[i],e[i]))return!1}return!0}function Bv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hv(t,e){var n=Bv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bv(n)}}function aw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?aw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function lw(){for(var t=window,e=Ed();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ed(t.document)}return e}function jg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function NS(t){var e=lw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&aw(n.ownerDocument.documentElement,n)){if(r!==null&&jg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Hv(n,o);var s=Hv(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var OS=Pr&&"documentMode"in document&&11>=document.documentMode,Ns=null,vm=null,Sl=null,km=!1;function qv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;km||Ns==null||Ns!==Ed(r)||(r=Ns,"selectionStart"in r&&jg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sl&&Yl(Sl,r)||(Sl=r,r=Ld(vm,"onSelect"),0<r.length&&(e=new Pg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ns)))}function yc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:yc("Animation","AnimationEnd"),animationiteration:yc("Animation","AnimationIteration"),animationstart:yc("Animation","AnimationStart"),transitionend:yc("Transition","TransitionEnd")},tp={},uw={};Pr&&(uw=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Ph(t){if(tp[t])return tp[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in uw)return tp[t]=e[n];return t}var cw=Ph("animationend"),dw=Ph("animationiteration"),hw=Ph("animationstart"),fw=Ph("transitionend"),pw=new Map,Yv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bi(t,e){pw.set(t,e),Co(e,[t])}for(var np=0;np<Yv.length;np++){var rp=Yv[np],DS=rp.toLowerCase(),VS=rp[0].toUpperCase()+rp.slice(1);bi(DS,"on"+VS)}bi(cw,"onAnimationEnd");bi(dw,"onAnimationIteration");bi(hw,"onAnimationStart");bi("dblclick","onDoubleClick");bi("focusin","onFocus");bi("focusout","onBlur");bi(fw,"onTransitionEnd");ra("onMouseEnter",["mouseout","mouseover"]);ra("onMouseLeave",["mouseout","mouseover"]);ra("onPointerEnter",["pointerout","pointerover"]);ra("onPointerLeave",["pointerout","pointerover"]);Co("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Co("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Co("onBeforeInput",["compositionend","keypress","textInput","paste"]);Co("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Co("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Co("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FS=new Set("cancel close invalid load scroll toggle".split(" ").concat(hl));function Gv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,D4(r,e,void 0,t),t.currentTarget=null}function mw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,d=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Gv(i,a,d),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,d=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Gv(i,a,d),o=l}}}if(xd)throw t=pm,xd=!1,pm=null,t}function Ne(t,e){var n=e[Tm];n===void 0&&(n=e[Tm]=new Set);var r=t+"__bubble";n.has(r)||(gw(e,t,2,!1),n.add(r))}function ip(t,e,n){var r=0;e&&(r|=4),gw(n,t,r,e)}var vc="_reactListening"+Math.random().toString(36).slice(2);function Gl(t){if(!t[vc]){t[vc]=!0,xE.forEach(function(n){n!=="selectionchange"&&(FS.has(n)||ip(n,!1,t),ip(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vc]||(e[vc]=!0,ip("selectionchange",!1,e))}}function gw(t,e,n,r){switch(JE(e)){case 1:var i=J4;break;case 4:i=eS;break;default:i=Lg}n=i.bind(null,e,n,t),i=void 0,!fm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function op(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=no(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}FE(function(){var d=o,f=Tg(n),m=[];e:{var E=pw.get(t);if(E!==void 0){var k=Pg,T=t;switch(t){case"keypress":if(Zc(n)===0)break e;case"keydown":case"keyup":k=mS;break;case"focusin":T="focus",k=Xf;break;case"focusout":T="blur",k=Xf;break;case"beforeblur":case"afterblur":k=Xf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Ov;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=rS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=vS;break;case cw:case dw:case hw:k=sS;break;case fw:k=_S;break;case"scroll":k=tS;break;case"wheel":k=wS;break;case"copy":case"cut":case"paste":k=lS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Vv}var A=(e&4)!==0,S=!A&&t==="scroll",y=A?E!==null?E+"Capture":null:E;A=[];for(var g=d,_;g!==null;){_=g;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,y!==null&&(x=$l(g,y),x!=null&&A.push(Kl(g,x,_)))),S)break;g=g.return}0<A.length&&(E=new k(E,T,null,n,f),m.push({event:E,listeners:A}))}}if(!(e&7)){e:{if(E=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",E&&n!==dm&&(T=n.relatedTarget||n.fromElement)&&(no(T)||T[Rr]))break e;if((k||E)&&(E=f.window===f?f:(E=f.ownerDocument)?E.defaultView||E.parentWindow:window,k?(T=n.relatedTarget||n.toElement,k=d,T=T?no(T):null,T!==null&&(S=Lo(T),T!==S||T.tag!==5&&T.tag!==6)&&(T=null)):(k=null,T=d),k!==T)){if(A=Ov,x="onMouseLeave",y="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(A=Vv,x="onPointerLeave",y="onPointerEnter",g="pointer"),S=k==null?E:Ds(k),_=T==null?E:Ds(T),E=new A(x,g+"leave",k,n,f),E.target=S,E.relatedTarget=_,x=null,no(f)===d&&(A=new A(y,g+"enter",T,n,f),A.target=_,A.relatedTarget=S,x=A),S=x,k&&T)t:{for(A=k,y=T,g=0,_=A;_;_=Es(_))g++;for(_=0,x=y;x;x=Es(x))_++;for(;0<g-_;)A=Es(A),g--;for(;0<_-g;)y=Es(y),_--;for(;g--;){if(A===y||y!==null&&A===y.alternate)break t;A=Es(A),y=Es(y)}A=null}else A=null;k!==null&&Kv(m,E,k,A,!1),T!==null&&S!==null&&Kv(m,S,T,A,!0)}}e:{if(E=d?Ds(d):window,k=E.nodeName&&E.nodeName.toLowerCase(),k==="select"||k==="input"&&E.type==="file")var R=AS;else if(Uv(E))if(ow)R=jS;else{R=RS;var N=PS}else(k=E.nodeName)&&k.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(R=bS);if(R&&(R=R(t,d))){iw(m,R,n,f);break e}N&&N(t,E,d),t==="focusout"&&(N=E._wrapperState)&&N.controlled&&E.type==="number"&&sm(E,"number",E.value)}switch(N=d?Ds(d):window,t){case"focusin":(Uv(N)||N.contentEditable==="true")&&(Ns=N,vm=d,Sl=null);break;case"focusout":Sl=vm=Ns=null;break;case"mousedown":km=!0;break;case"contextmenu":case"mouseup":case"dragend":km=!1,qv(m,n,f);break;case"selectionchange":if(OS)break;case"keydown":case"keyup":qv(m,n,f)}var w;if(bg)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Ms?nw(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(tw&&n.locale!=="ko"&&(Ms||I!=="onCompositionStart"?I==="onCompositionEnd"&&Ms&&(w=ew()):(ri=f,Ag="value"in ri?ri.value:ri.textContent,Ms=!0)),N=Ld(d,I),0<N.length&&(I=new Dv(I,t,null,n,f),m.push({event:I,listeners:N}),w?I.data=w:(w=rw(n),w!==null&&(I.data=w)))),(w=TS?IS(t,n):SS(t,n))&&(d=Ld(d,"onBeforeInput"),0<d.length&&(f=new Dv("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=w))}mw(m,e)})}function Kl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ld(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=$l(t,n),o!=null&&r.unshift(Kl(t,o,i)),o=$l(t,e),o!=null&&r.push(Kl(t,o,i))),t=t.return}return r}function Es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kv(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,d=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&d!==null&&(a=d,i?(l=$l(n,o),l!=null&&s.unshift(Kl(n,l,a))):i||(l=$l(n,o),l!=null&&s.push(Kl(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var WS=/\r\n?/g,US=/\u0000|\uFFFD/g;function Qv(t){return(typeof t=="string"?t:""+t).replace(WS,`
`).replace(US,"")}function kc(t,e,n){if(e=Qv(e),Qv(t)!==e&&n)throw Error(H(425))}function Ad(){}var _m=null,Em=null;function wm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xm=typeof setTimeout=="function"?setTimeout:void 0,$S=typeof clearTimeout=="function"?clearTimeout:void 0,Zv=typeof Promise=="function"?Promise:void 0,zS=typeof queueMicrotask=="function"?queueMicrotask:typeof Zv<"u"?function(t){return Zv.resolve(null).then(t).catch(BS)}:xm;function BS(t){setTimeout(function(){throw t})}function sp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Hl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hl(e)}function fi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ia=Math.random().toString(36).slice(2),er="__reactFiber$"+Ia,Ql="__reactProps$"+Ia,Rr="__reactContainer$"+Ia,Tm="__reactEvents$"+Ia,HS="__reactListeners$"+Ia,qS="__reactHandles$"+Ia;function no(t){var e=t[er];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rr]||n[er]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xv(t);t!==null;){if(n=t[er])return n;t=Xv(t)}return e}t=n,n=t.parentNode}return null}function Au(t){return t=t[er]||t[Rr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function Rh(t){return t[Ql]||null}var Im=[],Vs=-1;function ji(t){return{current:t}}function Ve(t){0>Vs||(t.current=Im[Vs],Im[Vs]=null,Vs--)}function je(t,e){Vs++,Im[Vs]=t.current,t.current=e}var Ci={},Nt=ji(Ci),on=ji(!1),po=Ci;function ia(t,e){var n=t.type.contextTypes;if(!n)return Ci;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function sn(t){return t=t.childContextTypes,t!=null}function Pd(){Ve(on),Ve(Nt)}function Jv(t,e,n){if(Nt.current!==Ci)throw Error(H(168));je(Nt,e),je(on,n)}function yw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,P4(t)||"Unknown",i));return Be({},n,r)}function Rd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ci,po=Nt.current,je(Nt,t),je(on,on.current),!0}function e2(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=yw(t,e,po),r.__reactInternalMemoizedMergedChildContext=t,Ve(on),Ve(Nt),je(Nt,t)):Ve(on),je(on,n)}var kr=null,bh=!1,ap=!1;function vw(t){kr===null?kr=[t]:kr.push(t)}function YS(t){bh=!0,vw(t)}function Mi(){if(!ap&&kr!==null){ap=!0;var t=0,e=Ce;try{var n=kr;for(Ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kr=null,bh=!1}catch(i){throw kr!==null&&(kr=kr.slice(t+1)),zE(Ig,Mi),i}finally{Ce=e,ap=!1}}return null}var Fs=[],Ws=0,bd=null,jd=0,En=[],wn=0,mo=null,Er=1,wr="";function Zi(t,e){Fs[Ws++]=jd,Fs[Ws++]=bd,bd=t,jd=e}function kw(t,e,n){En[wn++]=Er,En[wn++]=wr,En[wn++]=mo,mo=t;var r=Er;t=wr;var i=32-zn(r)-1;r&=~(1<<i),n+=1;var o=32-zn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Er=1<<32-zn(e)+i|n<<i|r,wr=o+t}else Er=1<<o|n<<i|r,wr=t}function Mg(t){t.return!==null&&(Zi(t,1),kw(t,1,0))}function Ng(t){for(;t===bd;)bd=Fs[--Ws],Fs[Ws]=null,jd=Fs[--Ws],Fs[Ws]=null;for(;t===mo;)mo=En[--wn],En[wn]=null,wr=En[--wn],En[wn]=null,Er=En[--wn],En[wn]=null}var mn=null,fn=null,Ue=!1,Vn=null;function _w(t,e){var n=xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function t2(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,fn=fi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mo!==null?{id:Er,overflow:wr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,fn=null,!0):!1;default:return!1}}function Sm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cm(t){if(Ue){var e=fn;if(e){var n=e;if(!t2(t,e)){if(Sm(t))throw Error(H(418));e=fi(n.nextSibling);var r=mn;e&&t2(t,e)?_w(r,n):(t.flags=t.flags&-4097|2,Ue=!1,mn=t)}}else{if(Sm(t))throw Error(H(418));t.flags=t.flags&-4097|2,Ue=!1,mn=t}}}function n2(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function _c(t){if(t!==mn)return!1;if(!Ue)return n2(t),Ue=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wm(t.type,t.memoizedProps)),e&&(e=fn)){if(Sm(t))throw Ew(),Error(H(418));for(;e;)_w(t,e),e=fi(e.nextSibling)}if(n2(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=fi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=mn?fi(t.stateNode.nextSibling):null;return!0}function Ew(){for(var t=fn;t;)t=fi(t.nextSibling)}function oa(){fn=mn=null,Ue=!1}function Og(t){Vn===null?Vn=[t]:Vn.push(t)}var GS=Vr.ReactCurrentBatchConfig;function tl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function Ec(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function r2(t){var e=t._init;return e(t._payload)}function ww(t){function e(y,g){if(t){var _=y.deletions;_===null?(y.deletions=[g],y.flags|=16):_.push(g)}}function n(y,g){if(!t)return null;for(;g!==null;)e(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=yi(y,g),y.index=0,y.sibling=null,y}function o(y,g,_){return y.index=_,t?(_=y.alternate,_!==null?(_=_.index,_<g?(y.flags|=2,g):_):(y.flags|=2,g)):(y.flags|=1048576,g)}function s(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,g,_,x){return g===null||g.tag!==6?(g=pp(_,y.mode,x),g.return=y,g):(g=i(g,_),g.return=y,g)}function l(y,g,_,x){var R=_.type;return R===js?f(y,g,_.props.children,x,_.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Kr&&r2(R)===g.type)?(x=i(g,_.props),x.ref=tl(y,g,_),x.return=y,x):(x=id(_.type,_.key,_.props,null,y.mode,x),x.ref=tl(y,g,_),x.return=y,x)}function d(y,g,_,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=mp(_,y.mode,x),g.return=y,g):(g=i(g,_.children||[]),g.return=y,g)}function f(y,g,_,x,R){return g===null||g.tag!==7?(g=uo(_,y.mode,x,R),g.return=y,g):(g=i(g,_),g.return=y,g)}function m(y,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=pp(""+g,y.mode,_),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case cc:return _=id(g.type,g.key,g.props,null,y.mode,_),_.ref=tl(y,null,g),_.return=y,_;case bs:return g=mp(g,y.mode,_),g.return=y,g;case Kr:var x=g._init;return m(y,x(g._payload),_)}if(cl(g)||Qa(g))return g=uo(g,y.mode,_,null),g.return=y,g;Ec(y,g)}return null}function E(y,g,_,x){var R=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:a(y,g,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case cc:return _.key===R?l(y,g,_,x):null;case bs:return _.key===R?d(y,g,_,x):null;case Kr:return R=_._init,E(y,g,R(_._payload),x)}if(cl(_)||Qa(_))return R!==null?null:f(y,g,_,x,null);Ec(y,_)}return null}function k(y,g,_,x,R){if(typeof x=="string"&&x!==""||typeof x=="number")return y=y.get(_)||null,a(g,y,""+x,R);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case cc:return y=y.get(x.key===null?_:x.key)||null,l(g,y,x,R);case bs:return y=y.get(x.key===null?_:x.key)||null,d(g,y,x,R);case Kr:var N=x._init;return k(y,g,_,N(x._payload),R)}if(cl(x)||Qa(x))return y=y.get(_)||null,f(g,y,x,R,null);Ec(g,x)}return null}function T(y,g,_,x){for(var R=null,N=null,w=g,I=g=0,P=null;w!==null&&I<_.length;I++){w.index>I?(P=w,w=null):P=w.sibling;var b=E(y,w,_[I],x);if(b===null){w===null&&(w=P);break}t&&w&&b.alternate===null&&e(y,w),g=o(b,g,I),N===null?R=b:N.sibling=b,N=b,w=P}if(I===_.length)return n(y,w),Ue&&Zi(y,I),R;if(w===null){for(;I<_.length;I++)w=m(y,_[I],x),w!==null&&(g=o(w,g,I),N===null?R=w:N.sibling=w,N=w);return Ue&&Zi(y,I),R}for(w=r(y,w);I<_.length;I++)P=k(w,y,I,_[I],x),P!==null&&(t&&P.alternate!==null&&w.delete(P.key===null?I:P.key),g=o(P,g,I),N===null?R=P:N.sibling=P,N=P);return t&&w.forEach(function(j){return e(y,j)}),Ue&&Zi(y,I),R}function A(y,g,_,x){var R=Qa(_);if(typeof R!="function")throw Error(H(150));if(_=R.call(_),_==null)throw Error(H(151));for(var N=R=null,w=g,I=g=0,P=null,b=_.next();w!==null&&!b.done;I++,b=_.next()){w.index>I?(P=w,w=null):P=w.sibling;var j=E(y,w,b.value,x);if(j===null){w===null&&(w=P);break}t&&w&&j.alternate===null&&e(y,w),g=o(j,g,I),N===null?R=j:N.sibling=j,N=j,w=P}if(b.done)return n(y,w),Ue&&Zi(y,I),R;if(w===null){for(;!b.done;I++,b=_.next())b=m(y,b.value,x),b!==null&&(g=o(b,g,I),N===null?R=b:N.sibling=b,N=b);return Ue&&Zi(y,I),R}for(w=r(y,w);!b.done;I++,b=_.next())b=k(w,y,I,b.value,x),b!==null&&(t&&b.alternate!==null&&w.delete(b.key===null?I:b.key),g=o(b,g,I),N===null?R=b:N.sibling=b,N=b);return t&&w.forEach(function(O){return e(y,O)}),Ue&&Zi(y,I),R}function S(y,g,_,x){if(typeof _=="object"&&_!==null&&_.type===js&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case cc:e:{for(var R=_.key,N=g;N!==null;){if(N.key===R){if(R=_.type,R===js){if(N.tag===7){n(y,N.sibling),g=i(N,_.props.children),g.return=y,y=g;break e}}else if(N.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Kr&&r2(R)===N.type){n(y,N.sibling),g=i(N,_.props),g.ref=tl(y,N,_),g.return=y,y=g;break e}n(y,N);break}else e(y,N);N=N.sibling}_.type===js?(g=uo(_.props.children,y.mode,x,_.key),g.return=y,y=g):(x=id(_.type,_.key,_.props,null,y.mode,x),x.ref=tl(y,g,_),x.return=y,y=x)}return s(y);case bs:e:{for(N=_.key;g!==null;){if(g.key===N)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(y,g.sibling),g=i(g,_.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else e(y,g);g=g.sibling}g=mp(_,y.mode,x),g.return=y,y=g}return s(y);case Kr:return N=_._init,S(y,g,N(_._payload),x)}if(cl(_))return T(y,g,_,x);if(Qa(_))return A(y,g,_,x);Ec(y,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(y,g.sibling),g=i(g,_),g.return=y,y=g):(n(y,g),g=pp(_,y.mode,x),g.return=y,y=g),s(y)):n(y,g)}return S}var sa=ww(!0),xw=ww(!1),Md=ji(null),Nd=null,Us=null,Dg=null;function Vg(){Dg=Us=Nd=null}function Fg(t){var e=Md.current;Ve(Md),t._currentValue=e}function Lm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){Nd=t,Dg=Us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(Dg!==t)if(t={context:t,memoizedValue:e,next:null},Us===null){if(Nd===null)throw Error(H(308));Us=t,Nd.dependencies={lanes:0,firstContext:t}}else Us=Us.next=t;return e}var ro=null;function Wg(t){ro===null?ro=[t]:ro.push(t)}function Tw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Wg(e)):(n.next=i.next,i.next=n),e.interleaved=n,br(t,r)}function br(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qr=!1;function Ug(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,_e&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,br(t,n)}return i=r.interleaved,i===null?(e.next=e,Wg(r)):(e.next=i.next,i.next=e),r.interleaved=e,br(t,n)}function Xc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Sg(t,n)}}function i2(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Od(t,e,n,r){var i=t.updateQueue;Qr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,d=l.next;l.next=null,s===null?o=d:s.next=d,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=d:a.next=d,f.lastBaseUpdate=l))}if(o!==null){var m=i.baseState;s=0,f=d=l=null,a=o;do{var E=a.lane,k=a.eventTime;if((r&E)===E){f!==null&&(f=f.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,A=a;switch(E=e,k=n,A.tag){case 1:if(T=A.payload,typeof T=="function"){m=T.call(k,m,E);break e}m=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=A.payload,E=typeof T=="function"?T.call(k,m,E):T,E==null)break e;m=Be({},m,E);break e;case 2:Qr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,E=i.effects,E===null?i.effects=[a]:E.push(a))}else k={eventTime:k,lane:E,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(d=f=k,l=m):f=f.next=k,s|=E;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;E=a,a=E.next,E.next=null,i.lastBaseUpdate=E,i.shared.pending=null}}while(!0);if(f===null&&(l=m),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);yo|=s,t.lanes=s,t.memoizedState=m}}function o2(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var Pu={},rr=ji(Pu),Zl=ji(Pu),Xl=ji(Pu);function io(t){if(t===Pu)throw Error(H(174));return t}function $g(t,e){switch(je(Xl,e),je(Zl,t),je(rr,Pu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lm(e,t)}Ve(rr),je(rr,e)}function aa(){Ve(rr),Ve(Zl),Ve(Xl)}function Sw(t){io(Xl.current);var e=io(rr.current),n=lm(e,t.type);e!==n&&(je(Zl,t),je(rr,n))}function zg(t){Zl.current===t&&(Ve(rr),Ve(Zl))}var $e=ji(0);function Dd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var lp=[];function Bg(){for(var t=0;t<lp.length;t++)lp[t]._workInProgressVersionPrimary=null;lp.length=0}var Jc=Vr.ReactCurrentDispatcher,up=Vr.ReactCurrentBatchConfig,go=0,ze=null,at=null,ht=null,Vd=!1,Cl=!1,Jl=0,KS=0;function At(){throw Error(H(321))}function Hg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function qg(t,e,n,r,i,o){if(go=o,ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jc.current=t===null||t.memoizedState===null?JS:eC,t=n(r,i),Cl){o=0;do{if(Cl=!1,Jl=0,25<=o)throw Error(H(301));o+=1,ht=at=null,e.updateQueue=null,Jc.current=tC,t=n(r,i)}while(Cl)}if(Jc.current=Fd,e=at!==null&&at.next!==null,go=0,ht=at=ze=null,Vd=!1,e)throw Error(H(300));return t}function Yg(){var t=Jl!==0;return Jl=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?ze.memoizedState=ht=t:ht=ht.next=t,ht}function Ln(){if(at===null){var t=ze.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var e=ht===null?ze.memoizedState:ht.next;if(e!==null)ht=e,at=t;else{if(t===null)throw Error(H(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},ht===null?ze.memoizedState=ht=t:ht=ht.next=t}return ht}function eu(t,e){return typeof e=="function"?e(t):e}function cp(t){var e=Ln(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=at,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,d=o;do{var f=d.lane;if((go&f)===f)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(a=l=m,s=r):l=l.next=m,ze.lanes|=f,yo|=f}d=d.next}while(d!==null&&d!==o);l===null?s=r:l.next=a,qn(r,e.memoizedState)||(tn=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,ze.lanes|=o,yo|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function dp(t){var e=Ln(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);qn(o,e.memoizedState)||(tn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function Cw(){}function Lw(t,e){var n=ze,r=Ln(),i=e(),o=!qn(r.memoizedState,i);if(o&&(r.memoizedState=i,tn=!0),r=r.queue,Gg(Rw.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,tu(9,Pw.bind(null,n,r,i,e),void 0,null),pt===null)throw Error(H(349));go&30||Aw(n,e,i)}return i}function Aw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Pw(t,e,n,r){e.value=n,e.getSnapshot=r,bw(e)&&jw(t)}function Rw(t,e,n){return n(function(){bw(e)&&jw(t)})}function bw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function jw(t){var e=br(t,1);e!==null&&Bn(e,t,1,-1)}function s2(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eu,lastRenderedState:t},e.queue=t,t=t.dispatch=XS.bind(null,ze,t),[e.memoizedState,t]}function tu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Mw(){return Ln().memoizedState}function ed(t,e,n,r){var i=Xn();ze.flags|=t,i.memoizedState=tu(1|e,n,void 0,r===void 0?null:r)}function jh(t,e,n,r){var i=Ln();r=r===void 0?null:r;var o=void 0;if(at!==null){var s=at.memoizedState;if(o=s.destroy,r!==null&&Hg(r,s.deps)){i.memoizedState=tu(e,n,o,r);return}}ze.flags|=t,i.memoizedState=tu(1|e,n,o,r)}function a2(t,e){return ed(8390656,8,t,e)}function Gg(t,e){return jh(2048,8,t,e)}function Nw(t,e){return jh(4,2,t,e)}function Ow(t,e){return jh(4,4,t,e)}function Dw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vw(t,e,n){return n=n!=null?n.concat([t]):null,jh(4,4,Dw.bind(null,e,t),n)}function Kg(){}function Fw(t,e){var n=Ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ww(t,e){var n=Ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Uw(t,e,n){return go&21?(qn(n,e)||(n=qE(),ze.lanes|=n,yo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function QS(t,e){var n=Ce;Ce=n!==0&&4>n?n:4,t(!0);var r=up.transition;up.transition={};try{t(!1),e()}finally{Ce=n,up.transition=r}}function $w(){return Ln().memoizedState}function ZS(t,e,n){var r=gi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zw(t))Bw(e,n);else if(n=Tw(t,e,n,r),n!==null){var i=Bt();Bn(n,t,r,i),Hw(n,e,r)}}function XS(t,e,n){var r=gi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zw(t))Bw(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,qn(a,s)){var l=e.interleaved;l===null?(i.next=i,Wg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Tw(t,e,i,r),n!==null&&(i=Bt(),Bn(n,t,r,i),Hw(n,e,r))}}function zw(t){var e=t.alternate;return t===ze||e!==null&&e===ze}function Bw(t,e){Cl=Vd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Hw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Sg(t,n)}}var Fd={readContext:Cn,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useInsertionEffect:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useMutableSource:At,useSyncExternalStore:At,useId:At,unstable_isNewReconciler:!1},JS={readContext:Cn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:a2,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ed(4194308,4,Dw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ed(4194308,4,t,e)},useInsertionEffect:function(t,e){return ed(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ZS.bind(null,ze,t),[r.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:s2,useDebugValue:Kg,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=s2(!1),e=t[0];return t=QS.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ze,i=Xn();if(Ue){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),pt===null)throw Error(H(349));go&30||Aw(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,a2(Rw.bind(null,r,o,t),[t]),r.flags|=2048,tu(9,Pw.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Xn(),e=pt.identifierPrefix;if(Ue){var n=wr,r=Er;n=(r&~(1<<32-zn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Jl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=KS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eC={readContext:Cn,useCallback:Fw,useContext:Cn,useEffect:Gg,useImperativeHandle:Vw,useInsertionEffect:Nw,useLayoutEffect:Ow,useMemo:Ww,useReducer:cp,useRef:Mw,useState:function(){return cp(eu)},useDebugValue:Kg,useDeferredValue:function(t){var e=Ln();return Uw(e,at.memoizedState,t)},useTransition:function(){var t=cp(eu)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Cw,useSyncExternalStore:Lw,useId:$w,unstable_isNewReconciler:!1},tC={readContext:Cn,useCallback:Fw,useContext:Cn,useEffect:Gg,useImperativeHandle:Vw,useInsertionEffect:Nw,useLayoutEffect:Ow,useMemo:Ww,useReducer:dp,useRef:Mw,useState:function(){return dp(eu)},useDebugValue:Kg,useDeferredValue:function(t){var e=Ln();return at===null?e.memoizedState=t:Uw(e,at.memoizedState,t)},useTransition:function(){var t=dp(eu)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Cw,useSyncExternalStore:Lw,useId:$w,unstable_isNewReconciler:!1};function On(t,e){if(t&&t.defaultProps){e=Be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Am(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mh={isMounted:function(t){return(t=t._reactInternals)?Lo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Bt(),i=gi(t),o=Cr(r,i);o.payload=e,n!=null&&(o.callback=n),e=pi(t,o,i),e!==null&&(Bn(e,t,i,r),Xc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Bt(),i=gi(t),o=Cr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=pi(t,o,i),e!==null&&(Bn(e,t,i,r),Xc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Bt(),r=gi(t),i=Cr(n,r);i.tag=2,e!=null&&(i.callback=e),e=pi(t,i,r),e!==null&&(Bn(e,t,r,n),Xc(e,t,r))}};function l2(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Yl(n,r)||!Yl(i,o):!0}function qw(t,e,n){var r=!1,i=Ci,o=e.contextType;return typeof o=="object"&&o!==null?o=Cn(o):(i=sn(e)?po:Nt.current,r=e.contextTypes,o=(r=r!=null)?ia(t,i):Ci),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function u2(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mh.enqueueReplaceState(e,e.state,null)}function Pm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ug(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Cn(o):(o=sn(e)?po:Nt.current,i.context=ia(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Am(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Mh.enqueueReplaceState(i,i.state,null),Od(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function la(t,e){try{var n="",r=e;do n+=A4(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function hp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nC=typeof WeakMap=="function"?WeakMap:Map;function Yw(t,e,n){n=Cr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ud||(Ud=!0,Um=r),Rm(t,e)},n}function Gw(t,e,n){n=Cr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Rm(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Rm(t,e),typeof r!="function"&&(mi===null?mi=new Set([this]):mi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function c2(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new nC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=gC.bind(null,t,e,n),e.then(t,t))}function d2(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function h2(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cr(-1,1),e.tag=2,pi(n,e,1))),n.lanes|=1),t)}var rC=Vr.ReactCurrentOwner,tn=!1;function $t(t,e,n,r){e.child=t===null?xw(e,null,n,r):sa(e,t.child,n,r)}function f2(t,e,n,r,i){n=n.render;var o=e.ref;return Qs(e,i),r=qg(t,e,n,r,o,i),n=Yg(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jr(t,e,i)):(Ue&&n&&Mg(e),e.flags|=1,$t(t,e,r,i),e.child)}function p2(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!r1(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Kw(t,e,o,r,i)):(t=id(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Yl,n(s,r)&&t.ref===e.ref)return jr(t,e,i)}return e.flags|=1,t=yi(o,r),t.ref=e.ref,t.return=e,e.child=t}function Kw(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Yl(o,r)&&t.ref===e.ref)if(tn=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,jr(t,e,i)}return bm(t,e,n,r,i)}function Qw(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(zs,hn),hn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,je(zs,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,je(zs,hn),hn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,je(zs,hn),hn|=r;return $t(t,e,i,n),e.child}function Zw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bm(t,e,n,r,i){var o=sn(n)?po:Nt.current;return o=ia(e,o),Qs(e,i),n=qg(t,e,n,r,o,i),r=Yg(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jr(t,e,i)):(Ue&&r&&Mg(e),e.flags|=1,$t(t,e,n,i),e.child)}function m2(t,e,n,r,i){if(sn(n)){var o=!0;Rd(e)}else o=!1;if(Qs(e,i),e.stateNode===null)td(t,e),qw(e,n,r),Pm(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=Cn(d):(d=sn(n)?po:Nt.current,d=ia(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==d)&&u2(e,s,r,d),Qr=!1;var E=e.memoizedState;s.state=E,Od(e,r,s,i),l=e.memoizedState,a!==r||E!==l||on.current||Qr?(typeof f=="function"&&(Am(e,n,f,r),l=e.memoizedState),(a=Qr||l2(e,n,a,r,E,l,d))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=d,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Iw(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:On(e.type,a),s.props=d,m=e.pendingProps,E=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=sn(n)?po:Nt.current,l=ia(e,l));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||E!==l)&&u2(e,s,r,l),Qr=!1,E=e.memoizedState,s.state=E,Od(e,r,s,i);var T=e.memoizedState;a!==m||E!==T||on.current||Qr?(typeof k=="function"&&(Am(e,n,k,r),T=e.memoizedState),(d=Qr||l2(e,n,d,r,E,T,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,T,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,T,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),s.props=r,s.state=T,s.context=l,r=d):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),r=!1)}return jm(t,e,n,r,o,i)}function jm(t,e,n,r,i,o){Zw(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&e2(e,n,!1),jr(t,e,o);r=e.stateNode,rC.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=sa(e,t.child,null,o),e.child=sa(e,null,a,o)):$t(t,e,a,o),e.memoizedState=r.state,i&&e2(e,n,!0),e.child}function Xw(t){var e=t.stateNode;e.pendingContext?Jv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jv(t,e.context,!1),$g(t,e.containerInfo)}function g2(t,e,n,r,i){return oa(),Og(i),e.flags|=256,$t(t,e,n,r),e.child}var Mm={dehydrated:null,treeContext:null,retryLane:0};function Nm(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jw(t,e,n){var r=e.pendingProps,i=$e.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),je($e,i&1),t===null)return Cm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Dh(s,r,0,null),t=uo(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Nm(n),e.memoizedState=Mm,t):Qg(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return iC(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=yi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=yi(a,o):(o=uo(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Nm(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Mm,r}return o=t.child,t=o.sibling,r=yi(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Qg(t,e){return e=Dh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wc(t,e,n,r){return r!==null&&Og(r),sa(e,t.child,null,n),t=Qg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iC(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=hp(Error(H(422))),wc(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Dh({mode:"visible",children:r.children},i,0,null),o=uo(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&sa(e,t.child,null,s),e.child.memoizedState=Nm(s),e.memoizedState=Mm,o);if(!(e.mode&1))return wc(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(H(419)),r=hp(o,r,void 0),wc(t,e,s,r)}if(a=(s&t.childLanes)!==0,tn||a){if(r=pt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,br(t,i),Bn(r,t,i,-1))}return n1(),r=hp(Error(H(421))),wc(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=yC.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,fn=fi(i.nextSibling),mn=e,Ue=!0,Vn=null,t!==null&&(En[wn++]=Er,En[wn++]=wr,En[wn++]=mo,Er=t.id,wr=t.overflow,mo=e),e=Qg(e,r.children),e.flags|=4096,e)}function y2(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Lm(t.return,e,n)}function fp(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function e8(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if($t(t,e,r.children,n),r=$e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&y2(t,n,e);else if(t.tag===19)y2(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(je($e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Dd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),fp(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Dd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}fp(e,!0,n,null,o);break;case"together":fp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function td(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function oC(t,e,n){switch(e.tag){case 3:Xw(e),oa();break;case 5:Sw(e);break;case 1:sn(e.type)&&Rd(e);break;case 4:$g(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;je(Md,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(je($e,$e.current&1),e.flags|=128,null):n&e.child.childLanes?Jw(t,e,n):(je($e,$e.current&1),t=jr(t,e,n),t!==null?t.sibling:null);je($e,$e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return e8(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je($e,$e.current),r)break;return null;case 22:case 23:return e.lanes=0,Qw(t,e,n)}return jr(t,e,n)}var t8,Om,n8,r8;t8=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Om=function(){};n8=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,io(rr.current);var o=null;switch(n){case"input":i=im(t,i),r=im(t,r),o=[];break;case"select":i=Be({},i,{value:void 0}),r=Be({},r,{value:void 0}),o=[];break;case"textarea":i=am(t,i),r=am(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ad)}um(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Wl.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var l=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&l!==a&&(l!=null||a!=null))if(d==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Wl.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&Ne("scroll",t),o||a===l||(o=[])):(o=o||[]).push(d,l))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};r8=function(t,e,n,r){n!==r&&(e.flags|=4)};function nl(t,e){if(!Ue)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function sC(t,e,n){var r=e.pendingProps;switch(Ng(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(e),null;case 1:return sn(e.type)&&Pd(),Pt(e),null;case 3:return r=e.stateNode,aa(),Ve(on),Ve(Nt),Bg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_c(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(Bm(Vn),Vn=null))),Om(t,e),Pt(e),null;case 5:zg(e);var i=io(Xl.current);if(n=e.type,t!==null&&e.stateNode!=null)n8(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return Pt(e),null}if(t=io(rr.current),_c(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[er]=e,r[Ql]=o,t=(e.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(i=0;i<hl.length;i++)Ne(hl[i],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":Sv(r,o),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ne("invalid",r);break;case"textarea":Lv(r,o),Ne("invalid",r)}um(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&kc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&kc(r.textContent,a,t),i=["children",""+a]):Wl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Ne("scroll",r)}switch(n){case"input":dc(r),Cv(r,o,!0);break;case"textarea":dc(r),Av(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ad)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=RE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[er]=e,t[Ql]=r,t8(t,e,!1,!1),e.stateNode=t;e:{switch(s=cm(n,r),n){case"dialog":Ne("cancel",t),Ne("close",t),i=r;break;case"iframe":case"object":case"embed":Ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<hl.length;i++)Ne(hl[i],t);i=r;break;case"source":Ne("error",t),i=r;break;case"img":case"image":case"link":Ne("error",t),Ne("load",t),i=r;break;case"details":Ne("toggle",t),i=r;break;case"input":Sv(t,r),i=im(t,r),Ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Be({},r,{value:void 0}),Ne("invalid",t);break;case"textarea":Lv(t,r),i=am(t,r),Ne("invalid",t);break;default:i=r}um(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?ME(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bE(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ul(t,l):typeof l=="number"&&Ul(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Wl.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Ne("scroll",t):l!=null&&_g(t,o,l,s))}switch(n){case"input":dc(t),Cv(t,r,!1);break;case"textarea":dc(t),Av(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Si(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?qs(t,!!r.multiple,o,!1):r.defaultValue!=null&&qs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ad)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pt(e),null;case 6:if(t&&e.stateNode!=null)r8(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=io(Xl.current),io(rr.current),_c(e)){if(r=e.stateNode,n=e.memoizedProps,r[er]=e,(o=r.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:kc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&kc(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[er]=e,e.stateNode=r}return Pt(e),null;case 13:if(Ve($e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ue&&fn!==null&&e.mode&1&&!(e.flags&128))Ew(),oa(),e.flags|=98560,o=!1;else if(o=_c(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(H(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(H(317));o[er]=e}else oa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pt(e),o=!1}else Vn!==null&&(Bm(Vn),Vn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||$e.current&1?ut===0&&(ut=3):n1())),e.updateQueue!==null&&(e.flags|=4),Pt(e),null);case 4:return aa(),Om(t,e),t===null&&Gl(e.stateNode.containerInfo),Pt(e),null;case 10:return Fg(e.type._context),Pt(e),null;case 17:return sn(e.type)&&Pd(),Pt(e),null;case 19:if(Ve($e),o=e.memoizedState,o===null)return Pt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)nl(o,!1);else{if(ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Dd(t),s!==null){for(e.flags|=128,nl(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return je($e,$e.current&1|2),e.child}t=t.sibling}o.tail!==null&&Xe()>ua&&(e.flags|=128,r=!0,nl(o,!1),e.lanes=4194304)}else{if(!r)if(t=Dd(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),nl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ue)return Pt(e),null}else 2*Xe()-o.renderingStartTime>ua&&n!==1073741824&&(e.flags|=128,r=!0,nl(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Xe(),e.sibling=null,n=$e.current,je($e,r?n&1|2:n&1),e):(Pt(e),null);case 22:case 23:return t1(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?hn&1073741824&&(Pt(e),e.subtreeFlags&6&&(e.flags|=8192)):Pt(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function aC(t,e){switch(Ng(e),e.tag){case 1:return sn(e.type)&&Pd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return aa(),Ve(on),Ve(Nt),Bg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zg(e),null;case 13:if(Ve($e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));oa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ve($e),null;case 4:return aa(),null;case 10:return Fg(e.type._context),null;case 22:case 23:return t1(),null;case 24:return null;default:return null}}var xc=!1,jt=!1,lC=typeof WeakSet=="function"?WeakSet:Set,Z=null;function $s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ke(t,e,r)}else n.current=null}function Dm(t,e,n){try{n()}catch(r){Ke(t,e,r)}}var v2=!1;function uC(t,e){if(_m=Sd,t=lw(),jg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,d=0,f=0,m=t,E=null;t:for(;;){for(var k;m!==n||i!==0&&m.nodeType!==3||(a=s+i),m!==o||r!==0&&m.nodeType!==3||(l=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(k=m.firstChild)!==null;)E=m,m=k;for(;;){if(m===t)break t;if(E===n&&++d===i&&(a=s),E===o&&++f===r&&(l=s),(k=m.nextSibling)!==null)break;m=E,E=m.parentNode}m=k}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Em={focusedElem:t,selectionRange:n},Sd=!1,Z=e;Z!==null;)if(e=Z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Z=t;else for(;Z!==null;){e=Z;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var A=T.memoizedProps,S=T.memoizedState,y=e.stateNode,g=y.getSnapshotBeforeUpdate(e.elementType===e.type?A:On(e.type,A),S);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(x){Ke(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Z=t;break}Z=e.return}return T=v2,v2=!1,T}function Ll(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Dm(e,n,o)}i=i.next}while(i!==r)}}function Nh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Vm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function i8(t){var e=t.alternate;e!==null&&(t.alternate=null,i8(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[er],delete e[Ql],delete e[Tm],delete e[HS],delete e[qS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function o8(t){return t.tag===5||t.tag===3||t.tag===4}function k2(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||o8(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ad));else if(r!==4&&(t=t.child,t!==null))for(Fm(t,e,n),t=t.sibling;t!==null;)Fm(t,e,n),t=t.sibling}function Wm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wm(t,e,n),t=t.sibling;t!==null;)Wm(t,e,n),t=t.sibling}var gt=null,Dn=!1;function zr(t,e,n){for(n=n.child;n!==null;)s8(t,e,n),n=n.sibling}function s8(t,e,n){if(nr&&typeof nr.onCommitFiberUnmount=="function")try{nr.onCommitFiberUnmount(Ch,n)}catch{}switch(n.tag){case 5:jt||$s(n,e);case 6:var r=gt,i=Dn;gt=null,zr(t,e,n),gt=r,Dn=i,gt!==null&&(Dn?(t=gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):gt.removeChild(n.stateNode));break;case 18:gt!==null&&(Dn?(t=gt,n=n.stateNode,t.nodeType===8?sp(t.parentNode,n):t.nodeType===1&&sp(t,n),Hl(t)):sp(gt,n.stateNode));break;case 4:r=gt,i=Dn,gt=n.stateNode.containerInfo,Dn=!0,zr(t,e,n),gt=r,Dn=i;break;case 0:case 11:case 14:case 15:if(!jt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Dm(n,e,s),i=i.next}while(i!==r)}zr(t,e,n);break;case 1:if(!jt&&($s(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ke(n,e,a)}zr(t,e,n);break;case 21:zr(t,e,n);break;case 22:n.mode&1?(jt=(r=jt)||n.memoizedState!==null,zr(t,e,n),jt=r):zr(t,e,n);break;default:zr(t,e,n)}}function _2(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lC),e.forEach(function(r){var i=vC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:gt=a.stateNode,Dn=!1;break e;case 3:gt=a.stateNode.containerInfo,Dn=!0;break e;case 4:gt=a.stateNode.containerInfo,Dn=!0;break e}a=a.return}if(gt===null)throw Error(H(160));s8(o,s,i),gt=null,Dn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){Ke(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)a8(e,t),e=e.sibling}function a8(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),Zn(t),r&4){try{Ll(3,t,t.return),Nh(3,t)}catch(A){Ke(t,t.return,A)}try{Ll(5,t,t.return)}catch(A){Ke(t,t.return,A)}}break;case 1:jn(e,t),Zn(t),r&512&&n!==null&&$s(n,n.return);break;case 5:if(jn(e,t),Zn(t),r&512&&n!==null&&$s(n,n.return),t.flags&32){var i=t.stateNode;try{Ul(i,"")}catch(A){Ke(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&AE(i,o),cm(a,s);var d=cm(a,o);for(s=0;s<l.length;s+=2){var f=l[s],m=l[s+1];f==="style"?ME(i,m):f==="dangerouslySetInnerHTML"?bE(i,m):f==="children"?Ul(i,m):_g(i,f,m,d)}switch(a){case"input":om(i,o);break;case"textarea":PE(i,o);break;case"select":var E=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?qs(i,!!o.multiple,k,!1):E!==!!o.multiple&&(o.defaultValue!=null?qs(i,!!o.multiple,o.defaultValue,!0):qs(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ql]=o}catch(A){Ke(t,t.return,A)}}break;case 6:if(jn(e,t),Zn(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(A){Ke(t,t.return,A)}}break;case 3:if(jn(e,t),Zn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hl(e.containerInfo)}catch(A){Ke(t,t.return,A)}break;case 4:jn(e,t),Zn(t);break;case 13:jn(e,t),Zn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Jg=Xe())),r&4&&_2(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(d=jt)||f,jn(e,t),jt=d):jn(e,t),Zn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(Z=t,f=t.child;f!==null;){for(m=Z=f;Z!==null;){switch(E=Z,k=E.child,E.tag){case 0:case 11:case 14:case 15:Ll(4,E,E.return);break;case 1:$s(E,E.return);var T=E.stateNode;if(typeof T.componentWillUnmount=="function"){r=E,n=E.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(A){Ke(r,n,A)}}break;case 5:$s(E,E.return);break;case 22:if(E.memoizedState!==null){w2(m);continue}}k!==null?(k.return=E,Z=k):w2(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,l=m.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jE("display",s))}catch(A){Ke(t,t.return,A)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(A){Ke(t,t.return,A)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:jn(e,t),Zn(t),r&4&&_2(t);break;case 21:break;default:jn(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(o8(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ul(i,""),r.flags&=-33);var o=k2(t);Wm(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=k2(t);Fm(t,a,s);break;default:throw Error(H(161))}}catch(l){Ke(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cC(t,e,n){Z=t,l8(t)}function l8(t,e,n){for(var r=(t.mode&1)!==0;Z!==null;){var i=Z,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||xc;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||jt;a=xc;var d=jt;if(xc=s,(jt=l)&&!d)for(Z=i;Z!==null;)s=Z,l=s.child,s.tag===22&&s.memoizedState!==null?x2(i):l!==null?(l.return=s,Z=l):x2(i);for(;o!==null;)Z=o,l8(o),o=o.sibling;Z=i,xc=a,jt=d}E2(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Z=o):E2(t)}}function E2(t){for(;Z!==null;){var e=Z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Nh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!jt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&o2(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}o2(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Hl(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}jt||e.flags&512&&Vm(e)}catch(E){Ke(e,e.return,E)}}if(e===t){Z=null;break}if(n=e.sibling,n!==null){n.return=e.return,Z=n;break}Z=e.return}}function w2(t){for(;Z!==null;){var e=Z;if(e===t){Z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Z=n;break}Z=e.return}}function x2(t){for(;Z!==null;){var e=Z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nh(4,e)}catch(l){Ke(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ke(e,i,l)}}var o=e.return;try{Vm(e)}catch(l){Ke(e,o,l)}break;case 5:var s=e.return;try{Vm(e)}catch(l){Ke(e,s,l)}}}catch(l){Ke(e,e.return,l)}if(e===t){Z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Z=a;break}Z=e.return}}var dC=Math.ceil,Wd=Vr.ReactCurrentDispatcher,Zg=Vr.ReactCurrentOwner,In=Vr.ReactCurrentBatchConfig,_e=0,pt=null,nt=null,kt=0,hn=0,zs=ji(0),ut=0,nu=null,yo=0,Oh=0,Xg=0,Al=null,Jt=null,Jg=0,ua=1/0,yr=null,Ud=!1,Um=null,mi=null,Tc=!1,ii=null,$d=0,Pl=0,$m=null,nd=-1,rd=0;function Bt(){return _e&6?Xe():nd!==-1?nd:nd=Xe()}function gi(t){return t.mode&1?_e&2&&kt!==0?kt&-kt:GS.transition!==null?(rd===0&&(rd=qE()),rd):(t=Ce,t!==0||(t=window.event,t=t===void 0?16:JE(t.type)),t):1}function Bn(t,e,n,r){if(50<Pl)throw Pl=0,$m=null,Error(H(185));Cu(t,n,r),(!(_e&2)||t!==pt)&&(t===pt&&(!(_e&2)&&(Oh|=n),ut===4&&Xr(t,kt)),an(t,r),n===1&&_e===0&&!(e.mode&1)&&(ua=Xe()+500,bh&&Mi()))}function an(t,e){var n=t.callbackNode;G4(t,e);var r=Id(t,t===pt?kt:0);if(r===0)n!==null&&bv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&bv(n),e===1)t.tag===0?YS(T2.bind(null,t)):vw(T2.bind(null,t)),zS(function(){!(_e&6)&&Mi()}),n=null;else{switch(YE(r)){case 1:n=Ig;break;case 4:n=BE;break;case 16:n=Td;break;case 536870912:n=HE;break;default:n=Td}n=g8(n,u8.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function u8(t,e){if(nd=-1,rd=0,_e&6)throw Error(H(327));var n=t.callbackNode;if(Zs()&&t.callbackNode!==n)return null;var r=Id(t,t===pt?kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=zd(t,r);else{e=r;var i=_e;_e|=2;var o=d8();(pt!==t||kt!==e)&&(yr=null,ua=Xe()+500,lo(t,e));do try{pC();break}catch(a){c8(t,a)}while(!0);Vg(),Wd.current=o,_e=i,nt!==null?e=0:(pt=null,kt=0,e=ut)}if(e!==0){if(e===2&&(i=mm(t),i!==0&&(r=i,e=zm(t,i))),e===1)throw n=nu,lo(t,0),Xr(t,r),an(t,Xe()),n;if(e===6)Xr(t,r);else{if(i=t.current.alternate,!(r&30)&&!hC(i)&&(e=zd(t,r),e===2&&(o=mm(t),o!==0&&(r=o,e=zm(t,o))),e===1))throw n=nu,lo(t,0),Xr(t,r),an(t,Xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:Xi(t,Jt,yr);break;case 3:if(Xr(t,r),(r&130023424)===r&&(e=Jg+500-Xe(),10<e)){if(Id(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xm(Xi.bind(null,t,Jt,yr),e);break}Xi(t,Jt,yr);break;case 4:if(Xr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-zn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dC(r/1960))-r,10<r){t.timeoutHandle=xm(Xi.bind(null,t,Jt,yr),r);break}Xi(t,Jt,yr);break;case 5:Xi(t,Jt,yr);break;default:throw Error(H(329))}}}return an(t,Xe()),t.callbackNode===n?u8.bind(null,t):null}function zm(t,e){var n=Al;return t.current.memoizedState.isDehydrated&&(lo(t,e).flags|=256),t=zd(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&Bm(e)),t}function Bm(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function hC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!qn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xr(t,e){for(e&=~Xg,e&=~Oh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),r=1<<n;t[n]=-1,e&=~r}}function T2(t){if(_e&6)throw Error(H(327));Zs();var e=Id(t,0);if(!(e&1))return an(t,Xe()),null;var n=zd(t,e);if(t.tag!==0&&n===2){var r=mm(t);r!==0&&(e=r,n=zm(t,r))}if(n===1)throw n=nu,lo(t,0),Xr(t,e),an(t,Xe()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xi(t,Jt,yr),an(t,Xe()),null}function e1(t,e){var n=_e;_e|=1;try{return t(e)}finally{_e=n,_e===0&&(ua=Xe()+500,bh&&Mi())}}function vo(t){ii!==null&&ii.tag===0&&!(_e&6)&&Zs();var e=_e;_e|=1;var n=In.transition,r=Ce;try{if(In.transition=null,Ce=1,t)return t()}finally{Ce=r,In.transition=n,_e=e,!(_e&6)&&Mi()}}function t1(){hn=zs.current,Ve(zs)}function lo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$S(n)),nt!==null)for(n=nt.return;n!==null;){var r=n;switch(Ng(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pd();break;case 3:aa(),Ve(on),Ve(Nt),Bg();break;case 5:zg(r);break;case 4:aa();break;case 13:Ve($e);break;case 19:Ve($e);break;case 10:Fg(r.type._context);break;case 22:case 23:t1()}n=n.return}if(pt=t,nt=t=yi(t.current,null),kt=hn=e,ut=0,nu=null,Xg=Oh=yo=0,Jt=Al=null,ro!==null){for(e=0;e<ro.length;e++)if(n=ro[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}ro=null}return t}function c8(t,e){do{var n=nt;try{if(Vg(),Jc.current=Fd,Vd){for(var r=ze.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vd=!1}if(go=0,ht=at=ze=null,Cl=!1,Jl=0,Zg.current=null,n===null||n.return===null){ut=1,nu=e,nt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var E=f.alternate;E?(f.updateQueue=E.updateQueue,f.memoizedState=E.memoizedState,f.lanes=E.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=d2(s);if(k!==null){k.flags&=-257,h2(k,s,a,o,e),k.mode&1&&c2(o,d,e),e=k,l=d;var T=e.updateQueue;if(T===null){var A=new Set;A.add(l),e.updateQueue=A}else T.add(l);break e}else{if(!(e&1)){c2(o,d,e),n1();break e}l=Error(H(426))}}else if(Ue&&a.mode&1){var S=d2(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),h2(S,s,a,o,e),Og(la(l,a));break e}}o=l=la(l,a),ut!==4&&(ut=2),Al===null?Al=[o]:Al.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var y=Yw(o,l,e);i2(o,y);break e;case 1:a=l;var g=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(mi===null||!mi.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=Gw(o,a,e);i2(o,x);break e}}o=o.return}while(o!==null)}f8(n)}catch(R){e=R,nt===n&&n!==null&&(nt=n=n.return);continue}break}while(!0)}function d8(){var t=Wd.current;return Wd.current=Fd,t===null?Fd:t}function n1(){(ut===0||ut===3||ut===2)&&(ut=4),pt===null||!(yo&268435455)&&!(Oh&268435455)||Xr(pt,kt)}function zd(t,e){var n=_e;_e|=2;var r=d8();(pt!==t||kt!==e)&&(yr=null,lo(t,e));do try{fC();break}catch(i){c8(t,i)}while(!0);if(Vg(),_e=n,Wd.current=r,nt!==null)throw Error(H(261));return pt=null,kt=0,ut}function fC(){for(;nt!==null;)h8(nt)}function pC(){for(;nt!==null&&!F4();)h8(nt)}function h8(t){var e=m8(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?f8(t):nt=e,Zg.current=null}function f8(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=aC(n,e),n!==null){n.flags&=32767,nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ut=6,nt=null;return}}else if(n=sC(n,e,hn),n!==null){nt=n;return}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);ut===0&&(ut=5)}function Xi(t,e,n){var r=Ce,i=In.transition;try{In.transition=null,Ce=1,mC(t,e,n,r)}finally{In.transition=i,Ce=r}return null}function mC(t,e,n,r){do Zs();while(ii!==null);if(_e&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(K4(t,o),t===pt&&(nt=pt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tc||(Tc=!0,g8(Td,function(){return Zs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=In.transition,In.transition=null;var s=Ce;Ce=1;var a=_e;_e|=4,Zg.current=null,uC(t,n),a8(n,t),NS(Em),Sd=!!_m,Em=_m=null,t.current=n,cC(n),W4(),_e=a,Ce=s,In.transition=o}else t.current=n;if(Tc&&(Tc=!1,ii=t,$d=i),o=t.pendingLanes,o===0&&(mi=null),z4(n.stateNode),an(t,Xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ud)throw Ud=!1,t=Um,Um=null,t;return $d&1&&t.tag!==0&&Zs(),o=t.pendingLanes,o&1?t===$m?Pl++:(Pl=0,$m=t):Pl=0,Mi(),null}function Zs(){if(ii!==null){var t=YE($d),e=In.transition,n=Ce;try{if(In.transition=null,Ce=16>t?16:t,ii===null)var r=!1;else{if(t=ii,ii=null,$d=0,_e&6)throw Error(H(331));var i=_e;for(_e|=4,Z=t.current;Z!==null;){var o=Z,s=o.child;if(Z.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var d=a[l];for(Z=d;Z!==null;){var f=Z;switch(f.tag){case 0:case 11:case 15:Ll(8,f,o)}var m=f.child;if(m!==null)m.return=f,Z=m;else for(;Z!==null;){f=Z;var E=f.sibling,k=f.return;if(i8(f),f===d){Z=null;break}if(E!==null){E.return=k,Z=E;break}Z=k}}}var T=o.alternate;if(T!==null){var A=T.child;if(A!==null){T.child=null;do{var S=A.sibling;A.sibling=null,A=S}while(A!==null)}}Z=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Z=s;else e:for(;Z!==null;){if(o=Z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ll(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,Z=y;break e}Z=o.return}}var g=t.current;for(Z=g;Z!==null;){s=Z;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,Z=_;else e:for(s=g;Z!==null;){if(a=Z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Nh(9,a)}}catch(R){Ke(a,a.return,R)}if(a===s){Z=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Z=x;break e}Z=a.return}}if(_e=i,Mi(),nr&&typeof nr.onPostCommitFiberRoot=="function")try{nr.onPostCommitFiberRoot(Ch,t)}catch{}r=!0}return r}finally{Ce=n,In.transition=e}}return!1}function I2(t,e,n){e=la(n,e),e=Yw(t,e,1),t=pi(t,e,1),e=Bt(),t!==null&&(Cu(t,1,e),an(t,e))}function Ke(t,e,n){if(t.tag===3)I2(t,t,n);else for(;e!==null;){if(e.tag===3){I2(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mi===null||!mi.has(r))){t=la(n,t),t=Gw(e,t,1),e=pi(e,t,1),t=Bt(),e!==null&&(Cu(e,1,t),an(e,t));break}}e=e.return}}function gC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Bt(),t.pingedLanes|=t.suspendedLanes&n,pt===t&&(kt&n)===n&&(ut===4||ut===3&&(kt&130023424)===kt&&500>Xe()-Jg?lo(t,0):Xg|=n),an(t,e)}function p8(t,e){e===0&&(t.mode&1?(e=pc,pc<<=1,!(pc&130023424)&&(pc=4194304)):e=1);var n=Bt();t=br(t,e),t!==null&&(Cu(t,e,n),an(t,n))}function yC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),p8(t,n)}function vC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),p8(t,n)}var m8;m8=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,oC(t,e,n);tn=!!(t.flags&131072)}else tn=!1,Ue&&e.flags&1048576&&kw(e,jd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;td(t,e),t=e.pendingProps;var i=ia(e,Nt.current);Qs(e,n),i=qg(null,e,r,t,i,n);var o=Yg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(r)?(o=!0,Rd(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ug(e),i.updater=Mh,e.stateNode=i,i._reactInternals=e,Pm(e,r,t,n),e=jm(null,e,r,!0,o,n)):(e.tag=0,Ue&&o&&Mg(e),$t(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(td(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_C(r),t=On(r,t),i){case 0:e=bm(null,e,r,t,n);break e;case 1:e=m2(null,e,r,t,n);break e;case 11:e=f2(null,e,r,t,n);break e;case 14:e=p2(null,e,r,On(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),bm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),m2(t,e,r,i,n);case 3:e:{if(Xw(e),t===null)throw Error(H(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Iw(t,e),Od(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=la(Error(H(423)),e),e=g2(t,e,r,n,i);break e}else if(r!==i){i=la(Error(H(424)),e),e=g2(t,e,r,n,i);break e}else for(fn=fi(e.stateNode.containerInfo.firstChild),mn=e,Ue=!0,Vn=null,n=xw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oa(),r===i){e=jr(t,e,n);break e}$t(t,e,r,n)}e=e.child}return e;case 5:return Sw(e),t===null&&Cm(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,wm(r,i)?s=null:o!==null&&wm(r,o)&&(e.flags|=32),Zw(t,e),$t(t,e,s,n),e.child;case 6:return t===null&&Cm(e),null;case 13:return Jw(t,e,n);case 4:return $g(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=sa(e,null,r,n):$t(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),f2(t,e,r,i,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,je(Md,r._currentValue),r._currentValue=s,o!==null)if(qn(o.value,s)){if(o.children===i.children&&!on.current){e=jr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Cr(-1,n&-n),l.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?l.next=l:(l.next=f.next,f.next=l),d.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Lm(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(H(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Lm(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}$t(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Qs(e,n),i=Cn(i),r=r(i),e.flags|=1,$t(t,e,r,n),e.child;case 14:return r=e.type,i=On(r,e.pendingProps),i=On(r.type,i),p2(t,e,r,i,n);case 15:return Kw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),td(t,e),e.tag=1,sn(r)?(t=!0,Rd(e)):t=!1,Qs(e,n),qw(e,r,i),Pm(e,r,i,n),jm(null,e,r,!0,t,n);case 19:return e8(t,e,n);case 22:return Qw(t,e,n)}throw Error(H(156,e.tag))};function g8(t,e){return zE(t,e)}function kC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(t,e,n,r){return new kC(t,e,n,r)}function r1(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _C(t){if(typeof t=="function")return r1(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wg)return 11;if(t===xg)return 14}return 2}function yi(t,e){var n=t.alternate;return n===null?(n=xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function id(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")r1(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case js:return uo(n.children,i,o,e);case Eg:s=8,i|=8;break;case em:return t=xn(12,n,e,i|2),t.elementType=em,t.lanes=o,t;case tm:return t=xn(13,n,e,i),t.elementType=tm,t.lanes=o,t;case nm:return t=xn(19,n,e,i),t.elementType=nm,t.lanes=o,t;case SE:return Dh(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case TE:s=10;break e;case IE:s=9;break e;case wg:s=11;break e;case xg:s=14;break e;case Kr:s=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=xn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function uo(t,e,n,r){return t=xn(7,t,r,e),t.lanes=n,t}function Dh(t,e,n,r){return t=xn(22,t,r,e),t.elementType=SE,t.lanes=n,t.stateNode={isHidden:!1},t}function pp(t,e,n){return t=xn(6,t,null,e),t.lanes=n,t}function mp(t,e,n){return e=xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function EC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kf(0),this.expirationTimes=Kf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function i1(t,e,n,r,i,o,s,a,l){return t=new EC(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=xn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ug(o),t}function wC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function y8(t){if(!t)return Ci;t=t._reactInternals;e:{if(Lo(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(sn(n))return yw(t,n,e)}return e}function v8(t,e,n,r,i,o,s,a,l){return t=i1(n,r,!0,t,i,o,s,a,l),t.context=y8(null),n=t.current,r=Bt(),i=gi(n),o=Cr(r,i),o.callback=e??null,pi(n,o,i),t.current.lanes=i,Cu(t,i,r),an(t,r),t}function Vh(t,e,n,r){var i=e.current,o=Bt(),s=gi(i);return n=y8(n),e.context===null?e.context=n:e.pendingContext=n,e=Cr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pi(i,e,s),t!==null&&(Bn(t,i,s,o),Xc(t,i,s)),s}function Bd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function S2(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function o1(t,e){S2(t,e),(t=t.alternate)&&S2(t,e)}function xC(){return null}var k8=typeof reportError=="function"?reportError:function(t){console.error(t)};function s1(t){this._internalRoot=t}Fh.prototype.render=s1.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));Vh(t,e,null,null)};Fh.prototype.unmount=s1.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vo(function(){Vh(null,t,null,null)}),e[Rr]=null}};function Fh(t){this._internalRoot=t}Fh.prototype.unstable_scheduleHydration=function(t){if(t){var e=QE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zr.length&&e!==0&&e<Zr[n].priority;n++);Zr.splice(n,0,t),n===0&&XE(t)}};function a1(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function C2(){}function TC(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Bd(s);o.call(d)}}var s=v8(e,r,t,0,null,!1,!1,"",C2);return t._reactRootContainer=s,t[Rr]=s.current,Gl(t.nodeType===8?t.parentNode:t),vo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=Bd(l);a.call(d)}}var l=i1(t,0,!1,null,null,!1,!1,"",C2);return t._reactRootContainer=l,t[Rr]=l.current,Gl(t.nodeType===8?t.parentNode:t),vo(function(){Vh(e,l,n,r)}),l}function Uh(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Bd(s);a.call(l)}}Vh(e,s,t,i)}else s=TC(n,e,t,i,r);return Bd(s)}GE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=dl(e.pendingLanes);n!==0&&(Sg(e,n|1),an(e,Xe()),!(_e&6)&&(ua=Xe()+500,Mi()))}break;case 13:vo(function(){var r=br(t,1);if(r!==null){var i=Bt();Bn(r,t,1,i)}}),o1(t,1)}};Cg=function(t){if(t.tag===13){var e=br(t,134217728);if(e!==null){var n=Bt();Bn(e,t,134217728,n)}o1(t,134217728)}};KE=function(t){if(t.tag===13){var e=gi(t),n=br(t,e);if(n!==null){var r=Bt();Bn(n,t,e,r)}o1(t,e)}};QE=function(){return Ce};ZE=function(t,e){var n=Ce;try{return Ce=t,e()}finally{Ce=n}};hm=function(t,e,n){switch(e){case"input":if(om(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Rh(r);if(!i)throw Error(H(90));LE(r),om(r,i)}}}break;case"textarea":PE(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};DE=e1;VE=vo;var IC={usingClientEntryPoint:!1,Events:[Au,Ds,Rh,NE,OE,e1]},rl={findFiberByHostInstance:no,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SC={bundleType:rl.bundleType,version:rl.version,rendererPackageName:rl.rendererPackageName,rendererConfig:rl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=UE(t),t===null?null:t.stateNode},findFiberByHostInstance:rl.findFiberByHostInstance||xC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ic.isDisabled&&Ic.supportsFiber)try{Ch=Ic.inject(SC),nr=Ic}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IC;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a1(e))throw Error(H(200));return wC(t,e,null,n)};vn.createRoot=function(t,e){if(!a1(t))throw Error(H(299));var n=!1,r="",i=k8;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=i1(t,1,!1,null,null,n,!1,r,i),t[Rr]=e.current,Gl(t.nodeType===8?t.parentNode:t),new s1(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=UE(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return vo(t)};vn.hydrate=function(t,e,n){if(!Wh(e))throw Error(H(200));return Uh(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!a1(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=k8;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=v8(e,null,t,1,n??null,i,!1,o,s),t[Rr]=e.current,Gl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Fh(e)};vn.render=function(t,e,n){if(!Wh(e))throw Error(H(200));return Uh(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Wh(t))throw Error(H(40));return t._reactRootContainer?(vo(function(){Uh(null,null,t,!1,function(){t._reactRootContainer=null,t[Rr]=null})}),!0):!1};vn.unstable_batchedUpdates=e1;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wh(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return Uh(t,e,n,!1,r)};vn.version="18.3.1-next-f1338f8080-20240426";function _8(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_8)}catch(t){console.error(t)}}_8(),_E.exports=vn;var CC=_E.exports,E8,L2=CC;E8=L2.createRoot,L2.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ru(){return ru=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ru.apply(this,arguments)}var oi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(oi||(oi={}));const A2="popstate";function LC(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Hm("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Hd(i)}return PC(e,n,null,t)}function Je(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function w8(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function AC(){return Math.random().toString(36).substr(2,8)}function P2(t,e){return{usr:t.state,key:t.key,idx:e}}function Hm(t,e,n,r){return n===void 0&&(n=null),ru({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Sa(e):e,{state:n,key:e&&e.key||r||AC()})}function Hd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Sa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function PC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=oi.Pop,l=null,d=f();d==null&&(d=0,s.replaceState(ru({},s.state,{idx:d}),""));function f(){return(s.state||{idx:null}).idx}function m(){a=oi.Pop;let S=f(),y=S==null?null:S-d;d=S,l&&l({action:a,location:A.location,delta:y})}function E(S,y){a=oi.Push;let g=Hm(A.location,S,y);d=f()+1;let _=P2(g,d),x=A.createHref(g);try{s.pushState(_,"",x)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(x)}o&&l&&l({action:a,location:A.location,delta:1})}function k(S,y){a=oi.Replace;let g=Hm(A.location,S,y);d=f();let _=P2(g,d),x=A.createHref(g);s.replaceState(_,"",x),o&&l&&l({action:a,location:A.location,delta:0})}function T(S){let y=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof S=="string"?S:Hd(S);return g=g.replace(/ $/,"%20"),Je(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let A={get action(){return a},get location(){return t(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(A2,m),l=S,()=>{i.removeEventListener(A2,m),l=null}},createHref(S){return e(i,S)},createURL:T,encodeLocation(S){let y=T(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:E,replace:k,go(S){return s.go(S)}};return A}var R2;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(R2||(R2={}));function RC(t,e,n){return n===void 0&&(n="/"),bC(t,e,n)}function bC(t,e,n,r){let i=typeof e=="string"?Sa(e):e,o=l1(i.pathname||"/",n);if(o==null)return null;let s=x8(t);jC(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let d=HC(o);a=$C(s[l],d)}return a}function x8(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Je(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let d=vi([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(Je(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),x8(o.children,e,f,d)),!(o.path==null&&!o.index)&&e.push({path:d,score:WC(d,o.index),routesMeta:f})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of T8(o.path))i(o,s,l)}),e}function T8(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=T8(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function jC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:UC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const MC=/^:[\w-]+$/,NC=3,OC=2,DC=1,VC=10,FC=-2,b2=t=>t==="*";function WC(t,e){let n=t.split("/"),r=n.length;return n.some(b2)&&(r+=FC),e&&(r+=OC),n.filter(i=>!b2(i)).reduce((i,o)=>i+(MC.test(o)?NC:o===""?DC:VC),r)}function UC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function $C(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],d=a===r.length-1,f=o==="/"?e:e.slice(o.length)||"/",m=zC({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},f),E=l.route;if(!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:vi([o,m.pathname]),pathnameBase:KC(vi([o,m.pathnameBase])),route:E}),m.pathnameBase!=="/"&&(o=vi([o,m.pathnameBase]))}return s}function zC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=BC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,f,m)=>{let{paramName:E,isOptional:k}=f;if(E==="*"){let A=a[m]||"";s=o.slice(0,o.length-A.length).replace(/(.)\/+$/,"$1")}const T=a[m];return k&&!T?d[E]=void 0:d[E]=(T||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:t}}function BC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),w8(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function HC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return w8(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function l1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function qC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Sa(t):t;return{pathname:n?n.startsWith("/")?n:YC(n,e):e,search:QC(r),hash:ZC(i)}}function YC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function gp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function GC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function u1(t,e){let n=GC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function c1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Sa(t):(i=ru({},t),Je(!i.pathname||!i.pathname.includes("?"),gp("?","pathname","search",i)),Je(!i.pathname||!i.pathname.includes("#"),gp("#","pathname","hash",i)),Je(!i.search||!i.search.includes("#"),gp("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let m=e.length-1;if(!r&&s.startsWith("..")){let E=s.split("/");for(;E[0]==="..";)E.shift(),m-=1;i.pathname=E.join("/")}a=m>=0?e[m]:"/"}let l=qC(i,a),d=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(d||f)&&(l.pathname+="/"),l}const vi=t=>t.join("/").replace(/\/\/+/g,"/"),KC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),QC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ZC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function XC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const I8=["post","put","patch","delete"];new Set(I8);const JC=["get",...I8];new Set(JC);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function iu(){return iu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},iu.apply(this,arguments)}const d1=M.createContext(null),eL=M.createContext(null),Ni=M.createContext(null),$h=M.createContext(null),Oi=M.createContext({outlet:null,matches:[],isDataRoute:!1}),S8=M.createContext(null);function tL(t,e){let{relative:n}=e===void 0?{}:e;Ca()||Je(!1);let{basename:r,navigator:i}=M.useContext(Ni),{hash:o,pathname:s,search:a}=L8(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:vi([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Ca(){return M.useContext($h)!=null}function La(){return Ca()||Je(!1),M.useContext($h).location}function C8(t){M.useContext(Ni).static||M.useLayoutEffect(t)}function Aa(){let{isDataRoute:t}=M.useContext(Oi);return t?pL():nL()}function nL(){Ca()||Je(!1);let t=M.useContext(d1),{basename:e,future:n,navigator:r}=M.useContext(Ni),{matches:i}=M.useContext(Oi),{pathname:o}=La(),s=JSON.stringify(u1(i,n.v7_relativeSplatPath)),a=M.useRef(!1);return C8(()=>{a.current=!0}),M.useCallback(function(d,f){if(f===void 0&&(f={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let m=c1(d,JSON.parse(s),o,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:vi([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,s,o,t])}function L8(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(Ni),{matches:i}=M.useContext(Oi),{pathname:o}=La(),s=JSON.stringify(u1(i,r.v7_relativeSplatPath));return M.useMemo(()=>c1(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function rL(t,e){return iL(t,e)}function iL(t,e,n,r){Ca()||Je(!1);let{navigator:i,static:o}=M.useContext(Ni),{matches:s}=M.useContext(Oi),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let f=La(),m;if(e){var E;let y=typeof e=="string"?Sa(e):e;d==="/"||(E=y.pathname)!=null&&E.startsWith(d)||Je(!1),m=y}else m=f;let k=m.pathname||"/",T=k;if(d!=="/"){let y=d.replace(/^\//,"").split("/");T="/"+k.replace(/^\//,"").split("/").slice(y.length).join("/")}let A=RC(t,{pathname:T}),S=uL(A&&A.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:vi([d,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:vi([d,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,r);return e&&S?M.createElement($h.Provider,{value:{location:iu({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:oi.Pop}},S):S}function oL(){let t=fL(),e=XC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const sL=M.createElement(oL,null);class aL extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(Oi.Provider,{value:this.props.routeContext},M.createElement(S8.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lL(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(d1);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(Oi.Provider,{value:e},r)}function uL(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);f>=0||Je(!1),s=s.slice(0,Math.min(s.length,f+1))}let l=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let m=s[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:E,errors:k}=n,T=m.route.loader&&E[m.route.id]===void 0&&(!k||k[m.route.id]===void 0);if(m.route.lazy||T){l=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((f,m,E)=>{let k,T=!1,A=null,S=null;n&&(k=a&&m.route.id?a[m.route.id]:void 0,A=m.route.errorElement||sL,l&&(d<0&&E===0?(mL("route-fallback"),T=!0,S=null):d===E&&(T=!0,S=m.route.hydrateFallbackElement||null)));let y=e.concat(s.slice(0,E+1)),g=()=>{let _;return k?_=A:T?_=S:m.route.Component?_=M.createElement(m.route.Component,null):m.route.element?_=m.route.element:_=f,M.createElement(lL,{match:m,routeContext:{outlet:f,matches:y,isDataRoute:n!=null},children:_})};return n&&(m.route.ErrorBoundary||m.route.errorElement||E===0)?M.createElement(aL,{location:n.location,revalidation:n.revalidation,component:A,error:k,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}var A8=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(A8||{}),P8=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(P8||{});function cL(t){let e=M.useContext(d1);return e||Je(!1),e}function dL(t){let e=M.useContext(eL);return e||Je(!1),e}function hL(t){let e=M.useContext(Oi);return e||Je(!1),e}function R8(t){let e=hL(),n=e.matches[e.matches.length-1];return n.route.id||Je(!1),n.route.id}function fL(){var t;let e=M.useContext(S8),n=dL(),r=R8();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function pL(){let{router:t}=cL(A8.UseNavigateStable),e=R8(P8.UseNavigateStable),n=M.useRef(!1);return C8(()=>{n.current=!0}),M.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,iu({fromRouteId:e},o)))},[t,e])}const j2={};function mL(t,e,n){j2[t]||(j2[t]=!0)}function gL(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function b8(t){let{to:e,replace:n,state:r,relative:i}=t;Ca()||Je(!1);let{future:o,static:s}=M.useContext(Ni),{matches:a}=M.useContext(Oi),{pathname:l}=La(),d=Aa(),f=c1(e,u1(a,o.v7_relativeSplatPath),l,i==="path"),m=JSON.stringify(f);return M.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:i}),[d,m,i,n,r]),null}function fl(t){Je(!1)}function yL(t){let{basename:e="/",children:n=null,location:r,navigationType:i=oi.Pop,navigator:o,static:s=!1,future:a}=t;Ca()&&Je(!1);let l=e.replace(/^\/*/,"/"),d=M.useMemo(()=>({basename:l,navigator:o,static:s,future:iu({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Sa(r));let{pathname:f="/",search:m="",hash:E="",state:k=null,key:T="default"}=r,A=M.useMemo(()=>{let S=l1(f,l);return S==null?null:{location:{pathname:S,search:m,hash:E,state:k,key:T},navigationType:i}},[l,f,m,E,k,T,i]);return A==null?null:M.createElement(Ni.Provider,{value:d},M.createElement($h.Provider,{children:n,value:A}))}function vL(t){let{children:e,location:n}=t;return rL(qm(e),n)}new Promise(()=>{});function qm(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let o=[...e,i];if(r.type===M.Fragment){n.push.apply(n,qm(r.props.children,o));return}r.type!==fl&&Je(!1),!r.props.index||!r.props.children||Je(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=qm(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ym(){return Ym=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ym.apply(this,arguments)}function kL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function _L(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function EL(t,e){return t.button===0&&(!e||e==="_self")&&!_L(t)}const wL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],xL="6";try{window.__reactRouterVersion=xL}catch{}const TL="startTransition",M2=g4[TL];function IL(t){let{basename:e,children:n,future:r,window:i}=t,o=M.useRef();o.current==null&&(o.current=LC({window:i,v5Compat:!0}));let s=o.current,[a,l]=M.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},f=M.useCallback(m=>{d&&M2?M2(()=>l(m)):l(m)},[l,d]);return M.useLayoutEffect(()=>s.listen(f),[s,f]),M.useEffect(()=>gL(r),[r]),M.createElement(yL,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const SL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",CL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,j8=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:d,preventScrollReset:f,viewTransition:m}=e,E=kL(e,wL),{basename:k}=M.useContext(Ni),T,A=!1;if(typeof d=="string"&&CL.test(d)&&(T=d,SL))try{let _=new URL(window.location.href),x=d.startsWith("//")?new URL(_.protocol+d):new URL(d),R=l1(x.pathname,k);x.origin===_.origin&&R!=null?d=R+x.search+x.hash:A=!0}catch{}let S=tL(d,{relative:i}),y=LL(d,{replace:s,state:a,target:l,preventScrollReset:f,relative:i,viewTransition:m});function g(_){r&&r(_),_.defaultPrevented||y(_)}return M.createElement("a",Ym({},E,{href:T||S,onClick:A||o?r:g,ref:n,target:l}))});var N2;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(N2||(N2={}));var O2;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(O2||(O2={}));function LL(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=e===void 0?{}:e,l=Aa(),d=La(),f=L8(t,{relative:s});return M.useCallback(m=>{if(EL(m,n)){m.preventDefault();let E=r!==void 0?r:Hd(d)===Hd(f);l(t,{replace:E,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[d,l,f,r,i,n,t,o,s,a])}var D2={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M8=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},AL=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},N8={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,d=l?t[i+2]:0,f=o>>2,m=(o&3)<<4|a>>4;let E=(a&15)<<2|d>>6,k=d&63;l||(k=64,s||(E=64)),r.push(n[f],n[m],n[E],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(M8(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):AL(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||d==null||m==null)throw new PL;const E=o<<2|a>>4;if(r.push(E),d!==64){const k=a<<4&240|d>>2;if(r.push(k),m!==64){const T=d<<6&192|m;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class PL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RL=function(t){const e=M8(t);return N8.encodeByteArray(e,!0)},qd=function(t){return RL(t).replace(/\./g,"")},O8=function(t){try{return N8.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jL=()=>bL().__FIREBASE_DEFAULTS__,ML=()=>{if(typeof process>"u"||typeof D2>"u")return;const t=D2.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},NL=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&O8(t[1]);return e&&JSON.parse(e)},zh=()=>{try{return jL()||ML()||NL()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},D8=t=>{var e,n;return(n=(e=zh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},V8=t=>{const e=D8(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},F8=()=>{var t;return(t=zh())===null||t===void 0?void 0:t.config},W8=t=>{var e;return(e=zh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function U8(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[qd(JSON.stringify(n)),qd(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function DL(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ot())}function VL(){var t;const e=(t=zh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function FL(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $8(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function WL(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UL(){const t=Ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $L(){return!VL()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function z8(){try{return typeof indexedDB=="object"}catch{return!1}}function B8(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function zL(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BL="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=BL,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ao.prototype.create)}}class Ao{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?HL(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Rn(i,a,r)}}function HL(t,e){return t.replace(qL,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qL=/\{\$([^}]+)}/g;function YL(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ou(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(V2(o)&&V2(s)){if(!ou(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function V2(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function ml(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function GL(t,e){const n=new KL(t,e);return n.subscribe.bind(n)}class KL{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");QL(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yp),i.error===void 0&&(i.error=yp),i.complete===void 0&&(i.complete=yp);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QL(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yp(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZL=1e3,XL=2,JL=4*60*60*1e3,eA=.5;function F2(t,e=ZL,n=XL){const r=e*Math.pow(n,t),i=Math.round(eA*r*(Math.random()-.5)*2);return Math.min(JL,r+i)}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}class An{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new OL;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rA(e))try{this.getOrInitializeService({instanceIdentifier:Ji})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Ji){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ji){return this.instances.has(e)}getOptions(e=Ji){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ji){return this.component?this.component.multipleInstances?e:Ji:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nA(t){return t===Ji?void 0:t}function rA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const oA={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},sA=pe.INFO,aA={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},lA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=aA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bh{constructor(e){this.name=e,this._logLevel=sA,this._logHandler=lA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const uA=(t,e)=>e.some(n=>t instanceof n);let W2,U2;function cA(){return W2||(W2=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dA(){return U2||(U2=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const H8=new WeakMap,Gm=new WeakMap,q8=new WeakMap,vp=new WeakMap,h1=new WeakMap;function hA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(ki(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&H8.set(n,t)}).catch(()=>{}),h1.set(e,t),e}function fA(t){if(Gm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Gm.set(t,e)}let Km={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||q8.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ki(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pA(t){Km=t(Km)}function mA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kp(this),e,...n);return q8.set(r,e.sort?e.sort():[e]),ki(r)}:dA().includes(t)?function(...e){return t.apply(kp(this),e),ki(H8.get(this))}:function(...e){return ki(t.apply(kp(this),e))}}function gA(t){return typeof t=="function"?mA(t):(t instanceof IDBTransaction&&fA(t),uA(t,cA())?new Proxy(t,Km):t)}function ki(t){if(t instanceof IDBRequest)return hA(t);if(vp.has(t))return vp.get(t);const e=gA(t);return e!==t&&(vp.set(t,e),h1.set(e,t)),e}const kp=t=>h1.get(t);function Y8(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=ki(s);return r&&s.addEventListener("upgradeneeded",l=>{r(ki(s.result),l.oldVersion,l.newVersion,ki(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const yA=["get","getKey","getAll","getAllKeys","count"],vA=["put","add","delete","clear"],_p=new Map;function $2(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_p.get(e))return _p.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=vA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yA.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&l.done]))[0]};return _p.set(e,o),o}pA(t=>({...t,get:(e,n,r)=>$2(e,n)||t.get(e,n,r),has:(e,n)=>!!$2(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_A(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _A(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qm="@firebase/app",z2="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Bh("@firebase/app"),EA="@firebase/app-compat",wA="@firebase/analytics-compat",xA="@firebase/analytics",TA="@firebase/app-check-compat",IA="@firebase/app-check",SA="@firebase/auth",CA="@firebase/auth-compat",LA="@firebase/database",AA="@firebase/data-connect",PA="@firebase/database-compat",RA="@firebase/functions",bA="@firebase/functions-compat",jA="@firebase/installations",MA="@firebase/installations-compat",NA="@firebase/messaging",OA="@firebase/messaging-compat",DA="@firebase/performance",VA="@firebase/performance-compat",FA="@firebase/remote-config",WA="@firebase/remote-config-compat",UA="@firebase/storage",$A="@firebase/storage-compat",zA="@firebase/firestore",BA="@firebase/vertexai-preview",HA="@firebase/firestore-compat",qA="firebase",YA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="[DEFAULT]",GA={[Qm]:"fire-core",[EA]:"fire-core-compat",[xA]:"fire-analytics",[wA]:"fire-analytics-compat",[IA]:"fire-app-check",[TA]:"fire-app-check-compat",[SA]:"fire-auth",[CA]:"fire-auth-compat",[LA]:"fire-rtdb",[AA]:"fire-data-connect",[PA]:"fire-rtdb-compat",[RA]:"fire-fn",[bA]:"fire-fn-compat",[jA]:"fire-iid",[MA]:"fire-iid-compat",[NA]:"fire-fcm",[OA]:"fire-fcm-compat",[DA]:"fire-perf",[VA]:"fire-perf-compat",[FA]:"fire-rc",[WA]:"fire-rc-compat",[UA]:"fire-gcs",[$A]:"fire-gcs-compat",[zA]:"fire-fst",[HA]:"fire-fst-compat",[BA]:"fire-vertex","fire-js":"fire-js",[qA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=new Map,KA=new Map,Xm=new Map;function B2(t,e){try{t.container.addComponent(e)}catch(n){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yn(t){const e=t.name;if(Xm.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;Xm.set(e,t);for(const n of Yd.values())B2(n,t);for(const n of KA.values())B2(n,t);return!0}function Di(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tr(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_i=new Ao("app","Firebase",QA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _i.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=YA;function G8(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw _i.create("bad-app-name",{appName:String(i)});if(n||(n=F8()),!n)throw _i.create("no-options");const o=Yd.get(i);if(o){if(ou(n,o.options)&&ou(r,o.config))return o;throw _i.create("duplicate-app",{appName:i})}const s=new iA(i);for(const l of Xm.values())s.addComponent(l);const a=new ZA(n,r,s);return Yd.set(i,a),a}function Hh(t=Zm){const e=Yd.get(t);if(!e&&t===Zm&&F8())return G8();if(!e)throw _i.create("no-app",{appName:t});return e}function ln(t,e,n){var r;let i=(r=GA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(a.join(" "));return}Yn(new An(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const XA="firebase-heartbeat-database",JA=1,su="firebase-heartbeat-store";let Ep=null;function K8(){return Ep||(Ep=Y8(XA,JA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(su)}catch(n){console.warn(n)}}}}).catch(t=>{throw _i.create("idb-open",{originalErrorMessage:t.message})})),Ep}async function eP(t){try{const n=(await K8()).transaction(su),r=await n.objectStore(su).get(Q8(t));return await n.done,r}catch(e){if(e instanceof Rn)Mr.warn(e.message);else{const n=_i.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mr.warn(n.message)}}}async function H2(t,e){try{const r=(await K8()).transaction(su,"readwrite");await r.objectStore(su).put(e,Q8(t)),await r.done}catch(n){if(n instanceof Rn)Mr.warn(n.message);else{const r=_i.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mr.warn(r.message)}}}function Q8(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tP=1024,nP=30*24*60*60*1e3;class rP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=q2();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=nP}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Mr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=q2(),{heartbeatsToSend:r,unsentEntries:i}=iP(this._heartbeatsCache.heartbeats),o=qd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Mr.warn(n),""}}}function q2(){return new Date().toISOString().substring(0,10)}function iP(t,e=tP){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Y2(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Y2(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z8()?B8().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return H2(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return H2(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Y2(t){return qd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(t){Yn(new An("platform-logger",e=>new kA(e),"PRIVATE")),Yn(new An("heartbeat",e=>new rP(e),"PRIVATE")),ln(Qm,z2,t),ln(Qm,z2,"esm2017"),ln("fire-js","")}sP("");function f1(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Z8(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aP=Z8,X8=new Ao("auth","Firebase",Z8());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=new Bh("@firebase/auth");function lP(t,...e){Gd.logLevel<=pe.WARN&&Gd.warn(`Auth (${Po}): ${t}`,...e)}function od(t,...e){Gd.logLevel<=pe.ERROR&&Gd.error(`Auth (${Po}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,...e){throw p1(t,...e)}function ir(t,...e){return p1(t,...e)}function J8(t,e,n){const r=Object.assign(Object.assign({},aP()),{[e]:n});return new Ao("auth","Firebase",r).create(e,{appName:t.name})}function Lr(t){return J8(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function p1(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return X8.create(t,...e)}function re(t,e,...n){if(!t)throw p1(e,...n)}function xr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw od(e),new Error(e)}function Nr(t,e){t||xr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uP(){return G2()==="http:"||G2()==="https:"}function G2(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uP()||$8()||"connection"in navigator)?navigator.onLine:!0}function dP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nr(n>e,"Short delay should be less than long delay!"),this.isMobile=DL()||WL()}get(){return cP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t,e){Nr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=new bu(3e4,6e4);function Fr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cr(t,e,n,r,i={}){return tx(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Ru(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:l},o);return FL()||(d.referrerPolicy="no-referrer"),ex.fetch()(nx(t,t.config.apiHost,n,a),d)})}async function tx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hP),e);try{const i=new mP(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Sc(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,d]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sc(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Sc(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Sc(t,"user-disabled",s);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw J8(t,f,d);Gn(t,f)}}catch(i){if(i instanceof Rn)throw i;Gn(t,"network-request-failed",{message:String(i)})}}async function ju(t,e,n,r,i={}){const o=await cr(t,e,n,r,i);return"mfaPendingCredential"in o&&Gn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function nx(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?m1(t.config,i):`${t.config.apiScheme}://${i}`}function pP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ir(this.auth,"network-request-failed")),fP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ir(t,e,r);return i.customData._tokenResponse=n,i}function K2(t){return t!==void 0&&t.enterprise!==void 0}class gP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function yP(t,e){return cr(t,"GET","/v2/recaptchaConfig",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vP(t,e){return cr(t,"POST","/v1/accounts:delete",e)}async function rx(t,e){return cr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kP(t,e=!1){const n=He(t),r=await n.getIdToken(e),i=g1(r);re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Rl(wp(i.auth_time)),issuedAtTime:Rl(wp(i.iat)),expirationTime:Rl(wp(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function wp(t){return Number(t)*1e3}function g1(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return od("JWT malformed, contained fewer than 3 sections"),null;try{const i=O8(n);return i?JSON.parse(i):(od("Failed to decode base64 JWT payload"),null)}catch(i){return od("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Q2(t){const e=g1(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&_P(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _P({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rl(this.lastLoginAt),this.creationTime=Rl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ca(t,rx(n,{idToken:r}));re(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?ix(o.providerUserInfo):[],a=xP(t.providerData,s),l=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?d:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new e0(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function wP(t){const e=He(t);await Kd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ix(t){return t.map(e=>{var{providerId:n}=e,r=f1(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(t,e){const n=await tx(t,{},async()=>{const r=Ru({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=nx(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ex.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function IP(t,e){return cr(t,"POST","/v2/accounts:revokeToken",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Q2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=Q2(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await TP(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Xs;return r&&(re(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(re(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(re(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xs,this.toJSON())}_performRefresh(){return xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=f1(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new EP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new e0(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await ca(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kP(this,e)}reload(){return wP(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Kd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tr(this.auth.app))return Promise.reject(Lr(this.auth));const e=await this.getIdToken();return await ca(this,vP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,E=(i=n.email)!==null&&i!==void 0?i:void 0,k=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,T=(s=n.photoURL)!==null&&s!==void 0?s:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(d=n.createdAt)!==null&&d!==void 0?d:void 0,g=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:_,emailVerified:x,isAnonymous:R,providerData:N,stsTokenManager:w}=n;re(_&&w,e,"internal-error");const I=Xs.fromJSON(this.name,w);re(typeof _=="string",e,"internal-error"),Br(m,e.name),Br(E,e.name),re(typeof x=="boolean",e,"internal-error"),re(typeof R=="boolean",e,"internal-error"),Br(k,e.name),Br(T,e.name),Br(A,e.name),Br(S,e.name),Br(y,e.name),Br(g,e.name);const P=new Tr({uid:_,auth:e,email:E,emailVerified:x,displayName:m,isAnonymous:R,photoURL:T,phoneNumber:k,tenantId:A,stsTokenManager:I,createdAt:y,lastLoginAt:g});return N&&Array.isArray(N)&&(P.providerData=N.map(b=>Object.assign({},b))),S&&(P._redirectEventId=S),P}static async _fromIdTokenResponse(e,n,r=!1){const i=new Xs;i.updateFromServerResponse(n);const o=new Tr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Kd(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];re(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?ix(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new Xs;a.updateFromIdToken(r);const l=new Tr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new e0(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2=new Map;function Ir(t){Nr(t instanceof Function,"Expected a class definition");let e=Z2.get(t);return e?(Nr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Z2.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ox.type="NONE";const X2=ox;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(t,e,n){return`firebase:${t}:${e}:${n}`}class Js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=sd(this.userKey,i.apiKey,o),this.fullPersistenceKey=sd("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Js(Ir(X2),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||Ir(X2);const s=sd(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const f=await d._get(s);if(f){const m=Tr._fromJSON(e,f);d!==o&&(a=m),o=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Js(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(s)}catch{}})),new Js(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J2(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ux(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dx(e))return"Blackberry";if(hx(e))return"Webos";if(ax(e))return"Safari";if((e.includes("chrome/")||lx(e))&&!e.includes("edge/"))return"Chrome";if(cx(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sx(t=Ot()){return/firefox\//i.test(t)}function ax(t=Ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lx(t=Ot()){return/crios\//i.test(t)}function ux(t=Ot()){return/iemobile/i.test(t)}function cx(t=Ot()){return/android/i.test(t)}function dx(t=Ot()){return/blackberry/i.test(t)}function hx(t=Ot()){return/webos/i.test(t)}function y1(t=Ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SP(t=Ot()){var e;return y1(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CP(){return UL()&&document.documentMode===10}function fx(t=Ot()){return y1(t)||cx(t)||hx(t)||dx(t)||/windows phone/i.test(t)||ux(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(t,e=[]){let n;switch(t){case"Browser":n=J2(Ot());break;case"Worker":n=`${J2(Ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Po}/${r}`}/**
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
 */class LP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function AP(t,e={}){return cr(t,"GET","/v2/passwordPolicy",Fr(t,e))}/**
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
 */const PP=6;class RP{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:PP,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ek(this),this.idTokenSubscription=new ek(this),this.beforeStateQueue=new LP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=X8,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ir(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rx(this,{idToken:e}),r=await Tr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tr(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tr(this.app))return Promise.reject(Lr(this));const n=e?He(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tr(this.app)?Promise.reject(Lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tr(this.app)?Promise.reject(Lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AP(this),n=new RP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ao("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await IP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ir(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Js.create(this,[Ir(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=px(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vi(t){return He(t)}class ek{constructor(e){this.auth=e,this.observer=null,this.addObserver=GL(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jP(t){qh=t}function mx(t){return qh.loadJS(t)}function MP(){return qh.recaptchaEnterpriseScript}function NP(){return qh.gapiScript}function OP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const DP="recaptcha-enterprise",VP="NO_RECAPTCHA";class FP{constructor(e){this.type=DP,this.auth=Vi(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{yP(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new gP(l);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,s(d.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;K2(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(d=>{s(d)}).catch(()=>{s(VP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&K2(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=MP();l.length!==0&&(l+=a),mx(l).then(()=>{i(a,o,s)}).catch(d=>{s(d)})}}).catch(a=>{s(a)})})}}async function tk(t,e,n,r=!1){const i=new FP(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Qd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await tk(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await tk(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(t,e){const n=Di(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(ou(o,e??{}))return i;Gn(i,"already-initialized")}return n.initialize({options:e})}function UP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ir);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $P(t,e,n){const r=Vi(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=gx(e),{host:s,port:a}=zP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),BP()}function gx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zP(t){const e=gx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:nk(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:nk(s)}}}function nk(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xr("not implemented")}_getIdTokenResponse(e){return xr("not implemented")}_linkToIdToken(e,n){return xr("not implemented")}_getReauthenticationResolver(e){return xr("not implemented")}}async function HP(t,e){return cr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qP(t,e){return ju(t,"POST","/v1/accounts:signInWithPassword",Fr(t,e))}async function YP(t,e){return cr(t,"POST","/v1/accounts:sendOobCode",Fr(t,e))}async function GP(t,e){return YP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KP(t,e){return ju(t,"POST","/v1/accounts:signInWithEmailLink",Fr(t,e))}async function QP(t,e){return ju(t,"POST","/v1/accounts:signInWithEmailLink",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends v1{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new au(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new au(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qd(e,n,"signInWithPassword",qP);case"emailLink":return KP(e,{email:this._email,oobCode:this._password});default:Gn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qd(e,r,"signUpPassword",HP);case"emailLink":return QP(e,{idToken:n,email:this._email,oobCode:this._password});default:Gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(t,e){return ju(t,"POST","/v1/accounts:signInWithIdp",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP="http://localhost";class ko extends v1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ko(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=f1(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new ko(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return ea(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ea(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ea(e,n)}buildRequest(){const e={requestUri:ZP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ru(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JP(t){const e=pl(ml(t)).link,n=e?pl(ml(e)).deep_link_id:null,r=pl(ml(t)).deep_link_id;return(r?pl(ml(r)).link:null)||r||n||e||t}class k1{constructor(e){var n,r,i,o,s,a;const l=pl(ml(e)),d=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,m=XP((i=l.mode)!==null&&i!==void 0?i:null);re(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=JP(e);try{return new k1(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this.providerId=Pa.PROVIDER_ID}static credential(e,n){return au._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=k1.parseLink(n);return re(r,"argument-error"),au._fromEmailAndCode(e,r.code,r.tenantId)}}Pa.PROVIDER_ID="password";Pa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu extends yx{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends Mu{constructor(){super("facebook.com")}static credential(e){return ko._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Mu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ko._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.GOOGLE_SIGN_IN_METHOD="google.com";_r.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Mu{constructor(){super("github.com")}static credential(e){return ko._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.GITHUB_SIGN_IN_METHOD="github.com";ei.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Mu{constructor(){super("twitter.com")}static credential(e,n){return ko._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ti.credential(n,r)}catch{return null}}}ti.TWITTER_SIGN_IN_METHOD="twitter.com";ti.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(t,e){return ju(t,"POST","/v1/accounts:signUp",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Tr._fromIdTokenResponse(e,r,i),s=rk(r);return new _o({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=rk(r);return new _o({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function rk(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd extends Rn{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Zd.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Zd(e,n,r,i)}}function vx(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Zd._fromErrorAndOperation(t,o,e,r):o})}async function tR(t,e,n=!1){const r=await ca(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _o._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(t,e,n=!1){const{auth:r}=t;if(tr(r.app))return Promise.reject(Lr(r));const i="reauthenticate";try{const o=await ca(t,vx(r,i,e,t),n);re(o.idToken,r,"internal-error");const s=g1(o.idToken);re(s,r,"internal-error");const{sub:a}=s;return re(t.uid===a,r,"user-mismatch"),_o._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Gn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kx(t,e,n=!1){if(tr(t.app))return Promise.reject(Lr(t));const r="signIn",i=await vx(t,r,e),o=await _o._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function rR(t,e){return kx(Vi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _x(t){const e=Vi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function iR(t,e,n){const r=Vi(t);await Qd(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",GP)}async function oR(t,e,n){if(tr(t.app))return Promise.reject(Lr(t));const r=Vi(t),s=await Qd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eR).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&_x(t),l}),a=await _o._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function sR(t,e,n){return tr(t.app)?Promise.reject(Lr(t)):rR(He(t),Pa.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_x(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aR(t,e){return cr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=He(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await ca(r,aR(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function uR(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function cR(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function dR(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function hR(t){return He(t).signOut()}async function fR(t){return He(t).delete()}const Xd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xd,"1"),this.storage.removeItem(Xd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=1e3,mR=10;class wx extends Ex{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);CP()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wx.type="LOCAL";const gR=wx;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx extends Ex{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xx.type="SESSION";const Tx=xx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Yh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async d=>d(n.origin,o)),l=await yR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const d=_1("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(m){const E=m;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(E.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(){return window}function kR(t){or().location.href=t}/**
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
 */function Ix(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function _R(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ER(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wR(){return Ix()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx="firebaseLocalStorageDb",xR=1,Jd="firebaseLocalStorage",Cx="fbase_key";class Nu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gh(t,e){return t.transaction([Jd],e?"readwrite":"readonly").objectStore(Jd)}function TR(){const t=indexedDB.deleteDatabase(Sx);return new Nu(t).toPromise()}function t0(){const t=indexedDB.open(Sx,xR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jd,{keyPath:Cx})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jd)?e(r):(r.close(),await TR(),e(await t0()))})})}async function ik(t,e,n){const r=Gh(t,!0).put({[Cx]:e,value:n});return new Nu(r).toPromise()}async function IR(t,e){const n=Gh(t,!1).get(e),r=await new Nu(n).toPromise();return r===void 0?null:r.value}function ok(t,e){const n=Gh(t,!0).delete(e);return new Nu(n).toPromise()}const SR=800,CR=3;class Lx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await t0(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>CR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ix()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yh._getInstance(wR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _R(),!this.activeServiceWorker)return;this.sender=new vR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ER()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await t0();return await ik(e,Xd,"1"),await ok(e,Xd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ik(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>IR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ok(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Gh(i,!1).getAll();return new Nu(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lx.type="LOCAL";const LR=Lx;new bu(3e4,6e4);/**
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
 */function AR(t,e){return e?Ir(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1 extends v1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ea(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ea(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ea(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PR(t){return kx(t.auth,new E1(t),t.bypassAuthState)}function RR(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),nR(n,new E1(t),t.bypassAuthState)}async function bR(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),tR(n,new E1(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PR;case"linkViaPopup":case"linkViaRedirect":return bR;case"reauthViaPopup":case"reauthViaRedirect":return RR;default:Gn(this.auth,"internal-error")}}resolve(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=new bu(2e3,1e4);class Bs extends Ax{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Bs.currentPopupAction&&Bs.currentPopupAction.cancel(),Bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Nr(this.filter.length===1,"Popup operations only handle one event");const e=_1();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jR.get())};e()}}Bs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR="pendingRedirect",ad=new Map;class NR extends Ax{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ad.get(this.auth._key());if(!e){try{const r=await OR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ad.set(this.auth._key(),e)}return this.bypassAuthState||ad.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OR(t,e){const n=FR(e),r=VR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function DR(t,e){ad.set(t._key(),e)}function VR(t){return Ir(t._redirectPersistence)}function FR(t){return sd(MR,t.config.apiKey,t.name)}async function WR(t,e,n=!1){if(tr(t.app))return Promise.reject(Lr(t));const r=Vi(t),i=AR(r,e),s=await new NR(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=10*60*1e3;class $R{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Px(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ir(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UR&&this.cachedEventUids.clear(),this.cachedEventUids.has(sk(e))}saveEventToCache(e){this.cachedEventUids.add(sk(e)),this.lastProcessedEventTime=Date.now()}}function sk(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Px({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Px(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BR(t,e={}){return cr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qR=/^https?/;async function YR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await BR(t);for(const n of e)try{if(GR(n))return}catch{}Gn(t,"unauthorized-domain")}function GR(t){const e=Jm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!qR.test(n))return!1;if(HR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const KR=new bu(3e4,6e4);function ak(){const t=or().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function QR(t){return new Promise((e,n)=>{var r,i,o;function s(){ak(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ak(),n(ir(t,"network-request-failed"))},timeout:KR.get()})}if(!((i=(r=or().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=or().gapi)===null||o===void 0)&&o.load)s();else{const a=OP("iframefcb");return or()[a]=()=>{gapi.load?s():n(ir(t,"network-request-failed"))},mx(`${NP()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ld=null,e})}let ld=null;function ZR(t){return ld=ld||QR(t),ld}/**
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
 */const XR=new bu(5e3,15e3),JR="__/auth/iframe",eb="emulator/auth/iframe",tb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rb(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?m1(e,eb):`https://${t.config.authDomain}/${JR}`,r={apiKey:e.apiKey,appName:t.name,v:Po},i=nb.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ru(r).slice(1)}`}async function ib(t){const e=await ZR(t),n=or().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:rb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tb,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=ir(t,"network-request-failed"),a=or().setTimeout(()=>{o(s)},XR.get());function l(){or().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const ob={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sb=500,ab=600,lb="_blank",ub="http://localhost";class lk{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cb(t,e,n,r=sb,i=ab){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ob),{width:r.toString(),height:i.toString(),top:o,left:s}),d=Ot().toLowerCase();n&&(a=lx(d)?lb:n),sx(d)&&(e=e||ub,l.scrollbars="yes");const f=Object.entries(l).reduce((E,[k,T])=>`${E}${k}=${T},`,"");if(SP(d)&&a!=="_self")return db(e||"",a),new lk(null);const m=window.open(e||"",a,f);re(m,t,"popup-blocked");try{m.focus()}catch{}return new lk(m)}function db(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const hb="__/auth/handler",fb="emulator/auth/handler",pb=encodeURIComponent("fac");async function uk(t,e,n,r,i,o){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Po,eventId:i};if(e instanceof yx){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",YL(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))s[f]=m}if(e instanceof Mu){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),d=l?`#${pb}=${encodeURIComponent(l)}`:"";return`${mb(t)}?${Ru(a).slice(1)}${d}`}function mb({config:t}){return t.emulator?m1(t,fb):`https://${t.authDomain}/${hb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="webStorageSupport";class gb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tx,this._completeRedirectFn=WR,this._overrideRedirectResult=DR}async _openPopup(e,n,r,i){var o;Nr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await uk(e,n,r,Jm(),i);return cb(e,s,_1())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await uk(e,n,r,Jm(),i);return kR(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Nr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ib(e),r=new $R(e);return n.register("authEvent",i=>(re(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xp,{type:xp},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[xp];s!==void 0&&n(!!s),Gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fx()||ax()||y1()}}const yb=gb;var ck="@firebase/auth",dk="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _b(t){Yn(new An("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;re(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:px(t)},d=new bP(r,i,o,l);return UP(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Yn(new An("auth-internal",e=>{const n=Vi(e.getProvider("auth").getImmediate());return(r=>new vb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(ck,dk,kb(t)),ln(ck,dk,"esm2017")}/**
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
 */const Eb=5*60,wb=W8("authIdTokenMaxAge")||Eb;let hk=null;const xb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wb)return;const i=n==null?void 0:n.token;hk!==i&&(hk=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Rx(t=Hh()){const e=Di(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WP(t,{popupRedirectResolver:yb,persistence:[LR,gR,Tx]}),r=W8("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=xb(o.toString());cR(n,s,()=>s(n.currentUser)),uR(n,a=>s(a))}}const i=D8("auth");return i&&$P(n,`http://${i}`),n}function Tb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}jP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=ir("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Tb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_b("Browser");var Ib="firebase",Sb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(Ib,Sb,"app");var fk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var co,bx;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,I){function P(){}P.prototype=I.prototype,w.D=I.prototype,w.prototype=new P,w.prototype.constructor=w,w.C=function(b,j,O){for(var C=Array(arguments.length-2),K=2;K<arguments.length;K++)C[K-2]=arguments[K];return I.prototype[j].apply(b,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,I,P){P||(P=0);var b=Array(16);if(typeof I=="string")for(var j=0;16>j;++j)b[j]=I.charCodeAt(P++)|I.charCodeAt(P++)<<8|I.charCodeAt(P++)<<16|I.charCodeAt(P++)<<24;else for(j=0;16>j;++j)b[j]=I[P++]|I[P++]<<8|I[P++]<<16|I[P++]<<24;I=w.g[0],P=w.g[1],j=w.g[2];var O=w.g[3],C=I+(O^P&(j^O))+b[0]+3614090360&4294967295;I=P+(C<<7&4294967295|C>>>25),C=O+(j^I&(P^j))+b[1]+3905402710&4294967295,O=I+(C<<12&4294967295|C>>>20),C=j+(P^O&(I^P))+b[2]+606105819&4294967295,j=O+(C<<17&4294967295|C>>>15),C=P+(I^j&(O^I))+b[3]+3250441966&4294967295,P=j+(C<<22&4294967295|C>>>10),C=I+(O^P&(j^O))+b[4]+4118548399&4294967295,I=P+(C<<7&4294967295|C>>>25),C=O+(j^I&(P^j))+b[5]+1200080426&4294967295,O=I+(C<<12&4294967295|C>>>20),C=j+(P^O&(I^P))+b[6]+2821735955&4294967295,j=O+(C<<17&4294967295|C>>>15),C=P+(I^j&(O^I))+b[7]+4249261313&4294967295,P=j+(C<<22&4294967295|C>>>10),C=I+(O^P&(j^O))+b[8]+1770035416&4294967295,I=P+(C<<7&4294967295|C>>>25),C=O+(j^I&(P^j))+b[9]+2336552879&4294967295,O=I+(C<<12&4294967295|C>>>20),C=j+(P^O&(I^P))+b[10]+4294925233&4294967295,j=O+(C<<17&4294967295|C>>>15),C=P+(I^j&(O^I))+b[11]+2304563134&4294967295,P=j+(C<<22&4294967295|C>>>10),C=I+(O^P&(j^O))+b[12]+1804603682&4294967295,I=P+(C<<7&4294967295|C>>>25),C=O+(j^I&(P^j))+b[13]+4254626195&4294967295,O=I+(C<<12&4294967295|C>>>20),C=j+(P^O&(I^P))+b[14]+2792965006&4294967295,j=O+(C<<17&4294967295|C>>>15),C=P+(I^j&(O^I))+b[15]+1236535329&4294967295,P=j+(C<<22&4294967295|C>>>10),C=I+(j^O&(P^j))+b[1]+4129170786&4294967295,I=P+(C<<5&4294967295|C>>>27),C=O+(P^j&(I^P))+b[6]+3225465664&4294967295,O=I+(C<<9&4294967295|C>>>23),C=j+(I^P&(O^I))+b[11]+643717713&4294967295,j=O+(C<<14&4294967295|C>>>18),C=P+(O^I&(j^O))+b[0]+3921069994&4294967295,P=j+(C<<20&4294967295|C>>>12),C=I+(j^O&(P^j))+b[5]+3593408605&4294967295,I=P+(C<<5&4294967295|C>>>27),C=O+(P^j&(I^P))+b[10]+38016083&4294967295,O=I+(C<<9&4294967295|C>>>23),C=j+(I^P&(O^I))+b[15]+3634488961&4294967295,j=O+(C<<14&4294967295|C>>>18),C=P+(O^I&(j^O))+b[4]+3889429448&4294967295,P=j+(C<<20&4294967295|C>>>12),C=I+(j^O&(P^j))+b[9]+568446438&4294967295,I=P+(C<<5&4294967295|C>>>27),C=O+(P^j&(I^P))+b[14]+3275163606&4294967295,O=I+(C<<9&4294967295|C>>>23),C=j+(I^P&(O^I))+b[3]+4107603335&4294967295,j=O+(C<<14&4294967295|C>>>18),C=P+(O^I&(j^O))+b[8]+1163531501&4294967295,P=j+(C<<20&4294967295|C>>>12),C=I+(j^O&(P^j))+b[13]+2850285829&4294967295,I=P+(C<<5&4294967295|C>>>27),C=O+(P^j&(I^P))+b[2]+4243563512&4294967295,O=I+(C<<9&4294967295|C>>>23),C=j+(I^P&(O^I))+b[7]+1735328473&4294967295,j=O+(C<<14&4294967295|C>>>18),C=P+(O^I&(j^O))+b[12]+2368359562&4294967295,P=j+(C<<20&4294967295|C>>>12),C=I+(P^j^O)+b[5]+4294588738&4294967295,I=P+(C<<4&4294967295|C>>>28),C=O+(I^P^j)+b[8]+2272392833&4294967295,O=I+(C<<11&4294967295|C>>>21),C=j+(O^I^P)+b[11]+1839030562&4294967295,j=O+(C<<16&4294967295|C>>>16),C=P+(j^O^I)+b[14]+4259657740&4294967295,P=j+(C<<23&4294967295|C>>>9),C=I+(P^j^O)+b[1]+2763975236&4294967295,I=P+(C<<4&4294967295|C>>>28),C=O+(I^P^j)+b[4]+1272893353&4294967295,O=I+(C<<11&4294967295|C>>>21),C=j+(O^I^P)+b[7]+4139469664&4294967295,j=O+(C<<16&4294967295|C>>>16),C=P+(j^O^I)+b[10]+3200236656&4294967295,P=j+(C<<23&4294967295|C>>>9),C=I+(P^j^O)+b[13]+681279174&4294967295,I=P+(C<<4&4294967295|C>>>28),C=O+(I^P^j)+b[0]+3936430074&4294967295,O=I+(C<<11&4294967295|C>>>21),C=j+(O^I^P)+b[3]+3572445317&4294967295,j=O+(C<<16&4294967295|C>>>16),C=P+(j^O^I)+b[6]+76029189&4294967295,P=j+(C<<23&4294967295|C>>>9),C=I+(P^j^O)+b[9]+3654602809&4294967295,I=P+(C<<4&4294967295|C>>>28),C=O+(I^P^j)+b[12]+3873151461&4294967295,O=I+(C<<11&4294967295|C>>>21),C=j+(O^I^P)+b[15]+530742520&4294967295,j=O+(C<<16&4294967295|C>>>16),C=P+(j^O^I)+b[2]+3299628645&4294967295,P=j+(C<<23&4294967295|C>>>9),C=I+(j^(P|~O))+b[0]+4096336452&4294967295,I=P+(C<<6&4294967295|C>>>26),C=O+(P^(I|~j))+b[7]+1126891415&4294967295,O=I+(C<<10&4294967295|C>>>22),C=j+(I^(O|~P))+b[14]+2878612391&4294967295,j=O+(C<<15&4294967295|C>>>17),C=P+(O^(j|~I))+b[5]+4237533241&4294967295,P=j+(C<<21&4294967295|C>>>11),C=I+(j^(P|~O))+b[12]+1700485571&4294967295,I=P+(C<<6&4294967295|C>>>26),C=O+(P^(I|~j))+b[3]+2399980690&4294967295,O=I+(C<<10&4294967295|C>>>22),C=j+(I^(O|~P))+b[10]+4293915773&4294967295,j=O+(C<<15&4294967295|C>>>17),C=P+(O^(j|~I))+b[1]+2240044497&4294967295,P=j+(C<<21&4294967295|C>>>11),C=I+(j^(P|~O))+b[8]+1873313359&4294967295,I=P+(C<<6&4294967295|C>>>26),C=O+(P^(I|~j))+b[15]+4264355552&4294967295,O=I+(C<<10&4294967295|C>>>22),C=j+(I^(O|~P))+b[6]+2734768916&4294967295,j=O+(C<<15&4294967295|C>>>17),C=P+(O^(j|~I))+b[13]+1309151649&4294967295,P=j+(C<<21&4294967295|C>>>11),C=I+(j^(P|~O))+b[4]+4149444226&4294967295,I=P+(C<<6&4294967295|C>>>26),C=O+(P^(I|~j))+b[11]+3174756917&4294967295,O=I+(C<<10&4294967295|C>>>22),C=j+(I^(O|~P))+b[2]+718787259&4294967295,j=O+(C<<15&4294967295|C>>>17),C=P+(O^(j|~I))+b[9]+3951481745&4294967295,w.g[0]=w.g[0]+I&4294967295,w.g[1]=w.g[1]+(j+(C<<21&4294967295|C>>>11))&4294967295,w.g[2]=w.g[2]+j&4294967295,w.g[3]=w.g[3]+O&4294967295}r.prototype.u=function(w,I){I===void 0&&(I=w.length);for(var P=I-this.blockSize,b=this.B,j=this.h,O=0;O<I;){if(j==0)for(;O<=P;)i(this,w,O),O+=this.blockSize;if(typeof w=="string"){for(;O<I;)if(b[j++]=w.charCodeAt(O++),j==this.blockSize){i(this,b),j=0;break}}else for(;O<I;)if(b[j++]=w[O++],j==this.blockSize){i(this,b),j=0;break}}this.h=j,this.o+=I},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var I=1;I<w.length-8;++I)w[I]=0;var P=8*this.o;for(I=w.length-8;I<w.length;++I)w[I]=P&255,P/=256;for(this.u(w),w=Array(16),I=P=0;4>I;++I)for(var b=0;32>b;b+=8)w[P++]=this.g[I]>>>b&255;return w};function o(w,I){var P=a;return Object.prototype.hasOwnProperty.call(P,w)?P[w]:P[w]=I(w)}function s(w,I){this.h=I;for(var P=[],b=!0,j=w.length-1;0<=j;j--){var O=w[j]|0;b&&O==I||(P[j]=O,b=!1)}this.g=P}var a={};function l(w){return-128<=w&&128>w?o(w,function(I){return new s([I|0],0>I?-1:0)}):new s([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return S(d(-w));for(var I=[],P=1,b=0;w>=P;b++)I[b]=w/P|0,P*=4294967296;return new s(I,0)}function f(w,I){if(w.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(w.charAt(0)=="-")return S(f(w.substring(1),I));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=d(Math.pow(I,8)),b=m,j=0;j<w.length;j+=8){var O=Math.min(8,w.length-j),C=parseInt(w.substring(j,j+O),I);8>O?(O=d(Math.pow(I,O)),b=b.j(O).add(d(C))):(b=b.j(P),b=b.add(d(C)))}return b}var m=l(0),E=l(1),k=l(16777216);t=s.prototype,t.m=function(){if(A(this))return-S(this).m();for(var w=0,I=1,P=0;P<this.g.length;P++){var b=this.i(P);w+=(0<=b?b:4294967296+b)*I,I*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(T(this))return"0";if(A(this))return"-"+S(this).toString(w);for(var I=d(Math.pow(w,6)),P=this,b="";;){var j=x(P,I).g;P=y(P,j.j(I));var O=((0<P.g.length?P.g[0]:P.h)>>>0).toString(w);if(P=j,T(P))return O+b;for(;6>O.length;)O="0"+O;b=O+b}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function T(w){if(w.h!=0)return!1;for(var I=0;I<w.g.length;I++)if(w.g[I]!=0)return!1;return!0}function A(w){return w.h==-1}t.l=function(w){return w=y(this,w),A(w)?-1:T(w)?0:1};function S(w){for(var I=w.g.length,P=[],b=0;b<I;b++)P[b]=~w.g[b];return new s(P,~w.h).add(E)}t.abs=function(){return A(this)?S(this):this},t.add=function(w){for(var I=Math.max(this.g.length,w.g.length),P=[],b=0,j=0;j<=I;j++){var O=b+(this.i(j)&65535)+(w.i(j)&65535),C=(O>>>16)+(this.i(j)>>>16)+(w.i(j)>>>16);b=C>>>16,O&=65535,C&=65535,P[j]=C<<16|O}return new s(P,P[P.length-1]&-2147483648?-1:0)};function y(w,I){return w.add(S(I))}t.j=function(w){if(T(this)||T(w))return m;if(A(this))return A(w)?S(this).j(S(w)):S(S(this).j(w));if(A(w))return S(this.j(S(w)));if(0>this.l(k)&&0>w.l(k))return d(this.m()*w.m());for(var I=this.g.length+w.g.length,P=[],b=0;b<2*I;b++)P[b]=0;for(b=0;b<this.g.length;b++)for(var j=0;j<w.g.length;j++){var O=this.i(b)>>>16,C=this.i(b)&65535,K=w.i(j)>>>16,ie=w.i(j)&65535;P[2*b+2*j]+=C*ie,g(P,2*b+2*j),P[2*b+2*j+1]+=O*ie,g(P,2*b+2*j+1),P[2*b+2*j+1]+=C*K,g(P,2*b+2*j+1),P[2*b+2*j+2]+=O*K,g(P,2*b+2*j+2)}for(b=0;b<I;b++)P[b]=P[2*b+1]<<16|P[2*b];for(b=I;b<2*I;b++)P[b]=0;return new s(P,0)};function g(w,I){for(;(w[I]&65535)!=w[I];)w[I+1]+=w[I]>>>16,w[I]&=65535,I++}function _(w,I){this.g=w,this.h=I}function x(w,I){if(T(I))throw Error("division by zero");if(T(w))return new _(m,m);if(A(w))return I=x(S(w),I),new _(S(I.g),S(I.h));if(A(I))return I=x(w,S(I)),new _(S(I.g),I.h);if(30<w.g.length){if(A(w)||A(I))throw Error("slowDivide_ only works with positive integers.");for(var P=E,b=I;0>=b.l(w);)P=R(P),b=R(b);var j=N(P,1),O=N(b,1);for(b=N(b,2),P=N(P,2);!T(b);){var C=O.add(b);0>=C.l(w)&&(j=j.add(P),O=C),b=N(b,1),P=N(P,1)}return I=y(w,j.j(I)),new _(j,I)}for(j=m;0<=w.l(I);){for(P=Math.max(1,Math.floor(w.m()/I.m())),b=Math.ceil(Math.log(P)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),O=d(P),C=O.j(I);A(C)||0<C.l(w);)P-=b,O=d(P),C=O.j(I);T(O)&&(O=E),j=j.add(O),w=y(w,C)}return new _(j,w)}t.A=function(w){return x(this,w).h},t.and=function(w){for(var I=Math.max(this.g.length,w.g.length),P=[],b=0;b<I;b++)P[b]=this.i(b)&w.i(b);return new s(P,this.h&w.h)},t.or=function(w){for(var I=Math.max(this.g.length,w.g.length),P=[],b=0;b<I;b++)P[b]=this.i(b)|w.i(b);return new s(P,this.h|w.h)},t.xor=function(w){for(var I=Math.max(this.g.length,w.g.length),P=[],b=0;b<I;b++)P[b]=this.i(b)^w.i(b);return new s(P,this.h^w.h)};function R(w){for(var I=w.g.length+1,P=[],b=0;b<I;b++)P[b]=w.i(b)<<1|w.i(b-1)>>>31;return new s(P,w.h)}function N(w,I){var P=I>>5;I%=32;for(var b=w.g.length-P,j=[],O=0;O<b;O++)j[O]=0<I?w.i(O+P)>>>I|w.i(O+P+1)<<32-I:w.i(O+P);return new s(j,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,bx=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=d,s.fromString=f,co=s}).apply(typeof fk<"u"?fk:typeof self<"u"?self:typeof window<"u"?window:{});var Cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jx,gl,Mx,ud,n0,Nx,Ox,Dx;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,v){return u==Array.prototype||u==Object.prototype||(u[p]=v.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cc=="object"&&Cc];for(var p=0;p<u.length;++p){var v=u[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=n(this);function i(u,p){if(p)e:{var v=r;u=u.split(".");for(var L=0;L<u.length-1;L++){var F=u[L];if(!(F in v))break e;v=v[F]}u=u[u.length-1],L=v[u],p=p(L),p!=L&&p!=null&&e(v,u,{configurable:!0,writable:!0,value:p})}}function o(u,p){u instanceof String&&(u+="");var v=0,L=!1,F={next:function(){if(!L&&v<u.length){var W=v++;return{value:p(W,u[W]),done:!1}}return L=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}i("Array.prototype.values",function(u){return u||function(){return o(this,function(p,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function l(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function d(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function f(u,p,v){return u.call.apply(u.bind,arguments)}function m(u,p,v){if(!u)throw Error();if(2<arguments.length){var L=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,L),u.apply(p,F)}}return function(){return u.apply(p,arguments)}}function E(u,p,v){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,E.apply(null,arguments)}function k(u,p){var v=Array.prototype.slice.call(arguments,1);return function(){var L=v.slice();return L.push.apply(L,arguments),u.apply(this,L)}}function T(u,p){function v(){}v.prototype=p.prototype,u.aa=p.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(L,F,W){for(var q=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)q[Ae-2]=arguments[Ae];return p.prototype[F].apply(L,q)}}function A(u){const p=u.length;if(0<p){const v=Array(p);for(let L=0;L<p;L++)v[L]=u[L];return v}return[]}function S(u,p){for(let v=1;v<arguments.length;v++){const L=arguments[v];if(l(L)){const F=u.length||0,W=L.length||0;u.length=F+W;for(let q=0;q<W;q++)u[F+q]=L[q]}else u.push(L)}}class y{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function g(u){return/^[\s\xa0]*$/.test(u)}function _(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function x(u){return x[" "](u),u}x[" "]=function(){};var R=_().indexOf("Gecko")!=-1&&!(_().toLowerCase().indexOf("webkit")!=-1&&_().indexOf("Edge")==-1)&&!(_().indexOf("Trident")!=-1||_().indexOf("MSIE")!=-1)&&_().indexOf("Edge")==-1;function N(u,p,v){for(const L in u)p.call(v,u[L],L,u)}function w(u,p){for(const v in u)p.call(void 0,u[v],v,u)}function I(u){const p={};for(const v in u)p[v]=u[v];return p}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(u,p){let v,L;for(let F=1;F<arguments.length;F++){L=arguments[F];for(v in L)u[v]=L[v];for(let W=0;W<P.length;W++)v=P[W],Object.prototype.hasOwnProperty.call(L,v)&&(u[v]=L[v])}}function j(u){var p=1;u=u.split(":");const v=[];for(;0<p&&u.length;)v.push(u.shift()),p--;return u.length&&v.push(u.join(":")),v}function O(u){a.setTimeout(()=>{throw u},0)}function C(){var u=G;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class K{constructor(){this.h=this.g=null}add(p,v){const L=ie.get();L.set(p,v),this.h?this.h.next=L:this.g=L,this.h=L}}var ie=new y(()=>new ee,u=>u.reset());class ee{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let z,$=!1,G=new K,J=()=>{const u=a.Promise.resolve(void 0);z=()=>{u.then(le)}};var le=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(v){O(v)}var p=ie;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}$=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Fe=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};a.addEventListener("test",v,p),a.removeEventListener("test",v,p)}catch{}return u}();function Pe(u,p){if(he.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,L=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(R){e:{try{x(p.nodeName);var F=!0;break e}catch{}F=!1}F||(p=null)}}else v=="mouseover"?p=u.fromElement:v=="mouseout"&&(p=u.toElement);this.relatedTarget=p,L?(this.clientX=L.clientX!==void 0?L.clientX:L.pageX,this.clientY=L.clientY!==void 0?L.clientY:L.pageY,this.screenX=L.screenX||0,this.screenY=L.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Qe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Pe.aa.h.call(this)}}T(Pe,he);var Qe={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var We="closure_listenable_"+(1e6*Math.random()|0),xt=0;function Vt(u,p,v,L,F){this.listener=u,this.proxy=null,this.src=p,this.type=v,this.capture=!!L,this.ha=F,this.key=++xt,this.da=this.fa=!1}function Kt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Tt(u){this.src=u,this.g={},this.h=0}Tt.prototype.add=function(u,p,v,L,F){var W=u.toString();u=this.g[W],u||(u=this.g[W]=[],this.h++);var q=Ui(u,p,L,F);return-1<q?(p=u[q],v||(p.fa=!1)):(p=new Vt(p,this.src,W,!!L,F),p.fa=v,u.push(p)),p};function It(u,p){var v=p.type;if(v in u.g){var L=u.g[v],F=Array.prototype.indexOf.call(L,p,void 0),W;(W=0<=F)&&Array.prototype.splice.call(L,F,1),W&&(Kt(p),u.g[v].length==0&&(delete u.g[v],u.h--))}}function Ui(u,p,v,L){for(var F=0;F<u.length;++F){var W=u[F];if(!W.da&&W.listener==p&&W.capture==!!v&&W.ha==L)return F}return-1}var $i="closure_lm_"+(1e6*Math.random()|0),zi={};function ot(u,p,v,L,F){if(Array.isArray(p)){for(var W=0;W<p.length;W++)ot(u,p[W],v,L,F);return null}return v=Ty(v),u&&u[We]?u.K(p,v,d(L)?!!L.capture:!1,F):D(u,p,v,!1,L,F)}function D(u,p,v,L,F,W){if(!p)throw Error("Invalid event type");var q=d(F)?!!F.capture:!!F,Ae=gs(u);if(Ae||(u[$i]=Ae=new Tt(u)),v=Ae.add(p,v,L,q,W),v.proxy)return v;if(L=ce(),v.proxy=L,L.src=u,L.listener=v,u.addEventListener)Fe||(F=q),F===void 0&&(F=!1),u.addEventListener(p.toString(),L,F);else if(u.attachEvent)u.attachEvent(Ie(p.toString()),L);else if(u.addListener&&u.removeListener)u.addListener(L);else throw Error("addEventListener and attachEvent are unavailable.");return v}function ce(){function u(v){return p.call(u.src,u.listener,v)}const p=st;return u}function ke(u,p,v,L,F){if(Array.isArray(p))for(var W=0;W<p.length;W++)ke(u,p[W],v,L,F);else L=d(L)?!!L.capture:!!L,v=Ty(v),u&&u[We]?(u=u.i,p=String(p).toString(),p in u.g&&(W=u.g[p],v=Ui(W,v,L,F),-1<v&&(Kt(W[v]),Array.prototype.splice.call(W,v,1),W.length==0&&(delete u.g[p],u.h--)))):u&&(u=gs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Ui(p,v,L,F)),(v=-1<u?p[u]:null)&&ge(v))}function ge(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[We])It(p.i,u);else{var v=u.type,L=u.proxy;p.removeEventListener?p.removeEventListener(v,L,u.capture):p.detachEvent?p.detachEvent(Ie(v),L):p.addListener&&p.removeListener&&p.removeListener(L),(v=gs(p))?(It(v,u),v.h==0&&(v.src=null,p[$i]=null)):Kt(u)}}}function Ie(u){return u in zi?zi[u]:zi[u]="on"+u}function st(u,p){if(u.da)u=!0;else{p=new Pe(p,this);var v=u.listener,L=u.ha||u.src;u.fa&&ge(u),u=v.call(L,p)}return u}function gs(u){return u=u[$i],u instanceof Tt?u:null}var Oa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ty(u){return typeof u=="function"?u:(u[Oa]||(u[Oa]=function(p){return u.handleEvent(p)}),u[Oa])}function St(){ne.call(this),this.i=new Tt(this),this.M=this,this.F=null}T(St,ne),St.prototype[We]=!0,St.prototype.removeEventListener=function(u,p,v,L){ke(this,u,p,v,L)};function Ft(u,p){var v,L=u.F;if(L)for(v=[];L;L=L.F)v.push(L);if(u=u.M,L=p.type||p,typeof p=="string")p=new he(p,u);else if(p instanceof he)p.target=p.target||u;else{var F=p;p=new he(L,u),b(p,F)}if(F=!0,v)for(var W=v.length-1;0<=W;W--){var q=p.g=v[W];F=Yu(q,L,!0,p)&&F}if(q=p.g=u,F=Yu(q,L,!0,p)&&F,F=Yu(q,L,!1,p)&&F,v)for(W=0;W<v.length;W++)q=p.g=v[W],F=Yu(q,L,!1,p)&&F}St.prototype.N=function(){if(St.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var v=u.g[p],L=0;L<v.length;L++)Kt(v[L]);delete u.g[p],u.h--}}this.F=null},St.prototype.K=function(u,p,v,L){return this.i.add(String(u),p,!1,v,L)},St.prototype.L=function(u,p,v,L){return this.i.add(String(u),p,!0,v,L)};function Yu(u,p,v,L){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var F=!0,W=0;W<p.length;++W){var q=p[W];if(q&&!q.da&&q.capture==v){var Ae=q.listener,mt=q.ha||q.src;q.fa&&It(u.i,q),F=Ae.call(mt,L)!==!1&&F}}return F&&!L.defaultPrevented}function Iy(u,p,v){if(typeof u=="function")v&&(u=E(u,v));else if(u&&typeof u.handleEvent=="function")u=E(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function Sy(u){u.g=Iy(()=>{u.g=null,u.i&&(u.i=!1,Sy(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class LI extends ne{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Sy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Da(u){ne.call(this),this.h=u,this.g={}}T(Da,ne);var Cy=[];function Ly(u){N(u.g,function(p,v){this.g.hasOwnProperty(v)&&ge(p)},u),u.g={}}Da.prototype.N=function(){Da.aa.N.call(this),Ly(this)},Da.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lf=a.JSON.stringify,AI=a.JSON.parse,PI=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Af(){}Af.prototype.h=null;function Ay(u){return u.h||(u.h=u.i())}function Py(){}var Va={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Pf(){he.call(this,"d")}T(Pf,he);function Rf(){he.call(this,"c")}T(Rf,he);var Bi={},Ry=null;function Gu(){return Ry=Ry||new St}Bi.La="serverreachability";function by(u){he.call(this,Bi.La,u)}T(by,he);function Fa(u){const p=Gu();Ft(p,new by(p))}Bi.STAT_EVENT="statevent";function jy(u,p){he.call(this,Bi.STAT_EVENT,u),this.stat=p}T(jy,he);function Wt(u){const p=Gu();Ft(p,new jy(p,u))}Bi.Ma="timingevent";function My(u,p){he.call(this,Bi.Ma,u),this.size=p}T(My,he);function Wa(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function Ua(){this.g=!0}Ua.prototype.xa=function(){this.g=!1};function RI(u,p,v,L,F,W){u.info(function(){if(u.g)if(W)for(var q="",Ae=W.split("&"),mt=0;mt<Ae.length;mt++){var Ee=Ae[mt].split("=");if(1<Ee.length){var Ct=Ee[0];Ee=Ee[1];var Lt=Ct.split("_");q=2<=Lt.length&&Lt[1]=="type"?q+(Ct+"="+Ee+"&"):q+(Ct+"=redacted&")}}else q=null;else q=W;return"XMLHTTP REQ ("+L+") [attempt "+F+"]: "+p+`
`+v+`
`+q})}function bI(u,p,v,L,F,W,q){u.info(function(){return"XMLHTTP RESP ("+L+") [ attempt "+F+"]: "+p+`
`+v+`
`+W+" "+q})}function ys(u,p,v,L){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+MI(u,v)+(L?" "+L:"")})}function jI(u,p){u.info(function(){return"TIMEOUT: "+p})}Ua.prototype.info=function(){};function MI(u,p){if(!u.g)return p;if(!p)return null;try{var v=JSON.parse(p);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var L=v[u];if(!(2>L.length)){var F=L[1];if(Array.isArray(F)&&!(1>F.length)){var W=F[0];if(W!="noop"&&W!="stop"&&W!="close")for(var q=1;q<F.length;q++)F[q]=""}}}}return Lf(v)}catch{return p}}var Ku={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ny={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},bf;function Qu(){}T(Qu,Af),Qu.prototype.g=function(){return new XMLHttpRequest},Qu.prototype.i=function(){return{}},bf=new Qu;function Wr(u,p,v,L){this.j=u,this.i=p,this.l=v,this.R=L||1,this.U=new Da(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oy}function Oy(){this.i=null,this.g="",this.h=!1}var Dy={},jf={};function Mf(u,p,v){u.L=1,u.v=ec(pr(p)),u.m=v,u.P=!0,Vy(u,null)}function Vy(u,p){u.F=Date.now(),Zu(u),u.A=pr(u.v);var v=u.A,L=u.R;Array.isArray(L)||(L=[String(L)]),Xy(v.i,"t",L),u.C=0,v=u.j.J,u.h=new Oy,u.g=gv(u.j,v?p:null,!u.m),0<u.O&&(u.M=new LI(E(u.Y,u,u.g),u.O)),p=u.U,v=u.g,L=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(Cy[0]=F.toString()),F=Cy);for(var W=0;W<F.length;W++){var q=ot(v,F[W],L||p.handleEvent,!1,p.h||p);if(!q)break;p.g[q.key]=q}p=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Fa(),RI(u.i,u.u,u.A,u.l,u.R,u.m)}Wr.prototype.ca=function(u){u=u.target;const p=this.M;p&&mr(u)==3?p.j():this.Y(u)},Wr.prototype.Y=function(u){try{if(u==this.g)e:{const Lt=mr(this.g);var p=this.g.Ba();const _s=this.g.Z();if(!(3>Lt)&&(Lt!=3||this.g&&(this.h.h||this.g.oa()||ov(this.g)))){this.J||Lt!=4||p==7||(p==8||0>=_s?Fa(3):Fa(2)),Nf(this);var v=this.g.Z();this.X=v;t:if(Fy(this)){var L=ov(this.g);u="";var F=L.length,W=mr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hi(this),$a(this);var q="";break t}this.h.i=new a.TextDecoder}for(p=0;p<F;p++)this.h.h=!0,u+=this.h.i.decode(L[p],{stream:!(W&&p==F-1)});L.length=0,this.h.g+=u,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=v==200,bI(this.i,this.u,this.A,this.l,this.R,Lt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ae,mt=this.g;if((Ae=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(Ae)){var Ee=Ae;break t}}Ee=null}if(v=Ee)ys(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Of(this,v);else{this.o=!1,this.s=3,Wt(12),Hi(this),$a(this);break e}}if(this.P){v=!0;let bn;for(;!this.J&&this.C<q.length;)if(bn=NI(this,q),bn==jf){Lt==4&&(this.s=4,Wt(14),v=!1),ys(this.i,this.l,null,"[Incomplete Response]");break}else if(bn==Dy){this.s=4,Wt(15),ys(this.i,this.l,q,"[Invalid Chunk]"),v=!1;break}else ys(this.i,this.l,bn,null),Of(this,bn);if(Fy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Lt!=4||q.length!=0||this.h.h||(this.s=1,Wt(16),v=!1),this.o=this.o&&v,!v)ys(this.i,this.l,q,"[Invalid Chunked Response]"),Hi(this),$a(this);else if(0<q.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),$f(Ct),Ct.M=!0,Wt(11))}}else ys(this.i,this.l,q,null),Of(this,q);Lt==4&&Hi(this),this.o&&!this.J&&(Lt==4?hv(this.j,this):(this.o=!1,Zu(this)))}else XI(this.g),v==400&&0<q.indexOf("Unknown SID")?(this.s=3,Wt(12)):(this.s=0,Wt(13)),Hi(this),$a(this)}}}catch{}finally{}};function Fy(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function NI(u,p){var v=u.C,L=p.indexOf(`
`,v);return L==-1?jf:(v=Number(p.substring(v,L)),isNaN(v)?Dy:(L+=1,L+v>p.length?jf:(p=p.slice(L,L+v),u.C=L+v,p)))}Wr.prototype.cancel=function(){this.J=!0,Hi(this)};function Zu(u){u.S=Date.now()+u.I,Wy(u,u.I)}function Wy(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Wa(E(u.ba,u),p)}function Nf(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Wr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(jI(this.i,this.A),this.L!=2&&(Fa(),Wt(17)),Hi(this),this.s=2,$a(this)):Wy(this,this.S-u)};function $a(u){u.j.G==0||u.J||hv(u.j,u)}function Hi(u){Nf(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Ly(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function Of(u,p){try{var v=u.j;if(v.G!=0&&(v.g==u||Df(v.h,u))){if(!u.K&&Df(v.h,u)&&v.G==3){try{var L=v.Da.g.parse(p)}catch{L=null}if(Array.isArray(L)&&L.length==3){var F=L;if(F[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)sc(v),ic(v);else break e;Uf(v),Wt(18)}}else v.za=F[1],0<v.za-v.T&&37500>F[2]&&v.F&&v.v==0&&!v.C&&(v.C=Wa(E(v.Za,v),6e3));if(1>=zy(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Yi(v,11)}else if((u.K||v.g==u)&&sc(v),!g(p))for(F=v.Da.g.parse(p),p=0;p<F.length;p++){let Ee=F[p];if(v.T=Ee[0],Ee=Ee[1],v.G==2)if(Ee[0]=="c"){v.K=Ee[1],v.ia=Ee[2];const Ct=Ee[3];Ct!=null&&(v.la=Ct,v.j.info("VER="+v.la));const Lt=Ee[4];Lt!=null&&(v.Aa=Lt,v.j.info("SVER="+v.Aa));const _s=Ee[5];_s!=null&&typeof _s=="number"&&0<_s&&(L=1.5*_s,v.L=L,v.j.info("backChannelRequestTimeoutMs_="+L)),L=v;const bn=u.g;if(bn){const lc=bn.g?bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(lc){var W=L.h;W.g||lc.indexOf("spdy")==-1&&lc.indexOf("quic")==-1&&lc.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(Vf(W,W.h),W.h=null))}if(L.D){const zf=bn.g?bn.g.getResponseHeader("X-HTTP-Session-Id"):null;zf&&(L.ya=zf,Me(L.I,L.D,zf))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),L=v;var q=u;if(L.qa=mv(L,L.J?L.ia:null,L.W),q.K){By(L.h,q);var Ae=q,mt=L.L;mt&&(Ae.I=mt),Ae.B&&(Nf(Ae),Zu(Ae)),L.g=q}else cv(L);0<v.i.length&&oc(v)}else Ee[0]!="stop"&&Ee[0]!="close"||Yi(v,7);else v.G==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?Yi(v,7):Wf(v):Ee[0]!="noop"&&v.l&&v.l.ta(Ee),v.v=0)}}Fa(4)}catch{}}var OI=class{constructor(u,p){this.g=u,this.map=p}};function Uy(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $y(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function zy(u){return u.h?1:u.g?u.g.size:0}function Df(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Vf(u,p){u.g?u.g.add(p):u.h=p}function By(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Uy.prototype.cancel=function(){if(this.i=Hy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Hy(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const v of u.g.values())p=p.concat(v.D);return p}return A(u.i)}function DI(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var p=[],v=u.length,L=0;L<v;L++)p.push(u[L]);return p}p=[],v=0;for(L in u)p[v++]=u[L];return p}function VI(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var p=[];u=u.length;for(var v=0;v<u;v++)p.push(v);return p}p=[],v=0;for(const L in u)p[v++]=L;return p}}}function qy(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var v=VI(u),L=DI(u),F=L.length,W=0;W<F;W++)p.call(void 0,L[W],v&&v[W],u)}var Yy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FI(u,p){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var L=u[v].indexOf("="),F=null;if(0<=L){var W=u[v].substring(0,L);F=u[v].substring(L+1)}else W=u[v];p(W,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function qi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof qi){this.h=u.h,Xu(this,u.j),this.o=u.o,this.g=u.g,Ju(this,u.s),this.l=u.l;var p=u.i,v=new Ha;v.i=p.i,p.g&&(v.g=new Map(p.g),v.h=p.h),Gy(this,v),this.m=u.m}else u&&(p=String(u).match(Yy))?(this.h=!1,Xu(this,p[1]||"",!0),this.o=za(p[2]||""),this.g=za(p[3]||"",!0),Ju(this,p[4]),this.l=za(p[5]||"",!0),Gy(this,p[6]||"",!0),this.m=za(p[7]||"")):(this.h=!1,this.i=new Ha(null,this.h))}qi.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Ba(p,Ky,!0),":");var v=this.g;return(v||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Ba(p,Ky,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(Ba(v,v.charAt(0)=="/"?$I:UI,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",Ba(v,BI)),u.join("")};function pr(u){return new qi(u)}function Xu(u,p,v){u.j=v?za(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Ju(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Gy(u,p,v){p instanceof Ha?(u.i=p,HI(u.i,u.h)):(v||(p=Ba(p,zI)),u.i=new Ha(p,u.h))}function Me(u,p,v){u.i.set(p,v)}function ec(u){return Me(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function za(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ba(u,p,v){return typeof u=="string"?(u=encodeURI(u).replace(p,WI),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function WI(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ky=/[#\/\?@]/g,UI=/[#\?:]/g,$I=/[#\?]/g,zI=/[#\?@]/g,BI=/#/g;function Ha(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Ur(u){u.g||(u.g=new Map,u.h=0,u.i&&FI(u.i,function(p,v){u.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}t=Ha.prototype,t.add=function(u,p){Ur(this),this.i=null,u=vs(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(p),this.h+=1,this};function Qy(u,p){Ur(u),p=vs(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Zy(u,p){return Ur(u),p=vs(u,p),u.g.has(p)}t.forEach=function(u,p){Ur(this),this.g.forEach(function(v,L){v.forEach(function(F){u.call(p,F,L,this)},this)},this)},t.na=function(){Ur(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),v=[];for(let L=0;L<p.length;L++){const F=u[L];for(let W=0;W<F.length;W++)v.push(p[L])}return v},t.V=function(u){Ur(this);let p=[];if(typeof u=="string")Zy(this,u)&&(p=p.concat(this.g.get(vs(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)p=p.concat(u[v])}return p},t.set=function(u,p){return Ur(this),this.i=null,u=vs(this,u),Zy(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},t.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Xy(u,p,v){Qy(u,p),0<v.length&&(u.i=null,u.g.set(vs(u,p),A(v)),u.h+=v.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var v=0;v<p.length;v++){var L=p[v];const W=encodeURIComponent(String(L)),q=this.V(L);for(L=0;L<q.length;L++){var F=W;q[L]!==""&&(F+="="+encodeURIComponent(String(q[L]))),u.push(F)}}return this.i=u.join("&")};function vs(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function HI(u,p){p&&!u.j&&(Ur(u),u.i=null,u.g.forEach(function(v,L){var F=L.toLowerCase();L!=F&&(Qy(this,L),Xy(this,F,v))},u)),u.j=p}function qI(u,p){const v=new Ua;if(a.Image){const L=new Image;L.onload=k($r,v,"TestLoadImage: loaded",!0,p,L),L.onerror=k($r,v,"TestLoadImage: error",!1,p,L),L.onabort=k($r,v,"TestLoadImage: abort",!1,p,L),L.ontimeout=k($r,v,"TestLoadImage: timeout",!1,p,L),a.setTimeout(function(){L.ontimeout&&L.ontimeout()},1e4),L.src=u}else p(!1)}function YI(u,p){const v=new Ua,L=new AbortController,F=setTimeout(()=>{L.abort(),$r(v,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:L.signal}).then(W=>{clearTimeout(F),W.ok?$r(v,"TestPingServer: ok",!0,p):$r(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(F),$r(v,"TestPingServer: error",!1,p)})}function $r(u,p,v,L,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),L(v)}catch{}}function GI(){this.g=new PI}function KI(u,p,v){const L=v||"";try{qy(u,function(F,W){let q=F;d(F)&&(q=Lf(F)),p.push(L+W+"="+encodeURIComponent(q))})}catch(F){throw p.push(L+"type="+encodeURIComponent("_badmap")),F}}function tc(u){this.l=u.Ub||null,this.j=u.eb||!1}T(tc,Af),tc.prototype.g=function(){return new nc(this.l,this.j)},tc.prototype.i=function(u){return function(){return u}}({});function nc(u,p){St.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(nc,St),t=nc.prototype,t.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Ya(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qa(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ya(this)),this.g&&(this.readyState=3,Ya(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Jy(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Jy(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?qa(this):Ya(this),this.readyState==3&&Jy(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,qa(this))},t.Qa=function(u){this.g&&(this.response=u,qa(this))},t.ga=function(){this.g&&qa(this)};function qa(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ya(u)}t.setRequestHeader=function(u,p){this.u.append(u,p)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=p.next();return u.join(`\r
`)};function Ya(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(nc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function ev(u){let p="";return N(u,function(v,L){p+=L,p+=":",p+=v,p+=`\r
`}),p}function Ff(u,p,v){e:{for(L in v){var L=!1;break e}L=!0}L||(v=ev(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):Me(u,p,v))}function Ge(u){St.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Ge,St);var QI=/^https?$/i,ZI=["POST","PUT"];t=Ge.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,p,v,L){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():bf.g(),this.v=this.o?Ay(this.o):Ay(bf),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(W){tv(this,W);return}if(u=v||"",v=new Map(this.headers),L)if(Object.getPrototypeOf(L)===Object.prototype)for(var F in L)v.set(F,L[F]);else if(typeof L.keys=="function"&&typeof L.get=="function")for(const W of L.keys())v.set(W,L.get(W));else throw Error("Unknown input type for opt_headers: "+String(L));L=Array.from(v.keys()).find(W=>W.toLowerCase()=="content-type"),F=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(ZI,p,void 0))||L||F||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,q]of v)this.g.setRequestHeader(W,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{iv(this),this.u=!0,this.g.send(u),this.u=!1}catch(W){tv(this,W)}};function tv(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,nv(u),rc(u)}function nv(u){u.A||(u.A=!0,Ft(u,"complete"),Ft(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ft(this,"complete"),Ft(this,"abort"),rc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rc(this,!0)),Ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?rv(this):this.bb())},t.bb=function(){rv(this)};function rv(u){if(u.h&&typeof s<"u"&&(!u.v[1]||mr(u)!=4||u.Z()!=2)){if(u.u&&mr(u)==4)Iy(u.Ea,0,u);else if(Ft(u,"readystatechange"),mr(u)==4){u.h=!1;try{const q=u.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var v;if(!(v=p)){var L;if(L=q===0){var F=String(u.D).match(Yy)[1]||null;!F&&a.self&&a.self.location&&(F=a.self.location.protocol.slice(0,-1)),L=!QI.test(F?F.toLowerCase():"")}v=L}if(v)Ft(u,"complete"),Ft(u,"success");else{u.m=6;try{var W=2<mr(u)?u.g.statusText:""}catch{W=""}u.l=W+" ["+u.Z()+"]",nv(u)}}finally{rc(u)}}}}function rc(u,p){if(u.g){iv(u);const v=u.g,L=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||Ft(u,"ready");try{v.onreadystatechange=L}catch{}}}function iv(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function mr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<mr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),AI(p)}};function ov(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function XI(u){const p={};u=(u.g&&2<=mr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let L=0;L<u.length;L++){if(g(u[L]))continue;var v=j(u[L]);const F=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const W=p[F]||[];p[F]=W,W.push(v)}w(p,function(L){return L.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ga(u,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||p}function sv(u){this.Aa=0,this.i=[],this.j=new Ua,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ga("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ga("baseRetryDelayMs",5e3,u),this.cb=Ga("retryDelaySeedMs",1e4,u),this.Wa=Ga("forwardChannelMaxRetries",2,u),this.wa=Ga("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Uy(u&&u.concurrentRequestLimit),this.Da=new GI,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=sv.prototype,t.la=8,t.G=1,t.connect=function(u,p,v,L){Wt(0),this.W=u,this.H=p||{},v&&L!==void 0&&(this.H.OSID=v,this.H.OAID=L),this.F=this.X,this.I=mv(this,null,this.W),oc(this)};function Wf(u){if(av(u),u.G==3){var p=u.U++,v=pr(u.I);if(Me(v,"SID",u.K),Me(v,"RID",p),Me(v,"TYPE","terminate"),Ka(u,v),p=new Wr(u,u.j,p),p.L=2,p.v=ec(pr(v)),v=!1,a.navigator&&a.navigator.sendBeacon)try{v=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!v&&a.Image&&(new Image().src=p.v,v=!0),v||(p.g=gv(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Zu(p)}pv(u)}function ic(u){u.g&&($f(u),u.g.cancel(),u.g=null)}function av(u){ic(u),u.u&&(a.clearTimeout(u.u),u.u=null),sc(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function oc(u){if(!$y(u.h)&&!u.s){u.s=!0;var p=u.Ga;z||J(),$||(z(),$=!0),G.add(p,u),u.B=0}}function JI(u,p){return zy(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Wa(E(u.Ga,u,p),fv(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new Wr(this,this.j,u);let W=this.o;if(this.S&&(W?(W=I(W),b(W,this.S)):W=this.S),this.m!==null||this.O||(F.H=W,W=null),this.P)e:{for(var p=0,v=0;v<this.i.length;v++){t:{var L=this.i[v];if("__data__"in L.map&&(L=L.map.__data__,typeof L=="string")){L=L.length;break t}L=void 0}if(L===void 0)break;if(p+=L,4096<p){p=v;break e}if(p===4096||v===this.i.length-1){p=v+1;break e}}p=1e3}else p=1e3;p=uv(this,F,p),v=pr(this.I),Me(v,"RID",u),Me(v,"CVER",22),this.D&&Me(v,"X-HTTP-Session-Id",this.D),Ka(this,v),W&&(this.O?p="headers="+encodeURIComponent(String(ev(W)))+"&"+p:this.m&&Ff(v,this.m,W)),Vf(this.h,F),this.Ua&&Me(v,"TYPE","init"),this.P?(Me(v,"$req",p),Me(v,"SID","null"),F.T=!0,Mf(F,v,null)):Mf(F,v,p),this.G=2}}else this.G==3&&(u?lv(this,u):this.i.length==0||$y(this.h)||lv(this))};function lv(u,p){var v;p?v=p.l:v=u.U++;const L=pr(u.I);Me(L,"SID",u.K),Me(L,"RID",v),Me(L,"AID",u.T),Ka(u,L),u.m&&u.o&&Ff(L,u.m,u.o),v=new Wr(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),p&&(u.i=p.D.concat(u.i)),p=uv(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Vf(u.h,v),Mf(v,L,p)}function Ka(u,p){u.H&&N(u.H,function(v,L){Me(p,L,v)}),u.l&&qy({},function(v,L){Me(p,L,v)})}function uv(u,p,v){v=Math.min(u.i.length,v);var L=u.l?E(u.l.Na,u.l,u):null;e:{var F=u.i;let W=-1;for(;;){const q=["count="+v];W==-1?0<v?(W=F[0].g,q.push("ofs="+W)):W=0:q.push("ofs="+W);let Ae=!0;for(let mt=0;mt<v;mt++){let Ee=F[mt].g;const Ct=F[mt].map;if(Ee-=W,0>Ee)W=Math.max(0,F[mt].g-100),Ae=!1;else try{KI(Ct,q,"req"+Ee+"_")}catch{L&&L(Ct)}}if(Ae){L=q.join("&");break e}}}return u=u.i.splice(0,v),p.D=u,L}function cv(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;z||J(),$||(z(),$=!0),G.add(p,u),u.v=0}}function Uf(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Wa(E(u.Fa,u),fv(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,dv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Wa(E(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Wt(10),ic(this),dv(this))};function $f(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function dv(u){u.g=new Wr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=pr(u.qa);Me(p,"RID","rpc"),Me(p,"SID",u.K),Me(p,"AID",u.T),Me(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&Me(p,"TO",u.ja),Me(p,"TYPE","xmlhttp"),Ka(u,p),u.m&&u.o&&Ff(p,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=ec(pr(p)),v.m=null,v.P=!0,Vy(v,u)}t.Za=function(){this.C!=null&&(this.C=null,ic(this),Uf(this),Wt(19))};function sc(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function hv(u,p){var v=null;if(u.g==p){sc(u),$f(u),u.g=null;var L=2}else if(Df(u.h,p))v=p.D,By(u.h,p),L=1;else return;if(u.G!=0){if(p.o)if(L==1){v=p.m?p.m.length:0,p=Date.now()-p.F;var F=u.B;L=Gu(),Ft(L,new My(L,v)),oc(u)}else cv(u);else if(F=p.s,F==3||F==0&&0<p.X||!(L==1&&JI(u,p)||L==2&&Uf(u)))switch(v&&0<v.length&&(p=u.h,p.i=p.i.concat(v)),F){case 1:Yi(u,5);break;case 4:Yi(u,10);break;case 3:Yi(u,6);break;default:Yi(u,2)}}}function fv(u,p){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*p}function Yi(u,p){if(u.j.info("Error code "+p),p==2){var v=E(u.fb,u),L=u.Xa;const F=!L;L=new qi(L||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Xu(L,"https"),ec(L),F?qI(L.toString(),v):YI(L.toString(),v)}else Wt(2);u.G=0,u.l&&u.l.sa(p),pv(u),av(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Wt(2)):(this.j.info("Failed to ping google.com"),Wt(1))};function pv(u){if(u.G=0,u.ka=[],u.l){const p=Hy(u.h);(p.length!=0||u.i.length!=0)&&(S(u.ka,p),S(u.ka,u.i),u.h.i.length=0,A(u.i),u.i.length=0),u.l.ra()}}function mv(u,p,v){var L=v instanceof qi?pr(v):new qi(v);if(L.g!="")p&&(L.g=p+"."+L.g),Ju(L,L.s);else{var F=a.location;L=F.protocol,p=p?p+"."+F.hostname:F.hostname,F=+F.port;var W=new qi(null);L&&Xu(W,L),p&&(W.g=p),F&&Ju(W,F),v&&(W.l=v),L=W}return v=u.D,p=u.ya,v&&p&&Me(L,v,p),Me(L,"VER",u.la),Ka(u,L),L}function gv(u,p,v){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Ge(new tc({eb:v})):new Ge(u.pa),p.Ha(u.J),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function yv(){}t=yv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ac(){}ac.prototype.g=function(u,p){return new cn(u,p)};function cn(u,p){St.call(this),this.g=new sv(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!g(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!g(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new ks(this)}T(cn,St),cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){Wf(this.g)},cn.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=Lf(u),u=v);p.i.push(new OI(p.Ya++,u)),p.G==3&&oc(p)},cn.prototype.N=function(){this.g.l=null,delete this.j,Wf(this.g),delete this.g,cn.aa.N.call(this)};function vv(u){Pf.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const v in p){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}T(vv,Pf);function kv(){Rf.call(this),this.status=1}T(kv,Rf);function ks(u){this.g=u}T(ks,yv),ks.prototype.ua=function(){Ft(this.g,"a")},ks.prototype.ta=function(u){Ft(this.g,new vv(u))},ks.prototype.sa=function(u){Ft(this.g,new kv)},ks.prototype.ra=function(){Ft(this.g,"b")},ac.prototype.createWebChannel=ac.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,Dx=function(){return new ac},Ox=function(){return Gu()},Nx=Bi,n0={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ku.NO_ERROR=0,Ku.TIMEOUT=8,Ku.HTTP_ERROR=6,ud=Ku,Ny.COMPLETE="complete",Mx=Ny,Py.EventType=Va,Va.OPEN="a",Va.CLOSE="b",Va.ERROR="c",Va.MESSAGE="d",St.prototype.listen=St.prototype.K,gl=Py,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,jx=Ge}).apply(typeof Cc<"u"?Cc:typeof self<"u"?self:typeof window<"u"?window:{});const pk="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ra="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new Bh("@firebase/firestore");function il(){return Eo.logLevel}function X(t,...e){if(Eo.logLevel<=pe.DEBUG){const n=e.map(w1);Eo.debug(`Firestore (${Ra}): ${t}`,...n)}}function Or(t,...e){if(Eo.logLevel<=pe.ERROR){const n=e.map(w1);Eo.error(`Firestore (${Ra}): ${t}`,...n)}}function da(t,...e){if(Eo.logLevel<=pe.WARN){const n=e.map(w1);Eo.warn(`Firestore (${Ra}): ${t}`,...n)}}function w1(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${Ra}) INTERNAL ASSERTION FAILED: `+t;throw Or(e),new Error(e)}function Le(t,e){t||oe()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Cb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(bt.UNAUTHENTICATED))}shutdown(){}}class Lb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ab{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Le(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new Ar;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ar,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ar)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new Vx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new bt(e)}}class Pb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Rb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Pb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Le(this.o===void 0);const r=o=>{o.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,X("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new bb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Mb(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function ha(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new it(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class lu{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(),r===void 0?r=e.length-n:r>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return lu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof lu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends lu{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const Nb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends lu{construct(e,n,r){return new vt(e,n,r)}static isValidIdentifier(e){return Nb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new Q(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Q(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new Q(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(De.fromString(e))}static fromName(e){return new te(De.fromString(e).popFirst(5))}static empty(){return new te(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new De(e.slice()))}}function Ob(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new it(n+1,0):new it(n,r));return new Li(i,te.empty(),e)}function Db(t){return new Li(t.readTime,t.key,-1)}class Li{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Li(se.min(),te.empty(),-1)}static max(){return new Li(se.max(),te.empty(),-1)}}function Vb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ou(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==Fb)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const d=l;n(e[d]).next(f=>{s[d]=f,++a,a===o&&r(s)},f=>i(f))}})}static doWhile(e,n){return new B((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function Ub(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Du(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class x1{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}x1.oe=-1;function Kh(t){return t==null}function eh(t){return t===0&&1/t==-1/0}function $b(t){return typeof t=="number"&&Number.isInteger(t)&&!eh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ro(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Wx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.comparator=e,this.root=n||yt.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lc(this.root,e,this.comparator,!0)}}class Lc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??yt.RED,this.left=i??yt.EMPTY,this.right=o??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new yt(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return yt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(e,n,r,i,o){return this}insert(e,n,r){return new yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gk(this.data.getIterator())}getIteratorFrom(e){return new gk(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _t(this.comparator);return n.data=e,n}}class gk{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new pn([])}unionWith(e){let n=new _t(vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new pn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ha(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ux extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ux("Invalid base64 string: "+o):o}}(e);return new wt(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const zb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(t){if(Le(!!t),typeof t=="string"){let e=0;const n=zb.exec(t);if(Le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wo(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function I1(t){const e=t.mapValue.fields.__previous_value__;return T1(e)?I1(e):e}function uu(t){const e=Ai(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n,r,i,o,s,a,l,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=d}}class cu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new cu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof cu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac={mapValue:{}};function xo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?T1(t)?4:qb(t)?9007199254740991:Hb(t)?10:11:oe()}function lr(t,e){if(t===e)return!0;const n=xo(t);if(n!==xo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return uu(t).isEqual(uu(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Ai(i.timestampValue),a=Ai(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return wo(i.bytesValue).isEqual(wo(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Ze(i.geoPointValue.latitude)===Ze(o.geoPointValue.latitude)&&Ze(i.geoPointValue.longitude)===Ze(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Ze(i.integerValue)===Ze(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Ze(i.doubleValue),a=Ze(o.doubleValue);return s===a?eh(s)===eh(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return ha(t.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(mk(s)!==mk(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!lr(s[l],a[l])))return!1;return!0}(t,e);default:return oe()}}function du(t,e){return(t.values||[]).find(n=>lr(n,e))!==void 0}function fa(t,e){if(t===e)return 0;const n=xo(t),r=xo(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Ze(o.integerValue||o.doubleValue),l=Ze(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return yk(t.timestampValue,e.timestampValue);case 4:return yk(uu(t),uu(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(o,s){const a=wo(o),l=wo(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),l=s.split("/");for(let d=0;d<a.length&&d<l.length;d++){const f=we(a[d],l[d]);if(f!==0)return f}return we(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=we(Ze(o.latitude),Ze(s.latitude));return a!==0?a:we(Ze(o.longitude),Ze(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return vk(t.arrayValue,e.arrayValue);case 10:return function(o,s){var a,l,d,f;const m=o.fields||{},E=s.fields||{},k=(a=m.value)===null||a===void 0?void 0:a.arrayValue,T=(l=E.value)===null||l===void 0?void 0:l.arrayValue,A=we(((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0,((f=T==null?void 0:T.values)===null||f===void 0?void 0:f.length)||0);return A!==0?A:vk(k,T)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===Ac.mapValue&&s===Ac.mapValue)return 0;if(o===Ac.mapValue)return 1;if(s===Ac.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),d=s.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const E=we(l[m],f[m]);if(E!==0)return E;const k=fa(a[l[m]],d[f[m]]);if(k!==0)return k}return we(l.length,f.length)}(t.mapValue,e.mapValue);default:throw oe()}}function yk(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Ai(t),r=Ai(e),i=we(n.seconds,r.seconds);return i!==0?i:we(n.nanos,r.nanos)}function vk(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=fa(n[i],r[i]);if(o)return o}return we(n.length,r.length)}function pa(t){return r0(t)}function r0(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ai(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return wo(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=r0(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${r0(n.fields[s])}`;return i+"}"}(t.mapValue):oe()}function kk(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function i0(t){return!!t&&"integerValue"in t}function S1(t){return!!t&&"arrayValue"in t}function _k(t){return!!t&&"nullValue"in t}function Ek(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function cd(t){return!!t&&"mapValue"in t}function Hb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function bl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ro(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.value=e}static empty(){return new en({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!cd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bl(n)}setAll(e){let n=vt.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=bl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());cd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];cd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ro(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new en(bl(this.value))}}function $x(t){const e=[];return Ro(t.fields,(n,r)=>{const i=new vt([n]);if(cd(r)){const o=$x(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new pn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Mt(e,0,se.min(),se.min(),se.min(),en.empty(),0)}static newFoundDocument(e,n,r,i){return new Mt(e,1,n,se.min(),r,i,0)}static newNoDocument(e,n){return new Mt(e,2,n,se.min(),se.min(),en.empty(),0)}static newUnknownDocument(e,n){return new Mt(e,3,n,se.min(),se.min(),en.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=en.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=en.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class th{constructor(e,n){this.position=e,this.inclusive=n}}function wk(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=te.comparator(te.fromName(s.referenceValue),n.key):r=fa(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function xk(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class hu{constructor(e,n="asc"){this.field=e,this.dir=n}}function Yb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class zx{}class rt extends zx{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Kb(e,n,r):n==="array-contains"?new Xb(e,r):n==="in"?new Jb(e,r):n==="not-in"?new ej(e,r):n==="array-contains-any"?new tj(e,r):new rt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Qb(e,r):new Zb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fa(n,this.value)):n!==null&&xo(this.value)===xo(n)&&this.matchesComparison(fa(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends zx{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Kn(e,n)}matches(e){return Bx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Bx(t){return t.op==="and"}function Hx(t){return Gb(t)&&Bx(t)}function Gb(t){for(const e of t.filters)if(e instanceof Kn)return!1;return!0}function o0(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+pa(t.value);if(Hx(t))return t.filters.map(e=>o0(e)).join(",");{const e=t.filters.map(n=>o0(n)).join(",");return`${t.op}(${e})`}}function qx(t,e){return t instanceof rt?function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&lr(r.value,i.value)}(t,e):t instanceof Kn?function(r,i){return i instanceof Kn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&qx(s,i.filters[a]),!0):!1}(t,e):void oe()}function Yx(t){return t instanceof rt?function(n){return`${n.field.canonicalString()} ${n.op} ${pa(n.value)}`}(t):t instanceof Kn?function(n){return n.op.toString()+" {"+n.getFilters().map(Yx).join(" ,")+"}"}(t):"Filter"}class Kb extends rt{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class Qb extends rt{constructor(e,n){super(e,"in",n),this.keys=Gx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Zb extends rt{constructor(e,n){super(e,"not-in",n),this.keys=Gx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Gx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class Xb extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return S1(n)&&du(n.arrayValue,this.value)}}class Jb extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&du(this.value.arrayValue,n)}}class ej extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(du(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!du(this.value.arrayValue,n)}}class tj extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!S1(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>du(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ue=null}}function Tk(t,e=null,n=[],r=[],i=null,o=null,s=null){return new nj(t,e,n,r,i,o,s)}function C1(t){const e=ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>o0(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Kh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>pa(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>pa(r)).join(",")),e.ue=n}return e.ue}function L1(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Yb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qx(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xk(t.startAt,e.startAt)&&xk(t.endAt,e.endAt)}function s0(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rj(t,e,n,r,i,o,s,a){return new ba(t,e,n,r,i,o,s,a)}function A1(t){return new ba(t)}function Ik(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Kx(t){return t.collectionGroup!==null}function jl(t){const e=ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new _t(vt.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new hu(o,r))}),n.has(vt.keyField().canonicalString())||e.ce.push(new hu(vt.keyField(),r))}return e.ce}function sr(t){const e=ae(t);return e.le||(e.le=ij(e,jl(t))),e.le}function ij(t,e){if(t.limitType==="F")return Tk(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new hu(i.field,o)});const n=t.endAt?new th(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new th(t.startAt.position,t.startAt.inclusive):null;return Tk(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function a0(t,e){const n=t.filters.concat([e]);return new ba(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function nh(t,e,n){return new ba(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qh(t,e){return L1(sr(t),sr(e))&&t.limitType===e.limitType}function Qx(t){return`${C1(sr(t))}|lt:${t.limitType}`}function Ls(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Yx(i)).join(", ")}]`),Kh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>pa(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>pa(i)).join(",")),`Target(${r})`}(sr(t))}; limitType=${t.limitType})`}function Zh(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):te.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of jl(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,l){const d=wk(s,a,l);return s.inclusive?d<=0:d<0}(r.startAt,jl(r),i)||r.endAt&&!function(s,a,l){const d=wk(s,a,l);return s.inclusive?d>=0:d>0}(r.endAt,jl(r),i))}(t,e)}function oj(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Zx(t){return(e,n)=>{let r=!1;for(const i of jl(t)){const o=sj(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function sj(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(o,s,a){const l=s.data.field(o),d=a.data.field(o);return l!==null&&d!==null?fa(l,d):oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ro(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return Wx(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aj=new qe(te.comparator);function Dr(){return aj}const Xx=new qe(te.comparator);function yl(...t){let e=Xx;for(const n of t)e=e.insert(n.key,n);return e}function Jx(t){let e=Xx;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function oo(){return Ml()}function eT(){return Ml()}function Ml(){return new ja(t=>t.toString(),(t,e)=>t.isEqual(e))}const lj=new qe(te.comparator),uj=new _t(te.comparator);function fe(...t){let e=uj;for(const n of t)e=e.add(n);return e}const cj=new _t(we);function dj(){return cj}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eh(e)?"-0":e}}function tT(t){return{integerValue:""+t}}function hj(t,e){return $b(e)?tT(e):P1(t,e)}/**
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
 */class Xh{constructor(){this._=void 0}}function fj(t,e,n){return t instanceof fu?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&T1(o)&&(o=I1(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof pu?rT(t,e):t instanceof mu?iT(t,e):function(i,o){const s=nT(i,o),a=Sk(s)+Sk(i.Pe);return i0(s)&&i0(i.Pe)?tT(a):P1(i.serializer,a)}(t,e)}function pj(t,e,n){return t instanceof pu?rT(t,e):t instanceof mu?iT(t,e):n}function nT(t,e){return t instanceof rh?function(r){return i0(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class fu extends Xh{}class pu extends Xh{constructor(e){super(),this.elements=e}}function rT(t,e){const n=oT(e);for(const r of t.elements)n.some(i=>lr(i,r))||n.push(r);return{arrayValue:{values:n}}}class mu extends Xh{constructor(e){super(),this.elements=e}}function iT(t,e){let n=oT(e);for(const r of t.elements)n=n.filter(i=>!lr(i,r));return{arrayValue:{values:n}}}class rh extends Xh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Sk(t){return Ze(t.integerValue||t.doubleValue)}function oT(t){return S1(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mj{constructor(e,n){this.field=e,this.transform=n}}function gj(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof pu&&i instanceof pu||r instanceof mu&&i instanceof mu?ha(r.elements,i.elements,lr):r instanceof rh&&i instanceof rh?lr(r.Pe,i.Pe):r instanceof fu&&i instanceof fu}(t.transform,e.transform)}class yj{constructor(e,n){this.version=e,this.transformResults=n}}class Sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Sn}static exists(e){return new Sn(void 0,e)}static updateTime(e){return new Sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dd(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jh{}function sT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new R1(t.key,Sn.none()):new Vu(t.key,t.data,Sn.none());{const n=t.data,r=en.empty();let i=new _t(vt.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Fi(t.key,r,new pn(i.toArray()),Sn.none())}}function vj(t,e,n){t instanceof Vu?function(i,o,s){const a=i.value.clone(),l=Lk(i.fieldTransforms,o,s.transformResults);a.setAll(l),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Fi?function(i,o,s){if(!dd(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=Lk(i.fieldTransforms,o,s.transformResults),l=o.data;l.setAll(aT(i)),l.setAll(a),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Nl(t,e,n,r){return t instanceof Vu?function(o,s,a,l){if(!dd(o.precondition,s))return a;const d=o.value.clone(),f=Ak(o.fieldTransforms,l,s);return d.setAll(f),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fi?function(o,s,a,l){if(!dd(o.precondition,s))return a;const d=Ak(o.fieldTransforms,l,s),f=s.data;return f.setAll(aT(o)),f.setAll(d),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(o,s,a){return dd(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function kj(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=nT(r.transform,i||null);o!=null&&(n===null&&(n=en.empty()),n.set(r.field,o))}return n||null}function Ck(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ha(r,i,(o,s)=>gj(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vu extends Jh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fi extends Jh{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function aT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Lk(t,e,n){const r=new Map;Le(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,pj(s,a,n[i]))}return r}function Ak(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,fj(o,s,e))}return r}class R1 extends Jh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _j extends Jh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ej{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&vj(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Nl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Nl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=eT();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=sT(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&ha(this.mutations,e.mutations,(n,r)=>Ck(n,r))&&ha(this.baseMutations,e.baseMutations,(n,r)=>Ck(n,r))}}class b1{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Le(e.mutations.length===r.length);let i=function(){return lj}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new b1(e,n,r,i)}}/**
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
 */class wj{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,ye;function Tj(t){switch(t){default:return oe();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function lT(t){if(t===void 0)return Or("GRPC error has no .code"),U.UNKNOWN;switch(t){case et.OK:return U.OK;case et.CANCELLED:return U.CANCELLED;case et.UNKNOWN:return U.UNKNOWN;case et.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case et.INTERNAL:return U.INTERNAL;case et.UNAVAILABLE:return U.UNAVAILABLE;case et.UNAUTHENTICATED:return U.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case et.NOT_FOUND:return U.NOT_FOUND;case et.ALREADY_EXISTS:return U.ALREADY_EXISTS;case et.PERMISSION_DENIED:return U.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case et.ABORTED:return U.ABORTED;case et.OUT_OF_RANGE:return U.OUT_OF_RANGE;case et.UNIMPLEMENTED:return U.UNIMPLEMENTED;case et.DATA_LOSS:return U.DATA_LOSS;default:return oe()}}(ye=et||(et={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ij(){return new TextEncoder}/**
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
 */const Sj=new co([4294967295,4294967295],0);function Pk(t){const e=Ij().encode(t),n=new bx;return n.update(e),new Uint8Array(n.digest())}function Rk(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new co([n,r],0),new co([i,o],0)]}class j1{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new vl(`Invalid padding: ${n}`);if(r<0)throw new vl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new vl(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=co.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(co.fromNumber(r)));return i.compare(Sj)===1&&(i=new co([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Pk(e),[r,i]=Rk(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new j1(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=Pk(e),[r,i]=Rk(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class vl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Fu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ef(se.min(),i,new qe(we),Dr(),fe())}}class Fu{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fu(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class uT{constructor(e,n){this.targetId=e,this.me=n}}class cT{constructor(e,n,r=wt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class bk{constructor(){this.fe=0,this.ge=Mk(),this.pe=wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=fe(),n=fe(),r=fe();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:oe()}}),new Fu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Mk()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Cj{constructor(e){this.Le=e,this.Be=new Map,this.ke=Dr(),this.qe=jk(),this.Qe=new qe(we)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(s0(o))if(r===0){const s=new te(o.path);this.Ue(n,s,Mt.newNoDocument(s,se.min()))}else Le(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),l=a?this.Xe(a,e,s):1;if(l!==0){this.je(n);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=wo(r).toUint8Array()}catch(l){if(l instanceof Ux)return da("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new j1(s,i,o)}catch(l){return da(l instanceof vl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const a=this.Je(s);if(a){if(o.current&&s0(a.target)){const l=new te(a.target.path);this.ke.get(l)!==null||this.it(s,l)||this.Ue(s,l,Mt.newNoDocument(l,e))}o.be&&(n.set(s,o.ve()),o.Ce())}});let r=fe();this.qe.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new ef(e,n,this.Qe,this.ke,r);return this.ke=Dr(),this.qe=jk(),this.Qe=new qe(we),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new bk,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new _t(we),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new bk),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function jk(){return new qe(te.comparator)}function Mk(){return new qe(te.comparator)}const Lj={asc:"ASCENDING",desc:"DESCENDING"},Aj={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Pj={and:"AND",or:"OR"};class Rj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function l0(t,e){return t.useProto3Json||Kh(e)?e:{value:e}}function ih(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bj(t,e){return ih(t,e.toTimestamp())}function ar(t){return Le(!!t),se.fromTimestamp(function(n){const r=Ai(n);return new it(r.seconds,r.nanos)}(t))}function M1(t,e){return u0(t,e).canonicalString()}function u0(t,e){const n=function(i){return new De(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function hT(t){const e=De.fromString(t);return Le(yT(e)),e}function c0(t,e){return M1(t.databaseId,e.path)}function Tp(t,e){const n=hT(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(pT(n))}function fT(t,e){return M1(t.databaseId,e)}function jj(t){const e=hT(t);return e.length===4?De.emptyPath():pT(e)}function d0(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pT(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Nk(t,e,n){return{name:c0(t,e),fields:n.value.mapValue.fields}}function Mj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,f){return d.useProto3Json?(Le(f===void 0||typeof f=="string"),wt.fromBase64String(f||"")):(Le(f===void 0||f instanceof Buffer||f instanceof Uint8Array),wt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(d){const f=d.code===void 0?U.UNKNOWN:lT(d.code);return new Q(f,d.message||"")}(s);n=new cT(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Tp(t,r.document.name),o=ar(r.document.updateTime),s=r.document.createTime?ar(r.document.createTime):se.min(),a=new en({mapValue:{fields:r.document.fields}}),l=Mt.newFoundDocument(i,o,s,a),d=r.targetIds||[],f=r.removedTargetIds||[];n=new hd(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Tp(t,r.document),o=r.readTime?ar(r.readTime):se.min(),s=Mt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new hd([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Tp(t,r.document),o=r.removedTargetIds||[];n=new hd([],o,i,null)}else{if(!("filter"in e))return oe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new xj(i,o),a=r.targetId;n=new uT(a,s)}}return n}function Nj(t,e){let n;if(e instanceof Vu)n={update:Nk(t,e.key,e.value)};else if(e instanceof R1)n={delete:c0(t,e.key)};else if(e instanceof Fi)n={update:Nk(t,e.key,e.data),updateMask:Bj(e.fieldMask)};else{if(!(e instanceof _j))return oe();n={verify:c0(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof fu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof pu)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof mu)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof rh)return{fieldPath:s.field.canonicalString(),increment:a.Pe};throw oe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:bj(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:oe()}(t,e.precondition)),n}function Oj(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?ar(i.updateTime):ar(o);return s.isEqual(se.min())&&(s=ar(o)),new yj(s,i.transformResults||[])}(n,e))):[]}function Dj(t,e){return{documents:[fT(t,e.path)]}}function Vj(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fT(t,i);const o=function(d){if(d.length!==0)return gT(Kn.create(d,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(d){if(d.length!==0)return d.map(f=>function(E){return{field:As(E.field),direction:Uj(E.dir)}}(f))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=l0(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function Fj(t){let e=jj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Le(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let o=[];n.where&&(o=function(m){const E=mT(m);return E instanceof Kn&&Hx(E)?E.getFilters():[E]}(n.where));let s=[];n.orderBy&&(s=function(m){return m.map(E=>function(T){return new hu(Ps(T.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(E))}(n.orderBy));let a=null;n.limit&&(a=function(m){let E;return E=typeof m=="object"?m.value:m,Kh(E)?null:E}(n.limit));let l=null;n.startAt&&(l=function(m){const E=!!m.before,k=m.values||[];return new th(k,E)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const E=!m.before,k=m.values||[];return new th(k,E)}(n.endAt)),rj(e,i,s,o,a,"F",l,d)}function Wj(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ps(n.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ps(n.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ps(n.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ps(n.unaryFilter.field);return rt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(t):t.fieldFilter!==void 0?function(n){return rt.create(Ps(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kn.create(n.compositeFilter.filters.map(r=>mT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return oe()}}(n.compositeFilter.op))}(t):oe()}function Uj(t){return Lj[t]}function $j(t){return Aj[t]}function zj(t){return Pj[t]}function As(t){return{fieldPath:t.canonicalString()}}function Ps(t){return vt.fromServerFormat(t.fieldPath)}function gT(t){return t instanceof rt?function(n){if(n.op==="=="){if(Ek(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NAN"}};if(_k(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ek(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NOT_NAN"}};if(_k(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:As(n.field),op:$j(n.op),value:n.value}}}(t):t instanceof Kn?function(n){const r=n.getFilters().map(i=>gT(i));return r.length===1?r[0]:{compositeFilter:{op:zj(n.op),filters:r}}}(t):oe()}function Bj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n,r,i,o=se.min(),s=se.min(),a=wt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hj{constructor(e){this.ct=e}}function qj(t){const e=Fj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yj{constructor(){this.un=new Gj}addToCollectionParentIndex(e,n){return this.un.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Li.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Li.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class Gj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _t(De.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _t(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ma(0)}static kn(){return new ma(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kj{constructor(){this.changes=new ja(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zj{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Nl(r.mutation,i,pn.empty(),it.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=oo();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=yl();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=oo();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=Dr();const s=Ml(),a=function(){return Ml()}();return n.forEach((l,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Fi)?o=o.insert(d.key,d):f!==void 0?(s.set(d.key,f.mutation.getFieldMask()),Nl(f.mutation,d,f.mutation.getFieldMask(),it.now())):s.set(d.key,pn.empty())}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((d,f)=>s.set(d,f)),n.forEach((d,f)=>{var m;return a.set(d,new Qj(f,(m=s.get(d))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ml();let i=new qe((s,a)=>s-a),o=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const d=n.get(l);if(d===null)return;let f=r.get(l)||pn.empty();f=a.applyToLocalView(d,f),r.set(l,f);const m=(i.get(a.batchId)||fe()).add(l);i=i.insert(a.batchId,m)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),d=l.key,f=l.value,m=eT();f.forEach(E=>{if(!o.has(E)){const k=sT(n.get(E),r.get(E));k!==null&&m.set(E,k),o=o.add(E)}}),s.push(this.documentOverlayCache.saveOverlays(e,d,m))}return B.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return te.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Kx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):B.resolve(oo());let a=-1,l=o;return s.next(d=>B.forEach(d,(f,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),o.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{l=l.insert(f,E)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,l,d,fe())).next(f=>({batchId:a,changes:Jx(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let i=yl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=yl();return this.indexManager.getCollectionParents(e,o).next(a=>B.forEach(a,l=>{const d=function(m,E){return new ba(E,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((m,E)=>{s=s.insert(m,E)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((l,d)=>{const f=d.getKey();s.get(f)===null&&(s=s.insert(f,Mt.newInvalidDocument(f)))});let a=yl();return s.forEach((l,d)=>{const f=o.get(l);f!==void 0&&Nl(f.mutation,d,pn.empty(),it.now()),Zh(n,d)&&(a=a.insert(l,d))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xj{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return B.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ar(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:qj(i.bundledQuery),readTime:ar(i.readTime)}}(n)),B.resolve()}}/**
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
 */class Jj{constructor(){this.overlays=new qe(te.comparator),this.Ir=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=oo();return B.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=oo(),o=n.length+1,s=new te(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,d=l.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new qe((d,f)=>d-f);const s=this.overlays.getIterator();for(;s.hasNext();){const d=s.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=o.get(d.largestBatchId);f===null&&(f=oo(),o=o.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const a=oo(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>a.set(d,f)),!(a.size()>=i)););return B.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new wj(n,r));let o=this.Ir.get(n);o===void 0&&(o=fe(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
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
 */class e5{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(){this.Tr=new _t(dt.Er),this.dr=new _t(dt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new dt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new dt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new te(new De([])),r=new dt(n,e),i=new dt(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new te(new De([])),r=new dt(n,e),i=new dt(n,e+1);let o=fe();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new dt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return te.comparator(e.key,n.key)||we(e.wr,n.wr)}static Ar(e,n){return we(e.wr,n.wr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new _t(dt.Er)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Ej(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.br=this.br.add(new dt(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(s)}lookupMutationBatch(e,n){return B.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return B.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new dt(n,0),i=new dt(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const a=this.Dr(s.wr);o.push(a)}),B.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _t(we);return n.forEach(i=>{const o=new dt(i,0),s=new dt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],a=>{r=r.add(a.wr)})}),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;te.isDocumentKey(o)||(o=o.child(""));const s=new dt(new te(o),0);let a=new _t(we);return this.br.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(a=a.add(l.wr)),!0)},s),B.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Le(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return B.forEach(n.mutations,i=>{const o=new dt(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new dt(n,0),i=this.br.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(e){this.Mr=e,this.docs=function(){return new qe(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Mt.newInvalidDocument(n))}getEntries(e,n){let r=Dr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Mt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Dr();const s=n.path,a=new te(s.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!s.isPrefixOf(d.path))break;d.path.length>s.length+1||Vb(Db(f),r)<=0||(i.has(f.key)||Zh(n,f))&&(o=o.insert(f.key,f.mutableCopy()))}return B.resolve(o)}getAllFromCollectionGroup(e,n,r,i){oe()}Or(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new r5(this)}getSize(e){return B.resolve(this.size)}}class r5 extends Kj{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(e){this.persistence=e,this.Nr=new ja(n=>C1(n),L1),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new N1,this.targetCount=0,this.kr=ma.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),B.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ma(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Kn(n),B.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),B.waitFor(o).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),B.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o5{constructor(e,n){this.qr={},this.overlays={},this.Qr=new x1(0),this.Kr=!1,this.Kr=!0,this.$r=new e5,this.referenceDelegate=e(this),this.Ur=new i5(this),this.indexManager=new Yj,this.remoteDocumentCache=function(i){return new n5(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Hj(n),this.Gr=new Xj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Jj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new t5(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new s5(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return B.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class s5 extends Wb{constructor(e){super(),this.currentSequenceNumber=e}}class O1{constructor(e){this.persistence=e,this.Jr=new N1,this.Yr=null}static Zr(e){return new O1(e)}get Xr(){if(this.Yr)return this.Yr;throw oe()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,r=>{const i=te.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,se.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return B.or([()=>B.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=fe(),i=fe();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new D1(e,n.fromCache,r,i)}}/**
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
 */class a5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l5{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return $L()?8:Ub(Ot())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new a5;return this.Xi(e,n,s).next(a=>{if(o.result=a,this.zi)return this.es(e,n,s,a.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(il()<=pe.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Ls(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(il()<=pe.DEBUG&&X("QueryEngine","Query:",Ls(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(il()<=pe.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Ls(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sr(n))):B.resolve())}Yi(e,n){if(Ik(n))return B.resolve(null);let r=sr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nh(n,null,"F"),r=sr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=fe(...o);return this.Ji.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.ts(n,a);return this.ns(n,d,s,l.readTime)?this.Yi(e,nh(n,null,"F")):this.rs(e,d,n,l)}))})))}Zi(e,n,r,i){return Ik(n)||i.isEqual(se.min())?B.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?B.resolve(null):(il()<=pe.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ls(n)),this.rs(e,s,n,Ob(i,-1)).next(a=>a))})}ts(e,n){let r=new _t(Zx(e));return n.forEach((i,o)=>{Zh(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return il()<=pe.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Ls(n)),this.Ji.getDocumentsMatchingQuery(e,n,Li.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u5{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new qe(we),this._s=new ja(o=>C1(o),L1),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zj(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function c5(t,e,n,r){return new u5(t,e,n,r)}async function vT(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=fe();for(const d of i){s.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of o){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(d=>({hs:d,removedBatchIds:s,addedBatchIds:a}))})})}function d5(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,d,f){const m=d.batch,E=m.keys();let k=B.resolve();return E.forEach(T=>{k=k.next(()=>f.getEntry(l,T)).next(A=>{const S=d.docVersions.get(T);Le(S!==null),A.version.compareTo(S)<0&&(m.applyToRemoteDocument(A,d),A.isValidDocument()&&(A.setReadTime(d.commitVersion),f.addEntry(A)))})}),k.next(()=>a.mutationQueue.removeMutationBatch(l,m))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=fe();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(l=l.add(a.batch.mutations[d].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function kT(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function h5(t,e){const n=ae(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((f,m)=>{const E=i.get(m);if(!E)return;a.push(n.Ur.removeMatchingKeys(o,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(o,f.addedDocuments,m)));let k=E.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(m)!==null?k=k.withResumeToken(wt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),i=i.insert(m,k),function(A,S,y){return A.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(E,k,f)&&a.push(n.Ur.updateTargetData(o,k))});let l=Dr(),d=fe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,f))}),a.push(f5(o,s,e.documentUpdates).next(f=>{l=f.Ps,d=f.Is})),!r.isEqual(se.min())){const f=n.Ur.getLastRemoteSnapshotVersion(o).next(m=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(f)}return B.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,d)).next(()=>l)}).then(o=>(n.os=i,o))}function f5(t,e,n){let r=fe(),i=fe();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=Dr();return n.forEach((a,l)=>{const d=o.get(a);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",l.version)}),{Ps:s,Is:i}})}function p5(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function m5(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(o=>o?(i=o,B.resolve(i)):n.Ur.allocateTargetId(r).next(s=>(i=new si(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function h0(t,e,n){const r=ae(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!Du(s))throw s;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Ok(t,e,n){const r=ae(t);let i=se.min(),o=fe();return r.persistence.runTransaction("Execute query","readwrite",s=>function(l,d,f){const m=ae(l),E=m._s.get(f);return E!==void 0?B.resolve(m.os.get(E)):m.Ur.getTargetData(d,f)}(r,s,sr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.ss.getDocumentsMatchingQuery(s,e,n?i:se.min(),n?o:fe())).next(a=>(g5(r,oj(e),a),{documents:a,Ts:o})))}function g5(t,e,n){let r=t.us.get(e)||se.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.us.set(e,r)}class Dk{constructor(){this.activeTargetIds=dj()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class y5{constructor(){this.so=new Dk,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Dk,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v5{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pc=null;function Ip(){return Pc===null?Pc=function(){return 268435456+Math.round(2147483648*Math.random())}():Pc++,"0x"+Pc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _5{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class E5 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const a=Ip(),l=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,s),this.No(n,l,d,i).then(f=>(X("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw da("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",l,"request:",i),f})}Lo(n,r,i,o,s,a){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ra}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=k5[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=Ip();return new Promise((s,a)=>{const l=new jx;l.setWithCredentials(!0),l.listenOnce(Mx.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ud.NO_ERROR:const f=l.getResponseJson();X(Rt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),s(f);break;case ud.TIMEOUT:X(Rt,`RPC '${e}' ${o} timed out`),a(new Q(U.DEADLINE_EXCEEDED,"Request time out"));break;case ud.HTTP_ERROR:const m=l.getStatus();if(X(Rt,`RPC '${e}' ${o} failed with status:`,m,"response text:",l.getResponseText()),m>0){let E=l.getResponseJson();Array.isArray(E)&&(E=E[0]);const k=E==null?void 0:E.error;if(k&&k.status&&k.message){const T=function(S){const y=S.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(y)>=0?y:U.UNKNOWN}(k.status);a(new Q(T,k.message))}else a(new Q(U.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Q(U.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{X(Rt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);X(Rt,`RPC '${e}' ${o} sending request:`,i),l.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=Ip(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Dx(),a=Ox(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=o.join("");X(Rt,`Creating RPC '${e}' stream ${i}: ${f}`,l);const m=s.createWebChannel(f,l);let E=!1,k=!1;const T=new _5({Io:S=>{k?X(Rt,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(E||(X(Rt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),E=!0),X(Rt,`RPC '${e}' stream ${i} sending:`,S),m.send(S))},To:()=>m.close()}),A=(S,y,g)=>{S.listen(y,_=>{try{g(_)}catch(x){setTimeout(()=>{throw x},0)}})};return A(m,gl.EventType.OPEN,()=>{k||(X(Rt,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),A(m,gl.EventType.CLOSE,()=>{k||(k=!0,X(Rt,`RPC '${e}' stream ${i} transport closed`),T.So())}),A(m,gl.EventType.ERROR,S=>{k||(k=!0,da(Rt,`RPC '${e}' stream ${i} transport errored:`,S),T.So(new Q(U.UNAVAILABLE,"The operation could not be completed")))}),A(m,gl.EventType.MESSAGE,S=>{var y;if(!k){const g=S.data[0];Le(!!g);const _=g,x=_.error||((y=_[0])===null||y===void 0?void 0:y.error);if(x){X(Rt,`RPC '${e}' stream ${i} received error:`,x);const R=x.status;let N=function(P){const b=et[P];if(b!==void 0)return lT(b)}(R),w=x.message;N===void 0&&(N=U.INTERNAL,w="Unknown error status: "+R+" with message "+x.message),k=!0,T.So(new Q(N,w)),m.close()}else X(Rt,`RPC '${e}' stream ${i} received:`,g),T.bo(g)}}),A(a,Nx.STAT_EVENT,S=>{S.stat===n0.PROXY?X(Rt,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===n0.NOPROXY&&X(Rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function Sp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t){return new Rj(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n,r,i,o,s,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new _T(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Or(n.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new Q(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class w5 extends ET{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Mj(this.serializer,e),r=function(o){if(!("targetChange"in o))return se.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?se.min():s.readTime?ar(s.readTime):se.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=d0(this.serializer),n.addTarget=function(o,s){let a;const l=s.target;if(a=s0(l)?{documents:Dj(o,l)}:{query:Vj(o,l)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=dT(o,s.resumeToken);const d=l0(o,s.expectedCount);d!==null&&(a.expectedCount=d)}else if(s.snapshotVersion.compareTo(se.min())>0){a.readTime=ih(o,s.snapshotVersion.toTimestamp());const d=l0(o,s.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=Wj(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=d0(this.serializer),n.removeTarget=e,this.a_(n)}}class x5 extends ET{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Le(!!e.streamToken),this.lastStreamToken=e.streamToken,Le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Oj(e.writeResults,e.commitTime),r=ar(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=d0(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Nj(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T5 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Q(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,u0(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(U.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,u0(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(U.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class I5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Or(n),this.D_=!1):X("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S5{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{bo(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=ae(l);d.L_.add(4),await Wu(d),d.q_.set("Unknown"),d.L_.delete(4),await nf(d)}(this))})}),this.q_=new I5(r,i)}}async function nf(t){if(bo(t))for(const e of t.B_)await e(!0)}async function Wu(t){for(const e of t.B_)await e(!1)}function wT(t,e){const n=ae(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),U1(n)?W1(n):Ma(n).r_()&&F1(n,e))}function V1(t,e){const n=ae(t),r=Ma(n);n.N_.delete(e),r.r_()&&xT(n,e),n.N_.size===0&&(r.r_()?r.o_():bo(n)&&n.q_.set("Unknown"))}function F1(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ma(t).A_(e)}function xT(t,e){t.Q_.xe(e),Ma(t).R_(e)}function W1(t){t.Q_=new Cj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ma(t).start(),t.q_.v_()}function U1(t){return bo(t)&&!Ma(t).n_()&&t.N_.size>0}function bo(t){return ae(t).L_.size===0}function TT(t){t.Q_=void 0}async function C5(t){t.q_.set("Online")}async function L5(t){t.N_.forEach((e,n)=>{F1(t,e)})}async function A5(t,e){TT(t),U1(t)?(t.q_.M_(e),W1(t)):t.q_.set("Unknown")}async function P5(t,e,n){if(t.q_.set("Online"),e instanceof cT&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oh(t,r)}else if(e instanceof hd?t.Q_.Ke(e):e instanceof uT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(se.min()))try{const r=await kT(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.Q_.rt(s);return a.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=o.N_.get(d);f&&o.N_.set(d,f.withResumeToken(l.resumeToken,s))}}),a.targetMismatches.forEach((l,d)=>{const f=o.N_.get(l);if(!f)return;o.N_.set(l,f.withResumeToken(wt.EMPTY_BYTE_STRING,f.snapshotVersion)),xT(o,l);const m=new si(f.target,l,d,f.sequenceNumber);F1(o,m)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await oh(t,r)}}async function oh(t,e,n){if(!Du(e))throw e;t.L_.add(1),await Wu(t),t.q_.set("Offline"),n||(n=()=>kT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await nf(t)})}function IT(t,e){return e().catch(n=>oh(t,n,e))}async function rf(t){const e=ae(t),n=Pi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;R5(e);)try{const i=await p5(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,b5(e,i)}catch(i){await oh(e,i)}ST(e)&&CT(e)}function R5(t){return bo(t)&&t.O_.length<10}function b5(t,e){t.O_.push(e);const n=Pi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function ST(t){return bo(t)&&!Pi(t).n_()&&t.O_.length>0}function CT(t){Pi(t).start()}async function j5(t){Pi(t).p_()}async function M5(t){const e=Pi(t);for(const n of t.O_)e.m_(n.mutations)}async function N5(t,e,n){const r=t.O_.shift(),i=b1.from(r,e,n);await IT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await rf(t)}async function O5(t,e){e&&Pi(t).V_&&await async function(r,i){if(function(s){return Tj(s)&&s!==U.ABORTED}(i.code)){const o=r.O_.shift();Pi(r).s_(),await IT(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await rf(r)}}(t,e),ST(t)&&CT(t)}async function Fk(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=bo(n);n.L_.add(3),await Wu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await nf(n)}async function D5(t,e){const n=ae(t);e?(n.L_.delete(2),await nf(n)):e||(n.L_.add(2),await Wu(n),n.q_.set("Unknown"))}function Ma(t){return t.K_||(t.K_=function(n,r,i){const o=ae(n);return o.w_(),new w5(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:C5.bind(null,t),Ro:L5.bind(null,t),mo:A5.bind(null,t),d_:P5.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),U1(t)?W1(t):t.q_.set("Unknown")):(await t.K_.stop(),TT(t))})),t.K_}function Pi(t){return t.U_||(t.U_=function(n,r,i){const o=ae(n);return o.w_(),new x5(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:j5.bind(null,t),mo:O5.bind(null,t),f_:M5.bind(null,t),g_:N5.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await rf(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new $1(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function z1(t,e){if(Or("AsyncQueue",`${e}: ${t}`),Du(t))return new Q(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=yl(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new ta(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ta)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ta;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(){this.W_=new qe(te.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):oe():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ga{constructor(e,n,r,i,o,s,a,l,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new ga(e,n,ta.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V5{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class F5{constructor(){this.queries=Uk(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ae(n),o=i.queries;i.queries=Uk(),o.forEach((s,a)=>{for(const l of a.j_)l.onError(r)})})(this,new Q(U.ABORTED,"Firestore shutting down"))}}function Uk(){return new ja(t=>Qx(t),Qh)}async function LT(t,e){const n=ae(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new V5,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const a=z1(s,`Initialization of query '${Ls(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&B1(n)}async function AT(t,e){const n=ae(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function W5(t,e){const n=ae(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.j_)a.X_(i)&&(r=!0);s.z_=i}}r&&B1(n)}function U5(t,e,n){const r=ae(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function B1(t){t.Y_.forEach(e=>{e.next()})}var f0,$k;($k=f0||(f0={})).ea="default",$k.Cache="cache";class PT{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ga(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ga.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==f0.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.key=e}}class bT{constructor(e){this.key=e}}class $5{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=fe(),this.mutatedKeys=fe(),this.Aa=Zx(e),this.Ra=new ta(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Wk,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const E=i.get(f),k=Zh(this.query,m)?m:null,T=!!E&&this.mutatedKeys.has(E.key),A=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let S=!1;E&&k?E.data.isEqual(k.data)?T!==A&&(r.track({type:3,doc:k}),S=!0):this.ga(E,k)||(r.track({type:2,doc:k}),S=!0,(l&&this.Aa(k,l)>0||d&&this.Aa(k,d)<0)&&(a=!0)):!E&&k?(r.track({type:0,doc:k}),S=!0):E&&!k&&(r.track({type:1,doc:E}),S=!0,(l||d)&&(a=!0)),S&&(k?(s=s.add(k),o=A?o.add(f):o.delete(f)):(s=s.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const f=this.query.limitType==="F"?s.last():s.first();s=s.delete(f.key),o=o.delete(f.key),r.track({type:1,doc:f})}return{Ra:s,fa:r,ns:a,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((f,m)=>function(k,T){const A=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return A(k)-A(T)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,d=l!==this.Ea;return this.Ea=l,s.length!==0||d?{snapshot:new ga(this.query,e.Ra,o,s,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Wk,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=fe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new bT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new RT(r))}),n}ba(e){this.Ta=e.Ts,this.da=fe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ga.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class z5{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class B5{constructor(e){this.key=e,this.va=!1}}class H5{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new ja(a=>Qx(a),Qh),this.Ma=new Map,this.xa=new Set,this.Oa=new qe(te.comparator),this.Na=new Map,this.La=new N1,this.Ba={},this.ka=new Map,this.qa=ma.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function q5(t,e,n=!0){const r=VT(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await jT(r,e,n,!0),i}async function Y5(t,e){const n=VT(t);await jT(n,e,!0,!1)}async function jT(t,e,n,r){const i=await m5(t.localStore,sr(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,n);let a;return r&&(a=await G5(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&wT(t.remoteStore,i),a}async function G5(t,e,n,r,i){t.Ka=(m,E,k)=>async function(A,S,y,g){let _=S.view.ma(y);_.ns&&(_=await Ok(A.localStore,S.query,!1).then(({documents:w})=>S.view.ma(w,_)));const x=g&&g.targetChanges.get(S.targetId),R=g&&g.targetMismatches.get(S.targetId)!=null,N=S.view.applyChanges(_,A.isPrimaryClient,x,R);return Bk(A,S.targetId,N.wa),N.snapshot}(t,m,E,k);const o=await Ok(t.localStore,e,!0),s=new $5(e,o.Ts),a=s.ma(o.documents),l=Fu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=s.applyChanges(a,t.isPrimaryClient,l);Bk(t,n,d.wa);const f=new z5(e,n,s);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function K5(t,e,n){const r=ae(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(s=>!Qh(s,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await h0(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&V1(r.remoteStore,i.targetId),p0(r,i.targetId)}).catch(Ou)):(p0(r,i.targetId),await h0(r.localStore,i.targetId,!0))}async function Q5(t,e){const n=ae(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),V1(n.remoteStore,r.targetId))}async function Z5(t,e,n){const r=i3(t);try{const i=await function(s,a){const l=ae(s),d=it.now(),f=a.reduce((k,T)=>k.add(T.key),fe());let m,E;return l.persistence.runTransaction("Locally write mutations","readwrite",k=>{let T=Dr(),A=fe();return l.cs.getEntries(k,f).next(S=>{T=S,T.forEach((y,g)=>{g.isValidDocument()||(A=A.add(y))})}).next(()=>l.localDocuments.getOverlayedDocuments(k,T)).next(S=>{m=S;const y=[];for(const g of a){const _=kj(g,m.get(g.key).overlayedDocument);_!=null&&y.push(new Fi(g.key,_,$x(_.value.mapValue),Sn.exists(!0)))}return l.mutationQueue.addMutationBatch(k,d,y,a)}).next(S=>{E=S;const y=S.applyToLocalDocumentSet(m,A);return l.documentOverlayCache.saveOverlays(k,S.batchId,y)})}).then(()=>({batchId:E.batchId,changes:Jx(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let d=s.Ba[s.currentUser.toKey()];d||(d=new qe(we)),d=d.insert(a,l),s.Ba[s.currentUser.toKey()]=d}(r,i.batchId,n),await Uu(r,i.changes),await rf(r.remoteStore)}catch(i){const o=z1(i,"Failed to persist write");n.reject(o)}}async function MT(t,e){const n=ae(t);try{const r=await h5(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Na.get(o);s&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?Le(s.va):i.removedDocuments.size>0&&(Le(s.va),s.va=!1))}),await Uu(n,r,e)}catch(r){await Ou(r)}}function zk(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const a=s.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const l=ae(s);l.onlineState=a;let d=!1;l.queries.forEach((f,m)=>{for(const E of m.j_)E.Z_(a)&&(d=!0)}),d&&B1(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function X5(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let s=new qe(te.comparator);s=s.insert(o,Mt.newNoDocument(o,se.min()));const a=fe().add(o),l=new ef(se.min(),new Map,new qe(we),s,a);await MT(r,l),r.Oa=r.Oa.remove(o),r.Na.delete(e),H1(r)}else await h0(r.localStore,e,!1).then(()=>p0(r,e,n)).catch(Ou)}async function J5(t,e){const n=ae(t),r=e.batch.batchId;try{const i=await d5(n.localStore,e);OT(n,r,null),NT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Uu(n,i)}catch(i){await Ou(i)}}async function e3(t,e,n){const r=ae(t);try{const i=await function(s,a){const l=ae(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,a).next(m=>(Le(m!==null),f=m.keys(),l.mutationQueue.removeMutationBatch(d,m))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(r.localStore,e);OT(r,e,n),NT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Uu(r,i)}catch(i){await Ou(i)}}function NT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function OT(t,e,n){const r=ae(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function p0(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||DT(t,r)})}function DT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(V1(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),H1(t))}function Bk(t,e,n){for(const r of n)r instanceof RT?(t.La.addReference(r.key,e),t3(t,r)):r instanceof bT?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||DT(t,r.key)):oe()}function t3(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),H1(t))}function H1(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new te(De.fromString(e)),r=t.qa.next();t.Na.set(r,new B5(n)),t.Oa=t.Oa.insert(n,r),wT(t.remoteStore,new si(sr(A1(n.path)),r,"TargetPurposeLimboResolution",x1.oe))}}async function Uu(t,e,n){const r=ae(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{s.push(r.Ka(l,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(d){i.push(d);const m=D1.Wi(l.targetId,d);o.push(m)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(l,d){const f=ae(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>B.forEach(d,E=>B.forEach(E.$i,k=>f.persistence.referenceDelegate.addReference(m,E.targetId,k)).next(()=>B.forEach(E.Ui,k=>f.persistence.referenceDelegate.removeReference(m,E.targetId,k)))))}catch(m){if(!Du(m))throw m;X("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const E=m.targetId;if(!m.fromCache){const k=f.os.get(E),T=k.snapshotVersion,A=k.withLastLimboFreeSnapshotVersion(T);f.os=f.os.insert(E,A)}}}(r.localStore,o))}async function n3(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await vT(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(a=>{a.forEach(l=>{l.reject(new Q(U.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Uu(n,r.hs)}}function r3(t,e){const n=ae(t),r=n.Na.get(e);if(r&&r.va)return fe().add(r.key);{let i=fe();const o=n.Ma.get(e);if(!o)return i;for(const s of o){const a=n.Fa.get(s);i=i.unionWith(a.view.Va)}return i}}function VT(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=MT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=r3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=X5.bind(null,e),e.Ca.d_=W5.bind(null,e.eventManager),e.Ca.$a=U5.bind(null,e.eventManager),e}function i3(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=J5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=e3.bind(null,e),e}class sh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=tf(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return c5(this.persistence,new l5,e.initialUser,this.serializer)}Ga(e){return new o5(O1.Zr,this.serializer)}Wa(e){return new y5}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sh.provider={build:()=>new sh};class m0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zk(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=n3.bind(null,this.syncEngine),await D5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new F5}()}createDatastore(e){const n=tf(e.databaseInfo.databaseId),r=function(o){return new E5(o)}(e.databaseInfo);return function(o,s,a,l){return new T5(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new S5(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>zk(this.syncEngine,n,0),function(){return Vk.D()?new Vk:new v5}())}createSyncEngine(e,n){return function(i,o,s,a,l,d,f){const m=new H5(i,o,s,a,l,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=ae(i);X("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Wu(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}m0.provider={build:()=>new m0};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class FT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Or("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o3{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=bt.UNAUTHENTICATED,this.clientId=Fx.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async s=>{X("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(X("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=z1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Cp(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await s3(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Fk(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Fk(e.remoteStore,i)),t._onlineComponents=e}async function s3(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;da("Error using user provided cache. Falling back to memory cache: "+n),await Cp(t,new sh)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await Cp(t,new sh);return t._offlineComponents}async function WT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Hk(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Hk(t,new m0))),t._onlineComponents}function a3(t){return WT(t).then(e=>e.syncEngine)}async function UT(t){const e=await WT(t),n=e.eventManager;return n.onListen=q5.bind(null,e.syncEngine),n.onUnlisten=K5.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Y5.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Q5.bind(null,e.syncEngine),n}function l3(t,e,n={}){const r=new Ar;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,d){const f=new FT({next:E=>{f.Za(),s.enqueueAndForget(()=>AT(o,m));const k=E.docs.has(a);!k&&E.fromCache?d.reject(new Q(U.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&E.fromCache&&l&&l.source==="server"?d.reject(new Q(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),m=new PT(A1(a.path),f,{includeMetadataChanges:!0,_a:!0});return LT(o,m)}(await UT(t),t.asyncQueue,e,n,r)),r.promise}function u3(t,e,n={}){const r=new Ar;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,d){const f=new FT({next:E=>{f.Za(),s.enqueueAndForget(()=>AT(o,m)),E.fromCache&&l.source==="server"?d.reject(new Q(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),m=new PT(a,f,{includeMetadataChanges:!0,_a:!0});return LT(o,m)}(await UT(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function $T(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(t,e,n){if(!n)throw new Q(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function c3(t,e,n,r){if(e===!0&&r===!0)throw new Q(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yk(t){if(!te.isDocumentKey(t))throw new Q(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gk(t){if(te.isDocumentKey(t))throw new Q(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function of(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function Qn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=of(t);throw new Q(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}c3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$T((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kk({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kk(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Cb;switch(r.type){case"firstParty":return new Rb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qk.get(n);r&&(X("ComponentProvider","Removing Datastore"),qk.delete(n),r.terminate())}(this),Promise.resolve()}}function d3(t,e,n,r={}){var i;const o=(t=Qn(t,sf))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&da("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=bt.MOCK_USER;else{a=U8(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new Q(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new bt(d)}t._authCredentials=new Lb(new Vx(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wi(this.firestore,e,this._query)}}class Ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ht(this.firestore,e,this._key)}}class Ei extends Wi{constructor(e,n,r){super(e,n,A1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ht(this.firestore,null,new te(e))}withConverter(e){return new Ei(this.firestore,e,this._path)}}function Tn(t,e,...n){if(t=He(t),zT("collection","path",e),t instanceof sf){const r=De.fromString(e,...n);return Gk(r),new Ei(t,null,r)}{if(!(t instanceof Ht||t instanceof Ei))throw new Q(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Gk(r),new Ei(t.firestore,null,r)}}function lt(t,e,...n){if(t=He(t),arguments.length===1&&(e=Fx.newId()),zT("doc","path",e),t instanceof sf){const r=De.fromString(e,...n);return Yk(r),new Ht(t,null,new te(r))}{if(!(t instanceof Ht||t instanceof Ei))throw new Q(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Yk(r),new Ht(t.firestore,t instanceof Ei?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new _T(this,"async_queue_retry"),this.Vu=()=>{const r=Sp();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Sp();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Sp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ar;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Du(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw Or("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=$1.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&oe()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class jo extends sf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Qk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qk(e),this._firestoreClient=void 0,await e}}}function h3(t,e){const n=typeof t=="object"?t:Hh(),r=typeof t=="string"?t:"(default)",i=Di(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=V8("firestore");o&&d3(i,...o)}return i}function q1(t){if(t._terminated)throw new Q(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||f3(t),t._firestoreClient}function f3(t){var e,n,r;const i=t._freezeSettings(),o=function(a,l,d,f){return new Bb(a,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,$T(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new o3(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ya(wt.fromBase64String(e))}catch(n){throw new Q(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ya(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lf=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
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
 */class G1{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p3=/^__.*__$/;class m3{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vu(e,this.data,n,this.fieldTransforms)}}class BT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Fi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function HT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class K1{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new K1(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ah(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(HT(this.Cu)&&p3.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class g3{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||tf(e)}Qu(e,n,r,i=!1){return new K1({Cu:e,methodName:n,qu:r,path:vt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uf(t){const e=t._freezeSettings(),n=tf(t._databaseId);return new g3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qT(t,e,n,r,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);Z1("Data must be an object, but it was:",s,r);const a=YT(r,s);let l,d;if(o.merge)l=new pn(s.fieldMask),d=s.fieldTransforms;else if(o.mergeFields){const f=[];for(const m of o.mergeFields){const E=g0(e,m,n);if(!s.contains(E))throw new Q(U.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);KT(f,E)||f.push(E)}l=new pn(f),d=s.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,d=s.fieldTransforms;return new m3(new en(a),l,d)}class cf extends lf{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cf}}class Q1 extends lf{_toFieldTransform(e){return new mj(e.path,new fu)}isEqual(e){return e instanceof Q1}}function y3(t,e,n,r){const i=t.Qu(1,e,n);Z1("Data must be an object, but it was:",i,r);const o=[],s=en.empty();Ro(r,(l,d)=>{const f=X1(e,l,n);d=He(d);const m=i.Nu(f);if(d instanceof cf)o.push(f);else{const E=$u(d,m);E!=null&&(o.push(f),s.set(f,E))}});const a=new pn(o);return new BT(s,a,i.fieldTransforms)}function v3(t,e,n,r,i,o){const s=t.Qu(1,e,n),a=[g0(e,r,n)],l=[i];if(o.length%2!=0)throw new Q(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<o.length;E+=2)a.push(g0(e,o[E])),l.push(o[E+1]);const d=[],f=en.empty();for(let E=a.length-1;E>=0;--E)if(!KT(d,a[E])){const k=a[E];let T=l[E];T=He(T);const A=s.Nu(k);if(T instanceof cf)d.push(k);else{const S=$u(T,A);S!=null&&(d.push(k),f.set(k,S))}}const m=new pn(d);return new BT(f,m,s.fieldTransforms)}function k3(t,e,n,r=!1){return $u(n,t.Qu(r?4:3,e))}function $u(t,e){if(GT(t=He(t)))return Z1("Unsupported field value:",e,t),YT(t,e);if(t instanceof lf)return function(r,i){if(!HT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let l=$u(a,i.Lu(s));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=He(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hj(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=it.fromDate(r);return{timestampValue:ih(i.serializer,o)}}if(r instanceof it){const o=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ih(i.serializer,o)}}if(r instanceof Y1)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ya)return{bytesValue:dT(i.serializer,r._byteString)};if(r instanceof Ht){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:M1(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof G1)return function(s,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return P1(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${of(r)}`)}(t,e)}function YT(t,e){const n={};return Wx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ro(t,(r,i)=>{const o=$u(i,e.Mu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function GT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof Y1||t instanceof ya||t instanceof Ht||t instanceof lf||t instanceof G1)}function Z1(t,e,n){if(!GT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=of(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function g0(t,e,n){if((e=He(e))instanceof af)return e._internalPath;if(typeof e=="string")return X1(t,e);throw ah("Field path arguments must be of type string or ",t,!1,void 0,n)}const _3=new RegExp("[~\\*/\\[\\]]");function X1(t,e,n){if(e.search(_3)>=0)throw ah(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new af(...e.split("."))._internalPath}catch{throw ah(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ah(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new Q(U.INVALID_ARGUMENT,a+t+l)}function KT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new E3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(df("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class E3 extends QT{data(){return super.data()}}function df(t,e){return typeof e=="string"?X1(t,e):e instanceof af?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w3(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class J1{}class ey extends J1{}function Sr(t,e,...n){let r=[];e instanceof J1&&r.push(e),r=r.concat(n),function(o){const s=o.filter(l=>l instanceof ty).length,a=o.filter(l=>l instanceof hf).length;if(s>1||s>0&&a>0)throw new Q(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class hf extends ey{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new hf(e,n,r)}_apply(e){const n=this._parse(e);return ZT(e._query,n),new Wi(e.firestore,e.converter,a0(e._query,n))}_parse(e){const n=uf(e.firestore);return function(o,s,a,l,d,f,m){let E;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Q(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Xk(m,f);const k=[];for(const T of m)k.push(Zk(l,o,T));E={arrayValue:{values:k}}}else E=Zk(l,o,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Xk(m,f),E=k3(a,s,m,f==="in"||f==="not-in");return rt.create(d,f,E)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ai(t,e,n){const r=e,i=df("where",t);return hf._create(i,r,n)}class ty extends J1{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ty(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const l of a)ZT(s,l),s=a0(s,l)}(e._query,n),new Wi(e.firestore,e.converter,a0(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ny extends ey{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ny(e,n)}_apply(e){const n=function(i,o,s){if(i.startAt!==null)throw new Q(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Q(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new hu(o,s)}(e._query,this._field,this._direction);return new Wi(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new ba(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function ry(t,e="asc"){const n=e,r=df("orderBy",t);return ny._create(r,n)}class iy extends ey{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new iy(e,n,r)}_apply(e){return new Wi(e.firestore,e.converter,nh(e._query,this._limit,this._limitType))}}function x3(t){return iy._create("limit",t,"F")}function Zk(t,e,n){if(typeof(n=He(n))=="string"){if(n==="")throw new Q(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kx(e)&&n.indexOf("/")!==-1)throw new Q(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!te.isDocumentKey(r))throw new Q(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return kk(t,new te(r))}if(n instanceof Ht)return kk(t,n._key);throw new Q(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${of(n)}.`)}function Xk(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ZT(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Q(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class T3{convertValue(e,n="none"){switch(xo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ro(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(s=>Ze(s.doubleValue));return new G1(o)}convertGeoPoint(e){return new Y1(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=I1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(uu(e));default:return null}}convertTimestamp(e){const n=Ai(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Le(yT(r));const i=new cu(r.get(1),r.get(3)),o=new te(r.popFirst(5));return i.isEqual(n)||Or(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class JT extends QT{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(df("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class fd extends JT{data(e={}){return super.data(e)}}class I3{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new kl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fd(this._firestore,this._userDataWriter,r.key,r,new kl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const l=new fd(i._firestore,i._userDataWriter,a.doc.key,a.doc,new kl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const l=new fd(i._firestore,i._userDataWriter,a.doc.key,a.doc,new kl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return a.type!==0&&(d=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),f=s.indexOf(a.doc.key)),{type:S3(a.type),doc:l,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function S3(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t){t=Qn(t,Ht);const e=Qn(t.firestore,jo);return l3(q1(e),t._key).then(n=>C3(e,t,n))}class e6 extends T3{constructor(e){super(),this.firestore=e}convertBytes(e){return new ya(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ht(this.firestore,null,n)}}function Wn(t){t=Qn(t,Wi);const e=Qn(t.firestore,jo),n=q1(e),r=new e6(e);return w3(t._query),u3(n,t._query).then(i=>new I3(e,r,t,i))}function yu(t,e,n){t=Qn(t,Ht);const r=Qn(t.firestore,jo),i=XT(t.converter,e,n);return ff(r,[qT(uf(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Sn.none())])}function na(t,e,n,...r){t=Qn(t,Ht);const i=Qn(t.firestore,jo),o=uf(i);let s;return s=typeof(e=He(e))=="string"||e instanceof af?v3(o,"updateDoc",t._key,e,n,r):y3(o,"updateDoc",t._key,e),ff(i,[s.toMutation(t._key,Sn.exists(!0))])}function oy(t){return ff(Qn(t.firestore,jo),[new R1(t._key,Sn.none())])}function t6(t,e){const n=Qn(t.firestore,jo),r=lt(t),i=XT(t.converter,e);return ff(n,[qT(uf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Sn.exists(!1))]).then(()=>r)}function ff(t,e){return function(r,i){const o=new Ar;return r.asyncQueue.enqueueAndForget(async()=>Z5(await a3(r),i,o)),o.promise}(q1(t),e)}function C3(t,e,n){const r=n.docs.get(e._key),i=new e6(t);return new JT(t,i,e._key,r,new kl(n.hasPendingWrites,n.fromCache),e.converter)}function zu(){return new Q1("serverTimestamp")}(function(e,n=!0){(function(i){Ra=i})(Po),Yn(new An("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new jo(new Ab(r.getProvider("auth-internal")),new jb(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Q(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cu(d.options.projectId,f)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),ln(pk,"4.7.3",e),ln(pk,"4.7.3","esm2017")})();const n6="@firebase/installations",sy="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r6=1e4,i6=`w:${sy}`,o6="FIS_v2",L3="https://firebaseinstallations.googleapis.com/v1",A3=60*60*1e3,P3="installations",R3="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b3={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},To=new Ao(P3,R3,b3);function s6(t){return t instanceof Rn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a6({projectId:t}){return`${L3}/projects/${t}/installations`}function l6(t){return{token:t.token,requestStatus:2,expiresIn:M3(t.expiresIn),creationTime:Date.now()}}async function u6(t,e){const r=(await e.json()).error;return To.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function c6({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function j3(t,{refreshToken:e}){const n=c6(t);return n.append("Authorization",N3(e)),n}async function d6(t){const e=await t();return e.status>=500&&e.status<600?t():e}function M3(t){return Number(t.replace("s","000"))}function N3(t){return`${o6} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O3({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=a6(t),i=c6(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={fid:n,authVersion:o6,appId:t.appId,sdkVersion:i6},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await d6(()=>fetch(r,a));if(l.ok){const d=await l.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:l6(d.authToken)}}else throw await u6("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h6(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D3(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V3=/^[cdef][\w-]{21}$/,y0="";function F3(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=W3(t);return V3.test(n)?n:y0}catch{return y0}}function W3(t){return D3(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f6=new Map;function p6(t,e){const n=pf(t);m6(n,e),U3(n,e)}function m6(t,e){const n=f6.get(t);if(n)for(const r of n)r(e)}function U3(t,e){const n=$3();n&&n.postMessage({key:t,fid:e}),z3()}let so=null;function $3(){return!so&&"BroadcastChannel"in self&&(so=new BroadcastChannel("[Firebase] FID Change"),so.onmessage=t=>{m6(t.data.key,t.data.fid)}),so}function z3(){f6.size===0&&so&&(so.close(),so=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B3="firebase-installations-database",H3=1,Io="firebase-installations-store";let Lp=null;function ay(){return Lp||(Lp=Y8(B3,H3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Io)}}})),Lp}async function lh(t,e){const n=pf(t),i=(await ay()).transaction(Io,"readwrite"),o=i.objectStore(Io),s=await o.get(n);return await o.put(e,n),await i.done,(!s||s.fid!==e.fid)&&p6(t,e.fid),e}async function g6(t){const e=pf(t),r=(await ay()).transaction(Io,"readwrite");await r.objectStore(Io).delete(e),await r.done}async function mf(t,e){const n=pf(t),i=(await ay()).transaction(Io,"readwrite"),o=i.objectStore(Io),s=await o.get(n),a=e(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&p6(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ly(t){let e;const n=await mf(t.appConfig,r=>{const i=q3(r),o=Y3(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===y0?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function q3(t){const e=t||{fid:F3(),registrationStatus:0};return y6(e)}function Y3(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(To.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=G3(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:K3(t)}:{installationEntry:e}}async function G3(t,e){try{const n=await O3(t,e);return lh(t.appConfig,n)}catch(n){throw s6(n)&&n.customData.serverCode===409?await g6(t.appConfig):await lh(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function K3(t){let e=await Jk(t.appConfig);for(;e.registrationStatus===1;)await h6(100),e=await Jk(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ly(t);return r||n}return e}function Jk(t){return mf(t,e=>{if(!e)throw To.create("installation-not-found");return y6(e)})}function y6(t){return Q3(t)?{fid:t.fid,registrationStatus:0}:t}function Q3(t){return t.registrationStatus===1&&t.registrationTime+r6<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z3({appConfig:t,heartbeatServiceProvider:e},n){const r=X3(t,n),i=j3(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={installation:{sdkVersion:i6,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await d6(()=>fetch(r,a));if(l.ok){const d=await l.json();return l6(d)}else throw await u6("Generate Auth Token",l)}function X3(t,{fid:e}){return`${a6(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uy(t,e=!1){let n;const r=await mf(t.appConfig,o=>{if(!v6(o))throw To.create("not-registered");const s=o.authToken;if(!e&&tM(s))return o;if(s.requestStatus===1)return n=J3(t,e),o;{if(!navigator.onLine)throw To.create("app-offline");const a=rM(o);return n=eM(t,a),a}});return n?await n:r.authToken}async function J3(t,e){let n=await e_(t.appConfig);for(;n.authToken.requestStatus===1;)await h6(100),n=await e_(t.appConfig);const r=n.authToken;return r.requestStatus===0?uy(t,e):r}function e_(t){return mf(t,e=>{if(!v6(e))throw To.create("not-registered");const n=e.authToken;return iM(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function eM(t,e){try{const n=await Z3(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await lh(t.appConfig,r),n}catch(n){if(s6(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await g6(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await lh(t.appConfig,r)}throw n}}function v6(t){return t!==void 0&&t.registrationStatus===2}function tM(t){return t.requestStatus===2&&!nM(t)}function nM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+A3}function rM(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function iM(t){return t.requestStatus===1&&t.requestTime+r6<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oM(t){const e=t,{installationEntry:n,registrationPromise:r}=await ly(e);return r?r.catch(console.error):uy(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sM(t,e=!1){const n=t;return await aM(n),(await uy(n,e)).token}async function aM(t){const{registrationPromise:e}=await ly(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lM(t){if(!t||!t.options)throw Ap("App Configuration");if(!t.name)throw Ap("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ap(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ap(t){return To.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k6="installations",uM="installations-internal",cM=t=>{const e=t.getProvider("app").getImmediate(),n=lM(e),r=Di(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},dM=t=>{const e=t.getProvider("app").getImmediate(),n=Di(e,k6).getImmediate();return{getId:()=>oM(n),getToken:i=>sM(n,i)}};function hM(){Yn(new An(k6,cM,"PUBLIC")),Yn(new An(uM,dM,"PRIVATE"))}hM();ln(n6,sy);ln(n6,sy,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="analytics",fM="firebase_id",pM="origin",mM=60*1e3,gM="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",cy="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new Bh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yM={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},gn=new Ao("analytics","Analytics",yM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vM(t){if(!t.startsWith(cy)){const e=gn.create("invalid-gtag-resource",{gtagURL:t});return un.warn(e.message),""}return t}function _6(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function kM(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function _M(t,e){const n=kM("firebase-js-sdk-policy",{createScriptURL:vM}),r=document.createElement("script"),i=`${cy}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function EM(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function wM(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const l=(await _6(n)).find(d=>d.measurementId===i);l&&await e[l.appId]}}catch(a){un.error(a)}t("config",i,o)}async function xM(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await _6(n);for(const l of s){const d=a.find(m=>m.measurementId===l),f=d&&e[d.appId];if(f)o.push(f);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){un.error(o)}}function TM(t,e,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await xM(t,e,n,a,l)}else if(o==="config"){const[a,l]=s;await wM(t,e,n,r,a,l)}else if(o==="consent"){const[a,l]=s;t("consent",a,l)}else if(o==="get"){const[a,l,d]=s;t("get",a,l,d)}else if(o==="set"){const[a]=s;t("set",a)}else t(o,...s)}catch(a){un.error(a)}}return i}function IM(t,e,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=TM(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function SM(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(cy)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM=30,LM=1e3;class AM{constructor(e={},n=LM){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const E6=new AM;function PM(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function RM(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:PM(r)},o=gM.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw gn.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function bM(t,e=E6,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw gn.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw gn.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new NM;return setTimeout(async()=>{a.abort()},mM),w6({appId:r,apiKey:i,measurementId:o},s,a,e)}async function w6(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=E6){var o;const{appId:s,measurementId:a}=t;try{await jM(r,e)}catch(l){if(a)return un.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await RM(t);return i.deleteThrottleMetadata(s),l}catch(l){const d=l;if(!MM(d)){if(i.deleteThrottleMetadata(s),a)return un.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:s,measurementId:a};throw l}const f=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?F2(n,i.intervalMillis,CM):F2(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,m),un.debug(`Calling attemptFetch again in ${f} millis`),w6(t,m,r,i)}}function jM(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(gn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function MM(t){if(!(t instanceof Rn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class NM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function OM(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DM(){if(z8())try{await B8()}catch(t){return un.warn(gn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return un.warn(gn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function VM(t,e,n,r,i,o,s){var a;const l=bM(t);l.then(k=>{n[k.measurementId]=k.appId,t.options.measurementId&&k.measurementId!==t.options.measurementId&&un.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>un.error(k)),e.push(l);const d=DM().then(k=>{if(k)return r.getId()}),[f,m]=await Promise.all([l,d]);SM(o)||_M(o,f.measurementId),i("js",new Date);const E=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return E[pM]="firebase",E.update=!0,m!=null&&(E[fM]=m),i("config",f.measurementId,E),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e){this.app=e}_delete(){return delete Ol[this.app.options.appId],Promise.resolve()}}let Ol={},t_=[];const n_={};let Pp="dataLayer",WM="gtag",r_,x6,i_=!1;function UM(){const t=[];if($8()&&t.push("This is a browser extension environment."),zL()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=gn.create("invalid-analytics-context",{errorInfo:e});un.warn(n.message)}}function $M(t,e,n){UM();const r=t.options.appId;if(!r)throw gn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)un.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gn.create("no-api-key");if(Ol[r]!=null)throw gn.create("already-exists",{id:r});if(!i_){EM(Pp);const{wrappedGtag:o,gtagCore:s}=IM(Ol,t_,n_,Pp,WM);x6=o,r_=s,i_=!0}return Ol[r]=VM(t,t_,n_,e,r_,Pp,n),new FM(t)}function zM(t=Hh()){t=He(t);const e=Di(t,uh);return e.isInitialized()?e.getImmediate():BM(t)}function BM(t,e={}){const n=Di(t,uh);if(n.isInitialized()){const i=n.getImmediate();if(ou(e,n.getOptions()))return i;throw gn.create("already-initialized")}return n.initialize({options:e})}function HM(t,e,n,r){t=He(t),OM(x6,Ol[t.app.options.appId],e,n,r).catch(i=>un.error(i))}const o_="@firebase/analytics",s_="0.10.8";function qM(){Yn(new An(uh,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return $M(r,i,n)},"PUBLIC")),Yn(new An("analytics-internal",t,"PRIVATE")),ln(o_,s_),ln(o_,s_,"esm2017");function t(e){try{const n=e.getProvider(uh).getImmediate();return{logEvent:(r,i,o)=>HM(n,r,i,o)}}catch(n){throw gn.create("interop-component-reg-failed",{reason:n})}}}qM();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T6="firebasestorage.googleapis.com",YM="storageBucket",GM=2*60*1e3,KM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Rn{constructor(e,n,r=0){super(Rp(e),`Firebase Storage: ${n} (${Rp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,dr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Rp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ur;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ur||(ur={}));function Rp(t){return"storage/"+t}function QM(){const t="An unknown error occurred, please check the error payload for server response.";return new dr(ur.UNKNOWN,t)}function ZM(){return new dr(ur.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function XM(){return new dr(ur.CANCELED,"User canceled the upload/download.")}function JM(t){return new dr(ur.INVALID_URL,"Invalid URL '"+t+"'.")}function eN(t){return new dr(ur.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function a_(t){return new dr(ur.INVALID_ARGUMENT,t)}function I6(){return new dr(ur.APP_DELETED,"The Firebase app was deleted.")}function tN(t){return new dr(ur.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Un.makeFromUrl(e,n)}catch{return new Un(e,"")}if(r.path==="")return r;throw eN(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function d(x){x.path_=decodeURIComponent(x.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",k=new RegExp(`^https?://${m}/${f}/b/${i}/o${E}`,"i"),T={bucket:1,path:3},A=n===T6?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",y=new RegExp(`^https?://${A}/${i}/${S}`,"i"),_=[{regex:a,indices:l,postModify:o},{regex:k,indices:T,postModify:d},{regex:y,indices:{bucket:1,path:2},postModify:d}];for(let x=0;x<_.length;x++){const R=_[x],N=R.regex.exec(e);if(N){const w=N[R.indices.bucket];let I=N[R.indices.path];I||(I=""),r=new Un(w,I),R.postModify(r);break}}if(r==null)throw JM(e);return r}}class nN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let d=!1;function f(...S){d||(d=!0,e.apply(null,S))}function m(S){i=setTimeout(()=>{i=null,t(k,l())},S)}function E(){o&&clearTimeout(o)}function k(S,...y){if(d){E();return}if(S){E(),f.call(null,S,...y);return}if(l()||s){E(),f.call(null,S,...y);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,m(_)}let T=!1;function A(S){T||(T=!0,E(),!d&&(i!==null?(S||(a=2),clearTimeout(i),m(0)):S||(a=1)))}return m(0),o=setTimeout(()=>{s=!0,A(!0)},n),A}function iN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(t){return t!==void 0}function l_(t,e,n,r){if(r<e)throw a_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw a_(`Invalid value for '${t}'. Expected ${n} or less.`)}function sN(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var ch;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ch||(ch={}));/**
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
 */function aN(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n,r,i,o,s,a,l,d,f,m,E=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.retry=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,T)=>{this.resolve_=k,this.reject_=T,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Rc(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===ch.NO_ERROR,l=o.getStatus();if(!a||aN(l,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===ch.ABORT;r(!1,new Rc(!1,null,f));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new Rc(d,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());oN(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=QM();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?I6():XM();s(l)}else{const l=ZM();s(l)}};this.canceled_?n(!1,new Rc(!1,null,!0)):this.backoffId_=rN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&iN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Rc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function uN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function cN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function hN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function fN(t,e,n,r,i,o,s=!0){const a=sN(t.urlParams),l=t.url+a,d=Object.assign({},t.headers);return dN(d,e),uN(d,n),cN(d,o),hN(d,r),new lN(l,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function mN(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,n){this._service=e,n instanceof Un?this._location=n:this._location=Un.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new dh(e,n)}get root(){const e=new Un(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mN(this._location.path)}get storage(){return this._service}get parent(){const e=pN(this._location.path);if(e===null)return null;const n=new Un(this._location.bucket,e);return new dh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw tN(e)}}function u_(t,e){const n=e==null?void 0:e[YM];return n==null?null:Un.makeFromBucketSpec(n,t)}function gN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:U8(i,t.app.options.projectId))}class yN{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=T6,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=GM,this._maxUploadRetryTime=KM,this._requests=new Set,i!=null?this._bucket=Un.makeFromBucketSpec(i,this._host):this._bucket=u_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Un.makeFromBucketSpec(this._url,e):this._bucket=u_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){l_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){l_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new dh(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new nN(I6());{const s=fN(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const c_="@firebase/storage",d_="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S6="storage";function vN(t=Hh(),e){t=He(t);const r=Di(t,S6).getImmediate({identifier:e}),i=V8("storage");return i&&kN(r,...i),r}function kN(t,e,n,r={}){gN(t,e,n,r)}function _N(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new yN(n,r,i,e,Po)}function EN(){Yn(new An(S6,_N,"PUBLIC").setMultipleInstances(!0)),ln(c_,d_,""),ln(c_,d_,"esm2017")}EN();const wN={apiKey:"AIzaSyD7J2eVv6O0M4l39GToo_kVOeQZH8nQW0w",authDomain:"hyacinthattendance.firebaseapp.com",projectId:"hyacinthattendance",storageBucket:"hyacinthattendance.appspot.com",messagingSenderId:"12316915447",appId:"1:12316915447:web:2f8a7daf07918a0c2f45f2",measurementId:"G-040M8BP5NJ"},gf=G8(wN),$n=Rx(gf),xe=h3(gf);vN(gf);console.log("Using production Firebase services");let xN=null;try{xN=zM(gf),console.log("Analytics initialized")}catch(t){console.error("Error initializing analytics:",t)}const dy=new _r;dy.setCustomParameters({prompt:"select_account"});dy.addScope("email");dy.addScope("profile");const C6=M.createContext(),L6=()=>M.useContext(C6),TN=({children:t})=>{const[e,n]=M.useState(null),[r,i]=M.useState(!0);M.useEffect(()=>{const s=dR($n,a=>{n(a),i(!1)});return()=>s()},[]);const o={currentUser:e,loading:r};return h.jsx(C6.Provider,{value:o,children:t})};var nn=function(){return nn=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},nn.apply(this,arguments)};function hh(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var Oe="-ms-",Dl="-moz-",Te="-webkit-",A6="comm",yf="rule",hy="decl",IN="@import",P6="@keyframes",SN="@layer",R6=Math.abs,fy=String.fromCharCode,v0=Object.assign;function CN(t,e){return ft(t,0)^45?(((e<<2^ft(t,0))<<2^ft(t,1))<<2^ft(t,2))<<2^ft(t,3):0}function b6(t){return t.trim()}function vr(t,e){return(t=e.exec(t))?t[0]:t}function ue(t,e,n){return t.replace(e,n)}function pd(t,e,n){return t.indexOf(e,n)}function ft(t,e){return t.charCodeAt(e)|0}function va(t,e,n){return t.slice(e,n)}function Jn(t){return t.length}function j6(t){return t.length}function _l(t,e){return e.push(t),t}function LN(t,e){return t.map(e).join("")}function h_(t,e){return t.filter(function(n){return!vr(n,e)})}var vf=1,ka=1,M6=0,Pn=0,tt=0,Na="";function kf(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:vf,column:ka,length:s,return:"",siblings:a}}function Gr(t,e){return v0(kf("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ws(t){for(;t.root;)t=Gr(t.root,{children:[t]});_l(t,t.siblings)}function AN(){return tt}function PN(){return tt=Pn>0?ft(Na,--Pn):0,ka--,tt===10&&(ka=1,vf--),tt}function Hn(){return tt=Pn<M6?ft(Na,Pn++):0,ka++,tt===10&&(ka=1,vf++),tt}function ho(){return ft(Na,Pn)}function md(){return Pn}function _f(t,e){return va(Na,t,e)}function k0(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function RN(t){return vf=ka=1,M6=Jn(Na=t),Pn=0,[]}function bN(t){return Na="",t}function bp(t){return b6(_f(Pn-1,_0(t===91?t+2:t===40?t+1:t)))}function jN(t){for(;(tt=ho())&&tt<33;)Hn();return k0(t)>2||k0(tt)>3?"":" "}function MN(t,e){for(;--e&&Hn()&&!(tt<48||tt>102||tt>57&&tt<65||tt>70&&tt<97););return _f(t,md()+(e<6&&ho()==32&&Hn()==32))}function _0(t){for(;Hn();)switch(tt){case t:return Pn;case 34:case 39:t!==34&&t!==39&&_0(tt);break;case 40:t===41&&_0(t);break;case 92:Hn();break}return Pn}function NN(t,e){for(;Hn()&&t+tt!==57;)if(t+tt===84&&ho()===47)break;return"/*"+_f(e,Pn-1)+"*"+fy(t===47?t:Hn())}function ON(t){for(;!k0(ho());)Hn();return _f(t,Pn)}function DN(t){return bN(gd("",null,null,null,[""],t=RN(t),0,[0],t))}function gd(t,e,n,r,i,o,s,a,l){for(var d=0,f=0,m=s,E=0,k=0,T=0,A=1,S=1,y=1,g=0,_="",x=i,R=o,N=r,w=_;S;)switch(T=g,g=Hn()){case 40:if(T!=108&&ft(w,m-1)==58){pd(w+=ue(bp(g),"&","&\f"),"&\f",R6(d?a[d-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:w+=bp(g);break;case 9:case 10:case 13:case 32:w+=jN(T);break;case 92:w+=MN(md()-1,7);continue;case 47:switch(ho()){case 42:case 47:_l(VN(NN(Hn(),md()),e,n,l),l);break;default:w+="/"}break;case 123*A:a[d++]=Jn(w)*y;case 125*A:case 59:case 0:switch(g){case 0:case 125:S=0;case 59+f:y==-1&&(w=ue(w,/\f/g,"")),k>0&&Jn(w)-m&&_l(k>32?p_(w+";",r,n,m-1,l):p_(ue(w," ","")+";",r,n,m-2,l),l);break;case 59:w+=";";default:if(_l(N=f_(w,e,n,d,f,i,a,_,x=[],R=[],m,o),o),g===123)if(f===0)gd(w,e,N,N,x,o,m,a,R);else switch(E===99&&ft(w,3)===110?100:E){case 100:case 108:case 109:case 115:gd(t,N,N,r&&_l(f_(t,N,N,0,0,i,a,_,i,x=[],m,R),R),i,R,m,a,r?x:R);break;default:gd(w,N,N,N,[""],R,0,a,R)}}d=f=k=0,A=y=1,_=w="",m=s;break;case 58:m=1+Jn(w),k=T;default:if(A<1){if(g==123)--A;else if(g==125&&A++==0&&PN()==125)continue}switch(w+=fy(g),g*A){case 38:y=f>0?1:(w+="\f",-1);break;case 44:a[d++]=(Jn(w)-1)*y,y=1;break;case 64:ho()===45&&(w+=bp(Hn())),E=ho(),f=m=Jn(_=w+=ON(md())),g++;break;case 45:T===45&&Jn(w)==2&&(A=0)}}return o}function f_(t,e,n,r,i,o,s,a,l,d,f,m){for(var E=i-1,k=i===0?o:[""],T=j6(k),A=0,S=0,y=0;A<r;++A)for(var g=0,_=va(t,E+1,E=R6(S=s[A])),x=t;g<T;++g)(x=b6(S>0?k[g]+" "+_:ue(_,/&\f/g,k[g])))&&(l[y++]=x);return kf(t,e,n,i===0?yf:a,l,d,f,m)}function VN(t,e,n,r){return kf(t,e,n,A6,fy(AN()),va(t,2,-2),0,r)}function p_(t,e,n,r,i){return kf(t,e,n,hy,va(t,0,r),va(t,r+1,-1),r,i)}function N6(t,e,n){switch(CN(t,e)){case 5103:return Te+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Te+t+t;case 4789:return Dl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Te+t+Dl+t+Oe+t+t;case 5936:switch(ft(t,e+11)){case 114:return Te+t+Oe+ue(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Te+t+Oe+ue(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Te+t+Oe+ue(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Te+t+Oe+t+t;case 6165:return Te+t+Oe+"flex-"+t+t;case 5187:return Te+t+ue(t,/(\w+).+(:[^]+)/,Te+"box-$1$2"+Oe+"flex-$1$2")+t;case 5443:return Te+t+Oe+"flex-item-"+ue(t,/flex-|-self/g,"")+(vr(t,/flex-|baseline/)?"":Oe+"grid-row-"+ue(t,/flex-|-self/g,""))+t;case 4675:return Te+t+Oe+"flex-line-pack"+ue(t,/align-content|flex-|-self/g,"")+t;case 5548:return Te+t+Oe+ue(t,"shrink","negative")+t;case 5292:return Te+t+Oe+ue(t,"basis","preferred-size")+t;case 6060:return Te+"box-"+ue(t,"-grow","")+Te+t+Oe+ue(t,"grow","positive")+t;case 4554:return Te+ue(t,/([^-])(transform)/g,"$1"+Te+"$2")+t;case 6187:return ue(ue(ue(t,/(zoom-|grab)/,Te+"$1"),/(image-set)/,Te+"$1"),t,"")+t;case 5495:case 3959:return ue(t,/(image-set\([^]*)/,Te+"$1$`$1");case 4968:return ue(ue(t,/(.+:)(flex-)?(.*)/,Te+"box-pack:$3"+Oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Te+t+t;case 4200:if(!vr(t,/flex-|baseline/))return Oe+"grid-column-align"+va(t,e)+t;break;case 2592:case 3360:return Oe+ue(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,vr(r.props,/grid-\w+-end/)})?~pd(t+(n=n[e].value),"span",0)?t:Oe+ue(t,"-start","")+t+Oe+"grid-row-span:"+(~pd(n,"span",0)?vr(n,/\d+/):+vr(n,/\d+/)-+vr(t,/\d+/))+";":Oe+ue(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return vr(r.props,/grid-\w+-start/)})?t:Oe+ue(ue(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ue(t,/(.+)-inline(.+)/,Te+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jn(t)-1-e>6)switch(ft(t,e+1)){case 109:if(ft(t,e+4)!==45)break;case 102:return ue(t,/(.+:)(.+)-([^]+)/,"$1"+Te+"$2-$3$1"+Dl+(ft(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~pd(t,"stretch",0)?N6(ue(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ue(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,d){return Oe+i+":"+o+d+(s?Oe+i+"-span:"+(a?l:+l-+o)+d:"")+t});case 4949:if(ft(t,e+6)===121)return ue(t,":",":"+Te)+t;break;case 6444:switch(ft(t,ft(t,14)===45?18:11)){case 120:return ue(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Te+(ft(t,14)===45?"inline-":"")+"box$3$1"+Te+"$2$3$1"+Oe+"$2box$3")+t;case 100:return ue(t,":",":"+Oe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ue(t,"scroll-","scroll-snap-")+t}return t}function fh(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function FN(t,e,n,r){switch(t.type){case SN:if(t.children.length)break;case IN:case hy:return t.return=t.return||t.value;case A6:return"";case P6:return t.return=t.value+"{"+fh(t.children,r)+"}";case yf:if(!Jn(t.value=t.props.join(",")))return""}return Jn(n=fh(t.children,r))?t.return=t.value+"{"+n+"}":""}function WN(t){var e=j6(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function UN(t){return function(e){e.root||(e=e.return)&&t(e)}}function $N(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case hy:t.return=N6(t.value,t.length,n);return;case P6:return fh([Gr(t,{value:ue(t.value,"@","@"+Te)})],r);case yf:if(t.length)return LN(n=t.props,function(i){switch(vr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ws(Gr(t,{props:[ue(i,/:(read-\w+)/,":"+Dl+"$1")]})),ws(Gr(t,{props:[i]})),v0(t,{props:h_(n,r)});break;case"::placeholder":ws(Gr(t,{props:[ue(i,/:(plac\w+)/,":"+Te+"input-$1")]})),ws(Gr(t,{props:[ue(i,/:(plac\w+)/,":"+Dl+"$1")]})),ws(Gr(t,{props:[ue(i,/:(plac\w+)/,Oe+"input-$1")]})),ws(Gr(t,{props:[i]})),v0(t,{props:h_(n,r)});break}return""})}}var zN={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dn={},_a=typeof process<"u"&&dn!==void 0&&(dn.REACT_APP_SC_ATTR||dn.SC_ATTR)||"data-styled",O6="active",D6="data-styled-version",Ef="6.1.17",py=`/*!sc*/
`,ph=typeof window<"u"&&"HTMLElement"in window,BN=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&dn!==void 0&&dn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&dn.REACT_APP_SC_DISABLE_SPEEDY!==""?dn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&dn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&dn!==void 0&&dn.SC_DISABLE_SPEEDY!==void 0&&dn.SC_DISABLE_SPEEDY!==""&&dn.SC_DISABLE_SPEEDY!=="false"&&dn.SC_DISABLE_SPEEDY),wf=Object.freeze([]),Ea=Object.freeze({});function HN(t,e,n){return n===void 0&&(n=Ea),t.theme!==n.theme&&t.theme||e||n.theme}var V6=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),qN=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,YN=/(^-|-$)/g;function m_(t){return t.replace(qN,"-").replace(YN,"")}var GN=/(a)(d)/gi,bc=52,g_=function(t){return String.fromCharCode(t+(t>25?39:97))};function E0(t){var e,n="";for(e=Math.abs(t);e>bc;e=e/bc|0)n=g_(e%bc)+n;return(g_(e%bc)+n).replace(GN,"$1-$2")}var jp,F6=5381,Hs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},W6=function(t){return Hs(F6,t)};function KN(t){return E0(W6(t)>>>0)}function QN(t){return t.displayName||t.name||"Component"}function Mp(t){return typeof t=="string"&&!0}var U6=typeof Symbol=="function"&&Symbol.for,$6=U6?Symbol.for("react.memo"):60115,ZN=U6?Symbol.for("react.forward_ref"):60112,XN={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},JN={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},z6={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},eO=((jp={})[ZN]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jp[$6]=z6,jp);function y_(t){return("type"in(e=t)&&e.type.$$typeof)===$6?z6:"$$typeof"in t?eO[t.$$typeof]:XN;var e}var tO=Object.defineProperty,nO=Object.getOwnPropertyNames,v_=Object.getOwnPropertySymbols,rO=Object.getOwnPropertyDescriptor,iO=Object.getPrototypeOf,k_=Object.prototype;function B6(t,e,n){if(typeof e!="string"){if(k_){var r=iO(e);r&&r!==k_&&B6(t,r,n)}var i=nO(e);v_&&(i=i.concat(v_(e)));for(var o=y_(t),s=y_(e),a=0;a<i.length;++a){var l=i[a];if(!(l in JN||n&&n[l]||s&&l in s||o&&l in o)){var d=rO(e,l);try{tO(t,l,d)}catch{}}}}return t}function wa(t){return typeof t=="function"}function my(t){return typeof t=="object"&&"styledComponentId"in t}function ao(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function __(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function vu(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function w0(t,e,n){if(n===void 0&&(n=!1),!n&&!vu(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=w0(t[r],e[r]);else if(vu(e))for(var r in e)t[r]=w0(t[r],e[r]);return t}function gy(t,e){Object.defineProperty(t,"toString",{value:e})}function Bu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var oO=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw Bu(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(py);return n},t}(),yd=new Map,mh=new Map,vd=1,jc=function(t){if(yd.has(t))return yd.get(t);for(;mh.has(vd);)vd++;var e=vd++;return yd.set(t,e),mh.set(e,t),e},sO=function(t,e){vd=e+1,yd.set(t,e),mh.set(e,t)},aO="style[".concat(_a,"][").concat(D6,'="').concat(Ef,'"]'),lO=new RegExp("^".concat(_a,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),uO=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},cO=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(py),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(lO);if(l){var d=0|parseInt(l[1],10),f=l[2];d!==0&&(sO(f,d),uO(t,f,l[3]),t.getTag().insertRules(d,i)),i.length=0}else i.push(a)}}},E_=function(t){for(var e=document.querySelectorAll(aO),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(_a)!==O6&&(cO(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function dO(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var H6=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(_a,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(_a,O6),r.setAttribute(D6,Ef);var s=dO();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},hO=function(){function t(e){this.element=H6(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Bu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),fO=function(){function t(e){this.element=H6(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),pO=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),w_=ph,mO={isServer:!ph,useCSSOMInjection:!BN},q6=function(){function t(e,n,r){e===void 0&&(e=Ea),n===void 0&&(n={});var i=this;this.options=nn(nn({},mO),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&ph&&w_&&(w_=!1,E_(this)),gy(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",d=function(m){var E=function(y){return mh.get(y)}(m);if(E===void 0)return"continue";var k=o.names.get(E),T=s.getGroup(m);if(k===void 0||!k.size||T.length===0)return"continue";var A="".concat(_a,".g").concat(m,'[id="').concat(E,'"]'),S="";k!==void 0&&k.forEach(function(y){y.length>0&&(S+="".concat(y,","))}),l+="".concat(T).concat(A,'{content:"').concat(S,'"}').concat(py)},f=0;f<a;f++)d(f);return l}(i)})}return t.registerId=function(e){return jc(e)},t.prototype.rehydrate=function(){!this.server&&ph&&E_(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(nn(nn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new pO(i):r?new hO(i):new fO(i)}(this.options),new oO(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(jc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(jc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(jc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),gO=/&/g,yO=/^\s*\/\/.*$/gm;function Y6(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Y6(n.children,e)),n})}function vO(t){var e,n,r,i=Ea,o=i.options,s=o===void 0?Ea:o,a=i.plugins,l=a===void 0?wf:a,d=function(E,k,T){return T.startsWith(n)&&T.endsWith(n)&&T.replaceAll(n,"").length>0?".".concat(e):E},f=l.slice();f.push(function(E){E.type===yf&&E.value.includes("&")&&(E.props[0]=E.props[0].replace(gO,n).replace(r,d))}),s.prefix&&f.push($N),f.push(FN);var m=function(E,k,T,A){k===void 0&&(k=""),T===void 0&&(T=""),A===void 0&&(A="&"),e=A,n=k,r=new RegExp("\\".concat(n,"\\b"),"g");var S=E.replace(yO,""),y=DN(T||k?"".concat(T," ").concat(k," { ").concat(S," }"):S);s.namespace&&(y=Y6(y,s.namespace));var g=[];return fh(y,WN(f.concat(UN(function(_){return g.push(_)})))),g};return m.hash=l.length?l.reduce(function(E,k){return k.name||Bu(15),Hs(E,k.name)},F6).toString():"",m}var kO=new q6,x0=vO(),G6=c.createContext({shouldForwardProp:void 0,styleSheet:kO,stylis:x0});G6.Consumer;c.createContext(void 0);function x_(){return M.useContext(G6)}var _O=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=x0);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,gy(this,function(){throw Bu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=x0),this.name+e.hash},t}(),EO=function(t){return t>="A"&&t<="Z"};function T_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;EO(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var K6=function(t){return t==null||t===!1||t===""},Q6=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!K6(o)&&(Array.isArray(o)&&o.isCss||wa(o)?r.push("".concat(T_(i),":"),o,";"):vu(o)?r.push.apply(r,hh(hh(["".concat(i," {")],Q6(o),!1),["}"],!1)):r.push("".concat(T_(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in zN||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function fo(t,e,n,r){if(K6(t))return[];if(my(t))return[".".concat(t.styledComponentId)];if(wa(t)){if(!wa(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return fo(i,e,n,r)}var o;return t instanceof _O?n?(t.inject(n,r),[t.getName(r)]):[t]:vu(t)?Q6(t):Array.isArray(t)?Array.prototype.concat.apply(wf,t.map(function(s){return fo(s,e,n,r)})):[t.toString()]}function wO(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(wa(n)&&!my(n))return!1}return!0}var xO=W6(Ef),TO=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&wO(e),this.componentId=n,this.baseHash=Hs(xO,n),this.baseStyle=r,q6.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ao(i,this.staticRulesId);else{var o=__(fo(this.rules,e,n,r)),s=E0(Hs(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=ao(i,s),this.staticRulesId=s}else{for(var l=Hs(this.baseHash,r.hash),d="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")d+=m;else if(m){var E=__(fo(m,e,n,r));l=Hs(l,E+f),d+=E}}if(d){var k=E0(l>>>0);n.hasNameForId(this.componentId,k)||n.insertRules(this.componentId,k,r(d,".".concat(k),void 0,this.componentId)),i=ao(i,k)}}return i},t}(),Z6=c.createContext(void 0);Z6.Consumer;var Np={};function IO(t,e,n){var r=my(t),i=t,o=!Mp(t),s=e.attrs,a=s===void 0?wf:s,l=e.componentId,d=l===void 0?function(x,R){var N=typeof x!="string"?"sc":m_(x);Np[N]=(Np[N]||0)+1;var w="".concat(N,"-").concat(KN(Ef+N+Np[N]));return R?"".concat(R,"-").concat(w):w}(e.displayName,e.parentComponentId):l,f=e.displayName,m=f===void 0?function(x){return Mp(x)?"styled.".concat(x):"Styled(".concat(QN(x),")")}(t):f,E=e.displayName&&e.componentId?"".concat(m_(e.displayName),"-").concat(e.componentId):e.componentId||d,k=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,T=e.shouldForwardProp;if(r&&i.shouldForwardProp){var A=i.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;T=function(x,R){return A(x,R)&&S(x,R)}}else T=A}var y=new TO(n,E,r?i.componentStyle:void 0);function g(x,R){return function(N,w,I){var P=N.attrs,b=N.componentStyle,j=N.defaultProps,O=N.foldedComponentIds,C=N.styledComponentId,K=N.target,ie=c.useContext(Z6),ee=x_(),z=N.shouldForwardProp||ee.shouldForwardProp,$=HN(w,ie,j)||Ea,G=function(Pe,Qe,We){for(var xt,Vt=nn(nn({},Qe),{className:void 0,theme:We}),Kt=0;Kt<Pe.length;Kt+=1){var Tt=wa(xt=Pe[Kt])?xt(Vt):xt;for(var It in Tt)Vt[It]=It==="className"?ao(Vt[It],Tt[It]):It==="style"?nn(nn({},Vt[It]),Tt[It]):Tt[It]}return Qe.className&&(Vt.className=ao(Vt.className,Qe.className)),Vt}(P,w,$),J=G.as||K,le={};for(var ne in G)G[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&G.theme===$||(ne==="forwardedAs"?le.as=G.forwardedAs:z&&!z(ne,J)||(le[ne]=G[ne]));var he=function(Pe,Qe){var We=x_(),xt=Pe.generateAndInjectStyles(Qe,We.styleSheet,We.stylis);return xt}(b,G),Fe=ao(O,C);return he&&(Fe+=" "+he),G.className&&(Fe+=" "+G.className),le[Mp(J)&&!V6.has(J)?"class":"className"]=Fe,I&&(le.ref=I),M.createElement(J,le)}(_,x,R)}g.displayName=m;var _=c.forwardRef(g);return _.attrs=k,_.componentStyle=y,_.displayName=m,_.shouldForwardProp=T,_.foldedComponentIds=r?ao(i.foldedComponentIds,i.styledComponentId):"",_.styledComponentId=E,_.target=r?i.target:t,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(R){for(var N=[],w=1;w<arguments.length;w++)N[w-1]=arguments[w];for(var I=0,P=N;I<P.length;I++)w0(R,P[I],!0);return R}({},i.defaultProps,x):x}}),gy(_,function(){return".".concat(_.styledComponentId)}),o&&B6(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function I_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var S_=function(t){return Object.assign(t,{isCss:!0})};function SO(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(wa(t)||vu(t))return S_(fo(I_(wf,hh([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?fo(r):S_(fo(I_(r,e)))}function T0(t,e,n){if(n===void 0&&(n=Ea),!e)throw Bu(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,SO.apply(void 0,hh([i],o,!1)))};return r.attrs=function(i){return T0(t,e,nn(nn({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return T0(t,e,nn(nn({},n),i))},r}var X6=function(t){return T0(IO,t)},V=X6;V6.forEach(function(t){V[t]=X6(t)});function J6(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=J6(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function li(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=J6(t))&&(r&&(r+=" "),r+=e);return r}const Vl=t=>typeof t=="number"&&!isNaN(t),So=t=>typeof t=="string",rn=t=>typeof t=="function",kd=t=>So(t)||rn(t)?t:null,Op=t=>M.isValidElement(t)||So(t)||rn(t)||Vl(t);function CO(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function xf(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=t;return function(s){let{children:a,position:l,preventExitTransition:d,done:f,nodeRef:m,isIn:E}=s;const k=r?`${e}--${l}`:e,T=r?`${n}--${l}`:n,A=M.useRef(0);return M.useLayoutEffect(()=>{const S=m.current,y=k.split(" "),g=_=>{_.target===m.current&&(S.dispatchEvent(new Event("d")),S.removeEventListener("animationend",g),S.removeEventListener("animationcancel",g),A.current===0&&_.type!=="animationcancel"&&S.classList.remove(...y))};S.classList.add(...y),S.addEventListener("animationend",g),S.addEventListener("animationcancel",g)},[]),M.useEffect(()=>{const S=m.current,y=()=>{S.removeEventListener("animationend",y),i?CO(S,f,o):f()};E||(d?y():(A.current=1,S.className+=` ${T}`,S.addEventListener("animationend",y)))},[E]),c.createElement(c.Fragment,null,a)}}function C_(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const _n={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},Mc=t=>{let{theme:e,type:n,...r}=t;return c.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Dp={info:function(t){return c.createElement(Mc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(Mc,{...t},c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(Mc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(Mc,{...t},c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function LO(t){const[,e]=M.useReducer(k=>k+1,0),[n,r]=M.useState([]),i=M.useRef(null),o=M.useRef(new Map).current,s=k=>n.indexOf(k)!==-1,a=M.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:k=>o.get(k)}).current;function l(k){let{containerId:T}=k;const{limit:A}=a.props;!A||T&&a.containerId!==T||(a.count-=a.queue.length,a.queue=[])}function d(k){r(T=>k==null?[]:T.filter(A=>A!==k))}function f(){const{toastContent:k,toastProps:T,staleId:A}=a.queue.shift();E(k,T,A)}function m(k,T){let{delay:A,staleId:S,...y}=T;if(!Op(k)||function(O){return!i.current||a.props.enableMultiContainer&&O.containerId!==a.props.containerId||o.has(O.toastId)&&O.updateId==null}(y))return;const{toastId:g,updateId:_,data:x}=y,{props:R}=a,N=()=>d(g),w=_==null;w&&a.count++;const I={...R,style:R.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(y).filter(O=>{let[C,K]=O;return K!=null})),toastId:g,updateId:_,data:x,closeToast:N,isIn:!1,className:kd(y.className||R.toastClassName),bodyClassName:kd(y.bodyClassName||R.bodyClassName),progressClassName:kd(y.progressClassName||R.progressClassName),autoClose:!y.isLoading&&(P=y.autoClose,b=R.autoClose,P===!1||Vl(P)&&P>0?P:b),deleteToast(){const O=C_(o.get(g),"removed");o.delete(g),_n.emit(4,O);const C=a.queue.length;if(a.count=g==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),C>0){const K=g==null?a.props.limit:1;if(C===1||K===1)a.displayedToast++,f();else{const ie=K>C?C:K;a.displayedToast=ie;for(let ee=0;ee<ie;ee++)f()}}else e()}};var P,b;I.iconOut=function(O){let{theme:C,type:K,isLoading:ie,icon:ee}=O,z=null;const $={theme:C,type:K};return ee===!1||(rn(ee)?z=ee($):M.isValidElement(ee)?z=M.cloneElement(ee,$):So(ee)||Vl(ee)?z=ee:ie?z=Dp.spinner():(G=>G in Dp)(K)&&(z=Dp[K]($))),z}(I),rn(y.onOpen)&&(I.onOpen=y.onOpen),rn(y.onClose)&&(I.onClose=y.onClose),I.closeButton=R.closeButton,y.closeButton===!1||Op(y.closeButton)?I.closeButton=y.closeButton:y.closeButton===!0&&(I.closeButton=!Op(R.closeButton)||R.closeButton);let j=k;M.isValidElement(k)&&!So(k.type)?j=M.cloneElement(k,{closeToast:N,toastProps:I,data:x}):rn(k)&&(j=k({closeToast:N,toastProps:I,data:x})),R.limit&&R.limit>0&&a.count>R.limit&&w?a.queue.push({toastContent:j,toastProps:I,staleId:S}):Vl(A)?setTimeout(()=>{E(j,I,S)},A):E(j,I,S)}function E(k,T,A){const{toastId:S}=T;A&&o.delete(A);const y={content:k,props:T};o.set(S,y),r(g=>[...g,S].filter(_=>_!==A)),_n.emit(4,C_(y,y.props.updateId==null?"added":"updated"))}return M.useEffect(()=>(a.containerId=t.containerId,_n.cancelEmit(3).on(0,m).on(1,k=>i.current&&d(k)).on(5,l).emit(2,a),()=>{o.clear(),_n.emit(3,a)}),[]),M.useEffect(()=>{a.props=t,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(k){const T=new Map,A=Array.from(o.values());return t.newestOnTop&&A.reverse(),A.forEach(S=>{const{position:y}=S.props;T.has(y)||T.set(y,[]),T.get(y).push(S)}),Array.from(T,S=>k(S[0],S[1]))},containerRef:i,isToastActive:s}}function L_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function A_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function AO(t){const[e,n]=M.useState(!1),[r,i]=M.useState(!1),o=M.useRef(null),s=M.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=M.useRef(t),{autoClose:l,pauseOnHover:d,closeToast:f,onClick:m,closeOnClick:E}=t;function k(x){if(t.draggable){x.nativeEvent.type==="touchstart"&&x.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",g),document.addEventListener("touchmove",y),document.addEventListener("touchend",g);const R=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=R.getBoundingClientRect(),R.style.transition="",s.x=L_(x.nativeEvent),s.y=A_(x.nativeEvent),t.draggableDirection==="x"?(s.start=s.x,s.removalDistance=R.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=R.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function T(x){if(s.boundingRect){const{top:R,bottom:N,left:w,right:I}=s.boundingRect;x.nativeEvent.type!=="touchend"&&t.pauseOnHover&&s.x>=w&&s.x<=I&&s.y>=R&&s.y<=N?S():A()}}function A(){n(!0)}function S(){n(!1)}function y(x){const R=o.current;s.canDrag&&R&&(s.didMove=!0,e&&S(),s.x=L_(x),s.y=A_(x),s.delta=t.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),R.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,R.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",g);const x=o.current;if(s.canDrag&&s.didMove&&x){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void t.closeToast();x.style.transition="transform 0.2s, opacity 0.2s",x.style.transform=`translate${t.draggableDirection}(0)`,x.style.opacity="1"}}M.useEffect(()=>{a.current=t}),M.useEffect(()=>(o.current&&o.current.addEventListener("d",A,{once:!0}),rn(t.onOpen)&&t.onOpen(M.isValidElement(t.children)&&t.children.props),()=>{const x=a.current;rn(x.onClose)&&x.onClose(M.isValidElement(x.children)&&x.children.props)}),[]),M.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||S(),window.addEventListener("focus",A),window.addEventListener("blur",S)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",A),window.removeEventListener("blur",S))}),[t.pauseOnFocusLoss]);const _={onMouseDown:k,onTouchStart:k,onMouseUp:T,onTouchEnd:T};return l&&d&&(_.onMouseEnter=S,_.onMouseLeave=A),E&&(_.onClick=x=>{m&&m(x),s.canCloseOnClick&&f()}),{playToast:A,pauseToast:S,isRunning:e,preventExitTransition:r,toastRef:o,eventHandlers:_}}function eI(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return c.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function PO(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:l,progress:d,rtl:f,isIn:m,theme:E}=t;const k=o||l&&d===0,T={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:k?0:1};l&&(T.transform=`scaleX(${d})`);const A=li("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${E}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),S=rn(s)?s({rtl:f,type:i,defaultClassName:A}):li(A,s);return c.createElement("div",{role:"progressbar","aria-hidden":k?"true":"false","aria-label":"notification timer",className:S,style:T,[l&&d>=1?"onTransitionEnd":"onAnimationEnd"]:l&&d<1?null:()=>{m&&r()}})}const RO=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=AO(t),{closeButton:o,children:s,autoClose:a,onClick:l,type:d,hideProgressBar:f,closeToast:m,transition:E,position:k,className:T,style:A,bodyClassName:S,bodyStyle:y,progressClassName:g,progressStyle:_,updateId:x,role:R,progress:N,rtl:w,toastId:I,deleteToast:P,isIn:b,isLoading:j,iconOut:O,closeOnClick:C,theme:K}=t,ie=li("Toastify__toast",`Toastify__toast-theme--${K}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":w},{"Toastify__toast--close-on-click":C}),ee=rn(T)?T({rtl:w,position:k,type:d,defaultClassName:ie}):li(ie,T),z=!!N||!a,$={closeToast:m,type:d,theme:K};let G=null;return o===!1||(G=rn(o)?o($):M.isValidElement(o)?M.cloneElement(o,$):eI($)),c.createElement(E,{isIn:b,done:P,position:k,preventExitTransition:n,nodeRef:r},c.createElement("div",{id:I,onClick:l,className:ee,...i,style:A,ref:r},c.createElement("div",{...b&&{role:R},className:rn(S)?S({type:d}):li("Toastify__toast-body",S),style:y},O!=null&&c.createElement("div",{className:li("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!j})},O),c.createElement("div",null,s)),G,c.createElement(PO,{...x&&!z?{key:`pb-${x}`}:{},rtl:w,theme:K,delay:a,isRunning:e,isIn:b,closeToast:m,hide:f,type:d,style:_,className:g,controlledProgress:z,progress:N||0})))},Tf=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},bO=xf(Tf("bounce",!0));xf(Tf("slide",!0));xf(Tf("zoom"));xf(Tf("flip"));const I0=M.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=LO(t),{className:o,style:s,rtl:a,containerId:l}=t;function d(f){const m=li("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":a});return rn(o)?o({position:f,rtl:a,defaultClassName:m}):li(m,kd(o))}return M.useEffect(()=>{e&&(e.current=r.current)},[]),c.createElement("div",{ref:r,className:"Toastify",id:l},n((f,m)=>{const E=m.length?{...s}:{...s,pointerEvents:"none"};return c.createElement("div",{className:d(f),style:E,key:`container-${f}`},m.map((k,T)=>{let{content:A,props:S}=k;return c.createElement(RO,{...S,isIn:i(S.toastId),style:{...S.style,"--nth":T+1,"--len":m.length},key:`toast-${S.key}`},A)}))}))});I0.displayName="ToastContainer",I0.defaultProps={position:"top-right",transition:bO,autoClose:5e3,closeButton:eI,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Vp,eo=new Map,El=[],jO=1;function tI(){return""+jO++}function MO(t){return t&&(So(t.toastId)||Vl(t.toastId))?t.toastId:tI()}function Fl(t,e){return eo.size>0?_n.emit(0,t,e):El.push({content:t,options:e}),e.toastId}function gh(t,e){return{...e,type:e&&e.type||t,toastId:MO(e)}}function Nc(t){return(e,n)=>Fl(e,gh(t,n))}function Y(t,e){return Fl(t,gh("default",e))}Y.loading=(t,e)=>Fl(t,gh("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),Y.promise=function(t,e,n){let r,{pending:i,error:o,success:s}=e;i&&(r=So(i)?Y.loading(i,n):Y.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(f,m,E)=>{if(m==null)return void Y.dismiss(r);const k={type:f,...a,...n,data:E},T=So(m)?{render:m}:m;return r?Y.update(r,{...k,...T}):Y(T.render,{...k,...T}),E},d=rn(t)?t():t;return d.then(f=>l("success",s,f)).catch(f=>l("error",o,f)),d},Y.success=Nc("success"),Y.info=Nc("info"),Y.error=Nc("error"),Y.warning=Nc("warning"),Y.warn=Y.warning,Y.dark=(t,e)=>Fl(t,gh("default",{theme:"dark",...e})),Y.dismiss=t=>{eo.size>0?_n.emit(1,t):El=El.filter(e=>t!=null&&e.options.toastId!==t)},Y.clearWaitingQueue=function(t){return t===void 0&&(t={}),_n.emit(5,t)},Y.isActive=t=>{let e=!1;return eo.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},Y.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=eo.get(o||Vp);return s&&s.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,o={delay:100,...r,...e,toastId:e.toastId||t,updateId:tI()};o.toastId!==t&&(o.staleId=t);const s=o.render||i;delete o.render,Fl(s,o)}},0)},Y.done=t=>{Y.update(t,{progress:1})},Y.onChange=t=>(_n.on(4,t),()=>{_n.off(4,t)}),Y.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Y.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},_n.on(2,t=>{Vp=t.containerId||t,eo.set(Vp,t),El.forEach(e=>{_n.emit(0,e.content,e.options)}),El=[]}).on(3,t=>{eo.delete(t.containerId||t),eo.size===0&&_n.off(0).off(1).off(5)});var NO=M.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),ve=function(e,n,r){var i=r.get(e);return i?i(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function P_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var me=M.forwardRef(function(t,e){var n=t.alt,r=t.color,i=t.size,o=t.weight,s=t.mirrored,a=t.children,l=t.renderPath,d=P_(t,["alt","color","size","weight","mirrored","children","renderPath"]),f=M.useContext(NO),m=f.color,E=m===void 0?"currentColor":m,k=f.size,T=f.weight,A=T===void 0?"regular":T,S=f.mirrored,y=S===void 0?!1:S,g=P_(f,["color","size","weight","mirrored"]);return c.createElement("svg",Object.assign({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i??k,height:i??k,fill:r??E,viewBox:"0 0 256 256",transform:s||y?"scale(-1, 1)":void 0},g,d),!!n&&c.createElement("title",null,n),a,c.createElement("rect",{width:"256",height:"256",fill:"none"}),l(o??A,r??E))});me.displayName="IconBase";var Mo=new Map;Mo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Mo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Mo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))});Mo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Mo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Mo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var OO=function(e,n){return ve(e,n,Mo)},yh=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:OO}))});yh.displayName="ArrowLeft";var No=new Map;No.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});No.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});No.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"}))});No.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});No.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});No.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var DO=function(e,n){return ve(e,n,No)},ku=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:DO}))});ku.displayName="ArrowRight";var Oo=new Map;Oo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"136",x2:"108",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"176",x2:"188",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"136",x2:"188",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Oo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",opacity:"0.2"}),c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Oo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M240,208h-8V104a16,16,0,0,0-16-16H152V40a16,16,0,0,0-16-16H40A16,16,0,0,0,24,40V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM120,136a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h32A8,8,0,0,1,120,136ZM64,64H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm0,104H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm88-64h64V208H152Z"}),c.createElement("path",{d:"M192,168H176a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z"}),c.createElement("path",{d:"M176,144h16a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Z"}))});Oo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Oo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Oo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var VO=function(e,n){return ve(e,n,Oo)},yy=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:VO}))});yy.displayName="Buildings";var Do=new Map;Do.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"176",y1:"20",x2:"176",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"20",x2:"80",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M88,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"148 140 164 128 164 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Do.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Do.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,188a24.2,24.2,0,0,1-17-7,8,8,0,0,1,0-11.3,7.9,7.9,0,0,1,11.3,0A8.3,8.3,0,0,0,104,172a8,8,0,0,0,0-16h-2.5l-.4-.2h-.3l-.5-.2h-.1l-.6-.4h-.2l-.4-.3h0l-.4-.3-.2-.2-.3-.3a8.6,8.6,0,0,1-1.3-2,5.8,5.8,0,0,1-.6-1.7h0c-.1-.1-.1-.2-.1-.4a.4.4,0,0,0-.1-.3V148h0v-.7c0-.2.1-.3.1-.4v-.4a.6.6,0,0,0,.1-.4c.1-.1.1-.2.1-.4l.2-.3c0-.2,0-.3.1-.4l.2-.4v-.3l.2-.4.2-.3.3-.4.2-.2,5.6-7H92a8,8,0,0,1,0-16h28a8,8,0,0,1,6.2,13l-8.8,11.1A24,24,0,0,1,104,188Zm64-8a8,8,0,0,1-16,0V144l-3.2,2.4a8.1,8.1,0,0,1-11.2-1.6,8,8,0,0,1,1.6-11.2l16-12A8,8,0,0,1,168,128ZM208,80H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))});Do.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Do.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Do.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var FO=function(e,n){return ve(e,n,Do)},Fn=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:FO}))});Fn.displayName="Calendar";var Vo=new Map;Vo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Vo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Vo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});Vo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Vo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Vo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var WO=function(e,n){return ve(e,n,Vo)},_u=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:WO}))});_u.displayName="Check";var Fo=new Map;Fo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Fo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Fo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"}))});Fo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Fo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Fo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var UO=function(e,n){return ve(e,n,Fo)},ni=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:UO}))});ni.displayName="CheckCircle";var Wo=new Map;Wo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Wo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Wo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))});Wo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Wo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Wo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var $O=function(e,n){return ve(e,n,Wo)},ui=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:$O}))});ui.displayName="Clock";var Uo=new Map;Uo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Uo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Uo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm91.2-27.7a8,8,0,0,0-8.7,1.8L204.2,68.4l-8.3-8.3a96,96,0,1,0,0,135.8,8,8,0,0,0,0-11.3,7.9,7.9,0,0,0-11.3,0,80,80,0,1,1,0-113.2l8.3,8.3L178.5,94.1a8,8,0,0,0,5.7,13.6h40a8,8,0,0,0,8-8v-40A8.2,8.2,0,0,0,227.2,52.3Z"}))});Uo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Uo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Uo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var zO=function(e,n){return ve(e,n,Uo)},nI=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:zO}))});nI.displayName="ClockClockwise";var $o=new Map;$o.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});$o.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});$o.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm59.9-19.9a96.2,96.2,0,0,0-135.8,0l-8.3,8.3L37.5,54.1a8,8,0,0,0-8.7-1.8,8.2,8.2,0,0,0-5,7.4v40a8,8,0,0,0,8,8h40a8,8,0,0,0,5.7-13.6L63.1,79.7l8.3-8.3a80,80,0,1,1,0,113.2,7.9,7.9,0,0,0-11.3,0,8,8,0,0,0,0,11.3A96,96,0,0,0,195.9,60.1Z"}))});$o.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});$o.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});$o.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var BO=function(e,n){return ve(e,n,$o)},rI=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:BO}))});rI.displayName="ClockCounterClockwise";var zo=new Map;zo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});zo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});zo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"}))});zo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});zo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});zo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var HO=function(e,n){return ve(e,n,zo)},If=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:HO}))});If.displayName="Envelope";var Bo=new Map;Bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,92a36,36,0,1,1-36,36A36,36,0,0,1,128,92Z"}))});Bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var qO=function(e,n){return ve(e,n,Bo)},vh=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:qO}))});vh.displayName="Eye";var Ho=new Map;Ho.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.4,163.6C232.1,145.7,240,128,240,128S208,56,128,56c-3.8,0-7.4.2-11,.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ho.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ho.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48a132.4,132.4,0,0,0-22,1.8,8.1,8.1,0,0,0-4.6,13.3L202.7,174.5a8,8,0,0,0,5.9,2.6,8.6,8.6,0,0,0,5.4-2c22.8-20.5,32.9-42.9,33.3-43.8A8.2,8.2,0,0,0,247.3,124.8Z"}),c.createElement("path",{d:"M53.9,34.6A8,8,0,0,0,42.1,45.4L61.3,66.5C25,88.8,9.4,123.2,8.7,124.8a8.2,8.2,0,0,0,0,6.5c.3.7,8.8,19.5,27.6,38.4C61.4,194.7,93.1,208,128,208a126.9,126.9,0,0,0,52.1-10.8l22,24.2A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3ZM128,164a36,36,0,0,1-29.5-56.6l47.2,51.9A35.4,35.4,0,0,1,128,164Z"}))});Ho.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ho.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ho.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var YO=function(e,n){return ve(e,n,Ho)},kh=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:YO}))});kh.displayName="EyeSlash";var qo=new Map;qo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"80",x2:"96",y2:"80",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});qo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64h32a8,8,0,0,0,8-8V91.3a7.9,7.9,0,0,0-2.3-5.6L170.3,42.3a7.9,7.9,0,0,0-5.6-2.3H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8Z",opacity:"0.2"}),c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});qo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M219.3,80,176,36.7A15.9,15.9,0,0,0,164.7,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V91.3A15.9,15.9,0,0,0,219.3,80ZM208,91.3V208H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H164.7L208,91.3ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z"}))});qo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});qo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});qo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var GO=function(e,n){return ve(e,n,qo)},S0=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:GO}))});S0.displayName="FloppyDisk";var Yo=new Map;Yo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Yo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M130.2,224a96.3,96.3,0,0,0,84-53.6h0L159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224Z",opacity:"0.2"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1l5.4,1.1,8.3-19.7a8.1,8.1,0,0,1,7.4-4.9h21.4a8.6,8.6,0,0,0,3.8-1l12.3-6.8a7.2,7.2,0,0,0,1.5-1.1l26.9-24.3a8.1,8.1,0,0,0,1.6-9.8l-9.3-16.8h0A98.5,98.5,0,0,0,128,32,95.4,95.4,0,0,0,65,55.6Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Yo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.6,173.3A102.9,102.9,0,0,0,232,128,104.2,104.2,0,0,0,154.8,27.5h-.5A103.8,103.8,0,0,0,60.4,49l-1.3,1.2A103.9,103.9,0,0,0,128,232h2.4A104.3,104.3,0,0,0,221,174.6h0ZM216,128a89.3,89.3,0,0,1-5.5,30.7l-46.4-28.5a16,16,0,0,0-6.3-2.3l-22.8-3a16.1,16.1,0,0,0-15.3,6.8h-8.6l-3.8-7.9a16.2,16.2,0,0,0-11-8.7l-6.6-1.4,2.5-5.9a8.1,8.1,0,0,1,7.4-4.9h16.1a16.1,16.1,0,0,0,7.7-2l12.2-6.8a16.1,16.1,0,0,0,3-2.1l26.9-24.4A15.7,15.7,0,0,0,170,50.7,88,88,0,0,1,216,128ZM40,128a87.1,87.1,0,0,1,9.5-39.7l10.4,27.9a16.1,16.1,0,0,0,11.6,10l5.5,1.2h.1l12,2.6a7.8,7.8,0,0,1,5.5,4.3l2.1,4.4a16.1,16.1,0,0,0,14.4,9h1.2l-7.7,17.2a15.9,15.9,0,0,0,2.8,17.4l16.1,17.4a8.3,8.3,0,0,1,2,6.9l-1.8,9.3A88.1,88.1,0,0,1,40,128Z"}))});Yo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Yo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Yo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var KO=function(e,n){return ve(e,n,Yo)},iI=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:KO}))});iI.displayName="GlobeHemisphereWest";var Go=new Map;Go.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Go.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z",opacity:"0.2"}),c.createElement("path",{d:"M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Go.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M176,32a60,60,0,0,0-48,24A60,60,0,0,0,20,92c0,71.9,99.9,128.6,104.1,131a7.8,7.8,0,0,0,3.9,1,7.6,7.6,0,0,0,3.9-1,314.3,314.3,0,0,0,51.5-37.6C218.3,154,236,122.6,236,92A60,60,0,0,0,176,32Z"}))});Go.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Go.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Go.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var QO=function(e,n){return ve(e,n,Go)},C0=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:QO}))});C0.displayName="Heart";var Ko=new Map;Ko.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ko.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",opacity:"0.2"}),c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ko.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M218.8,103.7,138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5v92.1a16.4,16.4,0,0,0,4,11A15.9,15.9,0,0,0,48,224H96a8,8,0,0,0,8-8V168a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v48a8,8,0,0,0,8,8h48a15.6,15.6,0,0,0,7.6-1.9A16.1,16.1,0,0,0,224,208V115.5A16,16,0,0,0,218.8,103.7Z"}))});Ko.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ko.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ko.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var ZO=function(e,n){return ve(e,n,Ko)},oI=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:ZO}))});oI.displayName="House";var Qo=new Map;Qo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",transform:"translate(256) rotate(90)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"96",y1:"68",x2:"160",y2:"68",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"136",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M84,187.2a60,60,0,0,1,88,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Qo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,32H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V40A8,8,0,0,0,200,32ZM128,168a32,32,0,1,1,32-32A32,32,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"136",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M80,192a60,60,0,0,1,96,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",transform:"translate(256) rotate(90)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"96",y1:"64",x2:"160",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Qo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM96,48h64a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16Zm84.8,150.4a8.1,8.1,0,0,1-11.2-1.6,52,52,0,0,0-83.2,0A8,8,0,0,1,80,200a7.7,7.7,0,0,1-4.8-1.6,8,8,0,0,1-1.6-11.2A67.8,67.8,0,0,1,101,165.5a40,40,0,1,1,54,0,67.8,67.8,0,0,1,27.4,21.7A8,8,0,0,1,180.8,198.4ZM152,136a24,24,0,1,1-24-24A24.1,24.1,0,0,1,152,136Z"}))});Qo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"136",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M80,192a60,60,0,0,1,96,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",transform:"translate(256) rotate(90)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"96",y1:"64",x2:"160",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Qo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"136",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M80,192a60,60,0,0,1,96,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",transform:"translate(256) rotate(90)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"96",y1:"64",x2:"160",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Qo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"136",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M80,192a60,60,0,0,1,96,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",transform:"translate(256) rotate(90)",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"96",y1:"64",x2:"160",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var XO=function(e,n){return ve(e,n,Qo)},sI=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:XO}))});sI.displayName="IdentificationBadge";var Zo=new Map;Zo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"108",x2:"184",y2:"108",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"148",x2:"184",y2:"148",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"94.1",cy:"116",r:"22",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M72.1,164a22,22,0,0,1,44,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Zo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM92.1,144a24,24,0,1,1,24-24A23.9,23.9,0,0,1,92.1,144Z",opacity:"0.2"}),c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Zo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM125.1,175.7a8,8,0,0,1-9.8-5.7,24,24,0,0,0-46.4,0,8.1,8.1,0,0,1-7.8,6l-2-.3a7.9,7.9,0,0,1-5.7-9.7,40.2,40.2,0,0,1,16.3-23.2,32,32,0,1,1,44.8,0A40.2,40.2,0,0,1,130.8,166,7.9,7.9,0,0,1,125.1,175.7ZM192,152H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"16"}))});Zo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Zo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Zo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var JO=function(e,n){return ve(e,n,Zo)},aI=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:JO}))});aI.displayName="IdentificationCard";var Xo=new Map;Xo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"152",r:"16"}))});Xo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});Xo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"}))});Xo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"152",r:"10"}))});Xo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"152",r:"8"}))});Xo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});var e9=function(e,n){return ve(e,n,Xo)},_h=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:e9}))});_h.displayName="Lock";var Jo=new Map;Jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"104",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"104",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.2,83.4,134.6a8.3,8.3,0,0,0,9.2,0C136,236.2,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"}))});Jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"104",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"104",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"104",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var t9=function(e,n){return ve(e,n,Jo)},L0=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:t9}))});L0.displayName="MapPin";var es=new Map;es.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"44",y1:"156",x2:"100",y2:"212",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"164",y1:"92",x2:"72",y2:"184",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});es.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M192,120,136,64l26.3-26.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z",opacity:"0.2"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});es.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.3,32a15.9,15.9,0,0,0-22.6,0L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a15.9,15.9,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7ZM51.3,160,144,67.3,160.7,84,68,176.7ZM48,179.3,76.7,208H48Zm48,25.4L79.3,188,172,95.3,188.7,112Z"}))});es.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});es.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});es.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var n9=function(e,n){return ve(e,n,es)},lI=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:n9}))});lI.displayName="Pencil";var ts=new Map;ts.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ts.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,64l56,56,26.3-26.3a8,8,0,0,0,0-11.4L173.7,37.7a8,8,0,0,0-11.4,0Z",opacity:"0.2"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ts.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"}))});ts.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ts.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ts.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var r9=function(e,n){return ve(e,n,ts)},A0=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:r9}))});A0.displayName="PencilSimple";var ns=new Map;ns.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ns.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",opacity:"0.2"}),c.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ns.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M222,158.4l-46.9-20a15.6,15.6,0,0,0-15.1,1.3l-25.1,16.7a76.5,76.5,0,0,1-35.2-35h0L116.3,96a15.9,15.9,0,0,0,1.4-15.1L97.6,34a16.3,16.3,0,0,0-16.7-9.6A56.2,56.2,0,0,0,32,80c0,79.4,64.6,144,144,144a56.2,56.2,0,0,0,55.6-48.9A16.3,16.3,0,0,0,222,158.4Z"}))});ns.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ns.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ns.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var i9=function(e,n){return ve(e,n,ns)},P0=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:i9}))});P0.displayName="Phone";var rs=new Map;rs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});rs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z",opacity:"0.2"}),c.createElement("path",{d:"M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});rs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,40H48A16,16,0,0,0,32,56v58.7c0,89.4,75.8,119.1,91,124.1a16,16,0,0,0,10,0c15.2-5,91-34.7,91-124.1V56A16,16,0,0,0,208,40Z"}))});rs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});rs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});rs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var o9=function(e,n){return ve(e,n,rs)},vy=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:o9}))});vy.displayName="Shield";var is=new Map;is.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});is.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});is.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M141.7,133.7l-42,42A8.3,8.3,0,0,1,94,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H24a8,8,0,0,1,0-16H86V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,141.7,133.7ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"}))});is.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});is.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});is.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var s9=function(e,n){return ve(e,n,is)},ky=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:s9}))});ky.displayName="SignIn";var os=new Map;os.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});os.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});os.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-42,42A8.3,8.3,0,0,1,174,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H104a8,8,0,0,1,0-16h62V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,221.7,133.7ZM104,208H48V48h56a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16h56a8,8,0,0,0,0-16Z"}))});os.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});os.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});os.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var a9=function(e,n){return ve(e,n,os)},_d=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:a9}))});_d.displayName="SignOut";var ss=new Map;ss.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ss.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ss.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"}))});ss.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ss.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ss.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var l9=function(e,n){return ve(e,n,ss)},uI=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:l9}))});uI.displayName="SpinnerGap";var as=new Map;as.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"60",x2:"40",y2:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});as.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});as.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))});as.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});as.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});as.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var u9=function(e,n){return ve(e,n,as)},R0=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:u9}))});R0.displayName="Trash";var ls=new Map;ls.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ls.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ls.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});ls.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ls.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ls.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var c9=function(e,n){return ve(e,n,ls)},wi=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:c9}))});wi.displayName="User";var us=new Map;us.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});us.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,32A96,96,0,0,0,63.8,199.4h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.4A96,96,0,0,0,128,32Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});us.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"120",r:"44"}),c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm65.8,162.4a81.3,81.3,0,0,0-24.5-23,59.7,59.7,0,0,1-82.6,0,81.3,81.3,0,0,0-24.5,23,88,88,0,1,1,131.6,0Z"}))});us.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});us.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});us.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var d9=function(e,n){return ve(e,n,us)},Eu=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:d9}))});Eu.displayName="UserCircle";var cs=new Map;cs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"204",y1:"136",x2:"244",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"116",x2:"224",y2:"156",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});cs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"108",cy:"100",r:"60",opacity:"0.2"}),c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});cs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144.1,157.6a68,68,0,1,0-72.2,0,118.4,118.4,0,0,0-55.8,37.3,7.8,7.8,0,0,0-1.1,8.5,7.9,7.9,0,0,0,7.2,4.6H193.8a7.9,7.9,0,0,0,7.2-4.6,7.8,7.8,0,0,0-1.1-8.5A118.4,118.4,0,0,0,144.1,157.6Z"}))});cs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});cs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});cs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var h9=function(e,n){return ve(e,n,cs)},wu=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:h9}))});wu.displayName="UserPlus";var ds=new Map;ds.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ds.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",opacity:"0.2"}),c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ds.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M121.2,157.9a60,60,0,1,0-66.4,0A95.5,95.5,0,0,0,9.5,192.8a7.8,7.8,0,0,0-.6,8.3,8.1,8.1,0,0,0,7.1,4.3H160a8.1,8.1,0,0,0,7.1-4.3,7.8,7.8,0,0,0-.6-8.3A95.5,95.5,0,0,0,121.2,157.9Z"}),c.createElement("path",{d:"M248.1,192.8a96.3,96.3,0,0,0-45.4-34.9A59.9,59.9,0,0,0,169.5,48a64,64,0,0,0-16.3,2.2,8.2,8.2,0,0,0-5.4,5.2,8,8,0,0,0,1.2,7.3,75.8,75.8,0,0,1,3.8,84.9,8.1,8.1,0,0,0,2.1,10.6q4.5,3.5,8.7,7.2l.5.5a112.6,112.6,0,0,1,25.5,34.9,7.9,7.9,0,0,0,7.2,4.6h44.7a8.1,8.1,0,0,0,7.1-4.3A8,8,0,0,0,248.1,192.8Z"}))});ds.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ds.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ds.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var f9=function(e,n){return ve(e,n,ds)},xu=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:f9}))});xu.displayName="Users";var hs=new Map;hs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});hs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});hs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"}))});hs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});hs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});hs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var p9=function(e,n){return ve(e,n,hs)},Tu=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:p9}))});Tu.displayName="X";var fs=new Map;fs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});fs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});fs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm37.7,130.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3l-26.3,26.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,90.3,101.7a8.1,8.1,0,0,1,11.4-11.4L128,116.7l26.3-26.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"}))});fs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});fs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});fs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var m9=function(e,n){return ve(e,n,fs)},cI=M.forwardRef(function(t,e){return c.createElement(me,Object.assign({ref:e},t,{renderPath:m9}))});cI.displayName="XCircle";const g9=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #000000 0%, #801100 100%);
`,y9=V.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`,v9=V.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,k9=V.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,R_=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,b_=V.label`
  font-size: 0.9rem;
  color: #555;
`,j_=V.div`
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
`,Oc=V.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #800000;
  margin-right: 0.5rem;
`,M_=V.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #e74c3c;
  
  &:focus {
    outline: none;
  }
`,_9=V.button`
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
`,E9=V.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,w9=V(j8)`
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
`,x9=V.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,T9=V.button`
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
`,I9=V.button`
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
`,S9=V.div`
  font-size: 2rem;
  font-weight: bold;
  color: #800000;
  text-align: center;
  margin-bottom: 0.5rem;
`;function C9(){const[t,e]=M.useState(""),[n,r]=M.useState(""),[i,o]=M.useState(""),[s,a]=M.useState(!1),[l,d]=M.useState(!1),[f,m]=M.useState(!1),[E,k]=M.useState(!1),T=Aa(),A=La();M.useEffect(()=>{var g;(g=A.state)!=null&&g.message&&(Y.info(A.state.message),T(A.pathname,{replace:!0,state:{}}))},[A,T]),M.useEffect(()=>{i&&o("")},[t,n]);const S=async()=>{var _,x;if(!t){o("Please enter your email address to reset your password"),(_=document.getElementById("email"))==null||_.focus();return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(x=document.getElementById("email"))==null||x.focus();return}try{k(!0),await iR($n,t),m(!0),Y.success("Password reset email sent! Check your inbox.")}catch(R){console.error("Password reset error:",R),R.code==="auth/user-not-found"?o("No account found with this email address"):o("Failed to send password reset email. Please try again.")}finally{k(!1)}},y=async g=>{var x,R,N;if(g.preventDefault(),!t||!n){o("Please enter both email and password");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(x=document.getElementById("email"))==null||x.focus();return}try{o(""),a(!0);try{const I=(await sR($n,t,n)).user,P=Sr(Tn(xe,"declined_registrations"),ai("userId","==",I.uid));if(!(await Wn(P)).empty){await $n.signOut(),o("Your registration request has been declined. Please contact an administrator."),Y.error("Access denied: Registration declined");return}const j=Sr(Tn(xe,"registration_requests"),ai("userId","==",I.uid));if(!(await Wn(j)).empty){await $n.signOut(),o("Your registration request is pending approval. You will be notified when approved."),Y.info("Registration pending approval");return}const C=!1;Y.success("Login successful!"),T("/dashboard")}catch(w){if(console.error("Firebase auth error:",w),!(!1&&(w.code==="auth/network-request-failed"||(R=w.message)!=null&&R.includes("network")))){if(w.code==="auth/invalid-credential"||w.code==="auth/invalid-email"||w.code==="auth/user-not-found"||w.code==="auth/wrong-password"){console.log("Authentication failed:",w.code,w.message);const P=w.code==="auth/user-not-found"||w.code==="auth/invalid-credential"&&t.includes("@");o(P?h.jsxs("span",{children:["Account not found. Please check your email or",h.jsx("a",{href:"/register",style:{color:"#800000",marginLeft:"4px",textDecoration:"underline"},children:"register here"})]}):"Invalid email or password. Please check your credentials and try again."),(N=document.getElementById("email"))==null||N.focus()}else w.code==="auth/network-request-failed"?o("Network error. Please check your connection and try again."):w.code==="auth/too-many-requests"?o("Too many failed login attempts. Please try again later or reset your password."):w.code==="auth/operation-not-allowed"?(o("Email/password sign-in is not enabled. Please contact the administrator."),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(console.error("Login error details:",w),o("Failed to log in. Please try again."));Y.error("Login failed")}}}catch(w){console.error("Unexpected login error:",w),o("An unexpected error occurred. Please try again."),Y.error("Login failed")}finally{a(!1)}};return h.jsx(g9,{children:h.jsxs(y9,{children:[h.jsx(S9,{children:"Hyacinth"}),h.jsx(v9,{children:"Attendance System"}),h.jsxs(k9,{onSubmit:y,children:[h.jsxs(R_,{children:[h.jsx(b_,{htmlFor:"email",children:"Email"}),h.jsxs(j_,{children:[h.jsx(Oc,{children:h.jsx(If,{size:18})}),h.jsx(M_,{id:"email",type:"email",value:t,onChange:g=>e(g.target.value),placeholder:"Enter your email",required:!0})]})]}),h.jsxs(R_,{children:[h.jsx(b_,{htmlFor:"password",children:"Password"}),h.jsxs(j_,{children:[h.jsx(Oc,{children:h.jsx(_h,{size:18})}),h.jsx(M_,{id:"password",type:l?"text":"password",value:n,onChange:g=>r(g.target.value),placeholder:"Enter your password",required:!0}),h.jsx(I9,{type:"button",onClick:()=>d(!l),"aria-label":l?"Hide password":"Show password",children:l?h.jsx(kh,{size:18}):h.jsx(vh,{size:18})})]}),h.jsx(T9,{type:"button",onClick:S,disabled:E,tabIndex:"-1",children:E?"Sending...":f?"Email sent!":"Forgot password?"})]}),i&&h.jsx(E9,{children:i}),h.jsxs(x9,{children:[h.jsx(_9,{type:"submit",disabled:s,onClick:y,children:s?"Logging in...":h.jsxs(h.Fragment,{children:[h.jsx(Oc,{children:h.jsx(ky,{size:18})}),"Login"]})}),h.jsxs(w9,{to:"/register",children:[h.jsx(Oc,{children:h.jsx(wu,{size:18})}),"Register"]})]})]})]})})}const L9=async t=>{try{const e={...t,createdAt:zu(),status:"pending"};return(await t6(Tn(xe,"registration_requests"),e)).id}catch(e){throw console.error("Error submitting registration request:",e),e}},A9=async()=>{try{const t=Sr(Tn(xe,"registration_requests"),ry("createdAt","desc"));return(await Wn(t)).docs.map(n=>({id:n.id,...n.data()}))}catch(t){throw console.error("Error getting registration requests:",t),t}},P9=async(t,e)=>{try{const n=lt(xe,"registration_requests",t);await na(n,{...e,updatedAt:zu()})}catch(n){throw console.error("Error updating registration request:",n),n}},R9=async t=>{try{const e=lt(xe,"users",t.userId);await yu(e,{userId:t.userId,name:t.name,email:t.email,position:t.position,role:t.role||"user",status:"active",timeRegion:t.timeRegion||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila",createdAt:zu(),userID:t.userID||`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`}),await oy(lt(xe,"registration_requests",t.id))}catch(e){throw console.error("Error approving registration request:",e),e}},b9=async t=>{try{if(await yu(lt(xe,"declined_registrations",t.id),{...t,declinedAt:zu(),status:"declined",blocked:!0}),await oy(lt(xe,"registration_requests",t.id)),t.userId&&!t.userId.startsWith("temp_"))try{const n=Rx().currentUser;n&&n.uid===t.userId?(await fR(n),console.log("Deleted declined user from Firebase Authentication")):console.log("User marked as declined in Firestore. They will be blocked from accessing the system.")}catch(e){console.error("Error handling user authentication:",e)}}catch(e){throw console.error("Error declining registration request:",e),e}},j9=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
  padding: 2rem 1rem;
`,M9=V.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 550px;
  animation: fadeIn 0.3s ease-in-out;
`,N9=V.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,O9=V.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,ol=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,D9=V.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,Fp=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${t=>t.flex||1};
  min-width: ${t=>t.minWidth||"0"};
`,Hr=V.label`
  font-size: 0.9rem;
  color: #555;
`,Gi=V.div`
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
`,Mn=V.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  color: #800000;
`,xs=V.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`,V9=V.select`
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
`,F9=V.button`
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
`,Wp=V.button`
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
`,N_=V(uI)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,W9=V(j8)`
  display: flex;
  align-items: center;
  color: #800000;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`,Ts=V.div`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`,U9=V.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;
`,sl=V.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  color: ${t=>t.met?"#000000":"#666"};
`;function $9(){const[t,e]=M.useState({lastName:"",firstName:"",middleInitial:"",email:"",password:"",confirmPassword:"",position:""}),[n,r]=M.useState({}),[i,o]=M.useState(!1),[s,a]=M.useState(!1),[l,d]=M.useState(!1),[f,m]=M.useState(!1),E=Aa();M.useEffect(()=>{Object.keys(n).length>0&&r({})},[t]);const k={length:t.password.length>=4,validChars:/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(t.password),hasLetter:/[a-zA-Z]/.test(t.password),hasNumber:/[0-9]/.test(t.password),match:t.password===t.confirmPassword&&t.confirmPassword!==""},T=g=>{const{name:_,value:x}=g.target;if(e(_==="middleInitial"?R=>({...R,[_]:x.toUpperCase()}):R=>({...R,[_]:x})),_==="email"&&x.includes("@")&&x.includes(".")){m(!0);const R=setTimeout(()=>{A(x)},800);return()=>clearTimeout(R)}},A=async g=>{try{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)){m(!1);return}(await fetch("https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=undefined",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({continueUri:window.location.href,identifier:g})}).then(R=>R.json())).registered&&r(R=>({...R,email:"This email is already registered. Please use a different email or login instead."}))}catch(_){console.error("Error checking email:",_)}finally{m(!1)}},S=()=>{const g={};return t.lastName.trim()||(g.lastName="Last name is required"),t.firstName.trim()||(g.firstName="First name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(g.email="Email is invalid"):g.email="Email is required",t.password?k.length?k.validChars?k.hasLetter?k.hasNumber||(g.password="Password must contain at least one number"):g.password="Password must contain at least one letter":g.password="Password contains invalid characters":g.password="Password must be at least 4 characters":g.password="Password is required",t.confirmPassword?t.password!==t.confirmPassword&&(g.confirmPassword="Passwords do not match"):g.confirmPassword="Please confirm your password",t.position||(g.position="Please select your position"),r(g),Object.keys(g).length===0},y=async g=>{var _,x,R,N;if(g.preventDefault(),!!S())try{o(!0);const w=!1;let I,P;try{P=await oR($n,t.email,t.password),I=P.user.uid}catch(C){if(console.error("Auth error:",C),C.code==="auth/email-already-in-use")console.log("Email already exists in Auth but proceeding with registration request"),I=`temp_${Date.now()}_${Math.random().toString(36).substring(2,7)}`;else if(!(w&&(C.code==="auth/network-request-failed"||(_=C.message)!=null&&_.includes("network"))))throw C}const b=`${t.lastName}, ${t.firstName}${t.middleInitial?" "+t.middleInitial+".":""}`;if(P!=null&&P.user)try{await lR(P.user,{displayName:b})}catch(C){console.warn("Could not update profile, continuing with registration:",C)}let j="Asia/Manila";try{j=Intl.DateTimeFormat().resolvedOptions().timeZone,console.log("Detected device time zone during registration:",j)}catch(C){console.error("Error detecting time zone during registration:",C)}const O={userId:I,lastName:t.lastName,firstName:t.firstName,middleInitial:t.middleInitial,name:b,email:t.email,position:t.position,role:"user",status:"pending",timeRegion:j,userID:`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`};try{await L9(O)}catch(C){if(console.error("Firestore error:",C),!w)throw C}Y.success("Registration request submitted! An administrator will review your request."),w&&!P||E("/login",{state:{message:"Your registration request has been submitted. You will be notified when your account is approved."}})}catch(w){if(console.error("Registration error:",w),w.code==="auth/email-already-in-use"||typeof w=="object"&&w.code==="auth/email-already-in-use"){const I=w.message||"Email is already registered. Please use a different email or login instead.";r(P=>({...P,email:I})),Y.error(h.jsxs("div",{children:["Email already exists. ",h.jsx("a",{href:"/",style:{color:"white",textDecoration:"underline"},children:"Login instead?"})]}),{autoClose:5e3}),(x=document.getElementById("email"))==null||x.scrollIntoView({behavior:"smooth",block:"center"}),(R=document.getElementById("email"))==null||R.focus()}else w.code==="auth/network-request-failed"?Y.error("Network error. Please check your connection and try again."):w.code==="auth/operation-not-allowed"?(r(I=>({...I,email:"Email/password registration is not enabled. Please contact the administrator."})),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(N=w.code)!=null&&N.includes("auth/")?Y.error(`Authentication error: ${w.message||"Please try again later"}`):(console.error("Registration error details:",w),Y.error("Registration failed. Please try again."))}finally{o(!1)}};return h.jsx(j9,{children:h.jsxs(M9,{children:[h.jsxs(W9,{to:"/",children:[h.jsx(Mn,{children:h.jsx(yh,{size:16})}),"Back to Login"]}),h.jsx(N9,{children:"Create Account"}),h.jsxs(O9,{onSubmit:y,children:[h.jsxs(ol,{children:[h.jsx(Hr,{children:"Full Name"}),h.jsxs(D9,{children:[h.jsxs(Fp,{flex:"2",minWidth:"150px",children:[h.jsx(Hr,{htmlFor:"lastName",children:"Last Name"}),h.jsxs(Gi,{children:[h.jsx(Mn,{children:h.jsx(wi,{size:18})}),h.jsx(xs,{id:"lastName",name:"lastName",type:"text",value:t.lastName,onChange:T,placeholder:"Last name"})]}),n.lastName&&h.jsx(Ts,{children:n.lastName})]}),h.jsxs(Fp,{flex:"2",minWidth:"150px",children:[h.jsx(Hr,{htmlFor:"firstName",children:"First Name"}),h.jsx(Gi,{children:h.jsx(xs,{id:"firstName",name:"firstName",type:"text",value:t.firstName,onChange:T,placeholder:"First name"})}),n.firstName&&h.jsx(Ts,{children:n.firstName})]}),h.jsxs(Fp,{flex:"1",minWidth:"80px",children:[h.jsx(Hr,{htmlFor:"middleInitial",children:"M.I."}),h.jsx(Gi,{children:h.jsx(xs,{id:"middleInitial",name:"middleInitial",type:"text",value:t.middleInitial,onChange:T,placeholder:"M.I.",maxLength:"1"})})]})]})]}),h.jsxs(ol,{children:[h.jsx(Hr,{htmlFor:"email",children:"Email"}),h.jsxs(Gi,{children:[h.jsx(Mn,{children:h.jsx(If,{size:18})}),h.jsx(xs,{id:"email",name:"email",type:"email",value:t.email,onChange:T,placeholder:"Enter your email"}),f&&h.jsx(Wp,{as:"span","aria-label":"Checking email",children:h.jsx(N_,{size:18})})]}),n.email&&h.jsx(Ts,{children:n.email})]}),h.jsxs(ol,{children:[h.jsx(Hr,{htmlFor:"position",children:"Position"}),h.jsxs(Gi,{children:[h.jsx(Mn,{children:h.jsx(aI,{size:18})}),h.jsxs(V9,{id:"position",name:"position",value:t.position,onChange:T,children:[h.jsx("option",{value:"",disabled:!0,children:"Select your position"}),h.jsx("option",{value:"Intern/OJT",children:"Intern/OJT"}),h.jsx("option",{value:"Employed/Onboarded",children:"Employed/Onboarded"})]})]}),n.position&&h.jsx(Ts,{children:n.position})]}),h.jsxs(ol,{children:[h.jsx(Hr,{htmlFor:"password",children:"Password"}),h.jsxs(Gi,{children:[h.jsx(Mn,{children:h.jsx(_h,{size:18})}),h.jsx(xs,{id:"password",name:"password",type:s?"text":"password",value:t.password,onChange:T,placeholder:"Create a password"}),h.jsx(Wp,{type:"button",onClick:()=>a(!s),"aria-label":s?"Hide password":"Show password",children:s?h.jsx(kh,{size:18}):h.jsx(vh,{size:18})})]}),n.password&&h.jsx(Ts,{children:n.password}),h.jsxs(U9,{children:[h.jsxs(sl,{met:k.length,children:[h.jsx(Mn,{children:h.jsx(ni,{size:14,weight:k.length?"fill":"regular"})}),"At least 4 characters"]}),h.jsxs(sl,{met:k.validChars,children:[h.jsx(Mn,{children:h.jsx(ni,{size:14,weight:k.validChars?"fill":"regular"})}),"Valid characters (letters, numbers, and special characters)"]}),h.jsxs(sl,{met:k.hasLetter,children:[h.jsx(Mn,{children:h.jsx(ni,{size:14,weight:k.hasLetter?"fill":"regular"})}),"At least one letter"]}),h.jsxs(sl,{met:k.hasNumber,children:[h.jsx(Mn,{children:h.jsx(ni,{size:14,weight:k.hasNumber?"fill":"regular"})}),"At least one number"]})]})]}),h.jsxs(ol,{children:[h.jsx(Hr,{htmlFor:"confirmPassword",children:"Confirm Password"}),h.jsxs(Gi,{children:[h.jsx(Mn,{children:h.jsx(_h,{size:18})}),h.jsx(xs,{id:"confirmPassword",name:"confirmPassword",type:l?"text":"password",value:t.confirmPassword,onChange:T,placeholder:"Confirm your password"}),h.jsx(Wp,{type:"button",onClick:()=>d(!l),"aria-label":l?"Hide password":"Show password",children:l?h.jsx(kh,{size:18}):h.jsx(vh,{size:18})})]}),n.confirmPassword&&h.jsx(Ts,{children:n.confirmPassword}),t.confirmPassword&&h.jsxs(sl,{met:k.match,children:[h.jsx(Mn,{children:h.jsx(ni,{size:14,weight:k.match?"fill":"regular"})}),"Passwords match"]})]}),h.jsx(F9,{type:"submit",disabled:i||f,children:i?h.jsxs(h.Fragment,{children:[h.jsx(N_,{size:18}),"Creating Account..."]}):f?"Checking email...":"Register"})]})]})})}const dI=M.createContext(),_y=()=>M.useContext(dI),z9=({children:t})=>{const{currentUser:e}=L6(),[n,r]=M.useState(!1),[i,o]=M.useState(!0);M.useEffect(()=>{(async()=>{if(!(e!=null&&e.uid)){o(!1);return}try{const d=lt(xe,"users_settings",e.uid),f=await gu(d);if(f.exists()){const m=f.data();m.use24HourFormat!==void 0&&r(m.use24HourFormat)}else await yu(d,{use24HourFormat:!1,userId:e.uid})}catch(d){console.error("Error fetching user settings:",d)}finally{o(!1)}})()},[e]);const a={use24HourFormat:n,toggleTimeFormat:async()=>{if(e!=null&&e.uid)try{const l=lt(xe,"users_settings",e.uid);return await yu(l,{use24HourFormat:!n,userId:e.uid},{merge:!0}),r(!n),!0}catch(l){return console.error("Error updating time format:",l),!1}},loading:i};return h.jsx(dI.Provider,{value:a,children:t})},B9=V.div`
  display: flex;
  height: 100vh; /* Lock to viewport height */
  overflow: hidden; /* Prevent overall page scrolling */
`,H9=V.div`
  width: 250px;
  background: linear-gradient(180deg, #000000 0%, #800000 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Allow sidebar to scroll if needed */
`,q9=V.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`,Nn=V.div`
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
`,O_=V.button`
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
`,hI=V.button`
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
`,Y9=V(hI)`
  background-color: #111111;
  color: #76da7c;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,G9=V(hI)`
  background-color: #111111;
  color: #e67979;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,gr=V.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,K9=V.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Make content area scrollable */
`,Q9=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  background-color: #f5f5f5;
  z-index: 10; /* Ensure header stays on top */
`,Z9=V.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,X9=V.div`
  display: flex;
  align-items: center;
`,J9=V.span`
  margin-right: 1rem;
  font-weight: 500;
`,eD=V.button`
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
`,tD=V.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto; /* Make content area scrollable */
  height: calc(100vh - 73px); /* Subtract header height */
`,nD=V.div`
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
`,rD=V.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`,iD=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
`,oD=V.div`
  padding: 1rem;
  overflow-y: auto;
`,sD=V.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #eee;
  gap: 0.5rem;
`,aD=V.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`,D_=V.div`
  margin-bottom: 1rem;
`,V_=V.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,lD=V.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`,F_=V.button`
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
`;function uD({user:t,activeTab:e,setActiveTab:n,attendanceStatus:r,loading:i,handleTimeInOut:o,lastRecord:s,isSuperAdmin:a,userData:l,setUserData:d,children:f}){var K,ie,ee;const m=(l==null?void 0:l.role)==="admin"&&((K=l==null?void 0:l.privileges)==null?void 0:K.canManageRegistrations)!==!1,E=(l==null?void 0:l.role)==="admin"&&((ie=l==null?void 0:l.privileges)==null?void 0:ie.canManageUsers)!==!1,k=Aa(),{use24HourFormat:T,toggleTimeFormat:A}=_y(),[S,y]=M.useState(!1),[g,_]=M.useState((l==null?void 0:l.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila"),[x,R]=M.useState(!1),[N,w]=M.useState(""),[I,P]=M.useState(!1),b=z=>{try{const $=new Date,G={timeZone:z,timeZoneName:"short"},ne=new Intl.DateTimeFormat("en-US",G).format($).match(/GMT([+-]\d+)/);if(ne&&ne[1])return`UTC${ne[1]}`;const he=new Date,Pe=(new Date(he.toLocaleString("en-US",{timeZone:z}))-he)/6e4,Qe=Math.floor(Math.abs(Pe)/60),We=Math.abs(Pe)%60;return`UTC${Pe>=0?"+":"-"}${Qe.toString().padStart(2,"0")}:${We.toString().padStart(2,"0")}`}catch($){return console.error("Error calculating UTC offset:",$),""}};M.useEffect(()=>{try{const z=Intl.DateTimeFormat().resolvedOptions().timeZone;w(z),console.log("Detected device time zone:",z)}catch(z){console.error("Error detecting time zone:",z),w("Unable to detect")}},[]),M.useEffect(()=>{l!=null&&l.timeRegion?_(l.timeRegion):N&&!(l!=null&&l.timeRegion)&&_(N)},[l,N]);const j=async()=>{if(!(!(t!=null&&t.uid)||x))try{R(!0);const z=lt(xe,"users",t.uid);await na(z,{timeRegion:g}),d($=>({...$,timeRegion:g})),Y.success("Time region updated successfully"),y(!1)}catch(z){console.error("Error updating time region:",z),Y.error("Failed to update time region")}finally{R(!1)}},O=async()=>{if(!I)try{P(!0),await A()?Y.success(`Time format updated to ${T?"12-hour":"24-hour"} format`):Y.error("Failed to update time format")}catch(z){console.error("Error updating time format:",z),Y.error("Failed to update time format")}finally{P(!1)}},C=async()=>{try{await hR($n),k("/login")}catch(z){console.error("Error signing out:",z),Y.error("Failed to sign out")}};return h.jsxs(B9,{children:[h.jsxs(H9,{children:[h.jsx(q9,{children:"Hyacinth"}),h.jsxs(Nn,{className:e==="home"?"active":"",onClick:()=>n("home"),children:[h.jsx(oI,{size:20,style:{marginRight:"0.5rem"}}),"Home"]}),h.jsxs(Nn,{className:e==="schedule"?"active":"",onClick:()=>n("schedule"),children:[h.jsx(Fn,{size:20,style:{marginRight:"0.5rem"}}),"Schedule"]}),h.jsxs(Nn,{className:e==="attendance"?"active":"",onClick:()=>n("attendance"),children:[h.jsx(ui,{size:20,style:{marginRight:"0.5rem"}}),"Attendance"]}),h.jsxs(Nn,{className:e==="profile"?"active":"",onClick:()=>n("profile"),children:[h.jsx(wi,{size:20,style:{marginRight:"0.5rem"}}),"Profile"]}),a&&h.jsxs(h.Fragment,{children:[h.jsxs(Nn,{className:e==="registration_requests"?"active":"",onClick:()=>n("registration_requests"),children:[h.jsx(gr,{children:h.jsx(wu,{size:16})}),"Registration Requests"]}),h.jsxs(Nn,{className:e==="user_management"?"active":"",onClick:()=>n("user_management"),children:[h.jsx(gr,{children:h.jsx(xu,{size:16})}),"User Management"]}),h.jsxs(Nn,{className:e==="admin_privileges"?"active":"",onClick:()=>n("admin_privileges"),children:[h.jsx(gr,{children:h.jsx(vy,{size:16})}),"Admin Privileges"]})]}),(l==null?void 0:l.role)==="admin"&&h.jsxs(h.Fragment,{children:[m&&h.jsxs(Nn,{className:e==="registration_requests"?"active":"",onClick:()=>n("registration_requests"),children:[h.jsx(gr,{children:h.jsx(wu,{size:16})}),"Registration Requests"]}),E&&h.jsxs(Nn,{className:e==="user_management"?"active":"",onClick:()=>n("user_management"),children:[h.jsx(gr,{children:h.jsx(xu,{size:16})}),"User Management"]})]}),h.jsxs("div",{style:{marginTop:"auto"},children:[h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"User Settings"}),h.jsxs(Nn,{onClick:()=>y(!0),children:[h.jsx(gr,{children:h.jsx(iI,{size:16})}),"Change Time Region",h.jsxs("div",{style:{fontSize:"0.75rem",marginLeft:"auto",opacity:.7},children:[((ee=l==null?void 0:l.timeRegion)==null?void 0:ee.replace("_"," "))||"Asia/Manila",h.jsx("div",{style:{fontSize:"0.7rem",marginTop:"2px"},children:b((l==null?void 0:l.timeRegion)||"Asia/Manila")})]})]})]}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"Attendance Actions"}),h.jsxs(Y9,{onClick:()=>o("In"),disabled:i||r==="In",children:[h.jsx(gr,{children:h.jsx(ky,{size:16})}),"Time In"]}),h.jsxs(G9,{onClick:()=>o("Out"),disabled:i||r==="Out"||!r,children:[h.jsx(gr,{children:h.jsx(_d,{size:16})}),"Time Out"]}),r&&h.jsxs("div",{style:{padding:"0.5rem 0",textAlign:"center",fontSize:"0.85rem"},children:["Status: ",h.jsx("strong",{children:r==="In"?"Clocked In":"Clocked Out"})]})]}),h.jsxs(Nn,{onClick:C,children:[h.jsx(gr,{children:h.jsx(_d,{size:16})}),"Logout"]})]})]}),h.jsxs(K9,{children:[h.jsxs(Q9,{children:[h.jsxs(Z9,{children:[e==="dashboard"&&"Dashboard",e==="attendance"&&"Attendance",e==="schedule"&&"Schedule",e==="profile"&&"Profile",e==="registration_requests"&&"Registration Requests",e==="user_management"&&"User Management",e==="admin_privileges"&&"Admin Privileges"]}),h.jsxs(X9,{children:[h.jsx(J9,{children:t==null?void 0:t.displayName}),h.jsxs(eD,{onClick:C,children:[h.jsx(_d,{size:16}),"Logout"]})]})]}),h.jsx(tD,{children:f})]}),S&&h.jsx(nD,{children:h.jsxs(rD,{children:[h.jsxs(iD,{children:[h.jsx("h3",{children:"Change Time Region"}),h.jsx(aD,{onClick:()=>y(!1),children:"×"})]}),h.jsxs(oD,{children:[h.jsx("p",{style:{marginBottom:"1rem"},children:"Changing your time region will affect how times are displayed throughout the application and how your attendance is recorded."}),N&&h.jsxs("p",{style:{marginBottom:"1rem",backgroundColor:"#f0f7ff",padding:"0.5rem",borderRadius:"4px",fontSize:"0.9rem"},children:[h.jsx("strong",{children:"Detected device time zone:"})," ",N,h.jsxs("span",{style:{fontWeight:"normal"},children:["(",b(N),")"]}),N!==g&&h.jsx("button",{onClick:()=>_(N),style:{display:"block",marginTop:"0.5rem",padding:"0.25rem 0.5rem",fontSize:"0.8rem",backgroundColor:"#e6f0ff",border:"1px solid #bbd6fb",borderRadius:"4px",cursor:"pointer"},children:"Use device time zone"})]}),h.jsxs(D_,{children:[h.jsx(V_,{children:"Select Time Region"}),h.jsxs(lD,{value:g,onChange:z=>_(z.target.value),children:[h.jsx("optgroup",{label:"Asia",children:h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT, UTC+8)"})}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern, UTC-5/-4)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central, UTC-6/-5)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain, UTC-7/-6)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific, UTC-8/-7)"})]}),h.jsx("optgroup",{label:"Europe",children:h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST, UTC+0/+1)"})})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"Note: UTC offsets may vary during Daylight Saving Time transitions."})]}),h.jsxs(D_,{style:{marginTop:"1.5rem"},children:[h.jsxs(V_,{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(nI,{size:18}),"Time Format"]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"0.5rem"},children:[h.jsx(O_,{active:!T,onClick:O,disabled:I,children:"12-hour (AM/PM)"}),h.jsx(O_,{active:T,onClick:O,disabled:I,children:"24-hour"})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"This setting affects how time is displayed throughout the application."})]})]}),h.jsxs(sD,{children:[h.jsx(F_,{onClick:()=>y(!1),children:"Cancel"}),h.jsx(F_,{primary:!0,onClick:j,disabled:x,children:x?"Updating...":"Save Changes"})]})]})})]})}const xi=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1.5rem;
`,Ti=V.h2`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1.25rem;
  margin: 0;
  border-bottom: 1px solid #eee;
`,Ii=V.div`
  padding: 1.25rem;
`,cD=V.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,dD=V.span`
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
`;const hD=({attendanceStatus:t,lastRecord:e})=>h.jsx(h.Fragment,{children:h.jsxs(cD,{children:[h.jsxs(xi,{children:[h.jsx(Ti,{children:"Today's Schedule"}),h.jsx(Ii,{children:h.jsx("p",{children:"No schedule for today"})})]}),h.jsxs(xi,{children:[h.jsx(Ti,{children:"Attendance Status"}),h.jsx(Ii,{children:t?h.jsxs(h.Fragment,{children:[h.jsxs("p",{children:["Current Status:",h.jsx(dD,{status:t,children:t==="In"?"Clocked In":"Clocked Out"})]}),e&&h.jsxs("p",{children:["Last action: ",new Date(e.timestamp.toDate()).toLocaleString()]})]}):h.jsx("p",{children:"You haven't clocked in today"})})]}),h.jsxs(xi,{children:[h.jsx(Ti,{children:"Recent Activity"}),h.jsx(Ii,{children:e?h.jsxs("p",{children:["Last ",e.type==="In"?"Time In":"Time Out",": ",new Date(e.timestamp.toDate()).toLocaleString()]}):h.jsx("p",{children:"No recent activity"})})]})]})}),fD=V.table`
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
`,pD=V.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,W_=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`,mD=({user:t})=>{const[e,n]=M.useState([]),[r,i]=M.useState(!0),[o,s]=M.useState(null),{use24HourFormat:a}=_y();M.useEffect(()=>{const k=async()=>{if(t!=null&&t.uid)try{const A=await getDoc(doc(xe,"users",t.uid));A.exists()&&s(A.data())}catch(A){console.error("Error fetching user data:",A)}},T=async()=>{if(t!=null&&t.uid)try{i(!0);const A=Tn(xe,"attendance"),S=Sr(A,ai("userId","==",t.uid),ry("timestamp","desc")),y=await Wn(S),g=[];if(y.forEach(x=>{g.push({id:x.id,...x.data()})}),console.log("Raw attendance records:",g.length),g.length===0){n([]),i(!1);return}const _=l(g);console.log("Processed attendance records:",_.length),n(_)}catch(A){console.error("Error fetching attendance records:",A)}finally{i(!1)}};k(),T()},[t]);const l=k=>{const T={};k.forEach(S=>{if(!S.timestamp){console.log("Skipping record without timestamp:",S);return}try{const y=S.timestamp.toDate(),g=y.toISOString().split("T")[0];T[g]||(T[g]={date:y,day:f(S.timestamp),inRecord:null,outRecord:null}),S.type==="In"?T[g].inRecord=S:S.type==="Out"?T[g].outRecord=S:console.log("Record with unknown type:",S.type,S)}catch(y){console.error("Error processing record:",y,S)}});const A=Object.values(T).sort((S,y)=>y.date-S.date);return console.log("Processed records by date:",A),A},d=k=>{if(!k)return"N/A";if(k instanceof Date)return k.toLocaleDateString();try{return k.toDate().toLocaleDateString()}catch(T){return console.error("Error formatting date:",T,k),"Invalid Date"}},f=k=>{if(!k)return"N/A";try{const T=k instanceof Date?k:k.toDate();return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][T.getDay()]}catch(T){return console.error("Error getting day of week:",T,k),"Unknown"}},m=k=>{if(!k)return"N/A";try{return(k instanceof Date?k:k.toDate()).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!a})}catch(T){return console.error("Error formatting time:",T,k),"Invalid Time"}},E=(k,T)=>{if(!k||k.type!=="In")return"N/A";try{const A=k.timestamp.toDate(),S=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][A.getDay()];let y="On Time";const _=((o==null?void 0:o.schedule)||[]).find(x=>x.dayOfWeek===S);if(_&&_.timeIn){const[x,R]=_.timeIn.split(":").map(Number),N=new Date(A);N.setHours(x,R,0,0);const w=Math.round((A-N)/(1e3*60));w<-15?y="Early":w<=15?y="On Time":y="Late"}return y}catch(A){return console.error("Error calculating time-in status:",A,k),"On Time"}};return h.jsxs(xi,{children:[h.jsx(Ti,{children:"Attendance Records"}),h.jsx(Ii,{children:r?h.jsx("p",{children:"Loading attendance records..."}):e.length>0?h.jsxs(fD,{children:[h.jsxs("thead",{children:[h.jsxs("tr",{children:[h.jsx("th",{children:"Date"}),h.jsx("th",{children:"Day"}),h.jsx("th",{colSpan:"2",children:"IN"}),h.jsx("th",{colSpan:"2",children:"OUT"}),h.jsx("th",{children:"Notes"})]}),h.jsxs("tr",{children:[h.jsx("th",{}),h.jsx("th",{}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{})]})]}),h.jsx("tbody",{children:e.map((k,T)=>{var A,S,y,g;return h.jsxs("tr",{children:[h.jsx("td",{children:d(k.date)}),h.jsx("td",{children:k.day}),h.jsx("td",{children:k.inRecord?m(k.inRecord.timestamp):"-"}),h.jsx("td",{children:k.inRecord?h.jsx(W_,{status:E(k.inRecord,k.date),children:E(k.inRecord,k.date)}):"-"}),h.jsx("td",{children:k.outRecord?m(k.outRecord.timestamp):"-"}),h.jsx("td",{children:k.outRecord?h.jsx(W_,{status:"Complete",children:"Complete"}):"-"}),h.jsx("td",{children:(A=k.inRecord)!=null&&A.notes&&((S=k.outRecord)!=null&&S.notes)?h.jsxs(h.Fragment,{children:[h.jsx("strong",{children:"IN:"})," ",k.inRecord.notes,h.jsx("br",{}),h.jsx("strong",{children:"OUT:"})," ",k.outRecord.notes]}):(y=k.inRecord)!=null&&y.notes?k.inRecord.notes:(g=k.outRecord)!=null&&g.notes?k.outRecord.notes:"-"})]},T)})})]}):h.jsx(pD,{children:h.jsx("p",{children:"No attendance records found"})})})]})};function Eh(t){"@babel/helpers - typeof";return Eh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Eh(t)}function Ri(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function Dt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function hr(t){Dt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||Eh(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function fI(t,e){Dt(2,arguments);var n=hr(t).getTime(),r=Ri(e);return new Date(n+r)}var gD=36e5;function yD(t,e){Dt(2,arguments);var n=Ri(e);return fI(t,n*gD)}var vD={};function Sf(){return vD}function kD(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function _D(t){return Dt(1,arguments),t instanceof Date||Eh(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function ED(t){if(Dt(1,arguments),!_D(t)&&typeof t!="number")return!1;var e=hr(t);return!isNaN(Number(e))}function wD(t,e){Dt(2,arguments);var n=Ri(e);return fI(t,-n)}var xD=864e5;function TD(t){Dt(1,arguments);var e=hr(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/xD)+1}function wh(t){Dt(1,arguments);var e=1,n=hr(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function pI(t){Dt(1,arguments);var e=hr(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=wh(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var s=wh(o);return e.getTime()>=i.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function ID(t){Dt(1,arguments);var e=pI(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=wh(n);return r}var SD=6048e5;function CD(t){Dt(1,arguments);var e=hr(t),n=wh(e).getTime()-ID(e).getTime();return Math.round(n/SD)+1}function xh(t,e){var n,r,i,o,s,a,l,d;Dt(1,arguments);var f=Sf(),m=Ri((n=(r=(i=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:f.weekStartsOn)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&n!==void 0?n:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var E=hr(t),k=E.getUTCDay(),T=(k<m?7:0)+k-m;return E.setUTCDate(E.getUTCDate()-T),E.setUTCHours(0,0,0,0),E}function mI(t,e){var n,r,i,o,s,a,l,d;Dt(1,arguments);var f=hr(t),m=f.getUTCFullYear(),E=Sf(),k=Ri((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:E.firstWeekContainsDate)!==null&&r!==void 0?r:(l=E.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(k>=1&&k<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var T=new Date(0);T.setUTCFullYear(m+1,0,k),T.setUTCHours(0,0,0,0);var A=xh(T,e),S=new Date(0);S.setUTCFullYear(m,0,k),S.setUTCHours(0,0,0,0);var y=xh(S,e);return f.getTime()>=A.getTime()?m+1:f.getTime()>=y.getTime()?m:m-1}function LD(t,e){var n,r,i,o,s,a,l,d;Dt(1,arguments);var f=Sf(),m=Ri((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:f.firstWeekContainsDate)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1),E=mI(t,e),k=new Date(0);k.setUTCFullYear(E,0,m),k.setUTCHours(0,0,0,0);var T=xh(k,e);return T}var AD=6048e5;function PD(t,e){Dt(1,arguments);var n=hr(t),r=xh(n,e).getTime()-LD(n,e).getTime();return Math.round(r/AD)+1}function Se(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var qr={y:function(e,n){var r=e.getUTCFullYear(),i=r>0?r:1-r;return Se(n==="yy"?i%100:i,n.length)},M:function(e,n){var r=e.getUTCMonth();return n==="M"?String(r+1):Se(r+1,2)},d:function(e,n){return Se(e.getUTCDate(),n.length)},a:function(e,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,n){return Se(e.getUTCHours()%12||12,n.length)},H:function(e,n){return Se(e.getUTCHours(),n.length)},m:function(e,n){return Se(e.getUTCMinutes(),n.length)},s:function(e,n){return Se(e.getUTCSeconds(),n.length)},S:function(e,n){var r=n.length,i=e.getUTCMilliseconds(),o=Math.floor(i*Math.pow(10,r-3));return Se(o,n.length)}},Is={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},RD={G:function(e,n,r){var i=e.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){var i=e.getUTCFullYear(),o=i>0?i:1-i;return r.ordinalNumber(o,{unit:"year"})}return qr.y(e,n)},Y:function(e,n,r,i){var o=mI(e,i),s=o>0?o:1-o;if(n==="YY"){var a=s%100;return Se(a,2)}return n==="Yo"?r.ordinalNumber(s,{unit:"year"}):Se(s,n.length)},R:function(e,n){var r=pI(e);return Se(r,n.length)},u:function(e,n){var r=e.getUTCFullYear();return Se(r,n.length)},Q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return Se(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return Se(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,r){var i=e.getUTCMonth();switch(n){case"M":case"MM":return qr.M(e,n);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,r){var i=e.getUTCMonth();switch(n){case"L":return String(i+1);case"LL":return Se(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var o=PD(e,i);return n==="wo"?r.ordinalNumber(o,{unit:"week"}):Se(o,n.length)},I:function(e,n,r){var i=CD(e);return n==="Io"?r.ordinalNumber(i,{unit:"week"}):Se(i,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):qr.d(e,n)},D:function(e,n,r){var i=TD(e);return n==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):Se(i,n.length)},E:function(e,n,r){var i=e.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(s);case"ee":return Se(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(s);case"cc":return Se(s,n.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(e,n,r){var i=e.getUTCDay(),o=i===0?7:i;switch(n){case"i":return String(o);case"ii":return Se(o,n.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,r){var i=e.getUTCHours(),o=i/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,n,r){var i=e.getUTCHours(),o;switch(i===12?o=Is.noon:i===0?o=Is.midnight:o=i/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,n,r){var i=e.getUTCHours(),o;switch(i>=17?o=Is.evening:i>=12?o=Is.afternoon:i>=4?o=Is.morning:o=Is.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return qr.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):qr.H(e,n)},K:function(e,n,r){var i=e.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(i,{unit:"hour"}):Se(i,n.length)},k:function(e,n,r){var i=e.getUTCHours();return i===0&&(i=24),n==="ko"?r.ordinalNumber(i,{unit:"hour"}):Se(i,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):qr.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):qr.s(e,n)},S:function(e,n){return qr.S(e,n)},X:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();if(s===0)return"Z";switch(n){case"X":return $_(s);case"XXXX":case"XX":return to(s);case"XXXXX":case"XXX":default:return to(s,":")}},x:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"x":return $_(s);case"xxxx":case"xx":return to(s);case"xxxxx":case"xxx":default:return to(s,":")}},O:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+U_(s,":");case"OOOO":default:return"GMT"+to(s,":")}},z:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+U_(s,":");case"zzzz":default:return"GMT"+to(s,":")}},t:function(e,n,r,i){var o=i._originalDate||e,s=Math.floor(o.getTime()/1e3);return Se(s,n.length)},T:function(e,n,r,i){var o=i._originalDate||e,s=o.getTime();return Se(s,n.length)}};function U_(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+Se(o,2)}function $_(t,e){if(t%60===0){var n=t>0?"-":"+";return n+Se(Math.abs(t)/60,2)}return to(t,e)}function to(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=Se(Math.floor(i/60),2),s=Se(i%60,2);return r+o+n+s}var z_=function(e,n){switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},gI=function(e,n){switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},bD=function(e,n){var r=e.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return z_(e,n);var s;switch(i){case"P":s=n.dateTime({width:"short"});break;case"PP":s=n.dateTime({width:"medium"});break;case"PPP":s=n.dateTime({width:"long"});break;case"PPPP":default:s=n.dateTime({width:"full"});break}return s.replace("{{date}}",z_(i,n)).replace("{{time}}",gI(o,n))},jD={p:gI,P:bD},MD=["D","DD"],ND=["YY","YYYY"];function OD(t){return MD.indexOf(t)!==-1}function DD(t){return ND.indexOf(t)!==-1}function B_(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var VD={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},FD=function(e,n,r){var i,o=VD[e];return typeof o=="string"?i=o:n===1?i=o.one:i=o.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function Up(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var WD={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},UD={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},$D={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},zD={date:Up({formats:WD,defaultWidth:"full"}),time:Up({formats:UD,defaultWidth:"full"}),dateTime:Up({formats:$D,defaultWidth:"full"})},BD={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},HD=function(e,n,r,i){return BD[e]};function al(t){return function(e,n){var r=n!=null&&n.context?String(n.context):"standalone",i;if(r==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,s=n!=null&&n.width?String(n.width):o;i=t.formattingValues[s]||t.formattingValues[o]}else{var a=t.defaultWidth,l=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[l]||t.values[a]}var d=t.argumentCallback?t.argumentCallback(e):e;return i[d]}}var qD={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},YD={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},GD={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},KD={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},QD={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ZD={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},XD=function(e,n){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},JD={ordinalNumber:XD,era:al({values:qD,defaultWidth:"wide"}),quarter:al({values:YD,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:al({values:GD,defaultWidth:"wide"}),day:al({values:KD,defaultWidth:"wide"}),dayPeriod:al({values:QD,defaultWidth:"wide",formattingValues:ZD,defaultFormattingWidth:"wide"})};function ll(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;var s=o[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?t7(a,function(m){return m.test(s)}):e7(a,function(m){return m.test(s)}),d;d=t.valueCallback?t.valueCallback(l):l,d=n.valueCallback?n.valueCallback(d):d;var f=e.slice(s.length);return{value:d,rest:f}}}function e7(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function t7(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function n7(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],o=e.match(t.parsePattern);if(!o)return null;var s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;var a=e.slice(i.length);return{value:s,rest:a}}}var r7=/^(\d+)(th|st|nd|rd)?/i,i7=/\d+/i,o7={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},s7={any:[/^b/i,/^(a|c)/i]},a7={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},l7={any:[/1/i,/2/i,/3/i,/4/i]},u7={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},c7={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},d7={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},h7={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},f7={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},p7={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},m7={ordinalNumber:n7({matchPattern:r7,parsePattern:i7,valueCallback:function(e){return parseInt(e,10)}}),era:ll({matchPatterns:o7,defaultMatchWidth:"wide",parsePatterns:s7,defaultParseWidth:"any"}),quarter:ll({matchPatterns:a7,defaultMatchWidth:"wide",parsePatterns:l7,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:ll({matchPatterns:u7,defaultMatchWidth:"wide",parsePatterns:c7,defaultParseWidth:"any"}),day:ll({matchPatterns:d7,defaultMatchWidth:"wide",parsePatterns:h7,defaultParseWidth:"any"}),dayPeriod:ll({matchPatterns:f7,defaultMatchWidth:"any",parsePatterns:p7,defaultParseWidth:"any"})},g7={code:"en-US",formatDistance:FD,formatLong:zD,formatRelative:HD,localize:JD,match:m7,options:{weekStartsOn:0,firstWeekContainsDate:1}},y7=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,v7=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,k7=/^'([^]*?)'?$/,_7=/''/g,E7=/[a-zA-Z]/;function w7(t,e,n){var r,i,o,s,a,l,d,f,m,E,k,T,A,S;Dt(2,arguments);var y=String(e),g=Sf(),_=(r=(i=void 0)!==null&&i!==void 0?i:g.locale)!==null&&r!==void 0?r:g7,x=Ri((o=(s=(a=(l=void 0)!==null&&l!==void 0?l:void 0)!==null&&a!==void 0?a:g.firstWeekContainsDate)!==null&&s!==void 0?s:(d=g.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(x>=1&&x<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var R=Ri((m=(E=(k=(T=void 0)!==null&&T!==void 0?T:void 0)!==null&&k!==void 0?k:g.weekStartsOn)!==null&&E!==void 0?E:(A=g.locale)===null||A===void 0||(S=A.options)===null||S===void 0?void 0:S.weekStartsOn)!==null&&m!==void 0?m:0);if(!(R>=0&&R<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!_.localize)throw new RangeError("locale must contain localize property");if(!_.formatLong)throw new RangeError("locale must contain formatLong property");var N=hr(t);if(!ED(N))throw new RangeError("Invalid time value");var w=kD(N),I=wD(N,w),P={firstWeekContainsDate:x,weekStartsOn:R,locale:_,_originalDate:N},b=y.match(v7).map(function(j){var O=j[0];if(O==="p"||O==="P"){var C=jD[O];return C(j,_.formatLong)}return j}).join("").match(y7).map(function(j){if(j==="''")return"'";var O=j[0];if(O==="'")return x7(j);var C=RD[O];if(C)return DD(j)&&B_(j,e,String(t)),OD(j)&&B_(j,e,String(t)),C(I,j,_.localize,P);if(O.match(E7))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");return j}).join("");return b}function x7(t){var e=t.match(k7);return e?e[1].replace(_7,"'"):t}var b0={exports:{}},yI={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(yI);var Ye=yI.exports,j0={exports:{}},M0={exports:{}},vI={exports:{}};(function(t){function e(n){"@babel/helpers - typeof";return t.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(vI);var kI=vI.exports,N0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(i.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+i.length+" present")}t.exports=e.default})(N0,N0.exports);var Gt=N0.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(kI),i=n(Gt);function o(s){return(0,i.default)(1,arguments),s instanceof Date||(0,r.default)(s)==="object"&&Object.prototype.toString.call(s)==="[object Date]"}t.exports=e.default})(M0,M0.exports);var T7=M0.exports,O0={exports:{}};(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(kI),i=n(Gt);function o(s){(0,i.default)(1,arguments);var a=Object.prototype.toString.call(s);return s instanceof Date||(0,r.default)(s)==="object"&&a==="[object Date]"?new Date(s.getTime()):typeof s=="number"||a==="[object Number]"?new Date(s):((typeof s=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}t.exports=e.default})(O0,O0.exports);var fr=O0.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(T7),i=n(fr),o=n(Gt);function s(a){if((0,o.default)(1,arguments),!(0,r.default)(a)&&typeof a!="number")return!1;var l=(0,i.default)(a);return!isNaN(Number(l))}t.exports=e.default})(j0,j0.exports);var I7=j0.exports,D0={exports:{}},V0={exports:{}},F0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){if(r===null||r===!0||r===!1)return NaN;var i=Number(r);return isNaN(i)?i:i<0?Math.ceil(i):Math.floor(i)}t.exports=e.default})(F0,F0.exports);var ps=F0.exports;const S7=Iu(ps);(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(ps),i=n(fr),o=n(Gt);function s(a,l){(0,o.default)(2,arguments);var d=(0,i.default)(a).getTime(),f=(0,r.default)(l);return new Date(d+f)}t.exports=e.default})(V0,V0.exports);var C7=V0.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(C7),i=n(Gt),o=n(ps);function s(a,l){(0,i.default)(2,arguments);var d=(0,o.default)(l);return(0,r.default)(a,-d)}t.exports=e.default})(D0,D0.exports);var L7=D0.exports,W0={exports:{}},U0={exports:{}};(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(fr),i=n(Gt),o=864e5;function s(a){(0,i.default)(1,arguments);var l=(0,r.default)(a),d=l.getTime();l.setUTCMonth(0,1),l.setUTCHours(0,0,0,0);var f=l.getTime(),m=d-f;return Math.floor(m/o)+1}t.exports=e.default})(U0,U0.exports);var A7=U0.exports,$0={exports:{}},z0={exports:{}};(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(fr),i=n(Gt);function o(s){(0,i.default)(1,arguments);var a=1,l=(0,r.default)(s),d=l.getUTCDay(),f=(d<a?7:0)+d-a;return l.setUTCDate(l.getUTCDate()-f),l.setUTCHours(0,0,0,0),l}t.exports=e.default})(z0,z0.exports);var Ey=z0.exports,B0={exports:{}},H0={exports:{}};(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(fr),i=n(Gt),o=n(Ey);function s(a){(0,i.default)(1,arguments);var l=(0,r.default)(a),d=l.getUTCFullYear(),f=new Date(0);f.setUTCFullYear(d+1,0,4),f.setUTCHours(0,0,0,0);var m=(0,o.default)(f),E=new Date(0);E.setUTCFullYear(d,0,4),E.setUTCHours(0,0,0,0);var k=(0,o.default)(E);return l.getTime()>=m.getTime()?d+1:l.getTime()>=k.getTime()?d:d-1}t.exports=e.default})(H0,H0.exports);var _I=H0.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(_I),i=n(Ey),o=n(Gt);function s(a){(0,o.default)(1,arguments);var l=(0,r.default)(a),d=new Date(0);d.setUTCFullYear(l,0,4),d.setUTCHours(0,0,0,0);var f=(0,i.default)(d);return f}t.exports=e.default})(B0,B0.exports);var P7=B0.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(fr),i=n(Ey),o=n(P7),s=n(Gt),a=6048e5;function l(d){(0,s.default)(1,arguments);var f=(0,r.default)(d),m=(0,i.default)(f).getTime()-(0,o.default)(f).getTime();return Math.round(m/a)+1}t.exports=e.default})($0,$0.exports);var R7=$0.exports,q0={exports:{}},Y0={exports:{}},ms={};Object.defineProperty(ms,"__esModule",{value:!0});ms.getDefaultOptions=b7;ms.setDefaultOptions=j7;var EI={};function b7(){return EI}function j7(t){EI=t}(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=n(fr),i=n(Gt),o=n(ps),s=ms;function a(l,d){var f,m,E,k,T,A,S,y;(0,i.default)(1,arguments);var g=(0,s.getDefaultOptions)(),_=(0,o.default)((f=(m=(E=(k=d==null?void 0:d.weekStartsOn)!==null&&k!==void 0?k:d==null||(T=d.locale)===null||T===void 0||(A=T.options)===null||A===void 0?void 0:A.weekStartsOn)!==null&&E!==void 0?E:g.weekStartsOn)!==null&&m!==void 0?m:(S=g.locale)===null||S===void 0||(y=S.options)===null||y===void 0?void 0:y.weekStartsOn)!==null&&f!==void 0?f:0);if(!(_>=0&&_<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var x=(0,r.default)(l),R=x.getUTCDay(),N=(R<_?7:0)+R-_;return x.setUTCDate(x.getUTCDate()-N),x.setUTCHours(0,0,0,0),x}t.exports=e.default})(Y0,Y0.exports);var wy=Y0.exports,G0={exports:{}},K0={exports:{}};(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(fr),i=n(Gt),o=n(wy),s=n(ps),a=ms;function l(d,f){var m,E,k,T,A,S,y,g;(0,i.default)(1,arguments);var _=(0,r.default)(d),x=_.getUTCFullYear(),R=(0,a.getDefaultOptions)(),N=(0,s.default)((m=(E=(k=(T=f==null?void 0:f.firstWeekContainsDate)!==null&&T!==void 0?T:f==null||(A=f.locale)===null||A===void 0||(S=A.options)===null||S===void 0?void 0:S.firstWeekContainsDate)!==null&&k!==void 0?k:R.firstWeekContainsDate)!==null&&E!==void 0?E:(y=R.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1);if(!(N>=1&&N<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(x+1,0,N),w.setUTCHours(0,0,0,0);var I=(0,o.default)(w,f),P=new Date(0);P.setUTCFullYear(x,0,N),P.setUTCHours(0,0,0,0);var b=(0,o.default)(P,f);return _.getTime()>=I.getTime()?x+1:_.getTime()>=b.getTime()?x:x-1}t.exports=e.default})(K0,K0.exports);var wI=K0.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(wI),i=n(Gt),o=n(wy),s=n(ps),a=ms;function l(d,f){var m,E,k,T,A,S,y,g;(0,i.default)(1,arguments);var _=(0,a.getDefaultOptions)(),x=(0,s.default)((m=(E=(k=(T=f==null?void 0:f.firstWeekContainsDate)!==null&&T!==void 0?T:f==null||(A=f.locale)===null||A===void 0||(S=A.options)===null||S===void 0?void 0:S.firstWeekContainsDate)!==null&&k!==void 0?k:_.firstWeekContainsDate)!==null&&E!==void 0?E:(y=_.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1),R=(0,r.default)(d,f),N=new Date(0);N.setUTCFullYear(R,0,x),N.setUTCHours(0,0,0,0);var w=(0,o.default)(N,f);return w}t.exports=e.default})(G0,G0.exports);var M7=G0.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(fr),i=n(wy),o=n(M7),s=n(Gt),a=6048e5;function l(d,f){(0,s.default)(1,arguments);var m=(0,r.default)(d),E=(0,i.default)(m,f).getTime()-(0,o.default)(m,f).getTime();return Math.round(E/a)+1}t.exports=e.default})(q0,q0.exports);var N7=q0.exports,Q0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){for(var o=r<0?"-":"",s=Math.abs(r).toString();s.length<i;)s="0"+s;return o+s}t.exports=e.default})(Q0,Q0.exports);var xI=Q0.exports,Z0={exports:{}};(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(xI),i={y:function(a,l){var d=a.getUTCFullYear(),f=d>0?d:1-d;return(0,r.default)(l==="yy"?f%100:f,l.length)},M:function(a,l){var d=a.getUTCMonth();return l==="M"?String(d+1):(0,r.default)(d+1,2)},d:function(a,l){return(0,r.default)(a.getUTCDate(),l.length)},a:function(a,l){var d=a.getUTCHours()/12>=1?"pm":"am";switch(l){case"a":case"aa":return d.toUpperCase();case"aaa":return d;case"aaaaa":return d[0];case"aaaa":default:return d==="am"?"a.m.":"p.m."}},h:function(a,l){return(0,r.default)(a.getUTCHours()%12||12,l.length)},H:function(a,l){return(0,r.default)(a.getUTCHours(),l.length)},m:function(a,l){return(0,r.default)(a.getUTCMinutes(),l.length)},s:function(a,l){return(0,r.default)(a.getUTCSeconds(),l.length)},S:function(a,l){var d=l.length,f=a.getUTCMilliseconds(),m=Math.floor(f*Math.pow(10,d-3));return(0,r.default)(m,l.length)}},o=i;e.default=o,t.exports=e.default})(Z0,Z0.exports);var O7=Z0.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(A7),i=n(R7),o=n(_I),s=n(N7),a=n(wI),l=n(xI),d=n(O7),f={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},m={G:function(y,g,_){var x=y.getUTCFullYear()>0?1:0;switch(g){case"G":case"GG":case"GGG":return _.era(x,{width:"abbreviated"});case"GGGGG":return _.era(x,{width:"narrow"});case"GGGG":default:return _.era(x,{width:"wide"})}},y:function(y,g,_){if(g==="yo"){var x=y.getUTCFullYear(),R=x>0?x:1-x;return _.ordinalNumber(R,{unit:"year"})}return d.default.y(y,g)},Y:function(y,g,_,x){var R=(0,a.default)(y,x),N=R>0?R:1-R;if(g==="YY"){var w=N%100;return(0,l.default)(w,2)}return g==="Yo"?_.ordinalNumber(N,{unit:"year"}):(0,l.default)(N,g.length)},R:function(y,g){var _=(0,o.default)(y);return(0,l.default)(_,g.length)},u:function(y,g){var _=y.getUTCFullYear();return(0,l.default)(_,g.length)},Q:function(y,g,_){var x=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"Q":return String(x);case"QQ":return(0,l.default)(x,2);case"Qo":return _.ordinalNumber(x,{unit:"quarter"});case"QQQ":return _.quarter(x,{width:"abbreviated",context:"formatting"});case"QQQQQ":return _.quarter(x,{width:"narrow",context:"formatting"});case"QQQQ":default:return _.quarter(x,{width:"wide",context:"formatting"})}},q:function(y,g,_){var x=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"q":return String(x);case"qq":return(0,l.default)(x,2);case"qo":return _.ordinalNumber(x,{unit:"quarter"});case"qqq":return _.quarter(x,{width:"abbreviated",context:"standalone"});case"qqqqq":return _.quarter(x,{width:"narrow",context:"standalone"});case"qqqq":default:return _.quarter(x,{width:"wide",context:"standalone"})}},M:function(y,g,_){var x=y.getUTCMonth();switch(g){case"M":case"MM":return d.default.M(y,g);case"Mo":return _.ordinalNumber(x+1,{unit:"month"});case"MMM":return _.month(x,{width:"abbreviated",context:"formatting"});case"MMMMM":return _.month(x,{width:"narrow",context:"formatting"});case"MMMM":default:return _.month(x,{width:"wide",context:"formatting"})}},L:function(y,g,_){var x=y.getUTCMonth();switch(g){case"L":return String(x+1);case"LL":return(0,l.default)(x+1,2);case"Lo":return _.ordinalNumber(x+1,{unit:"month"});case"LLL":return _.month(x,{width:"abbreviated",context:"standalone"});case"LLLLL":return _.month(x,{width:"narrow",context:"standalone"});case"LLLL":default:return _.month(x,{width:"wide",context:"standalone"})}},w:function(y,g,_,x){var R=(0,s.default)(y,x);return g==="wo"?_.ordinalNumber(R,{unit:"week"}):(0,l.default)(R,g.length)},I:function(y,g,_){var x=(0,i.default)(y);return g==="Io"?_.ordinalNumber(x,{unit:"week"}):(0,l.default)(x,g.length)},d:function(y,g,_){return g==="do"?_.ordinalNumber(y.getUTCDate(),{unit:"date"}):d.default.d(y,g)},D:function(y,g,_){var x=(0,r.default)(y);return g==="Do"?_.ordinalNumber(x,{unit:"dayOfYear"}):(0,l.default)(x,g.length)},E:function(y,g,_){var x=y.getUTCDay();switch(g){case"E":case"EE":case"EEE":return _.day(x,{width:"abbreviated",context:"formatting"});case"EEEEE":return _.day(x,{width:"narrow",context:"formatting"});case"EEEEEE":return _.day(x,{width:"short",context:"formatting"});case"EEEE":default:return _.day(x,{width:"wide",context:"formatting"})}},e:function(y,g,_,x){var R=y.getUTCDay(),N=(R-x.weekStartsOn+8)%7||7;switch(g){case"e":return String(N);case"ee":return(0,l.default)(N,2);case"eo":return _.ordinalNumber(N,{unit:"day"});case"eee":return _.day(R,{width:"abbreviated",context:"formatting"});case"eeeee":return _.day(R,{width:"narrow",context:"formatting"});case"eeeeee":return _.day(R,{width:"short",context:"formatting"});case"eeee":default:return _.day(R,{width:"wide",context:"formatting"})}},c:function(y,g,_,x){var R=y.getUTCDay(),N=(R-x.weekStartsOn+8)%7||7;switch(g){case"c":return String(N);case"cc":return(0,l.default)(N,g.length);case"co":return _.ordinalNumber(N,{unit:"day"});case"ccc":return _.day(R,{width:"abbreviated",context:"standalone"});case"ccccc":return _.day(R,{width:"narrow",context:"standalone"});case"cccccc":return _.day(R,{width:"short",context:"standalone"});case"cccc":default:return _.day(R,{width:"wide",context:"standalone"})}},i:function(y,g,_){var x=y.getUTCDay(),R=x===0?7:x;switch(g){case"i":return String(R);case"ii":return(0,l.default)(R,g.length);case"io":return _.ordinalNumber(R,{unit:"day"});case"iii":return _.day(x,{width:"abbreviated",context:"formatting"});case"iiiii":return _.day(x,{width:"narrow",context:"formatting"});case"iiiiii":return _.day(x,{width:"short",context:"formatting"});case"iiii":default:return _.day(x,{width:"wide",context:"formatting"})}},a:function(y,g,_){var x=y.getUTCHours(),R=x/12>=1?"pm":"am";switch(g){case"a":case"aa":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"aaa":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return _.dayPeriod(R,{width:"narrow",context:"formatting"});case"aaaa":default:return _.dayPeriod(R,{width:"wide",context:"formatting"})}},b:function(y,g,_){var x=y.getUTCHours(),R;switch(x===12?R=f.noon:x===0?R=f.midnight:R=x/12>=1?"pm":"am",g){case"b":case"bb":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"bbb":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return _.dayPeriod(R,{width:"narrow",context:"formatting"});case"bbbb":default:return _.dayPeriod(R,{width:"wide",context:"formatting"})}},B:function(y,g,_){var x=y.getUTCHours(),R;switch(x>=17?R=f.evening:x>=12?R=f.afternoon:x>=4?R=f.morning:R=f.night,g){case"B":case"BB":case"BBB":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"BBBBB":return _.dayPeriod(R,{width:"narrow",context:"formatting"});case"BBBB":default:return _.dayPeriod(R,{width:"wide",context:"formatting"})}},h:function(y,g,_){if(g==="ho"){var x=y.getUTCHours()%12;return x===0&&(x=12),_.ordinalNumber(x,{unit:"hour"})}return d.default.h(y,g)},H:function(y,g,_){return g==="Ho"?_.ordinalNumber(y.getUTCHours(),{unit:"hour"}):d.default.H(y,g)},K:function(y,g,_){var x=y.getUTCHours()%12;return g==="Ko"?_.ordinalNumber(x,{unit:"hour"}):(0,l.default)(x,g.length)},k:function(y,g,_){var x=y.getUTCHours();return x===0&&(x=24),g==="ko"?_.ordinalNumber(x,{unit:"hour"}):(0,l.default)(x,g.length)},m:function(y,g,_){return g==="mo"?_.ordinalNumber(y.getUTCMinutes(),{unit:"minute"}):d.default.m(y,g)},s:function(y,g,_){return g==="so"?_.ordinalNumber(y.getUTCSeconds(),{unit:"second"}):d.default.s(y,g)},S:function(y,g){return d.default.S(y,g)},X:function(y,g,_,x){var R=x._originalDate||y,N=R.getTimezoneOffset();if(N===0)return"Z";switch(g){case"X":return k(N);case"XXXX":case"XX":return T(N);case"XXXXX":case"XXX":default:return T(N,":")}},x:function(y,g,_,x){var R=x._originalDate||y,N=R.getTimezoneOffset();switch(g){case"x":return k(N);case"xxxx":case"xx":return T(N);case"xxxxx":case"xxx":default:return T(N,":")}},O:function(y,g,_,x){var R=x._originalDate||y,N=R.getTimezoneOffset();switch(g){case"O":case"OO":case"OOO":return"GMT"+E(N,":");case"OOOO":default:return"GMT"+T(N,":")}},z:function(y,g,_,x){var R=x._originalDate||y,N=R.getTimezoneOffset();switch(g){case"z":case"zz":case"zzz":return"GMT"+E(N,":");case"zzzz":default:return"GMT"+T(N,":")}},t:function(y,g,_,x){var R=x._originalDate||y,N=Math.floor(R.getTime()/1e3);return(0,l.default)(N,g.length)},T:function(y,g,_,x){var R=x._originalDate||y,N=R.getTime();return(0,l.default)(N,g.length)}};function E(S,y){var g=S>0?"-":"+",_=Math.abs(S),x=Math.floor(_/60),R=_%60;if(R===0)return g+String(x);var N=y;return g+String(x)+N+(0,l.default)(R,2)}function k(S,y){if(S%60===0){var g=S>0?"-":"+";return g+(0,l.default)(Math.abs(S)/60,2)}return T(S,y)}function T(S,y){var g=y||"",_=S>0?"-":"+",x=Math.abs(S),R=(0,l.default)(Math.floor(x/60),2),N=(0,l.default)(x%60,2);return _+R+g+N}var A=m;e.default=A,t.exports=e.default})(W0,W0.exports);var D7=W0.exports,X0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(l,d){switch(l){case"P":return d.date({width:"short"});case"PP":return d.date({width:"medium"});case"PPP":return d.date({width:"long"});case"PPPP":default:return d.date({width:"full"})}},r=function(l,d){switch(l){case"p":return d.time({width:"short"});case"pp":return d.time({width:"medium"});case"ppp":return d.time({width:"long"});case"pppp":default:return d.time({width:"full"})}},i=function(l,d){var f=l.match(/(P+)(p+)?/)||[],m=f[1],E=f[2];if(!E)return n(l,d);var k;switch(m){case"P":k=d.dateTime({width:"short"});break;case"PP":k=d.dateTime({width:"medium"});break;case"PPP":k=d.dateTime({width:"long"});break;case"PPPP":default:k=d.dateTime({width:"full"});break}return k.replace("{{date}}",n(m,d)).replace("{{time}}",r(E,d))},o={p:r,P:i},s=o;e.default=s,t.exports=e.default})(X0,X0.exports);var V7=X0.exports,J0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){var i=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return i.setUTCFullYear(r.getFullYear()),r.getTime()-i.getTime()}t.exports=e.default})(J0,J0.exports);var TI=J0.exports;const H_=Iu(TI);var Hu={};Object.defineProperty(Hu,"__esModule",{value:!0});Hu.isProtectedDayOfYearToken=U7;Hu.isProtectedWeekYearToken=$7;Hu.throwProtectedError=z7;var F7=["D","DD"],W7=["YY","YYYY"];function U7(t){return F7.indexOf(t)!==-1}function $7(t){return W7.indexOf(t)!==-1}function z7(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var eg={exports:{}},tg={exports:{}},ng={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},r=function(s,a,l){var d,f=n[s];return typeof f=="string"?d=f:a===1?d=f.one:d=f.other.replace("{{count}}",a.toString()),l!=null&&l.addSuffix?l.comparison&&l.comparison>0?"in "+d:d+" ago":d},i=r;e.default=i,t.exports=e.default})(ng,ng.exports);var B7=ng.exports,rg={exports:{}},ig={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.width?String(i.width):r.defaultWidth,s=r.formats[o]||r.formats[r.defaultWidth];return s}}t.exports=e.default})(ig,ig.exports);var H7=ig.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(H7),i={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},o={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},s={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},a={date:(0,r.default)({formats:i,defaultWidth:"full"}),time:(0,r.default)({formats:o,defaultWidth:"full"}),dateTime:(0,r.default)({formats:s,defaultWidth:"full"})},l=a;e.default=l,t.exports=e.default})(rg,rg.exports);var q7=rg.exports,og={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},r=function(s,a,l,d){return n[s]},i=r;e.default=i,t.exports=e.default})(og,og.exports);var Y7=og.exports,sg={exports:{}},ag={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i,o){var s=o!=null&&o.context?String(o.context):"standalone",a;if(s==="formatting"&&r.formattingValues){var l=r.defaultFormattingWidth||r.defaultWidth,d=o!=null&&o.width?String(o.width):l;a=r.formattingValues[d]||r.formattingValues[l]}else{var f=r.defaultWidth,m=o!=null&&o.width?String(o.width):r.defaultWidth;a=r.values[m]||r.values[f]}var E=r.argumentCallback?r.argumentCallback(i):i;return a[E]}}t.exports=e.default})(ag,ag.exports);var G7=ag.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(G7),i={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},o={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},s={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},a={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},l={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},d={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},f=function(T,A){var S=Number(T),y=S%100;if(y>20||y<10)switch(y%10){case 1:return S+"st";case 2:return S+"nd";case 3:return S+"rd"}return S+"th"},m={ordinalNumber:f,era:(0,r.default)({values:i,defaultWidth:"wide"}),quarter:(0,r.default)({values:o,defaultWidth:"wide",argumentCallback:function(T){return T-1}}),month:(0,r.default)({values:s,defaultWidth:"wide"}),day:(0,r.default)({values:a,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:l,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"})},E=m;e.default=E,t.exports=e.default})(sg,sg.exports);var K7=sg.exports,lg={exports:{}},ug={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(o){return function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.width,d=l&&o.matchPatterns[l]||o.matchPatterns[o.defaultMatchWidth],f=s.match(d);if(!f)return null;var m=f[0],E=l&&o.parsePatterns[l]||o.parsePatterns[o.defaultParseWidth],k=Array.isArray(E)?i(E,function(S){return S.test(m)}):r(E,function(S){return S.test(m)}),T;T=o.valueCallback?o.valueCallback(k):k,T=a.valueCallback?a.valueCallback(T):T;var A=s.slice(m.length);return{value:T,rest:A}}}function r(o,s){for(var a in o)if(o.hasOwnProperty(a)&&s(o[a]))return a}function i(o,s){for(var a=0;a<o.length;a++)if(s(o[a]))return a}t.exports=e.default})(ug,ug.exports);var Q7=ug.exports,cg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.match(r.matchPattern);if(!s)return null;var a=s[0],l=i.match(r.parsePattern);if(!l)return null;var d=r.valueCallback?r.valueCallback(l[0]):l[0];d=o.valueCallback?o.valueCallback(d):d;var f=i.slice(a.length);return{value:d,rest:f}}}t.exports=e.default})(cg,cg.exports);var Z7=cg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(Q7),i=n(Z7),o=/^(\d+)(th|st|nd|rd)?/i,s=/\d+/i,a={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},l={any:[/^b/i,/^(a|c)/i]},d={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},f={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},E={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},k={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},T={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},A={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},S={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},y={ordinalNumber:(0,i.default)({matchPattern:o,parsePattern:s,valueCallback:function(x){return parseInt(x,10)}}),era:(0,r.default)({matchPatterns:a,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(x){return x+1}}),month:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:k,defaultMatchWidth:"wide",parsePatterns:T,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:A,defaultMatchWidth:"any",parsePatterns:S,defaultParseWidth:"any"})},g=y;e.default=g,t.exports=e.default})(lg,lg.exports);var X7=lg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(B7),i=n(q7),o=n(Y7),s=n(K7),a=n(X7),l={code:"en-US",formatDistance:r.default,formatLong:i.default,formatRelative:o.default,localize:s.default,match:a.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},d=l;e.default=d,t.exports=e.default})(tg,tg.exports);var J7=tg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(J7),i=r.default;e.default=i,t.exports=e.default})(eg,eg.exports);var eV=eg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=_;var r=n(I7),i=n(L7),o=n(fr),s=n(D7),a=n(V7),l=n(TI),d=Hu,f=n(ps),m=n(Gt),E=ms,k=n(eV),T=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,A=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,S=/^'([^]*?)'?$/,y=/''/g,g=/[a-zA-Z]/;function _(R,N,w){var I,P,b,j,O,C,K,ie,ee,z,$,G,J,le,ne,he,Fe,Pe;(0,m.default)(2,arguments);var Qe=String(N),We=(0,E.getDefaultOptions)(),xt=(I=(P=w==null?void 0:w.locale)!==null&&P!==void 0?P:We.locale)!==null&&I!==void 0?I:k.default,Vt=(0,f.default)((b=(j=(O=(C=w==null?void 0:w.firstWeekContainsDate)!==null&&C!==void 0?C:w==null||(K=w.locale)===null||K===void 0||(ie=K.options)===null||ie===void 0?void 0:ie.firstWeekContainsDate)!==null&&O!==void 0?O:We.firstWeekContainsDate)!==null&&j!==void 0?j:(ee=We.locale)===null||ee===void 0||(z=ee.options)===null||z===void 0?void 0:z.firstWeekContainsDate)!==null&&b!==void 0?b:1);if(!(Vt>=1&&Vt<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Kt=(0,f.default)(($=(G=(J=(le=w==null?void 0:w.weekStartsOn)!==null&&le!==void 0?le:w==null||(ne=w.locale)===null||ne===void 0||(he=ne.options)===null||he===void 0?void 0:he.weekStartsOn)!==null&&J!==void 0?J:We.weekStartsOn)!==null&&G!==void 0?G:(Fe=We.locale)===null||Fe===void 0||(Pe=Fe.options)===null||Pe===void 0?void 0:Pe.weekStartsOn)!==null&&$!==void 0?$:0);if(!(Kt>=0&&Kt<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!xt.localize)throw new RangeError("locale must contain localize property");if(!xt.formatLong)throw new RangeError("locale must contain formatLong property");var Tt=(0,o.default)(R);if(!(0,r.default)(Tt))throw new RangeError("Invalid time value");var It=(0,l.default)(Tt),Ui=(0,i.default)(Tt,It),$i={firstWeekContainsDate:Vt,weekStartsOn:Kt,locale:xt,_originalDate:Tt},zi=Qe.match(A).map(function(ot){var D=ot[0];if(D==="p"||D==="P"){var ce=a.default[D];return ce(ot,xt.formatLong)}return ot}).join("").match(T).map(function(ot){if(ot==="''")return"'";var D=ot[0];if(D==="'")return x(ot);var ce=s.default[D];if(ce)return!(w!=null&&w.useAdditionalWeekYearTokens)&&(0,d.isProtectedWeekYearToken)(ot)&&(0,d.throwProtectedError)(ot,N,String(R)),!(w!=null&&w.useAdditionalDayOfYearTokens)&&(0,d.isProtectedDayOfYearToken)(ot)&&(0,d.throwProtectedError)(ot,N,String(R)),ce(Ui,ot,xt.localize,$i);if(D.match(g))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return ot}).join("");return zi}function x(R){var N=R.match(S);return N?N[1].replace(y,"'"):R}t.exports=e.default})(b0,b0.exports);var tV=b0.exports;const nV=Iu(tV);function q_(t,e,n){var r=oV(t,n.timeZone,n.locale);return r.formatToParts?rV(r,e):iV(r,e)}function rV(t,e){for(var n=t.formatToParts(e),r=n.length-1;r>=0;--r)if(n[r].type==="timeZoneName")return n[r].value}function iV(t,e){var n=t.format(e).replace(/\u200E/g,""),r=/ [\w-+ ]+$/.exec(n);return r?r[0].substr(1):""}function oV(t,e,n){if(n&&!n.code)throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");return new Intl.DateTimeFormat(n?[n.code,"en-US"]:void 0,{timeZone:e,timeZoneName:t})}function sV(t,e){var n=cV(e);return n.formatToParts?lV(n,t):uV(n,t)}var aV={year:0,month:1,day:2,hour:3,minute:4,second:5};function lV(t,e){try{for(var n=t.formatToParts(e),r=[],i=0;i<n.length;i++){var o=aV[n[i].type];o>=0&&(r[o]=parseInt(n[i].value,10))}return r}catch(s){if(s instanceof RangeError)return[NaN];throw s}}function uV(t,e){var n=t.format(e),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[r[3],r[1],r[2],r[4],r[5],r[6]]}var $p={};function cV(t){if(!$p[t]){var e=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n=e==="06/25/2014, 00:00:00"||e==="‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";$p[t]=n?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return $p[t]}function xy(t,e,n,r,i,o,s){var a=new Date(0);return a.setUTCFullYear(t,e,n),a.setUTCHours(r,i,o,s),a}var Y_=36e5,dV=6e4,zp={timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function Cf(t,e,n){var r,i;if(!t||(r=zp.timezoneZ.exec(t),r))return 0;var o;if(r=zp.timezoneHH.exec(t),r)return o=parseInt(r[1],10),G_(o)?-(o*Y_):NaN;if(r=zp.timezoneHHMM.exec(t),r){o=parseInt(r[2],10);var s=parseInt(r[3],10);return G_(o,s)?(i=Math.abs(o)*Y_+s*dV,r[1]==="+"?-i:i):NaN}if(pV(t)){e=new Date(e||Date.now());var a=n?e:hV(e),l=dg(a,t),d=n?l:fV(e,l,t);return-d}return NaN}function hV(t){return xy(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}function dg(t,e){var n=sV(t,e),r=xy(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime(),i=t.getTime(),o=i%1e3;return i-=o>=0?o:1e3+o,r-i}function fV(t,e,n){var r=t.getTime(),i=r-e,o=dg(new Date(i),n);if(e===o)return e;i-=o-e;var s=dg(new Date(i),n);return o===s?o:Math.max(o,s)}function G_(t,e){return-23<=t&&t<=23&&(e==null||0<=e&&e<=59)}var K_={};function pV(t){if(K_[t])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:t}),K_[t]=!0,!0}catch{return!1}}var mV=60*1e3,gV={X:function(t,e,n,r){var i=Bp(r.timeZone,t);if(i===0)return"Z";switch(e){case"X":return Q_(i);case"XXXX":case"XX":return Rs(i);case"XXXXX":case"XXX":default:return Rs(i,":")}},x:function(t,e,n,r){var i=Bp(r.timeZone,t);switch(e){case"x":return Q_(i);case"xxxx":case"xx":return Rs(i);case"xxxxx":case"xxx":default:return Rs(i,":")}},O:function(t,e,n,r){var i=Bp(r.timeZone,t);switch(e){case"O":case"OO":case"OOO":return"GMT"+yV(i,":");case"OOOO":default:return"GMT"+Rs(i,":")}},z:function(t,e,n,r){switch(e){case"z":case"zz":case"zzz":return q_("short",t,r);case"zzzz":default:return q_("long",t,r)}}};function Bp(t,e){var n=t?Cf(t,e,!0)/mV:e.getTimezoneOffset();if(Number.isNaN(n))throw new RangeError("Invalid time zone specified: "+t);return n}function Th(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}function Rs(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=Th(Math.floor(i/60),2),s=Th(Math.floor(i%60),2);return r+o+n+s}function Q_(t,e){if(t%60===0){var n=t>0?"-":"+";return n+Th(Math.abs(t)/60,2)}return Rs(t,e)}function yV(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+Th(o,2)}var II=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,Hp=36e5,Z_=6e4,vV=2,zt={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:II};function Ih(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(t===null)return new Date(NaN);var n=e||{},r=n.additionalDigits==null?vV:S7(n.additionalDigits);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]")return new Date(t.getTime());if(typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]")return new Date(t);if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var i=kV(t),o=_V(i.date,r),s=o.year,a=o.restDateString,l=EV(a,s);if(isNaN(l))return new Date(NaN);if(l){var d=l.getTime(),f=0,m;if(i.time&&(f=wV(i.time),isNaN(f)))return new Date(NaN);if(i.timeZone||n.timeZone){if(m=Cf(i.timeZone||n.timeZone,new Date(d+f)),isNaN(m))return new Date(NaN)}else m=H_(new Date(d+f)),m=H_(new Date(d+f+m));return new Date(d+f+m)}else return new Date(NaN)}function kV(t){var e={},n=zt.dateTimePattern.exec(t),r;if(n?(e.date=n[1],r=n[3]):(n=zt.datePattern.exec(t),n?(e.date=n[1],r=n[2]):(e.date=null,r=t)),r){var i=zt.timeZone.exec(r);i?(e.time=r.replace(i[1],""),e.timeZone=i[1].trim()):e.time=r}return e}function _V(t,e){var n=zt.YYY[e],r=zt.YYYYY[e],i;if(i=zt.YYYY.exec(t)||r.exec(t),i){var o=i[1];return{year:parseInt(o,10),restDateString:t.slice(o.length)}}if(i=zt.YY.exec(t)||n.exec(t),i){var s=i[1];return{year:parseInt(s,10)*100,restDateString:t.slice(s.length)}}return{year:null}}function EV(t,e){if(e===null)return null;var n,r,i,o;if(t.length===0)return r=new Date(0),r.setUTCFullYear(e),r;if(n=zt.MM.exec(t),n)return r=new Date(0),i=parseInt(n[1],10)-1,J_(e,i)?(r.setUTCFullYear(e,i),r):new Date(NaN);if(n=zt.DDD.exec(t),n){r=new Date(0);var s=parseInt(n[1],10);return IV(e,s)?(r.setUTCFullYear(e,0,s),r):new Date(NaN)}if(n=zt.MMDD.exec(t),n){r=new Date(0),i=parseInt(n[1],10)-1;var a=parseInt(n[2],10);return J_(e,i,a)?(r.setUTCFullYear(e,i,a),r):new Date(NaN)}if(n=zt.Www.exec(t),n)return o=parseInt(n[1],10)-1,eE(e,o)?X_(e,o):new Date(NaN);if(n=zt.WwwD.exec(t),n){o=parseInt(n[1],10)-1;var l=parseInt(n[2],10)-1;return eE(e,o,l)?X_(e,o,l):new Date(NaN)}return null}function wV(t){var e,n,r;if(e=zt.HH.exec(t),e)return n=parseFloat(e[1].replace(",",".")),qp(n)?n%24*Hp:NaN;if(e=zt.HHMM.exec(t),e)return n=parseInt(e[1],10),r=parseFloat(e[2].replace(",",".")),qp(n,r)?n%24*Hp+r*Z_:NaN;if(e=zt.HHMMSS.exec(t),e){n=parseInt(e[1],10),r=parseInt(e[2],10);var i=parseFloat(e[3].replace(",","."));return qp(n,r,i)?n%24*Hp+r*Z_+i*1e3:NaN}return null}function X_(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var i=r.getUTCDay()||7,o=e*7+n+1-i;return r.setUTCDate(r.getUTCDate()+o),r}var xV=[31,28,31,30,31,30,31,31,30,31,30,31],TV=[31,29,31,30,31,30,31,31,30,31,30,31];function SI(t){return t%400===0||t%4===0&&t%100!==0}function J_(t,e,n){if(e<0||e>11)return!1;if(n!=null){if(n<1)return!1;var r=SI(t);if(r&&n>TV[e]||!r&&n>xV[e])return!1}return!0}function IV(t,e){if(e<1)return!1;var n=SI(t);return!(n&&e>366||!n&&e>365)}function eE(t,e,n){return!(e<0||e>52||n!=null&&(n<0||n>6))}function qp(t,e,n){return!(t!=null&&(t<0||t>=25)||e!=null&&(e<0||e>=60)||n!=null&&(n<0||n>=60))}var SV=/([xXOz]+)|''|'(''|[^'])+('|$)/g;function CV(t,e,n){var r=String(e),i=n||{},o=r.match(SV);if(o){var s=Ih(i.originalDate||t,i);r=o.reduce(function(a,l){if(l[0]==="'")return a;var d=a.indexOf(l),f=a[d-1]==="'",m=a.replace(l,"'"+gV[l[0]](s,l,null,i)+"'");return f?m.substring(0,d-1)+m.substring(d+1):m},r)}return nV(t,r,i)}var hg={exports:{}},fg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o]);return r}t.exports=e.default})(fg,fg.exports);var LV=fg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(LV);function i(o){return(0,r.default)({},o)}t.exports=e.default})(hg,hg.exports);var AV=hg.exports;const PV=Iu(AV);function RV(t,e,n){var r=Ih(t,n),i=Cf(e,r,!0),o=new Date(r.getTime()-i),s=new Date(0);return s.setFullYear(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()),s.setHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),s}function bV(t,e,n){if(typeof t=="string"&&!t.match(II)){var r=PV(n);return r.timeZone=e,Ih(t,r)}var i=Ih(t,n),o=xy(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()).getTime(),s=Cf(e,new Date(o));return new Date(o+s)}const tE=V.table`
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
`,nE=V.div`
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
`,rE=V.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #666;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px dashed #ddd;
`,jV=({user:t,userData:e})=>{const[n,r]=M.useState(null),[i,o]=M.useState(!0),[s,a]=M.useState(null),{use24HourFormat:l}=_y(),d=(e==null?void 0:e.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila";M.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{if(o(!0),e&&e.schedule&&Array.isArray(e.schedule)&&e.schedule.length>0)console.log("Using schedule from userData prop:",e.schedule),r(e.schedule);else{const T=lt(xe,"users",t.uid),A=await gu(T);if(A.exists()){const S=A.data();if(S.schedule&&Array.isArray(S.schedule)&&S.schedule.length>0)console.log("Found user schedule in Firestore:",S.schedule),r(S.schedule);else if(S.scheduleId){const y=S.scheduleId,g=lt(xe,"schedules",y),_=await gu(g);_.exists()&&r(_.data())}else{const y=Tn(xe,"schedules"),g=Sr(y,ai("isDefault","==",!0)),_=await Wn(g);_.empty||r(_.docs[0].data())}}}}catch(T){console.error("Error fetching schedule:",T),a("Failed to load schedule. Please try again later.")}finally{o(!1)}})()},[t,e]);const f=k=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][k],m=(k,T=null,A=d)=>{if(!k)return"N/A";try{if(!T||T===A){const[w,I]=k.split(":"),P=new Date;return P.setHours(parseInt(w,10)),P.setMinutes(parseInt(I,10)),P.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!l})}const[S,y]=k.split(":"),g=new Date;g.setHours(0,0,0,0);const _=new Date(g);_.setHours(parseInt(S,10),parseInt(y,10),0,0);const x=bV(_,T),R=RV(x,A);return CV(R,l?"HH:mm":"h:mm a",{timeZone:A})}catch(S){return console.error("Error formatting time:",S),k}},E=(k,T,A)=>{try{const[S,y]=k.split(":").map(Number),g=new Date;g.setHours(0,0,0,0);const _=new Date(g);_.setHours(S,y,0,0);const x=yD(_,T);return w7(x,"HH:mm")}catch(S){console.error("Error calculating end time:",S);let y=(parseInt(k.split(":")[0],10)+T)%24,g=k.split(":")[1];return`${y.toString().padStart(2,"0")}:${g}`}};return h.jsxs(xi,{children:[h.jsx(Ti,{children:"My Schedule"}),h.jsx(Ii,{children:i?h.jsx("p",{children:"Loading your schedule..."}):s?h.jsxs(rE,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx(Fn,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]}):n?h.jsx("div",{children:Array.isArray(n)?h.jsxs(h.Fragment,{children:[h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.map((k,T)=>{const A=new Date,y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(k.dayOfWeek),g=A.getDay()===y,_=k.timeRegion||"Asia/Manila",x=m(k.timeIn,_,d),R=k.shiftDuration||8,N=E(k.timeIn,R),w=m(N,_,d);return h.jsxs(nE,{isToday:g,children:[h.jsxs("h3",{children:[h.jsx(Fn,{weight:"fill",size:20,style:{color:g?"#1a73e8":"#666"}}),k.dayOfWeek]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx(ui,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:x}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(ku,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx(ui,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:w}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"0.75rem",backgroundColor:"#f9f9f9",borderRadius:"8px",fontSize:"0.9rem"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Duration"}),h.jsxs("div",{children:[k.shiftDuration," hours"]})]}),h.jsxs("div",{style:{textAlign:"right"},children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Time Zone"}),h.jsx("div",{style:{fontSize:"0.85rem"},children:d})]})]})]},T)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs(tE,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.map((k,T)=>{const A=new Date,y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(k.dayOfWeek),g=A.getDay()===y,_=k.timeRegion||"Asia/Manila",x=m(k.timeIn,_,d),R=k.shiftDuration||8,N=E(k.timeIn,R),w=m(N,_,d);return h.jsxs("tr",{style:{backgroundColor:g?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:g?"600":"400",color:g?"#1a73e8":"inherit"},children:[k.dayOfWeek,g&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:x}),h.jsx("td",{children:w}),h.jsxs("td",{children:[k.shiftDuration," hours"]})]},T)})})]}),h.jsxs("div",{style:{marginTop:"1rem",fontSize:"0.85rem",color:"#666",textAlign:"right"},children:["All times shown in your local time zone: ",h.jsx("strong",{children:d})]})]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:{marginBottom:"1.5rem",padding:"1rem",backgroundColor:"#f9f9f9",borderRadius:"8px",borderLeft:"4px solid #4CAF50"},children:[h.jsxs("h3",{style:{margin:"0 0 0.5rem 0",display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Fn,{weight:"fill",size:20,style:{color:"#4CAF50"}}),n.name||"Standard Schedule"]}),h.jsx("p",{style:{margin:0,color:"#666"},children:"Your assigned work schedule"})]}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.shifts&&n.shifts.map((k,T)=>{const S=new Date().getDay()===k.day;return h.jsxs(nE,{isToday:S,children:[h.jsxs("h3",{children:[h.jsx(Fn,{weight:"fill",size:20,style:{color:S?"#1a73e8":"#666"}}),f(k.day)]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx(ui,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:m(k.timeIn)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(ku,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx(ui,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:m(k.timeOut)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]})]},T)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs(tE,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.shifts&&n.shifts.map((k,T)=>{const S=new Date().getDay()===k.day,y=k.timeIn.split(":").map(Number),g=k.timeOut.split(":").map(Number),_=y[0]+y[1]/60;let R=g[0]+g[1]/60-_;R<0&&(R+=24);const N=Math.round(R*10)/10;return h.jsxs("tr",{style:{backgroundColor:S?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:S?"600":"400",color:S?"#1a73e8":"inherit"},children:[f(k.day),S&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:m(k.timeIn)}),h.jsx("td",{children:m(k.timeOut)}),h.jsxs("td",{children:[N," hours"]})]},T)})})]})]})]})}):h.jsxs(rE,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx(Fn,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]})})]})},Dc=V.div`
  margin-bottom: 1.5rem;
`,Qt=V.p`
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`,Zt=V.strong`
  min-width: 120px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
`,Vc=V.h3`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,Xt=V.span`
  color: #333;
  word-break: break-word;
`,MV=({user:t,userData:e,loadingUserData:n})=>{const r=i=>{try{return i!=null&&i.seconds?new Date(i.seconds*1e3).toLocaleString():i!=null&&i.toDate?i.toDate().toLocaleString():i instanceof Date?i.toLocaleString():typeof i=="string"?new Date(i).toLocaleString():"Not specified"}catch(o){return console.error("Error formatting timestamp:",o),"Not specified"}};return h.jsxs(xi,{children:[h.jsx(Ti,{children:"User Profile"}),h.jsx(Ii,{children:n?h.jsx("p",{children:"Loading user data..."}):h.jsxs(h.Fragment,{children:[h.jsxs(Dc,{children:[h.jsxs(Vc,{children:[h.jsx(Eu,{size:20,weight:"bold"}),"Basic Information"]}),h.jsxs(Qt,{children:[h.jsxs(Zt,{children:[h.jsx(sI,{size:18}),"User ID:"]}),h.jsx(Xt,{children:(e==null?void 0:e.userId)||(t==null?void 0:t.uid)})]}),h.jsxs(Qt,{children:[h.jsxs(Zt,{children:[h.jsx(If,{size:18}),"Email:"]}),h.jsx(Xt,{children:t==null?void 0:t.email})]}),h.jsxs(Qt,{children:[h.jsxs(Zt,{children:[h.jsx(wi,{size:18}),"Name:"]}),h.jsx(Xt,{children:(e==null?void 0:e.name)||(t==null?void 0:t.displayName)})]}),h.jsxs(Qt,{children:[h.jsxs(Zt,{children:[h.jsx(yy,{size:18}),"Position:"]}),h.jsx(Xt,{children:(e==null?void 0:e.position)||"Not specified"})]}),h.jsxs(Qt,{children:[h.jsxs(Zt,{children:[h.jsx(Eu,{size:18}),"Role:"]}),h.jsx(Xt,{children:(e==null?void 0:e.role)||"Not specified"})]}),h.jsxs(Qt,{children:[h.jsxs(Zt,{children:[h.jsx(ni,{size:18}),"Status:"]}),h.jsx(Xt,{children:h.jsx("span",{style:{display:"inline-block",padding:"0.25rem 0.5rem",borderRadius:"4px",fontSize:"0.85rem",fontWeight:"600",backgroundColor:(e==null?void 0:e.status)==="active"?"#e6f7ed":"#ffebee",color:(e==null?void 0:e.status)==="active"?"#4caf50":"#f44336"},children:(e==null?void 0:e.status)||"active"})})]})]}),h.jsxs(Dc,{children:[h.jsxs(Vc,{children:[h.jsx(L0,{size:20,weight:"bold"}),"Contact Information"]}),h.jsxs(Qt,{children:[h.jsxs(Zt,{children:[h.jsx(L0,{size:18}),"Address:"]}),h.jsx(Xt,{children:(e==null?void 0:e.address)||"Not specified"})]}),h.jsxs(Qt,{children:[h.jsxs(Zt,{children:[h.jsx(P0,{size:18}),"Phone Number:"]}),h.jsx(Xt,{children:(e==null?void 0:e.phoneNumber)||(e==null?void 0:e.contactNumber)||"Not specified"})]}),h.jsxs(Qt,{children:[h.jsxs(Zt,{children:[h.jsx(Fn,{size:18}),"Date of Birth:"]}),h.jsx(Xt,{children:(e==null?void 0:e.dateOfBirth)||"Not specified"})]})]}),h.jsxs(Dc,{children:[h.jsxs(Vc,{children:[h.jsx(C0,{size:20,weight:"bold"}),"Emergency Contact"]}),h.jsxs(Qt,{children:[h.jsxs(Zt,{children:[h.jsx(wi,{size:18}),"Name:"]}),h.jsx(Xt,{children:(e==null?void 0:e.emergencyContactName)||"Not specified"})]}),h.jsxs(Qt,{children:[h.jsxs(Zt,{children:[h.jsx(P0,{size:18}),"Phone:"]}),h.jsx(Xt,{children:(e==null?void 0:e.emergencyContactPhone)||"Not specified"})]}),h.jsxs(Qt,{children:[h.jsxs(Zt,{children:[h.jsx(C0,{size:18}),"Relationship:"]}),h.jsx(Xt,{children:(e==null?void 0:e.emergencyContactRelationship)||"Not specified"})]})]}),h.jsxs(Dc,{children:[h.jsxs(Vc,{children:[h.jsx(ui,{size:20,weight:"bold"}),"Account Information"]}),h.jsxs(Qt,{children:[h.jsxs(Zt,{children:[h.jsx(Fn,{size:18}),"Created At:"]}),h.jsx(Xt,{children:e!=null&&e.createdAt?r(e.createdAt):"Not specified"})]}),(e==null?void 0:e.timeRegion)&&h.jsxs(Qt,{children:[h.jsxs(Zt,{children:[h.jsx(ui,{size:18}),"Time Region:"]}),h.jsx(Xt,{children:e.timeRegion.replace("_"," ")})]})]})]})})]})},NV=V.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,OV=V.div`
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
`,DV=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,VV=V.h3`
  font-size: 1.1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,FV=V.span`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,WV=V.div`
  margin-bottom: 1.5rem;
`,Yp=V.div`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
`,Gp=V.span`
  font-weight: 500;
  width: 120px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
`,Kp=V.span`
  color: #333;
`,UV=V.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`,qu=V.button`
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
`,$V=V(qu)`
  background-color: #4caf50;
  color: white;
  
  &:hover {
    background-color: #43a047;
  }
`,zV=V(qu)`
  background-color: #f44336;
  color: white;
  
  &:hover {
    background-color: #e53935;
  }
`,BV=V(qu)`
  background-color: #2196f3;
  color: white;
  
  &:hover {
    background-color: #1e88e5;
  }
`,HV=V.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`,qV=V.div`
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
`,YV=V.div`
  background-color: white;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,GV=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,KV=V.h3`
  margin: 0;
  font-size: 1.2rem;
`,QV=V.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`,ZV=V.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Fc=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Wc=V.label`
  font-weight: 500;
  color: #555;
`,Qp=V.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,XV=V.select`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,JV=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`,eF=V(qu)`
  background-color: #6e8efb;
  color: white;
  
  &:hover {
    background-color: #5a7df9;
  }
`,tF=V(qu)`
  background-color: #e0e0e0;
  color: #333;
  
  &:hover {
    background-color: #d5d5d5;
  }
`,nF=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #666;
`,rF=t=>{if(!t)return"N/A";try{let e;if(t!=null&&t.seconds)e=new Date(t.seconds*1e3);else if(t!=null&&t.toDate)e=t.toDate();else if(t instanceof Date)e=t;else if(typeof t=="string")e=new Date(t);else return"Invalid date";return e.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}catch(e){return console.error("Error formatting timestamp:",e),"Invalid date"}},iF=()=>{const[t,e]=M.useState([]),[n,r]=M.useState(!0),[i,o]=M.useState(null),[s,a]=M.useState({name:"",email:"",position:"",role:""}),[l,d]=M.useState(!1);M.useEffect(()=>{f()},[]);const f=async()=>{try{r(!0);const y=await A9();e(y)}catch(y){console.error("Error fetching registration requests:",y),Y.error("Failed to load registration requests")}finally{r(!1)}},m=async y=>{try{d(!0),await R9(y),Y.success(`Registration for ${y.name||y.email} approved`),f()}catch(g){console.error("Error approving registration:",g),Y.error("Failed to approve registration")}finally{d(!1)}},E=async y=>{try{d(!0),await b9(y),Y.success(`Registration for ${y.name||y.email} declined`),Y.warning("Note: The user may still exist in Firebase Authentication. They will be blocked from accessing the system, but the account still exists."),f()}catch(g){console.error("Error declining registration:",g),Y.error("Failed to decline registration")}finally{d(!1)}},k=y=>{o(y),a({name:y.name||"",email:y.email||"",position:y.position||"",role:y.role||"user"})},T=()=>{o(null)},A=y=>{const{name:g,value:_}=y.target;a(x=>({...x,[g]:_}))},S=async y=>{y.preventDefault();try{d(!0),await P9(i.id,{name:s.name,email:s.email,position:s.position,role:s.role}),Y.success("Registration request updated"),o(null),f()}catch(g){console.error("Error updating registration request:",g),Y.error("Failed to update registration request")}finally{d(!1)}};return n?h.jsxs(xi,{children:[h.jsx(Ti,{children:"Registration Requests"}),h.jsx(Ii,{children:h.jsx(nF,{children:"Loading registration requests..."})})]}):h.jsxs(xi,{children:[h.jsx(Ti,{children:"Registration Requests"}),h.jsxs(Ii,{children:[h.jsx(NV,{children:t.length===0?h.jsx(HV,{children:h.jsx("p",{children:"No pending registration requests"})}):t.map(y=>h.jsxs(OV,{children:[h.jsxs(DV,{children:[h.jsxs(VV,{children:[h.jsx(wi,{size:18,weight:"bold"}),y.name||y.email]}),h.jsxs(FV,{children:[h.jsx(rI,{size:14}),rF(y.createdAt)]})]}),h.jsxs(WV,{children:[h.jsxs(Yp,{children:[h.jsxs(Gp,{children:[h.jsx(wi,{size:16}),"Email:"]}),h.jsx(Kp,{children:y.email})]}),h.jsxs(Yp,{children:[h.jsxs(Gp,{children:[h.jsx(yy,{size:16}),"Position:"]}),h.jsx(Kp,{children:y.position||"Not specified"})]}),h.jsxs(Yp,{children:[h.jsxs(Gp,{children:[h.jsx(wi,{size:16}),"Role:"]}),h.jsx(Kp,{children:y.role||"user"})]})]}),h.jsxs(UV,{children:[h.jsxs(BV,{onClick:()=>k(y),disabled:l,children:[h.jsx(lI,{size:16}),"Edit"]}),h.jsxs($V,{onClick:()=>m(y),disabled:l,children:[h.jsx(ni,{size:16}),"Accept"]}),h.jsxs(zV,{onClick:()=>E(y),disabled:l,children:[h.jsx(cI,{size:16}),"Decline"]})]})]},y.id))}),i&&h.jsx(qV,{children:h.jsxs(YV,{children:[h.jsxs(GV,{children:[h.jsx(KV,{children:"Edit Registration Request"}),h.jsx(QV,{onClick:T,children:"×"})]}),h.jsxs(ZV,{onSubmit:S,children:[h.jsxs(Fc,{children:[h.jsx(Wc,{htmlFor:"name",children:"Name"}),h.jsx(Qp,{type:"text",id:"name",name:"name",value:s.name,onChange:A,placeholder:"Enter name"})]}),h.jsxs(Fc,{children:[h.jsx(Wc,{htmlFor:"email",children:"Email"}),h.jsx(Qp,{type:"email",id:"email",name:"email",value:s.email,onChange:A,placeholder:"Enter email",required:!0})]}),h.jsxs(Fc,{children:[h.jsx(Wc,{htmlFor:"position",children:"Position"}),h.jsx(Qp,{type:"text",id:"position",name:"position",value:s.position,onChange:A,placeholder:"Enter position"})]}),h.jsxs(Fc,{children:[h.jsx(Wc,{htmlFor:"role",children:"Role"}),h.jsxs(XV,{id:"role",name:"role",value:s.role,onChange:A,children:[h.jsx("option",{value:"user",children:"User"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),h.jsxs(JV,{children:[h.jsx(tF,{type:"button",onClick:T,children:"Cancel"}),h.jsx(eF,{type:"submit",disabled:l,children:"Save Changes"})]})]})]})})]})]})},oF=V.div`
  padding: 2rem;
`,sF=V.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,aF=V.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,lF=V.thead`
  background-color: #f5f5f5;
`,Zp=V.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`,Ki=V.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`,Yr=V.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`,Ss=V.button`
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
`,uF=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.role){case"admin":return"#800000";case"superadmin":return"#000000";default:return"#555555"}}};
  color: white;
`,cF=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.status){case"active":return"#4caf50";case"inactive":return"#f44336";case"pending":return"#ff9800";default:return"#9e9e9e"}}};
  color: white;
`,dF=V.input`
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
`,Uc=V.div`
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
`,$c=V.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,zc=V.h3`
  margin-top: 0;
  color: #333;
`,hF=V.p`
  margin-bottom: 1.5rem;
  color: #666;
`,Bc=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,Ut=V.button`
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
`,fF=V.div`
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
`,Qi=V.select`
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
`,pF=V.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,mF=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,gF=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,yF=V.h4`
  margin: 0;
  color: #333;
`,vF=V.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;V.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;const kF=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,Cs=V.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;function _F({isSuperAdmin:t}){const[e,n]=M.useState([]),[r,i]=M.useState(!0),[o,s]=M.useState(""),[a,l]=M.useState(!1),[d,f]=M.useState(null),[m,E]=M.useState(!1),[k,T]=M.useState(!1),[A,S]=M.useState(!1),[y,g]=M.useState(1),[_,x]=M.useState(null),[R,N]=M.useState([]),[w,I]=M.useState({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),[P,b]=M.useState(null),[j,O]=M.useState(!1),[C,K]=M.useState({firstName:"",lastName:"",middleInitial:"",email:"",position:"regular",role:"member",dateOfBirth:"",phoneNumber:"",address:"",emergencyContactName:"",emergencyContactPhone:"",emergencyContactRelationship:""}),[ie,ee]=M.useState(1),[z,$]=M.useState({firstName:"",lastName:"",middleInitial:"",email:"",position:"regular",role:"member",status:"active",address:"",contactNumber:"",employeeStatus:"regular"}),G=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],J=D=>!D||!Array.isArray(D)||D.length===0?0:D.reduce((ke,ge)=>ke+(parseInt(ge.shiftDuration,10)||0),0);M.useEffect(()=>{le()},[]);const le=async()=>{try{i(!0);const D=Tn(xe,"users"),ke=(await Wn(D)).docs.map(ge=>{const Ie=ge.data();return{id:ge.id,userId:Ie.userId||ge.id,...Ie,schedule:Ie.schedule||[]}});n(ke),i(!1)}catch(D){console.error("Error fetching users:",D),Y.error("Failed to load users"),i(!1)}},ne=D=>{f(D),l(!0)},he=D=>{let ce="",ke="",ge="";if(D.name){const Ie=D.name.trim().split(" ");Ie.length===1?ce=Ie[0]:Ie.length===2?(ce=Ie[0],ke=Ie[1]):Ie.length>=3&&(ce=Ie[0],Ie[1].length===2&&Ie[1].endsWith(".")?(ge=Ie[1].charAt(0),ke=Ie.slice(2).join(" ")):(ge=Ie[1],ke=Ie.slice(2).join(" ")))}K({firstName:ce,lastName:ke,middleInitial:ge,email:D.email||"",position:D.position||"",role:D.role||"member",dateOfBirth:D.dateOfBirth||"",phoneNumber:D.phoneNumber||"",address:D.address||"",emergencyContactName:D.emergencyContactName||"",emergencyContactPhone:D.emergencyContactPhone||"",emergencyContactRelationship:D.emergencyContactRelationship||""}),x(D),ee(1),T(!0)},Fe=async()=>{if(d)try{const D=d.userId||d.id;await oy(lt(xe,"users",D)),n(e.filter(ce=>!(ce.userId===d.userId||ce.id===d.id))),Y.success(`User ${d.name||d.email} has been deleted`),l(!1),f(null)}catch(D){console.error("Error deleting user:",D),Y.error(`Failed to delete user: ${D.message}`)}},Pe=()=>{l(!1),f(null)},Qe=async(D,ce)=>{const ke=ce==="active"?"inactive":"active";try{const ge=D.userId||D.id,Ie=lt(xe,"users",ge);await na(Ie,{status:ke}),n(e.map(st=>st.userId&&st.userId===D.userId||st.id===D.id?{...st,status:ke}:st)),Y.success(`User status updated to ${ke}`)}catch(ge){console.error("Error updating user status:",ge),Y.error(`Failed to update user status: ${ge.message}`)}},We=D=>{x(D),N(D.schedule||[]),E(!0),O(!1),b(null)},xt=async()=>{if(_)try{let D=C.firstName;if(C.middleInitial&&(D+=` ${C.middleInitial}.`),C.lastName&&(D+=` ${C.lastName}`),!D.trim()||!C.email.trim()){Y.error("Name and email are required");return}const ce=_.userId||_.id,ke=lt(xe,"users",ce);await na(ke,{name:D.trim(),email:C.email.trim(),position:C.position,role:C.role,dateOfBirth:C.dateOfBirth,phoneNumber:C.phoneNumber,address:C.address,emergencyContactName:C.emergencyContactName,emergencyContactPhone:C.emergencyContactPhone,emergencyContactRelationship:C.emergencyContactRelationship}),n(e.map(ge=>ge.userId&&ge.userId===_.userId||ge.id===_.id?{...ge,name:D.trim(),email:C.email.trim(),position:C.position,role:C.role,dateOfBirth:C.dateOfBirth,phoneNumber:C.phoneNumber,address:C.address,emergencyContactName:C.emergencyContactName,emergencyContactPhone:C.emergencyContactPhone,emergencyContactRelationship:C.emergencyContactRelationship}:ge)),Y.success("User information updated successfully"),T(!1),ee(1)}catch(D){console.error("Error updating user:",D),Y.error(`Failed to update user: ${D.message}`)}},Vt=async()=>{try{let D=z.firstName;if(z.middleInitial&&(D+=` ${z.middleInitial}.`),z.lastName&&(D+=` ${z.lastName}`),!D.trim()||!z.email.trim()){Y.error("Name and email are required");return}const ce=Date.now(),ke=Math.random().toString(36).substring(2,8),ge=`uid_${ce}_${ke}`,Ie=D.trim().toLowerCase().replace(/\s+/g,"_"),st=`${z.role}_${Ie}_${ce}`,gs=lt(xe,"users",st);await yu(gs,{userId:ge,name:D.trim(),email:z.email.trim(),position:z.position,role:z.role,status:z.status,address:z.address.trim(),contactNumber:z.contactNumber.trim(),employeeStatus:z.employeeStatus,createdAt:zu(),schedule:[]});const Oa={id:st,userId:ge,name:D.trim(),email:z.email.trim(),position:z.position,role:z.role,status:z.status,address:z.address.trim(),contactNumber:z.contactNumber.trim(),employeeStatus:z.employeeStatus,schedule:[],createdAt:new Date};n([...e,Oa]),Y.success(`User ${D.trim()} added successfully`),S(!1),g(1),$({firstName:"",lastName:"",middleInitial:"",email:"",position:"",role:"member",status:"active",address:"",contactNumber:"",employeeStatus:"regular"})}catch(D){console.error("Error adding user:",D),Y.error(`Failed to add user: ${D.message}`)}},Kt=()=>{if(w.selectedDays.length===0){Y.warning("Please select at least one day of the week");return}const D=new Date,[ce,ke]=w.timeIn.split(":").map(Number);D.setHours(ce,ke,0,0);const ge=w.selectedDays.map(st=>({id:`${Date.now()}-${st}`,dayOfWeek:st,timeIn:w.timeIn,timeRegion:w.timeRegion,shiftDuration:parseInt(w.shiftDuration,10),utcTimeIn:D.toISOString()})),Ie=[...R,...ge];N(Ie),Y.success(`Added schedule for ${w.selectedDays.length} day(s)`),I({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},Tt=async()=>{if(_)try{const D=_.userId||_.id;console.log("Updating schedule for user with document ID:",D);const ce=lt(xe,"users",D);await na(ce,{schedule:R}),n(e.map(ke=>ke.userId&&ke.userId===_.userId||ke.id===_.id?{...ke,schedule:R}:ke)),Y.success("Schedule updated successfully"),E(!1)}catch(D){console.error("Error updating schedule:",D),Y.error(`Failed to update schedule: ${D.message}`)}},It=D=>{const ce=R.filter(ke=>ke.id!==D);N(ce)},Ui=D=>{b(D),O(!0),I({selectedDays:[D.dayOfWeek],timeIn:D.timeIn,timeRegion:D.timeRegion,shiftDuration:D.shiftDuration.toString()})},$i=()=>{if(!P)return;if(w.selectedDays.length===0){Y.warning("Please select at least one day of the week");return}const D=new Date,[ce,ke]=w.timeIn.split(":").map(Number);D.setHours(ce,ke,0,0);let ge=R.filter(st=>st.id!==P.id);const Ie=w.selectedDays.map(st=>({id:st===P.dayOfWeek?P.id:`${Date.now()}-${st}`,dayOfWeek:st,timeIn:w.timeIn,timeRegion:w.timeRegion,shiftDuration:parseInt(w.shiftDuration,10),utcTimeIn:D.toISOString()}));ge=[...ge,...Ie],N(ge),Y.success(`Updated schedule for ${w.selectedDays.length} day(s)`),I({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),O(!1),b(null)},zi=()=>{O(!1),b(null),I({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},ot=e.filter(D=>{const ce=o.toLowerCase();return D.name&&D.name.toLowerCase().includes(ce)||D.email&&D.email.toLowerCase().includes(ce)||D.role&&D.role.toLowerCase().includes(ce)||D.position&&D.position.toLowerCase().includes(ce)});return h.jsxs(oF,{children:[h.jsxs(sF,{children:[h.jsx(xu,{size:24,weight:"bold"}),"User Management"]}),h.jsx(kF,{children:h.jsx(dF,{type:"text",placeholder:"Search users...",value:o,onChange:D=>s(D.target.value)})}),r?h.jsx("p",{children:"Loading users..."}):h.jsxs(aF,{children:[h.jsx(lF,{children:h.jsxs(Zp,{children:[h.jsx(Ki,{children:"Name"}),h.jsx(Ki,{children:"Email"}),h.jsx(Ki,{children:"Position"}),h.jsx(Ki,{children:"Role"}),h.jsx(Ki,{children:"Status"}),h.jsx(Ki,{children:"Shifts"}),h.jsx(Ki,{children:"Actions"})]})}),h.jsx("tbody",{children:ot.length>0?ot.map(D=>h.jsxs(Zp,{children:[h.jsx(Yr,{children:D.name||"N/A"}),h.jsx(Yr,{children:D.email}),h.jsx(Yr,{children:D.position||"N/A"}),h.jsx(Yr,{children:h.jsx(uF,{role:D.role,children:D.role||"member"})}),h.jsx(Yr,{children:h.jsx(cF,{status:D.status||"active",children:D.status||"active"})}),h.jsx(Yr,{children:D.schedule&&Array.isArray(D.schedule)?h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx("strong",{children:D.schedule.length})," shifts"]}),h.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[J(D.schedule)," total hours"]})]}):"No shifts"}),h.jsxs(Yr,{children:[h.jsx(Ss,{color:"#000000",onClick:()=>We(D),title:"Manage Schedule",children:h.jsx(Fn,{size:20})}),h.jsx(Ss,{color:"#1a73e8",onClick:()=>he(D),title:"Edit User",children:h.jsx(A0,{size:20})}),h.jsx(Ss,{color:D.status==="active"?"#f44336":"#4caf50",onClick:()=>Qe(D,D.status||"active"),title:D.status==="active"?"Deactivate user":"Activate user",children:D.status==="active"?h.jsx(Tu,{size:20}):h.jsx(_u,{size:20})}),h.jsx(Ss,{color:"#f44336",onClick:()=>ne(D),title:"Delete user",children:h.jsx(R0,{size:20})})]})]},D.id)):h.jsx(Zp,{children:h.jsx(Yr,{colSpan:6,style:{textAlign:"center"},children:"No users found"})})})]}),a&&h.jsx(Uc,{children:h.jsxs($c,{children:[h.jsx(zc,{children:"Confirm Deletion"}),h.jsxs(hF,{children:["Are you sure you want to delete the user ",(d==null?void 0:d.name)||(d==null?void 0:d.email),"? This action cannot be undone."]}),h.jsxs(Bc,{children:[h.jsx(Ut,{onClick:Pe,children:"Cancel"}),h.jsx(Ut,{primary:!0,onClick:Fe,children:"Delete"})]})]})}),k&&_&&h.jsx(Uc,{children:h.jsxs($c,{style:{maxWidth:"500px",width:"100%"},children:[h.jsx(zc,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Eu,{size:24}),"Edit User: ",_.name||_.email," ",ie>1&&`- Page ${ie} of 2`]})}),ie===1&&h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(Re,{children:[h.jsx(be,{children:"First Name"}),h.jsx(ct,{type:"text",value:C.firstName,onChange:D=>K({...C,firstName:D.target.value}),placeholder:"First Name"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Middle Initial"}),h.jsx(ct,{type:"text",value:C.middleInitial,onChange:D=>K({...C,middleInitial:D.target.value}),placeholder:"Middle Initial",maxLength:1}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Just the first letter, without period"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Last Name"}),h.jsx(ct,{type:"text",value:C.lastName,onChange:D=>K({...C,lastName:D.target.value}),placeholder:"Last Name"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Email"}),h.jsx(ct,{type:"email",value:C.email,onChange:D=>K({...C,email:D.target.value}),placeholder:"Email Address"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Position"}),h.jsxs(Qi,{value:C.position,onChange:D=>K({...C,position:D.target.value}),children:[h.jsx("option",{value:"regular",children:"Regular"}),h.jsx("option",{value:"probationary",children:"Probationary"}),h.jsx("option",{value:"intern",children:"Intern"})]})]}),h.jsxs(Re,{children:[h.jsxs(be,{children:["Role ",!t&&h.jsx("span",{style:{fontSize:"0.8rem",color:"#f44336"},children:"(Super Admin only)"})]}),h.jsxs(Qi,{value:C.role,onChange:D=>K({...C,role:D.target.value}),disabled:!t,style:t?{}:{backgroundColor:"#f5f5f5",cursor:"not-allowed"},children:[h.jsx("option",{value:"member",children:"Member"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]}),!t&&h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Only Super Admins can change user roles"})]})]}),ie===2&&h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(Re,{children:[h.jsx(be,{children:"Date of Birth"}),h.jsx(ct,{type:"date",value:C.dateOfBirth,onChange:D=>K({...C,dateOfBirth:D.target.value})})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Phone #"}),h.jsx(ct,{type:"text",value:C.phoneNumber,onChange:D=>K({...C,phoneNumber:D.target.value}),placeholder:"Phone Number"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Address"}),h.jsx(ct,{type:"text",value:C.address,onChange:D=>K({...C,address:D.target.value}),placeholder:"Complete Address"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Emergency Contact Name"}),h.jsx(ct,{type:"text",value:C.emergencyContactName,onChange:D=>K({...C,emergencyContactName:D.target.value}),placeholder:"Emergency Contact Name"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Emergency Contact Phone"}),h.jsx(ct,{type:"text",value:C.emergencyContactPhone,onChange:D=>K({...C,emergencyContactPhone:D.target.value}),placeholder:"Emergency Contact Phone"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Relationship"}),h.jsx(ct,{type:"text",value:C.emergencyContactRelationship,onChange:D=>K({...C,emergencyContactRelationship:D.target.value}),placeholder:"Relationship to Employee"})]})]}),h.jsx(Bc,{children:ie===1?h.jsxs(h.Fragment,{children:[h.jsx(Ut,{onClick:()=>T(!1),children:"Cancel"}),h.jsxs(Ut,{primary:!0,onClick:()=>ee(2),children:[h.jsx(Cs,{children:h.jsx(ku,{size:16})}),"Next"]})]}):h.jsxs(h.Fragment,{children:[h.jsxs(Ut,{onClick:()=>ee(1),children:[h.jsx(Cs,{children:h.jsx(yh,{size:16})}),"Back"]}),h.jsxs(Ut,{primary:!0,onClick:xt,children:[h.jsx(Cs,{children:h.jsx(S0,{size:16})}),"Save Changes"]})]})})]})}),A&&h.jsx(Uc,{children:h.jsxs($c,{style:{maxWidth:"500px",width:"100%"},children:[h.jsx(zc,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Eu,{size:24}),"Add New User ",y>1&&`- Page ${y} of 2`]})}),y===1&&h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(Re,{children:[h.jsxs(be,{children:["First Name ",h.jsx("span",{style:{color:"red"},children:"*"})]}),h.jsx(ct,{type:"text",value:z.firstName,onChange:D=>$({...z,firstName:D.target.value}),placeholder:"First Name",required:!0})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Middle Initial"}),h.jsx(ct,{type:"text",value:z.middleInitial,onChange:D=>$({...z,middleInitial:D.target.value}),placeholder:"Middle Initial",maxLength:1}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Just the first letter, without period"})]}),h.jsxs(Re,{children:[h.jsxs(be,{children:["Last Name ",h.jsx("span",{style:{color:"red"},children:"*"})]}),h.jsx(ct,{type:"text",value:z.lastName,onChange:D=>$({...z,lastName:D.target.value}),placeholder:"Last Name",required:!0})]}),h.jsxs(Re,{children:[h.jsxs(be,{children:["Email ",h.jsx("span",{style:{color:"red"},children:"*"})]}),h.jsx(ct,{type:"email",value:z.email,onChange:D=>$({...z,email:D.target.value}),placeholder:"Email Address",required:!0})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Position"}),h.jsxs(Qi,{value:z.position,onChange:D=>$({...z,position:D.target.value}),children:[h.jsx("option",{value:"regular",children:"Regular"}),h.jsx("option",{value:"probationary",children:"Probationary"}),h.jsx("option",{value:"intern",children:"Intern"})]})]}),h.jsxs(Re,{children:[h.jsxs(be,{children:["Role ",!t&&h.jsx("span",{style:{fontSize:"0.8rem",color:"#f44336"},children:"(Super Admin only)"})]}),h.jsxs(Qi,{value:z.role,onChange:D=>$({...z,role:D.target.value}),disabled:!t,style:t?{}:{backgroundColor:"#f5f5f5",cursor:"not-allowed"},children:[h.jsx("option",{value:"member",children:"Member"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]}),!t&&h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Only Super Admins can change user roles"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Status"}),h.jsxs(Qi,{value:z.status,onChange:D=>$({...z,status:D.target.value}),children:[h.jsx("option",{value:"active",children:"Active"}),h.jsx("option",{value:"inactive",children:"Inactive"}),h.jsx("option",{value:"pending",children:"Pending"})]})]})]}),y===2&&h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(Re,{children:[h.jsx(be,{children:"Address"}),h.jsx(ct,{type:"text",value:z.address,onChange:D=>$({...z,address:D.target.value}),placeholder:"Complete Address"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Contact Number"}),h.jsx(ct,{type:"text",value:z.contactNumber,onChange:D=>$({...z,contactNumber:D.target.value}),placeholder:"Contact Number"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Employee Status"}),h.jsxs(Qi,{value:z.employeeStatus,onChange:D=>$({...z,employeeStatus:D.target.value}),children:[h.jsx("option",{value:"regular",children:"Regular"}),h.jsx("option",{value:"probationary",children:"Probationary"}),h.jsx("option",{value:"intern",children:"Intern"})]})]})]}),h.jsx(Bc,{children:y===1?h.jsxs(h.Fragment,{children:[h.jsx(Ut,{onClick:()=>S(!1),children:"Cancel"}),h.jsxs(Ut,{primary:!0,onClick:()=>g(2),children:[h.jsx(Cs,{children:h.jsx(ku,{size:16})}),"Next"]})]}):h.jsxs(h.Fragment,{children:[h.jsxs(Ut,{onClick:()=>g(1),children:[h.jsx(Cs,{children:h.jsx(yh,{size:16})}),"Back"]}),h.jsxs(Ut,{primary:!0,onClick:Vt,children:[h.jsx(Cs,{children:h.jsx(S0,{size:16})}),"Add User"]})]})})]})}),m&&_&&h.jsx(Uc,{children:h.jsxs($c,{style:{maxWidth:"600px",width:"100%"},children:[h.jsx(zc,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Fn,{size:24}),"Manage Schedule for ",_.name||_.email]})}),h.jsx("div",{style:{marginBottom:"1rem",background:"#f5f9ff",padding:"0.75rem",borderRadius:"6px"},children:h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Total Shifts:"})," ",R.length]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Total Hours:"})," ",J(R)," hours/week"]})]})}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Current Schedule"}),R.length>0?h.jsx(pF,{children:R.map(D=>h.jsxs(mF,{children:[h.jsxs(gF,{children:[h.jsx(yF,{children:D.dayOfWeek}),h.jsxs("div",{children:[h.jsx(Ss,{color:"#000000",onClick:()=>Ui(D),title:"Edit schedule",style:{marginRight:"4px"},children:h.jsx(A0,{size:16})}),h.jsx(Ss,{color:"#f44336",onClick:()=>It(D.id),title:"Delete schedule",children:h.jsx(R0,{size:16})})]})]}),h.jsxs(vF,{children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Time In:"})," ",D.timeIn]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Region:"})," ",D.timeRegion]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Duration:"})," ",D.shiftDuration," hours"]})]})]},D.id))}):h.jsx("p",{children:"No schedules found. Add a new schedule below."})]}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:j?"Edit Schedule":"Add New Schedule"}),h.jsxs(Re,{children:[h.jsx(be,{children:"Days of Week (select multiple)"}),h.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:G.map(D=>h.jsxs(fF,{children:[h.jsx("input",{type:"checkbox",id:`day-${D}`,checked:w.selectedDays.includes(D),onChange:()=>{const ce=w.selectedDays.includes(D)?w.selectedDays.filter(ke=>ke!==D):[...w.selectedDays,D];I({...w,selectedDays:ce})}}),h.jsx("label",{htmlFor:`day-${D}`,children:D})]},D))})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Time In"}),h.jsx(ct,{type:"time",value:w.timeIn,onChange:D=>I({...w,timeIn:D.target.value})})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Time Region"}),h.jsxs(Qi,{value:w.timeRegion,onChange:D=>I({...w,timeRegion:D.target.value}),children:[h.jsxs("optgroup",{label:"Asia & Pacific",children:[h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT)"}),h.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore (SGT)"}),h.jsx("option",{value:"Asia/Tokyo",children:"Asia/Tokyo (JST)"}),h.jsx("option",{value:"Australia/Sydney",children:"Australia/Sydney (AEST/AEDT)"})]}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific)"}),h.jsx("option",{value:"America/Anchorage",children:"America/Anchorage (Alaska)"}),h.jsx("option",{value:"America/Adak",children:"America/Adak (Hawaii-Aleutian)"}),h.jsx("option",{value:"Pacific/Honolulu",children:"Pacific/Honolulu (Hawaii)"}),h.jsx("option",{value:"America/Phoenix",children:"America/Phoenix (Arizona)"}),h.jsx("option",{value:"America/Toronto",children:"America/Toronto (Eastern Canada)"}),h.jsx("option",{value:"America/Vancouver",children:"America/Vancouver (Pacific Canada)"})]}),h.jsxs("optgroup",{label:"Europe & Africa",children:[h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST)"}),h.jsx("option",{value:"Europe/Paris",children:"Europe/Paris (CET/CEST)"}),h.jsx("option",{value:"Europe/Berlin",children:"Europe/Berlin (CET/CEST)"}),h.jsx("option",{value:"Europe/Moscow",children:"Europe/Moscow (MSK)"})]})]})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Shift Duration (hours)"}),h.jsx(ct,{type:"number",min:"1",max:"24",value:w.shiftDuration,onChange:D=>I({...w,shiftDuration:D.target.value})})]}),h.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:j?h.jsxs(h.Fragment,{children:[h.jsx(Ut,{primary:!0,onClick:$i,children:"Update Schedule"}),h.jsx(Ut,{onClick:zi,children:"Cancel Edit"})]}):h.jsx(Ut,{primary:!0,onClick:Kt,children:"Add Schedule"})})]}),h.jsxs(Bc,{children:[h.jsx(Ut,{onClick:()=>E(!1),children:"Cancel"}),h.jsx(Ut,{primary:!0,onClick:Tt,children:"Save Changes"})]})]})})]})}const EF=V.div`
  padding: 2rem;
`,wF=V.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,xF=V.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,TF=V.thead`
  background-color: #f5f5f5;
`,iE=V.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`,Hc=V.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`,qc=V.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`,oE=V.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,sE=V.button`
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
`,aE=V.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`,Xp=V.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`,lE=V.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,IF=V.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-style: italic;
`;function SF(){const[t,e]=M.useState([]),[n,r]=M.useState(!0),[i,o]=M.useState(!1);M.useEffect(()=>{s()},[]);const s=async()=>{try{r(!0);const l=Tn(xe,"users"),f=(await Wn(l)).docs.filter(m=>m.data().role==="admin").map(m=>{var k,T;const E=m.data();return{id:m.id,userId:E.userId||m.id,name:E.name||"N/A",email:E.email||"N/A",privileges:{canManageUsers:((k=E.privileges)==null?void 0:k.canManageUsers)!==!1,canManageRegistrations:((T=E.privileges)==null?void 0:T.canManageRegistrations)!==!1}}});e(f)}catch(l){console.error("Error fetching admins:",l),Y.error("Failed to load admin users")}finally{r(!1)}},a=async(l,d,f)=>{if(!i)try{o(!0);const m=t.find(A=>A.id===l||A.userId===l);if(!m){Y.error("Admin not found");return}const E=m.userId||m.id,k=lt(xe,"users",E),T={privileges:{...m.privileges||{},[d]:!f}};await na(k,T),e(t.map(A=>A.id===l||A.userId===l?{...A,privileges:{...A.privileges,[d]:!f}}:A)),Y.success("Privilege updated successfully")}catch(m){console.error("Error updating privilege:",m),Y.error(`Failed to update privilege: ${m.message}`)}finally{o(!1)}};return h.jsxs(EF,{children:[h.jsxs(wF,{children:[h.jsx(Xp,{children:h.jsx(vy,{size:24,weight:"bold"})}),"Admin Privileges"]}),n?h.jsx("p",{children:"Loading admins..."}):h.jsx(h.Fragment,{children:t.length>0?h.jsxs(xF,{children:[h.jsx(TF,{children:h.jsxs(iE,{children:[h.jsx(Hc,{children:"Name"}),h.jsx(Hc,{children:"Email"}),h.jsx(Hc,{children:"User Management"}),h.jsx(Hc,{children:"Registration Requests"})]})}),h.jsx("tbody",{children:t.map(l=>{var d,f,m,E;return h.jsxs(iE,{children:[h.jsx(qc,{children:l.name}),h.jsx(qc,{children:l.email}),h.jsx(qc,{children:h.jsxs(oE,{children:[h.jsxs(lE,{children:[h.jsx(Xp,{children:h.jsx(xu,{size:16})}),"Access"]}),h.jsx(sE,{enabled:(d=l.privileges)==null?void 0:d.canManageUsers,onClick:()=>{var k;return a(l.id,"canManageUsers",(k=l.privileges)==null?void 0:k.canManageUsers)},disabled:i,children:h.jsx(aE,{children:(f=l.privileges)!=null&&f.canManageUsers?h.jsx(_u,{size:16}):h.jsx(Tu,{size:16})})})]})}),h.jsx(qc,{children:h.jsxs(oE,{children:[h.jsxs(lE,{children:[h.jsx(Xp,{children:h.jsx(wu,{size:16})}),"Access"]}),h.jsx(sE,{enabled:(m=l.privileges)==null?void 0:m.canManageRegistrations,onClick:()=>{var k;return a(l.id,"canManageRegistrations",(k=l.privileges)==null?void 0:k.canManageRegistrations)},disabled:i,children:h.jsx(aE,{children:(E=l.privileges)!=null&&E.canManageRegistrations?h.jsx(_u,{size:16}):h.jsx(Tu,{size:16})})})]})})]},l.id||l.userId)})})]}):h.jsx(IF,{children:"No admin users found. Add admin users in the User Management section."})})]})}const CF=V.div`
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
`,LF=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 400px;
  padding: 1.5rem;
`,AF=V.h3`
  color: #333;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
`,PF=V.div`
  margin-bottom: 1.5rem;
`,RF=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`,CI=V.button`
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
`,bF=V(CI)`
  background-color: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #eee;
  }
`,jF=V(CI)`
  background-color: #4caf50;
  color: white;
  border: 1px solid #43a047;
  
  &:hover {
    background-color: #43a047;
  }
`,MF=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`,NF=V.textarea`
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

`;function OF(){var j,O;const[t,e]=M.useState(null),[n,r]=M.useState("dashboard"),[i,o]=M.useState(null),[s,a]=M.useState(null),[l,d]=M.useState(!1),[f,m]=M.useState(null),[E,k]=M.useState(!1),T=Aa();M.useEffect(()=>{const C=$n.currentUser;if(C){const K={uid:C.uid,email:C.email,displayName:C.displayName||C.email.split("@")[0]};e(K),A(C.uid)}},[]);const A=async C=>{if(C)try{k(!0);try{const ee=Sr(Tn(xe,"declined_registrations"),ai("userId","==",C));if(!(await Wn(ee)).empty){Y.error("Your registration request has been declined. Please contact an administrator."),await $n.signOut(),T("/login");return}}catch(ee){console.error("Error checking declined status:",ee)}try{const ee=Sr(Tn(xe,"registration_requests"),ai("userId","==",C));if(!(await Wn(ee)).empty){Y.info("Your registration request is pending approval. You will be notified when approved."),await $n.signOut(),T("/login");return}}catch(ee){console.error("Error checking pending status:",ee)}const K=lt(xe,"users",C),ie=await gu(K);if(ie.exists()){const ee=ie.data();m(ee)}else console.log("No user data found in Firestore"),Y.error("Your account is not properly set up. Please contact an administrator."),await $n.signOut(),T("/login")}catch(K){console.error("Error fetching user data:",K),Y.error("Error loading user data. Please try again later.")}finally{k(!1)}};M.useEffect(()=>{t!=null&&t.uid&&S()},[t]);const S=async()=>{try{const C=Tn(xe,"attendance");try{const K=Sr(C,ai("userId","==",t.uid),ry("timestamp","desc"),x3(1)),ie=await Wn(K);if(ie.empty)o(null),a(null);else{const ee=ie.docs[0].data();a(ee),o(ee.type)}}catch(K){if(K.message&&K.message.includes("index is currently building")){console.log("Index is still building, using fallback method");const ie=Sr(C,ai("userId","==",t.uid)),ee=await Wn(ie);if(ee.empty)o(null),a(null);else{let z=null,$=new Date(0);ee.forEach(G=>{var ne;const J=G.data(),le=((ne=J.timestamp)==null?void 0:ne.toDate())||new Date(0);le>$&&($=le,z=J)}),z?(a(z),o(z.type)):(o(null),a(null))}Y.info("System is updating. Some features may be temporarily limited.",{autoClose:5e3,hideProgressBar:!1})}else throw K}}catch(C){console.error("Error fetching attendance status:",C),C.message&&C.message.includes("index")?Y.warning("System is updating attendance records. Please try again in a few minutes."):Y.error("Unable to fetch your attendance status. Please refresh the page.")}},[y,g]=M.useState(!1),[_,x]=M.useState(null),[R,N]=M.useState(""),w=async(C,K)=>{if(C==="Out")return"Complete";try{const ie=await gu(lt(xe,"users",K));if(!ie.exists())return console.warn("User document not found when determining status"),"On Time";const z=ie.data().schedule||[],$=new Date,G=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][$.getDay()],J=z&&Array.isArray(z)?z.find(Pe=>Pe.dayOfWeek===G):null;if(!J)return console.log("No schedule found for today:",G),"On Time";console.log("Found schedule for today:",J);const[le,ne]=J.timeIn.split(":").map(Number),he=new Date;he.setHours(le,ne,0,0);const Fe=Math.round(($-he)/(1e3*60));return console.log("Time difference in minutes:",Fe),Fe<-15?"Early":Fe<=15?"On Time":"Late"}catch(ie){return console.error("Error determining status:",ie),"On Time"}},I=async C=>{if(t){d(!0);try{const K=it.now(),ie=await w(C,t.uid),ee={userId:t.uid,email:t.email,name:t.displayName,type:C,status:ie,timestamp:K,notes:""};N(""),x(ee),g(!0)}catch(K){console.error("Error preparing time in/out:",K),Y.error("Failed to prepare time in/out. Please try again.")}finally{d(!1)}}},P=async()=>{if(_){d(!0);try{const{status:C,...K}=_;K.notes=R;const ie=await t6(Tn(xe,"attendance"),K);Y.success(`Time ${_.type} recorded successfully!`),o(_.type);const ee={..._,notes:R};a(ee),g(!1),x(null),N(""),console.log(`Time ${_.type} recorded with ID: ${ie.id}`)}catch(C){console.error(`Error recording time ${_.type}:`,C),Y.error(`Failed to record time ${_.type}`)}finally{d(!1)}}},b=()=>{g(!1),x(null),N("")};return h.jsxs(h.Fragment,{children:[h.jsxs(uD,{user:t,activeTab:n,setActiveTab:r,attendanceStatus:i,loading:l,handleTimeInOut:I,lastRecord:s,isSuperAdmin:(f==null?void 0:f.role)==="super_admin",userData:f,setUserData:m,children:[n==="dashboard"&&h.jsx(hD,{attendanceStatus:i,lastRecord:s}),n==="attendance"&&h.jsx(mD,{user:t}),n==="schedule"&&h.jsx(jV,{user:t,userData:f}),n==="profile"&&h.jsx(MV,{user:t,userData:f,loadingUserData:E}),n==="registration_requests"&&((f==null?void 0:f.role)==="super_admin"||(f==null?void 0:f.role)==="admin"&&((j=f==null?void 0:f.privileges)==null?void 0:j.canManageRegistrations)!==!1)&&h.jsx(iF,{}),n==="user_management"&&((f==null?void 0:f.role)==="super_admin"||(f==null?void 0:f.role)==="admin"&&((O=f==null?void 0:f.privileges)==null?void 0:O.canManageUsers)!==!1)&&h.jsx(_F,{isSuperAdmin:(f==null?void 0:f.role)==="super_admin"}),n==="admin_privileges"&&(f==null?void 0:f.role)==="super_admin"&&h.jsx(SF,{})]}),y&&_&&h.jsx(CF,{children:h.jsxs(LF,{children:[h.jsxs(AF,{children:["Confirm Time ",_.type]}),h.jsxs(PF,{children:[h.jsxs("p",{children:[h.jsx("strong",{children:"Time:"})," ",_.timestamp.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0})]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Date:"})," ",_.timestamp.toDate().toLocaleDateString()]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Status:"}),h.jsx(MF,{status:_.status,children:_.status})]}),h.jsxs("div",{style:{marginTop:"1rem"},children:[h.jsx("strong",{children:"Notes (Optional):"}),h.jsx(NF,{value:R,onChange:C=>N(C.target.value),placeholder:"Add any notes about this attendance record..."})]})]}),h.jsxs(RF,{children:[h.jsxs(bF,{onClick:b,children:[h.jsx(Tu,{size:16,style:{marginRight:"4px"}}),"Cancel"]}),h.jsxs(jF,{onClick:P,children:[h.jsx(_u,{size:16,style:{marginRight:"4px"}}),"Confirm"]})]})]})})]})}const DF=({children:t})=>{const{currentUser:e,loading:n}=L6();return n?h.jsx(VF,{children:"Loading..."}):e?t:h.jsx(b8,{to:"/",replace:!0})},VF=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #6e8efb;
  background-color: #f5f5f5;
`;function FF(){return h.jsx(h.Fragment,{children:h.jsx(TN,{children:h.jsxs(z9,{children:[h.jsx(IL,{children:h.jsxs(vL,{children:[h.jsx(fl,{path:"/",element:h.jsx(C9,{})}),h.jsx(fl,{path:"/register",element:h.jsx($9,{})}),h.jsx(fl,{path:"/dashboard",element:h.jsx(DF,{children:h.jsx(OF,{})})}),h.jsx(fl,{path:"*",element:h.jsx(b8,{to:"/",replace:!0})})]})}),h.jsx(I0,{position:"top-right",autoClose:3e3})]})})})}E8(document.getElementById("root")).render(h.jsx(M.StrictMode,{children:h.jsx(FF,{})}));
