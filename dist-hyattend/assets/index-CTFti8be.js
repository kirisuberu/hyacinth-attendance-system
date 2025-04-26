function N6(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function cu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var z_={exports:{}},rh={},B_={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var du=Symbol.for("react.element"),V6=Symbol.for("react.portal"),F6=Symbol.for("react.fragment"),U6=Symbol.for("react.strict_mode"),W6=Symbol.for("react.profiler"),$6=Symbol.for("react.provider"),z6=Symbol.for("react.context"),B6=Symbol.for("react.forward_ref"),H6=Symbol.for("react.suspense"),q6=Symbol.for("react.memo"),Y6=Symbol.for("react.lazy"),iv=Symbol.iterator;function G6(t){return t===null||typeof t!="object"?null:(t=iv&&t[iv]||t["@@iterator"],typeof t=="function"?t:null)}var H_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q_=Object.assign,Y_={};function pa(t,e,n){this.props=t,this.context=e,this.refs=Y_,this.updater=n||H_}pa.prototype.isReactComponent={};pa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function G_(){}G_.prototype=pa.prototype;function X0(t,e,n){this.props=t,this.context=e,this.refs=Y_,this.updater=n||H_}var J0=X0.prototype=new G_;J0.constructor=X0;q_(J0,pa.prototype);J0.isPureReactComponent=!0;var ov=Array.isArray,K_=Object.prototype.hasOwnProperty,eg={current:null},Q_={key:!0,ref:!0,__self:!0,__source:!0};function Z_(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)K_.call(e,r)&&!Q_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:du,type:t,key:o,ref:s,props:i,_owner:eg.current}}function K6(t,e){return{$$typeof:du,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tg(t){return typeof t=="object"&&t!==null&&t.$$typeof===du}function Q6(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sv=/\/+/g;function Sf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Q6(""+t.key):e.toString(36)}function Tc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case du:case V6:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Sf(s,0):r,ov(i)?(n="",t!=null&&(n=t.replace(sv,"$&/")+"/"),Tc(i,e,n,"",function(d){return d})):i!=null&&(tg(i)&&(i=K6(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(sv,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",ov(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Sf(o,a);s+=Tc(o,e,n,l,i)}else if(l=G6(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Sf(o,a++),s+=Tc(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Gu(t,e,n){if(t==null)return t;var r=[],i=0;return Tc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function Z6(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ft={current:null},Ic={transition:null},X6={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:Ic,ReactCurrentOwner:eg};function X_(){throw Error("act(...) is not supported in production builds of React.")}he.Children={map:Gu,forEach:function(t,e,n){Gu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Gu(t,function(){e++}),e},toArray:function(t){return Gu(t,function(e){return e})||[]},only:function(t){if(!tg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=pa;he.Fragment=F6;he.Profiler=W6;he.PureComponent=X0;he.StrictMode=U6;he.Suspense=H6;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X6;he.act=X_;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=q_({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=eg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)K_.call(e,l)&&!Q_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var d=0;d<l;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:du,type:t.type,key:i,ref:o,props:r,_owner:s}};he.createContext=function(t){return t={$$typeof:z6,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$6,_context:t},t.Consumer=t};he.createElement=Z_;he.createFactory=function(t){var e=Z_.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:B6,render:t}};he.isValidElement=tg;he.lazy=function(t){return{$$typeof:Y6,_payload:{_status:-1,_result:t},_init:Z6}};he.memo=function(t,e){return{$$typeof:q6,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=Ic.transition;Ic.transition={};try{t()}finally{Ic.transition=e}};he.unstable_act=X_;he.useCallback=function(t,e){return Ft.current.useCallback(t,e)};he.useContext=function(t){return Ft.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return Ft.current.useDeferredValue(t)};he.useEffect=function(t,e){return Ft.current.useEffect(t,e)};he.useId=function(){return Ft.current.useId()};he.useImperativeHandle=function(t,e,n){return Ft.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return Ft.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return Ft.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return Ft.current.useMemo(t,e)};he.useReducer=function(t,e,n){return Ft.current.useReducer(t,e,n)};he.useRef=function(t){return Ft.current.useRef(t)};he.useState=function(t){return Ft.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return Ft.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return Ft.current.useTransition()};he.version="18.3.1";B_.exports=he;var j=B_.exports;const c=cu(j),J6=N6({__proto__:null,default:c},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eS=j,tS=Symbol.for("react.element"),nS=Symbol.for("react.fragment"),rS=Object.prototype.hasOwnProperty,iS=eS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oS={key:!0,ref:!0,__self:!0,__source:!0};function J_(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)rS.call(e,r)&&!oS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tS,type:t,key:o,ref:s,props:i,_owner:iS.current}}rh.Fragment=nS;rh.jsx=J_;rh.jsxs=J_;z_.exports=rh;var h=z_.exports,eE={exports:{}},an={},tE={exports:{}},nE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,G){var Z=B.length;B.push(G);e:for(;0<Z;){var ce=Z-1>>>1,re=B[ce];if(0<i(re,G))B[ce]=G,B[Z]=re,Z=ce;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],Z=B.pop();if(Z!==G){B[0]=Z;e:for(var ce=0,re=B.length,me=re>>>1;ce<me;){var Ye=2*(ce+1)-1,Be=B[Ye],Ge=Ye+1,F=B[Ge];if(0>i(Be,Z))Ge<re&&0>i(F,Be)?(B[ce]=F,B[Ge]=Z,ce=Ge):(B[ce]=Be,B[Ye]=Z,ce=Ye);else if(Ge<re&&0>i(F,Z))B[ce]=F,B[Ge]=Z,ce=Ge;else break e}}return G}function i(B,G){var Z=B.sortIndex-G.sortIndex;return Z!==0?Z:B.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],d=[],f=1,m=null,_=3,v=!1,x=!1,L=!1,w=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(B){for(var G=n(d);G!==null;){if(G.callback===null)r(d);else if(G.startTime<=B)r(d),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(d)}}function S(B){if(L=!1,E(B),!x)if(n(l)!==null)x=!0,ye(P);else{var G=n(d);G!==null&&Ee(S,G.startTime-B)}}function P(B,G){x=!1,L&&(L=!1,y(I),I=-1),v=!0;var Z=_;try{for(E(G),m=n(l);m!==null&&(!(m.expirationTime>G)||B&&!D());){var ce=m.callback;if(typeof ce=="function"){m.callback=null,_=m.priorityLevel;var re=ce(m.expirationTime<=G);G=t.unstable_now(),typeof re=="function"?m.callback=re:m===n(l)&&r(l),E(G)}else r(l);m=n(l)}if(m!==null)var me=!0;else{var Ye=n(d);Ye!==null&&Ee(S,Ye.startTime-G),me=!1}return me}finally{m=null,_=Z,v=!1}}var O=!1,T=null,I=-1,A=5,b=-1;function D(){return!(t.unstable_now()-b<A)}function M(){if(T!==null){var B=t.unstable_now();b=B;var G=!0;try{G=T(!0,B)}finally{G?R():(O=!1,T=null)}}else O=!1}var R;if(typeof g=="function")R=function(){g(M)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ie=de.port2;de.port1.onmessage=M,R=function(){ie.postMessage(null)}}else R=function(){w(M,0)};function ye(B){T=B,O||(O=!0,R())}function Ee(B,G){I=w(function(){B(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){x||v||(x=!0,ye(P))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var Z=_;_=G;try{return B()}finally{_=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=_;_=B;try{return G()}finally{_=Z}},t.unstable_scheduleCallback=function(B,G,Z){var ce=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ce+Z:ce):Z=ce,B){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Z+re,B={id:f++,callback:G,priorityLevel:B,startTime:Z,expirationTime:re,sortIndex:-1},Z>ce?(B.sortIndex=Z,e(d,B),n(l)===null&&B===n(d)&&(L?(y(I),I=-1):L=!0,Ee(S,Z-ce))):(B.sortIndex=re,e(l,B),x||v||(x=!0,ye(P))),B},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(B){var G=_;return function(){var Z=_;_=G;try{return B.apply(this,arguments)}finally{_=Z}}}})(nE);tE.exports=nE;var sS=tE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aS=j,sn=sS;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rE=new Set,bl={};function yo(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(bl[t]=e,t=0;t<e.length;t++)rE.add(e[t])}var wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fp=Object.prototype.hasOwnProperty,lS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,av={},lv={};function uS(t){return Fp.call(lv,t)?!0:Fp.call(av,t)?!1:lS.test(t)?lv[t]=!0:(av[t]=!0,!1)}function cS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dS(t,e,n,r){if(e===null||typeof e>"u"||cS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ut(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){gt[t]=new Ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];gt[e]=new Ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){gt[t]=new Ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){gt[t]=new Ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){gt[t]=new Ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){gt[t]=new Ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){gt[t]=new Ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){gt[t]=new Ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){gt[t]=new Ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var ng=/[\-:]([a-z])/g;function rg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ng,rg);gt[e]=new Ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ng,rg);gt[e]=new Ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ng,rg);gt[e]=new Ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){gt[t]=new Ut(t,1,!1,t.toLowerCase(),null,!1,!1)});gt.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){gt[t]=new Ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function ig(t,e,n,r){var i=gt.hasOwnProperty(e)?gt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dS(e,n,i,r)&&(n=null),r||i===null?uS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rr=aS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ku=Symbol.for("react.element"),ws=Symbol.for("react.portal"),xs=Symbol.for("react.fragment"),og=Symbol.for("react.strict_mode"),Up=Symbol.for("react.profiler"),iE=Symbol.for("react.provider"),oE=Symbol.for("react.context"),sg=Symbol.for("react.forward_ref"),Wp=Symbol.for("react.suspense"),$p=Symbol.for("react.suspense_list"),ag=Symbol.for("react.memo"),Br=Symbol.for("react.lazy"),sE=Symbol.for("react.offscreen"),uv=Symbol.iterator;function Wa(t){return t===null||typeof t!="object"?null:(t=uv&&t[uv]||t["@@iterator"],typeof t=="function"?t:null)}var Ue=Object.assign,Lf;function tl(t){if(Lf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lf=e&&e[1]||""}return`
`+Lf+t}var Cf=!1;function Af(t,e){if(!t||Cf)return"";Cf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Cf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?tl(t):""}function hS(t){switch(t.tag){case 5:return tl(t.type);case 16:return tl("Lazy");case 13:return tl("Suspense");case 19:return tl("SuspenseList");case 0:case 2:case 15:return t=Af(t.type,!1),t;case 11:return t=Af(t.type.render,!1),t;case 1:return t=Af(t.type,!0),t;default:return""}}function zp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xs:return"Fragment";case ws:return"Portal";case Up:return"Profiler";case og:return"StrictMode";case Wp:return"Suspense";case $p:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case oE:return(t.displayName||"Context")+".Consumer";case iE:return(t._context.displayName||"Context")+".Provider";case sg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ag:return e=t.displayName||null,e!==null?e:zp(t.type)||"Memo";case Br:e=t._payload,t=t._init;try{return zp(t(e))}catch{}}return null}function fS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zp(e);case 8:return e===og?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function aE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pS(t){var e=aE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qu(t){t._valueTracker||(t._valueTracker=pS(t))}function lE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=aE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bp(t,e){var n=e.checked;return Ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function cv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uE(t,e){e=e.checked,e!=null&&ig(t,"checked",e,!1)}function Hp(t,e){uE(t,e);var n=yi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qp(t,e.type,n):e.hasOwnProperty("defaultValue")&&qp(t,e.type,yi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qp(t,e,n){(e!=="number"||Xc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var nl=Array.isArray;function Vs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Yp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(nl(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yi(n)}}function cE(t,e){var n=yi(e.value),r=yi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function fv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zu,hE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zu=Zu||document.createElement("div"),Zu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function jl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mS=["Webkit","ms","Moz","O"];Object.keys(fl).forEach(function(t){mS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fl[e]=fl[t]})});function fE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fl.hasOwnProperty(t)&&fl[t]?(""+e).trim():e+"px"}function pE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gS=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kp(t,e){if(e){if(gS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Qp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zp=null;function lg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xp=null,Fs=null,Us=null;function pv(t){if(t=pu(t)){if(typeof Xp!="function")throw Error(z(280));var e=t.stateNode;e&&(e=lh(e),Xp(t.stateNode,t.type,e))}}function mE(t){Fs?Us?Us.push(t):Us=[t]:Fs=t}function gE(){if(Fs){var t=Fs,e=Us;if(Us=Fs=null,pv(t),e)for(t=0;t<e.length;t++)pv(e[t])}}function yE(t,e){return t(e)}function vE(){}var Pf=!1;function kE(t,e,n){if(Pf)return t(e,n);Pf=!0;try{return yE(t,e,n)}finally{Pf=!1,(Fs!==null||Us!==null)&&(vE(),gE())}}function Dl(t,e){var n=t.stateNode;if(n===null)return null;var r=lh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Jp=!1;if(wr)try{var $a={};Object.defineProperty($a,"passive",{get:function(){Jp=!0}}),window.addEventListener("test",$a,$a),window.removeEventListener("test",$a,$a)}catch{Jp=!1}function yS(t,e,n,r,i,o,s,a,l){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var pl=!1,Jc=null,ed=!1,em=null,vS={onError:function(t){pl=!0,Jc=t}};function kS(t,e,n,r,i,o,s,a,l){pl=!1,Jc=null,yS.apply(vS,arguments)}function _S(t,e,n,r,i,o,s,a,l){if(kS.apply(this,arguments),pl){if(pl){var d=Jc;pl=!1,Jc=null}else throw Error(z(198));ed||(ed=!0,em=d)}}function vo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _E(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mv(t){if(vo(t)!==t)throw Error(z(188))}function ES(t){var e=t.alternate;if(!e){if(e=vo(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return mv(i),t;if(o===r)return mv(i),e;o=o.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function EE(t){return t=ES(t),t!==null?wE(t):null}function wE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wE(t);if(e!==null)return e;t=t.sibling}return null}var xE=sn.unstable_scheduleCallback,gv=sn.unstable_cancelCallback,wS=sn.unstable_shouldYield,xS=sn.unstable_requestPaint,Qe=sn.unstable_now,TS=sn.unstable_getCurrentPriorityLevel,ug=sn.unstable_ImmediatePriority,TE=sn.unstable_UserBlockingPriority,td=sn.unstable_NormalPriority,IS=sn.unstable_LowPriority,IE=sn.unstable_IdlePriority,ih=null,qn=null;function SS(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(ih,t,void 0,(t.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:AS,LS=Math.log,CS=Math.LN2;function AS(t){return t>>>=0,t===0?32:31-(LS(t)/CS|0)|0}var Xu=64,Ju=4194304;function rl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=rl(a):(o&=s,o!==0&&(r=rl(o)))}else s=n&~i,s!==0?r=rl(s):o!==0&&(r=rl(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Cn(e),i=1<<n,r|=t[n],e&=~i;return r}function PS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function RS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Cn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=PS(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function tm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function SE(){var t=Xu;return Xu<<=1,!(Xu&4194240)&&(Xu=64),t}function Rf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function hu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Cn(e),t[e]=n}function bS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Cn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function cg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ce=0;function LE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var CE,dg,AE,PE,RE,nm=!1,ec=[],ni=null,ri=null,ii=null,Ol=new Map,Ml=new Map,qr=[],jS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yv(t,e){switch(t){case"focusin":case"focusout":ni=null;break;case"dragenter":case"dragleave":ri=null;break;case"mouseover":case"mouseout":ii=null;break;case"pointerover":case"pointerout":Ol.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(e.pointerId)}}function za(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=pu(e),e!==null&&dg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function DS(t,e,n,r,i){switch(e){case"focusin":return ni=za(ni,t,e,n,r,i),!0;case"dragenter":return ri=za(ri,t,e,n,r,i),!0;case"mouseover":return ii=za(ii,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ol.set(o,za(Ol.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ml.set(o,za(Ml.get(o)||null,t,e,n,r,i)),!0}return!1}function bE(t){var e=Hi(t.target);if(e!==null){var n=vo(e);if(n!==null){if(e=n.tag,e===13){if(e=_E(n),e!==null){t.blockedOn=e,RE(t.priority,function(){AE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Zp=r,n.target.dispatchEvent(r),Zp=null}else return e=pu(n),e!==null&&dg(e),t.blockedOn=n,!1;e.shift()}return!0}function vv(t,e,n){Sc(t)&&n.delete(e)}function OS(){nm=!1,ni!==null&&Sc(ni)&&(ni=null),ri!==null&&Sc(ri)&&(ri=null),ii!==null&&Sc(ii)&&(ii=null),Ol.forEach(vv),Ml.forEach(vv)}function Ba(t,e){t.blockedOn===e&&(t.blockedOn=null,nm||(nm=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,OS)))}function Nl(t){function e(i){return Ba(i,t)}if(0<ec.length){Ba(ec[0],t);for(var n=1;n<ec.length;n++){var r=ec[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ni!==null&&Ba(ni,t),ri!==null&&Ba(ri,t),ii!==null&&Ba(ii,t),Ol.forEach(e),Ml.forEach(e),n=0;n<qr.length;n++)r=qr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qr.length&&(n=qr[0],n.blockedOn===null);)bE(n),n.blockedOn===null&&qr.shift()}var Ws=Rr.ReactCurrentBatchConfig,rd=!0;function MS(t,e,n,r){var i=Ce,o=Ws.transition;Ws.transition=null;try{Ce=1,hg(t,e,n,r)}finally{Ce=i,Ws.transition=o}}function NS(t,e,n,r){var i=Ce,o=Ws.transition;Ws.transition=null;try{Ce=4,hg(t,e,n,r)}finally{Ce=i,Ws.transition=o}}function hg(t,e,n,r){if(rd){var i=rm(t,e,n,r);if(i===null)Wf(t,e,r,id,n),yv(t,r);else if(DS(i,t,e,n,r))r.stopPropagation();else if(yv(t,r),e&4&&-1<jS.indexOf(t)){for(;i!==null;){var o=pu(i);if(o!==null&&CE(o),o=rm(t,e,n,r),o===null&&Wf(t,e,r,id,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Wf(t,e,r,null,n)}}var id=null;function rm(t,e,n,r){if(id=null,t=lg(r),t=Hi(t),t!==null)if(e=vo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_E(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return id=t,null}function jE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TS()){case ug:return 1;case TE:return 4;case td:case IS:return 16;case IE:return 536870912;default:return 16}default:return 16}}var Zr=null,fg=null,Lc=null;function DE(){if(Lc)return Lc;var t,e=fg,n=e.length,r,i="value"in Zr?Zr.value:Zr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Lc=i.slice(t,1<r?1-r:void 0)}function Cc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tc(){return!0}function kv(){return!1}function ln(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?tc:kv,this.isPropagationStopped=kv,this}return Ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tc)},persist:function(){},isPersistent:tc}),e}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pg=ln(ma),fu=Ue({},ma,{view:0,detail:0}),VS=ln(fu),bf,jf,Ha,oh=Ue({},fu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ha&&(Ha&&t.type==="mousemove"?(bf=t.screenX-Ha.screenX,jf=t.screenY-Ha.screenY):jf=bf=0,Ha=t),bf)},movementY:function(t){return"movementY"in t?t.movementY:jf}}),_v=ln(oh),FS=Ue({},oh,{dataTransfer:0}),US=ln(FS),WS=Ue({},fu,{relatedTarget:0}),Df=ln(WS),$S=Ue({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),zS=ln($S),BS=Ue({},ma,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HS=ln(BS),qS=Ue({},ma,{data:0}),Ev=ln(qS),YS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=KS[t])?!!e[t]:!1}function mg(){return QS}var ZS=Ue({},fu,{key:function(t){if(t.key){var e=YS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mg,charCode:function(t){return t.type==="keypress"?Cc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),XS=ln(ZS),JS=Ue({},oh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wv=ln(JS),e4=Ue({},fu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mg}),t4=ln(e4),n4=Ue({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),r4=ln(n4),i4=Ue({},oh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),o4=ln(i4),s4=[9,13,27,32],gg=wr&&"CompositionEvent"in window,ml=null;wr&&"documentMode"in document&&(ml=document.documentMode);var a4=wr&&"TextEvent"in window&&!ml,OE=wr&&(!gg||ml&&8<ml&&11>=ml),xv=" ",Tv=!1;function ME(t,e){switch(t){case"keyup":return s4.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function NE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ts=!1;function l4(t,e){switch(t){case"compositionend":return NE(e);case"keypress":return e.which!==32?null:(Tv=!0,xv);case"textInput":return t=e.data,t===xv&&Tv?null:t;default:return null}}function u4(t,e){if(Ts)return t==="compositionend"||!gg&&ME(t,e)?(t=DE(),Lc=fg=Zr=null,Ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return OE&&e.locale!=="ko"?null:e.data;default:return null}}var c4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!c4[t.type]:e==="textarea"}function VE(t,e,n,r){mE(r),e=od(e,"onChange"),0<e.length&&(n=new pg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var gl=null,Vl=null;function d4(t){KE(t,0)}function sh(t){var e=Ls(t);if(lE(e))return t}function h4(t,e){if(t==="change")return e}var FE=!1;if(wr){var Of;if(wr){var Mf="oninput"in document;if(!Mf){var Sv=document.createElement("div");Sv.setAttribute("oninput","return;"),Mf=typeof Sv.oninput=="function"}Of=Mf}else Of=!1;FE=Of&&(!document.documentMode||9<document.documentMode)}function Lv(){gl&&(gl.detachEvent("onpropertychange",UE),Vl=gl=null)}function UE(t){if(t.propertyName==="value"&&sh(Vl)){var e=[];VE(e,Vl,t,lg(t)),kE(d4,e)}}function f4(t,e,n){t==="focusin"?(Lv(),gl=e,Vl=n,gl.attachEvent("onpropertychange",UE)):t==="focusout"&&Lv()}function p4(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sh(Vl)}function m4(t,e){if(t==="click")return sh(e)}function g4(t,e){if(t==="input"||t==="change")return sh(e)}function y4(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rn=typeof Object.is=="function"?Object.is:y4;function Fl(t,e){if(Rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fp.call(e,i)||!Rn(t[i],e[i]))return!1}return!0}function Cv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Av(t,e){var n=Cv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cv(n)}}function WE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?WE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $E(){for(var t=window,e=Xc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xc(t.document)}return e}function yg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function v4(t){var e=$E(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&WE(n.ownerDocument.documentElement,n)){if(r!==null&&yg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Av(n,o);var s=Av(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var k4=wr&&"documentMode"in document&&11>=document.documentMode,Is=null,im=null,yl=null,om=!1;function Pv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;om||Is==null||Is!==Xc(r)||(r=Is,"selectionStart"in r&&yg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yl&&Fl(yl,r)||(yl=r,r=od(im,"onSelect"),0<r.length&&(e=new pg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Is)))}function nc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:nc("Animation","AnimationEnd"),animationiteration:nc("Animation","AnimationIteration"),animationstart:nc("Animation","AnimationStart"),transitionend:nc("Transition","TransitionEnd")},Nf={},zE={};wr&&(zE=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function ah(t){if(Nf[t])return Nf[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zE)return Nf[t]=e[n];return t}var BE=ah("animationend"),HE=ah("animationiteration"),qE=ah("animationstart"),YE=ah("transitionend"),GE=new Map,Rv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ii(t,e){GE.set(t,e),yo(e,[t])}for(var Vf=0;Vf<Rv.length;Vf++){var Ff=Rv[Vf],_4=Ff.toLowerCase(),E4=Ff[0].toUpperCase()+Ff.slice(1);Ii(_4,"on"+E4)}Ii(BE,"onAnimationEnd");Ii(HE,"onAnimationIteration");Ii(qE,"onAnimationStart");Ii("dblclick","onDoubleClick");Ii("focusin","onFocus");Ii("focusout","onBlur");Ii(YE,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);yo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yo("onBeforeInput",["compositionend","keypress","textInput","paste"]);yo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w4=new Set("cancel close invalid load scroll toggle".split(" ").concat(il));function bv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,_S(r,e,void 0,t),t.currentTarget=null}function KE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,d=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;bv(i,a,d),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,d=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;bv(i,a,d),o=l}}}if(ed)throw t=em,ed=!1,em=null,t}function je(t,e){var n=e[cm];n===void 0&&(n=e[cm]=new Set);var r=t+"__bubble";n.has(r)||(QE(e,t,2,!1),n.add(r))}function Uf(t,e,n){var r=0;e&&(r|=4),QE(n,t,r,e)}var rc="_reactListening"+Math.random().toString(36).slice(2);function Ul(t){if(!t[rc]){t[rc]=!0,rE.forEach(function(n){n!=="selectionchange"&&(w4.has(n)||Uf(n,!1,t),Uf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rc]||(e[rc]=!0,Uf("selectionchange",!1,e))}}function QE(t,e,n,r){switch(jE(e)){case 1:var i=MS;break;case 4:i=NS;break;default:i=hg}n=i.bind(null,e,n,t),i=void 0,!Jp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Wf(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Hi(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}kE(function(){var d=o,f=lg(n),m=[];e:{var _=GE.get(t);if(_!==void 0){var v=pg,x=t;switch(t){case"keypress":if(Cc(n)===0)break e;case"keydown":case"keyup":v=XS;break;case"focusin":x="focus",v=Df;break;case"focusout":x="blur",v=Df;break;case"beforeblur":case"afterblur":v=Df;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=_v;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=US;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=t4;break;case BE:case HE:case qE:v=zS;break;case YE:v=r4;break;case"scroll":v=VS;break;case"wheel":v=o4;break;case"copy":case"cut":case"paste":v=HS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=wv}var L=(e&4)!==0,w=!L&&t==="scroll",y=L?_!==null?_+"Capture":null:_;L=[];for(var g=d,E;g!==null;){E=g;var S=E.stateNode;if(E.tag===5&&S!==null&&(E=S,y!==null&&(S=Dl(g,y),S!=null&&L.push(Wl(g,S,E)))),w)break;g=g.return}0<L.length&&(_=new v(_,x,null,n,f),m.push({event:_,listeners:L}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",_&&n!==Zp&&(x=n.relatedTarget||n.fromElement)&&(Hi(x)||x[xr]))break e;if((v||_)&&(_=f.window===f?f:(_=f.ownerDocument)?_.defaultView||_.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=d,x=x?Hi(x):null,x!==null&&(w=vo(x),x!==w||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=d),v!==x)){if(L=_v,S="onMouseLeave",y="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(L=wv,S="onPointerLeave",y="onPointerEnter",g="pointer"),w=v==null?_:Ls(v),E=x==null?_:Ls(x),_=new L(S,g+"leave",v,n,f),_.target=w,_.relatedTarget=E,S=null,Hi(f)===d&&(L=new L(y,g+"enter",x,n,f),L.target=E,L.relatedTarget=w,S=L),w=S,v&&x)t:{for(L=v,y=x,g=0,E=L;E;E=us(E))g++;for(E=0,S=y;S;S=us(S))E++;for(;0<g-E;)L=us(L),g--;for(;0<E-g;)y=us(y),E--;for(;g--;){if(L===y||y!==null&&L===y.alternate)break t;L=us(L),y=us(y)}L=null}else L=null;v!==null&&jv(m,_,v,L,!1),x!==null&&w!==null&&jv(m,w,x,L,!0)}}e:{if(_=d?Ls(d):window,v=_.nodeName&&_.nodeName.toLowerCase(),v==="select"||v==="input"&&_.type==="file")var P=h4;else if(Iv(_))if(FE)P=g4;else{P=p4;var O=f4}else(v=_.nodeName)&&v.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(P=m4);if(P&&(P=P(t,d))){VE(m,P,n,f);break e}O&&O(t,_,d),t==="focusout"&&(O=_._wrapperState)&&O.controlled&&_.type==="number"&&qp(_,"number",_.value)}switch(O=d?Ls(d):window,t){case"focusin":(Iv(O)||O.contentEditable==="true")&&(Is=O,im=d,yl=null);break;case"focusout":yl=im=Is=null;break;case"mousedown":om=!0;break;case"contextmenu":case"mouseup":case"dragend":om=!1,Pv(m,n,f);break;case"selectionchange":if(k4)break;case"keydown":case"keyup":Pv(m,n,f)}var T;if(gg)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Ts?ME(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(OE&&n.locale!=="ko"&&(Ts||I!=="onCompositionStart"?I==="onCompositionEnd"&&Ts&&(T=DE()):(Zr=f,fg="value"in Zr?Zr.value:Zr.textContent,Ts=!0)),O=od(d,I),0<O.length&&(I=new Ev(I,t,null,n,f),m.push({event:I,listeners:O}),T?I.data=T:(T=NE(n),T!==null&&(I.data=T)))),(T=a4?l4(t,n):u4(t,n))&&(d=od(d,"onBeforeInput"),0<d.length&&(f=new Ev("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=T))}KE(m,e)})}function Wl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function od(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Dl(t,n),o!=null&&r.unshift(Wl(t,o,i)),o=Dl(t,e),o!=null&&r.push(Wl(t,o,i))),t=t.return}return r}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jv(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,d=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&d!==null&&(a=d,i?(l=Dl(n,o),l!=null&&s.unshift(Wl(n,l,a))):i||(l=Dl(n,o),l!=null&&s.push(Wl(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var x4=/\r\n?/g,T4=/\u0000|\uFFFD/g;function Dv(t){return(typeof t=="string"?t:""+t).replace(x4,`
`).replace(T4,"")}function ic(t,e,n){if(e=Dv(e),Dv(t)!==e&&n)throw Error(z(425))}function sd(){}var sm=null,am=null;function lm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var um=typeof setTimeout=="function"?setTimeout:void 0,I4=typeof clearTimeout=="function"?clearTimeout:void 0,Ov=typeof Promise=="function"?Promise:void 0,S4=typeof queueMicrotask=="function"?queueMicrotask:typeof Ov<"u"?function(t){return Ov.resolve(null).then(t).catch(L4)}:um;function L4(t){setTimeout(function(){throw t})}function $f(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Nl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Nl(e)}function oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ga=Math.random().toString(36).slice(2),zn="__reactFiber$"+ga,$l="__reactProps$"+ga,xr="__reactContainer$"+ga,cm="__reactEvents$"+ga,C4="__reactListeners$"+ga,A4="__reactHandles$"+ga;function Hi(t){var e=t[zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xr]||n[zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mv(t);t!==null;){if(n=t[zn])return n;t=Mv(t)}return e}t=n,n=t.parentNode}return null}function pu(t){return t=t[zn]||t[xr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function lh(t){return t[$l]||null}var dm=[],Cs=-1;function Si(t){return{current:t}}function Me(t){0>Cs||(t.current=dm[Cs],dm[Cs]=null,Cs--)}function Re(t,e){Cs++,dm[Cs]=t.current,t.current=e}var vi={},At=Si(vi),Yt=Si(!1),ro=vi;function Ks(t,e){var n=t.type.contextTypes;if(!n)return vi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Gt(t){return t=t.childContextTypes,t!=null}function ad(){Me(Yt),Me(At)}function Nv(t,e,n){if(At.current!==vi)throw Error(z(168));Re(At,e),Re(Yt,n)}function ZE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,fS(t)||"Unknown",i));return Ue({},n,r)}function ld(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vi,ro=At.current,Re(At,t),Re(Yt,Yt.current),!0}function Vv(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=ZE(t,e,ro),r.__reactInternalMemoizedMergedChildContext=t,Me(Yt),Me(At),Re(At,t)):Me(Yt),Re(Yt,n)}var hr=null,uh=!1,zf=!1;function XE(t){hr===null?hr=[t]:hr.push(t)}function P4(t){uh=!0,XE(t)}function Li(){if(!zf&&hr!==null){zf=!0;var t=0,e=Ce;try{var n=hr;for(Ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}hr=null,uh=!1}catch(i){throw hr!==null&&(hr=hr.slice(t+1)),xE(ug,Li),i}finally{Ce=e,zf=!1}}return null}var As=[],Ps=0,ud=null,cd=0,cn=[],dn=0,io=null,pr=1,mr="";function Fi(t,e){As[Ps++]=cd,As[Ps++]=ud,ud=t,cd=e}function JE(t,e,n){cn[dn++]=pr,cn[dn++]=mr,cn[dn++]=io,io=t;var r=pr;t=mr;var i=32-Cn(r)-1;r&=~(1<<i),n+=1;var o=32-Cn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,pr=1<<32-Cn(e)+i|n<<i|r,mr=o+t}else pr=1<<o|n<<i|r,mr=t}function vg(t){t.return!==null&&(Fi(t,1),JE(t,1,0))}function kg(t){for(;t===ud;)ud=As[--Ps],As[Ps]=null,cd=As[--Ps],As[Ps]=null;for(;t===io;)io=cn[--dn],cn[dn]=null,mr=cn[--dn],cn[dn]=null,pr=cn[--dn],cn[dn]=null}var rn=null,tn=null,Ne=!1,Sn=null;function ew(t,e){var n=hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,rn=t,tn=oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,rn=t,tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=io!==null?{id:pr,overflow:mr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,rn=t,tn=null,!0):!1;default:return!1}}function hm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fm(t){if(Ne){var e=tn;if(e){var n=e;if(!Fv(t,e)){if(hm(t))throw Error(z(418));e=oi(n.nextSibling);var r=rn;e&&Fv(t,e)?ew(r,n):(t.flags=t.flags&-4097|2,Ne=!1,rn=t)}}else{if(hm(t))throw Error(z(418));t.flags=t.flags&-4097|2,Ne=!1,rn=t}}}function Uv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;rn=t}function oc(t){if(t!==rn)return!1;if(!Ne)return Uv(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lm(t.type,t.memoizedProps)),e&&(e=tn)){if(hm(t))throw tw(),Error(z(418));for(;e;)ew(t,e),e=oi(e.nextSibling)}if(Uv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tn=oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tn=null}}else tn=rn?oi(t.stateNode.nextSibling):null;return!0}function tw(){for(var t=tn;t;)t=oi(t.nextSibling)}function Qs(){tn=rn=null,Ne=!1}function _g(t){Sn===null?Sn=[t]:Sn.push(t)}var R4=Rr.ReactCurrentBatchConfig;function qa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function sc(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wv(t){var e=t._init;return e(t._payload)}function nw(t){function e(y,g){if(t){var E=y.deletions;E===null?(y.deletions=[g],y.flags|=16):E.push(g)}}function n(y,g){if(!t)return null;for(;g!==null;)e(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=ui(y,g),y.index=0,y.sibling=null,y}function o(y,g,E){return y.index=E,t?(E=y.alternate,E!==null?(E=E.index,E<g?(y.flags|=2,g):E):(y.flags|=2,g)):(y.flags|=1048576,g)}function s(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,g,E,S){return g===null||g.tag!==6?(g=Qf(E,y.mode,S),g.return=y,g):(g=i(g,E),g.return=y,g)}function l(y,g,E,S){var P=E.type;return P===xs?f(y,g,E.props.children,S,E.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Br&&Wv(P)===g.type)?(S=i(g,E.props),S.ref=qa(y,g,E),S.return=y,S):(S=Oc(E.type,E.key,E.props,null,y.mode,S),S.ref=qa(y,g,E),S.return=y,S)}function d(y,g,E,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==E.containerInfo||g.stateNode.implementation!==E.implementation?(g=Zf(E,y.mode,S),g.return=y,g):(g=i(g,E.children||[]),g.return=y,g)}function f(y,g,E,S,P){return g===null||g.tag!==7?(g=Xi(E,y.mode,S,P),g.return=y,g):(g=i(g,E),g.return=y,g)}function m(y,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Qf(""+g,y.mode,E),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ku:return E=Oc(g.type,g.key,g.props,null,y.mode,E),E.ref=qa(y,null,g),E.return=y,E;case ws:return g=Zf(g,y.mode,E),g.return=y,g;case Br:var S=g._init;return m(y,S(g._payload),E)}if(nl(g)||Wa(g))return g=Xi(g,y.mode,E,null),g.return=y,g;sc(y,g)}return null}function _(y,g,E,S){var P=g!==null?g.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return P!==null?null:a(y,g,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ku:return E.key===P?l(y,g,E,S):null;case ws:return E.key===P?d(y,g,E,S):null;case Br:return P=E._init,_(y,g,P(E._payload),S)}if(nl(E)||Wa(E))return P!==null?null:f(y,g,E,S,null);sc(y,E)}return null}function v(y,g,E,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return y=y.get(E)||null,a(g,y,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ku:return y=y.get(S.key===null?E:S.key)||null,l(g,y,S,P);case ws:return y=y.get(S.key===null?E:S.key)||null,d(g,y,S,P);case Br:var O=S._init;return v(y,g,E,O(S._payload),P)}if(nl(S)||Wa(S))return y=y.get(E)||null,f(g,y,S,P,null);sc(g,S)}return null}function x(y,g,E,S){for(var P=null,O=null,T=g,I=g=0,A=null;T!==null&&I<E.length;I++){T.index>I?(A=T,T=null):A=T.sibling;var b=_(y,T,E[I],S);if(b===null){T===null&&(T=A);break}t&&T&&b.alternate===null&&e(y,T),g=o(b,g,I),O===null?P=b:O.sibling=b,O=b,T=A}if(I===E.length)return n(y,T),Ne&&Fi(y,I),P;if(T===null){for(;I<E.length;I++)T=m(y,E[I],S),T!==null&&(g=o(T,g,I),O===null?P=T:O.sibling=T,O=T);return Ne&&Fi(y,I),P}for(T=r(y,T);I<E.length;I++)A=v(T,y,I,E[I],S),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?I:A.key),g=o(A,g,I),O===null?P=A:O.sibling=A,O=A);return t&&T.forEach(function(D){return e(y,D)}),Ne&&Fi(y,I),P}function L(y,g,E,S){var P=Wa(E);if(typeof P!="function")throw Error(z(150));if(E=P.call(E),E==null)throw Error(z(151));for(var O=P=null,T=g,I=g=0,A=null,b=E.next();T!==null&&!b.done;I++,b=E.next()){T.index>I?(A=T,T=null):A=T.sibling;var D=_(y,T,b.value,S);if(D===null){T===null&&(T=A);break}t&&T&&D.alternate===null&&e(y,T),g=o(D,g,I),O===null?P=D:O.sibling=D,O=D,T=A}if(b.done)return n(y,T),Ne&&Fi(y,I),P;if(T===null){for(;!b.done;I++,b=E.next())b=m(y,b.value,S),b!==null&&(g=o(b,g,I),O===null?P=b:O.sibling=b,O=b);return Ne&&Fi(y,I),P}for(T=r(y,T);!b.done;I++,b=E.next())b=v(T,y,I,b.value,S),b!==null&&(t&&b.alternate!==null&&T.delete(b.key===null?I:b.key),g=o(b,g,I),O===null?P=b:O.sibling=b,O=b);return t&&T.forEach(function(M){return e(y,M)}),Ne&&Fi(y,I),P}function w(y,g,E,S){if(typeof E=="object"&&E!==null&&E.type===xs&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Ku:e:{for(var P=E.key,O=g;O!==null;){if(O.key===P){if(P=E.type,P===xs){if(O.tag===7){n(y,O.sibling),g=i(O,E.props.children),g.return=y,y=g;break e}}else if(O.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Br&&Wv(P)===O.type){n(y,O.sibling),g=i(O,E.props),g.ref=qa(y,O,E),g.return=y,y=g;break e}n(y,O);break}else e(y,O);O=O.sibling}E.type===xs?(g=Xi(E.props.children,y.mode,S,E.key),g.return=y,y=g):(S=Oc(E.type,E.key,E.props,null,y.mode,S),S.ref=qa(y,g,E),S.return=y,y=S)}return s(y);case ws:e:{for(O=E.key;g!==null;){if(g.key===O)if(g.tag===4&&g.stateNode.containerInfo===E.containerInfo&&g.stateNode.implementation===E.implementation){n(y,g.sibling),g=i(g,E.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else e(y,g);g=g.sibling}g=Zf(E,y.mode,S),g.return=y,y=g}return s(y);case Br:return O=E._init,w(y,g,O(E._payload),S)}if(nl(E))return x(y,g,E,S);if(Wa(E))return L(y,g,E,S);sc(y,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,g!==null&&g.tag===6?(n(y,g.sibling),g=i(g,E),g.return=y,y=g):(n(y,g),g=Qf(E,y.mode,S),g.return=y,y=g),s(y)):n(y,g)}return w}var Zs=nw(!0),rw=nw(!1),dd=Si(null),hd=null,Rs=null,Eg=null;function wg(){Eg=Rs=hd=null}function xg(t){var e=dd.current;Me(dd),t._currentValue=e}function pm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $s(t,e){hd=t,Eg=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Bt=!0),t.firstContext=null)}function mn(t){var e=t._currentValue;if(Eg!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(hd===null)throw Error(z(308));Rs=t,hd.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var qi=null;function Tg(t){qi===null?qi=[t]:qi.push(t)}function iw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Tg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Tr(t,r)}function Tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hr=!1;function Ig(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ow(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function si(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Tr(t,n)}return i=r.interleaved,i===null?(e.next=e,Tg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Tr(t,n)}function Ac(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cg(t,n)}}function $v(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fd(t,e,n,r){var i=t.updateQueue;Hr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,d=l.next;l.next=null,s===null?o=d:s.next=d,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=d:a.next=d,f.lastBaseUpdate=l))}if(o!==null){var m=i.baseState;s=0,f=d=l=null,a=o;do{var _=a.lane,v=a.eventTime;if((r&_)===_){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,L=a;switch(_=e,v=n,L.tag){case 1:if(x=L.payload,typeof x=="function"){m=x.call(v,m,_);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=L.payload,_=typeof x=="function"?x.call(v,m,_):x,_==null)break e;m=Ue({},m,_);break e;case 2:Hr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,_=i.effects,_===null?i.effects=[a]:_.push(a))}else v={eventTime:v,lane:_,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(d=f=v,l=m):f=f.next=v,s|=_;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;_=a,a=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);if(f===null&&(l=m),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);so|=s,t.lanes=s,t.memoizedState=m}}function zv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var mu={},Yn=Si(mu),zl=Si(mu),Bl=Si(mu);function Yi(t){if(t===mu)throw Error(z(174));return t}function Sg(t,e){switch(Re(Bl,e),Re(zl,t),Re(Yn,mu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gp(e,t)}Me(Yn),Re(Yn,e)}function Xs(){Me(Yn),Me(zl),Me(Bl)}function sw(t){Yi(Bl.current);var e=Yi(Yn.current),n=Gp(e,t.type);e!==n&&(Re(zl,t),Re(Yn,n))}function Lg(t){zl.current===t&&(Me(Yn),Me(zl))}var Ve=Si(0);function pd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bf=[];function Cg(){for(var t=0;t<Bf.length;t++)Bf[t]._workInProgressVersionPrimary=null;Bf.length=0}var Pc=Rr.ReactCurrentDispatcher,Hf=Rr.ReactCurrentBatchConfig,oo=0,Fe=null,rt=null,at=null,md=!1,vl=!1,Hl=0,b4=0;function wt(){throw Error(z(321))}function Ag(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rn(t[n],e[n]))return!1;return!0}function Pg(t,e,n,r,i,o){if(oo=o,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pc.current=t===null||t.memoizedState===null?M4:N4,t=n(r,i),vl){o=0;do{if(vl=!1,Hl=0,25<=o)throw Error(z(301));o+=1,at=rt=null,e.updateQueue=null,Pc.current=V4,t=n(r,i)}while(vl)}if(Pc.current=gd,e=rt!==null&&rt.next!==null,oo=0,at=rt=Fe=null,md=!1,e)throw Error(z(300));return t}function Rg(){var t=Hl!==0;return Hl=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Fe.memoizedState=at=t:at=at.next=t,at}function gn(){if(rt===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=at===null?Fe.memoizedState:at.next;if(e!==null)at=e,rt=t;else{if(t===null)throw Error(z(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},at===null?Fe.memoizedState=at=t:at=at.next=t}return at}function ql(t,e){return typeof e=="function"?e(t):e}function qf(t){var e=gn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=rt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,d=o;do{var f=d.lane;if((oo&f)===f)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(a=l=m,s=r):l=l.next=m,Fe.lanes|=f,so|=f}d=d.next}while(d!==null&&d!==o);l===null?s=r:l.next=a,Rn(r,e.memoizedState)||(Bt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Fe.lanes|=o,so|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yf(t){var e=gn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Rn(o,e.memoizedState)||(Bt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function aw(){}function lw(t,e){var n=Fe,r=gn(),i=e(),o=!Rn(r.memoizedState,i);if(o&&(r.memoizedState=i,Bt=!0),r=r.queue,bg(dw.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,Yl(9,cw.bind(null,n,r,i,e),void 0,null),ut===null)throw Error(z(349));oo&30||uw(n,e,i)}return i}function uw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cw(t,e,n,r){e.value=n,e.getSnapshot=r,hw(e)&&fw(t)}function dw(t,e,n){return n(function(){hw(e)&&fw(t)})}function hw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rn(t,n)}catch{return!0}}function fw(t){var e=Tr(t,1);e!==null&&An(e,t,1,-1)}function Bv(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ql,lastRenderedState:t},e.queue=t,t=t.dispatch=O4.bind(null,Fe,t),[e.memoizedState,t]}function Yl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function pw(){return gn().memoizedState}function Rc(t,e,n,r){var i=Wn();Fe.flags|=t,i.memoizedState=Yl(1|e,n,void 0,r===void 0?null:r)}function ch(t,e,n,r){var i=gn();r=r===void 0?null:r;var o=void 0;if(rt!==null){var s=rt.memoizedState;if(o=s.destroy,r!==null&&Ag(r,s.deps)){i.memoizedState=Yl(e,n,o,r);return}}Fe.flags|=t,i.memoizedState=Yl(1|e,n,o,r)}function Hv(t,e){return Rc(8390656,8,t,e)}function bg(t,e){return ch(2048,8,t,e)}function mw(t,e){return ch(4,2,t,e)}function gw(t,e){return ch(4,4,t,e)}function yw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vw(t,e,n){return n=n!=null?n.concat([t]):null,ch(4,4,yw.bind(null,e,t),n)}function jg(){}function kw(t,e){var n=gn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ag(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function _w(t,e){var n=gn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ag(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ew(t,e,n){return oo&21?(Rn(n,e)||(n=SE(),Fe.lanes|=n,so|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Bt=!0),t.memoizedState=n)}function j4(t,e){var n=Ce;Ce=n!==0&&4>n?n:4,t(!0);var r=Hf.transition;Hf.transition={};try{t(!1),e()}finally{Ce=n,Hf.transition=r}}function ww(){return gn().memoizedState}function D4(t,e,n){var r=li(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xw(t))Tw(e,n);else if(n=iw(t,e,n,r),n!==null){var i=Nt();An(n,t,r,i),Iw(n,e,r)}}function O4(t,e,n){var r=li(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xw(t))Tw(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Rn(a,s)){var l=e.interleaved;l===null?(i.next=i,Tg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=iw(t,e,i,r),n!==null&&(i=Nt(),An(n,t,r,i),Iw(n,e,r))}}function xw(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function Tw(t,e){vl=md=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Iw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cg(t,n)}}var gd={readContext:mn,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},M4={readContext:mn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:mn,useEffect:Hv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rc(4194308,4,yw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rc(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=D4.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:Bv,useDebugValue:jg,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=Bv(!1),e=t[0];return t=j4.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,i=Wn();if(Ne){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),ut===null)throw Error(z(349));oo&30||uw(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Hv(dw.bind(null,r,o,t),[t]),r.flags|=2048,Yl(9,cw.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Wn(),e=ut.identifierPrefix;if(Ne){var n=mr,r=pr;n=(r&~(1<<32-Cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Hl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=b4++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},N4={readContext:mn,useCallback:kw,useContext:mn,useEffect:bg,useImperativeHandle:vw,useInsertionEffect:mw,useLayoutEffect:gw,useMemo:_w,useReducer:qf,useRef:pw,useState:function(){return qf(ql)},useDebugValue:jg,useDeferredValue:function(t){var e=gn();return Ew(e,rt.memoizedState,t)},useTransition:function(){var t=qf(ql)[0],e=gn().memoizedState;return[t,e]},useMutableSource:aw,useSyncExternalStore:lw,useId:ww,unstable_isNewReconciler:!1},V4={readContext:mn,useCallback:kw,useContext:mn,useEffect:bg,useImperativeHandle:vw,useInsertionEffect:mw,useLayoutEffect:gw,useMemo:_w,useReducer:Yf,useRef:pw,useState:function(){return Yf(ql)},useDebugValue:jg,useDeferredValue:function(t){var e=gn();return rt===null?e.memoizedState=t:Ew(e,rt.memoizedState,t)},useTransition:function(){var t=Yf(ql)[0],e=gn().memoizedState;return[t,e]},useMutableSource:aw,useSyncExternalStore:lw,useId:ww,unstable_isNewReconciler:!1};function Tn(t,e){if(t&&t.defaultProps){e=Ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function mm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dh={isMounted:function(t){return(t=t._reactInternals)?vo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=li(t),o=kr(r,i);o.payload=e,n!=null&&(o.callback=n),e=si(t,o,i),e!==null&&(An(e,t,i,r),Ac(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=li(t),o=kr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=si(t,o,i),e!==null&&(An(e,t,i,r),Ac(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=li(t),i=kr(n,r);i.tag=2,e!=null&&(i.callback=e),e=si(t,i,r),e!==null&&(An(e,t,r,n),Ac(e,t,r))}};function qv(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Fl(n,r)||!Fl(i,o):!0}function Sw(t,e,n){var r=!1,i=vi,o=e.contextType;return typeof o=="object"&&o!==null?o=mn(o):(i=Gt(e)?ro:At.current,r=e.contextTypes,o=(r=r!=null)?Ks(t,i):vi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Yv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dh.enqueueReplaceState(e,e.state,null)}function gm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ig(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=mn(o):(o=Gt(e)?ro:At.current,i.context=Ks(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(mm(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&dh.enqueueReplaceState(i,i.state,null),fd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e){try{var n="",r=e;do n+=hS(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Gf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ym(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var F4=typeof WeakMap=="function"?WeakMap:Map;function Lw(t,e,n){n=kr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){vd||(vd=!0,Lm=r),ym(t,e)},n}function Cw(t,e,n){n=kr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ym(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ym(t,e),typeof r!="function"&&(ai===null?ai=new Set([this]):ai.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Gv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new F4;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=J4.bind(null,t,e,n),e.then(t,t))}function Kv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=kr(-1,1),e.tag=2,si(n,e,1))),n.lanes|=1),t)}var U4=Rr.ReactCurrentOwner,Bt=!1;function Ot(t,e,n,r){e.child=t===null?rw(e,null,n,r):Zs(e,t.child,n,r)}function Zv(t,e,n,r,i){n=n.render;var o=e.ref;return $s(e,i),r=Pg(t,e,n,r,o,i),n=Rg(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ir(t,e,i)):(Ne&&n&&vg(e),e.flags|=1,Ot(t,e,r,i),e.child)}function Xv(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Wg(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Aw(t,e,o,r,i)):(t=Oc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fl,n(s,r)&&t.ref===e.ref)return Ir(t,e,i)}return e.flags|=1,t=ui(o,r),t.ref=e.ref,t.return=e,e.child=t}function Aw(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Fl(o,r)&&t.ref===e.ref)if(Bt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Bt=!0);else return e.lanes=t.lanes,Ir(t,e,i)}return vm(t,e,n,r,i)}function Pw(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(js,en),en|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Re(js,en),en|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Re(js,en),en|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Re(js,en),en|=r;return Ot(t,e,i,n),e.child}function Rw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vm(t,e,n,r,i){var o=Gt(n)?ro:At.current;return o=Ks(e,o),$s(e,i),n=Pg(t,e,n,r,o,i),r=Rg(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ir(t,e,i)):(Ne&&r&&vg(e),e.flags|=1,Ot(t,e,n,i),e.child)}function Jv(t,e,n,r,i){if(Gt(n)){var o=!0;ld(e)}else o=!1;if($s(e,i),e.stateNode===null)bc(t,e),Sw(e,n,r),gm(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=mn(d):(d=Gt(n)?ro:At.current,d=Ks(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==d)&&Yv(e,s,r,d),Hr=!1;var _=e.memoizedState;s.state=_,fd(e,r,s,i),l=e.memoizedState,a!==r||_!==l||Yt.current||Hr?(typeof f=="function"&&(mm(e,n,f,r),l=e.memoizedState),(a=Hr||qv(e,n,a,r,_,l,d))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=d,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,ow(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:Tn(e.type,a),s.props=d,m=e.pendingProps,_=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=mn(l):(l=Gt(n)?ro:At.current,l=Ks(e,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||_!==l)&&Yv(e,s,r,l),Hr=!1,_=e.memoizedState,s.state=_,fd(e,r,s,i);var x=e.memoizedState;a!==m||_!==x||Yt.current||Hr?(typeof v=="function"&&(mm(e,n,v,r),x=e.memoizedState),(d=Hr||qv(e,n,d,r,_,x,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),s.props=r,s.state=x,s.context=l,r=d):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return km(t,e,n,r,o,i)}function km(t,e,n,r,i,o){Rw(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Vv(e,n,!1),Ir(t,e,o);r=e.stateNode,U4.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Zs(e,t.child,null,o),e.child=Zs(e,null,a,o)):Ot(t,e,a,o),e.memoizedState=r.state,i&&Vv(e,n,!0),e.child}function bw(t){var e=t.stateNode;e.pendingContext?Nv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Nv(t,e.context,!1),Sg(t,e.containerInfo)}function e2(t,e,n,r,i){return Qs(),_g(i),e.flags|=256,Ot(t,e,n,r),e.child}var _m={dehydrated:null,treeContext:null,retryLane:0};function Em(t){return{baseLanes:t,cachePool:null,transitions:null}}function jw(t,e,n){var r=e.pendingProps,i=Ve.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Re(Ve,i&1),t===null)return fm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ph(s,r,0,null),t=Xi(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Em(n),e.memoizedState=_m,t):Dg(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return W4(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ui(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=ui(a,o):(o=Xi(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Em(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=_m,r}return o=t.child,t=o.sibling,r=ui(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dg(t,e){return e=ph({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ac(t,e,n,r){return r!==null&&_g(r),Zs(e,t.child,null,n),t=Dg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function W4(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Gf(Error(z(422))),ac(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=ph({mode:"visible",children:r.children},i,0,null),o=Xi(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Zs(e,t.child,null,s),e.child.memoizedState=Em(s),e.memoizedState=_m,o);if(!(e.mode&1))return ac(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(z(419)),r=Gf(o,r,void 0),ac(t,e,s,r)}if(a=(s&t.childLanes)!==0,Bt||a){if(r=ut,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Tr(t,i),An(r,t,i,-1))}return Ug(),r=Gf(Error(z(421))),ac(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=eL.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,tn=oi(i.nextSibling),rn=e,Ne=!0,Sn=null,t!==null&&(cn[dn++]=pr,cn[dn++]=mr,cn[dn++]=io,pr=t.id,mr=t.overflow,io=e),e=Dg(e,r.children),e.flags|=4096,e)}function t2(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),pm(t.return,e,n)}function Kf(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Dw(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Ot(t,e,r.children,n),r=Ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&t2(t,n,e);else if(t.tag===19)t2(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Re(Ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&pd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Kf(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&pd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Kf(e,!0,n,null,o);break;case"together":Kf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),so|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=ui(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ui(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $4(t,e,n){switch(e.tag){case 3:bw(e),Qs();break;case 5:sw(e);break;case 1:Gt(e.type)&&ld(e);break;case 4:Sg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Re(dd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Re(Ve,Ve.current&1),e.flags|=128,null):n&e.child.childLanes?jw(t,e,n):(Re(Ve,Ve.current&1),t=Ir(t,e,n),t!==null?t.sibling:null);Re(Ve,Ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Dw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Re(Ve,Ve.current),r)break;return null;case 22:case 23:return e.lanes=0,Pw(t,e,n)}return Ir(t,e,n)}var Ow,wm,Mw,Nw;Ow=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wm=function(){};Mw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yi(Yn.current);var o=null;switch(n){case"input":i=Bp(t,i),r=Bp(t,r),o=[];break;case"select":i=Ue({},i,{value:void 0}),r=Ue({},r,{value:void 0}),o=[];break;case"textarea":i=Yp(t,i),r=Yp(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=sd)}Kp(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(bl.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var l=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&l!==a&&(l!=null||a!=null))if(d==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(bl.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&je("scroll",t),o||a===l||(o=[])):(o=o||[]).push(d,l))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};Nw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ya(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function z4(t,e,n){var r=e.pendingProps;switch(kg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(e),null;case 1:return Gt(e.type)&&ad(),xt(e),null;case 3:return r=e.stateNode,Xs(),Me(Yt),Me(At),Cg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(oc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Sn!==null&&(Pm(Sn),Sn=null))),wm(t,e),xt(e),null;case 5:Lg(e);var i=Yi(Bl.current);if(n=e.type,t!==null&&e.stateNode!=null)Mw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return xt(e),null}if(t=Yi(Yn.current),oc(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[zn]=e,r[$l]=o,t=(e.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<il.length;i++)je(il[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":cv(r,o),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},je("invalid",r);break;case"textarea":hv(r,o),je("invalid",r)}Kp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ic(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ic(r.textContent,a,t),i=["children",""+a]):bl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&je("scroll",r)}switch(n){case"input":Qu(r),dv(r,o,!0);break;case"textarea":Qu(r),fv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=sd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[zn]=e,t[$l]=r,Ow(t,e,!1,!1),e.stateNode=t;e:{switch(s=Qp(n,r),n){case"dialog":je("cancel",t),je("close",t),i=r;break;case"iframe":case"object":case"embed":je("load",t),i=r;break;case"video":case"audio":for(i=0;i<il.length;i++)je(il[i],t);i=r;break;case"source":je("error",t),i=r;break;case"img":case"image":case"link":je("error",t),je("load",t),i=r;break;case"details":je("toggle",t),i=r;break;case"input":cv(t,r),i=Bp(t,r),je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ue({},r,{value:void 0}),je("invalid",t);break;case"textarea":hv(t,r),i=Yp(t,r),je("invalid",t);break;default:i=r}Kp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?pE(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hE(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&jl(t,l):typeof l=="number"&&jl(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(bl.hasOwnProperty(o)?l!=null&&o==="onScroll"&&je("scroll",t):l!=null&&ig(t,o,l,s))}switch(n){case"input":Qu(t),dv(t,r,!1);break;case"textarea":Qu(t),fv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Vs(t,!!r.multiple,o,!1):r.defaultValue!=null&&Vs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=sd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xt(e),null;case 6:if(t&&e.stateNode!=null)Nw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Yi(Bl.current),Yi(Yn.current),oc(e)){if(r=e.stateNode,n=e.memoizedProps,r[zn]=e,(o=r.nodeValue!==n)&&(t=rn,t!==null))switch(t.tag){case 3:ic(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ic(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zn]=e,e.stateNode=r}return xt(e),null;case 13:if(Me(Ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&tn!==null&&e.mode&1&&!(e.flags&128))tw(),Qs(),e.flags|=98560,o=!1;else if(o=oc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(z(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(z(317));o[zn]=e}else Qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xt(e),o=!1}else Sn!==null&&(Pm(Sn),Sn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ve.current&1?it===0&&(it=3):Ug())),e.updateQueue!==null&&(e.flags|=4),xt(e),null);case 4:return Xs(),wm(t,e),t===null&&Ul(e.stateNode.containerInfo),xt(e),null;case 10:return xg(e.type._context),xt(e),null;case 17:return Gt(e.type)&&ad(),xt(e),null;case 19:if(Me(Ve),o=e.memoizedState,o===null)return xt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Ya(o,!1);else{if(it!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=pd(t),s!==null){for(e.flags|=128,Ya(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Re(Ve,Ve.current&1|2),e.child}t=t.sibling}o.tail!==null&&Qe()>ea&&(e.flags|=128,r=!0,Ya(o,!1),e.lanes=4194304)}else{if(!r)if(t=pd(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ya(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ne)return xt(e),null}else 2*Qe()-o.renderingStartTime>ea&&n!==1073741824&&(e.flags|=128,r=!0,Ya(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Qe(),e.sibling=null,n=Ve.current,Re(Ve,r?n&1|2:n&1),e):(xt(e),null);case 22:case 23:return Fg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?en&1073741824&&(xt(e),e.subtreeFlags&6&&(e.flags|=8192)):xt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function B4(t,e){switch(kg(e),e.tag){case 1:return Gt(e.type)&&ad(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xs(),Me(Yt),Me(At),Cg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lg(e),null;case 13:if(Me(Ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));Qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Me(Ve),null;case 4:return Xs(),null;case 10:return xg(e.type._context),null;case 22:case 23:return Fg(),null;case 24:return null;default:return null}}var lc=!1,St=!1,H4=typeof WeakSet=="function"?WeakSet:Set,K=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){qe(t,e,r)}else n.current=null}function xm(t,e,n){try{n()}catch(r){qe(t,e,r)}}var n2=!1;function q4(t,e){if(sm=rd,t=$E(),yg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,d=0,f=0,m=t,_=null;t:for(;;){for(var v;m!==n||i!==0&&m.nodeType!==3||(a=s+i),m!==o||r!==0&&m.nodeType!==3||(l=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(v=m.firstChild)!==null;)_=m,m=v;for(;;){if(m===t)break t;if(_===n&&++d===i&&(a=s),_===o&&++f===r&&(l=s),(v=m.nextSibling)!==null)break;m=_,_=m.parentNode}m=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(am={focusedElem:t,selectionRange:n},rd=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var L=x.memoizedProps,w=x.memoizedState,y=e.stateNode,g=y.getSnapshotBeforeUpdate(e.elementType===e.type?L:Tn(e.type,L),w);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(S){qe(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return x=n2,n2=!1,x}function kl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&xm(e,n,o)}i=i.next}while(i!==r)}}function hh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Tm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vw(t){var e=t.alternate;e!==null&&(t.alternate=null,Vw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zn],delete e[$l],delete e[cm],delete e[C4],delete e[A4])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fw(t){return t.tag===5||t.tag===3||t.tag===4}function r2(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Im(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sd));else if(r!==4&&(t=t.child,t!==null))for(Im(t,e,n),t=t.sibling;t!==null;)Im(t,e,n),t=t.sibling}function Sm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sm(t,e,n),t=t.sibling;t!==null;)Sm(t,e,n),t=t.sibling}var dt=null,In=!1;function Vr(t,e,n){for(n=n.child;n!==null;)Uw(t,e,n),n=n.sibling}function Uw(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(ih,n)}catch{}switch(n.tag){case 5:St||bs(n,e);case 6:var r=dt,i=In;dt=null,Vr(t,e,n),dt=r,In=i,dt!==null&&(In?(t=dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):dt.removeChild(n.stateNode));break;case 18:dt!==null&&(In?(t=dt,n=n.stateNode,t.nodeType===8?$f(t.parentNode,n):t.nodeType===1&&$f(t,n),Nl(t)):$f(dt,n.stateNode));break;case 4:r=dt,i=In,dt=n.stateNode.containerInfo,In=!0,Vr(t,e,n),dt=r,In=i;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&xm(n,e,s),i=i.next}while(i!==r)}Vr(t,e,n);break;case 1:if(!St&&(bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){qe(n,e,a)}Vr(t,e,n);break;case 21:Vr(t,e,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,Vr(t,e,n),St=r):Vr(t,e,n);break;default:Vr(t,e,n)}}function i2(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new H4),e.forEach(function(r){var i=tL.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function En(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:dt=a.stateNode,In=!1;break e;case 3:dt=a.stateNode.containerInfo,In=!0;break e;case 4:dt=a.stateNode.containerInfo,In=!0;break e}a=a.return}if(dt===null)throw Error(z(160));Uw(o,s,i),dt=null,In=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){qe(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ww(e,t),e=e.sibling}function Ww(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(En(e,t),Vn(t),r&4){try{kl(3,t,t.return),hh(3,t)}catch(L){qe(t,t.return,L)}try{kl(5,t,t.return)}catch(L){qe(t,t.return,L)}}break;case 1:En(e,t),Vn(t),r&512&&n!==null&&bs(n,n.return);break;case 5:if(En(e,t),Vn(t),r&512&&n!==null&&bs(n,n.return),t.flags&32){var i=t.stateNode;try{jl(i,"")}catch(L){qe(t,t.return,L)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&uE(i,o),Qp(a,s);var d=Qp(a,o);for(s=0;s<l.length;s+=2){var f=l[s],m=l[s+1];f==="style"?pE(i,m):f==="dangerouslySetInnerHTML"?hE(i,m):f==="children"?jl(i,m):ig(i,f,m,d)}switch(a){case"input":Hp(i,o);break;case"textarea":cE(i,o);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Vs(i,!!o.multiple,v,!1):_!==!!o.multiple&&(o.defaultValue!=null?Vs(i,!!o.multiple,o.defaultValue,!0):Vs(i,!!o.multiple,o.multiple?[]:"",!1))}i[$l]=o}catch(L){qe(t,t.return,L)}}break;case 6:if(En(e,t),Vn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(L){qe(t,t.return,L)}}break;case 3:if(En(e,t),Vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nl(e.containerInfo)}catch(L){qe(t,t.return,L)}break;case 4:En(e,t),Vn(t);break;case 13:En(e,t),Vn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ng=Qe())),r&4&&i2(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(St=(d=St)||f,En(e,t),St=d):En(e,t),Vn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(K=t,f=t.child;f!==null;){for(m=K=f;K!==null;){switch(_=K,v=_.child,_.tag){case 0:case 11:case 14:case 15:kl(4,_,_.return);break;case 1:bs(_,_.return);var x=_.stateNode;if(typeof x.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(L){qe(r,n,L)}}break;case 5:bs(_,_.return);break;case 22:if(_.memoizedState!==null){s2(m);continue}}v!==null?(v.return=_,K=v):s2(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,l=m.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=fE("display",s))}catch(L){qe(t,t.return,L)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(L){qe(t,t.return,L)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:En(e,t),Vn(t),r&4&&i2(t);break;case 21:break;default:En(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fw(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jl(i,""),r.flags&=-33);var o=r2(t);Sm(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=r2(t);Im(t,a,s);break;default:throw Error(z(161))}}catch(l){qe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Y4(t,e,n){K=t,$w(t)}function $w(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||lc;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||St;a=lc;var d=St;if(lc=s,(St=l)&&!d)for(K=i;K!==null;)s=K,l=s.child,s.tag===22&&s.memoizedState!==null?a2(i):l!==null?(l.return=s,K=l):a2(i);for(;o!==null;)K=o,$w(o),o=o.sibling;K=i,lc=a,St=d}o2(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,K=o):o2(t)}}function o2(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:St||hh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!St)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&zv(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zv(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Nl(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}St||e.flags&512&&Tm(e)}catch(_){qe(e,e.return,_)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function s2(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function a2(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hh(4,e)}catch(l){qe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){qe(e,i,l)}}var o=e.return;try{Tm(e)}catch(l){qe(e,o,l)}break;case 5:var s=e.return;try{Tm(e)}catch(l){qe(e,s,l)}}}catch(l){qe(e,e.return,l)}if(e===t){K=null;break}var a=e.sibling;if(a!==null){a.return=e.return,K=a;break}K=e.return}}var G4=Math.ceil,yd=Rr.ReactCurrentDispatcher,Og=Rr.ReactCurrentOwner,fn=Rr.ReactCurrentBatchConfig,ve=0,ut=null,et=null,pt=0,en=0,js=Si(0),it=0,Gl=null,so=0,fh=0,Mg=0,_l=null,$t=null,Ng=0,ea=1/0,cr=null,vd=!1,Lm=null,ai=null,uc=!1,Xr=null,kd=0,El=0,Cm=null,jc=-1,Dc=0;function Nt(){return ve&6?Qe():jc!==-1?jc:jc=Qe()}function li(t){return t.mode&1?ve&2&&pt!==0?pt&-pt:R4.transition!==null?(Dc===0&&(Dc=SE()),Dc):(t=Ce,t!==0||(t=window.event,t=t===void 0?16:jE(t.type)),t):1}function An(t,e,n,r){if(50<El)throw El=0,Cm=null,Error(z(185));hu(t,n,r),(!(ve&2)||t!==ut)&&(t===ut&&(!(ve&2)&&(fh|=n),it===4&&Yr(t,pt)),Kt(t,r),n===1&&ve===0&&!(e.mode&1)&&(ea=Qe()+500,uh&&Li()))}function Kt(t,e){var n=t.callbackNode;RS(t,e);var r=nd(t,t===ut?pt:0);if(r===0)n!==null&&gv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&gv(n),e===1)t.tag===0?P4(l2.bind(null,t)):XE(l2.bind(null,t)),S4(function(){!(ve&6)&&Li()}),n=null;else{switch(LE(r)){case 1:n=ug;break;case 4:n=TE;break;case 16:n=td;break;case 536870912:n=IE;break;default:n=td}n=Qw(n,zw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zw(t,e){if(jc=-1,Dc=0,ve&6)throw Error(z(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var r=nd(t,t===ut?pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=_d(t,r);else{e=r;var i=ve;ve|=2;var o=Hw();(ut!==t||pt!==e)&&(cr=null,ea=Qe()+500,Zi(t,e));do try{Z4();break}catch(a){Bw(t,a)}while(!0);wg(),yd.current=o,ve=i,et!==null?e=0:(ut=null,pt=0,e=it)}if(e!==0){if(e===2&&(i=tm(t),i!==0&&(r=i,e=Am(t,i))),e===1)throw n=Gl,Zi(t,0),Yr(t,r),Kt(t,Qe()),n;if(e===6)Yr(t,r);else{if(i=t.current.alternate,!(r&30)&&!K4(i)&&(e=_d(t,r),e===2&&(o=tm(t),o!==0&&(r=o,e=Am(t,o))),e===1))throw n=Gl,Zi(t,0),Yr(t,r),Kt(t,Qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Ui(t,$t,cr);break;case 3:if(Yr(t,r),(r&130023424)===r&&(e=Ng+500-Qe(),10<e)){if(nd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=um(Ui.bind(null,t,$t,cr),e);break}Ui(t,$t,cr);break;case 4:if(Yr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Cn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*G4(r/1960))-r,10<r){t.timeoutHandle=um(Ui.bind(null,t,$t,cr),r);break}Ui(t,$t,cr);break;case 5:Ui(t,$t,cr);break;default:throw Error(z(329))}}}return Kt(t,Qe()),t.callbackNode===n?zw.bind(null,t):null}function Am(t,e){var n=_l;return t.current.memoizedState.isDehydrated&&(Zi(t,e).flags|=256),t=_d(t,e),t!==2&&(e=$t,$t=n,e!==null&&Pm(e)),t}function Pm(t){$t===null?$t=t:$t.push.apply($t,t)}function K4(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Rn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yr(t,e){for(e&=~Mg,e&=~fh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Cn(e),r=1<<n;t[n]=-1,e&=~r}}function l2(t){if(ve&6)throw Error(z(327));zs();var e=nd(t,0);if(!(e&1))return Kt(t,Qe()),null;var n=_d(t,e);if(t.tag!==0&&n===2){var r=tm(t);r!==0&&(e=r,n=Am(t,r))}if(n===1)throw n=Gl,Zi(t,0),Yr(t,e),Kt(t,Qe()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ui(t,$t,cr),Kt(t,Qe()),null}function Vg(t,e){var n=ve;ve|=1;try{return t(e)}finally{ve=n,ve===0&&(ea=Qe()+500,uh&&Li())}}function ao(t){Xr!==null&&Xr.tag===0&&!(ve&6)&&zs();var e=ve;ve|=1;var n=fn.transition,r=Ce;try{if(fn.transition=null,Ce=1,t)return t()}finally{Ce=r,fn.transition=n,ve=e,!(ve&6)&&Li()}}function Fg(){en=js.current,Me(js)}function Zi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,I4(n)),et!==null)for(n=et.return;n!==null;){var r=n;switch(kg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ad();break;case 3:Xs(),Me(Yt),Me(At),Cg();break;case 5:Lg(r);break;case 4:Xs();break;case 13:Me(Ve);break;case 19:Me(Ve);break;case 10:xg(r.type._context);break;case 22:case 23:Fg()}n=n.return}if(ut=t,et=t=ui(t.current,null),pt=en=e,it=0,Gl=null,Mg=fh=so=0,$t=_l=null,qi!==null){for(e=0;e<qi.length;e++)if(n=qi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}qi=null}return t}function Bw(t,e){do{var n=et;try{if(wg(),Pc.current=gd,md){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}md=!1}if(oo=0,at=rt=Fe=null,vl=!1,Hl=0,Og.current=null,n===null||n.return===null){it=1,Gl=e,et=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=pt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var _=f.alternate;_?(f.updateQueue=_.updateQueue,f.memoizedState=_.memoizedState,f.lanes=_.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Kv(s);if(v!==null){v.flags&=-257,Qv(v,s,a,o,e),v.mode&1&&Gv(o,d,e),e=v,l=d;var x=e.updateQueue;if(x===null){var L=new Set;L.add(l),e.updateQueue=L}else x.add(l);break e}else{if(!(e&1)){Gv(o,d,e),Ug();break e}l=Error(z(426))}}else if(Ne&&a.mode&1){var w=Kv(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Qv(w,s,a,o,e),_g(Js(l,a));break e}}o=l=Js(l,a),it!==4&&(it=2),_l===null?_l=[o]:_l.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var y=Lw(o,l,e);$v(o,y);break e;case 1:a=l;var g=o.type,E=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(ai===null||!ai.has(E)))){o.flags|=65536,e&=-e,o.lanes|=e;var S=Cw(o,a,e);$v(o,S);break e}}o=o.return}while(o!==null)}Yw(n)}catch(P){e=P,et===n&&n!==null&&(et=n=n.return);continue}break}while(!0)}function Hw(){var t=yd.current;return yd.current=gd,t===null?gd:t}function Ug(){(it===0||it===3||it===2)&&(it=4),ut===null||!(so&268435455)&&!(fh&268435455)||Yr(ut,pt)}function _d(t,e){var n=ve;ve|=2;var r=Hw();(ut!==t||pt!==e)&&(cr=null,Zi(t,e));do try{Q4();break}catch(i){Bw(t,i)}while(!0);if(wg(),ve=n,yd.current=r,et!==null)throw Error(z(261));return ut=null,pt=0,it}function Q4(){for(;et!==null;)qw(et)}function Z4(){for(;et!==null&&!wS();)qw(et)}function qw(t){var e=Kw(t.alternate,t,en);t.memoizedProps=t.pendingProps,e===null?Yw(t):et=e,Og.current=null}function Yw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=B4(n,e),n!==null){n.flags&=32767,et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{it=6,et=null;return}}else if(n=z4(n,e,en),n!==null){et=n;return}if(e=e.sibling,e!==null){et=e;return}et=e=t}while(e!==null);it===0&&(it=5)}function Ui(t,e,n){var r=Ce,i=fn.transition;try{fn.transition=null,Ce=1,X4(t,e,n,r)}finally{fn.transition=i,Ce=r}return null}function X4(t,e,n,r){do zs();while(Xr!==null);if(ve&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(bS(t,o),t===ut&&(et=ut=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uc||(uc=!0,Qw(td,function(){return zs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=fn.transition,fn.transition=null;var s=Ce;Ce=1;var a=ve;ve|=4,Og.current=null,q4(t,n),Ww(n,t),v4(am),rd=!!sm,am=sm=null,t.current=n,Y4(n),xS(),ve=a,Ce=s,fn.transition=o}else t.current=n;if(uc&&(uc=!1,Xr=t,kd=i),o=t.pendingLanes,o===0&&(ai=null),SS(n.stateNode),Kt(t,Qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vd)throw vd=!1,t=Lm,Lm=null,t;return kd&1&&t.tag!==0&&zs(),o=t.pendingLanes,o&1?t===Cm?El++:(El=0,Cm=t):El=0,Li(),null}function zs(){if(Xr!==null){var t=LE(kd),e=fn.transition,n=Ce;try{if(fn.transition=null,Ce=16>t?16:t,Xr===null)var r=!1;else{if(t=Xr,Xr=null,kd=0,ve&6)throw Error(z(331));var i=ve;for(ve|=4,K=t.current;K!==null;){var o=K,s=o.child;if(K.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var d=a[l];for(K=d;K!==null;){var f=K;switch(f.tag){case 0:case 11:case 15:kl(8,f,o)}var m=f.child;if(m!==null)m.return=f,K=m;else for(;K!==null;){f=K;var _=f.sibling,v=f.return;if(Vw(f),f===d){K=null;break}if(_!==null){_.return=v,K=_;break}K=v}}}var x=o.alternate;if(x!==null){var L=x.child;if(L!==null){x.child=null;do{var w=L.sibling;L.sibling=null,L=w}while(L!==null)}}K=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,K=s;else e:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:kl(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,K=y;break e}K=o.return}}var g=t.current;for(K=g;K!==null;){s=K;var E=s.child;if(s.subtreeFlags&2064&&E!==null)E.return=s,K=E;else e:for(s=g;K!==null;){if(a=K,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hh(9,a)}}catch(P){qe(a,a.return,P)}if(a===s){K=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,K=S;break e}K=a.return}}if(ve=i,Li(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(ih,t)}catch{}r=!0}return r}finally{Ce=n,fn.transition=e}}return!1}function u2(t,e,n){e=Js(n,e),e=Lw(t,e,1),t=si(t,e,1),e=Nt(),t!==null&&(hu(t,1,e),Kt(t,e))}function qe(t,e,n){if(t.tag===3)u2(t,t,n);else for(;e!==null;){if(e.tag===3){u2(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ai===null||!ai.has(r))){t=Js(n,t),t=Cw(e,t,1),e=si(e,t,1),t=Nt(),e!==null&&(hu(e,1,t),Kt(e,t));break}}e=e.return}}function J4(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,ut===t&&(pt&n)===n&&(it===4||it===3&&(pt&130023424)===pt&&500>Qe()-Ng?Zi(t,0):Mg|=n),Kt(t,e)}function Gw(t,e){e===0&&(t.mode&1?(e=Ju,Ju<<=1,!(Ju&130023424)&&(Ju=4194304)):e=1);var n=Nt();t=Tr(t,e),t!==null&&(hu(t,e,n),Kt(t,n))}function eL(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Gw(t,n)}function tL(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),Gw(t,n)}var Kw;Kw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Yt.current)Bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Bt=!1,$4(t,e,n);Bt=!!(t.flags&131072)}else Bt=!1,Ne&&e.flags&1048576&&JE(e,cd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bc(t,e),t=e.pendingProps;var i=Ks(e,At.current);$s(e,n),i=Pg(null,e,r,t,i,n);var o=Rg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Gt(r)?(o=!0,ld(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ig(e),i.updater=dh,e.stateNode=i,i._reactInternals=e,gm(e,r,t,n),e=km(null,e,r,!0,o,n)):(e.tag=0,Ne&&o&&vg(e),Ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rL(r),t=Tn(r,t),i){case 0:e=vm(null,e,r,t,n);break e;case 1:e=Jv(null,e,r,t,n);break e;case 11:e=Zv(null,e,r,t,n);break e;case 14:e=Xv(null,e,r,Tn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),vm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),Jv(t,e,r,i,n);case 3:e:{if(bw(e),t===null)throw Error(z(387));r=e.pendingProps,o=e.memoizedState,i=o.element,ow(t,e),fd(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Js(Error(z(423)),e),e=e2(t,e,r,n,i);break e}else if(r!==i){i=Js(Error(z(424)),e),e=e2(t,e,r,n,i);break e}else for(tn=oi(e.stateNode.containerInfo.firstChild),rn=e,Ne=!0,Sn=null,n=rw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qs(),r===i){e=Ir(t,e,n);break e}Ot(t,e,r,n)}e=e.child}return e;case 5:return sw(e),t===null&&fm(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,lm(r,i)?s=null:o!==null&&lm(r,o)&&(e.flags|=32),Rw(t,e),Ot(t,e,s,n),e.child;case 6:return t===null&&fm(e),null;case 13:return jw(t,e,n);case 4:return Sg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zs(e,null,r,n):Ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),Zv(t,e,r,i,n);case 7:return Ot(t,e,e.pendingProps,n),e.child;case 8:return Ot(t,e,e.pendingProps.children,n),e.child;case 12:return Ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Re(dd,r._currentValue),r._currentValue=s,o!==null)if(Rn(o.value,s)){if(o.children===i.children&&!Yt.current){e=Ir(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=kr(-1,n&-n),l.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?l.next=l:(l.next=f.next,f.next=l),d.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),pm(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(z(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),pm(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$s(e,n),i=mn(i),r=r(i),e.flags|=1,Ot(t,e,r,n),e.child;case 14:return r=e.type,i=Tn(r,e.pendingProps),i=Tn(r.type,i),Xv(t,e,r,i,n);case 15:return Aw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),bc(t,e),e.tag=1,Gt(r)?(t=!0,ld(e)):t=!1,$s(e,n),Sw(e,r,i),gm(e,r,i,n),km(null,e,r,!0,t,n);case 19:return Dw(t,e,n);case 22:return Pw(t,e,n)}throw Error(z(156,e.tag))};function Qw(t,e){return xE(t,e)}function nL(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(t,e,n,r){return new nL(t,e,n,r)}function Wg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rL(t){if(typeof t=="function")return Wg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sg)return 11;if(t===ag)return 14}return 2}function ui(t,e){var n=t.alternate;return n===null?(n=hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Wg(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case xs:return Xi(n.children,i,o,e);case og:s=8,i|=8;break;case Up:return t=hn(12,n,e,i|2),t.elementType=Up,t.lanes=o,t;case Wp:return t=hn(13,n,e,i),t.elementType=Wp,t.lanes=o,t;case $p:return t=hn(19,n,e,i),t.elementType=$p,t.lanes=o,t;case sE:return ph(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case iE:s=10;break e;case oE:s=9;break e;case sg:s=11;break e;case ag:s=14;break e;case Br:s=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=hn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Xi(t,e,n,r){return t=hn(7,t,r,e),t.lanes=n,t}function ph(t,e,n,r){return t=hn(22,t,r,e),t.elementType=sE,t.lanes=n,t.stateNode={isHidden:!1},t}function Qf(t,e,n){return t=hn(6,t,null,e),t.lanes=n,t}function Zf(t,e,n){return e=hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iL(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rf(0),this.expirationTimes=Rf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $g(t,e,n,r,i,o,s,a,l){return t=new iL(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=hn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ig(o),t}function oL(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ws,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Zw(t){if(!t)return vi;t=t._reactInternals;e:{if(vo(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Gt(n))return ZE(t,n,e)}return e}function Xw(t,e,n,r,i,o,s,a,l){return t=$g(n,r,!0,t,i,o,s,a,l),t.context=Zw(null),n=t.current,r=Nt(),i=li(n),o=kr(r,i),o.callback=e??null,si(n,o,i),t.current.lanes=i,hu(t,i,r),Kt(t,r),t}function mh(t,e,n,r){var i=e.current,o=Nt(),s=li(i);return n=Zw(n),e.context===null?e.context=n:e.pendingContext=n,e=kr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=si(i,e,s),t!==null&&(An(t,i,s,o),Ac(t,i,s)),s}function Ed(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function c2(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zg(t,e){c2(t,e),(t=t.alternate)&&c2(t,e)}function sL(){return null}var Jw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bg(t){this._internalRoot=t}gh.prototype.render=Bg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));mh(t,e,null,null)};gh.prototype.unmount=Bg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ao(function(){mh(null,t,null,null)}),e[xr]=null}};function gh(t){this._internalRoot=t}gh.prototype.unstable_scheduleHydration=function(t){if(t){var e=PE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qr.length&&e!==0&&e<qr[n].priority;n++);qr.splice(n,0,t),n===0&&bE(t)}};function Hg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function d2(){}function aL(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Ed(s);o.call(d)}}var s=Xw(e,r,t,0,null,!1,!1,"",d2);return t._reactRootContainer=s,t[xr]=s.current,Ul(t.nodeType===8?t.parentNode:t),ao(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=Ed(l);a.call(d)}}var l=$g(t,0,!1,null,null,!1,!1,"",d2);return t._reactRootContainer=l,t[xr]=l.current,Ul(t.nodeType===8?t.parentNode:t),ao(function(){mh(e,l,n,r)}),l}function vh(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ed(s);a.call(l)}}mh(e,s,t,i)}else s=aL(n,e,t,i,r);return Ed(s)}CE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=rl(e.pendingLanes);n!==0&&(cg(e,n|1),Kt(e,Qe()),!(ve&6)&&(ea=Qe()+500,Li()))}break;case 13:ao(function(){var r=Tr(t,1);if(r!==null){var i=Nt();An(r,t,1,i)}}),zg(t,1)}};dg=function(t){if(t.tag===13){var e=Tr(t,134217728);if(e!==null){var n=Nt();An(e,t,134217728,n)}zg(t,134217728)}};AE=function(t){if(t.tag===13){var e=li(t),n=Tr(t,e);if(n!==null){var r=Nt();An(n,t,e,r)}zg(t,e)}};PE=function(){return Ce};RE=function(t,e){var n=Ce;try{return Ce=t,e()}finally{Ce=n}};Xp=function(t,e,n){switch(e){case"input":if(Hp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=lh(r);if(!i)throw Error(z(90));lE(r),Hp(r,i)}}}break;case"textarea":cE(t,n);break;case"select":e=n.value,e!=null&&Vs(t,!!n.multiple,e,!1)}};yE=Vg;vE=ao;var lL={usingClientEntryPoint:!1,Events:[pu,Ls,lh,mE,gE,Vg]},Ga={findFiberByHostInstance:Hi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uL={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=EE(t),t===null?null:t.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||sL,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{ih=cc.inject(uL),qn=cc}catch{}}an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lL;an.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hg(e))throw Error(z(200));return oL(t,e,null,n)};an.createRoot=function(t,e){if(!Hg(t))throw Error(z(299));var n=!1,r="",i=Jw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$g(t,1,!1,null,null,n,!1,r,i),t[xr]=e.current,Ul(t.nodeType===8?t.parentNode:t),new Bg(e)};an.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=EE(e),t=t===null?null:t.stateNode,t};an.flushSync=function(t){return ao(t)};an.hydrate=function(t,e,n){if(!yh(e))throw Error(z(200));return vh(null,t,e,!0,n)};an.hydrateRoot=function(t,e,n){if(!Hg(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Jw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Xw(e,null,t,1,n??null,i,!1,o,s),t[xr]=e.current,Ul(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gh(e)};an.render=function(t,e,n){if(!yh(e))throw Error(z(200));return vh(null,t,e,!1,n)};an.unmountComponentAtNode=function(t){if(!yh(t))throw Error(z(40));return t._reactRootContainer?(ao(function(){vh(null,null,t,!1,function(){t._reactRootContainer=null,t[xr]=null})}),!0):!1};an.unstable_batchedUpdates=Vg;an.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yh(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return vh(t,e,n,!1,r)};an.version="18.3.1-next-f1338f8080-20240426";function ex(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ex)}catch(t){console.error(t)}}ex(),eE.exports=an;var cL=eE.exports,tx,h2=cL;tx=h2.createRoot,h2.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kl(){return Kl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kl.apply(this,arguments)}var Jr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Jr||(Jr={}));const f2="popstate";function dL(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Rm("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:wd(i)}return fL(e,n,null,t)}function Ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function nx(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hL(){return Math.random().toString(36).substr(2,8)}function p2(t,e){return{usr:t.state,key:t.key,idx:e}}function Rm(t,e,n,r){return n===void 0&&(n=null),Kl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ya(e):e,{state:n,key:e&&e.key||r||hL()})}function wd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ya(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function fL(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Jr.Pop,l=null,d=f();d==null&&(d=0,s.replaceState(Kl({},s.state,{idx:d}),""));function f(){return(s.state||{idx:null}).idx}function m(){a=Jr.Pop;let w=f(),y=w==null?null:w-d;d=w,l&&l({action:a,location:L.location,delta:y})}function _(w,y){a=Jr.Push;let g=Rm(L.location,w,y);d=f()+1;let E=p2(g,d),S=L.createHref(g);try{s.pushState(E,"",S)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(S)}o&&l&&l({action:a,location:L.location,delta:1})}function v(w,y){a=Jr.Replace;let g=Rm(L.location,w,y);d=f();let E=p2(g,d),S=L.createHref(g);s.replaceState(E,"",S),o&&l&&l({action:a,location:L.location,delta:0})}function x(w){let y=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof w=="string"?w:wd(w);return g=g.replace(/ $/,"%20"),Ze(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let L={get action(){return a},get location(){return t(i,s)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(f2,m),l=w,()=>{i.removeEventListener(f2,m),l=null}},createHref(w){return e(i,w)},createURL:x,encodeLocation(w){let y=x(w);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:_,replace:v,go(w){return s.go(w)}};return L}var m2;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(m2||(m2={}));function pL(t,e,n){return n===void 0&&(n="/"),mL(t,e,n)}function mL(t,e,n,r){let i=typeof e=="string"?ya(e):e,o=qg(i.pathname||"/",n);if(o==null)return null;let s=rx(t);gL(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let d=CL(o);a=IL(s[l],d)}return a}function rx(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Ze(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let d=ci([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(Ze(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),rx(o.children,e,f,d)),!(o.path==null&&!o.index)&&e.push({path:d,score:xL(d,o.index),routesMeta:f})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of ix(o.path))i(o,s,l)}),e}function ix(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=ix(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function gL(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:TL(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yL=/^:[\w-]+$/,vL=3,kL=2,_L=1,EL=10,wL=-2,g2=t=>t==="*";function xL(t,e){let n=t.split("/"),r=n.length;return n.some(g2)&&(r+=wL),e&&(r+=kL),n.filter(i=>!g2(i)).reduce((i,o)=>i+(yL.test(o)?vL:o===""?_L:EL),r)}function TL(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function IL(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],d=a===r.length-1,f=o==="/"?e:e.slice(o.length)||"/",m=SL({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},f),_=l.route;if(!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:ci([o,m.pathname]),pathnameBase:bL(ci([o,m.pathnameBase])),route:_}),m.pathnameBase!=="/"&&(o=ci([o,m.pathnameBase]))}return s}function SL(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=LL(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,f,m)=>{let{paramName:_,isOptional:v}=f;if(_==="*"){let L=a[m]||"";s=o.slice(0,o.length-L.length).replace(/(.)\/+$/,"$1")}const x=a[m];return v&&!x?d[_]=void 0:d[_]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:t}}function LL(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),nx(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function CL(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return nx(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function qg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function AL(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ya(t):t;return{pathname:n?n.startsWith("/")?n:PL(n,e):e,search:jL(r),hash:DL(i)}}function PL(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function RL(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Yg(t,e){let n=RL(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Gg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ya(t):(i=Kl({},t),Ze(!i.pathname||!i.pathname.includes("?"),Xf("?","pathname","search",i)),Ze(!i.pathname||!i.pathname.includes("#"),Xf("#","pathname","hash",i)),Ze(!i.search||!i.search.includes("#"),Xf("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let m=e.length-1;if(!r&&s.startsWith("..")){let _=s.split("/");for(;_[0]==="..";)_.shift(),m-=1;i.pathname=_.join("/")}a=m>=0?e[m]:"/"}let l=AL(i,a),d=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(d||f)&&(l.pathname+="/"),l}const ci=t=>t.join("/").replace(/\/\/+/g,"/"),bL=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),jL=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,DL=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function OL(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ox=["post","put","patch","delete"];new Set(ox);const ML=["get",...ox];new Set(ML);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ql(){return Ql=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ql.apply(this,arguments)}const Kg=j.createContext(null),NL=j.createContext(null),Ci=j.createContext(null),kh=j.createContext(null),br=j.createContext({outlet:null,matches:[],isDataRoute:!1}),sx=j.createContext(null);function VL(t,e){let{relative:n}=e===void 0?{}:e;va()||Ze(!1);let{basename:r,navigator:i}=j.useContext(Ci),{hash:o,pathname:s,search:a}=lx(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:ci([r,s])),i.createHref({pathname:l,search:a,hash:o})}function va(){return j.useContext(kh)!=null}function ka(){return va()||Ze(!1),j.useContext(kh).location}function ax(t){j.useContext(Ci).static||j.useLayoutEffect(t)}function tr(){let{isDataRoute:t}=j.useContext(br);return t?JL():FL()}function FL(){va()||Ze(!1);let t=j.useContext(Kg),{basename:e,future:n,navigator:r}=j.useContext(Ci),{matches:i}=j.useContext(br),{pathname:o}=ka(),s=JSON.stringify(Yg(i,n.v7_relativeSplatPath)),a=j.useRef(!1);return ax(()=>{a.current=!0}),j.useCallback(function(d,f){if(f===void 0&&(f={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let m=Gg(d,JSON.parse(s),o,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:ci([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,s,o,t])}const UL=j.createContext(null);function WL(t){let e=j.useContext(br).outlet;return e&&j.createElement(UL.Provider,{value:t},e)}function lx(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(Ci),{matches:i}=j.useContext(br),{pathname:o}=ka(),s=JSON.stringify(Yg(i,r.v7_relativeSplatPath));return j.useMemo(()=>Gg(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function $L(t,e){return zL(t,e)}function zL(t,e,n,r){va()||Ze(!1);let{navigator:i,static:o}=j.useContext(Ci),{matches:s}=j.useContext(br),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let f=ka(),m;if(e){var _;let y=typeof e=="string"?ya(e):e;d==="/"||(_=y.pathname)!=null&&_.startsWith(d)||Ze(!1),m=y}else m=f;let v=m.pathname||"/",x=v;if(d!=="/"){let y=d.replace(/^\//,"").split("/");x="/"+v.replace(/^\//,"").split("/").slice(y.length).join("/")}let L=pL(t,{pathname:x}),w=GL(L&&L.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:ci([d,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:ci([d,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,r);return e&&w?j.createElement(kh.Provider,{value:{location:Ql({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Jr.Pop}},w):w}function BL(){let t=XL(),e=OL(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const HL=j.createElement(BL,null);class qL extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(br.Provider,{value:this.props.routeContext},j.createElement(sx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function YL(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(Kg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(br.Provider,{value:e},r)}function GL(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);f>=0||Ze(!1),s=s.slice(0,Math.min(s.length,f+1))}let l=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let m=s[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:_,errors:v}=n,x=m.route.loader&&_[m.route.id]===void 0&&(!v||v[m.route.id]===void 0);if(m.route.lazy||x){l=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((f,m,_)=>{let v,x=!1,L=null,w=null;n&&(v=a&&m.route.id?a[m.route.id]:void 0,L=m.route.errorElement||HL,l&&(d<0&&_===0?(eC("route-fallback"),x=!0,w=null):d===_&&(x=!0,w=m.route.hydrateFallbackElement||null)));let y=e.concat(s.slice(0,_+1)),g=()=>{let E;return v?E=L:x?E=w:m.route.Component?E=j.createElement(m.route.Component,null):m.route.element?E=m.route.element:E=f,j.createElement(YL,{match:m,routeContext:{outlet:f,matches:y,isDataRoute:n!=null},children:E})};return n&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?j.createElement(qL,{location:n.location,revalidation:n.revalidation,component:L,error:v,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}var ux=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ux||{}),cx=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(cx||{});function KL(t){let e=j.useContext(Kg);return e||Ze(!1),e}function QL(t){let e=j.useContext(NL);return e||Ze(!1),e}function ZL(t){let e=j.useContext(br);return e||Ze(!1),e}function dx(t){let e=ZL(),n=e.matches[e.matches.length-1];return n.route.id||Ze(!1),n.route.id}function XL(){var t;let e=j.useContext(sx),n=QL(),r=dx();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function JL(){let{router:t}=KL(ux.UseNavigateStable),e=dx(cx.UseNavigateStable),n=j.useRef(!1);return ax(()=>{n.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ql({fromRouteId:e},o)))},[t,e])}const y2={};function eC(t,e,n){y2[t]||(y2[t]=!0)}function tC(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ds(t){let{to:e,replace:n,state:r,relative:i}=t;va()||Ze(!1);let{future:o,static:s}=j.useContext(Ci),{matches:a}=j.useContext(br),{pathname:l}=ka(),d=tr(),f=Gg(e,Yg(a,o.v7_relativeSplatPath),l,i==="path"),m=JSON.stringify(f);return j.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:i}),[d,m,i,n,r]),null}function nC(t){return WL(t.context)}function Dt(t){Ze(!1)}function rC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Jr.Pop,navigator:o,static:s=!1,future:a}=t;va()&&Ze(!1);let l=e.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:l,navigator:o,static:s,future:Ql({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=ya(r));let{pathname:f="/",search:m="",hash:_="",state:v=null,key:x="default"}=r,L=j.useMemo(()=>{let w=qg(f,l);return w==null?null:{location:{pathname:w,search:m,hash:_,state:v,key:x},navigationType:i}},[l,f,m,_,v,x,i]);return L==null?null:j.createElement(Ci.Provider,{value:d},j.createElement(kh.Provider,{children:n,value:L}))}function iC(t){let{children:e,location:n}=t;return $L(bm(e),n)}new Promise(()=>{});function bm(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let o=[...e,i];if(r.type===j.Fragment){n.push.apply(n,bm(r.props.children,o));return}r.type!==Dt&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=bm(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jm(){return jm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jm.apply(this,arguments)}function oC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function sC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function aC(t,e){return t.button===0&&(!e||e==="_self")&&!sC(t)}const lC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],uC="6";try{window.__reactRouterVersion=uC}catch{}const cC="startTransition",v2=J6[cC];function dC(t){let{basename:e,children:n,future:r,window:i}=t,o=j.useRef();o.current==null&&(o.current=dL({window:i,v5Compat:!0}));let s=o.current,[a,l]=j.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},f=j.useCallback(m=>{d&&v2?v2(()=>l(m)):l(m)},[l,d]);return j.useLayoutEffect(()=>s.listen(f),[s,f]),j.useEffect(()=>tC(r),[r]),j.createElement(rC,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const hC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qg=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:d,preventScrollReset:f,viewTransition:m}=e,_=oC(e,lC),{basename:v}=j.useContext(Ci),x,L=!1;if(typeof d=="string"&&fC.test(d)&&(x=d,hC))try{let E=new URL(window.location.href),S=d.startsWith("//")?new URL(E.protocol+d):new URL(d),P=qg(S.pathname,v);S.origin===E.origin&&P!=null?d=P+S.search+S.hash:L=!0}catch{}let w=VL(d,{relative:i}),y=pC(d,{replace:s,state:a,target:l,preventScrollReset:f,relative:i,viewTransition:m});function g(E){r&&r(E),E.defaultPrevented||y(E)}return j.createElement("a",jm({},_,{href:x||w,onClick:L||o?r:g,ref:n,target:l}))});var k2;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(k2||(k2={}));var _2;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(_2||(_2={}));function pC(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=e===void 0?{}:e,l=tr(),d=ka(),f=lx(t,{relative:s});return j.useCallback(m=>{if(aC(m,n)){m.preventDefault();let _=r!==void 0?r:wd(d)===wd(f);l(t,{replace:_,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[d,l,f,r,i,n,t,o,s,a])}var E2={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},fx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,d=l?t[i+2]:0,f=o>>2,m=(o&3)<<4|a>>4;let _=(a&15)<<2|d>>6,v=d&63;l||(v=64,s||(_=64)),r.push(n[f],n[m],n[_],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||d==null||m==null)throw new gC;const _=o<<2|a>>4;if(r.push(_),d!==64){const v=a<<4&240|d>>2;if(r.push(v),m!==64){const x=d<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yC=function(t){const e=hx(t);return fx.encodeByteArray(e,!0)},xd=function(t){return yC(t).replace(/\./g,"")},px=function(t){try{return fx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kC=()=>vC().__FIREBASE_DEFAULTS__,_C=()=>{if(typeof process>"u"||typeof E2>"u")return;const t=E2.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},EC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&px(t[1]);return e&&JSON.parse(e)},_h=()=>{try{return kC()||_C()||EC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mx=t=>{var e,n;return(n=(e=_h())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gx=t=>{const e=mx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yx=()=>{var t;return(t=_h())===null||t===void 0?void 0:t.config},vx=t=>{var e;return(e=_h())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function kx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[xd(JSON.stringify(n)),xd(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function TC(){var t;const e=(t=_h())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _x(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function SC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LC(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function CC(){return!TC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ex(){try{return typeof indexedDB=="object"}catch{return!1}}function wx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function AC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=PC,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ko.prototype.create)}}class ko{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?RC(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new kn(i,a,r)}}function RC(t,e){return t.replace(bC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bC=/\{\$([^}]+)}/g;function jC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(w2(o)&&w2(s)){if(!Zl(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function w2(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ol(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function sl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function DC(t,e){const n=new OC(t,e);return n.subscribe.bind(n)}class OC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");MC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Jf),i.error===void 0&&(i.error=Jf),i.complete===void 0&&(i.complete=Jf);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jf(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=1e3,VC=2,FC=4*60*60*1e3,UC=.5;function x2(t,e=NC,n=VC){const r=e*Math.pow(n,t),i=Math.round(UC*r*(Math.random()-.5)*2);return Math.min(FC,r+i)}/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zC(e))try{this.getOrInitializeService({instanceIdentifier:Wi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wi){return this.instances.has(e)}getOptions(e=Wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$C(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wi){return this.component?this.component.multipleInstances?e:Wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $C(t){return t===Wi?void 0:t}function zC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const HC={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},qC=pe.INFO,YC={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},GC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=YC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Eh{constructor(e){this.name=e,this._logLevel=qC,this._logHandler=GC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const KC=(t,e)=>e.some(n=>t instanceof n);let T2,I2;function QC(){return T2||(T2=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZC(){return I2||(I2=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xx=new WeakMap,Dm=new WeakMap,Tx=new WeakMap,ep=new WeakMap,Zg=new WeakMap;function XC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(di(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&xx.set(n,t)}).catch(()=>{}),Zg.set(e,t),e}function JC(t){if(Dm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Dm.set(t,e)}let Om={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Tx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return di(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eA(t){Om=t(Om)}function tA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tp(this),e,...n);return Tx.set(r,e.sort?e.sort():[e]),di(r)}:ZC().includes(t)?function(...e){return t.apply(tp(this),e),di(xx.get(this))}:function(...e){return di(t.apply(tp(this),e))}}function nA(t){return typeof t=="function"?tA(t):(t instanceof IDBTransaction&&JC(t),KC(t,QC())?new Proxy(t,Om):t)}function di(t){if(t instanceof IDBRequest)return XC(t);if(ep.has(t))return ep.get(t);const e=nA(t);return e!==t&&(ep.set(t,e),Zg.set(e,t)),e}const tp=t=>Zg.get(t);function Ix(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=di(s);return r&&s.addEventListener("upgradeneeded",l=>{r(di(s.result),l.oldVersion,l.newVersion,di(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const rA=["get","getKey","getAll","getAllKeys","count"],iA=["put","add","delete","clear"],np=new Map;function S2(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(np.get(e))return np.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=iA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rA.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&l.done]))[0]};return np.set(e,o),o}eA(t=>({...t,get:(e,n,r)=>S2(e,n)||t.get(e,n,r),has:(e,n)=>!!S2(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mm="@firebase/app",L2="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Eh("@firebase/app"),aA="@firebase/app-compat",lA="@firebase/analytics-compat",uA="@firebase/analytics",cA="@firebase/app-check-compat",dA="@firebase/app-check",hA="@firebase/auth",fA="@firebase/auth-compat",pA="@firebase/database",mA="@firebase/data-connect",gA="@firebase/database-compat",yA="@firebase/functions",vA="@firebase/functions-compat",kA="@firebase/installations",_A="@firebase/installations-compat",EA="@firebase/messaging",wA="@firebase/messaging-compat",xA="@firebase/performance",TA="@firebase/performance-compat",IA="@firebase/remote-config",SA="@firebase/remote-config-compat",LA="@firebase/storage",CA="@firebase/storage-compat",AA="@firebase/firestore",PA="@firebase/vertexai-preview",RA="@firebase/firestore-compat",bA="firebase",jA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="[DEFAULT]",DA={[Mm]:"fire-core",[aA]:"fire-core-compat",[uA]:"fire-analytics",[lA]:"fire-analytics-compat",[dA]:"fire-app-check",[cA]:"fire-app-check-compat",[hA]:"fire-auth",[fA]:"fire-auth-compat",[pA]:"fire-rtdb",[mA]:"fire-data-connect",[gA]:"fire-rtdb-compat",[yA]:"fire-fn",[vA]:"fire-fn-compat",[kA]:"fire-iid",[_A]:"fire-iid-compat",[EA]:"fire-fcm",[wA]:"fire-fcm-compat",[xA]:"fire-perf",[TA]:"fire-perf-compat",[IA]:"fire-rc",[SA]:"fire-rc-compat",[LA]:"fire-gcs",[CA]:"fire-gcs-compat",[AA]:"fire-fst",[RA]:"fire-fst-compat",[PA]:"fire-vertex","fire-js":"fire-js",[bA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=new Map,OA=new Map,Vm=new Map;function C2(t,e){try{t.container.addComponent(e)}catch(n){Sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bn(t){const e=t.name;if(Vm.has(e))return Sr.debug(`There were multiple attempts to register component ${e}.`),!1;Vm.set(e,t);for(const n of Td.values())C2(n,t);for(const n of OA.values())C2(n,t);return!0}function Ai(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Hn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hi=new ko("app","Firebase",MA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=jA;function Sx(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw hi.create("bad-app-name",{appName:String(i)});if(n||(n=yx()),!n)throw hi.create("no-options");const o=Td.get(i);if(o){if(Zl(n,o.options)&&Zl(r,o.config))return o;throw hi.create("duplicate-app",{appName:i})}const s=new BC(i);for(const l of Vm.values())s.addComponent(l);const a=new NA(n,r,s);return Td.set(i,a),a}function wh(t=Nm){const e=Td.get(t);if(!e&&t===Nm&&yx())return Sx();if(!e)throw hi.create("no-app",{appName:t});return e}function Qt(t,e,n){var r;let i=(r=DA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sr.warn(a.join(" "));return}bn(new yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const VA="firebase-heartbeat-database",FA=1,Xl="firebase-heartbeat-store";let rp=null;function Lx(){return rp||(rp=Ix(VA,FA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xl)}catch(n){console.warn(n)}}}}).catch(t=>{throw hi.create("idb-open",{originalErrorMessage:t.message})})),rp}async function UA(t){try{const n=(await Lx()).transaction(Xl),r=await n.objectStore(Xl).get(Cx(t));return await n.done,r}catch(e){if(e instanceof kn)Sr.warn(e.message);else{const n=hi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sr.warn(n.message)}}}async function A2(t,e){try{const r=(await Lx()).transaction(Xl,"readwrite");await r.objectStore(Xl).put(e,Cx(t)),await r.done}catch(n){if(n instanceof kn)Sr.warn(n.message);else{const r=hi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sr.warn(r.message)}}}function Cx(t){return`${t.name}!${t.options.appId}`}/**
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
 */const WA=1024,$A=30*24*60*60*1e3;class zA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=P2();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=$A}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Sr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=P2(),{heartbeatsToSend:r,unsentEntries:i}=BA(this._heartbeatsCache.heartbeats),o=xd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Sr.warn(n),""}}}function P2(){return new Date().toISOString().substring(0,10)}function BA(t,e=WA){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),R2(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),R2(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class HA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ex()?wx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await UA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return A2(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return A2(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function R2(t){return xd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t){bn(new yn("platform-logger",e=>new oA(e),"PRIVATE")),bn(new yn("heartbeat",e=>new zA(e),"PRIVATE")),Qt(Mm,L2,t),Qt(Mm,L2,"esm2017"),Qt("fire-js","")}qA("");function Xg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ax(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YA=Ax,Px=new ko("auth","Firebase",Ax());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=new Eh("@firebase/auth");function GA(t,...e){Id.logLevel<=pe.WARN&&Id.warn(`Auth (${_o}): ${t}`,...e)}function Mc(t,...e){Id.logLevel<=pe.ERROR&&Id.error(`Auth (${_o}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,...e){throw Jg(t,...e)}function Gn(t,...e){return Jg(t,...e)}function Rx(t,e,n){const r=Object.assign(Object.assign({},YA()),{[e]:n});return new ko("auth","Firebase",r).create(e,{appName:t.name})}function _r(t){return Rx(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Px.create(t,...e)}function J(t,e,...n){if(!t)throw Jg(e,...n)}function gr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mc(e),new Error(e)}function Lr(t,e){t||gr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function KA(){return b2()==="http:"||b2()==="https:"}function b2(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KA()||_x()||"connection"in navigator)?navigator.onLine:!0}function ZA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Lr(n>e,"Short delay should be less than long delay!"),this.isMobile=xC()||SC()}get(){return QA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(t,e){Lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=new yu(3e4,6e4);function jr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,r,i={}){return jx(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=gu(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:l},o);return IC()||(d.referrerPolicy="no-referrer"),bx.fetch()(Dx(t,t.config.apiHost,n,a),d)})}async function jx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},XA),e);try{const i=new tP(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw dc(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,d]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw dc(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw dc(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw dc(t,"user-disabled",s);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Rx(t,f,d);jn(t,f)}}catch(i){if(i instanceof kn)throw i;jn(t,"network-request-failed",{message:String(i)})}}async function vu(t,e,n,r,i={}){const o=await nr(t,e,n,r,i);return"mfaPendingCredential"in o&&jn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Dx(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?e1(t.config,i):`${t.config.apiScheme}://${i}`}function eP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gn(this.auth,"network-request-failed")),JA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function dc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gn(t,e,r);return i.customData._tokenResponse=n,i}function j2(t){return t!==void 0&&t.enterprise!==void 0}class nP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return eP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function rP(t,e){return nr(t,"GET","/v2/recaptchaConfig",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iP(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function Ox(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oP(t,e=!1){const n=We(t),r=await n.getIdToken(e),i=t1(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:wl(ip(i.auth_time)),issuedAtTime:wl(ip(i.iat)),expirationTime:wl(ip(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ip(t){return Number(t)*1e3}function t1(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Mc("JWT malformed, contained fewer than 3 sections"),null;try{const i=px(n);return i?JSON.parse(i):(Mc("Failed to decode base64 JWT payload"),null)}catch(i){return Mc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function D2(t){const e=t1(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&sP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wl(this.lastLoginAt),this.creationTime=wl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ta(t,Ox(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Mx(o.providerUserInfo):[],a=uP(t.providerData,s),l=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?d:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Um(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function lP(t){const e=We(t);await Sd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Mx(t){return t.map(e=>{var{providerId:n}=e,r=Xg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cP(t,e){const n=await jx(t,{},async()=>{const r=gu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Dx(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bx.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dP(t,e){return nr(t,"POST","/v2/accounts:revokeToken",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):D2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=D2(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await cP(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Bs;return r&&(J(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(J(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bs,this.toJSON())}_performRefresh(){return gr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Xg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Um(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await ta(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return oP(this,e)}reload(){return lP(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Hn(this.auth.app))return Promise.reject(_r(this.auth));const e=await this.getIdToken();return await ta(this,iP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,x=(s=n.photoURL)!==null&&s!==void 0?s:void 0,L=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(d=n.createdAt)!==null&&d!==void 0?d:void 0,g=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:E,emailVerified:S,isAnonymous:P,providerData:O,stsTokenManager:T}=n;J(E&&T,e,"internal-error");const I=Bs.fromJSON(this.name,T);J(typeof E=="string",e,"internal-error"),Fr(m,e.name),Fr(_,e.name),J(typeof S=="boolean",e,"internal-error"),J(typeof P=="boolean",e,"internal-error"),Fr(v,e.name),Fr(x,e.name),Fr(L,e.name),Fr(w,e.name),Fr(y,e.name),Fr(g,e.name);const A=new yr({uid:E,auth:e,email:_,emailVerified:S,displayName:m,isAnonymous:P,photoURL:x,phoneNumber:v,tenantId:L,stsTokenManager:I,createdAt:y,lastLoginAt:g});return O&&Array.isArray(O)&&(A.providerData=O.map(b=>Object.assign({},b))),w&&(A._redirectEventId=w),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Bs;i.updateFromServerResponse(n);const o=new yr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Sd(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Mx(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new Bs;a.updateFromIdToken(r);const l=new yr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Um(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2=new Map;function vr(t){Lr(t instanceof Function,"Expected a class definition");let e=O2.get(t);return e?(Lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,O2.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Nx.type="NONE";const M2=Nx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t,e,n){return`firebase:${t}:${e}:${n}`}class Hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Nc(this.userKey,i.apiKey,o),this.fullPersistenceKey=Nc("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hs(vr(M2),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||vr(M2);const s=Nc(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const f=await d._get(s);if(f){const m=yr._fromJSON(e,f);d!==o&&(a=m),o=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Hs(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(s)}catch{}})),new Hs(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N2(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zx(e))return"Blackberry";if(Bx(e))return"Webos";if(Fx(e))return"Safari";if((e.includes("chrome/")||Ux(e))&&!e.includes("edge/"))return"Chrome";if($x(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vx(t=Pt()){return/firefox\//i.test(t)}function Fx(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ux(t=Pt()){return/crios\//i.test(t)}function Wx(t=Pt()){return/iemobile/i.test(t)}function $x(t=Pt()){return/android/i.test(t)}function zx(t=Pt()){return/blackberry/i.test(t)}function Bx(t=Pt()){return/webos/i.test(t)}function n1(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hP(t=Pt()){var e;return n1(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fP(){return LC()&&document.documentMode===10}function Hx(t=Pt()){return n1(t)||$x(t)||Bx(t)||zx(t)||/windows phone/i.test(t)||Wx(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(t,e=[]){let n;switch(t){case"Browser":n=N2(Pt());break;case"Worker":n=`${N2(Pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_o}/${r}`}/**
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
 */class pP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function mP(t,e={}){return nr(t,"GET","/v2/passwordPolicy",jr(t,e))}/**
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
 */const gP=6;class yP{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:gP,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new V2(this),this.idTokenSubscription=new V2(this),this.beforeStateQueue=new pP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Px,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Hs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ox(this,{idToken:e}),r=await yr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Hn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Hn(this.app))return Promise.reject(_r(this));const n=e?We(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Hn(this.app)?Promise.reject(_r(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Hn(this.app)?Promise.reject(_r(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mP(this),n=new yP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ko("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await dP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vr(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[vr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&GA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pi(t){return We(t)}class V2{constructor(e){this.auth=e,this.observer=null,this.addObserver=DC(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kP(t){xh=t}function Yx(t){return xh.loadJS(t)}function _P(){return xh.recaptchaEnterpriseScript}function EP(){return xh.gapiScript}function wP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const xP="recaptcha-enterprise",TP="NO_RECAPTCHA";class IP{constructor(e){this.type=xP,this.auth=Pi(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{rP(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new nP(l);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,s(d.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;j2(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(d=>{s(d)}).catch(()=>{s(TP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&j2(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=_P();l.length!==0&&(l+=a),Yx(l).then(()=>{i(a,o,s)}).catch(d=>{s(d)})}}).catch(a=>{s(a)})})}}async function F2(t,e,n,r=!1){const i=new IP(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Ld(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await F2(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await F2(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(t,e){const n=Ai(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Zl(o,e??{}))return i;jn(i,"already-initialized")}return n.initialize({options:e})}function LP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CP(t,e,n){const r=Pi(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Gx(e),{host:s,port:a}=AP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),PP()}function Gx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function AP(t){const e=Gx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:U2(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:U2(s)}}}function U2(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gr("not implemented")}_getIdTokenResponse(e){return gr("not implemented")}_linkToIdToken(e,n){return gr("not implemented")}_getReauthenticationResolver(e){return gr("not implemented")}}async function RP(t,e){return nr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bP(t,e){return vu(t,"POST","/v1/accounts:signInWithPassword",jr(t,e))}async function jP(t,e){return nr(t,"POST","/v1/accounts:sendOobCode",jr(t,e))}async function DP(t,e){return jP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OP(t,e){return vu(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}async function MP(t,e){return vu(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends r1{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Jl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Jl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ld(e,n,"signInWithPassword",bP);case"emailLink":return OP(e,{email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ld(e,r,"signUpPassword",RP);case"emailLink":return MP(e,{idToken:n,email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t,e){return vu(t,"POST","/v1/accounts:signInWithIdp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP="http://localhost";class lo extends r1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Xg(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new lo(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return qs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qs(e,n)}buildRequest(){const e={requestUri:NP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=gu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FP(t){const e=ol(sl(t)).link,n=e?ol(sl(e)).deep_link_id:null,r=ol(sl(t)).deep_link_id;return(r?ol(sl(r)).link:null)||r||n||e||t}class i1{constructor(e){var n,r,i,o,s,a;const l=ol(sl(e)),d=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,m=VP((i=l.mode)!==null&&i!==void 0?i:null);J(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=FP(e);try{return new i1(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(){this.providerId=_a.PROVIDER_ID}static credential(e,n){return Jl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=i1.parseLink(n);return J(r,"argument-error"),Jl._fromEmailAndCode(e,r.code,r.tenantId)}}_a.PROVIDER_ID="password";_a.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_a.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends Kx{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends ku{constructor(){super("facebook.com")}static credential(e){return lo._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends ku{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lo._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.GOOGLE_SIGN_IN_METHOD="google.com";fr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends ku{constructor(){super("github.com")}static credential(e){return lo._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.GITHUB_SIGN_IN_METHOD="github.com";Kr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends ku{constructor(){super("twitter.com")}static credential(e,n){return lo._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qr.credential(n,r)}catch{return null}}}Qr.TWITTER_SIGN_IN_METHOD="twitter.com";Qr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UP(t,e){return vu(t,"POST","/v1/accounts:signUp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await yr._fromIdTokenResponse(e,r,i),s=W2(r);return new uo({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=W2(r);return new uo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function W2(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd extends kn{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Cd.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Cd(e,n,r,i)}}function Qx(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Cd._fromErrorAndOperation(t,o,e,r):o})}async function WP(t,e,n=!1){const r=await ta(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return uo._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $P(t,e,n=!1){const{auth:r}=t;if(Hn(r.app))return Promise.reject(_r(r));const i="reauthenticate";try{const o=await ta(t,Qx(r,i,e,t),n);J(o.idToken,r,"internal-error");const s=t1(o.idToken);J(s,r,"internal-error");const{sub:a}=s;return J(t.uid===a,r,"user-mismatch"),uo._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&jn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zx(t,e,n=!1){if(Hn(t.app))return Promise.reject(_r(t));const r="signIn",i=await Qx(t,r,e),o=await uo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function zP(t,e){return Zx(Pi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xx(t){const e=Pi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function BP(t,e,n){const r=Pi(t);await Ld(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",DP)}async function HP(t,e,n){if(Hn(t.app))return Promise.reject(_r(t));const r=Pi(t),s=await Ld(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",UP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Xx(t),l}),a=await uo._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function qP(t,e,n){return Hn(t.app)?Promise.reject(_r(t)):zP(We(t),_a.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Xx(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YP(t,e){return nr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=We(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await ta(r,YP(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function KP(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function QP(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function ZP(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function XP(t){return We(t).signOut()}async function JP(t){return We(t).delete()}const Ad="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ad,"1"),this.storage.removeItem(Ad),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=1e3,tR=10;class eT extends Jx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);fP()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eT.type="LOCAL";const nR=eT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT extends Jx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tT.type="SESSION";const nT=tT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Th(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async d=>d(n.origin,o)),l=await rR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Th.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const d=o1("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(m){const _=m;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(_.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){return window}function oR(t){Kn().location.href=t}/**
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
 */function rT(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function sR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lR(){return rT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="firebaseLocalStorageDb",uR=1,Pd="firebaseLocalStorage",oT="fbase_key";class _u{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ih(t,e){return t.transaction([Pd],e?"readwrite":"readonly").objectStore(Pd)}function cR(){const t=indexedDB.deleteDatabase(iT);return new _u(t).toPromise()}function Wm(){const t=indexedDB.open(iT,uR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pd,{keyPath:oT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pd)?e(r):(r.close(),await cR(),e(await Wm()))})})}async function $2(t,e,n){const r=Ih(t,!0).put({[oT]:e,value:n});return new _u(r).toPromise()}async function dR(t,e){const n=Ih(t,!1).get(e),r=await new _u(n).toPromise();return r===void 0?null:r.value}function z2(t,e){const n=Ih(t,!0).delete(e);return new _u(n).toPromise()}const hR=800,fR=3;class sT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Th._getInstance(lR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sR(),!this.activeServiceWorker)return;this.sender=new iR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wm();return await $2(e,Ad,"1"),await z2(e,Ad),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$2(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>z2(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Ih(i,!1).getAll();return new _u(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sT.type="LOCAL";const pR=sT;new yu(3e4,6e4);/**
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
 */function mR(t,e){return e?vr(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1 extends r1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gR(t){return Zx(t.auth,new s1(t),t.bypassAuthState)}function yR(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),$P(n,new s1(t),t.bypassAuthState)}async function vR(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),WP(n,new s1(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gR;case"linkViaPopup":case"linkViaRedirect":return vR;case"reauthViaPopup":case"reauthViaRedirect":return yR;default:jn(this.auth,"internal-error")}}resolve(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=new yu(2e3,1e4);class Os extends aT{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Os.currentPopupAction&&Os.currentPopupAction.cancel(),Os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Lr(this.filter.length===1,"Popup operations only handle one event");const e=o1();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kR.get())};e()}}Os.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R="pendingRedirect",Vc=new Map;class ER extends aT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vc.get(this.auth._key());if(!e){try{const r=await wR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vc.set(this.auth._key(),e)}return this.bypassAuthState||Vc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wR(t,e){const n=IR(e),r=TR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function xR(t,e){Vc.set(t._key(),e)}function TR(t){return vr(t._redirectPersistence)}function IR(t){return Nc(_R,t.config.apiKey,t.name)}async function SR(t,e,n=!1){if(Hn(t.app))return Promise.reject(_r(t));const r=Pi(t),i=mR(r,e),s=await new ER(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=10*60*1e3;class CR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!lT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LR&&this.cachedEventUids.clear(),this.cachedEventUids.has(B2(e))}saveEventToCache(e){this.cachedEventUids.add(B2(e)),this.lastProcessedEventTime=Date.now()}}function B2(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bR=/^https?/;async function jR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PR(t);for(const n of e)try{if(DR(n))return}catch{}jn(t,"unauthorized-domain")}function DR(t){const e=Fm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!bR.test(n))return!1;if(RR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const OR=new yu(3e4,6e4);function H2(){const t=Kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MR(t){return new Promise((e,n)=>{var r,i,o;function s(){H2(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{H2(),n(Gn(t,"network-request-failed"))},timeout:OR.get()})}if(!((i=(r=Kn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Kn().gapi)===null||o===void 0)&&o.load)s();else{const a=wP("iframefcb");return Kn()[a]=()=>{gapi.load?s():n(Gn(t,"network-request-failed"))},Yx(`${EP()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Fc=null,e})}let Fc=null;function NR(t){return Fc=Fc||MR(t),Fc}/**
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
 */const VR=new yu(5e3,15e3),FR="__/auth/iframe",UR="emulator/auth/iframe",WR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$R=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zR(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?e1(e,UR):`https://${t.config.authDomain}/${FR}`,r={apiKey:e.apiKey,appName:t.name,v:_o},i=$R.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${gu(r).slice(1)}`}async function BR(t){const e=await NR(t),n=Kn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:zR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WR,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Gn(t,"network-request-failed"),a=Kn().setTimeout(()=>{o(s)},VR.get());function l(){Kn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const HR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qR=500,YR=600,GR="_blank",KR="http://localhost";class q2{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QR(t,e,n,r=qR,i=YR){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},HR),{width:r.toString(),height:i.toString(),top:o,left:s}),d=Pt().toLowerCase();n&&(a=Ux(d)?GR:n),Vx(d)&&(e=e||KR,l.scrollbars="yes");const f=Object.entries(l).reduce((_,[v,x])=>`${_}${v}=${x},`,"");if(hP(d)&&a!=="_self")return ZR(e||"",a),new q2(null);const m=window.open(e||"",a,f);J(m,t,"popup-blocked");try{m.focus()}catch{}return new q2(m)}function ZR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const XR="__/auth/handler",JR="emulator/auth/handler",eb=encodeURIComponent("fac");async function Y2(t,e,n,r,i,o){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_o,eventId:i};if(e instanceof Kx){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",jC(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))s[f]=m}if(e instanceof ku){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),d=l?`#${eb}=${encodeURIComponent(l)}`:"";return`${tb(t)}?${gu(a).slice(1)}${d}`}function tb({config:t}){return t.emulator?e1(t,JR):`https://${t.authDomain}/${XR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="webStorageSupport";class nb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nT,this._completeRedirectFn=SR,this._overrideRedirectResult=xR}async _openPopup(e,n,r,i){var o;Lr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Y2(e,n,r,Fm(),i);return QR(e,s,o1())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Y2(e,n,r,Fm(),i);return oR(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Lr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BR(e),r=new CR(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(op,{type:op},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[op];s!==void 0&&n(!!s),jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hx()||Fx()||n1()}}const rb=nb;var G2="@firebase/auth",K2="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sb(t){bn(new yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;J(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qx(t)},d=new vP(r,i,o,l);return LP(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bn(new yn("auth-internal",e=>{const n=Pi(e.getProvider("auth").getImmediate());return(r=>new ib(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(G2,K2,ob(t)),Qt(G2,K2,"esm2017")}/**
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
 */const ab=5*60,lb=vx("authIdTokenMaxAge")||ab;let Q2=null;const ub=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lb)return;const i=n==null?void 0:n.token;Q2!==i&&(Q2=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function uT(t=wh()){const e=Ai(t,"auth");if(e.isInitialized())return e.getImmediate();const n=SP(t,{popupRedirectResolver:rb,persistence:[pR,nR,nT]}),r=vx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=ub(o.toString());QP(n,s,()=>s(n.currentUser)),KP(n,a=>s(a))}}const i=mx("auth");return i&&CP(n,`http://${i}`),n}function cb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Gn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",cb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sb("Browser");var db="firebase",hb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt(db,hb,"app");var Z2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ji,cT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,I){function A(){}A.prototype=I.prototype,T.D=I.prototype,T.prototype=new A,T.prototype.constructor=T,T.C=function(b,D,M){for(var R=Array(arguments.length-2),de=2;de<arguments.length;de++)R[de-2]=arguments[de];return I.prototype[D].apply(b,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,I,A){A||(A=0);var b=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)b[D]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(D=0;16>D;++D)b[D]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=T.g[0],A=T.g[1],D=T.g[2];var M=T.g[3],R=I+(M^A&(D^M))+b[0]+3614090360&4294967295;I=A+(R<<7&4294967295|R>>>25),R=M+(D^I&(A^D))+b[1]+3905402710&4294967295,M=I+(R<<12&4294967295|R>>>20),R=D+(A^M&(I^A))+b[2]+606105819&4294967295,D=M+(R<<17&4294967295|R>>>15),R=A+(I^D&(M^I))+b[3]+3250441966&4294967295,A=D+(R<<22&4294967295|R>>>10),R=I+(M^A&(D^M))+b[4]+4118548399&4294967295,I=A+(R<<7&4294967295|R>>>25),R=M+(D^I&(A^D))+b[5]+1200080426&4294967295,M=I+(R<<12&4294967295|R>>>20),R=D+(A^M&(I^A))+b[6]+2821735955&4294967295,D=M+(R<<17&4294967295|R>>>15),R=A+(I^D&(M^I))+b[7]+4249261313&4294967295,A=D+(R<<22&4294967295|R>>>10),R=I+(M^A&(D^M))+b[8]+1770035416&4294967295,I=A+(R<<7&4294967295|R>>>25),R=M+(D^I&(A^D))+b[9]+2336552879&4294967295,M=I+(R<<12&4294967295|R>>>20),R=D+(A^M&(I^A))+b[10]+4294925233&4294967295,D=M+(R<<17&4294967295|R>>>15),R=A+(I^D&(M^I))+b[11]+2304563134&4294967295,A=D+(R<<22&4294967295|R>>>10),R=I+(M^A&(D^M))+b[12]+1804603682&4294967295,I=A+(R<<7&4294967295|R>>>25),R=M+(D^I&(A^D))+b[13]+4254626195&4294967295,M=I+(R<<12&4294967295|R>>>20),R=D+(A^M&(I^A))+b[14]+2792965006&4294967295,D=M+(R<<17&4294967295|R>>>15),R=A+(I^D&(M^I))+b[15]+1236535329&4294967295,A=D+(R<<22&4294967295|R>>>10),R=I+(D^M&(A^D))+b[1]+4129170786&4294967295,I=A+(R<<5&4294967295|R>>>27),R=M+(A^D&(I^A))+b[6]+3225465664&4294967295,M=I+(R<<9&4294967295|R>>>23),R=D+(I^A&(M^I))+b[11]+643717713&4294967295,D=M+(R<<14&4294967295|R>>>18),R=A+(M^I&(D^M))+b[0]+3921069994&4294967295,A=D+(R<<20&4294967295|R>>>12),R=I+(D^M&(A^D))+b[5]+3593408605&4294967295,I=A+(R<<5&4294967295|R>>>27),R=M+(A^D&(I^A))+b[10]+38016083&4294967295,M=I+(R<<9&4294967295|R>>>23),R=D+(I^A&(M^I))+b[15]+3634488961&4294967295,D=M+(R<<14&4294967295|R>>>18),R=A+(M^I&(D^M))+b[4]+3889429448&4294967295,A=D+(R<<20&4294967295|R>>>12),R=I+(D^M&(A^D))+b[9]+568446438&4294967295,I=A+(R<<5&4294967295|R>>>27),R=M+(A^D&(I^A))+b[14]+3275163606&4294967295,M=I+(R<<9&4294967295|R>>>23),R=D+(I^A&(M^I))+b[3]+4107603335&4294967295,D=M+(R<<14&4294967295|R>>>18),R=A+(M^I&(D^M))+b[8]+1163531501&4294967295,A=D+(R<<20&4294967295|R>>>12),R=I+(D^M&(A^D))+b[13]+2850285829&4294967295,I=A+(R<<5&4294967295|R>>>27),R=M+(A^D&(I^A))+b[2]+4243563512&4294967295,M=I+(R<<9&4294967295|R>>>23),R=D+(I^A&(M^I))+b[7]+1735328473&4294967295,D=M+(R<<14&4294967295|R>>>18),R=A+(M^I&(D^M))+b[12]+2368359562&4294967295,A=D+(R<<20&4294967295|R>>>12),R=I+(A^D^M)+b[5]+4294588738&4294967295,I=A+(R<<4&4294967295|R>>>28),R=M+(I^A^D)+b[8]+2272392833&4294967295,M=I+(R<<11&4294967295|R>>>21),R=D+(M^I^A)+b[11]+1839030562&4294967295,D=M+(R<<16&4294967295|R>>>16),R=A+(D^M^I)+b[14]+4259657740&4294967295,A=D+(R<<23&4294967295|R>>>9),R=I+(A^D^M)+b[1]+2763975236&4294967295,I=A+(R<<4&4294967295|R>>>28),R=M+(I^A^D)+b[4]+1272893353&4294967295,M=I+(R<<11&4294967295|R>>>21),R=D+(M^I^A)+b[7]+4139469664&4294967295,D=M+(R<<16&4294967295|R>>>16),R=A+(D^M^I)+b[10]+3200236656&4294967295,A=D+(R<<23&4294967295|R>>>9),R=I+(A^D^M)+b[13]+681279174&4294967295,I=A+(R<<4&4294967295|R>>>28),R=M+(I^A^D)+b[0]+3936430074&4294967295,M=I+(R<<11&4294967295|R>>>21),R=D+(M^I^A)+b[3]+3572445317&4294967295,D=M+(R<<16&4294967295|R>>>16),R=A+(D^M^I)+b[6]+76029189&4294967295,A=D+(R<<23&4294967295|R>>>9),R=I+(A^D^M)+b[9]+3654602809&4294967295,I=A+(R<<4&4294967295|R>>>28),R=M+(I^A^D)+b[12]+3873151461&4294967295,M=I+(R<<11&4294967295|R>>>21),R=D+(M^I^A)+b[15]+530742520&4294967295,D=M+(R<<16&4294967295|R>>>16),R=A+(D^M^I)+b[2]+3299628645&4294967295,A=D+(R<<23&4294967295|R>>>9),R=I+(D^(A|~M))+b[0]+4096336452&4294967295,I=A+(R<<6&4294967295|R>>>26),R=M+(A^(I|~D))+b[7]+1126891415&4294967295,M=I+(R<<10&4294967295|R>>>22),R=D+(I^(M|~A))+b[14]+2878612391&4294967295,D=M+(R<<15&4294967295|R>>>17),R=A+(M^(D|~I))+b[5]+4237533241&4294967295,A=D+(R<<21&4294967295|R>>>11),R=I+(D^(A|~M))+b[12]+1700485571&4294967295,I=A+(R<<6&4294967295|R>>>26),R=M+(A^(I|~D))+b[3]+2399980690&4294967295,M=I+(R<<10&4294967295|R>>>22),R=D+(I^(M|~A))+b[10]+4293915773&4294967295,D=M+(R<<15&4294967295|R>>>17),R=A+(M^(D|~I))+b[1]+2240044497&4294967295,A=D+(R<<21&4294967295|R>>>11),R=I+(D^(A|~M))+b[8]+1873313359&4294967295,I=A+(R<<6&4294967295|R>>>26),R=M+(A^(I|~D))+b[15]+4264355552&4294967295,M=I+(R<<10&4294967295|R>>>22),R=D+(I^(M|~A))+b[6]+2734768916&4294967295,D=M+(R<<15&4294967295|R>>>17),R=A+(M^(D|~I))+b[13]+1309151649&4294967295,A=D+(R<<21&4294967295|R>>>11),R=I+(D^(A|~M))+b[4]+4149444226&4294967295,I=A+(R<<6&4294967295|R>>>26),R=M+(A^(I|~D))+b[11]+3174756917&4294967295,M=I+(R<<10&4294967295|R>>>22),R=D+(I^(M|~A))+b[2]+718787259&4294967295,D=M+(R<<15&4294967295|R>>>17),R=A+(M^(D|~I))+b[9]+3951481745&4294967295,T.g[0]=T.g[0]+I&4294967295,T.g[1]=T.g[1]+(D+(R<<21&4294967295|R>>>11))&4294967295,T.g[2]=T.g[2]+D&4294967295,T.g[3]=T.g[3]+M&4294967295}r.prototype.u=function(T,I){I===void 0&&(I=T.length);for(var A=I-this.blockSize,b=this.B,D=this.h,M=0;M<I;){if(D==0)for(;M<=A;)i(this,T,M),M+=this.blockSize;if(typeof T=="string"){for(;M<I;)if(b[D++]=T.charCodeAt(M++),D==this.blockSize){i(this,b),D=0;break}}else for(;M<I;)if(b[D++]=T[M++],D==this.blockSize){i(this,b),D=0;break}}this.h=D,this.o+=I},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var I=1;I<T.length-8;++I)T[I]=0;var A=8*this.o;for(I=T.length-8;I<T.length;++I)T[I]=A&255,A/=256;for(this.u(T),T=Array(16),I=A=0;4>I;++I)for(var b=0;32>b;b+=8)T[A++]=this.g[I]>>>b&255;return T};function o(T,I){var A=a;return Object.prototype.hasOwnProperty.call(A,T)?A[T]:A[T]=I(T)}function s(T,I){this.h=I;for(var A=[],b=!0,D=T.length-1;0<=D;D--){var M=T[D]|0;b&&M==I||(A[D]=M,b=!1)}this.g=A}var a={};function l(T){return-128<=T&&128>T?o(T,function(I){return new s([I|0],0>I?-1:0)}):new s([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return w(d(-T));for(var I=[],A=1,b=0;T>=A;b++)I[b]=T/A|0,A*=4294967296;return new s(I,0)}function f(T,I){if(T.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(T.charAt(0)=="-")return w(f(T.substring(1),I));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=d(Math.pow(I,8)),b=m,D=0;D<T.length;D+=8){var M=Math.min(8,T.length-D),R=parseInt(T.substring(D,D+M),I);8>M?(M=d(Math.pow(I,M)),b=b.j(M).add(d(R))):(b=b.j(A),b=b.add(d(R)))}return b}var m=l(0),_=l(1),v=l(16777216);t=s.prototype,t.m=function(){if(L(this))return-w(this).m();for(var T=0,I=1,A=0;A<this.g.length;A++){var b=this.i(A);T+=(0<=b?b:4294967296+b)*I,I*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(x(this))return"0";if(L(this))return"-"+w(this).toString(T);for(var I=d(Math.pow(T,6)),A=this,b="";;){var D=S(A,I).g;A=y(A,D.j(I));var M=((0<A.g.length?A.g[0]:A.h)>>>0).toString(T);if(A=D,x(A))return M+b;for(;6>M.length;)M="0"+M;b=M+b}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function x(T){if(T.h!=0)return!1;for(var I=0;I<T.g.length;I++)if(T.g[I]!=0)return!1;return!0}function L(T){return T.h==-1}t.l=function(T){return T=y(this,T),L(T)?-1:x(T)?0:1};function w(T){for(var I=T.g.length,A=[],b=0;b<I;b++)A[b]=~T.g[b];return new s(A,~T.h).add(_)}t.abs=function(){return L(this)?w(this):this},t.add=function(T){for(var I=Math.max(this.g.length,T.g.length),A=[],b=0,D=0;D<=I;D++){var M=b+(this.i(D)&65535)+(T.i(D)&65535),R=(M>>>16)+(this.i(D)>>>16)+(T.i(D)>>>16);b=R>>>16,M&=65535,R&=65535,A[D]=R<<16|M}return new s(A,A[A.length-1]&-2147483648?-1:0)};function y(T,I){return T.add(w(I))}t.j=function(T){if(x(this)||x(T))return m;if(L(this))return L(T)?w(this).j(w(T)):w(w(this).j(T));if(L(T))return w(this.j(w(T)));if(0>this.l(v)&&0>T.l(v))return d(this.m()*T.m());for(var I=this.g.length+T.g.length,A=[],b=0;b<2*I;b++)A[b]=0;for(b=0;b<this.g.length;b++)for(var D=0;D<T.g.length;D++){var M=this.i(b)>>>16,R=this.i(b)&65535,de=T.i(D)>>>16,ie=T.i(D)&65535;A[2*b+2*D]+=R*ie,g(A,2*b+2*D),A[2*b+2*D+1]+=M*ie,g(A,2*b+2*D+1),A[2*b+2*D+1]+=R*de,g(A,2*b+2*D+1),A[2*b+2*D+2]+=M*de,g(A,2*b+2*D+2)}for(b=0;b<I;b++)A[b]=A[2*b+1]<<16|A[2*b];for(b=I;b<2*I;b++)A[b]=0;return new s(A,0)};function g(T,I){for(;(T[I]&65535)!=T[I];)T[I+1]+=T[I]>>>16,T[I]&=65535,I++}function E(T,I){this.g=T,this.h=I}function S(T,I){if(x(I))throw Error("division by zero");if(x(T))return new E(m,m);if(L(T))return I=S(w(T),I),new E(w(I.g),w(I.h));if(L(I))return I=S(T,w(I)),new E(w(I.g),I.h);if(30<T.g.length){if(L(T)||L(I))throw Error("slowDivide_ only works with positive integers.");for(var A=_,b=I;0>=b.l(T);)A=P(A),b=P(b);var D=O(A,1),M=O(b,1);for(b=O(b,2),A=O(A,2);!x(b);){var R=M.add(b);0>=R.l(T)&&(D=D.add(A),M=R),b=O(b,1),A=O(A,1)}return I=y(T,D.j(I)),new E(D,I)}for(D=m;0<=T.l(I);){for(A=Math.max(1,Math.floor(T.m()/I.m())),b=Math.ceil(Math.log(A)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),M=d(A),R=M.j(I);L(R)||0<R.l(T);)A-=b,M=d(A),R=M.j(I);x(M)&&(M=_),D=D.add(M),T=y(T,R)}return new E(D,T)}t.A=function(T){return S(this,T).h},t.and=function(T){for(var I=Math.max(this.g.length,T.g.length),A=[],b=0;b<I;b++)A[b]=this.i(b)&T.i(b);return new s(A,this.h&T.h)},t.or=function(T){for(var I=Math.max(this.g.length,T.g.length),A=[],b=0;b<I;b++)A[b]=this.i(b)|T.i(b);return new s(A,this.h|T.h)},t.xor=function(T){for(var I=Math.max(this.g.length,T.g.length),A=[],b=0;b<I;b++)A[b]=this.i(b)^T.i(b);return new s(A,this.h^T.h)};function P(T){for(var I=T.g.length+1,A=[],b=0;b<I;b++)A[b]=T.i(b)<<1|T.i(b-1)>>>31;return new s(A,T.h)}function O(T,I){var A=I>>5;I%=32;for(var b=T.g.length-A,D=[],M=0;M<b;M++)D[M]=0<I?T.i(M+A)>>>I|T.i(M+A+1)<<32-I:T.i(M+A);return new s(D,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,cT=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=d,s.fromString=f,Ji=s}).apply(typeof Z2<"u"?Z2:typeof self<"u"?self:typeof window<"u"?window:{});var hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dT,al,hT,Uc,$m,fT,pT,mT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,k){return u==Array.prototype||u==Object.prototype||(u[p]=k.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof hc=="object"&&hc];for(var p=0;p<u.length;++p){var k=u[p];if(k&&k.Math==Math)return k}throw Error("Cannot find global object")}var r=n(this);function i(u,p){if(p)e:{var k=r;u=u.split(".");for(var C=0;C<u.length-1;C++){var V=u[C];if(!(V in k))break e;k=k[V]}u=u[u.length-1],C=k[u],p=p(C),p!=C&&p!=null&&e(k,u,{configurable:!0,writable:!0,value:p})}}function o(u,p){u instanceof String&&(u+="");var k=0,C=!1,V={next:function(){if(!C&&k<u.length){var U=k++;return{value:p(U,u[U]),done:!1}}return C=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(u){return u||function(){return o(this,function(p,k){return k})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function l(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function d(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function f(u,p,k){return u.call.apply(u.bind,arguments)}function m(u,p,k){if(!u)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,C),u.apply(p,V)}}return function(){return u.apply(p,arguments)}}function _(u,p,k){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function v(u,p){var k=Array.prototype.slice.call(arguments,1);return function(){var C=k.slice();return C.push.apply(C,arguments),u.apply(this,C)}}function x(u,p){function k(){}k.prototype=p.prototype,u.aa=p.prototype,u.prototype=new k,u.prototype.constructor=u,u.Qb=function(C,V,U){for(var H=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)H[Pe-2]=arguments[Pe];return p.prototype[V].apply(C,H)}}function L(u){const p=u.length;if(0<p){const k=Array(p);for(let C=0;C<p;C++)k[C]=u[C];return k}return[]}function w(u,p){for(let k=1;k<arguments.length;k++){const C=arguments[k];if(l(C)){const V=u.length||0,U=C.length||0;u.length=V+U;for(let H=0;H<U;H++)u[V+H]=C[H]}else u.push(C)}}class y{constructor(p,k){this.i=p,this.j=k,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function g(u){return/^[\s\xa0]*$/.test(u)}function E(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function S(u){return S[" "](u),u}S[" "]=function(){};var P=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function O(u,p,k){for(const C in u)p.call(k,u[C],C,u)}function T(u,p){for(const k in u)p.call(void 0,u[k],k,u)}function I(u){const p={};for(const k in u)p[k]=u[k];return p}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(u,p){let k,C;for(let V=1;V<arguments.length;V++){C=arguments[V];for(k in C)u[k]=C[k];for(let U=0;U<A.length;U++)k=A[U],Object.prototype.hasOwnProperty.call(C,k)&&(u[k]=C[k])}}function D(u){var p=1;u=u.split(":");const k=[];for(;0<p&&u.length;)k.push(u.shift()),p--;return u.length&&k.push(u.join(":")),k}function M(u){a.setTimeout(()=>{throw u},0)}function R(){var u=G;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class de{constructor(){this.h=this.g=null}add(p,k){const C=ie.get();C.set(p,k),this.h?this.h.next=C:this.g=C,this.h=C}}var ie=new y(()=>new ye,u=>u.reset());class ye{constructor(){this.next=this.g=this.h=null}set(p,k){this.h=p,this.g=k,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,B=!1,G=new de,Z=()=>{const u=a.Promise.resolve(void 0);Ee=()=>{u.then(ce)}};var ce=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(k){M(k)}var p=ie;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}B=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var Ye=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const k=()=>{};a.addEventListener("test",k,p),a.removeEventListener("test",k,p)}catch{}return u}();function Be(u,p){if(me.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var k=this.type=u.type,C=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(P){e:{try{S(p.nodeName);var V=!0;break e}catch{}V=!1}V||(p=null)}}else k=="mouseover"?p=u.fromElement:k=="mouseout"&&(p=u.toElement);this.relatedTarget=p,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ge[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Be.aa.h.call(this)}}x(Be,me);var Ge={2:"touch",3:"pen",4:"mouse"};Be.prototype.h=function(){Be.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),oe=0;function se(u,p,k,C,V){this.listener=u,this.proxy=null,this.src=p,this.type=k,this.capture=!!C,this.ha=V,this.key=++oe,this.da=this.fa=!1}function ae(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ue(u){this.src=u,this.g={},this.h=0}ue.prototype.add=function(u,p,k,C,V){var U=u.toString();u=this.g[U],u||(u=this.g[U]=[],this.h++);var H=rs(u,p,C,V);return-1<H?(p=u[H],k||(p.fa=!1)):(p=new se(p,this.src,U,!!C,V),p.fa=k,u.push(p)),p};function Se(u,p){var k=p.type;if(k in u.g){var C=u.g[k],V=Array.prototype.indexOf.call(C,p,void 0),U;(U=0<=V)&&Array.prototype.splice.call(C,V,1),U&&(ae(p),u.g[k].length==0&&(delete u.g[k],u.h--))}}function rs(u,p,k,C){for(var V=0;V<u.length;++V){var U=u[V];if(!U.da&&U.listener==p&&U.capture==!!k&&U.ha==C)return V}return-1}var Sa="closure_lm_"+(1e6*Math.random()|0),La={};function vt(u,p,k,C,V){if(Array.isArray(p)){for(var U=0;U<p.length;U++)vt(u,p[U],k,C,V);return null}return k=ly(k),u&&u[F]?u.K(p,k,d(C)?!!C.capture:!1,V):Nn(u,p,k,!1,C,V)}function Nn(u,p,k,C,V,U){if(!p)throw Error("Invalid event type");var H=d(V)?!!V.capture:!!V,Pe=lf(u);if(Pe||(u[Sa]=Pe=new ue(u)),k=Pe.add(p,k,C,H,U),k.proxy)return k;if(C=is(),k.proxy=C,C.src=u,C.listener=k,u.addEventListener)Ye||(V=H),V===void 0&&(V=!1),u.addEventListener(p.toString(),C,V);else if(u.attachEvent)u.attachEvent(ay(p.toString()),C);else if(u.addListener&&u.removeListener)u.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return k}function is(){function u(k){return p.call(u.src,u.listener,k)}const p=c6;return u}function sy(u,p,k,C,V){if(Array.isArray(p))for(var U=0;U<p.length;U++)sy(u,p[U],k,C,V);else C=d(C)?!!C.capture:!!C,k=ly(k),u&&u[F]?(u=u.i,p=String(p).toString(),p in u.g&&(U=u.g[p],k=rs(U,k,C,V),-1<k&&(ae(U[k]),Array.prototype.splice.call(U,k,1),U.length==0&&(delete u.g[p],u.h--)))):u&&(u=lf(u))&&(p=u.g[p.toString()],u=-1,p&&(u=rs(p,k,C,V)),(k=-1<u?p[u]:null)&&af(k))}function af(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[F])Se(p.i,u);else{var k=u.type,C=u.proxy;p.removeEventListener?p.removeEventListener(k,C,u.capture):p.detachEvent?p.detachEvent(ay(k),C):p.addListener&&p.removeListener&&p.removeListener(C),(k=lf(p))?(Se(k,u),k.h==0&&(k.src=null,p[Sa]=null)):ae(u)}}}function ay(u){return u in La?La[u]:La[u]="on"+u}function c6(u,p){if(u.da)u=!0;else{p=new Be(p,this);var k=u.listener,C=u.ha||u.src;u.fa&&af(u),u=k.call(C,p)}return u}function lf(u){return u=u[Sa],u instanceof ue?u:null}var uf="__closure_events_fn_"+(1e9*Math.random()>>>0);function ly(u){return typeof u=="function"?u:(u[uf]||(u[uf]=function(p){return u.handleEvent(p)}),u[uf])}function kt(){re.call(this),this.i=new ue(this),this.M=this,this.F=null}x(kt,re),kt.prototype[F]=!0,kt.prototype.removeEventListener=function(u,p,k,C){sy(this,u,p,k,C)};function bt(u,p){var k,C=u.F;if(C)for(k=[];C;C=C.F)k.push(C);if(u=u.M,C=p.type||p,typeof p=="string")p=new me(p,u);else if(p instanceof me)p.target=p.target||u;else{var V=p;p=new me(C,u),b(p,V)}if(V=!0,k)for(var U=k.length-1;0<=U;U--){var H=p.g=k[U];V=bu(H,C,!0,p)&&V}if(H=p.g=u,V=bu(H,C,!0,p)&&V,V=bu(H,C,!1,p)&&V,k)for(U=0;U<k.length;U++)H=p.g=k[U],V=bu(H,C,!1,p)&&V}kt.prototype.N=function(){if(kt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var k=u.g[p],C=0;C<k.length;C++)ae(k[C]);delete u.g[p],u.h--}}this.F=null},kt.prototype.K=function(u,p,k,C){return this.i.add(String(u),p,!1,k,C)},kt.prototype.L=function(u,p,k,C){return this.i.add(String(u),p,!0,k,C)};function bu(u,p,k,C){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var V=!0,U=0;U<p.length;++U){var H=p[U];if(H&&!H.da&&H.capture==k){var Pe=H.listener,ct=H.ha||H.src;H.fa&&Se(u.i,H),V=Pe.call(ct,C)!==!1&&V}}return V&&!C.defaultPrevented}function uy(u,p,k){if(typeof u=="function")k&&(u=_(u,k));else if(u&&typeof u.handleEvent=="function")u=_(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function cy(u){u.g=uy(()=>{u.g=null,u.i&&(u.i=!1,cy(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class d6 extends re{constructor(p,k){super(),this.m=p,this.l=k,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:cy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ca(u){re.call(this),this.h=u,this.g={}}x(Ca,re);var dy=[];function hy(u){O(u.g,function(p,k){this.g.hasOwnProperty(k)&&af(p)},u),u.g={}}Ca.prototype.N=function(){Ca.aa.N.call(this),hy(this)},Ca.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cf=a.JSON.stringify,h6=a.JSON.parse,f6=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function df(){}df.prototype.h=null;function fy(u){return u.h||(u.h=u.i())}function py(){}var Aa={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function hf(){me.call(this,"d")}x(hf,me);function ff(){me.call(this,"c")}x(ff,me);var bi={},my=null;function ju(){return my=my||new kt}bi.La="serverreachability";function gy(u){me.call(this,bi.La,u)}x(gy,me);function Pa(u){const p=ju();bt(p,new gy(p))}bi.STAT_EVENT="statevent";function yy(u,p){me.call(this,bi.STAT_EVENT,u),this.stat=p}x(yy,me);function jt(u){const p=ju();bt(p,new yy(p,u))}bi.Ma="timingevent";function vy(u,p){me.call(this,bi.Ma,u),this.size=p}x(vy,me);function Ra(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function ba(){this.g=!0}ba.prototype.xa=function(){this.g=!1};function p6(u,p,k,C,V,U){u.info(function(){if(u.g)if(U)for(var H="",Pe=U.split("&"),ct=0;ct<Pe.length;ct++){var ke=Pe[ct].split("=");if(1<ke.length){var _t=ke[0];ke=ke[1];var Et=_t.split("_");H=2<=Et.length&&Et[1]=="type"?H+(_t+"="+ke+"&"):H+(_t+"=redacted&")}}else H=null;else H=U;return"XMLHTTP REQ ("+C+") [attempt "+V+"]: "+p+`
`+k+`
`+H})}function m6(u,p,k,C,V,U,H){u.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+V+"]: "+p+`
`+k+`
`+U+" "+H})}function os(u,p,k,C){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+y6(u,k)+(C?" "+C:"")})}function g6(u,p){u.info(function(){return"TIMEOUT: "+p})}ba.prototype.info=function(){};function y6(u,p){if(!u.g)return p;if(!p)return null;try{var k=JSON.parse(p);if(k){for(u=0;u<k.length;u++)if(Array.isArray(k[u])){var C=k[u];if(!(2>C.length)){var V=C[1];if(Array.isArray(V)&&!(1>V.length)){var U=V[0];if(U!="noop"&&U!="stop"&&U!="close")for(var H=1;H<V.length;H++)V[H]=""}}}}return cf(k)}catch{return p}}var Du={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ky={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pf;function Ou(){}x(Ou,df),Ou.prototype.g=function(){return new XMLHttpRequest},Ou.prototype.i=function(){return{}},pf=new Ou;function Or(u,p,k,C){this.j=u,this.i=p,this.l=k,this.R=C||1,this.U=new Ca(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _y}function _y(){this.i=null,this.g="",this.h=!1}var Ey={},mf={};function gf(u,p,k){u.L=1,u.v=Fu(sr(p)),u.m=k,u.P=!0,wy(u,null)}function wy(u,p){u.F=Date.now(),Mu(u),u.A=sr(u.v);var k=u.A,C=u.R;Array.isArray(C)||(C=[String(C)]),My(k.i,"t",C),u.C=0,k=u.j.J,u.h=new _y,u.g=ev(u.j,k?p:null,!u.m),0<u.O&&(u.M=new d6(_(u.Y,u,u.g),u.O)),p=u.U,k=u.g,C=u.ca;var V="readystatechange";Array.isArray(V)||(V&&(dy[0]=V.toString()),V=dy);for(var U=0;U<V.length;U++){var H=vt(k,V[U],C||p.handleEvent,!1,p.h||p);if(!H)break;p.g[H.key]=H}p=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Pa(),p6(u.i,u.u,u.A,u.l,u.R,u.m)}Or.prototype.ca=function(u){u=u.target;const p=this.M;p&&ar(u)==3?p.j():this.Y(u)},Or.prototype.Y=function(u){try{if(u==this.g)e:{const Et=ar(this.g);var p=this.g.Ba();const ls=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||zy(this.g)))){this.J||Et!=4||p==7||(p==8||0>=ls?Pa(3):Pa(2)),yf(this);var k=this.g.Z();this.X=k;t:if(xy(this)){var C=zy(this.g);u="";var V=C.length,U=ar(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ji(this),ja(this);var H="";break t}this.h.i=new a.TextDecoder}for(p=0;p<V;p++)this.h.h=!0,u+=this.h.i.decode(C[p],{stream:!(U&&p==V-1)});C.length=0,this.h.g+=u,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=k==200,m6(this.i,this.u,this.A,this.l,this.R,Et,k),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,ct=this.g;if((Pe=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(Pe)){var ke=Pe;break t}}ke=null}if(k=ke)os(this.i,this.l,k,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vf(this,k);else{this.o=!1,this.s=3,jt(12),ji(this),ja(this);break e}}if(this.P){k=!0;let _n;for(;!this.J&&this.C<H.length;)if(_n=v6(this,H),_n==mf){Et==4&&(this.s=4,jt(14),k=!1),os(this.i,this.l,null,"[Incomplete Response]");break}else if(_n==Ey){this.s=4,jt(15),os(this.i,this.l,H,"[Invalid Chunk]"),k=!1;break}else os(this.i,this.l,_n,null),vf(this,_n);if(xy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||H.length!=0||this.h.h||(this.s=1,jt(16),k=!1),this.o=this.o&&k,!k)os(this.i,this.l,H,"[Invalid Chunked Response]"),ji(this),ja(this);else if(0<H.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Tf(_t),_t.M=!0,jt(11))}}else os(this.i,this.l,H,null),vf(this,H);Et==4&&ji(this),this.o&&!this.J&&(Et==4?Qy(this.j,this):(this.o=!1,Mu(this)))}else O6(this.g),k==400&&0<H.indexOf("Unknown SID")?(this.s=3,jt(12)):(this.s=0,jt(13)),ji(this),ja(this)}}}catch{}finally{}};function xy(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function v6(u,p){var k=u.C,C=p.indexOf(`
`,k);return C==-1?mf:(k=Number(p.substring(k,C)),isNaN(k)?Ey:(C+=1,C+k>p.length?mf:(p=p.slice(C,C+k),u.C=C+k,p)))}Or.prototype.cancel=function(){this.J=!0,ji(this)};function Mu(u){u.S=Date.now()+u.I,Ty(u,u.I)}function Ty(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Ra(_(u.ba,u),p)}function yf(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Or.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(g6(this.i,this.A),this.L!=2&&(Pa(),jt(17)),ji(this),this.s=2,ja(this)):Ty(this,this.S-u)};function ja(u){u.j.G==0||u.J||Qy(u.j,u)}function ji(u){yf(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,hy(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function vf(u,p){try{var k=u.j;if(k.G!=0&&(k.g==u||kf(k.h,u))){if(!u.K&&kf(k.h,u)&&k.G==3){try{var C=k.Da.g.parse(p)}catch{C=null}if(Array.isArray(C)&&C.length==3){var V=C;if(V[0]==0){e:if(!k.u){if(k.g)if(k.g.F+3e3<u.F)Hu(k),zu(k);else break e;xf(k),jt(18)}}else k.za=V[1],0<k.za-k.T&&37500>V[2]&&k.F&&k.v==0&&!k.C&&(k.C=Ra(_(k.Za,k),6e3));if(1>=Ly(k.h)&&k.ca){try{k.ca()}catch{}k.ca=void 0}}else Oi(k,11)}else if((u.K||k.g==u)&&Hu(k),!g(p))for(V=k.Da.g.parse(p),p=0;p<V.length;p++){let ke=V[p];if(k.T=ke[0],ke=ke[1],k.G==2)if(ke[0]=="c"){k.K=ke[1],k.ia=ke[2];const _t=ke[3];_t!=null&&(k.la=_t,k.j.info("VER="+k.la));const Et=ke[4];Et!=null&&(k.Aa=Et,k.j.info("SVER="+k.Aa));const ls=ke[5];ls!=null&&typeof ls=="number"&&0<ls&&(C=1.5*ls,k.L=C,k.j.info("backChannelRequestTimeoutMs_="+C)),C=k;const _n=u.g;if(_n){const Yu=_n.g?_n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yu){var U=C.h;U.g||Yu.indexOf("spdy")==-1&&Yu.indexOf("quic")==-1&&Yu.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(_f(U,U.h),U.h=null))}if(C.D){const If=_n.g?_n.g.getResponseHeader("X-HTTP-Session-Id"):null;If&&(C.ya=If,be(C.I,C.D,If))}}k.G=3,k.l&&k.l.ua(),k.ba&&(k.R=Date.now()-u.F,k.j.info("Handshake RTT: "+k.R+"ms")),C=k;var H=u;if(C.qa=Jy(C,C.J?C.ia:null,C.W),H.K){Cy(C.h,H);var Pe=H,ct=C.L;ct&&(Pe.I=ct),Pe.B&&(yf(Pe),Mu(Pe)),C.g=H}else Gy(C);0<k.i.length&&Bu(k)}else ke[0]!="stop"&&ke[0]!="close"||Oi(k,7);else k.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Oi(k,7):wf(k):ke[0]!="noop"&&k.l&&k.l.ta(ke),k.v=0)}}Pa(4)}catch{}}var k6=class{constructor(u,p){this.g=u,this.map=p}};function Iy(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sy(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ly(u){return u.h?1:u.g?u.g.size:0}function kf(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function _f(u,p){u.g?u.g.add(p):u.h=p}function Cy(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Iy.prototype.cancel=function(){if(this.i=Ay(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Ay(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const k of u.g.values())p=p.concat(k.D);return p}return L(u.i)}function _6(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var p=[],k=u.length,C=0;C<k;C++)p.push(u[C]);return p}p=[],k=0;for(C in u)p[k++]=u[C];return p}function E6(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var p=[];u=u.length;for(var k=0;k<u;k++)p.push(k);return p}p=[],k=0;for(const C in u)p[k++]=C;return p}}}function Py(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var k=E6(u),C=_6(u),V=C.length,U=0;U<V;U++)p.call(void 0,C[U],k&&k[U],u)}var Ry=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function w6(u,p){if(u){u=u.split("&");for(var k=0;k<u.length;k++){var C=u[k].indexOf("="),V=null;if(0<=C){var U=u[k].substring(0,C);V=u[k].substring(C+1)}else U=u[k];p(U,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Di(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Di){this.h=u.h,Nu(this,u.j),this.o=u.o,this.g=u.g,Vu(this,u.s),this.l=u.l;var p=u.i,k=new Ma;k.i=p.i,p.g&&(k.g=new Map(p.g),k.h=p.h),by(this,k),this.m=u.m}else u&&(p=String(u).match(Ry))?(this.h=!1,Nu(this,p[1]||"",!0),this.o=Da(p[2]||""),this.g=Da(p[3]||"",!0),Vu(this,p[4]),this.l=Da(p[5]||"",!0),by(this,p[6]||"",!0),this.m=Da(p[7]||"")):(this.h=!1,this.i=new Ma(null,this.h))}Di.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Oa(p,jy,!0),":");var k=this.g;return(k||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Oa(p,jy,!0),"@"),u.push(encodeURIComponent(String(k)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),k=this.s,k!=null&&u.push(":",String(k))),(k=this.l)&&(this.g&&k.charAt(0)!="/"&&u.push("/"),u.push(Oa(k,k.charAt(0)=="/"?I6:T6,!0))),(k=this.i.toString())&&u.push("?",k),(k=this.m)&&u.push("#",Oa(k,L6)),u.join("")};function sr(u){return new Di(u)}function Nu(u,p,k){u.j=k?Da(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Vu(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function by(u,p,k){p instanceof Ma?(u.i=p,C6(u.i,u.h)):(k||(p=Oa(p,S6)),u.i=new Ma(p,u.h))}function be(u,p,k){u.i.set(p,k)}function Fu(u){return be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Da(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Oa(u,p,k){return typeof u=="string"?(u=encodeURI(u).replace(p,x6),k&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function x6(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var jy=/[#\/\?@]/g,T6=/[#\?:]/g,I6=/[#\?]/g,S6=/[#\?@]/g,L6=/#/g;function Ma(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Mr(u){u.g||(u.g=new Map,u.h=0,u.i&&w6(u.i,function(p,k){u.add(decodeURIComponent(p.replace(/\+/g," ")),k)}))}t=Ma.prototype,t.add=function(u,p){Mr(this),this.i=null,u=ss(this,u);var k=this.g.get(u);return k||this.g.set(u,k=[]),k.push(p),this.h+=1,this};function Dy(u,p){Mr(u),p=ss(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Oy(u,p){return Mr(u),p=ss(u,p),u.g.has(p)}t.forEach=function(u,p){Mr(this),this.g.forEach(function(k,C){k.forEach(function(V){u.call(p,V,C,this)},this)},this)},t.na=function(){Mr(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),k=[];for(let C=0;C<p.length;C++){const V=u[C];for(let U=0;U<V.length;U++)k.push(p[C])}return k},t.V=function(u){Mr(this);let p=[];if(typeof u=="string")Oy(this,u)&&(p=p.concat(this.g.get(ss(this,u))));else{u=Array.from(this.g.values());for(let k=0;k<u.length;k++)p=p.concat(u[k])}return p},t.set=function(u,p){return Mr(this),this.i=null,u=ss(this,u),Oy(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},t.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function My(u,p,k){Dy(u,p),0<k.length&&(u.i=null,u.g.set(ss(u,p),L(k)),u.h+=k.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var k=0;k<p.length;k++){var C=p[k];const U=encodeURIComponent(String(C)),H=this.V(C);for(C=0;C<H.length;C++){var V=U;H[C]!==""&&(V+="="+encodeURIComponent(String(H[C]))),u.push(V)}}return this.i=u.join("&")};function ss(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function C6(u,p){p&&!u.j&&(Mr(u),u.i=null,u.g.forEach(function(k,C){var V=C.toLowerCase();C!=V&&(Dy(this,C),My(this,V,k))},u)),u.j=p}function A6(u,p){const k=new ba;if(a.Image){const C=new Image;C.onload=v(Nr,k,"TestLoadImage: loaded",!0,p,C),C.onerror=v(Nr,k,"TestLoadImage: error",!1,p,C),C.onabort=v(Nr,k,"TestLoadImage: abort",!1,p,C),C.ontimeout=v(Nr,k,"TestLoadImage: timeout",!1,p,C),a.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=u}else p(!1)}function P6(u,p){const k=new ba,C=new AbortController,V=setTimeout(()=>{C.abort(),Nr(k,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:C.signal}).then(U=>{clearTimeout(V),U.ok?Nr(k,"TestPingServer: ok",!0,p):Nr(k,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(V),Nr(k,"TestPingServer: error",!1,p)})}function Nr(u,p,k,C,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),C(k)}catch{}}function R6(){this.g=new f6}function b6(u,p,k){const C=k||"";try{Py(u,function(V,U){let H=V;d(V)&&(H=cf(V)),p.push(C+U+"="+encodeURIComponent(H))})}catch(V){throw p.push(C+"type="+encodeURIComponent("_badmap")),V}}function Uu(u){this.l=u.Ub||null,this.j=u.eb||!1}x(Uu,df),Uu.prototype.g=function(){return new Wu(this.l,this.j)},Uu.prototype.i=function(u){return function(){return u}}({});function Wu(u,p){kt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Wu,kt),t=Wu.prototype,t.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Va(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Na(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Va(this)),this.g&&(this.readyState=3,Va(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ny(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ny(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Na(this):Va(this),this.readyState==3&&Ny(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Na(this))},t.Qa=function(u){this.g&&(this.response=u,Na(this))},t.ga=function(){this.g&&Na(this)};function Na(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Va(u)}t.setRequestHeader=function(u,p){this.u.append(u,p)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var k=p.next();!k.done;)k=k.value,u.push(k[0]+": "+k[1]),k=p.next();return u.join(`\r
`)};function Va(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Wu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Vy(u){let p="";return O(u,function(k,C){p+=C,p+=":",p+=k,p+=`\r
`}),p}function Ef(u,p,k){e:{for(C in k){var C=!1;break e}C=!0}C||(k=Vy(k),typeof u=="string"?k!=null&&encodeURIComponent(String(k)):be(u,p,k))}function He(u){kt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(He,kt);var j6=/^https?$/i,D6=["POST","PUT"];t=He.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,p,k,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pf.g(),this.v=this.o?fy(this.o):fy(pf),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(U){Fy(this,U);return}if(u=k||"",k=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var V in C)k.set(V,C[V]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const U of C.keys())k.set(U,C.get(U));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(k.keys()).find(U=>U.toLowerCase()=="content-type"),V=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(D6,p,void 0))||C||V||k.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,H]of k)this.g.setRequestHeader(U,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$y(this),this.u=!0,this.g.send(u),this.u=!1}catch(U){Fy(this,U)}};function Fy(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Uy(u),$u(u)}function Uy(u){u.A||(u.A=!0,bt(u,"complete"),bt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,bt(this,"complete"),bt(this,"abort"),$u(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$u(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Wy(this):this.bb())},t.bb=function(){Wy(this)};function Wy(u){if(u.h&&typeof s<"u"&&(!u.v[1]||ar(u)!=4||u.Z()!=2)){if(u.u&&ar(u)==4)uy(u.Ea,0,u);else if(bt(u,"readystatechange"),ar(u)==4){u.h=!1;try{const H=u.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var k;if(!(k=p)){var C;if(C=H===0){var V=String(u.D).match(Ry)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),C=!j6.test(V?V.toLowerCase():"")}k=C}if(k)bt(u,"complete"),bt(u,"success");else{u.m=6;try{var U=2<ar(u)?u.g.statusText:""}catch{U=""}u.l=U+" ["+u.Z()+"]",Uy(u)}}finally{$u(u)}}}}function $u(u,p){if(u.g){$y(u);const k=u.g,C=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||bt(u,"ready");try{k.onreadystatechange=C}catch{}}}function $y(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function ar(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<ar(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),h6(p)}};function zy(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function O6(u){const p={};u=(u.g&&2<=ar(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<u.length;C++){if(g(u[C]))continue;var k=D(u[C]);const V=k[0];if(k=k[1],typeof k!="string")continue;k=k.trim();const U=p[V]||[];p[V]=U,U.push(k)}T(p,function(C){return C.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fa(u,p,k){return k&&k.internalChannelParams&&k.internalChannelParams[u]||p}function By(u){this.Aa=0,this.i=[],this.j=new ba,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fa("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fa("baseRetryDelayMs",5e3,u),this.cb=Fa("retryDelaySeedMs",1e4,u),this.Wa=Fa("forwardChannelMaxRetries",2,u),this.wa=Fa("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Iy(u&&u.concurrentRequestLimit),this.Da=new R6,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=By.prototype,t.la=8,t.G=1,t.connect=function(u,p,k,C){jt(0),this.W=u,this.H=p||{},k&&C!==void 0&&(this.H.OSID=k,this.H.OAID=C),this.F=this.X,this.I=Jy(this,null,this.W),Bu(this)};function wf(u){if(Hy(u),u.G==3){var p=u.U++,k=sr(u.I);if(be(k,"SID",u.K),be(k,"RID",p),be(k,"TYPE","terminate"),Ua(u,k),p=new Or(u,u.j,p),p.L=2,p.v=Fu(sr(k)),k=!1,a.navigator&&a.navigator.sendBeacon)try{k=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!k&&a.Image&&(new Image().src=p.v,k=!0),k||(p.g=ev(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Mu(p)}Xy(u)}function zu(u){u.g&&(Tf(u),u.g.cancel(),u.g=null)}function Hy(u){zu(u),u.u&&(a.clearTimeout(u.u),u.u=null),Hu(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Bu(u){if(!Sy(u.h)&&!u.s){u.s=!0;var p=u.Ga;Ee||Z(),B||(Ee(),B=!0),G.add(p,u),u.B=0}}function M6(u,p){return Ly(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Ra(_(u.Ga,u,p),Zy(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const V=new Or(this,this.j,u);let U=this.o;if(this.S&&(U?(U=I(U),b(U,this.S)):U=this.S),this.m!==null||this.O||(V.H=U,U=null),this.P)e:{for(var p=0,k=0;k<this.i.length;k++){t:{var C=this.i[k];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(p+=C,4096<p){p=k;break e}if(p===4096||k===this.i.length-1){p=k+1;break e}}p=1e3}else p=1e3;p=Yy(this,V,p),k=sr(this.I),be(k,"RID",u),be(k,"CVER",22),this.D&&be(k,"X-HTTP-Session-Id",this.D),Ua(this,k),U&&(this.O?p="headers="+encodeURIComponent(String(Vy(U)))+"&"+p:this.m&&Ef(k,this.m,U)),_f(this.h,V),this.Ua&&be(k,"TYPE","init"),this.P?(be(k,"$req",p),be(k,"SID","null"),V.T=!0,gf(V,k,null)):gf(V,k,p),this.G=2}}else this.G==3&&(u?qy(this,u):this.i.length==0||Sy(this.h)||qy(this))};function qy(u,p){var k;p?k=p.l:k=u.U++;const C=sr(u.I);be(C,"SID",u.K),be(C,"RID",k),be(C,"AID",u.T),Ua(u,C),u.m&&u.o&&Ef(C,u.m,u.o),k=new Or(u,u.j,k,u.B+1),u.m===null&&(k.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Yy(u,k,1e3),k.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),_f(u.h,k),gf(k,C,p)}function Ua(u,p){u.H&&O(u.H,function(k,C){be(p,C,k)}),u.l&&Py({},function(k,C){be(p,C,k)})}function Yy(u,p,k){k=Math.min(u.i.length,k);var C=u.l?_(u.l.Na,u.l,u):null;e:{var V=u.i;let U=-1;for(;;){const H=["count="+k];U==-1?0<k?(U=V[0].g,H.push("ofs="+U)):U=0:H.push("ofs="+U);let Pe=!0;for(let ct=0;ct<k;ct++){let ke=V[ct].g;const _t=V[ct].map;if(ke-=U,0>ke)U=Math.max(0,V[ct].g-100),Pe=!1;else try{b6(_t,H,"req"+ke+"_")}catch{C&&C(_t)}}if(Pe){C=H.join("&");break e}}}return u=u.i.splice(0,k),p.D=u,C}function Gy(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Ee||Z(),B||(Ee(),B=!0),G.add(p,u),u.v=0}}function xf(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Ra(_(u.Fa,u),Zy(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,Ky(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Ra(_(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,jt(10),zu(this),Ky(this))};function Tf(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Ky(u){u.g=new Or(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=sr(u.qa);be(p,"RID","rpc"),be(p,"SID",u.K),be(p,"AID",u.T),be(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&be(p,"TO",u.ja),be(p,"TYPE","xmlhttp"),Ua(u,p),u.m&&u.o&&Ef(p,u.m,u.o),u.L&&(u.g.I=u.L);var k=u.g;u=u.ia,k.L=1,k.v=Fu(sr(p)),k.m=null,k.P=!0,wy(k,u)}t.Za=function(){this.C!=null&&(this.C=null,zu(this),xf(this),jt(19))};function Hu(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Qy(u,p){var k=null;if(u.g==p){Hu(u),Tf(u),u.g=null;var C=2}else if(kf(u.h,p))k=p.D,Cy(u.h,p),C=1;else return;if(u.G!=0){if(p.o)if(C==1){k=p.m?p.m.length:0,p=Date.now()-p.F;var V=u.B;C=ju(),bt(C,new vy(C,k)),Bu(u)}else Gy(u);else if(V=p.s,V==3||V==0&&0<p.X||!(C==1&&M6(u,p)||C==2&&xf(u)))switch(k&&0<k.length&&(p=u.h,p.i=p.i.concat(k)),V){case 1:Oi(u,5);break;case 4:Oi(u,10);break;case 3:Oi(u,6);break;default:Oi(u,2)}}}function Zy(u,p){let k=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(k*=2),k*p}function Oi(u,p){if(u.j.info("Error code "+p),p==2){var k=_(u.fb,u),C=u.Xa;const V=!C;C=new Di(C||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Nu(C,"https"),Fu(C),V?A6(C.toString(),k):P6(C.toString(),k)}else jt(2);u.G=0,u.l&&u.l.sa(p),Xy(u),Hy(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))};function Xy(u){if(u.G=0,u.ka=[],u.l){const p=Ay(u.h);(p.length!=0||u.i.length!=0)&&(w(u.ka,p),w(u.ka,u.i),u.h.i.length=0,L(u.i),u.i.length=0),u.l.ra()}}function Jy(u,p,k){var C=k instanceof Di?sr(k):new Di(k);if(C.g!="")p&&(C.g=p+"."+C.g),Vu(C,C.s);else{var V=a.location;C=V.protocol,p=p?p+"."+V.hostname:V.hostname,V=+V.port;var U=new Di(null);C&&Nu(U,C),p&&(U.g=p),V&&Vu(U,V),k&&(U.l=k),C=U}return k=u.D,p=u.ya,k&&p&&be(C,k,p),be(C,"VER",u.la),Ua(u,C),C}function ev(u,p,k){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new He(new Uu({eb:k})):new He(u.pa),p.Ha(u.J),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function tv(){}t=tv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function qu(){}qu.prototype.g=function(u,p){return new Xt(u,p)};function Xt(u,p){kt.call(this),this.g=new By(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!g(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!g(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new as(this)}x(Xt,kt),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){wf(this.g)},Xt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var k={};k.__data__=u,u=k}else this.u&&(k={},k.__data__=cf(u),u=k);p.i.push(new k6(p.Ya++,u)),p.G==3&&Bu(p)},Xt.prototype.N=function(){this.g.l=null,delete this.j,wf(this.g),delete this.g,Xt.aa.N.call(this)};function nv(u){hf.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const k in p){u=k;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}x(nv,hf);function rv(){ff.call(this),this.status=1}x(rv,ff);function as(u){this.g=u}x(as,tv),as.prototype.ua=function(){bt(this.g,"a")},as.prototype.ta=function(u){bt(this.g,new nv(u))},as.prototype.sa=function(u){bt(this.g,new rv)},as.prototype.ra=function(){bt(this.g,"b")},qu.prototype.createWebChannel=qu.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,mT=function(){return new qu},pT=function(){return ju()},fT=bi,$m={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Du.NO_ERROR=0,Du.TIMEOUT=8,Du.HTTP_ERROR=6,Uc=Du,ky.COMPLETE="complete",hT=ky,py.EventType=Aa,Aa.OPEN="a",Aa.CLOSE="b",Aa.ERROR="c",Aa.MESSAGE="d",kt.prototype.listen=kt.prototype.K,al=py,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,dT=He}).apply(typeof hc<"u"?hc:typeof self<"u"?self:typeof window<"u"?window:{});const X2="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ea="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new Eh("@firebase/firestore");function Ka(){return co.logLevel}function Q(t,...e){if(co.logLevel<=pe.DEBUG){const n=e.map(a1);co.debug(`Firestore (${Ea}): ${t}`,...n)}}function Cr(t,...e){if(co.logLevel<=pe.ERROR){const n=e.map(a1);co.error(`Firestore (${Ea}): ${t}`,...n)}}function na(t,...e){if(co.logLevel<=pe.WARN){const n=e.map(a1);co.warn(`Firestore (${Ea}): ${t}`,...n)}}function a1(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Ea}) INTERNAL ASSERTION FAILED: `+t;throw Cr(e),new Error(e)}function Ae(t,e){t||ee()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class pb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mb{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ae(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new Er;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Er,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Er)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new gT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new It(e)}}class gb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class yb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new gb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ae(this.o===void 0);const r=o=>{o.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,Q("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.R=n.token,new vb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=_b(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function ra(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ot(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new ot(0,0))}static max(){return new te(new ot(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return eu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof eu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends eu{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const Eb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends eu{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return Eb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new Y(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Y(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new Y(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Oe.fromString(e))}static fromName(e){return new X(Oe.fromString(e).popFirst(5))}static empty(){return new X(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Oe(e.slice()))}}function wb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new ki(i,X.empty(),e)}function xb(t){return new ki(t.readTime,t.key,-1)}class ki{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ki(te.min(),X.empty(),-1)}static max(){return new ki(te.max(),X.empty(),-1)}}function Tb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Sb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eu(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==Ib)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const d=l;n(e[d]).next(f=>{s[d]=f,++a,a===o&&r(s)},f=>i(f))}})}static doWhile(e,n){return new $((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function Lb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class l1{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}l1.oe=-1;function Sh(t){return t==null}function Rd(t){return t===0&&1/t==-1/0}function Cb(t){return typeof t=="number"&&Number.isInteger(t)&&!Rd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J2(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Eo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fc(this.root,e,this.comparator,!1)}getReverseIterator(){return new fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fc(this.root,e,this.comparator,!0)}}class fc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??ht.RED,this.left=i??ht.EMPTY,this.right=o??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new ht(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,i,o){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ek(this.data.getIterator())}getIteratorFrom(e){return new ek(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new mt(this.comparator);return n.data=e,n}}class ek{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new nn([])}unionWith(e){let n=new mt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ra(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class kT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new kT("Invalid base64 string: "+o):o}}(e);return new yt(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const Ab=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _i(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=Ab.exec(t);if(Ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ho(t){return typeof t=="string"?yt.fromBase64String(t):yt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function c1(t){const e=t.mapValue.fields.__previous_value__;return u1(e)?c1(e):e}function tu(t){const e=_i(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e,n,r,i,o,s,a,l,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=d}}class nu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new nu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof nu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc={mapValue:{}};function fo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?u1(t)?4:bb(t)?9007199254740991:Rb(t)?10:11:ee()}function Xn(t,e){if(t===e)return!0;const n=fo(t);if(n!==fo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return tu(t).isEqual(tu(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=_i(i.timestampValue),a=_i(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return ho(i.bytesValue).isEqual(ho(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Ke(i.geoPointValue.latitude)===Ke(o.geoPointValue.latitude)&&Ke(i.geoPointValue.longitude)===Ke(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Ke(i.integerValue)===Ke(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Ke(i.doubleValue),a=Ke(o.doubleValue);return s===a?Rd(s)===Rd(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return ra(t.arrayValue.values||[],e.arrayValue.values||[],Xn);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(J2(s)!==J2(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!Xn(s[l],a[l])))return!1;return!0}(t,e);default:return ee()}}function ru(t,e){return(t.values||[]).find(n=>Xn(n,e))!==void 0}function ia(t,e){if(t===e)return 0;const n=fo(t),r=fo(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Ke(o.integerValue||o.doubleValue),l=Ke(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return tk(t.timestampValue,e.timestampValue);case 4:return tk(tu(t),tu(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(o,s){const a=ho(o),l=ho(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),l=s.split("/");for(let d=0;d<a.length&&d<l.length;d++){const f=_e(a[d],l[d]);if(f!==0)return f}return _e(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=_e(Ke(o.latitude),Ke(s.latitude));return a!==0?a:_e(Ke(o.longitude),Ke(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return nk(t.arrayValue,e.arrayValue);case 10:return function(o,s){var a,l,d,f;const m=o.fields||{},_=s.fields||{},v=(a=m.value)===null||a===void 0?void 0:a.arrayValue,x=(l=_.value)===null||l===void 0?void 0:l.arrayValue,L=_e(((d=v==null?void 0:v.values)===null||d===void 0?void 0:d.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return L!==0?L:nk(v,x)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===pc.mapValue&&s===pc.mapValue)return 0;if(o===pc.mapValue)return 1;if(s===pc.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),d=s.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const _=_e(l[m],f[m]);if(_!==0)return _;const v=ia(a[l[m]],d[f[m]]);if(v!==0)return v}return _e(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ee()}}function tk(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=_i(t),r=_i(e),i=_e(n.seconds,r.seconds);return i!==0?i:_e(n.nanos,r.nanos)}function nk(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=ia(n[i],r[i]);if(o)return o}return _e(n.length,r.length)}function oa(t){return zm(t)}function zm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_i(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ho(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=zm(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${zm(n.fields[s])}`;return i+"}"}(t.mapValue):ee()}function rk(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bm(t){return!!t&&"integerValue"in t}function d1(t){return!!t&&"arrayValue"in t}function ik(t){return!!t&&"nullValue"in t}function ok(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wc(t){return!!t&&"mapValue"in t}function Rb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function xl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Eo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=xl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xl(n)}setAll(e){let n=ft.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=xl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Wc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Eo(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new zt(xl(this.value))}}function _T(t){const e=[];return Eo(t.fields,(n,r)=>{const i=new ft([n]);if(Wc(r)){const o=_T(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Lt(e,0,te.min(),te.min(),te.min(),zt.empty(),0)}static newFoundDocument(e,n,r,i){return new Lt(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new Lt(e,2,n,te.min(),te.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new Lt(e,3,n,te.min(),te.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bd{constructor(e,n){this.position=e,this.inclusive=n}}function sk(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=X.comparator(X.fromName(s.referenceValue),n.key):r=ia(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ak(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class iu{constructor(e,n="asc"){this.field=e,this.dir=n}}function jb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ET{}class tt extends ET{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ob(e,n,r):n==="array-contains"?new Vb(e,r):n==="in"?new Fb(e,r):n==="not-in"?new Ub(e,r):n==="array-contains-any"?new Wb(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Mb(e,r):new Nb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ia(n,this.value)):n!==null&&fo(this.value)===fo(n)&&this.matchesComparison(ia(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends ET{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Dn(e,n)}matches(e){return wT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function wT(t){return t.op==="and"}function xT(t){return Db(t)&&wT(t)}function Db(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function Hm(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+oa(t.value);if(xT(t))return t.filters.map(e=>Hm(e)).join(",");{const e=t.filters.map(n=>Hm(n)).join(",");return`${t.op}(${e})`}}function TT(t,e){return t instanceof tt?function(r,i){return i instanceof tt&&r.op===i.op&&r.field.isEqual(i.field)&&Xn(r.value,i.value)}(t,e):t instanceof Dn?function(r,i){return i instanceof Dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&TT(s,i.filters[a]),!0):!1}(t,e):void ee()}function IT(t){return t instanceof tt?function(n){return`${n.field.canonicalString()} ${n.op} ${oa(n.value)}`}(t):t instanceof Dn?function(n){return n.op.toString()+" {"+n.getFilters().map(IT).join(" ,")+"}"}(t):"Filter"}class Ob extends tt{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class Mb extends tt{constructor(e,n){super(e,"in",n),this.keys=ST("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Nb extends tt{constructor(e,n){super(e,"not-in",n),this.keys=ST("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ST(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class Vb extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return d1(n)&&ru(n.arrayValue,this.value)}}class Fb extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ru(this.value.arrayValue,n)}}class Ub extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ru(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ru(this.value.arrayValue,n)}}class Wb extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!d1(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ru(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ue=null}}function lk(t,e=null,n=[],r=[],i=null,o=null,s=null){return new $b(t,e,n,r,i,o,s)}function h1(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Sh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>oa(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>oa(r)).join(",")),e.ue=n}return e.ue}function f1(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!TT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ak(t.startAt,e.startAt)&&ak(t.endAt,e.endAt)}function qm(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function zb(t,e,n,r,i,o,s,a){return new wa(t,e,n,r,i,o,s,a)}function p1(t){return new wa(t)}function uk(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function LT(t){return t.collectionGroup!==null}function Tl(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new mt(ft.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new iu(o,r))}),n.has(ft.keyField().canonicalString())||e.ce.push(new iu(ft.keyField(),r))}return e.ce}function Qn(t){const e=ne(t);return e.le||(e.le=Bb(e,Tl(t))),e.le}function Bb(t,e){if(t.limitType==="F")return lk(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new iu(i.field,o)});const n=t.endAt?new bd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bd(t.startAt.position,t.startAt.inclusive):null;return lk(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ym(t,e){const n=t.filters.concat([e]);return new wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Gm(t,e,n){return new wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lh(t,e){return f1(Qn(t),Qn(e))&&t.limitType===e.limitType}function CT(t){return`${h1(Qn(t))}|lt:${t.limitType}`}function vs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>IT(i)).join(", ")}]`),Sh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>oa(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>oa(i)).join(",")),`Target(${r})`}(Qn(t))}; limitType=${t.limitType})`}function Ch(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):X.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Tl(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,l){const d=sk(s,a,l);return s.inclusive?d<=0:d<0}(r.startAt,Tl(r),i)||r.endAt&&!function(s,a,l){const d=sk(s,a,l);return s.inclusive?d>=0:d>0}(r.endAt,Tl(r),i))}(t,e)}function Hb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function AT(t){return(e,n)=>{let r=!1;for(const i of Tl(t)){const o=qb(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function qb(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(o,s,a){const l=s.data.field(o),d=a.data.field(o);return l!==null&&d!==null?ia(l,d):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Eo(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return vT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=new $e(X.comparator);function Ar(){return Yb}const PT=new $e(X.comparator);function ll(...t){let e=PT;for(const n of t)e=e.insert(n.key,n);return e}function RT(t){let e=PT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Gi(){return Il()}function bT(){return Il()}function Il(){return new xa(t=>t.toString(),(t,e)=>t.isEqual(e))}const Gb=new $e(X.comparator),Kb=new mt(X.comparator);function fe(...t){let e=Kb;for(const n of t)e=e.add(n);return e}const Qb=new mt(_e);function Zb(){return Qb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rd(e)?"-0":e}}function jT(t){return{integerValue:""+t}}function Xb(t,e){return Cb(e)?jT(e):m1(t,e)}/**
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
 */class Ah{constructor(){this._=void 0}}function Jb(t,e,n){return t instanceof ou?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&u1(o)&&(o=c1(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof su?OT(t,e):t instanceof au?MT(t,e):function(i,o){const s=DT(i,o),a=ck(s)+ck(i.Pe);return Bm(s)&&Bm(i.Pe)?jT(a):m1(i.serializer,a)}(t,e)}function e3(t,e,n){return t instanceof su?OT(t,e):t instanceof au?MT(t,e):n}function DT(t,e){return t instanceof jd?function(r){return Bm(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class ou extends Ah{}class su extends Ah{constructor(e){super(),this.elements=e}}function OT(t,e){const n=NT(e);for(const r of t.elements)n.some(i=>Xn(i,r))||n.push(r);return{arrayValue:{values:n}}}class au extends Ah{constructor(e){super(),this.elements=e}}function MT(t,e){let n=NT(e);for(const r of t.elements)n=n.filter(i=>!Xn(i,r));return{arrayValue:{values:n}}}class jd extends Ah{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ck(t){return Ke(t.integerValue||t.doubleValue)}function NT(t){return d1(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3{constructor(e,n){this.field=e,this.transform=n}}function n3(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof su&&i instanceof su||r instanceof au&&i instanceof au?ra(r.elements,i.elements,Xn):r instanceof jd&&i instanceof jd?Xn(r.Pe,i.Pe):r instanceof ou&&i instanceof ou}(t.transform,e.transform)}class r3{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $c(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ph{}function VT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new g1(t.key,pn.none()):new xu(t.key,t.data,pn.none());{const n=t.data,r=zt.empty();let i=new mt(ft.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Ri(t.key,r,new nn(i.toArray()),pn.none())}}function i3(t,e,n){t instanceof xu?function(i,o,s){const a=i.value.clone(),l=hk(i.fieldTransforms,o,s.transformResults);a.setAll(l),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ri?function(i,o,s){if(!$c(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=hk(i.fieldTransforms,o,s.transformResults),l=o.data;l.setAll(FT(i)),l.setAll(a),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Sl(t,e,n,r){return t instanceof xu?function(o,s,a,l){if(!$c(o.precondition,s))return a;const d=o.value.clone(),f=fk(o.fieldTransforms,l,s);return d.setAll(f),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ri?function(o,s,a,l){if(!$c(o.precondition,s))return a;const d=fk(o.fieldTransforms,l,s),f=s.data;return f.setAll(FT(o)),f.setAll(d),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(o,s,a){return $c(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function o3(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=DT(r.transform,i||null);o!=null&&(n===null&&(n=zt.empty()),n.set(r.field,o))}return n||null}function dk(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ra(r,i,(o,s)=>n3(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xu extends Ph{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ri extends Ph{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function FT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function hk(t,e,n){const r=new Map;Ae(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,e3(s,a,n[i]))}return r}function fk(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,Jb(o,s,e))}return r}class g1 extends Ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class s3 extends Ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a3{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&i3(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Sl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Sl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bT();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=VT(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&ra(this.mutations,e.mutations,(n,r)=>dk(n,r))&&ra(this.baseMutations,e.baseMutations,(n,r)=>dk(n,r))}}class y1{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ae(e.mutations.length===r.length);let i=function(){return Gb}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new y1(e,n,r,i)}}/**
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
 */class l3{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class u3{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe,ge;function c3(t){switch(t){default:return ee();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function UT(t){if(t===void 0)return Cr("GRPC error has no .code"),W.UNKNOWN;switch(t){case Xe.OK:return W.OK;case Xe.CANCELLED:return W.CANCELLED;case Xe.UNKNOWN:return W.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return W.INTERNAL;case Xe.UNAVAILABLE:return W.UNAVAILABLE;case Xe.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Xe.NOT_FOUND:return W.NOT_FOUND;case Xe.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Xe.ABORTED:return W.ABORTED;case Xe.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Xe.DATA_LOSS:return W.DATA_LOSS;default:return ee()}}(ge=Xe||(Xe={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function d3(){return new TextEncoder}/**
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
 */const h3=new Ji([4294967295,4294967295],0);function pk(t){const e=d3().encode(t),n=new cT;return n.update(e),new Uint8Array(n.digest())}function mk(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Ji([n,r],0),new Ji([i,o],0)]}class v1{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ul(`Invalid padding: ${n}`);if(r<0)throw new ul(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ul(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ul(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ji.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Ji.fromNumber(r)));return i.compare(h3)===1&&(i=new Ji([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=pk(e),[r,i]=mk(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new v1(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=pk(e),[r,i]=mk(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ul extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Tu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Rh(te.min(),i,new $e(_e),Ar(),fe())}}class Tu{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Tu(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class WT{constructor(e,n){this.targetId=e,this.me=n}}class $T{constructor(e,n,r=yt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class gk{constructor(){this.fe=0,this.ge=vk(),this.pe=yt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=fe(),n=fe(),r=fe();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new Tu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=vk()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class f3{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ar(),this.qe=yk(),this.Qe=new $e(_e)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(qm(o))if(r===0){const s=new X(o.path);this.Ue(n,s,Lt.newNoDocument(s,te.min()))}else Ae(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),l=a?this.Xe(a,e,s):1;if(l!==0){this.je(n);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=ho(r).toUint8Array()}catch(l){if(l instanceof kT)return na("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new v1(s,i,o)}catch(l){return na(l instanceof ul?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const a=this.Je(s);if(a){if(o.current&&qm(a.target)){const l=new X(a.target.path);this.ke.get(l)!==null||this.it(s,l)||this.Ue(s,l,Lt.newNoDocument(l,e))}o.be&&(n.set(s,o.ve()),o.Ce())}});let r=fe();this.qe.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new Rh(e,n,this.Qe,this.ke,r);return this.ke=Ar(),this.qe=yk(),this.Qe=new $e(_e),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new gk,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new mt(_e),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new gk),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function yk(){return new $e(X.comparator)}function vk(){return new $e(X.comparator)}const p3={asc:"ASCENDING",desc:"DESCENDING"},m3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},g3={and:"AND",or:"OR"};class y3{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Km(t,e){return t.useProto3Json||Sh(e)?e:{value:e}}function Dd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function v3(t,e){return Dd(t,e.toTimestamp())}function Zn(t){return Ae(!!t),te.fromTimestamp(function(n){const r=_i(n);return new ot(r.seconds,r.nanos)}(t))}function k1(t,e){return Qm(t,e).canonicalString()}function Qm(t,e){const n=function(i){return new Oe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function BT(t){const e=Oe.fromString(t);return Ae(KT(e)),e}function Zm(t,e){return k1(t.databaseId,e.path)}function sp(t,e){const n=BT(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(qT(n))}function HT(t,e){return k1(t.databaseId,e)}function k3(t){const e=BT(t);return e.length===4?Oe.emptyPath():qT(e)}function Xm(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qT(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function kk(t,e,n){return{name:Zm(t,e),fields:n.value.mapValue.fields}}function _3(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,f){return d.useProto3Json?(Ae(f===void 0||typeof f=="string"),yt.fromBase64String(f||"")):(Ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array),yt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(d){const f=d.code===void 0?W.UNKNOWN:UT(d.code);return new Y(f,d.message||"")}(s);n=new $T(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=sp(t,r.document.name),o=Zn(r.document.updateTime),s=r.document.createTime?Zn(r.document.createTime):te.min(),a=new zt({mapValue:{fields:r.document.fields}}),l=Lt.newFoundDocument(i,o,s,a),d=r.targetIds||[],f=r.removedTargetIds||[];n=new zc(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=sp(t,r.document),o=r.readTime?Zn(r.readTime):te.min(),s=Lt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new zc([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=sp(t,r.document),o=r.removedTargetIds||[];n=new zc([],o,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new u3(i,o),a=r.targetId;n=new WT(a,s)}}return n}function E3(t,e){let n;if(e instanceof xu)n={update:kk(t,e.key,e.value)};else if(e instanceof g1)n={delete:Zm(t,e.key)};else if(e instanceof Ri)n={update:kk(t,e.key,e.data),updateMask:P3(e.fieldMask)};else{if(!(e instanceof s3))return ee();n={verify:Zm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof ou)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof su)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof au)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof jd)return{fieldPath:s.field.canonicalString(),increment:a.Pe};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:v3(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ee()}(t,e.precondition)),n}function w3(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?Zn(i.updateTime):Zn(o);return s.isEqual(te.min())&&(s=Zn(o)),new r3(s,i.transformResults||[])}(n,e))):[]}function x3(t,e){return{documents:[HT(t,e.path)]}}function T3(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=HT(t,i);const o=function(d){if(d.length!==0)return GT(Dn.create(d,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(d){if(d.length!==0)return d.map(f=>function(_){return{field:ks(_.field),direction:L3(_.dir)}}(f))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=Km(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function I3(t){let e=k3(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ae(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let o=[];n.where&&(o=function(m){const _=YT(m);return _ instanceof Dn&&xT(_)?_.getFilters():[_]}(n.where));let s=[];n.orderBy&&(s=function(m){return m.map(_=>function(x){return new iu(_s(x.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(_))}(n.orderBy));let a=null;n.limit&&(a=function(m){let _;return _=typeof m=="object"?m.value:m,Sh(_)?null:_}(n.limit));let l=null;n.startAt&&(l=function(m){const _=!!m.before,v=m.values||[];return new bd(v,_)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const _=!m.before,v=m.values||[];return new bd(v,_)}(n.endAt)),zb(e,i,s,o,a,"F",l,d)}function S3(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function YT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_s(n.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_s(n.unaryFilter.field);return tt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=_s(n.unaryFilter.field);return tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=_s(n.unaryFilter.field);return tt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return tt.create(_s(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dn.create(n.compositeFilter.filters.map(r=>YT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function L3(t){return p3[t]}function C3(t){return m3[t]}function A3(t){return g3[t]}function ks(t){return{fieldPath:t.canonicalString()}}function _s(t){return ft.fromServerFormat(t.fieldPath)}function GT(t){return t instanceof tt?function(n){if(n.op==="=="){if(ok(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NAN"}};if(ik(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ok(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NAN"}};if(ik(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ks(n.field),op:C3(n.op),value:n.value}}}(t):t instanceof Dn?function(n){const r=n.getFilters().map(i=>GT(i));return r.length===1?r[0]:{compositeFilter:{op:A3(n.op),filters:r}}}(t):ee()}function P3(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function KT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n,r,i,o=te.min(),s=te.min(),a=yt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ei(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ei(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R3{constructor(e){this.ct=e}}function b3(t){const e=I3({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3{constructor(){this.un=new D3}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(ki.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(ki.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class D3{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new mt(Oe.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new mt(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class O3{constructor(){this.changes=new xa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class M3{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N3{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Sl(r.mutation,i,nn.empty(),ot.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=Gi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=ll();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=Gi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=Ar();const s=Il(),a=function(){return Il()}();return n.forEach((l,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Ri)?o=o.insert(d.key,d):f!==void 0?(s.set(d.key,f.mutation.getFieldMask()),Sl(f.mutation,d,f.mutation.getFieldMask(),ot.now())):s.set(d.key,nn.empty())}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((d,f)=>s.set(d,f)),n.forEach((d,f)=>{var m;return a.set(d,new M3(f,(m=s.get(d))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Il();let i=new $e((s,a)=>s-a),o=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const d=n.get(l);if(d===null)return;let f=r.get(l)||nn.empty();f=a.applyToLocalView(d,f),r.set(l,f);const m=(i.get(a.batchId)||fe()).add(l);i=i.insert(a.batchId,m)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),d=l.key,f=l.value,m=bT();f.forEach(_=>{if(!o.has(_)){const v=VT(n.get(_),r.get(_));v!==null&&m.set(_,v),o=o.add(_)}}),s.push(this.documentOverlayCache.saveOverlays(e,d,m))}return $.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return X.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):LT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):$.resolve(Gi());let a=-1,l=o;return s.next(d=>$.forEach(d,(f,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),o.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{l=l.insert(f,_)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,l,d,fe())).next(f=>({batchId:a,changes:RT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=ll();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=ll();return this.indexManager.getCollectionParents(e,o).next(a=>$.forEach(a,l=>{const d=function(m,_){return new wa(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((m,_)=>{s=s.insert(m,_)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((l,d)=>{const f=d.getKey();s.get(f)===null&&(s=s.insert(f,Lt.newInvalidDocument(f)))});let a=ll();return s.forEach((l,d)=>{const f=o.get(l);f!==void 0&&Sl(f.mutation,d,nn.empty(),ot.now()),Ch(n,d)&&(a=a.insert(l,d))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V3{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Zn(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:b3(i.bundledQuery),readTime:Zn(i.readTime)}}(n)),$.resolve()}}/**
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
 */class F3{constructor(){this.overlays=new $e(X.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Gi();return $.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Gi(),o=n.length+1,s=new X(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,d=l.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new $e((d,f)=>d-f);const s=this.overlays.getIterator();for(;s.hasNext();){const d=s.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=o.get(d.largestBatchId);f===null&&(f=Gi(),o=o.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const a=Gi(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>a.set(d,f)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new l3(n,r));let o=this.Ir.get(n);o===void 0&&(o=fe(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
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
 */class U3{constructor(){this.sessionToken=yt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(){this.Tr=new mt(st.Er),this.dr=new mt(st.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new st(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new Oe([])),r=new st(n,e),i=new st(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new Oe([])),r=new st(n,e),i=new st(n,e+1);let o=fe();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new st(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||_e(e.wr,n.wr)}static Ar(e,n){return _e(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W3{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new mt(st.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new a3(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.br=this.br.add(new st(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(s)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return $.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),i=new st(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const a=this.Dr(s.wr);o.push(a)}),$.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new mt(_e);return n.forEach(i=>{const o=new st(i,0),s=new st(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],a=>{r=r.add(a.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;X.isDocumentKey(o)||(o=o.child(""));const s=new st(new X(o),0);let a=new mt(_e);return this.br.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(a=a.add(l.wr)),!0)},s),$.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,i=>{const o=new st(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new st(n,0),i=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $3{constructor(e){this.Mr=e,this.docs=function(){return new $e(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Lt.newInvalidDocument(n))}getEntries(e,n){let r=Ar();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Lt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Ar();const s=n.path,a=new X(s.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!s.isPrefixOf(d.path))break;d.path.length>s.length+1||Tb(xb(f),r)<=0||(i.has(f.key)||Ch(n,f))&&(o=o.insert(f.key,f.mutableCopy()))}return $.resolve(o)}getAllFromCollectionGroup(e,n,r,i){ee()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new z3(this)}getSize(e){return $.resolve(this.size)}}class z3 extends O3{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B3{constructor(e){this.persistence=e,this.Nr=new xa(n=>h1(n),f1),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new _1,this.targetCount=0,this.kr=sa.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new sa(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(o).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),$.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H3{constructor(e,n){this.qr={},this.overlays={},this.Qr=new l1(0),this.Kr=!1,this.Kr=!0,this.$r=new U3,this.referenceDelegate=e(this),this.Ur=new B3(this),this.indexManager=new j3,this.remoteDocumentCache=function(i){return new $3(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new R3(n),this.Gr=new V3(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new F3,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new W3(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const i=new q3(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class q3 extends Sb{constructor(e){super(),this.currentSequenceNumber=e}}class E1{constructor(e){this.persistence=e,this.Jr=new _1,this.Yr=null}static Zr(e){return new E1(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const i=X.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=fe(),i=fe();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new w1(e,n.fromCache,r,i)}}/**
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
 */class Y3{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G3{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return CC()?8:Lb(Pt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new Y3;return this.Xi(e,n,s).next(a=>{if(o.result=a,this.zi)return this.es(e,n,s,a.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ka()<=pe.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",vs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Ka()<=pe.DEBUG&&Q("QueryEngine","Query:",vs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ka()<=pe.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",vs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qn(n))):$.resolve())}Yi(e,n){if(uk(n))return $.resolve(null);let r=Qn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Gm(n,null,"F"),r=Qn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=fe(...o);return this.Ji.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.ts(n,a);return this.ns(n,d,s,l.readTime)?this.Yi(e,Gm(n,null,"F")):this.rs(e,d,n,l)}))})))}Zi(e,n,r,i){return uk(n)||i.isEqual(te.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?$.resolve(null):(Ka()<=pe.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vs(n)),this.rs(e,s,n,wb(i,-1)).next(a=>a))})}ts(e,n){let r=new mt(AT(e));return n.forEach((i,o)=>{Ch(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return Ka()<=pe.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",vs(n)),this.Ji.getDocumentsMatchingQuery(e,n,ki.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K3{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new $e(_e),this._s=new xa(o=>h1(o),f1),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new N3(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Q3(t,e,n,r){return new K3(t,e,n,r)}async function QT(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=fe();for(const d of i){s.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of o){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(d=>({hs:d,removedBatchIds:s,addedBatchIds:a}))})})}function Z3(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,d,f){const m=d.batch,_=m.keys();let v=$.resolve();return _.forEach(x=>{v=v.next(()=>f.getEntry(l,x)).next(L=>{const w=d.docVersions.get(x);Ae(w!==null),L.version.compareTo(w)<0&&(m.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),f.addEntry(L)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(l,m))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=fe();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(l=l.add(a.batch.mutations[d].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function ZT(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function X3(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((f,m)=>{const _=i.get(m);if(!_)return;a.push(n.Ur.removeMatchingKeys(o,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(o,f.addedDocuments,m)));let v=_.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(m)!==null?v=v.withResumeToken(yt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),i=i.insert(m,v),function(L,w,y){return L.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(_,v,f)&&a.push(n.Ur.updateTargetData(o,v))});let l=Ar(),d=fe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,f))}),a.push(J3(o,s,e.documentUpdates).next(f=>{l=f.Ps,d=f.Is})),!r.isEqual(te.min())){const f=n.Ur.getLastRemoteSnapshotVersion(o).next(m=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(f)}return $.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,d)).next(()=>l)}).then(o=>(n.os=i,o))}function J3(t,e,n){let r=fe(),i=fe();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=Ar();return n.forEach((a,l)=>{const d=o.get(a);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):Q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",l.version)}),{Ps:s,Is:i}})}function ej(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function tj(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(o=>o?(i=o,$.resolve(i)):n.Ur.allocateTargetId(r).next(s=>(i=new ei(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Jm(t,e,n){const r=ne(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!wu(s))throw s;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function _k(t,e,n){const r=ne(t);let i=te.min(),o=fe();return r.persistence.runTransaction("Execute query","readwrite",s=>function(l,d,f){const m=ne(l),_=m._s.get(f);return _!==void 0?$.resolve(m.os.get(_)):m.Ur.getTargetData(d,f)}(r,s,Qn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.ss.getDocumentsMatchingQuery(s,e,n?i:te.min(),n?o:fe())).next(a=>(nj(r,Hb(e),a),{documents:a,Ts:o})))}function nj(t,e,n){let r=t.us.get(e)||te.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.us.set(e,r)}class Ek{constructor(){this.activeTargetIds=Zb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rj{constructor(){this.so=new Ek,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ek,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ij{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mc=null;function ap(){return mc===null?mc=function(){return 268435456+Math.round(2147483648*Math.random())}():mc++,"0x"+mc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sj{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class aj extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const a=ap(),l=this.xo(n,r.toUriEncodedString());Q("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,s),this.No(n,l,d,i).then(f=>(Q("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw na("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",l,"request:",i),f})}Lo(n,r,i,o,s,a){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ea}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=oj[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=ap();return new Promise((s,a)=>{const l=new dT;l.setWithCredentials(!0),l.listenOnce(hT.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Uc.NO_ERROR:const f=l.getResponseJson();Q(Tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),s(f);break;case Uc.TIMEOUT:Q(Tt,`RPC '${e}' ${o} timed out`),a(new Y(W.DEADLINE_EXCEEDED,"Request time out"));break;case Uc.HTTP_ERROR:const m=l.getStatus();if(Q(Tt,`RPC '${e}' ${o} failed with status:`,m,"response text:",l.getResponseText()),m>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const v=_==null?void 0:_.error;if(v&&v.status&&v.message){const x=function(w){const y=w.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(y)>=0?y:W.UNKNOWN}(v.status);a(new Y(x,v.message))}else a(new Y(W.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Y(W.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{Q(Tt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);Q(Tt,`RPC '${e}' ${o} sending request:`,i),l.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=ap(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=mT(),a=pT(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=o.join("");Q(Tt,`Creating RPC '${e}' stream ${i}: ${f}`,l);const m=s.createWebChannel(f,l);let _=!1,v=!1;const x=new sj({Io:w=>{v?Q(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(_||(Q(Tt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),_=!0),Q(Tt,`RPC '${e}' stream ${i} sending:`,w),m.send(w))},To:()=>m.close()}),L=(w,y,g)=>{w.listen(y,E=>{try{g(E)}catch(S){setTimeout(()=>{throw S},0)}})};return L(m,al.EventType.OPEN,()=>{v||(Q(Tt,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),L(m,al.EventType.CLOSE,()=>{v||(v=!0,Q(Tt,`RPC '${e}' stream ${i} transport closed`),x.So())}),L(m,al.EventType.ERROR,w=>{v||(v=!0,na(Tt,`RPC '${e}' stream ${i} transport errored:`,w),x.So(new Y(W.UNAVAILABLE,"The operation could not be completed")))}),L(m,al.EventType.MESSAGE,w=>{var y;if(!v){const g=w.data[0];Ae(!!g);const E=g,S=E.error||((y=E[0])===null||y===void 0?void 0:y.error);if(S){Q(Tt,`RPC '${e}' stream ${i} received error:`,S);const P=S.status;let O=function(A){const b=Xe[A];if(b!==void 0)return UT(b)}(P),T=S.message;O===void 0&&(O=W.INTERNAL,T="Unknown error status: "+P+" with message "+S.message),v=!0,x.So(new Y(O,T)),m.close()}else Q(Tt,`RPC '${e}' stream ${i} received:`,g),x.bo(g)}}),L(a,fT.STAT_EVENT,w=>{w.stat===$m.PROXY?Q(Tt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===$m.NOPROXY&&Q(Tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function lp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t){return new y3(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,n,r,i,o,s,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new XT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(Cr(n.toString()),Cr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new Y(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lj extends JT{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=_3(this.serializer,e),r=function(o){if(!("targetChange"in o))return te.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?te.min():s.readTime?Zn(s.readTime):te.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Xm(this.serializer),n.addTarget=function(o,s){let a;const l=s.target;if(a=qm(l)?{documents:x3(o,l)}:{query:T3(o,l)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=zT(o,s.resumeToken);const d=Km(o,s.expectedCount);d!==null&&(a.expectedCount=d)}else if(s.snapshotVersion.compareTo(te.min())>0){a.readTime=Dd(o,s.snapshotVersion.toTimestamp());const d=Km(o,s.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=S3(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Xm(this.serializer),n.removeTarget=e,this.a_(n)}}class uj extends JT{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,Ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=w3(e.writeResults,e.commitTime),r=Zn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Xm(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>E3(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cj extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Y(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Qm(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(W.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,Qm(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(W.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class dj{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class hj{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{wo(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=ne(l);d.L_.add(4),await Iu(d),d.q_.set("Unknown"),d.L_.delete(4),await jh(d)}(this))})}),this.q_=new dj(r,i)}}async function jh(t){if(wo(t))for(const e of t.B_)await e(!0)}async function Iu(t){for(const e of t.B_)await e(!1)}function e8(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),S1(n)?I1(n):Ta(n).r_()&&T1(n,e))}function x1(t,e){const n=ne(t),r=Ta(n);n.N_.delete(e),r.r_()&&t8(n,e),n.N_.size===0&&(r.r_()?r.o_():wo(n)&&n.q_.set("Unknown"))}function T1(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ta(t).A_(e)}function t8(t,e){t.Q_.xe(e),Ta(t).R_(e)}function I1(t){t.Q_=new f3({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ta(t).start(),t.q_.v_()}function S1(t){return wo(t)&&!Ta(t).n_()&&t.N_.size>0}function wo(t){return ne(t).L_.size===0}function n8(t){t.Q_=void 0}async function fj(t){t.q_.set("Online")}async function pj(t){t.N_.forEach((e,n)=>{T1(t,e)})}async function mj(t,e){n8(t),S1(t)?(t.q_.M_(e),I1(t)):t.q_.set("Unknown")}async function gj(t,e,n){if(t.q_.set("Online"),e instanceof $T&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Od(t,r)}else if(e instanceof zc?t.Q_.Ke(e):e instanceof WT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const r=await ZT(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.Q_.rt(s);return a.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=o.N_.get(d);f&&o.N_.set(d,f.withResumeToken(l.resumeToken,s))}}),a.targetMismatches.forEach((l,d)=>{const f=o.N_.get(l);if(!f)return;o.N_.set(l,f.withResumeToken(yt.EMPTY_BYTE_STRING,f.snapshotVersion)),t8(o,l);const m=new ei(f.target,l,d,f.sequenceNumber);T1(o,m)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await Od(t,r)}}async function Od(t,e,n){if(!wu(e))throw e;t.L_.add(1),await Iu(t),t.q_.set("Offline"),n||(n=()=>ZT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await jh(t)})}function r8(t,e){return e().catch(n=>Od(t,n,e))}async function Dh(t){const e=ne(t),n=Ei(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;yj(e);)try{const i=await ej(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,vj(e,i)}catch(i){await Od(e,i)}i8(e)&&o8(e)}function yj(t){return wo(t)&&t.O_.length<10}function vj(t,e){t.O_.push(e);const n=Ei(t);n.r_()&&n.V_&&n.m_(e.mutations)}function i8(t){return wo(t)&&!Ei(t).n_()&&t.O_.length>0}function o8(t){Ei(t).start()}async function kj(t){Ei(t).p_()}async function _j(t){const e=Ei(t);for(const n of t.O_)e.m_(n.mutations)}async function Ej(t,e,n){const r=t.O_.shift(),i=y1.from(r,e,n);await r8(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Dh(t)}async function wj(t,e){e&&Ei(t).V_&&await async function(r,i){if(function(s){return c3(s)&&s!==W.ABORTED}(i.code)){const o=r.O_.shift();Ei(r).s_(),await r8(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Dh(r)}}(t,e),i8(t)&&o8(t)}async function xk(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=wo(n);n.L_.add(3),await Iu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await jh(n)}async function xj(t,e){const n=ne(t);e?(n.L_.delete(2),await jh(n)):e||(n.L_.add(2),await Iu(n),n.q_.set("Unknown"))}function Ta(t){return t.K_||(t.K_=function(n,r,i){const o=ne(n);return o.w_(),new lj(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:fj.bind(null,t),Ro:pj.bind(null,t),mo:mj.bind(null,t),d_:gj.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),S1(t)?I1(t):t.q_.set("Unknown")):(await t.K_.stop(),n8(t))})),t.K_}function Ei(t){return t.U_||(t.U_=function(n,r,i){const o=ne(n);return o.w_(),new uj(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:kj.bind(null,t),mo:wj.bind(null,t),f_:_j.bind(null,t),g_:Ej.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Dh(t)):(await t.U_.stop(),t.O_.length>0&&(Q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new L1(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function C1(t,e){if(Cr("AsyncQueue",`${e}: ${t}`),wu(t))return new Y(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=ll(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new Ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Tk{constructor(){this.W_=new $e(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ee():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class aa{constructor(e,n,r,i,o,s,a,l,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new aa(e,n,Ys.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tj{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Ij{constructor(){this.queries=Ik(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ne(n),o=i.queries;i.queries=Ik(),o.forEach((s,a)=>{for(const l of a.j_)l.onError(r)})})(this,new Y(W.ABORTED,"Firestore shutting down"))}}function Ik(){return new xa(t=>CT(t),Lh)}async function s8(t,e){const n=ne(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new Tj,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const a=C1(s,`Initialization of query '${vs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&A1(n)}async function a8(t,e){const n=ne(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Sj(t,e){const n=ne(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.j_)a.X_(i)&&(r=!0);s.z_=i}}r&&A1(n)}function Lj(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function A1(t){t.Y_.forEach(e=>{e.next()})}var e0,Sk;(Sk=e0||(e0={})).ea="default",Sk.Cache="cache";class l8{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new aa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=aa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==e0.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u8{constructor(e){this.key=e}}class c8{constructor(e){this.key=e}}class Cj{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=fe(),this.mutatedKeys=fe(),this.Aa=AT(e),this.Ra=new Ys(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Tk,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const _=i.get(f),v=Ch(this.query,m)?m:null,x=!!_&&this.mutatedKeys.has(_.key),L=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let w=!1;_&&v?_.data.isEqual(v.data)?x!==L&&(r.track({type:3,doc:v}),w=!0):this.ga(_,v)||(r.track({type:2,doc:v}),w=!0,(l&&this.Aa(v,l)>0||d&&this.Aa(v,d)<0)&&(a=!0)):!_&&v?(r.track({type:0,doc:v}),w=!0):_&&!v&&(r.track({type:1,doc:_}),w=!0,(l||d)&&(a=!0)),w&&(v?(s=s.add(v),o=L?o.add(f):o.delete(f)):(s=s.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const f=this.query.limitType==="F"?s.last():s.first();s=s.delete(f.key),o=o.delete(f.key),r.track({type:1,doc:f})}return{Ra:s,fa:r,ns:a,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((f,m)=>function(v,x){const L=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return L(v)-L(x)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,d=l!==this.Ea;return this.Ea=l,s.length!==0||d?{snapshot:new aa(this.query,e.Ra,o,s,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Tk,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=fe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new c8(r))}),this.da.forEach(r=>{e.has(r)||n.push(new u8(r))}),n}ba(e){this.Ta=e.Ts,this.da=fe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return aa.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Aj{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Pj{constructor(e){this.key=e,this.va=!1}}class Rj{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new xa(a=>CT(a),Lh),this.Ma=new Map,this.xa=new Set,this.Oa=new $e(X.comparator),this.Na=new Map,this.La=new _1,this.Ba={},this.ka=new Map,this.qa=sa.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function bj(t,e,n=!0){const r=g8(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await d8(r,e,n,!0),i}async function jj(t,e){const n=g8(t);await d8(n,e,!0,!1)}async function d8(t,e,n,r){const i=await tj(t.localStore,Qn(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,n);let a;return r&&(a=await Dj(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&e8(t.remoteStore,i),a}async function Dj(t,e,n,r,i){t.Ka=(m,_,v)=>async function(L,w,y,g){let E=w.view.ma(y);E.ns&&(E=await _k(L.localStore,w.query,!1).then(({documents:T})=>w.view.ma(T,E)));const S=g&&g.targetChanges.get(w.targetId),P=g&&g.targetMismatches.get(w.targetId)!=null,O=w.view.applyChanges(E,L.isPrimaryClient,S,P);return Ck(L,w.targetId,O.wa),O.snapshot}(t,m,_,v);const o=await _k(t.localStore,e,!0),s=new Cj(e,o.Ts),a=s.ma(o.documents),l=Tu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=s.applyChanges(a,t.isPrimaryClient,l);Ck(t,n,d.wa);const f=new Aj(e,n,s);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function Oj(t,e,n){const r=ne(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(s=>!Lh(s,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Jm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&x1(r.remoteStore,i.targetId),t0(r,i.targetId)}).catch(Eu)):(t0(r,i.targetId),await Jm(r.localStore,i.targetId,!0))}async function Mj(t,e){const n=ne(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),x1(n.remoteStore,r.targetId))}async function Nj(t,e,n){const r=Bj(t);try{const i=await function(s,a){const l=ne(s),d=ot.now(),f=a.reduce((v,x)=>v.add(x.key),fe());let m,_;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let x=Ar(),L=fe();return l.cs.getEntries(v,f).next(w=>{x=w,x.forEach((y,g)=>{g.isValidDocument()||(L=L.add(y))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,x)).next(w=>{m=w;const y=[];for(const g of a){const E=o3(g,m.get(g.key).overlayedDocument);E!=null&&y.push(new Ri(g.key,E,_T(E.value.mapValue),pn.exists(!0)))}return l.mutationQueue.addMutationBatch(v,d,y,a)}).next(w=>{_=w;const y=w.applyToLocalDocumentSet(m,L);return l.documentOverlayCache.saveOverlays(v,w.batchId,y)})}).then(()=>({batchId:_.batchId,changes:RT(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let d=s.Ba[s.currentUser.toKey()];d||(d=new $e(_e)),d=d.insert(a,l),s.Ba[s.currentUser.toKey()]=d}(r,i.batchId,n),await Su(r,i.changes),await Dh(r.remoteStore)}catch(i){const o=C1(i,"Failed to persist write");n.reject(o)}}async function h8(t,e){const n=ne(t);try{const r=await X3(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Na.get(o);s&&(Ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?Ae(s.va):i.removedDocuments.size>0&&(Ae(s.va),s.va=!1))}),await Su(n,r,e)}catch(r){await Eu(r)}}function Lk(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const a=s.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const l=ne(s);l.onlineState=a;let d=!1;l.queries.forEach((f,m)=>{for(const _ of m.j_)_.Z_(a)&&(d=!0)}),d&&A1(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Vj(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let s=new $e(X.comparator);s=s.insert(o,Lt.newNoDocument(o,te.min()));const a=fe().add(o),l=new Rh(te.min(),new Map,new $e(_e),s,a);await h8(r,l),r.Oa=r.Oa.remove(o),r.Na.delete(e),P1(r)}else await Jm(r.localStore,e,!1).then(()=>t0(r,e,n)).catch(Eu)}async function Fj(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await Z3(n.localStore,e);p8(n,r,null),f8(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Su(n,i)}catch(i){await Eu(i)}}async function Uj(t,e,n){const r=ne(t);try{const i=await function(s,a){const l=ne(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,a).next(m=>(Ae(m!==null),f=m.keys(),l.mutationQueue.removeMutationBatch(d,m))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(r.localStore,e);p8(r,e,n),f8(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Su(r,i)}catch(i){await Eu(i)}}function f8(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function p8(t,e,n){const r=ne(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function t0(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||m8(t,r)})}function m8(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(x1(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),P1(t))}function Ck(t,e,n){for(const r of n)r instanceof u8?(t.La.addReference(r.key,e),Wj(t,r)):r instanceof c8?(Q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||m8(t,r.key)):ee()}function Wj(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Q("SyncEngine","New document in limbo: "+n),t.xa.add(r),P1(t))}function P1(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(Oe.fromString(e)),r=t.qa.next();t.Na.set(r,new Pj(n)),t.Oa=t.Oa.insert(n,r),e8(t.remoteStore,new ei(Qn(p1(n.path)),r,"TargetPurposeLimboResolution",l1.oe))}}async function Su(t,e,n){const r=ne(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{s.push(r.Ka(l,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(d){i.push(d);const m=w1.Wi(l.targetId,d);o.push(m)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(l,d){const f=ne(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>$.forEach(d,_=>$.forEach(_.$i,v=>f.persistence.referenceDelegate.addReference(m,_.targetId,v)).next(()=>$.forEach(_.Ui,v=>f.persistence.referenceDelegate.removeReference(m,_.targetId,v)))))}catch(m){if(!wu(m))throw m;Q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const _=m.targetId;if(!m.fromCache){const v=f.os.get(_),x=v.snapshotVersion,L=v.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(_,L)}}}(r.localStore,o))}async function $j(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await QT(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(a=>{a.forEach(l=>{l.reject(new Y(W.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Su(n,r.hs)}}function zj(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return fe().add(r.key);{let i=fe();const o=n.Ma.get(e);if(!o)return i;for(const s of o){const a=n.Fa.get(s);i=i.unionWith(a.view.Va)}return i}}function g8(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=h8.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vj.bind(null,e),e.Ca.d_=Sj.bind(null,e.eventManager),e.Ca.$a=Lj.bind(null,e.eventManager),e}function Bj(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Fj.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Uj.bind(null,e),e}class Md{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Q3(this.persistence,new G3,e.initialUser,this.serializer)}Ga(e){return new H3(E1.Zr,this.serializer)}Wa(e){return new rj}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Md.provider={build:()=>new Md};class n0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Lk(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$j.bind(null,this.syncEngine),await xj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ij}()}createDatastore(e){const n=bh(e.databaseInfo.databaseId),r=function(o){return new aj(o)}(e.databaseInfo);return function(o,s,a,l){return new cj(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new hj(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Lk(this.syncEngine,n,0),function(){return wk.D()?new wk:new ij}())}createSyncEngine(e,n){return function(i,o,s,a,l,d,f){const m=new Rj(i,o,s,a,l,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=ne(i);Q("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Iu(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}n0.provider={build:()=>new n0};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class y8{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Cr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hj{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=yT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async s=>{Q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=C1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function up(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await QT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ak(t,e){t.asyncQueue.verifyOperationInProgress();const n=await qj(t);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>xk(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>xk(e.remoteStore,i)),t._onlineComponents=e}async function qj(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await up(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;na("Error using user provided cache. Falling back to memory cache: "+n),await up(t,new Md)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await up(t,new Md);return t._offlineComponents}async function v8(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await Ak(t,t._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await Ak(t,new n0))),t._onlineComponents}function Yj(t){return v8(t).then(e=>e.syncEngine)}async function k8(t){const e=await v8(t),n=e.eventManager;return n.onListen=bj.bind(null,e.syncEngine),n.onUnlisten=Oj.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jj.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Mj.bind(null,e.syncEngine),n}function Gj(t,e,n={}){const r=new Er;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,d){const f=new y8({next:_=>{f.Za(),s.enqueueAndForget(()=>a8(o,m));const v=_.docs.has(a);!v&&_.fromCache?d.reject(new Y(W.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&_.fromCache&&l&&l.source==="server"?d.reject(new Y(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(_)},error:_=>d.reject(_)}),m=new l8(p1(a.path),f,{includeMetadataChanges:!0,_a:!0});return s8(o,m)}(await k8(t),t.asyncQueue,e,n,r)),r.promise}function Kj(t,e,n={}){const r=new Er;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,d){const f=new y8({next:_=>{f.Za(),s.enqueueAndForget(()=>a8(o,m)),_.fromCache&&l.source==="server"?d.reject(new Y(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),m=new l8(a,f,{includeMetadataChanges:!0,_a:!0});return s8(o,m)}(await k8(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function _8(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E8(t,e,n){if(!n)throw new Y(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Qj(t,e,n,r){if(e===!0&&r===!0)throw new Y(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rk(t){if(!X.isDocumentKey(t))throw new Y(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bk(t){if(X.isDocumentKey(t))throw new Y(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Oh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function On(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oh(t);throw new Y(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Qj("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_8((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Y(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Y(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Y(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Mh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jk({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jk(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fb;switch(r.type){case"firstParty":return new yb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Pk.get(n);r&&(Q("ComponentProvider","Removing Datastore"),Pk.delete(n),r.terminate())}(this),Promise.resolve()}}function Zj(t,e,n,r={}){var i;const o=(t=On(t,Mh))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&na("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=It.MOCK_USER;else{a=kx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new Y(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new It(d)}t._authCredentials=new pb(new gT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xo(this.firestore,e,this._query)}}class Vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class fi extends xo{constructor(e,n,r){super(e,n,p1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new X(e))}withConverter(e){return new fi(this.firestore,e,this._path)}}function Mn(t,e,...n){if(t=We(t),E8("collection","path",e),t instanceof Mh){const r=Oe.fromString(e,...n);return bk(r),new fi(t,null,r)}{if(!(t instanceof Vt||t instanceof fi))throw new Y(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return bk(r),new fi(t.firestore,null,r)}}function nt(t,e,...n){if(t=We(t),arguments.length===1&&(e=yT.newId()),E8("doc","path",e),t instanceof Mh){const r=Oe.fromString(e,...n);return Rk(r),new Vt(t,null,new X(r))}{if(!(t instanceof Vt||t instanceof fi))throw new Y(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Rk(r),new Vt(t.firestore,t instanceof fi?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new XT(this,"async_queue_retry"),this.Vu=()=>{const r=lp();r&&Q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=lp();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=lp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Er;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!wu(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw Cr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=L1.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class To extends Mh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Dk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Dk(e),this._firestoreClient=void 0,await e}}}function Xj(t,e){const n=typeof t=="object"?t:wh(),r=typeof t=="string"?t:"(default)",i=Ai(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=gx("firestore");o&&Zj(i,...o)}return i}function R1(t){if(t._terminated)throw new Y(W.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Jj(t),t._firestoreClient}function Jj(t){var e,n,r;const i=t._freezeSettings(),o=function(a,l,d,f){return new Pb(a,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,_8(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Hj(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this._byteString=e}static fromBase64String(e){try{return new la(yt.fromBase64String(e))}catch(n){throw new Y(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new la(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vh=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */class j1{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e5=/^__.*__$/;class t5{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ri(e,this.data,this.fieldMask,n,this.fieldTransforms):new xu(e,this.data,n,this.fieldTransforms)}}class w8{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ri(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function x8(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class D1{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new D1(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Nd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(x8(this.Cu)&&e5.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class n5{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||bh(e)}Qu(e,n,r,i=!1){return new D1({Cu:e,methodName:n,qu:r,path:ft.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fh(t){const e=t._freezeSettings(),n=bh(t._databaseId);return new n5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function T8(t,e,n,r,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);M1("Data must be an object, but it was:",s,r);const a=I8(r,s);let l,d;if(o.merge)l=new nn(s.fieldMask),d=s.fieldTransforms;else if(o.mergeFields){const f=[];for(const m of o.mergeFields){const _=r0(e,m,n);if(!s.contains(_))throw new Y(W.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);L8(f,_)||f.push(_)}l=new nn(f),d=s.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,d=s.fieldTransforms;return new t5(new zt(a),l,d)}class Uh extends Vh{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Uh}}class O1 extends Vh{_toFieldTransform(e){return new t3(e.path,new ou)}isEqual(e){return e instanceof O1}}function r5(t,e,n,r){const i=t.Qu(1,e,n);M1("Data must be an object, but it was:",i,r);const o=[],s=zt.empty();Eo(r,(l,d)=>{const f=N1(e,l,n);d=We(d);const m=i.Nu(f);if(d instanceof Uh)o.push(f);else{const _=Lu(d,m);_!=null&&(o.push(f),s.set(f,_))}});const a=new nn(o);return new w8(s,a,i.fieldTransforms)}function i5(t,e,n,r,i,o){const s=t.Qu(1,e,n),a=[r0(e,r,n)],l=[i];if(o.length%2!=0)throw new Y(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<o.length;_+=2)a.push(r0(e,o[_])),l.push(o[_+1]);const d=[],f=zt.empty();for(let _=a.length-1;_>=0;--_)if(!L8(d,a[_])){const v=a[_];let x=l[_];x=We(x);const L=s.Nu(v);if(x instanceof Uh)d.push(v);else{const w=Lu(x,L);w!=null&&(d.push(v),f.set(v,w))}}const m=new nn(d);return new w8(f,m,s.fieldTransforms)}function o5(t,e,n,r=!1){return Lu(n,t.Qu(r?4:3,e))}function Lu(t,e){if(S8(t=We(t)))return M1("Unsupported field value:",e,t),I8(t,e);if(t instanceof Vh)return function(r,i){if(!x8(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let l=Lu(a,i.Lu(s));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Xb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ot.fromDate(r);return{timestampValue:Dd(i.serializer,o)}}if(r instanceof ot){const o=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Dd(i.serializer,o)}}if(r instanceof b1)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof la)return{bytesValue:zT(i.serializer,r._byteString)};if(r instanceof Vt){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:k1(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof j1)return function(s,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return m1(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Oh(r)}`)}(t,e)}function I8(t,e){const n={};return vT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Eo(t,(r,i)=>{const o=Lu(i,e.Mu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function S8(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof b1||t instanceof la||t instanceof Vt||t instanceof Vh||t instanceof j1)}function M1(t,e,n){if(!S8(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Oh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function r0(t,e,n){if((e=We(e))instanceof Nh)return e._internalPath;if(typeof e=="string")return N1(t,e);throw Nd("Field path arguments must be of type string or ",t,!1,void 0,n)}const s5=new RegExp("[~\\*/\\[\\]]");function N1(t,e,n){if(e.search(s5)>=0)throw Nd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nh(...e.split("."))._internalPath}catch{throw Nd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nd(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new Y(W.INVALID_ARGUMENT,a+t+l)}function L8(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C8{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new a5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class a5 extends C8{data(){return super.data()}}function Wh(t,e){return typeof e=="string"?N1(t,e):e instanceof Nh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l5(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class V1{}class A8 extends V1{}function Pr(t,e,...n){let r=[];e instanceof V1&&r.push(e),r=r.concat(n),function(o){const s=o.filter(l=>l instanceof F1).length,a=o.filter(l=>l instanceof $h).length;if(s>1||s>0&&a>0)throw new Y(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class $h extends A8{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new $h(e,n,r)}_apply(e){const n=this._parse(e);return R8(e._query,n),new xo(e.firestore,e.converter,Ym(e._query,n))}_parse(e){const n=Fh(e.firestore);return function(o,s,a,l,d,f,m){let _;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Y(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Mk(m,f);const v=[];for(const x of m)v.push(Ok(l,o,x));_={arrayValue:{values:v}}}else _=Ok(l,o,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Mk(m,f),_=o5(a,s,m,f==="in"||f==="not-in");return tt.create(d,f,_)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function wi(t,e,n){const r=e,i=Wh("where",t);return $h._create(i,r,n)}class F1 extends V1{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new F1(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const l of a)R8(s,l),s=Ym(s,l)}(e._query,n),new xo(e.firestore,e.converter,Ym(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class U1 extends A8{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new U1(e,n)}_apply(e){const n=function(i,o,s){if(i.startAt!==null)throw new Y(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Y(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new iu(o,s)}(e._query,this._field,this._direction);return new xo(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new wa(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function P8(t,e="asc"){const n=e,r=Wh("orderBy",t);return U1._create(r,n)}function Ok(t,e,n){if(typeof(n=We(n))=="string"){if(n==="")throw new Y(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!LT(e)&&n.indexOf("/")!==-1)throw new Y(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!X.isDocumentKey(r))throw new Y(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rk(t,new X(r))}if(n instanceof Vt)return rk(t,n._key);throw new Y(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oh(n)}.`)}function Mk(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function R8(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class u5{convertValue(e,n="none"){switch(fo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ho(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Eo(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(s=>Ke(s.doubleValue));return new j1(o)}convertGeoPoint(e){return new b1(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=c1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(tu(e));default:return null}}convertTimestamp(e){const n=_i(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Ae(KT(r));const i=new nu(r.get(1),r.get(3)),o=new X(r.popFirst(5));return i.isEqual(n)||Cr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b8(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class j8 extends C8{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Wh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bc extends j8{data(e={}){return super.data(e)}}class c5{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new cl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bc(this._firestore,this._userDataWriter,r.key,r,new cl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const l=new Bc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new cl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const l=new Bc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new cl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return a.type!==0&&(d=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),f=s.indexOf(a.doc.key)),{type:d5(a.type),doc:l,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function d5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){t=On(t,Vt);const e=On(t.firestore,To);return Gj(R1(e),t._key).then(n=>f5(e,t,n))}class D8 extends u5{constructor(e){super(),this.firestore=e}convertBytes(e){return new la(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function Jn(t){t=On(t,xo);const e=On(t.firestore,To),n=R1(e),r=new D8(e);return l5(t._query),Kj(n,t._query).then(i=>new c5(e,r,t,i))}function Vd(t,e,n){t=On(t,Vt);const r=On(t.firestore,To),i=b8(t.converter,e,n);return zh(r,[T8(Fh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,pn.none())])}function Ll(t,e,n,...r){t=On(t,Vt);const i=On(t.firestore,To),o=Fh(i);let s;return s=typeof(e=We(e))=="string"||e instanceof Nh?i5(o,"updateDoc",t._key,e,n,r):r5(o,"updateDoc",t._key,e),zh(i,[s.toMutation(t._key,pn.exists(!0))])}function W1(t){return zh(On(t.firestore,To),[new g1(t._key,pn.none())])}function h5(t,e){const n=On(t.firestore,To),r=nt(t),i=b8(t.converter,e);return zh(n,[T8(Fh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,pn.exists(!1))]).then(()=>r)}function zh(t,e){return function(r,i){const o=new Er;return r.asyncQueue.enqueueAndForget(async()=>Nj(await Yj(r),i,o)),o.promise}(R1(t),e)}function f5(t,e,n){const r=n.docs.get(e._key),i=new D8(t);return new j8(t,i,e._key,r,new cl(n.hasPendingWrites,n.fromCache),e.converter)}function Bh(){return new O1("serverTimestamp")}(function(e,n=!0){(function(i){Ea=i})(_o),bn(new yn("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new To(new mb(r.getProvider("auth-internal")),new kb(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Y(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nu(d.options.projectId,f)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),Qt(X2,"4.7.3",e),Qt(X2,"4.7.3","esm2017")})();const O8="@firebase/installations",$1="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M8=1e4,N8=`w:${$1}`,V8="FIS_v2",p5="https://firebaseinstallations.googleapis.com/v1",m5=60*60*1e3,g5="installations",y5="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v5={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},po=new ko(g5,y5,v5);function F8(t){return t instanceof kn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U8({projectId:t}){return`${p5}/projects/${t}/installations`}function W8(t){return{token:t.token,requestStatus:2,expiresIn:_5(t.expiresIn),creationTime:Date.now()}}async function $8(t,e){const r=(await e.json()).error;return po.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function z8({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function k5(t,{refreshToken:e}){const n=z8(t);return n.append("Authorization",E5(e)),n}async function B8(t){const e=await t();return e.status>=500&&e.status<600?t():e}function _5(t){return Number(t.replace("s","000"))}function E5(t){return`${V8} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w5({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=U8(t),i=z8(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={fid:n,authVersion:V8,appId:t.appId,sdkVersion:N8},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await B8(()=>fetch(r,a));if(l.ok){const d=await l.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:W8(d.authToken)}}else throw await $8("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H8(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x5(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T5=/^[cdef][\w-]{21}$/,i0="";function I5(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=S5(t);return T5.test(n)?n:i0}catch{return i0}}function S5(t){return x5(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q8=new Map;function Y8(t,e){const n=Hh(t);G8(n,e),L5(n,e)}function G8(t,e){const n=q8.get(t);if(n)for(const r of n)r(e)}function L5(t,e){const n=C5();n&&n.postMessage({key:t,fid:e}),A5()}let Ki=null;function C5(){return!Ki&&"BroadcastChannel"in self&&(Ki=new BroadcastChannel("[Firebase] FID Change"),Ki.onmessage=t=>{G8(t.data.key,t.data.fid)}),Ki}function A5(){q8.size===0&&Ki&&(Ki.close(),Ki=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P5="firebase-installations-database",R5=1,mo="firebase-installations-store";let cp=null;function z1(){return cp||(cp=Ix(P5,R5,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(mo)}}})),cp}async function Fd(t,e){const n=Hh(t),i=(await z1()).transaction(mo,"readwrite"),o=i.objectStore(mo),s=await o.get(n);return await o.put(e,n),await i.done,(!s||s.fid!==e.fid)&&Y8(t,e.fid),e}async function K8(t){const e=Hh(t),r=(await z1()).transaction(mo,"readwrite");await r.objectStore(mo).delete(e),await r.done}async function qh(t,e){const n=Hh(t),i=(await z1()).transaction(mo,"readwrite"),o=i.objectStore(mo),s=await o.get(n),a=e(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&Y8(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(t){let e;const n=await qh(t.appConfig,r=>{const i=b5(r),o=j5(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===i0?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function b5(t){const e=t||{fid:I5(),registrationStatus:0};return Q8(e)}function j5(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(po.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=D5(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:O5(t)}:{installationEntry:e}}async function D5(t,e){try{const n=await w5(t,e);return Fd(t.appConfig,n)}catch(n){throw F8(n)&&n.customData.serverCode===409?await K8(t.appConfig):await Fd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function O5(t){let e=await Nk(t.appConfig);for(;e.registrationStatus===1;)await H8(100),e=await Nk(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await B1(t);return r||n}return e}function Nk(t){return qh(t,e=>{if(!e)throw po.create("installation-not-found");return Q8(e)})}function Q8(t){return M5(t)?{fid:t.fid,registrationStatus:0}:t}function M5(t){return t.registrationStatus===1&&t.registrationTime+M8<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N5({appConfig:t,heartbeatServiceProvider:e},n){const r=V5(t,n),i=k5(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={installation:{sdkVersion:N8,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await B8(()=>fetch(r,a));if(l.ok){const d=await l.json();return W8(d)}else throw await $8("Generate Auth Token",l)}function V5(t,{fid:e}){return`${U8(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H1(t,e=!1){let n;const r=await qh(t.appConfig,o=>{if(!Z8(o))throw po.create("not-registered");const s=o.authToken;if(!e&&W5(s))return o;if(s.requestStatus===1)return n=F5(t,e),o;{if(!navigator.onLine)throw po.create("app-offline");const a=z5(o);return n=U5(t,a),a}});return n?await n:r.authToken}async function F5(t,e){let n=await Vk(t.appConfig);for(;n.authToken.requestStatus===1;)await H8(100),n=await Vk(t.appConfig);const r=n.authToken;return r.requestStatus===0?H1(t,e):r}function Vk(t){return qh(t,e=>{if(!Z8(e))throw po.create("not-registered");const n=e.authToken;return B5(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function U5(t,e){try{const n=await N5(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Fd(t.appConfig,r),n}catch(n){if(F8(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await K8(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Fd(t.appConfig,r)}throw n}}function Z8(t){return t!==void 0&&t.registrationStatus===2}function W5(t){return t.requestStatus===2&&!$5(t)}function $5(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+m5}function z5(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function B5(t){return t.requestStatus===1&&t.requestTime+M8<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H5(t){const e=t,{installationEntry:n,registrationPromise:r}=await B1(e);return r?r.catch(console.error):H1(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q5(t,e=!1){const n=t;return await Y5(n),(await H1(n,e)).token}async function Y5(t){const{registrationPromise:e}=await B1(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G5(t){if(!t||!t.options)throw dp("App Configuration");if(!t.name)throw dp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw dp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function dp(t){return po.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X8="installations",K5="installations-internal",Q5=t=>{const e=t.getProvider("app").getImmediate(),n=G5(e),r=Ai(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Z5=t=>{const e=t.getProvider("app").getImmediate(),n=Ai(e,X8).getImmediate();return{getId:()=>H5(n),getToken:i=>q5(n,i)}};function X5(){bn(new yn(X8,Q5,"PUBLIC")),bn(new yn(K5,Z5,"PRIVATE"))}X5();Qt(O8,$1);Qt(O8,$1,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="analytics",J5="firebase_id",eD="origin",tD=60*1e3,nD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",q1="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Eh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},on=new ko("analytics","Analytics",rD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t){if(!t.startsWith(q1)){const e=on.create("invalid-gtag-resource",{gtagURL:t});return Zt.warn(e.message),""}return t}function J8(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function oD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function sD(t,e){const n=oD("firebase-js-sdk-policy",{createScriptURL:iD}),r=document.createElement("script"),i=`${q1}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function aD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function lD(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const l=(await J8(n)).find(d=>d.measurementId===i);l&&await e[l.appId]}}catch(a){Zt.error(a)}t("config",i,o)}async function uD(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await J8(n);for(const l of s){const d=a.find(m=>m.measurementId===l),f=d&&e[d.appId];if(f)o.push(f);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){Zt.error(o)}}function cD(t,e,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await uD(t,e,n,a,l)}else if(o==="config"){const[a,l]=s;await lD(t,e,n,r,a,l)}else if(o==="consent"){const[a,l]=s;t("consent",a,l)}else if(o==="get"){const[a,l,d]=s;t("get",a,l,d)}else if(o==="set"){const[a]=s;t("set",a)}else t(o,...s)}catch(a){Zt.error(a)}}return i}function dD(t,e,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=cD(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function hD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(q1)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD=30,pD=1e3;class mD{constructor(e={},n=pD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const eI=new mD;function gD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function yD(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:gD(r)},o=nD.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw on.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function vD(t,e=eI,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw on.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw on.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ED;return setTimeout(async()=>{a.abort()},tD),tI({appId:r,apiKey:i,measurementId:o},s,a,e)}async function tI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=eI){var o;const{appId:s,measurementId:a}=t;try{await kD(r,e)}catch(l){if(a)return Zt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await yD(t);return i.deleteThrottleMetadata(s),l}catch(l){const d=l;if(!_D(d)){if(i.deleteThrottleMetadata(s),a)return Zt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:s,measurementId:a};throw l}const f=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?x2(n,i.intervalMillis,fD):x2(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,m),Zt.debug(`Calling attemptFetch again in ${f} millis`),tI(t,m,r,i)}}function kD(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(on.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function _D(t){if(!(t instanceof kn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ED{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function wD(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xD(){if(Ex())try{await wx()}catch(t){return Zt.warn(on.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Zt.warn(on.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function TD(t,e,n,r,i,o,s){var a;const l=vD(t);l.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&Zt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>Zt.error(v)),e.push(l);const d=xD().then(v=>{if(v)return r.getId()}),[f,m]=await Promise.all([l,d]);hD(o)||sD(o,f.measurementId),i("js",new Date);const _=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return _[eD]="firebase",_.update=!0,m!=null&&(_[J5]=m),i("config",f.measurementId,_),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e){this.app=e}_delete(){return delete Cl[this.app.options.appId],Promise.resolve()}}let Cl={},Fk=[];const Uk={};let hp="dataLayer",SD="gtag",Wk,nI,$k=!1;function LD(){const t=[];if(_x()&&t.push("This is a browser extension environment."),AC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=on.create("invalid-analytics-context",{errorInfo:e});Zt.warn(n.message)}}function CD(t,e,n){LD();const r=t.options.appId;if(!r)throw on.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Zt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw on.create("no-api-key");if(Cl[r]!=null)throw on.create("already-exists",{id:r});if(!$k){aD(hp);const{wrappedGtag:o,gtagCore:s}=dD(Cl,Fk,Uk,hp,SD);nI=o,Wk=s,$k=!0}return Cl[r]=TD(t,Fk,Uk,e,Wk,hp,n),new ID(t)}function AD(t=wh()){t=We(t);const e=Ai(t,Ud);return e.isInitialized()?e.getImmediate():PD(t)}function PD(t,e={}){const n=Ai(t,Ud);if(n.isInitialized()){const i=n.getImmediate();if(Zl(e,n.getOptions()))return i;throw on.create("already-initialized")}return n.initialize({options:e})}function RD(t,e,n,r){t=We(t),wD(nI,Cl[t.app.options.appId],e,n,r).catch(i=>Zt.error(i))}const zk="@firebase/analytics",Bk="0.10.8";function bD(){bn(new yn(Ud,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return CD(r,i,n)},"PUBLIC")),bn(new yn("analytics-internal",t,"PRIVATE")),Qt(zk,Bk),Qt(zk,Bk,"esm2017");function t(e){try{const n=e.getProvider(Ud).getImmediate();return{logEvent:(r,i,o)=>RD(n,r,i,o)}}catch(n){throw on.create("interop-component-reg-failed",{reason:n})}}}bD();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="firebasestorage.googleapis.com",jD="storageBucket",DD=2*60*1e3,OD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends kn{constructor(e,n,r=0){super(fp(e),`Firebase Storage: ${n} (${fp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var er;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(er||(er={}));function fp(t){return"storage/"+t}function MD(){const t="An unknown error occurred, please check the error payload for server response.";return new rr(er.UNKNOWN,t)}function ND(){return new rr(er.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VD(){return new rr(er.CANCELED,"User canceled the upload/download.")}function FD(t){return new rr(er.INVALID_URL,"Invalid URL '"+t+"'.")}function UD(t){return new rr(er.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Hk(t){return new rr(er.INVALID_ARGUMENT,t)}function iI(){return new rr(er.APP_DELETED,"The Firebase app was deleted.")}function WD(t){return new rr(er.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ln.makeFromUrl(e,n)}catch{return new Ln(e,"")}if(r.path==="")return r;throw UD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function d(S){S.path_=decodeURIComponent(S.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",v=new RegExp(`^https?://${m}/${f}/b/${i}/o${_}`,"i"),x={bucket:1,path:3},L=n===rI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",y=new RegExp(`^https?://${L}/${i}/${w}`,"i"),E=[{regex:a,indices:l,postModify:o},{regex:v,indices:x,postModify:d},{regex:y,indices:{bucket:1,path:2},postModify:d}];for(let S=0;S<E.length;S++){const P=E[S],O=P.regex.exec(e);if(O){const T=O[P.indices.bucket];let I=O[P.indices.path];I||(I=""),r=new Ln(T,I),P.postModify(r);break}}if(r==null)throw FD(e);return r}}class $D{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let d=!1;function f(...w){d||(d=!0,e.apply(null,w))}function m(w){i=setTimeout(()=>{i=null,t(v,l())},w)}function _(){o&&clearTimeout(o)}function v(w,...y){if(d){_();return}if(w){_(),f.call(null,w,...y);return}if(l()||s){_(),f.call(null,w,...y);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,m(E)}let x=!1;function L(w){x||(x=!0,_(),!d&&(i!==null?(w||(a=2),clearTimeout(i),m(0)):w||(a=1)))}return m(0),o=setTimeout(()=>{s=!0,L(!0)},n),L}function BD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(t){return t!==void 0}function qk(t,e,n,r){if(r<e)throw Hk(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Hk(`Invalid value for '${t}'. Expected ${n} or less.`)}function qD(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Wd;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Wd||(Wd={}));/**
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
 */function YD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e,n,r,i,o,s,a,l,d,f,m,_=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,x)=>{this.resolve_=v,this.reject_=x,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new gc(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===Wd.NO_ERROR,l=o.getStatus();if(!a||YD(l,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===Wd.ABORT;r(!1,new gc(!1,null,f));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new gc(d,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());HD(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=MD();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?iI():VD();s(l)}else{const l=ND();s(l)}};this.canceled_?n(!1,new gc(!1,null,!0)):this.backoffId_=zD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&BD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function KD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function QD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ZD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function XD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function JD(t,e,n,r,i,o,s=!0){const a=qD(t.urlParams),l=t.url+a,d=Object.assign({},t.headers);return ZD(d,e),KD(d,n),QD(d,o),XD(d,r),new GD(l,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function tO(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n){this._service=e,n instanceof Ln?this._location=n:this._location=Ln.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new $d(e,n)}get root(){const e=new Ln(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tO(this._location.path)}get storage(){return this._service}get parent(){const e=eO(this._location.path);if(e===null)return null;const n=new Ln(this._location.bucket,e);return new $d(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw WD(e)}}function Yk(t,e){const n=e==null?void 0:e[jD];return n==null?null:Ln.makeFromBucketSpec(n,t)}function nO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:kx(i,t.app.options.projectId))}class rO{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=rI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=DD,this._maxUploadRetryTime=OD,this._requests=new Set,i!=null?this._bucket=Ln.makeFromBucketSpec(i,this._host):this._bucket=Yk(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ln.makeFromBucketSpec(this._url,e):this._bucket=Yk(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){qk("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){qk("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $d(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new $D(iI());{const s=JD(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Gk="@firebase/storage",Kk="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI="storage";function iO(t=wh(),e){t=We(t);const r=Ai(t,oI).getImmediate({identifier:e}),i=gx("storage");return i&&oO(r,...i),r}function oO(t,e,n,r={}){nO(t,e,n,r)}function sO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new rO(n,r,i,e,_o)}function aO(){bn(new yn(oI,sO,"PUBLIC").setMultipleInstances(!0)),Qt(Gk,Kk,""),Qt(Gk,Kk,"esm2017")}aO();const lO={apiKey:"AIzaSyD7J2eVv6O0M4l39GToo_kVOeQZH8nQW0w",authDomain:"hyacinthattendance.firebaseapp.com",projectId:"hyacinthattendance",storageBucket:"hyacinthattendance.appspot.com",messagingSenderId:"12316915447",appId:"1:12316915447:web:2f8a7daf07918a0c2f45f2",measurementId:"G-040M8BP5NJ"},Yh=Sx(lO),Ct=uT(Yh),we=Xj(Yh);iO(Yh);console.log("Using production Firebase services");let uO=null;try{uO=AD(Yh),console.log("Analytics initialized")}catch(t){console.error("Error initializing analytics:",t)}const Y1=new fr;Y1.setCustomParameters({prompt:"select_account"});Y1.addScope("email");Y1.addScope("profile");const sI=j.createContext(),Dr=()=>j.useContext(sI),cO=({children:t})=>{const[e,n]=j.useState(null),[r,i]=j.useState(!0);j.useEffect(()=>{const s=ZP(Ct,a=>{n(a),i(!1)});return()=>s()},[]);const o={currentUser:e,loading:r};return h.jsx(sI.Provider,{value:o,children:t})};var Ht=function(){return Ht=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ht.apply(this,arguments)};function zd(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var De="-ms-",Al="-moz-",Te="-webkit-",aI="comm",Gh="rule",G1="decl",dO="@import",lI="@keyframes",hO="@layer",uI=Math.abs,K1=String.fromCharCode,o0=Object.assign;function fO(t,e){return lt(t,0)^45?(((e<<2^lt(t,0))<<2^lt(t,1))<<2^lt(t,2))<<2^lt(t,3):0}function cI(t){return t.trim()}function dr(t,e){return(t=e.exec(t))?t[0]:t}function le(t,e,n){return t.replace(e,n)}function Hc(t,e,n){return t.indexOf(e,n)}function lt(t,e){return t.charCodeAt(e)|0}function ua(t,e,n){return t.slice(e,n)}function $n(t){return t.length}function dI(t){return t.length}function dl(t,e){return e.push(t),t}function pO(t,e){return t.map(e).join("")}function Qk(t,e){return t.filter(function(n){return!dr(n,e)})}var Kh=1,ca=1,hI=0,vn=0,Je=0,Ia="";function Qh(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:Kh,column:ca,length:s,return:"",siblings:a}}function zr(t,e){return o0(Qh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function cs(t){for(;t.root;)t=zr(t.root,{children:[t]});dl(t,t.siblings)}function mO(){return Je}function gO(){return Je=vn>0?lt(Ia,--vn):0,ca--,Je===10&&(ca=1,Kh--),Je}function Pn(){return Je=vn<hI?lt(Ia,vn++):0,ca++,Je===10&&(ca=1,Kh++),Je}function eo(){return lt(Ia,vn)}function qc(){return vn}function Zh(t,e){return ua(Ia,t,e)}function s0(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function yO(t){return Kh=ca=1,hI=$n(Ia=t),vn=0,[]}function vO(t){return Ia="",t}function pp(t){return cI(Zh(vn-1,a0(t===91?t+2:t===40?t+1:t)))}function kO(t){for(;(Je=eo())&&Je<33;)Pn();return s0(t)>2||s0(Je)>3?"":" "}function _O(t,e){for(;--e&&Pn()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return Zh(t,qc()+(e<6&&eo()==32&&Pn()==32))}function a0(t){for(;Pn();)switch(Je){case t:return vn;case 34:case 39:t!==34&&t!==39&&a0(Je);break;case 40:t===41&&a0(t);break;case 92:Pn();break}return vn}function EO(t,e){for(;Pn()&&t+Je!==57;)if(t+Je===84&&eo()===47)break;return"/*"+Zh(e,vn-1)+"*"+K1(t===47?t:Pn())}function wO(t){for(;!s0(eo());)Pn();return Zh(t,vn)}function xO(t){return vO(Yc("",null,null,null,[""],t=yO(t),0,[0],t))}function Yc(t,e,n,r,i,o,s,a,l){for(var d=0,f=0,m=s,_=0,v=0,x=0,L=1,w=1,y=1,g=0,E="",S=i,P=o,O=r,T=E;w;)switch(x=g,g=Pn()){case 40:if(x!=108&&lt(T,m-1)==58){Hc(T+=le(pp(g),"&","&\f"),"&\f",uI(d?a[d-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:T+=pp(g);break;case 9:case 10:case 13:case 32:T+=kO(x);break;case 92:T+=_O(qc()-1,7);continue;case 47:switch(eo()){case 42:case 47:dl(TO(EO(Pn(),qc()),e,n,l),l);break;default:T+="/"}break;case 123*L:a[d++]=$n(T)*y;case 125*L:case 59:case 0:switch(g){case 0:case 125:w=0;case 59+f:y==-1&&(T=le(T,/\f/g,"")),v>0&&$n(T)-m&&dl(v>32?Xk(T+";",r,n,m-1,l):Xk(le(T," ","")+";",r,n,m-2,l),l);break;case 59:T+=";";default:if(dl(O=Zk(T,e,n,d,f,i,a,E,S=[],P=[],m,o),o),g===123)if(f===0)Yc(T,e,O,O,S,o,m,a,P);else switch(_===99&&lt(T,3)===110?100:_){case 100:case 108:case 109:case 115:Yc(t,O,O,r&&dl(Zk(t,O,O,0,0,i,a,E,i,S=[],m,P),P),i,P,m,a,r?S:P);break;default:Yc(T,O,O,O,[""],P,0,a,P)}}d=f=v=0,L=y=1,E=T="",m=s;break;case 58:m=1+$n(T),v=x;default:if(L<1){if(g==123)--L;else if(g==125&&L++==0&&gO()==125)continue}switch(T+=K1(g),g*L){case 38:y=f>0?1:(T+="\f",-1);break;case 44:a[d++]=($n(T)-1)*y,y=1;break;case 64:eo()===45&&(T+=pp(Pn())),_=eo(),f=m=$n(E=T+=wO(qc())),g++;break;case 45:x===45&&$n(T)==2&&(L=0)}}return o}function Zk(t,e,n,r,i,o,s,a,l,d,f,m){for(var _=i-1,v=i===0?o:[""],x=dI(v),L=0,w=0,y=0;L<r;++L)for(var g=0,E=ua(t,_+1,_=uI(w=s[L])),S=t;g<x;++g)(S=cI(w>0?v[g]+" "+E:le(E,/&\f/g,v[g])))&&(l[y++]=S);return Qh(t,e,n,i===0?Gh:a,l,d,f,m)}function TO(t,e,n,r){return Qh(t,e,n,aI,K1(mO()),ua(t,2,-2),0,r)}function Xk(t,e,n,r,i){return Qh(t,e,n,G1,ua(t,0,r),ua(t,r+1,-1),r,i)}function fI(t,e,n){switch(fO(t,e)){case 5103:return Te+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Te+t+t;case 4789:return Al+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Te+t+Al+t+De+t+t;case 5936:switch(lt(t,e+11)){case 114:return Te+t+De+le(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Te+t+De+le(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Te+t+De+le(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Te+t+De+t+t;case 6165:return Te+t+De+"flex-"+t+t;case 5187:return Te+t+le(t,/(\w+).+(:[^]+)/,Te+"box-$1$2"+De+"flex-$1$2")+t;case 5443:return Te+t+De+"flex-item-"+le(t,/flex-|-self/g,"")+(dr(t,/flex-|baseline/)?"":De+"grid-row-"+le(t,/flex-|-self/g,""))+t;case 4675:return Te+t+De+"flex-line-pack"+le(t,/align-content|flex-|-self/g,"")+t;case 5548:return Te+t+De+le(t,"shrink","negative")+t;case 5292:return Te+t+De+le(t,"basis","preferred-size")+t;case 6060:return Te+"box-"+le(t,"-grow","")+Te+t+De+le(t,"grow","positive")+t;case 4554:return Te+le(t,/([^-])(transform)/g,"$1"+Te+"$2")+t;case 6187:return le(le(le(t,/(zoom-|grab)/,Te+"$1"),/(image-set)/,Te+"$1"),t,"")+t;case 5495:case 3959:return le(t,/(image-set\([^]*)/,Te+"$1$`$1");case 4968:return le(le(t,/(.+:)(flex-)?(.*)/,Te+"box-pack:$3"+De+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Te+t+t;case 4200:if(!dr(t,/flex-|baseline/))return De+"grid-column-align"+ua(t,e)+t;break;case 2592:case 3360:return De+le(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,dr(r.props,/grid-\w+-end/)})?~Hc(t+(n=n[e].value),"span",0)?t:De+le(t,"-start","")+t+De+"grid-row-span:"+(~Hc(n,"span",0)?dr(n,/\d+/):+dr(n,/\d+/)-+dr(t,/\d+/))+";":De+le(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return dr(r.props,/grid-\w+-start/)})?t:De+le(le(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return le(t,/(.+)-inline(.+)/,Te+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($n(t)-1-e>6)switch(lt(t,e+1)){case 109:if(lt(t,e+4)!==45)break;case 102:return le(t,/(.+:)(.+)-([^]+)/,"$1"+Te+"$2-$3$1"+Al+(lt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Hc(t,"stretch",0)?fI(le(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return le(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,d){return De+i+":"+o+d+(s?De+i+"-span:"+(a?l:+l-+o)+d:"")+t});case 4949:if(lt(t,e+6)===121)return le(t,":",":"+Te)+t;break;case 6444:switch(lt(t,lt(t,14)===45?18:11)){case 120:return le(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Te+(lt(t,14)===45?"inline-":"")+"box$3$1"+Te+"$2$3$1"+De+"$2box$3")+t;case 100:return le(t,":",":"+De)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return le(t,"scroll-","scroll-snap-")+t}return t}function Bd(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function IO(t,e,n,r){switch(t.type){case hO:if(t.children.length)break;case dO:case G1:return t.return=t.return||t.value;case aI:return"";case lI:return t.return=t.value+"{"+Bd(t.children,r)+"}";case Gh:if(!$n(t.value=t.props.join(",")))return""}return $n(n=Bd(t.children,r))?t.return=t.value+"{"+n+"}":""}function SO(t){var e=dI(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function LO(t){return function(e){e.root||(e=e.return)&&t(e)}}function CO(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case G1:t.return=fI(t.value,t.length,n);return;case lI:return Bd([zr(t,{value:le(t.value,"@","@"+Te)})],r);case Gh:if(t.length)return pO(n=t.props,function(i){switch(dr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cs(zr(t,{props:[le(i,/:(read-\w+)/,":"+Al+"$1")]})),cs(zr(t,{props:[i]})),o0(t,{props:Qk(n,r)});break;case"::placeholder":cs(zr(t,{props:[le(i,/:(plac\w+)/,":"+Te+"input-$1")]})),cs(zr(t,{props:[le(i,/:(plac\w+)/,":"+Al+"$1")]})),cs(zr(t,{props:[le(i,/:(plac\w+)/,De+"input-$1")]})),cs(zr(t,{props:[i]})),o0(t,{props:Qk(n,r)});break}return""})}}var AO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jt={},da=typeof process<"u"&&Jt!==void 0&&(Jt.REACT_APP_SC_ATTR||Jt.SC_ATTR)||"data-styled",pI="active",mI="data-styled-version",Xh="6.1.17",Q1=`/*!sc*/
`,Hd=typeof window<"u"&&"HTMLElement"in window,PO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Jt!==void 0&&Jt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Jt.REACT_APP_SC_DISABLE_SPEEDY!==""?Jt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Jt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Jt!==void 0&&Jt.SC_DISABLE_SPEEDY!==void 0&&Jt.SC_DISABLE_SPEEDY!==""&&Jt.SC_DISABLE_SPEEDY!=="false"&&Jt.SC_DISABLE_SPEEDY),Jh=Object.freeze([]),ha=Object.freeze({});function RO(t,e,n){return n===void 0&&(n=ha),t.theme!==n.theme&&t.theme||e||n.theme}var gI=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),bO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jO=/(^-|-$)/g;function Jk(t){return t.replace(bO,"-").replace(jO,"")}var DO=/(a)(d)/gi,yc=52,e_=function(t){return String.fromCharCode(t+(t>25?39:97))};function l0(t){var e,n="";for(e=Math.abs(t);e>yc;e=e/yc|0)n=e_(e%yc)+n;return(e_(e%yc)+n).replace(DO,"$1-$2")}var mp,yI=5381,Ms=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},vI=function(t){return Ms(yI,t)};function OO(t){return l0(vI(t)>>>0)}function MO(t){return t.displayName||t.name||"Component"}function gp(t){return typeof t=="string"&&!0}var kI=typeof Symbol=="function"&&Symbol.for,_I=kI?Symbol.for("react.memo"):60115,NO=kI?Symbol.for("react.forward_ref"):60112,VO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},FO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},EI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},UO=((mp={})[NO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mp[_I]=EI,mp);function t_(t){return("type"in(e=t)&&e.type.$$typeof)===_I?EI:"$$typeof"in t?UO[t.$$typeof]:VO;var e}var WO=Object.defineProperty,$O=Object.getOwnPropertyNames,n_=Object.getOwnPropertySymbols,zO=Object.getOwnPropertyDescriptor,BO=Object.getPrototypeOf,r_=Object.prototype;function wI(t,e,n){if(typeof e!="string"){if(r_){var r=BO(e);r&&r!==r_&&wI(t,r,n)}var i=$O(e);n_&&(i=i.concat(n_(e)));for(var o=t_(t),s=t_(e),a=0;a<i.length;++a){var l=i[a];if(!(l in FO||n&&n[l]||s&&l in s||o&&l in o)){var d=zO(e,l);try{WO(t,l,d)}catch{}}}}return t}function fa(t){return typeof t=="function"}function Z1(t){return typeof t=="object"&&"styledComponentId"in t}function Qi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function i_(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function lu(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function u0(t,e,n){if(n===void 0&&(n=!1),!n&&!lu(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=u0(t[r],e[r]);else if(lu(e))for(var r in e)t[r]=u0(t[r],e[r]);return t}function X1(t,e){Object.defineProperty(t,"toString",{value:e})}function Cu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var HO=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw Cu(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Q1);return n},t}(),Gc=new Map,qd=new Map,Kc=1,vc=function(t){if(Gc.has(t))return Gc.get(t);for(;qd.has(Kc);)Kc++;var e=Kc++;return Gc.set(t,e),qd.set(e,t),e},qO=function(t,e){Kc=e+1,Gc.set(t,e),qd.set(e,t)},YO="style[".concat(da,"][").concat(mI,'="').concat(Xh,'"]'),GO=new RegExp("^".concat(da,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),KO=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},QO=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Q1),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(GO);if(l){var d=0|parseInt(l[1],10),f=l[2];d!==0&&(qO(f,d),KO(t,f,l[3]),t.getTag().insertRules(d,i)),i.length=0}else i.push(a)}}},o_=function(t){for(var e=document.querySelectorAll(YO),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(da)!==pI&&(QO(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function ZO(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var xI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(da,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(da,pI),r.setAttribute(mI,Xh);var s=ZO();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},XO=function(){function t(e){this.element=xI(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Cu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),JO=function(){function t(e){this.element=xI(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),eM=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),s_=Hd,tM={isServer:!Hd,useCSSOMInjection:!PO},TI=function(){function t(e,n,r){e===void 0&&(e=ha),n===void 0&&(n={});var i=this;this.options=Ht(Ht({},tM),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Hd&&s_&&(s_=!1,o_(this)),X1(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",d=function(m){var _=function(y){return qd.get(y)}(m);if(_===void 0)return"continue";var v=o.names.get(_),x=s.getGroup(m);if(v===void 0||!v.size||x.length===0)return"continue";var L="".concat(da,".g").concat(m,'[id="').concat(_,'"]'),w="";v!==void 0&&v.forEach(function(y){y.length>0&&(w+="".concat(y,","))}),l+="".concat(x).concat(L,'{content:"').concat(w,'"}').concat(Q1)},f=0;f<a;f++)d(f);return l}(i)})}return t.registerId=function(e){return vc(e)},t.prototype.rehydrate=function(){!this.server&&Hd&&o_(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Ht(Ht({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new eM(i):r?new XO(i):new JO(i)}(this.options),new HO(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(vc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(vc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(vc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),nM=/&/g,rM=/^\s*\/\/.*$/gm;function II(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=II(n.children,e)),n})}function iM(t){var e,n,r,i=ha,o=i.options,s=o===void 0?ha:o,a=i.plugins,l=a===void 0?Jh:a,d=function(_,v,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(e):_},f=l.slice();f.push(function(_){_.type===Gh&&_.value.includes("&")&&(_.props[0]=_.props[0].replace(nM,n).replace(r,d))}),s.prefix&&f.push(CO),f.push(IO);var m=function(_,v,x,L){v===void 0&&(v=""),x===void 0&&(x=""),L===void 0&&(L="&"),e=L,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var w=_.replace(rM,""),y=xO(x||v?"".concat(x," ").concat(v," { ").concat(w," }"):w);s.namespace&&(y=II(y,s.namespace));var g=[];return Bd(y,SO(f.concat(LO(function(E){return g.push(E)})))),g};return m.hash=l.length?l.reduce(function(_,v){return v.name||Cu(15),Ms(_,v.name)},yI).toString():"",m}var oM=new TI,c0=iM(),SI=c.createContext({shouldForwardProp:void 0,styleSheet:oM,stylis:c0});SI.Consumer;c.createContext(void 0);function a_(){return j.useContext(SI)}var sM=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=c0);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,X1(this,function(){throw Cu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=c0),this.name+e.hash},t}(),aM=function(t){return t>="A"&&t<="Z"};function l_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;aM(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var LI=function(t){return t==null||t===!1||t===""},CI=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!LI(o)&&(Array.isArray(o)&&o.isCss||fa(o)?r.push("".concat(l_(i),":"),o,";"):lu(o)?r.push.apply(r,zd(zd(["".concat(i," {")],CI(o),!1),["}"],!1)):r.push("".concat(l_(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in AO||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function to(t,e,n,r){if(LI(t))return[];if(Z1(t))return[".".concat(t.styledComponentId)];if(fa(t)){if(!fa(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return to(i,e,n,r)}var o;return t instanceof sM?n?(t.inject(n,r),[t.getName(r)]):[t]:lu(t)?CI(t):Array.isArray(t)?Array.prototype.concat.apply(Jh,t.map(function(s){return to(s,e,n,r)})):[t.toString()]}function lM(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(fa(n)&&!Z1(n))return!1}return!0}var uM=vI(Xh),cM=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&lM(e),this.componentId=n,this.baseHash=Ms(uM,n),this.baseStyle=r,TI.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Qi(i,this.staticRulesId);else{var o=i_(to(this.rules,e,n,r)),s=l0(Ms(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Qi(i,s),this.staticRulesId=s}else{for(var l=Ms(this.baseHash,r.hash),d="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")d+=m;else if(m){var _=i_(to(m,e,n,r));l=Ms(l,_+f),d+=_}}if(d){var v=l0(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(d,".".concat(v),void 0,this.componentId)),i=Qi(i,v)}}return i},t}(),AI=c.createContext(void 0);AI.Consumer;var yp={};function dM(t,e,n){var r=Z1(t),i=t,o=!gp(t),s=e.attrs,a=s===void 0?Jh:s,l=e.componentId,d=l===void 0?function(S,P){var O=typeof S!="string"?"sc":Jk(S);yp[O]=(yp[O]||0)+1;var T="".concat(O,"-").concat(OO(Xh+O+yp[O]));return P?"".concat(P,"-").concat(T):T}(e.displayName,e.parentComponentId):l,f=e.displayName,m=f===void 0?function(S){return gp(S)?"styled.".concat(S):"Styled(".concat(MO(S),")")}(t):f,_=e.displayName&&e.componentId?"".concat(Jk(e.displayName),"-").concat(e.componentId):e.componentId||d,v=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=e.shouldForwardProp;if(r&&i.shouldForwardProp){var L=i.shouldForwardProp;if(e.shouldForwardProp){var w=e.shouldForwardProp;x=function(S,P){return L(S,P)&&w(S,P)}}else x=L}var y=new cM(n,_,r?i.componentStyle:void 0);function g(S,P){return function(O,T,I){var A=O.attrs,b=O.componentStyle,D=O.defaultProps,M=O.foldedComponentIds,R=O.styledComponentId,de=O.target,ie=c.useContext(AI),ye=a_(),Ee=O.shouldForwardProp||ye.shouldForwardProp,B=RO(T,ie,D)||ha,G=function(Be,Ge,F){for(var oe,se=Ht(Ht({},Ge),{className:void 0,theme:F}),ae=0;ae<Be.length;ae+=1){var ue=fa(oe=Be[ae])?oe(se):oe;for(var Se in ue)se[Se]=Se==="className"?Qi(se[Se],ue[Se]):Se==="style"?Ht(Ht({},se[Se]),ue[Se]):ue[Se]}return Ge.className&&(se.className=Qi(se.className,Ge.className)),se}(A,T,B),Z=G.as||de,ce={};for(var re in G)G[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&G.theme===B||(re==="forwardedAs"?ce.as=G.forwardedAs:Ee&&!Ee(re,Z)||(ce[re]=G[re]));var me=function(Be,Ge){var F=a_(),oe=Be.generateAndInjectStyles(Ge,F.styleSheet,F.stylis);return oe}(b,G),Ye=Qi(M,R);return me&&(Ye+=" "+me),G.className&&(Ye+=" "+G.className),ce[gp(Z)&&!gI.has(Z)?"class":"className"]=Ye,I&&(ce.ref=I),j.createElement(Z,ce)}(E,S,P)}g.displayName=m;var E=c.forwardRef(g);return E.attrs=v,E.componentStyle=y,E.displayName=m,E.shouldForwardProp=x,E.foldedComponentIds=r?Qi(i.foldedComponentIds,i.styledComponentId):"",E.styledComponentId=_,E.target=r?i.target:t,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(P){for(var O=[],T=1;T<arguments.length;T++)O[T-1]=arguments[T];for(var I=0,A=O;I<A.length;I++)u0(P,A[I],!0);return P}({},i.defaultProps,S):S}}),X1(E,function(){return".".concat(E.styledComponentId)}),o&&wI(E,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function u_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var c_=function(t){return Object.assign(t,{isCss:!0})};function hM(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(fa(t)||lu(t))return c_(to(u_(Jh,zd([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?to(r):c_(to(u_(r,e)))}function d0(t,e,n){if(n===void 0&&(n=ha),!e)throw Cu(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,hM.apply(void 0,zd([i],o,!1)))};return r.attrs=function(i){return d0(t,e,Ht(Ht({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return d0(t,e,Ht(Ht({},n),i))},r}var PI=function(t){return d0(dM,t)},N=PI;gI.forEach(function(t){N[t]=PI(t)});function RI(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=RI(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function ti(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=RI(t))&&(r&&(r+=" "),r+=e);return r}const Pl=t=>typeof t=="number"&&!isNaN(t),go=t=>typeof t=="string",qt=t=>typeof t=="function",Qc=t=>go(t)||qt(t)?t:null,vp=t=>j.isValidElement(t)||go(t)||qt(t)||Pl(t);function fM(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function ef(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=t;return function(s){let{children:a,position:l,preventExitTransition:d,done:f,nodeRef:m,isIn:_}=s;const v=r?`${e}--${l}`:e,x=r?`${n}--${l}`:n,L=j.useRef(0);return j.useLayoutEffect(()=>{const w=m.current,y=v.split(" "),g=E=>{E.target===m.current&&(w.dispatchEvent(new Event("d")),w.removeEventListener("animationend",g),w.removeEventListener("animationcancel",g),L.current===0&&E.type!=="animationcancel"&&w.classList.remove(...y))};w.classList.add(...y),w.addEventListener("animationend",g),w.addEventListener("animationcancel",g)},[]),j.useEffect(()=>{const w=m.current,y=()=>{w.removeEventListener("animationend",y),i?fM(w,f,o):f()};_||(d?y():(L.current=1,w.className+=` ${x}`,w.addEventListener("animationend",y)))},[_]),c.createElement(c.Fragment,null,a)}}function d_(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const un={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},kc=t=>{let{theme:e,type:n,...r}=t;return c.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},kp={info:function(t){return c.createElement(kc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(kc,{...t},c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(kc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(kc,{...t},c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function pM(t){const[,e]=j.useReducer(v=>v+1,0),[n,r]=j.useState([]),i=j.useRef(null),o=j.useRef(new Map).current,s=v=>n.indexOf(v)!==-1,a=j.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:v=>o.get(v)}).current;function l(v){let{containerId:x}=v;const{limit:L}=a.props;!L||x&&a.containerId!==x||(a.count-=a.queue.length,a.queue=[])}function d(v){r(x=>v==null?[]:x.filter(L=>L!==v))}function f(){const{toastContent:v,toastProps:x,staleId:L}=a.queue.shift();_(v,x,L)}function m(v,x){let{delay:L,staleId:w,...y}=x;if(!vp(v)||function(M){return!i.current||a.props.enableMultiContainer&&M.containerId!==a.props.containerId||o.has(M.toastId)&&M.updateId==null}(y))return;const{toastId:g,updateId:E,data:S}=y,{props:P}=a,O=()=>d(g),T=E==null;T&&a.count++;const I={...P,style:P.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(y).filter(M=>{let[R,de]=M;return de!=null})),toastId:g,updateId:E,data:S,closeToast:O,isIn:!1,className:Qc(y.className||P.toastClassName),bodyClassName:Qc(y.bodyClassName||P.bodyClassName),progressClassName:Qc(y.progressClassName||P.progressClassName),autoClose:!y.isLoading&&(A=y.autoClose,b=P.autoClose,A===!1||Pl(A)&&A>0?A:b),deleteToast(){const M=d_(o.get(g),"removed");o.delete(g),un.emit(4,M);const R=a.queue.length;if(a.count=g==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),R>0){const de=g==null?a.props.limit:1;if(R===1||de===1)a.displayedToast++,f();else{const ie=de>R?R:de;a.displayedToast=ie;for(let ye=0;ye<ie;ye++)f()}}else e()}};var A,b;I.iconOut=function(M){let{theme:R,type:de,isLoading:ie,icon:ye}=M,Ee=null;const B={theme:R,type:de};return ye===!1||(qt(ye)?Ee=ye(B):j.isValidElement(ye)?Ee=j.cloneElement(ye,B):go(ye)||Pl(ye)?Ee=ye:ie?Ee=kp.spinner():(G=>G in kp)(de)&&(Ee=kp[de](B))),Ee}(I),qt(y.onOpen)&&(I.onOpen=y.onOpen),qt(y.onClose)&&(I.onClose=y.onClose),I.closeButton=P.closeButton,y.closeButton===!1||vp(y.closeButton)?I.closeButton=y.closeButton:y.closeButton===!0&&(I.closeButton=!vp(P.closeButton)||P.closeButton);let D=v;j.isValidElement(v)&&!go(v.type)?D=j.cloneElement(v,{closeToast:O,toastProps:I,data:S}):qt(v)&&(D=v({closeToast:O,toastProps:I,data:S})),P.limit&&P.limit>0&&a.count>P.limit&&T?a.queue.push({toastContent:D,toastProps:I,staleId:w}):Pl(L)?setTimeout(()=>{_(D,I,w)},L):_(D,I,w)}function _(v,x,L){const{toastId:w}=x;L&&o.delete(L);const y={content:v,props:x};o.set(w,y),r(g=>[...g,w].filter(E=>E!==L)),un.emit(4,d_(y,y.props.updateId==null?"added":"updated"))}return j.useEffect(()=>(a.containerId=t.containerId,un.cancelEmit(3).on(0,m).on(1,v=>i.current&&d(v)).on(5,l).emit(2,a),()=>{o.clear(),un.emit(3,a)}),[]),j.useEffect(()=>{a.props=t,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(v){const x=new Map,L=Array.from(o.values());return t.newestOnTop&&L.reverse(),L.forEach(w=>{const{position:y}=w.props;x.has(y)||x.set(y,[]),x.get(y).push(w)}),Array.from(x,w=>v(w[0],w[1]))},containerRef:i,isToastActive:s}}function h_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function f_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function mM(t){const[e,n]=j.useState(!1),[r,i]=j.useState(!1),o=j.useRef(null),s=j.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=j.useRef(t),{autoClose:l,pauseOnHover:d,closeToast:f,onClick:m,closeOnClick:_}=t;function v(S){if(t.draggable){S.nativeEvent.type==="touchstart"&&S.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",g),document.addEventListener("touchmove",y),document.addEventListener("touchend",g);const P=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=P.getBoundingClientRect(),P.style.transition="",s.x=h_(S.nativeEvent),s.y=f_(S.nativeEvent),t.draggableDirection==="x"?(s.start=s.x,s.removalDistance=P.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=P.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function x(S){if(s.boundingRect){const{top:P,bottom:O,left:T,right:I}=s.boundingRect;S.nativeEvent.type!=="touchend"&&t.pauseOnHover&&s.x>=T&&s.x<=I&&s.y>=P&&s.y<=O?w():L()}}function L(){n(!0)}function w(){n(!1)}function y(S){const P=o.current;s.canDrag&&P&&(s.didMove=!0,e&&w(),s.x=h_(S),s.y=f_(S),s.delta=t.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),P.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,P.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",g);const S=o.current;if(s.canDrag&&s.didMove&&S){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void t.closeToast();S.style.transition="transform 0.2s, opacity 0.2s",S.style.transform=`translate${t.draggableDirection}(0)`,S.style.opacity="1"}}j.useEffect(()=>{a.current=t}),j.useEffect(()=>(o.current&&o.current.addEventListener("d",L,{once:!0}),qt(t.onOpen)&&t.onOpen(j.isValidElement(t.children)&&t.children.props),()=>{const S=a.current;qt(S.onClose)&&S.onClose(j.isValidElement(S.children)&&S.children.props)}),[]),j.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||w(),window.addEventListener("focus",L),window.addEventListener("blur",w)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",L),window.removeEventListener("blur",w))}),[t.pauseOnFocusLoss]);const E={onMouseDown:v,onTouchStart:v,onMouseUp:x,onTouchEnd:x};return l&&d&&(E.onMouseEnter=w,E.onMouseLeave=L),_&&(E.onClick=S=>{m&&m(S),s.canCloseOnClick&&f()}),{playToast:L,pauseToast:w,isRunning:e,preventExitTransition:r,toastRef:o,eventHandlers:E}}function bI(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return c.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function gM(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:l,progress:d,rtl:f,isIn:m,theme:_}=t;const v=o||l&&d===0,x={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:v?0:1};l&&(x.transform=`scaleX(${d})`);const L=ti("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${_}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),w=qt(s)?s({rtl:f,type:i,defaultClassName:L}):ti(L,s);return c.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:w,style:x,[l&&d>=1?"onTransitionEnd":"onAnimationEnd"]:l&&d<1?null:()=>{m&&r()}})}const yM=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=mM(t),{closeButton:o,children:s,autoClose:a,onClick:l,type:d,hideProgressBar:f,closeToast:m,transition:_,position:v,className:x,style:L,bodyClassName:w,bodyStyle:y,progressClassName:g,progressStyle:E,updateId:S,role:P,progress:O,rtl:T,toastId:I,deleteToast:A,isIn:b,isLoading:D,iconOut:M,closeOnClick:R,theme:de}=t,ie=ti("Toastify__toast",`Toastify__toast-theme--${de}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":T},{"Toastify__toast--close-on-click":R}),ye=qt(x)?x({rtl:T,position:v,type:d,defaultClassName:ie}):ti(ie,x),Ee=!!O||!a,B={closeToast:m,type:d,theme:de};let G=null;return o===!1||(G=qt(o)?o(B):j.isValidElement(o)?j.cloneElement(o,B):bI(B)),c.createElement(_,{isIn:b,done:A,position:v,preventExitTransition:n,nodeRef:r},c.createElement("div",{id:I,onClick:l,className:ye,...i,style:L,ref:r},c.createElement("div",{...b&&{role:P},className:qt(w)?w({type:d}):ti("Toastify__toast-body",w),style:y},M!=null&&c.createElement("div",{className:ti("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},M),c.createElement("div",null,s)),G,c.createElement(gM,{...S&&!Ee?{key:`pb-${S}`}:{},rtl:T,theme:de,delay:a,isRunning:e,isIn:b,closeToast:m,hide:f,type:d,style:E,className:g,controlledProgress:Ee,progress:O||0})))},tf=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},vM=ef(tf("bounce",!0));ef(tf("slide",!0));ef(tf("zoom"));ef(tf("flip"));const h0=j.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=pM(t),{className:o,style:s,rtl:a,containerId:l}=t;function d(f){const m=ti("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":a});return qt(o)?o({position:f,rtl:a,defaultClassName:m}):ti(m,Qc(o))}return j.useEffect(()=>{e&&(e.current=r.current)},[]),c.createElement("div",{ref:r,className:"Toastify",id:l},n((f,m)=>{const _=m.length?{...s}:{...s,pointerEvents:"none"};return c.createElement("div",{className:d(f),style:_,key:`container-${f}`},m.map((v,x)=>{let{content:L,props:w}=v;return c.createElement(yM,{...w,isIn:i(w.toastId),style:{...w.style,"--nth":x+1,"--len":m.length},key:`toast-${w.key}`},L)}))}))});h0.displayName="ToastContainer",h0.defaultProps={position:"top-right",transition:vM,autoClose:5e3,closeButton:bI,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let _p,$i=new Map,hl=[],kM=1;function jI(){return""+kM++}function _M(t){return t&&(go(t.toastId)||Pl(t.toastId))?t.toastId:jI()}function Rl(t,e){return $i.size>0?un.emit(0,t,e):hl.push({content:t,options:e}),e.toastId}function Yd(t,e){return{...e,type:e&&e.type||t,toastId:_M(e)}}function _c(t){return(e,n)=>Rl(e,Yd(t,n))}function q(t,e){return Rl(t,Yd("default",e))}q.loading=(t,e)=>Rl(t,Yd("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),q.promise=function(t,e,n){let r,{pending:i,error:o,success:s}=e;i&&(r=go(i)?q.loading(i,n):q.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(f,m,_)=>{if(m==null)return void q.dismiss(r);const v={type:f,...a,...n,data:_},x=go(m)?{render:m}:m;return r?q.update(r,{...v,...x}):q(x.render,{...v,...x}),_},d=qt(t)?t():t;return d.then(f=>l("success",s,f)).catch(f=>l("error",o,f)),d},q.success=_c("success"),q.info=_c("info"),q.error=_c("error"),q.warning=_c("warning"),q.warn=q.warning,q.dark=(t,e)=>Rl(t,Yd("default",{theme:"dark",...e})),q.dismiss=t=>{$i.size>0?un.emit(1,t):hl=hl.filter(e=>t!=null&&e.options.toastId!==t)},q.clearWaitingQueue=function(t){return t===void 0&&(t={}),un.emit(5,t)},q.isActive=t=>{let e=!1;return $i.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},q.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=$i.get(o||_p);return s&&s.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,o={delay:100,...r,...e,toastId:e.toastId||t,updateId:jI()};o.toastId!==t&&(o.staleId=t);const s=o.render||i;delete o.render,Rl(s,o)}},0)},q.done=t=>{q.update(t,{progress:1})},q.onChange=t=>(un.on(4,t),()=>{un.off(4,t)}),q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},un.on(2,t=>{_p=t.containerId||t,$i.set(_p,t),hl.forEach(e=>{un.emit(0,e.content,e.options)}),hl=[]}).on(3,t=>{$i.delete(t.containerId||t),$i.size===0&&un.off(0).off(1).off(5)});var EM=j.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Ie=function(e,n,r){var i=r.get(e);return i?i(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function p_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var xe=j.forwardRef(function(t,e){var n=t.alt,r=t.color,i=t.size,o=t.weight,s=t.mirrored,a=t.children,l=t.renderPath,d=p_(t,["alt","color","size","weight","mirrored","children","renderPath"]),f=j.useContext(EM),m=f.color,_=m===void 0?"currentColor":m,v=f.size,x=f.weight,L=x===void 0?"regular":x,w=f.mirrored,y=w===void 0?!1:w,g=p_(f,["color","size","weight","mirrored"]);return c.createElement("svg",Object.assign({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i??v,height:i??v,fill:r??_,viewBox:"0 0 256 256",transform:s||y?"scale(-1, 1)":void 0},g,d),!!n&&c.createElement("title",null,n),a,c.createElement("rect",{width:"256",height:"256",fill:"none"}),l(o??L,r??_))});xe.displayName="IconBase";var Io=new Map;Io.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Io.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Io.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))});Io.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Io.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Io.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var wM=function(e,n){return Ie(e,n,Io)},DI=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:wM}))});DI.displayName="ArrowLeft";var So=new Map;So.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});So.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});So.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"}))});So.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});So.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});So.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var xM=function(e,n){return Ie(e,n,So)},f0=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:xM}))});f0.displayName="ArrowRight";var Lo=new Map;Lo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"136",x2:"108",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"176",x2:"188",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"136",x2:"188",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Lo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",opacity:"0.2"}),c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Lo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M240,208h-8V104a16,16,0,0,0-16-16H152V40a16,16,0,0,0-16-16H40A16,16,0,0,0,24,40V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM120,136a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h32A8,8,0,0,1,120,136ZM64,64H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm0,104H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm88-64h64V208H152Z"}),c.createElement("path",{d:"M192,168H176a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z"}),c.createElement("path",{d:"M176,144h16a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Z"}))});Lo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Lo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Lo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var TM=function(e,n){return Ie(e,n,Lo)},J1=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:TM}))});J1.displayName="Buildings";var Co=new Map;Co.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"176",y1:"20",x2:"176",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"20",x2:"80",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M88,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"148 140 164 128 164 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Co.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Co.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,188a24.2,24.2,0,0,1-17-7,8,8,0,0,1,0-11.3,7.9,7.9,0,0,1,11.3,0A8.3,8.3,0,0,0,104,172a8,8,0,0,0,0-16h-2.5l-.4-.2h-.3l-.5-.2h-.1l-.6-.4h-.2l-.4-.3h0l-.4-.3-.2-.2-.3-.3a8.6,8.6,0,0,1-1.3-2,5.8,5.8,0,0,1-.6-1.7h0c-.1-.1-.1-.2-.1-.4a.4.4,0,0,0-.1-.3V148h0v-.7c0-.2.1-.3.1-.4v-.4a.6.6,0,0,0,.1-.4c.1-.1.1-.2.1-.4l.2-.3c0-.2,0-.3.1-.4l.2-.4v-.3l.2-.4.2-.3.3-.4.2-.2,5.6-7H92a8,8,0,0,1,0-16h28a8,8,0,0,1,6.2,13l-8.8,11.1A24,24,0,0,1,104,188Zm64-8a8,8,0,0,1-16,0V144l-3.2,2.4a8.1,8.1,0,0,1-11.2-1.6,8,8,0,0,1,1.6-11.2l16-12A8,8,0,0,1,168,128ZM208,80H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))});Co.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Co.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Co.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var IM=function(e,n){return Ie(e,n,Co)},Bn=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:IM}))});Bn.displayName="Calendar";var Ao=new Map;Ao.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"228",y1:"208",x2:"28",y2:"208",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"100 208 100 88 156 88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("rect",{x:"156",y:"40",width:"56",height:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"44 208 44 136 100 136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ao.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"156",y:"40",width:"56",height:"168",opacity:"0.2"}),c.createElement("line",{x1:"228",y1:"208",x2:"28",y2:"208",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"100 208 100 88 156 88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"156",y:"40",width:"56",height:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"44 208 44 136 100 136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ao.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M228,200h-8V40a8,8,0,0,0-8-8H156a8,8,0,0,0-8,8V80H100a8,8,0,0,0-8,8v40H44a8,8,0,0,0-8,8v64H28a8,8,0,0,0,0,16H228a8,8,0,0,0,0-16ZM108,96h40V200H108ZM52,144H92v56H52Z"}))});Ao.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"228",y1:"208",x2:"28",y2:"208",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"100 208 100 88 156 88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("rect",{x:"156",y:"40",width:"56",height:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"44 208 44 136 100 136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ao.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"228",y1:"208",x2:"28",y2:"208",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"100 208 100 88 156 88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("rect",{x:"156",y:"40",width:"56",height:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"44 208 44 136 100 136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ao.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"44 208 44 136 100 136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"228",y1:"208",x2:"28",y2:"208",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"100 208 100 88 156 88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"156",y:"40",width:"56",height:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var SM=function(e,n){return Ie(e,n,Ao)},OI=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:SM}))});OI.displayName="ChartBar";var Po=new Map;Po.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Po.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Po.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});Po.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Po.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Po.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var LM=function(e,n){return Ie(e,n,Po)},MI=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:LM}))});MI.displayName="Check";var Ro=new Map;Ro.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ro.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ro.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"}))});Ro.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ro.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ro.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var CM=function(e,n){return Ie(e,n,Ro)},Bi=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:CM}))});Bi.displayName="CheckCircle";var bo=new Map;bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))});bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var AM=function(e,n){return Ie(e,n,bo)},Ns=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:AM}))});Ns.displayName="Clock";var jo=new Map;jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm91.2-27.7a8,8,0,0,0-8.7,1.8L204.2,68.4l-8.3-8.3a96,96,0,1,0,0,135.8,8,8,0,0,0,0-11.3,7.9,7.9,0,0,0-11.3,0,80,80,0,1,1,0-113.2l8.3,8.3L178.5,94.1a8,8,0,0,0,5.7,13.6h40a8,8,0,0,0,8-8v-40A8.2,8.2,0,0,0,227.2,52.3Z"}))});jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var PM=function(e,n){return Ie(e,n,jo)},NI=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:PM}))});NI.displayName="ClockClockwise";var Do=new Map;Do.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Do.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Do.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm59.9-19.9a96.2,96.2,0,0,0-135.8,0l-8.3,8.3L37.5,54.1a8,8,0,0,0-8.7-1.8,8.2,8.2,0,0,0-5,7.4v40a8,8,0,0,0,8,8h40a8,8,0,0,0,5.7-13.6L63.1,79.7l8.3-8.3a80,80,0,1,1,0,113.2,7.9,7.9,0,0,0-11.3,0,8,8,0,0,0,0,11.3A96,96,0,0,0,195.9,60.1Z"}))});Do.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Do.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Do.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var RM=function(e,n){return Ie(e,n,Do)},VI=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:RM}))});VI.displayName="ClockCounterClockwise";var Oo=new Map;Oo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Oo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Oo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"}))});Oo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Oo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Oo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var bM=function(e,n){return Ie(e,n,Oo)},nf=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:bM}))});nf.displayName="Envelope";var Mo=new Map;Mo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Mo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Mo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,92a36,36,0,1,1-36,36A36,36,0,0,1,128,92Z"}))});Mo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Mo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Mo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var jM=function(e,n){return Ie(e,n,Mo)},Gd=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:jM}))});Gd.displayName="Eye";var No=new Map;No.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.4,163.6C232.1,145.7,240,128,240,128S208,56,128,56c-3.8,0-7.4.2-11,.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});No.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});No.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48a132.4,132.4,0,0,0-22,1.8,8.1,8.1,0,0,0-4.6,13.3L202.7,174.5a8,8,0,0,0,5.9,2.6,8.6,8.6,0,0,0,5.4-2c22.8-20.5,32.9-42.9,33.3-43.8A8.2,8.2,0,0,0,247.3,124.8Z"}),c.createElement("path",{d:"M53.9,34.6A8,8,0,0,0,42.1,45.4L61.3,66.5C25,88.8,9.4,123.2,8.7,124.8a8.2,8.2,0,0,0,0,6.5c.3.7,8.8,19.5,27.6,38.4C61.4,194.7,93.1,208,128,208a126.9,126.9,0,0,0,52.1-10.8l22,24.2A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3ZM128,164a36,36,0,0,1-29.5-56.6l47.2,51.9A35.4,35.4,0,0,1,128,164Z"}))});No.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});No.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});No.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var DM=function(e,n){return Ie(e,n,No)},Kd=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:DM}))});Kd.displayName="EyeSlash";var Vo=new Map;Vo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"44",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M183.7,65.1q3.8,3.5,7.2,7.2l27.3,3.9a103.2,103.2,0,0,1,10.2,24.6l-16.6,22.1s.3,6.8,0,10.2l16.6,22.1a102.2,102.2,0,0,1-10.2,24.6l-27.3,3.9s-4.7,4.9-7.2,7.2l-3.9,27.3a103.2,103.2,0,0,1-24.6,10.2l-22.1-16.6a57.9,57.9,0,0,1-10.2,0l-22.1,16.6a102.2,102.2,0,0,1-24.6-10.2l-3.9-27.3q-3.7-3.5-7.2-7.2l-27.3-3.9a103.2,103.2,0,0,1-10.2-24.6l16.6-22.1s-.2-6.8,0-10.2L27.6,100.8A102.2,102.2,0,0,1,37.8,76.2l27.3-3.9q3.5-3.7,7.2-7.2l3.9-27.3a103.2,103.2,0,0,1,24.6-10.2l22.1,16.6a57.9,57.9,0,0,1,10.2,0l22.1-16.6a102.2,102.2,0,0,1,24.6,10.2Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Vo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M211.8,133.1c.3-3.4,0-10.2,0-10.2l16.6-22.1a103.2,103.2,0,0,0-10.2-24.6l-27.3-3.9q-3.5-3.7-7.2-7.2l-3.9-27.3a102.2,102.2,0,0,0-24.6-10.2L133.1,44.2a57.9,57.9,0,0,0-10.2,0L100.8,27.6A103.2,103.2,0,0,0,76.2,37.8L72.3,65.1q-3.7,3.5-7.2,7.2L37.8,76.2a102.2,102.2,0,0,0-10.2,24.6l16.6,22.1c-.2,3.4,0,10.2,0,10.2L27.6,155.2a103.2,103.2,0,0,0,10.2,24.6l27.3,3.9q3.5,3.8,7.2,7.2l3.9,27.3a102.2,102.2,0,0,0,24.6,10.2l22.1-16.6a57.9,57.9,0,0,0,10.2,0l22.1,16.6a103.2,103.2,0,0,0,24.6-10.2l3.9-27.3c2.5-2.3,7.2-7.2,7.2-7.2l27.3-3.9a102.2,102.2,0,0,0,10.2-24.6ZM128,176a48,48,0,1,1,48-48A48,48,0,0,1,128,176Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"48",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M183.7,65.1q3.8,3.5,7.2,7.2l27.3,3.9a103.2,103.2,0,0,1,10.2,24.6l-16.6,22.1s.3,6.8,0,10.2l16.6,22.1a102.2,102.2,0,0,1-10.2,24.6l-27.3,3.9s-4.7,4.9-7.2,7.2l-3.9,27.3a103.2,103.2,0,0,1-24.6,10.2l-22.1-16.6a57.9,57.9,0,0,1-10.2,0l-22.1,16.6a102.2,102.2,0,0,1-24.6-10.2l-3.9-27.3q-3.7-3.5-7.2-7.2l-27.3-3.9a103.2,103.2,0,0,1-10.2-24.6l16.6-22.1s-.2-6.8,0-10.2L27.6,100.8A102.2,102.2,0,0,1,37.8,76.2l27.3-3.9q3.5-3.7,7.2-7.2l3.9-27.3a103.2,103.2,0,0,1,24.6-10.2l22.1,16.6a57.9,57.9,0,0,1,10.2,0l22.1-16.6a102.2,102.2,0,0,1,24.6,10.2Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Vo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M234.8,150.4l-14.9-19.8c.1-1.8,0-3.7,0-5.1l14.9-19.9a7.8,7.8,0,0,0,1.3-6.9,114.8,114.8,0,0,0-10.9-26.4,8.2,8.2,0,0,0-5.8-4l-24.5-3.5-3.7-3.7-3.5-24.5a8.4,8.4,0,0,0-3.9-5.8,117.5,117.5,0,0,0-26.5-10.9,7.8,7.8,0,0,0-6.9,1.3L130.6,36h-5.2L105.6,21.2a7.8,7.8,0,0,0-6.9-1.3A114.8,114.8,0,0,0,72.3,30.8a8.2,8.2,0,0,0-4,5.8L64.8,61.1l-3.7,3.7L36.6,68.3a8.2,8.2,0,0,0-5.8,4A114.8,114.8,0,0,0,19.9,98.7a7.8,7.8,0,0,0,1.3,6.9l14.9,19.8v5.1L21.2,150.4a7.8,7.8,0,0,0-1.3,6.9,114.8,114.8,0,0,0,10.9,26.4,8.2,8.2,0,0,0,5.8,4l24.5,3.5,3.7,3.7,3.5,24.5a8.2,8.2,0,0,0,4,5.8,114.8,114.8,0,0,0,26.4,10.9,7.6,7.6,0,0,0,2.1.3,7.7,7.7,0,0,0,4.8-1.6L125.4,220h5.2l19.8,14.8a7.8,7.8,0,0,0,6.9,1.3,113,113,0,0,0,26.4-10.9,8.2,8.2,0,0,0,4-5.8l3.5-24.6c1.2-1.2,2.6-2.5,3.6-3.6l24.6-3.5a8.2,8.2,0,0,0,5.8-4,114.8,114.8,0,0,0,10.9-26.4A7.8,7.8,0,0,0,234.8,150.4ZM128,172a44,44,0,1,1,44-44A44,44,0,0,1,128,172Z"}))});Vo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"48",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M183.7,65.1q3.8,3.5,7.2,7.2l27.3,3.9a103.2,103.2,0,0,1,10.2,24.6l-16.6,22.1s.3,6.8,0,10.2l16.6,22.1a102.2,102.2,0,0,1-10.2,24.6l-27.3,3.9s-4.7,4.9-7.2,7.2l-3.9,27.3a103.2,103.2,0,0,1-24.6,10.2l-22.1-16.6a57.9,57.9,0,0,1-10.2,0l-22.1,16.6a102.2,102.2,0,0,1-24.6-10.2l-3.9-27.3q-3.7-3.5-7.2-7.2l-27.3-3.9a103.2,103.2,0,0,1-10.2-24.6l16.6-22.1s-.3-6.8,0-10.2L27.6,100.8A102.2,102.2,0,0,1,37.8,76.2l27.3-3.9q3.5-3.7,7.2-7.2l3.9-27.3a103.2,103.2,0,0,1,24.6-10.2l22.1,16.6a57.9,57.9,0,0,1,10.2,0l22.1-16.6a102.2,102.2,0,0,1,24.6,10.2Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Vo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"48",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M183.7,65.1q3.8,3.5,7.2,7.2l27.3,3.9a103.2,103.2,0,0,1,10.2,24.6l-16.6,22.1s.3,6.8,0,10.2l16.6,22.1a102.2,102.2,0,0,1-10.2,24.6l-27.3,3.9s-4.7,4.9-7.2,7.2l-3.9,27.3a103.2,103.2,0,0,1-24.6,10.2l-22.1-16.6a57.9,57.9,0,0,1-10.2,0l-22.1,16.6a102.2,102.2,0,0,1-24.6-10.2l-3.9-27.3q-3.7-3.5-7.2-7.2l-27.3-3.9a103.2,103.2,0,0,1-10.2-24.6l16.6-22.1s-.3-6.8,0-10.2L27.6,100.8A102.2,102.2,0,0,1,37.8,76.2l27.3-3.9q3.5-3.7,7.2-7.2l3.9-27.3a103.2,103.2,0,0,1,24.6-10.2l22.1,16.6a57.9,57.9,0,0,1,10.2,0l22.1-16.6a102.2,102.2,0,0,1,24.6,10.2Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Vo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"48",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M183.7,65.1q3.8,3.5,7.2,7.2l27.3,3.9a103.2,103.2,0,0,1,10.2,24.6l-16.6,22.1s.3,6.8,0,10.2l16.6,22.1a102.2,102.2,0,0,1-10.2,24.6l-27.3,3.9s-4.7,4.9-7.2,7.2l-3.9,27.3a103.2,103.2,0,0,1-24.6,10.2l-22.1-16.6a57.9,57.9,0,0,1-10.2,0l-22.1,16.6a102.2,102.2,0,0,1-24.6-10.2l-3.9-27.3q-3.7-3.5-7.2-7.2l-27.3-3.9a103.2,103.2,0,0,1-10.2-24.6l16.6-22.1s-.3-6.8,0-10.2L27.6,100.8A102.2,102.2,0,0,1,37.8,76.2l27.3-3.9q3.5-3.7,7.2-7.2l3.9-27.3a103.2,103.2,0,0,1,24.6-10.2l22.1,16.6a57.9,57.9,0,0,1,10.2,0l22.1-16.6a102.2,102.2,0,0,1,24.6,10.2Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var OM=function(e,n){return Ie(e,n,Vo)},FI=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:OM}))});FI.displayName="Gear";var Fo=new Map;Fo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Fo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M130.2,224a96.3,96.3,0,0,0,84-53.6h0L159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224Z",opacity:"0.2"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1l5.4,1.1,8.3-19.7a8.1,8.1,0,0,1,7.4-4.9h21.4a8.6,8.6,0,0,0,3.8-1l12.3-6.8a7.2,7.2,0,0,0,1.5-1.1l26.9-24.3a8.1,8.1,0,0,0,1.6-9.8l-9.3-16.8h0A98.5,98.5,0,0,0,128,32,95.4,95.4,0,0,0,65,55.6Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Fo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.6,173.3A102.9,102.9,0,0,0,232,128,104.2,104.2,0,0,0,154.8,27.5h-.5A103.8,103.8,0,0,0,60.4,49l-1.3,1.2A103.9,103.9,0,0,0,128,232h2.4A104.3,104.3,0,0,0,221,174.6h0ZM216,128a89.3,89.3,0,0,1-5.5,30.7l-46.4-28.5a16,16,0,0,0-6.3-2.3l-22.8-3a16.1,16.1,0,0,0-15.3,6.8h-8.6l-3.8-7.9a16.2,16.2,0,0,0-11-8.7l-6.6-1.4,2.5-5.9a8.1,8.1,0,0,1,7.4-4.9h16.1a16.1,16.1,0,0,0,7.7-2l12.2-6.8a16.1,16.1,0,0,0,3-2.1l26.9-24.4A15.7,15.7,0,0,0,170,50.7,88,88,0,0,1,216,128ZM40,128a87.1,87.1,0,0,1,9.5-39.7l10.4,27.9a16.1,16.1,0,0,0,11.6,10l5.5,1.2h.1l12,2.6a7.8,7.8,0,0,1,5.5,4.3l2.1,4.4a16.1,16.1,0,0,0,14.4,9h1.2l-7.7,17.2a15.9,15.9,0,0,0,2.8,17.4l16.1,17.4a8.3,8.3,0,0,1,2,6.9l-1.8,9.3A88.1,88.1,0,0,1,40,128Z"}))});Fo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Fo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Fo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var MM=function(e,n){return Ie(e,n,Fo)},UI=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:MM}))});UI.displayName="GlobeHemisphereWest";var Uo=new Map;Uo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Uo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",opacity:"0.2"}),c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Uo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M218.8,103.7,138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5v92.1a16.4,16.4,0,0,0,4,11A15.9,15.9,0,0,0,48,224H96a8,8,0,0,0,8-8V168a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v48a8,8,0,0,0,8,8h48a15.6,15.6,0,0,0,7.6-1.9A16.1,16.1,0,0,0,224,208V115.5A16,16,0,0,0,218.8,103.7Z"}))});Uo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Uo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Uo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var NM=function(e,n){return Ie(e,n,Uo)},WI=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:NM}))});WI.displayName="House";var Wo=new Map;Wo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"108",x2:"184",y2:"108",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"148",x2:"184",y2:"148",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"94.1",cy:"116",r:"22",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M72.1,164a22,22,0,0,1,44,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Wo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM92.1,144a24,24,0,1,1,24-24A23.9,23.9,0,0,1,92.1,144Z",opacity:"0.2"}),c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Wo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM125.1,175.7a8,8,0,0,1-9.8-5.7,24,24,0,0,0-46.4,0,8.1,8.1,0,0,1-7.8,6l-2-.3a7.9,7.9,0,0,1-5.7-9.7,40.2,40.2,0,0,1,16.3-23.2,32,32,0,1,1,44.8,0A40.2,40.2,0,0,1,130.8,166,7.9,7.9,0,0,1,125.1,175.7ZM192,152H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"16"}))});Wo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Wo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Wo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var VM=function(e,n){return Ie(e,n,Wo)},ey=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:VM}))});ey.displayName="IdentificationCard";var $o=new Map;$o.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"152",r:"16"}))});$o.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});$o.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"}))});$o.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"152",r:"10"}))});$o.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"152",r:"8"}))});$o.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});var FM=function(e,n){return Ie(e,n,$o)},Qd=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:FM}))});Qd.displayName="Lock";var zo=new Map;zo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"44",y1:"156",x2:"100",y2:"212",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"164",y1:"92",x2:"72",y2:"184",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});zo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M192,120,136,64l26.3-26.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z",opacity:"0.2"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});zo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.3,32a15.9,15.9,0,0,0-22.6,0L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a15.9,15.9,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7ZM51.3,160,144,67.3,160.7,84,68,176.7ZM48,179.3,76.7,208H48Zm48,25.4L79.3,188,172,95.3,188.7,112Z"}))});zo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});zo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});zo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var UM=function(e,n){return Ie(e,n,zo)},$I=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:UM}))});$I.displayName="Pencil";var Bo=new Map;Bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,64l56,56,26.3-26.3a8,8,0,0,0,0-11.4L173.7,37.7a8,8,0,0,0-11.4,0Z",opacity:"0.2"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"}))});Bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var WM=function(e,n){return Ie(e,n,Bo)},p0=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:WM}))});p0.displayName="PencilSimple";var Ho=new Map;Ho.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ho.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ho.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M141.7,133.7l-42,42A8.3,8.3,0,0,1,94,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H24a8,8,0,0,1,0-16H86V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,141.7,133.7ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"}))});Ho.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ho.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ho.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var $M=function(e,n){return Ie(e,n,Ho)},ty=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:$M}))});ty.displayName="SignIn";var qo=new Map;qo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});qo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});qo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-42,42A8.3,8.3,0,0,1,174,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H104a8,8,0,0,1,0-16h62V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,221.7,133.7ZM104,208H48V48h56a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16h56a8,8,0,0,0,0-16Z"}))});qo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});qo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});qo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var zM=function(e,n){return Ie(e,n,qo)},Zc=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:zM}))});Zc.displayName="SignOut";var Yo=new Map;Yo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Yo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Yo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"}))});Yo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Yo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Yo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var BM=function(e,n){return Ie(e,n,Yo)},zI=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:BM}))});zI.displayName="SpinnerGap";var Go=new Map;Go.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"60",x2:"40",y2:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Go.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Go.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))});Go.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Go.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Go.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var HM=function(e,n){return Ie(e,n,Go)},m0=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:HM}))});m0.displayName="Trash";var Ko=new Map;Ko.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ko.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ko.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});Ko.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ko.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ko.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var qM=function(e,n){return Ie(e,n,Ko)},no=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:qM}))});no.displayName="User";var Qo=new Map;Qo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Qo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,32A96,96,0,0,0,63.8,199.4h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.4A96,96,0,0,0,128,32Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Qo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"120",r:"44"}),c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm65.8,162.4a81.3,81.3,0,0,0-24.5-23,59.7,59.7,0,0,1-82.6,0,81.3,81.3,0,0,0-24.5,23,88,88,0,1,1,131.6,0Z"}))});Qo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Qo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Qo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var YM=function(e,n){return Ie(e,n,Qo)},Zd=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:YM}))});Zd.displayName="UserCircle";var Zo=new Map;Zo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"204",y1:"136",x2:"244",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"116",x2:"224",y2:"156",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Zo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"108",cy:"100",r:"60",opacity:"0.2"}),c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Zo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144.1,157.6a68,68,0,1,0-72.2,0,118.4,118.4,0,0,0-55.8,37.3,7.8,7.8,0,0,0-1.1,8.5,7.9,7.9,0,0,0,7.2,4.6H193.8a7.9,7.9,0,0,0,7.2-4.6,7.8,7.8,0,0,0-1.1-8.5A118.4,118.4,0,0,0,144.1,157.6Z"}))});Zo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Zo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Zo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var GM=function(e,n){return Ie(e,n,Zo)},rf=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:GM}))});rf.displayName="UserPlus";var Xo=new Map;Xo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Xo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",opacity:"0.2"}),c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Xo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M121.2,157.9a60,60,0,1,0-66.4,0A95.5,95.5,0,0,0,9.5,192.8a7.8,7.8,0,0,0-.6,8.3,8.1,8.1,0,0,0,7.1,4.3H160a8.1,8.1,0,0,0,7.1-4.3,7.8,7.8,0,0,0-.6-8.3A95.5,95.5,0,0,0,121.2,157.9Z"}),c.createElement("path",{d:"M248.1,192.8a96.3,96.3,0,0,0-45.4-34.9A59.9,59.9,0,0,0,169.5,48a64,64,0,0,0-16.3,2.2,8.2,8.2,0,0,0-5.4,5.2,8,8,0,0,0,1.2,7.3,75.8,75.8,0,0,1,3.8,84.9,8.1,8.1,0,0,0,2.1,10.6q4.5,3.5,8.7,7.2l.5.5a112.6,112.6,0,0,1,25.5,34.9,7.9,7.9,0,0,0,7.2,4.6h44.7a8.1,8.1,0,0,0,7.1-4.3A8,8,0,0,0,248.1,192.8Z"}))});Xo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Xo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Xo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var KM=function(e,n){return Ie(e,n,Xo)},uu=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:KM}))});uu.displayName="Users";var Jo=new Map;Jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"}))});Jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var QM=function(e,n){return Ie(e,n,Jo)},BI=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:QM}))});BI.displayName="X";var es=new Map;es.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});es.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});es.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm37.7,130.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3l-26.3,26.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,90.3,101.7a8.1,8.1,0,0,1,11.4-11.4L128,116.7l26.3-26.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"}))});es.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});es.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});es.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var ZM=function(e,n){return Ie(e,n,es)},HI=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:ZM}))});HI.displayName="XCircle";const XM=N.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #000000 0%, #801100 100%);
`,JM=N.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`,eN=N.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,tN=N.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,m_=N.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,g_=N.label`
  font-size: 0.9rem;
  color: #555;
`,y_=N.div`
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
`,Ec=N.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #800000;
  margin-right: 0.5rem;
`,v_=N.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #e74c3c;
  
  &:focus {
    outline: none;
  }
`,nN=N.button`
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
`,rN=N.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,iN=N(Qg)`
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
`,oN=N.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,sN=N.button`
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
`,aN=N.button`
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
`,lN=N.div`
  font-size: 2rem;
  font-weight: bold;
  color: #800000;
  text-align: center;
  margin-bottom: 0.5rem;
`;function uN(){const[t,e]=j.useState(""),[n,r]=j.useState(""),[i,o]=j.useState(""),[s,a]=j.useState(!1),[l,d]=j.useState(!1),[f,m]=j.useState(!1),[_,v]=j.useState(!1),x=tr(),L=ka();j.useEffect(()=>{var g;(g=L.state)!=null&&g.message&&(q.info(L.state.message),x(L.pathname,{replace:!0,state:{}}))},[L,x]),j.useEffect(()=>{i&&o("")},[t,n]);const w=async()=>{var E,S;if(!t){o("Please enter your email address to reset your password"),(E=document.getElementById("email"))==null||E.focus();return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(S=document.getElementById("email"))==null||S.focus();return}try{v(!0),await BP(Ct,t),m(!0),q.success("Password reset email sent! Check your inbox.")}catch(P){console.error("Password reset error:",P),P.code==="auth/user-not-found"?o("No account found with this email address"):o("Failed to send password reset email. Please try again.")}finally{v(!1)}},y=async g=>{var S,P,O;if(g.preventDefault(),!t||!n){o("Please enter both email and password");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(S=document.getElementById("email"))==null||S.focus();return}try{o(""),a(!0);try{const I=(await qP(Ct,t,n)).user,A=Pr(Mn(we,"declined_registrations"),wi("userId","==",I.uid));if(!(await Jn(A)).empty){await Ct.signOut(),o("Your registration request has been declined. Please contact an administrator."),q.error("Access denied: Registration declined");return}const D=Pr(Mn(we,"registration_requests"),wi("userId","==",I.uid));if(!(await Jn(D)).empty){await Ct.signOut(),o("Your registration request is pending approval. You will be notified when approved."),q.info("Registration pending approval");return}const R=!1;q.success("Login successful!"),x("/dashboard")}catch(T){if(console.error("Firebase auth error:",T),!(!1&&(T.code==="auth/network-request-failed"||(P=T.message)!=null&&P.includes("network")))){if(T.code==="auth/invalid-credential"||T.code==="auth/invalid-email"||T.code==="auth/user-not-found"||T.code==="auth/wrong-password"){console.log("Authentication failed:",T.code,T.message);const A=T.code==="auth/user-not-found"||T.code==="auth/invalid-credential"&&t.includes("@");o(A?h.jsxs("span",{children:["Account not found. Please check your email or",h.jsx("a",{href:"/register",style:{color:"#800000",marginLeft:"4px",textDecoration:"underline"},children:"register here"})]}):"Invalid email or password. Please check your credentials and try again."),(O=document.getElementById("email"))==null||O.focus()}else T.code==="auth/network-request-failed"?o("Network error. Please check your connection and try again."):T.code==="auth/too-many-requests"?o("Too many failed login attempts. Please try again later or reset your password."):T.code==="auth/operation-not-allowed"?(o("Email/password sign-in is not enabled. Please contact the administrator."),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(console.error("Login error details:",T),o("Failed to log in. Please try again."));q.error("Login failed")}}}catch(T){console.error("Unexpected login error:",T),o("An unexpected error occurred. Please try again."),q.error("Login failed")}finally{a(!1)}};return h.jsx(XM,{children:h.jsxs(JM,{children:[h.jsx(lN,{children:"Hyacinth"}),h.jsx(eN,{children:"Attendance System"}),h.jsxs(tN,{onSubmit:y,children:[h.jsxs(m_,{children:[h.jsx(g_,{htmlFor:"email",children:"Email"}),h.jsxs(y_,{children:[h.jsx(Ec,{children:h.jsx(nf,{size:18})}),h.jsx(v_,{id:"email",type:"email",value:t,onChange:g=>e(g.target.value),placeholder:"Enter your email",required:!0})]})]}),h.jsxs(m_,{children:[h.jsx(g_,{htmlFor:"password",children:"Password"}),h.jsxs(y_,{children:[h.jsx(Ec,{children:h.jsx(Qd,{size:18})}),h.jsx(v_,{id:"password",type:l?"text":"password",value:n,onChange:g=>r(g.target.value),placeholder:"Enter your password",required:!0}),h.jsx(aN,{type:"button",onClick:()=>d(!l),"aria-label":l?"Hide password":"Show password",children:l?h.jsx(Kd,{size:18}):h.jsx(Gd,{size:18})})]}),h.jsx(sN,{type:"button",onClick:w,disabled:_,tabIndex:"-1",children:_?"Sending...":f?"Email sent!":"Forgot password?"})]}),i&&h.jsx(rN,{children:i}),h.jsxs(oN,{children:[h.jsx(nN,{type:"submit",disabled:s,onClick:y,children:s?"Logging in...":h.jsxs(h.Fragment,{children:[h.jsx(Ec,{children:h.jsx(ty,{size:18})}),"Login"]})}),h.jsxs(iN,{to:"/register",children:[h.jsx(Ec,{children:h.jsx(rf,{size:18})}),"Register"]})]})]})]})})}const cN=async t=>{try{const e={...t,createdAt:Bh(),status:"pending"};return(await h5(Mn(we,"registration_requests"),e)).id}catch(e){throw console.error("Error submitting registration request:",e),e}},dN=async()=>{try{const t=Pr(Mn(we,"registration_requests"),P8("createdAt","desc"));return(await Jn(t)).docs.map(n=>({id:n.id,...n.data()}))}catch(t){throw console.error("Error getting registration requests:",t),t}},hN=async(t,e)=>{try{const n=nt(we,"registration_requests",t);await Ll(n,{...e,updatedAt:Bh()})}catch(n){throw console.error("Error updating registration request:",n),n}},fN=async t=>{try{const e=nt(we,"users",t.userId);await Vd(e,{userId:t.userId,name:t.name,email:t.email,position:t.position,role:t.role||"user",status:"active",timeRegion:t.timeRegion||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila",createdAt:Bh(),userID:t.userID||`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`}),await W1(nt(we,"registration_requests",t.id))}catch(e){throw console.error("Error approving registration request:",e),e}},pN=async t=>{try{if(await Vd(nt(we,"declined_registrations",t.id),{...t,declinedAt:Bh(),status:"declined",blocked:!0}),await W1(nt(we,"registration_requests",t.id)),t.userId&&!t.userId.startsWith("temp_"))try{const n=uT().currentUser;n&&n.uid===t.userId?(await JP(n),console.log("Deleted declined user from Firebase Authentication")):console.log("User marked as declined in Firestore. They will be blocked from accessing the system.")}catch(e){console.error("Error handling user authentication:",e)}}catch(e){throw console.error("Error declining registration request:",e),e}},mN=N.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
  padding: 2rem 1rem;
`,gN=N.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 550px;
  animation: fadeIn 0.3s ease-in-out;
`,yN=N.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,vN=N.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Qa=N.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,kN=N.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,Ep=N.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${t=>t.flex||1};
  min-width: ${t=>t.minWidth||"0"};
`,Ur=N.label`
  font-size: 0.9rem;
  color: #555;
`,Mi=N.div`
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
`,wn=N.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  color: #800000;
`,ds=N.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`,_N=N.select`
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
`,EN=N.button`
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
`,wp=N.button`
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
`,k_=N(zI)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,wN=N(Qg)`
  display: flex;
  align-items: center;
  color: #800000;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`,hs=N.div`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`,xN=N.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;
`,Za=N.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  color: ${t=>t.met?"#000000":"#666"};
`;function TN(){const[t,e]=j.useState({lastName:"",firstName:"",middleInitial:"",email:"",password:"",confirmPassword:"",position:""}),[n,r]=j.useState({}),[i,o]=j.useState(!1),[s,a]=j.useState(!1),[l,d]=j.useState(!1),[f,m]=j.useState(!1),_=tr();j.useEffect(()=>{Object.keys(n).length>0&&r({})},[t]);const v={length:t.password.length>=4,validChars:/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(t.password),hasLetter:/[a-zA-Z]/.test(t.password),hasNumber:/[0-9]/.test(t.password),match:t.password===t.confirmPassword&&t.confirmPassword!==""},x=g=>{const{name:E,value:S}=g.target;if(e(E==="middleInitial"?P=>({...P,[E]:S.toUpperCase()}):P=>({...P,[E]:S})),E==="email"&&S.includes("@")&&S.includes(".")){m(!0);const P=setTimeout(()=>{L(S)},800);return()=>clearTimeout(P)}},L=async g=>{try{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)){m(!1);return}(await fetch("https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=undefined",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({continueUri:window.location.href,identifier:g})}).then(P=>P.json())).registered&&r(P=>({...P,email:"This email is already registered. Please use a different email or login instead."}))}catch(E){console.error("Error checking email:",E)}finally{m(!1)}},w=()=>{const g={};return t.lastName.trim()||(g.lastName="Last name is required"),t.firstName.trim()||(g.firstName="First name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(g.email="Email is invalid"):g.email="Email is required",t.password?v.length?v.validChars?v.hasLetter?v.hasNumber||(g.password="Password must contain at least one number"):g.password="Password must contain at least one letter":g.password="Password contains invalid characters":g.password="Password must be at least 4 characters":g.password="Password is required",t.confirmPassword?t.password!==t.confirmPassword&&(g.confirmPassword="Passwords do not match"):g.confirmPassword="Please confirm your password",t.position||(g.position="Please select your position"),r(g),Object.keys(g).length===0},y=async g=>{var E,S,P,O;if(g.preventDefault(),!!w())try{o(!0);const T=!1;let I,A;try{A=await HP(Ct,t.email,t.password),I=A.user.uid}catch(R){if(console.error("Auth error:",R),R.code==="auth/email-already-in-use")console.log("Email already exists in Auth but proceeding with registration request"),I=`temp_${Date.now()}_${Math.random().toString(36).substring(2,7)}`;else if(!(T&&(R.code==="auth/network-request-failed"||(E=R.message)!=null&&E.includes("network"))))throw R}const b=`${t.lastName}, ${t.firstName}${t.middleInitial?" "+t.middleInitial+".":""}`;if(A!=null&&A.user)try{await GP(A.user,{displayName:b})}catch(R){console.warn("Could not update profile, continuing with registration:",R)}let D="Asia/Manila";try{D=Intl.DateTimeFormat().resolvedOptions().timeZone,console.log("Detected device time zone during registration:",D)}catch(R){console.error("Error detecting time zone during registration:",R)}const M={userId:I,lastName:t.lastName,firstName:t.firstName,middleInitial:t.middleInitial,name:b,email:t.email,position:t.position,role:"user",status:"pending",timeRegion:D,userID:`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`};try{await cN(M)}catch(R){if(console.error("Firestore error:",R),!T)throw R}q.success("Registration request submitted! An administrator will review your request."),T&&!A||_("/login",{state:{message:"Your registration request has been submitted. You will be notified when your account is approved."}})}catch(T){if(console.error("Registration error:",T),T.code==="auth/email-already-in-use"||typeof T=="object"&&T.code==="auth/email-already-in-use"){const I=T.message||"Email is already registered. Please use a different email or login instead.";r(A=>({...A,email:I})),q.error(h.jsxs("div",{children:["Email already exists. ",h.jsx("a",{href:"/",style:{color:"white",textDecoration:"underline"},children:"Login instead?"})]}),{autoClose:5e3}),(S=document.getElementById("email"))==null||S.scrollIntoView({behavior:"smooth",block:"center"}),(P=document.getElementById("email"))==null||P.focus()}else T.code==="auth/network-request-failed"?q.error("Network error. Please check your connection and try again."):T.code==="auth/operation-not-allowed"?(r(I=>({...I,email:"Email/password registration is not enabled. Please contact the administrator."})),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(O=T.code)!=null&&O.includes("auth/")?q.error(`Authentication error: ${T.message||"Please try again later"}`):(console.error("Registration error details:",T),q.error("Registration failed. Please try again."))}finally{o(!1)}};return h.jsx(mN,{children:h.jsxs(gN,{children:[h.jsxs(wN,{to:"/",children:[h.jsx(wn,{children:h.jsx(DI,{size:16})}),"Back to Login"]}),h.jsx(yN,{children:"Create Account"}),h.jsxs(vN,{onSubmit:y,children:[h.jsxs(Qa,{children:[h.jsx(Ur,{children:"Full Name"}),h.jsxs(kN,{children:[h.jsxs(Ep,{flex:"2",minWidth:"150px",children:[h.jsx(Ur,{htmlFor:"lastName",children:"Last Name"}),h.jsxs(Mi,{children:[h.jsx(wn,{children:h.jsx(no,{size:18})}),h.jsx(ds,{id:"lastName",name:"lastName",type:"text",value:t.lastName,onChange:x,placeholder:"Last name"})]}),n.lastName&&h.jsx(hs,{children:n.lastName})]}),h.jsxs(Ep,{flex:"2",minWidth:"150px",children:[h.jsx(Ur,{htmlFor:"firstName",children:"First Name"}),h.jsx(Mi,{children:h.jsx(ds,{id:"firstName",name:"firstName",type:"text",value:t.firstName,onChange:x,placeholder:"First name"})}),n.firstName&&h.jsx(hs,{children:n.firstName})]}),h.jsxs(Ep,{flex:"1",minWidth:"80px",children:[h.jsx(Ur,{htmlFor:"middleInitial",children:"M.I."}),h.jsx(Mi,{children:h.jsx(ds,{id:"middleInitial",name:"middleInitial",type:"text",value:t.middleInitial,onChange:x,placeholder:"M.I.",maxLength:"1"})})]})]})]}),h.jsxs(Qa,{children:[h.jsx(Ur,{htmlFor:"email",children:"Email"}),h.jsxs(Mi,{children:[h.jsx(wn,{children:h.jsx(nf,{size:18})}),h.jsx(ds,{id:"email",name:"email",type:"email",value:t.email,onChange:x,placeholder:"Enter your email"}),f&&h.jsx(wp,{as:"span","aria-label":"Checking email",children:h.jsx(k_,{size:18})})]}),n.email&&h.jsx(hs,{children:n.email})]}),h.jsxs(Qa,{children:[h.jsx(Ur,{htmlFor:"position",children:"Position"}),h.jsxs(Mi,{children:[h.jsx(wn,{children:h.jsx(ey,{size:18})}),h.jsxs(_N,{id:"position",name:"position",value:t.position,onChange:x,children:[h.jsx("option",{value:"",disabled:!0,children:"Select your position"}),h.jsx("option",{value:"Intern/OJT",children:"Intern/OJT"}),h.jsx("option",{value:"Employed/Onboarded",children:"Employed/Onboarded"})]})]}),n.position&&h.jsx(hs,{children:n.position})]}),h.jsxs(Qa,{children:[h.jsx(Ur,{htmlFor:"password",children:"Password"}),h.jsxs(Mi,{children:[h.jsx(wn,{children:h.jsx(Qd,{size:18})}),h.jsx(ds,{id:"password",name:"password",type:s?"text":"password",value:t.password,onChange:x,placeholder:"Create a password"}),h.jsx(wp,{type:"button",onClick:()=>a(!s),"aria-label":s?"Hide password":"Show password",children:s?h.jsx(Kd,{size:18}):h.jsx(Gd,{size:18})})]}),n.password&&h.jsx(hs,{children:n.password}),h.jsxs(xN,{children:[h.jsxs(Za,{met:v.length,children:[h.jsx(wn,{children:h.jsx(Bi,{size:14,weight:v.length?"fill":"regular"})}),"At least 4 characters"]}),h.jsxs(Za,{met:v.validChars,children:[h.jsx(wn,{children:h.jsx(Bi,{size:14,weight:v.validChars?"fill":"regular"})}),"Valid characters (letters, numbers, and special characters)"]}),h.jsxs(Za,{met:v.hasLetter,children:[h.jsx(wn,{children:h.jsx(Bi,{size:14,weight:v.hasLetter?"fill":"regular"})}),"At least one letter"]}),h.jsxs(Za,{met:v.hasNumber,children:[h.jsx(wn,{children:h.jsx(Bi,{size:14,weight:v.hasNumber?"fill":"regular"})}),"At least one number"]})]})]}),h.jsxs(Qa,{children:[h.jsx(Ur,{htmlFor:"confirmPassword",children:"Confirm Password"}),h.jsxs(Mi,{children:[h.jsx(wn,{children:h.jsx(Qd,{size:18})}),h.jsx(ds,{id:"confirmPassword",name:"confirmPassword",type:l?"text":"password",value:t.confirmPassword,onChange:x,placeholder:"Confirm your password"}),h.jsx(wp,{type:"button",onClick:()=>d(!l),"aria-label":l?"Hide password":"Show password",children:l?h.jsx(Kd,{size:18}):h.jsx(Gd,{size:18})})]}),n.confirmPassword&&h.jsx(hs,{children:n.confirmPassword}),t.confirmPassword&&h.jsxs(Za,{met:v.match,children:[h.jsx(wn,{children:h.jsx(Bi,{size:14,weight:v.match?"fill":"regular"})}),"Passwords match"]})]}),h.jsx(EN,{type:"submit",disabled:i||f,children:i?h.jsxs(h.Fragment,{children:[h.jsx(k_,{size:18}),"Creating Account..."]}):f?"Checking email...":"Register"})]})]})})}const qI=j.createContext(),ny=()=>j.useContext(qI),IN=({children:t})=>{const{currentUser:e}=Dr(),[n,r]=j.useState(!1),[i,o]=j.useState(!0);j.useEffect(()=>{(async()=>{if(!(e!=null&&e.uid)){o(!1);return}try{const d=nt(we,"users_settings",e.uid),f=await xi(d);if(f.exists()){const m=f.data();m.use24HourFormat!==void 0&&r(m.use24HourFormat)}else await Vd(d,{use24HourFormat:!1,userId:e.uid})}catch(d){console.error("Error fetching user settings:",d)}finally{o(!1)}})()},[e]);const a={use24HourFormat:n,toggleTimeFormat:async()=>{if(e!=null&&e.uid)try{const l=nt(we,"users_settings",e.uid);return await Vd(l,{use24HourFormat:!n,userId:e.uid},{merge:!0}),r(!n),!0}catch(l){return console.error("Error updating time format:",l),!1}},loading:i};return h.jsx(qI.Provider,{value:a,children:t})},SN=N.div`
  display: flex;
  height: 100vh; /* Lock to viewport height */
  overflow: hidden; /* Prevent overall page scrolling */
`,LN=N.div`
  width: 250px;
  background: linear-gradient(180deg, #000000 0%, #800000 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Allow sidebar to scroll if needed */
`,CN=N.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`,lr=N.div`
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
`,__=N.button`
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
`,YI=N.button`
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
`,AN=N(YI)`
  background-color: #111111;
  color: #76da7c;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,PN=N(YI)`
  background-color: #111111;
  color: #e67979;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,xn=N.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,RN=N.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Make content area scrollable */
`,bN=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  background-color: #f5f5f5;
  z-index: 10; /* Ensure header stays on top */
`,jN=N.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,DN=N.div`
  display: flex;
  align-items: center;
`,ON=N.span`
  margin-right: 1rem;
  font-weight: 500;
`,MN=N.button`
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
`,NN=N.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto; /* Make content area scrollable */
  height: calc(100vh - 73px); /* Subtract header height */
`,VN=N.div`
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
`,FN=N.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`,UN=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
`,WN=N.div`
  padding: 1rem;
  overflow-y: auto;
`,$N=N.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #eee;
  gap: 0.5rem;
`,zN=N.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`,E_=N.div`
  margin-bottom: 1rem;
`,w_=N.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,BN=N.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`,x_=N.button`
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
`,Au=({user:t,activeTab:e,setActiveTab:n,attendanceStatus:r,loading:i,handleTimeInOut:o,lastRecord:s,isSuperAdmin:a,userData:l,setUserData:d,children:f})=>{var de;const m=tr(),{currentUser:_}=Dr(),{use24HourFormat:v,toggleTimeFormat:x}=ny(),[L,w]=j.useState(!1),[y,g]=j.useState((l==null?void 0:l.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila"),[E,S]=j.useState(!1),[P,O]=j.useState(""),[T,I]=j.useState(!1),A=ie=>{try{const ye=new Date,Ee={timeZone:ie,timeZoneName:"short"},Z=new Intl.DateTimeFormat("en-US",Ee).format(ye).match(/GMT([+-]\d+)/);if(Z&&Z[1])return`UTC${Z[1]}`;const ce=new Date,me=(new Date(ce.toLocaleString("en-US",{timeZone:ie}))-ce)/6e4,Ye=Math.floor(Math.abs(me)/60),Be=Math.abs(me)%60;return`UTC${me>=0?"+":"-"}${Ye.toString().padStart(2,"0")}:${Be.toString().padStart(2,"0")}`}catch(ye){return console.error("Error calculating UTC offset:",ye),""}};j.useEffect(()=>{try{const ie=Intl.DateTimeFormat().resolvedOptions().timeZone;O(ie),console.log("Detected device time zone:",ie)}catch(ie){console.error("Error detecting time zone:",ie),O("Unable to detect")}},[]),j.useEffect(()=>{l!=null&&l.timeRegion?g(l.timeRegion):P&&!(l!=null&&l.timeRegion)&&g(P)},[l,P]);const b=async()=>{if(!(!(t!=null&&t.uid)||E))try{S(!0);const ie=nt(we,"users",t.uid);await Ll(ie,{timeRegion:y}),d(ye=>({...ye,timeRegion:y})),q.success("Time region updated successfully"),w(!1)}catch(ie){console.error("Error updating time region:",ie),q.error("Failed to update time region")}finally{S(!1)}},D=async()=>{if(!T)try{I(!0),await x()?q.success(`Time format updated to ${v?"12-hour":"24-hour"} format`):q.error("Failed to update time format")}catch(ie){console.error("Error updating time format:",ie),q.error("Failed to update time format")}finally{I(!1)}},M=async()=>{try{await XP(Ct),m("/login")}catch(ie){console.error("Error signing out:",ie),q.error("Failed to sign out")}},R=e==="admin"||e==="registration_requests"||e==="user_management";return h.jsxs(SN,{children:[h.jsxs(LN,{children:[h.jsx(CN,{children:"Hyacinth"}),h.jsxs(lr,{className:e==="home"?"active":"",onClick:()=>m("/home"),children:[h.jsx(xn,{children:h.jsx(WI,{size:16})}),"Home"]}),h.jsxs(lr,{className:e==="schedule"?"active":"",onClick:()=>m("/schedule"),children:[h.jsx(xn,{children:h.jsx(Bn,{size:16})}),"Schedule"]}),h.jsxs(lr,{className:e==="attendance"?"active":"",onClick:()=>m("/attendance"),children:[h.jsx(xn,{children:h.jsx(Ns,{size:16})}),"Attendance"]}),h.jsxs(lr,{className:e==="profile"?"active":"",onClick:()=>m("/profile"),children:[h.jsx(xn,{children:h.jsx(no,{size:16})}),"Profile"]}),a&&h.jsx(h.Fragment,{children:h.jsxs("div",{style:{marginTop:"1.5rem",marginBottom:"0.5rem"},children:[h.jsx("div",{style:{fontSize:"0.8rem",textTransform:"uppercase",color:"rgba(255,255,255,0.6)",padding:"0 0.5rem",marginBottom:"0.5rem"},children:"Administration"}),h.jsxs(lr,{className:R?"active":"",onClick:()=>m("/admin"),children:[h.jsx(xn,{children:h.jsx(uu,{size:16})}),"Admin Panel"]}),h.jsxs("div",{style:{marginLeft:"1.5rem"},children:[h.jsxs(lr,{className:e==="registration_requests"?"active":"",onClick:()=>m("/admin/registration-requests"),style:{padding:"0.5rem 0.75rem",fontSize:"0.9rem"},children:[h.jsx(xn,{children:h.jsx(rf,{size:14})}),"Registration Requests"]}),h.jsxs(lr,{className:e==="user_management"?"active":"",onClick:()=>m("/admin/user-management"),style:{padding:"0.5rem 0.75rem",fontSize:"0.9rem"},children:[h.jsx(xn,{children:h.jsx(uu,{size:14})}),"User Management"]})]})]})}),h.jsxs("div",{style:{marginTop:"auto"},children:[h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"User Settings"}),h.jsxs(lr,{onClick:()=>w(!0),children:[h.jsx(xn,{children:h.jsx(UI,{size:16})}),"Change Time Region",h.jsxs("div",{style:{fontSize:"0.75rem",marginLeft:"auto",opacity:.7},children:[((de=l==null?void 0:l.timeRegion)==null?void 0:de.replace("_"," "))||"Asia/Manila",h.jsx("div",{style:{fontSize:"0.7rem",marginTop:"2px"},children:A((l==null?void 0:l.timeRegion)||"Asia/Manila")})]})]})]}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"Attendance Actions"}),h.jsxs(AN,{onClick:()=>o("In"),disabled:i||r==="In",children:[h.jsx(xn,{children:h.jsx(ty,{size:16})}),"Time In"]}),h.jsxs(PN,{onClick:()=>o("Out"),disabled:i||r==="Out"||!r,children:[h.jsx(xn,{children:h.jsx(Zc,{size:16})}),"Time Out"]}),r&&h.jsxs("div",{style:{padding:"0.5rem 0",textAlign:"center",fontSize:"0.85rem"},children:["Status: ",h.jsx("strong",{children:r==="In"?"Clocked In":"Clocked Out"})]})]}),h.jsxs(lr,{onClick:M,children:[h.jsx(xn,{children:h.jsx(Zc,{size:16})}),"Logout"]})]})]}),h.jsxs(RN,{children:[h.jsxs(bN,{children:[h.jsxs(jN,{children:[e==="dashboard"&&"Dashboard",e==="attendance"&&"Attendance",e==="schedule"&&"Schedule",e==="profile"&&"Profile",e==="registration_requests"&&"Registration Requests",e==="user_management"&&"User Management"]}),h.jsxs(DN,{children:[h.jsx(ON,{children:t==null?void 0:t.displayName}),h.jsxs(MN,{onClick:M,children:[h.jsx(Zc,{size:16}),"Logout"]})]})]}),h.jsx(NN,{children:f})]}),L&&h.jsx(VN,{children:h.jsxs(FN,{children:[h.jsxs(UN,{children:[h.jsx("h3",{children:"Change Time Region"}),h.jsx(zN,{onClick:()=>w(!1),children:"×"})]}),h.jsxs(WN,{children:[h.jsx("p",{style:{marginBottom:"1rem"},children:"Changing your time region will affect how times are displayed throughout the application and how your attendance is recorded."}),P&&h.jsxs("p",{style:{marginBottom:"1rem",backgroundColor:"#f0f7ff",padding:"0.5rem",borderRadius:"4px",fontSize:"0.9rem"},children:[h.jsx("strong",{children:"Detected device time zone:"})," ",P,h.jsxs("span",{style:{fontWeight:"normal"},children:["(",A(P),")"]}),P!==y&&h.jsx("button",{onClick:()=>g(P),style:{display:"block",marginTop:"0.5rem",padding:"0.25rem 0.5rem",fontSize:"0.8rem",backgroundColor:"#e6f0ff",border:"1px solid #bbd6fb",borderRadius:"4px",cursor:"pointer"},children:"Use device time zone"})]}),h.jsxs(E_,{children:[h.jsx(w_,{children:"Select Time Region"}),h.jsxs(BN,{value:y,onChange:ie=>g(ie.target.value),children:[h.jsx("optgroup",{label:"Asia",children:h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT, UTC+8)"})}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern, UTC-5/-4)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central, UTC-6/-5)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain, UTC-7/-6)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific, UTC-8/-7)"})]}),h.jsx("optgroup",{label:"Europe",children:h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST, UTC+0/+1)"})})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"Note: UTC offsets may vary during Daylight Saving Time transitions."})]}),h.jsxs(E_,{style:{marginTop:"1.5rem"},children:[h.jsxs(w_,{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(NI,{size:18}),"Time Format"]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"0.5rem"},children:[h.jsx(__,{active:!v,onClick:D,disabled:T,children:"12-hour (AM/PM)"}),h.jsx(__,{active:v,onClick:D,disabled:T,children:"24-hour"})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"This setting affects how time is displayed throughout the application."})]})]}),h.jsxs($N,{children:[h.jsx(x_,{onClick:()=>w(!1),children:"Cancel"}),h.jsx(x_,{primary:!0,onClick:b,disabled:E,children:E?"Updating...":"Save Changes"})]})]})})]})},pi=N.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1.5rem;
`,mi=N.h2`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1.25rem;
  margin: 0;
  border-bottom: 1px solid #eee;
`,gi=N.div`
  padding: 1.25rem;
`,HN=N.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,qN=N.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="In"?"#e8f5e9":t.status==="Out"?"#ffebee":t.status==="Late"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="In"?"#2e7d32":t.status==="Out"?"#c62828":t.status==="Late"?"#f57f17":"#757575"};
`;N.button`
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
`;N.div`
  margin-bottom: 1.5rem;
`;N.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;N.input`
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
`;N.select`
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
`;N.div`
  color: #d32f2f;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;N.div`
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
`;const YN=({attendanceStatus:t,lastRecord:e})=>h.jsx(h.Fragment,{children:h.jsxs(HN,{children:[h.jsxs(pi,{children:[h.jsx(mi,{children:"Today's Schedule"}),h.jsx(gi,{children:h.jsx("p",{children:"No schedule for today"})})]}),h.jsxs(pi,{children:[h.jsx(mi,{children:"Attendance Status"}),h.jsx(gi,{children:t?h.jsxs(h.Fragment,{children:[h.jsxs("p",{children:["Current Status:",h.jsx(qN,{status:t,children:t==="In"?"Clocked In":"Clocked Out"})]}),e&&h.jsxs("p",{children:["Last action: ",new Date(e.timestamp.toDate()).toLocaleString()]})]}):h.jsx("p",{children:"You haven't clocked in today"})})]}),h.jsxs(pi,{children:[h.jsx(mi,{children:"Recent Activity"}),h.jsx(gi,{children:e?h.jsxs("p",{children:["Last ",e.type==="In"?"Time In":"Time Out",": ",new Date(e.timestamp.toDate()).toLocaleString()]}):h.jsx("p",{children:"No recent activity"})})]})]})}),GN=N.table`
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
`,KN=N.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,T_=N.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`,QN=({user:t})=>{const[e,n]=j.useState([]),[r,i]=j.useState(!0),[o,s]=j.useState(null),{use24HourFormat:a}=ny();j.useEffect(()=>{const v=async()=>{if(t!=null&&t.uid)try{const L=await getDoc(doc(we,"users",t.uid));L.exists()&&s(L.data())}catch(L){console.error("Error fetching user data:",L)}},x=async()=>{if(t!=null&&t.uid)try{i(!0);const L=Mn(we,"attendance"),w=Pr(L,wi("userId","==",t.uid),P8("timestamp","desc")),y=await Jn(w),g=[];if(y.forEach(S=>{g.push({id:S.id,...S.data()})}),console.log("Raw attendance records:",g.length),g.length===0){n([]),i(!1);return}const E=l(g);console.log("Processed attendance records:",E.length),n(E)}catch(L){console.error("Error fetching attendance records:",L)}finally{i(!1)}};v(),x()},[t]);const l=v=>{const x={};v.forEach(w=>{if(!w.timestamp){console.log("Skipping record without timestamp:",w);return}try{const y=w.timestamp.toDate(),g=y.toISOString().split("T")[0];x[g]||(x[g]={date:y,day:f(w.timestamp),inRecord:null,outRecord:null}),w.type==="In"?x[g].inRecord=w:w.type==="Out"?x[g].outRecord=w:console.log("Record with unknown type:",w.type,w)}catch(y){console.error("Error processing record:",y,w)}});const L=Object.values(x).sort((w,y)=>y.date-w.date);return console.log("Processed records by date:",L),L},d=v=>{if(!v)return"N/A";if(v instanceof Date)return v.toLocaleDateString();try{return v.toDate().toLocaleDateString()}catch(x){return console.error("Error formatting date:",x,v),"Invalid Date"}},f=v=>{if(!v)return"N/A";try{const x=v instanceof Date?v:v.toDate();return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][x.getDay()]}catch(x){return console.error("Error getting day of week:",x,v),"Unknown"}},m=v=>{if(!v)return"N/A";try{return(v instanceof Date?v:v.toDate()).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!a})}catch(x){return console.error("Error formatting time:",x,v),"Invalid Time"}},_=(v,x)=>{if(!v||v.type!=="In")return"N/A";try{const L=v.timestamp.toDate(),w=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][L.getDay()];let y="On Time";const E=((o==null?void 0:o.schedule)||[]).find(S=>S.dayOfWeek===w);if(E&&E.timeIn){const[S,P]=E.timeIn.split(":").map(Number),O=new Date(L);O.setHours(S,P,0,0);const T=Math.round((L-O)/(1e3*60));T<-15?y="Early":T<=15?y="On Time":y="Late"}return y}catch(L){return console.error("Error calculating time-in status:",L,v),"On Time"}};return h.jsxs(pi,{children:[h.jsx(mi,{children:"Attendance Records"}),h.jsx(gi,{children:r?h.jsx("p",{children:"Loading attendance records..."}):e.length>0?h.jsxs(GN,{children:[h.jsxs("thead",{children:[h.jsxs("tr",{children:[h.jsx("th",{children:"Date"}),h.jsx("th",{children:"Day"}),h.jsx("th",{colSpan:"2",children:"IN"}),h.jsx("th",{colSpan:"2",children:"OUT"}),h.jsx("th",{children:"Notes"})]}),h.jsxs("tr",{children:[h.jsx("th",{}),h.jsx("th",{}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{})]})]}),h.jsx("tbody",{children:e.map((v,x)=>{var L,w,y,g;return h.jsxs("tr",{children:[h.jsx("td",{children:d(v.date)}),h.jsx("td",{children:v.day}),h.jsx("td",{children:v.inRecord?m(v.inRecord.timestamp):"-"}),h.jsx("td",{children:v.inRecord?h.jsx(T_,{status:_(v.inRecord,v.date),children:_(v.inRecord,v.date)}):"-"}),h.jsx("td",{children:v.outRecord?m(v.outRecord.timestamp):"-"}),h.jsx("td",{children:v.outRecord?h.jsx(T_,{status:"Complete",children:"Complete"}):"-"}),h.jsx("td",{children:(L=v.inRecord)!=null&&L.notes&&((w=v.outRecord)!=null&&w.notes)?h.jsxs(h.Fragment,{children:[h.jsx("strong",{children:"IN:"})," ",v.inRecord.notes,h.jsx("br",{}),h.jsx("strong",{children:"OUT:"})," ",v.outRecord.notes]}):(y=v.inRecord)!=null&&y.notes?v.inRecord.notes:(g=v.outRecord)!=null&&g.notes?v.outRecord.notes:"-"})]},x)})})]}):h.jsx(KN,{children:h.jsx("p",{children:"No attendance records found"})})})]})};function Xd(t){"@babel/helpers - typeof";return Xd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xd(t)}function Ti(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function Rt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function ir(t){Rt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||Xd(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function GI(t,e){Rt(2,arguments);var n=ir(t).getTime(),r=Ti(e);return new Date(n+r)}var ZN=36e5;function XN(t,e){Rt(2,arguments);var n=Ti(e);return GI(t,n*ZN)}var JN={};function of(){return JN}function e9(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function t9(t){return Rt(1,arguments),t instanceof Date||Xd(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function n9(t){if(Rt(1,arguments),!t9(t)&&typeof t!="number")return!1;var e=ir(t);return!isNaN(Number(e))}function r9(t,e){Rt(2,arguments);var n=Ti(e);return GI(t,-n)}var i9=864e5;function o9(t){Rt(1,arguments);var e=ir(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/i9)+1}function Jd(t){Rt(1,arguments);var e=1,n=ir(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function KI(t){Rt(1,arguments);var e=ir(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=Jd(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var s=Jd(o);return e.getTime()>=i.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function s9(t){Rt(1,arguments);var e=KI(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=Jd(n);return r}var a9=6048e5;function l9(t){Rt(1,arguments);var e=ir(t),n=Jd(e).getTime()-s9(e).getTime();return Math.round(n/a9)+1}function eh(t,e){var n,r,i,o,s,a,l,d;Rt(1,arguments);var f=of(),m=Ti((n=(r=(i=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:f.weekStartsOn)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&n!==void 0?n:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var _=ir(t),v=_.getUTCDay(),x=(v<m?7:0)+v-m;return _.setUTCDate(_.getUTCDate()-x),_.setUTCHours(0,0,0,0),_}function QI(t,e){var n,r,i,o,s,a,l,d;Rt(1,arguments);var f=ir(t),m=f.getUTCFullYear(),_=of(),v=Ti((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:_.firstWeekContainsDate)!==null&&r!==void 0?r:(l=_.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var x=new Date(0);x.setUTCFullYear(m+1,0,v),x.setUTCHours(0,0,0,0);var L=eh(x,e),w=new Date(0);w.setUTCFullYear(m,0,v),w.setUTCHours(0,0,0,0);var y=eh(w,e);return f.getTime()>=L.getTime()?m+1:f.getTime()>=y.getTime()?m:m-1}function u9(t,e){var n,r,i,o,s,a,l,d;Rt(1,arguments);var f=of(),m=Ti((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:f.firstWeekContainsDate)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1),_=QI(t,e),v=new Date(0);v.setUTCFullYear(_,0,m),v.setUTCHours(0,0,0,0);var x=eh(v,e);return x}var c9=6048e5;function d9(t,e){Rt(1,arguments);var n=ir(t),r=eh(n,e).getTime()-u9(n,e).getTime();return Math.round(r/c9)+1}function Le(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var Wr={y:function(e,n){var r=e.getUTCFullYear(),i=r>0?r:1-r;return Le(n==="yy"?i%100:i,n.length)},M:function(e,n){var r=e.getUTCMonth();return n==="M"?String(r+1):Le(r+1,2)},d:function(e,n){return Le(e.getUTCDate(),n.length)},a:function(e,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,n){return Le(e.getUTCHours()%12||12,n.length)},H:function(e,n){return Le(e.getUTCHours(),n.length)},m:function(e,n){return Le(e.getUTCMinutes(),n.length)},s:function(e,n){return Le(e.getUTCSeconds(),n.length)},S:function(e,n){var r=n.length,i=e.getUTCMilliseconds(),o=Math.floor(i*Math.pow(10,r-3));return Le(o,n.length)}},fs={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},h9={G:function(e,n,r){var i=e.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){var i=e.getUTCFullYear(),o=i>0?i:1-i;return r.ordinalNumber(o,{unit:"year"})}return Wr.y(e,n)},Y:function(e,n,r,i){var o=QI(e,i),s=o>0?o:1-o;if(n==="YY"){var a=s%100;return Le(a,2)}return n==="Yo"?r.ordinalNumber(s,{unit:"year"}):Le(s,n.length)},R:function(e,n){var r=KI(e);return Le(r,n.length)},u:function(e,n){var r=e.getUTCFullYear();return Le(r,n.length)},Q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return Le(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return Le(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,r){var i=e.getUTCMonth();switch(n){case"M":case"MM":return Wr.M(e,n);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,r){var i=e.getUTCMonth();switch(n){case"L":return String(i+1);case"LL":return Le(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var o=d9(e,i);return n==="wo"?r.ordinalNumber(o,{unit:"week"}):Le(o,n.length)},I:function(e,n,r){var i=l9(e);return n==="Io"?r.ordinalNumber(i,{unit:"week"}):Le(i,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):Wr.d(e,n)},D:function(e,n,r){var i=o9(e);return n==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):Le(i,n.length)},E:function(e,n,r){var i=e.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(s);case"ee":return Le(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(s);case"cc":return Le(s,n.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(e,n,r){var i=e.getUTCDay(),o=i===0?7:i;switch(n){case"i":return String(o);case"ii":return Le(o,n.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,r){var i=e.getUTCHours(),o=i/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,n,r){var i=e.getUTCHours(),o;switch(i===12?o=fs.noon:i===0?o=fs.midnight:o=i/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,n,r){var i=e.getUTCHours(),o;switch(i>=17?o=fs.evening:i>=12?o=fs.afternoon:i>=4?o=fs.morning:o=fs.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Wr.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):Wr.H(e,n)},K:function(e,n,r){var i=e.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(i,{unit:"hour"}):Le(i,n.length)},k:function(e,n,r){var i=e.getUTCHours();return i===0&&(i=24),n==="ko"?r.ordinalNumber(i,{unit:"hour"}):Le(i,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):Wr.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):Wr.s(e,n)},S:function(e,n){return Wr.S(e,n)},X:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();if(s===0)return"Z";switch(n){case"X":return S_(s);case"XXXX":case"XX":return zi(s);case"XXXXX":case"XXX":default:return zi(s,":")}},x:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"x":return S_(s);case"xxxx":case"xx":return zi(s);case"xxxxx":case"xxx":default:return zi(s,":")}},O:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+I_(s,":");case"OOOO":default:return"GMT"+zi(s,":")}},z:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+I_(s,":");case"zzzz":default:return"GMT"+zi(s,":")}},t:function(e,n,r,i){var o=i._originalDate||e,s=Math.floor(o.getTime()/1e3);return Le(s,n.length)},T:function(e,n,r,i){var o=i._originalDate||e,s=o.getTime();return Le(s,n.length)}};function I_(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+Le(o,2)}function S_(t,e){if(t%60===0){var n=t>0?"-":"+";return n+Le(Math.abs(t)/60,2)}return zi(t,e)}function zi(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=Le(Math.floor(i/60),2),s=Le(i%60,2);return r+o+n+s}var L_=function(e,n){switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},ZI=function(e,n){switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},f9=function(e,n){var r=e.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return L_(e,n);var s;switch(i){case"P":s=n.dateTime({width:"short"});break;case"PP":s=n.dateTime({width:"medium"});break;case"PPP":s=n.dateTime({width:"long"});break;case"PPPP":default:s=n.dateTime({width:"full"});break}return s.replace("{{date}}",L_(i,n)).replace("{{time}}",ZI(o,n))},p9={p:ZI,P:f9},m9=["D","DD"],g9=["YY","YYYY"];function y9(t){return m9.indexOf(t)!==-1}function v9(t){return g9.indexOf(t)!==-1}function C_(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var k9={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},_9=function(e,n,r){var i,o=k9[e];return typeof o=="string"?i=o:n===1?i=o.one:i=o.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function xp(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var E9={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},w9={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},x9={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},T9={date:xp({formats:E9,defaultWidth:"full"}),time:xp({formats:w9,defaultWidth:"full"}),dateTime:xp({formats:x9,defaultWidth:"full"})},I9={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},S9=function(e,n,r,i){return I9[e]};function Xa(t){return function(e,n){var r=n!=null&&n.context?String(n.context):"standalone",i;if(r==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,s=n!=null&&n.width?String(n.width):o;i=t.formattingValues[s]||t.formattingValues[o]}else{var a=t.defaultWidth,l=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[l]||t.values[a]}var d=t.argumentCallback?t.argumentCallback(e):e;return i[d]}}var L9={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},C9={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},A9={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},P9={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},R9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},b9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},j9=function(e,n){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},D9={ordinalNumber:j9,era:Xa({values:L9,defaultWidth:"wide"}),quarter:Xa({values:C9,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Xa({values:A9,defaultWidth:"wide"}),day:Xa({values:P9,defaultWidth:"wide"}),dayPeriod:Xa({values:R9,defaultWidth:"wide",formattingValues:b9,defaultFormattingWidth:"wide"})};function Ja(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;var s=o[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?M9(a,function(m){return m.test(s)}):O9(a,function(m){return m.test(s)}),d;d=t.valueCallback?t.valueCallback(l):l,d=n.valueCallback?n.valueCallback(d):d;var f=e.slice(s.length);return{value:d,rest:f}}}function O9(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function M9(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function N9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],o=e.match(t.parsePattern);if(!o)return null;var s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;var a=e.slice(i.length);return{value:s,rest:a}}}var V9=/^(\d+)(th|st|nd|rd)?/i,F9=/\d+/i,U9={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},W9={any:[/^b/i,/^(a|c)/i]},$9={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},z9={any:[/1/i,/2/i,/3/i,/4/i]},B9={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},H9={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},q9={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Y9={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},G9={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},K9={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Q9={ordinalNumber:N9({matchPattern:V9,parsePattern:F9,valueCallback:function(e){return parseInt(e,10)}}),era:Ja({matchPatterns:U9,defaultMatchWidth:"wide",parsePatterns:W9,defaultParseWidth:"any"}),quarter:Ja({matchPatterns:$9,defaultMatchWidth:"wide",parsePatterns:z9,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Ja({matchPatterns:B9,defaultMatchWidth:"wide",parsePatterns:H9,defaultParseWidth:"any"}),day:Ja({matchPatterns:q9,defaultMatchWidth:"wide",parsePatterns:Y9,defaultParseWidth:"any"}),dayPeriod:Ja({matchPatterns:G9,defaultMatchWidth:"any",parsePatterns:K9,defaultParseWidth:"any"})},Z9={code:"en-US",formatDistance:_9,formatLong:T9,formatRelative:S9,localize:D9,match:Q9,options:{weekStartsOn:0,firstWeekContainsDate:1}},X9=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,J9=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,e7=/^'([^]*?)'?$/,t7=/''/g,n7=/[a-zA-Z]/;function r7(t,e,n){var r,i,o,s,a,l,d,f,m,_,v,x,L,w;Rt(2,arguments);var y=String(e),g=of(),E=(r=(i=void 0)!==null&&i!==void 0?i:g.locale)!==null&&r!==void 0?r:Z9,S=Ti((o=(s=(a=(l=void 0)!==null&&l!==void 0?l:void 0)!==null&&a!==void 0?a:g.firstWeekContainsDate)!==null&&s!==void 0?s:(d=g.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(S>=1&&S<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=Ti((m=(_=(v=(x=void 0)!==null&&x!==void 0?x:void 0)!==null&&v!==void 0?v:g.weekStartsOn)!==null&&_!==void 0?_:(L=g.locale)===null||L===void 0||(w=L.options)===null||w===void 0?void 0:w.weekStartsOn)!==null&&m!==void 0?m:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!E.localize)throw new RangeError("locale must contain localize property");if(!E.formatLong)throw new RangeError("locale must contain formatLong property");var O=ir(t);if(!n9(O))throw new RangeError("Invalid time value");var T=e9(O),I=r9(O,T),A={firstWeekContainsDate:S,weekStartsOn:P,locale:E,_originalDate:O},b=y.match(J9).map(function(D){var M=D[0];if(M==="p"||M==="P"){var R=p9[M];return R(D,E.formatLong)}return D}).join("").match(X9).map(function(D){if(D==="''")return"'";var M=D[0];if(M==="'")return i7(D);var R=h9[M];if(R)return v9(D)&&C_(D,e,String(t)),y9(D)&&C_(D,e,String(t)),R(I,D,E.localize,A);if(M.match(n7))throw new RangeError("Format string contains an unescaped latin alphabet character `"+M+"`");return D}).join("");return b}function i7(t){var e=t.match(e7);return e?e[1].replace(t7,"'"):t}var g0={exports:{}},XI={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(XI);var ze=XI.exports,y0={exports:{}},v0={exports:{}},JI={exports:{}};(function(t){function e(n){"@babel/helpers - typeof";return t.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(JI);var e6=JI.exports,k0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(i.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+i.length+" present")}t.exports=e.default})(k0,k0.exports);var Wt=k0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(e6),i=n(Wt);function o(s){return(0,i.default)(1,arguments),s instanceof Date||(0,r.default)(s)==="object"&&Object.prototype.toString.call(s)==="[object Date]"}t.exports=e.default})(v0,v0.exports);var o7=v0.exports,_0={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(e6),i=n(Wt);function o(s){(0,i.default)(1,arguments);var a=Object.prototype.toString.call(s);return s instanceof Date||(0,r.default)(s)==="object"&&a==="[object Date]"?new Date(s.getTime()):typeof s=="number"||a==="[object Number]"?new Date(s):((typeof s=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}t.exports=e.default})(_0,_0.exports);var or=_0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(o7),i=n(or),o=n(Wt);function s(a){if((0,o.default)(1,arguments),!(0,r.default)(a)&&typeof a!="number")return!1;var l=(0,i.default)(a);return!isNaN(Number(l))}t.exports=e.default})(y0,y0.exports);var s7=y0.exports,E0={exports:{}},w0={exports:{}},x0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){if(r===null||r===!0||r===!1)return NaN;var i=Number(r);return isNaN(i)?i:i<0?Math.ceil(i):Math.floor(i)}t.exports=e.default})(x0,x0.exports);var ts=x0.exports;const a7=cu(ts);(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(ts),i=n(or),o=n(Wt);function s(a,l){(0,o.default)(2,arguments);var d=(0,i.default)(a).getTime(),f=(0,r.default)(l);return new Date(d+f)}t.exports=e.default})(w0,w0.exports);var l7=w0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(l7),i=n(Wt),o=n(ts);function s(a,l){(0,i.default)(2,arguments);var d=(0,o.default)(l);return(0,r.default)(a,-d)}t.exports=e.default})(E0,E0.exports);var u7=E0.exports,T0={exports:{}},I0={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(or),i=n(Wt),o=864e5;function s(a){(0,i.default)(1,arguments);var l=(0,r.default)(a),d=l.getTime();l.setUTCMonth(0,1),l.setUTCHours(0,0,0,0);var f=l.getTime(),m=d-f;return Math.floor(m/o)+1}t.exports=e.default})(I0,I0.exports);var c7=I0.exports,S0={exports:{}},L0={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(or),i=n(Wt);function o(s){(0,i.default)(1,arguments);var a=1,l=(0,r.default)(s),d=l.getUTCDay(),f=(d<a?7:0)+d-a;return l.setUTCDate(l.getUTCDate()-f),l.setUTCHours(0,0,0,0),l}t.exports=e.default})(L0,L0.exports);var ry=L0.exports,C0={exports:{}},A0={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(or),i=n(Wt),o=n(ry);function s(a){(0,i.default)(1,arguments);var l=(0,r.default)(a),d=l.getUTCFullYear(),f=new Date(0);f.setUTCFullYear(d+1,0,4),f.setUTCHours(0,0,0,0);var m=(0,o.default)(f),_=new Date(0);_.setUTCFullYear(d,0,4),_.setUTCHours(0,0,0,0);var v=(0,o.default)(_);return l.getTime()>=m.getTime()?d+1:l.getTime()>=v.getTime()?d:d-1}t.exports=e.default})(A0,A0.exports);var t6=A0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(t6),i=n(ry),o=n(Wt);function s(a){(0,o.default)(1,arguments);var l=(0,r.default)(a),d=new Date(0);d.setUTCFullYear(l,0,4),d.setUTCHours(0,0,0,0);var f=(0,i.default)(d);return f}t.exports=e.default})(C0,C0.exports);var d7=C0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(or),i=n(ry),o=n(d7),s=n(Wt),a=6048e5;function l(d){(0,s.default)(1,arguments);var f=(0,r.default)(d),m=(0,i.default)(f).getTime()-(0,o.default)(f).getTime();return Math.round(m/a)+1}t.exports=e.default})(S0,S0.exports);var h7=S0.exports,P0={exports:{}},R0={exports:{}},ns={};Object.defineProperty(ns,"__esModule",{value:!0});ns.getDefaultOptions=f7;ns.setDefaultOptions=p7;var n6={};function f7(){return n6}function p7(t){n6=t}(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=n(or),i=n(Wt),o=n(ts),s=ns;function a(l,d){var f,m,_,v,x,L,w,y;(0,i.default)(1,arguments);var g=(0,s.getDefaultOptions)(),E=(0,o.default)((f=(m=(_=(v=d==null?void 0:d.weekStartsOn)!==null&&v!==void 0?v:d==null||(x=d.locale)===null||x===void 0||(L=x.options)===null||L===void 0?void 0:L.weekStartsOn)!==null&&_!==void 0?_:g.weekStartsOn)!==null&&m!==void 0?m:(w=g.locale)===null||w===void 0||(y=w.options)===null||y===void 0?void 0:y.weekStartsOn)!==null&&f!==void 0?f:0);if(!(E>=0&&E<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var S=(0,r.default)(l),P=S.getUTCDay(),O=(P<E?7:0)+P-E;return S.setUTCDate(S.getUTCDate()-O),S.setUTCHours(0,0,0,0),S}t.exports=e.default})(R0,R0.exports);var iy=R0.exports,b0={exports:{}},j0={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(or),i=n(Wt),o=n(iy),s=n(ts),a=ns;function l(d,f){var m,_,v,x,L,w,y,g;(0,i.default)(1,arguments);var E=(0,r.default)(d),S=E.getUTCFullYear(),P=(0,a.getDefaultOptions)(),O=(0,s.default)((m=(_=(v=(x=f==null?void 0:f.firstWeekContainsDate)!==null&&x!==void 0?x:f==null||(L=f.locale)===null||L===void 0||(w=L.options)===null||w===void 0?void 0:w.firstWeekContainsDate)!==null&&v!==void 0?v:P.firstWeekContainsDate)!==null&&_!==void 0?_:(y=P.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1);if(!(O>=1&&O<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var T=new Date(0);T.setUTCFullYear(S+1,0,O),T.setUTCHours(0,0,0,0);var I=(0,o.default)(T,f),A=new Date(0);A.setUTCFullYear(S,0,O),A.setUTCHours(0,0,0,0);var b=(0,o.default)(A,f);return E.getTime()>=I.getTime()?S+1:E.getTime()>=b.getTime()?S:S-1}t.exports=e.default})(j0,j0.exports);var r6=j0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(r6),i=n(Wt),o=n(iy),s=n(ts),a=ns;function l(d,f){var m,_,v,x,L,w,y,g;(0,i.default)(1,arguments);var E=(0,a.getDefaultOptions)(),S=(0,s.default)((m=(_=(v=(x=f==null?void 0:f.firstWeekContainsDate)!==null&&x!==void 0?x:f==null||(L=f.locale)===null||L===void 0||(w=L.options)===null||w===void 0?void 0:w.firstWeekContainsDate)!==null&&v!==void 0?v:E.firstWeekContainsDate)!==null&&_!==void 0?_:(y=E.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1),P=(0,r.default)(d,f),O=new Date(0);O.setUTCFullYear(P,0,S),O.setUTCHours(0,0,0,0);var T=(0,o.default)(O,f);return T}t.exports=e.default})(b0,b0.exports);var m7=b0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(or),i=n(iy),o=n(m7),s=n(Wt),a=6048e5;function l(d,f){(0,s.default)(1,arguments);var m=(0,r.default)(d),_=(0,i.default)(m,f).getTime()-(0,o.default)(m,f).getTime();return Math.round(_/a)+1}t.exports=e.default})(P0,P0.exports);var g7=P0.exports,D0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){for(var o=r<0?"-":"",s=Math.abs(r).toString();s.length<i;)s="0"+s;return o+s}t.exports=e.default})(D0,D0.exports);var i6=D0.exports,O0={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i6),i={y:function(a,l){var d=a.getUTCFullYear(),f=d>0?d:1-d;return(0,r.default)(l==="yy"?f%100:f,l.length)},M:function(a,l){var d=a.getUTCMonth();return l==="M"?String(d+1):(0,r.default)(d+1,2)},d:function(a,l){return(0,r.default)(a.getUTCDate(),l.length)},a:function(a,l){var d=a.getUTCHours()/12>=1?"pm":"am";switch(l){case"a":case"aa":return d.toUpperCase();case"aaa":return d;case"aaaaa":return d[0];case"aaaa":default:return d==="am"?"a.m.":"p.m."}},h:function(a,l){return(0,r.default)(a.getUTCHours()%12||12,l.length)},H:function(a,l){return(0,r.default)(a.getUTCHours(),l.length)},m:function(a,l){return(0,r.default)(a.getUTCMinutes(),l.length)},s:function(a,l){return(0,r.default)(a.getUTCSeconds(),l.length)},S:function(a,l){var d=l.length,f=a.getUTCMilliseconds(),m=Math.floor(f*Math.pow(10,d-3));return(0,r.default)(m,l.length)}},o=i;e.default=o,t.exports=e.default})(O0,O0.exports);var y7=O0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(c7),i=n(h7),o=n(t6),s=n(g7),a=n(r6),l=n(i6),d=n(y7),f={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},m={G:function(y,g,E){var S=y.getUTCFullYear()>0?1:0;switch(g){case"G":case"GG":case"GGG":return E.era(S,{width:"abbreviated"});case"GGGGG":return E.era(S,{width:"narrow"});case"GGGG":default:return E.era(S,{width:"wide"})}},y:function(y,g,E){if(g==="yo"){var S=y.getUTCFullYear(),P=S>0?S:1-S;return E.ordinalNumber(P,{unit:"year"})}return d.default.y(y,g)},Y:function(y,g,E,S){var P=(0,a.default)(y,S),O=P>0?P:1-P;if(g==="YY"){var T=O%100;return(0,l.default)(T,2)}return g==="Yo"?E.ordinalNumber(O,{unit:"year"}):(0,l.default)(O,g.length)},R:function(y,g){var E=(0,o.default)(y);return(0,l.default)(E,g.length)},u:function(y,g){var E=y.getUTCFullYear();return(0,l.default)(E,g.length)},Q:function(y,g,E){var S=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"Q":return String(S);case"QQ":return(0,l.default)(S,2);case"Qo":return E.ordinalNumber(S,{unit:"quarter"});case"QQQ":return E.quarter(S,{width:"abbreviated",context:"formatting"});case"QQQQQ":return E.quarter(S,{width:"narrow",context:"formatting"});case"QQQQ":default:return E.quarter(S,{width:"wide",context:"formatting"})}},q:function(y,g,E){var S=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"q":return String(S);case"qq":return(0,l.default)(S,2);case"qo":return E.ordinalNumber(S,{unit:"quarter"});case"qqq":return E.quarter(S,{width:"abbreviated",context:"standalone"});case"qqqqq":return E.quarter(S,{width:"narrow",context:"standalone"});case"qqqq":default:return E.quarter(S,{width:"wide",context:"standalone"})}},M:function(y,g,E){var S=y.getUTCMonth();switch(g){case"M":case"MM":return d.default.M(y,g);case"Mo":return E.ordinalNumber(S+1,{unit:"month"});case"MMM":return E.month(S,{width:"abbreviated",context:"formatting"});case"MMMMM":return E.month(S,{width:"narrow",context:"formatting"});case"MMMM":default:return E.month(S,{width:"wide",context:"formatting"})}},L:function(y,g,E){var S=y.getUTCMonth();switch(g){case"L":return String(S+1);case"LL":return(0,l.default)(S+1,2);case"Lo":return E.ordinalNumber(S+1,{unit:"month"});case"LLL":return E.month(S,{width:"abbreviated",context:"standalone"});case"LLLLL":return E.month(S,{width:"narrow",context:"standalone"});case"LLLL":default:return E.month(S,{width:"wide",context:"standalone"})}},w:function(y,g,E,S){var P=(0,s.default)(y,S);return g==="wo"?E.ordinalNumber(P,{unit:"week"}):(0,l.default)(P,g.length)},I:function(y,g,E){var S=(0,i.default)(y);return g==="Io"?E.ordinalNumber(S,{unit:"week"}):(0,l.default)(S,g.length)},d:function(y,g,E){return g==="do"?E.ordinalNumber(y.getUTCDate(),{unit:"date"}):d.default.d(y,g)},D:function(y,g,E){var S=(0,r.default)(y);return g==="Do"?E.ordinalNumber(S,{unit:"dayOfYear"}):(0,l.default)(S,g.length)},E:function(y,g,E){var S=y.getUTCDay();switch(g){case"E":case"EE":case"EEE":return E.day(S,{width:"abbreviated",context:"formatting"});case"EEEEE":return E.day(S,{width:"narrow",context:"formatting"});case"EEEEEE":return E.day(S,{width:"short",context:"formatting"});case"EEEE":default:return E.day(S,{width:"wide",context:"formatting"})}},e:function(y,g,E,S){var P=y.getUTCDay(),O=(P-S.weekStartsOn+8)%7||7;switch(g){case"e":return String(O);case"ee":return(0,l.default)(O,2);case"eo":return E.ordinalNumber(O,{unit:"day"});case"eee":return E.day(P,{width:"abbreviated",context:"formatting"});case"eeeee":return E.day(P,{width:"narrow",context:"formatting"});case"eeeeee":return E.day(P,{width:"short",context:"formatting"});case"eeee":default:return E.day(P,{width:"wide",context:"formatting"})}},c:function(y,g,E,S){var P=y.getUTCDay(),O=(P-S.weekStartsOn+8)%7||7;switch(g){case"c":return String(O);case"cc":return(0,l.default)(O,g.length);case"co":return E.ordinalNumber(O,{unit:"day"});case"ccc":return E.day(P,{width:"abbreviated",context:"standalone"});case"ccccc":return E.day(P,{width:"narrow",context:"standalone"});case"cccccc":return E.day(P,{width:"short",context:"standalone"});case"cccc":default:return E.day(P,{width:"wide",context:"standalone"})}},i:function(y,g,E){var S=y.getUTCDay(),P=S===0?7:S;switch(g){case"i":return String(P);case"ii":return(0,l.default)(P,g.length);case"io":return E.ordinalNumber(P,{unit:"day"});case"iii":return E.day(S,{width:"abbreviated",context:"formatting"});case"iiiii":return E.day(S,{width:"narrow",context:"formatting"});case"iiiiii":return E.day(S,{width:"short",context:"formatting"});case"iiii":default:return E.day(S,{width:"wide",context:"formatting"})}},a:function(y,g,E){var S=y.getUTCHours(),P=S/12>=1?"pm":"am";switch(g){case"a":case"aa":return E.dayPeriod(P,{width:"abbreviated",context:"formatting"});case"aaa":return E.dayPeriod(P,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return E.dayPeriod(P,{width:"narrow",context:"formatting"});case"aaaa":default:return E.dayPeriod(P,{width:"wide",context:"formatting"})}},b:function(y,g,E){var S=y.getUTCHours(),P;switch(S===12?P=f.noon:S===0?P=f.midnight:P=S/12>=1?"pm":"am",g){case"b":case"bb":return E.dayPeriod(P,{width:"abbreviated",context:"formatting"});case"bbb":return E.dayPeriod(P,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return E.dayPeriod(P,{width:"narrow",context:"formatting"});case"bbbb":default:return E.dayPeriod(P,{width:"wide",context:"formatting"})}},B:function(y,g,E){var S=y.getUTCHours(),P;switch(S>=17?P=f.evening:S>=12?P=f.afternoon:S>=4?P=f.morning:P=f.night,g){case"B":case"BB":case"BBB":return E.dayPeriod(P,{width:"abbreviated",context:"formatting"});case"BBBBB":return E.dayPeriod(P,{width:"narrow",context:"formatting"});case"BBBB":default:return E.dayPeriod(P,{width:"wide",context:"formatting"})}},h:function(y,g,E){if(g==="ho"){var S=y.getUTCHours()%12;return S===0&&(S=12),E.ordinalNumber(S,{unit:"hour"})}return d.default.h(y,g)},H:function(y,g,E){return g==="Ho"?E.ordinalNumber(y.getUTCHours(),{unit:"hour"}):d.default.H(y,g)},K:function(y,g,E){var S=y.getUTCHours()%12;return g==="Ko"?E.ordinalNumber(S,{unit:"hour"}):(0,l.default)(S,g.length)},k:function(y,g,E){var S=y.getUTCHours();return S===0&&(S=24),g==="ko"?E.ordinalNumber(S,{unit:"hour"}):(0,l.default)(S,g.length)},m:function(y,g,E){return g==="mo"?E.ordinalNumber(y.getUTCMinutes(),{unit:"minute"}):d.default.m(y,g)},s:function(y,g,E){return g==="so"?E.ordinalNumber(y.getUTCSeconds(),{unit:"second"}):d.default.s(y,g)},S:function(y,g){return d.default.S(y,g)},X:function(y,g,E,S){var P=S._originalDate||y,O=P.getTimezoneOffset();if(O===0)return"Z";switch(g){case"X":return v(O);case"XXXX":case"XX":return x(O);case"XXXXX":case"XXX":default:return x(O,":")}},x:function(y,g,E,S){var P=S._originalDate||y,O=P.getTimezoneOffset();switch(g){case"x":return v(O);case"xxxx":case"xx":return x(O);case"xxxxx":case"xxx":default:return x(O,":")}},O:function(y,g,E,S){var P=S._originalDate||y,O=P.getTimezoneOffset();switch(g){case"O":case"OO":case"OOO":return"GMT"+_(O,":");case"OOOO":default:return"GMT"+x(O,":")}},z:function(y,g,E,S){var P=S._originalDate||y,O=P.getTimezoneOffset();switch(g){case"z":case"zz":case"zzz":return"GMT"+_(O,":");case"zzzz":default:return"GMT"+x(O,":")}},t:function(y,g,E,S){var P=S._originalDate||y,O=Math.floor(P.getTime()/1e3);return(0,l.default)(O,g.length)},T:function(y,g,E,S){var P=S._originalDate||y,O=P.getTime();return(0,l.default)(O,g.length)}};function _(w,y){var g=w>0?"-":"+",E=Math.abs(w),S=Math.floor(E/60),P=E%60;if(P===0)return g+String(S);var O=y;return g+String(S)+O+(0,l.default)(P,2)}function v(w,y){if(w%60===0){var g=w>0?"-":"+";return g+(0,l.default)(Math.abs(w)/60,2)}return x(w,y)}function x(w,y){var g=y||"",E=w>0?"-":"+",S=Math.abs(w),P=(0,l.default)(Math.floor(S/60),2),O=(0,l.default)(S%60,2);return E+P+g+O}var L=m;e.default=L,t.exports=e.default})(T0,T0.exports);var v7=T0.exports,M0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(l,d){switch(l){case"P":return d.date({width:"short"});case"PP":return d.date({width:"medium"});case"PPP":return d.date({width:"long"});case"PPPP":default:return d.date({width:"full"})}},r=function(l,d){switch(l){case"p":return d.time({width:"short"});case"pp":return d.time({width:"medium"});case"ppp":return d.time({width:"long"});case"pppp":default:return d.time({width:"full"})}},i=function(l,d){var f=l.match(/(P+)(p+)?/)||[],m=f[1],_=f[2];if(!_)return n(l,d);var v;switch(m){case"P":v=d.dateTime({width:"short"});break;case"PP":v=d.dateTime({width:"medium"});break;case"PPP":v=d.dateTime({width:"long"});break;case"PPPP":default:v=d.dateTime({width:"full"});break}return v.replace("{{date}}",n(m,d)).replace("{{time}}",r(_,d))},o={p:r,P:i},s=o;e.default=s,t.exports=e.default})(M0,M0.exports);var k7=M0.exports,N0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){var i=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return i.setUTCFullYear(r.getFullYear()),r.getTime()-i.getTime()}t.exports=e.default})(N0,N0.exports);var o6=N0.exports;const A_=cu(o6);var Pu={};Object.defineProperty(Pu,"__esModule",{value:!0});Pu.isProtectedDayOfYearToken=w7;Pu.isProtectedWeekYearToken=x7;Pu.throwProtectedError=T7;var _7=["D","DD"],E7=["YY","YYYY"];function w7(t){return _7.indexOf(t)!==-1}function x7(t){return E7.indexOf(t)!==-1}function T7(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var V0={exports:{}},F0={exports:{}},U0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},r=function(s,a,l){var d,f=n[s];return typeof f=="string"?d=f:a===1?d=f.one:d=f.other.replace("{{count}}",a.toString()),l!=null&&l.addSuffix?l.comparison&&l.comparison>0?"in "+d:d+" ago":d},i=r;e.default=i,t.exports=e.default})(U0,U0.exports);var I7=U0.exports,W0={exports:{}},$0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.width?String(i.width):r.defaultWidth,s=r.formats[o]||r.formats[r.defaultWidth];return s}}t.exports=e.default})($0,$0.exports);var S7=$0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(S7),i={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},o={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},s={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},a={date:(0,r.default)({formats:i,defaultWidth:"full"}),time:(0,r.default)({formats:o,defaultWidth:"full"}),dateTime:(0,r.default)({formats:s,defaultWidth:"full"})},l=a;e.default=l,t.exports=e.default})(W0,W0.exports);var L7=W0.exports,z0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},r=function(s,a,l,d){return n[s]},i=r;e.default=i,t.exports=e.default})(z0,z0.exports);var C7=z0.exports,B0={exports:{}},H0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i,o){var s=o!=null&&o.context?String(o.context):"standalone",a;if(s==="formatting"&&r.formattingValues){var l=r.defaultFormattingWidth||r.defaultWidth,d=o!=null&&o.width?String(o.width):l;a=r.formattingValues[d]||r.formattingValues[l]}else{var f=r.defaultWidth,m=o!=null&&o.width?String(o.width):r.defaultWidth;a=r.values[m]||r.values[f]}var _=r.argumentCallback?r.argumentCallback(i):i;return a[_]}}t.exports=e.default})(H0,H0.exports);var A7=H0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(A7),i={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},o={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},s={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},a={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},l={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},d={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},f=function(x,L){var w=Number(x),y=w%100;if(y>20||y<10)switch(y%10){case 1:return w+"st";case 2:return w+"nd";case 3:return w+"rd"}return w+"th"},m={ordinalNumber:f,era:(0,r.default)({values:i,defaultWidth:"wide"}),quarter:(0,r.default)({values:o,defaultWidth:"wide",argumentCallback:function(x){return x-1}}),month:(0,r.default)({values:s,defaultWidth:"wide"}),day:(0,r.default)({values:a,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:l,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"})},_=m;e.default=_,t.exports=e.default})(B0,B0.exports);var P7=B0.exports,q0={exports:{}},Y0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(o){return function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.width,d=l&&o.matchPatterns[l]||o.matchPatterns[o.defaultMatchWidth],f=s.match(d);if(!f)return null;var m=f[0],_=l&&o.parsePatterns[l]||o.parsePatterns[o.defaultParseWidth],v=Array.isArray(_)?i(_,function(w){return w.test(m)}):r(_,function(w){return w.test(m)}),x;x=o.valueCallback?o.valueCallback(v):v,x=a.valueCallback?a.valueCallback(x):x;var L=s.slice(m.length);return{value:x,rest:L}}}function r(o,s){for(var a in o)if(o.hasOwnProperty(a)&&s(o[a]))return a}function i(o,s){for(var a=0;a<o.length;a++)if(s(o[a]))return a}t.exports=e.default})(Y0,Y0.exports);var R7=Y0.exports,G0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.match(r.matchPattern);if(!s)return null;var a=s[0],l=i.match(r.parsePattern);if(!l)return null;var d=r.valueCallback?r.valueCallback(l[0]):l[0];d=o.valueCallback?o.valueCallback(d):d;var f=i.slice(a.length);return{value:d,rest:f}}}t.exports=e.default})(G0,G0.exports);var b7=G0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(R7),i=n(b7),o=/^(\d+)(th|st|nd|rd)?/i,s=/\d+/i,a={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},l={any:[/^b/i,/^(a|c)/i]},d={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},f={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},_={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},v={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},x={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},L={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},w={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},y={ordinalNumber:(0,i.default)({matchPattern:o,parsePattern:s,valueCallback:function(S){return parseInt(S,10)}}),era:(0,r.default)({matchPatterns:a,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(S){return S+1}}),month:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:_,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:v,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:L,defaultMatchWidth:"any",parsePatterns:w,defaultParseWidth:"any"})},g=y;e.default=g,t.exports=e.default})(q0,q0.exports);var j7=q0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(I7),i=n(L7),o=n(C7),s=n(P7),a=n(j7),l={code:"en-US",formatDistance:r.default,formatLong:i.default,formatRelative:o.default,localize:s.default,match:a.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},d=l;e.default=d,t.exports=e.default})(F0,F0.exports);var D7=F0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(D7),i=r.default;e.default=i,t.exports=e.default})(V0,V0.exports);var O7=V0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=E;var r=n(s7),i=n(u7),o=n(or),s=n(v7),a=n(k7),l=n(o6),d=Pu,f=n(ts),m=n(Wt),_=ns,v=n(O7),x=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,L=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,w=/^'([^]*?)'?$/,y=/''/g,g=/[a-zA-Z]/;function E(P,O,T){var I,A,b,D,M,R,de,ie,ye,Ee,B,G,Z,ce,re,me,Ye,Be;(0,m.default)(2,arguments);var Ge=String(O),F=(0,_.getDefaultOptions)(),oe=(I=(A=T==null?void 0:T.locale)!==null&&A!==void 0?A:F.locale)!==null&&I!==void 0?I:v.default,se=(0,f.default)((b=(D=(M=(R=T==null?void 0:T.firstWeekContainsDate)!==null&&R!==void 0?R:T==null||(de=T.locale)===null||de===void 0||(ie=de.options)===null||ie===void 0?void 0:ie.firstWeekContainsDate)!==null&&M!==void 0?M:F.firstWeekContainsDate)!==null&&D!==void 0?D:(ye=F.locale)===null||ye===void 0||(Ee=ye.options)===null||Ee===void 0?void 0:Ee.firstWeekContainsDate)!==null&&b!==void 0?b:1);if(!(se>=1&&se<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var ae=(0,f.default)((B=(G=(Z=(ce=T==null?void 0:T.weekStartsOn)!==null&&ce!==void 0?ce:T==null||(re=T.locale)===null||re===void 0||(me=re.options)===null||me===void 0?void 0:me.weekStartsOn)!==null&&Z!==void 0?Z:F.weekStartsOn)!==null&&G!==void 0?G:(Ye=F.locale)===null||Ye===void 0||(Be=Ye.options)===null||Be===void 0?void 0:Be.weekStartsOn)!==null&&B!==void 0?B:0);if(!(ae>=0&&ae<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!oe.localize)throw new RangeError("locale must contain localize property");if(!oe.formatLong)throw new RangeError("locale must contain formatLong property");var ue=(0,o.default)(P);if(!(0,r.default)(ue))throw new RangeError("Invalid time value");var Se=(0,l.default)(ue),rs=(0,i.default)(ue,Se),Sa={firstWeekContainsDate:se,weekStartsOn:ae,locale:oe,_originalDate:ue},La=Ge.match(L).map(function(vt){var Nn=vt[0];if(Nn==="p"||Nn==="P"){var is=a.default[Nn];return is(vt,oe.formatLong)}return vt}).join("").match(x).map(function(vt){if(vt==="''")return"'";var Nn=vt[0];if(Nn==="'")return S(vt);var is=s.default[Nn];if(is)return!(T!=null&&T.useAdditionalWeekYearTokens)&&(0,d.isProtectedWeekYearToken)(vt)&&(0,d.throwProtectedError)(vt,O,String(P)),!(T!=null&&T.useAdditionalDayOfYearTokens)&&(0,d.isProtectedDayOfYearToken)(vt)&&(0,d.throwProtectedError)(vt,O,String(P)),is(rs,vt,oe.localize,Sa);if(Nn.match(g))throw new RangeError("Format string contains an unescaped latin alphabet character `"+Nn+"`");return vt}).join("");return La}function S(P){var O=P.match(w);return O?O[1].replace(y,"'"):P}t.exports=e.default})(g0,g0.exports);var M7=g0.exports;const N7=cu(M7);function P_(t,e,n){var r=U7(t,n.timeZone,n.locale);return r.formatToParts?V7(r,e):F7(r,e)}function V7(t,e){for(var n=t.formatToParts(e),r=n.length-1;r>=0;--r)if(n[r].type==="timeZoneName")return n[r].value}function F7(t,e){var n=t.format(e).replace(/\u200E/g,""),r=/ [\w-+ ]+$/.exec(n);return r?r[0].substr(1):""}function U7(t,e,n){if(n&&!n.code)throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");return new Intl.DateTimeFormat(n?[n.code,"en-US"]:void 0,{timeZone:e,timeZoneName:t})}function W7(t,e){var n=H7(e);return n.formatToParts?z7(n,t):B7(n,t)}var $7={year:0,month:1,day:2,hour:3,minute:4,second:5};function z7(t,e){try{for(var n=t.formatToParts(e),r=[],i=0;i<n.length;i++){var o=$7[n[i].type];o>=0&&(r[o]=parseInt(n[i].value,10))}return r}catch(s){if(s instanceof RangeError)return[NaN];throw s}}function B7(t,e){var n=t.format(e),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[r[3],r[1],r[2],r[4],r[5],r[6]]}var Tp={};function H7(t){if(!Tp[t]){var e=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n=e==="06/25/2014, 00:00:00"||e==="‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";Tp[t]=n?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return Tp[t]}function oy(t,e,n,r,i,o,s){var a=new Date(0);return a.setUTCFullYear(t,e,n),a.setUTCHours(r,i,o,s),a}var R_=36e5,q7=6e4,Ip={timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function sf(t,e,n){var r,i;if(!t||(r=Ip.timezoneZ.exec(t),r))return 0;var o;if(r=Ip.timezoneHH.exec(t),r)return o=parseInt(r[1],10),b_(o)?-(o*R_):NaN;if(r=Ip.timezoneHHMM.exec(t),r){o=parseInt(r[2],10);var s=parseInt(r[3],10);return b_(o,s)?(i=Math.abs(o)*R_+s*q7,r[1]==="+"?-i:i):NaN}if(K7(t)){e=new Date(e||Date.now());var a=n?e:Y7(e),l=K0(a,t),d=n?l:G7(e,l,t);return-d}return NaN}function Y7(t){return oy(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}function K0(t,e){var n=W7(t,e),r=oy(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime(),i=t.getTime(),o=i%1e3;return i-=o>=0?o:1e3+o,r-i}function G7(t,e,n){var r=t.getTime(),i=r-e,o=K0(new Date(i),n);if(e===o)return e;i-=o-e;var s=K0(new Date(i),n);return o===s?o:Math.max(o,s)}function b_(t,e){return-23<=t&&t<=23&&(e==null||0<=e&&e<=59)}var j_={};function K7(t){if(j_[t])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:t}),j_[t]=!0,!0}catch{return!1}}var Q7=60*1e3,Z7={X:function(t,e,n,r){var i=Sp(r.timeZone,t);if(i===0)return"Z";switch(e){case"X":return D_(i);case"XXXX":case"XX":return Es(i);case"XXXXX":case"XXX":default:return Es(i,":")}},x:function(t,e,n,r){var i=Sp(r.timeZone,t);switch(e){case"x":return D_(i);case"xxxx":case"xx":return Es(i);case"xxxxx":case"xxx":default:return Es(i,":")}},O:function(t,e,n,r){var i=Sp(r.timeZone,t);switch(e){case"O":case"OO":case"OOO":return"GMT"+X7(i,":");case"OOOO":default:return"GMT"+Es(i,":")}},z:function(t,e,n,r){switch(e){case"z":case"zz":case"zzz":return P_("short",t,r);case"zzzz":default:return P_("long",t,r)}}};function Sp(t,e){var n=t?sf(t,e,!0)/Q7:e.getTimezoneOffset();if(Number.isNaN(n))throw new RangeError("Invalid time zone specified: "+t);return n}function th(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}function Es(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=th(Math.floor(i/60),2),s=th(Math.floor(i%60),2);return r+o+n+s}function D_(t,e){if(t%60===0){var n=t>0?"-":"+";return n+th(Math.abs(t)/60,2)}return Es(t,e)}function X7(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+th(o,2)}var s6=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,Lp=36e5,O_=6e4,J7=2,Mt={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:s6};function nh(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(t===null)return new Date(NaN);var n=e||{},r=n.additionalDigits==null?J7:a7(n.additionalDigits);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]")return new Date(t.getTime());if(typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]")return new Date(t);if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var i=eV(t),o=tV(i.date,r),s=o.year,a=o.restDateString,l=nV(a,s);if(isNaN(l))return new Date(NaN);if(l){var d=l.getTime(),f=0,m;if(i.time&&(f=rV(i.time),isNaN(f)))return new Date(NaN);if(i.timeZone||n.timeZone){if(m=sf(i.timeZone||n.timeZone,new Date(d+f)),isNaN(m))return new Date(NaN)}else m=A_(new Date(d+f)),m=A_(new Date(d+f+m));return new Date(d+f+m)}else return new Date(NaN)}function eV(t){var e={},n=Mt.dateTimePattern.exec(t),r;if(n?(e.date=n[1],r=n[3]):(n=Mt.datePattern.exec(t),n?(e.date=n[1],r=n[2]):(e.date=null,r=t)),r){var i=Mt.timeZone.exec(r);i?(e.time=r.replace(i[1],""),e.timeZone=i[1].trim()):e.time=r}return e}function tV(t,e){var n=Mt.YYY[e],r=Mt.YYYYY[e],i;if(i=Mt.YYYY.exec(t)||r.exec(t),i){var o=i[1];return{year:parseInt(o,10),restDateString:t.slice(o.length)}}if(i=Mt.YY.exec(t)||n.exec(t),i){var s=i[1];return{year:parseInt(s,10)*100,restDateString:t.slice(s.length)}}return{year:null}}function nV(t,e){if(e===null)return null;var n,r,i,o;if(t.length===0)return r=new Date(0),r.setUTCFullYear(e),r;if(n=Mt.MM.exec(t),n)return r=new Date(0),i=parseInt(n[1],10)-1,N_(e,i)?(r.setUTCFullYear(e,i),r):new Date(NaN);if(n=Mt.DDD.exec(t),n){r=new Date(0);var s=parseInt(n[1],10);return sV(e,s)?(r.setUTCFullYear(e,0,s),r):new Date(NaN)}if(n=Mt.MMDD.exec(t),n){r=new Date(0),i=parseInt(n[1],10)-1;var a=parseInt(n[2],10);return N_(e,i,a)?(r.setUTCFullYear(e,i,a),r):new Date(NaN)}if(n=Mt.Www.exec(t),n)return o=parseInt(n[1],10)-1,V_(e,o)?M_(e,o):new Date(NaN);if(n=Mt.WwwD.exec(t),n){o=parseInt(n[1],10)-1;var l=parseInt(n[2],10)-1;return V_(e,o,l)?M_(e,o,l):new Date(NaN)}return null}function rV(t){var e,n,r;if(e=Mt.HH.exec(t),e)return n=parseFloat(e[1].replace(",",".")),Cp(n)?n%24*Lp:NaN;if(e=Mt.HHMM.exec(t),e)return n=parseInt(e[1],10),r=parseFloat(e[2].replace(",",".")),Cp(n,r)?n%24*Lp+r*O_:NaN;if(e=Mt.HHMMSS.exec(t),e){n=parseInt(e[1],10),r=parseInt(e[2],10);var i=parseFloat(e[3].replace(",","."));return Cp(n,r,i)?n%24*Lp+r*O_+i*1e3:NaN}return null}function M_(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var i=r.getUTCDay()||7,o=e*7+n+1-i;return r.setUTCDate(r.getUTCDate()+o),r}var iV=[31,28,31,30,31,30,31,31,30,31,30,31],oV=[31,29,31,30,31,30,31,31,30,31,30,31];function a6(t){return t%400===0||t%4===0&&t%100!==0}function N_(t,e,n){if(e<0||e>11)return!1;if(n!=null){if(n<1)return!1;var r=a6(t);if(r&&n>oV[e]||!r&&n>iV[e])return!1}return!0}function sV(t,e){if(e<1)return!1;var n=a6(t);return!(n&&e>366||!n&&e>365)}function V_(t,e,n){return!(e<0||e>52||n!=null&&(n<0||n>6))}function Cp(t,e,n){return!(t!=null&&(t<0||t>=25)||e!=null&&(e<0||e>=60)||n!=null&&(n<0||n>=60))}var aV=/([xXOz]+)|''|'(''|[^'])+('|$)/g;function lV(t,e,n){var r=String(e),i=n||{},o=r.match(aV);if(o){var s=nh(i.originalDate||t,i);r=o.reduce(function(a,l){if(l[0]==="'")return a;var d=a.indexOf(l),f=a[d-1]==="'",m=a.replace(l,"'"+Z7[l[0]](s,l,null,i)+"'");return f?m.substring(0,d-1)+m.substring(d+1):m},r)}return N7(t,r,i)}var Q0={exports:{}},Z0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o]);return r}t.exports=e.default})(Z0,Z0.exports);var uV=Z0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(uV);function i(o){return(0,r.default)({},o)}t.exports=e.default})(Q0,Q0.exports);var cV=Q0.exports;const dV=cu(cV);function hV(t,e,n){var r=nh(t,n),i=sf(e,r,!0),o=new Date(r.getTime()-i),s=new Date(0);return s.setFullYear(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()),s.setHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),s}function fV(t,e,n){if(typeof t=="string"&&!t.match(s6)){var r=dV(n);return r.timeZone=e,nh(t,r)}var i=nh(t,n),o=oy(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()).getTime(),s=sf(e,new Date(o));return new Date(o+s)}const F_=N.table`
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
`,U_=N.div`
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
`,W_=N.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #666;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px dashed #ddd;
`,pV=({user:t,userData:e})=>{const[n,r]=j.useState(null),[i,o]=j.useState(!0),[s,a]=j.useState(null),{use24HourFormat:l}=ny(),d=(e==null?void 0:e.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila";j.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{if(o(!0),e&&e.schedule&&Array.isArray(e.schedule)&&e.schedule.length>0)console.log("Using schedule from userData prop:",e.schedule),r(e.schedule);else{const x=nt(we,"users",t.uid),L=await xi(x);if(L.exists()){const w=L.data();if(w.schedule&&Array.isArray(w.schedule)&&w.schedule.length>0)console.log("Found user schedule in Firestore:",w.schedule),r(w.schedule);else if(w.scheduleId){const y=w.scheduleId,g=nt(we,"schedules",y),E=await xi(g);E.exists()&&r(E.data())}else{const y=Mn(we,"schedules"),g=Pr(y,wi("isDefault","==",!0)),E=await Jn(g);E.empty||r(E.docs[0].data())}}}}catch(x){console.error("Error fetching schedule:",x),a("Failed to load schedule. Please try again later.")}finally{o(!1)}})()},[t,e]);const f=v=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][v],m=(v,x=null,L=d)=>{if(!v)return"N/A";try{if(!x||x===L){const[T,I]=v.split(":"),A=new Date;return A.setHours(parseInt(T,10)),A.setMinutes(parseInt(I,10)),A.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!l})}const[w,y]=v.split(":"),g=new Date;g.setHours(0,0,0,0);const E=new Date(g);E.setHours(parseInt(w,10),parseInt(y,10),0,0);const S=fV(E,x),P=hV(S,L);return lV(P,l?"HH:mm":"h:mm a",{timeZone:L})}catch(w){return console.error("Error formatting time:",w),v}},_=(v,x,L)=>{try{const[w,y]=v.split(":").map(Number),g=new Date;g.setHours(0,0,0,0);const E=new Date(g);E.setHours(w,y,0,0);const S=XN(E,x);return r7(S,"HH:mm")}catch(w){console.error("Error calculating end time:",w);let y=(parseInt(v.split(":")[0],10)+x)%24,g=v.split(":")[1];return`${y.toString().padStart(2,"0")}:${g}`}};return h.jsxs(pi,{children:[h.jsx(mi,{children:"My Schedule"}),h.jsx(gi,{children:i?h.jsx("p",{children:"Loading your schedule..."}):s?h.jsxs(W_,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx(Bn,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]}):n?h.jsx("div",{children:Array.isArray(n)?h.jsxs(h.Fragment,{children:[h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.map((v,x)=>{const L=new Date,y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(v.dayOfWeek),g=L.getDay()===y,E=v.timeRegion||"Asia/Manila",S=m(v.timeIn,E,d),P=v.shiftDuration||8,O=_(v.timeIn,P),T=m(O,E,d);return h.jsxs(U_,{isToday:g,children:[h.jsxs("h3",{children:[h.jsx(Bn,{weight:"fill",size:20,style:{color:g?"#1a73e8":"#666"}}),v.dayOfWeek]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx(Ns,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:S}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(f0,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx(Ns,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:T}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"0.75rem",backgroundColor:"#f9f9f9",borderRadius:"8px",fontSize:"0.9rem"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Duration"}),h.jsxs("div",{children:[v.shiftDuration," hours"]})]}),h.jsxs("div",{style:{textAlign:"right"},children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Time Zone"}),h.jsx("div",{style:{fontSize:"0.85rem"},children:d})]})]})]},x)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs(F_,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.map((v,x)=>{const L=new Date,y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(v.dayOfWeek),g=L.getDay()===y,E=v.timeRegion||"Asia/Manila",S=m(v.timeIn,E,d),P=v.shiftDuration||8,O=_(v.timeIn,P),T=m(O,E,d);return h.jsxs("tr",{style:{backgroundColor:g?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:g?"600":"400",color:g?"#1a73e8":"inherit"},children:[v.dayOfWeek,g&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:S}),h.jsx("td",{children:T}),h.jsxs("td",{children:[v.shiftDuration," hours"]})]},x)})})]}),h.jsxs("div",{style:{marginTop:"1rem",fontSize:"0.85rem",color:"#666",textAlign:"right"},children:["All times shown in your local time zone: ",h.jsx("strong",{children:d})]})]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:{marginBottom:"1.5rem",padding:"1rem",backgroundColor:"#f9f9f9",borderRadius:"8px",borderLeft:"4px solid #4CAF50"},children:[h.jsxs("h3",{style:{margin:"0 0 0.5rem 0",display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Bn,{weight:"fill",size:20,style:{color:"#4CAF50"}}),n.name||"Standard Schedule"]}),h.jsx("p",{style:{margin:0,color:"#666"},children:"Your assigned work schedule"})]}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.shifts&&n.shifts.map((v,x)=>{const w=new Date().getDay()===v.day;return h.jsxs(U_,{isToday:w,children:[h.jsxs("h3",{children:[h.jsx(Bn,{weight:"fill",size:20,style:{color:w?"#1a73e8":"#666"}}),f(v.day)]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx(Ns,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:m(v.timeIn)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(f0,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx(Ns,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:m(v.timeOut)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]})]},x)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs(F_,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.shifts&&n.shifts.map((v,x)=>{const w=new Date().getDay()===v.day,y=v.timeIn.split(":").map(Number),g=v.timeOut.split(":").map(Number),E=y[0]+y[1]/60;let P=g[0]+g[1]/60-E;P<0&&(P+=24);const O=Math.round(P*10)/10;return h.jsxs("tr",{style:{backgroundColor:w?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:w?"600":"400",color:w?"#1a73e8":"inherit"},children:[f(v.day),w&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:m(v.timeIn)}),h.jsx("td",{children:m(v.timeOut)}),h.jsxs("td",{children:[O," hours"]})]},x)})})]})]})]})}):h.jsxs(W_,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx(Bn,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]})})]})},mV=N.div`
  margin-bottom: 1.5rem;
`,ps=N.p`
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`,ms=N.strong`
  min-width: 120px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
`,gV=N.h3`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,gs=N.span`
  color: #333;
  word-break: break-word;
`,yV=({user:t,userData:e,loadingUserData:n})=>h.jsxs(pi,{children:[h.jsx(mi,{children:"User Profile"}),h.jsx(gi,{children:n?h.jsx("p",{children:"Loading user data..."}):h.jsx(h.Fragment,{children:h.jsxs(mV,{children:[h.jsxs(gV,{children:[h.jsx(Zd,{size:20,weight:"bold"}),"User Information"]}),h.jsxs(ps,{children:[h.jsxs(ms,{children:[h.jsx(nf,{size:18}),"Email:"]}),h.jsx(gs,{children:t==null?void 0:t.email})]}),h.jsxs(ps,{children:[h.jsxs(ms,{children:[h.jsx(no,{size:18}),"Name:"]}),h.jsx(gs,{children:t==null?void 0:t.displayName})]}),h.jsxs(ps,{children:[h.jsxs(ms,{children:[h.jsx(ey,{size:18}),"User ID:"]}),h.jsx(gs,{children:t==null?void 0:t.uid})]}),h.jsxs(ps,{children:[h.jsxs(ms,{children:[h.jsx(J1,{size:18}),"Position:"]}),h.jsx(gs,{children:(e==null?void 0:e.position)||"Not specified"})]}),h.jsxs(ps,{children:[h.jsxs(ms,{children:[h.jsx(Zd,{size:18}),"Role:"]}),h.jsx(gs,{children:(e==null?void 0:e.role)||"Not specified"})]}),e&&h.jsxs(ps,{children:[h.jsxs(ms,{children:[h.jsx(Bn,{size:18}),"Created At:"]}),h.jsx(gs,{children:(()=>{var r,i;try{return(r=e.createdAt)!=null&&r.seconds?new Date(e.createdAt.seconds*1e3).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):(i=e.createdAt)!=null&&i.toDate?e.createdAt.toDate().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):e.createdAt instanceof Date?e.createdAt.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):typeof e.createdAt=="string"?new Date(e.createdAt).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):`${new Date().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})} (Current)`}catch(o){return console.error("Error formatting timestamp:",o,e.createdAt),"April 26, 2025, 04:27 AM"}})()})]})]})})})]}),vV=N.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,kV=N.div`
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
`,_V=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,EV=N.h3`
  font-size: 1.1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,wV=N.span`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,xV=N.div`
  margin-bottom: 1.5rem;
`,Ap=N.div`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
`,Pp=N.span`
  font-weight: 500;
  width: 120px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
`,Rp=N.span`
  color: #333;
`,TV=N.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`,Ru=N.button`
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
`,IV=N(Ru)`
  background-color: #4caf50;
  color: white;
  
  &:hover {
    background-color: #43a047;
  }
`,SV=N(Ru)`
  background-color: #f44336;
  color: white;
  
  &:hover {
    background-color: #e53935;
  }
`,LV=N(Ru)`
  background-color: #2196f3;
  color: white;
  
  &:hover {
    background-color: #1e88e5;
  }
`,CV=N.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`,AV=N.div`
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
`,PV=N.div`
  background-color: white;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,RV=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,bV=N.h3`
  margin: 0;
  font-size: 1.2rem;
`,jV=N.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`,DV=N.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,wc=N.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,xc=N.label`
  font-weight: 500;
  color: #555;
`,bp=N.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,OV=N.select`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,MV=N.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`,NV=N(Ru)`
  background-color: #6e8efb;
  color: white;
  
  &:hover {
    background-color: #5a7df9;
  }
`,VV=N(Ru)`
  background-color: #e0e0e0;
  color: #333;
  
  &:hover {
    background-color: #d5d5d5;
  }
`,FV=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #666;
`,UV=t=>{if(!t)return"N/A";try{let e;if(t!=null&&t.seconds)e=new Date(t.seconds*1e3);else if(t!=null&&t.toDate)e=t.toDate();else if(t instanceof Date)e=t;else if(typeof t=="string")e=new Date(t);else return"Invalid date";return e.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}catch(e){return console.error("Error formatting timestamp:",e),"Invalid date"}},WV=()=>{const[t,e]=j.useState([]),[n,r]=j.useState(!0),[i,o]=j.useState(null),[s,a]=j.useState({name:"",email:"",position:"",role:""}),[l,d]=j.useState(!1);j.useEffect(()=>{f()},[]);const f=async()=>{try{r(!0);const y=await dN();e(y)}catch(y){console.error("Error fetching registration requests:",y),q.error("Failed to load registration requests")}finally{r(!1)}},m=async y=>{try{d(!0),await fN(y),q.success(`Registration for ${y.name||y.email} approved`),f()}catch(g){console.error("Error approving registration:",g),q.error("Failed to approve registration")}finally{d(!1)}},_=async y=>{try{d(!0),await pN(y),q.success(`Registration for ${y.name||y.email} declined`),q.warning("Note: The user may still exist in Firebase Authentication. They will be blocked from accessing the system, but the account still exists."),f()}catch(g){console.error("Error declining registration:",g),q.error("Failed to decline registration")}finally{d(!1)}},v=y=>{o(y),a({name:y.name||"",email:y.email||"",position:y.position||"",role:y.role||"user"})},x=()=>{o(null)},L=y=>{const{name:g,value:E}=y.target;a(S=>({...S,[g]:E}))},w=async y=>{y.preventDefault();try{d(!0),await hN(i.id,{name:s.name,email:s.email,position:s.position,role:s.role}),q.success("Registration request updated"),o(null),f()}catch(g){console.error("Error updating registration request:",g),q.error("Failed to update registration request")}finally{d(!1)}};return n?h.jsxs(pi,{children:[h.jsx(mi,{children:"Registration Requests"}),h.jsx(gi,{children:h.jsx(FV,{children:"Loading registration requests..."})})]}):h.jsxs(pi,{children:[h.jsx(mi,{children:"Registration Requests"}),h.jsxs(gi,{children:[h.jsx(vV,{children:t.length===0?h.jsx(CV,{children:h.jsx("p",{children:"No pending registration requests"})}):t.map(y=>h.jsxs(kV,{children:[h.jsxs(_V,{children:[h.jsxs(EV,{children:[h.jsx(no,{size:18,weight:"bold"}),y.name||y.email]}),h.jsxs(wV,{children:[h.jsx(VI,{size:14}),UV(y.createdAt)]})]}),h.jsxs(xV,{children:[h.jsxs(Ap,{children:[h.jsxs(Pp,{children:[h.jsx(no,{size:16}),"Email:"]}),h.jsx(Rp,{children:y.email})]}),h.jsxs(Ap,{children:[h.jsxs(Pp,{children:[h.jsx(J1,{size:16}),"Position:"]}),h.jsx(Rp,{children:y.position||"Not specified"})]}),h.jsxs(Ap,{children:[h.jsxs(Pp,{children:[h.jsx(no,{size:16}),"Role:"]}),h.jsx(Rp,{children:y.role||"user"})]})]}),h.jsxs(TV,{children:[h.jsxs(LV,{onClick:()=>v(y),disabled:l,children:[h.jsx($I,{size:16}),"Edit"]}),h.jsxs(IV,{onClick:()=>m(y),disabled:l,children:[h.jsx(Bi,{size:16}),"Accept"]}),h.jsxs(SV,{onClick:()=>_(y),disabled:l,children:[h.jsx(HI,{size:16}),"Decline"]})]})]},y.id))}),i&&h.jsx(AV,{children:h.jsxs(PV,{children:[h.jsxs(RV,{children:[h.jsx(bV,{children:"Edit Registration Request"}),h.jsx(jV,{onClick:x,children:"×"})]}),h.jsxs(DV,{onSubmit:w,children:[h.jsxs(wc,{children:[h.jsx(xc,{htmlFor:"name",children:"Name"}),h.jsx(bp,{type:"text",id:"name",name:"name",value:s.name,onChange:L,placeholder:"Enter name"})]}),h.jsxs(wc,{children:[h.jsx(xc,{htmlFor:"email",children:"Email"}),h.jsx(bp,{type:"email",id:"email",name:"email",value:s.email,onChange:L,placeholder:"Enter email",required:!0})]}),h.jsxs(wc,{children:[h.jsx(xc,{htmlFor:"position",children:"Position"}),h.jsx(bp,{type:"text",id:"position",name:"position",value:s.position,onChange:L,placeholder:"Enter position"})]}),h.jsxs(wc,{children:[h.jsx(xc,{htmlFor:"role",children:"Role"}),h.jsxs(OV,{id:"role",name:"role",value:s.role,onChange:L,children:[h.jsx("option",{value:"user",children:"User"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),h.jsxs(MV,{children:[h.jsx(VV,{type:"button",onClick:x,children:"Cancel"}),h.jsx(NV,{type:"submit",disabled:l,children:"Save Changes"})]})]})]})})]})]})},$V=N.div`
  padding: 2rem;
`,zV=N.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,BV=N.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,HV=N.thead`
  background-color: #f5f5f5;
`,jp=N.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`,Ni=N.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`,$r=N.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`,ys=N.button`
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
`,qV=N.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.role){case"admin":return"#800000";case"superadmin":return"#000000";default:return"#555555"}}};
  color: white;
`,YV=N.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.status){case"active":return"#4caf50";case"inactive":return"#f44336";case"pending":return"#ff9800";default:return"#9e9e9e"}}};
  color: white;
`,GV=N.input`
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
`,Dp=N.div`
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
`,Op=N.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,Mp=N.h3`
  margin-top: 0;
  color: #333;
`,KV=N.p`
  margin-bottom: 1.5rem;
  color: #666;
`,Np=N.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,ur=N.button`
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
`,Fn=N.div`
  margin-bottom: 1rem;
`,QV=N.div`
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
`,Un=N.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,Vi=N.input`
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
`,$_=N.select`
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
`,ZV=N.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,XV=N.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,JV=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,eF=N.h4`
  margin: 0;
  color: #333;
`,tF=N.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;N.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;function nF(){const[t,e]=j.useState([]),[n,r]=j.useState(!0),[i,o]=j.useState(""),[s,a]=j.useState(!1),[l,d]=j.useState(null),[f,m]=j.useState(!1),[_,v]=j.useState(!1),[x,L]=j.useState(null),[w,y]=j.useState([]),[g,E]=j.useState({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),[S,P]=j.useState(null),[O,T]=j.useState(!1),[I,A]=j.useState({firstName:"",lastName:"",middleInitial:"",email:"",position:"",role:"member"}),b=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],D=F=>!F||!Array.isArray(F)||F.length===0?0:F.reduce((se,ae)=>se+(parseInt(ae.shiftDuration,10)||0),0);j.useEffect(()=>{M()},[]);const M=async()=>{try{r(!0);const F=Mn(we,"users"),se=(await Jn(F)).docs.map(ae=>{const ue=ae.data();return{id:ae.id,userId:ue.userId||ae.id,...ue,schedule:ue.schedule||[]}});e(se),r(!1)}catch(F){console.error("Error fetching users:",F),q.error("Failed to load users"),r(!1)}},R=F=>{d(F),a(!0)},de=F=>{let oe="",se="",ae="";if(F.name){const ue=F.name.trim().split(" ");ue.length===1?oe=ue[0]:ue.length===2?(oe=ue[0],se=ue[1]):ue.length>=3&&(oe=ue[0],ue[1].length===2&&ue[1].endsWith(".")?(ae=ue[1].charAt(0),se=ue.slice(2).join(" ")):(ae=ue[1],se=ue.slice(2).join(" ")))}A({firstName:oe,lastName:se,middleInitial:ae,email:F.email||"",position:F.position||"",role:F.role||"member"}),L(F),v(!0)},ie=async()=>{if(l)try{const F=l.userId||l.id;await W1(nt(we,"users",F)),e(t.filter(oe=>!(oe.userId===l.userId||oe.id===l.id))),q.success(`User ${l.name||l.email} has been deleted`),a(!1),d(null)}catch(F){console.error("Error deleting user:",F),q.error(`Failed to delete user: ${F.message}`)}},ye=()=>{a(!1),d(null)},Ee=async(F,oe)=>{const se=oe==="active"?"inactive":"active";try{const ae=F.userId||F.id,ue=nt(we,"users",ae);await Ll(ue,{status:se}),e(t.map(Se=>Se.userId&&Se.userId===F.userId||Se.id===F.id?{...Se,status:se}:Se)),q.success(`User status updated to ${se}`)}catch(ae){console.error("Error updating user status:",ae),q.error(`Failed to update user status: ${ae.message}`)}},B=F=>{L(F),y(F.schedule||[]),m(!0),T(!1),P(null)},G=async()=>{if(x)try{let F=I.firstName;if(I.middleInitial&&(F+=` ${I.middleInitial}.`),I.lastName&&(F+=` ${I.lastName}`),!F.trim()||!I.email.trim()){q.error("Name and email are required");return}const oe=x.userId||x.id,se=nt(we,"users",oe);await Ll(se,{name:F.trim(),email:I.email.trim(),position:I.position.trim(),role:I.role}),e(t.map(ae=>ae.userId&&ae.userId===x.userId||ae.id===x.id?{...ae,name:F.trim(),email:I.email.trim(),position:I.position.trim(),role:I.role}:ae)),q.success("User information updated successfully"),v(!1)}catch(F){console.error("Error updating user:",F),q.error(`Failed to update user: ${F.message}`)}},Z=()=>{if(g.selectedDays.length===0){q.warning("Please select at least one day of the week");return}const F=new Date,[oe,se]=g.timeIn.split(":").map(Number);F.setHours(oe,se,0,0);const ae=g.selectedDays.map(Se=>({id:`${Date.now()}-${Se}`,dayOfWeek:Se,timeIn:g.timeIn,timeRegion:g.timeRegion,shiftDuration:parseInt(g.shiftDuration,10),utcTimeIn:F.toISOString()})),ue=[...w,...ae];y(ue),q.success(`Added schedule for ${g.selectedDays.length} day(s)`),E({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},ce=async()=>{if(x)try{const F=x.userId||x.id;console.log("Updating schedule for user with document ID:",F);const oe=nt(we,"users",F);await Ll(oe,{schedule:w}),e(t.map(se=>se.userId&&se.userId===x.userId||se.id===x.id?{...se,schedule:w}:se)),q.success("Schedule updated successfully"),m(!1)}catch(F){console.error("Error updating schedule:",F),q.error(`Failed to update schedule: ${F.message}`)}},re=F=>{const oe=w.filter(se=>se.id!==F);y(oe)},me=F=>{P(F),T(!0),E({selectedDays:[F.dayOfWeek],timeIn:F.timeIn,timeRegion:F.timeRegion,shiftDuration:F.shiftDuration.toString()})},Ye=()=>{if(!S)return;if(g.selectedDays.length===0){q.warning("Please select at least one day of the week");return}const F=new Date,[oe,se]=g.timeIn.split(":").map(Number);F.setHours(oe,se,0,0);let ae=w.filter(Se=>Se.id!==S.id);const ue=g.selectedDays.map(Se=>({id:Se===S.dayOfWeek?S.id:`${Date.now()}-${Se}`,dayOfWeek:Se,timeIn:g.timeIn,timeRegion:g.timeRegion,shiftDuration:parseInt(g.shiftDuration,10),utcTimeIn:F.toISOString()}));ae=[...ae,...ue],y(ae),q.success(`Updated schedule for ${g.selectedDays.length} day(s)`),E({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),T(!1),P(null)},Be=()=>{T(!1),P(null),E({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},Ge=t.filter(F=>{const oe=i.toLowerCase();return F.name&&F.name.toLowerCase().includes(oe)||F.email&&F.email.toLowerCase().includes(oe)||F.role&&F.role.toLowerCase().includes(oe)||F.position&&F.position.toLowerCase().includes(oe)});return h.jsxs($V,{children:[h.jsxs(zV,{children:[h.jsx(uu,{size:24,weight:"bold"}),"User Management"]}),h.jsx(GV,{type:"text",placeholder:"Search users...",value:i,onChange:F=>o(F.target.value)}),n?h.jsx("p",{children:"Loading users..."}):h.jsxs(BV,{children:[h.jsx(HV,{children:h.jsxs(jp,{children:[h.jsx(Ni,{children:"Name"}),h.jsx(Ni,{children:"Email"}),h.jsx(Ni,{children:"Position"}),h.jsx(Ni,{children:"Role"}),h.jsx(Ni,{children:"Status"}),h.jsx(Ni,{children:"Shifts"}),h.jsx(Ni,{children:"Actions"})]})}),h.jsx("tbody",{children:Ge.length>0?Ge.map(F=>h.jsxs(jp,{children:[h.jsx($r,{children:F.name||"N/A"}),h.jsx($r,{children:F.email}),h.jsx($r,{children:F.position||"N/A"}),h.jsx($r,{children:h.jsx(qV,{role:F.role,children:F.role||"member"})}),h.jsx($r,{children:h.jsx(YV,{status:F.status||"active",children:F.status||"active"})}),h.jsx($r,{children:F.schedule&&Array.isArray(F.schedule)?h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx("strong",{children:F.schedule.length})," shifts"]}),h.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[D(F.schedule)," total hours"]})]}):"No shifts"}),h.jsxs($r,{children:[h.jsx(ys,{color:"#000000",onClick:()=>B(F),title:"Manage Schedule",children:h.jsx(Bn,{size:20})}),h.jsx(ys,{color:"#1a73e8",onClick:()=>de(F),title:"Edit User",children:h.jsx(p0,{size:20})}),h.jsx(ys,{color:F.status==="active"?"#f44336":"#4caf50",onClick:()=>Ee(F,F.status||"active"),title:F.status==="active"?"Deactivate user":"Activate user",children:F.status==="active"?h.jsx(BI,{size:20}):h.jsx(MI,{size:20})}),h.jsx(ys,{color:"#f44336",onClick:()=>R(F),title:"Delete user",children:h.jsx(m0,{size:20})})]})]},F.id)):h.jsx(jp,{children:h.jsx($r,{colSpan:6,style:{textAlign:"center"},children:"No users found"})})})]}),s&&h.jsx(Dp,{children:h.jsxs(Op,{children:[h.jsx(Mp,{children:"Confirm Deletion"}),h.jsxs(KV,{children:["Are you sure you want to delete the user ",(l==null?void 0:l.name)||(l==null?void 0:l.email),"? This action cannot be undone."]}),h.jsxs(Np,{children:[h.jsx(ur,{onClick:ye,children:"Cancel"}),h.jsx(ur,{primary:!0,onClick:ie,children:"Delete"})]})]})}),_&&x&&h.jsx(Dp,{children:h.jsxs(Op,{style:{maxWidth:"500px",width:"100%"},children:[h.jsx(Mp,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Zd,{size:24}),"Edit User: ",x.name||x.email]})}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(Fn,{children:[h.jsx(Un,{children:"First Name"}),h.jsx(Vi,{type:"text",value:I.firstName,onChange:F=>A({...I,firstName:F.target.value}),placeholder:"First Name"})]}),h.jsxs(Fn,{children:[h.jsx(Un,{children:"Middle Initial"}),h.jsx(Vi,{type:"text",value:I.middleInitial,onChange:F=>A({...I,middleInitial:F.target.value}),placeholder:"Middle Initial",maxLength:1}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Just the first letter, without period"})]}),h.jsxs(Fn,{children:[h.jsx(Un,{children:"Last Name"}),h.jsx(Vi,{type:"text",value:I.lastName,onChange:F=>A({...I,lastName:F.target.value}),placeholder:"Last Name"})]}),h.jsxs(Fn,{children:[h.jsx(Un,{children:"Email"}),h.jsx(Vi,{type:"email",value:I.email,onChange:F=>A({...I,email:F.target.value}),placeholder:"Email Address"})]}),h.jsxs(Fn,{children:[h.jsx(Un,{children:"Position"}),h.jsx(Vi,{type:"text",value:I.position,onChange:F=>A({...I,position:F.target.value}),placeholder:"Position"})]}),h.jsxs(Fn,{children:[h.jsx(Un,{children:"Role"}),h.jsxs($_,{value:I.role,onChange:F=>A({...I,role:F.target.value}),children:[h.jsx("option",{value:"member",children:"Member"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]})]}),h.jsxs(Np,{children:[h.jsx(ur,{onClick:()=>v(!1),children:"Cancel"}),h.jsx(ur,{primary:!0,onClick:G,children:"Save Changes"})]})]})}),f&&x&&h.jsx(Dp,{children:h.jsxs(Op,{style:{maxWidth:"600px",width:"100%"},children:[h.jsx(Mp,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Bn,{size:24}),"Manage Schedule for ",x.name||x.email]})}),h.jsx("div",{style:{marginBottom:"1rem",background:"#f5f9ff",padding:"0.75rem",borderRadius:"6px"},children:h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Total Shifts:"})," ",w.length]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Total Hours:"})," ",D(w)," hours/week"]})]})}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Current Schedule"}),w.length>0?h.jsx(ZV,{children:w.map(F=>h.jsxs(XV,{children:[h.jsxs(JV,{children:[h.jsx(eF,{children:F.dayOfWeek}),h.jsxs("div",{children:[h.jsx(ys,{color:"#000000",onClick:()=>me(F),title:"Edit schedule",style:{marginRight:"4px"},children:h.jsx(p0,{size:16})}),h.jsx(ys,{color:"#f44336",onClick:()=>re(F.id),title:"Delete schedule",children:h.jsx(m0,{size:16})})]})]}),h.jsxs(tF,{children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Time In:"})," ",F.timeIn]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Region:"})," ",F.timeRegion]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Duration:"})," ",F.shiftDuration," hours"]})]})]},F.id))}):h.jsx("p",{children:"No schedules found. Add a new schedule below."})]}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:O?"Edit Schedule":"Add New Schedule"}),h.jsxs(Fn,{children:[h.jsx(Un,{children:"Days of Week (select multiple)"}),h.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:b.map(F=>h.jsxs(QV,{children:[h.jsx("input",{type:"checkbox",id:`day-${F}`,checked:g.selectedDays.includes(F),onChange:()=>{const oe=g.selectedDays.includes(F)?g.selectedDays.filter(se=>se!==F):[...g.selectedDays,F];E({...g,selectedDays:oe})}}),h.jsx("label",{htmlFor:`day-${F}`,children:F})]},F))})]}),h.jsxs(Fn,{children:[h.jsx(Un,{children:"Time In"}),h.jsx(Vi,{type:"time",value:g.timeIn,onChange:F=>E({...g,timeIn:F.target.value})})]}),h.jsxs(Fn,{children:[h.jsx(Un,{children:"Time Region"}),h.jsxs($_,{value:g.timeRegion,onChange:F=>E({...g,timeRegion:F.target.value}),children:[h.jsxs("optgroup",{label:"Asia & Pacific",children:[h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT)"}),h.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore (SGT)"}),h.jsx("option",{value:"Asia/Tokyo",children:"Asia/Tokyo (JST)"}),h.jsx("option",{value:"Australia/Sydney",children:"Australia/Sydney (AEST/AEDT)"})]}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific)"}),h.jsx("option",{value:"America/Anchorage",children:"America/Anchorage (Alaska)"}),h.jsx("option",{value:"America/Adak",children:"America/Adak (Hawaii-Aleutian)"}),h.jsx("option",{value:"Pacific/Honolulu",children:"Pacific/Honolulu (Hawaii)"}),h.jsx("option",{value:"America/Phoenix",children:"America/Phoenix (Arizona)"}),h.jsx("option",{value:"America/Toronto",children:"America/Toronto (Eastern Canada)"}),h.jsx("option",{value:"America/Vancouver",children:"America/Vancouver (Pacific Canada)"})]}),h.jsxs("optgroup",{label:"Europe & Africa",children:[h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST)"}),h.jsx("option",{value:"Europe/Paris",children:"Europe/Paris (CET/CEST)"}),h.jsx("option",{value:"Europe/Berlin",children:"Europe/Berlin (CET/CEST)"}),h.jsx("option",{value:"Europe/Moscow",children:"Europe/Moscow (MSK)"})]})]})]}),h.jsxs(Fn,{children:[h.jsx(Un,{children:"Shift Duration (hours)"}),h.jsx(Vi,{type:"number",min:"1",max:"24",value:g.shiftDuration,onChange:F=>E({...g,shiftDuration:F.target.value})})]}),h.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:O?h.jsxs(h.Fragment,{children:[h.jsx(ur,{primary:!0,onClick:Ye,children:"Update Schedule"}),h.jsx(ur,{onClick:Be,children:"Cancel Edit"})]}):h.jsx(ur,{primary:!0,onClick:Z,children:"Add Schedule"})})]}),h.jsxs(Np,{children:[h.jsx(ur,{onClick:()=>m(!1),children:"Cancel"}),h.jsx(ur,{primary:!0,onClick:ce,children:"Save Changes"})]})]})})]})}N.div`
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
`;N.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 400px;
  padding: 1.5rem;
`;N.h3`
  color: #333;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
`;N.div`
  margin-bottom: 1.5rem;
`;N.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`;const l6=N.button`
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
`;N(l6)`
  background-color: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #eee;
  }
`;N(l6)`
  background-color: #4caf50;
  color: white;
  border: 1px solid #43a047;
  
  &:hover {
    background-color: #43a047;
  }
`;N.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`;N.textarea`
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

`;function rF(){const[t,e]=j.useState(null),[n,r]=j.useState(null),[i,o]=j.useState(null),[s,a]=j.useState(!1),[l,d]=j.useState(null),[f,m]=j.useState(!1),_=tr(),{currentUser:v}=Dr();j.useEffect(()=>{if(v){const L={uid:v.uid,email:v.email,displayName:v.displayName||v.email.split("@")[0]};e(L),x(v.uid)}},[v]);const x=async L=>{if(L)try{m(!0);try{const g=Pr(Mn(we,"registration_requests"),wi("userId","==",L));if(!(await Jn(g)).empty){q.info("Your registration request is pending approval. You will be notified when approved."),await Ct.signOut(),_("/login");return}}catch(g){console.error("Error checking pending status:",g)}const w=nt(we,"users",L),y=await xi(w);if(y.exists()){const g=y.data();d(g)}else console.log("No user data found in Firestore"),q.error("Your account is not properly set up. Please contact an administrator."),await Ct.signOut(),_("/login")}catch(w){console.error("Error fetching user data:",w),q.error("Error loading user data. Please try again later.")}finally{m(!1)}};return h.jsx(Au,{user:t,activeTab:"home",attendanceStatus:n,loading:s,lastRecord:i,isSuperAdmin:(l==null?void 0:l.role)==="super_admin",userData:l,setUserData:d,children:h.jsx(YN,{attendanceStatus:n,lastRecord:i})})}function iF(){const[t,e]=j.useState(null),[n,r]=j.useState(null),[i,o]=j.useState(null),[s,a]=j.useState(!1),[l,d]=j.useState(null),[f,m]=j.useState(!1),_=tr(),{currentUser:v}=Dr();j.useEffect(()=>{if(v){const L={uid:v.uid,email:v.email,displayName:v.displayName||v.email.split("@")[0]};e(L),x(v.uid)}},[v]);const x=async L=>{if(L)try{m(!0);try{const g=Pr(Mn(we,"registration_requests"),wi("userId","==",L));if(!(await Jn(g)).empty){q.info("Your registration request is pending approval. You will be notified when approved."),await Ct.signOut(),_("/");return}}catch(g){console.error("Error checking pending status:",g)}const w=nt(we,"users",L),y=await xi(w);if(y.exists()){const g=y.data();d(g)}else console.log("No user data found in Firestore"),q.error("Your account is not properly set up. Please contact an administrator."),await Ct.signOut(),_("/")}catch(w){console.error("Error fetching user data:",w),q.error("Error loading user data. Please try again later.")}finally{m(!1)}};return h.jsx(Au,{user:t,activeTab:"schedule",attendanceStatus:n,loading:s,lastRecord:i,isSuperAdmin:(l==null?void 0:l.role)==="super_admin",userData:l,setUserData:d,children:h.jsx(pV,{user:t,userData:l})})}function oF(){const[t,e]=j.useState(null),[n,r]=j.useState(null),[i,o]=j.useState(null),[s,a]=j.useState(!1),[l,d]=j.useState(null),[f,m]=j.useState(!1),_=tr(),{currentUser:v}=Dr();j.useEffect(()=>{if(v){const L={uid:v.uid,email:v.email,displayName:v.displayName||v.email.split("@")[0]};e(L),x(v.uid)}},[v]);const x=async L=>{if(L)try{m(!0);try{const g=Pr(Mn(we,"registration_requests"),wi("userId","==",L));if(!(await Jn(g)).empty){q.info("Your registration request is pending approval. You will be notified when approved."),await Ct.signOut(),_("/");return}}catch(g){console.error("Error checking pending status:",g)}const w=nt(we,"users",L),y=await xi(w);if(y.exists()){const g=y.data();d(g)}else console.log("No user data found in Firestore"),q.error("Your account is not properly set up. Please contact an administrator."),await Ct.signOut(),_("/")}catch(w){console.error("Error fetching user data:",w),q.error("Error loading user data. Please try again later.")}finally{m(!1)}};return h.jsx(Au,{user:t,activeTab:"attendance",attendanceStatus:n,loading:s,lastRecord:i,isSuperAdmin:(l==null?void 0:l.role)==="super_admin",userData:l,setUserData:d,children:h.jsx(QN,{user:t})})}function sF(){const[t,e]=j.useState(null),[n,r]=j.useState(null),[i,o]=j.useState(null),[s,a]=j.useState(!1),[l,d]=j.useState(null),[f,m]=j.useState(!1),_=tr(),{currentUser:v}=Dr();j.useEffect(()=>{if(v){const L={uid:v.uid,email:v.email,displayName:v.displayName||v.email.split("@")[0]};e(L),x(v.uid)}},[v]);const x=async L=>{if(L)try{m(!0);try{const g=Pr(Mn(we,"registration_requests"),wi("userId","==",L));if(!(await Jn(g)).empty){q.info("Your registration request is pending approval. You will be notified when approved."),await Ct.signOut(),_("/");return}}catch(g){console.error("Error checking pending status:",g)}const w=nt(we,"users",L),y=await xi(w);if(y.exists()){const g=y.data();d(g)}else console.log("No user data found in Firestore"),q.error("Your account is not properly set up. Please contact an administrator."),await Ct.signOut(),_("/")}catch(w){console.error("Error fetching user data:",w),q.error("Error loading user data. Please try again later.")}finally{m(!1)}};return h.jsx(Au,{user:t,activeTab:"profile",attendanceStatus:n,loading:s,lastRecord:i,isSuperAdmin:(l==null?void 0:l.role)==="super_admin",userData:l,setUserData:d,children:h.jsx(yV,{user:t,userData:l,loadingUserData:f})})}const aF=N.div`
  padding: 1rem;
`,lF=N.div`
  margin-bottom: 2rem;
`,uF=N.h1`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: #333;
`,cF=N.p`
  color: #666;
  font-size: 1rem;
`;function dF(){const[t,e]=j.useState(null),[n,r]=j.useState(null),[i,o]=j.useState(null),[s,a]=j.useState(!1),[l,d]=j.useState(null),[f,m]=j.useState(!1),_=tr(),{currentUser:v}=Dr();j.useEffect(()=>{if(v){const L={uid:v.uid,email:v.email,displayName:v.displayName||v.email.split("@")[0]};e(L),x(v.uid)}},[v]);const x=async L=>{if(L)try{m(!0);const w=nt(we,"users",L),y=await xi(w);if(y.exists()){const g=y.data();if(d(g),g.role!=="super_admin"){q.error("You do not have permission to access this page"),_("/home");return}}else console.log("No user data found in Firestore"),q.error("Your account is not properly set up. Please contact an administrator."),await Ct.signOut(),_("/")}catch(w){console.error("Error fetching user data:",w),q.error("Error loading user data. Please try again later.")}finally{m(!1)}};return h.jsx(Au,{user:t,activeTab:"admin",attendanceStatus:n,loading:s,lastRecord:i,isSuperAdmin:(l==null?void 0:l.role)==="super_admin",userData:l,setUserData:d,children:(l==null?void 0:l.role)==="super_admin"?h.jsxs(aF,{children:[h.jsxs(lF,{children:[h.jsx(uF,{children:"Administration Panel"}),h.jsx(cF,{children:"Manage users, review registration requests, and configure system settings."})]}),h.jsx(nC,{})]}):h.jsx("div",{children:"You do not have permission to access this page."})})}const hF=N.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
`;function fF(){return h.jsxs("div",{children:[h.jsx(hF,{children:"Registration Requests"}),h.jsx(WV,{})]})}const pF=N.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
`;function mF(){return h.jsxs("div",{children:[h.jsx(pF,{children:"User Management"}),h.jsx(nF,{})]})}const gF=N.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,yF=N(Qg)`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`,vF=N.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #800000;
`,kF=N.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #333;
`,_F=N.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`,EF=N.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function wF(){const t=[{title:"Registration Requests",description:"Review and approve new user registration requests",icon:h.jsx(rf,{size:24}),link:"/admin/registration-requests"},{title:"User Management",description:"Manage users, roles, and permissions",icon:h.jsx(uu,{size:24}),link:"/admin/user-management"},{title:"System Settings",description:"Configure system-wide settings and preferences",icon:h.jsx(FI,{size:24}),link:"/admin/settings"},{title:"Reports & Analytics",description:"View attendance reports and analytics",icon:h.jsx(OI,{size:24}),link:"/admin/reports"}];return h.jsx(gF,{children:t.map((e,n)=>h.jsxs(yF,{to:e.link,children:[h.jsx(vF,{children:h.jsx(EF,{children:e.icon})}),h.jsx(kF,{children:e.title}),h.jsx(_F,{children:e.description})]},n))})}const el=({children:t})=>{const{currentUser:e,loading:n}=Dr();return n?h.jsx(u6,{children:"Loading..."}):e?t:h.jsx(Ds,{to:"/",replace:!0})},Vp=({children:t})=>{const{currentUser:e,loading:n}=Dr();return n?h.jsx(u6,{children:"Loading..."}):e?t:h.jsx(Ds,{to:"/",replace:!0})},u6=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #6e8efb;
  background-color: #f5f5f5;
`;function xF(){return h.jsx(h.Fragment,{children:h.jsx(cO,{children:h.jsxs(IN,{children:[h.jsx(dC,{children:h.jsxs(iC,{children:[h.jsx(Dt,{path:"/",element:h.jsx(uN,{})}),h.jsx(Dt,{path:"/register",element:h.jsx(TN,{})}),h.jsx(Dt,{path:"/dashboard",element:h.jsx(el,{children:h.jsx(Ds,{to:"/home",replace:!0})})}),h.jsx(Dt,{path:"/home",element:h.jsx(el,{children:h.jsx(rF,{})})}),h.jsx(Dt,{path:"/schedule",element:h.jsx(el,{children:h.jsx(iF,{})})}),h.jsx(Dt,{path:"/attendance",element:h.jsx(el,{children:h.jsx(oF,{})})}),h.jsx(Dt,{path:"/profile",element:h.jsx(el,{children:h.jsx(sF,{})})}),h.jsxs(Dt,{path:"/admin",element:h.jsx(Vp,{children:h.jsx(dF,{})}),children:[h.jsx(Dt,{index:!0,element:h.jsx(wF,{})}),h.jsx(Dt,{path:"registration-requests",element:h.jsx(fF,{})}),h.jsx(Dt,{path:"user-management",element:h.jsx(mF,{})})]}),h.jsx(Dt,{path:"/registration-requests",element:h.jsx(Vp,{children:h.jsx(Ds,{to:"/admin/registration-requests",replace:!0})})}),h.jsx(Dt,{path:"/user-management",element:h.jsx(Vp,{children:h.jsx(Ds,{to:"/admin/user-management",replace:!0})})}),h.jsx(Dt,{path:"*",element:h.jsx(Ds,{to:"/",replace:!0})})]})}),h.jsx(h0,{position:"top-right",autoClose:3e3})]})})})}tx(document.getElementById("root")).render(h.jsx(j.StrictMode,{children:h.jsx(xF,{})}));
