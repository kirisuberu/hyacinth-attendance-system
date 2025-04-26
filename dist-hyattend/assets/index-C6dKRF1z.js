function U6(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function cu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var q_={exports:{}},ih={},Y_={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var du=Symbol.for("react.element"),W6=Symbol.for("react.portal"),$6=Symbol.for("react.fragment"),z6=Symbol.for("react.strict_mode"),B6=Symbol.for("react.profiler"),H6=Symbol.for("react.provider"),q6=Symbol.for("react.context"),Y6=Symbol.for("react.forward_ref"),G6=Symbol.for("react.suspense"),K6=Symbol.for("react.memo"),Q6=Symbol.for("react.lazy"),av=Symbol.iterator;function Z6(t){return t===null||typeof t!="object"?null:(t=av&&t[av]||t["@@iterator"],typeof t=="function"?t:null)}var G_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K_=Object.assign,Q_={};function pa(t,e,n){this.props=t,this.context=e,this.refs=Q_,this.updater=n||G_}pa.prototype.isReactComponent={};pa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Z_(){}Z_.prototype=pa.prototype;function X0(t,e,n){this.props=t,this.context=e,this.refs=Q_,this.updater=n||G_}var J0=X0.prototype=new Z_;J0.constructor=X0;K_(J0,pa.prototype);J0.isPureReactComponent=!0;var lv=Array.isArray,X_=Object.prototype.hasOwnProperty,eg={current:null},J_={key:!0,ref:!0,__self:!0,__source:!0};function eE(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)X_.call(e,r)&&!J_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:du,type:t,key:o,ref:s,props:i,_owner:eg.current}}function X6(t,e){return{$$typeof:du,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tg(t){return typeof t=="object"&&t!==null&&t.$$typeof===du}function J6(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var uv=/\/+/g;function Cf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?J6(""+t.key):e.toString(36)}function Tc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case du:case W6:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Cf(s,0):r,lv(i)?(n="",t!=null&&(n=t.replace(uv,"$&/")+"/"),Tc(i,e,n,"",function(d){return d})):i!=null&&(tg(i)&&(i=X6(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(uv,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",lv(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Cf(o,a);s+=Tc(o,e,n,l,i)}else if(l=Z6(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Cf(o,a++),s+=Tc(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Gu(t,e,n){if(t==null)return t;var r=[],i=0;return Tc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function eS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ft={current:null},Ic={transition:null},tS={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:Ic,ReactCurrentOwner:eg};function tE(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:Gu,forEach:function(t,e,n){Gu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Gu(t,function(){e++}),e},toArray:function(t){return Gu(t,function(e){return e})||[]},only:function(t){if(!tg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=pa;pe.Fragment=$6;pe.Profiler=B6;pe.PureComponent=X0;pe.StrictMode=z6;pe.Suspense=G6;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tS;pe.act=tE;pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=K_({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=eg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)X_.call(e,l)&&!J_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var d=0;d<l;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:du,type:t.type,key:i,ref:o,props:r,_owner:s}};pe.createContext=function(t){return t={$$typeof:q6,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:H6,_context:t},t.Consumer=t};pe.createElement=eE;pe.createFactory=function(t){var e=eE.bind(null,t);return e.type=t,e};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:Y6,render:t}};pe.isValidElement=tg;pe.lazy=function(t){return{$$typeof:Q6,_payload:{_status:-1,_result:t},_init:eS}};pe.memo=function(t,e){return{$$typeof:K6,type:t,compare:e===void 0?null:e}};pe.startTransition=function(t){var e=Ic.transition;Ic.transition={};try{t()}finally{Ic.transition=e}};pe.unstable_act=tE;pe.useCallback=function(t,e){return Ft.current.useCallback(t,e)};pe.useContext=function(t){return Ft.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return Ft.current.useDeferredValue(t)};pe.useEffect=function(t,e){return Ft.current.useEffect(t,e)};pe.useId=function(){return Ft.current.useId()};pe.useImperativeHandle=function(t,e,n){return Ft.current.useImperativeHandle(t,e,n)};pe.useInsertionEffect=function(t,e){return Ft.current.useInsertionEffect(t,e)};pe.useLayoutEffect=function(t,e){return Ft.current.useLayoutEffect(t,e)};pe.useMemo=function(t,e){return Ft.current.useMemo(t,e)};pe.useReducer=function(t,e,n){return Ft.current.useReducer(t,e,n)};pe.useRef=function(t){return Ft.current.useRef(t)};pe.useState=function(t){return Ft.current.useState(t)};pe.useSyncExternalStore=function(t,e,n){return Ft.current.useSyncExternalStore(t,e,n)};pe.useTransition=function(){return Ft.current.useTransition()};pe.version="18.3.1";Y_.exports=pe;var D=Y_.exports;const c=cu(D),nS=U6({__proto__:null,default:c},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rS=D,iS=Symbol.for("react.element"),oS=Symbol.for("react.fragment"),sS=Object.prototype.hasOwnProperty,aS=rS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lS={key:!0,ref:!0,__self:!0,__source:!0};function nE(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)sS.call(e,r)&&!lS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:iS,type:t,key:o,ref:s,props:i,_owner:aS.current}}ih.Fragment=oS;ih.jsx=nE;ih.jsxs=nE;q_.exports=ih;var h=q_.exports,rE={exports:{}},ln={},iE={exports:{}},oE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Y){var Z=z.length;z.push(Y);e:for(;0<Z;){var se=Z-1>>>1,re=z[se];if(0<i(re,Y))z[se]=Y,z[Z]=re,Z=se;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Y=z[0],Z=z.pop();if(Z!==Y){z[0]=Z;e:for(var se=0,re=z.length,ye=re>>>1;se<ye;){var Ye=2*(se+1)-1,Be=z[Ye],Ge=Ye+1,F=z[Ge];if(0>i(Be,Z))Ge<re&&0>i(F,Be)?(z[se]=F,z[Ge]=Z,se=Ge):(z[se]=Be,z[Ye]=Z,se=Ye);else if(Ge<re&&0>i(F,Z))z[se]=F,z[Ge]=Z,se=Ge;else break e}}return Y}function i(z,Y){var Z=z.sortIndex-Y.sortIndex;return Z!==0?Z:z.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],d=[],f=1,m=null,E=3,v=!1,x=!1,C=!1,w=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(z){for(var Y=n(d);Y!==null;){if(Y.callback===null)r(d);else if(Y.startTime<=z)r(d),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(d)}}function S(z){if(C=!1,_(z),!x)if(n(l)!==null)x=!0,he(b);else{var Y=n(d);Y!==null&&fe(S,Y.startTime-z)}}function b(z,Y){x=!1,C&&(C=!1,y(I),I=-1),v=!0;var Z=E;try{for(_(Y),m=n(l);m!==null&&(!(m.expirationTime>Y)||z&&!j());){var se=m.callback;if(typeof se=="function"){m.callback=null,E=m.priorityLevel;var re=se(m.expirationTime<=Y);Y=t.unstable_now(),typeof re=="function"?m.callback=re:m===n(l)&&r(l),_(Y)}else r(l);m=n(l)}if(m!==null)var ye=!0;else{var Ye=n(d);Ye!==null&&fe(S,Ye.startTime-Y),ye=!1}return ye}finally{m=null,E=Z,v=!1}}var M=!1,T=null,I=-1,A=5,R=-1;function j(){return!(t.unstable_now()-R<A)}function O(){if(T!==null){var z=t.unstable_now();R=z;var Y=!0;try{Y=T(!0,z)}finally{Y?P():(M=!1,T=null)}}else M=!1}var P;if(typeof g=="function")P=function(){g(O)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,J=te.port2;te.port1.onmessage=O,P=function(){J.postMessage(null)}}else P=function(){w(O,0)};function he(z){T=z,M||(M=!0,P())}function fe(z,Y){I=w(function(){z(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){x||v||(x=!0,he(b))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return E},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(E){case 1:case 2:case 3:var Y=3;break;default:Y=E}var Z=E;E=Y;try{return z()}finally{E=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=E;E=z;try{return Y()}finally{E=Z}},t.unstable_scheduleCallback=function(z,Y,Z){var se=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?se+Z:se):Z=se,z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Z+re,z={id:f++,callback:Y,priorityLevel:z,startTime:Z,expirationTime:re,sortIndex:-1},Z>se?(z.sortIndex=Z,e(d,z),n(l)===null&&z===n(d)&&(C?(y(I),I=-1):C=!0,fe(S,Z-se))):(z.sortIndex=re,e(l,z),x||v||(x=!0,he(b))),z},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(z){var Y=E;return function(){var Z=E;E=Y;try{return z.apply(this,arguments)}finally{E=Z}}}})(oE);iE.exports=oE;var uS=iE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cS=D,an=uS;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sE=new Set,bl={};function vo(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(bl[t]=e,t=0;t<e.length;t++)sE.add(e[t])}var Tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Up=Object.prototype.hasOwnProperty,dS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cv={},dv={};function hS(t){return Up.call(dv,t)?!0:Up.call(cv,t)?!1:dS.test(t)?dv[t]=!0:(cv[t]=!0,!1)}function fS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pS(t,e,n,r){if(e===null||typeof e>"u"||fS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ut(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){gt[t]=new Ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];gt[e]=new Ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){gt[t]=new Ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){gt[t]=new Ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){gt[t]=new Ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){gt[t]=new Ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){gt[t]=new Ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){gt[t]=new Ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){gt[t]=new Ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var ng=/[\-:]([a-z])/g;function rg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ng,rg);gt[e]=new Ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ng,rg);gt[e]=new Ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ng,rg);gt[e]=new Ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){gt[t]=new Ut(t,1,!1,t.toLowerCase(),null,!1,!1)});gt.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){gt[t]=new Ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function ig(t,e,n,r){var i=gt.hasOwnProperty(e)?gt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pS(e,n,i,r)&&(n=null),r||i===null?hS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jr=cS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ku=Symbol.for("react.element"),ws=Symbol.for("react.portal"),xs=Symbol.for("react.fragment"),og=Symbol.for("react.strict_mode"),Wp=Symbol.for("react.profiler"),aE=Symbol.for("react.provider"),lE=Symbol.for("react.context"),sg=Symbol.for("react.forward_ref"),$p=Symbol.for("react.suspense"),zp=Symbol.for("react.suspense_list"),ag=Symbol.for("react.memo"),qr=Symbol.for("react.lazy"),uE=Symbol.for("react.offscreen"),hv=Symbol.iterator;function Wa(t){return t===null||typeof t!="object"?null:(t=hv&&t[hv]||t["@@iterator"],typeof t=="function"?t:null)}var Ue=Object.assign,Lf;function tl(t){if(Lf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lf=e&&e[1]||""}return`
`+Lf+t}var Af=!1;function Pf(t,e){if(!t||Af)return"";Af=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Af=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?tl(t):""}function mS(t){switch(t.tag){case 5:return tl(t.type);case 16:return tl("Lazy");case 13:return tl("Suspense");case 19:return tl("SuspenseList");case 0:case 2:case 15:return t=Pf(t.type,!1),t;case 11:return t=Pf(t.type.render,!1),t;case 1:return t=Pf(t.type,!0),t;default:return""}}function Bp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xs:return"Fragment";case ws:return"Portal";case Wp:return"Profiler";case og:return"StrictMode";case $p:return"Suspense";case zp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lE:return(t.displayName||"Context")+".Consumer";case aE:return(t._context.displayName||"Context")+".Provider";case sg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ag:return e=t.displayName||null,e!==null?e:Bp(t.type)||"Memo";case qr:e=t._payload,t=t._init;try{return Bp(t(e))}catch{}}return null}function gS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bp(e);case 8:return e===og?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yS(t){var e=cE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qu(t){t._valueTracker||(t._valueTracker=yS(t))}function dE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=cE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hp(t,e){var n=e.checked;return Ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hE(t,e){e=e.checked,e!=null&&ig(t,"checked",e,!1)}function qp(t,e){hE(t,e);var n=ki(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yp(t,e.type,ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yp(t,e,n){(e!=="number"||Xc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var nl=Array.isArray;function Vs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ki(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Gp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(nl(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ki(n)}}function fE(t,e){var n=ki(e.value),r=ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function gv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zu,mE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zu=Zu||document.createElement("div"),Zu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function jl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vS=["Webkit","ms","Moz","O"];Object.keys(fl).forEach(function(t){vS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fl[e]=fl[t]})});function gE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fl.hasOwnProperty(t)&&fl[t]?(""+e).trim():e+"px"}function yE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var kS=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qp(t,e){if(e){if(kS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Zp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xp=null;function lg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jp=null,Fs=null,Us=null;function yv(t){if(t=pu(t)){if(typeof Jp!="function")throw Error(B(280));var e=t.stateNode;e&&(e=uh(e),Jp(t.stateNode,t.type,e))}}function vE(t){Fs?Us?Us.push(t):Us=[t]:Fs=t}function kE(){if(Fs){var t=Fs,e=Us;if(Us=Fs=null,yv(t),e)for(t=0;t<e.length;t++)yv(e[t])}}function _E(t,e){return t(e)}function EE(){}var Rf=!1;function wE(t,e,n){if(Rf)return t(e,n);Rf=!0;try{return _E(t,e,n)}finally{Rf=!1,(Fs!==null||Us!==null)&&(EE(),kE())}}function Dl(t,e){var n=t.stateNode;if(n===null)return null;var r=uh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var em=!1;if(Tr)try{var $a={};Object.defineProperty($a,"passive",{get:function(){em=!0}}),window.addEventListener("test",$a,$a),window.removeEventListener("test",$a,$a)}catch{em=!1}function _S(t,e,n,r,i,o,s,a,l){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var pl=!1,Jc=null,ed=!1,tm=null,ES={onError:function(t){pl=!0,Jc=t}};function wS(t,e,n,r,i,o,s,a,l){pl=!1,Jc=null,_S.apply(ES,arguments)}function xS(t,e,n,r,i,o,s,a,l){if(wS.apply(this,arguments),pl){if(pl){var d=Jc;pl=!1,Jc=null}else throw Error(B(198));ed||(ed=!0,tm=d)}}function ko(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vv(t){if(ko(t)!==t)throw Error(B(188))}function TS(t){var e=t.alternate;if(!e){if(e=ko(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return vv(i),t;if(o===r)return vv(i),e;o=o.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function TE(t){return t=TS(t),t!==null?IE(t):null}function IE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=IE(t);if(e!==null)return e;t=t.sibling}return null}var SE=an.unstable_scheduleCallback,kv=an.unstable_cancelCallback,IS=an.unstable_shouldYield,SS=an.unstable_requestPaint,Qe=an.unstable_now,CS=an.unstable_getCurrentPriorityLevel,ug=an.unstable_ImmediatePriority,CE=an.unstable_UserBlockingPriority,td=an.unstable_NormalPriority,LS=an.unstable_LowPriority,LE=an.unstable_IdlePriority,oh=null,Gn=null;function AS(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(oh,t,void 0,(t.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:bS,PS=Math.log,RS=Math.LN2;function bS(t){return t>>>=0,t===0?32:31-(PS(t)/RS|0)|0}var Xu=64,Ju=4194304;function rl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=rl(a):(o&=s,o!==0&&(r=rl(o)))}else s=n&~i,s!==0?r=rl(s):o!==0&&(r=rl(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Pn(e),i=1<<n,r|=t[n],e&=~i;return r}function jS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Pn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=jS(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function nm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function AE(){var t=Xu;return Xu<<=1,!(Xu&4194240)&&(Xu=64),t}function bf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function hu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pn(e),t[e]=n}function OS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Pn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function cg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Le=0;function PE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var RE,dg,bE,jE,DE,rm=!1,ec=[],ii=null,oi=null,si=null,Ol=new Map,Ml=new Map,Gr=[],MS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _v(t,e){switch(t){case"focusin":case"focusout":ii=null;break;case"dragenter":case"dragleave":oi=null;break;case"mouseover":case"mouseout":si=null;break;case"pointerover":case"pointerout":Ol.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(e.pointerId)}}function za(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=pu(e),e!==null&&dg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function NS(t,e,n,r,i){switch(e){case"focusin":return ii=za(ii,t,e,n,r,i),!0;case"dragenter":return oi=za(oi,t,e,n,r,i),!0;case"mouseover":return si=za(si,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ol.set(o,za(Ol.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ml.set(o,za(Ml.get(o)||null,t,e,n,r,i)),!0}return!1}function OE(t){var e=qi(t.target);if(e!==null){var n=ko(e);if(n!==null){if(e=n.tag,e===13){if(e=xE(n),e!==null){t.blockedOn=e,DE(t.priority,function(){bE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=im(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xp=r,n.target.dispatchEvent(r),Xp=null}else return e=pu(n),e!==null&&dg(e),t.blockedOn=n,!1;e.shift()}return!0}function Ev(t,e,n){Sc(t)&&n.delete(e)}function VS(){rm=!1,ii!==null&&Sc(ii)&&(ii=null),oi!==null&&Sc(oi)&&(oi=null),si!==null&&Sc(si)&&(si=null),Ol.forEach(Ev),Ml.forEach(Ev)}function Ba(t,e){t.blockedOn===e&&(t.blockedOn=null,rm||(rm=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,VS)))}function Nl(t){function e(i){return Ba(i,t)}if(0<ec.length){Ba(ec[0],t);for(var n=1;n<ec.length;n++){var r=ec[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ii!==null&&Ba(ii,t),oi!==null&&Ba(oi,t),si!==null&&Ba(si,t),Ol.forEach(e),Ml.forEach(e),n=0;n<Gr.length;n++)r=Gr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gr.length&&(n=Gr[0],n.blockedOn===null);)OE(n),n.blockedOn===null&&Gr.shift()}var Ws=jr.ReactCurrentBatchConfig,rd=!0;function FS(t,e,n,r){var i=Le,o=Ws.transition;Ws.transition=null;try{Le=1,hg(t,e,n,r)}finally{Le=i,Ws.transition=o}}function US(t,e,n,r){var i=Le,o=Ws.transition;Ws.transition=null;try{Le=4,hg(t,e,n,r)}finally{Le=i,Ws.transition=o}}function hg(t,e,n,r){if(rd){var i=im(t,e,n,r);if(i===null)$f(t,e,r,id,n),_v(t,r);else if(NS(i,t,e,n,r))r.stopPropagation();else if(_v(t,r),e&4&&-1<MS.indexOf(t)){for(;i!==null;){var o=pu(i);if(o!==null&&RE(o),o=im(t,e,n,r),o===null&&$f(t,e,r,id,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else $f(t,e,r,null,n)}}var id=null;function im(t,e,n,r){if(id=null,t=lg(r),t=qi(t),t!==null)if(e=ko(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return id=t,null}function ME(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(CS()){case ug:return 1;case CE:return 4;case td:case LS:return 16;case LE:return 536870912;default:return 16}default:return 16}}var Jr=null,fg=null,Cc=null;function NE(){if(Cc)return Cc;var t,e=fg,n=e.length,r,i="value"in Jr?Jr.value:Jr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Cc=i.slice(t,1<r?1-r:void 0)}function Lc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tc(){return!0}function wv(){return!1}function un(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?tc:wv,this.isPropagationStopped=wv,this}return Ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tc)},persist:function(){},isPersistent:tc}),e}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pg=un(ma),fu=Ue({},ma,{view:0,detail:0}),WS=un(fu),jf,Df,Ha,sh=Ue({},fu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ha&&(Ha&&t.type==="mousemove"?(jf=t.screenX-Ha.screenX,Df=t.screenY-Ha.screenY):Df=jf=0,Ha=t),jf)},movementY:function(t){return"movementY"in t?t.movementY:Df}}),xv=un(sh),$S=Ue({},sh,{dataTransfer:0}),zS=un($S),BS=Ue({},fu,{relatedTarget:0}),Of=un(BS),HS=Ue({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),qS=un(HS),YS=Ue({},ma,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),GS=un(YS),KS=Ue({},ma,{data:0}),Tv=un(KS),QS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=XS[t])?!!e[t]:!1}function mg(){return JS}var e4=Ue({},fu,{key:function(t){if(t.key){var e=QS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Lc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ZS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mg,charCode:function(t){return t.type==="keypress"?Lc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Lc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),t4=un(e4),n4=Ue({},sh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iv=un(n4),r4=Ue({},fu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mg}),i4=un(r4),o4=Ue({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),s4=un(o4),a4=Ue({},sh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),l4=un(a4),u4=[9,13,27,32],gg=Tr&&"CompositionEvent"in window,ml=null;Tr&&"documentMode"in document&&(ml=document.documentMode);var c4=Tr&&"TextEvent"in window&&!ml,VE=Tr&&(!gg||ml&&8<ml&&11>=ml),Sv=" ",Cv=!1;function FE(t,e){switch(t){case"keyup":return u4.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function UE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ts=!1;function d4(t,e){switch(t){case"compositionend":return UE(e);case"keypress":return e.which!==32?null:(Cv=!0,Sv);case"textInput":return t=e.data,t===Sv&&Cv?null:t;default:return null}}function h4(t,e){if(Ts)return t==="compositionend"||!gg&&FE(t,e)?(t=NE(),Cc=fg=Jr=null,Ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return VE&&e.locale!=="ko"?null:e.data;default:return null}}var f4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!f4[t.type]:e==="textarea"}function WE(t,e,n,r){vE(r),e=od(e,"onChange"),0<e.length&&(n=new pg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var gl=null,Vl=null;function p4(t){XE(t,0)}function ah(t){var e=Cs(t);if(dE(e))return t}function m4(t,e){if(t==="change")return e}var $E=!1;if(Tr){var Mf;if(Tr){var Nf="oninput"in document;if(!Nf){var Av=document.createElement("div");Av.setAttribute("oninput","return;"),Nf=typeof Av.oninput=="function"}Mf=Nf}else Mf=!1;$E=Mf&&(!document.documentMode||9<document.documentMode)}function Pv(){gl&&(gl.detachEvent("onpropertychange",zE),Vl=gl=null)}function zE(t){if(t.propertyName==="value"&&ah(Vl)){var e=[];WE(e,Vl,t,lg(t)),wE(p4,e)}}function g4(t,e,n){t==="focusin"?(Pv(),gl=e,Vl=n,gl.attachEvent("onpropertychange",zE)):t==="focusout"&&Pv()}function y4(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ah(Vl)}function v4(t,e){if(t==="click")return ah(e)}function k4(t,e){if(t==="input"||t==="change")return ah(e)}function _4(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dn=typeof Object.is=="function"?Object.is:_4;function Fl(t,e){if(Dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Up.call(e,i)||!Dn(t[i],e[i]))return!1}return!0}function Rv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bv(t,e){var n=Rv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rv(n)}}function BE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?BE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function HE(){for(var t=window,e=Xc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xc(t.document)}return e}function yg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function E4(t){var e=HE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&BE(n.ownerDocument.documentElement,n)){if(r!==null&&yg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=bv(n,o);var s=bv(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var w4=Tr&&"documentMode"in document&&11>=document.documentMode,Is=null,om=null,yl=null,sm=!1;function jv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sm||Is==null||Is!==Xc(r)||(r=Is,"selectionStart"in r&&yg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yl&&Fl(yl,r)||(yl=r,r=od(om,"onSelect"),0<r.length&&(e=new pg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Is)))}function nc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:nc("Animation","AnimationEnd"),animationiteration:nc("Animation","AnimationIteration"),animationstart:nc("Animation","AnimationStart"),transitionend:nc("Transition","TransitionEnd")},Vf={},qE={};Tr&&(qE=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function lh(t){if(Vf[t])return Vf[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qE)return Vf[t]=e[n];return t}var YE=lh("animationend"),GE=lh("animationiteration"),KE=lh("animationstart"),QE=lh("transitionend"),ZE=new Map,Dv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ii(t,e){ZE.set(t,e),vo(e,[t])}for(var Ff=0;Ff<Dv.length;Ff++){var Uf=Dv[Ff],x4=Uf.toLowerCase(),T4=Uf[0].toUpperCase()+Uf.slice(1);Ii(x4,"on"+T4)}Ii(YE,"onAnimationEnd");Ii(GE,"onAnimationIteration");Ii(KE,"onAnimationStart");Ii("dblclick","onDoubleClick");Ii("focusin","onFocus");Ii("focusout","onBlur");Ii(QE,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);vo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vo("onBeforeInput",["compositionend","keypress","textInput","paste"]);vo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I4=new Set("cancel close invalid load scroll toggle".split(" ").concat(il));function Ov(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,xS(r,e,void 0,t),t.currentTarget=null}function XE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,d=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Ov(i,a,d),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,d=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Ov(i,a,d),o=l}}}if(ed)throw t=tm,ed=!1,tm=null,t}function je(t,e){var n=e[dm];n===void 0&&(n=e[dm]=new Set);var r=t+"__bubble";n.has(r)||(JE(e,t,2,!1),n.add(r))}function Wf(t,e,n){var r=0;e&&(r|=4),JE(n,t,r,e)}var rc="_reactListening"+Math.random().toString(36).slice(2);function Ul(t){if(!t[rc]){t[rc]=!0,sE.forEach(function(n){n!=="selectionchange"&&(I4.has(n)||Wf(n,!1,t),Wf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rc]||(e[rc]=!0,Wf("selectionchange",!1,e))}}function JE(t,e,n,r){switch(ME(e)){case 1:var i=FS;break;case 4:i=US;break;default:i=hg}n=i.bind(null,e,n,t),i=void 0,!em||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $f(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=qi(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}wE(function(){var d=o,f=lg(n),m=[];e:{var E=ZE.get(t);if(E!==void 0){var v=pg,x=t;switch(t){case"keypress":if(Lc(n)===0)break e;case"keydown":case"keyup":v=t4;break;case"focusin":x="focus",v=Of;break;case"focusout":x="blur",v=Of;break;case"beforeblur":case"afterblur":v=Of;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=xv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=zS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=i4;break;case YE:case GE:case KE:v=qS;break;case QE:v=s4;break;case"scroll":v=WS;break;case"wheel":v=l4;break;case"copy":case"cut":case"paste":v=GS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Iv}var C=(e&4)!==0,w=!C&&t==="scroll",y=C?E!==null?E+"Capture":null:E;C=[];for(var g=d,_;g!==null;){_=g;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,y!==null&&(S=Dl(g,y),S!=null&&C.push(Wl(g,S,_)))),w)break;g=g.return}0<C.length&&(E=new v(E,x,null,n,f),m.push({event:E,listeners:C}))}}if(!(e&7)){e:{if(E=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",E&&n!==Xp&&(x=n.relatedTarget||n.fromElement)&&(qi(x)||x[Ir]))break e;if((v||E)&&(E=f.window===f?f:(E=f.ownerDocument)?E.defaultView||E.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=d,x=x?qi(x):null,x!==null&&(w=ko(x),x!==w||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=d),v!==x)){if(C=xv,S="onMouseLeave",y="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(C=Iv,S="onPointerLeave",y="onPointerEnter",g="pointer"),w=v==null?E:Cs(v),_=x==null?E:Cs(x),E=new C(S,g+"leave",v,n,f),E.target=w,E.relatedTarget=_,S=null,qi(f)===d&&(C=new C(y,g+"enter",x,n,f),C.target=_,C.relatedTarget=w,S=C),w=S,v&&x)t:{for(C=v,y=x,g=0,_=C;_;_=us(_))g++;for(_=0,S=y;S;S=us(S))_++;for(;0<g-_;)C=us(C),g--;for(;0<_-g;)y=us(y),_--;for(;g--;){if(C===y||y!==null&&C===y.alternate)break t;C=us(C),y=us(y)}C=null}else C=null;v!==null&&Mv(m,E,v,C,!1),x!==null&&w!==null&&Mv(m,w,x,C,!0)}}e:{if(E=d?Cs(d):window,v=E.nodeName&&E.nodeName.toLowerCase(),v==="select"||v==="input"&&E.type==="file")var b=m4;else if(Lv(E))if($E)b=k4;else{b=y4;var M=g4}else(v=E.nodeName)&&v.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(b=v4);if(b&&(b=b(t,d))){WE(m,b,n,f);break e}M&&M(t,E,d),t==="focusout"&&(M=E._wrapperState)&&M.controlled&&E.type==="number"&&Yp(E,"number",E.value)}switch(M=d?Cs(d):window,t){case"focusin":(Lv(M)||M.contentEditable==="true")&&(Is=M,om=d,yl=null);break;case"focusout":yl=om=Is=null;break;case"mousedown":sm=!0;break;case"contextmenu":case"mouseup":case"dragend":sm=!1,jv(m,n,f);break;case"selectionchange":if(w4)break;case"keydown":case"keyup":jv(m,n,f)}var T;if(gg)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Ts?FE(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(VE&&n.locale!=="ko"&&(Ts||I!=="onCompositionStart"?I==="onCompositionEnd"&&Ts&&(T=NE()):(Jr=f,fg="value"in Jr?Jr.value:Jr.textContent,Ts=!0)),M=od(d,I),0<M.length&&(I=new Tv(I,t,null,n,f),m.push({event:I,listeners:M}),T?I.data=T:(T=UE(n),T!==null&&(I.data=T)))),(T=c4?d4(t,n):h4(t,n))&&(d=od(d,"onBeforeInput"),0<d.length&&(f=new Tv("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=T))}XE(m,e)})}function Wl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function od(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Dl(t,n),o!=null&&r.unshift(Wl(t,o,i)),o=Dl(t,e),o!=null&&r.push(Wl(t,o,i))),t=t.return}return r}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mv(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,d=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&d!==null&&(a=d,i?(l=Dl(n,o),l!=null&&s.unshift(Wl(n,l,a))):i||(l=Dl(n,o),l!=null&&s.push(Wl(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var S4=/\r\n?/g,C4=/\u0000|\uFFFD/g;function Nv(t){return(typeof t=="string"?t:""+t).replace(S4,`
`).replace(C4,"")}function ic(t,e,n){if(e=Nv(e),Nv(t)!==e&&n)throw Error(B(425))}function sd(){}var am=null,lm=null;function um(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cm=typeof setTimeout=="function"?setTimeout:void 0,L4=typeof clearTimeout=="function"?clearTimeout:void 0,Vv=typeof Promise=="function"?Promise:void 0,A4=typeof queueMicrotask=="function"?queueMicrotask:typeof Vv<"u"?function(t){return Vv.resolve(null).then(t).catch(P4)}:cm;function P4(t){setTimeout(function(){throw t})}function zf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Nl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Nl(e)}function ai(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ga=Math.random().toString(36).slice(2),Hn="__reactFiber$"+ga,$l="__reactProps$"+ga,Ir="__reactContainer$"+ga,dm="__reactEvents$"+ga,R4="__reactListeners$"+ga,b4="__reactHandles$"+ga;function qi(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ir]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fv(t);t!==null;){if(n=t[Hn])return n;t=Fv(t)}return e}t=n,n=t.parentNode}return null}function pu(t){return t=t[Hn]||t[Ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function uh(t){return t[$l]||null}var hm=[],Ls=-1;function Si(t){return{current:t}}function Me(t){0>Ls||(t.current=hm[Ls],hm[Ls]=null,Ls--)}function Re(t,e){Ls++,hm[Ls]=t.current,t.current=e}var _i={},At=Si(_i),Yt=Si(!1),io=_i;function Ks(t,e){var n=t.type.contextTypes;if(!n)return _i;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Gt(t){return t=t.childContextTypes,t!=null}function ad(){Me(Yt),Me(At)}function Uv(t,e,n){if(At.current!==_i)throw Error(B(168));Re(At,e),Re(Yt,n)}function ew(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,gS(t)||"Unknown",i));return Ue({},n,r)}function ld(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_i,io=At.current,Re(At,t),Re(Yt,Yt.current),!0}function Wv(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=ew(t,e,io),r.__reactInternalMemoizedMergedChildContext=t,Me(Yt),Me(At),Re(At,t)):Me(Yt),Re(Yt,n)}var pr=null,ch=!1,Bf=!1;function tw(t){pr===null?pr=[t]:pr.push(t)}function j4(t){ch=!0,tw(t)}function Ci(){if(!Bf&&pr!==null){Bf=!0;var t=0,e=Le;try{var n=pr;for(Le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}pr=null,ch=!1}catch(i){throw pr!==null&&(pr=pr.slice(t+1)),SE(ug,Ci),i}finally{Le=e,Bf=!1}}return null}var As=[],Ps=0,ud=null,cd=0,dn=[],hn=0,oo=null,gr=1,yr="";function Ui(t,e){As[Ps++]=cd,As[Ps++]=ud,ud=t,cd=e}function nw(t,e,n){dn[hn++]=gr,dn[hn++]=yr,dn[hn++]=oo,oo=t;var r=gr;t=yr;var i=32-Pn(r)-1;r&=~(1<<i),n+=1;var o=32-Pn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,gr=1<<32-Pn(e)+i|n<<i|r,yr=o+t}else gr=1<<o|n<<i|r,yr=t}function vg(t){t.return!==null&&(Ui(t,1),nw(t,1,0))}function kg(t){for(;t===ud;)ud=As[--Ps],As[Ps]=null,cd=As[--Ps],As[Ps]=null;for(;t===oo;)oo=dn[--hn],dn[hn]=null,yr=dn[--hn],dn[hn]=null,gr=dn[--hn],dn[hn]=null}var rn=null,tn=null,Ne=!1,Ln=null;function rw(t,e){var n=fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $v(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,rn=t,tn=ai(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,rn=t,tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=oo!==null?{id:gr,overflow:yr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,rn=t,tn=null,!0):!1;default:return!1}}function fm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pm(t){if(Ne){var e=tn;if(e){var n=e;if(!$v(t,e)){if(fm(t))throw Error(B(418));e=ai(n.nextSibling);var r=rn;e&&$v(t,e)?rw(r,n):(t.flags=t.flags&-4097|2,Ne=!1,rn=t)}}else{if(fm(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ne=!1,rn=t}}}function zv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;rn=t}function oc(t){if(t!==rn)return!1;if(!Ne)return zv(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!um(t.type,t.memoizedProps)),e&&(e=tn)){if(fm(t))throw iw(),Error(B(418));for(;e;)rw(t,e),e=ai(e.nextSibling)}if(zv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tn=ai(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tn=null}}else tn=rn?ai(t.stateNode.nextSibling):null;return!0}function iw(){for(var t=tn;t;)t=ai(t.nextSibling)}function Qs(){tn=rn=null,Ne=!1}function _g(t){Ln===null?Ln=[t]:Ln.push(t)}var D4=jr.ReactCurrentBatchConfig;function qa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function sc(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bv(t){var e=t._init;return e(t._payload)}function ow(t){function e(y,g){if(t){var _=y.deletions;_===null?(y.deletions=[g],y.flags|=16):_.push(g)}}function n(y,g){if(!t)return null;for(;g!==null;)e(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=di(y,g),y.index=0,y.sibling=null,y}function o(y,g,_){return y.index=_,t?(_=y.alternate,_!==null?(_=_.index,_<g?(y.flags|=2,g):_):(y.flags|=2,g)):(y.flags|=1048576,g)}function s(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,g,_,S){return g===null||g.tag!==6?(g=Zf(_,y.mode,S),g.return=y,g):(g=i(g,_),g.return=y,g)}function l(y,g,_,S){var b=_.type;return b===xs?f(y,g,_.props.children,S,_.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===qr&&Bv(b)===g.type)?(S=i(g,_.props),S.ref=qa(y,g,_),S.return=y,S):(S=Oc(_.type,_.key,_.props,null,y.mode,S),S.ref=qa(y,g,_),S.return=y,S)}function d(y,g,_,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Xf(_,y.mode,S),g.return=y,g):(g=i(g,_.children||[]),g.return=y,g)}function f(y,g,_,S,b){return g===null||g.tag!==7?(g=Ji(_,y.mode,S,b),g.return=y,g):(g=i(g,_),g.return=y,g)}function m(y,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Zf(""+g,y.mode,_),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ku:return _=Oc(g.type,g.key,g.props,null,y.mode,_),_.ref=qa(y,null,g),_.return=y,_;case ws:return g=Xf(g,y.mode,_),g.return=y,g;case qr:var S=g._init;return m(y,S(g._payload),_)}if(nl(g)||Wa(g))return g=Ji(g,y.mode,_,null),g.return=y,g;sc(y,g)}return null}function E(y,g,_,S){var b=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:a(y,g,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ku:return _.key===b?l(y,g,_,S):null;case ws:return _.key===b?d(y,g,_,S):null;case qr:return b=_._init,E(y,g,b(_._payload),S)}if(nl(_)||Wa(_))return b!==null?null:f(y,g,_,S,null);sc(y,_)}return null}function v(y,g,_,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return y=y.get(_)||null,a(g,y,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ku:return y=y.get(S.key===null?_:S.key)||null,l(g,y,S,b);case ws:return y=y.get(S.key===null?_:S.key)||null,d(g,y,S,b);case qr:var M=S._init;return v(y,g,_,M(S._payload),b)}if(nl(S)||Wa(S))return y=y.get(_)||null,f(g,y,S,b,null);sc(g,S)}return null}function x(y,g,_,S){for(var b=null,M=null,T=g,I=g=0,A=null;T!==null&&I<_.length;I++){T.index>I?(A=T,T=null):A=T.sibling;var R=E(y,T,_[I],S);if(R===null){T===null&&(T=A);break}t&&T&&R.alternate===null&&e(y,T),g=o(R,g,I),M===null?b=R:M.sibling=R,M=R,T=A}if(I===_.length)return n(y,T),Ne&&Ui(y,I),b;if(T===null){for(;I<_.length;I++)T=m(y,_[I],S),T!==null&&(g=o(T,g,I),M===null?b=T:M.sibling=T,M=T);return Ne&&Ui(y,I),b}for(T=r(y,T);I<_.length;I++)A=v(T,y,I,_[I],S),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?I:A.key),g=o(A,g,I),M===null?b=A:M.sibling=A,M=A);return t&&T.forEach(function(j){return e(y,j)}),Ne&&Ui(y,I),b}function C(y,g,_,S){var b=Wa(_);if(typeof b!="function")throw Error(B(150));if(_=b.call(_),_==null)throw Error(B(151));for(var M=b=null,T=g,I=g=0,A=null,R=_.next();T!==null&&!R.done;I++,R=_.next()){T.index>I?(A=T,T=null):A=T.sibling;var j=E(y,T,R.value,S);if(j===null){T===null&&(T=A);break}t&&T&&j.alternate===null&&e(y,T),g=o(j,g,I),M===null?b=j:M.sibling=j,M=j,T=A}if(R.done)return n(y,T),Ne&&Ui(y,I),b;if(T===null){for(;!R.done;I++,R=_.next())R=m(y,R.value,S),R!==null&&(g=o(R,g,I),M===null?b=R:M.sibling=R,M=R);return Ne&&Ui(y,I),b}for(T=r(y,T);!R.done;I++,R=_.next())R=v(T,y,I,R.value,S),R!==null&&(t&&R.alternate!==null&&T.delete(R.key===null?I:R.key),g=o(R,g,I),M===null?b=R:M.sibling=R,M=R);return t&&T.forEach(function(O){return e(y,O)}),Ne&&Ui(y,I),b}function w(y,g,_,S){if(typeof _=="object"&&_!==null&&_.type===xs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ku:e:{for(var b=_.key,M=g;M!==null;){if(M.key===b){if(b=_.type,b===xs){if(M.tag===7){n(y,M.sibling),g=i(M,_.props.children),g.return=y,y=g;break e}}else if(M.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===qr&&Bv(b)===M.type){n(y,M.sibling),g=i(M,_.props),g.ref=qa(y,M,_),g.return=y,y=g;break e}n(y,M);break}else e(y,M);M=M.sibling}_.type===xs?(g=Ji(_.props.children,y.mode,S,_.key),g.return=y,y=g):(S=Oc(_.type,_.key,_.props,null,y.mode,S),S.ref=qa(y,g,_),S.return=y,y=S)}return s(y);case ws:e:{for(M=_.key;g!==null;){if(g.key===M)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(y,g.sibling),g=i(g,_.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else e(y,g);g=g.sibling}g=Xf(_,y.mode,S),g.return=y,y=g}return s(y);case qr:return M=_._init,w(y,g,M(_._payload),S)}if(nl(_))return x(y,g,_,S);if(Wa(_))return C(y,g,_,S);sc(y,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(y,g.sibling),g=i(g,_),g.return=y,y=g):(n(y,g),g=Zf(_,y.mode,S),g.return=y,y=g),s(y)):n(y,g)}return w}var Zs=ow(!0),sw=ow(!1),dd=Si(null),hd=null,Rs=null,Eg=null;function wg(){Eg=Rs=hd=null}function xg(t){var e=dd.current;Me(dd),t._currentValue=e}function mm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $s(t,e){hd=t,Eg=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Bt=!0),t.firstContext=null)}function yn(t){var e=t._currentValue;if(Eg!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(hd===null)throw Error(B(308));Rs=t,hd.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var Yi=null;function Tg(t){Yi===null?Yi=[t]:Yi.push(t)}function aw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Tg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Sr(t,r)}function Sr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yr=!1;function Ig(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function li(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,_e&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Sr(t,n)}return i=r.interleaved,i===null?(e.next=e,Tg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Sr(t,n)}function Ac(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cg(t,n)}}function Hv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fd(t,e,n,r){var i=t.updateQueue;Yr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,d=l.next;l.next=null,s===null?o=d:s.next=d,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=d:a.next=d,f.lastBaseUpdate=l))}if(o!==null){var m=i.baseState;s=0,f=d=l=null,a=o;do{var E=a.lane,v=a.eventTime;if((r&E)===E){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,C=a;switch(E=e,v=n,C.tag){case 1:if(x=C.payload,typeof x=="function"){m=x.call(v,m,E);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=C.payload,E=typeof x=="function"?x.call(v,m,E):x,E==null)break e;m=Ue({},m,E);break e;case 2:Yr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,E=i.effects,E===null?i.effects=[a]:E.push(a))}else v={eventTime:v,lane:E,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(d=f=v,l=m):f=f.next=v,s|=E;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;E=a,a=E.next,E.next=null,i.lastBaseUpdate=E,i.shared.pending=null}}while(!0);if(f===null&&(l=m),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);ao|=s,t.lanes=s,t.memoizedState=m}}function qv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var mu={},Kn=Si(mu),zl=Si(mu),Bl=Si(mu);function Gi(t){if(t===mu)throw Error(B(174));return t}function Sg(t,e){switch(Re(Bl,e),Re(zl,t),Re(Kn,mu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kp(e,t)}Me(Kn),Re(Kn,e)}function Xs(){Me(Kn),Me(zl),Me(Bl)}function uw(t){Gi(Bl.current);var e=Gi(Kn.current),n=Kp(e,t.type);e!==n&&(Re(zl,t),Re(Kn,n))}function Cg(t){zl.current===t&&(Me(Kn),Me(zl))}var Ve=Si(0);function pd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hf=[];function Lg(){for(var t=0;t<Hf.length;t++)Hf[t]._workInProgressVersionPrimary=null;Hf.length=0}var Pc=jr.ReactCurrentDispatcher,qf=jr.ReactCurrentBatchConfig,so=0,Fe=null,it=null,at=null,md=!1,vl=!1,Hl=0,O4=0;function wt(){throw Error(B(321))}function Ag(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Dn(t[n],e[n]))return!1;return!0}function Pg(t,e,n,r,i,o){if(so=o,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pc.current=t===null||t.memoizedState===null?F4:U4,t=n(r,i),vl){o=0;do{if(vl=!1,Hl=0,25<=o)throw Error(B(301));o+=1,at=it=null,e.updateQueue=null,Pc.current=W4,t=n(r,i)}while(vl)}if(Pc.current=gd,e=it!==null&&it.next!==null,so=0,at=it=Fe=null,md=!1,e)throw Error(B(300));return t}function Rg(){var t=Hl!==0;return Hl=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Fe.memoizedState=at=t:at=at.next=t,at}function vn(){if(it===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var e=at===null?Fe.memoizedState:at.next;if(e!==null)at=e,it=t;else{if(t===null)throw Error(B(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},at===null?Fe.memoizedState=at=t:at=at.next=t}return at}function ql(t,e){return typeof e=="function"?e(t):e}function Yf(t){var e=vn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=it,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,d=o;do{var f=d.lane;if((so&f)===f)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(a=l=m,s=r):l=l.next=m,Fe.lanes|=f,ao|=f}d=d.next}while(d!==null&&d!==o);l===null?s=r:l.next=a,Dn(r,e.memoizedState)||(Bt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Fe.lanes|=o,ao|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gf(t){var e=vn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Dn(o,e.memoizedState)||(Bt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function cw(){}function dw(t,e){var n=Fe,r=vn(),i=e(),o=!Dn(r.memoizedState,i);if(o&&(r.memoizedState=i,Bt=!0),r=r.queue,bg(pw.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,Yl(9,fw.bind(null,n,r,i,e),void 0,null),ut===null)throw Error(B(349));so&30||hw(n,e,i)}return i}function hw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fw(t,e,n,r){e.value=n,e.getSnapshot=r,mw(e)&&gw(t)}function pw(t,e,n){return n(function(){mw(e)&&gw(t)})}function mw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Dn(t,n)}catch{return!0}}function gw(t){var e=Sr(t,1);e!==null&&Rn(e,t,1,-1)}function Yv(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ql,lastRenderedState:t},e.queue=t,t=t.dispatch=V4.bind(null,Fe,t),[e.memoizedState,t]}function Yl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function yw(){return vn().memoizedState}function Rc(t,e,n,r){var i=zn();Fe.flags|=t,i.memoizedState=Yl(1|e,n,void 0,r===void 0?null:r)}function dh(t,e,n,r){var i=vn();r=r===void 0?null:r;var o=void 0;if(it!==null){var s=it.memoizedState;if(o=s.destroy,r!==null&&Ag(r,s.deps)){i.memoizedState=Yl(e,n,o,r);return}}Fe.flags|=t,i.memoizedState=Yl(1|e,n,o,r)}function Gv(t,e){return Rc(8390656,8,t,e)}function bg(t,e){return dh(2048,8,t,e)}function vw(t,e){return dh(4,2,t,e)}function kw(t,e){return dh(4,4,t,e)}function _w(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ew(t,e,n){return n=n!=null?n.concat([t]):null,dh(4,4,_w.bind(null,e,t),n)}function jg(){}function ww(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ag(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function xw(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ag(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Tw(t,e,n){return so&21?(Dn(n,e)||(n=AE(),Fe.lanes|=n,ao|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Bt=!0),t.memoizedState=n)}function M4(t,e){var n=Le;Le=n!==0&&4>n?n:4,t(!0);var r=qf.transition;qf.transition={};try{t(!1),e()}finally{Le=n,qf.transition=r}}function Iw(){return vn().memoizedState}function N4(t,e,n){var r=ci(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sw(t))Cw(e,n);else if(n=aw(t,e,n,r),n!==null){var i=Nt();Rn(n,t,r,i),Lw(n,e,r)}}function V4(t,e,n){var r=ci(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sw(t))Cw(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Dn(a,s)){var l=e.interleaved;l===null?(i.next=i,Tg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=aw(t,e,i,r),n!==null&&(i=Nt(),Rn(n,t,r,i),Lw(n,e,r))}}function Sw(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function Cw(t,e){vl=md=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Lw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cg(t,n)}}var gd={readContext:yn,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},F4={readContext:yn,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:yn,useEffect:Gv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rc(4194308,4,_w.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rc(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=N4.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:Yv,useDebugValue:jg,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=Yv(!1),e=t[0];return t=M4.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,i=zn();if(Ne){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),ut===null)throw Error(B(349));so&30||hw(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Gv(pw.bind(null,r,o,t),[t]),r.flags|=2048,Yl(9,fw.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=zn(),e=ut.identifierPrefix;if(Ne){var n=yr,r=gr;n=(r&~(1<<32-Pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Hl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=O4++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},U4={readContext:yn,useCallback:ww,useContext:yn,useEffect:bg,useImperativeHandle:Ew,useInsertionEffect:vw,useLayoutEffect:kw,useMemo:xw,useReducer:Yf,useRef:yw,useState:function(){return Yf(ql)},useDebugValue:jg,useDeferredValue:function(t){var e=vn();return Tw(e,it.memoizedState,t)},useTransition:function(){var t=Yf(ql)[0],e=vn().memoizedState;return[t,e]},useMutableSource:cw,useSyncExternalStore:dw,useId:Iw,unstable_isNewReconciler:!1},W4={readContext:yn,useCallback:ww,useContext:yn,useEffect:bg,useImperativeHandle:Ew,useInsertionEffect:vw,useLayoutEffect:kw,useMemo:xw,useReducer:Gf,useRef:yw,useState:function(){return Gf(ql)},useDebugValue:jg,useDeferredValue:function(t){var e=vn();return it===null?e.memoizedState=t:Tw(e,it.memoizedState,t)},useTransition:function(){var t=Gf(ql)[0],e=vn().memoizedState;return[t,e]},useMutableSource:cw,useSyncExternalStore:dw,useId:Iw,unstable_isNewReconciler:!1};function Sn(t,e){if(t&&t.defaultProps){e=Ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hh={isMounted:function(t){return(t=t._reactInternals)?ko(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=ci(t),o=Er(r,i);o.payload=e,n!=null&&(o.callback=n),e=li(t,o,i),e!==null&&(Rn(e,t,i,r),Ac(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=ci(t),o=Er(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=li(t,o,i),e!==null&&(Rn(e,t,i,r),Ac(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=ci(t),i=Er(n,r);i.tag=2,e!=null&&(i.callback=e),e=li(t,i,r),e!==null&&(Rn(e,t,r,n),Ac(e,t,r))}};function Kv(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Fl(n,r)||!Fl(i,o):!0}function Aw(t,e,n){var r=!1,i=_i,o=e.contextType;return typeof o=="object"&&o!==null?o=yn(o):(i=Gt(e)?io:At.current,r=e.contextTypes,o=(r=r!=null)?Ks(t,i):_i),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Qv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hh.enqueueReplaceState(e,e.state,null)}function ym(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ig(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=yn(o):(o=Gt(e)?io:At.current,i.context=Ks(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(gm(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hh.enqueueReplaceState(i,i.state,null),fd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e){try{var n="",r=e;do n+=mS(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Kf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $4=typeof WeakMap=="function"?WeakMap:Map;function Pw(t,e,n){n=Er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){vd||(vd=!0,Lm=r),vm(t,e)},n}function Rw(t,e,n){n=Er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){vm(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){vm(t,e),typeof r!="function"&&(ui===null?ui=new Set([this]):ui.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Zv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new $4;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=nC.bind(null,t,e,n),e.then(t,t))}function Xv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Er(-1,1),e.tag=2,li(n,e,1))),n.lanes|=1),t)}var z4=jr.ReactCurrentOwner,Bt=!1;function Ot(t,e,n,r){e.child=t===null?sw(e,null,n,r):Zs(e,t.child,n,r)}function e2(t,e,n,r,i){n=n.render;var o=e.ref;return $s(e,i),r=Pg(t,e,n,r,o,i),n=Rg(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cr(t,e,i)):(Ne&&n&&vg(e),e.flags|=1,Ot(t,e,r,i),e.child)}function t2(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Wg(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,bw(t,e,o,r,i)):(t=Oc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fl,n(s,r)&&t.ref===e.ref)return Cr(t,e,i)}return e.flags|=1,t=di(o,r),t.ref=e.ref,t.return=e,e.child=t}function bw(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Fl(o,r)&&t.ref===e.ref)if(Bt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Bt=!0);else return e.lanes=t.lanes,Cr(t,e,i)}return km(t,e,n,r,i)}function jw(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(js,en),en|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Re(js,en),en|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Re(js,en),en|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Re(js,en),en|=r;return Ot(t,e,i,n),e.child}function Dw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function km(t,e,n,r,i){var o=Gt(n)?io:At.current;return o=Ks(e,o),$s(e,i),n=Pg(t,e,n,r,o,i),r=Rg(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cr(t,e,i)):(Ne&&r&&vg(e),e.flags|=1,Ot(t,e,n,i),e.child)}function n2(t,e,n,r,i){if(Gt(n)){var o=!0;ld(e)}else o=!1;if($s(e,i),e.stateNode===null)bc(t,e),Aw(e,n,r),ym(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=yn(d):(d=Gt(n)?io:At.current,d=Ks(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==d)&&Qv(e,s,r,d),Yr=!1;var E=e.memoizedState;s.state=E,fd(e,r,s,i),l=e.memoizedState,a!==r||E!==l||Yt.current||Yr?(typeof f=="function"&&(gm(e,n,f,r),l=e.memoizedState),(a=Yr||Kv(e,n,a,r,E,l,d))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=d,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,lw(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:Sn(e.type,a),s.props=d,m=e.pendingProps,E=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=yn(l):(l=Gt(n)?io:At.current,l=Ks(e,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||E!==l)&&Qv(e,s,r,l),Yr=!1,E=e.memoizedState,s.state=E,fd(e,r,s,i);var x=e.memoizedState;a!==m||E!==x||Yt.current||Yr?(typeof v=="function"&&(gm(e,n,v,r),x=e.memoizedState),(d=Yr||Kv(e,n,d,r,E,x,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),s.props=r,s.state=x,s.context=l,r=d):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),r=!1)}return _m(t,e,n,r,o,i)}function _m(t,e,n,r,i,o){Dw(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Wv(e,n,!1),Cr(t,e,o);r=e.stateNode,z4.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Zs(e,t.child,null,o),e.child=Zs(e,null,a,o)):Ot(t,e,a,o),e.memoizedState=r.state,i&&Wv(e,n,!0),e.child}function Ow(t){var e=t.stateNode;e.pendingContext?Uv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Uv(t,e.context,!1),Sg(t,e.containerInfo)}function r2(t,e,n,r,i){return Qs(),_g(i),e.flags|=256,Ot(t,e,n,r),e.child}var Em={dehydrated:null,treeContext:null,retryLane:0};function wm(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mw(t,e,n){var r=e.pendingProps,i=Ve.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Re(Ve,i&1),t===null)return pm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=mh(s,r,0,null),t=Ji(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=wm(n),e.memoizedState=Em,t):Dg(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return B4(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=di(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=di(a,o):(o=Ji(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?wm(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Em,r}return o=t.child,t=o.sibling,r=di(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dg(t,e){return e=mh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ac(t,e,n,r){return r!==null&&_g(r),Zs(e,t.child,null,n),t=Dg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function B4(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Kf(Error(B(422))),ac(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=mh({mode:"visible",children:r.children},i,0,null),o=Ji(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Zs(e,t.child,null,s),e.child.memoizedState=wm(s),e.memoizedState=Em,o);if(!(e.mode&1))return ac(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(B(419)),r=Kf(o,r,void 0),ac(t,e,s,r)}if(a=(s&t.childLanes)!==0,Bt||a){if(r=ut,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Sr(t,i),Rn(r,t,i,-1))}return Ug(),r=Kf(Error(B(421))),ac(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=rC.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,tn=ai(i.nextSibling),rn=e,Ne=!0,Ln=null,t!==null&&(dn[hn++]=gr,dn[hn++]=yr,dn[hn++]=oo,gr=t.id,yr=t.overflow,oo=e),e=Dg(e,r.children),e.flags|=4096,e)}function i2(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mm(t.return,e,n)}function Qf(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Nw(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Ot(t,e,r.children,n),r=Ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&i2(t,n,e);else if(t.tag===19)i2(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Re(Ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&pd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Qf(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&pd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Qf(e,!0,n,null,o);break;case"together":Qf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ao|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=di(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=di(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function H4(t,e,n){switch(e.tag){case 3:Ow(e),Qs();break;case 5:uw(e);break;case 1:Gt(e.type)&&ld(e);break;case 4:Sg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Re(dd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Re(Ve,Ve.current&1),e.flags|=128,null):n&e.child.childLanes?Mw(t,e,n):(Re(Ve,Ve.current&1),t=Cr(t,e,n),t!==null?t.sibling:null);Re(Ve,Ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Nw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Re(Ve,Ve.current),r)break;return null;case 22:case 23:return e.lanes=0,jw(t,e,n)}return Cr(t,e,n)}var Vw,xm,Fw,Uw;Vw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xm=function(){};Fw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Gi(Kn.current);var o=null;switch(n){case"input":i=Hp(t,i),r=Hp(t,r),o=[];break;case"select":i=Ue({},i,{value:void 0}),r=Ue({},r,{value:void 0}),o=[];break;case"textarea":i=Gp(t,i),r=Gp(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=sd)}Qp(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(bl.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var l=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&l!==a&&(l!=null||a!=null))if(d==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(bl.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&je("scroll",t),o||a===l||(o=[])):(o=o||[]).push(d,l))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};Uw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ya(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function q4(t,e,n){var r=e.pendingProps;switch(kg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(e),null;case 1:return Gt(e.type)&&ad(),xt(e),null;case 3:return r=e.stateNode,Xs(),Me(Yt),Me(At),Lg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(oc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ln!==null&&(Rm(Ln),Ln=null))),xm(t,e),xt(e),null;case 5:Cg(e);var i=Gi(Bl.current);if(n=e.type,t!==null&&e.stateNode!=null)Fw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return xt(e),null}if(t=Gi(Kn.current),oc(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Hn]=e,r[$l]=o,t=(e.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<il.length;i++)je(il[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":fv(r,o),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},je("invalid",r);break;case"textarea":mv(r,o),je("invalid",r)}Qp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ic(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ic(r.textContent,a,t),i=["children",""+a]):bl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&je("scroll",r)}switch(n){case"input":Qu(r),pv(r,o,!0);break;case"textarea":Qu(r),gv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=sd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Hn]=e,t[$l]=r,Vw(t,e,!1,!1),e.stateNode=t;e:{switch(s=Zp(n,r),n){case"dialog":je("cancel",t),je("close",t),i=r;break;case"iframe":case"object":case"embed":je("load",t),i=r;break;case"video":case"audio":for(i=0;i<il.length;i++)je(il[i],t);i=r;break;case"source":je("error",t),i=r;break;case"img":case"image":case"link":je("error",t),je("load",t),i=r;break;case"details":je("toggle",t),i=r;break;case"input":fv(t,r),i=Hp(t,r),je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ue({},r,{value:void 0}),je("invalid",t);break;case"textarea":mv(t,r),i=Gp(t,r),je("invalid",t);break;default:i=r}Qp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?yE(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mE(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&jl(t,l):typeof l=="number"&&jl(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(bl.hasOwnProperty(o)?l!=null&&o==="onScroll"&&je("scroll",t):l!=null&&ig(t,o,l,s))}switch(n){case"input":Qu(t),pv(t,r,!1);break;case"textarea":Qu(t),gv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ki(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Vs(t,!!r.multiple,o,!1):r.defaultValue!=null&&Vs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=sd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xt(e),null;case 6:if(t&&e.stateNode!=null)Uw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Gi(Bl.current),Gi(Kn.current),oc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Hn]=e,(o=r.nodeValue!==n)&&(t=rn,t!==null))switch(t.tag){case 3:ic(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ic(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Hn]=e,e.stateNode=r}return xt(e),null;case 13:if(Me(Ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&tn!==null&&e.mode&1&&!(e.flags&128))iw(),Qs(),e.flags|=98560,o=!1;else if(o=oc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(B(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[Hn]=e}else Qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xt(e),o=!1}else Ln!==null&&(Rm(Ln),Ln=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ve.current&1?ot===0&&(ot=3):Ug())),e.updateQueue!==null&&(e.flags|=4),xt(e),null);case 4:return Xs(),xm(t,e),t===null&&Ul(e.stateNode.containerInfo),xt(e),null;case 10:return xg(e.type._context),xt(e),null;case 17:return Gt(e.type)&&ad(),xt(e),null;case 19:if(Me(Ve),o=e.memoizedState,o===null)return xt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Ya(o,!1);else{if(ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=pd(t),s!==null){for(e.flags|=128,Ya(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Re(Ve,Ve.current&1|2),e.child}t=t.sibling}o.tail!==null&&Qe()>ea&&(e.flags|=128,r=!0,Ya(o,!1),e.lanes=4194304)}else{if(!r)if(t=pd(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ya(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ne)return xt(e),null}else 2*Qe()-o.renderingStartTime>ea&&n!==1073741824&&(e.flags|=128,r=!0,Ya(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Qe(),e.sibling=null,n=Ve.current,Re(Ve,r?n&1|2:n&1),e):(xt(e),null);case 22:case 23:return Fg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?en&1073741824&&(xt(e),e.subtreeFlags&6&&(e.flags|=8192)):xt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function Y4(t,e){switch(kg(e),e.tag){case 1:return Gt(e.type)&&ad(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xs(),Me(Yt),Me(At),Lg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cg(e),null;case 13:if(Me(Ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Me(Ve),null;case 4:return Xs(),null;case 10:return xg(e.type._context),null;case 22:case 23:return Fg(),null;case 24:return null;default:return null}}var lc=!1,St=!1,G4=typeof WeakSet=="function"?WeakSet:Set,K=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){qe(t,e,r)}else n.current=null}function Tm(t,e,n){try{n()}catch(r){qe(t,e,r)}}var o2=!1;function K4(t,e){if(am=rd,t=HE(),yg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,d=0,f=0,m=t,E=null;t:for(;;){for(var v;m!==n||i!==0&&m.nodeType!==3||(a=s+i),m!==o||r!==0&&m.nodeType!==3||(l=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(v=m.firstChild)!==null;)E=m,m=v;for(;;){if(m===t)break t;if(E===n&&++d===i&&(a=s),E===o&&++f===r&&(l=s),(v=m.nextSibling)!==null)break;m=E,E=m.parentNode}m=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lm={focusedElem:t,selectionRange:n},rd=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var C=x.memoizedProps,w=x.memoizedState,y=e.stateNode,g=y.getSnapshotBeforeUpdate(e.elementType===e.type?C:Sn(e.type,C),w);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(S){qe(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return x=o2,o2=!1,x}function kl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Tm(e,n,o)}i=i.next}while(i!==r)}}function fh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Im(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ww(t){var e=t.alternate;e!==null&&(t.alternate=null,Ww(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[$l],delete e[dm],delete e[R4],delete e[b4])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $w(t){return t.tag===5||t.tag===3||t.tag===4}function s2(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$w(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sd));else if(r!==4&&(t=t.child,t!==null))for(Sm(t,e,n),t=t.sibling;t!==null;)Sm(t,e,n),t=t.sibling}function Cm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Cm(t,e,n),t=t.sibling;t!==null;)Cm(t,e,n),t=t.sibling}var dt=null,Cn=!1;function Ur(t,e,n){for(n=n.child;n!==null;)zw(t,e,n),n=n.sibling}function zw(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(oh,n)}catch{}switch(n.tag){case 5:St||bs(n,e);case 6:var r=dt,i=Cn;dt=null,Ur(t,e,n),dt=r,Cn=i,dt!==null&&(Cn?(t=dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):dt.removeChild(n.stateNode));break;case 18:dt!==null&&(Cn?(t=dt,n=n.stateNode,t.nodeType===8?zf(t.parentNode,n):t.nodeType===1&&zf(t,n),Nl(t)):zf(dt,n.stateNode));break;case 4:r=dt,i=Cn,dt=n.stateNode.containerInfo,Cn=!0,Ur(t,e,n),dt=r,Cn=i;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Tm(n,e,s),i=i.next}while(i!==r)}Ur(t,e,n);break;case 1:if(!St&&(bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){qe(n,e,a)}Ur(t,e,n);break;case 21:Ur(t,e,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,Ur(t,e,n),St=r):Ur(t,e,n);break;default:Ur(t,e,n)}}function a2(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new G4),e.forEach(function(r){var i=iC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:dt=a.stateNode,Cn=!1;break e;case 3:dt=a.stateNode.containerInfo,Cn=!0;break e;case 4:dt=a.stateNode.containerInfo,Cn=!0;break e}a=a.return}if(dt===null)throw Error(B(160));zw(o,s,i),dt=null,Cn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){qe(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Bw(e,t),e=e.sibling}function Bw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xn(e,t),Un(t),r&4){try{kl(3,t,t.return),fh(3,t)}catch(C){qe(t,t.return,C)}try{kl(5,t,t.return)}catch(C){qe(t,t.return,C)}}break;case 1:xn(e,t),Un(t),r&512&&n!==null&&bs(n,n.return);break;case 5:if(xn(e,t),Un(t),r&512&&n!==null&&bs(n,n.return),t.flags&32){var i=t.stateNode;try{jl(i,"")}catch(C){qe(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&hE(i,o),Zp(a,s);var d=Zp(a,o);for(s=0;s<l.length;s+=2){var f=l[s],m=l[s+1];f==="style"?yE(i,m):f==="dangerouslySetInnerHTML"?mE(i,m):f==="children"?jl(i,m):ig(i,f,m,d)}switch(a){case"input":qp(i,o);break;case"textarea":fE(i,o);break;case"select":var E=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Vs(i,!!o.multiple,v,!1):E!==!!o.multiple&&(o.defaultValue!=null?Vs(i,!!o.multiple,o.defaultValue,!0):Vs(i,!!o.multiple,o.multiple?[]:"",!1))}i[$l]=o}catch(C){qe(t,t.return,C)}}break;case 6:if(xn(e,t),Un(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(C){qe(t,t.return,C)}}break;case 3:if(xn(e,t),Un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nl(e.containerInfo)}catch(C){qe(t,t.return,C)}break;case 4:xn(e,t),Un(t);break;case 13:xn(e,t),Un(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ng=Qe())),r&4&&a2(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(St=(d=St)||f,xn(e,t),St=d):xn(e,t),Un(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(K=t,f=t.child;f!==null;){for(m=K=f;K!==null;){switch(E=K,v=E.child,E.tag){case 0:case 11:case 14:case 15:kl(4,E,E.return);break;case 1:bs(E,E.return);var x=E.stateNode;if(typeof x.componentWillUnmount=="function"){r=E,n=E.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(C){qe(r,n,C)}}break;case 5:bs(E,E.return);break;case 22:if(E.memoizedState!==null){u2(m);continue}}v!==null?(v.return=E,K=v):u2(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,l=m.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gE("display",s))}catch(C){qe(t,t.return,C)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(C){qe(t,t.return,C)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:xn(e,t),Un(t),r&4&&a2(t);break;case 21:break;default:xn(e,t),Un(t)}}function Un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($w(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jl(i,""),r.flags&=-33);var o=s2(t);Cm(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=s2(t);Sm(t,a,s);break;default:throw Error(B(161))}}catch(l){qe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Q4(t,e,n){K=t,Hw(t)}function Hw(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||lc;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||St;a=lc;var d=St;if(lc=s,(St=l)&&!d)for(K=i;K!==null;)s=K,l=s.child,s.tag===22&&s.memoizedState!==null?c2(i):l!==null?(l.return=s,K=l):c2(i);for(;o!==null;)K=o,Hw(o),o=o.sibling;K=i,lc=a,St=d}l2(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,K=o):l2(t)}}function l2(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:St||fh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!St)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Sn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&qv(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qv(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Nl(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}St||e.flags&512&&Im(e)}catch(E){qe(e,e.return,E)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function u2(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function c2(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fh(4,e)}catch(l){qe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){qe(e,i,l)}}var o=e.return;try{Im(e)}catch(l){qe(e,o,l)}break;case 5:var s=e.return;try{Im(e)}catch(l){qe(e,s,l)}}}catch(l){qe(e,e.return,l)}if(e===t){K=null;break}var a=e.sibling;if(a!==null){a.return=e.return,K=a;break}K=e.return}}var Z4=Math.ceil,yd=jr.ReactCurrentDispatcher,Og=jr.ReactCurrentOwner,pn=jr.ReactCurrentBatchConfig,_e=0,ut=null,tt=null,pt=0,en=0,js=Si(0),ot=0,Gl=null,ao=0,ph=0,Mg=0,_l=null,$t=null,Ng=0,ea=1/0,hr=null,vd=!1,Lm=null,ui=null,uc=!1,ei=null,kd=0,El=0,Am=null,jc=-1,Dc=0;function Nt(){return _e&6?Qe():jc!==-1?jc:jc=Qe()}function ci(t){return t.mode&1?_e&2&&pt!==0?pt&-pt:D4.transition!==null?(Dc===0&&(Dc=AE()),Dc):(t=Le,t!==0||(t=window.event,t=t===void 0?16:ME(t.type)),t):1}function Rn(t,e,n,r){if(50<El)throw El=0,Am=null,Error(B(185));hu(t,n,r),(!(_e&2)||t!==ut)&&(t===ut&&(!(_e&2)&&(ph|=n),ot===4&&Kr(t,pt)),Kt(t,r),n===1&&_e===0&&!(e.mode&1)&&(ea=Qe()+500,ch&&Ci()))}function Kt(t,e){var n=t.callbackNode;DS(t,e);var r=nd(t,t===ut?pt:0);if(r===0)n!==null&&kv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&kv(n),e===1)t.tag===0?j4(d2.bind(null,t)):tw(d2.bind(null,t)),A4(function(){!(_e&6)&&Ci()}),n=null;else{switch(PE(r)){case 1:n=ug;break;case 4:n=CE;break;case 16:n=td;break;case 536870912:n=LE;break;default:n=td}n=Jw(n,qw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qw(t,e){if(jc=-1,Dc=0,_e&6)throw Error(B(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var r=nd(t,t===ut?pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=_d(t,r);else{e=r;var i=_e;_e|=2;var o=Gw();(ut!==t||pt!==e)&&(hr=null,ea=Qe()+500,Xi(t,e));do try{eC();break}catch(a){Yw(t,a)}while(!0);wg(),yd.current=o,_e=i,tt!==null?e=0:(ut=null,pt=0,e=ot)}if(e!==0){if(e===2&&(i=nm(t),i!==0&&(r=i,e=Pm(t,i))),e===1)throw n=Gl,Xi(t,0),Kr(t,r),Kt(t,Qe()),n;if(e===6)Kr(t,r);else{if(i=t.current.alternate,!(r&30)&&!X4(i)&&(e=_d(t,r),e===2&&(o=nm(t),o!==0&&(r=o,e=Pm(t,o))),e===1))throw n=Gl,Xi(t,0),Kr(t,r),Kt(t,Qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Wi(t,$t,hr);break;case 3:if(Kr(t,r),(r&130023424)===r&&(e=Ng+500-Qe(),10<e)){if(nd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=cm(Wi.bind(null,t,$t,hr),e);break}Wi(t,$t,hr);break;case 4:if(Kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Pn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Z4(r/1960))-r,10<r){t.timeoutHandle=cm(Wi.bind(null,t,$t,hr),r);break}Wi(t,$t,hr);break;case 5:Wi(t,$t,hr);break;default:throw Error(B(329))}}}return Kt(t,Qe()),t.callbackNode===n?qw.bind(null,t):null}function Pm(t,e){var n=_l;return t.current.memoizedState.isDehydrated&&(Xi(t,e).flags|=256),t=_d(t,e),t!==2&&(e=$t,$t=n,e!==null&&Rm(e)),t}function Rm(t){$t===null?$t=t:$t.push.apply($t,t)}function X4(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Dn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kr(t,e){for(e&=~Mg,e&=~ph,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Pn(e),r=1<<n;t[n]=-1,e&=~r}}function d2(t){if(_e&6)throw Error(B(327));zs();var e=nd(t,0);if(!(e&1))return Kt(t,Qe()),null;var n=_d(t,e);if(t.tag!==0&&n===2){var r=nm(t);r!==0&&(e=r,n=Pm(t,r))}if(n===1)throw n=Gl,Xi(t,0),Kr(t,e),Kt(t,Qe()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wi(t,$t,hr),Kt(t,Qe()),null}function Vg(t,e){var n=_e;_e|=1;try{return t(e)}finally{_e=n,_e===0&&(ea=Qe()+500,ch&&Ci())}}function lo(t){ei!==null&&ei.tag===0&&!(_e&6)&&zs();var e=_e;_e|=1;var n=pn.transition,r=Le;try{if(pn.transition=null,Le=1,t)return t()}finally{Le=r,pn.transition=n,_e=e,!(_e&6)&&Ci()}}function Fg(){en=js.current,Me(js)}function Xi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,L4(n)),tt!==null)for(n=tt.return;n!==null;){var r=n;switch(kg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ad();break;case 3:Xs(),Me(Yt),Me(At),Lg();break;case 5:Cg(r);break;case 4:Xs();break;case 13:Me(Ve);break;case 19:Me(Ve);break;case 10:xg(r.type._context);break;case 22:case 23:Fg()}n=n.return}if(ut=t,tt=t=di(t.current,null),pt=en=e,ot=0,Gl=null,Mg=ph=ao=0,$t=_l=null,Yi!==null){for(e=0;e<Yi.length;e++)if(n=Yi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Yi=null}return t}function Yw(t,e){do{var n=tt;try{if(wg(),Pc.current=gd,md){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}md=!1}if(so=0,at=it=Fe=null,vl=!1,Hl=0,Og.current=null,n===null||n.return===null){ot=1,Gl=e,tt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=pt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var E=f.alternate;E?(f.updateQueue=E.updateQueue,f.memoizedState=E.memoizedState,f.lanes=E.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Xv(s);if(v!==null){v.flags&=-257,Jv(v,s,a,o,e),v.mode&1&&Zv(o,d,e),e=v,l=d;var x=e.updateQueue;if(x===null){var C=new Set;C.add(l),e.updateQueue=C}else x.add(l);break e}else{if(!(e&1)){Zv(o,d,e),Ug();break e}l=Error(B(426))}}else if(Ne&&a.mode&1){var w=Xv(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Jv(w,s,a,o,e),_g(Js(l,a));break e}}o=l=Js(l,a),ot!==4&&(ot=2),_l===null?_l=[o]:_l.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var y=Pw(o,l,e);Hv(o,y);break e;case 1:a=l;var g=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ui===null||!ui.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var S=Rw(o,a,e);Hv(o,S);break e}}o=o.return}while(o!==null)}Qw(n)}catch(b){e=b,tt===n&&n!==null&&(tt=n=n.return);continue}break}while(!0)}function Gw(){var t=yd.current;return yd.current=gd,t===null?gd:t}function Ug(){(ot===0||ot===3||ot===2)&&(ot=4),ut===null||!(ao&268435455)&&!(ph&268435455)||Kr(ut,pt)}function _d(t,e){var n=_e;_e|=2;var r=Gw();(ut!==t||pt!==e)&&(hr=null,Xi(t,e));do try{J4();break}catch(i){Yw(t,i)}while(!0);if(wg(),_e=n,yd.current=r,tt!==null)throw Error(B(261));return ut=null,pt=0,ot}function J4(){for(;tt!==null;)Kw(tt)}function eC(){for(;tt!==null&&!IS();)Kw(tt)}function Kw(t){var e=Xw(t.alternate,t,en);t.memoizedProps=t.pendingProps,e===null?Qw(t):tt=e,Og.current=null}function Qw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Y4(n,e),n!==null){n.flags&=32767,tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ot=6,tt=null;return}}else if(n=q4(n,e,en),n!==null){tt=n;return}if(e=e.sibling,e!==null){tt=e;return}tt=e=t}while(e!==null);ot===0&&(ot=5)}function Wi(t,e,n){var r=Le,i=pn.transition;try{pn.transition=null,Le=1,tC(t,e,n,r)}finally{pn.transition=i,Le=r}return null}function tC(t,e,n,r){do zs();while(ei!==null);if(_e&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(OS(t,o),t===ut&&(tt=ut=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uc||(uc=!0,Jw(td,function(){return zs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=pn.transition,pn.transition=null;var s=Le;Le=1;var a=_e;_e|=4,Og.current=null,K4(t,n),Bw(n,t),E4(lm),rd=!!am,lm=am=null,t.current=n,Q4(n),SS(),_e=a,Le=s,pn.transition=o}else t.current=n;if(uc&&(uc=!1,ei=t,kd=i),o=t.pendingLanes,o===0&&(ui=null),AS(n.stateNode),Kt(t,Qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vd)throw vd=!1,t=Lm,Lm=null,t;return kd&1&&t.tag!==0&&zs(),o=t.pendingLanes,o&1?t===Am?El++:(El=0,Am=t):El=0,Ci(),null}function zs(){if(ei!==null){var t=PE(kd),e=pn.transition,n=Le;try{if(pn.transition=null,Le=16>t?16:t,ei===null)var r=!1;else{if(t=ei,ei=null,kd=0,_e&6)throw Error(B(331));var i=_e;for(_e|=4,K=t.current;K!==null;){var o=K,s=o.child;if(K.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var d=a[l];for(K=d;K!==null;){var f=K;switch(f.tag){case 0:case 11:case 15:kl(8,f,o)}var m=f.child;if(m!==null)m.return=f,K=m;else for(;K!==null;){f=K;var E=f.sibling,v=f.return;if(Ww(f),f===d){K=null;break}if(E!==null){E.return=v,K=E;break}K=v}}}var x=o.alternate;if(x!==null){var C=x.child;if(C!==null){x.child=null;do{var w=C.sibling;C.sibling=null,C=w}while(C!==null)}}K=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,K=s;else e:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:kl(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,K=y;break e}K=o.return}}var g=t.current;for(K=g;K!==null;){s=K;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,K=_;else e:for(s=g;K!==null;){if(a=K,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fh(9,a)}}catch(b){qe(a,a.return,b)}if(a===s){K=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,K=S;break e}K=a.return}}if(_e=i,Ci(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(oh,t)}catch{}r=!0}return r}finally{Le=n,pn.transition=e}}return!1}function h2(t,e,n){e=Js(n,e),e=Pw(t,e,1),t=li(t,e,1),e=Nt(),t!==null&&(hu(t,1,e),Kt(t,e))}function qe(t,e,n){if(t.tag===3)h2(t,t,n);else for(;e!==null;){if(e.tag===3){h2(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ui===null||!ui.has(r))){t=Js(n,t),t=Rw(e,t,1),e=li(e,t,1),t=Nt(),e!==null&&(hu(e,1,t),Kt(e,t));break}}e=e.return}}function nC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,ut===t&&(pt&n)===n&&(ot===4||ot===3&&(pt&130023424)===pt&&500>Qe()-Ng?Xi(t,0):Mg|=n),Kt(t,e)}function Zw(t,e){e===0&&(t.mode&1?(e=Ju,Ju<<=1,!(Ju&130023424)&&(Ju=4194304)):e=1);var n=Nt();t=Sr(t,e),t!==null&&(hu(t,e,n),Kt(t,n))}function rC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Zw(t,n)}function iC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),Zw(t,n)}var Xw;Xw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Yt.current)Bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Bt=!1,H4(t,e,n);Bt=!!(t.flags&131072)}else Bt=!1,Ne&&e.flags&1048576&&nw(e,cd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bc(t,e),t=e.pendingProps;var i=Ks(e,At.current);$s(e,n),i=Pg(null,e,r,t,i,n);var o=Rg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Gt(r)?(o=!0,ld(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ig(e),i.updater=hh,e.stateNode=i,i._reactInternals=e,ym(e,r,t,n),e=_m(null,e,r,!0,o,n)):(e.tag=0,Ne&&o&&vg(e),Ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sC(r),t=Sn(r,t),i){case 0:e=km(null,e,r,t,n);break e;case 1:e=n2(null,e,r,t,n);break e;case 11:e=e2(null,e,r,t,n);break e;case 14:e=t2(null,e,r,Sn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),km(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),n2(t,e,r,i,n);case 3:e:{if(Ow(e),t===null)throw Error(B(387));r=e.pendingProps,o=e.memoizedState,i=o.element,lw(t,e),fd(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Js(Error(B(423)),e),e=r2(t,e,r,n,i);break e}else if(r!==i){i=Js(Error(B(424)),e),e=r2(t,e,r,n,i);break e}else for(tn=ai(e.stateNode.containerInfo.firstChild),rn=e,Ne=!0,Ln=null,n=sw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qs(),r===i){e=Cr(t,e,n);break e}Ot(t,e,r,n)}e=e.child}return e;case 5:return uw(e),t===null&&pm(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,um(r,i)?s=null:o!==null&&um(r,o)&&(e.flags|=32),Dw(t,e),Ot(t,e,s,n),e.child;case 6:return t===null&&pm(e),null;case 13:return Mw(t,e,n);case 4:return Sg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zs(e,null,r,n):Ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),e2(t,e,r,i,n);case 7:return Ot(t,e,e.pendingProps,n),e.child;case 8:return Ot(t,e,e.pendingProps.children,n),e.child;case 12:return Ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Re(dd,r._currentValue),r._currentValue=s,o!==null)if(Dn(o.value,s)){if(o.children===i.children&&!Yt.current){e=Cr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Er(-1,n&-n),l.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?l.next=l:(l.next=f.next,f.next=l),d.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),mm(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(B(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),mm(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$s(e,n),i=yn(i),r=r(i),e.flags|=1,Ot(t,e,r,n),e.child;case 14:return r=e.type,i=Sn(r,e.pendingProps),i=Sn(r.type,i),t2(t,e,r,i,n);case 15:return bw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),bc(t,e),e.tag=1,Gt(r)?(t=!0,ld(e)):t=!1,$s(e,n),Aw(e,r,i),ym(e,r,i,n),_m(null,e,r,!0,t,n);case 19:return Nw(t,e,n);case 22:return jw(t,e,n)}throw Error(B(156,e.tag))};function Jw(t,e){return SE(t,e)}function oC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(t,e,n,r){return new oC(t,e,n,r)}function Wg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sC(t){if(typeof t=="function")return Wg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sg)return 11;if(t===ag)return 14}return 2}function di(t,e){var n=t.alternate;return n===null?(n=fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Wg(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case xs:return Ji(n.children,i,o,e);case og:s=8,i|=8;break;case Wp:return t=fn(12,n,e,i|2),t.elementType=Wp,t.lanes=o,t;case $p:return t=fn(13,n,e,i),t.elementType=$p,t.lanes=o,t;case zp:return t=fn(19,n,e,i),t.elementType=zp,t.lanes=o,t;case uE:return mh(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case aE:s=10;break e;case lE:s=9;break e;case sg:s=11;break e;case ag:s=14;break e;case qr:s=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=fn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Ji(t,e,n,r){return t=fn(7,t,r,e),t.lanes=n,t}function mh(t,e,n,r){return t=fn(22,t,r,e),t.elementType=uE,t.lanes=n,t.stateNode={isHidden:!1},t}function Zf(t,e,n){return t=fn(6,t,null,e),t.lanes=n,t}function Xf(t,e,n){return e=fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function aC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bf(0),this.expirationTimes=bf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $g(t,e,n,r,i,o,s,a,l){return t=new aC(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=fn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ig(o),t}function lC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ws,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ex(t){if(!t)return _i;t=t._reactInternals;e:{if(ko(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Gt(n))return ew(t,n,e)}return e}function tx(t,e,n,r,i,o,s,a,l){return t=$g(n,r,!0,t,i,o,s,a,l),t.context=ex(null),n=t.current,r=Nt(),i=ci(n),o=Er(r,i),o.callback=e??null,li(n,o,i),t.current.lanes=i,hu(t,i,r),Kt(t,r),t}function gh(t,e,n,r){var i=e.current,o=Nt(),s=ci(i);return n=ex(n),e.context===null?e.context=n:e.pendingContext=n,e=Er(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=li(i,e,s),t!==null&&(Rn(t,i,s,o),Ac(t,i,s)),s}function Ed(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function f2(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zg(t,e){f2(t,e),(t=t.alternate)&&f2(t,e)}function uC(){return null}var nx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bg(t){this._internalRoot=t}yh.prototype.render=Bg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));gh(t,e,null,null)};yh.prototype.unmount=Bg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;lo(function(){gh(null,t,null,null)}),e[Ir]=null}};function yh(t){this._internalRoot=t}yh.prototype.unstable_scheduleHydration=function(t){if(t){var e=jE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gr.length&&e!==0&&e<Gr[n].priority;n++);Gr.splice(n,0,t),n===0&&OE(t)}};function Hg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function p2(){}function cC(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Ed(s);o.call(d)}}var s=tx(e,r,t,0,null,!1,!1,"",p2);return t._reactRootContainer=s,t[Ir]=s.current,Ul(t.nodeType===8?t.parentNode:t),lo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=Ed(l);a.call(d)}}var l=$g(t,0,!1,null,null,!1,!1,"",p2);return t._reactRootContainer=l,t[Ir]=l.current,Ul(t.nodeType===8?t.parentNode:t),lo(function(){gh(e,l,n,r)}),l}function kh(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ed(s);a.call(l)}}gh(e,s,t,i)}else s=cC(n,e,t,i,r);return Ed(s)}RE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=rl(e.pendingLanes);n!==0&&(cg(e,n|1),Kt(e,Qe()),!(_e&6)&&(ea=Qe()+500,Ci()))}break;case 13:lo(function(){var r=Sr(t,1);if(r!==null){var i=Nt();Rn(r,t,1,i)}}),zg(t,1)}};dg=function(t){if(t.tag===13){var e=Sr(t,134217728);if(e!==null){var n=Nt();Rn(e,t,134217728,n)}zg(t,134217728)}};bE=function(t){if(t.tag===13){var e=ci(t),n=Sr(t,e);if(n!==null){var r=Nt();Rn(n,t,e,r)}zg(t,e)}};jE=function(){return Le};DE=function(t,e){var n=Le;try{return Le=t,e()}finally{Le=n}};Jp=function(t,e,n){switch(e){case"input":if(qp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=uh(r);if(!i)throw Error(B(90));dE(r),qp(r,i)}}}break;case"textarea":fE(t,n);break;case"select":e=n.value,e!=null&&Vs(t,!!n.multiple,e,!1)}};_E=Vg;EE=lo;var dC={usingClientEntryPoint:!1,Events:[pu,Cs,uh,vE,kE,Vg]},Ga={findFiberByHostInstance:qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hC={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=TE(t),t===null?null:t.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||uC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{oh=cc.inject(hC),Gn=cc}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dC;ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hg(e))throw Error(B(200));return lC(t,e,null,n)};ln.createRoot=function(t,e){if(!Hg(t))throw Error(B(299));var n=!1,r="",i=nx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$g(t,1,!1,null,null,n,!1,r,i),t[Ir]=e.current,Ul(t.nodeType===8?t.parentNode:t),new Bg(e)};ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=TE(e),t=t===null?null:t.stateNode,t};ln.flushSync=function(t){return lo(t)};ln.hydrate=function(t,e,n){if(!vh(e))throw Error(B(200));return kh(null,t,e,!0,n)};ln.hydrateRoot=function(t,e,n){if(!Hg(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=nx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=tx(e,null,t,1,n??null,i,!1,o,s),t[Ir]=e.current,Ul(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yh(e)};ln.render=function(t,e,n){if(!vh(e))throw Error(B(200));return kh(null,t,e,!1,n)};ln.unmountComponentAtNode=function(t){if(!vh(t))throw Error(B(40));return t._reactRootContainer?(lo(function(){kh(null,null,t,!1,function(){t._reactRootContainer=null,t[Ir]=null})}),!0):!1};ln.unstable_batchedUpdates=Vg;ln.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vh(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return kh(t,e,n,!1,r)};ln.version="18.3.1-next-f1338f8080-20240426";function rx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rx)}catch(t){console.error(t)}}rx(),rE.exports=ln;var fC=rE.exports,ix,m2=fC;ix=m2.createRoot,m2.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kl(){return Kl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kl.apply(this,arguments)}var ti;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ti||(ti={}));const g2="popstate";function pC(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return bm("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:wd(i)}return gC(e,n,null,t)}function Xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ox(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mC(){return Math.random().toString(36).substr(2,8)}function y2(t,e){return{usr:t.state,key:t.key,idx:e}}function bm(t,e,n,r){return n===void 0&&(n=null),Kl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ya(e):e,{state:n,key:e&&e.key||r||mC()})}function wd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ya(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function gC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=ti.Pop,l=null,d=f();d==null&&(d=0,s.replaceState(Kl({},s.state,{idx:d}),""));function f(){return(s.state||{idx:null}).idx}function m(){a=ti.Pop;let w=f(),y=w==null?null:w-d;d=w,l&&l({action:a,location:C.location,delta:y})}function E(w,y){a=ti.Push;let g=bm(C.location,w,y);d=f()+1;let _=y2(g,d),S=C.createHref(g);try{s.pushState(_,"",S)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(S)}o&&l&&l({action:a,location:C.location,delta:1})}function v(w,y){a=ti.Replace;let g=bm(C.location,w,y);d=f();let _=y2(g,d),S=C.createHref(g);s.replaceState(_,"",S),o&&l&&l({action:a,location:C.location,delta:0})}function x(w){let y=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof w=="string"?w:wd(w);return g=g.replace(/ $/,"%20"),Xe(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let C={get action(){return a},get location(){return t(i,s)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(g2,m),l=w,()=>{i.removeEventListener(g2,m),l=null}},createHref(w){return e(i,w)},createURL:x,encodeLocation(w){let y=x(w);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:E,replace:v,go(w){return s.go(w)}};return C}var v2;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(v2||(v2={}));function yC(t,e,n){return n===void 0&&(n="/"),vC(t,e,n)}function vC(t,e,n,r){let i=typeof e=="string"?ya(e):e,o=qg(i.pathname||"/",n);if(o==null)return null;let s=sx(t);kC(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let d=RC(o);a=LC(s[l],d)}return a}function sx(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Xe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let d=hi([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(Xe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),sx(o.children,e,f,d)),!(o.path==null&&!o.index)&&e.push({path:d,score:SC(d,o.index),routesMeta:f})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of ax(o.path))i(o,s,l)}),e}function ax(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=ax(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function kC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:CC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const _C=/^:[\w-]+$/,EC=3,wC=2,xC=1,TC=10,IC=-2,k2=t=>t==="*";function SC(t,e){let n=t.split("/"),r=n.length;return n.some(k2)&&(r+=IC),e&&(r+=wC),n.filter(i=>!k2(i)).reduce((i,o)=>i+(_C.test(o)?EC:o===""?xC:TC),r)}function CC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function LC(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],d=a===r.length-1,f=o==="/"?e:e.slice(o.length)||"/",m=AC({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},f),E=l.route;if(!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:hi([o,m.pathname]),pathnameBase:OC(hi([o,m.pathnameBase])),route:E}),m.pathnameBase!=="/"&&(o=hi([o,m.pathnameBase]))}return s}function AC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=PC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,f,m)=>{let{paramName:E,isOptional:v}=f;if(E==="*"){let C=a[m]||"";s=o.slice(0,o.length-C.length).replace(/(.)\/+$/,"$1")}const x=a[m];return v&&!x?d[E]=void 0:d[E]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:t}}function PC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ox(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function RC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ox(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function qg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function bC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ya(t):t;return{pathname:n?n.startsWith("/")?n:jC(n,e):e,search:MC(r),hash:NC(i)}}function jC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Jf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function DC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Yg(t,e){let n=DC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Gg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ya(t):(i=Kl({},t),Xe(!i.pathname||!i.pathname.includes("?"),Jf("?","pathname","search",i)),Xe(!i.pathname||!i.pathname.includes("#"),Jf("#","pathname","hash",i)),Xe(!i.search||!i.search.includes("#"),Jf("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let m=e.length-1;if(!r&&s.startsWith("..")){let E=s.split("/");for(;E[0]==="..";)E.shift(),m-=1;i.pathname=E.join("/")}a=m>=0?e[m]:"/"}let l=bC(i,a),d=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(d||f)&&(l.pathname+="/"),l}const hi=t=>t.join("/").replace(/\/\/+/g,"/"),OC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),MC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,NC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function VC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const lx=["post","put","patch","delete"];new Set(lx);const FC=["get",...lx];new Set(FC);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ql(){return Ql=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ql.apply(this,arguments)}const Kg=D.createContext(null),UC=D.createContext(null),Li=D.createContext(null),_h=D.createContext(null),Dr=D.createContext({outlet:null,matches:[],isDataRoute:!1}),ux=D.createContext(null);function WC(t,e){let{relative:n}=e===void 0?{}:e;va()||Xe(!1);let{basename:r,navigator:i}=D.useContext(Li),{hash:o,pathname:s,search:a}=dx(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:hi([r,s])),i.createHref({pathname:l,search:a,hash:o})}function va(){return D.useContext(_h)!=null}function ka(){return va()||Xe(!1),D.useContext(_h).location}function cx(t){D.useContext(Li).static||D.useLayoutEffect(t)}function rr(){let{isDataRoute:t}=D.useContext(Dr);return t?nL():$C()}function $C(){va()||Xe(!1);let t=D.useContext(Kg),{basename:e,future:n,navigator:r}=D.useContext(Li),{matches:i}=D.useContext(Dr),{pathname:o}=ka(),s=JSON.stringify(Yg(i,n.v7_relativeSplatPath)),a=D.useRef(!1);return cx(()=>{a.current=!0}),D.useCallback(function(d,f){if(f===void 0&&(f={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let m=Gg(d,JSON.parse(s),o,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:hi([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,s,o,t])}const zC=D.createContext(null);function BC(t){let e=D.useContext(Dr).outlet;return e&&D.createElement(zC.Provider,{value:t},e)}function dx(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(Li),{matches:i}=D.useContext(Dr),{pathname:o}=ka(),s=JSON.stringify(Yg(i,r.v7_relativeSplatPath));return D.useMemo(()=>Gg(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function HC(t,e){return qC(t,e)}function qC(t,e,n,r){va()||Xe(!1);let{navigator:i,static:o}=D.useContext(Li),{matches:s}=D.useContext(Dr),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let f=ka(),m;if(e){var E;let y=typeof e=="string"?ya(e):e;d==="/"||(E=y.pathname)!=null&&E.startsWith(d)||Xe(!1),m=y}else m=f;let v=m.pathname||"/",x=v;if(d!=="/"){let y=d.replace(/^\//,"").split("/");x="/"+v.replace(/^\//,"").split("/").slice(y.length).join("/")}let C=yC(t,{pathname:x}),w=ZC(C&&C.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:hi([d,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:hi([d,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,r);return e&&w?D.createElement(_h.Provider,{value:{location:Ql({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:ti.Pop}},w):w}function YC(){let t=tL(),e=VC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,null)}const GC=D.createElement(YC,null);class KC extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(Dr.Provider,{value:this.props.routeContext},D.createElement(ux.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function QC(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(Kg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(Dr.Provider,{value:e},r)}function ZC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);f>=0||Xe(!1),s=s.slice(0,Math.min(s.length,f+1))}let l=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let m=s[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:E,errors:v}=n,x=m.route.loader&&E[m.route.id]===void 0&&(!v||v[m.route.id]===void 0);if(m.route.lazy||x){l=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((f,m,E)=>{let v,x=!1,C=null,w=null;n&&(v=a&&m.route.id?a[m.route.id]:void 0,C=m.route.errorElement||GC,l&&(d<0&&E===0?(rL("route-fallback"),x=!0,w=null):d===E&&(x=!0,w=m.route.hydrateFallbackElement||null)));let y=e.concat(s.slice(0,E+1)),g=()=>{let _;return v?_=C:x?_=w:m.route.Component?_=D.createElement(m.route.Component,null):m.route.element?_=m.route.element:_=f,D.createElement(QC,{match:m,routeContext:{outlet:f,matches:y,isDataRoute:n!=null},children:_})};return n&&(m.route.ErrorBoundary||m.route.errorElement||E===0)?D.createElement(KC,{location:n.location,revalidation:n.revalidation,component:C,error:v,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}var hx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(hx||{}),fx=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(fx||{});function XC(t){let e=D.useContext(Kg);return e||Xe(!1),e}function JC(t){let e=D.useContext(UC);return e||Xe(!1),e}function eL(t){let e=D.useContext(Dr);return e||Xe(!1),e}function px(t){let e=eL(),n=e.matches[e.matches.length-1];return n.route.id||Xe(!1),n.route.id}function tL(){var t;let e=D.useContext(ux),n=JC(),r=px();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function nL(){let{router:t}=XC(hx.UseNavigateStable),e=px(fx.UseNavigateStable),n=D.useRef(!1);return cx(()=>{n.current=!0}),D.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ql({fromRouteId:e},o)))},[t,e])}const _2={};function rL(t,e,n){_2[t]||(_2[t]=!0)}function iL(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ds(t){let{to:e,replace:n,state:r,relative:i}=t;va()||Xe(!1);let{future:o,static:s}=D.useContext(Li),{matches:a}=D.useContext(Dr),{pathname:l}=ka(),d=rr(),f=Gg(e,Yg(a,o.v7_relativeSplatPath),l,i==="path"),m=JSON.stringify(f);return D.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:i}),[d,m,i,n,r]),null}function oL(t){return BC(t.context)}function Dt(t){Xe(!1)}function sL(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ti.Pop,navigator:o,static:s=!1,future:a}=t;va()&&Xe(!1);let l=e.replace(/^\/*/,"/"),d=D.useMemo(()=>({basename:l,navigator:o,static:s,future:Ql({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=ya(r));let{pathname:f="/",search:m="",hash:E="",state:v=null,key:x="default"}=r,C=D.useMemo(()=>{let w=qg(f,l);return w==null?null:{location:{pathname:w,search:m,hash:E,state:v,key:x},navigationType:i}},[l,f,m,E,v,x,i]);return C==null?null:D.createElement(Li.Provider,{value:d},D.createElement(_h.Provider,{children:n,value:C}))}function aL(t){let{children:e,location:n}=t;return HC(jm(e),n)}new Promise(()=>{});function jm(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let o=[...e,i];if(r.type===D.Fragment){n.push.apply(n,jm(r.props.children,o));return}r.type!==Dt&&Xe(!1),!r.props.index||!r.props.children||Xe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=jm(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dm(){return Dm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Dm.apply(this,arguments)}function lL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function uL(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function cL(t,e){return t.button===0&&(!e||e==="_self")&&!uL(t)}const dL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],hL="6";try{window.__reactRouterVersion=hL}catch{}const fL="startTransition",E2=nS[fL];function pL(t){let{basename:e,children:n,future:r,window:i}=t,o=D.useRef();o.current==null&&(o.current=pC({window:i,v5Compat:!0}));let s=o.current,[a,l]=D.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},f=D.useCallback(m=>{d&&E2?E2(()=>l(m)):l(m)},[l,d]);return D.useLayoutEffect(()=>s.listen(f),[s,f]),D.useEffect(()=>iL(r),[r]),D.createElement(sL,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const mL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qg=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:d,preventScrollReset:f,viewTransition:m}=e,E=lL(e,dL),{basename:v}=D.useContext(Li),x,C=!1;if(typeof d=="string"&&gL.test(d)&&(x=d,mL))try{let _=new URL(window.location.href),S=d.startsWith("//")?new URL(_.protocol+d):new URL(d),b=qg(S.pathname,v);S.origin===_.origin&&b!=null?d=b+S.search+S.hash:C=!0}catch{}let w=WC(d,{relative:i}),y=yL(d,{replace:s,state:a,target:l,preventScrollReset:f,relative:i,viewTransition:m});function g(_){r&&r(_),_.defaultPrevented||y(_)}return D.createElement("a",Dm({},E,{href:x||w,onClick:C||o?r:g,ref:n,target:l}))});var w2;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(w2||(w2={}));var x2;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(x2||(x2={}));function yL(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=e===void 0?{}:e,l=rr(),d=ka(),f=dx(t,{relative:s});return D.useCallback(m=>{if(cL(m,n)){m.preventDefault();let E=r!==void 0?r:wd(d)===wd(f);l(t,{replace:E,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[d,l,f,r,i,n,t,o,s,a])}var T2={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vL=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},gx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,d=l?t[i+2]:0,f=o>>2,m=(o&3)<<4|a>>4;let E=(a&15)<<2|d>>6,v=d&63;l||(v=64,s||(E=64)),r.push(n[f],n[m],n[E],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vL(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||d==null||m==null)throw new kL;const E=o<<2|a>>4;if(r.push(E),d!==64){const v=a<<4&240|d>>2;if(r.push(v),m!==64){const x=d<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _L=function(t){const e=mx(t);return gx.encodeByteArray(e,!0)},xd=function(t){return _L(t).replace(/\./g,"")},yx=function(t){try{return gx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function EL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wL=()=>EL().__FIREBASE_DEFAULTS__,xL=()=>{if(typeof process>"u"||typeof T2>"u")return;const t=T2.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TL=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yx(t[1]);return e&&JSON.parse(e)},Eh=()=>{try{return wL()||xL()||TL()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vx=t=>{var e,n;return(n=(e=Eh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kx=t=>{const e=vx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_x=()=>{var t;return(t=Eh())===null||t===void 0?void 0:t.config},Ex=t=>{var e;return(e=Eh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function wx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[xd(JSON.stringify(n)),xd(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function SL(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function CL(){var t;const e=(t=Eh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function LL(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function AL(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PL(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function RL(){return!CL()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Tx(){try{return typeof indexedDB=="object"}catch{return!1}}function Ix(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function bL(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL="FirebaseError";class En extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jL,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_o.prototype.create)}}class _o{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?DL(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new En(i,a,r)}}function DL(t,e){return t.replace(OL,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const OL=/\{\$([^}]+)}/g;function ML(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(I2(o)&&I2(s)){if(!Zl(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function I2(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ol(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function sl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function NL(t,e){const n=new VL(t,e);return n.subscribe.bind(n)}class VL{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FL(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ep),i.error===void 0&&(i.error=ep),i.complete===void 0&&(i.complete=ep);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FL(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ep(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UL=1e3,WL=2,$L=4*60*60*1e3,zL=.5;function S2(t,e=UL,n=WL){const r=e*Math.pow(n,t),i=Math.round(zL*r*(Math.random()-.5)*2);return Math.min($L,r+i)}/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class kn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new IL;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qL(e))try{this.getOrInitializeService({instanceIdentifier:$i})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=$i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$i){return this.instances.has(e)}getOptions(e=$i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:HL(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$i){return this.component?this.component.multipleInstances?e:$i:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HL(t){return t===$i?void 0:t}function qL(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BL(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const GL={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},KL=ge.INFO,QL={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},ZL=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=QL[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wh{constructor(e){this.name=e,this._logLevel=KL,this._logHandler=ZL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GL[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const XL=(t,e)=>e.some(n=>t instanceof n);let C2,L2;function JL(){return C2||(C2=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eA(){return L2||(L2=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sx=new WeakMap,Om=new WeakMap,Cx=new WeakMap,tp=new WeakMap,Zg=new WeakMap;function tA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(fi(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Sx.set(n,t)}).catch(()=>{}),Zg.set(e,t),e}function nA(t){if(Om.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Om.set(t,e)}let Mm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Om.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rA(t){Mm=t(Mm)}function iA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(np(this),e,...n);return Cx.set(r,e.sort?e.sort():[e]),fi(r)}:eA().includes(t)?function(...e){return t.apply(np(this),e),fi(Sx.get(this))}:function(...e){return fi(t.apply(np(this),e))}}function oA(t){return typeof t=="function"?iA(t):(t instanceof IDBTransaction&&nA(t),XL(t,JL())?new Proxy(t,Mm):t)}function fi(t){if(t instanceof IDBRequest)return tA(t);if(tp.has(t))return tp.get(t);const e=oA(t);return e!==t&&(tp.set(t,e),Zg.set(e,t)),e}const np=t=>Zg.get(t);function Lx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=fi(s);return r&&s.addEventListener("upgradeneeded",l=>{r(fi(s.result),l.oldVersion,l.newVersion,fi(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const sA=["get","getKey","getAll","getAllKeys","count"],aA=["put","add","delete","clear"],rp=new Map;function A2(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rp.get(e))return rp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=aA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sA.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&l.done]))[0]};return rp.set(e,o),o}rA(t=>({...t,get:(e,n,r)=>A2(e,n)||t.get(e,n,r),has:(e,n)=>!!A2(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nm="@firebase/app",P2="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new wh("@firebase/app"),cA="@firebase/app-compat",dA="@firebase/analytics-compat",hA="@firebase/analytics",fA="@firebase/app-check-compat",pA="@firebase/app-check",mA="@firebase/auth",gA="@firebase/auth-compat",yA="@firebase/database",vA="@firebase/data-connect",kA="@firebase/database-compat",_A="@firebase/functions",EA="@firebase/functions-compat",wA="@firebase/installations",xA="@firebase/installations-compat",TA="@firebase/messaging",IA="@firebase/messaging-compat",SA="@firebase/performance",CA="@firebase/performance-compat",LA="@firebase/remote-config",AA="@firebase/remote-config-compat",PA="@firebase/storage",RA="@firebase/storage-compat",bA="@firebase/firestore",jA="@firebase/vertexai-preview",DA="@firebase/firestore-compat",OA="firebase",MA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="[DEFAULT]",NA={[Nm]:"fire-core",[cA]:"fire-core-compat",[hA]:"fire-analytics",[dA]:"fire-analytics-compat",[pA]:"fire-app-check",[fA]:"fire-app-check-compat",[mA]:"fire-auth",[gA]:"fire-auth-compat",[yA]:"fire-rtdb",[vA]:"fire-data-connect",[kA]:"fire-rtdb-compat",[_A]:"fire-fn",[EA]:"fire-fn-compat",[wA]:"fire-iid",[xA]:"fire-iid-compat",[TA]:"fire-fcm",[IA]:"fire-fcm-compat",[SA]:"fire-perf",[CA]:"fire-perf-compat",[LA]:"fire-rc",[AA]:"fire-rc-compat",[PA]:"fire-gcs",[RA]:"fire-gcs-compat",[bA]:"fire-fst",[DA]:"fire-fst-compat",[jA]:"fire-vertex","fire-js":"fire-js",[OA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=new Map,VA=new Map,Fm=new Map;function R2(t,e){try{t.container.addComponent(e)}catch(n){Lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function On(t){const e=t.name;if(Fm.has(e))return Lr.debug(`There were multiple attempts to register component ${e}.`),!1;Fm.set(e,t);for(const n of Td.values())R2(n,t);for(const n of VA.values())R2(n,t);return!0}function Ai(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Yn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pi=new _o("app","Firebase",FA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=MA;function Ax(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw pi.create("bad-app-name",{appName:String(i)});if(n||(n=_x()),!n)throw pi.create("no-options");const o=Td.get(i);if(o){if(Zl(n,o.options)&&Zl(r,o.config))return o;throw pi.create("duplicate-app",{appName:i})}const s=new YL(i);for(const l of Fm.values())s.addComponent(l);const a=new UA(n,r,s);return Td.set(i,a),a}function xh(t=Vm){const e=Td.get(t);if(!e&&t===Vm&&_x())return Ax();if(!e)throw pi.create("no-app",{appName:t});return e}function Qt(t,e,n){var r;let i=(r=NA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lr.warn(a.join(" "));return}On(new kn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const WA="firebase-heartbeat-database",$A=1,Xl="firebase-heartbeat-store";let ip=null;function Px(){return ip||(ip=Lx(WA,$A,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xl)}catch(n){console.warn(n)}}}}).catch(t=>{throw pi.create("idb-open",{originalErrorMessage:t.message})})),ip}async function zA(t){try{const n=(await Px()).transaction(Xl),r=await n.objectStore(Xl).get(Rx(t));return await n.done,r}catch(e){if(e instanceof En)Lr.warn(e.message);else{const n=pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lr.warn(n.message)}}}async function b2(t,e){try{const r=(await Px()).transaction(Xl,"readwrite");await r.objectStore(Xl).put(e,Rx(t)),await r.done}catch(n){if(n instanceof En)Lr.warn(n.message);else{const r=pi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Lr.warn(r.message)}}}function Rx(t){return`${t.name}!${t.options.appId}`}/**
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
 */const BA=1024,HA=30*24*60*60*1e3;class qA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=j2();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=HA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Lr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=j2(),{heartbeatsToSend:r,unsentEntries:i}=YA(this._heartbeatsCache.heartbeats),o=xd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Lr.warn(n),""}}}function j2(){return new Date().toISOString().substring(0,10)}function YA(t,e=BA){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),D2(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),D2(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tx()?Ix().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return b2(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return b2(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function D2(t){return xd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t){On(new kn("platform-logger",e=>new lA(e),"PRIVATE")),On(new kn("heartbeat",e=>new qA(e),"PRIVATE")),Qt(Nm,P2,t),Qt(Nm,P2,"esm2017"),Qt("fire-js","")}KA("");function Xg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function bx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QA=bx,jx=new _o("auth","Firebase",bx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=new wh("@firebase/auth");function ZA(t,...e){Id.logLevel<=ge.WARN&&Id.warn(`Auth (${Eo}): ${t}`,...e)}function Mc(t,...e){Id.logLevel<=ge.ERROR&&Id.error(`Auth (${Eo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,...e){throw Jg(t,...e)}function Qn(t,...e){return Jg(t,...e)}function Dx(t,e,n){const r=Object.assign(Object.assign({},QA()),{[e]:n});return new _o("auth","Firebase",r).create(e,{appName:t.name})}function wr(t){return Dx(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jx.create(t,...e)}function ee(t,e,...n){if(!t)throw Jg(e,...n)}function vr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mc(e),new Error(e)}function Ar(t,e){t||vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function XA(){return O2()==="http:"||O2()==="https:"}function O2(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XA()||xx()||"connection"in navigator)?navigator.onLine:!0}function eP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ar(n>e,"Short delay should be less than long delay!"),this.isMobile=SL()||AL()}get(){return JA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(t,e){Ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=new yu(3e4,6e4);function Or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ir(t,e,n,r,i={}){return Mx(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=gu(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:l},o);return LL()||(d.referrerPolicy="no-referrer"),Ox.fetch()(Nx(t,t.config.apiHost,n,a),d)})}async function Mx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tP),e);try{const i=new iP(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw dc(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,d]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw dc(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw dc(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw dc(t,"user-disabled",s);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Dx(t,f,d);Mn(t,f)}}catch(i){if(i instanceof En)throw i;Mn(t,"network-request-failed",{message:String(i)})}}async function vu(t,e,n,r,i={}){const o=await ir(t,e,n,r,i);return"mfaPendingCredential"in o&&Mn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Nx(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?e1(t.config,i):`${t.config.apiScheme}://${i}`}function rP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qn(this.auth,"network-request-failed")),nP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function dc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qn(t,e,r);return i.customData._tokenResponse=n,i}function M2(t){return t!==void 0&&t.enterprise!==void 0}class oP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function sP(t,e){return ir(t,"GET","/v2/recaptchaConfig",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aP(t,e){return ir(t,"POST","/v1/accounts:delete",e)}async function Vx(t,e){return ir(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lP(t,e=!1){const n=We(t),r=await n.getIdToken(e),i=t1(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:wl(op(i.auth_time)),issuedAtTime:wl(op(i.iat)),expirationTime:wl(op(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function op(t){return Number(t)*1e3}function t1(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Mc("JWT malformed, contained fewer than 3 sections"),null;try{const i=yx(n);return i?JSON.parse(i):(Mc("Failed to decode base64 JWT payload"),null)}catch(i){return Mc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function N2(t){const e=t1(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof En&&uP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wl(this.lastLoginAt),this.creationTime=wl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ta(t,Vx(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Fx(o.providerUserInfo):[],a=hP(t.providerData,s),l=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?d:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Wm(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function dP(t){const e=We(t);await Sd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Fx(t){return t.map(e=>{var{providerId:n}=e,r=Xg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fP(t,e){const n=await Mx(t,{},async()=>{const r=gu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Nx(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ox.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pP(t,e){return ir(t,"POST","/v2/accounts:revokeToken",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):N2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=N2(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await fP(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Bs;return r&&(ee(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(ee(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bs,this.toJSON())}_performRefresh(){return vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Xg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Wm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await ta(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lP(this,e)}reload(){return dP(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yn(this.auth.app))return Promise.reject(wr(this.auth));const e=await this.getIdToken();return await ta(this,aP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,E=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,x=(s=n.photoURL)!==null&&s!==void 0?s:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(d=n.createdAt)!==null&&d!==void 0?d:void 0,g=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:_,emailVerified:S,isAnonymous:b,providerData:M,stsTokenManager:T}=n;ee(_&&T,e,"internal-error");const I=Bs.fromJSON(this.name,T);ee(typeof _=="string",e,"internal-error"),Wr(m,e.name),Wr(E,e.name),ee(typeof S=="boolean",e,"internal-error"),ee(typeof b=="boolean",e,"internal-error"),Wr(v,e.name),Wr(x,e.name),Wr(C,e.name),Wr(w,e.name),Wr(y,e.name),Wr(g,e.name);const A=new kr({uid:_,auth:e,email:E,emailVerified:S,displayName:m,isAnonymous:b,photoURL:x,phoneNumber:v,tenantId:C,stsTokenManager:I,createdAt:y,lastLoginAt:g});return M&&Array.isArray(M)&&(A.providerData=M.map(R=>Object.assign({},R))),w&&(A._redirectEventId=w),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Bs;i.updateFromServerResponse(n);const o=new kr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Sd(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ee(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Fx(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new Bs;a.updateFromIdToken(r);const l=new kr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Wm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2=new Map;function _r(t){Ar(t instanceof Function,"Expected a class definition");let e=V2.get(t);return e?(Ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,V2.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ux.type="NONE";const F2=Ux;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t,e,n){return`firebase:${t}:${e}:${n}`}class Hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Nc(this.userKey,i.apiKey,o),this.fullPersistenceKey=Nc("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hs(_r(F2),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||_r(F2);const s=Nc(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const f=await d._get(s);if(f){const m=kr._fromJSON(e,f);d!==o&&(a=m),o=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Hs(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(s)}catch{}})),new Hs(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qx(e))return"Blackberry";if(Yx(e))return"Webos";if($x(e))return"Safari";if((e.includes("chrome/")||zx(e))&&!e.includes("edge/"))return"Chrome";if(Hx(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wx(t=Pt()){return/firefox\//i.test(t)}function $x(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zx(t=Pt()){return/crios\//i.test(t)}function Bx(t=Pt()){return/iemobile/i.test(t)}function Hx(t=Pt()){return/android/i.test(t)}function qx(t=Pt()){return/blackberry/i.test(t)}function Yx(t=Pt()){return/webos/i.test(t)}function n1(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mP(t=Pt()){var e;return n1(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gP(){return PL()&&document.documentMode===10}function Gx(t=Pt()){return n1(t)||Hx(t)||Yx(t)||qx(t)||/windows phone/i.test(t)||Bx(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(t,e=[]){let n;switch(t){case"Browser":n=U2(Pt());break;case"Worker":n=`${U2(Pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Eo}/${r}`}/**
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
 */class yP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vP(t,e={}){return ir(t,"GET","/v2/passwordPolicy",Or(t,e))}/**
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
 */const kP=6;class _P{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:kP,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new W2(this),this.idTokenSubscription=new W2(this),this.beforeStateQueue=new yP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_r(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Hs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vx(this,{idToken:e}),r=await kr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Yn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yn(this.app))return Promise.reject(wr(this));const n=e?We(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yn(this.app)?Promise.reject(wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yn(this.app)?Promise.reject(wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_r(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vP(this),n=new _P(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _o("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_r(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[_r(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ZA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pi(t){return We(t)}class W2{constructor(e){this.auth=e,this.observer=null,this.addObserver=NL(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Th={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wP(t){Th=t}function Qx(t){return Th.loadJS(t)}function xP(){return Th.recaptchaEnterpriseScript}function TP(){return Th.gapiScript}function IP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const SP="recaptcha-enterprise",CP="NO_RECAPTCHA";class LP{constructor(e){this.type=SP,this.auth=Pi(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{sP(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new oP(l);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,s(d.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;M2(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(d=>{s(d)}).catch(()=>{s(CP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&M2(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=xP();l.length!==0&&(l+=a),Qx(l).then(()=>{i(a,o,s)}).catch(d=>{s(d)})}}).catch(a=>{s(a)})})}}async function $2(t,e,n,r=!1){const i=new LP(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Cd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await $2(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await $2(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(t,e){const n=Ai(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Zl(o,e??{}))return i;Mn(i,"already-initialized")}return n.initialize({options:e})}function PP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_r);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RP(t,e,n){const r=Pi(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Zx(e),{host:s,port:a}=bP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),jP()}function Zx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bP(t){const e=Zx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:z2(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:z2(s)}}}function z2(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vr("not implemented")}_getIdTokenResponse(e){return vr("not implemented")}_linkToIdToken(e,n){return vr("not implemented")}_getReauthenticationResolver(e){return vr("not implemented")}}async function DP(t,e){return ir(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OP(t,e){return vu(t,"POST","/v1/accounts:signInWithPassword",Or(t,e))}async function MP(t,e){return ir(t,"POST","/v1/accounts:sendOobCode",Or(t,e))}async function NP(t,e){return MP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(t,e){return vu(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}async function FP(t,e){return vu(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends r1{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Jl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Jl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cd(e,n,"signInWithPassword",OP);case"emailLink":return VP(e,{email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cd(e,r,"signUpPassword",DP);case"emailLink":return FP(e,{idToken:n,email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t,e){return vu(t,"POST","/v1/accounts:signInWithIdp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP="http://localhost";class uo extends r1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new uo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Xg(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new uo(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return qs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qs(e,n)}buildRequest(){const e={requestUri:UP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=gu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $P(t){const e=ol(sl(t)).link,n=e?ol(sl(e)).deep_link_id:null,r=ol(sl(t)).deep_link_id;return(r?ol(sl(r)).link:null)||r||n||e||t}class i1{constructor(e){var n,r,i,o,s,a;const l=ol(sl(e)),d=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,m=WP((i=l.mode)!==null&&i!==void 0?i:null);ee(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$P(e);try{return new i1(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(){this.providerId=_a.PROVIDER_ID}static credential(e,n){return Jl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=i1.parseLink(n);return ee(r,"argument-error"),Jl._fromEmailAndCode(e,r.code,r.tenantId)}}_a.PROVIDER_ID="password";_a.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_a.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends Xx{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends ku{constructor(){super("facebook.com")}static credential(e){return uo._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends ku{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return uo._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.GOOGLE_SIGN_IN_METHOD="google.com";mr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends ku{constructor(){super("github.com")}static credential(e){return uo._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.GITHUB_SIGN_IN_METHOD="github.com";Zr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends ku{constructor(){super("twitter.com")}static credential(e,n){return uo._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xr.credential(n,r)}catch{return null}}}Xr.TWITTER_SIGN_IN_METHOD="twitter.com";Xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zP(t,e){return vu(t,"POST","/v1/accounts:signUp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await kr._fromIdTokenResponse(e,r,i),s=B2(r);return new co({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=B2(r);return new co({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function B2(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld extends En{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ld.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ld(e,n,r,i)}}function Jx(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ld._fromErrorAndOperation(t,o,e,r):o})}async function BP(t,e,n=!1){const r=await ta(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return co._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HP(t,e,n=!1){const{auth:r}=t;if(Yn(r.app))return Promise.reject(wr(r));const i="reauthenticate";try{const o=await ta(t,Jx(r,i,e,t),n);ee(o.idToken,r,"internal-error");const s=t1(o.idToken);ee(s,r,"internal-error");const{sub:a}=s;return ee(t.uid===a,r,"user-mismatch"),co._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Mn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(t,e,n=!1){if(Yn(t.app))return Promise.reject(wr(t));const r="signIn",i=await Jx(t,r,e),o=await co._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function qP(t,e){return eT(Pi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tT(t){const e=Pi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function YP(t,e,n){const r=Pi(t);await Cd(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",NP)}async function GP(t,e,n){if(Yn(t.app))return Promise.reject(wr(t));const r=Pi(t),s=await Cd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",zP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&tT(t),l}),a=await co._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function KP(t,e,n){return Yn(t.app)?Promise.reject(wr(t)):qP(We(t),_a.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tT(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QP(t,e){return ir(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=We(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await ta(r,QP(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function XP(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function JP(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function eR(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function tR(t){return We(t).signOut()}async function nR(t){return We(t).delete()}const Ad="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ad,"1"),this.storage.removeItem(Ad),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=1e3,iR=10;class rT extends nT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);gP()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rT.type="LOCAL";const oR=rT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT extends nT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iT.type="SESSION";const oT=iT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ih(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async d=>d(n.origin,o)),l=await sR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ih.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class aR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const d=o1("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(m){const E=m;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(E.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(){return window}function lR(t){Zn().location.href=t}/**
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
 */function sT(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function uR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dR(){return sT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT="firebaseLocalStorageDb",hR=1,Pd="firebaseLocalStorage",lT="fbase_key";class _u{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sh(t,e){return t.transaction([Pd],e?"readwrite":"readonly").objectStore(Pd)}function fR(){const t=indexedDB.deleteDatabase(aT);return new _u(t).toPromise()}function $m(){const t=indexedDB.open(aT,hR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pd,{keyPath:lT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pd)?e(r):(r.close(),await fR(),e(await $m()))})})}async function H2(t,e,n){const r=Sh(t,!0).put({[lT]:e,value:n});return new _u(r).toPromise()}async function pR(t,e){const n=Sh(t,!1).get(e),r=await new _u(n).toPromise();return r===void 0?null:r.value}function q2(t,e){const n=Sh(t,!0).delete(e);return new _u(n).toPromise()}const mR=800,gR=3;class uT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $m(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ih._getInstance(dR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uR(),!this.activeServiceWorker)return;this.sender=new aR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $m();return await H2(e,Ad,"1"),await q2(e,Ad),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>H2(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>q2(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Sh(i,!1).getAll();return new _u(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uT.type="LOCAL";const yR=uT;new yu(3e4,6e4);/**
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
 */function vR(t,e){return e?_r(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1 extends r1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kR(t){return eT(t.auth,new s1(t),t.bypassAuthState)}function _R(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),HP(n,new s1(t),t.bypassAuthState)}async function ER(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),BP(n,new s1(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kR;case"linkViaPopup":case"linkViaRedirect":return ER;case"reauthViaPopup":case"reauthViaRedirect":return _R;default:Mn(this.auth,"internal-error")}}resolve(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=new yu(2e3,1e4);class Os extends cT{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Os.currentPopupAction&&Os.currentPopupAction.cancel(),Os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Ar(this.filter.length===1,"Popup operations only handle one event");const e=o1();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wR.get())};e()}}Os.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR="pendingRedirect",Vc=new Map;class TR extends cT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vc.get(this.auth._key());if(!e){try{const r=await IR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vc.set(this.auth._key(),e)}return this.bypassAuthState||Vc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IR(t,e){const n=LR(e),r=CR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function SR(t,e){Vc.set(t._key(),e)}function CR(t){return _r(t._redirectPersistence)}function LR(t){return Nc(xR,t.config.apiKey,t.name)}async function AR(t,e,n=!1){if(Yn(t.app))return Promise.reject(wr(t));const r=Pi(t),i=vR(r,e),s=await new TR(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=10*60*1e3;class RR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Y2(e))}saveEventToCache(e){this.cachedEventUids.add(Y2(e)),this.lastProcessedEventTime=Date.now()}}function Y2(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jR(t,e={}){return ir(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OR=/^https?/;async function MR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jR(t);for(const n of e)try{if(NR(n))return}catch{}Mn(t,"unauthorized-domain")}function NR(t){const e=Um(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!OR.test(n))return!1;if(DR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const VR=new yu(3e4,6e4);function G2(){const t=Zn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FR(t){return new Promise((e,n)=>{var r,i,o;function s(){G2(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{G2(),n(Qn(t,"network-request-failed"))},timeout:VR.get()})}if(!((i=(r=Zn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Zn().gapi)===null||o===void 0)&&o.load)s();else{const a=IP("iframefcb");return Zn()[a]=()=>{gapi.load?s():n(Qn(t,"network-request-failed"))},Qx(`${TP()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Fc=null,e})}let Fc=null;function UR(t){return Fc=Fc||FR(t),Fc}/**
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
 */const WR=new yu(5e3,15e3),$R="__/auth/iframe",zR="emulator/auth/iframe",BR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qR(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?e1(e,zR):`https://${t.config.authDomain}/${$R}`,r={apiKey:e.apiKey,appName:t.name,v:Eo},i=HR.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${gu(r).slice(1)}`}async function YR(t){const e=await UR(t),n=Zn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:qR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BR,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Qn(t,"network-request-failed"),a=Zn().setTimeout(()=>{o(s)},WR.get());function l(){Zn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const GR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KR=500,QR=600,ZR="_blank",XR="http://localhost";class K2{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JR(t,e,n,r=KR,i=QR){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},GR),{width:r.toString(),height:i.toString(),top:o,left:s}),d=Pt().toLowerCase();n&&(a=zx(d)?ZR:n),Wx(d)&&(e=e||XR,l.scrollbars="yes");const f=Object.entries(l).reduce((E,[v,x])=>`${E}${v}=${x},`,"");if(mP(d)&&a!=="_self")return eb(e||"",a),new K2(null);const m=window.open(e||"",a,f);ee(m,t,"popup-blocked");try{m.focus()}catch{}return new K2(m)}function eb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const tb="__/auth/handler",nb="emulator/auth/handler",rb=encodeURIComponent("fac");async function Q2(t,e,n,r,i,o){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Eo,eventId:i};if(e instanceof Xx){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",ML(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))s[f]=m}if(e instanceof ku){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),d=l?`#${rb}=${encodeURIComponent(l)}`:"";return`${ib(t)}?${gu(a).slice(1)}${d}`}function ib({config:t}){return t.emulator?e1(t,nb):`https://${t.authDomain}/${tb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="webStorageSupport";class ob{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oT,this._completeRedirectFn=AR,this._overrideRedirectResult=SR}async _openPopup(e,n,r,i){var o;Ar((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Q2(e,n,r,Um(),i);return JR(e,s,o1())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Q2(e,n,r,Um(),i);return lR(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Ar(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YR(e),r=new RR(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sp,{type:sp},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[sp];s!==void 0&&n(!!s),Mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gx()||$x()||n1()}}const sb=ob;var Z2="@firebase/auth",X2="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ub(t){On(new kn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;ee(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kx(t)},d=new EP(r,i,o,l);return PP(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),On(new kn("auth-internal",e=>{const n=Pi(e.getProvider("auth").getImmediate());return(r=>new ab(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(Z2,X2,lb(t)),Qt(Z2,X2,"esm2017")}/**
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
 */const cb=5*60,db=Ex("authIdTokenMaxAge")||cb;let J2=null;const hb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>db)return;const i=n==null?void 0:n.token;J2!==i&&(J2=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hT(t=xh()){const e=Ai(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AP(t,{popupRedirectResolver:sb,persistence:[yR,oR,oT]}),r=Ex("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=hb(o.toString());JP(n,s,()=>s(n.currentUser)),XP(n,a=>s(a))}}const i=vx("auth");return i&&RP(n,`http://${i}`),n}function fb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}wP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Qn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",fb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ub("Browser");var pb="firebase",mb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt(pb,mb,"app");var ek=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eo,fT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,I){function A(){}A.prototype=I.prototype,T.D=I.prototype,T.prototype=new A,T.prototype.constructor=T,T.C=function(R,j,O){for(var P=Array(arguments.length-2),te=2;te<arguments.length;te++)P[te-2]=arguments[te];return I.prototype[j].apply(R,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,I,A){A||(A=0);var R=Array(16);if(typeof I=="string")for(var j=0;16>j;++j)R[j]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(j=0;16>j;++j)R[j]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=T.g[0],A=T.g[1],j=T.g[2];var O=T.g[3],P=I+(O^A&(j^O))+R[0]+3614090360&4294967295;I=A+(P<<7&4294967295|P>>>25),P=O+(j^I&(A^j))+R[1]+3905402710&4294967295,O=I+(P<<12&4294967295|P>>>20),P=j+(A^O&(I^A))+R[2]+606105819&4294967295,j=O+(P<<17&4294967295|P>>>15),P=A+(I^j&(O^I))+R[3]+3250441966&4294967295,A=j+(P<<22&4294967295|P>>>10),P=I+(O^A&(j^O))+R[4]+4118548399&4294967295,I=A+(P<<7&4294967295|P>>>25),P=O+(j^I&(A^j))+R[5]+1200080426&4294967295,O=I+(P<<12&4294967295|P>>>20),P=j+(A^O&(I^A))+R[6]+2821735955&4294967295,j=O+(P<<17&4294967295|P>>>15),P=A+(I^j&(O^I))+R[7]+4249261313&4294967295,A=j+(P<<22&4294967295|P>>>10),P=I+(O^A&(j^O))+R[8]+1770035416&4294967295,I=A+(P<<7&4294967295|P>>>25),P=O+(j^I&(A^j))+R[9]+2336552879&4294967295,O=I+(P<<12&4294967295|P>>>20),P=j+(A^O&(I^A))+R[10]+4294925233&4294967295,j=O+(P<<17&4294967295|P>>>15),P=A+(I^j&(O^I))+R[11]+2304563134&4294967295,A=j+(P<<22&4294967295|P>>>10),P=I+(O^A&(j^O))+R[12]+1804603682&4294967295,I=A+(P<<7&4294967295|P>>>25),P=O+(j^I&(A^j))+R[13]+4254626195&4294967295,O=I+(P<<12&4294967295|P>>>20),P=j+(A^O&(I^A))+R[14]+2792965006&4294967295,j=O+(P<<17&4294967295|P>>>15),P=A+(I^j&(O^I))+R[15]+1236535329&4294967295,A=j+(P<<22&4294967295|P>>>10),P=I+(j^O&(A^j))+R[1]+4129170786&4294967295,I=A+(P<<5&4294967295|P>>>27),P=O+(A^j&(I^A))+R[6]+3225465664&4294967295,O=I+(P<<9&4294967295|P>>>23),P=j+(I^A&(O^I))+R[11]+643717713&4294967295,j=O+(P<<14&4294967295|P>>>18),P=A+(O^I&(j^O))+R[0]+3921069994&4294967295,A=j+(P<<20&4294967295|P>>>12),P=I+(j^O&(A^j))+R[5]+3593408605&4294967295,I=A+(P<<5&4294967295|P>>>27),P=O+(A^j&(I^A))+R[10]+38016083&4294967295,O=I+(P<<9&4294967295|P>>>23),P=j+(I^A&(O^I))+R[15]+3634488961&4294967295,j=O+(P<<14&4294967295|P>>>18),P=A+(O^I&(j^O))+R[4]+3889429448&4294967295,A=j+(P<<20&4294967295|P>>>12),P=I+(j^O&(A^j))+R[9]+568446438&4294967295,I=A+(P<<5&4294967295|P>>>27),P=O+(A^j&(I^A))+R[14]+3275163606&4294967295,O=I+(P<<9&4294967295|P>>>23),P=j+(I^A&(O^I))+R[3]+4107603335&4294967295,j=O+(P<<14&4294967295|P>>>18),P=A+(O^I&(j^O))+R[8]+1163531501&4294967295,A=j+(P<<20&4294967295|P>>>12),P=I+(j^O&(A^j))+R[13]+2850285829&4294967295,I=A+(P<<5&4294967295|P>>>27),P=O+(A^j&(I^A))+R[2]+4243563512&4294967295,O=I+(P<<9&4294967295|P>>>23),P=j+(I^A&(O^I))+R[7]+1735328473&4294967295,j=O+(P<<14&4294967295|P>>>18),P=A+(O^I&(j^O))+R[12]+2368359562&4294967295,A=j+(P<<20&4294967295|P>>>12),P=I+(A^j^O)+R[5]+4294588738&4294967295,I=A+(P<<4&4294967295|P>>>28),P=O+(I^A^j)+R[8]+2272392833&4294967295,O=I+(P<<11&4294967295|P>>>21),P=j+(O^I^A)+R[11]+1839030562&4294967295,j=O+(P<<16&4294967295|P>>>16),P=A+(j^O^I)+R[14]+4259657740&4294967295,A=j+(P<<23&4294967295|P>>>9),P=I+(A^j^O)+R[1]+2763975236&4294967295,I=A+(P<<4&4294967295|P>>>28),P=O+(I^A^j)+R[4]+1272893353&4294967295,O=I+(P<<11&4294967295|P>>>21),P=j+(O^I^A)+R[7]+4139469664&4294967295,j=O+(P<<16&4294967295|P>>>16),P=A+(j^O^I)+R[10]+3200236656&4294967295,A=j+(P<<23&4294967295|P>>>9),P=I+(A^j^O)+R[13]+681279174&4294967295,I=A+(P<<4&4294967295|P>>>28),P=O+(I^A^j)+R[0]+3936430074&4294967295,O=I+(P<<11&4294967295|P>>>21),P=j+(O^I^A)+R[3]+3572445317&4294967295,j=O+(P<<16&4294967295|P>>>16),P=A+(j^O^I)+R[6]+76029189&4294967295,A=j+(P<<23&4294967295|P>>>9),P=I+(A^j^O)+R[9]+3654602809&4294967295,I=A+(P<<4&4294967295|P>>>28),P=O+(I^A^j)+R[12]+3873151461&4294967295,O=I+(P<<11&4294967295|P>>>21),P=j+(O^I^A)+R[15]+530742520&4294967295,j=O+(P<<16&4294967295|P>>>16),P=A+(j^O^I)+R[2]+3299628645&4294967295,A=j+(P<<23&4294967295|P>>>9),P=I+(j^(A|~O))+R[0]+4096336452&4294967295,I=A+(P<<6&4294967295|P>>>26),P=O+(A^(I|~j))+R[7]+1126891415&4294967295,O=I+(P<<10&4294967295|P>>>22),P=j+(I^(O|~A))+R[14]+2878612391&4294967295,j=O+(P<<15&4294967295|P>>>17),P=A+(O^(j|~I))+R[5]+4237533241&4294967295,A=j+(P<<21&4294967295|P>>>11),P=I+(j^(A|~O))+R[12]+1700485571&4294967295,I=A+(P<<6&4294967295|P>>>26),P=O+(A^(I|~j))+R[3]+2399980690&4294967295,O=I+(P<<10&4294967295|P>>>22),P=j+(I^(O|~A))+R[10]+4293915773&4294967295,j=O+(P<<15&4294967295|P>>>17),P=A+(O^(j|~I))+R[1]+2240044497&4294967295,A=j+(P<<21&4294967295|P>>>11),P=I+(j^(A|~O))+R[8]+1873313359&4294967295,I=A+(P<<6&4294967295|P>>>26),P=O+(A^(I|~j))+R[15]+4264355552&4294967295,O=I+(P<<10&4294967295|P>>>22),P=j+(I^(O|~A))+R[6]+2734768916&4294967295,j=O+(P<<15&4294967295|P>>>17),P=A+(O^(j|~I))+R[13]+1309151649&4294967295,A=j+(P<<21&4294967295|P>>>11),P=I+(j^(A|~O))+R[4]+4149444226&4294967295,I=A+(P<<6&4294967295|P>>>26),P=O+(A^(I|~j))+R[11]+3174756917&4294967295,O=I+(P<<10&4294967295|P>>>22),P=j+(I^(O|~A))+R[2]+718787259&4294967295,j=O+(P<<15&4294967295|P>>>17),P=A+(O^(j|~I))+R[9]+3951481745&4294967295,T.g[0]=T.g[0]+I&4294967295,T.g[1]=T.g[1]+(j+(P<<21&4294967295|P>>>11))&4294967295,T.g[2]=T.g[2]+j&4294967295,T.g[3]=T.g[3]+O&4294967295}r.prototype.u=function(T,I){I===void 0&&(I=T.length);for(var A=I-this.blockSize,R=this.B,j=this.h,O=0;O<I;){if(j==0)for(;O<=A;)i(this,T,O),O+=this.blockSize;if(typeof T=="string"){for(;O<I;)if(R[j++]=T.charCodeAt(O++),j==this.blockSize){i(this,R),j=0;break}}else for(;O<I;)if(R[j++]=T[O++],j==this.blockSize){i(this,R),j=0;break}}this.h=j,this.o+=I},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var I=1;I<T.length-8;++I)T[I]=0;var A=8*this.o;for(I=T.length-8;I<T.length;++I)T[I]=A&255,A/=256;for(this.u(T),T=Array(16),I=A=0;4>I;++I)for(var R=0;32>R;R+=8)T[A++]=this.g[I]>>>R&255;return T};function o(T,I){var A=a;return Object.prototype.hasOwnProperty.call(A,T)?A[T]:A[T]=I(T)}function s(T,I){this.h=I;for(var A=[],R=!0,j=T.length-1;0<=j;j--){var O=T[j]|0;R&&O==I||(A[j]=O,R=!1)}this.g=A}var a={};function l(T){return-128<=T&&128>T?o(T,function(I){return new s([I|0],0>I?-1:0)}):new s([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return w(d(-T));for(var I=[],A=1,R=0;T>=A;R++)I[R]=T/A|0,A*=4294967296;return new s(I,0)}function f(T,I){if(T.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(T.charAt(0)=="-")return w(f(T.substring(1),I));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=d(Math.pow(I,8)),R=m,j=0;j<T.length;j+=8){var O=Math.min(8,T.length-j),P=parseInt(T.substring(j,j+O),I);8>O?(O=d(Math.pow(I,O)),R=R.j(O).add(d(P))):(R=R.j(A),R=R.add(d(P)))}return R}var m=l(0),E=l(1),v=l(16777216);t=s.prototype,t.m=function(){if(C(this))return-w(this).m();for(var T=0,I=1,A=0;A<this.g.length;A++){var R=this.i(A);T+=(0<=R?R:4294967296+R)*I,I*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(x(this))return"0";if(C(this))return"-"+w(this).toString(T);for(var I=d(Math.pow(T,6)),A=this,R="";;){var j=S(A,I).g;A=y(A,j.j(I));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(T);if(A=j,x(A))return O+R;for(;6>O.length;)O="0"+O;R=O+R}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function x(T){if(T.h!=0)return!1;for(var I=0;I<T.g.length;I++)if(T.g[I]!=0)return!1;return!0}function C(T){return T.h==-1}t.l=function(T){return T=y(this,T),C(T)?-1:x(T)?0:1};function w(T){for(var I=T.g.length,A=[],R=0;R<I;R++)A[R]=~T.g[R];return new s(A,~T.h).add(E)}t.abs=function(){return C(this)?w(this):this},t.add=function(T){for(var I=Math.max(this.g.length,T.g.length),A=[],R=0,j=0;j<=I;j++){var O=R+(this.i(j)&65535)+(T.i(j)&65535),P=(O>>>16)+(this.i(j)>>>16)+(T.i(j)>>>16);R=P>>>16,O&=65535,P&=65535,A[j]=P<<16|O}return new s(A,A[A.length-1]&-2147483648?-1:0)};function y(T,I){return T.add(w(I))}t.j=function(T){if(x(this)||x(T))return m;if(C(this))return C(T)?w(this).j(w(T)):w(w(this).j(T));if(C(T))return w(this.j(w(T)));if(0>this.l(v)&&0>T.l(v))return d(this.m()*T.m());for(var I=this.g.length+T.g.length,A=[],R=0;R<2*I;R++)A[R]=0;for(R=0;R<this.g.length;R++)for(var j=0;j<T.g.length;j++){var O=this.i(R)>>>16,P=this.i(R)&65535,te=T.i(j)>>>16,J=T.i(j)&65535;A[2*R+2*j]+=P*J,g(A,2*R+2*j),A[2*R+2*j+1]+=O*J,g(A,2*R+2*j+1),A[2*R+2*j+1]+=P*te,g(A,2*R+2*j+1),A[2*R+2*j+2]+=O*te,g(A,2*R+2*j+2)}for(R=0;R<I;R++)A[R]=A[2*R+1]<<16|A[2*R];for(R=I;R<2*I;R++)A[R]=0;return new s(A,0)};function g(T,I){for(;(T[I]&65535)!=T[I];)T[I+1]+=T[I]>>>16,T[I]&=65535,I++}function _(T,I){this.g=T,this.h=I}function S(T,I){if(x(I))throw Error("division by zero");if(x(T))return new _(m,m);if(C(T))return I=S(w(T),I),new _(w(I.g),w(I.h));if(C(I))return I=S(T,w(I)),new _(w(I.g),I.h);if(30<T.g.length){if(C(T)||C(I))throw Error("slowDivide_ only works with positive integers.");for(var A=E,R=I;0>=R.l(T);)A=b(A),R=b(R);var j=M(A,1),O=M(R,1);for(R=M(R,2),A=M(A,2);!x(R);){var P=O.add(R);0>=P.l(T)&&(j=j.add(A),O=P),R=M(R,1),A=M(A,1)}return I=y(T,j.j(I)),new _(j,I)}for(j=m;0<=T.l(I);){for(A=Math.max(1,Math.floor(T.m()/I.m())),R=Math.ceil(Math.log(A)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),O=d(A),P=O.j(I);C(P)||0<P.l(T);)A-=R,O=d(A),P=O.j(I);x(O)&&(O=E),j=j.add(O),T=y(T,P)}return new _(j,T)}t.A=function(T){return S(this,T).h},t.and=function(T){for(var I=Math.max(this.g.length,T.g.length),A=[],R=0;R<I;R++)A[R]=this.i(R)&T.i(R);return new s(A,this.h&T.h)},t.or=function(T){for(var I=Math.max(this.g.length,T.g.length),A=[],R=0;R<I;R++)A[R]=this.i(R)|T.i(R);return new s(A,this.h|T.h)},t.xor=function(T){for(var I=Math.max(this.g.length,T.g.length),A=[],R=0;R<I;R++)A[R]=this.i(R)^T.i(R);return new s(A,this.h^T.h)};function b(T){for(var I=T.g.length+1,A=[],R=0;R<I;R++)A[R]=T.i(R)<<1|T.i(R-1)>>>31;return new s(A,T.h)}function M(T,I){var A=I>>5;I%=32;for(var R=T.g.length-A,j=[],O=0;O<R;O++)j[O]=0<I?T.i(O+A)>>>I|T.i(O+A+1)<<32-I:T.i(O+A);return new s(j,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fT=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=d,s.fromString=f,eo=s}).apply(typeof ek<"u"?ek:typeof self<"u"?self:typeof window<"u"?window:{});var hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pT,al,mT,Uc,zm,gT,yT,vT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,k){return u==Array.prototype||u==Object.prototype||(u[p]=k.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof hc=="object"&&hc];for(var p=0;p<u.length;++p){var k=u[p];if(k&&k.Math==Math)return k}throw Error("Cannot find global object")}var r=n(this);function i(u,p){if(p)e:{var k=r;u=u.split(".");for(var L=0;L<u.length-1;L++){var V=u[L];if(!(V in k))break e;k=k[V]}u=u[u.length-1],L=k[u],p=p(L),p!=L&&p!=null&&e(k,u,{configurable:!0,writable:!0,value:p})}}function o(u,p){u instanceof String&&(u+="");var k=0,L=!1,V={next:function(){if(!L&&k<u.length){var U=k++;return{value:p(U,u[U]),done:!1}}return L=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(u){return u||function(){return o(this,function(p,k){return k})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function l(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function d(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function f(u,p,k){return u.call.apply(u.bind,arguments)}function m(u,p,k){if(!u)throw Error();if(2<arguments.length){var L=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,L),u.apply(p,V)}}return function(){return u.apply(p,arguments)}}function E(u,p,k){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,E.apply(null,arguments)}function v(u,p){var k=Array.prototype.slice.call(arguments,1);return function(){var L=k.slice();return L.push.apply(L,arguments),u.apply(this,L)}}function x(u,p){function k(){}k.prototype=p.prototype,u.aa=p.prototype,u.prototype=new k,u.prototype.constructor=u,u.Qb=function(L,V,U){for(var q=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)q[Pe-2]=arguments[Pe];return p.prototype[V].apply(L,q)}}function C(u){const p=u.length;if(0<p){const k=Array(p);for(let L=0;L<p;L++)k[L]=u[L];return k}return[]}function w(u,p){for(let k=1;k<arguments.length;k++){const L=arguments[k];if(l(L)){const V=u.length||0,U=L.length||0;u.length=V+U;for(let q=0;q<U;q++)u[V+q]=L[q]}else u.push(L)}}class y{constructor(p,k){this.i=p,this.j=k,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function g(u){return/^[\s\xa0]*$/.test(u)}function _(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function S(u){return S[" "](u),u}S[" "]=function(){};var b=_().indexOf("Gecko")!=-1&&!(_().toLowerCase().indexOf("webkit")!=-1&&_().indexOf("Edge")==-1)&&!(_().indexOf("Trident")!=-1||_().indexOf("MSIE")!=-1)&&_().indexOf("Edge")==-1;function M(u,p,k){for(const L in u)p.call(k,u[L],L,u)}function T(u,p){for(const k in u)p.call(void 0,u[k],k,u)}function I(u){const p={};for(const k in u)p[k]=u[k];return p}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(u,p){let k,L;for(let V=1;V<arguments.length;V++){L=arguments[V];for(k in L)u[k]=L[k];for(let U=0;U<A.length;U++)k=A[U],Object.prototype.hasOwnProperty.call(L,k)&&(u[k]=L[k])}}function j(u){var p=1;u=u.split(":");const k=[];for(;0<p&&u.length;)k.push(u.shift()),p--;return u.length&&k.push(u.join(":")),k}function O(u){a.setTimeout(()=>{throw u},0)}function P(){var u=Y;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class te{constructor(){this.h=this.g=null}add(p,k){const L=J.get();L.set(p,k),this.h?this.h.next=L:this.g=L,this.h=L}}var J=new y(()=>new he,u=>u.reset());class he{constructor(){this.next=this.g=this.h=null}set(p,k){this.h=p,this.g=k,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,z=!1,Y=new te,Z=()=>{const u=a.Promise.resolve(void 0);fe=()=>{u.then(se)}};var se=()=>{for(var u;u=P();){try{u.h.call(u.g)}catch(k){O(k)}var p=J;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}z=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var Ye=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const k=()=>{};a.addEventListener("test",k,p),a.removeEventListener("test",k,p)}catch{}return u}();function Be(u,p){if(ye.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var k=this.type=u.type,L=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(b){e:{try{S(p.nodeName);var V=!0;break e}catch{}V=!1}V||(p=null)}}else k=="mouseover"?p=u.fromElement:k=="mouseout"&&(p=u.toElement);this.relatedTarget=p,L?(this.clientX=L.clientX!==void 0?L.clientX:L.pageX,this.clientY=L.clientY!==void 0?L.clientY:L.pageY,this.screenX=L.screenX||0,this.screenY=L.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ge[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Be.aa.h.call(this)}}x(Be,ye);var Ge={2:"touch",3:"pen",4:"mouse"};Be.prototype.h=function(){Be.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),ae=0;function le(u,p,k,L,V){this.listener=u,this.proxy=null,this.src=p,this.type=k,this.capture=!!L,this.ha=V,this.key=++ae,this.da=this.fa=!1}function ue(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function de(u){this.src=u,this.g={},this.h=0}de.prototype.add=function(u,p,k,L,V){var U=u.toString();u=this.g[U],u||(u=this.g[U]=[],this.h++);var q=rs(u,p,L,V);return-1<q?(p=u[q],k||(p.fa=!1)):(p=new le(p,this.src,U,!!L,V),p.fa=k,u.push(p)),p};function Se(u,p){var k=p.type;if(k in u.g){var L=u.g[k],V=Array.prototype.indexOf.call(L,p,void 0),U;(U=0<=V)&&Array.prototype.splice.call(L,V,1),U&&(ue(p),u.g[k].length==0&&(delete u.g[k],u.h--))}}function rs(u,p,k,L){for(var V=0;V<u.length;++V){var U=u[V];if(!U.da&&U.listener==p&&U.capture==!!k&&U.ha==L)return V}return-1}var Sa="closure_lm_"+(1e6*Math.random()|0),Ca={};function vt(u,p,k,L,V){if(Array.isArray(p)){for(var U=0;U<p.length;U++)vt(u,p[U],k,L,V);return null}return k=dy(k),u&&u[F]?u.K(p,k,d(L)?!!L.capture:!1,V):Fn(u,p,k,!1,L,V)}function Fn(u,p,k,L,V,U){if(!p)throw Error("Invalid event type");var q=d(V)?!!V.capture:!!V,Pe=uf(u);if(Pe||(u[Sa]=Pe=new de(u)),k=Pe.add(p,k,L,q,U),k.proxy)return k;if(L=is(),k.proxy=L,L.src=u,L.listener=k,u.addEventListener)Ye||(V=q),V===void 0&&(V=!1),u.addEventListener(p.toString(),L,V);else if(u.attachEvent)u.attachEvent(cy(p.toString()),L);else if(u.addListener&&u.removeListener)u.addListener(L);else throw Error("addEventListener and attachEvent are unavailable.");return k}function is(){function u(k){return p.call(u.src,u.listener,k)}const p=f6;return u}function uy(u,p,k,L,V){if(Array.isArray(p))for(var U=0;U<p.length;U++)uy(u,p[U],k,L,V);else L=d(L)?!!L.capture:!!L,k=dy(k),u&&u[F]?(u=u.i,p=String(p).toString(),p in u.g&&(U=u.g[p],k=rs(U,k,L,V),-1<k&&(ue(U[k]),Array.prototype.splice.call(U,k,1),U.length==0&&(delete u.g[p],u.h--)))):u&&(u=uf(u))&&(p=u.g[p.toString()],u=-1,p&&(u=rs(p,k,L,V)),(k=-1<u?p[u]:null)&&lf(k))}function lf(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[F])Se(p.i,u);else{var k=u.type,L=u.proxy;p.removeEventListener?p.removeEventListener(k,L,u.capture):p.detachEvent?p.detachEvent(cy(k),L):p.addListener&&p.removeListener&&p.removeListener(L),(k=uf(p))?(Se(k,u),k.h==0&&(k.src=null,p[Sa]=null)):ue(u)}}}function cy(u){return u in Ca?Ca[u]:Ca[u]="on"+u}function f6(u,p){if(u.da)u=!0;else{p=new Be(p,this);var k=u.listener,L=u.ha||u.src;u.fa&&lf(u),u=k.call(L,p)}return u}function uf(u){return u=u[Sa],u instanceof de?u:null}var cf="__closure_events_fn_"+(1e9*Math.random()>>>0);function dy(u){return typeof u=="function"?u:(u[cf]||(u[cf]=function(p){return u.handleEvent(p)}),u[cf])}function kt(){re.call(this),this.i=new de(this),this.M=this,this.F=null}x(kt,re),kt.prototype[F]=!0,kt.prototype.removeEventListener=function(u,p,k,L){uy(this,u,p,k,L)};function bt(u,p){var k,L=u.F;if(L)for(k=[];L;L=L.F)k.push(L);if(u=u.M,L=p.type||p,typeof p=="string")p=new ye(p,u);else if(p instanceof ye)p.target=p.target||u;else{var V=p;p=new ye(L,u),R(p,V)}if(V=!0,k)for(var U=k.length-1;0<=U;U--){var q=p.g=k[U];V=bu(q,L,!0,p)&&V}if(q=p.g=u,V=bu(q,L,!0,p)&&V,V=bu(q,L,!1,p)&&V,k)for(U=0;U<k.length;U++)q=p.g=k[U],V=bu(q,L,!1,p)&&V}kt.prototype.N=function(){if(kt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var k=u.g[p],L=0;L<k.length;L++)ue(k[L]);delete u.g[p],u.h--}}this.F=null},kt.prototype.K=function(u,p,k,L){return this.i.add(String(u),p,!1,k,L)},kt.prototype.L=function(u,p,k,L){return this.i.add(String(u),p,!0,k,L)};function bu(u,p,k,L){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var V=!0,U=0;U<p.length;++U){var q=p[U];if(q&&!q.da&&q.capture==k){var Pe=q.listener,ct=q.ha||q.src;q.fa&&Se(u.i,q),V=Pe.call(ct,L)!==!1&&V}}return V&&!L.defaultPrevented}function hy(u,p,k){if(typeof u=="function")k&&(u=E(u,k));else if(u&&typeof u.handleEvent=="function")u=E(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function fy(u){u.g=hy(()=>{u.g=null,u.i&&(u.i=!1,fy(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class p6 extends re{constructor(p,k){super(),this.m=p,this.l=k,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:fy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function La(u){re.call(this),this.h=u,this.g={}}x(La,re);var py=[];function my(u){M(u.g,function(p,k){this.g.hasOwnProperty(k)&&lf(p)},u),u.g={}}La.prototype.N=function(){La.aa.N.call(this),my(this)},La.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var df=a.JSON.stringify,m6=a.JSON.parse,g6=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function hf(){}hf.prototype.h=null;function gy(u){return u.h||(u.h=u.i())}function yy(){}var Aa={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ff(){ye.call(this,"d")}x(ff,ye);function pf(){ye.call(this,"c")}x(pf,ye);var ji={},vy=null;function ju(){return vy=vy||new kt}ji.La="serverreachability";function ky(u){ye.call(this,ji.La,u)}x(ky,ye);function Pa(u){const p=ju();bt(p,new ky(p))}ji.STAT_EVENT="statevent";function _y(u,p){ye.call(this,ji.STAT_EVENT,u),this.stat=p}x(_y,ye);function jt(u){const p=ju();bt(p,new _y(p,u))}ji.Ma="timingevent";function Ey(u,p){ye.call(this,ji.Ma,u),this.size=p}x(Ey,ye);function Ra(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function ba(){this.g=!0}ba.prototype.xa=function(){this.g=!1};function y6(u,p,k,L,V,U){u.info(function(){if(u.g)if(U)for(var q="",Pe=U.split("&"),ct=0;ct<Pe.length;ct++){var Ee=Pe[ct].split("=");if(1<Ee.length){var _t=Ee[0];Ee=Ee[1];var Et=_t.split("_");q=2<=Et.length&&Et[1]=="type"?q+(_t+"="+Ee+"&"):q+(_t+"=redacted&")}}else q=null;else q=U;return"XMLHTTP REQ ("+L+") [attempt "+V+"]: "+p+`
`+k+`
`+q})}function v6(u,p,k,L,V,U,q){u.info(function(){return"XMLHTTP RESP ("+L+") [ attempt "+V+"]: "+p+`
`+k+`
`+U+" "+q})}function os(u,p,k,L){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+_6(u,k)+(L?" "+L:"")})}function k6(u,p){u.info(function(){return"TIMEOUT: "+p})}ba.prototype.info=function(){};function _6(u,p){if(!u.g)return p;if(!p)return null;try{var k=JSON.parse(p);if(k){for(u=0;u<k.length;u++)if(Array.isArray(k[u])){var L=k[u];if(!(2>L.length)){var V=L[1];if(Array.isArray(V)&&!(1>V.length)){var U=V[0];if(U!="noop"&&U!="stop"&&U!="close")for(var q=1;q<V.length;q++)V[q]=""}}}}return df(k)}catch{return p}}var Du={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mf;function Ou(){}x(Ou,hf),Ou.prototype.g=function(){return new XMLHttpRequest},Ou.prototype.i=function(){return{}},mf=new Ou;function Nr(u,p,k,L){this.j=u,this.i=p,this.l=k,this.R=L||1,this.U=new La(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xy}function xy(){this.i=null,this.g="",this.h=!1}var Ty={},gf={};function yf(u,p,k){u.L=1,u.v=Fu(lr(p)),u.m=k,u.P=!0,Iy(u,null)}function Iy(u,p){u.F=Date.now(),Mu(u),u.A=lr(u.v);var k=u.A,L=u.R;Array.isArray(L)||(L=[String(L)]),Fy(k.i,"t",L),u.C=0,k=u.j.J,u.h=new xy,u.g=rv(u.j,k?p:null,!u.m),0<u.O&&(u.M=new p6(E(u.Y,u,u.g),u.O)),p=u.U,k=u.g,L=u.ca;var V="readystatechange";Array.isArray(V)||(V&&(py[0]=V.toString()),V=py);for(var U=0;U<V.length;U++){var q=vt(k,V[U],L||p.handleEvent,!1,p.h||p);if(!q)break;p.g[q.key]=q}p=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Pa(),y6(u.i,u.u,u.A,u.l,u.R,u.m)}Nr.prototype.ca=function(u){u=u.target;const p=this.M;p&&ur(u)==3?p.j():this.Y(u)},Nr.prototype.Y=function(u){try{if(u==this.g)e:{const Et=ur(this.g);var p=this.g.Ba();const ls=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||qy(this.g)))){this.J||Et!=4||p==7||(p==8||0>=ls?Pa(3):Pa(2)),vf(this);var k=this.g.Z();this.X=k;t:if(Sy(this)){var L=qy(this.g);u="";var V=L.length,U=ur(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Di(this),ja(this);var q="";break t}this.h.i=new a.TextDecoder}for(p=0;p<V;p++)this.h.h=!0,u+=this.h.i.decode(L[p],{stream:!(U&&p==V-1)});L.length=0,this.h.g+=u,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=k==200,v6(this.i,this.u,this.A,this.l,this.R,Et,k),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,ct=this.g;if((Pe=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(Pe)){var Ee=Pe;break t}}Ee=null}if(k=Ee)os(this.i,this.l,k,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kf(this,k);else{this.o=!1,this.s=3,jt(12),Di(this),ja(this);break e}}if(this.P){k=!0;let wn;for(;!this.J&&this.C<q.length;)if(wn=E6(this,q),wn==gf){Et==4&&(this.s=4,jt(14),k=!1),os(this.i,this.l,null,"[Incomplete Response]");break}else if(wn==Ty){this.s=4,jt(15),os(this.i,this.l,q,"[Invalid Chunk]"),k=!1;break}else os(this.i,this.l,wn,null),kf(this,wn);if(Sy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||q.length!=0||this.h.h||(this.s=1,jt(16),k=!1),this.o=this.o&&k,!k)os(this.i,this.l,q,"[Invalid Chunked Response]"),Di(this),ja(this);else if(0<q.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),If(_t),_t.M=!0,jt(11))}}else os(this.i,this.l,q,null),kf(this,q);Et==4&&Di(this),this.o&&!this.J&&(Et==4?Jy(this.j,this):(this.o=!1,Mu(this)))}else V6(this.g),k==400&&0<q.indexOf("Unknown SID")?(this.s=3,jt(12)):(this.s=0,jt(13)),Di(this),ja(this)}}}catch{}finally{}};function Sy(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function E6(u,p){var k=u.C,L=p.indexOf(`
`,k);return L==-1?gf:(k=Number(p.substring(k,L)),isNaN(k)?Ty:(L+=1,L+k>p.length?gf:(p=p.slice(L,L+k),u.C=L+k,p)))}Nr.prototype.cancel=function(){this.J=!0,Di(this)};function Mu(u){u.S=Date.now()+u.I,Cy(u,u.I)}function Cy(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Ra(E(u.ba,u),p)}function vf(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Nr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(k6(this.i,this.A),this.L!=2&&(Pa(),jt(17)),Di(this),this.s=2,ja(this)):Cy(this,this.S-u)};function ja(u){u.j.G==0||u.J||Jy(u.j,u)}function Di(u){vf(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,my(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function kf(u,p){try{var k=u.j;if(k.G!=0&&(k.g==u||_f(k.h,u))){if(!u.K&&_f(k.h,u)&&k.G==3){try{var L=k.Da.g.parse(p)}catch{L=null}if(Array.isArray(L)&&L.length==3){var V=L;if(V[0]==0){e:if(!k.u){if(k.g)if(k.g.F+3e3<u.F)Hu(k),zu(k);else break e;Tf(k),jt(18)}}else k.za=V[1],0<k.za-k.T&&37500>V[2]&&k.F&&k.v==0&&!k.C&&(k.C=Ra(E(k.Za,k),6e3));if(1>=Py(k.h)&&k.ca){try{k.ca()}catch{}k.ca=void 0}}else Mi(k,11)}else if((u.K||k.g==u)&&Hu(k),!g(p))for(V=k.Da.g.parse(p),p=0;p<V.length;p++){let Ee=V[p];if(k.T=Ee[0],Ee=Ee[1],k.G==2)if(Ee[0]=="c"){k.K=Ee[1],k.ia=Ee[2];const _t=Ee[3];_t!=null&&(k.la=_t,k.j.info("VER="+k.la));const Et=Ee[4];Et!=null&&(k.Aa=Et,k.j.info("SVER="+k.Aa));const ls=Ee[5];ls!=null&&typeof ls=="number"&&0<ls&&(L=1.5*ls,k.L=L,k.j.info("backChannelRequestTimeoutMs_="+L)),L=k;const wn=u.g;if(wn){const Yu=wn.g?wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yu){var U=L.h;U.g||Yu.indexOf("spdy")==-1&&Yu.indexOf("quic")==-1&&Yu.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Ef(U,U.h),U.h=null))}if(L.D){const Sf=wn.g?wn.g.getResponseHeader("X-HTTP-Session-Id"):null;Sf&&(L.ya=Sf,be(L.I,L.D,Sf))}}k.G=3,k.l&&k.l.ua(),k.ba&&(k.R=Date.now()-u.F,k.j.info("Handshake RTT: "+k.R+"ms")),L=k;var q=u;if(L.qa=nv(L,L.J?L.ia:null,L.W),q.K){Ry(L.h,q);var Pe=q,ct=L.L;ct&&(Pe.I=ct),Pe.B&&(vf(Pe),Mu(Pe)),L.g=q}else Zy(L);0<k.i.length&&Bu(k)}else Ee[0]!="stop"&&Ee[0]!="close"||Mi(k,7);else k.G==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?Mi(k,7):xf(k):Ee[0]!="noop"&&k.l&&k.l.ta(Ee),k.v=0)}}Pa(4)}catch{}}var w6=class{constructor(u,p){this.g=u,this.map=p}};function Ly(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ay(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Py(u){return u.h?1:u.g?u.g.size:0}function _f(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Ef(u,p){u.g?u.g.add(p):u.h=p}function Ry(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Ly.prototype.cancel=function(){if(this.i=by(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function by(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const k of u.g.values())p=p.concat(k.D);return p}return C(u.i)}function x6(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var p=[],k=u.length,L=0;L<k;L++)p.push(u[L]);return p}p=[],k=0;for(L in u)p[k++]=u[L];return p}function T6(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var p=[];u=u.length;for(var k=0;k<u;k++)p.push(k);return p}p=[],k=0;for(const L in u)p[k++]=L;return p}}}function jy(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var k=T6(u),L=x6(u),V=L.length,U=0;U<V;U++)p.call(void 0,L[U],k&&k[U],u)}var Dy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function I6(u,p){if(u){u=u.split("&");for(var k=0;k<u.length;k++){var L=u[k].indexOf("="),V=null;if(0<=L){var U=u[k].substring(0,L);V=u[k].substring(L+1)}else U=u[k];p(U,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Oi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Oi){this.h=u.h,Nu(this,u.j),this.o=u.o,this.g=u.g,Vu(this,u.s),this.l=u.l;var p=u.i,k=new Ma;k.i=p.i,p.g&&(k.g=new Map(p.g),k.h=p.h),Oy(this,k),this.m=u.m}else u&&(p=String(u).match(Dy))?(this.h=!1,Nu(this,p[1]||"",!0),this.o=Da(p[2]||""),this.g=Da(p[3]||"",!0),Vu(this,p[4]),this.l=Da(p[5]||"",!0),Oy(this,p[6]||"",!0),this.m=Da(p[7]||"")):(this.h=!1,this.i=new Ma(null,this.h))}Oi.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Oa(p,My,!0),":");var k=this.g;return(k||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Oa(p,My,!0),"@"),u.push(encodeURIComponent(String(k)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),k=this.s,k!=null&&u.push(":",String(k))),(k=this.l)&&(this.g&&k.charAt(0)!="/"&&u.push("/"),u.push(Oa(k,k.charAt(0)=="/"?L6:C6,!0))),(k=this.i.toString())&&u.push("?",k),(k=this.m)&&u.push("#",Oa(k,P6)),u.join("")};function lr(u){return new Oi(u)}function Nu(u,p,k){u.j=k?Da(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Vu(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Oy(u,p,k){p instanceof Ma?(u.i=p,R6(u.i,u.h)):(k||(p=Oa(p,A6)),u.i=new Ma(p,u.h))}function be(u,p,k){u.i.set(p,k)}function Fu(u){return be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Da(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Oa(u,p,k){return typeof u=="string"?(u=encodeURI(u).replace(p,S6),k&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function S6(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var My=/[#\/\?@]/g,C6=/[#\?:]/g,L6=/[#\?]/g,A6=/[#\?@]/g,P6=/#/g;function Ma(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Vr(u){u.g||(u.g=new Map,u.h=0,u.i&&I6(u.i,function(p,k){u.add(decodeURIComponent(p.replace(/\+/g," ")),k)}))}t=Ma.prototype,t.add=function(u,p){Vr(this),this.i=null,u=ss(this,u);var k=this.g.get(u);return k||this.g.set(u,k=[]),k.push(p),this.h+=1,this};function Ny(u,p){Vr(u),p=ss(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Vy(u,p){return Vr(u),p=ss(u,p),u.g.has(p)}t.forEach=function(u,p){Vr(this),this.g.forEach(function(k,L){k.forEach(function(V){u.call(p,V,L,this)},this)},this)},t.na=function(){Vr(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),k=[];for(let L=0;L<p.length;L++){const V=u[L];for(let U=0;U<V.length;U++)k.push(p[L])}return k},t.V=function(u){Vr(this);let p=[];if(typeof u=="string")Vy(this,u)&&(p=p.concat(this.g.get(ss(this,u))));else{u=Array.from(this.g.values());for(let k=0;k<u.length;k++)p=p.concat(u[k])}return p},t.set=function(u,p){return Vr(this),this.i=null,u=ss(this,u),Vy(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},t.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Fy(u,p,k){Ny(u,p),0<k.length&&(u.i=null,u.g.set(ss(u,p),C(k)),u.h+=k.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var k=0;k<p.length;k++){var L=p[k];const U=encodeURIComponent(String(L)),q=this.V(L);for(L=0;L<q.length;L++){var V=U;q[L]!==""&&(V+="="+encodeURIComponent(String(q[L]))),u.push(V)}}return this.i=u.join("&")};function ss(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function R6(u,p){p&&!u.j&&(Vr(u),u.i=null,u.g.forEach(function(k,L){var V=L.toLowerCase();L!=V&&(Ny(this,L),Fy(this,V,k))},u)),u.j=p}function b6(u,p){const k=new ba;if(a.Image){const L=new Image;L.onload=v(Fr,k,"TestLoadImage: loaded",!0,p,L),L.onerror=v(Fr,k,"TestLoadImage: error",!1,p,L),L.onabort=v(Fr,k,"TestLoadImage: abort",!1,p,L),L.ontimeout=v(Fr,k,"TestLoadImage: timeout",!1,p,L),a.setTimeout(function(){L.ontimeout&&L.ontimeout()},1e4),L.src=u}else p(!1)}function j6(u,p){const k=new ba,L=new AbortController,V=setTimeout(()=>{L.abort(),Fr(k,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:L.signal}).then(U=>{clearTimeout(V),U.ok?Fr(k,"TestPingServer: ok",!0,p):Fr(k,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(V),Fr(k,"TestPingServer: error",!1,p)})}function Fr(u,p,k,L,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),L(k)}catch{}}function D6(){this.g=new g6}function O6(u,p,k){const L=k||"";try{jy(u,function(V,U){let q=V;d(V)&&(q=df(V)),p.push(L+U+"="+encodeURIComponent(q))})}catch(V){throw p.push(L+"type="+encodeURIComponent("_badmap")),V}}function Uu(u){this.l=u.Ub||null,this.j=u.eb||!1}x(Uu,hf),Uu.prototype.g=function(){return new Wu(this.l,this.j)},Uu.prototype.i=function(u){return function(){return u}}({});function Wu(u,p){kt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Wu,kt),t=Wu.prototype,t.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Va(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Na(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Va(this)),this.g&&(this.readyState=3,Va(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Uy(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Uy(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Na(this):Va(this),this.readyState==3&&Uy(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Na(this))},t.Qa=function(u){this.g&&(this.response=u,Na(this))},t.ga=function(){this.g&&Na(this)};function Na(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Va(u)}t.setRequestHeader=function(u,p){this.u.append(u,p)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var k=p.next();!k.done;)k=k.value,u.push(k[0]+": "+k[1]),k=p.next();return u.join(`\r
`)};function Va(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Wu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Wy(u){let p="";return M(u,function(k,L){p+=L,p+=":",p+=k,p+=`\r
`}),p}function wf(u,p,k){e:{for(L in k){var L=!1;break e}L=!0}L||(k=Wy(k),typeof u=="string"?k!=null&&encodeURIComponent(String(k)):be(u,p,k))}function He(u){kt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(He,kt);var M6=/^https?$/i,N6=["POST","PUT"];t=He.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,p,k,L){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mf.g(),this.v=this.o?gy(this.o):gy(mf),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(U){$y(this,U);return}if(u=k||"",k=new Map(this.headers),L)if(Object.getPrototypeOf(L)===Object.prototype)for(var V in L)k.set(V,L[V]);else if(typeof L.keys=="function"&&typeof L.get=="function")for(const U of L.keys())k.set(U,L.get(U));else throw Error("Unknown input type for opt_headers: "+String(L));L=Array.from(k.keys()).find(U=>U.toLowerCase()=="content-type"),V=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(N6,p,void 0))||L||V||k.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,q]of k)this.g.setRequestHeader(U,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hy(this),this.u=!0,this.g.send(u),this.u=!1}catch(U){$y(this,U)}};function $y(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,zy(u),$u(u)}function zy(u){u.A||(u.A=!0,bt(u,"complete"),bt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,bt(this,"complete"),bt(this,"abort"),$u(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$u(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?By(this):this.bb())},t.bb=function(){By(this)};function By(u){if(u.h&&typeof s<"u"&&(!u.v[1]||ur(u)!=4||u.Z()!=2)){if(u.u&&ur(u)==4)hy(u.Ea,0,u);else if(bt(u,"readystatechange"),ur(u)==4){u.h=!1;try{const q=u.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var k;if(!(k=p)){var L;if(L=q===0){var V=String(u.D).match(Dy)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),L=!M6.test(V?V.toLowerCase():"")}k=L}if(k)bt(u,"complete"),bt(u,"success");else{u.m=6;try{var U=2<ur(u)?u.g.statusText:""}catch{U=""}u.l=U+" ["+u.Z()+"]",zy(u)}}finally{$u(u)}}}}function $u(u,p){if(u.g){Hy(u);const k=u.g,L=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||bt(u,"ready");try{k.onreadystatechange=L}catch{}}}function Hy(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function ur(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<ur(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),m6(p)}};function qy(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function V6(u){const p={};u=(u.g&&2<=ur(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let L=0;L<u.length;L++){if(g(u[L]))continue;var k=j(u[L]);const V=k[0];if(k=k[1],typeof k!="string")continue;k=k.trim();const U=p[V]||[];p[V]=U,U.push(k)}T(p,function(L){return L.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fa(u,p,k){return k&&k.internalChannelParams&&k.internalChannelParams[u]||p}function Yy(u){this.Aa=0,this.i=[],this.j=new ba,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fa("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fa("baseRetryDelayMs",5e3,u),this.cb=Fa("retryDelaySeedMs",1e4,u),this.Wa=Fa("forwardChannelMaxRetries",2,u),this.wa=Fa("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ly(u&&u.concurrentRequestLimit),this.Da=new D6,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Yy.prototype,t.la=8,t.G=1,t.connect=function(u,p,k,L){jt(0),this.W=u,this.H=p||{},k&&L!==void 0&&(this.H.OSID=k,this.H.OAID=L),this.F=this.X,this.I=nv(this,null,this.W),Bu(this)};function xf(u){if(Gy(u),u.G==3){var p=u.U++,k=lr(u.I);if(be(k,"SID",u.K),be(k,"RID",p),be(k,"TYPE","terminate"),Ua(u,k),p=new Nr(u,u.j,p),p.L=2,p.v=Fu(lr(k)),k=!1,a.navigator&&a.navigator.sendBeacon)try{k=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!k&&a.Image&&(new Image().src=p.v,k=!0),k||(p.g=rv(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Mu(p)}tv(u)}function zu(u){u.g&&(If(u),u.g.cancel(),u.g=null)}function Gy(u){zu(u),u.u&&(a.clearTimeout(u.u),u.u=null),Hu(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Bu(u){if(!Ay(u.h)&&!u.s){u.s=!0;var p=u.Ga;fe||Z(),z||(fe(),z=!0),Y.add(p,u),u.B=0}}function F6(u,p){return Py(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Ra(E(u.Ga,u,p),ev(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const V=new Nr(this,this.j,u);let U=this.o;if(this.S&&(U?(U=I(U),R(U,this.S)):U=this.S),this.m!==null||this.O||(V.H=U,U=null),this.P)e:{for(var p=0,k=0;k<this.i.length;k++){t:{var L=this.i[k];if("__data__"in L.map&&(L=L.map.__data__,typeof L=="string")){L=L.length;break t}L=void 0}if(L===void 0)break;if(p+=L,4096<p){p=k;break e}if(p===4096||k===this.i.length-1){p=k+1;break e}}p=1e3}else p=1e3;p=Qy(this,V,p),k=lr(this.I),be(k,"RID",u),be(k,"CVER",22),this.D&&be(k,"X-HTTP-Session-Id",this.D),Ua(this,k),U&&(this.O?p="headers="+encodeURIComponent(String(Wy(U)))+"&"+p:this.m&&wf(k,this.m,U)),Ef(this.h,V),this.Ua&&be(k,"TYPE","init"),this.P?(be(k,"$req",p),be(k,"SID","null"),V.T=!0,yf(V,k,null)):yf(V,k,p),this.G=2}}else this.G==3&&(u?Ky(this,u):this.i.length==0||Ay(this.h)||Ky(this))};function Ky(u,p){var k;p?k=p.l:k=u.U++;const L=lr(u.I);be(L,"SID",u.K),be(L,"RID",k),be(L,"AID",u.T),Ua(u,L),u.m&&u.o&&wf(L,u.m,u.o),k=new Nr(u,u.j,k,u.B+1),u.m===null&&(k.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Qy(u,k,1e3),k.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Ef(u.h,k),yf(k,L,p)}function Ua(u,p){u.H&&M(u.H,function(k,L){be(p,L,k)}),u.l&&jy({},function(k,L){be(p,L,k)})}function Qy(u,p,k){k=Math.min(u.i.length,k);var L=u.l?E(u.l.Na,u.l,u):null;e:{var V=u.i;let U=-1;for(;;){const q=["count="+k];U==-1?0<k?(U=V[0].g,q.push("ofs="+U)):U=0:q.push("ofs="+U);let Pe=!0;for(let ct=0;ct<k;ct++){let Ee=V[ct].g;const _t=V[ct].map;if(Ee-=U,0>Ee)U=Math.max(0,V[ct].g-100),Pe=!1;else try{O6(_t,q,"req"+Ee+"_")}catch{L&&L(_t)}}if(Pe){L=q.join("&");break e}}}return u=u.i.splice(0,k),p.D=u,L}function Zy(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;fe||Z(),z||(fe(),z=!0),Y.add(p,u),u.v=0}}function Tf(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Ra(E(u.Fa,u),ev(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,Xy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Ra(E(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,jt(10),zu(this),Xy(this))};function If(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Xy(u){u.g=new Nr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=lr(u.qa);be(p,"RID","rpc"),be(p,"SID",u.K),be(p,"AID",u.T),be(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&be(p,"TO",u.ja),be(p,"TYPE","xmlhttp"),Ua(u,p),u.m&&u.o&&wf(p,u.m,u.o),u.L&&(u.g.I=u.L);var k=u.g;u=u.ia,k.L=1,k.v=Fu(lr(p)),k.m=null,k.P=!0,Iy(k,u)}t.Za=function(){this.C!=null&&(this.C=null,zu(this),Tf(this),jt(19))};function Hu(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Jy(u,p){var k=null;if(u.g==p){Hu(u),If(u),u.g=null;var L=2}else if(_f(u.h,p))k=p.D,Ry(u.h,p),L=1;else return;if(u.G!=0){if(p.o)if(L==1){k=p.m?p.m.length:0,p=Date.now()-p.F;var V=u.B;L=ju(),bt(L,new Ey(L,k)),Bu(u)}else Zy(u);else if(V=p.s,V==3||V==0&&0<p.X||!(L==1&&F6(u,p)||L==2&&Tf(u)))switch(k&&0<k.length&&(p=u.h,p.i=p.i.concat(k)),V){case 1:Mi(u,5);break;case 4:Mi(u,10);break;case 3:Mi(u,6);break;default:Mi(u,2)}}}function ev(u,p){let k=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(k*=2),k*p}function Mi(u,p){if(u.j.info("Error code "+p),p==2){var k=E(u.fb,u),L=u.Xa;const V=!L;L=new Oi(L||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Nu(L,"https"),Fu(L),V?b6(L.toString(),k):j6(L.toString(),k)}else jt(2);u.G=0,u.l&&u.l.sa(p),tv(u),Gy(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))};function tv(u){if(u.G=0,u.ka=[],u.l){const p=by(u.h);(p.length!=0||u.i.length!=0)&&(w(u.ka,p),w(u.ka,u.i),u.h.i.length=0,C(u.i),u.i.length=0),u.l.ra()}}function nv(u,p,k){var L=k instanceof Oi?lr(k):new Oi(k);if(L.g!="")p&&(L.g=p+"."+L.g),Vu(L,L.s);else{var V=a.location;L=V.protocol,p=p?p+"."+V.hostname:V.hostname,V=+V.port;var U=new Oi(null);L&&Nu(U,L),p&&(U.g=p),V&&Vu(U,V),k&&(U.l=k),L=U}return k=u.D,p=u.ya,k&&p&&be(L,k,p),be(L,"VER",u.la),Ua(u,L),L}function rv(u,p,k){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new He(new Uu({eb:k})):new He(u.pa),p.Ha(u.J),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function iv(){}t=iv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function qu(){}qu.prototype.g=function(u,p){return new Xt(u,p)};function Xt(u,p){kt.call(this),this.g=new Yy(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!g(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!g(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new as(this)}x(Xt,kt),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){xf(this.g)},Xt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var k={};k.__data__=u,u=k}else this.u&&(k={},k.__data__=df(u),u=k);p.i.push(new w6(p.Ya++,u)),p.G==3&&Bu(p)},Xt.prototype.N=function(){this.g.l=null,delete this.j,xf(this.g),delete this.g,Xt.aa.N.call(this)};function ov(u){ff.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const k in p){u=k;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}x(ov,ff);function sv(){pf.call(this),this.status=1}x(sv,pf);function as(u){this.g=u}x(as,iv),as.prototype.ua=function(){bt(this.g,"a")},as.prototype.ta=function(u){bt(this.g,new ov(u))},as.prototype.sa=function(u){bt(this.g,new sv)},as.prototype.ra=function(){bt(this.g,"b")},qu.prototype.createWebChannel=qu.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,vT=function(){return new qu},yT=function(){return ju()},gT=ji,zm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Du.NO_ERROR=0,Du.TIMEOUT=8,Du.HTTP_ERROR=6,Uc=Du,wy.COMPLETE="complete",mT=wy,yy.EventType=Aa,Aa.OPEN="a",Aa.CLOSE="b",Aa.ERROR="c",Aa.MESSAGE="d",kt.prototype.listen=kt.prototype.K,al=yy,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,pT=He}).apply(typeof hc<"u"?hc:typeof self<"u"?self:typeof window<"u"?window:{});const tk="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ho=new wh("@firebase/firestore");function Ka(){return ho.logLevel}function Q(t,...e){if(ho.logLevel<=ge.DEBUG){const n=e.map(a1);ho.debug(`Firestore (${Ea}): ${t}`,...n)}}function Pr(t,...e){if(ho.logLevel<=ge.ERROR){const n=e.map(a1);ho.error(`Firestore (${Ea}): ${t}`,...n)}}function na(t,...e){if(ho.logLevel<=ge.WARN){const n=e.map(a1);ho.warn(`Firestore (${Ea}): ${t}`,...n)}}function a1(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${Ea}) INTERNAL ASSERTION FAILED: `+t;throw Pr(e),new Error(e)}function Ae(t,e){t||ne()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends En{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class yb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vb{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ae(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new xr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new xr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new xr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new kT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new It(e)}}class kb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _b{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new kb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Eb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ae(this.o===void 0);const r=o=>{o.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,Q("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.R=n.token,new Eb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=xb(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function ra(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new rt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new rt(0,0))}static max(){return new ie(new rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return eu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof eu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends eu{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const Tb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends eu{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return Tb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new G(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new G(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new G(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Oe.fromString(e))}static fromName(e){return new X(Oe.fromString(e).popFirst(5))}static empty(){return new X(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Oe(e.slice()))}}function Ib(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ie.fromTimestamp(r===1e9?new rt(n+1,0):new rt(n,r));return new Ei(i,X.empty(),e)}function Sb(t){return new Ei(t.readTime,t.key,-1)}class Ei{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ei(ie.min(),X.empty(),-1)}static max(){return new Ei(ie.max(),X.empty(),-1)}}function Cb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ab{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eu(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==Lb)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const d=l;n(e[d]).next(f=>{s[d]=f,++a,a===o&&r(s)},f=>i(f))}})}static doWhile(e,n){return new $((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function Pb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class l1{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}l1.oe=-1;function Ch(t){return t==null}function Rd(t){return t===0&&1/t==-1/0}function Rb(t){return typeof t=="number"&&Number.isInteger(t)&&!Rd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ET(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fc(this.root,e,this.comparator,!1)}getReverseIterator(){return new fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fc(this.root,e,this.comparator,!0)}}class fc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??ht.RED,this.left=i??ht.EMPTY,this.right=o??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new ht(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,i,o){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new rk(this.data.getIterator())}getIteratorFrom(e){return new rk(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new mt(this.comparator);return n.data=e,n}}class rk{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new wT("Invalid base64 string: "+o):o}}(e);return new yt(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const bb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=bb.exec(t);if(Ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fo(t){return typeof t=="string"?yt.fromBase64String(t):yt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function c1(t){const e=t.mapValue.fields.__previous_value__;return u1(e)?c1(e):e}function tu(t){const e=wi(t.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,n,r,i,o,s,a,l,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=d}}class nu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new nu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof nu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc={mapValue:{}};function po(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?u1(t)?4:Ob(t)?9007199254740991:Db(t)?10:11:ne()}function tr(t,e){if(t===e)return!0;const n=po(t);if(n!==po(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return tu(t).isEqual(tu(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=wi(i.timestampValue),a=wi(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return fo(i.bytesValue).isEqual(fo(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Ke(i.geoPointValue.latitude)===Ke(o.geoPointValue.latitude)&&Ke(i.geoPointValue.longitude)===Ke(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Ke(i.integerValue)===Ke(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Ke(i.doubleValue),a=Ke(o.doubleValue);return s===a?Rd(s)===Rd(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return ra(t.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(nk(s)!==nk(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!tr(s[l],a[l])))return!1;return!0}(t,e);default:return ne()}}function ru(t,e){return(t.values||[]).find(n=>tr(n,e))!==void 0}function ia(t,e){if(t===e)return 0;const n=po(t),r=po(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Ke(o.integerValue||o.doubleValue),l=Ke(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return ik(t.timestampValue,e.timestampValue);case 4:return ik(tu(t),tu(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(o,s){const a=fo(o),l=fo(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),l=s.split("/");for(let d=0;d<a.length&&d<l.length;d++){const f=we(a[d],l[d]);if(f!==0)return f}return we(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=we(Ke(o.latitude),Ke(s.latitude));return a!==0?a:we(Ke(o.longitude),Ke(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ok(t.arrayValue,e.arrayValue);case 10:return function(o,s){var a,l,d,f;const m=o.fields||{},E=s.fields||{},v=(a=m.value)===null||a===void 0?void 0:a.arrayValue,x=(l=E.value)===null||l===void 0?void 0:l.arrayValue,C=we(((d=v==null?void 0:v.values)===null||d===void 0?void 0:d.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:ok(v,x)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===pc.mapValue&&s===pc.mapValue)return 0;if(o===pc.mapValue)return 1;if(s===pc.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),d=s.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const E=we(l[m],f[m]);if(E!==0)return E;const v=ia(a[l[m]],d[f[m]]);if(v!==0)return v}return we(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ne()}}function ik(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=wi(t),r=wi(e),i=we(n.seconds,r.seconds);return i!==0?i:we(n.nanos,r.nanos)}function ok(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=ia(n[i],r[i]);if(o)return o}return we(n.length,r.length)}function oa(t){return Bm(t)}function Bm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=wi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return fo(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Bm(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Bm(n.fields[s])}`;return i+"}"}(t.mapValue):ne()}function sk(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Hm(t){return!!t&&"integerValue"in t}function d1(t){return!!t&&"arrayValue"in t}function ak(t){return!!t&&"nullValue"in t}function lk(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wc(t){return!!t&&"mapValue"in t}function Db(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function xl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=xl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ob(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xl(n)}setAll(e){let n=ft.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=xl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Wc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){wo(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new zt(xl(this.value))}}function xT(t){const e=[];return wo(t.fields,(n,r)=>{const i=new ft([n]);if(Wc(r)){const o=xT(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Ct(e,0,ie.min(),ie.min(),ie.min(),zt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ct(e,1,n,ie.min(),r,i,0)}static newNoDocument(e,n){return new Ct(e,2,n,ie.min(),ie.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new Ct(e,3,n,ie.min(),ie.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bd{constructor(e,n){this.position=e,this.inclusive=n}}function uk(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=X.comparator(X.fromName(s.referenceValue),n.key):r=ia(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ck(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class iu{constructor(e,n="asc"){this.field=e,this.dir=n}}function Mb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class TT{}class nt extends TT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Vb(e,n,r):n==="array-contains"?new Wb(e,r):n==="in"?new $b(e,r):n==="not-in"?new zb(e,r):n==="array-contains-any"?new Bb(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Fb(e,r):new Ub(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ia(n,this.value)):n!==null&&po(this.value)===po(n)&&this.matchesComparison(ia(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nn extends TT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Nn(e,n)}matches(e){return IT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function IT(t){return t.op==="and"}function ST(t){return Nb(t)&&IT(t)}function Nb(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function qm(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+oa(t.value);if(ST(t))return t.filters.map(e=>qm(e)).join(",");{const e=t.filters.map(n=>qm(n)).join(",");return`${t.op}(${e})`}}function CT(t,e){return t instanceof nt?function(r,i){return i instanceof nt&&r.op===i.op&&r.field.isEqual(i.field)&&tr(r.value,i.value)}(t,e):t instanceof Nn?function(r,i){return i instanceof Nn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&CT(s,i.filters[a]),!0):!1}(t,e):void ne()}function LT(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${oa(n.value)}`}(t):t instanceof Nn?function(n){return n.op.toString()+" {"+n.getFilters().map(LT).join(" ,")+"}"}(t):"Filter"}class Vb extends nt{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class Fb extends nt{constructor(e,n){super(e,"in",n),this.keys=AT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ub extends nt{constructor(e,n){super(e,"not-in",n),this.keys=AT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function AT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class Wb extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return d1(n)&&ru(n.arrayValue,this.value)}}class $b extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ru(this.value.arrayValue,n)}}class zb extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ru(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ru(this.value.arrayValue,n)}}class Bb extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!d1(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ru(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ue=null}}function dk(t,e=null,n=[],r=[],i=null,o=null,s=null){return new Hb(t,e,n,r,i,o,s)}function h1(t){const e=oe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>qm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ch(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>oa(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>oa(r)).join(",")),e.ue=n}return e.ue}function f1(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Mb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!CT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ck(t.startAt,e.startAt)&&ck(t.endAt,e.endAt)}function Ym(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function qb(t,e,n,r,i,o,s,a){return new wa(t,e,n,r,i,o,s,a)}function p1(t){return new wa(t)}function hk(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function PT(t){return t.collectionGroup!==null}function Tl(t){const e=oe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new mt(ft.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new iu(o,r))}),n.has(ft.keyField().canonicalString())||e.ce.push(new iu(ft.keyField(),r))}return e.ce}function Xn(t){const e=oe(t);return e.le||(e.le=Yb(e,Tl(t))),e.le}function Yb(t,e){if(t.limitType==="F")return dk(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new iu(i.field,o)});const n=t.endAt?new bd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bd(t.startAt.position,t.startAt.inclusive):null;return dk(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gm(t,e){const n=t.filters.concat([e]);return new wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function jd(t,e,n){return new wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lh(t,e){return f1(Xn(t),Xn(e))&&t.limitType===e.limitType}function RT(t){return`${h1(Xn(t))}|lt:${t.limitType}`}function vs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>LT(i)).join(", ")}]`),Ch(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>oa(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>oa(i)).join(",")),`Target(${r})`}(Xn(t))}; limitType=${t.limitType})`}function Ah(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):X.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Tl(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,l){const d=uk(s,a,l);return s.inclusive?d<=0:d<0}(r.startAt,Tl(r),i)||r.endAt&&!function(s,a,l){const d=uk(s,a,l);return s.inclusive?d>=0:d>0}(r.endAt,Tl(r),i))}(t,e)}function Gb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bT(t){return(e,n)=>{let r=!1;for(const i of Tl(t)){const o=Kb(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Kb(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(o,s,a){const l=s.data.field(o),d=a.data.field(o);return l!==null&&d!==null?ia(l,d):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){wo(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return ET(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=new $e(X.comparator);function Rr(){return Qb}const jT=new $e(X.comparator);function ll(...t){let e=jT;for(const n of t)e=e.insert(n.key,n);return e}function DT(t){let e=jT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ki(){return Il()}function OT(){return Il()}function Il(){return new xa(t=>t.toString(),(t,e)=>t.isEqual(e))}const Zb=new $e(X.comparator),Xb=new mt(X.comparator);function me(...t){let e=Xb;for(const n of t)e=e.add(n);return e}const Jb=new mt(we);function e3(){return Jb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rd(e)?"-0":e}}function MT(t){return{integerValue:""+t}}function t3(t,e){return Rb(e)?MT(e):m1(t,e)}/**
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
 */class Ph{constructor(){this._=void 0}}function n3(t,e,n){return t instanceof ou?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&u1(o)&&(o=c1(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof su?VT(t,e):t instanceof au?FT(t,e):function(i,o){const s=NT(i,o),a=fk(s)+fk(i.Pe);return Hm(s)&&Hm(i.Pe)?MT(a):m1(i.serializer,a)}(t,e)}function r3(t,e,n){return t instanceof su?VT(t,e):t instanceof au?FT(t,e):n}function NT(t,e){return t instanceof Dd?function(r){return Hm(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class ou extends Ph{}class su extends Ph{constructor(e){super(),this.elements=e}}function VT(t,e){const n=UT(e);for(const r of t.elements)n.some(i=>tr(i,r))||n.push(r);return{arrayValue:{values:n}}}class au extends Ph{constructor(e){super(),this.elements=e}}function FT(t,e){let n=UT(e);for(const r of t.elements)n=n.filter(i=>!tr(i,r));return{arrayValue:{values:n}}}class Dd extends Ph{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function fk(t){return Ke(t.integerValue||t.doubleValue)}function UT(t){return d1(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(e,n){this.field=e,this.transform=n}}function o3(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof su&&i instanceof su||r instanceof au&&i instanceof au?ra(r.elements,i.elements,tr):r instanceof Dd&&i instanceof Dd?tr(r.Pe,i.Pe):r instanceof ou&&i instanceof ou}(t.transform,e.transform)}class s3{constructor(e,n){this.version=e,this.transformResults=n}}class mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $c(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rh{}function WT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new g1(t.key,mn.none()):new xu(t.key,t.data,mn.none());{const n=t.data,r=zt.empty();let i=new mt(ft.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Ri(t.key,r,new nn(i.toArray()),mn.none())}}function a3(t,e,n){t instanceof xu?function(i,o,s){const a=i.value.clone(),l=mk(i.fieldTransforms,o,s.transformResults);a.setAll(l),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ri?function(i,o,s){if(!$c(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=mk(i.fieldTransforms,o,s.transformResults),l=o.data;l.setAll($T(i)),l.setAll(a),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Sl(t,e,n,r){return t instanceof xu?function(o,s,a,l){if(!$c(o.precondition,s))return a;const d=o.value.clone(),f=gk(o.fieldTransforms,l,s);return d.setAll(f),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ri?function(o,s,a,l){if(!$c(o.precondition,s))return a;const d=gk(o.fieldTransforms,l,s),f=s.data;return f.setAll($T(o)),f.setAll(d),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(o,s,a){return $c(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function l3(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=NT(r.transform,i||null);o!=null&&(n===null&&(n=zt.empty()),n.set(r.field,o))}return n||null}function pk(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ra(r,i,(o,s)=>o3(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xu extends Rh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ri extends Rh{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function $T(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function mk(t,e,n){const r=new Map;Ae(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,r3(s,a,n[i]))}return r}function gk(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,n3(o,s,e))}return r}class g1 extends Rh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class u3 extends Rh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c3{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&a3(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Sl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Sl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=OT();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=WT(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&ra(this.mutations,e.mutations,(n,r)=>pk(n,r))&&ra(this.baseMutations,e.baseMutations,(n,r)=>pk(n,r))}}class y1{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ae(e.mutations.length===r.length);let i=function(){return Zb}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new y1(e,n,r,i)}}/**
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
 */class d3{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class h3{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,ve;function f3(t){switch(t){default:return ne();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function zT(t){if(t===void 0)return Pr("GRPC error has no .code"),W.UNKNOWN;switch(t){case Je.OK:return W.OK;case Je.CANCELLED:return W.CANCELLED;case Je.UNKNOWN:return W.UNKNOWN;case Je.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Je.INTERNAL:return W.INTERNAL;case Je.UNAVAILABLE:return W.UNAVAILABLE;case Je.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Je.NOT_FOUND:return W.NOT_FOUND;case Je.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Je.ABORTED:return W.ABORTED;case Je.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Je.DATA_LOSS:return W.DATA_LOSS;default:return ne()}}(ve=Je||(Je={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function p3(){return new TextEncoder}/**
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
 */const m3=new eo([4294967295,4294967295],0);function yk(t){const e=p3().encode(t),n=new fT;return n.update(e),new Uint8Array(n.digest())}function vk(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new eo([n,r],0),new eo([i,o],0)]}class v1{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ul(`Invalid padding: ${n}`);if(r<0)throw new ul(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ul(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ul(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=eo.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(eo.fromNumber(r)));return i.compare(m3)===1&&(i=new eo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=yk(e),[r,i]=vk(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new v1(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=yk(e),[r,i]=vk(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ul extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Tu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new bh(ie.min(),i,new $e(we),Rr(),me())}}class Tu{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Tu(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class BT{constructor(e,n){this.targetId=e,this.me=n}}class HT{constructor(e,n,r=yt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class kk{constructor(){this.fe=0,this.ge=Ek(),this.pe=yt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=me(),n=me(),r=me();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne()}}),new Tu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ek()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class g3{constructor(e){this.Le=e,this.Be=new Map,this.ke=Rr(),this.qe=_k(),this.Qe=new $e(we)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(Ym(o))if(r===0){const s=new X(o.path);this.Ue(n,s,Ct.newNoDocument(s,ie.min()))}else Ae(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),l=a?this.Xe(a,e,s):1;if(l!==0){this.je(n);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=fo(r).toUint8Array()}catch(l){if(l instanceof wT)return na("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new v1(s,i,o)}catch(l){return na(l instanceof ul?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const a=this.Je(s);if(a){if(o.current&&Ym(a.target)){const l=new X(a.target.path);this.ke.get(l)!==null||this.it(s,l)||this.Ue(s,l,Ct.newNoDocument(l,e))}o.be&&(n.set(s,o.ve()),o.Ce())}});let r=me();this.qe.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new bh(e,n,this.Qe,this.ke,r);return this.ke=Rr(),this.qe=_k(),this.Qe=new $e(we),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new kk,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new mt(we),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new kk),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function _k(){return new $e(X.comparator)}function Ek(){return new $e(X.comparator)}const y3={asc:"ASCENDING",desc:"DESCENDING"},v3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},k3={and:"AND",or:"OR"};class _3{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Km(t,e){return t.useProto3Json||Ch(e)?e:{value:e}}function Od(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function E3(t,e){return Od(t,e.toTimestamp())}function Jn(t){return Ae(!!t),ie.fromTimestamp(function(n){const r=wi(n);return new rt(r.seconds,r.nanos)}(t))}function k1(t,e){return Qm(t,e).canonicalString()}function Qm(t,e){const n=function(i){return new Oe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function YT(t){const e=Oe.fromString(t);return Ae(XT(e)),e}function Zm(t,e){return k1(t.databaseId,e.path)}function ap(t,e){const n=YT(e);if(n.get(1)!==t.databaseId.projectId)throw new G(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(KT(n))}function GT(t,e){return k1(t.databaseId,e)}function w3(t){const e=YT(t);return e.length===4?Oe.emptyPath():KT(e)}function Xm(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function KT(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function wk(t,e,n){return{name:Zm(t,e),fields:n.value.mapValue.fields}}function x3(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,f){return d.useProto3Json?(Ae(f===void 0||typeof f=="string"),yt.fromBase64String(f||"")):(Ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array),yt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(d){const f=d.code===void 0?W.UNKNOWN:zT(d.code);return new G(f,d.message||"")}(s);n=new HT(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ap(t,r.document.name),o=Jn(r.document.updateTime),s=r.document.createTime?Jn(r.document.createTime):ie.min(),a=new zt({mapValue:{fields:r.document.fields}}),l=Ct.newFoundDocument(i,o,s,a),d=r.targetIds||[],f=r.removedTargetIds||[];n=new zc(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ap(t,r.document),o=r.readTime?Jn(r.readTime):ie.min(),s=Ct.newNoDocument(i,o),a=r.removedTargetIds||[];n=new zc([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ap(t,r.document),o=r.removedTargetIds||[];n=new zc([],o,i,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new h3(i,o),a=r.targetId;n=new BT(a,s)}}return n}function T3(t,e){let n;if(e instanceof xu)n={update:wk(t,e.key,e.value)};else if(e instanceof g1)n={delete:Zm(t,e.key)};else if(e instanceof Ri)n={update:wk(t,e.key,e.data),updateMask:j3(e.fieldMask)};else{if(!(e instanceof u3))return ne();n={verify:Zm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof ou)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof su)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof au)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Dd)return{fieldPath:s.field.canonicalString(),increment:a.Pe};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:E3(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ne()}(t,e.precondition)),n}function I3(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?Jn(i.updateTime):Jn(o);return s.isEqual(ie.min())&&(s=Jn(o)),new s3(s,i.transformResults||[])}(n,e))):[]}function S3(t,e){return{documents:[GT(t,e.path)]}}function C3(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=GT(t,i);const o=function(d){if(d.length!==0)return ZT(Nn.create(d,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(d){if(d.length!==0)return d.map(f=>function(E){return{field:ks(E.field),direction:P3(E.dir)}}(f))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=Km(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function L3(t){let e=w3(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ae(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let o=[];n.where&&(o=function(m){const E=QT(m);return E instanceof Nn&&ST(E)?E.getFilters():[E]}(n.where));let s=[];n.orderBy&&(s=function(m){return m.map(E=>function(x){return new iu(_s(x.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(E))}(n.orderBy));let a=null;n.limit&&(a=function(m){let E;return E=typeof m=="object"?m.value:m,Ch(E)?null:E}(n.limit));let l=null;n.startAt&&(l=function(m){const E=!!m.before,v=m.values||[];return new bd(v,E)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const E=!m.before,v=m.values||[];return new bd(v,E)}(n.endAt)),qb(e,i,s,o,a,"F",l,d)}function A3(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function QT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_s(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_s(n.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=_s(n.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=_s(n.unaryFilter.field);return nt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return nt.create(_s(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nn.create(n.compositeFilter.filters.map(r=>QT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function P3(t){return y3[t]}function R3(t){return v3[t]}function b3(t){return k3[t]}function ks(t){return{fieldPath:t.canonicalString()}}function _s(t){return ft.fromServerFormat(t.fieldPath)}function ZT(t){return t instanceof nt?function(n){if(n.op==="=="){if(lk(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NAN"}};if(ak(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(lk(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NAN"}};if(ak(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ks(n.field),op:R3(n.op),value:n.value}}}(t):t instanceof Nn?function(n){const r=n.getFilters().map(i=>ZT(i));return r.length===1?r[0]:{compositeFilter:{op:b3(n.op),filters:r}}}(t):ne()}function j3(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function XT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n,r,i,o=ie.min(),s=ie.min(),a=yt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ni(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D3{constructor(e){this.ct=e}}function O3(t){const e=L3({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M3{constructor(){this.un=new N3}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Ei.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Ei.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class N3{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new mt(Oe.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new mt(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class V3{constructor(){this.changes=new xa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class F3{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U3{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Sl(r.mutation,i,nn.empty(),rt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const i=Ki();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=ll();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=Ki();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=Rr();const s=Il(),a=function(){return Il()}();return n.forEach((l,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Ri)?o=o.insert(d.key,d):f!==void 0?(s.set(d.key,f.mutation.getFieldMask()),Sl(f.mutation,d,f.mutation.getFieldMask(),rt.now())):s.set(d.key,nn.empty())}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((d,f)=>s.set(d,f)),n.forEach((d,f)=>{var m;return a.set(d,new F3(f,(m=s.get(d))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Il();let i=new $e((s,a)=>s-a),o=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const d=n.get(l);if(d===null)return;let f=r.get(l)||nn.empty();f=a.applyToLocalView(d,f),r.set(l,f);const m=(i.get(a.batchId)||me()).add(l);i=i.insert(a.batchId,m)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),d=l.key,f=l.value,m=OT();f.forEach(E=>{if(!o.has(E)){const v=WT(n.get(E),r.get(E));v!==null&&m.set(E,v),o=o.add(E)}}),s.push(this.documentOverlayCache.saveOverlays(e,d,m))}return $.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return X.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):PT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):$.resolve(Ki());let a=-1,l=o;return s.next(d=>$.forEach(d,(f,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),o.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{l=l.insert(f,E)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,l,d,me())).next(f=>({batchId:a,changes:DT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=ll();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=ll();return this.indexManager.getCollectionParents(e,o).next(a=>$.forEach(a,l=>{const d=function(m,E){return new wa(E,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((m,E)=>{s=s.insert(m,E)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((l,d)=>{const f=d.getKey();s.get(f)===null&&(s=s.insert(f,Ct.newInvalidDocument(f)))});let a=ll();return s.forEach((l,d)=>{const f=o.get(l);f!==void 0&&Sl(f.mutation,d,nn.empty(),rt.now()),Ah(n,d)&&(a=a.insert(l,d))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W3{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Jn(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:O3(i.bundledQuery),readTime:Jn(i.readTime)}}(n)),$.resolve()}}/**
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
 */class $3{constructor(){this.overlays=new $e(X.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ki();return $.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Ki(),o=n.length+1,s=new X(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,d=l.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new $e((d,f)=>d-f);const s=this.overlays.getIterator();for(;s.hasNext();){const d=s.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=o.get(d.largestBatchId);f===null&&(f=Ki(),o=o.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const a=Ki(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>a.set(d,f)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new d3(n,r));let o=this.Ir.get(n);o===void 0&&(o=me(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
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
 */class z3{constructor(){this.sessionToken=yt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(){this.Tr=new mt(st.Er),this.dr=new mt(st.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new st(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new Oe([])),r=new st(n,e),i=new st(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new Oe([])),r=new st(n,e),i=new st(n,e+1);let o=me();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new st(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||we(e.wr,n.wr)}static Ar(e,n){return we(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B3{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new mt(st.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new c3(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.br=this.br.add(new st(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(s)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return $.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),i=new st(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const a=this.Dr(s.wr);o.push(a)}),$.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new mt(we);return n.forEach(i=>{const o=new st(i,0),s=new st(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],a=>{r=r.add(a.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;X.isDocumentKey(o)||(o=o.child(""));const s=new st(new X(o),0);let a=new mt(we);return this.br.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(a=a.add(l.wr)),!0)},s),$.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,i=>{const o=new st(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new st(n,0),i=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H3{constructor(e){this.Mr=e,this.docs=function(){return new $e(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(n))}getEntries(e,n){let r=Rr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Ct.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Rr();const s=n.path,a=new X(s.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!s.isPrefixOf(d.path))break;d.path.length>s.length+1||Cb(Sb(f),r)<=0||(i.has(f.key)||Ah(n,f))&&(o=o.insert(f.key,f.mutableCopy()))}return $.resolve(o)}getAllFromCollectionGroup(e,n,r,i){ne()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new q3(this)}getSize(e){return $.resolve(this.size)}}class q3 extends V3{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y3{constructor(e){this.persistence=e,this.Nr=new xa(n=>h1(n),f1),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Lr=0,this.Br=new _1,this.targetCount=0,this.kr=sa.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new sa(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(o).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),$.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G3{constructor(e,n){this.qr={},this.overlays={},this.Qr=new l1(0),this.Kr=!1,this.Kr=!0,this.$r=new z3,this.referenceDelegate=e(this),this.Ur=new Y3(this),this.indexManager=new M3,this.remoteDocumentCache=function(i){return new H3(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new D3(n),this.Gr=new W3(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $3,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new B3(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const i=new K3(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class K3 extends Ab{constructor(e){super(),this.currentSequenceNumber=e}}class E1{constructor(e){this.persistence=e,this.Jr=new _1,this.Yr=null}static Zr(e){return new E1(e)}get Xr(){if(this.Yr)return this.Yr;throw ne()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const i=X.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,ie.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=me(),i=me();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new w1(e,n.fromCache,r,i)}}/**
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
 */class Q3{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z3{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return RL()?8:Pb(Pt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new Q3;return this.Xi(e,n,s).next(a=>{if(o.result=a,this.zi)return this.es(e,n,s,a.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ka()<=ge.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",vs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Ka()<=ge.DEBUG&&Q("QueryEngine","Query:",vs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ka()<=ge.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",vs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(n))):$.resolve())}Yi(e,n){if(hk(n))return $.resolve(null);let r=Xn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=jd(n,null,"F"),r=Xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=me(...o);return this.Ji.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.ts(n,a);return this.ns(n,d,s,l.readTime)?this.Yi(e,jd(n,null,"F")):this.rs(e,d,n,l)}))})))}Zi(e,n,r,i){return hk(n)||i.isEqual(ie.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?$.resolve(null):(Ka()<=ge.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vs(n)),this.rs(e,s,n,Ib(i,-1)).next(a=>a))})}ts(e,n){let r=new mt(bT(e));return n.forEach((i,o)=>{Ah(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return Ka()<=ge.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",vs(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ei.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X3{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new $e(we),this._s=new xa(o=>h1(o),f1),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new U3(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function J3(t,e,n,r){return new X3(t,e,n,r)}async function JT(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=me();for(const d of i){s.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of o){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(d=>({hs:d,removedBatchIds:s,addedBatchIds:a}))})})}function ej(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,d,f){const m=d.batch,E=m.keys();let v=$.resolve();return E.forEach(x=>{v=v.next(()=>f.getEntry(l,x)).next(C=>{const w=d.docVersions.get(x);Ae(w!==null),C.version.compareTo(w)<0&&(m.applyToRemoteDocument(C,d),C.isValidDocument()&&(C.setReadTime(d.commitVersion),f.addEntry(C)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(l,m))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=me();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(l=l.add(a.batch.mutations[d].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function e8(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function tj(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((f,m)=>{const E=i.get(m);if(!E)return;a.push(n.Ur.removeMatchingKeys(o,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(o,f.addedDocuments,m)));let v=E.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(m)!==null?v=v.withResumeToken(yt.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),i=i.insert(m,v),function(C,w,y){return C.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(E,v,f)&&a.push(n.Ur.updateTargetData(o,v))});let l=Rr(),d=me();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,f))}),a.push(nj(o,s,e.documentUpdates).next(f=>{l=f.Ps,d=f.Is})),!r.isEqual(ie.min())){const f=n.Ur.getLastRemoteSnapshotVersion(o).next(m=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(f)}return $.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,d)).next(()=>l)}).then(o=>(n.os=i,o))}function nj(t,e,n){let r=me(),i=me();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=Rr();return n.forEach((a,l)=>{const d=o.get(a);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):Q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",l.version)}),{Ps:s,Is:i}})}function rj(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ij(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(o=>o?(i=o,$.resolve(i)):n.Ur.allocateTargetId(r).next(s=>(i=new ni(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Jm(t,e,n){const r=oe(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!wu(s))throw s;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function xk(t,e,n){const r=oe(t);let i=ie.min(),o=me();return r.persistence.runTransaction("Execute query","readwrite",s=>function(l,d,f){const m=oe(l),E=m._s.get(f);return E!==void 0?$.resolve(m.os.get(E)):m.Ur.getTargetData(d,f)}(r,s,Xn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.ss.getDocumentsMatchingQuery(s,e,n?i:ie.min(),n?o:me())).next(a=>(oj(r,Gb(e),a),{documents:a,Ts:o})))}function oj(t,e,n){let r=t.us.get(e)||ie.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.us.set(e,r)}class Tk{constructor(){this.activeTargetIds=e3()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sj{constructor(){this.so=new Tk,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Tk,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aj{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mc=null;function lp(){return mc===null?mc=function(){return 268435456+Math.round(2147483648*Math.random())}():mc++,"0x"+mc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uj{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class cj extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const a=lp(),l=this.xo(n,r.toUriEncodedString());Q("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,s),this.No(n,l,d,i).then(f=>(Q("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw na("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",l,"request:",i),f})}Lo(n,r,i,o,s,a){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ea}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=lj[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=lp();return new Promise((s,a)=>{const l=new pT;l.setWithCredentials(!0),l.listenOnce(mT.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Uc.NO_ERROR:const f=l.getResponseJson();Q(Tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),s(f);break;case Uc.TIMEOUT:Q(Tt,`RPC '${e}' ${o} timed out`),a(new G(W.DEADLINE_EXCEEDED,"Request time out"));break;case Uc.HTTP_ERROR:const m=l.getStatus();if(Q(Tt,`RPC '${e}' ${o} failed with status:`,m,"response text:",l.getResponseText()),m>0){let E=l.getResponseJson();Array.isArray(E)&&(E=E[0]);const v=E==null?void 0:E.error;if(v&&v.status&&v.message){const x=function(w){const y=w.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(y)>=0?y:W.UNKNOWN}(v.status);a(new G(x,v.message))}else a(new G(W.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new G(W.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{Q(Tt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);Q(Tt,`RPC '${e}' ${o} sending request:`,i),l.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=lp(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=vT(),a=yT(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=o.join("");Q(Tt,`Creating RPC '${e}' stream ${i}: ${f}`,l);const m=s.createWebChannel(f,l);let E=!1,v=!1;const x=new uj({Io:w=>{v?Q(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(E||(Q(Tt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),E=!0),Q(Tt,`RPC '${e}' stream ${i} sending:`,w),m.send(w))},To:()=>m.close()}),C=(w,y,g)=>{w.listen(y,_=>{try{g(_)}catch(S){setTimeout(()=>{throw S},0)}})};return C(m,al.EventType.OPEN,()=>{v||(Q(Tt,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),C(m,al.EventType.CLOSE,()=>{v||(v=!0,Q(Tt,`RPC '${e}' stream ${i} transport closed`),x.So())}),C(m,al.EventType.ERROR,w=>{v||(v=!0,na(Tt,`RPC '${e}' stream ${i} transport errored:`,w),x.So(new G(W.UNAVAILABLE,"The operation could not be completed")))}),C(m,al.EventType.MESSAGE,w=>{var y;if(!v){const g=w.data[0];Ae(!!g);const _=g,S=_.error||((y=_[0])===null||y===void 0?void 0:y.error);if(S){Q(Tt,`RPC '${e}' stream ${i} received error:`,S);const b=S.status;let M=function(A){const R=Je[A];if(R!==void 0)return zT(R)}(b),T=S.message;M===void 0&&(M=W.INTERNAL,T="Unknown error status: "+b+" with message "+S.message),v=!0,x.So(new G(M,T)),m.close()}else Q(Tt,`RPC '${e}' stream ${i} received:`,g),x.bo(g)}}),C(a,gT.STAT_EVENT,w=>{w.stat===zm.PROXY?Q(Tt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===zm.NOPROXY&&Q(Tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function up(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t){return new _3(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t8{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n8{constructor(e,n,r,i,o,s,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new t8(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(Pr(n.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new G(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dj extends n8{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=x3(this.serializer,e),r=function(o){if(!("targetChange"in o))return ie.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?ie.min():s.readTime?Jn(s.readTime):ie.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Xm(this.serializer),n.addTarget=function(o,s){let a;const l=s.target;if(a=Ym(l)?{documents:S3(o,l)}:{query:C3(o,l)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=qT(o,s.resumeToken);const d=Km(o,s.expectedCount);d!==null&&(a.expectedCount=d)}else if(s.snapshotVersion.compareTo(ie.min())>0){a.readTime=Od(o,s.snapshotVersion.toTimestamp());const d=Km(o,s.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=A3(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Xm(this.serializer),n.removeTarget=e,this.a_(n)}}class hj extends n8{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,Ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=I3(e.writeResults,e.commitTime),r=Jn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Xm(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>T3(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fj extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new G(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Qm(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(W.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,Qm(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(W.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class pj{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Pr(n),this.D_=!1):Q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mj{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{xo(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=oe(l);d.L_.add(4),await Iu(d),d.q_.set("Unknown"),d.L_.delete(4),await Dh(d)}(this))})}),this.q_=new pj(r,i)}}async function Dh(t){if(xo(t))for(const e of t.B_)await e(!0)}async function Iu(t){for(const e of t.B_)await e(!1)}function r8(t,e){const n=oe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),S1(n)?I1(n):Ta(n).r_()&&T1(n,e))}function x1(t,e){const n=oe(t),r=Ta(n);n.N_.delete(e),r.r_()&&i8(n,e),n.N_.size===0&&(r.r_()?r.o_():xo(n)&&n.q_.set("Unknown"))}function T1(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ta(t).A_(e)}function i8(t,e){t.Q_.xe(e),Ta(t).R_(e)}function I1(t){t.Q_=new g3({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ta(t).start(),t.q_.v_()}function S1(t){return xo(t)&&!Ta(t).n_()&&t.N_.size>0}function xo(t){return oe(t).L_.size===0}function o8(t){t.Q_=void 0}async function gj(t){t.q_.set("Online")}async function yj(t){t.N_.forEach((e,n)=>{T1(t,e)})}async function vj(t,e){o8(t),S1(t)?(t.q_.M_(e),I1(t)):t.q_.set("Unknown")}async function kj(t,e,n){if(t.q_.set("Online"),e instanceof HT&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Md(t,r)}else if(e instanceof zc?t.Q_.Ke(e):e instanceof BT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ie.min()))try{const r=await e8(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.Q_.rt(s);return a.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=o.N_.get(d);f&&o.N_.set(d,f.withResumeToken(l.resumeToken,s))}}),a.targetMismatches.forEach((l,d)=>{const f=o.N_.get(l);if(!f)return;o.N_.set(l,f.withResumeToken(yt.EMPTY_BYTE_STRING,f.snapshotVersion)),i8(o,l);const m=new ni(f.target,l,d,f.sequenceNumber);T1(o,m)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await Md(t,r)}}async function Md(t,e,n){if(!wu(e))throw e;t.L_.add(1),await Iu(t),t.q_.set("Offline"),n||(n=()=>e8(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Dh(t)})}function s8(t,e){return e().catch(n=>Md(t,n,e))}async function Oh(t){const e=oe(t),n=xi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;_j(e);)try{const i=await rj(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Ej(e,i)}catch(i){await Md(e,i)}a8(e)&&l8(e)}function _j(t){return xo(t)&&t.O_.length<10}function Ej(t,e){t.O_.push(e);const n=xi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function a8(t){return xo(t)&&!xi(t).n_()&&t.O_.length>0}function l8(t){xi(t).start()}async function wj(t){xi(t).p_()}async function xj(t){const e=xi(t);for(const n of t.O_)e.m_(n.mutations)}async function Tj(t,e,n){const r=t.O_.shift(),i=y1.from(r,e,n);await s8(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Oh(t)}async function Ij(t,e){e&&xi(t).V_&&await async function(r,i){if(function(s){return f3(s)&&s!==W.ABORTED}(i.code)){const o=r.O_.shift();xi(r).s_(),await s8(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Oh(r)}}(t,e),a8(t)&&l8(t)}async function Sk(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=xo(n);n.L_.add(3),await Iu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Dh(n)}async function Sj(t,e){const n=oe(t);e?(n.L_.delete(2),await Dh(n)):e||(n.L_.add(2),await Iu(n),n.q_.set("Unknown"))}function Ta(t){return t.K_||(t.K_=function(n,r,i){const o=oe(n);return o.w_(),new dj(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:gj.bind(null,t),Ro:yj.bind(null,t),mo:vj.bind(null,t),d_:kj.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),S1(t)?I1(t):t.q_.set("Unknown")):(await t.K_.stop(),o8(t))})),t.K_}function xi(t){return t.U_||(t.U_=function(n,r,i){const o=oe(n);return o.w_(),new hj(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:wj.bind(null,t),mo:Ij.bind(null,t),f_:xj.bind(null,t),g_:Tj.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Oh(t)):(await t.U_.stop(),t.O_.length>0&&(Q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new C1(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function L1(t,e){if(Pr("AsyncQueue",`${e}: ${t}`),wu(t))return new G(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ck{constructor(){this.W_=new $e(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ne():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class aa{constructor(e,n,r,i,o,s,a,l,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new aa(e,n,Ys.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cj{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Lj{constructor(){this.queries=Lk(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=oe(n),o=i.queries;i.queries=Lk(),o.forEach((s,a)=>{for(const l of a.j_)l.onError(r)})})(this,new G(W.ABORTED,"Firestore shutting down"))}}function Lk(){return new xa(t=>RT(t),Lh)}async function u8(t,e){const n=oe(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new Cj,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const a=L1(s,`Initialization of query '${vs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&A1(n)}async function c8(t,e){const n=oe(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Aj(t,e){const n=oe(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.j_)a.X_(i)&&(r=!0);s.z_=i}}r&&A1(n)}function Pj(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function A1(t){t.Y_.forEach(e=>{e.next()})}var e0,Ak;(Ak=e0||(e0={})).ea="default",Ak.Cache="cache";class d8{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new aa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=aa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==e0.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h8{constructor(e){this.key=e}}class f8{constructor(e){this.key=e}}class Rj{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=me(),this.mutatedKeys=me(),this.Aa=bT(e),this.Ra=new Ys(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Ck,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const E=i.get(f),v=Ah(this.query,m)?m:null,x=!!E&&this.mutatedKeys.has(E.key),C=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let w=!1;E&&v?E.data.isEqual(v.data)?x!==C&&(r.track({type:3,doc:v}),w=!0):this.ga(E,v)||(r.track({type:2,doc:v}),w=!0,(l&&this.Aa(v,l)>0||d&&this.Aa(v,d)<0)&&(a=!0)):!E&&v?(r.track({type:0,doc:v}),w=!0):E&&!v&&(r.track({type:1,doc:E}),w=!0,(l||d)&&(a=!0)),w&&(v?(s=s.add(v),o=C?o.add(f):o.delete(f)):(s=s.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const f=this.query.limitType==="F"?s.last():s.first();s=s.delete(f.key),o=o.delete(f.key),r.track({type:1,doc:f})}return{Ra:s,fa:r,ns:a,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((f,m)=>function(v,x){const C=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return C(v)-C(x)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,d=l!==this.Ea;return this.Ea=l,s.length!==0||d?{snapshot:new aa(this.query,e.Ra,o,s,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ck,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=me(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new f8(r))}),this.da.forEach(r=>{e.has(r)||n.push(new h8(r))}),n}ba(e){this.Ta=e.Ts,this.da=me();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return aa.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class bj{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jj{constructor(e){this.key=e,this.va=!1}}class Dj{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new xa(a=>RT(a),Lh),this.Ma=new Map,this.xa=new Set,this.Oa=new $e(X.comparator),this.Na=new Map,this.La=new _1,this.Ba={},this.ka=new Map,this.qa=sa.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Oj(t,e,n=!0){const r=k8(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await p8(r,e,n,!0),i}async function Mj(t,e){const n=k8(t);await p8(n,e,!0,!1)}async function p8(t,e,n,r){const i=await ij(t.localStore,Xn(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,n);let a;return r&&(a=await Nj(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&r8(t.remoteStore,i),a}async function Nj(t,e,n,r,i){t.Ka=(m,E,v)=>async function(C,w,y,g){let _=w.view.ma(y);_.ns&&(_=await xk(C.localStore,w.query,!1).then(({documents:T})=>w.view.ma(T,_)));const S=g&&g.targetChanges.get(w.targetId),b=g&&g.targetMismatches.get(w.targetId)!=null,M=w.view.applyChanges(_,C.isPrimaryClient,S,b);return Rk(C,w.targetId,M.wa),M.snapshot}(t,m,E,v);const o=await xk(t.localStore,e,!0),s=new Rj(e,o.Ts),a=s.ma(o.documents),l=Tu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=s.applyChanges(a,t.isPrimaryClient,l);Rk(t,n,d.wa);const f=new bj(e,n,s);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function Vj(t,e,n){const r=oe(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(s=>!Lh(s,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Jm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&x1(r.remoteStore,i.targetId),t0(r,i.targetId)}).catch(Eu)):(t0(r,i.targetId),await Jm(r.localStore,i.targetId,!0))}async function Fj(t,e){const n=oe(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),x1(n.remoteStore,r.targetId))}async function Uj(t,e,n){const r=Yj(t);try{const i=await function(s,a){const l=oe(s),d=rt.now(),f=a.reduce((v,x)=>v.add(x.key),me());let m,E;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let x=Rr(),C=me();return l.cs.getEntries(v,f).next(w=>{x=w,x.forEach((y,g)=>{g.isValidDocument()||(C=C.add(y))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,x)).next(w=>{m=w;const y=[];for(const g of a){const _=l3(g,m.get(g.key).overlayedDocument);_!=null&&y.push(new Ri(g.key,_,xT(_.value.mapValue),mn.exists(!0)))}return l.mutationQueue.addMutationBatch(v,d,y,a)}).next(w=>{E=w;const y=w.applyToLocalDocumentSet(m,C);return l.documentOverlayCache.saveOverlays(v,w.batchId,y)})}).then(()=>({batchId:E.batchId,changes:DT(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let d=s.Ba[s.currentUser.toKey()];d||(d=new $e(we)),d=d.insert(a,l),s.Ba[s.currentUser.toKey()]=d}(r,i.batchId,n),await Su(r,i.changes),await Oh(r.remoteStore)}catch(i){const o=L1(i,"Failed to persist write");n.reject(o)}}async function m8(t,e){const n=oe(t);try{const r=await tj(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Na.get(o);s&&(Ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?Ae(s.va):i.removedDocuments.size>0&&(Ae(s.va),s.va=!1))}),await Su(n,r,e)}catch(r){await Eu(r)}}function Pk(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const a=s.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const l=oe(s);l.onlineState=a;let d=!1;l.queries.forEach((f,m)=>{for(const E of m.j_)E.Z_(a)&&(d=!0)}),d&&A1(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Wj(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let s=new $e(X.comparator);s=s.insert(o,Ct.newNoDocument(o,ie.min()));const a=me().add(o),l=new bh(ie.min(),new Map,new $e(we),s,a);await m8(r,l),r.Oa=r.Oa.remove(o),r.Na.delete(e),P1(r)}else await Jm(r.localStore,e,!1).then(()=>t0(r,e,n)).catch(Eu)}async function $j(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await ej(n.localStore,e);y8(n,r,null),g8(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Su(n,i)}catch(i){await Eu(i)}}async function zj(t,e,n){const r=oe(t);try{const i=await function(s,a){const l=oe(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,a).next(m=>(Ae(m!==null),f=m.keys(),l.mutationQueue.removeMutationBatch(d,m))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(r.localStore,e);y8(r,e,n),g8(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Su(r,i)}catch(i){await Eu(i)}}function g8(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function y8(t,e,n){const r=oe(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function t0(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||v8(t,r)})}function v8(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(x1(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),P1(t))}function Rk(t,e,n){for(const r of n)r instanceof h8?(t.La.addReference(r.key,e),Bj(t,r)):r instanceof f8?(Q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||v8(t,r.key)):ne()}function Bj(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Q("SyncEngine","New document in limbo: "+n),t.xa.add(r),P1(t))}function P1(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(Oe.fromString(e)),r=t.qa.next();t.Na.set(r,new jj(n)),t.Oa=t.Oa.insert(n,r),r8(t.remoteStore,new ni(Xn(p1(n.path)),r,"TargetPurposeLimboResolution",l1.oe))}}async function Su(t,e,n){const r=oe(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{s.push(r.Ka(l,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(d){i.push(d);const m=w1.Wi(l.targetId,d);o.push(m)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(l,d){const f=oe(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>$.forEach(d,E=>$.forEach(E.$i,v=>f.persistence.referenceDelegate.addReference(m,E.targetId,v)).next(()=>$.forEach(E.Ui,v=>f.persistence.referenceDelegate.removeReference(m,E.targetId,v)))))}catch(m){if(!wu(m))throw m;Q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const E=m.targetId;if(!m.fromCache){const v=f.os.get(E),x=v.snapshotVersion,C=v.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(E,C)}}}(r.localStore,o))}async function Hj(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await JT(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(a=>{a.forEach(l=>{l.reject(new G(W.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Su(n,r.hs)}}function qj(t,e){const n=oe(t),r=n.Na.get(e);if(r&&r.va)return me().add(r.key);{let i=me();const o=n.Ma.get(e);if(!o)return i;for(const s of o){const a=n.Fa.get(s);i=i.unionWith(a.view.Va)}return i}}function k8(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=m8.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Wj.bind(null,e),e.Ca.d_=Aj.bind(null,e.eventManager),e.Ca.$a=Pj.bind(null,e.eventManager),e}function Yj(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$j.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zj.bind(null,e),e}class Nd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return J3(this.persistence,new Z3,e.initialUser,this.serializer)}Ga(e){return new G3(E1.Zr,this.serializer)}Wa(e){return new sj}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nd.provider={build:()=>new Nd};class n0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pk(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hj.bind(null,this.syncEngine),await Sj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Lj}()}createDatastore(e){const n=jh(e.databaseInfo.databaseId),r=function(o){return new cj(o)}(e.databaseInfo);return function(o,s,a,l){return new fj(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new mj(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Pk(this.syncEngine,n,0),function(){return Ik.D()?new Ik:new aj}())}createSyncEngine(e,n){return function(i,o,s,a,l,d,f){const m=new Dj(i,o,s,a,l,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=oe(i);Q("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Iu(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}n0.provider={build:()=>new n0};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _8{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Pr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gj{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=_T.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async s=>{Q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=L1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cp(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await JT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function bk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Kj(t);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Sk(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Sk(e.remoteStore,i)),t._onlineComponents=e}async function Kj(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await cp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;na("Error using user provided cache. Falling back to memory cache: "+n),await cp(t,new Nd)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await cp(t,new Nd);return t._offlineComponents}async function E8(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await bk(t,t._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await bk(t,new n0))),t._onlineComponents}function Qj(t){return E8(t).then(e=>e.syncEngine)}async function w8(t){const e=await E8(t),n=e.eventManager;return n.onListen=Oj.bind(null,e.syncEngine),n.onUnlisten=Vj.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Mj.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Fj.bind(null,e.syncEngine),n}function Zj(t,e,n={}){const r=new xr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,d){const f=new _8({next:E=>{f.Za(),s.enqueueAndForget(()=>c8(o,m));const v=E.docs.has(a);!v&&E.fromCache?d.reject(new G(W.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&E.fromCache&&l&&l.source==="server"?d.reject(new G(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),m=new d8(p1(a.path),f,{includeMetadataChanges:!0,_a:!0});return u8(o,m)}(await w8(t),t.asyncQueue,e,n,r)),r.promise}function Xj(t,e,n={}){const r=new xr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,d){const f=new _8({next:E=>{f.Za(),s.enqueueAndForget(()=>c8(o,m)),E.fromCache&&l.source==="server"?d.reject(new G(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),m=new d8(a,f,{includeMetadataChanges:!0,_a:!0});return u8(o,m)}(await w8(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function x8(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T8(t,e,n){if(!n)throw new G(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Jj(t,e,n,r){if(e===!0&&r===!0)throw new G(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dk(t){if(!X.isDocumentKey(t))throw new G(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ok(t){if(X.isDocumentKey(t))throw new G(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function Vn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mh(t);throw new G(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Jj("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=x8((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new G(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new G(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new G(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mk({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mk(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gb;switch(r.type){case"firstParty":return new _b(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jk.get(n);r&&(Q("ComponentProvider","Removing Datastore"),jk.delete(n),r.terminate())}(this),Promise.resolve()}}function e5(t,e,n,r={}){var i;const o=(t=Vn(t,Nh))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&na("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=It.MOCK_USER;else{a=wx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new G(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new It(d)}t._authCredentials=new yb(new kT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bi(this.firestore,e,this._query)}}class Vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class mi extends bi{constructor(e,n,r){super(e,n,p1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new X(e))}withConverter(e){return new mi(this.firestore,e,this._path)}}function on(t,e,...n){if(t=We(t),T8("collection","path",e),t instanceof Nh){const r=Oe.fromString(e,...n);return Ok(r),new mi(t,null,r)}{if(!(t instanceof Vt||t instanceof mi))throw new G(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Ok(r),new mi(t.firestore,null,r)}}function Ze(t,e,...n){if(t=We(t),arguments.length===1&&(e=_T.newId()),T8("doc","path",e),t instanceof Nh){const r=Oe.fromString(e,...n);return Dk(r),new Vt(t,null,new X(r))}{if(!(t instanceof Vt||t instanceof mi))throw new G(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Dk(r),new Vt(t.firestore,t instanceof mi?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new t8(this,"async_queue_retry"),this.Vu=()=>{const r=up();r&&Q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=up();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=up();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new xr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!wu(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw Pr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=C1.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&ne()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class To extends Nh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Nk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Nk(e),this._firestoreClient=void 0,await e}}}function t5(t,e){const n=typeof t=="object"?t:xh(),r=typeof t=="string"?t:"(default)",i=Ai(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=kx("firestore");o&&e5(i,...o)}return i}function R1(t){if(t._terminated)throw new G(W.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||n5(t),t._firestoreClient}function n5(t){var e,n,r;const i=t._freezeSettings(),o=function(a,l,d,f){return new jb(a,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,x8(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Gj(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this._byteString=e}static fromBase64String(e){try{return new la(yt.fromBase64String(e))}catch(n){throw new G(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new la(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fh=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
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
 */const r5=/^__.*__$/;class i5{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ri(e,this.data,this.fieldMask,n,this.fieldTransforms):new xu(e,this.data,n,this.fieldTransforms)}}class I8{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ri(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function S8(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class D1{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new D1(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Vd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(S8(this.Cu)&&r5.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class o5{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||jh(e)}Qu(e,n,r,i=!1){return new D1({Cu:e,methodName:n,qu:r,path:ft.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uh(t){const e=t._freezeSettings(),n=jh(t._databaseId);return new o5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function C8(t,e,n,r,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);M1("Data must be an object, but it was:",s,r);const a=L8(r,s);let l,d;if(o.merge)l=new nn(s.fieldMask),d=s.fieldTransforms;else if(o.mergeFields){const f=[];for(const m of o.mergeFields){const E=r0(e,m,n);if(!s.contains(E))throw new G(W.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);P8(f,E)||f.push(E)}l=new nn(f),d=s.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,d=s.fieldTransforms;return new i5(new zt(a),l,d)}class Wh extends Fh{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wh}}class O1 extends Fh{_toFieldTransform(e){return new i3(e.path,new ou)}isEqual(e){return e instanceof O1}}function s5(t,e,n,r){const i=t.Qu(1,e,n);M1("Data must be an object, but it was:",i,r);const o=[],s=zt.empty();wo(r,(l,d)=>{const f=N1(e,l,n);d=We(d);const m=i.Nu(f);if(d instanceof Wh)o.push(f);else{const E=Cu(d,m);E!=null&&(o.push(f),s.set(f,E))}});const a=new nn(o);return new I8(s,a,i.fieldTransforms)}function a5(t,e,n,r,i,o){const s=t.Qu(1,e,n),a=[r0(e,r,n)],l=[i];if(o.length%2!=0)throw new G(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<o.length;E+=2)a.push(r0(e,o[E])),l.push(o[E+1]);const d=[],f=zt.empty();for(let E=a.length-1;E>=0;--E)if(!P8(d,a[E])){const v=a[E];let x=l[E];x=We(x);const C=s.Nu(v);if(x instanceof Wh)d.push(v);else{const w=Cu(x,C);w!=null&&(d.push(v),f.set(v,w))}}const m=new nn(d);return new I8(f,m,s.fieldTransforms)}function l5(t,e,n,r=!1){return Cu(n,t.Qu(r?4:3,e))}function Cu(t,e){if(A8(t=We(t)))return M1("Unsupported field value:",e,t),L8(t,e);if(t instanceof Fh)return function(r,i){if(!S8(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let l=Cu(a,i.Lu(s));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return t3(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=rt.fromDate(r);return{timestampValue:Od(i.serializer,o)}}if(r instanceof rt){const o=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Od(i.serializer,o)}}if(r instanceof b1)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof la)return{bytesValue:qT(i.serializer,r._byteString)};if(r instanceof Vt){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:k1(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof j1)return function(s,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return m1(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Mh(r)}`)}(t,e)}function L8(t,e){const n={};return ET(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wo(t,(r,i)=>{const o=Cu(i,e.Mu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function A8(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof b1||t instanceof la||t instanceof Vt||t instanceof Fh||t instanceof j1)}function M1(t,e,n){if(!A8(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Mh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function r0(t,e,n){if((e=We(e))instanceof Vh)return e._internalPath;if(typeof e=="string")return N1(t,e);throw Vd("Field path arguments must be of type string or ",t,!1,void 0,n)}const u5=new RegExp("[~\\*/\\[\\]]");function N1(t,e,n){if(e.search(u5)>=0)throw Vd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vh(...e.split("."))._internalPath}catch{throw Vd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vd(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new G(W.INVALID_ARGUMENT,a+t+l)}function P8(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R8{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new c5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($h("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class c5 extends R8{data(){return super.data()}}function $h(t,e){return typeof e=="string"?N1(t,e):e instanceof Vh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d5(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class V1{}class F1 extends V1{}function bn(t,e,...n){let r=[];e instanceof V1&&r.push(e),r=r.concat(n),function(o){const s=o.filter(l=>l instanceof U1).length,a=o.filter(l=>l instanceof zh).length;if(s>1||s>0&&a>0)throw new G(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class zh extends F1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new zh(e,n,r)}_apply(e){const n=this._parse(e);return b8(e._query,n),new bi(e.firestore,e.converter,Gm(e._query,n))}_parse(e){const n=Uh(e.firestore);return function(o,s,a,l,d,f,m){let E;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new G(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Fk(m,f);const v=[];for(const x of m)v.push(Vk(l,o,x));E={arrayValue:{values:v}}}else E=Vk(l,o,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Fk(m,f),E=l5(a,s,m,f==="in"||f==="not-in");return nt.create(d,f,E)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function er(t,e,n){const r=e,i=$h("where",t);return zh._create(i,r,n)}class U1 extends V1{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new U1(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Nn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const l of a)b8(s,l),s=Gm(s,l)}(e._query,n),new bi(e.firestore,e.converter,Gm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class W1 extends F1{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new W1(e,n)}_apply(e){const n=function(i,o,s){if(i.startAt!==null)throw new G(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new G(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new iu(o,s)}(e._query,this._field,this._direction);return new bi(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new wa(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function $1(t,e="asc"){const n=e,r=$h("orderBy",t);return W1._create(r,n)}class z1 extends F1{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new z1(e,n,r)}_apply(e){return new bi(e.firestore,e.converter,jd(e._query,this._limit,this._limitType))}}function h5(t){return z1._create("limit",t,"F")}function Vk(t,e,n){if(typeof(n=We(n))=="string"){if(n==="")throw new G(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!PT(e)&&n.indexOf("/")!==-1)throw new G(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!X.isDocumentKey(r))throw new G(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sk(t,new X(r))}if(n instanceof Vt)return sk(t,n._key);throw new G(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mh(n)}.`)}function Fk(t,e){if(!Array.isArray(t)||t.length===0)throw new G(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function b8(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class f5{convertValue(e,n="none"){switch(po(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return wo(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(s=>Ke(s.doubleValue));return new j1(o)}convertGeoPoint(e){return new b1(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=c1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(tu(e));default:return null}}convertTimestamp(e){const n=wi(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Ae(XT(r));const i=new nu(r.get(1),r.get(3)),o=new X(r.popFirst(5));return i.isEqual(n)||Pr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j8(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class D8 extends R8{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($h("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bc extends D8{data(e={}){return super.data(e)}}class p5{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new cl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bc(this._firestore,this._userDataWriter,r.key,r,new cl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const l=new Bc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new cl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const l=new Bc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new cl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return a.type!==0&&(d=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),f=s.indexOf(a.doc.key)),{type:m5(a.type),doc:l,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function m5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){t=Vn(t,Vt);const e=Vn(t.firestore,To);return Zj(R1(e),t._key).then(n=>g5(e,t,n))}class O8 extends f5{constructor(e){super(),this.firestore=e}convertBytes(e){return new la(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function gn(t){t=Vn(t,bi);const e=Vn(t.firestore,To),n=R1(e),r=new O8(e);return d5(t._query),Xj(n,t._query).then(i=>new p5(e,r,t,i))}function Fd(t,e,n){t=Vn(t,Vt);const r=Vn(t.firestore,To),i=j8(t.converter,e,n);return Bh(r,[C8(Uh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,mn.none())])}function Cl(t,e,n,...r){t=Vn(t,Vt);const i=Vn(t.firestore,To),o=Uh(i);let s;return s=typeof(e=We(e))=="string"||e instanceof Vh?a5(o,"updateDoc",t._key,e,n,r):s5(o,"updateDoc",t._key,e),Bh(i,[s.toMutation(t._key,mn.exists(!0))])}function B1(t){return Bh(Vn(t.firestore,To),[new g1(t._key,mn.none())])}function M8(t,e){const n=Vn(t.firestore,To),r=Ze(t),i=j8(t.converter,e);return Bh(n,[C8(Uh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,mn.exists(!1))]).then(()=>r)}function Bh(t,e){return function(r,i){const o=new xr;return r.asyncQueue.enqueueAndForget(async()=>Uj(await Qj(r),i,o)),o.promise}(R1(t),e)}function g5(t,e,n){const r=n.docs.get(e._key),i=new O8(t);return new D8(t,i,e._key,r,new cl(n.hasPendingWrites,n.fromCache),e.converter)}function Hh(){return new O1("serverTimestamp")}(function(e,n=!0){(function(i){Ea=i})(Eo),On(new kn("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new To(new vb(r.getProvider("auth-internal")),new wb(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new G(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nu(d.options.projectId,f)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),Qt(tk,"4.7.3",e),Qt(tk,"4.7.3","esm2017")})();const N8="@firebase/installations",H1="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V8=1e4,F8=`w:${H1}`,U8="FIS_v2",y5="https://firebaseinstallations.googleapis.com/v1",v5=60*60*1e3,k5="installations",_5="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E5={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},mo=new _o(k5,_5,E5);function W8(t){return t instanceof En&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $8({projectId:t}){return`${y5}/projects/${t}/installations`}function z8(t){return{token:t.token,requestStatus:2,expiresIn:x5(t.expiresIn),creationTime:Date.now()}}async function B8(t,e){const r=(await e.json()).error;return mo.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function H8({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function w5(t,{refreshToken:e}){const n=H8(t);return n.append("Authorization",T5(e)),n}async function q8(t){const e=await t();return e.status>=500&&e.status<600?t():e}function x5(t){return Number(t.replace("s","000"))}function T5(t){return`${U8} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I5({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=$8(t),i=H8(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={fid:n,authVersion:U8,appId:t.appId,sdkVersion:F8},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await q8(()=>fetch(r,a));if(l.ok){const d=await l.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:z8(d.authToken)}}else throw await B8("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y8(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S5(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C5=/^[cdef][\w-]{21}$/,i0="";function L5(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=A5(t);return C5.test(n)?n:i0}catch{return i0}}function A5(t){return S5(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G8=new Map;function K8(t,e){const n=qh(t);Q8(n,e),P5(n,e)}function Q8(t,e){const n=G8.get(t);if(n)for(const r of n)r(e)}function P5(t,e){const n=R5();n&&n.postMessage({key:t,fid:e}),b5()}let Qi=null;function R5(){return!Qi&&"BroadcastChannel"in self&&(Qi=new BroadcastChannel("[Firebase] FID Change"),Qi.onmessage=t=>{Q8(t.data.key,t.data.fid)}),Qi}function b5(){G8.size===0&&Qi&&(Qi.close(),Qi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j5="firebase-installations-database",D5=1,go="firebase-installations-store";let dp=null;function q1(){return dp||(dp=Lx(j5,D5,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(go)}}})),dp}async function Ud(t,e){const n=qh(t),i=(await q1()).transaction(go,"readwrite"),o=i.objectStore(go),s=await o.get(n);return await o.put(e,n),await i.done,(!s||s.fid!==e.fid)&&K8(t,e.fid),e}async function Z8(t){const e=qh(t),r=(await q1()).transaction(go,"readwrite");await r.objectStore(go).delete(e),await r.done}async function Yh(t,e){const n=qh(t),i=(await q1()).transaction(go,"readwrite"),o=i.objectStore(go),s=await o.get(n),a=e(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&K8(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y1(t){let e;const n=await Yh(t.appConfig,r=>{const i=O5(r),o=M5(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===i0?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function O5(t){const e=t||{fid:L5(),registrationStatus:0};return X8(e)}function M5(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(mo.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=N5(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:V5(t)}:{installationEntry:e}}async function N5(t,e){try{const n=await I5(t,e);return Ud(t.appConfig,n)}catch(n){throw W8(n)&&n.customData.serverCode===409?await Z8(t.appConfig):await Ud(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function V5(t){let e=await Uk(t.appConfig);for(;e.registrationStatus===1;)await Y8(100),e=await Uk(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Y1(t);return r||n}return e}function Uk(t){return Yh(t,e=>{if(!e)throw mo.create("installation-not-found");return X8(e)})}function X8(t){return F5(t)?{fid:t.fid,registrationStatus:0}:t}function F5(t){return t.registrationStatus===1&&t.registrationTime+V8<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U5({appConfig:t,heartbeatServiceProvider:e},n){const r=W5(t,n),i=w5(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={installation:{sdkVersion:F8,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await q8(()=>fetch(r,a));if(l.ok){const d=await l.json();return z8(d)}else throw await B8("Generate Auth Token",l)}function W5(t,{fid:e}){return`${$8(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G1(t,e=!1){let n;const r=await Yh(t.appConfig,o=>{if(!J8(o))throw mo.create("not-registered");const s=o.authToken;if(!e&&B5(s))return o;if(s.requestStatus===1)return n=$5(t,e),o;{if(!navigator.onLine)throw mo.create("app-offline");const a=q5(o);return n=z5(t,a),a}});return n?await n:r.authToken}async function $5(t,e){let n=await Wk(t.appConfig);for(;n.authToken.requestStatus===1;)await Y8(100),n=await Wk(t.appConfig);const r=n.authToken;return r.requestStatus===0?G1(t,e):r}function Wk(t){return Yh(t,e=>{if(!J8(e))throw mo.create("not-registered");const n=e.authToken;return Y5(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function z5(t,e){try{const n=await U5(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ud(t.appConfig,r),n}catch(n){if(W8(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Z8(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ud(t.appConfig,r)}throw n}}function J8(t){return t!==void 0&&t.registrationStatus===2}function B5(t){return t.requestStatus===2&&!H5(t)}function H5(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+v5}function q5(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Y5(t){return t.requestStatus===1&&t.requestTime+V8<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G5(t){const e=t,{installationEntry:n,registrationPromise:r}=await Y1(e);return r?r.catch(console.error):G1(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K5(t,e=!1){const n=t;return await Q5(n),(await G1(n,e)).token}async function Q5(t){const{registrationPromise:e}=await Y1(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z5(t){if(!t||!t.options)throw hp("App Configuration");if(!t.name)throw hp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw hp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function hp(t){return mo.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="installations",X5="installations-internal",J5=t=>{const e=t.getProvider("app").getImmediate(),n=Z5(e),r=Ai(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},eD=t=>{const e=t.getProvider("app").getImmediate(),n=Ai(e,eI).getImmediate();return{getId:()=>G5(n),getToken:i=>K5(n,i)}};function tD(){On(new kn(eI,J5,"PUBLIC")),On(new kn(X5,eD,"PRIVATE"))}tD();Qt(N8,H1);Qt(N8,H1,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="analytics",nD="firebase_id",rD="origin",iD=60*1e3,oD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",K1="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new wh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},sn=new _o("analytics","Analytics",sD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(t){if(!t.startsWith(K1)){const e=sn.create("invalid-gtag-resource",{gtagURL:t});return Zt.warn(e.message),""}return t}function tI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function lD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function uD(t,e){const n=lD("firebase-js-sdk-policy",{createScriptURL:aD}),r=document.createElement("script"),i=`${K1}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function cD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function dD(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const l=(await tI(n)).find(d=>d.measurementId===i);l&&await e[l.appId]}}catch(a){Zt.error(a)}t("config",i,o)}async function hD(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await tI(n);for(const l of s){const d=a.find(m=>m.measurementId===l),f=d&&e[d.appId];if(f)o.push(f);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){Zt.error(o)}}function fD(t,e,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await hD(t,e,n,a,l)}else if(o==="config"){const[a,l]=s;await dD(t,e,n,r,a,l)}else if(o==="consent"){const[a,l]=s;t("consent",a,l)}else if(o==="get"){const[a,l,d]=s;t("get",a,l,d)}else if(o==="set"){const[a]=s;t("set",a)}else t(o,...s)}catch(a){Zt.error(a)}}return i}function pD(t,e,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=fD(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function mD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(K1)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=30,yD=1e3;class vD{constructor(e={},n=yD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const nI=new vD;function kD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function _D(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:kD(r)},o=oD.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw sn.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function ED(t,e=nI,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw sn.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw sn.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new TD;return setTimeout(async()=>{a.abort()},iD),rI({appId:r,apiKey:i,measurementId:o},s,a,e)}async function rI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=nI){var o;const{appId:s,measurementId:a}=t;try{await wD(r,e)}catch(l){if(a)return Zt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await _D(t);return i.deleteThrottleMetadata(s),l}catch(l){const d=l;if(!xD(d)){if(i.deleteThrottleMetadata(s),a)return Zt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:s,measurementId:a};throw l}const f=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?S2(n,i.intervalMillis,gD):S2(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,m),Zt.debug(`Calling attemptFetch again in ${f} millis`),rI(t,m,r,i)}}function wD(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(sn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function xD(t){if(!(t instanceof En)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class TD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ID(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SD(){if(Tx())try{await Ix()}catch(t){return Zt.warn(sn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Zt.warn(sn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function CD(t,e,n,r,i,o,s){var a;const l=ED(t);l.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&Zt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>Zt.error(v)),e.push(l);const d=SD().then(v=>{if(v)return r.getId()}),[f,m]=await Promise.all([l,d]);mD(o)||uD(o,f.measurementId),i("js",new Date);const E=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return E[rD]="firebase",E.update=!0,m!=null&&(E[nD]=m),i("config",f.measurementId,E),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e){this.app=e}_delete(){return delete Ll[this.app.options.appId],Promise.resolve()}}let Ll={},$k=[];const zk={};let fp="dataLayer",AD="gtag",Bk,iI,Hk=!1;function PD(){const t=[];if(xx()&&t.push("This is a browser extension environment."),bL()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=sn.create("invalid-analytics-context",{errorInfo:e});Zt.warn(n.message)}}function RD(t,e,n){PD();const r=t.options.appId;if(!r)throw sn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Zt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw sn.create("no-api-key");if(Ll[r]!=null)throw sn.create("already-exists",{id:r});if(!Hk){cD(fp);const{wrappedGtag:o,gtagCore:s}=pD(Ll,$k,zk,fp,AD);iI=o,Bk=s,Hk=!0}return Ll[r]=CD(t,$k,zk,e,Bk,fp,n),new LD(t)}function bD(t=xh()){t=We(t);const e=Ai(t,Wd);return e.isInitialized()?e.getImmediate():jD(t)}function jD(t,e={}){const n=Ai(t,Wd);if(n.isInitialized()){const i=n.getImmediate();if(Zl(e,n.getOptions()))return i;throw sn.create("already-initialized")}return n.initialize({options:e})}function DD(t,e,n,r){t=We(t),ID(iI,Ll[t.app.options.appId],e,n,r).catch(i=>Zt.error(i))}const qk="@firebase/analytics",Yk="0.10.8";function OD(){On(new kn(Wd,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return RD(r,i,n)},"PUBLIC")),On(new kn("analytics-internal",t,"PRIVATE")),Qt(qk,Yk),Qt(qk,Yk,"esm2017");function t(e){try{const n=e.getProvider(Wd).getImmediate();return{logEvent:(r,i,o)=>DD(n,r,i,o)}}catch(n){throw sn.create("interop-component-reg-failed",{reason:n})}}}OD();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI="firebasestorage.googleapis.com",MD="storageBucket",ND=2*60*1e3,VD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends En{constructor(e,n,r=0){super(pp(e),`Firebase Storage: ${n} (${pp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,or.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return pp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nr||(nr={}));function pp(t){return"storage/"+t}function FD(){const t="An unknown error occurred, please check the error payload for server response.";return new or(nr.UNKNOWN,t)}function UD(){return new or(nr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function WD(){return new or(nr.CANCELED,"User canceled the upload/download.")}function $D(t){return new or(nr.INVALID_URL,"Invalid URL '"+t+"'.")}function zD(t){return new or(nr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Gk(t){return new or(nr.INVALID_ARGUMENT,t)}function sI(){return new or(nr.APP_DELETED,"The Firebase app was deleted.")}function BD(t){return new or(nr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=An.makeFromUrl(e,n)}catch{return new An(e,"")}if(r.path==="")return r;throw zD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function d(S){S.path_=decodeURIComponent(S.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",v=new RegExp(`^https?://${m}/${f}/b/${i}/o${E}`,"i"),x={bucket:1,path:3},C=n===oI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",y=new RegExp(`^https?://${C}/${i}/${w}`,"i"),_=[{regex:a,indices:l,postModify:o},{regex:v,indices:x,postModify:d},{regex:y,indices:{bucket:1,path:2},postModify:d}];for(let S=0;S<_.length;S++){const b=_[S],M=b.regex.exec(e);if(M){const T=M[b.indices.bucket];let I=M[b.indices.path];I||(I=""),r=new An(T,I),b.postModify(r);break}}if(r==null)throw $D(e);return r}}class HD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let d=!1;function f(...w){d||(d=!0,e.apply(null,w))}function m(w){i=setTimeout(()=>{i=null,t(v,l())},w)}function E(){o&&clearTimeout(o)}function v(w,...y){if(d){E();return}if(w){E(),f.call(null,w,...y);return}if(l()||s){E(),f.call(null,w,...y);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,m(_)}let x=!1;function C(w){x||(x=!0,E(),!d&&(i!==null?(w||(a=2),clearTimeout(i),m(0)):w||(a=1)))}return m(0),o=setTimeout(()=>{s=!0,C(!0)},n),C}function YD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(t){return t!==void 0}function Kk(t,e,n,r){if(r<e)throw Gk(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Gk(`Invalid value for '${t}'. Expected ${n} or less.`)}function KD(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var $d;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})($d||($d={}));/**
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
 */function QD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n,r,i,o,s,a,l,d,f,m,E=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.retry=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,x)=>{this.resolve_=v,this.reject_=x,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new gc(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===$d.NO_ERROR,l=o.getStatus();if(!a||QD(l,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===$d.ABORT;r(!1,new gc(!1,null,f));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new gc(d,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());GD(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=FD();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?sI():WD();s(l)}else{const l=UD();s(l)}};this.canceled_?n(!1,new gc(!1,null,!0)):this.backoffId_=qD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&YD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function XD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function JD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function eO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function tO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function nO(t,e,n,r,i,o,s=!0){const a=KD(t.urlParams),l=t.url+a,d=Object.assign({},t.headers);return eO(d,e),XD(d,n),JD(d,o),tO(d,r),new ZD(l,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function iO(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n){this._service=e,n instanceof An?this._location=n:this._location=An.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new zd(e,n)}get root(){const e=new An(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iO(this._location.path)}get storage(){return this._service}get parent(){const e=rO(this._location.path);if(e===null)return null;const n=new An(this._location.bucket,e);return new zd(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw BD(e)}}function Qk(t,e){const n=e==null?void 0:e[MD];return n==null?null:An.makeFromBucketSpec(n,t)}function oO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:wx(i,t.app.options.projectId))}class sO{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=oI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ND,this._maxUploadRetryTime=VD,this._requests=new Set,i!=null?this._bucket=An.makeFromBucketSpec(i,this._host):this._bucket=Qk(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=An.makeFromBucketSpec(this._url,e):this._bucket=Qk(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Kk("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Kk("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zd(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new HD(sI());{const s=nO(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Zk="@firebase/storage",Xk="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="storage";function aO(t=xh(),e){t=We(t);const r=Ai(t,aI).getImmediate({identifier:e}),i=kx("storage");return i&&lO(r,...i),r}function lO(t,e,n,r={}){oO(t,e,n,r)}function uO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new sO(n,r,i,e,Eo)}function cO(){On(new kn(aI,uO,"PUBLIC").setMultipleInstances(!0)),Qt(Zk,Xk,""),Qt(Zk,Xk,"esm2017")}cO();const dO={apiKey:"AIzaSyD7J2eVv6O0M4l39GToo_kVOeQZH8nQW0w",authDomain:"hyacinthattendance.firebaseapp.com",projectId:"hyacinthattendance",storageBucket:"hyacinthattendance.appspot.com",messagingSenderId:"12316915447",appId:"1:12316915447:web:2f8a7daf07918a0c2f45f2",measurementId:"G-040M8BP5NJ"},Gh=Ax(dO),Lt=hT(Gh),ke=t5(Gh);aO(Gh);console.log("Using production Firebase services");let hO=null;try{hO=bD(Gh),console.log("Analytics initialized")}catch(t){console.error("Error initializing analytics:",t)}const Q1=new mr;Q1.setCustomParameters({prompt:"select_account"});Q1.addScope("email");Q1.addScope("profile");const lI=D.createContext(),Mr=()=>D.useContext(lI),fO=({children:t})=>{const[e,n]=D.useState(null),[r,i]=D.useState(!0);D.useEffect(()=>{const s=eR(Lt,a=>{n(a),i(!1)});return()=>s()},[]);const o={currentUser:e,loading:r};return h.jsx(lI.Provider,{value:o,children:t})};var Ht=function(){return Ht=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ht.apply(this,arguments)};function Bd(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var De="-ms-",Al="-moz-",Te="-webkit-",uI="comm",Kh="rule",Z1="decl",pO="@import",cI="@keyframes",mO="@layer",dI=Math.abs,X1=String.fromCharCode,o0=Object.assign;function gO(t,e){return lt(t,0)^45?(((e<<2^lt(t,0))<<2^lt(t,1))<<2^lt(t,2))<<2^lt(t,3):0}function hI(t){return t.trim()}function fr(t,e){return(t=e.exec(t))?t[0]:t}function ce(t,e,n){return t.replace(e,n)}function Hc(t,e,n){return t.indexOf(e,n)}function lt(t,e){return t.charCodeAt(e)|0}function ua(t,e,n){return t.slice(e,n)}function Bn(t){return t.length}function fI(t){return t.length}function dl(t,e){return e.push(t),t}function yO(t,e){return t.map(e).join("")}function Jk(t,e){return t.filter(function(n){return!fr(n,e)})}var Qh=1,ca=1,pI=0,_n=0,et=0,Ia="";function Zh(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:Qh,column:ca,length:s,return:"",siblings:a}}function Hr(t,e){return o0(Zh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function cs(t){for(;t.root;)t=Hr(t.root,{children:[t]});dl(t,t.siblings)}function vO(){return et}function kO(){return et=_n>0?lt(Ia,--_n):0,ca--,et===10&&(ca=1,Qh--),et}function jn(){return et=_n<pI?lt(Ia,_n++):0,ca++,et===10&&(ca=1,Qh++),et}function to(){return lt(Ia,_n)}function qc(){return _n}function Xh(t,e){return ua(Ia,t,e)}function s0(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _O(t){return Qh=ca=1,pI=Bn(Ia=t),_n=0,[]}function EO(t){return Ia="",t}function mp(t){return hI(Xh(_n-1,a0(t===91?t+2:t===40?t+1:t)))}function wO(t){for(;(et=to())&&et<33;)jn();return s0(t)>2||s0(et)>3?"":" "}function xO(t,e){for(;--e&&jn()&&!(et<48||et>102||et>57&&et<65||et>70&&et<97););return Xh(t,qc()+(e<6&&to()==32&&jn()==32))}function a0(t){for(;jn();)switch(et){case t:return _n;case 34:case 39:t!==34&&t!==39&&a0(et);break;case 40:t===41&&a0(t);break;case 92:jn();break}return _n}function TO(t,e){for(;jn()&&t+et!==57;)if(t+et===84&&to()===47)break;return"/*"+Xh(e,_n-1)+"*"+X1(t===47?t:jn())}function IO(t){for(;!s0(to());)jn();return Xh(t,_n)}function SO(t){return EO(Yc("",null,null,null,[""],t=_O(t),0,[0],t))}function Yc(t,e,n,r,i,o,s,a,l){for(var d=0,f=0,m=s,E=0,v=0,x=0,C=1,w=1,y=1,g=0,_="",S=i,b=o,M=r,T=_;w;)switch(x=g,g=jn()){case 40:if(x!=108&&lt(T,m-1)==58){Hc(T+=ce(mp(g),"&","&\f"),"&\f",dI(d?a[d-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:T+=mp(g);break;case 9:case 10:case 13:case 32:T+=wO(x);break;case 92:T+=xO(qc()-1,7);continue;case 47:switch(to()){case 42:case 47:dl(CO(TO(jn(),qc()),e,n,l),l);break;default:T+="/"}break;case 123*C:a[d++]=Bn(T)*y;case 125*C:case 59:case 0:switch(g){case 0:case 125:w=0;case 59+f:y==-1&&(T=ce(T,/\f/g,"")),v>0&&Bn(T)-m&&dl(v>32?t_(T+";",r,n,m-1,l):t_(ce(T," ","")+";",r,n,m-2,l),l);break;case 59:T+=";";default:if(dl(M=e_(T,e,n,d,f,i,a,_,S=[],b=[],m,o),o),g===123)if(f===0)Yc(T,e,M,M,S,o,m,a,b);else switch(E===99&&lt(T,3)===110?100:E){case 100:case 108:case 109:case 115:Yc(t,M,M,r&&dl(e_(t,M,M,0,0,i,a,_,i,S=[],m,b),b),i,b,m,a,r?S:b);break;default:Yc(T,M,M,M,[""],b,0,a,b)}}d=f=v=0,C=y=1,_=T="",m=s;break;case 58:m=1+Bn(T),v=x;default:if(C<1){if(g==123)--C;else if(g==125&&C++==0&&kO()==125)continue}switch(T+=X1(g),g*C){case 38:y=f>0?1:(T+="\f",-1);break;case 44:a[d++]=(Bn(T)-1)*y,y=1;break;case 64:to()===45&&(T+=mp(jn())),E=to(),f=m=Bn(_=T+=IO(qc())),g++;break;case 45:x===45&&Bn(T)==2&&(C=0)}}return o}function e_(t,e,n,r,i,o,s,a,l,d,f,m){for(var E=i-1,v=i===0?o:[""],x=fI(v),C=0,w=0,y=0;C<r;++C)for(var g=0,_=ua(t,E+1,E=dI(w=s[C])),S=t;g<x;++g)(S=hI(w>0?v[g]+" "+_:ce(_,/&\f/g,v[g])))&&(l[y++]=S);return Zh(t,e,n,i===0?Kh:a,l,d,f,m)}function CO(t,e,n,r){return Zh(t,e,n,uI,X1(vO()),ua(t,2,-2),0,r)}function t_(t,e,n,r,i){return Zh(t,e,n,Z1,ua(t,0,r),ua(t,r+1,-1),r,i)}function mI(t,e,n){switch(gO(t,e)){case 5103:return Te+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Te+t+t;case 4789:return Al+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Te+t+Al+t+De+t+t;case 5936:switch(lt(t,e+11)){case 114:return Te+t+De+ce(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Te+t+De+ce(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Te+t+De+ce(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Te+t+De+t+t;case 6165:return Te+t+De+"flex-"+t+t;case 5187:return Te+t+ce(t,/(\w+).+(:[^]+)/,Te+"box-$1$2"+De+"flex-$1$2")+t;case 5443:return Te+t+De+"flex-item-"+ce(t,/flex-|-self/g,"")+(fr(t,/flex-|baseline/)?"":De+"grid-row-"+ce(t,/flex-|-self/g,""))+t;case 4675:return Te+t+De+"flex-line-pack"+ce(t,/align-content|flex-|-self/g,"")+t;case 5548:return Te+t+De+ce(t,"shrink","negative")+t;case 5292:return Te+t+De+ce(t,"basis","preferred-size")+t;case 6060:return Te+"box-"+ce(t,"-grow","")+Te+t+De+ce(t,"grow","positive")+t;case 4554:return Te+ce(t,/([^-])(transform)/g,"$1"+Te+"$2")+t;case 6187:return ce(ce(ce(t,/(zoom-|grab)/,Te+"$1"),/(image-set)/,Te+"$1"),t,"")+t;case 5495:case 3959:return ce(t,/(image-set\([^]*)/,Te+"$1$`$1");case 4968:return ce(ce(t,/(.+:)(flex-)?(.*)/,Te+"box-pack:$3"+De+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Te+t+t;case 4200:if(!fr(t,/flex-|baseline/))return De+"grid-column-align"+ua(t,e)+t;break;case 2592:case 3360:return De+ce(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,fr(r.props,/grid-\w+-end/)})?~Hc(t+(n=n[e].value),"span",0)?t:De+ce(t,"-start","")+t+De+"grid-row-span:"+(~Hc(n,"span",0)?fr(n,/\d+/):+fr(n,/\d+/)-+fr(t,/\d+/))+";":De+ce(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return fr(r.props,/grid-\w+-start/)})?t:De+ce(ce(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ce(t,/(.+)-inline(.+)/,Te+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Bn(t)-1-e>6)switch(lt(t,e+1)){case 109:if(lt(t,e+4)!==45)break;case 102:return ce(t,/(.+:)(.+)-([^]+)/,"$1"+Te+"$2-$3$1"+Al+(lt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Hc(t,"stretch",0)?mI(ce(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ce(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,d){return De+i+":"+o+d+(s?De+i+"-span:"+(a?l:+l-+o)+d:"")+t});case 4949:if(lt(t,e+6)===121)return ce(t,":",":"+Te)+t;break;case 6444:switch(lt(t,lt(t,14)===45?18:11)){case 120:return ce(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Te+(lt(t,14)===45?"inline-":"")+"box$3$1"+Te+"$2$3$1"+De+"$2box$3")+t;case 100:return ce(t,":",":"+De)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ce(t,"scroll-","scroll-snap-")+t}return t}function Hd(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function LO(t,e,n,r){switch(t.type){case mO:if(t.children.length)break;case pO:case Z1:return t.return=t.return||t.value;case uI:return"";case cI:return t.return=t.value+"{"+Hd(t.children,r)+"}";case Kh:if(!Bn(t.value=t.props.join(",")))return""}return Bn(n=Hd(t.children,r))?t.return=t.value+"{"+n+"}":""}function AO(t){var e=fI(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function PO(t){return function(e){e.root||(e=e.return)&&t(e)}}function RO(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Z1:t.return=mI(t.value,t.length,n);return;case cI:return Hd([Hr(t,{value:ce(t.value,"@","@"+Te)})],r);case Kh:if(t.length)return yO(n=t.props,function(i){switch(fr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cs(Hr(t,{props:[ce(i,/:(read-\w+)/,":"+Al+"$1")]})),cs(Hr(t,{props:[i]})),o0(t,{props:Jk(n,r)});break;case"::placeholder":cs(Hr(t,{props:[ce(i,/:(plac\w+)/,":"+Te+"input-$1")]})),cs(Hr(t,{props:[ce(i,/:(plac\w+)/,":"+Al+"$1")]})),cs(Hr(t,{props:[ce(i,/:(plac\w+)/,De+"input-$1")]})),cs(Hr(t,{props:[i]})),o0(t,{props:Jk(n,r)});break}return""})}}var bO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jt={},da=typeof process<"u"&&Jt!==void 0&&(Jt.REACT_APP_SC_ATTR||Jt.SC_ATTR)||"data-styled",gI="active",yI="data-styled-version",Jh="6.1.17",J1=`/*!sc*/
`,qd=typeof window<"u"&&"HTMLElement"in window,jO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Jt!==void 0&&Jt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Jt.REACT_APP_SC_DISABLE_SPEEDY!==""?Jt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Jt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Jt!==void 0&&Jt.SC_DISABLE_SPEEDY!==void 0&&Jt.SC_DISABLE_SPEEDY!==""&&Jt.SC_DISABLE_SPEEDY!=="false"&&Jt.SC_DISABLE_SPEEDY),ef=Object.freeze([]),ha=Object.freeze({});function DO(t,e,n){return n===void 0&&(n=ha),t.theme!==n.theme&&t.theme||e||n.theme}var vI=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),OO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,MO=/(^-|-$)/g;function n_(t){return t.replace(OO,"-").replace(MO,"")}var NO=/(a)(d)/gi,yc=52,r_=function(t){return String.fromCharCode(t+(t>25?39:97))};function l0(t){var e,n="";for(e=Math.abs(t);e>yc;e=e/yc|0)n=r_(e%yc)+n;return(r_(e%yc)+n).replace(NO,"$1-$2")}var gp,kI=5381,Ms=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},_I=function(t){return Ms(kI,t)};function VO(t){return l0(_I(t)>>>0)}function FO(t){return t.displayName||t.name||"Component"}function yp(t){return typeof t=="string"&&!0}var EI=typeof Symbol=="function"&&Symbol.for,wI=EI?Symbol.for("react.memo"):60115,UO=EI?Symbol.for("react.forward_ref"):60112,WO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$O={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zO=((gp={})[UO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gp[wI]=xI,gp);function i_(t){return("type"in(e=t)&&e.type.$$typeof)===wI?xI:"$$typeof"in t?zO[t.$$typeof]:WO;var e}var BO=Object.defineProperty,HO=Object.getOwnPropertyNames,o_=Object.getOwnPropertySymbols,qO=Object.getOwnPropertyDescriptor,YO=Object.getPrototypeOf,s_=Object.prototype;function TI(t,e,n){if(typeof e!="string"){if(s_){var r=YO(e);r&&r!==s_&&TI(t,r,n)}var i=HO(e);o_&&(i=i.concat(o_(e)));for(var o=i_(t),s=i_(e),a=0;a<i.length;++a){var l=i[a];if(!(l in $O||n&&n[l]||s&&l in s||o&&l in o)){var d=qO(e,l);try{BO(t,l,d)}catch{}}}}return t}function fa(t){return typeof t=="function"}function ey(t){return typeof t=="object"&&"styledComponentId"in t}function Zi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function a_(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function lu(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function u0(t,e,n){if(n===void 0&&(n=!1),!n&&!lu(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=u0(t[r],e[r]);else if(lu(e))for(var r in e)t[r]=u0(t[r],e[r]);return t}function ty(t,e){Object.defineProperty(t,"toString",{value:e})}function Lu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var GO=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw Lu(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(J1);return n},t}(),Gc=new Map,Yd=new Map,Kc=1,vc=function(t){if(Gc.has(t))return Gc.get(t);for(;Yd.has(Kc);)Kc++;var e=Kc++;return Gc.set(t,e),Yd.set(e,t),e},KO=function(t,e){Kc=e+1,Gc.set(t,e),Yd.set(e,t)},QO="style[".concat(da,"][").concat(yI,'="').concat(Jh,'"]'),ZO=new RegExp("^".concat(da,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),XO=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},JO=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(J1),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(ZO);if(l){var d=0|parseInt(l[1],10),f=l[2];d!==0&&(KO(f,d),XO(t,f,l[3]),t.getTag().insertRules(d,i)),i.length=0}else i.push(a)}}},l_=function(t){for(var e=document.querySelectorAll(QO),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(da)!==gI&&(JO(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function eM(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var II=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(da,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(da,gI),r.setAttribute(yI,Jh);var s=eM();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},tM=function(){function t(e){this.element=II(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Lu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),nM=function(){function t(e){this.element=II(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),rM=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),u_=qd,iM={isServer:!qd,useCSSOMInjection:!jO},SI=function(){function t(e,n,r){e===void 0&&(e=ha),n===void 0&&(n={});var i=this;this.options=Ht(Ht({},iM),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&qd&&u_&&(u_=!1,l_(this)),ty(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",d=function(m){var E=function(y){return Yd.get(y)}(m);if(E===void 0)return"continue";var v=o.names.get(E),x=s.getGroup(m);if(v===void 0||!v.size||x.length===0)return"continue";var C="".concat(da,".g").concat(m,'[id="').concat(E,'"]'),w="";v!==void 0&&v.forEach(function(y){y.length>0&&(w+="".concat(y,","))}),l+="".concat(x).concat(C,'{content:"').concat(w,'"}').concat(J1)},f=0;f<a;f++)d(f);return l}(i)})}return t.registerId=function(e){return vc(e)},t.prototype.rehydrate=function(){!this.server&&qd&&l_(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Ht(Ht({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new rM(i):r?new tM(i):new nM(i)}(this.options),new GO(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(vc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(vc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(vc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),oM=/&/g,sM=/^\s*\/\/.*$/gm;function CI(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=CI(n.children,e)),n})}function aM(t){var e,n,r,i=ha,o=i.options,s=o===void 0?ha:o,a=i.plugins,l=a===void 0?ef:a,d=function(E,v,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(e):E},f=l.slice();f.push(function(E){E.type===Kh&&E.value.includes("&")&&(E.props[0]=E.props[0].replace(oM,n).replace(r,d))}),s.prefix&&f.push(RO),f.push(LO);var m=function(E,v,x,C){v===void 0&&(v=""),x===void 0&&(x=""),C===void 0&&(C="&"),e=C,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var w=E.replace(sM,""),y=SO(x||v?"".concat(x," ").concat(v," { ").concat(w," }"):w);s.namespace&&(y=CI(y,s.namespace));var g=[];return Hd(y,AO(f.concat(PO(function(_){return g.push(_)})))),g};return m.hash=l.length?l.reduce(function(E,v){return v.name||Lu(15),Ms(E,v.name)},kI).toString():"",m}var lM=new SI,c0=aM(),LI=c.createContext({shouldForwardProp:void 0,styleSheet:lM,stylis:c0});LI.Consumer;c.createContext(void 0);function c_(){return D.useContext(LI)}var uM=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=c0);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,ty(this,function(){throw Lu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=c0),this.name+e.hash},t}(),cM=function(t){return t>="A"&&t<="Z"};function d_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;cM(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var AI=function(t){return t==null||t===!1||t===""},PI=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!AI(o)&&(Array.isArray(o)&&o.isCss||fa(o)?r.push("".concat(d_(i),":"),o,";"):lu(o)?r.push.apply(r,Bd(Bd(["".concat(i," {")],PI(o),!1),["}"],!1)):r.push("".concat(d_(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in bO||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function no(t,e,n,r){if(AI(t))return[];if(ey(t))return[".".concat(t.styledComponentId)];if(fa(t)){if(!fa(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return no(i,e,n,r)}var o;return t instanceof uM?n?(t.inject(n,r),[t.getName(r)]):[t]:lu(t)?PI(t):Array.isArray(t)?Array.prototype.concat.apply(ef,t.map(function(s){return no(s,e,n,r)})):[t.toString()]}function dM(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(fa(n)&&!ey(n))return!1}return!0}var hM=_I(Jh),fM=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&dM(e),this.componentId=n,this.baseHash=Ms(hM,n),this.baseStyle=r,SI.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Zi(i,this.staticRulesId);else{var o=a_(no(this.rules,e,n,r)),s=l0(Ms(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Zi(i,s),this.staticRulesId=s}else{for(var l=Ms(this.baseHash,r.hash),d="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")d+=m;else if(m){var E=a_(no(m,e,n,r));l=Ms(l,E+f),d+=E}}if(d){var v=l0(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(d,".".concat(v),void 0,this.componentId)),i=Zi(i,v)}}return i},t}(),RI=c.createContext(void 0);RI.Consumer;var vp={};function pM(t,e,n){var r=ey(t),i=t,o=!yp(t),s=e.attrs,a=s===void 0?ef:s,l=e.componentId,d=l===void 0?function(S,b){var M=typeof S!="string"?"sc":n_(S);vp[M]=(vp[M]||0)+1;var T="".concat(M,"-").concat(VO(Jh+M+vp[M]));return b?"".concat(b,"-").concat(T):T}(e.displayName,e.parentComponentId):l,f=e.displayName,m=f===void 0?function(S){return yp(S)?"styled.".concat(S):"Styled(".concat(FO(S),")")}(t):f,E=e.displayName&&e.componentId?"".concat(n_(e.displayName),"-").concat(e.componentId):e.componentId||d,v=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=e.shouldForwardProp;if(r&&i.shouldForwardProp){var C=i.shouldForwardProp;if(e.shouldForwardProp){var w=e.shouldForwardProp;x=function(S,b){return C(S,b)&&w(S,b)}}else x=C}var y=new fM(n,E,r?i.componentStyle:void 0);function g(S,b){return function(M,T,I){var A=M.attrs,R=M.componentStyle,j=M.defaultProps,O=M.foldedComponentIds,P=M.styledComponentId,te=M.target,J=c.useContext(RI),he=c_(),fe=M.shouldForwardProp||he.shouldForwardProp,z=DO(T,J,j)||ha,Y=function(Be,Ge,F){for(var ae,le=Ht(Ht({},Ge),{className:void 0,theme:F}),ue=0;ue<Be.length;ue+=1){var de=fa(ae=Be[ue])?ae(le):ae;for(var Se in de)le[Se]=Se==="className"?Zi(le[Se],de[Se]):Se==="style"?Ht(Ht({},le[Se]),de[Se]):de[Se]}return Ge.className&&(le.className=Zi(le.className,Ge.className)),le}(A,T,z),Z=Y.as||te,se={};for(var re in Y)Y[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&Y.theme===z||(re==="forwardedAs"?se.as=Y.forwardedAs:fe&&!fe(re,Z)||(se[re]=Y[re]));var ye=function(Be,Ge){var F=c_(),ae=Be.generateAndInjectStyles(Ge,F.styleSheet,F.stylis);return ae}(R,Y),Ye=Zi(O,P);return ye&&(Ye+=" "+ye),Y.className&&(Ye+=" "+Y.className),se[yp(Z)&&!vI.has(Z)?"class":"className"]=Ye,I&&(se.ref=I),D.createElement(Z,se)}(_,S,b)}g.displayName=m;var _=c.forwardRef(g);return _.attrs=v,_.componentStyle=y,_.displayName=m,_.shouldForwardProp=x,_.foldedComponentIds=r?Zi(i.foldedComponentIds,i.styledComponentId):"",_.styledComponentId=E,_.target=r?i.target:t,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(b){for(var M=[],T=1;T<arguments.length;T++)M[T-1]=arguments[T];for(var I=0,A=M;I<A.length;I++)u0(b,A[I],!0);return b}({},i.defaultProps,S):S}}),ty(_,function(){return".".concat(_.styledComponentId)}),o&&TI(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function h_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var f_=function(t){return Object.assign(t,{isCss:!0})};function mM(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(fa(t)||lu(t))return f_(no(h_(ef,Bd([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?no(r):f_(no(h_(r,e)))}function d0(t,e,n){if(n===void 0&&(n=ha),!e)throw Lu(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,mM.apply(void 0,Bd([i],o,!1)))};return r.attrs=function(i){return d0(t,e,Ht(Ht({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return d0(t,e,Ht(Ht({},n),i))},r}var bI=function(t){return d0(pM,t)},N=bI;vI.forEach(function(t){N[t]=bI(t)});function jI(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=jI(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function ri(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=jI(t))&&(r&&(r+=" "),r+=e);return r}const Pl=t=>typeof t=="number"&&!isNaN(t),yo=t=>typeof t=="string",qt=t=>typeof t=="function",Qc=t=>yo(t)||qt(t)?t:null,kp=t=>D.isValidElement(t)||yo(t)||qt(t)||Pl(t);function gM(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function tf(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=t;return function(s){let{children:a,position:l,preventExitTransition:d,done:f,nodeRef:m,isIn:E}=s;const v=r?`${e}--${l}`:e,x=r?`${n}--${l}`:n,C=D.useRef(0);return D.useLayoutEffect(()=>{const w=m.current,y=v.split(" "),g=_=>{_.target===m.current&&(w.dispatchEvent(new Event("d")),w.removeEventListener("animationend",g),w.removeEventListener("animationcancel",g),C.current===0&&_.type!=="animationcancel"&&w.classList.remove(...y))};w.classList.add(...y),w.addEventListener("animationend",g),w.addEventListener("animationcancel",g)},[]),D.useEffect(()=>{const w=m.current,y=()=>{w.removeEventListener("animationend",y),i?gM(w,f,o):f()};E||(d?y():(C.current=1,w.className+=` ${x}`,w.addEventListener("animationend",y)))},[E]),c.createElement(c.Fragment,null,a)}}function p_(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const cn={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},kc=t=>{let{theme:e,type:n,...r}=t;return c.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},_p={info:function(t){return c.createElement(kc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(kc,{...t},c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(kc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(kc,{...t},c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function yM(t){const[,e]=D.useReducer(v=>v+1,0),[n,r]=D.useState([]),i=D.useRef(null),o=D.useRef(new Map).current,s=v=>n.indexOf(v)!==-1,a=D.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:v=>o.get(v)}).current;function l(v){let{containerId:x}=v;const{limit:C}=a.props;!C||x&&a.containerId!==x||(a.count-=a.queue.length,a.queue=[])}function d(v){r(x=>v==null?[]:x.filter(C=>C!==v))}function f(){const{toastContent:v,toastProps:x,staleId:C}=a.queue.shift();E(v,x,C)}function m(v,x){let{delay:C,staleId:w,...y}=x;if(!kp(v)||function(O){return!i.current||a.props.enableMultiContainer&&O.containerId!==a.props.containerId||o.has(O.toastId)&&O.updateId==null}(y))return;const{toastId:g,updateId:_,data:S}=y,{props:b}=a,M=()=>d(g),T=_==null;T&&a.count++;const I={...b,style:b.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(y).filter(O=>{let[P,te]=O;return te!=null})),toastId:g,updateId:_,data:S,closeToast:M,isIn:!1,className:Qc(y.className||b.toastClassName),bodyClassName:Qc(y.bodyClassName||b.bodyClassName),progressClassName:Qc(y.progressClassName||b.progressClassName),autoClose:!y.isLoading&&(A=y.autoClose,R=b.autoClose,A===!1||Pl(A)&&A>0?A:R),deleteToast(){const O=p_(o.get(g),"removed");o.delete(g),cn.emit(4,O);const P=a.queue.length;if(a.count=g==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),P>0){const te=g==null?a.props.limit:1;if(P===1||te===1)a.displayedToast++,f();else{const J=te>P?P:te;a.displayedToast=J;for(let he=0;he<J;he++)f()}}else e()}};var A,R;I.iconOut=function(O){let{theme:P,type:te,isLoading:J,icon:he}=O,fe=null;const z={theme:P,type:te};return he===!1||(qt(he)?fe=he(z):D.isValidElement(he)?fe=D.cloneElement(he,z):yo(he)||Pl(he)?fe=he:J?fe=_p.spinner():(Y=>Y in _p)(te)&&(fe=_p[te](z))),fe}(I),qt(y.onOpen)&&(I.onOpen=y.onOpen),qt(y.onClose)&&(I.onClose=y.onClose),I.closeButton=b.closeButton,y.closeButton===!1||kp(y.closeButton)?I.closeButton=y.closeButton:y.closeButton===!0&&(I.closeButton=!kp(b.closeButton)||b.closeButton);let j=v;D.isValidElement(v)&&!yo(v.type)?j=D.cloneElement(v,{closeToast:M,toastProps:I,data:S}):qt(v)&&(j=v({closeToast:M,toastProps:I,data:S})),b.limit&&b.limit>0&&a.count>b.limit&&T?a.queue.push({toastContent:j,toastProps:I,staleId:w}):Pl(C)?setTimeout(()=>{E(j,I,w)},C):E(j,I,w)}function E(v,x,C){const{toastId:w}=x;C&&o.delete(C);const y={content:v,props:x};o.set(w,y),r(g=>[...g,w].filter(_=>_!==C)),cn.emit(4,p_(y,y.props.updateId==null?"added":"updated"))}return D.useEffect(()=>(a.containerId=t.containerId,cn.cancelEmit(3).on(0,m).on(1,v=>i.current&&d(v)).on(5,l).emit(2,a),()=>{o.clear(),cn.emit(3,a)}),[]),D.useEffect(()=>{a.props=t,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(v){const x=new Map,C=Array.from(o.values());return t.newestOnTop&&C.reverse(),C.forEach(w=>{const{position:y}=w.props;x.has(y)||x.set(y,[]),x.get(y).push(w)}),Array.from(x,w=>v(w[0],w[1]))},containerRef:i,isToastActive:s}}function m_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function g_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function vM(t){const[e,n]=D.useState(!1),[r,i]=D.useState(!1),o=D.useRef(null),s=D.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=D.useRef(t),{autoClose:l,pauseOnHover:d,closeToast:f,onClick:m,closeOnClick:E}=t;function v(S){if(t.draggable){S.nativeEvent.type==="touchstart"&&S.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",g),document.addEventListener("touchmove",y),document.addEventListener("touchend",g);const b=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=b.getBoundingClientRect(),b.style.transition="",s.x=m_(S.nativeEvent),s.y=g_(S.nativeEvent),t.draggableDirection==="x"?(s.start=s.x,s.removalDistance=b.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=b.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function x(S){if(s.boundingRect){const{top:b,bottom:M,left:T,right:I}=s.boundingRect;S.nativeEvent.type!=="touchend"&&t.pauseOnHover&&s.x>=T&&s.x<=I&&s.y>=b&&s.y<=M?w():C()}}function C(){n(!0)}function w(){n(!1)}function y(S){const b=o.current;s.canDrag&&b&&(s.didMove=!0,e&&w(),s.x=m_(S),s.y=g_(S),s.delta=t.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),b.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,b.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",g);const S=o.current;if(s.canDrag&&s.didMove&&S){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void t.closeToast();S.style.transition="transform 0.2s, opacity 0.2s",S.style.transform=`translate${t.draggableDirection}(0)`,S.style.opacity="1"}}D.useEffect(()=>{a.current=t}),D.useEffect(()=>(o.current&&o.current.addEventListener("d",C,{once:!0}),qt(t.onOpen)&&t.onOpen(D.isValidElement(t.children)&&t.children.props),()=>{const S=a.current;qt(S.onClose)&&S.onClose(D.isValidElement(S.children)&&S.children.props)}),[]),D.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||w(),window.addEventListener("focus",C),window.addEventListener("blur",w)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",w))}),[t.pauseOnFocusLoss]);const _={onMouseDown:v,onTouchStart:v,onMouseUp:x,onTouchEnd:x};return l&&d&&(_.onMouseEnter=w,_.onMouseLeave=C),E&&(_.onClick=S=>{m&&m(S),s.canCloseOnClick&&f()}),{playToast:C,pauseToast:w,isRunning:e,preventExitTransition:r,toastRef:o,eventHandlers:_}}function DI(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return c.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function kM(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:l,progress:d,rtl:f,isIn:m,theme:E}=t;const v=o||l&&d===0,x={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:v?0:1};l&&(x.transform=`scaleX(${d})`);const C=ri("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${E}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),w=qt(s)?s({rtl:f,type:i,defaultClassName:C}):ri(C,s);return c.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:w,style:x,[l&&d>=1?"onTransitionEnd":"onAnimationEnd"]:l&&d<1?null:()=>{m&&r()}})}const _M=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=vM(t),{closeButton:o,children:s,autoClose:a,onClick:l,type:d,hideProgressBar:f,closeToast:m,transition:E,position:v,className:x,style:C,bodyClassName:w,bodyStyle:y,progressClassName:g,progressStyle:_,updateId:S,role:b,progress:M,rtl:T,toastId:I,deleteToast:A,isIn:R,isLoading:j,iconOut:O,closeOnClick:P,theme:te}=t,J=ri("Toastify__toast",`Toastify__toast-theme--${te}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":T},{"Toastify__toast--close-on-click":P}),he=qt(x)?x({rtl:T,position:v,type:d,defaultClassName:J}):ri(J,x),fe=!!M||!a,z={closeToast:m,type:d,theme:te};let Y=null;return o===!1||(Y=qt(o)?o(z):D.isValidElement(o)?D.cloneElement(o,z):DI(z)),c.createElement(E,{isIn:R,done:A,position:v,preventExitTransition:n,nodeRef:r},c.createElement("div",{id:I,onClick:l,className:he,...i,style:C,ref:r},c.createElement("div",{...R&&{role:b},className:qt(w)?w({type:d}):ri("Toastify__toast-body",w),style:y},O!=null&&c.createElement("div",{className:ri("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!j})},O),c.createElement("div",null,s)),Y,c.createElement(kM,{...S&&!fe?{key:`pb-${S}`}:{},rtl:T,theme:te,delay:a,isRunning:e,isIn:R,closeToast:m,hide:f,type:d,style:_,className:g,controlledProgress:fe,progress:M||0})))},nf=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},EM=tf(nf("bounce",!0));tf(nf("slide",!0));tf(nf("zoom"));tf(nf("flip"));const h0=D.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=yM(t),{className:o,style:s,rtl:a,containerId:l}=t;function d(f){const m=ri("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":a});return qt(o)?o({position:f,rtl:a,defaultClassName:m}):ri(m,Qc(o))}return D.useEffect(()=>{e&&(e.current=r.current)},[]),c.createElement("div",{ref:r,className:"Toastify",id:l},n((f,m)=>{const E=m.length?{...s}:{...s,pointerEvents:"none"};return c.createElement("div",{className:d(f),style:E,key:`container-${f}`},m.map((v,x)=>{let{content:C,props:w}=v;return c.createElement(_M,{...w,isIn:i(w.toastId),style:{...w.style,"--nth":x+1,"--len":m.length},key:`toast-${w.key}`},C)}))}))});h0.displayName="ToastContainer",h0.defaultProps={position:"top-right",transition:EM,autoClose:5e3,closeButton:DI,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Ep,zi=new Map,hl=[],wM=1;function OI(){return""+wM++}function xM(t){return t&&(yo(t.toastId)||Pl(t.toastId))?t.toastId:OI()}function Rl(t,e){return zi.size>0?cn.emit(0,t,e):hl.push({content:t,options:e}),e.toastId}function Gd(t,e){return{...e,type:e&&e.type||t,toastId:xM(e)}}function _c(t){return(e,n)=>Rl(e,Gd(t,n))}function H(t,e){return Rl(t,Gd("default",e))}H.loading=(t,e)=>Rl(t,Gd("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),H.promise=function(t,e,n){let r,{pending:i,error:o,success:s}=e;i&&(r=yo(i)?H.loading(i,n):H.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(f,m,E)=>{if(m==null)return void H.dismiss(r);const v={type:f,...a,...n,data:E},x=yo(m)?{render:m}:m;return r?H.update(r,{...v,...x}):H(x.render,{...v,...x}),E},d=qt(t)?t():t;return d.then(f=>l("success",s,f)).catch(f=>l("error",o,f)),d},H.success=_c("success"),H.info=_c("info"),H.error=_c("error"),H.warning=_c("warning"),H.warn=H.warning,H.dark=(t,e)=>Rl(t,Gd("default",{theme:"dark",...e})),H.dismiss=t=>{zi.size>0?cn.emit(1,t):hl=hl.filter(e=>t!=null&&e.options.toastId!==t)},H.clearWaitingQueue=function(t){return t===void 0&&(t={}),cn.emit(5,t)},H.isActive=t=>{let e=!1;return zi.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},H.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=zi.get(o||Ep);return s&&s.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,o={delay:100,...r,...e,toastId:e.toastId||t,updateId:OI()};o.toastId!==t&&(o.staleId=t);const s=o.render||i;delete o.render,Rl(s,o)}},0)},H.done=t=>{H.update(t,{progress:1})},H.onChange=t=>(cn.on(4,t),()=>{cn.off(4,t)}),H.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},H.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},cn.on(2,t=>{Ep=t.containerId||t,zi.set(Ep,t),hl.forEach(e=>{cn.emit(0,e.content,e.options)}),hl=[]}).on(3,t=>{zi.delete(t.containerId||t),zi.size===0&&cn.off(0).off(1).off(5)});var TM=D.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Ie=function(e,n,r){var i=r.get(e);return i?i(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function y_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var xe=D.forwardRef(function(t,e){var n=t.alt,r=t.color,i=t.size,o=t.weight,s=t.mirrored,a=t.children,l=t.renderPath,d=y_(t,["alt","color","size","weight","mirrored","children","renderPath"]),f=D.useContext(TM),m=f.color,E=m===void 0?"currentColor":m,v=f.size,x=f.weight,C=x===void 0?"regular":x,w=f.mirrored,y=w===void 0?!1:w,g=y_(f,["color","size","weight","mirrored"]);return c.createElement("svg",Object.assign({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i??v,height:i??v,fill:r??E,viewBox:"0 0 256 256",transform:s||y?"scale(-1, 1)":void 0},g,d),!!n&&c.createElement("title",null,n),a,c.createElement("rect",{width:"256",height:"256",fill:"none"}),l(o??C,r??E))});xe.displayName="IconBase";var Io=new Map;Io.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Io.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Io.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))});Io.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Io.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Io.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var IM=function(e,n){return Ie(e,n,Io)},MI=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:IM}))});MI.displayName="ArrowLeft";var So=new Map;So.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});So.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});So.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"}))});So.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});So.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});So.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var SM=function(e,n){return Ie(e,n,So)},f0=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:SM}))});f0.displayName="ArrowRight";var Co=new Map;Co.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"136",x2:"108",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"176",x2:"188",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"136",x2:"188",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Co.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",opacity:"0.2"}),c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Co.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M240,208h-8V104a16,16,0,0,0-16-16H152V40a16,16,0,0,0-16-16H40A16,16,0,0,0,24,40V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM120,136a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h32A8,8,0,0,1,120,136ZM64,64H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm0,104H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm88-64h64V208H152Z"}),c.createElement("path",{d:"M192,168H176a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z"}),c.createElement("path",{d:"M176,144h16a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Z"}))});Co.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Co.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Co.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var CM=function(e,n){return Ie(e,n,Co)},ny=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:CM}))});ny.displayName="Buildings";var Lo=new Map;Lo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"176",y1:"20",x2:"176",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"20",x2:"80",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M88,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"148 140 164 128 164 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Lo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Lo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,188a24.2,24.2,0,0,1-17-7,8,8,0,0,1,0-11.3,7.9,7.9,0,0,1,11.3,0A8.3,8.3,0,0,0,104,172a8,8,0,0,0,0-16h-2.5l-.4-.2h-.3l-.5-.2h-.1l-.6-.4h-.2l-.4-.3h0l-.4-.3-.2-.2-.3-.3a8.6,8.6,0,0,1-1.3-2,5.8,5.8,0,0,1-.6-1.7h0c-.1-.1-.1-.2-.1-.4a.4.4,0,0,0-.1-.3V148h0v-.7c0-.2.1-.3.1-.4v-.4a.6.6,0,0,0,.1-.4c.1-.1.1-.2.1-.4l.2-.3c0-.2,0-.3.1-.4l.2-.4v-.3l.2-.4.2-.3.3-.4.2-.2,5.6-7H92a8,8,0,0,1,0-16h28a8,8,0,0,1,6.2,13l-8.8,11.1A24,24,0,0,1,104,188Zm64-8a8,8,0,0,1-16,0V144l-3.2,2.4a8.1,8.1,0,0,1-11.2-1.6,8,8,0,0,1,1.6-11.2l16-12A8,8,0,0,1,168,128ZM208,80H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))});Lo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Lo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Lo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var LM=function(e,n){return Ie(e,n,Lo)},qn=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:LM}))});qn.displayName="Calendar";var Ao=new Map;Ao.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"228",y1:"208",x2:"28",y2:"208",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"100 208 100 88 156 88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("rect",{x:"156",y:"40",width:"56",height:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"44 208 44 136 100 136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ao.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"156",y:"40",width:"56",height:"168",opacity:"0.2"}),c.createElement("line",{x1:"228",y1:"208",x2:"28",y2:"208",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"100 208 100 88 156 88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"156",y:"40",width:"56",height:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"44 208 44 136 100 136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ao.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M228,200h-8V40a8,8,0,0,0-8-8H156a8,8,0,0,0-8,8V80H100a8,8,0,0,0-8,8v40H44a8,8,0,0,0-8,8v64H28a8,8,0,0,0,0,16H228a8,8,0,0,0,0-16ZM108,96h40V200H108ZM52,144H92v56H52Z"}))});Ao.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"228",y1:"208",x2:"28",y2:"208",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"100 208 100 88 156 88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("rect",{x:"156",y:"40",width:"56",height:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"44 208 44 136 100 136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ao.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"228",y1:"208",x2:"28",y2:"208",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"100 208 100 88 156 88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("rect",{x:"156",y:"40",width:"56",height:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"44 208 44 136 100 136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ao.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"44 208 44 136 100 136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"228",y1:"208",x2:"28",y2:"208",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"100 208 100 88 156 88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"156",y:"40",width:"56",height:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var AM=function(e,n){return Ie(e,n,Ao)},NI=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:AM}))});NI.displayName="ChartBar";var Po=new Map;Po.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Po.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Po.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});Po.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Po.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Po.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var PM=function(e,n){return Ie(e,n,Po)},VI=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:PM}))});VI.displayName="Check";var Ro=new Map;Ro.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ro.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ro.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"}))});Ro.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ro.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ro.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var RM=function(e,n){return Ie(e,n,Ro)},Hi=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:RM}))});Hi.displayName="CheckCircle";var bo=new Map;bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))});bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var bM=function(e,n){return Ie(e,n,bo)},Ns=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:bM}))});Ns.displayName="Clock";var jo=new Map;jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm91.2-27.7a8,8,0,0,0-8.7,1.8L204.2,68.4l-8.3-8.3a96,96,0,1,0,0,135.8,8,8,0,0,0,0-11.3,7.9,7.9,0,0,0-11.3,0,80,80,0,1,1,0-113.2l8.3,8.3L178.5,94.1a8,8,0,0,0,5.7,13.6h40a8,8,0,0,0,8-8v-40A8.2,8.2,0,0,0,227.2,52.3Z"}))});jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var jM=function(e,n){return Ie(e,n,jo)},FI=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:jM}))});FI.displayName="ClockClockwise";var Do=new Map;Do.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Do.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Do.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm59.9-19.9a96.2,96.2,0,0,0-135.8,0l-8.3,8.3L37.5,54.1a8,8,0,0,0-8.7-1.8,8.2,8.2,0,0,0-5,7.4v40a8,8,0,0,0,8,8h40a8,8,0,0,0,5.7-13.6L63.1,79.7l8.3-8.3a80,80,0,1,1,0,113.2,7.9,7.9,0,0,0-11.3,0,8,8,0,0,0,0,11.3A96,96,0,0,0,195.9,60.1Z"}))});Do.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Do.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Do.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var DM=function(e,n){return Ie(e,n,Do)},UI=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:DM}))});UI.displayName="ClockCounterClockwise";var Oo=new Map;Oo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Oo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Oo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"}))});Oo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Oo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Oo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var OM=function(e,n){return Ie(e,n,Oo)},rf=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:OM}))});rf.displayName="Envelope";var Mo=new Map;Mo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Mo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Mo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,92a36,36,0,1,1-36,36A36,36,0,0,1,128,92Z"}))});Mo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Mo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Mo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var MM=function(e,n){return Ie(e,n,Mo)},Kd=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:MM}))});Kd.displayName="Eye";var No=new Map;No.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.4,163.6C232.1,145.7,240,128,240,128S208,56,128,56c-3.8,0-7.4.2-11,.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});No.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});No.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48a132.4,132.4,0,0,0-22,1.8,8.1,8.1,0,0,0-4.6,13.3L202.7,174.5a8,8,0,0,0,5.9,2.6,8.6,8.6,0,0,0,5.4-2c22.8-20.5,32.9-42.9,33.3-43.8A8.2,8.2,0,0,0,247.3,124.8Z"}),c.createElement("path",{d:"M53.9,34.6A8,8,0,0,0,42.1,45.4L61.3,66.5C25,88.8,9.4,123.2,8.7,124.8a8.2,8.2,0,0,0,0,6.5c.3.7,8.8,19.5,27.6,38.4C61.4,194.7,93.1,208,128,208a126.9,126.9,0,0,0,52.1-10.8l22,24.2A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3ZM128,164a36,36,0,0,1-29.5-56.6l47.2,51.9A35.4,35.4,0,0,1,128,164Z"}))});No.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});No.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});No.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var NM=function(e,n){return Ie(e,n,No)},Qd=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:NM}))});Qd.displayName="EyeSlash";var Vo=new Map;Vo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"44",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M183.7,65.1q3.8,3.5,7.2,7.2l27.3,3.9a103.2,103.2,0,0,1,10.2,24.6l-16.6,22.1s.3,6.8,0,10.2l16.6,22.1a102.2,102.2,0,0,1-10.2,24.6l-27.3,3.9s-4.7,4.9-7.2,7.2l-3.9,27.3a103.2,103.2,0,0,1-24.6,10.2l-22.1-16.6a57.9,57.9,0,0,1-10.2,0l-22.1,16.6a102.2,102.2,0,0,1-24.6-10.2l-3.9-27.3q-3.7-3.5-7.2-7.2l-27.3-3.9a103.2,103.2,0,0,1-10.2-24.6l16.6-22.1s-.2-6.8,0-10.2L27.6,100.8A102.2,102.2,0,0,1,37.8,76.2l27.3-3.9q3.5-3.7,7.2-7.2l3.9-27.3a103.2,103.2,0,0,1,24.6-10.2l22.1,16.6a57.9,57.9,0,0,1,10.2,0l22.1-16.6a102.2,102.2,0,0,1,24.6,10.2Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Vo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M211.8,133.1c.3-3.4,0-10.2,0-10.2l16.6-22.1a103.2,103.2,0,0,0-10.2-24.6l-27.3-3.9q-3.5-3.7-7.2-7.2l-3.9-27.3a102.2,102.2,0,0,0-24.6-10.2L133.1,44.2a57.9,57.9,0,0,0-10.2,0L100.8,27.6A103.2,103.2,0,0,0,76.2,37.8L72.3,65.1q-3.7,3.5-7.2,7.2L37.8,76.2a102.2,102.2,0,0,0-10.2,24.6l16.6,22.1c-.2,3.4,0,10.2,0,10.2L27.6,155.2a103.2,103.2,0,0,0,10.2,24.6l27.3,3.9q3.5,3.8,7.2,7.2l3.9,27.3a102.2,102.2,0,0,0,24.6,10.2l22.1-16.6a57.9,57.9,0,0,0,10.2,0l22.1,16.6a103.2,103.2,0,0,0,24.6-10.2l3.9-27.3c2.5-2.3,7.2-7.2,7.2-7.2l27.3-3.9a102.2,102.2,0,0,0,10.2-24.6ZM128,176a48,48,0,1,1,48-48A48,48,0,0,1,128,176Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"48",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M183.7,65.1q3.8,3.5,7.2,7.2l27.3,3.9a103.2,103.2,0,0,1,10.2,24.6l-16.6,22.1s.3,6.8,0,10.2l16.6,22.1a102.2,102.2,0,0,1-10.2,24.6l-27.3,3.9s-4.7,4.9-7.2,7.2l-3.9,27.3a103.2,103.2,0,0,1-24.6,10.2l-22.1-16.6a57.9,57.9,0,0,1-10.2,0l-22.1,16.6a102.2,102.2,0,0,1-24.6-10.2l-3.9-27.3q-3.7-3.5-7.2-7.2l-27.3-3.9a103.2,103.2,0,0,1-10.2-24.6l16.6-22.1s-.2-6.8,0-10.2L27.6,100.8A102.2,102.2,0,0,1,37.8,76.2l27.3-3.9q3.5-3.7,7.2-7.2l3.9-27.3a103.2,103.2,0,0,1,24.6-10.2l22.1,16.6a57.9,57.9,0,0,1,10.2,0l22.1-16.6a102.2,102.2,0,0,1,24.6,10.2Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Vo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M234.8,150.4l-14.9-19.8c.1-1.8,0-3.7,0-5.1l14.9-19.9a7.8,7.8,0,0,0,1.3-6.9,114.8,114.8,0,0,0-10.9-26.4,8.2,8.2,0,0,0-5.8-4l-24.5-3.5-3.7-3.7-3.5-24.5a8.4,8.4,0,0,0-3.9-5.8,117.5,117.5,0,0,0-26.5-10.9,7.8,7.8,0,0,0-6.9,1.3L130.6,36h-5.2L105.6,21.2a7.8,7.8,0,0,0-6.9-1.3A114.8,114.8,0,0,0,72.3,30.8a8.2,8.2,0,0,0-4,5.8L64.8,61.1l-3.7,3.7L36.6,68.3a8.2,8.2,0,0,0-5.8,4A114.8,114.8,0,0,0,19.9,98.7a7.8,7.8,0,0,0,1.3,6.9l14.9,19.8v5.1L21.2,150.4a7.8,7.8,0,0,0-1.3,6.9,114.8,114.8,0,0,0,10.9,26.4,8.2,8.2,0,0,0,5.8,4l24.5,3.5,3.7,3.7,3.5,24.5a8.2,8.2,0,0,0,4,5.8,114.8,114.8,0,0,0,26.4,10.9,7.6,7.6,0,0,0,2.1.3,7.7,7.7,0,0,0,4.8-1.6L125.4,220h5.2l19.8,14.8a7.8,7.8,0,0,0,6.9,1.3,113,113,0,0,0,26.4-10.9,8.2,8.2,0,0,0,4-5.8l3.5-24.6c1.2-1.2,2.6-2.5,3.6-3.6l24.6-3.5a8.2,8.2,0,0,0,5.8-4,114.8,114.8,0,0,0,10.9-26.4A7.8,7.8,0,0,0,234.8,150.4ZM128,172a44,44,0,1,1,44-44A44,44,0,0,1,128,172Z"}))});Vo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"48",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M183.7,65.1q3.8,3.5,7.2,7.2l27.3,3.9a103.2,103.2,0,0,1,10.2,24.6l-16.6,22.1s.3,6.8,0,10.2l16.6,22.1a102.2,102.2,0,0,1-10.2,24.6l-27.3,3.9s-4.7,4.9-7.2,7.2l-3.9,27.3a103.2,103.2,0,0,1-24.6,10.2l-22.1-16.6a57.9,57.9,0,0,1-10.2,0l-22.1,16.6a102.2,102.2,0,0,1-24.6-10.2l-3.9-27.3q-3.7-3.5-7.2-7.2l-27.3-3.9a103.2,103.2,0,0,1-10.2-24.6l16.6-22.1s-.3-6.8,0-10.2L27.6,100.8A102.2,102.2,0,0,1,37.8,76.2l27.3-3.9q3.5-3.7,7.2-7.2l3.9-27.3a103.2,103.2,0,0,1,24.6-10.2l22.1,16.6a57.9,57.9,0,0,1,10.2,0l22.1-16.6a102.2,102.2,0,0,1,24.6,10.2Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Vo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"48",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M183.7,65.1q3.8,3.5,7.2,7.2l27.3,3.9a103.2,103.2,0,0,1,10.2,24.6l-16.6,22.1s.3,6.8,0,10.2l16.6,22.1a102.2,102.2,0,0,1-10.2,24.6l-27.3,3.9s-4.7,4.9-7.2,7.2l-3.9,27.3a103.2,103.2,0,0,1-24.6,10.2l-22.1-16.6a57.9,57.9,0,0,1-10.2,0l-22.1,16.6a102.2,102.2,0,0,1-24.6-10.2l-3.9-27.3q-3.7-3.5-7.2-7.2l-27.3-3.9a103.2,103.2,0,0,1-10.2-24.6l16.6-22.1s-.3-6.8,0-10.2L27.6,100.8A102.2,102.2,0,0,1,37.8,76.2l27.3-3.9q3.5-3.7,7.2-7.2l3.9-27.3a103.2,103.2,0,0,1,24.6-10.2l22.1,16.6a57.9,57.9,0,0,1,10.2,0l22.1-16.6a102.2,102.2,0,0,1,24.6,10.2Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Vo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"48",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M183.7,65.1q3.8,3.5,7.2,7.2l27.3,3.9a103.2,103.2,0,0,1,10.2,24.6l-16.6,22.1s.3,6.8,0,10.2l16.6,22.1a102.2,102.2,0,0,1-10.2,24.6l-27.3,3.9s-4.7,4.9-7.2,7.2l-3.9,27.3a103.2,103.2,0,0,1-24.6,10.2l-22.1-16.6a57.9,57.9,0,0,1-10.2,0l-22.1,16.6a102.2,102.2,0,0,1-24.6-10.2l-3.9-27.3q-3.7-3.5-7.2-7.2l-27.3-3.9a103.2,103.2,0,0,1-10.2-24.6l16.6-22.1s-.3-6.8,0-10.2L27.6,100.8A102.2,102.2,0,0,1,37.8,76.2l27.3-3.9q3.5-3.7,7.2-7.2l3.9-27.3a103.2,103.2,0,0,1,24.6-10.2l22.1,16.6a57.9,57.9,0,0,1,10.2,0l22.1-16.6a102.2,102.2,0,0,1,24.6,10.2Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var VM=function(e,n){return Ie(e,n,Vo)},WI=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:VM}))});WI.displayName="Gear";var Fo=new Map;Fo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Fo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M130.2,224a96.3,96.3,0,0,0,84-53.6h0L159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224Z",opacity:"0.2"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1l5.4,1.1,8.3-19.7a8.1,8.1,0,0,1,7.4-4.9h21.4a8.6,8.6,0,0,0,3.8-1l12.3-6.8a7.2,7.2,0,0,0,1.5-1.1l26.9-24.3a8.1,8.1,0,0,0,1.6-9.8l-9.3-16.8h0A98.5,98.5,0,0,0,128,32,95.4,95.4,0,0,0,65,55.6Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Fo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.6,173.3A102.9,102.9,0,0,0,232,128,104.2,104.2,0,0,0,154.8,27.5h-.5A103.8,103.8,0,0,0,60.4,49l-1.3,1.2A103.9,103.9,0,0,0,128,232h2.4A104.3,104.3,0,0,0,221,174.6h0ZM216,128a89.3,89.3,0,0,1-5.5,30.7l-46.4-28.5a16,16,0,0,0-6.3-2.3l-22.8-3a16.1,16.1,0,0,0-15.3,6.8h-8.6l-3.8-7.9a16.2,16.2,0,0,0-11-8.7l-6.6-1.4,2.5-5.9a8.1,8.1,0,0,1,7.4-4.9h16.1a16.1,16.1,0,0,0,7.7-2l12.2-6.8a16.1,16.1,0,0,0,3-2.1l26.9-24.4A15.7,15.7,0,0,0,170,50.7,88,88,0,0,1,216,128ZM40,128a87.1,87.1,0,0,1,9.5-39.7l10.4,27.9a16.1,16.1,0,0,0,11.6,10l5.5,1.2h.1l12,2.6a7.8,7.8,0,0,1,5.5,4.3l2.1,4.4a16.1,16.1,0,0,0,14.4,9h1.2l-7.7,17.2a15.9,15.9,0,0,0,2.8,17.4l16.1,17.4a8.3,8.3,0,0,1,2,6.9l-1.8,9.3A88.1,88.1,0,0,1,40,128Z"}))});Fo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Fo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Fo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var FM=function(e,n){return Ie(e,n,Fo)},$I=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:FM}))});$I.displayName="GlobeHemisphereWest";var Uo=new Map;Uo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Uo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",opacity:"0.2"}),c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Uo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M218.8,103.7,138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5v92.1a16.4,16.4,0,0,0,4,11A15.9,15.9,0,0,0,48,224H96a8,8,0,0,0,8-8V168a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v48a8,8,0,0,0,8,8h48a15.6,15.6,0,0,0,7.6-1.9A16.1,16.1,0,0,0,224,208V115.5A16,16,0,0,0,218.8,103.7Z"}))});Uo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Uo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Uo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var UM=function(e,n){return Ie(e,n,Uo)},zI=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:UM}))});zI.displayName="House";var Wo=new Map;Wo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"108",x2:"184",y2:"108",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"148",x2:"184",y2:"148",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"94.1",cy:"116",r:"22",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M72.1,164a22,22,0,0,1,44,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Wo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM92.1,144a24,24,0,1,1,24-24A23.9,23.9,0,0,1,92.1,144Z",opacity:"0.2"}),c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Wo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM125.1,175.7a8,8,0,0,1-9.8-5.7,24,24,0,0,0-46.4,0,8.1,8.1,0,0,1-7.8,6l-2-.3a7.9,7.9,0,0,1-5.7-9.7,40.2,40.2,0,0,1,16.3-23.2,32,32,0,1,1,44.8,0A40.2,40.2,0,0,1,130.8,166,7.9,7.9,0,0,1,125.1,175.7ZM192,152H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"16"}))});Wo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Wo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Wo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var WM=function(e,n){return Ie(e,n,Wo)},ry=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:WM}))});ry.displayName="IdentificationCard";var $o=new Map;$o.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"152",r:"16"}))});$o.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});$o.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"}))});$o.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"152",r:"10"}))});$o.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"152",r:"8"}))});$o.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});var $M=function(e,n){return Ie(e,n,$o)},Zd=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:$M}))});Zd.displayName="Lock";var zo=new Map;zo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"44",y1:"156",x2:"100",y2:"212",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"164",y1:"92",x2:"72",y2:"184",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});zo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M192,120,136,64l26.3-26.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z",opacity:"0.2"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});zo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.3,32a15.9,15.9,0,0,0-22.6,0L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a15.9,15.9,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7ZM51.3,160,144,67.3,160.7,84,68,176.7ZM48,179.3,76.7,208H48Zm48,25.4L79.3,188,172,95.3,188.7,112Z"}))});zo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});zo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});zo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var zM=function(e,n){return Ie(e,n,zo)},BI=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:zM}))});BI.displayName="Pencil";var Bo=new Map;Bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,64l56,56,26.3-26.3a8,8,0,0,0,0-11.4L173.7,37.7a8,8,0,0,0-11.4,0Z",opacity:"0.2"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"}))});Bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var BM=function(e,n){return Ie(e,n,Bo)},p0=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:BM}))});p0.displayName="PencilSimple";var Ho=new Map;Ho.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ho.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ho.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M141.7,133.7l-42,42A8.3,8.3,0,0,1,94,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H24a8,8,0,0,1,0-16H86V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,141.7,133.7ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"}))});Ho.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ho.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ho.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var HM=function(e,n){return Ie(e,n,Ho)},iy=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:HM}))});iy.displayName="SignIn";var qo=new Map;qo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});qo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});qo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-42,42A8.3,8.3,0,0,1,174,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H104a8,8,0,0,1,0-16h62V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,221.7,133.7ZM104,208H48V48h56a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16h56a8,8,0,0,0,0-16Z"}))});qo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});qo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});qo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var qM=function(e,n){return Ie(e,n,qo)},Zc=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:qM}))});Zc.displayName="SignOut";var Yo=new Map;Yo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Yo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Yo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"}))});Yo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Yo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Yo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var YM=function(e,n){return Ie(e,n,Yo)},HI=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:YM}))});HI.displayName="SpinnerGap";var Go=new Map;Go.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"60",x2:"40",y2:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Go.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Go.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))});Go.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Go.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Go.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var GM=function(e,n){return Ie(e,n,Go)},m0=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:GM}))});m0.displayName="Trash";var Ko=new Map;Ko.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ko.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ko.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});Ko.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ko.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ko.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var KM=function(e,n){return Ie(e,n,Ko)},ro=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:KM}))});ro.displayName="User";var Qo=new Map;Qo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Qo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,32A96,96,0,0,0,63.8,199.4h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.4A96,96,0,0,0,128,32Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Qo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"120",r:"44"}),c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm65.8,162.4a81.3,81.3,0,0,0-24.5-23,59.7,59.7,0,0,1-82.6,0,81.3,81.3,0,0,0-24.5,23,88,88,0,1,1,131.6,0Z"}))});Qo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Qo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Qo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var QM=function(e,n){return Ie(e,n,Qo)},Xd=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:QM}))});Xd.displayName="UserCircle";var Zo=new Map;Zo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"204",y1:"136",x2:"244",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"116",x2:"224",y2:"156",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Zo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"108",cy:"100",r:"60",opacity:"0.2"}),c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Zo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144.1,157.6a68,68,0,1,0-72.2,0,118.4,118.4,0,0,0-55.8,37.3,7.8,7.8,0,0,0-1.1,8.5,7.9,7.9,0,0,0,7.2,4.6H193.8a7.9,7.9,0,0,0,7.2-4.6,7.8,7.8,0,0,0-1.1-8.5A118.4,118.4,0,0,0,144.1,157.6Z"}))});Zo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Zo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Zo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var ZM=function(e,n){return Ie(e,n,Zo)},of=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:ZM}))});of.displayName="UserPlus";var Xo=new Map;Xo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Xo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",opacity:"0.2"}),c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Xo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M121.2,157.9a60,60,0,1,0-66.4,0A95.5,95.5,0,0,0,9.5,192.8a7.8,7.8,0,0,0-.6,8.3,8.1,8.1,0,0,0,7.1,4.3H160a8.1,8.1,0,0,0,7.1-4.3,7.8,7.8,0,0,0-.6-8.3A95.5,95.5,0,0,0,121.2,157.9Z"}),c.createElement("path",{d:"M248.1,192.8a96.3,96.3,0,0,0-45.4-34.9A59.9,59.9,0,0,0,169.5,48a64,64,0,0,0-16.3,2.2,8.2,8.2,0,0,0-5.4,5.2,8,8,0,0,0,1.2,7.3,75.8,75.8,0,0,1,3.8,84.9,8.1,8.1,0,0,0,2.1,10.6q4.5,3.5,8.7,7.2l.5.5a112.6,112.6,0,0,1,25.5,34.9,7.9,7.9,0,0,0,7.2,4.6h44.7a8.1,8.1,0,0,0,7.1-4.3A8,8,0,0,0,248.1,192.8Z"}))});Xo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Xo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Xo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var XM=function(e,n){return Ie(e,n,Xo)},uu=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:XM}))});uu.displayName="Users";var Jo=new Map;Jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"}))});Jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var JM=function(e,n){return Ie(e,n,Jo)},qI=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:JM}))});qI.displayName="X";var es=new Map;es.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});es.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});es.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm37.7,130.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3l-26.3,26.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,90.3,101.7a8.1,8.1,0,0,1,11.4-11.4L128,116.7l26.3-26.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"}))});es.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});es.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});es.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var eN=function(e,n){return Ie(e,n,es)},YI=D.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:eN}))});YI.displayName="XCircle";const tN=N.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #000000 0%, #801100 100%);
`,nN=N.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`,rN=N.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,iN=N.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,v_=N.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,k_=N.label`
  font-size: 0.9rem;
  color: #555;
`,__=N.div`
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
`,E_=N.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #e74c3c;
  
  &:focus {
    outline: none;
  }
`,oN=N.button`
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
`,sN=N.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,aN=N(Qg)`
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
`,lN=N.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,uN=N.button`
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
`,cN=N.button`
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
`,dN=N.div`
  font-size: 2rem;
  font-weight: bold;
  color: #800000;
  text-align: center;
  margin-bottom: 0.5rem;
`;function hN(){const[t,e]=D.useState(""),[n,r]=D.useState(""),[i,o]=D.useState(""),[s,a]=D.useState(!1),[l,d]=D.useState(!1),[f,m]=D.useState(!1),[E,v]=D.useState(!1),x=rr(),C=ka();D.useEffect(()=>{var g;(g=C.state)!=null&&g.message&&(H.info(C.state.message),x(C.pathname,{replace:!0,state:{}}))},[C,x]),D.useEffect(()=>{i&&o("")},[t,n]);const w=async()=>{var _,S;if(!t){o("Please enter your email address to reset your password"),(_=document.getElementById("email"))==null||_.focus();return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(S=document.getElementById("email"))==null||S.focus();return}try{v(!0),await YP(Lt,t),m(!0),H.success("Password reset email sent! Check your inbox.")}catch(b){console.error("Password reset error:",b),b.code==="auth/user-not-found"?o("No account found with this email address"):o("Failed to send password reset email. Please try again.")}finally{v(!1)}},y=async g=>{var S,b,M;if(g.preventDefault(),!t||!n){o("Please enter both email and password");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(S=document.getElementById("email"))==null||S.focus();return}try{o(""),a(!0);try{const I=(await KP(Lt,t,n)).user,A=bn(on(ke,"declined_registrations"),er("userId","==",I.uid));if(!(await gn(A)).empty){await Lt.signOut(),o("Your registration request has been declined. Please contact an administrator."),H.error("Access denied: Registration declined");return}const j=bn(on(ke,"registration_requests"),er("userId","==",I.uid));if(!(await gn(j)).empty){await Lt.signOut(),o("Your registration request is pending approval. You will be notified when approved."),H.info("Registration pending approval");return}const P=!1;H.success("Login successful!"),x("/dashboard")}catch(T){if(console.error("Firebase auth error:",T),!(!1&&(T.code==="auth/network-request-failed"||(b=T.message)!=null&&b.includes("network")))){if(T.code==="auth/invalid-credential"||T.code==="auth/invalid-email"||T.code==="auth/user-not-found"||T.code==="auth/wrong-password"){console.log("Authentication failed:",T.code,T.message);const A=T.code==="auth/user-not-found"||T.code==="auth/invalid-credential"&&t.includes("@");o(A?h.jsxs("span",{children:["Account not found. Please check your email or",h.jsx("a",{href:"/register",style:{color:"#800000",marginLeft:"4px",textDecoration:"underline"},children:"register here"})]}):"Invalid email or password. Please check your credentials and try again."),(M=document.getElementById("email"))==null||M.focus()}else T.code==="auth/network-request-failed"?o("Network error. Please check your connection and try again."):T.code==="auth/too-many-requests"?o("Too many failed login attempts. Please try again later or reset your password."):T.code==="auth/operation-not-allowed"?(o("Email/password sign-in is not enabled. Please contact the administrator."),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(console.error("Login error details:",T),o("Failed to log in. Please try again."));H.error("Login failed")}}}catch(T){console.error("Unexpected login error:",T),o("An unexpected error occurred. Please try again."),H.error("Login failed")}finally{a(!1)}};return h.jsx(tN,{children:h.jsxs(nN,{children:[h.jsx(dN,{children:"Hyacinth"}),h.jsx(rN,{children:"Attendance System"}),h.jsxs(iN,{onSubmit:y,children:[h.jsxs(v_,{children:[h.jsx(k_,{htmlFor:"email",children:"Email"}),h.jsxs(__,{children:[h.jsx(Ec,{children:h.jsx(rf,{size:18})}),h.jsx(E_,{id:"email",type:"email",value:t,onChange:g=>e(g.target.value),placeholder:"Enter your email",required:!0})]})]}),h.jsxs(v_,{children:[h.jsx(k_,{htmlFor:"password",children:"Password"}),h.jsxs(__,{children:[h.jsx(Ec,{children:h.jsx(Zd,{size:18})}),h.jsx(E_,{id:"password",type:l?"text":"password",value:n,onChange:g=>r(g.target.value),placeholder:"Enter your password",required:!0}),h.jsx(cN,{type:"button",onClick:()=>d(!l),"aria-label":l?"Hide password":"Show password",children:l?h.jsx(Qd,{size:18}):h.jsx(Kd,{size:18})})]}),h.jsx(uN,{type:"button",onClick:w,disabled:E,tabIndex:"-1",children:E?"Sending...":f?"Email sent!":"Forgot password?"})]}),i&&h.jsx(sN,{children:i}),h.jsxs(lN,{children:[h.jsx(oN,{type:"submit",disabled:s,onClick:y,children:s?"Logging in...":h.jsxs(h.Fragment,{children:[h.jsx(Ec,{children:h.jsx(iy,{size:18})}),"Login"]})}),h.jsxs(aN,{to:"/register",children:[h.jsx(Ec,{children:h.jsx(of,{size:18})}),"Register"]})]})]})]})})}const fN=async t=>{try{const e={...t,createdAt:Hh(),status:"pending"};return(await M8(on(ke,"registration_requests"),e)).id}catch(e){throw console.error("Error submitting registration request:",e),e}},pN=async()=>{try{const t=bn(on(ke,"registration_requests"),$1("createdAt","desc"));return(await gn(t)).docs.map(n=>({id:n.id,...n.data()}))}catch(t){throw console.error("Error getting registration requests:",t),t}},mN=async(t,e)=>{try{const n=Ze(ke,"registration_requests",t);await Cl(n,{...e,updatedAt:Hh()})}catch(n){throw console.error("Error updating registration request:",n),n}},gN=async t=>{try{const e=Ze(ke,"users",t.userId);await Fd(e,{userId:t.userId,name:t.name,email:t.email,position:t.position,role:t.role||"user",status:"active",timeRegion:t.timeRegion||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila",createdAt:Hh(),userID:t.userID||`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`}),await B1(Ze(ke,"registration_requests",t.id))}catch(e){throw console.error("Error approving registration request:",e),e}},yN=async t=>{try{if(await Fd(Ze(ke,"declined_registrations",t.id),{...t,declinedAt:Hh(),status:"declined",blocked:!0}),await B1(Ze(ke,"registration_requests",t.id)),t.userId&&!t.userId.startsWith("temp_"))try{const n=hT().currentUser;n&&n.uid===t.userId?(await nR(n),console.log("Deleted declined user from Firebase Authentication")):console.log("User marked as declined in Firestore. They will be blocked from accessing the system.")}catch(e){console.error("Error handling user authentication:",e)}}catch(e){throw console.error("Error declining registration request:",e),e}},vN=N.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
  padding: 2rem 1rem;
`,kN=N.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 550px;
  animation: fadeIn 0.3s ease-in-out;
`,_N=N.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,EN=N.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Qa=N.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,wN=N.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,wp=N.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${t=>t.flex||1};
  min-width: ${t=>t.minWidth||"0"};
`,$r=N.label`
  font-size: 0.9rem;
  color: #555;
`,Ni=N.div`
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
`,Tn=N.span`
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
`,xN=N.select`
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
`,TN=N.button`
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
`,xp=N.button`
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
`,w_=N(HI)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,IN=N(Qg)`
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
`,SN=N.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;
`,Za=N.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  color: ${t=>t.met?"#000000":"#666"};
`;function CN(){const[t,e]=D.useState({lastName:"",firstName:"",middleInitial:"",email:"",password:"",confirmPassword:"",position:""}),[n,r]=D.useState({}),[i,o]=D.useState(!1),[s,a]=D.useState(!1),[l,d]=D.useState(!1),[f,m]=D.useState(!1),E=rr();D.useEffect(()=>{Object.keys(n).length>0&&r({})},[t]);const v={length:t.password.length>=4,validChars:/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(t.password),hasLetter:/[a-zA-Z]/.test(t.password),hasNumber:/[0-9]/.test(t.password),match:t.password===t.confirmPassword&&t.confirmPassword!==""},x=g=>{const{name:_,value:S}=g.target;if(e(_==="middleInitial"?b=>({...b,[_]:S.toUpperCase()}):b=>({...b,[_]:S})),_==="email"&&S.includes("@")&&S.includes(".")){m(!0);const b=setTimeout(()=>{C(S)},800);return()=>clearTimeout(b)}},C=async g=>{try{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)){m(!1);return}(await fetch("https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=undefined",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({continueUri:window.location.href,identifier:g})}).then(b=>b.json())).registered&&r(b=>({...b,email:"This email is already registered. Please use a different email or login instead."}))}catch(_){console.error("Error checking email:",_)}finally{m(!1)}},w=()=>{const g={};return t.lastName.trim()||(g.lastName="Last name is required"),t.firstName.trim()||(g.firstName="First name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(g.email="Email is invalid"):g.email="Email is required",t.password?v.length?v.validChars?v.hasLetter?v.hasNumber||(g.password="Password must contain at least one number"):g.password="Password must contain at least one letter":g.password="Password contains invalid characters":g.password="Password must be at least 4 characters":g.password="Password is required",t.confirmPassword?t.password!==t.confirmPassword&&(g.confirmPassword="Passwords do not match"):g.confirmPassword="Please confirm your password",t.position||(g.position="Please select your position"),r(g),Object.keys(g).length===0},y=async g=>{var _,S,b,M;if(g.preventDefault(),!!w())try{o(!0);const T=!1;let I,A;try{A=await GP(Lt,t.email,t.password),I=A.user.uid}catch(P){if(console.error("Auth error:",P),P.code==="auth/email-already-in-use")console.log("Email already exists in Auth but proceeding with registration request"),I=`temp_${Date.now()}_${Math.random().toString(36).substring(2,7)}`;else if(!(T&&(P.code==="auth/network-request-failed"||(_=P.message)!=null&&_.includes("network"))))throw P}const R=`${t.lastName}, ${t.firstName}${t.middleInitial?" "+t.middleInitial+".":""}`;if(A!=null&&A.user)try{await ZP(A.user,{displayName:R})}catch(P){console.warn("Could not update profile, continuing with registration:",P)}let j="Asia/Manila";try{j=Intl.DateTimeFormat().resolvedOptions().timeZone,console.log("Detected device time zone during registration:",j)}catch(P){console.error("Error detecting time zone during registration:",P)}const O={userId:I,lastName:t.lastName,firstName:t.firstName,middleInitial:t.middleInitial,name:R,email:t.email,position:t.position,role:"user",status:"pending",timeRegion:j,userID:`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`};try{await fN(O)}catch(P){if(console.error("Firestore error:",P),!T)throw P}H.success("Registration request submitted! An administrator will review your request."),T&&!A||E("/login",{state:{message:"Your registration request has been submitted. You will be notified when your account is approved."}})}catch(T){if(console.error("Registration error:",T),T.code==="auth/email-already-in-use"||typeof T=="object"&&T.code==="auth/email-already-in-use"){const I=T.message||"Email is already registered. Please use a different email or login instead.";r(A=>({...A,email:I})),H.error(h.jsxs("div",{children:["Email already exists. ",h.jsx("a",{href:"/",style:{color:"white",textDecoration:"underline"},children:"Login instead?"})]}),{autoClose:5e3}),(S=document.getElementById("email"))==null||S.scrollIntoView({behavior:"smooth",block:"center"}),(b=document.getElementById("email"))==null||b.focus()}else T.code==="auth/network-request-failed"?H.error("Network error. Please check your connection and try again."):T.code==="auth/operation-not-allowed"?(r(I=>({...I,email:"Email/password registration is not enabled. Please contact the administrator."})),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(M=T.code)!=null&&M.includes("auth/")?H.error(`Authentication error: ${T.message||"Please try again later"}`):(console.error("Registration error details:",T),H.error("Registration failed. Please try again."))}finally{o(!1)}};return h.jsx(vN,{children:h.jsxs(kN,{children:[h.jsxs(IN,{to:"/",children:[h.jsx(Tn,{children:h.jsx(MI,{size:16})}),"Back to Login"]}),h.jsx(_N,{children:"Create Account"}),h.jsxs(EN,{onSubmit:y,children:[h.jsxs(Qa,{children:[h.jsx($r,{children:"Full Name"}),h.jsxs(wN,{children:[h.jsxs(wp,{flex:"2",minWidth:"150px",children:[h.jsx($r,{htmlFor:"lastName",children:"Last Name"}),h.jsxs(Ni,{children:[h.jsx(Tn,{children:h.jsx(ro,{size:18})}),h.jsx(ds,{id:"lastName",name:"lastName",type:"text",value:t.lastName,onChange:x,placeholder:"Last name"})]}),n.lastName&&h.jsx(hs,{children:n.lastName})]}),h.jsxs(wp,{flex:"2",minWidth:"150px",children:[h.jsx($r,{htmlFor:"firstName",children:"First Name"}),h.jsx(Ni,{children:h.jsx(ds,{id:"firstName",name:"firstName",type:"text",value:t.firstName,onChange:x,placeholder:"First name"})}),n.firstName&&h.jsx(hs,{children:n.firstName})]}),h.jsxs(wp,{flex:"1",minWidth:"80px",children:[h.jsx($r,{htmlFor:"middleInitial",children:"M.I."}),h.jsx(Ni,{children:h.jsx(ds,{id:"middleInitial",name:"middleInitial",type:"text",value:t.middleInitial,onChange:x,placeholder:"M.I.",maxLength:"1"})})]})]})]}),h.jsxs(Qa,{children:[h.jsx($r,{htmlFor:"email",children:"Email"}),h.jsxs(Ni,{children:[h.jsx(Tn,{children:h.jsx(rf,{size:18})}),h.jsx(ds,{id:"email",name:"email",type:"email",value:t.email,onChange:x,placeholder:"Enter your email"}),f&&h.jsx(xp,{as:"span","aria-label":"Checking email",children:h.jsx(w_,{size:18})})]}),n.email&&h.jsx(hs,{children:n.email})]}),h.jsxs(Qa,{children:[h.jsx($r,{htmlFor:"position",children:"Position"}),h.jsxs(Ni,{children:[h.jsx(Tn,{children:h.jsx(ry,{size:18})}),h.jsxs(xN,{id:"position",name:"position",value:t.position,onChange:x,children:[h.jsx("option",{value:"",disabled:!0,children:"Select your position"}),h.jsx("option",{value:"Intern/OJT",children:"Intern/OJT"}),h.jsx("option",{value:"Employed/Onboarded",children:"Employed/Onboarded"})]})]}),n.position&&h.jsx(hs,{children:n.position})]}),h.jsxs(Qa,{children:[h.jsx($r,{htmlFor:"password",children:"Password"}),h.jsxs(Ni,{children:[h.jsx(Tn,{children:h.jsx(Zd,{size:18})}),h.jsx(ds,{id:"password",name:"password",type:s?"text":"password",value:t.password,onChange:x,placeholder:"Create a password"}),h.jsx(xp,{type:"button",onClick:()=>a(!s),"aria-label":s?"Hide password":"Show password",children:s?h.jsx(Qd,{size:18}):h.jsx(Kd,{size:18})})]}),n.password&&h.jsx(hs,{children:n.password}),h.jsxs(SN,{children:[h.jsxs(Za,{met:v.length,children:[h.jsx(Tn,{children:h.jsx(Hi,{size:14,weight:v.length?"fill":"regular"})}),"At least 4 characters"]}),h.jsxs(Za,{met:v.validChars,children:[h.jsx(Tn,{children:h.jsx(Hi,{size:14,weight:v.validChars?"fill":"regular"})}),"Valid characters (letters, numbers, and special characters)"]}),h.jsxs(Za,{met:v.hasLetter,children:[h.jsx(Tn,{children:h.jsx(Hi,{size:14,weight:v.hasLetter?"fill":"regular"})}),"At least one letter"]}),h.jsxs(Za,{met:v.hasNumber,children:[h.jsx(Tn,{children:h.jsx(Hi,{size:14,weight:v.hasNumber?"fill":"regular"})}),"At least one number"]})]})]}),h.jsxs(Qa,{children:[h.jsx($r,{htmlFor:"confirmPassword",children:"Confirm Password"}),h.jsxs(Ni,{children:[h.jsx(Tn,{children:h.jsx(Zd,{size:18})}),h.jsx(ds,{id:"confirmPassword",name:"confirmPassword",type:l?"text":"password",value:t.confirmPassword,onChange:x,placeholder:"Confirm your password"}),h.jsx(xp,{type:"button",onClick:()=>d(!l),"aria-label":l?"Hide password":"Show password",children:l?h.jsx(Qd,{size:18}):h.jsx(Kd,{size:18})})]}),n.confirmPassword&&h.jsx(hs,{children:n.confirmPassword}),t.confirmPassword&&h.jsxs(Za,{met:v.match,children:[h.jsx(Tn,{children:h.jsx(Hi,{size:14,weight:v.match?"fill":"regular"})}),"Passwords match"]})]}),h.jsx(TN,{type:"submit",disabled:i||f,children:i?h.jsxs(h.Fragment,{children:[h.jsx(w_,{size:18}),"Creating Account..."]}):f?"Checking email...":"Register"})]})]})})}const GI=D.createContext(),oy=()=>D.useContext(GI),LN=({children:t})=>{const{currentUser:e}=Mr(),[n,r]=D.useState(!1),[i,o]=D.useState(!0);D.useEffect(()=>{(async()=>{if(!(e!=null&&e.uid)){o(!1);return}try{const d=Ze(ke,"users_settings",e.uid),f=await br(d);if(f.exists()){const m=f.data();m.use24HourFormat!==void 0&&r(m.use24HourFormat)}else await Fd(d,{use24HourFormat:!1,userId:e.uid})}catch(d){console.error("Error fetching user settings:",d)}finally{o(!1)}})()},[e]);const a={use24HourFormat:n,toggleTimeFormat:async()=>{if(e!=null&&e.uid)try{const l=Ze(ke,"users_settings",e.uid);return await Fd(l,{use24HourFormat:!n,userId:e.uid},{merge:!0}),r(!n),!0}catch(l){return console.error("Error updating time format:",l),!1}},loading:i};return h.jsx(GI.Provider,{value:a,children:t})},AN=N.div`
  display: flex;
  height: 100vh; /* Lock to viewport height */
  overflow: hidden; /* Prevent overall page scrolling */
`,PN=N.div`
  width: 250px;
  background: linear-gradient(180deg, #000000 0%, #800000 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Allow sidebar to scroll if needed */
`,RN=N.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`,cr=N.div`
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
`,x_=N.button`
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
`,KI=N.button`
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
`,bN=N(KI)`
  background-color: #111111;
  color: #76da7c;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,jN=N(KI)`
  background-color: #111111;
  color: #e67979;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,In=N.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,DN=N.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Make content area scrollable */
`,ON=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  background-color: #f5f5f5;
  z-index: 10; /* Ensure header stays on top */
`,MN=N.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,NN=N.div`
  display: flex;
  align-items: center;
`,VN=N.span`
  margin-right: 1rem;
  font-weight: 500;
`,FN=N.button`
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
`,UN=N.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto; /* Make content area scrollable */
  height: calc(100vh - 73px); /* Subtract header height */
`,WN=N.div`
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
`,$N=N.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`,zN=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
`,BN=N.div`
  padding: 1rem;
  overflow-y: auto;
`,HN=N.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #eee;
  gap: 0.5rem;
`,qN=N.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`,T_=N.div`
  margin-bottom: 1rem;
`,I_=N.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,YN=N.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`,S_=N.button`
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
`,Au=({user:t,activeTab:e,setActiveTab:n,attendanceStatus:r,loading:i,handleTimeInOut:o,lastRecord:s,isSuperAdmin:a,userData:l,setUserData:d,children:f})=>{var te;const m=rr(),{currentUser:E}=Mr(),{use24HourFormat:v,toggleTimeFormat:x}=oy(),[C,w]=D.useState(!1),[y,g]=D.useState((l==null?void 0:l.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila"),[_,S]=D.useState(!1),[b,M]=D.useState(""),[T,I]=D.useState(!1),A=J=>{try{const he=new Date,fe={timeZone:J,timeZoneName:"short"},Z=new Intl.DateTimeFormat("en-US",fe).format(he).match(/GMT([+-]\d+)/);if(Z&&Z[1])return`UTC${Z[1]}`;const se=new Date,ye=(new Date(se.toLocaleString("en-US",{timeZone:J}))-se)/6e4,Ye=Math.floor(Math.abs(ye)/60),Be=Math.abs(ye)%60;return`UTC${ye>=0?"+":"-"}${Ye.toString().padStart(2,"0")}:${Be.toString().padStart(2,"0")}`}catch(he){return console.error("Error calculating UTC offset:",he),""}};D.useEffect(()=>{try{const J=Intl.DateTimeFormat().resolvedOptions().timeZone;M(J),console.log("Detected device time zone:",J)}catch(J){console.error("Error detecting time zone:",J),M("Unable to detect")}},[]),D.useEffect(()=>{l!=null&&l.timeRegion?g(l.timeRegion):b&&!(l!=null&&l.timeRegion)&&g(b)},[l,b]);const R=async()=>{if(!(!(t!=null&&t.uid)||_))try{S(!0);const J=Ze(ke,"users",t.uid);await Cl(J,{timeRegion:y}),d(he=>({...he,timeRegion:y})),H.success("Time region updated successfully"),w(!1)}catch(J){console.error("Error updating time region:",J),H.error("Failed to update time region")}finally{S(!1)}},j=async()=>{if(!T)try{I(!0),await x()?H.success(`Time format updated to ${v?"12-hour":"24-hour"} format`):H.error("Failed to update time format")}catch(J){console.error("Error updating time format:",J),H.error("Failed to update time format")}finally{I(!1)}},O=async()=>{try{await tR(Lt),m("/login")}catch(J){console.error("Error signing out:",J),H.error("Failed to sign out")}},P=e==="admin"||e==="registration_requests"||e==="user_management";return h.jsxs(AN,{children:[h.jsxs(PN,{children:[h.jsx(RN,{children:"Hyacinth"}),h.jsxs(cr,{className:e==="home"?"active":"",onClick:()=>m("/home"),children:[h.jsx(In,{children:h.jsx(zI,{size:16})}),"Home"]}),h.jsxs(cr,{className:e==="schedule"?"active":"",onClick:()=>m("/schedule"),children:[h.jsx(In,{children:h.jsx(qn,{size:16})}),"Schedule"]}),h.jsxs(cr,{className:e==="attendance"?"active":"",onClick:()=>m("/attendance"),children:[h.jsx(In,{children:h.jsx(Ns,{size:16})}),"Attendance"]}),h.jsxs(cr,{className:e==="profile"?"active":"",onClick:()=>m("/profile"),children:[h.jsx(In,{children:h.jsx(ro,{size:16})}),"Profile"]}),a&&h.jsx(h.Fragment,{children:h.jsxs("div",{style:{marginTop:"1.5rem",marginBottom:"0.5rem"},children:[h.jsx("div",{style:{fontSize:"0.8rem",textTransform:"uppercase",color:"rgba(255,255,255,0.6)",padding:"0 0.5rem",marginBottom:"0.5rem"},children:"Administration"}),h.jsxs(cr,{className:P?"active":"",onClick:()=>m("/admin"),children:[h.jsx(In,{children:h.jsx(uu,{size:16})}),"Admin Panel"]}),h.jsxs("div",{style:{marginLeft:"1.5rem"},children:[h.jsxs(cr,{className:e==="registration_requests"?"active":"",onClick:()=>m("/admin/registration-requests"),style:{padding:"0.5rem 0.75rem",fontSize:"0.9rem"},children:[h.jsx(In,{children:h.jsx(of,{size:14})}),"Registration Requests"]}),h.jsxs(cr,{className:e==="user_management"?"active":"",onClick:()=>m("/admin/user-management"),style:{padding:"0.5rem 0.75rem",fontSize:"0.9rem"},children:[h.jsx(In,{children:h.jsx(uu,{size:14})}),"User Management"]})]})]})}),h.jsxs("div",{style:{marginTop:"auto"},children:[h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"User Settings"}),h.jsxs(cr,{onClick:()=>w(!0),children:[h.jsx(In,{children:h.jsx($I,{size:16})}),"Change Time Region",h.jsxs("div",{style:{fontSize:"0.75rem",marginLeft:"auto",opacity:.7},children:[((te=l==null?void 0:l.timeRegion)==null?void 0:te.replace("_"," "))||"Asia/Manila",h.jsx("div",{style:{fontSize:"0.7rem",marginTop:"2px"},children:A((l==null?void 0:l.timeRegion)||"Asia/Manila")})]})]})]}),h.jsxs("div",{style:{marginBottom:"1.5rem",zIndex:1e3},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"Attendance Actions"}),h.jsxs(bN,{onClick:()=>o("In"),disabled:i||r==="In",children:[h.jsx(In,{children:h.jsx(iy,{size:16})}),"Time In"]}),h.jsxs(jN,{onClick:()=>o("Out"),disabled:i||r==="Out"||!r,children:[h.jsx(In,{children:h.jsx(Zc,{size:16})}),"Time Out"]}),r&&h.jsxs("div",{style:{padding:"0.5rem 0",textAlign:"center",fontSize:"0.85rem"},children:["Status: ",h.jsx("strong",{children:r==="In"?"Clocked In":"Clocked Out"})]})]}),h.jsxs(cr,{onClick:O,children:[h.jsx(In,{children:h.jsx(Zc,{size:16})}),"Logout"]})]})]}),h.jsxs(DN,{children:[h.jsxs(ON,{children:[h.jsxs(MN,{children:[e==="dashboard"&&"Dashboard",e==="attendance"&&"Attendance",e==="schedule"&&"Schedule",e==="profile"&&"Profile",e==="registration_requests"&&"Registration Requests",e==="user_management"&&"User Management"]}),h.jsxs(NN,{children:[h.jsx(VN,{children:t==null?void 0:t.displayName}),h.jsxs(FN,{onClick:O,children:[h.jsx(Zc,{size:16}),"Logout"]})]})]}),h.jsx(UN,{children:f})]}),C&&h.jsx(WN,{children:h.jsxs($N,{children:[h.jsxs(zN,{children:[h.jsx("h3",{children:"Change Time Region"}),h.jsx(qN,{onClick:()=>w(!1),children:"×"})]}),h.jsxs(BN,{children:[h.jsx("p",{style:{marginBottom:"1rem"},children:"Changing your time region will affect how times are displayed throughout the application and how your attendance is recorded."}),b&&h.jsxs("p",{style:{marginBottom:"1rem",backgroundColor:"#f0f7ff",padding:"0.5rem",borderRadius:"4px",fontSize:"0.9rem"},children:[h.jsx("strong",{children:"Detected device time zone:"})," ",b,h.jsxs("span",{style:{fontWeight:"normal"},children:["(",A(b),")"]}),b!==y&&h.jsx("button",{onClick:()=>g(b),style:{display:"block",marginTop:"0.5rem",padding:"0.25rem 0.5rem",fontSize:"0.8rem",backgroundColor:"#e6f0ff",border:"1px solid #bbd6fb",borderRadius:"4px",cursor:"pointer"},children:"Use device time zone"})]}),h.jsxs(T_,{children:[h.jsx(I_,{children:"Select Time Region"}),h.jsxs(YN,{value:y,onChange:J=>g(J.target.value),children:[h.jsx("optgroup",{label:"Asia",children:h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT, UTC+8)"})}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern, UTC-5/-4)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central, UTC-6/-5)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain, UTC-7/-6)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific, UTC-8/-7)"})]}),h.jsx("optgroup",{label:"Europe",children:h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST, UTC+0/+1)"})})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"Note: UTC offsets may vary during Daylight Saving Time transitions."})]}),h.jsxs(T_,{style:{marginTop:"1.5rem"},children:[h.jsxs(I_,{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(FI,{size:18}),"Time Format"]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"0.5rem"},children:[h.jsx(x_,{active:!v,onClick:j,disabled:T,children:"12-hour (AM/PM)"}),h.jsx(x_,{active:v,onClick:j,disabled:T,children:"24-hour"})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"This setting affects how time is displayed throughout the application."})]})]}),h.jsxs(HN,{children:[h.jsx(S_,{onClick:()=>w(!1),children:"Cancel"}),h.jsx(S_,{primary:!0,onClick:R,disabled:_,children:_?"Updating...":"Save Changes"})]})]})})]})},gi=N.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1.5rem;
`,yi=N.h2`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1.25rem;
  margin: 0;
  border-bottom: 1px solid #eee;
`,vi=N.div`
  padding: 1.25rem;
`,GN=N.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,KN=N.span`
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
`;const QN=({attendanceStatus:t,lastRecord:e})=>h.jsx(h.Fragment,{children:h.jsxs(GN,{children:[h.jsxs(gi,{children:[h.jsx(yi,{children:"Today's Schedule"}),h.jsx(vi,{children:h.jsx("p",{children:"No schedule for today"})})]}),h.jsxs(gi,{children:[h.jsx(yi,{children:"Attendance Status"}),h.jsx(vi,{children:t?h.jsxs(h.Fragment,{children:[h.jsxs("p",{children:["Current Status:",h.jsx(KN,{status:t,children:t==="In"?"Clocked In":"Clocked Out"})]}),e&&h.jsxs("p",{children:["Last action: ",new Date(e.timestamp.toDate()).toLocaleString()]})]}):h.jsx("p",{children:"You haven't clocked in today"})})]}),h.jsxs(gi,{children:[h.jsx(yi,{children:"Recent Activity"}),h.jsx(vi,{children:e?h.jsxs("p",{children:["Last ",e.type==="In"?"Time In":"Time Out",": ",new Date(e.timestamp.toDate()).toLocaleString()]}):h.jsx("p",{children:"No recent activity"})})]})]})}),ZN=N.table`
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
`,XN=N.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,C_=N.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`,JN=({user:t})=>{const[e,n]=D.useState([]),[r,i]=D.useState(!0),[o,s]=D.useState(null),{use24HourFormat:a}=oy();D.useEffect(()=>{const v=async()=>{if(t!=null&&t.uid)try{const C=await getDoc(doc(ke,"users",t.uid));C.exists()&&s(C.data())}catch(C){console.error("Error fetching user data:",C)}},x=async()=>{if(t!=null&&t.uid)try{i(!0);const C=on(ke,"attendance"),w=bn(C,er("userId","==",t.uid),$1("timestamp","desc")),y=await gn(w),g=[];if(y.forEach(S=>{g.push({id:S.id,...S.data()})}),console.log("Raw attendance records:",g.length),g.length===0){n([]),i(!1);return}const _=l(g);console.log("Processed attendance records:",_.length),n(_)}catch(C){console.error("Error fetching attendance records:",C)}finally{i(!1)}};v(),x()},[t]);const l=v=>{const x={};v.forEach(w=>{if(!w.timestamp){console.log("Skipping record without timestamp:",w);return}try{const y=w.timestamp.toDate(),g=y.toISOString().split("T")[0];x[g]||(x[g]={date:y,day:f(w.timestamp),inRecord:null,outRecord:null}),w.type==="In"?x[g].inRecord=w:w.type==="Out"?x[g].outRecord=w:console.log("Record with unknown type:",w.type,w)}catch(y){console.error("Error processing record:",y,w)}});const C=Object.values(x).sort((w,y)=>y.date-w.date);return console.log("Processed records by date:",C),C},d=v=>{if(!v)return"N/A";if(v instanceof Date)return v.toLocaleDateString();try{return v.toDate().toLocaleDateString()}catch(x){return console.error("Error formatting date:",x,v),"Invalid Date"}},f=v=>{if(!v)return"N/A";try{const x=v instanceof Date?v:v.toDate();return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][x.getDay()]}catch(x){return console.error("Error getting day of week:",x,v),"Unknown"}},m=v=>{if(!v)return"N/A";try{return(v instanceof Date?v:v.toDate()).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!a})}catch(x){return console.error("Error formatting time:",x,v),"Invalid Time"}},E=(v,x)=>{if(!v||v.type!=="In")return"N/A";try{const C=v.timestamp.toDate(),w=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][C.getDay()];let y="On Time";const _=((o==null?void 0:o.schedule)||[]).find(S=>S.dayOfWeek===w);if(_&&_.timeIn){const[S,b]=_.timeIn.split(":").map(Number),M=new Date(C);M.setHours(S,b,0,0);const T=Math.round((C-M)/(1e3*60));T<-15?y="Early":T<=15?y="On Time":y="Late"}return y}catch(C){return console.error("Error calculating time-in status:",C,v),"On Time"}};return h.jsxs(gi,{children:[h.jsx(yi,{children:"Attendance Records"}),h.jsx(vi,{children:r?h.jsx("p",{children:"Loading attendance records..."}):e.length>0?h.jsxs(ZN,{children:[h.jsxs("thead",{children:[h.jsxs("tr",{children:[h.jsx("th",{children:"Date"}),h.jsx("th",{children:"Day"}),h.jsx("th",{colSpan:"2",children:"IN"}),h.jsx("th",{colSpan:"2",children:"OUT"}),h.jsx("th",{children:"Notes"})]}),h.jsxs("tr",{children:[h.jsx("th",{}),h.jsx("th",{}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{})]})]}),h.jsx("tbody",{children:e.map((v,x)=>{var C,w,y,g;return h.jsxs("tr",{children:[h.jsx("td",{children:d(v.date)}),h.jsx("td",{children:v.day}),h.jsx("td",{children:v.inRecord?m(v.inRecord.timestamp):"-"}),h.jsx("td",{children:v.inRecord?h.jsx(C_,{status:E(v.inRecord,v.date),children:E(v.inRecord,v.date)}):"-"}),h.jsx("td",{children:v.outRecord?m(v.outRecord.timestamp):"-"}),h.jsx("td",{children:v.outRecord?h.jsx(C_,{status:"Complete",children:"Complete"}):"-"}),h.jsx("td",{children:(C=v.inRecord)!=null&&C.notes&&((w=v.outRecord)!=null&&w.notes)?h.jsxs(h.Fragment,{children:[h.jsx("strong",{children:"IN:"})," ",v.inRecord.notes,h.jsx("br",{}),h.jsx("strong",{children:"OUT:"})," ",v.outRecord.notes]}):(y=v.inRecord)!=null&&y.notes?v.inRecord.notes:(g=v.outRecord)!=null&&g.notes?v.outRecord.notes:"-"})]},x)})})]}):h.jsx(XN,{children:h.jsx("p",{children:"No attendance records found"})})})]})};function Jd(t){"@babel/helpers - typeof";return Jd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jd(t)}function Ti(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function Rt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function sr(t){Rt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||Jd(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function QI(t,e){Rt(2,arguments);var n=sr(t).getTime(),r=Ti(e);return new Date(n+r)}var e9=36e5;function t9(t,e){Rt(2,arguments);var n=Ti(e);return QI(t,n*e9)}var n9={};function sf(){return n9}function r9(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function i9(t){return Rt(1,arguments),t instanceof Date||Jd(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function o9(t){if(Rt(1,arguments),!i9(t)&&typeof t!="number")return!1;var e=sr(t);return!isNaN(Number(e))}function s9(t,e){Rt(2,arguments);var n=Ti(e);return QI(t,-n)}var a9=864e5;function l9(t){Rt(1,arguments);var e=sr(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/a9)+1}function eh(t){Rt(1,arguments);var e=1,n=sr(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function ZI(t){Rt(1,arguments);var e=sr(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=eh(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var s=eh(o);return e.getTime()>=i.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function u9(t){Rt(1,arguments);var e=ZI(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=eh(n);return r}var c9=6048e5;function d9(t){Rt(1,arguments);var e=sr(t),n=eh(e).getTime()-u9(e).getTime();return Math.round(n/c9)+1}function th(t,e){var n,r,i,o,s,a,l,d;Rt(1,arguments);var f=sf(),m=Ti((n=(r=(i=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:f.weekStartsOn)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&n!==void 0?n:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var E=sr(t),v=E.getUTCDay(),x=(v<m?7:0)+v-m;return E.setUTCDate(E.getUTCDate()-x),E.setUTCHours(0,0,0,0),E}function XI(t,e){var n,r,i,o,s,a,l,d;Rt(1,arguments);var f=sr(t),m=f.getUTCFullYear(),E=sf(),v=Ti((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:E.firstWeekContainsDate)!==null&&r!==void 0?r:(l=E.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var x=new Date(0);x.setUTCFullYear(m+1,0,v),x.setUTCHours(0,0,0,0);var C=th(x,e),w=new Date(0);w.setUTCFullYear(m,0,v),w.setUTCHours(0,0,0,0);var y=th(w,e);return f.getTime()>=C.getTime()?m+1:f.getTime()>=y.getTime()?m:m-1}function h9(t,e){var n,r,i,o,s,a,l,d;Rt(1,arguments);var f=sf(),m=Ti((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:f.firstWeekContainsDate)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1),E=XI(t,e),v=new Date(0);v.setUTCFullYear(E,0,m),v.setUTCHours(0,0,0,0);var x=th(v,e);return x}var f9=6048e5;function p9(t,e){Rt(1,arguments);var n=sr(t),r=th(n,e).getTime()-h9(n,e).getTime();return Math.round(r/f9)+1}function Ce(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var zr={y:function(e,n){var r=e.getUTCFullYear(),i=r>0?r:1-r;return Ce(n==="yy"?i%100:i,n.length)},M:function(e,n){var r=e.getUTCMonth();return n==="M"?String(r+1):Ce(r+1,2)},d:function(e,n){return Ce(e.getUTCDate(),n.length)},a:function(e,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,n){return Ce(e.getUTCHours()%12||12,n.length)},H:function(e,n){return Ce(e.getUTCHours(),n.length)},m:function(e,n){return Ce(e.getUTCMinutes(),n.length)},s:function(e,n){return Ce(e.getUTCSeconds(),n.length)},S:function(e,n){var r=n.length,i=e.getUTCMilliseconds(),o=Math.floor(i*Math.pow(10,r-3));return Ce(o,n.length)}},fs={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},m9={G:function(e,n,r){var i=e.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){var i=e.getUTCFullYear(),o=i>0?i:1-i;return r.ordinalNumber(o,{unit:"year"})}return zr.y(e,n)},Y:function(e,n,r,i){var o=XI(e,i),s=o>0?o:1-o;if(n==="YY"){var a=s%100;return Ce(a,2)}return n==="Yo"?r.ordinalNumber(s,{unit:"year"}):Ce(s,n.length)},R:function(e,n){var r=ZI(e);return Ce(r,n.length)},u:function(e,n){var r=e.getUTCFullYear();return Ce(r,n.length)},Q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return Ce(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return Ce(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,r){var i=e.getUTCMonth();switch(n){case"M":case"MM":return zr.M(e,n);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,r){var i=e.getUTCMonth();switch(n){case"L":return String(i+1);case"LL":return Ce(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var o=p9(e,i);return n==="wo"?r.ordinalNumber(o,{unit:"week"}):Ce(o,n.length)},I:function(e,n,r){var i=d9(e);return n==="Io"?r.ordinalNumber(i,{unit:"week"}):Ce(i,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):zr.d(e,n)},D:function(e,n,r){var i=l9(e);return n==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):Ce(i,n.length)},E:function(e,n,r){var i=e.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(s);case"ee":return Ce(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(s);case"cc":return Ce(s,n.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(e,n,r){var i=e.getUTCDay(),o=i===0?7:i;switch(n){case"i":return String(o);case"ii":return Ce(o,n.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,r){var i=e.getUTCHours(),o=i/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,n,r){var i=e.getUTCHours(),o;switch(i===12?o=fs.noon:i===0?o=fs.midnight:o=i/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,n,r){var i=e.getUTCHours(),o;switch(i>=17?o=fs.evening:i>=12?o=fs.afternoon:i>=4?o=fs.morning:o=fs.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return zr.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):zr.H(e,n)},K:function(e,n,r){var i=e.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(i,{unit:"hour"}):Ce(i,n.length)},k:function(e,n,r){var i=e.getUTCHours();return i===0&&(i=24),n==="ko"?r.ordinalNumber(i,{unit:"hour"}):Ce(i,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):zr.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):zr.s(e,n)},S:function(e,n){return zr.S(e,n)},X:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();if(s===0)return"Z";switch(n){case"X":return A_(s);case"XXXX":case"XX":return Bi(s);case"XXXXX":case"XXX":default:return Bi(s,":")}},x:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"x":return A_(s);case"xxxx":case"xx":return Bi(s);case"xxxxx":case"xxx":default:return Bi(s,":")}},O:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+L_(s,":");case"OOOO":default:return"GMT"+Bi(s,":")}},z:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+L_(s,":");case"zzzz":default:return"GMT"+Bi(s,":")}},t:function(e,n,r,i){var o=i._originalDate||e,s=Math.floor(o.getTime()/1e3);return Ce(s,n.length)},T:function(e,n,r,i){var o=i._originalDate||e,s=o.getTime();return Ce(s,n.length)}};function L_(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+Ce(o,2)}function A_(t,e){if(t%60===0){var n=t>0?"-":"+";return n+Ce(Math.abs(t)/60,2)}return Bi(t,e)}function Bi(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=Ce(Math.floor(i/60),2),s=Ce(i%60,2);return r+o+n+s}var P_=function(e,n){switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},JI=function(e,n){switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},g9=function(e,n){var r=e.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return P_(e,n);var s;switch(i){case"P":s=n.dateTime({width:"short"});break;case"PP":s=n.dateTime({width:"medium"});break;case"PPP":s=n.dateTime({width:"long"});break;case"PPPP":default:s=n.dateTime({width:"full"});break}return s.replace("{{date}}",P_(i,n)).replace("{{time}}",JI(o,n))},y9={p:JI,P:g9},v9=["D","DD"],k9=["YY","YYYY"];function _9(t){return v9.indexOf(t)!==-1}function E9(t){return k9.indexOf(t)!==-1}function R_(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var w9={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},x9=function(e,n,r){var i,o=w9[e];return typeof o=="string"?i=o:n===1?i=o.one:i=o.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function Tp(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var T9={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},I9={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},S9={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},C9={date:Tp({formats:T9,defaultWidth:"full"}),time:Tp({formats:I9,defaultWidth:"full"}),dateTime:Tp({formats:S9,defaultWidth:"full"})},L9={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},A9=function(e,n,r,i){return L9[e]};function Xa(t){return function(e,n){var r=n!=null&&n.context?String(n.context):"standalone",i;if(r==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,s=n!=null&&n.width?String(n.width):o;i=t.formattingValues[s]||t.formattingValues[o]}else{var a=t.defaultWidth,l=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[l]||t.values[a]}var d=t.argumentCallback?t.argumentCallback(e):e;return i[d]}}var P9={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},R9={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},b9={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},j9={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},D9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},O9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},M9=function(e,n){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},N9={ordinalNumber:M9,era:Xa({values:P9,defaultWidth:"wide"}),quarter:Xa({values:R9,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Xa({values:b9,defaultWidth:"wide"}),day:Xa({values:j9,defaultWidth:"wide"}),dayPeriod:Xa({values:D9,defaultWidth:"wide",formattingValues:O9,defaultFormattingWidth:"wide"})};function Ja(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;var s=o[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?F9(a,function(m){return m.test(s)}):V9(a,function(m){return m.test(s)}),d;d=t.valueCallback?t.valueCallback(l):l,d=n.valueCallback?n.valueCallback(d):d;var f=e.slice(s.length);return{value:d,rest:f}}}function V9(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function F9(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function U9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],o=e.match(t.parsePattern);if(!o)return null;var s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;var a=e.slice(i.length);return{value:s,rest:a}}}var W9=/^(\d+)(th|st|nd|rd)?/i,$9=/\d+/i,z9={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},B9={any:[/^b/i,/^(a|c)/i]},H9={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},q9={any:[/1/i,/2/i,/3/i,/4/i]},Y9={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},G9={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},K9={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Q9={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Z9={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},X9={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},J9={ordinalNumber:U9({matchPattern:W9,parsePattern:$9,valueCallback:function(e){return parseInt(e,10)}}),era:Ja({matchPatterns:z9,defaultMatchWidth:"wide",parsePatterns:B9,defaultParseWidth:"any"}),quarter:Ja({matchPatterns:H9,defaultMatchWidth:"wide",parsePatterns:q9,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Ja({matchPatterns:Y9,defaultMatchWidth:"wide",parsePatterns:G9,defaultParseWidth:"any"}),day:Ja({matchPatterns:K9,defaultMatchWidth:"wide",parsePatterns:Q9,defaultParseWidth:"any"}),dayPeriod:Ja({matchPatterns:Z9,defaultMatchWidth:"any",parsePatterns:X9,defaultParseWidth:"any"})},e7={code:"en-US",formatDistance:x9,formatLong:C9,formatRelative:A9,localize:N9,match:J9,options:{weekStartsOn:0,firstWeekContainsDate:1}},t7=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,n7=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,r7=/^'([^]*?)'?$/,i7=/''/g,o7=/[a-zA-Z]/;function s7(t,e,n){var r,i,o,s,a,l,d,f,m,E,v,x,C,w;Rt(2,arguments);var y=String(e),g=sf(),_=(r=(i=void 0)!==null&&i!==void 0?i:g.locale)!==null&&r!==void 0?r:e7,S=Ti((o=(s=(a=(l=void 0)!==null&&l!==void 0?l:void 0)!==null&&a!==void 0?a:g.firstWeekContainsDate)!==null&&s!==void 0?s:(d=g.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(S>=1&&S<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=Ti((m=(E=(v=(x=void 0)!==null&&x!==void 0?x:void 0)!==null&&v!==void 0?v:g.weekStartsOn)!==null&&E!==void 0?E:(C=g.locale)===null||C===void 0||(w=C.options)===null||w===void 0?void 0:w.weekStartsOn)!==null&&m!==void 0?m:0);if(!(b>=0&&b<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!_.localize)throw new RangeError("locale must contain localize property");if(!_.formatLong)throw new RangeError("locale must contain formatLong property");var M=sr(t);if(!o9(M))throw new RangeError("Invalid time value");var T=r9(M),I=s9(M,T),A={firstWeekContainsDate:S,weekStartsOn:b,locale:_,_originalDate:M},R=y.match(n7).map(function(j){var O=j[0];if(O==="p"||O==="P"){var P=y9[O];return P(j,_.formatLong)}return j}).join("").match(t7).map(function(j){if(j==="''")return"'";var O=j[0];if(O==="'")return a7(j);var P=m9[O];if(P)return E9(j)&&R_(j,e,String(t)),_9(j)&&R_(j,e,String(t)),P(I,j,_.localize,A);if(O.match(o7))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");return j}).join("");return R}function a7(t){var e=t.match(r7);return e?e[1].replace(i7,"'"):t}var g0={exports:{}},e6={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(e6);var ze=e6.exports,y0={exports:{}},v0={exports:{}},t6={exports:{}};(function(t){function e(n){"@babel/helpers - typeof";return t.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(t6);var n6=t6.exports,k0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(i.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+i.length+" present")}t.exports=e.default})(k0,k0.exports);var Wt=k0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(n6),i=n(Wt);function o(s){return(0,i.default)(1,arguments),s instanceof Date||(0,r.default)(s)==="object"&&Object.prototype.toString.call(s)==="[object Date]"}t.exports=e.default})(v0,v0.exports);var l7=v0.exports,_0={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(n6),i=n(Wt);function o(s){(0,i.default)(1,arguments);var a=Object.prototype.toString.call(s);return s instanceof Date||(0,r.default)(s)==="object"&&a==="[object Date]"?new Date(s.getTime()):typeof s=="number"||a==="[object Number]"?new Date(s):((typeof s=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}t.exports=e.default})(_0,_0.exports);var ar=_0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(l7),i=n(ar),o=n(Wt);function s(a){if((0,o.default)(1,arguments),!(0,r.default)(a)&&typeof a!="number")return!1;var l=(0,i.default)(a);return!isNaN(Number(l))}t.exports=e.default})(y0,y0.exports);var u7=y0.exports,E0={exports:{}},w0={exports:{}},x0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){if(r===null||r===!0||r===!1)return NaN;var i=Number(r);return isNaN(i)?i:i<0?Math.ceil(i):Math.floor(i)}t.exports=e.default})(x0,x0.exports);var ts=x0.exports;const c7=cu(ts);(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(ts),i=n(ar),o=n(Wt);function s(a,l){(0,o.default)(2,arguments);var d=(0,i.default)(a).getTime(),f=(0,r.default)(l);return new Date(d+f)}t.exports=e.default})(w0,w0.exports);var d7=w0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(d7),i=n(Wt),o=n(ts);function s(a,l){(0,i.default)(2,arguments);var d=(0,o.default)(l);return(0,r.default)(a,-d)}t.exports=e.default})(E0,E0.exports);var h7=E0.exports,T0={exports:{}},I0={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(ar),i=n(Wt),o=864e5;function s(a){(0,i.default)(1,arguments);var l=(0,r.default)(a),d=l.getTime();l.setUTCMonth(0,1),l.setUTCHours(0,0,0,0);var f=l.getTime(),m=d-f;return Math.floor(m/o)+1}t.exports=e.default})(I0,I0.exports);var f7=I0.exports,S0={exports:{}},C0={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(ar),i=n(Wt);function o(s){(0,i.default)(1,arguments);var a=1,l=(0,r.default)(s),d=l.getUTCDay(),f=(d<a?7:0)+d-a;return l.setUTCDate(l.getUTCDate()-f),l.setUTCHours(0,0,0,0),l}t.exports=e.default})(C0,C0.exports);var sy=C0.exports,L0={exports:{}},A0={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(ar),i=n(Wt),o=n(sy);function s(a){(0,i.default)(1,arguments);var l=(0,r.default)(a),d=l.getUTCFullYear(),f=new Date(0);f.setUTCFullYear(d+1,0,4),f.setUTCHours(0,0,0,0);var m=(0,o.default)(f),E=new Date(0);E.setUTCFullYear(d,0,4),E.setUTCHours(0,0,0,0);var v=(0,o.default)(E);return l.getTime()>=m.getTime()?d+1:l.getTime()>=v.getTime()?d:d-1}t.exports=e.default})(A0,A0.exports);var r6=A0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(r6),i=n(sy),o=n(Wt);function s(a){(0,o.default)(1,arguments);var l=(0,r.default)(a),d=new Date(0);d.setUTCFullYear(l,0,4),d.setUTCHours(0,0,0,0);var f=(0,i.default)(d);return f}t.exports=e.default})(L0,L0.exports);var p7=L0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(ar),i=n(sy),o=n(p7),s=n(Wt),a=6048e5;function l(d){(0,s.default)(1,arguments);var f=(0,r.default)(d),m=(0,i.default)(f).getTime()-(0,o.default)(f).getTime();return Math.round(m/a)+1}t.exports=e.default})(S0,S0.exports);var m7=S0.exports,P0={exports:{}},R0={exports:{}},ns={};Object.defineProperty(ns,"__esModule",{value:!0});ns.getDefaultOptions=g7;ns.setDefaultOptions=y7;var i6={};function g7(){return i6}function y7(t){i6=t}(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=n(ar),i=n(Wt),o=n(ts),s=ns;function a(l,d){var f,m,E,v,x,C,w,y;(0,i.default)(1,arguments);var g=(0,s.getDefaultOptions)(),_=(0,o.default)((f=(m=(E=(v=d==null?void 0:d.weekStartsOn)!==null&&v!==void 0?v:d==null||(x=d.locale)===null||x===void 0||(C=x.options)===null||C===void 0?void 0:C.weekStartsOn)!==null&&E!==void 0?E:g.weekStartsOn)!==null&&m!==void 0?m:(w=g.locale)===null||w===void 0||(y=w.options)===null||y===void 0?void 0:y.weekStartsOn)!==null&&f!==void 0?f:0);if(!(_>=0&&_<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var S=(0,r.default)(l),b=S.getUTCDay(),M=(b<_?7:0)+b-_;return S.setUTCDate(S.getUTCDate()-M),S.setUTCHours(0,0,0,0),S}t.exports=e.default})(R0,R0.exports);var ay=R0.exports,b0={exports:{}},j0={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(ar),i=n(Wt),o=n(ay),s=n(ts),a=ns;function l(d,f){var m,E,v,x,C,w,y,g;(0,i.default)(1,arguments);var _=(0,r.default)(d),S=_.getUTCFullYear(),b=(0,a.getDefaultOptions)(),M=(0,s.default)((m=(E=(v=(x=f==null?void 0:f.firstWeekContainsDate)!==null&&x!==void 0?x:f==null||(C=f.locale)===null||C===void 0||(w=C.options)===null||w===void 0?void 0:w.firstWeekContainsDate)!==null&&v!==void 0?v:b.firstWeekContainsDate)!==null&&E!==void 0?E:(y=b.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1);if(!(M>=1&&M<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var T=new Date(0);T.setUTCFullYear(S+1,0,M),T.setUTCHours(0,0,0,0);var I=(0,o.default)(T,f),A=new Date(0);A.setUTCFullYear(S,0,M),A.setUTCHours(0,0,0,0);var R=(0,o.default)(A,f);return _.getTime()>=I.getTime()?S+1:_.getTime()>=R.getTime()?S:S-1}t.exports=e.default})(j0,j0.exports);var o6=j0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(o6),i=n(Wt),o=n(ay),s=n(ts),a=ns;function l(d,f){var m,E,v,x,C,w,y,g;(0,i.default)(1,arguments);var _=(0,a.getDefaultOptions)(),S=(0,s.default)((m=(E=(v=(x=f==null?void 0:f.firstWeekContainsDate)!==null&&x!==void 0?x:f==null||(C=f.locale)===null||C===void 0||(w=C.options)===null||w===void 0?void 0:w.firstWeekContainsDate)!==null&&v!==void 0?v:_.firstWeekContainsDate)!==null&&E!==void 0?E:(y=_.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1),b=(0,r.default)(d,f),M=new Date(0);M.setUTCFullYear(b,0,S),M.setUTCHours(0,0,0,0);var T=(0,o.default)(M,f);return T}t.exports=e.default})(b0,b0.exports);var v7=b0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(ar),i=n(ay),o=n(v7),s=n(Wt),a=6048e5;function l(d,f){(0,s.default)(1,arguments);var m=(0,r.default)(d),E=(0,i.default)(m,f).getTime()-(0,o.default)(m,f).getTime();return Math.round(E/a)+1}t.exports=e.default})(P0,P0.exports);var k7=P0.exports,D0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){for(var o=r<0?"-":"",s=Math.abs(r).toString();s.length<i;)s="0"+s;return o+s}t.exports=e.default})(D0,D0.exports);var s6=D0.exports,O0={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(s6),i={y:function(a,l){var d=a.getUTCFullYear(),f=d>0?d:1-d;return(0,r.default)(l==="yy"?f%100:f,l.length)},M:function(a,l){var d=a.getUTCMonth();return l==="M"?String(d+1):(0,r.default)(d+1,2)},d:function(a,l){return(0,r.default)(a.getUTCDate(),l.length)},a:function(a,l){var d=a.getUTCHours()/12>=1?"pm":"am";switch(l){case"a":case"aa":return d.toUpperCase();case"aaa":return d;case"aaaaa":return d[0];case"aaaa":default:return d==="am"?"a.m.":"p.m."}},h:function(a,l){return(0,r.default)(a.getUTCHours()%12||12,l.length)},H:function(a,l){return(0,r.default)(a.getUTCHours(),l.length)},m:function(a,l){return(0,r.default)(a.getUTCMinutes(),l.length)},s:function(a,l){return(0,r.default)(a.getUTCSeconds(),l.length)},S:function(a,l){var d=l.length,f=a.getUTCMilliseconds(),m=Math.floor(f*Math.pow(10,d-3));return(0,r.default)(m,l.length)}},o=i;e.default=o,t.exports=e.default})(O0,O0.exports);var _7=O0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(f7),i=n(m7),o=n(r6),s=n(k7),a=n(o6),l=n(s6),d=n(_7),f={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},m={G:function(y,g,_){var S=y.getUTCFullYear()>0?1:0;switch(g){case"G":case"GG":case"GGG":return _.era(S,{width:"abbreviated"});case"GGGGG":return _.era(S,{width:"narrow"});case"GGGG":default:return _.era(S,{width:"wide"})}},y:function(y,g,_){if(g==="yo"){var S=y.getUTCFullYear(),b=S>0?S:1-S;return _.ordinalNumber(b,{unit:"year"})}return d.default.y(y,g)},Y:function(y,g,_,S){var b=(0,a.default)(y,S),M=b>0?b:1-b;if(g==="YY"){var T=M%100;return(0,l.default)(T,2)}return g==="Yo"?_.ordinalNumber(M,{unit:"year"}):(0,l.default)(M,g.length)},R:function(y,g){var _=(0,o.default)(y);return(0,l.default)(_,g.length)},u:function(y,g){var _=y.getUTCFullYear();return(0,l.default)(_,g.length)},Q:function(y,g,_){var S=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"Q":return String(S);case"QQ":return(0,l.default)(S,2);case"Qo":return _.ordinalNumber(S,{unit:"quarter"});case"QQQ":return _.quarter(S,{width:"abbreviated",context:"formatting"});case"QQQQQ":return _.quarter(S,{width:"narrow",context:"formatting"});case"QQQQ":default:return _.quarter(S,{width:"wide",context:"formatting"})}},q:function(y,g,_){var S=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"q":return String(S);case"qq":return(0,l.default)(S,2);case"qo":return _.ordinalNumber(S,{unit:"quarter"});case"qqq":return _.quarter(S,{width:"abbreviated",context:"standalone"});case"qqqqq":return _.quarter(S,{width:"narrow",context:"standalone"});case"qqqq":default:return _.quarter(S,{width:"wide",context:"standalone"})}},M:function(y,g,_){var S=y.getUTCMonth();switch(g){case"M":case"MM":return d.default.M(y,g);case"Mo":return _.ordinalNumber(S+1,{unit:"month"});case"MMM":return _.month(S,{width:"abbreviated",context:"formatting"});case"MMMMM":return _.month(S,{width:"narrow",context:"formatting"});case"MMMM":default:return _.month(S,{width:"wide",context:"formatting"})}},L:function(y,g,_){var S=y.getUTCMonth();switch(g){case"L":return String(S+1);case"LL":return(0,l.default)(S+1,2);case"Lo":return _.ordinalNumber(S+1,{unit:"month"});case"LLL":return _.month(S,{width:"abbreviated",context:"standalone"});case"LLLLL":return _.month(S,{width:"narrow",context:"standalone"});case"LLLL":default:return _.month(S,{width:"wide",context:"standalone"})}},w:function(y,g,_,S){var b=(0,s.default)(y,S);return g==="wo"?_.ordinalNumber(b,{unit:"week"}):(0,l.default)(b,g.length)},I:function(y,g,_){var S=(0,i.default)(y);return g==="Io"?_.ordinalNumber(S,{unit:"week"}):(0,l.default)(S,g.length)},d:function(y,g,_){return g==="do"?_.ordinalNumber(y.getUTCDate(),{unit:"date"}):d.default.d(y,g)},D:function(y,g,_){var S=(0,r.default)(y);return g==="Do"?_.ordinalNumber(S,{unit:"dayOfYear"}):(0,l.default)(S,g.length)},E:function(y,g,_){var S=y.getUTCDay();switch(g){case"E":case"EE":case"EEE":return _.day(S,{width:"abbreviated",context:"formatting"});case"EEEEE":return _.day(S,{width:"narrow",context:"formatting"});case"EEEEEE":return _.day(S,{width:"short",context:"formatting"});case"EEEE":default:return _.day(S,{width:"wide",context:"formatting"})}},e:function(y,g,_,S){var b=y.getUTCDay(),M=(b-S.weekStartsOn+8)%7||7;switch(g){case"e":return String(M);case"ee":return(0,l.default)(M,2);case"eo":return _.ordinalNumber(M,{unit:"day"});case"eee":return _.day(b,{width:"abbreviated",context:"formatting"});case"eeeee":return _.day(b,{width:"narrow",context:"formatting"});case"eeeeee":return _.day(b,{width:"short",context:"formatting"});case"eeee":default:return _.day(b,{width:"wide",context:"formatting"})}},c:function(y,g,_,S){var b=y.getUTCDay(),M=(b-S.weekStartsOn+8)%7||7;switch(g){case"c":return String(M);case"cc":return(0,l.default)(M,g.length);case"co":return _.ordinalNumber(M,{unit:"day"});case"ccc":return _.day(b,{width:"abbreviated",context:"standalone"});case"ccccc":return _.day(b,{width:"narrow",context:"standalone"});case"cccccc":return _.day(b,{width:"short",context:"standalone"});case"cccc":default:return _.day(b,{width:"wide",context:"standalone"})}},i:function(y,g,_){var S=y.getUTCDay(),b=S===0?7:S;switch(g){case"i":return String(b);case"ii":return(0,l.default)(b,g.length);case"io":return _.ordinalNumber(b,{unit:"day"});case"iii":return _.day(S,{width:"abbreviated",context:"formatting"});case"iiiii":return _.day(S,{width:"narrow",context:"formatting"});case"iiiiii":return _.day(S,{width:"short",context:"formatting"});case"iiii":default:return _.day(S,{width:"wide",context:"formatting"})}},a:function(y,g,_){var S=y.getUTCHours(),b=S/12>=1?"pm":"am";switch(g){case"a":case"aa":return _.dayPeriod(b,{width:"abbreviated",context:"formatting"});case"aaa":return _.dayPeriod(b,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return _.dayPeriod(b,{width:"narrow",context:"formatting"});case"aaaa":default:return _.dayPeriod(b,{width:"wide",context:"formatting"})}},b:function(y,g,_){var S=y.getUTCHours(),b;switch(S===12?b=f.noon:S===0?b=f.midnight:b=S/12>=1?"pm":"am",g){case"b":case"bb":return _.dayPeriod(b,{width:"abbreviated",context:"formatting"});case"bbb":return _.dayPeriod(b,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return _.dayPeriod(b,{width:"narrow",context:"formatting"});case"bbbb":default:return _.dayPeriod(b,{width:"wide",context:"formatting"})}},B:function(y,g,_){var S=y.getUTCHours(),b;switch(S>=17?b=f.evening:S>=12?b=f.afternoon:S>=4?b=f.morning:b=f.night,g){case"B":case"BB":case"BBB":return _.dayPeriod(b,{width:"abbreviated",context:"formatting"});case"BBBBB":return _.dayPeriod(b,{width:"narrow",context:"formatting"});case"BBBB":default:return _.dayPeriod(b,{width:"wide",context:"formatting"})}},h:function(y,g,_){if(g==="ho"){var S=y.getUTCHours()%12;return S===0&&(S=12),_.ordinalNumber(S,{unit:"hour"})}return d.default.h(y,g)},H:function(y,g,_){return g==="Ho"?_.ordinalNumber(y.getUTCHours(),{unit:"hour"}):d.default.H(y,g)},K:function(y,g,_){var S=y.getUTCHours()%12;return g==="Ko"?_.ordinalNumber(S,{unit:"hour"}):(0,l.default)(S,g.length)},k:function(y,g,_){var S=y.getUTCHours();return S===0&&(S=24),g==="ko"?_.ordinalNumber(S,{unit:"hour"}):(0,l.default)(S,g.length)},m:function(y,g,_){return g==="mo"?_.ordinalNumber(y.getUTCMinutes(),{unit:"minute"}):d.default.m(y,g)},s:function(y,g,_){return g==="so"?_.ordinalNumber(y.getUTCSeconds(),{unit:"second"}):d.default.s(y,g)},S:function(y,g){return d.default.S(y,g)},X:function(y,g,_,S){var b=S._originalDate||y,M=b.getTimezoneOffset();if(M===0)return"Z";switch(g){case"X":return v(M);case"XXXX":case"XX":return x(M);case"XXXXX":case"XXX":default:return x(M,":")}},x:function(y,g,_,S){var b=S._originalDate||y,M=b.getTimezoneOffset();switch(g){case"x":return v(M);case"xxxx":case"xx":return x(M);case"xxxxx":case"xxx":default:return x(M,":")}},O:function(y,g,_,S){var b=S._originalDate||y,M=b.getTimezoneOffset();switch(g){case"O":case"OO":case"OOO":return"GMT"+E(M,":");case"OOOO":default:return"GMT"+x(M,":")}},z:function(y,g,_,S){var b=S._originalDate||y,M=b.getTimezoneOffset();switch(g){case"z":case"zz":case"zzz":return"GMT"+E(M,":");case"zzzz":default:return"GMT"+x(M,":")}},t:function(y,g,_,S){var b=S._originalDate||y,M=Math.floor(b.getTime()/1e3);return(0,l.default)(M,g.length)},T:function(y,g,_,S){var b=S._originalDate||y,M=b.getTime();return(0,l.default)(M,g.length)}};function E(w,y){var g=w>0?"-":"+",_=Math.abs(w),S=Math.floor(_/60),b=_%60;if(b===0)return g+String(S);var M=y;return g+String(S)+M+(0,l.default)(b,2)}function v(w,y){if(w%60===0){var g=w>0?"-":"+";return g+(0,l.default)(Math.abs(w)/60,2)}return x(w,y)}function x(w,y){var g=y||"",_=w>0?"-":"+",S=Math.abs(w),b=(0,l.default)(Math.floor(S/60),2),M=(0,l.default)(S%60,2);return _+b+g+M}var C=m;e.default=C,t.exports=e.default})(T0,T0.exports);var E7=T0.exports,M0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(l,d){switch(l){case"P":return d.date({width:"short"});case"PP":return d.date({width:"medium"});case"PPP":return d.date({width:"long"});case"PPPP":default:return d.date({width:"full"})}},r=function(l,d){switch(l){case"p":return d.time({width:"short"});case"pp":return d.time({width:"medium"});case"ppp":return d.time({width:"long"});case"pppp":default:return d.time({width:"full"})}},i=function(l,d){var f=l.match(/(P+)(p+)?/)||[],m=f[1],E=f[2];if(!E)return n(l,d);var v;switch(m){case"P":v=d.dateTime({width:"short"});break;case"PP":v=d.dateTime({width:"medium"});break;case"PPP":v=d.dateTime({width:"long"});break;case"PPPP":default:v=d.dateTime({width:"full"});break}return v.replace("{{date}}",n(m,d)).replace("{{time}}",r(E,d))},o={p:r,P:i},s=o;e.default=s,t.exports=e.default})(M0,M0.exports);var w7=M0.exports,N0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){var i=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return i.setUTCFullYear(r.getFullYear()),r.getTime()-i.getTime()}t.exports=e.default})(N0,N0.exports);var a6=N0.exports;const b_=cu(a6);var Pu={};Object.defineProperty(Pu,"__esModule",{value:!0});Pu.isProtectedDayOfYearToken=I7;Pu.isProtectedWeekYearToken=S7;Pu.throwProtectedError=C7;var x7=["D","DD"],T7=["YY","YYYY"];function I7(t){return x7.indexOf(t)!==-1}function S7(t){return T7.indexOf(t)!==-1}function C7(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var V0={exports:{}},F0={exports:{}},U0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},r=function(s,a,l){var d,f=n[s];return typeof f=="string"?d=f:a===1?d=f.one:d=f.other.replace("{{count}}",a.toString()),l!=null&&l.addSuffix?l.comparison&&l.comparison>0?"in "+d:d+" ago":d},i=r;e.default=i,t.exports=e.default})(U0,U0.exports);var L7=U0.exports,W0={exports:{}},$0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.width?String(i.width):r.defaultWidth,s=r.formats[o]||r.formats[r.defaultWidth];return s}}t.exports=e.default})($0,$0.exports);var A7=$0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(A7),i={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},o={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},s={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},a={date:(0,r.default)({formats:i,defaultWidth:"full"}),time:(0,r.default)({formats:o,defaultWidth:"full"}),dateTime:(0,r.default)({formats:s,defaultWidth:"full"})},l=a;e.default=l,t.exports=e.default})(W0,W0.exports);var P7=W0.exports,z0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},r=function(s,a,l,d){return n[s]},i=r;e.default=i,t.exports=e.default})(z0,z0.exports);var R7=z0.exports,B0={exports:{}},H0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i,o){var s=o!=null&&o.context?String(o.context):"standalone",a;if(s==="formatting"&&r.formattingValues){var l=r.defaultFormattingWidth||r.defaultWidth,d=o!=null&&o.width?String(o.width):l;a=r.formattingValues[d]||r.formattingValues[l]}else{var f=r.defaultWidth,m=o!=null&&o.width?String(o.width):r.defaultWidth;a=r.values[m]||r.values[f]}var E=r.argumentCallback?r.argumentCallback(i):i;return a[E]}}t.exports=e.default})(H0,H0.exports);var b7=H0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(b7),i={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},o={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},s={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},a={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},l={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},d={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},f=function(x,C){var w=Number(x),y=w%100;if(y>20||y<10)switch(y%10){case 1:return w+"st";case 2:return w+"nd";case 3:return w+"rd"}return w+"th"},m={ordinalNumber:f,era:(0,r.default)({values:i,defaultWidth:"wide"}),quarter:(0,r.default)({values:o,defaultWidth:"wide",argumentCallback:function(x){return x-1}}),month:(0,r.default)({values:s,defaultWidth:"wide"}),day:(0,r.default)({values:a,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:l,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"})},E=m;e.default=E,t.exports=e.default})(B0,B0.exports);var j7=B0.exports,q0={exports:{}},Y0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(o){return function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.width,d=l&&o.matchPatterns[l]||o.matchPatterns[o.defaultMatchWidth],f=s.match(d);if(!f)return null;var m=f[0],E=l&&o.parsePatterns[l]||o.parsePatterns[o.defaultParseWidth],v=Array.isArray(E)?i(E,function(w){return w.test(m)}):r(E,function(w){return w.test(m)}),x;x=o.valueCallback?o.valueCallback(v):v,x=a.valueCallback?a.valueCallback(x):x;var C=s.slice(m.length);return{value:x,rest:C}}}function r(o,s){for(var a in o)if(o.hasOwnProperty(a)&&s(o[a]))return a}function i(o,s){for(var a=0;a<o.length;a++)if(s(o[a]))return a}t.exports=e.default})(Y0,Y0.exports);var D7=Y0.exports,G0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.match(r.matchPattern);if(!s)return null;var a=s[0],l=i.match(r.parsePattern);if(!l)return null;var d=r.valueCallback?r.valueCallback(l[0]):l[0];d=o.valueCallback?o.valueCallback(d):d;var f=i.slice(a.length);return{value:d,rest:f}}}t.exports=e.default})(G0,G0.exports);var O7=G0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(D7),i=n(O7),o=/^(\d+)(th|st|nd|rd)?/i,s=/\d+/i,a={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},l={any:[/^b/i,/^(a|c)/i]},d={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},f={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},E={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},v={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},x={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},C={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},w={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},y={ordinalNumber:(0,i.default)({matchPattern:o,parsePattern:s,valueCallback:function(S){return parseInt(S,10)}}),era:(0,r.default)({matchPatterns:a,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(S){return S+1}}),month:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:v,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:C,defaultMatchWidth:"any",parsePatterns:w,defaultParseWidth:"any"})},g=y;e.default=g,t.exports=e.default})(q0,q0.exports);var M7=q0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(L7),i=n(P7),o=n(R7),s=n(j7),a=n(M7),l={code:"en-US",formatDistance:r.default,formatLong:i.default,formatRelative:o.default,localize:s.default,match:a.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},d=l;e.default=d,t.exports=e.default})(F0,F0.exports);var N7=F0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(N7),i=r.default;e.default=i,t.exports=e.default})(V0,V0.exports);var V7=V0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=_;var r=n(u7),i=n(h7),o=n(ar),s=n(E7),a=n(w7),l=n(a6),d=Pu,f=n(ts),m=n(Wt),E=ns,v=n(V7),x=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,C=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,w=/^'([^]*?)'?$/,y=/''/g,g=/[a-zA-Z]/;function _(b,M,T){var I,A,R,j,O,P,te,J,he,fe,z,Y,Z,se,re,ye,Ye,Be;(0,m.default)(2,arguments);var Ge=String(M),F=(0,E.getDefaultOptions)(),ae=(I=(A=T==null?void 0:T.locale)!==null&&A!==void 0?A:F.locale)!==null&&I!==void 0?I:v.default,le=(0,f.default)((R=(j=(O=(P=T==null?void 0:T.firstWeekContainsDate)!==null&&P!==void 0?P:T==null||(te=T.locale)===null||te===void 0||(J=te.options)===null||J===void 0?void 0:J.firstWeekContainsDate)!==null&&O!==void 0?O:F.firstWeekContainsDate)!==null&&j!==void 0?j:(he=F.locale)===null||he===void 0||(fe=he.options)===null||fe===void 0?void 0:fe.firstWeekContainsDate)!==null&&R!==void 0?R:1);if(!(le>=1&&le<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var ue=(0,f.default)((z=(Y=(Z=(se=T==null?void 0:T.weekStartsOn)!==null&&se!==void 0?se:T==null||(re=T.locale)===null||re===void 0||(ye=re.options)===null||ye===void 0?void 0:ye.weekStartsOn)!==null&&Z!==void 0?Z:F.weekStartsOn)!==null&&Y!==void 0?Y:(Ye=F.locale)===null||Ye===void 0||(Be=Ye.options)===null||Be===void 0?void 0:Be.weekStartsOn)!==null&&z!==void 0?z:0);if(!(ue>=0&&ue<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!ae.localize)throw new RangeError("locale must contain localize property");if(!ae.formatLong)throw new RangeError("locale must contain formatLong property");var de=(0,o.default)(b);if(!(0,r.default)(de))throw new RangeError("Invalid time value");var Se=(0,l.default)(de),rs=(0,i.default)(de,Se),Sa={firstWeekContainsDate:le,weekStartsOn:ue,locale:ae,_originalDate:de},Ca=Ge.match(C).map(function(vt){var Fn=vt[0];if(Fn==="p"||Fn==="P"){var is=a.default[Fn];return is(vt,ae.formatLong)}return vt}).join("").match(x).map(function(vt){if(vt==="''")return"'";var Fn=vt[0];if(Fn==="'")return S(vt);var is=s.default[Fn];if(is)return!(T!=null&&T.useAdditionalWeekYearTokens)&&(0,d.isProtectedWeekYearToken)(vt)&&(0,d.throwProtectedError)(vt,M,String(b)),!(T!=null&&T.useAdditionalDayOfYearTokens)&&(0,d.isProtectedDayOfYearToken)(vt)&&(0,d.throwProtectedError)(vt,M,String(b)),is(rs,vt,ae.localize,Sa);if(Fn.match(g))throw new RangeError("Format string contains an unescaped latin alphabet character `"+Fn+"`");return vt}).join("");return Ca}function S(b){var M=b.match(w);return M?M[1].replace(y,"'"):b}t.exports=e.default})(g0,g0.exports);var F7=g0.exports;const U7=cu(F7);function j_(t,e,n){var r=z7(t,n.timeZone,n.locale);return r.formatToParts?W7(r,e):$7(r,e)}function W7(t,e){for(var n=t.formatToParts(e),r=n.length-1;r>=0;--r)if(n[r].type==="timeZoneName")return n[r].value}function $7(t,e){var n=t.format(e).replace(/\u200E/g,""),r=/ [\w-+ ]+$/.exec(n);return r?r[0].substr(1):""}function z7(t,e,n){if(n&&!n.code)throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");return new Intl.DateTimeFormat(n?[n.code,"en-US"]:void 0,{timeZone:e,timeZoneName:t})}function B7(t,e){var n=G7(e);return n.formatToParts?q7(n,t):Y7(n,t)}var H7={year:0,month:1,day:2,hour:3,minute:4,second:5};function q7(t,e){try{for(var n=t.formatToParts(e),r=[],i=0;i<n.length;i++){var o=H7[n[i].type];o>=0&&(r[o]=parseInt(n[i].value,10))}return r}catch(s){if(s instanceof RangeError)return[NaN];throw s}}function Y7(t,e){var n=t.format(e),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[r[3],r[1],r[2],r[4],r[5],r[6]]}var Ip={};function G7(t){if(!Ip[t]){var e=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n=e==="06/25/2014, 00:00:00"||e==="‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";Ip[t]=n?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return Ip[t]}function ly(t,e,n,r,i,o,s){var a=new Date(0);return a.setUTCFullYear(t,e,n),a.setUTCHours(r,i,o,s),a}var D_=36e5,K7=6e4,Sp={timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function af(t,e,n){var r,i;if(!t||(r=Sp.timezoneZ.exec(t),r))return 0;var o;if(r=Sp.timezoneHH.exec(t),r)return o=parseInt(r[1],10),O_(o)?-(o*D_):NaN;if(r=Sp.timezoneHHMM.exec(t),r){o=parseInt(r[2],10);var s=parseInt(r[3],10);return O_(o,s)?(i=Math.abs(o)*D_+s*K7,r[1]==="+"?-i:i):NaN}if(X7(t)){e=new Date(e||Date.now());var a=n?e:Q7(e),l=K0(a,t),d=n?l:Z7(e,l,t);return-d}return NaN}function Q7(t){return ly(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}function K0(t,e){var n=B7(t,e),r=ly(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime(),i=t.getTime(),o=i%1e3;return i-=o>=0?o:1e3+o,r-i}function Z7(t,e,n){var r=t.getTime(),i=r-e,o=K0(new Date(i),n);if(e===o)return e;i-=o-e;var s=K0(new Date(i),n);return o===s?o:Math.max(o,s)}function O_(t,e){return-23<=t&&t<=23&&(e==null||0<=e&&e<=59)}var M_={};function X7(t){if(M_[t])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:t}),M_[t]=!0,!0}catch{return!1}}var J7=60*1e3,eV={X:function(t,e,n,r){var i=Cp(r.timeZone,t);if(i===0)return"Z";switch(e){case"X":return N_(i);case"XXXX":case"XX":return Es(i);case"XXXXX":case"XXX":default:return Es(i,":")}},x:function(t,e,n,r){var i=Cp(r.timeZone,t);switch(e){case"x":return N_(i);case"xxxx":case"xx":return Es(i);case"xxxxx":case"xxx":default:return Es(i,":")}},O:function(t,e,n,r){var i=Cp(r.timeZone,t);switch(e){case"O":case"OO":case"OOO":return"GMT"+tV(i,":");case"OOOO":default:return"GMT"+Es(i,":")}},z:function(t,e,n,r){switch(e){case"z":case"zz":case"zzz":return j_("short",t,r);case"zzzz":default:return j_("long",t,r)}}};function Cp(t,e){var n=t?af(t,e,!0)/J7:e.getTimezoneOffset();if(Number.isNaN(n))throw new RangeError("Invalid time zone specified: "+t);return n}function nh(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}function Es(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=nh(Math.floor(i/60),2),s=nh(Math.floor(i%60),2);return r+o+n+s}function N_(t,e){if(t%60===0){var n=t>0?"-":"+";return n+nh(Math.abs(t)/60,2)}return Es(t,e)}function tV(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+nh(o,2)}var l6=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,Lp=36e5,V_=6e4,nV=2,Mt={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:l6};function rh(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(t===null)return new Date(NaN);var n=e||{},r=n.additionalDigits==null?nV:c7(n.additionalDigits);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]")return new Date(t.getTime());if(typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]")return new Date(t);if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var i=rV(t),o=iV(i.date,r),s=o.year,a=o.restDateString,l=oV(a,s);if(isNaN(l))return new Date(NaN);if(l){var d=l.getTime(),f=0,m;if(i.time&&(f=sV(i.time),isNaN(f)))return new Date(NaN);if(i.timeZone||n.timeZone){if(m=af(i.timeZone||n.timeZone,new Date(d+f)),isNaN(m))return new Date(NaN)}else m=b_(new Date(d+f)),m=b_(new Date(d+f+m));return new Date(d+f+m)}else return new Date(NaN)}function rV(t){var e={},n=Mt.dateTimePattern.exec(t),r;if(n?(e.date=n[1],r=n[3]):(n=Mt.datePattern.exec(t),n?(e.date=n[1],r=n[2]):(e.date=null,r=t)),r){var i=Mt.timeZone.exec(r);i?(e.time=r.replace(i[1],""),e.timeZone=i[1].trim()):e.time=r}return e}function iV(t,e){var n=Mt.YYY[e],r=Mt.YYYYY[e],i;if(i=Mt.YYYY.exec(t)||r.exec(t),i){var o=i[1];return{year:parseInt(o,10),restDateString:t.slice(o.length)}}if(i=Mt.YY.exec(t)||n.exec(t),i){var s=i[1];return{year:parseInt(s,10)*100,restDateString:t.slice(s.length)}}return{year:null}}function oV(t,e){if(e===null)return null;var n,r,i,o;if(t.length===0)return r=new Date(0),r.setUTCFullYear(e),r;if(n=Mt.MM.exec(t),n)return r=new Date(0),i=parseInt(n[1],10)-1,U_(e,i)?(r.setUTCFullYear(e,i),r):new Date(NaN);if(n=Mt.DDD.exec(t),n){r=new Date(0);var s=parseInt(n[1],10);return uV(e,s)?(r.setUTCFullYear(e,0,s),r):new Date(NaN)}if(n=Mt.MMDD.exec(t),n){r=new Date(0),i=parseInt(n[1],10)-1;var a=parseInt(n[2],10);return U_(e,i,a)?(r.setUTCFullYear(e,i,a),r):new Date(NaN)}if(n=Mt.Www.exec(t),n)return o=parseInt(n[1],10)-1,W_(e,o)?F_(e,o):new Date(NaN);if(n=Mt.WwwD.exec(t),n){o=parseInt(n[1],10)-1;var l=parseInt(n[2],10)-1;return W_(e,o,l)?F_(e,o,l):new Date(NaN)}return null}function sV(t){var e,n,r;if(e=Mt.HH.exec(t),e)return n=parseFloat(e[1].replace(",",".")),Ap(n)?n%24*Lp:NaN;if(e=Mt.HHMM.exec(t),e)return n=parseInt(e[1],10),r=parseFloat(e[2].replace(",",".")),Ap(n,r)?n%24*Lp+r*V_:NaN;if(e=Mt.HHMMSS.exec(t),e){n=parseInt(e[1],10),r=parseInt(e[2],10);var i=parseFloat(e[3].replace(",","."));return Ap(n,r,i)?n%24*Lp+r*V_+i*1e3:NaN}return null}function F_(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var i=r.getUTCDay()||7,o=e*7+n+1-i;return r.setUTCDate(r.getUTCDate()+o),r}var aV=[31,28,31,30,31,30,31,31,30,31,30,31],lV=[31,29,31,30,31,30,31,31,30,31,30,31];function u6(t){return t%400===0||t%4===0&&t%100!==0}function U_(t,e,n){if(e<0||e>11)return!1;if(n!=null){if(n<1)return!1;var r=u6(t);if(r&&n>lV[e]||!r&&n>aV[e])return!1}return!0}function uV(t,e){if(e<1)return!1;var n=u6(t);return!(n&&e>366||!n&&e>365)}function W_(t,e,n){return!(e<0||e>52||n!=null&&(n<0||n>6))}function Ap(t,e,n){return!(t!=null&&(t<0||t>=25)||e!=null&&(e<0||e>=60)||n!=null&&(n<0||n>=60))}var cV=/([xXOz]+)|''|'(''|[^'])+('|$)/g;function dV(t,e,n){var r=String(e),i=n||{},o=r.match(cV);if(o){var s=rh(i.originalDate||t,i);r=o.reduce(function(a,l){if(l[0]==="'")return a;var d=a.indexOf(l),f=a[d-1]==="'",m=a.replace(l,"'"+eV[l[0]](s,l,null,i)+"'");return f?m.substring(0,d-1)+m.substring(d+1):m},r)}return U7(t,r,i)}var Q0={exports:{}},Z0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o]);return r}t.exports=e.default})(Z0,Z0.exports);var hV=Z0.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(hV);function i(o){return(0,r.default)({},o)}t.exports=e.default})(Q0,Q0.exports);var fV=Q0.exports;const pV=cu(fV);function mV(t,e,n){var r=rh(t,n),i=af(e,r,!0),o=new Date(r.getTime()-i),s=new Date(0);return s.setFullYear(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()),s.setHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),s}function gV(t,e,n){if(typeof t=="string"&&!t.match(l6)){var r=pV(n);return r.timeZone=e,rh(t,r)}var i=rh(t,n),o=ly(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()).getTime(),s=af(e,new Date(o));return new Date(o+s)}const $_=N.table`
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
`,z_=N.div`
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
`,B_=N.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #666;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px dashed #ddd;
`,yV=({user:t,userData:e})=>{const[n,r]=D.useState(null),[i,o]=D.useState(!0),[s,a]=D.useState(null),{use24HourFormat:l}=oy(),d=(e==null?void 0:e.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila";D.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{if(o(!0),e&&e.schedule&&Array.isArray(e.schedule)&&e.schedule.length>0)console.log("Using schedule from userData prop:",e.schedule),r(e.schedule);else{const x=Ze(ke,"users",t.uid),C=await br(x);if(C.exists()){const w=C.data();if(w.schedule&&Array.isArray(w.schedule)&&w.schedule.length>0)console.log("Found user schedule in Firestore:",w.schedule),r(w.schedule);else if(w.scheduleId){const y=w.scheduleId,g=Ze(ke,"schedules",y),_=await br(g);_.exists()&&r(_.data())}else{const y=on(ke,"schedules"),g=bn(y,er("isDefault","==",!0)),_=await gn(g);_.empty||r(_.docs[0].data())}}}}catch(x){console.error("Error fetching schedule:",x),a("Failed to load schedule. Please try again later.")}finally{o(!1)}})()},[t,e]);const f=v=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][v],m=(v,x=null,C=d)=>{if(!v)return"N/A";try{if(!x||x===C){const[T,I]=v.split(":"),A=new Date;return A.setHours(parseInt(T,10)),A.setMinutes(parseInt(I,10)),A.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!l})}const[w,y]=v.split(":"),g=new Date;g.setHours(0,0,0,0);const _=new Date(g);_.setHours(parseInt(w,10),parseInt(y,10),0,0);const S=gV(_,x),b=mV(S,C);return dV(b,l?"HH:mm":"h:mm a",{timeZone:C})}catch(w){return console.error("Error formatting time:",w),v}},E=(v,x,C)=>{try{const[w,y]=v.split(":").map(Number),g=new Date;g.setHours(0,0,0,0);const _=new Date(g);_.setHours(w,y,0,0);const S=t9(_,x);return s7(S,"HH:mm")}catch(w){console.error("Error calculating end time:",w);let y=(parseInt(v.split(":")[0],10)+x)%24,g=v.split(":")[1];return`${y.toString().padStart(2,"0")}:${g}`}};return h.jsxs(gi,{children:[h.jsx(yi,{children:"My Schedule"}),h.jsx(vi,{children:i?h.jsx("p",{children:"Loading your schedule..."}):s?h.jsxs(B_,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx(qn,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]}):n?h.jsx("div",{children:Array.isArray(n)?h.jsxs(h.Fragment,{children:[h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.map((v,x)=>{const C=new Date,y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(v.dayOfWeek),g=C.getDay()===y,_=v.timeRegion||"Asia/Manila",S=m(v.timeIn,_,d),b=v.shiftDuration||8,M=E(v.timeIn,b),T=m(M,_,d);return h.jsxs(z_,{isToday:g,children:[h.jsxs("h3",{children:[h.jsx(qn,{weight:"fill",size:20,style:{color:g?"#1a73e8":"#666"}}),v.dayOfWeek]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx(Ns,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:S}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(f0,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx(Ns,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:T}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"0.75rem",backgroundColor:"#f9f9f9",borderRadius:"8px",fontSize:"0.9rem"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Duration"}),h.jsxs("div",{children:[v.shiftDuration," hours"]})]}),h.jsxs("div",{style:{textAlign:"right"},children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Time Zone"}),h.jsx("div",{style:{fontSize:"0.85rem"},children:d})]})]})]},x)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs($_,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.map((v,x)=>{const C=new Date,y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(v.dayOfWeek),g=C.getDay()===y,_=v.timeRegion||"Asia/Manila",S=m(v.timeIn,_,d),b=v.shiftDuration||8,M=E(v.timeIn,b),T=m(M,_,d);return h.jsxs("tr",{style:{backgroundColor:g?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:g?"600":"400",color:g?"#1a73e8":"inherit"},children:[v.dayOfWeek,g&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:S}),h.jsx("td",{children:T}),h.jsxs("td",{children:[v.shiftDuration," hours"]})]},x)})})]}),h.jsxs("div",{style:{marginTop:"1rem",fontSize:"0.85rem",color:"#666",textAlign:"right"},children:["All times shown in your local time zone: ",h.jsx("strong",{children:d})]})]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:{marginBottom:"1.5rem",padding:"1rem",backgroundColor:"#f9f9f9",borderRadius:"8px",borderLeft:"4px solid #4CAF50"},children:[h.jsxs("h3",{style:{margin:"0 0 0.5rem 0",display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(qn,{weight:"fill",size:20,style:{color:"#4CAF50"}}),n.name||"Standard Schedule"]}),h.jsx("p",{style:{margin:0,color:"#666"},children:"Your assigned work schedule"})]}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.shifts&&n.shifts.map((v,x)=>{const w=new Date().getDay()===v.day;return h.jsxs(z_,{isToday:w,children:[h.jsxs("h3",{children:[h.jsx(qn,{weight:"fill",size:20,style:{color:w?"#1a73e8":"#666"}}),f(v.day)]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx(Ns,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:m(v.timeIn)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(f0,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx(Ns,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:m(v.timeOut)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]})]},x)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs($_,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.shifts&&n.shifts.map((v,x)=>{const w=new Date().getDay()===v.day,y=v.timeIn.split(":").map(Number),g=v.timeOut.split(":").map(Number),_=y[0]+y[1]/60;let b=g[0]+g[1]/60-_;b<0&&(b+=24);const M=Math.round(b*10)/10;return h.jsxs("tr",{style:{backgroundColor:w?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:w?"600":"400",color:w?"#1a73e8":"inherit"},children:[f(v.day),w&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:m(v.timeIn)}),h.jsx("td",{children:m(v.timeOut)}),h.jsxs("td",{children:[M," hours"]})]},x)})})]})]})]})}):h.jsxs(B_,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx(qn,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]})})]})},vV=N.div`
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
`,kV=N.h3`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,gs=N.span`
  color: #333;
  word-break: break-word;
`,_V=({user:t,userData:e,loadingUserData:n})=>h.jsxs(gi,{children:[h.jsx(yi,{children:"User Profile"}),h.jsx(vi,{children:n?h.jsx("p",{children:"Loading user data..."}):h.jsx(h.Fragment,{children:h.jsxs(vV,{children:[h.jsxs(kV,{children:[h.jsx(Xd,{size:20,weight:"bold"}),"User Information"]}),h.jsxs(ps,{children:[h.jsxs(ms,{children:[h.jsx(rf,{size:18}),"Email:"]}),h.jsx(gs,{children:t==null?void 0:t.email})]}),h.jsxs(ps,{children:[h.jsxs(ms,{children:[h.jsx(ro,{size:18}),"Name:"]}),h.jsx(gs,{children:t==null?void 0:t.displayName})]}),h.jsxs(ps,{children:[h.jsxs(ms,{children:[h.jsx(ry,{size:18}),"User ID:"]}),h.jsx(gs,{children:t==null?void 0:t.uid})]}),h.jsxs(ps,{children:[h.jsxs(ms,{children:[h.jsx(ny,{size:18}),"Position:"]}),h.jsx(gs,{children:(e==null?void 0:e.position)||"Not specified"})]}),h.jsxs(ps,{children:[h.jsxs(ms,{children:[h.jsx(Xd,{size:18}),"Role:"]}),h.jsx(gs,{children:(e==null?void 0:e.role)||"Not specified"})]}),e&&h.jsxs(ps,{children:[h.jsxs(ms,{children:[h.jsx(qn,{size:18}),"Created At:"]}),h.jsx(gs,{children:(()=>{var r,i;try{return(r=e.createdAt)!=null&&r.seconds?new Date(e.createdAt.seconds*1e3).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):(i=e.createdAt)!=null&&i.toDate?e.createdAt.toDate().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):e.createdAt instanceof Date?e.createdAt.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):typeof e.createdAt=="string"?new Date(e.createdAt).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):`${new Date().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})} (Current)`}catch(o){return console.error("Error formatting timestamp:",o,e.createdAt),"April 26, 2025, 04:27 AM"}})()})]})]})})})]}),EV=N.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,wV=N.div`
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
`,xV=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,TV=N.h3`
  font-size: 1.1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,IV=N.span`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,SV=N.div`
  margin-bottom: 1.5rem;
`,Pp=N.div`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
`,Rp=N.span`
  font-weight: 500;
  width: 120px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
`,bp=N.span`
  color: #333;
`,CV=N.div`
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
`,LV=N(Ru)`
  background-color: #4caf50;
  color: white;
  
  &:hover {
    background-color: #43a047;
  }
`,AV=N(Ru)`
  background-color: #f44336;
  color: white;
  
  &:hover {
    background-color: #e53935;
  }
`,PV=N(Ru)`
  background-color: #2196f3;
  color: white;
  
  &:hover {
    background-color: #1e88e5;
  }
`,RV=N.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`,bV=N.div`
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
`,jV=N.div`
  background-color: white;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,DV=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,OV=N.h3`
  margin: 0;
  font-size: 1.2rem;
`,MV=N.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`,NV=N.form`
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
`,jp=N.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,VV=N.select`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,FV=N.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`,UV=N(Ru)`
  background-color: #6e8efb;
  color: white;
  
  &:hover {
    background-color: #5a7df9;
  }
`,WV=N(Ru)`
  background-color: #e0e0e0;
  color: #333;
  
  &:hover {
    background-color: #d5d5d5;
  }
`,$V=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #666;
`,zV=t=>{if(!t)return"N/A";try{let e;if(t!=null&&t.seconds)e=new Date(t.seconds*1e3);else if(t!=null&&t.toDate)e=t.toDate();else if(t instanceof Date)e=t;else if(typeof t=="string")e=new Date(t);else return"Invalid date";return e.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}catch(e){return console.error("Error formatting timestamp:",e),"Invalid date"}},BV=()=>{const[t,e]=D.useState([]),[n,r]=D.useState(!0),[i,o]=D.useState(null),[s,a]=D.useState({name:"",email:"",position:"",role:""}),[l,d]=D.useState(!1);D.useEffect(()=>{f()},[]);const f=async()=>{try{r(!0);const y=await pN();e(y)}catch(y){console.error("Error fetching registration requests:",y),H.error("Failed to load registration requests")}finally{r(!1)}},m=async y=>{try{d(!0),await gN(y),H.success(`Registration for ${y.name||y.email} approved`),f()}catch(g){console.error("Error approving registration:",g),H.error("Failed to approve registration")}finally{d(!1)}},E=async y=>{try{d(!0),await yN(y),H.success(`Registration for ${y.name||y.email} declined`),H.warning("Note: The user may still exist in Firebase Authentication. They will be blocked from accessing the system, but the account still exists."),f()}catch(g){console.error("Error declining registration:",g),H.error("Failed to decline registration")}finally{d(!1)}},v=y=>{o(y),a({name:y.name||"",email:y.email||"",position:y.position||"",role:y.role||"user"})},x=()=>{o(null)},C=y=>{const{name:g,value:_}=y.target;a(S=>({...S,[g]:_}))},w=async y=>{y.preventDefault();try{d(!0),await mN(i.id,{name:s.name,email:s.email,position:s.position,role:s.role}),H.success("Registration request updated"),o(null),f()}catch(g){console.error("Error updating registration request:",g),H.error("Failed to update registration request")}finally{d(!1)}};return n?h.jsxs(gi,{children:[h.jsx(yi,{children:"Registration Requests"}),h.jsx(vi,{children:h.jsx($V,{children:"Loading registration requests..."})})]}):h.jsxs(gi,{children:[h.jsx(yi,{children:"Registration Requests"}),h.jsxs(vi,{children:[h.jsx(EV,{children:t.length===0?h.jsx(RV,{children:h.jsx("p",{children:"No pending registration requests"})}):t.map(y=>h.jsxs(wV,{children:[h.jsxs(xV,{children:[h.jsxs(TV,{children:[h.jsx(ro,{size:18,weight:"bold"}),y.name||y.email]}),h.jsxs(IV,{children:[h.jsx(UI,{size:14}),zV(y.createdAt)]})]}),h.jsxs(SV,{children:[h.jsxs(Pp,{children:[h.jsxs(Rp,{children:[h.jsx(ro,{size:16}),"Email:"]}),h.jsx(bp,{children:y.email})]}),h.jsxs(Pp,{children:[h.jsxs(Rp,{children:[h.jsx(ny,{size:16}),"Position:"]}),h.jsx(bp,{children:y.position||"Not specified"})]}),h.jsxs(Pp,{children:[h.jsxs(Rp,{children:[h.jsx(ro,{size:16}),"Role:"]}),h.jsx(bp,{children:y.role||"user"})]})]}),h.jsxs(CV,{children:[h.jsxs(PV,{onClick:()=>v(y),disabled:l,children:[h.jsx(BI,{size:16}),"Edit"]}),h.jsxs(LV,{onClick:()=>m(y),disabled:l,children:[h.jsx(Hi,{size:16}),"Accept"]}),h.jsxs(AV,{onClick:()=>E(y),disabled:l,children:[h.jsx(YI,{size:16}),"Decline"]})]})]},y.id))}),i&&h.jsx(bV,{children:h.jsxs(jV,{children:[h.jsxs(DV,{children:[h.jsx(OV,{children:"Edit Registration Request"}),h.jsx(MV,{onClick:x,children:"×"})]}),h.jsxs(NV,{onSubmit:w,children:[h.jsxs(wc,{children:[h.jsx(xc,{htmlFor:"name",children:"Name"}),h.jsx(jp,{type:"text",id:"name",name:"name",value:s.name,onChange:C,placeholder:"Enter name"})]}),h.jsxs(wc,{children:[h.jsx(xc,{htmlFor:"email",children:"Email"}),h.jsx(jp,{type:"email",id:"email",name:"email",value:s.email,onChange:C,placeholder:"Enter email",required:!0})]}),h.jsxs(wc,{children:[h.jsx(xc,{htmlFor:"position",children:"Position"}),h.jsx(jp,{type:"text",id:"position",name:"position",value:s.position,onChange:C,placeholder:"Enter position"})]}),h.jsxs(wc,{children:[h.jsx(xc,{htmlFor:"role",children:"Role"}),h.jsxs(VV,{id:"role",name:"role",value:s.role,onChange:C,children:[h.jsx("option",{value:"user",children:"User"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),h.jsxs(FV,{children:[h.jsx(WV,{type:"button",onClick:x,children:"Cancel"}),h.jsx(UV,{type:"submit",disabled:l,children:"Save Changes"})]})]})]})})]})]})},HV=N.div`
  padding: 2rem;
`,qV=N.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,YV=N.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,GV=N.thead`
  background-color: #f5f5f5;
`,Dp=N.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`,Vi=N.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`,Br=N.td`
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
`,KV=N.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.role){case"admin":return"#800000";case"superadmin":return"#000000";default:return"#555555"}}};
  color: white;
`,QV=N.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.status){case"active":return"#4caf50";case"inactive":return"#f44336";case"pending":return"#ff9800";default:return"#9e9e9e"}}};
  color: white;
`,ZV=N.input`
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
`,Op=N.div`
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
`,Mp=N.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,Np=N.h3`
  margin-top: 0;
  color: #333;
`,XV=N.p`
  margin-bottom: 1.5rem;
  color: #666;
`,Vp=N.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,dr=N.button`
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
`,Wn=N.div`
  margin-bottom: 1rem;
`,JV=N.div`
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
`,$n=N.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,Fi=N.input`
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
`,H_=N.select`
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
`,eF=N.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,tF=N.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,nF=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,rF=N.h4`
  margin: 0;
  color: #333;
`,iF=N.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;N.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;function oF(){const[t,e]=D.useState([]),[n,r]=D.useState(!0),[i,o]=D.useState(""),[s,a]=D.useState(!1),[l,d]=D.useState(null),[f,m]=D.useState(!1),[E,v]=D.useState(!1),[x,C]=D.useState(null),[w,y]=D.useState([]),[g,_]=D.useState({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),[S,b]=D.useState(null),[M,T]=D.useState(!1),[I,A]=D.useState({firstName:"",lastName:"",middleInitial:"",email:"",position:"",role:"member"}),R=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],j=F=>!F||!Array.isArray(F)||F.length===0?0:F.reduce((le,ue)=>le+(parseInt(ue.shiftDuration,10)||0),0);D.useEffect(()=>{O()},[]);const O=async()=>{try{r(!0);const F=on(ke,"users"),le=(await gn(F)).docs.map(ue=>{const de=ue.data();return{id:ue.id,userId:de.userId||ue.id,...de,schedule:de.schedule||[]}});e(le),r(!1)}catch(F){console.error("Error fetching users:",F),H.error("Failed to load users"),r(!1)}},P=F=>{d(F),a(!0)},te=F=>{let ae="",le="",ue="";if(F.name){const de=F.name.trim().split(" ");de.length===1?ae=de[0]:de.length===2?(ae=de[0],le=de[1]):de.length>=3&&(ae=de[0],de[1].length===2&&de[1].endsWith(".")?(ue=de[1].charAt(0),le=de.slice(2).join(" ")):(ue=de[1],le=de.slice(2).join(" ")))}A({firstName:ae,lastName:le,middleInitial:ue,email:F.email||"",position:F.position||"",role:F.role||"member"}),C(F),v(!0)},J=async()=>{if(l)try{const F=l.userId||l.id;await B1(Ze(ke,"users",F)),e(t.filter(ae=>!(ae.userId===l.userId||ae.id===l.id))),H.success(`User ${l.name||l.email} has been deleted`),a(!1),d(null)}catch(F){console.error("Error deleting user:",F),H.error(`Failed to delete user: ${F.message}`)}},he=()=>{a(!1),d(null)},fe=async(F,ae)=>{const le=ae==="active"?"inactive":"active";try{const ue=F.userId||F.id,de=Ze(ke,"users",ue);await Cl(de,{status:le}),e(t.map(Se=>Se.userId&&Se.userId===F.userId||Se.id===F.id?{...Se,status:le}:Se)),H.success(`User status updated to ${le}`)}catch(ue){console.error("Error updating user status:",ue),H.error(`Failed to update user status: ${ue.message}`)}},z=F=>{C(F),y(F.schedule||[]),m(!0),T(!1),b(null)},Y=async()=>{if(x)try{let F=I.firstName;if(I.middleInitial&&(F+=` ${I.middleInitial}.`),I.lastName&&(F+=` ${I.lastName}`),!F.trim()||!I.email.trim()){H.error("Name and email are required");return}const ae=x.userId||x.id,le=Ze(ke,"users",ae);await Cl(le,{name:F.trim(),email:I.email.trim(),position:I.position.trim(),role:I.role}),e(t.map(ue=>ue.userId&&ue.userId===x.userId||ue.id===x.id?{...ue,name:F.trim(),email:I.email.trim(),position:I.position.trim(),role:I.role}:ue)),H.success("User information updated successfully"),v(!1)}catch(F){console.error("Error updating user:",F),H.error(`Failed to update user: ${F.message}`)}},Z=()=>{if(g.selectedDays.length===0){H.warning("Please select at least one day of the week");return}const F=new Date,[ae,le]=g.timeIn.split(":").map(Number);F.setHours(ae,le,0,0);const ue=g.selectedDays.map(Se=>({id:`${Date.now()}-${Se}`,dayOfWeek:Se,timeIn:g.timeIn,timeRegion:g.timeRegion,shiftDuration:parseInt(g.shiftDuration,10),utcTimeIn:F.toISOString()})),de=[...w,...ue];y(de),H.success(`Added schedule for ${g.selectedDays.length} day(s)`),_({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},se=async()=>{if(x)try{const F=x.userId||x.id;console.log("Updating schedule for user with document ID:",F);const ae=Ze(ke,"users",F);await Cl(ae,{schedule:w}),e(t.map(le=>le.userId&&le.userId===x.userId||le.id===x.id?{...le,schedule:w}:le)),H.success("Schedule updated successfully"),m(!1)}catch(F){console.error("Error updating schedule:",F),H.error(`Failed to update schedule: ${F.message}`)}},re=F=>{const ae=w.filter(le=>le.id!==F);y(ae)},ye=F=>{b(F),T(!0),_({selectedDays:[F.dayOfWeek],timeIn:F.timeIn,timeRegion:F.timeRegion,shiftDuration:F.shiftDuration.toString()})},Ye=()=>{if(!S)return;if(g.selectedDays.length===0){H.warning("Please select at least one day of the week");return}const F=new Date,[ae,le]=g.timeIn.split(":").map(Number);F.setHours(ae,le,0,0);let ue=w.filter(Se=>Se.id!==S.id);const de=g.selectedDays.map(Se=>({id:Se===S.dayOfWeek?S.id:`${Date.now()}-${Se}`,dayOfWeek:Se,timeIn:g.timeIn,timeRegion:g.timeRegion,shiftDuration:parseInt(g.shiftDuration,10),utcTimeIn:F.toISOString()}));ue=[...ue,...de],y(ue),H.success(`Updated schedule for ${g.selectedDays.length} day(s)`),_({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),T(!1),b(null)},Be=()=>{T(!1),b(null),_({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},Ge=t.filter(F=>{const ae=i.toLowerCase();return F.name&&F.name.toLowerCase().includes(ae)||F.email&&F.email.toLowerCase().includes(ae)||F.role&&F.role.toLowerCase().includes(ae)||F.position&&F.position.toLowerCase().includes(ae)});return h.jsxs(HV,{children:[h.jsxs(qV,{children:[h.jsx(uu,{size:24,weight:"bold"}),"User Management"]}),h.jsx(ZV,{type:"text",placeholder:"Search users...",value:i,onChange:F=>o(F.target.value)}),n?h.jsx("p",{children:"Loading users..."}):h.jsxs(YV,{children:[h.jsx(GV,{children:h.jsxs(Dp,{children:[h.jsx(Vi,{children:"Name"}),h.jsx(Vi,{children:"Email"}),h.jsx(Vi,{children:"Position"}),h.jsx(Vi,{children:"Role"}),h.jsx(Vi,{children:"Status"}),h.jsx(Vi,{children:"Shifts"}),h.jsx(Vi,{children:"Actions"})]})}),h.jsx("tbody",{children:Ge.length>0?Ge.map(F=>h.jsxs(Dp,{children:[h.jsx(Br,{children:F.name||"N/A"}),h.jsx(Br,{children:F.email}),h.jsx(Br,{children:F.position||"N/A"}),h.jsx(Br,{children:h.jsx(KV,{role:F.role,children:F.role||"member"})}),h.jsx(Br,{children:h.jsx(QV,{status:F.status||"active",children:F.status||"active"})}),h.jsx(Br,{children:F.schedule&&Array.isArray(F.schedule)?h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx("strong",{children:F.schedule.length})," shifts"]}),h.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[j(F.schedule)," total hours"]})]}):"No shifts"}),h.jsxs(Br,{children:[h.jsx(ys,{color:"#000000",onClick:()=>z(F),title:"Manage Schedule",children:h.jsx(qn,{size:20})}),h.jsx(ys,{color:"#1a73e8",onClick:()=>te(F),title:"Edit User",children:h.jsx(p0,{size:20})}),h.jsx(ys,{color:F.status==="active"?"#f44336":"#4caf50",onClick:()=>fe(F,F.status||"active"),title:F.status==="active"?"Deactivate user":"Activate user",children:F.status==="active"?h.jsx(qI,{size:20}):h.jsx(VI,{size:20})}),h.jsx(ys,{color:"#f44336",onClick:()=>P(F),title:"Delete user",children:h.jsx(m0,{size:20})})]})]},F.id)):h.jsx(Dp,{children:h.jsx(Br,{colSpan:6,style:{textAlign:"center"},children:"No users found"})})})]}),s&&h.jsx(Op,{children:h.jsxs(Mp,{children:[h.jsx(Np,{children:"Confirm Deletion"}),h.jsxs(XV,{children:["Are you sure you want to delete the user ",(l==null?void 0:l.name)||(l==null?void 0:l.email),"? This action cannot be undone."]}),h.jsxs(Vp,{children:[h.jsx(dr,{onClick:he,children:"Cancel"}),h.jsx(dr,{primary:!0,onClick:J,children:"Delete"})]})]})}),E&&x&&h.jsx(Op,{children:h.jsxs(Mp,{style:{maxWidth:"500px",width:"100%"},children:[h.jsx(Np,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Xd,{size:24}),"Edit User: ",x.name||x.email]})}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(Wn,{children:[h.jsx($n,{children:"First Name"}),h.jsx(Fi,{type:"text",value:I.firstName,onChange:F=>A({...I,firstName:F.target.value}),placeholder:"First Name"})]}),h.jsxs(Wn,{children:[h.jsx($n,{children:"Middle Initial"}),h.jsx(Fi,{type:"text",value:I.middleInitial,onChange:F=>A({...I,middleInitial:F.target.value}),placeholder:"Middle Initial",maxLength:1}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Just the first letter, without period"})]}),h.jsxs(Wn,{children:[h.jsx($n,{children:"Last Name"}),h.jsx(Fi,{type:"text",value:I.lastName,onChange:F=>A({...I,lastName:F.target.value}),placeholder:"Last Name"})]}),h.jsxs(Wn,{children:[h.jsx($n,{children:"Email"}),h.jsx(Fi,{type:"email",value:I.email,onChange:F=>A({...I,email:F.target.value}),placeholder:"Email Address"})]}),h.jsxs(Wn,{children:[h.jsx($n,{children:"Position"}),h.jsx(Fi,{type:"text",value:I.position,onChange:F=>A({...I,position:F.target.value}),placeholder:"Position"})]}),h.jsxs(Wn,{children:[h.jsx($n,{children:"Role"}),h.jsxs(H_,{value:I.role,onChange:F=>A({...I,role:F.target.value}),children:[h.jsx("option",{value:"member",children:"Member"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]})]}),h.jsxs(Vp,{children:[h.jsx(dr,{onClick:()=>v(!1),children:"Cancel"}),h.jsx(dr,{primary:!0,onClick:Y,children:"Save Changes"})]})]})}),f&&x&&h.jsx(Op,{children:h.jsxs(Mp,{style:{maxWidth:"600px",width:"100%"},children:[h.jsx(Np,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(qn,{size:24}),"Manage Schedule for ",x.name||x.email]})}),h.jsx("div",{style:{marginBottom:"1rem",background:"#f5f9ff",padding:"0.75rem",borderRadius:"6px"},children:h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Total Shifts:"})," ",w.length]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Total Hours:"})," ",j(w)," hours/week"]})]})}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Current Schedule"}),w.length>0?h.jsx(eF,{children:w.map(F=>h.jsxs(tF,{children:[h.jsxs(nF,{children:[h.jsx(rF,{children:F.dayOfWeek}),h.jsxs("div",{children:[h.jsx(ys,{color:"#000000",onClick:()=>ye(F),title:"Edit schedule",style:{marginRight:"4px"},children:h.jsx(p0,{size:16})}),h.jsx(ys,{color:"#f44336",onClick:()=>re(F.id),title:"Delete schedule",children:h.jsx(m0,{size:16})})]})]}),h.jsxs(iF,{children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Time In:"})," ",F.timeIn]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Region:"})," ",F.timeRegion]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Duration:"})," ",F.shiftDuration," hours"]})]})]},F.id))}):h.jsx("p",{children:"No schedules found. Add a new schedule below."})]}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:M?"Edit Schedule":"Add New Schedule"}),h.jsxs(Wn,{children:[h.jsx($n,{children:"Days of Week (select multiple)"}),h.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:R.map(F=>h.jsxs(JV,{children:[h.jsx("input",{type:"checkbox",id:`day-${F}`,checked:g.selectedDays.includes(F),onChange:()=>{const ae=g.selectedDays.includes(F)?g.selectedDays.filter(le=>le!==F):[...g.selectedDays,F];_({...g,selectedDays:ae})}}),h.jsx("label",{htmlFor:`day-${F}`,children:F})]},F))})]}),h.jsxs(Wn,{children:[h.jsx($n,{children:"Time In"}),h.jsx(Fi,{type:"time",value:g.timeIn,onChange:F=>_({...g,timeIn:F.target.value})})]}),h.jsxs(Wn,{children:[h.jsx($n,{children:"Time Region"}),h.jsxs(H_,{value:g.timeRegion,onChange:F=>_({...g,timeRegion:F.target.value}),children:[h.jsxs("optgroup",{label:"Asia & Pacific",children:[h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT)"}),h.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore (SGT)"}),h.jsx("option",{value:"Asia/Tokyo",children:"Asia/Tokyo (JST)"}),h.jsx("option",{value:"Australia/Sydney",children:"Australia/Sydney (AEST/AEDT)"})]}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific)"}),h.jsx("option",{value:"America/Anchorage",children:"America/Anchorage (Alaska)"}),h.jsx("option",{value:"America/Adak",children:"America/Adak (Hawaii-Aleutian)"}),h.jsx("option",{value:"Pacific/Honolulu",children:"Pacific/Honolulu (Hawaii)"}),h.jsx("option",{value:"America/Phoenix",children:"America/Phoenix (Arizona)"}),h.jsx("option",{value:"America/Toronto",children:"America/Toronto (Eastern Canada)"}),h.jsx("option",{value:"America/Vancouver",children:"America/Vancouver (Pacific Canada)"})]}),h.jsxs("optgroup",{label:"Europe & Africa",children:[h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST)"}),h.jsx("option",{value:"Europe/Paris",children:"Europe/Paris (CET/CEST)"}),h.jsx("option",{value:"Europe/Berlin",children:"Europe/Berlin (CET/CEST)"}),h.jsx("option",{value:"Europe/Moscow",children:"Europe/Moscow (MSK)"})]})]})]}),h.jsxs(Wn,{children:[h.jsx($n,{children:"Shift Duration (hours)"}),h.jsx(Fi,{type:"number",min:"1",max:"24",value:g.shiftDuration,onChange:F=>_({...g,shiftDuration:F.target.value})})]}),h.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:M?h.jsxs(h.Fragment,{children:[h.jsx(dr,{primary:!0,onClick:Ye,children:"Update Schedule"}),h.jsx(dr,{onClick:Be,children:"Cancel Edit"})]}):h.jsx(dr,{primary:!0,onClick:Z,children:"Add Schedule"})})]}),h.jsxs(Vp,{children:[h.jsx(dr,{onClick:()=>m(!1),children:"Cancel"}),h.jsx(dr,{primary:!0,onClick:se,children:"Save Changes"})]})]})})]})}N.div`
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
`;const c6=N.button`
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
`;N(c6)`
  background-color: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #eee;
  }
`;N(c6)`
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

`;const sF=N.div`
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
`,aF=N.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 400px;
  padding: 1.5rem;
`,lF=N.h3`
  color: #333;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
`,uF=N.div`
  margin-bottom: 1.5rem;
`,cF=N.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`,d6=N.button`
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
`,dF=N(d6)`
  background-color: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #eee;
  }
`,hF=N(d6)`
  background-color: #4caf50;
  color: white;
  border: 1px solid #43a047;
  
  &:hover {
    background-color: #43a047;
  }
`,fF=N.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`,pF=N.textarea`
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
`;function mF(){const[t,e]=D.useState(null),[n,r]=D.useState(null),[i,o]=D.useState(null),[s,a]=D.useState(!1),[l,d]=D.useState(null),[f,m]=D.useState(!1),E=rr(),{currentUser:v}=Mr(),[x,C]=D.useState(!1),[w,y]=D.useState(null),[g,_]=D.useState("");D.useEffect(()=>{if(v){const R={uid:v.uid,email:v.email,displayName:v.displayName||v.email.split("@")[0]};e(R),b(v.uid)}},[v]),D.useEffect(()=>{t!=null&&t.uid&&S()},[t]);const S=async()=>{try{const R=on(ke,"attendance");try{const j=bn(R,er("userId","==",t.uid),$1("timestamp","desc"),h5(1)),O=await gn(j);if(O.empty)r(null),o(null);else{const P=O.docs[0].data();o(P),r(P.type)}}catch(j){if(j.message&&j.message.includes("index is currently building")){console.log("Index is still building, using fallback method");const O=bn(R,er("userId","==",t.uid)),P=await gn(O);if(P.empty)r(null),o(null);else{let te=null,J=new Date(0);P.forEach(he=>{var Y;const fe=he.data(),z=((Y=fe.timestamp)==null?void 0:Y.toDate())||new Date(0);z>J&&(J=z,te=fe)}),te?(o(te),r(te.type)):(r(null),o(null))}H.info("System is updating. Some features may be temporarily limited.",{autoClose:5e3,hideProgressBar:!1})}else throw j}}catch(R){console.error("Error fetching attendance status:",R),R.message&&R.message.includes("index")?H.warning("System is updating attendance records. Please try again in a few minutes."):H.error("Unable to fetch your attendance status. Please refresh the page.")}},b=async R=>{if(R)try{m(!0);try{const P=bn(on(ke,"registration_requests"),er("userId","==",R));if(!(await gn(P)).empty){H.info("Your registration request is pending approval. You will be notified when approved."),await Lt.signOut(),E("/login");return}}catch(P){console.error("Error checking pending status:",P)}const j=Ze(ke,"users",R),O=await br(j);if(O.exists()){const P=O.data();d(P)}else console.log("No user data found in Firestore"),H.error("Your account is not properly set up. Please contact an administrator."),await Lt.signOut(),E("/login")}catch(j){console.error("Error fetching user data:",j),H.error("Error loading user data. Please try again later.")}finally{m(!1)}},M=async(R,j)=>{if(R==="Out")return"Complete";try{const O=await br(Ze(ke,"users",j));if(!O.exists())return console.warn("User document not found when determining status"),"On Time";const te=O.data().schedule||[],J=new Date,he=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][J.getDay()],fe=te&&Array.isArray(te)?te.find(re=>re.dayOfWeek===he):null;if(!fe)return console.log("No schedule found for today:",he),"On Time";console.log("Found schedule for today:",fe);const[z,Y]=fe.timeIn.split(":").map(Number),Z=new Date;Z.setHours(z,Y,0,0);const se=Math.round((J-Z)/(1e3*60));return console.log("Time difference in minutes:",se),se<-15?"Early":se<=15?"On Time":"Late"}catch(O){return console.error("Error determining status:",O),"On Time"}},T=async R=>{if(t){a(!0);try{const j=rt.now(),O=await M(R,t.uid),P={userId:t.uid,email:t.email,name:t.displayName,type:R,status:O,timestamp:j,notes:""};_(""),y(P),C(!0)}catch(j){console.error("Error preparing time in/out:",j),H.error("Failed to prepare time in/out. Please try again.")}finally{a(!1)}}},I=async()=>{if(w){a(!0);try{const{status:R,...j}=w;j.notes=g;const O=await M8(on(ke,"attendance"),j);H.success(`Time ${w.type} recorded successfully!`),r(w.type);const P={...w,notes:g};o(P),C(!1),y(null),_(""),console.log(`Time ${w.type} recorded with ID: ${O.id}`)}catch(R){console.error(`Error recording time ${w.type}:`,R),H.error(`Failed to record time ${w.type}`)}finally{a(!1)}}},A=()=>{C(!1),y(null),_("")};return h.jsxs(h.Fragment,{children:[h.jsx(Au,{user:t,activeTab:"home",attendanceStatus:n,loading:s,handleTimeInOut:T,lastRecord:i,isSuperAdmin:(l==null?void 0:l.role)==="super_admin",userData:l,setUserData:d,children:h.jsx(QN,{attendanceStatus:n,lastRecord:i})}),x&&w&&h.jsx(sF,{children:h.jsxs(aF,{children:[h.jsxs(lF,{children:["Confirm Time ",w.type,w.status&&h.jsx(fF,{status:w.status,children:w.status})]}),h.jsxs(uF,{children:[h.jsxs("p",{children:["You are about to record your time ",w.type.toLowerCase(),"."]}),h.jsx("p",{children:"Would you like to add any notes?"}),h.jsx(pF,{placeholder:"Optional notes...",value:g,onChange:R=>_(R.target.value)})]}),h.jsxs(cF,{children:[h.jsx(dF,{onClick:A,children:"Cancel"}),h.jsx(hF,{onClick:I,disabled:s,children:s?"Processing...":"Confirm"})]})]})})]})}function gF(){const[t,e]=D.useState(null),[n,r]=D.useState(null),[i,o]=D.useState(null),[s,a]=D.useState(!1),[l,d]=D.useState(null),[f,m]=D.useState(!1),E=rr(),{currentUser:v}=Mr();D.useEffect(()=>{if(v){const C={uid:v.uid,email:v.email,displayName:v.displayName||v.email.split("@")[0]};e(C),x(v.uid)}},[v]);const x=async C=>{if(C)try{m(!0);try{const g=bn(on(ke,"registration_requests"),er("userId","==",C));if(!(await gn(g)).empty){H.info("Your registration request is pending approval. You will be notified when approved."),await Lt.signOut(),E("/");return}}catch(g){console.error("Error checking pending status:",g)}const w=Ze(ke,"users",C),y=await br(w);if(y.exists()){const g=y.data();d(g)}else console.log("No user data found in Firestore"),H.error("Your account is not properly set up. Please contact an administrator."),await Lt.signOut(),E("/")}catch(w){console.error("Error fetching user data:",w),H.error("Error loading user data. Please try again later.")}finally{m(!1)}};return h.jsx(Au,{user:t,activeTab:"schedule",attendanceStatus:n,loading:s,lastRecord:i,isSuperAdmin:(l==null?void 0:l.role)==="super_admin",userData:l,setUserData:d,children:h.jsx(yV,{user:t,userData:l})})}function yF(){const[t,e]=D.useState(null),[n,r]=D.useState(null),[i,o]=D.useState(null),[s,a]=D.useState(!1),[l,d]=D.useState(null),[f,m]=D.useState(!1),E=rr(),{currentUser:v}=Mr();D.useEffect(()=>{if(v){const C={uid:v.uid,email:v.email,displayName:v.displayName||v.email.split("@")[0]};e(C),x(v.uid)}},[v]);const x=async C=>{if(C)try{m(!0);try{const g=bn(on(ke,"registration_requests"),er("userId","==",C));if(!(await gn(g)).empty){H.info("Your registration request is pending approval. You will be notified when approved."),await Lt.signOut(),E("/");return}}catch(g){console.error("Error checking pending status:",g)}const w=Ze(ke,"users",C),y=await br(w);if(y.exists()){const g=y.data();d(g)}else console.log("No user data found in Firestore"),H.error("Your account is not properly set up. Please contact an administrator."),await Lt.signOut(),E("/")}catch(w){console.error("Error fetching user data:",w),H.error("Error loading user data. Please try again later.")}finally{m(!1)}};return h.jsx(Au,{user:t,activeTab:"attendance",attendanceStatus:n,loading:s,lastRecord:i,isSuperAdmin:(l==null?void 0:l.role)==="super_admin",userData:l,setUserData:d,children:h.jsx(JN,{user:t})})}function vF(){const[t,e]=D.useState(null),[n,r]=D.useState(null),[i,o]=D.useState(null),[s,a]=D.useState(!1),[l,d]=D.useState(null),[f,m]=D.useState(!1),E=rr(),{currentUser:v}=Mr();D.useEffect(()=>{if(v){const C={uid:v.uid,email:v.email,displayName:v.displayName||v.email.split("@")[0]};e(C),x(v.uid)}},[v]);const x=async C=>{if(C)try{m(!0);try{const g=bn(on(ke,"registration_requests"),er("userId","==",C));if(!(await gn(g)).empty){H.info("Your registration request is pending approval. You will be notified when approved."),await Lt.signOut(),E("/");return}}catch(g){console.error("Error checking pending status:",g)}const w=Ze(ke,"users",C),y=await br(w);if(y.exists()){const g=y.data();d(g)}else console.log("No user data found in Firestore"),H.error("Your account is not properly set up. Please contact an administrator."),await Lt.signOut(),E("/")}catch(w){console.error("Error fetching user data:",w),H.error("Error loading user data. Please try again later.")}finally{m(!1)}};return h.jsx(Au,{user:t,activeTab:"profile",attendanceStatus:n,loading:s,lastRecord:i,isSuperAdmin:(l==null?void 0:l.role)==="super_admin",userData:l,setUserData:d,children:h.jsx(_V,{user:t,userData:l,loadingUserData:f})})}const kF=N.div`
  padding: 1rem;
`,_F=N.div`
  margin-bottom: 2rem;
`,EF=N.h1`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: #333;
`,wF=N.p`
  color: #666;
  font-size: 1rem;
`;function xF(){const[t,e]=D.useState(null),[n,r]=D.useState(null),[i,o]=D.useState(null),[s,a]=D.useState(!1),[l,d]=D.useState(null),[f,m]=D.useState(!1),E=rr(),{currentUser:v}=Mr();D.useEffect(()=>{if(v){const C={uid:v.uid,email:v.email,displayName:v.displayName||v.email.split("@")[0]};e(C),x(v.uid)}},[v]);const x=async C=>{if(C)try{m(!0);const w=Ze(ke,"users",C),y=await br(w);if(y.exists()){const g=y.data();if(d(g),g.role!=="super_admin"){H.error("You do not have permission to access this page"),E("/home");return}}else console.log("No user data found in Firestore"),H.error("Your account is not properly set up. Please contact an administrator."),await Lt.signOut(),E("/")}catch(w){console.error("Error fetching user data:",w),H.error("Error loading user data. Please try again later.")}finally{m(!1)}};return h.jsx(Au,{user:t,activeTab:"admin",attendanceStatus:n,loading:s,lastRecord:i,isSuperAdmin:(l==null?void 0:l.role)==="super_admin",userData:l,setUserData:d,children:(l==null?void 0:l.role)==="super_admin"?h.jsxs(kF,{children:[h.jsxs(_F,{children:[h.jsx(EF,{children:"Administration Panel"}),h.jsx(wF,{children:"Manage users, review registration requests, and configure system settings."})]}),h.jsx(oL,{})]}):h.jsx("div",{children:"You do not have permission to access this page."})})}const TF=N.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
`;function IF(){return h.jsxs("div",{children:[h.jsx(TF,{children:"Registration Requests"}),h.jsx(BV,{})]})}const SF=N.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
`;function CF(){return h.jsxs("div",{children:[h.jsx(SF,{children:"User Management"}),h.jsx(oF,{})]})}const LF=N.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,AF=N(Qg)`
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
`,PF=N.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #800000;
`,RF=N.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #333;
`,bF=N.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`,jF=N.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function DF(){const t=[{title:"Registration Requests",description:"Review and approve new user registration requests",icon:h.jsx(of,{size:24}),link:"/admin/registration-requests"},{title:"User Management",description:"Manage users, roles, and permissions",icon:h.jsx(uu,{size:24}),link:"/admin/user-management"},{title:"System Settings",description:"Configure system-wide settings and preferences",icon:h.jsx(WI,{size:24}),link:"/admin/settings"},{title:"Reports & Analytics",description:"View attendance reports and analytics",icon:h.jsx(NI,{size:24}),link:"/admin/reports"}];return h.jsx(LF,{children:t.map((e,n)=>h.jsxs(AF,{to:e.link,children:[h.jsx(PF,{children:h.jsx(jF,{children:e.icon})}),h.jsx(RF,{children:e.title}),h.jsx(bF,{children:e.description})]},n))})}const el=({children:t})=>{const{currentUser:e,loading:n}=Mr();return n?h.jsx(h6,{children:"Loading..."}):e?t:h.jsx(Ds,{to:"/",replace:!0})},Fp=({children:t})=>{const{currentUser:e,loading:n}=Mr();return n?h.jsx(h6,{children:"Loading..."}):e?t:h.jsx(Ds,{to:"/",replace:!0})},h6=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #6e8efb;
  background-color: #f5f5f5;
`;function OF(){return h.jsx(h.Fragment,{children:h.jsx(fO,{children:h.jsxs(LN,{children:[h.jsx(pL,{children:h.jsxs(aL,{children:[h.jsx(Dt,{path:"/",element:h.jsx(hN,{})}),h.jsx(Dt,{path:"/register",element:h.jsx(CN,{})}),h.jsx(Dt,{path:"/dashboard",element:h.jsx(el,{children:h.jsx(Ds,{to:"/home",replace:!0})})}),h.jsx(Dt,{path:"/home",element:h.jsx(el,{children:h.jsx(mF,{})})}),h.jsx(Dt,{path:"/schedule",element:h.jsx(el,{children:h.jsx(gF,{})})}),h.jsx(Dt,{path:"/attendance",element:h.jsx(el,{children:h.jsx(yF,{})})}),h.jsx(Dt,{path:"/profile",element:h.jsx(el,{children:h.jsx(vF,{})})}),h.jsxs(Dt,{path:"/admin",element:h.jsx(Fp,{children:h.jsx(xF,{})}),children:[h.jsx(Dt,{index:!0,element:h.jsx(DF,{})}),h.jsx(Dt,{path:"registration-requests",element:h.jsx(IF,{})}),h.jsx(Dt,{path:"user-management",element:h.jsx(CF,{})})]}),h.jsx(Dt,{path:"/registration-requests",element:h.jsx(Fp,{children:h.jsx(Ds,{to:"/admin/registration-requests",replace:!0})})}),h.jsx(Dt,{path:"/user-management",element:h.jsx(Fp,{children:h.jsx(Ds,{to:"/admin/user-management",replace:!0})})}),h.jsx(Dt,{path:"*",element:h.jsx(Ds,{to:"/",replace:!0})})]})}),h.jsx(h0,{position:"top-right",autoClose:3e3})]})})})}ix(document.getElementById("root")).render(h.jsx(D.StrictMode,{children:h.jsx(OF,{})}));
