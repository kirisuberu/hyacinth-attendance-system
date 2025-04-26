function E8(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function w8(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var K_={exports:{}},xd={},Q_={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ol=Symbol.for("react.element"),T8=Symbol.for("react.portal"),I8=Symbol.for("react.fragment"),x8=Symbol.for("react.strict_mode"),S8=Symbol.for("react.profiler"),A8=Symbol.for("react.provider"),C8=Symbol.for("react.context"),R8=Symbol.for("react.forward_ref"),P8=Symbol.for("react.suspense"),L8=Symbol.for("react.memo"),b8=Symbol.for("react.lazy"),S1=Symbol.iterator;function j8(t){return t===null||typeof t!="object"?null:(t=S1&&t[S1]||t["@@iterator"],typeof t=="function"?t:null)}var Y_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z_=Object.assign,X_={};function Wo(t,e,n){this.props=t,this.context=e,this.refs=X_,this.updater=n||Y_}Wo.prototype.isReactComponent={};Wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function J_(){}J_.prototype=Wo.prototype;function Tm(t,e,n){this.props=t,this.context=e,this.refs=X_,this.updater=n||Y_}var Im=Tm.prototype=new J_;Im.constructor=Tm;Z_(Im,Wo.prototype);Im.isPureReactComponent=!0;var A1=Array.isArray,ek=Object.prototype.hasOwnProperty,xm={current:null},tk={key:!0,ref:!0,__self:!0,__source:!0};function nk(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ek.call(e,r)&&!tk.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ol,type:t,key:s,ref:o,props:i,_owner:xm.current}}function N8(t,e){return{$$typeof:Ol,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ol}function O8(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var C1=/\/+/g;function Bh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?O8(""+t.key):e.toString(36)}function Yu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ol:case T8:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Bh(o,0):r,A1(i)?(n="",t!=null&&(n=t.replace(C1,"$&/")+"/"),Yu(i,e,n,"",function(d){return d})):i!=null&&(Sm(i)&&(i=N8(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(C1,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",A1(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Bh(s,l);o+=Yu(s,e,n,u,i)}else if(u=j8(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Bh(s,l++),o+=Yu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yu(t,e,n){if(t==null)return t;var r=[],i=0;return Yu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function M8(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},Zu={transition:null},D8={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:Zu,ReactCurrentOwner:xm};function rk(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:yu,forEach:function(t,e,n){yu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yu(t,function(){e++}),e},toArray:function(t){return yu(t,function(e){return e})||[]},only:function(t){if(!Sm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=Wo;ue.Fragment=I8;ue.Profiler=S8;ue.PureComponent=Tm;ue.StrictMode=x8;ue.Suspense=P8;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D8;ue.act=rk;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Z_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)ek.call(e,u)&&!tk.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Ol,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:C8,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:A8,_context:t},t.Consumer=t};ue.createElement=nk;ue.createFactory=function(t){var e=nk.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:R8,render:t}};ue.isValidElement=Sm;ue.lazy=function(t){return{$$typeof:b8,_payload:{_status:-1,_result:t},_init:M8}};ue.memo=function(t,e){return{$$typeof:L8,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=Zu.transition;Zu.transition={};try{t()}finally{Zu.transition=e}};ue.unstable_act=rk;ue.useCallback=function(t,e){return Mt.current.useCallback(t,e)};ue.useContext=function(t){return Mt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return Mt.current.useEffect(t,e)};ue.useId=function(){return Mt.current.useId()};ue.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return Mt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};ue.useRef=function(t){return Mt.current.useRef(t)};ue.useState=function(t){return Mt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return Mt.current.useTransition()};ue.version="18.3.1";Q_.exports=ue;var N=Q_.exports;const c=w8(N),V8=E8({__proto__:null,default:c},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F8=N,U8=Symbol.for("react.element"),$8=Symbol.for("react.fragment"),W8=Object.prototype.hasOwnProperty,B8=F8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z8={key:!0,ref:!0,__self:!0,__source:!0};function ik(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)W8.call(e,r)&&!z8.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:U8,type:t,key:s,ref:o,props:i,_owner:B8.current}}xd.Fragment=$8;xd.jsx=ik;xd.jsxs=ik;K_.exports=xd;var f=K_.exports,sk={exports:{}},on={},ok={exports:{}},ak={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var J=z.length;z.push(Q);e:for(;0<J;){var he=J-1>>>1,oe=z[he];if(0<i(oe,Q))z[he]=Q,z[J]=oe,J=he;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],J=z.pop();if(J!==Q){z[0]=J;e:for(var he=0,oe=z.length,ke=oe>>>1;he<ke;){var at=2*(he+1)-1,tt=z[at],nt=at+1,yt=z[nt];if(0>i(tt,J))nt<oe&&0>i(yt,tt)?(z[he]=yt,z[nt]=J,he=nt):(z[he]=tt,z[at]=J,he=at);else if(nt<oe&&0>i(yt,J))z[he]=yt,z[nt]=J,he=nt;else break e}}return Q}function i(z,Q){var J=z.sortIndex-Q.sortIndex;return J!==0?J:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],p=1,g=null,y=3,E=!1,A=!1,P=!1,L=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var Q=n(d);Q!==null;){if(Q.callback===null)r(d);else if(Q.startTime<=z)r(d),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(d)}}function b(z){if(P=!1,x(z),!A)if(n(u)!==null)A=!0,q(M);else{var Q=n(d);Q!==null&&le(b,Q.startTime-z)}}function M(z,Q){A=!1,P&&(P=!1,w(_),_=-1),E=!0;var J=y;try{for(x(Q),g=n(u);g!==null&&(!(g.expirationTime>Q)||z&&!j());){var he=g.callback;if(typeof he=="function"){g.callback=null,y=g.priorityLevel;var oe=he(g.expirationTime<=Q);Q=t.unstable_now(),typeof oe=="function"?g.callback=oe:g===n(u)&&r(u),x(Q)}else r(u);g=n(u)}if(g!==null)var ke=!0;else{var at=n(d);at!==null&&le(b,at.startTime-Q),ke=!1}return ke}finally{g=null,y=J,E=!1}}var V=!1,k=null,_=-1,I=5,C=-1;function j(){return!(t.unstable_now()-C<I)}function R(){if(k!==null){var z=t.unstable_now();C=z;var Q=!0;try{Q=k(!0,z)}finally{Q?S():(V=!1,k=null)}}else V=!1}var S;if(typeof v=="function")S=function(){v(R)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ee=ae.port2;ae.port1.onmessage=R,S=function(){ee.postMessage(null)}}else S=function(){L(R,0)};function q(z){k=z,V||(V=!0,S())}function le(z,Q){_=L(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){A||E||(A=!0,q(M))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var J=y;y=Q;try{return z()}finally{y=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=y;y=z;try{return Q()}finally{y=J}},t.unstable_scheduleCallback=function(z,Q,J){var he=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?he+J:he):J=he,z){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=J+oe,z={id:p++,callback:Q,priorityLevel:z,startTime:J,expirationTime:oe,sortIndex:-1},J>he?(z.sortIndex=J,e(d,z),n(u)===null&&z===n(d)&&(P?(w(_),_=-1):P=!0,le(b,J-he))):(z.sortIndex=oe,e(u,z),A||E||(A=!0,q(M))),z},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(z){var Q=y;return function(){var J=y;y=Q;try{return z.apply(this,arguments)}finally{y=J}}}})(ak);ok.exports=ak;var H8=ok.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q8=N,sn=H8;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lk=new Set,rl={};function ts(t,e){Eo(t,e),Eo(t+"Capture",e)}function Eo(t,e){for(rl[t]=e,t=0;t<e.length;t++)lk.add(e[t])}var yr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wf=Object.prototype.hasOwnProperty,G8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,R1={},P1={};function K8(t){return Wf.call(P1,t)?!0:Wf.call(R1,t)?!1:G8.test(t)?P1[t]=!0:(R1[t]=!0,!1)}function Q8(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Y8(t,e,n,r){if(e===null||typeof e>"u"||Q8(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Am=/[\-:]([a-z])/g;function Cm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Am,Cm);mt[e]=new Dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Am,Cm);mt[e]=new Dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Am,Cm);mt[e]=new Dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Dt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rm(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Y8(e,n,i,r)&&(n=null),r||i===null?K8(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var xr=q8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vu=Symbol.for("react.element"),Ys=Symbol.for("react.portal"),Zs=Symbol.for("react.fragment"),Pm=Symbol.for("react.strict_mode"),Bf=Symbol.for("react.profiler"),uk=Symbol.for("react.provider"),ck=Symbol.for("react.context"),Lm=Symbol.for("react.forward_ref"),zf=Symbol.for("react.suspense"),Hf=Symbol.for("react.suspense_list"),bm=Symbol.for("react.memo"),Or=Symbol.for("react.lazy"),dk=Symbol.for("react.offscreen"),L1=Symbol.iterator;function ma(t){return t===null||typeof t!="object"?null:(t=L1&&t[L1]||t["@@iterator"],typeof t=="function"?t:null)}var Fe=Object.assign,zh;function Sa(t){if(zh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zh=e&&e[1]||""}return`
`+zh+t}var Hh=!1;function qh(t,e){if(!t||Hh)return"";Hh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Hh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Sa(t):""}function Z8(t){switch(t.tag){case 5:return Sa(t.type);case 16:return Sa("Lazy");case 13:return Sa("Suspense");case 19:return Sa("SuspenseList");case 0:case 2:case 15:return t=qh(t.type,!1),t;case 11:return t=qh(t.type.render,!1),t;case 1:return t=qh(t.type,!0),t;default:return""}}function qf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zs:return"Fragment";case Ys:return"Portal";case Bf:return"Profiler";case Pm:return"StrictMode";case zf:return"Suspense";case Hf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ck:return(t.displayName||"Context")+".Consumer";case uk:return(t._context.displayName||"Context")+".Provider";case Lm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bm:return e=t.displayName||null,e!==null?e:qf(t.type)||"Memo";case Or:e=t._payload,t=t._init;try{return qf(t(e))}catch{}}return null}function X8(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qf(e);case 8:return e===Pm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function oi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hk(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J8(t){var e=hk(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _u(t){t._valueTracker||(t._valueTracker=J8(t))}function fk(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=hk(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ic(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gf(t,e){var n=e.checked;return Fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function b1(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=oi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pk(t,e){e=e.checked,e!=null&&Rm(t,"checked",e,!1)}function Kf(t,e){pk(t,e);var n=oi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qf(t,e.type,oi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function j1(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qf(t,e,n){(e!=="number"||Ic(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Aa=Array.isArray;function co(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+oi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Yf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function N1(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Aa(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:oi(n)}}function mk(t,e){var n=oi(e.value),r=oi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function O1(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gk(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gk(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ku,yk=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ku=ku||document.createElement("div"),ku.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ku.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function il(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ex=["Webkit","ms","Moz","O"];Object.keys(Va).forEach(function(t){ex.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Va[e]=Va[t]})});function vk(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Va.hasOwnProperty(t)&&Va[t]?(""+e).trim():e+"px"}function _k(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vk(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var tx=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xf(t,e){if(e){if(tx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Jf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ep=null;function jm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tp=null,ho=null,fo=null;function M1(t){if(t=Vl(t)){if(typeof tp!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Pd(e),tp(t.stateNode,t.type,e))}}function kk(t){ho?fo?fo.push(t):fo=[t]:ho=t}function Ek(){if(ho){var t=ho,e=fo;if(fo=ho=null,M1(t),e)for(t=0;t<e.length;t++)M1(e[t])}}function wk(t,e){return t(e)}function Tk(){}var Gh=!1;function Ik(t,e,n){if(Gh)return t(e,n);Gh=!0;try{return wk(t,e,n)}finally{Gh=!1,(ho!==null||fo!==null)&&(Tk(),Ek())}}function sl(t,e){var n=t.stateNode;if(n===null)return null;var r=Pd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var np=!1;if(yr)try{var ga={};Object.defineProperty(ga,"passive",{get:function(){np=!0}}),window.addEventListener("test",ga,ga),window.removeEventListener("test",ga,ga)}catch{np=!1}function nx(t,e,n,r,i,s,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var Fa=!1,xc=null,Sc=!1,rp=null,rx={onError:function(t){Fa=!0,xc=t}};function ix(t,e,n,r,i,s,o,l,u){Fa=!1,xc=null,nx.apply(rx,arguments)}function sx(t,e,n,r,i,s,o,l,u){if(ix.apply(this,arguments),Fa){if(Fa){var d=xc;Fa=!1,xc=null}else throw Error(B(198));Sc||(Sc=!0,rp=d)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xk(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function D1(t){if(ns(t)!==t)throw Error(B(188))}function ox(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return D1(i),t;if(s===r)return D1(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function Sk(t){return t=ox(t),t!==null?Ak(t):null}function Ak(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ak(t);if(e!==null)return e;t=t.sibling}return null}var Ck=sn.unstable_scheduleCallback,V1=sn.unstable_cancelCallback,ax=sn.unstable_shouldYield,lx=sn.unstable_requestPaint,He=sn.unstable_now,ux=sn.unstable_getCurrentPriorityLevel,Nm=sn.unstable_ImmediatePriority,Rk=sn.unstable_UserBlockingPriority,Ac=sn.unstable_NormalPriority,cx=sn.unstable_LowPriority,Pk=sn.unstable_IdlePriority,Sd=null,Hn=null;function dx(t){if(Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot(Sd,t,void 0,(t.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:px,hx=Math.log,fx=Math.LN2;function px(t){return t>>>=0,t===0?32:31-(hx(t)/fx|0)|0}var Eu=64,wu=4194304;function Ca(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ca(l):(s&=o,s!==0&&(r=Ca(s)))}else o=n&~i,o!==0?r=Ca(o):s!==0&&(r=Ca(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Rn(e),i=1<<n,r|=t[n],e&=~i;return r}function mx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Rn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=mx(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function ip(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lk(){var t=Eu;return Eu<<=1,!(Eu&4194240)&&(Eu=64),t}function Kh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ml(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Rn(e),t[e]=n}function yx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Om(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Te=0;function bk(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jk,Mm,Nk,Ok,Mk,sp=!1,Tu=[],Kr=null,Qr=null,Yr=null,ol=new Map,al=new Map,Dr=[],vx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function F1(t,e){switch(t){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":Qr=null;break;case"mouseover":case"mouseout":Yr=null;break;case"pointerover":case"pointerout":ol.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(e.pointerId)}}function ya(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Vl(e),e!==null&&Mm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function _x(t,e,n,r,i){switch(e){case"focusin":return Kr=ya(Kr,t,e,n,r,i),!0;case"dragenter":return Qr=ya(Qr,t,e,n,r,i),!0;case"mouseover":return Yr=ya(Yr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ol.set(s,ya(ol.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,al.set(s,ya(al.get(s)||null,t,e,n,r,i)),!0}return!1}function Dk(t){var e=Li(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=xk(n),e!==null){t.blockedOn=e,Mk(t.priority,function(){Nk(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=op(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ep=r,n.target.dispatchEvent(r),ep=null}else return e=Vl(n),e!==null&&Mm(e),t.blockedOn=n,!1;e.shift()}return!0}function U1(t,e,n){Xu(t)&&n.delete(e)}function kx(){sp=!1,Kr!==null&&Xu(Kr)&&(Kr=null),Qr!==null&&Xu(Qr)&&(Qr=null),Yr!==null&&Xu(Yr)&&(Yr=null),ol.forEach(U1),al.forEach(U1)}function va(t,e){t.blockedOn===e&&(t.blockedOn=null,sp||(sp=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,kx)))}function ll(t){function e(i){return va(i,t)}if(0<Tu.length){va(Tu[0],t);for(var n=1;n<Tu.length;n++){var r=Tu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Kr!==null&&va(Kr,t),Qr!==null&&va(Qr,t),Yr!==null&&va(Yr,t),ol.forEach(e),al.forEach(e),n=0;n<Dr.length;n++)r=Dr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Dr.length&&(n=Dr[0],n.blockedOn===null);)Dk(n),n.blockedOn===null&&Dr.shift()}var po=xr.ReactCurrentBatchConfig,Rc=!0;function Ex(t,e,n,r){var i=Te,s=po.transition;po.transition=null;try{Te=1,Dm(t,e,n,r)}finally{Te=i,po.transition=s}}function wx(t,e,n,r){var i=Te,s=po.transition;po.transition=null;try{Te=4,Dm(t,e,n,r)}finally{Te=i,po.transition=s}}function Dm(t,e,n,r){if(Rc){var i=op(t,e,n,r);if(i===null)sf(t,e,r,Pc,n),F1(t,r);else if(_x(i,t,e,n,r))r.stopPropagation();else if(F1(t,r),e&4&&-1<vx.indexOf(t)){for(;i!==null;){var s=Vl(i);if(s!==null&&jk(s),s=op(t,e,n,r),s===null&&sf(t,e,r,Pc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else sf(t,e,r,null,n)}}var Pc=null;function op(t,e,n,r){if(Pc=null,t=jm(r),t=Li(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xk(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pc=t,null}function Vk(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ux()){case Nm:return 1;case Rk:return 4;case Ac:case cx:return 16;case Pk:return 536870912;default:return 16}default:return 16}}var Wr=null,Vm=null,Ju=null;function Fk(){if(Ju)return Ju;var t,e=Vm,n=e.length,r,i="value"in Wr?Wr.value:Wr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ju=i.slice(t,1<r?1-r:void 0)}function ec(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Iu(){return!0}function $1(){return!1}function an(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Iu:$1,this.isPropagationStopped=$1,this}return Fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Iu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Iu)},persist:function(){},isPersistent:Iu}),e}var Bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fm=an(Bo),Dl=Fe({},Bo,{view:0,detail:0}),Tx=an(Dl),Qh,Yh,_a,Ad=Fe({},Dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Um,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_a&&(_a&&t.type==="mousemove"?(Qh=t.screenX-_a.screenX,Yh=t.screenY-_a.screenY):Yh=Qh=0,_a=t),Qh)},movementY:function(t){return"movementY"in t?t.movementY:Yh}}),W1=an(Ad),Ix=Fe({},Ad,{dataTransfer:0}),xx=an(Ix),Sx=Fe({},Dl,{relatedTarget:0}),Zh=an(Sx),Ax=Fe({},Bo,{animationName:0,elapsedTime:0,pseudoElement:0}),Cx=an(Ax),Rx=Fe({},Bo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Px=an(Rx),Lx=Fe({},Bo,{data:0}),B1=an(Lx),bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ox(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Nx[t])?!!e[t]:!1}function Um(){return Ox}var Mx=Fe({},Dl,{key:function(t){if(t.key){var e=bx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ec(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Um,charCode:function(t){return t.type==="keypress"?ec(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ec(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dx=an(Mx),Vx=Fe({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),z1=an(Vx),Fx=Fe({},Dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Um}),Ux=an(Fx),$x=Fe({},Bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wx=an($x),Bx=Fe({},Ad,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zx=an(Bx),Hx=[9,13,27,32],$m=yr&&"CompositionEvent"in window,Ua=null;yr&&"documentMode"in document&&(Ua=document.documentMode);var qx=yr&&"TextEvent"in window&&!Ua,Uk=yr&&(!$m||Ua&&8<Ua&&11>=Ua),H1=" ",q1=!1;function $k(t,e){switch(t){case"keyup":return Hx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wk(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xs=!1;function Gx(t,e){switch(t){case"compositionend":return Wk(e);case"keypress":return e.which!==32?null:(q1=!0,H1);case"textInput":return t=e.data,t===H1&&q1?null:t;default:return null}}function Kx(t,e){if(Xs)return t==="compositionend"||!$m&&$k(t,e)?(t=Fk(),Ju=Vm=Wr=null,Xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Uk&&e.locale!=="ko"?null:e.data;default:return null}}var Qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function G1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Qx[t.type]:e==="textarea"}function Bk(t,e,n,r){kk(r),e=Lc(e,"onChange"),0<e.length&&(n=new Fm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $a=null,ul=null;function Yx(t){eE(t,0)}function Cd(t){var e=to(t);if(fk(e))return t}function Zx(t,e){if(t==="change")return e}var zk=!1;if(yr){var Xh;if(yr){var Jh="oninput"in document;if(!Jh){var K1=document.createElement("div");K1.setAttribute("oninput","return;"),Jh=typeof K1.oninput=="function"}Xh=Jh}else Xh=!1;zk=Xh&&(!document.documentMode||9<document.documentMode)}function Q1(){$a&&($a.detachEvent("onpropertychange",Hk),ul=$a=null)}function Hk(t){if(t.propertyName==="value"&&Cd(ul)){var e=[];Bk(e,ul,t,jm(t)),Ik(Yx,e)}}function Xx(t,e,n){t==="focusin"?(Q1(),$a=e,ul=n,$a.attachEvent("onpropertychange",Hk)):t==="focusout"&&Q1()}function Jx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cd(ul)}function eS(t,e){if(t==="click")return Cd(e)}function tS(t,e){if(t==="input"||t==="change")return Cd(e)}function nS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bn=typeof Object.is=="function"?Object.is:nS;function cl(t,e){if(bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wf.call(e,i)||!bn(t[i],e[i]))return!1}return!0}function Y1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Z1(t,e){var n=Y1(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Y1(n)}}function qk(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qk(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gk(){for(var t=window,e=Ic();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ic(t.document)}return e}function Wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rS(t){var e=Gk(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qk(n.ownerDocument.documentElement,n)){if(r!==null&&Wm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Z1(n,s);var o=Z1(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iS=yr&&"documentMode"in document&&11>=document.documentMode,Js=null,ap=null,Wa=null,lp=!1;function X1(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lp||Js==null||Js!==Ic(r)||(r=Js,"selectionStart"in r&&Wm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wa&&cl(Wa,r)||(Wa=r,r=Lc(ap,"onSelect"),0<r.length&&(e=new Fm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Js)))}function xu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var eo={animationend:xu("Animation","AnimationEnd"),animationiteration:xu("Animation","AnimationIteration"),animationstart:xu("Animation","AnimationStart"),transitionend:xu("Transition","TransitionEnd")},ef={},Kk={};yr&&(Kk=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function Rd(t){if(ef[t])return ef[t];if(!eo[t])return t;var e=eo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Kk)return ef[t]=e[n];return t}var Qk=Rd("animationend"),Yk=Rd("animationiteration"),Zk=Rd("animationstart"),Xk=Rd("transitionend"),Jk=new Map,J1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function di(t,e){Jk.set(t,e),ts(e,[t])}for(var tf=0;tf<J1.length;tf++){var nf=J1[tf],sS=nf.toLowerCase(),oS=nf[0].toUpperCase()+nf.slice(1);di(sS,"on"+oS)}di(Qk,"onAnimationEnd");di(Yk,"onAnimationIteration");di(Zk,"onAnimationStart");di("dblclick","onDoubleClick");di("focusin","onFocus");di("focusout","onBlur");di(Xk,"onTransitionEnd");Eo("onMouseEnter",["mouseout","mouseover"]);Eo("onMouseLeave",["mouseout","mouseover"]);Eo("onPointerEnter",["pointerout","pointerover"]);Eo("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function ey(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,sx(r,e,void 0,t),t.currentTarget=null}function eE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;ey(i,l,d),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;ey(i,l,d),s=u}}}if(Sc)throw t=rp,Sc=!1,rp=null,t}function Le(t,e){var n=e[fp];n===void 0&&(n=e[fp]=new Set);var r=t+"__bubble";n.has(r)||(tE(e,t,2,!1),n.add(r))}function rf(t,e,n){var r=0;e&&(r|=4),tE(n,t,r,e)}var Su="_reactListening"+Math.random().toString(36).slice(2);function dl(t){if(!t[Su]){t[Su]=!0,lk.forEach(function(n){n!=="selectionchange"&&(aS.has(n)||rf(n,!1,t),rf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Su]||(e[Su]=!0,rf("selectionchange",!1,e))}}function tE(t,e,n,r){switch(Vk(e)){case 1:var i=Ex;break;case 4:i=wx;break;default:i=Dm}n=i.bind(null,e,n,t),i=void 0,!np||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function sf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Li(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Ik(function(){var d=s,p=jm(n),g=[];e:{var y=Jk.get(t);if(y!==void 0){var E=Fm,A=t;switch(t){case"keypress":if(ec(n)===0)break e;case"keydown":case"keyup":E=Dx;break;case"focusin":A="focus",E=Zh;break;case"focusout":A="blur",E=Zh;break;case"beforeblur":case"afterblur":E=Zh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=W1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Ux;break;case Qk:case Yk:case Zk:E=Cx;break;case Xk:E=Wx;break;case"scroll":E=Tx;break;case"wheel":E=zx;break;case"copy":case"cut":case"paste":E=Px;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=z1}var P=(e&4)!==0,L=!P&&t==="scroll",w=P?y!==null?y+"Capture":null:y;P=[];for(var v=d,x;v!==null;){x=v;var b=x.stateNode;if(x.tag===5&&b!==null&&(x=b,w!==null&&(b=sl(v,w),b!=null&&P.push(hl(v,b,x)))),L)break;v=v.return}0<P.length&&(y=new E(y,A,null,n,p),g.push({event:y,listeners:P}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",y&&n!==ep&&(A=n.relatedTarget||n.fromElement)&&(Li(A)||A[vr]))break e;if((E||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,E?(A=n.relatedTarget||n.toElement,E=d,A=A?Li(A):null,A!==null&&(L=ns(A),A!==L||A.tag!==5&&A.tag!==6)&&(A=null)):(E=null,A=d),E!==A)){if(P=W1,b="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=z1,b="onPointerLeave",w="onPointerEnter",v="pointer"),L=E==null?y:to(E),x=A==null?y:to(A),y=new P(b,v+"leave",E,n,p),y.target=L,y.relatedTarget=x,b=null,Li(p)===d&&(P=new P(w,v+"enter",A,n,p),P.target=x,P.relatedTarget=L,b=P),L=b,E&&A)t:{for(P=E,w=A,v=0,x=P;x;x=Fs(x))v++;for(x=0,b=w;b;b=Fs(b))x++;for(;0<v-x;)P=Fs(P),v--;for(;0<x-v;)w=Fs(w),x--;for(;v--;){if(P===w||w!==null&&P===w.alternate)break t;P=Fs(P),w=Fs(w)}P=null}else P=null;E!==null&&ty(g,y,E,P,!1),A!==null&&L!==null&&ty(g,L,A,P,!0)}}e:{if(y=d?to(d):window,E=y.nodeName&&y.nodeName.toLowerCase(),E==="select"||E==="input"&&y.type==="file")var M=Zx;else if(G1(y))if(zk)M=tS;else{M=Jx;var V=Xx}else(E=y.nodeName)&&E.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(M=eS);if(M&&(M=M(t,d))){Bk(g,M,n,p);break e}V&&V(t,y,d),t==="focusout"&&(V=y._wrapperState)&&V.controlled&&y.type==="number"&&Qf(y,"number",y.value)}switch(V=d?to(d):window,t){case"focusin":(G1(V)||V.contentEditable==="true")&&(Js=V,ap=d,Wa=null);break;case"focusout":Wa=ap=Js=null;break;case"mousedown":lp=!0;break;case"contextmenu":case"mouseup":case"dragend":lp=!1,X1(g,n,p);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":X1(g,n,p)}var k;if($m)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Xs?$k(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Uk&&n.locale!=="ko"&&(Xs||_!=="onCompositionStart"?_==="onCompositionEnd"&&Xs&&(k=Fk()):(Wr=p,Vm="value"in Wr?Wr.value:Wr.textContent,Xs=!0)),V=Lc(d,_),0<V.length&&(_=new B1(_,t,null,n,p),g.push({event:_,listeners:V}),k?_.data=k:(k=Wk(n),k!==null&&(_.data=k)))),(k=qx?Gx(t,n):Kx(t,n))&&(d=Lc(d,"onBeforeInput"),0<d.length&&(p=new B1("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:d}),p.data=k))}eE(g,e)})}function hl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Lc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=sl(t,n),s!=null&&r.unshift(hl(t,s,i)),s=sl(t,e),s!=null&&r.push(hl(t,s,i))),t=t.return}return r}function Fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ty(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=sl(n,s),u!=null&&o.unshift(hl(n,u,l))):i||(u=sl(n,s),u!=null&&o.push(hl(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lS=/\r\n?/g,uS=/\u0000|\uFFFD/g;function ny(t){return(typeof t=="string"?t:""+t).replace(lS,`
`).replace(uS,"")}function Au(t,e,n){if(e=ny(e),ny(t)!==e&&n)throw Error(B(425))}function bc(){}var up=null,cp=null;function dp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hp=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,ry=typeof Promise=="function"?Promise:void 0,dS=typeof queueMicrotask=="function"?queueMicrotask:typeof ry<"u"?function(t){return ry.resolve(null).then(t).catch(hS)}:hp;function hS(t){setTimeout(function(){throw t})}function of(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ll(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ll(e)}function Zr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function iy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zo=Math.random().toString(36).slice(2),Bn="__reactFiber$"+zo,fl="__reactProps$"+zo,vr="__reactContainer$"+zo,fp="__reactEvents$"+zo,fS="__reactListeners$"+zo,pS="__reactHandles$"+zo;function Li(t){var e=t[Bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vr]||n[Bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=iy(t);t!==null;){if(n=t[Bn])return n;t=iy(t)}return e}t=n,n=t.parentNode}return null}function Vl(t){return t=t[Bn]||t[vr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function to(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Pd(t){return t[fl]||null}var pp=[],no=-1;function hi(t){return{current:t}}function Ne(t){0>no||(t.current=pp[no],pp[no]=null,no--)}function Se(t,e){no++,pp[no]=t.current,t.current=e}var ai={},Ct=hi(ai),zt=hi(!1),Wi=ai;function wo(t,e){var n=t.type.contextTypes;if(!n)return ai;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ht(t){return t=t.childContextTypes,t!=null}function jc(){Ne(zt),Ne(Ct)}function sy(t,e,n){if(Ct.current!==ai)throw Error(B(168));Se(Ct,e),Se(zt,n)}function nE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,X8(t)||"Unknown",i));return Fe({},n,r)}function Nc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ai,Wi=Ct.current,Se(Ct,t),Se(zt,zt.current),!0}function oy(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=nE(t,e,Wi),r.__reactInternalMemoizedMergedChildContext=t,Ne(zt),Ne(Ct),Se(Ct,t)):Ne(zt),Se(zt,n)}var ar=null,Ld=!1,af=!1;function rE(t){ar===null?ar=[t]:ar.push(t)}function mS(t){Ld=!0,rE(t)}function fi(){if(!af&&ar!==null){af=!0;var t=0,e=Te;try{var n=ar;for(Te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ar=null,Ld=!1}catch(i){throw ar!==null&&(ar=ar.slice(t+1)),Ck(Nm,fi),i}finally{Te=e,af=!1}}return null}var ro=[],io=0,Oc=null,Mc=0,un=[],cn=0,Bi=null,ur=1,cr="";function Ai(t,e){ro[io++]=Mc,ro[io++]=Oc,Oc=t,Mc=e}function iE(t,e,n){un[cn++]=ur,un[cn++]=cr,un[cn++]=Bi,Bi=t;var r=ur;t=cr;var i=32-Rn(r)-1;r&=~(1<<i),n+=1;var s=32-Rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ur=1<<32-Rn(e)+i|n<<i|r,cr=s+t}else ur=1<<s|n<<i|r,cr=t}function Bm(t){t.return!==null&&(Ai(t,1),iE(t,1,0))}function zm(t){for(;t===Oc;)Oc=ro[--io],ro[io]=null,Mc=ro[--io],ro[io]=null;for(;t===Bi;)Bi=un[--cn],un[cn]=null,cr=un[--cn],un[cn]=null,ur=un[--cn],un[cn]=null}var nn=null,en=null,Me=!1,Sn=null;function sE(t,e){var n=dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ay(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nn=t,en=Zr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nn=t,en=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Bi!==null?{id:ur,overflow:cr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nn=t,en=null,!0):!1;default:return!1}}function mp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gp(t){if(Me){var e=en;if(e){var n=e;if(!ay(t,e)){if(mp(t))throw Error(B(418));e=Zr(n.nextSibling);var r=nn;e&&ay(t,e)?sE(r,n):(t.flags=t.flags&-4097|2,Me=!1,nn=t)}}else{if(mp(t))throw Error(B(418));t.flags=t.flags&-4097|2,Me=!1,nn=t}}}function ly(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nn=t}function Cu(t){if(t!==nn)return!1;if(!Me)return ly(t),Me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dp(t.type,t.memoizedProps)),e&&(e=en)){if(mp(t))throw oE(),Error(B(418));for(;e;)sE(t,e),e=Zr(e.nextSibling)}if(ly(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){en=Zr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}en=null}}else en=nn?Zr(t.stateNode.nextSibling):null;return!0}function oE(){for(var t=en;t;)t=Zr(t.nextSibling)}function To(){en=nn=null,Me=!1}function Hm(t){Sn===null?Sn=[t]:Sn.push(t)}var gS=xr.ReactCurrentBatchConfig;function ka(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Ru(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function uy(t){var e=t._init;return e(t._payload)}function aE(t){function e(w,v){if(t){var x=w.deletions;x===null?(w.deletions=[v],w.flags|=16):x.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=ti(w,v),w.index=0,w.sibling=null,w}function s(w,v,x){return w.index=x,t?(x=w.alternate,x!==null?(x=x.index,x<v?(w.flags|=2,v):x):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,v,x,b){return v===null||v.tag!==6?(v=pf(x,w.mode,b),v.return=w,v):(v=i(v,x),v.return=w,v)}function u(w,v,x,b){var M=x.type;return M===Zs?p(w,v,x.props.children,b,x.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Or&&uy(M)===v.type)?(b=i(v,x.props),b.ref=ka(w,v,x),b.return=w,b):(b=ac(x.type,x.key,x.props,null,w.mode,b),b.ref=ka(w,v,x),b.return=w,b)}function d(w,v,x,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=mf(x,w.mode,b),v.return=w,v):(v=i(v,x.children||[]),v.return=w,v)}function p(w,v,x,b,M){return v===null||v.tag!==7?(v=Vi(x,w.mode,b,M),v.return=w,v):(v=i(v,x),v.return=w,v)}function g(w,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=pf(""+v,w.mode,x),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case vu:return x=ac(v.type,v.key,v.props,null,w.mode,x),x.ref=ka(w,null,v),x.return=w,x;case Ys:return v=mf(v,w.mode,x),v.return=w,v;case Or:var b=v._init;return g(w,b(v._payload),x)}if(Aa(v)||ma(v))return v=Vi(v,w.mode,x,null),v.return=w,v;Ru(w,v)}return null}function y(w,v,x,b){var M=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return M!==null?null:l(w,v,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case vu:return x.key===M?u(w,v,x,b):null;case Ys:return x.key===M?d(w,v,x,b):null;case Or:return M=x._init,y(w,v,M(x._payload),b)}if(Aa(x)||ma(x))return M!==null?null:p(w,v,x,b,null);Ru(w,x)}return null}function E(w,v,x,b,M){if(typeof b=="string"&&b!==""||typeof b=="number")return w=w.get(x)||null,l(v,w,""+b,M);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case vu:return w=w.get(b.key===null?x:b.key)||null,u(v,w,b,M);case Ys:return w=w.get(b.key===null?x:b.key)||null,d(v,w,b,M);case Or:var V=b._init;return E(w,v,x,V(b._payload),M)}if(Aa(b)||ma(b))return w=w.get(x)||null,p(v,w,b,M,null);Ru(v,b)}return null}function A(w,v,x,b){for(var M=null,V=null,k=v,_=v=0,I=null;k!==null&&_<x.length;_++){k.index>_?(I=k,k=null):I=k.sibling;var C=y(w,k,x[_],b);if(C===null){k===null&&(k=I);break}t&&k&&C.alternate===null&&e(w,k),v=s(C,v,_),V===null?M=C:V.sibling=C,V=C,k=I}if(_===x.length)return n(w,k),Me&&Ai(w,_),M;if(k===null){for(;_<x.length;_++)k=g(w,x[_],b),k!==null&&(v=s(k,v,_),V===null?M=k:V.sibling=k,V=k);return Me&&Ai(w,_),M}for(k=r(w,k);_<x.length;_++)I=E(k,w,_,x[_],b),I!==null&&(t&&I.alternate!==null&&k.delete(I.key===null?_:I.key),v=s(I,v,_),V===null?M=I:V.sibling=I,V=I);return t&&k.forEach(function(j){return e(w,j)}),Me&&Ai(w,_),M}function P(w,v,x,b){var M=ma(x);if(typeof M!="function")throw Error(B(150));if(x=M.call(x),x==null)throw Error(B(151));for(var V=M=null,k=v,_=v=0,I=null,C=x.next();k!==null&&!C.done;_++,C=x.next()){k.index>_?(I=k,k=null):I=k.sibling;var j=y(w,k,C.value,b);if(j===null){k===null&&(k=I);break}t&&k&&j.alternate===null&&e(w,k),v=s(j,v,_),V===null?M=j:V.sibling=j,V=j,k=I}if(C.done)return n(w,k),Me&&Ai(w,_),M;if(k===null){for(;!C.done;_++,C=x.next())C=g(w,C.value,b),C!==null&&(v=s(C,v,_),V===null?M=C:V.sibling=C,V=C);return Me&&Ai(w,_),M}for(k=r(w,k);!C.done;_++,C=x.next())C=E(k,w,_,C.value,b),C!==null&&(t&&C.alternate!==null&&k.delete(C.key===null?_:C.key),v=s(C,v,_),V===null?M=C:V.sibling=C,V=C);return t&&k.forEach(function(R){return e(w,R)}),Me&&Ai(w,_),M}function L(w,v,x,b){if(typeof x=="object"&&x!==null&&x.type===Zs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case vu:e:{for(var M=x.key,V=v;V!==null;){if(V.key===M){if(M=x.type,M===Zs){if(V.tag===7){n(w,V.sibling),v=i(V,x.props.children),v.return=w,w=v;break e}}else if(V.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Or&&uy(M)===V.type){n(w,V.sibling),v=i(V,x.props),v.ref=ka(w,V,x),v.return=w,w=v;break e}n(w,V);break}else e(w,V);V=V.sibling}x.type===Zs?(v=Vi(x.props.children,w.mode,b,x.key),v.return=w,w=v):(b=ac(x.type,x.key,x.props,null,w.mode,b),b.ref=ka(w,v,x),b.return=w,w=b)}return o(w);case Ys:e:{for(V=x.key;v!==null;){if(v.key===V)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(w,v.sibling),v=i(v,x.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=mf(x,w.mode,b),v.return=w,w=v}return o(w);case Or:return V=x._init,L(w,v,V(x._payload),b)}if(Aa(x))return A(w,v,x,b);if(ma(x))return P(w,v,x,b);Ru(w,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,x),v.return=w,w=v):(n(w,v),v=pf(x,w.mode,b),v.return=w,w=v),o(w)):n(w,v)}return L}var Io=aE(!0),lE=aE(!1),Dc=hi(null),Vc=null,so=null,qm=null;function Gm(){qm=so=Vc=null}function Km(t){var e=Dc.current;Ne(Dc),t._currentValue=e}function yp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function mo(t,e){Vc=t,qm=so=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($t=!0),t.firstContext=null)}function pn(t){var e=t._currentValue;if(qm!==t)if(t={context:t,memoizedValue:e,next:null},so===null){if(Vc===null)throw Error(B(308));so=t,Vc.dependencies={lanes:0,firstContext:t}}else so=so.next=t;return e}var bi=null;function Qm(t){bi===null?bi=[t]:bi.push(t)}function uE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qm(e)):(n.next=i.next,i.next=n),e.interleaved=n,_r(t,r)}function _r(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mr=!1;function Ym(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_r(t,n)}return i=r.interleaved,i===null?(e.next=e,Qm(r)):(e.next=i.next,i.next=e),r.interleaved=e,_r(t,n)}function tc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Om(t,n)}}function cy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fc(t,e,n,r){var i=t.updateQueue;Mr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,p=d=u=null,l=s;do{var y=l.lane,E=l.eventTime;if((r&y)===y){p!==null&&(p=p.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,P=l;switch(y=e,E=n,P.tag){case 1:if(A=P.payload,typeof A=="function"){g=A.call(E,g,y);break e}g=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=P.payload,y=typeof A=="function"?A.call(E,g,y):A,y==null)break e;g=Fe({},g,y);break e;case 2:Mr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else E={eventTime:E,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=E,u=g):p=p.next=E,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(p===null&&(u=g),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hi|=o,t.lanes=o,t.memoizedState=g}}function dy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Fl={},qn=hi(Fl),pl=hi(Fl),ml=hi(Fl);function ji(t){if(t===Fl)throw Error(B(174));return t}function Zm(t,e){switch(Se(ml,e),Se(pl,t),Se(qn,Fl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zf(e,t)}Ne(qn),Se(qn,e)}function xo(){Ne(qn),Ne(pl),Ne(ml)}function dE(t){ji(ml.current);var e=ji(qn.current),n=Zf(e,t.type);e!==n&&(Se(pl,t),Se(qn,n))}function Xm(t){pl.current===t&&(Ne(qn),Ne(pl))}var De=hi(0);function Uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var lf=[];function Jm(){for(var t=0;t<lf.length;t++)lf[t]._workInProgressVersionPrimary=null;lf.length=0}var nc=xr.ReactCurrentDispatcher,uf=xr.ReactCurrentBatchConfig,zi=0,Ve=null,Je=null,it=null,$c=!1,Ba=!1,gl=0,yS=0;function Et(){throw Error(B(321))}function eg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!bn(t[n],e[n]))return!1;return!0}function tg(t,e,n,r,i,s){if(zi=s,Ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nc.current=t===null||t.memoizedState===null?ES:wS,t=n(r,i),Ba){s=0;do{if(Ba=!1,gl=0,25<=s)throw Error(B(301));s+=1,it=Je=null,e.updateQueue=null,nc.current=TS,t=n(r,i)}while(Ba)}if(nc.current=Wc,e=Je!==null&&Je.next!==null,zi=0,it=Je=Ve=null,$c=!1,e)throw Error(B(300));return t}function ng(){var t=gl!==0;return gl=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?Ve.memoizedState=it=t:it=it.next=t,it}function mn(){if(Je===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=it===null?Ve.memoizedState:it.next;if(e!==null)it=e,Je=t;else{if(t===null)throw Error(B(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},it===null?Ve.memoizedState=it=t:it=it.next=t}return it}function yl(t,e){return typeof e=="function"?e(t):e}function cf(t){var e=mn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,d=s;do{var p=d.lane;if((zi&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var g={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,Ve.lanes|=p,Hi|=p}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=l,bn(r,e.memoizedState)||($t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ve.lanes|=s,Hi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function df(t){var e=mn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);bn(s,e.memoizedState)||($t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function hE(){}function fE(t,e){var n=Ve,r=mn(),i=e(),s=!bn(r.memoizedState,i);if(s&&(r.memoizedState=i,$t=!0),r=r.queue,rg(gE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,vl(9,mE.bind(null,n,r,i,e),void 0,null),ot===null)throw Error(B(349));zi&30||pE(n,e,i)}return i}function pE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mE(t,e,n,r){e.value=n,e.getSnapshot=r,yE(e)&&vE(t)}function gE(t,e,n){return n(function(){yE(e)&&vE(t)})}function yE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!bn(t,n)}catch{return!0}}function vE(t){var e=_r(t,1);e!==null&&Pn(e,t,1,-1)}function hy(t){var e=$n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:t},e.queue=t,t=t.dispatch=kS.bind(null,Ve,t),[e.memoizedState,t]}function vl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function _E(){return mn().memoizedState}function rc(t,e,n,r){var i=$n();Ve.flags|=t,i.memoizedState=vl(1|e,n,void 0,r===void 0?null:r)}function bd(t,e,n,r){var i=mn();r=r===void 0?null:r;var s=void 0;if(Je!==null){var o=Je.memoizedState;if(s=o.destroy,r!==null&&eg(r,o.deps)){i.memoizedState=vl(e,n,s,r);return}}Ve.flags|=t,i.memoizedState=vl(1|e,n,s,r)}function fy(t,e){return rc(8390656,8,t,e)}function rg(t,e){return bd(2048,8,t,e)}function kE(t,e){return bd(4,2,t,e)}function EE(t,e){return bd(4,4,t,e)}function wE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function TE(t,e,n){return n=n!=null?n.concat([t]):null,bd(4,4,wE.bind(null,e,t),n)}function ig(){}function IE(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&eg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function xE(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&eg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function SE(t,e,n){return zi&21?(bn(n,e)||(n=Lk(),Ve.lanes|=n,Hi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=n)}function vS(t,e){var n=Te;Te=n!==0&&4>n?n:4,t(!0);var r=uf.transition;uf.transition={};try{t(!1),e()}finally{Te=n,uf.transition=r}}function AE(){return mn().memoizedState}function _S(t,e,n){var r=ei(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},CE(t))RE(e,n);else if(n=uE(t,e,n,r),n!==null){var i=Nt();Pn(n,t,r,i),PE(n,e,r)}}function kS(t,e,n){var r=ei(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(CE(t))RE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,bn(l,o)){var u=e.interleaved;u===null?(i.next=i,Qm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=uE(t,e,i,r),n!==null&&(i=Nt(),Pn(n,t,r,i),PE(n,e,r))}}function CE(t){var e=t.alternate;return t===Ve||e!==null&&e===Ve}function RE(t,e){Ba=$c=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function PE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Om(t,n)}}var Wc={readContext:pn,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},ES={readContext:pn,useCallback:function(t,e){return $n().memoizedState=[t,e===void 0?null:e],t},useContext:pn,useEffect:fy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rc(4194308,4,wE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return rc(4,2,t,e)},useMemo:function(t,e){var n=$n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=_S.bind(null,Ve,t),[r.memoizedState,t]},useRef:function(t){var e=$n();return t={current:t},e.memoizedState=t},useState:hy,useDebugValue:ig,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=hy(!1),e=t[0];return t=vS.bind(null,t[1]),$n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ve,i=$n();if(Me){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),ot===null)throw Error(B(349));zi&30||pE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,fy(gE.bind(null,r,s,t),[t]),r.flags|=2048,vl(9,mE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=$n(),e=ot.identifierPrefix;if(Me){var n=cr,r=ur;n=(r&~(1<<32-Rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=gl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wS={readContext:pn,useCallback:IE,useContext:pn,useEffect:rg,useImperativeHandle:TE,useInsertionEffect:kE,useLayoutEffect:EE,useMemo:xE,useReducer:cf,useRef:_E,useState:function(){return cf(yl)},useDebugValue:ig,useDeferredValue:function(t){var e=mn();return SE(e,Je.memoizedState,t)},useTransition:function(){var t=cf(yl)[0],e=mn().memoizedState;return[t,e]},useMutableSource:hE,useSyncExternalStore:fE,useId:AE,unstable_isNewReconciler:!1},TS={readContext:pn,useCallback:IE,useContext:pn,useEffect:rg,useImperativeHandle:TE,useInsertionEffect:kE,useLayoutEffect:EE,useMemo:xE,useReducer:df,useRef:_E,useState:function(){return df(yl)},useDebugValue:ig,useDeferredValue:function(t){var e=mn();return Je===null?e.memoizedState=t:SE(e,Je.memoizedState,t)},useTransition:function(){var t=df(yl)[0],e=mn().memoizedState;return[t,e]},useMutableSource:hE,useSyncExternalStore:fE,useId:AE,unstable_isNewReconciler:!1};function In(t,e){if(t&&t.defaultProps){e=Fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jd={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=ei(t),s=pr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Xr(t,s,i),e!==null&&(Pn(e,t,i,r),tc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=ei(t),s=pr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xr(t,s,i),e!==null&&(Pn(e,t,i,r),tc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=ei(t),i=pr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Xr(t,i,r),e!==null&&(Pn(e,t,r,n),tc(e,t,r))}};function py(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!cl(n,r)||!cl(i,s):!0}function LE(t,e,n){var r=!1,i=ai,s=e.contextType;return typeof s=="object"&&s!==null?s=pn(s):(i=Ht(e)?Wi:Ct.current,r=e.contextTypes,s=(r=r!=null)?wo(t,i):ai),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function my(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&jd.enqueueReplaceState(e,e.state,null)}function _p(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ym(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=pn(s):(s=Ht(e)?Wi:Ct.current,i.context=wo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&jd.enqueueReplaceState(i,i.state,null),Fc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function So(t,e){try{var n="",r=e;do n+=Z8(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function hf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function kp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var IS=typeof WeakMap=="function"?WeakMap:Map;function bE(t,e,n){n=pr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){zc||(zc=!0,Pp=r),kp(t,e)},n}function jE(t,e,n){n=pr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){kp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){kp(t,e),typeof r!="function"&&(Jr===null?Jr=new Set([this]):Jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function gy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new IS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=VS.bind(null,t,e,n),e.then(t,t))}function yy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pr(-1,1),e.tag=2,Xr(n,e,1))),n.lanes|=1),t)}var xS=xr.ReactCurrentOwner,$t=!1;function jt(t,e,n,r){e.child=t===null?lE(e,null,n,r):Io(e,t.child,n,r)}function _y(t,e,n,r,i){n=n.render;var s=e.ref;return mo(e,i),r=tg(t,e,n,r,s,i),n=ng(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kr(t,e,i)):(Me&&n&&Bm(e),e.flags|=1,jt(t,e,r,i),e.child)}function ky(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!hg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,NE(t,e,s,r,i)):(t=ac(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:cl,n(o,r)&&t.ref===e.ref)return kr(t,e,i)}return e.flags|=1,t=ti(s,r),t.ref=e.ref,t.return=e,e.child=t}function NE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(cl(s,r)&&t.ref===e.ref)if($t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&($t=!0);else return e.lanes=t.lanes,kr(t,e,i)}return Ep(t,e,n,r,i)}function OE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(ao,Jt),Jt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Se(ao,Jt),Jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Se(ao,Jt),Jt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Se(ao,Jt),Jt|=r;return jt(t,e,i,n),e.child}function ME(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ep(t,e,n,r,i){var s=Ht(n)?Wi:Ct.current;return s=wo(e,s),mo(e,i),n=tg(t,e,n,r,s,i),r=ng(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kr(t,e,i)):(Me&&r&&Bm(e),e.flags|=1,jt(t,e,n,i),e.child)}function Ey(t,e,n,r,i){if(Ht(n)){var s=!0;Nc(e)}else s=!1;if(mo(e,i),e.stateNode===null)ic(t,e),LE(e,n,r),_p(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=pn(d):(d=Ht(n)?Wi:Ct.current,d=wo(e,d));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&my(e,o,r,d),Mr=!1;var y=e.memoizedState;o.state=y,Fc(e,r,o,i),u=e.memoizedState,l!==r||y!==u||zt.current||Mr?(typeof p=="function"&&(vp(e,n,p,r),u=e.memoizedState),(l=Mr||py(e,n,l,r,y,u,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cE(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:In(e.type,l),o.props=d,g=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=pn(u):(u=Ht(n)?Wi:Ct.current,u=wo(e,u));var E=n.getDerivedStateFromProps;(p=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||y!==u)&&my(e,o,r,u),Mr=!1,y=e.memoizedState,o.state=y,Fc(e,r,o,i);var A=e.memoizedState;l!==g||y!==A||zt.current||Mr?(typeof E=="function"&&(vp(e,n,E,r),A=e.memoizedState),(d=Mr||py(e,n,d,r,y,A,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return wp(t,e,n,r,s,i)}function wp(t,e,n,r,i,s){ME(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&oy(e,n,!1),kr(t,e,s);r=e.stateNode,xS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Io(e,t.child,null,s),e.child=Io(e,null,l,s)):jt(t,e,l,s),e.memoizedState=r.state,i&&oy(e,n,!0),e.child}function DE(t){var e=t.stateNode;e.pendingContext?sy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sy(t,e.context,!1),Zm(t,e.containerInfo)}function wy(t,e,n,r,i){return To(),Hm(i),e.flags|=256,jt(t,e,n,r),e.child}var Tp={dehydrated:null,treeContext:null,retryLane:0};function Ip(t){return{baseLanes:t,cachePool:null,transitions:null}}function VE(t,e,n){var r=e.pendingProps,i=De.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Se(De,i&1),t===null)return gp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Md(o,r,0,null),t=Vi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ip(n),e.memoizedState=Tp,t):sg(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return SS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ti(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ti(l,s):(s=Vi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ip(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Tp,r}return s=t.child,t=s.sibling,r=ti(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function sg(t,e){return e=Md({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pu(t,e,n,r){return r!==null&&Hm(r),Io(e,t.child,null,n),t=sg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function SS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=hf(Error(B(422))),Pu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Md({mode:"visible",children:r.children},i,0,null),s=Vi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Io(e,t.child,null,o),e.child.memoizedState=Ip(o),e.memoizedState=Tp,s);if(!(e.mode&1))return Pu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(B(419)),r=hf(s,r,void 0),Pu(t,e,o,r)}if(l=(o&t.childLanes)!==0,$t||l){if(r=ot,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_r(t,i),Pn(r,t,i,-1))}return dg(),r=hf(Error(B(421))),Pu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=FS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,en=Zr(i.nextSibling),nn=e,Me=!0,Sn=null,t!==null&&(un[cn++]=ur,un[cn++]=cr,un[cn++]=Bi,ur=t.id,cr=t.overflow,Bi=e),e=sg(e,r.children),e.flags|=4096,e)}function Ty(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yp(t.return,e,n)}function ff(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function FE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(jt(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ty(t,n,e);else if(t.tag===19)Ty(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(De,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Uc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ff(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Uc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ff(e,!0,n,null,s);break;case"together":ff(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ic(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=ti(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ti(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AS(t,e,n){switch(e.tag){case 3:DE(e),To();break;case 5:dE(e);break;case 1:Ht(e.type)&&Nc(e);break;case 4:Zm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Se(Dc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?VE(t,e,n):(Se(De,De.current&1),t=kr(t,e,n),t!==null?t.sibling:null);Se(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return FE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,OE(t,e,n)}return kr(t,e,n)}var UE,xp,$E,WE;UE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xp=function(){};$E=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ji(qn.current);var s=null;switch(n){case"input":i=Gf(t,i),r=Gf(t,r),s=[];break;case"select":i=Fe({},i,{value:void 0}),r=Fe({},r,{value:void 0}),s=[];break;case"textarea":i=Yf(t,i),r=Yf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bc)}Xf(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(rl.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(rl.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Le("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};WE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ea(t,e){if(!Me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function CS(t,e,n){var r=e.pendingProps;switch(zm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return Ht(e.type)&&jc(),wt(e),null;case 3:return r=e.stateNode,xo(),Ne(zt),Ne(Ct),Jm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Cu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Sn!==null&&(jp(Sn),Sn=null))),xp(t,e),wt(e),null;case 5:Xm(e);var i=ji(ml.current);if(n=e.type,t!==null&&e.stateNode!=null)$E(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return wt(e),null}if(t=ji(qn.current),Cu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Bn]=e,r[fl]=s,t=(e.mode&1)!==0,n){case"dialog":Le("cancel",r),Le("close",r);break;case"iframe":case"object":case"embed":Le("load",r);break;case"video":case"audio":for(i=0;i<Ra.length;i++)Le(Ra[i],r);break;case"source":Le("error",r);break;case"img":case"image":case"link":Le("error",r),Le("load",r);break;case"details":Le("toggle",r);break;case"input":b1(r,s),Le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Le("invalid",r);break;case"textarea":N1(r,s),Le("invalid",r)}Xf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Au(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Au(r.textContent,l,t),i=["children",""+l]):rl.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Le("scroll",r)}switch(n){case"input":_u(r),j1(r,s,!0);break;case"textarea":_u(r),O1(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=bc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gk(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Bn]=e,t[fl]=r,UE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jf(n,r),n){case"dialog":Le("cancel",t),Le("close",t),i=r;break;case"iframe":case"object":case"embed":Le("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ra.length;i++)Le(Ra[i],t);i=r;break;case"source":Le("error",t),i=r;break;case"img":case"image":case"link":Le("error",t),Le("load",t),i=r;break;case"details":Le("toggle",t),i=r;break;case"input":b1(t,r),i=Gf(t,r),Le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Fe({},r,{value:void 0}),Le("invalid",t);break;case"textarea":N1(t,r),i=Yf(t,r),Le("invalid",t);break;default:i=r}Xf(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?_k(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&yk(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&il(t,u):typeof u=="number"&&il(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(rl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Le("scroll",t):u!=null&&Rm(t,s,u,o))}switch(n){case"input":_u(t),j1(t,r,!1);break;case"textarea":_u(t),O1(t);break;case"option":r.value!=null&&t.setAttribute("value",""+oi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?co(t,!!r.multiple,s,!1):r.defaultValue!=null&&co(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=bc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wt(e),null;case 6:if(t&&e.stateNode!=null)WE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=ji(ml.current),ji(qn.current),Cu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Bn]=e,(s=r.nodeValue!==n)&&(t=nn,t!==null))switch(t.tag){case 3:Au(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Au(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bn]=e,e.stateNode=r}return wt(e),null;case 13:if(Ne(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Me&&en!==null&&e.mode&1&&!(e.flags&128))oE(),To(),e.flags|=98560,s=!1;else if(s=Cu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[Bn]=e}else To(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wt(e),s=!1}else Sn!==null&&(jp(Sn),Sn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?et===0&&(et=3):dg())),e.updateQueue!==null&&(e.flags|=4),wt(e),null);case 4:return xo(),xp(t,e),t===null&&dl(e.stateNode.containerInfo),wt(e),null;case 10:return Km(e.type._context),wt(e),null;case 17:return Ht(e.type)&&jc(),wt(e),null;case 19:if(Ne(De),s=e.memoizedState,s===null)return wt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ea(s,!1);else{if(et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Uc(t),o!==null){for(e.flags|=128,Ea(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(De,De.current&1|2),e.child}t=t.sibling}s.tail!==null&&He()>Ao&&(e.flags|=128,r=!0,Ea(s,!1),e.lanes=4194304)}else{if(!r)if(t=Uc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ea(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Me)return wt(e),null}else 2*He()-s.renderingStartTime>Ao&&n!==1073741824&&(e.flags|=128,r=!0,Ea(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=He(),e.sibling=null,n=De.current,Se(De,r?n&1|2:n&1),e):(wt(e),null);case 22:case 23:return cg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Jt&1073741824&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function RS(t,e){switch(zm(e),e.tag){case 1:return Ht(e.type)&&jc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xo(),Ne(zt),Ne(Ct),Jm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xm(e),null;case 13:if(Ne(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));To()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ne(De),null;case 4:return xo(),null;case 10:return Km(e.type._context),null;case 22:case 23:return cg(),null;case 24:return null;default:return null}}var Lu=!1,xt=!1,PS=typeof WeakSet=="function"?WeakSet:Set,K=null;function oo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){We(t,e,r)}else n.current=null}function Sp(t,e,n){try{n()}catch(r){We(t,e,r)}}var Iy=!1;function LS(t,e){if(up=Rc,t=Gk(),Wm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,p=0,g=t,y=null;t:for(;;){for(var E;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(E=g.firstChild)!==null;)y=g,g=E;for(;;){if(g===t)break t;if(y===n&&++d===i&&(l=o),y===s&&++p===r&&(u=o),(E=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(cp={focusedElem:t,selectionRange:n},Rc=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var P=A.memoizedProps,L=A.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?P:In(e.type,P),L);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(b){We(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return A=Iy,Iy=!1,A}function za(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Sp(e,n,s)}i=i.next}while(i!==r)}}function Nd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ap(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function BE(t){var e=t.alternate;e!==null&&(t.alternate=null,BE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bn],delete e[fl],delete e[fp],delete e[fS],delete e[pS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zE(t){return t.tag===5||t.tag===3||t.tag===4}function xy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bc));else if(r!==4&&(t=t.child,t!==null))for(Cp(t,e,n),t=t.sibling;t!==null;)Cp(t,e,n),t=t.sibling}function Rp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Rp(t,e,n),t=t.sibling;t!==null;)Rp(t,e,n),t=t.sibling}var ct=null,xn=!1;function Pr(t,e,n){for(n=n.child;n!==null;)HE(t,e,n),n=n.sibling}function HE(t,e,n){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount(Sd,n)}catch{}switch(n.tag){case 5:xt||oo(n,e);case 6:var r=ct,i=xn;ct=null,Pr(t,e,n),ct=r,xn=i,ct!==null&&(xn?(t=ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(xn?(t=ct,n=n.stateNode,t.nodeType===8?of(t.parentNode,n):t.nodeType===1&&of(t,n),ll(t)):of(ct,n.stateNode));break;case 4:r=ct,i=xn,ct=n.stateNode.containerInfo,xn=!0,Pr(t,e,n),ct=r,xn=i;break;case 0:case 11:case 14:case 15:if(!xt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sp(n,e,o),i=i.next}while(i!==r)}Pr(t,e,n);break;case 1:if(!xt&&(oo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){We(n,e,l)}Pr(t,e,n);break;case 21:Pr(t,e,n);break;case 22:n.mode&1?(xt=(r=xt)||n.memoizedState!==null,Pr(t,e,n),xt=r):Pr(t,e,n);break;default:Pr(t,e,n)}}function Sy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PS),e.forEach(function(r){var i=US.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ct=l.stateNode,xn=!1;break e;case 3:ct=l.stateNode.containerInfo,xn=!0;break e;case 4:ct=l.stateNode.containerInfo,xn=!0;break e}l=l.return}if(ct===null)throw Error(B(160));HE(s,o,i),ct=null,xn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){We(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qE(e,t),e=e.sibling}function qE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wn(e,t),Vn(t),r&4){try{za(3,t,t.return),Nd(3,t)}catch(P){We(t,t.return,P)}try{za(5,t,t.return)}catch(P){We(t,t.return,P)}}break;case 1:wn(e,t),Vn(t),r&512&&n!==null&&oo(n,n.return);break;case 5:if(wn(e,t),Vn(t),r&512&&n!==null&&oo(n,n.return),t.flags&32){var i=t.stateNode;try{il(i,"")}catch(P){We(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&pk(i,s),Jf(l,o);var d=Jf(l,s);for(o=0;o<u.length;o+=2){var p=u[o],g=u[o+1];p==="style"?_k(i,g):p==="dangerouslySetInnerHTML"?yk(i,g):p==="children"?il(i,g):Rm(i,p,g,d)}switch(l){case"input":Kf(i,s);break;case"textarea":mk(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?co(i,!!s.multiple,E,!1):y!==!!s.multiple&&(s.defaultValue!=null?co(i,!!s.multiple,s.defaultValue,!0):co(i,!!s.multiple,s.multiple?[]:"",!1))}i[fl]=s}catch(P){We(t,t.return,P)}}break;case 6:if(wn(e,t),Vn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){We(t,t.return,P)}}break;case 3:if(wn(e,t),Vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ll(e.containerInfo)}catch(P){We(t,t.return,P)}break;case 4:wn(e,t),Vn(t);break;case 13:wn(e,t),Vn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lg=He())),r&4&&Sy(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(xt=(d=xt)||p,wn(e,t),xt=d):wn(e,t),Vn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for(K=t,p=t.child;p!==null;){for(g=K=p;K!==null;){switch(y=K,E=y.child,y.tag){case 0:case 11:case 14:case 15:za(4,y,y.return);break;case 1:oo(y,y.return);var A=y.stateNode;if(typeof A.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(P){We(r,n,P)}}break;case 5:oo(y,y.return);break;case 22:if(y.memoizedState!==null){Cy(g);continue}}E!==null?(E.return=y,K=E):Cy(g)}p=p.sibling}e:for(p=null,g=t;;){if(g.tag===5){if(p===null){p=g;try{i=g.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=vk("display",o))}catch(P){We(t,t.return,P)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(P){We(t,t.return,P)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:wn(e,t),Vn(t),r&4&&Sy(t);break;case 21:break;default:wn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(zE(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(il(i,""),r.flags&=-33);var s=xy(t);Rp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=xy(t);Cp(t,l,o);break;default:throw Error(B(161))}}catch(u){We(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bS(t,e,n){K=t,GE(t)}function GE(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Lu;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||xt;l=Lu;var d=xt;if(Lu=o,(xt=u)&&!d)for(K=i;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?Ry(i):u!==null?(u.return=o,K=u):Ry(i);for(;s!==null;)K=s,GE(s),s=s.sibling;K=i,Lu=l,xt=d}Ay(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,K=s):Ay(t)}}function Ay(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:xt||Nd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!xt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&ll(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}xt||e.flags&512&&Ap(e)}catch(y){We(e,e.return,y)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function Cy(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function Ry(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nd(4,e)}catch(u){We(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){We(e,i,u)}}var s=e.return;try{Ap(e)}catch(u){We(e,s,u)}break;case 5:var o=e.return;try{Ap(e)}catch(u){We(e,o,u)}}}catch(u){We(e,e.return,u)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var jS=Math.ceil,Bc=xr.ReactCurrentDispatcher,og=xr.ReactCurrentOwner,hn=xr.ReactCurrentBatchConfig,ge=0,ot=null,Ze=null,ft=0,Jt=0,ao=hi(0),et=0,_l=null,Hi=0,Od=0,ag=0,Ha=null,Ft=null,lg=0,Ao=1/0,sr=null,zc=!1,Pp=null,Jr=null,bu=!1,Br=null,Hc=0,qa=0,Lp=null,sc=-1,oc=0;function Nt(){return ge&6?He():sc!==-1?sc:sc=He()}function ei(t){return t.mode&1?ge&2&&ft!==0?ft&-ft:gS.transition!==null?(oc===0&&(oc=Lk()),oc):(t=Te,t!==0||(t=window.event,t=t===void 0?16:Vk(t.type)),t):1}function Pn(t,e,n,r){if(50<qa)throw qa=0,Lp=null,Error(B(185));Ml(t,n,r),(!(ge&2)||t!==ot)&&(t===ot&&(!(ge&2)&&(Od|=n),et===4&&Vr(t,ft)),qt(t,r),n===1&&ge===0&&!(e.mode&1)&&(Ao=He()+500,Ld&&fi()))}function qt(t,e){var n=t.callbackNode;gx(t,e);var r=Cc(t,t===ot?ft:0);if(r===0)n!==null&&V1(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&V1(n),e===1)t.tag===0?mS(Py.bind(null,t)):rE(Py.bind(null,t)),dS(function(){!(ge&6)&&fi()}),n=null;else{switch(bk(r)){case 1:n=Nm;break;case 4:n=Rk;break;case 16:n=Ac;break;case 536870912:n=Pk;break;default:n=Ac}n=t2(n,KE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function KE(t,e){if(sc=-1,oc=0,ge&6)throw Error(B(327));var n=t.callbackNode;if(go()&&t.callbackNode!==n)return null;var r=Cc(t,t===ot?ft:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=qc(t,r);else{e=r;var i=ge;ge|=2;var s=YE();(ot!==t||ft!==e)&&(sr=null,Ao=He()+500,Di(t,e));do try{MS();break}catch(l){QE(t,l)}while(!0);Gm(),Bc.current=s,ge=i,Ze!==null?e=0:(ot=null,ft=0,e=et)}if(e!==0){if(e===2&&(i=ip(t),i!==0&&(r=i,e=bp(t,i))),e===1)throw n=_l,Di(t,0),Vr(t,r),qt(t,He()),n;if(e===6)Vr(t,r);else{if(i=t.current.alternate,!(r&30)&&!NS(i)&&(e=qc(t,r),e===2&&(s=ip(t),s!==0&&(r=s,e=bp(t,s))),e===1))throw n=_l,Di(t,0),Vr(t,r),qt(t,He()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Ci(t,Ft,sr);break;case 3:if(Vr(t,r),(r&130023424)===r&&(e=lg+500-He(),10<e)){if(Cc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=hp(Ci.bind(null,t,Ft,sr),e);break}Ci(t,Ft,sr);break;case 4:if(Vr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jS(r/1960))-r,10<r){t.timeoutHandle=hp(Ci.bind(null,t,Ft,sr),r);break}Ci(t,Ft,sr);break;case 5:Ci(t,Ft,sr);break;default:throw Error(B(329))}}}return qt(t,He()),t.callbackNode===n?KE.bind(null,t):null}function bp(t,e){var n=Ha;return t.current.memoizedState.isDehydrated&&(Di(t,e).flags|=256),t=qc(t,e),t!==2&&(e=Ft,Ft=n,e!==null&&jp(e)),t}function jp(t){Ft===null?Ft=t:Ft.push.apply(Ft,t)}function NS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!bn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vr(t,e){for(e&=~ag,e&=~Od,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Rn(e),r=1<<n;t[n]=-1,e&=~r}}function Py(t){if(ge&6)throw Error(B(327));go();var e=Cc(t,0);if(!(e&1))return qt(t,He()),null;var n=qc(t,e);if(t.tag!==0&&n===2){var r=ip(t);r!==0&&(e=r,n=bp(t,r))}if(n===1)throw n=_l,Di(t,0),Vr(t,e),qt(t,He()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ci(t,Ft,sr),qt(t,He()),null}function ug(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(Ao=He()+500,Ld&&fi())}}function qi(t){Br!==null&&Br.tag===0&&!(ge&6)&&go();var e=ge;ge|=1;var n=hn.transition,r=Te;try{if(hn.transition=null,Te=1,t)return t()}finally{Te=r,hn.transition=n,ge=e,!(ge&6)&&fi()}}function cg(){Jt=ao.current,Ne(ao)}function Di(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cS(n)),Ze!==null)for(n=Ze.return;n!==null;){var r=n;switch(zm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jc();break;case 3:xo(),Ne(zt),Ne(Ct),Jm();break;case 5:Xm(r);break;case 4:xo();break;case 13:Ne(De);break;case 19:Ne(De);break;case 10:Km(r.type._context);break;case 22:case 23:cg()}n=n.return}if(ot=t,Ze=t=ti(t.current,null),ft=Jt=e,et=0,_l=null,ag=Od=Hi=0,Ft=Ha=null,bi!==null){for(e=0;e<bi.length;e++)if(n=bi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}bi=null}return t}function QE(t,e){do{var n=Ze;try{if(Gm(),nc.current=Wc,$c){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$c=!1}if(zi=0,it=Je=Ve=null,Ba=!1,gl=0,og.current=null,n===null||n.return===null){et=1,_l=e,Ze=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=ft,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=l,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var y=p.alternate;y?(p.updateQueue=y.updateQueue,p.memoizedState=y.memoizedState,p.lanes=y.lanes):(p.updateQueue=null,p.memoizedState=null)}var E=yy(o);if(E!==null){E.flags&=-257,vy(E,o,l,s,e),E.mode&1&&gy(s,d,e),e=E,u=d;var A=e.updateQueue;if(A===null){var P=new Set;P.add(u),e.updateQueue=P}else A.add(u);break e}else{if(!(e&1)){gy(s,d,e),dg();break e}u=Error(B(426))}}else if(Me&&l.mode&1){var L=yy(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),vy(L,o,l,s,e),Hm(So(u,l));break e}}s=u=So(u,l),et!==4&&(et=2),Ha===null?Ha=[s]:Ha.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=bE(s,u,e);cy(s,w);break e;case 1:l=u;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Jr===null||!Jr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=jE(s,l,e);cy(s,b);break e}}s=s.return}while(s!==null)}XE(n)}catch(M){e=M,Ze===n&&n!==null&&(Ze=n=n.return);continue}break}while(!0)}function YE(){var t=Bc.current;return Bc.current=Wc,t===null?Wc:t}function dg(){(et===0||et===3||et===2)&&(et=4),ot===null||!(Hi&268435455)&&!(Od&268435455)||Vr(ot,ft)}function qc(t,e){var n=ge;ge|=2;var r=YE();(ot!==t||ft!==e)&&(sr=null,Di(t,e));do try{OS();break}catch(i){QE(t,i)}while(!0);if(Gm(),ge=n,Bc.current=r,Ze!==null)throw Error(B(261));return ot=null,ft=0,et}function OS(){for(;Ze!==null;)ZE(Ze)}function MS(){for(;Ze!==null&&!ax();)ZE(Ze)}function ZE(t){var e=e2(t.alternate,t,Jt);t.memoizedProps=t.pendingProps,e===null?XE(t):Ze=e,og.current=null}function XE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=RS(n,e),n!==null){n.flags&=32767,Ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{et=6,Ze=null;return}}else if(n=CS(n,e,Jt),n!==null){Ze=n;return}if(e=e.sibling,e!==null){Ze=e;return}Ze=e=t}while(e!==null);et===0&&(et=5)}function Ci(t,e,n){var r=Te,i=hn.transition;try{hn.transition=null,Te=1,DS(t,e,n,r)}finally{hn.transition=i,Te=r}return null}function DS(t,e,n,r){do go();while(Br!==null);if(ge&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yx(t,s),t===ot&&(Ze=ot=null,ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bu||(bu=!0,t2(Ac,function(){return go(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=hn.transition,hn.transition=null;var o=Te;Te=1;var l=ge;ge|=4,og.current=null,LS(t,n),qE(n,t),rS(cp),Rc=!!up,cp=up=null,t.current=n,bS(n),lx(),ge=l,Te=o,hn.transition=s}else t.current=n;if(bu&&(bu=!1,Br=t,Hc=i),s=t.pendingLanes,s===0&&(Jr=null),dx(n.stateNode),qt(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zc)throw zc=!1,t=Pp,Pp=null,t;return Hc&1&&t.tag!==0&&go(),s=t.pendingLanes,s&1?t===Lp?qa++:(qa=0,Lp=t):qa=0,fi(),null}function go(){if(Br!==null){var t=bk(Hc),e=hn.transition,n=Te;try{if(hn.transition=null,Te=16>t?16:t,Br===null)var r=!1;else{if(t=Br,Br=null,Hc=0,ge&6)throw Error(B(331));var i=ge;for(ge|=4,K=t.current;K!==null;){var s=K,o=s.child;if(K.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(K=d;K!==null;){var p=K;switch(p.tag){case 0:case 11:case 15:za(8,p,s)}var g=p.child;if(g!==null)g.return=p,K=g;else for(;K!==null;){p=K;var y=p.sibling,E=p.return;if(BE(p),p===d){K=null;break}if(y!==null){y.return=E,K=y;break}K=E}}}var A=s.alternate;if(A!==null){var P=A.child;if(P!==null){A.child=null;do{var L=P.sibling;P.sibling=null,P=L}while(P!==null)}}K=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,s.flags&2048)switch(s.tag){case 0:case 11:case 15:za(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,K=w;break e}K=s.return}}var v=t.current;for(K=v;K!==null;){o=K;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,K=x;else e:for(o=v;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Nd(9,l)}}catch(M){We(l,l.return,M)}if(l===o){K=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,K=b;break e}K=l.return}}if(ge=i,fi(),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot(Sd,t)}catch{}r=!0}return r}finally{Te=n,hn.transition=e}}return!1}function Ly(t,e,n){e=So(n,e),e=bE(t,e,1),t=Xr(t,e,1),e=Nt(),t!==null&&(Ml(t,1,e),qt(t,e))}function We(t,e,n){if(t.tag===3)Ly(t,t,n);else for(;e!==null;){if(e.tag===3){Ly(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jr===null||!Jr.has(r))){t=So(n,t),t=jE(e,t,1),e=Xr(e,t,1),t=Nt(),e!==null&&(Ml(e,1,t),qt(e,t));break}}e=e.return}}function VS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,ot===t&&(ft&n)===n&&(et===4||et===3&&(ft&130023424)===ft&&500>He()-lg?Di(t,0):ag|=n),qt(t,e)}function JE(t,e){e===0&&(t.mode&1?(e=wu,wu<<=1,!(wu&130023424)&&(wu=4194304)):e=1);var n=Nt();t=_r(t,e),t!==null&&(Ml(t,e,n),qt(t,n))}function FS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),JE(t,n)}function US(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),JE(t,n)}var e2;e2=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||zt.current)$t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $t=!1,AS(t,e,n);$t=!!(t.flags&131072)}else $t=!1,Me&&e.flags&1048576&&iE(e,Mc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ic(t,e),t=e.pendingProps;var i=wo(e,Ct.current);mo(e,n),i=tg(null,e,r,t,i,n);var s=ng();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ht(r)?(s=!0,Nc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ym(e),i.updater=jd,e.stateNode=i,i._reactInternals=e,_p(e,r,t,n),e=wp(null,e,r,!0,s,n)):(e.tag=0,Me&&s&&Bm(e),jt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ic(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=WS(r),t=In(r,t),i){case 0:e=Ep(null,e,r,t,n);break e;case 1:e=Ey(null,e,r,t,n);break e;case 11:e=_y(null,e,r,t,n);break e;case 14:e=ky(null,e,r,In(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),Ep(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),Ey(t,e,r,i,n);case 3:e:{if(DE(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,cE(t,e),Fc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=So(Error(B(423)),e),e=wy(t,e,r,n,i);break e}else if(r!==i){i=So(Error(B(424)),e),e=wy(t,e,r,n,i);break e}else for(en=Zr(e.stateNode.containerInfo.firstChild),nn=e,Me=!0,Sn=null,n=lE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(To(),r===i){e=kr(t,e,n);break e}jt(t,e,r,n)}e=e.child}return e;case 5:return dE(e),t===null&&gp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,dp(r,i)?o=null:s!==null&&dp(r,s)&&(e.flags|=32),ME(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&gp(e),null;case 13:return VE(t,e,n);case 4:return Zm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Io(e,null,r,n):jt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),_y(t,e,r,i,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Se(Dc,r._currentValue),r._currentValue=o,s!==null)if(bn(s.value,o)){if(s.children===i.children&&!zt.current){e=kr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=pr(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),yp(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),yp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,mo(e,n),i=pn(i),r=r(i),e.flags|=1,jt(t,e,r,n),e.child;case 14:return r=e.type,i=In(r,e.pendingProps),i=In(r.type,i),ky(t,e,r,i,n);case 15:return NE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),ic(t,e),e.tag=1,Ht(r)?(t=!0,Nc(e)):t=!1,mo(e,n),LE(e,r,i),_p(e,r,i,n),wp(null,e,r,!0,t,n);case 19:return FE(t,e,n);case 22:return OE(t,e,n)}throw Error(B(156,e.tag))};function t2(t,e){return Ck(t,e)}function $S(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(t,e,n,r){return new $S(t,e,n,r)}function hg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function WS(t){if(typeof t=="function")return hg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lm)return 11;if(t===bm)return 14}return 2}function ti(t,e){var n=t.alternate;return n===null?(n=dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ac(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")hg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Zs:return Vi(n.children,i,s,e);case Pm:o=8,i|=8;break;case Bf:return t=dn(12,n,e,i|2),t.elementType=Bf,t.lanes=s,t;case zf:return t=dn(13,n,e,i),t.elementType=zf,t.lanes=s,t;case Hf:return t=dn(19,n,e,i),t.elementType=Hf,t.lanes=s,t;case dk:return Md(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case uk:o=10;break e;case ck:o=9;break e;case Lm:o=11;break e;case bm:o=14;break e;case Or:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=dn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Vi(t,e,n,r){return t=dn(7,t,r,e),t.lanes=n,t}function Md(t,e,n,r){return t=dn(22,t,r,e),t.elementType=dk,t.lanes=n,t.stateNode={isHidden:!1},t}function pf(t,e,n){return t=dn(6,t,null,e),t.lanes=n,t}function mf(t,e,n){return e=dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function BS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kh(0),this.expirationTimes=Kh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fg(t,e,n,r,i,s,o,l,u){return t=new BS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=dn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ym(s),t}function zS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ys,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function n2(t){if(!t)return ai;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Ht(n))return nE(t,n,e)}return e}function r2(t,e,n,r,i,s,o,l,u){return t=fg(n,r,!0,t,i,s,o,l,u),t.context=n2(null),n=t.current,r=Nt(),i=ei(n),s=pr(r,i),s.callback=e??null,Xr(n,s,i),t.current.lanes=i,Ml(t,i,r),qt(t,r),t}function Dd(t,e,n,r){var i=e.current,s=Nt(),o=ei(i);return n=n2(n),e.context===null?e.context=n:e.pendingContext=n,e=pr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xr(i,e,o),t!==null&&(Pn(t,i,o,s),tc(t,i,o)),o}function Gc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function by(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pg(t,e){by(t,e),(t=t.alternate)&&by(t,e)}function HS(){return null}var i2=typeof reportError=="function"?reportError:function(t){console.error(t)};function mg(t){this._internalRoot=t}Vd.prototype.render=mg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Dd(t,e,null,null)};Vd.prototype.unmount=mg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qi(function(){Dd(null,t,null,null)}),e[vr]=null}};function Vd(t){this._internalRoot=t}Vd.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ok();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dr.length&&e!==0&&e<Dr[n].priority;n++);Dr.splice(n,0,t),n===0&&Dk(t)}};function gg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jy(){}function qS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Gc(o);s.call(d)}}var o=r2(e,r,t,0,null,!1,!1,"",jy);return t._reactRootContainer=o,t[vr]=o.current,dl(t.nodeType===8?t.parentNode:t),qi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Gc(u);l.call(d)}}var u=fg(t,0,!1,null,null,!1,!1,"",jy);return t._reactRootContainer=u,t[vr]=u.current,dl(t.nodeType===8?t.parentNode:t),qi(function(){Dd(e,u,n,r)}),u}function Ud(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Gc(o);l.call(u)}}Dd(e,o,t,i)}else o=qS(n,e,t,i,r);return Gc(o)}jk=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ca(e.pendingLanes);n!==0&&(Om(e,n|1),qt(e,He()),!(ge&6)&&(Ao=He()+500,fi()))}break;case 13:qi(function(){var r=_r(t,1);if(r!==null){var i=Nt();Pn(r,t,1,i)}}),pg(t,1)}};Mm=function(t){if(t.tag===13){var e=_r(t,134217728);if(e!==null){var n=Nt();Pn(e,t,134217728,n)}pg(t,134217728)}};Nk=function(t){if(t.tag===13){var e=ei(t),n=_r(t,e);if(n!==null){var r=Nt();Pn(n,t,e,r)}pg(t,e)}};Ok=function(){return Te};Mk=function(t,e){var n=Te;try{return Te=t,e()}finally{Te=n}};tp=function(t,e,n){switch(e){case"input":if(Kf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Pd(r);if(!i)throw Error(B(90));fk(r),Kf(r,i)}}}break;case"textarea":mk(t,n);break;case"select":e=n.value,e!=null&&co(t,!!n.multiple,e,!1)}};wk=ug;Tk=qi;var GS={usingClientEntryPoint:!1,Events:[Vl,to,Pd,kk,Ek,ug]},wa={findFiberByHostInstance:Li,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KS={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sk(t),t===null?null:t.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||HS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ju.isDisabled&&ju.supportsFiber)try{Sd=ju.inject(KS),Hn=ju}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GS;on.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gg(e))throw Error(B(200));return zS(t,e,null,n)};on.createRoot=function(t,e){if(!gg(t))throw Error(B(299));var n=!1,r="",i=i2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fg(t,1,!1,null,null,n,!1,r,i),t[vr]=e.current,dl(t.nodeType===8?t.parentNode:t),new mg(e)};on.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=Sk(e),t=t===null?null:t.stateNode,t};on.flushSync=function(t){return qi(t)};on.hydrate=function(t,e,n){if(!Fd(e))throw Error(B(200));return Ud(null,t,e,!0,n)};on.hydrateRoot=function(t,e,n){if(!gg(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=i2;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=r2(e,null,t,1,n??null,i,!1,s,o),t[vr]=e.current,dl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Vd(e)};on.render=function(t,e,n){if(!Fd(e))throw Error(B(200));return Ud(null,t,e,!1,n)};on.unmountComponentAtNode=function(t){if(!Fd(t))throw Error(B(40));return t._reactRootContainer?(qi(function(){Ud(null,null,t,!1,function(){t._reactRootContainer=null,t[vr]=null})}),!0):!1};on.unstable_batchedUpdates=ug;on.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Fd(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Ud(t,e,n,!1,r)};on.version="18.3.1-next-f1338f8080-20240426";function s2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s2)}catch(t){console.error(t)}}s2(),sk.exports=on;var QS=sk.exports,o2,Ny=QS;o2=Ny.createRoot,Ny.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kl(){return kl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},kl.apply(this,arguments)}var zr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(zr||(zr={}));const Oy="popstate";function YS(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Np("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Kc(i)}return XS(e,n,null,t)}function qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function a2(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ZS(){return Math.random().toString(36).substr(2,8)}function My(t,e){return{usr:t.state,key:t.key,idx:e}}function Np(t,e,n,r){return n===void 0&&(n=null),kl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ho(e):e,{state:n,key:e&&e.key||r||ZS()})}function Kc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ho(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function XS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=zr.Pop,u=null,d=p();d==null&&(d=0,o.replaceState(kl({},o.state,{idx:d}),""));function p(){return(o.state||{idx:null}).idx}function g(){l=zr.Pop;let L=p(),w=L==null?null:L-d;d=L,u&&u({action:l,location:P.location,delta:w})}function y(L,w){l=zr.Push;let v=Np(P.location,L,w);d=p()+1;let x=My(v,d),b=P.createHref(v);try{o.pushState(x,"",b)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(b)}s&&u&&u({action:l,location:P.location,delta:1})}function E(L,w){l=zr.Replace;let v=Np(P.location,L,w);d=p();let x=My(v,d),b=P.createHref(v);o.replaceState(x,"",b),s&&u&&u({action:l,location:P.location,delta:0})}function A(L){let w=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof L=="string"?L:Kc(L);return v=v.replace(/ $/,"%20"),qe(w,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,w)}let P={get action(){return l},get location(){return t(i,o)},listen(L){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Oy,g),u=L,()=>{i.removeEventListener(Oy,g),u=null}},createHref(L){return e(i,L)},createURL:A,encodeLocation(L){let w=A(L);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:y,replace:E,go(L){return o.go(L)}};return P}var Dy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Dy||(Dy={}));function JS(t,e,n){return n===void 0&&(n="/"),eA(t,e,n)}function eA(t,e,n,r){let i=typeof e=="string"?Ho(e):e,s=yg(i.pathname||"/",n);if(s==null)return null;let o=l2(t);tA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let d=fA(s);l=cA(o[u],d)}return l}function l2(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(qe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=ni([r,u.relativePath]),p=n.concat(u);s.children&&s.children.length>0&&(qe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),l2(s.children,e,p,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:lA(d,s.index),routesMeta:p})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of u2(s.path))i(s,o,u)}),e}function u2(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=u2(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function tA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:uA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const nA=/^:[\w-]+$/,rA=3,iA=2,sA=1,oA=10,aA=-2,Vy=t=>t==="*";function lA(t,e){let n=t.split("/"),r=n.length;return n.some(Vy)&&(r+=aA),e&&(r+=iA),n.filter(i=>!Vy(i)).reduce((i,s)=>i+(nA.test(s)?rA:s===""?sA:oA),r)}function uA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function cA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,p=s==="/"?e:e.slice(s.length)||"/",g=dA({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},p),y=u.route;if(!g)return null;Object.assign(i,g.params),o.push({params:i,pathname:ni([s,g.pathname]),pathnameBase:yA(ni([s,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(s=ni([s,g.pathnameBase]))}return o}function dA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=hA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,p,g)=>{let{paramName:y,isOptional:E}=p;if(y==="*"){let P=l[g]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const A=l[g];return E&&!A?d[y]=void 0:d[y]=(A||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:t}}function hA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),a2(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function fA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return a2(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function yg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function pA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ho(t):t;return{pathname:n?n.startsWith("/")?n:mA(n,e):e,search:vA(r),hash:_A(i)}}function mA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function gf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function vg(t,e){let n=gA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function _g(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ho(t):(i=kl({},t),qe(!i.pathname||!i.pathname.includes("?"),gf("?","pathname","search",i)),qe(!i.pathname||!i.pathname.includes("#"),gf("#","pathname","hash",i)),qe(!i.search||!i.search.includes("#"),gf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let g=e.length-1;if(!r&&o.startsWith("..")){let y=o.split("/");for(;y[0]==="..";)y.shift(),g-=1;i.pathname=y.join("/")}l=g>=0?e[g]:"/"}let u=pA(i,l),d=o&&o!=="/"&&o.endsWith("/"),p=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||p)&&(u.pathname+="/"),u}const ni=t=>t.join("/").replace(/\/\/+/g,"/"),yA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),vA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_A=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function kA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const c2=["post","put","patch","delete"];new Set(c2);const EA=["get",...c2];new Set(EA);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function El(){return El=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},El.apply(this,arguments)}const kg=N.createContext(null),wA=N.createContext(null),pi=N.createContext(null),$d=N.createContext(null),mi=N.createContext({outlet:null,matches:[],isDataRoute:!1}),d2=N.createContext(null);function TA(t,e){let{relative:n}=e===void 0?{}:e;qo()||qe(!1);let{basename:r,navigator:i}=N.useContext(pi),{hash:s,pathname:o,search:l}=f2(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:ni([r,o])),i.createHref({pathname:u,search:l,hash:s})}function qo(){return N.useContext($d)!=null}function rs(){return qo()||qe(!1),N.useContext($d).location}function h2(t){N.useContext(pi).static||N.useLayoutEffect(t)}function Ul(){let{isDataRoute:t}=N.useContext(mi);return t?MA():IA()}function IA(){qo()||qe(!1);let t=N.useContext(kg),{basename:e,future:n,navigator:r}=N.useContext(pi),{matches:i}=N.useContext(mi),{pathname:s}=rs(),o=JSON.stringify(vg(i,n.v7_relativeSplatPath)),l=N.useRef(!1);return h2(()=>{l.current=!0}),N.useCallback(function(d,p){if(p===void 0&&(p={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let g=_g(d,JSON.parse(o),s,p.relative==="path");t==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:ni([e,g.pathname])),(p.replace?r.replace:r.push)(g,p.state,p)},[e,r,o,s,t])}function f2(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=N.useContext(pi),{matches:i}=N.useContext(mi),{pathname:s}=rs(),o=JSON.stringify(vg(i,r.v7_relativeSplatPath));return N.useMemo(()=>_g(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function xA(t,e){return SA(t,e)}function SA(t,e,n,r){qo()||qe(!1);let{navigator:i,static:s}=N.useContext(pi),{matches:o}=N.useContext(mi),l=o[o.length-1],u=l?l.params:{};l&&l.pathname;let d=l?l.pathnameBase:"/";l&&l.route;let p=rs(),g;if(e){var y;let w=typeof e=="string"?Ho(e):e;d==="/"||(y=w.pathname)!=null&&y.startsWith(d)||qe(!1),g=w}else g=p;let E=g.pathname||"/",A=E;if(d!=="/"){let w=d.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(w.length).join("/")}let P=JS(t,{pathname:A}),L=LA(P&&P.map(w=>Object.assign({},w,{params:Object.assign({},u,w.params),pathname:ni([d,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?d:ni([d,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n,r);return e&&L?N.createElement($d.Provider,{value:{location:El({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:zr.Pop}},L):L}function AA(){let t=OA(),e=kA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,null)}const CA=N.createElement(AA,null);class RA extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?N.createElement(mi.Provider,{value:this.props.routeContext},N.createElement(d2.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function PA(t){let{routeContext:e,match:n,children:r}=t,i=N.useContext(kg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(mi.Provider,{value:e},r)}function LA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let p=o.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);p>=0||qe(!1),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let g=o[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:y,errors:E}=n,A=g.route.loader&&y[g.route.id]===void 0&&(!E||E[g.route.id]===void 0);if(g.route.lazy||A){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,g,y)=>{let E,A=!1,P=null,L=null;n&&(E=l&&g.route.id?l[g.route.id]:void 0,P=g.route.errorElement||CA,u&&(d<0&&y===0?(DA("route-fallback"),A=!0,L=null):d===y&&(A=!0,L=g.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,y+1)),v=()=>{let x;return E?x=P:A?x=L:g.route.Component?x=N.createElement(g.route.Component,null):g.route.element?x=g.route.element:x=p,N.createElement(PA,{match:g,routeContext:{outlet:p,matches:w,isDataRoute:n!=null},children:x})};return n&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?N.createElement(RA,{location:n.location,revalidation:n.revalidation,component:P,error:E,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):v()},null)}var p2=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(p2||{}),m2=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(m2||{});function bA(t){let e=N.useContext(kg);return e||qe(!1),e}function jA(t){let e=N.useContext(wA);return e||qe(!1),e}function NA(t){let e=N.useContext(mi);return e||qe(!1),e}function g2(t){let e=NA(),n=e.matches[e.matches.length-1];return n.route.id||qe(!1),n.route.id}function OA(){var t;let e=N.useContext(d2),n=jA(),r=g2();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function MA(){let{router:t}=bA(p2.UseNavigateStable),e=g2(m2.UseNavigateStable),n=N.useRef(!1);return h2(()=>{n.current=!0}),N.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,El({fromRouteId:e},s)))},[t,e])}const Fy={};function DA(t,e,n){Fy[t]||(Fy[t]=!0)}function VA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function y2(t){let{to:e,replace:n,state:r,relative:i}=t;qo()||qe(!1);let{future:s,static:o}=N.useContext(pi),{matches:l}=N.useContext(mi),{pathname:u}=rs(),d=Ul(),p=_g(e,vg(l,s.v7_relativeSplatPath),u,i==="path"),g=JSON.stringify(p);return N.useEffect(()=>d(JSON.parse(g),{replace:n,state:r,relative:i}),[d,g,i,n,r]),null}function Un(t){qe(!1)}function FA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=zr.Pop,navigator:s,static:o=!1,future:l}=t;qo()&&qe(!1);let u=e.replace(/^\/*/,"/"),d=N.useMemo(()=>({basename:u,navigator:s,static:o,future:El({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Ho(r));let{pathname:p="/",search:g="",hash:y="",state:E=null,key:A="default"}=r,P=N.useMemo(()=>{let L=yg(p,u);return L==null?null:{location:{pathname:L,search:g,hash:y,state:E,key:A},navigationType:i}},[u,p,g,y,E,A,i]);return P==null?null:N.createElement(pi.Provider,{value:d},N.createElement($d.Provider,{children:n,value:P}))}function UA(t){let{children:e,location:n}=t;return xA(Op(e),n)}new Promise(()=>{});function Op(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let s=[...e,i];if(r.type===N.Fragment){n.push.apply(n,Op(r.props.children,s));return}r.type!==Un&&qe(!1),!r.props.index||!r.props.children||qe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Op(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mp(){return Mp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Mp.apply(this,arguments)}function $A(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function WA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function BA(t,e){return t.button===0&&(!e||e==="_self")&&!WA(t)}const zA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],HA="6";try{window.__reactRouterVersion=HA}catch{}const qA="startTransition",Uy=V8[qA];function GA(t){let{basename:e,children:n,future:r,window:i}=t,s=N.useRef();s.current==null&&(s.current=YS({window:i,v5Compat:!0}));let o=s.current,[l,u]=N.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},p=N.useCallback(g=>{d&&Uy?Uy(()=>u(g)):u(g)},[u,d]);return N.useLayoutEffect(()=>o.listen(p),[o,p]),N.useEffect(()=>VA(r),[r]),N.createElement(FA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const KA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Eg=N.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:d,preventScrollReset:p,viewTransition:g}=e,y=$A(e,zA),{basename:E}=N.useContext(pi),A,P=!1;if(typeof d=="string"&&QA.test(d)&&(A=d,KA))try{let x=new URL(window.location.href),b=d.startsWith("//")?new URL(x.protocol+d):new URL(d),M=yg(b.pathname,E);b.origin===x.origin&&M!=null?d=M+b.search+b.hash:P=!0}catch{}let L=TA(d,{relative:i}),w=YA(d,{replace:o,state:l,target:u,preventScrollReset:p,relative:i,viewTransition:g});function v(x){r&&r(x),x.defaultPrevented||w(x)}return N.createElement("a",Mp({},y,{href:A||L,onClick:P||s?r:v,ref:n,target:u}))});var $y;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})($y||($y={}));var Wy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Wy||(Wy={}));function YA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Ul(),d=rs(),p=f2(t,{relative:o});return N.useCallback(g=>{if(BA(g,n)){g.preventDefault();let y=r!==void 0?r:Kc(d)===Kc(p);u(t,{replace:y,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[d,u,p,r,i,n,t,s,o,l])}var By={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ZA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_2={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,p=s>>2,g=(s&3)<<4|l>>4;let y=(l&15)<<2|d>>6,E=d&63;u||(E=64,o||(y=64)),r.push(n[p],n[g],n[y],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(v2(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ZA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||g==null)throw new XA;const y=s<<2|l>>4;if(r.push(y),d!==64){const E=l<<4&240|d>>2;if(r.push(E),g!==64){const A=d<<6&192|g;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const JA=function(t){const e=v2(t);return _2.encodeByteArray(e,!0)},Qc=function(t){return JA(t).replace(/\./g,"")},k2=function(t){try{return _2.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function eC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tC=()=>eC().__FIREBASE_DEFAULTS__,nC=()=>{if(typeof process>"u"||typeof By>"u")return;const t=By.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&k2(t[1]);return e&&JSON.parse(e)},Wd=()=>{try{return tC()||nC()||rC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},E2=t=>{var e,n;return(n=(e=Wd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},w2=t=>{const e=E2(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},T2=()=>{var t;return(t=Wd())===null||t===void 0?void 0:t.config},I2=t=>{var e;return(e=Wd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function x2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Qc(JSON.stringify(n)),Qc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function oC(){var t;const e=(t=Wd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function aC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function S2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uC(){const t=Rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cC(){return!oC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function A2(){try{return typeof indexedDB=="object"}catch{return!1}}function C2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function dC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hC,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,is.prototype.create)}}class is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?fC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new vn(i,l,r)}}function fC(t,e){return t.replace(pC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const pC=/\{\$([^}]+)}/g;function mC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(zy(s)&&zy(o)){if(!wl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Pa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function La(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gC(t,e){const n=new yC(t,e);return n.subscribe.bind(n)}class yC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yf),i.error===void 0&&(i.error=yf),i.complete===void 0&&(i.complete=yf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yf(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=1e3,kC=2,EC=4*60*60*1e3,wC=.5;function Hy(t,e=_C,n=kC){const r=e*Math.pow(n,t),i=Math.round(wC*r*(Math.random()-.5)*2);return Math.min(EC,r+i)}/**
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
 */function Be(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new iC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xC(e))try{this.getOrInitializeService({instanceIdentifier:Ri})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ri){return this.instances.has(e)}getOptions(e=Ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:IC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ri){return this.component?this.component.multipleInstances?e:Ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IC(t){return t===Ri?void 0:t}function xC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const AC={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},CC=de.INFO,RC={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},PC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=RC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bd{constructor(e){this.name=e,this._logLevel=CC,this._logHandler=PC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const LC=(t,e)=>e.some(n=>t instanceof n);let qy,Gy;function bC(){return qy||(qy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jC(){return Gy||(Gy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const R2=new WeakMap,Dp=new WeakMap,P2=new WeakMap,vf=new WeakMap,wg=new WeakMap;function NC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ri(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&R2.set(n,t)}).catch(()=>{}),wg.set(e,t),e}function OC(t){if(Dp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Dp.set(t,e)}let Vp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||P2.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ri(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MC(t){Vp=t(Vp)}function DC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_f(this),e,...n);return P2.set(r,e.sort?e.sort():[e]),ri(r)}:jC().includes(t)?function(...e){return t.apply(_f(this),e),ri(R2.get(this))}:function(...e){return ri(t.apply(_f(this),e))}}function VC(t){return typeof t=="function"?DC(t):(t instanceof IDBTransaction&&OC(t),LC(t,bC())?new Proxy(t,Vp):t)}function ri(t){if(t instanceof IDBRequest)return NC(t);if(vf.has(t))return vf.get(t);const e=VC(t);return e!==t&&(vf.set(t,e),wg.set(e,t)),e}const _f=t=>wg.get(t);function L2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=ri(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ri(o.result),u.oldVersion,u.newVersion,ri(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const FC=["get","getKey","getAll","getAllKeys","count"],UC=["put","add","delete","clear"],kf=new Map;function Ky(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kf.get(e))return kf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=UC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return kf.set(e,s),s}MC(t=>({...t,get:(e,n,r)=>Ky(e,n)||t.get(e,n,r),has:(e,n)=>!!Ky(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fp="@firebase/app",Qy="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Bd("@firebase/app"),BC="@firebase/app-compat",zC="@firebase/analytics-compat",HC="@firebase/analytics",qC="@firebase/app-check-compat",GC="@firebase/app-check",KC="@firebase/auth",QC="@firebase/auth-compat",YC="@firebase/database",ZC="@firebase/data-connect",XC="@firebase/database-compat",JC="@firebase/functions",e4="@firebase/functions-compat",t4="@firebase/installations",n4="@firebase/installations-compat",r4="@firebase/messaging",i4="@firebase/messaging-compat",s4="@firebase/performance",o4="@firebase/performance-compat",a4="@firebase/remote-config",l4="@firebase/remote-config-compat",u4="@firebase/storage",c4="@firebase/storage-compat",d4="@firebase/firestore",h4="@firebase/vertexai-preview",f4="@firebase/firestore-compat",p4="firebase",m4="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="[DEFAULT]",g4={[Fp]:"fire-core",[BC]:"fire-core-compat",[HC]:"fire-analytics",[zC]:"fire-analytics-compat",[GC]:"fire-app-check",[qC]:"fire-app-check-compat",[KC]:"fire-auth",[QC]:"fire-auth-compat",[YC]:"fire-rtdb",[ZC]:"fire-data-connect",[XC]:"fire-rtdb-compat",[JC]:"fire-fn",[e4]:"fire-fn-compat",[t4]:"fire-iid",[n4]:"fire-iid-compat",[r4]:"fire-fcm",[i4]:"fire-fcm-compat",[s4]:"fire-perf",[o4]:"fire-perf-compat",[a4]:"fire-rc",[l4]:"fire-rc-compat",[u4]:"fire-gcs",[c4]:"fire-gcs-compat",[d4]:"fire-fst",[f4]:"fire-fst-compat",[h4]:"fire-vertex","fire-js":"fire-js",[p4]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=new Map,y4=new Map,$p=new Map;function Yy(t,e){try{t.container.addComponent(e)}catch(n){Er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jn(t){const e=t.name;if($p.has(e))return Er.debug(`There were multiple attempts to register component ${e}.`),!1;$p.set(e,t);for(const n of Yc.values())Yy(n,t);for(const n of y4.values())Yy(n,t);return!0}function gi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ii=new is("app","Firebase",v4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ii.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=m4;function b2(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Up,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ii.create("bad-app-name",{appName:String(i)});if(n||(n=T2()),!n)throw ii.create("no-options");const s=Yc.get(i);if(s){if(wl(n,s.options)&&wl(r,s.config))return s;throw ii.create("duplicate-app",{appName:i})}const o=new SC(i);for(const u of $p.values())o.addComponent(u);const l=new _4(n,r,o);return Yc.set(i,l),l}function zd(t=Up){const e=Yc.get(t);if(!e&&t===Up&&T2())return b2();if(!e)throw ii.create("no-app",{appName:t});return e}function Gt(t,e,n){var r;let i=(r=g4[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Er.warn(l.join(" "));return}jn(new gn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const k4="firebase-heartbeat-database",E4=1,Tl="firebase-heartbeat-store";let Ef=null;function j2(){return Ef||(Ef=L2(k4,E4,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Tl)}catch(n){console.warn(n)}}}}).catch(t=>{throw ii.create("idb-open",{originalErrorMessage:t.message})})),Ef}async function w4(t){try{const n=(await j2()).transaction(Tl),r=await n.objectStore(Tl).get(N2(t));return await n.done,r}catch(e){if(e instanceof vn)Er.warn(e.message);else{const n=ii.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Er.warn(n.message)}}}async function Zy(t,e){try{const r=(await j2()).transaction(Tl,"readwrite");await r.objectStore(Tl).put(e,N2(t)),await r.done}catch(n){if(n instanceof vn)Er.warn(n.message);else{const r=ii.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Er.warn(r.message)}}}function N2(t){return`${t.name}!${t.options.appId}`}/**
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
 */const T4=1024,I4=30*24*60*60*1e3;class x4{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new A4(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=I4}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Er.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xy(),{heartbeatsToSend:r,unsentEntries:i}=S4(this._heartbeatsCache.heartbeats),s=Qc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Er.warn(n),""}}}function Xy(){return new Date().toISOString().substring(0,10)}function S4(t,e=T4){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class A4{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return A2()?C2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await w4(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Jy(t){return Qc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C4(t){jn(new gn("platform-logger",e=>new $C(e),"PRIVATE")),jn(new gn("heartbeat",e=>new x4(e),"PRIVATE")),Gt(Fp,Qy,t),Gt(Fp,Qy,"esm2017"),Gt("fire-js","")}C4("");function Tg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function O2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const R4=O2,M2=new is("auth","Firebase",O2());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=new Bd("@firebase/auth");function P4(t,...e){Zc.logLevel<=de.WARN&&Zc.warn(`Auth (${ss}): ${t}`,...e)}function lc(t,...e){Zc.logLevel<=de.ERROR&&Zc.error(`Auth (${ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,...e){throw Ig(t,...e)}function Gn(t,...e){return Ig(t,...e)}function D2(t,e,n){const r=Object.assign(Object.assign({},R4()),{[e]:n});return new is("auth","Firebase",r).create(e,{appName:t.name})}function mr(t){return D2(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ig(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return M2.create(t,...e)}function te(t,e,...n){if(!t)throw Ig(e,...n)}function dr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lc(e),new Error(e)}function wr(t,e){t||dr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function L4(){return ev()==="http:"||ev()==="https:"}function ev(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(L4()||S2()||"connection"in navigator)?navigator.onLine:!0}function j4(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n){this.shortDelay=e,this.longDelay=n,wr(n>e,"Short delay should be less than long delay!"),this.isMobile=sC()||lC()}get(){return b4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t,e){wr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O4=new Wl(3e4,6e4);function Sr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jn(t,e,n,r,i={}){return F2(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=$l(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return aC()||(d.referrerPolicy="no-referrer"),V2.fetch()(U2(t,t.config.apiHost,n,l),d)})}async function F2(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},N4),e);try{const i=new D4(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Nu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Nu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Nu(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw D2(t,p,d);Nn(t,p)}}catch(i){if(i instanceof vn)throw i;Nn(t,"network-request-failed",{message:String(i)})}}async function Bl(t,e,n,r,i={}){const s=await Jn(t,e,n,r,i);return"mfaPendingCredential"in s&&Nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function U2(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?xg(t.config,i):`${t.config.apiScheme}://${i}`}function M4(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class D4{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gn(this.auth,"network-request-failed")),O4.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Nu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gn(t,e,r);return i.customData._tokenResponse=n,i}function tv(t){return t!==void 0&&t.enterprise!==void 0}class V4{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return M4(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function F4(t,e){return Jn(t,"GET","/v2/recaptchaConfig",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U4(t,e){return Jn(t,"POST","/v1/accounts:delete",e)}async function $2(t,e){return Jn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $4(t,e=!1){const n=Be(t),r=await n.getIdToken(e),i=Sg(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ga(wf(i.auth_time)),issuedAtTime:Ga(wf(i.iat)),expirationTime:Ga(wf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function wf(t){return Number(t)*1e3}function Sg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return lc("JWT malformed, contained fewer than 3 sections"),null;try{const i=k2(n);return i?JSON.parse(i):(lc("Failed to decode base64 JWT payload"),null)}catch(i){return lc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nv(t){const e=Sg(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&W4(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function W4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ga(this.lastLoginAt),this.creationTime=Ga(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Co(t,$2(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?W2(s.providerUserInfo):[],l=H4(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Bp(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,g)}async function z4(t){const e=Be(t);await Xc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function H4(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function W2(t){return t.map(e=>{var{providerId:n}=e,r=Tg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q4(t,e){const n=await F2(t,{},async()=>{const r=$l({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=U2(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",V2.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function G4(t,e){return Jn(t,"POST","/v2/accounts:revokeToken",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=nv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await q4(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new yo;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yo,this.toJSON())}_performRefresh(){return dr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Tg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new B4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Bp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Co(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $4(this,e)}reload(){return z4(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zn(this.auth.app))return Promise.reject(mr(this.auth));const e=await this.getIdToken();return await Co(this,U4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,d,p;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(d=n.createdAt)!==null&&d!==void 0?d:void 0,v=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:x,emailVerified:b,isAnonymous:M,providerData:V,stsTokenManager:k}=n;te(x&&k,e,"internal-error");const _=yo.fromJSON(this.name,k);te(typeof x=="string",e,"internal-error"),Lr(g,e.name),Lr(y,e.name),te(typeof b=="boolean",e,"internal-error"),te(typeof M=="boolean",e,"internal-error"),Lr(E,e.name),Lr(A,e.name),Lr(P,e.name),Lr(L,e.name),Lr(w,e.name),Lr(v,e.name);const I=new hr({uid:x,auth:e,email:y,emailVerified:b,displayName:g,isAnonymous:M,photoURL:A,phoneNumber:E,tenantId:P,stsTokenManager:_,createdAt:w,lastLoginAt:v});return V&&Array.isArray(V)&&(I.providerData=V.map(C=>Object.assign({},C))),L&&(I._redirectEventId=L),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new yo;i.updateFromServerResponse(n);const s=new hr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?W2(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new yo;l.updateFromIdToken(r);const u=new hr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Bp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=new Map;function fr(t){wr(t instanceof Function,"Expected a class definition");let e=rv.get(t);return e?(wr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}B2.type="NONE";const iv=B2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t,e,n){return`firebase:${t}:${e}:${n}`}class vo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=uc(this.userKey,i.apiKey,s),this.fullPersistenceKey=uc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vo(fr(iv),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||fr(iv);const o=uc(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const p=await d._get(o);if(p){const g=hr._fromJSON(e,p);d!==s&&(l=g),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new vo(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new vo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(G2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Q2(e))return"Blackberry";if(Y2(e))return"Webos";if(H2(e))return"Safari";if((e.includes("chrome/")||q2(e))&&!e.includes("edge/"))return"Chrome";if(K2(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function z2(t=Rt()){return/firefox\//i.test(t)}function H2(t=Rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function q2(t=Rt()){return/crios\//i.test(t)}function G2(t=Rt()){return/iemobile/i.test(t)}function K2(t=Rt()){return/android/i.test(t)}function Q2(t=Rt()){return/blackberry/i.test(t)}function Y2(t=Rt()){return/webos/i.test(t)}function Ag(t=Rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function K4(t=Rt()){var e;return Ag(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Q4(){return uC()&&document.documentMode===10}function Z2(t=Rt()){return Ag(t)||K2(t)||Y2(t)||Q2(t)||/windows phone/i.test(t)||G2(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X2(t,e=[]){let n;switch(t){case"Browser":n=sv(Rt());break;case"Worker":n=`${sv(Rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ss}/${r}`}/**
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
 */class Y4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Z4(t,e={}){return Jn(t,"GET","/v2/passwordPolicy",Sr(t,e))}/**
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
 */const X4=6;class J4{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:X4,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ov(this),this.idTokenSubscription=new ov(this),this.beforeStateQueue=new Y4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=M2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await vo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $2(this,{idToken:e}),r=await hr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(zn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=j4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zn(this.app))return Promise.reject(mr(this));const n=e?Be(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zn(this.app)?Promise.reject(mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zn(this.app)?Promise.reject(mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Z4(this),n=new J4(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await G4(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fr(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await vo.create(this,[fr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=X2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&P4(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yi(t){return Be(t)}class ov{constructor(e){this.auth=e,this.observer=null,this.addObserver=gC(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tR(t){Hd=t}function J2(t){return Hd.loadJS(t)}function nR(){return Hd.recaptchaEnterpriseScript}function rR(){return Hd.gapiScript}function iR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sR="recaptcha-enterprise",oR="NO_RECAPTCHA";class aR{constructor(e){this.type=sR,this.auth=yi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{F4(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new V4(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;tv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(oR)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&tv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=nR();u.length!==0&&(u+=l),J2(u).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function av(t,e,n,r=!1){const i=new aR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Jc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await av(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await av(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(t,e){const n=gi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(wl(s,e??{}))return i;Nn(i,"already-initialized")}return n.initialize({options:e})}function uR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cR(t,e,n){const r=yi(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ew(e),{host:o,port:l}=dR(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),hR()}function ew(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dR(t){const e=ew(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:lv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:lv(o)}}}function lv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dr("not implemented")}_getIdTokenResponse(e){return dr("not implemented")}_linkToIdToken(e,n){return dr("not implemented")}_getReauthenticationResolver(e){return dr("not implemented")}}async function fR(t,e){return Jn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pR(t,e){return Bl(t,"POST","/v1/accounts:signInWithPassword",Sr(t,e))}async function mR(t,e){return Jn(t,"POST","/v1/accounts:sendOobCode",Sr(t,e))}async function gR(t,e){return mR(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yR(t,e){return Bl(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}async function vR(t,e){return Bl(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends Cg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Il(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Il(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jc(e,n,"signInWithPassword",pR);case"emailLink":return yR(e,{email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jc(e,r,"signUpPassword",fR);case"emailLink":return vR(e,{idToken:n,email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(t,e){return Bl(t,"POST","/v1/accounts:signInWithIdp",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R="http://localhost";class Gi extends Cg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Tg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Gi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _o(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_o(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_o(e,n)}buildRequest(){const e={requestUri:_R,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$l(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ER(t){const e=Pa(La(t)).link,n=e?Pa(La(e)).deep_link_id:null,r=Pa(La(t)).deep_link_id;return(r?Pa(La(r)).link:null)||r||n||e||t}class Rg{constructor(e){var n,r,i,s,o,l;const u=Pa(La(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,g=kR((i=u.mode)!==null&&i!==void 0?i:null);te(d&&p&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=p,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=ER(e);try{return new Rg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.providerId=Go.PROVIDER_ID}static credential(e,n){return Il._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rg.parseLink(n);return te(r,"argument-error"),Il._fromEmailAndCode(e,r.code,r.tenantId)}}Go.PROVIDER_ID="password";Go.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Go.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends tw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends zl{constructor(){super("facebook.com")}static credential(e){return Gi._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fr.credential(e.oauthAccessToken)}catch{return null}}}Fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends zl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.GOOGLE_SIGN_IN_METHOD="google.com";lr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends zl{constructor(){super("github.com")}static credential(e){return Gi._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ur.credential(e.oauthAccessToken)}catch{return null}}}Ur.GITHUB_SIGN_IN_METHOD="github.com";Ur.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends zl{constructor(){super("twitter.com")}static credential(e,n){return Gi._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $r.credential(n,r)}catch{return null}}}$r.TWITTER_SIGN_IN_METHOD="twitter.com";$r.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wR(t,e){return Bl(t,"POST","/v1/accounts:signUp",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await hr._fromIdTokenResponse(e,r,i),o=uv(r);return new Ki({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=uv(r);return new Ki({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function uv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends vn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ed.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ed(e,n,r,i)}}function nw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ed._fromErrorAndOperation(t,s,e,r):s})}async function TR(t,e,n=!1){const r=await Co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ki._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IR(t,e,n=!1){const{auth:r}=t;if(zn(r.app))return Promise.reject(mr(r));const i="reauthenticate";try{const s=await Co(t,nw(r,i,e,t),n);te(s.idToken,r,"internal-error");const o=Sg(s.idToken);te(o,r,"internal-error");const{sub:l}=o;return te(t.uid===l,r,"user-mismatch"),Ki._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw(t,e,n=!1){if(zn(t.app))return Promise.reject(mr(t));const r="signIn",i=await nw(t,r,e),s=await Ki._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function xR(t,e){return rw(yi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iw(t){const e=yi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function SR(t,e,n){const r=yi(t);await Jc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",gR)}async function AR(t,e,n){if(zn(t.app))return Promise.reject(mr(t));const r=yi(t),o=await Jc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&iw(t),u}),l=await Ki._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function CR(t,e,n){return zn(t.app)?Promise.reject(mr(t)):xR(Be(t),Go.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RR(t,e){return Jn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Be(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Co(r,RR(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function LR(t,e,n,r){return Be(t).onIdTokenChanged(e,n,r)}function bR(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}function jR(t,e,n,r){return Be(t).onAuthStateChanged(e,n,r)}function NR(t){return Be(t).signOut()}const td="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(td,"1"),this.storage.removeItem(td),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=1e3,MR=10;class ow extends sw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Z2(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Q4()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,MR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ow.type="LOCAL";const DR=ow;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw extends sw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}aw.type="SESSION";const lw=aw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new qd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),u=await VR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const d=Pg("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const y=g;if(y.data.eventId===d)switch(y.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){return window}function UR(t){Kn().location.href=t}/**
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
 */function uw(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function $R(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BR(){return uw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="firebaseLocalStorageDb",zR=1,nd="firebaseLocalStorage",dw="fbase_key";class Hl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gd(t,e){return t.transaction([nd],e?"readwrite":"readonly").objectStore(nd)}function HR(){const t=indexedDB.deleteDatabase(cw);return new Hl(t).toPromise()}function zp(){const t=indexedDB.open(cw,zR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(nd,{keyPath:dw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(nd)?e(r):(r.close(),await HR(),e(await zp()))})})}async function cv(t,e,n){const r=Gd(t,!0).put({[dw]:e,value:n});return new Hl(r).toPromise()}async function qR(t,e){const n=Gd(t,!1).get(e),r=await new Hl(n).toPromise();return r===void 0?null:r.value}function dv(t,e){const n=Gd(t,!0).delete(e);return new Hl(n).toPromise()}const GR=800,KR=3;class hw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qd._getInstance(BR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $R(),!this.activeServiceWorker)return;this.sender=new FR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zp();return await cv(e,td,"1"),await dv(e,td),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Gd(i,!1).getAll();return new Hl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hw.type="LOCAL";const QR=hw;new Wl(3e4,6e4);/**
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
 */function YR(t,e){return e?fr(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg extends Cg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _o(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _o(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _o(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZR(t){return rw(t.auth,new Lg(t),t.bypassAuthState)}function XR(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),IR(n,new Lg(t),t.bypassAuthState)}async function JR(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),TR(n,new Lg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZR;case"linkViaPopup":case"linkViaRedirect":return JR;case"reauthViaPopup":case"reauthViaRedirect":return XR;default:Nn(this.auth,"internal-error")}}resolve(e){wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e6=new Wl(2e3,1e4);class lo extends fw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,lo.currentPopupAction&&lo.currentPopupAction.cancel(),lo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){wr(this.filter.length===1,"Popup operations only handle one event");const e=Pg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,e6.get())};e()}}lo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t6="pendingRedirect",cc=new Map;class n6 extends fw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cc.get(this.auth._key());if(!e){try{const r=await r6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cc.set(this.auth._key(),e)}return this.bypassAuthState||cc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function r6(t,e){const n=o6(e),r=s6(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function i6(t,e){cc.set(t._key(),e)}function s6(t){return fr(t._redirectPersistence)}function o6(t){return uc(t6,t.config.apiKey,t.name)}async function a6(t,e,n=!1){if(zn(t.app))return Promise.reject(mr(t));const r=yi(t),i=YR(r,e),o=await new n6(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l6=10*60*1e3;class u6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!c6(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=l6&&this.cachedEventUids.clear(),this.cachedEventUids.has(hv(e))}saveEventToCache(e){this.cachedEventUids.add(hv(e)),this.lastProcessedEventTime=Date.now()}}function hv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function c6(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d6(t,e={}){return Jn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,f6=/^https?/;async function p6(t){if(t.config.emulator)return;const{authorizedDomains:e}=await d6(t);for(const n of e)try{if(m6(n))return}catch{}Nn(t,"unauthorized-domain")}function m6(t){const e=Wp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!f6.test(n))return!1;if(h6.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const g6=new Wl(3e4,6e4);function fv(){const t=Kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function y6(t){return new Promise((e,n)=>{var r,i,s;function o(){fv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fv(),n(Gn(t,"network-request-failed"))},timeout:g6.get()})}if(!((i=(r=Kn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Kn().gapi)===null||s===void 0)&&s.load)o();else{const l=iR("iframefcb");return Kn()[l]=()=>{gapi.load?o():n(Gn(t,"network-request-failed"))},J2(`${rR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw dc=null,e})}let dc=null;function v6(t){return dc=dc||y6(t),dc}/**
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
 */const _6=new Wl(5e3,15e3),k6="__/auth/iframe",E6="emulator/auth/iframe",w6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},T6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function I6(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xg(e,E6):`https://${t.config.authDomain}/${k6}`,r={apiKey:e.apiKey,appName:t.name,v:ss},i=T6.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$l(r).slice(1)}`}async function x6(t){const e=await v6(t),n=Kn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:I6(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:w6,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Gn(t,"network-request-failed"),l=Kn().setTimeout(()=>{s(o)},_6.get());function u(){Kn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const S6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},A6=500,C6=600,R6="_blank",P6="http://localhost";class pv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function L6(t,e,n,r=A6,i=C6){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},S6),{width:r.toString(),height:i.toString(),top:s,left:o}),d=Rt().toLowerCase();n&&(l=q2(d)?R6:n),z2(d)&&(e=e||P6,u.scrollbars="yes");const p=Object.entries(u).reduce((y,[E,A])=>`${y}${E}=${A},`,"");if(K4(d)&&l!=="_self")return b6(e||"",l),new pv(null);const g=window.open(e||"",l,p);te(g,t,"popup-blocked");try{g.focus()}catch{}return new pv(g)}function b6(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const j6="__/auth/handler",N6="emulator/auth/handler",O6=encodeURIComponent("fac");async function mv(t,e,n,r,i,s){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ss,eventId:i};if(e instanceof tw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))o[p]=g}if(e instanceof zl){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),d=u?`#${O6}=${encodeURIComponent(u)}`:"";return`${M6(t)}?${$l(l).slice(1)}${d}`}function M6({config:t}){return t.emulator?xg(t,N6):`https://${t.authDomain}/${j6}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="webStorageSupport";class D6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lw,this._completeRedirectFn=a6,this._overrideRedirectResult=i6}async _openPopup(e,n,r,i){var s;wr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await mv(e,n,r,Wp(),i);return L6(e,o,Pg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await mv(e,n,r,Wp(),i);return UR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(wr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await x6(e),r=new u6(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tf,{type:Tf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Tf];o!==void 0&&n(!!o),Nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=p6(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Z2()||H2()||Ag()}}const V6=D6;var gv="@firebase/auth",yv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U6(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $6(t){jn(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:X2(t)},d=new eR(r,i,s,u);return uR(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jn(new gn("auth-internal",e=>{const n=yi(e.getProvider("auth").getImmediate());return(r=>new F6(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(gv,yv,U6(t)),Gt(gv,yv,"esm2017")}/**
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
 */const W6=5*60,B6=I2("authIdTokenMaxAge")||W6;let vv=null;const z6=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>B6)return;const i=n==null?void 0:n.token;vv!==i&&(vv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function H6(t=zd()){const e=gi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lR(t,{popupRedirectResolver:V6,persistence:[QR,DR,lw]}),r=I2("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=z6(s.toString());bR(n,o,()=>o(n.currentUser)),LR(n,l=>o(l))}}const i=E2("auth");return i&&cR(n,`http://${i}`),n}function q6(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}tR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Gn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",q6().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$6("Browser");var G6="firebase",K6="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(G6,K6,"app");var _v=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fi,mw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,_){function I(){}I.prototype=_.prototype,k.D=_.prototype,k.prototype=new I,k.prototype.constructor=k,k.C=function(C,j,R){for(var S=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)S[ae-2]=arguments[ae];return _.prototype[j].apply(C,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(k,_,I){I||(I=0);var C=Array(16);if(typeof _=="string")for(var j=0;16>j;++j)C[j]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(j=0;16>j;++j)C[j]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=k.g[0],I=k.g[1],j=k.g[2];var R=k.g[3],S=_+(R^I&(j^R))+C[0]+3614090360&4294967295;_=I+(S<<7&4294967295|S>>>25),S=R+(j^_&(I^j))+C[1]+3905402710&4294967295,R=_+(S<<12&4294967295|S>>>20),S=j+(I^R&(_^I))+C[2]+606105819&4294967295,j=R+(S<<17&4294967295|S>>>15),S=I+(_^j&(R^_))+C[3]+3250441966&4294967295,I=j+(S<<22&4294967295|S>>>10),S=_+(R^I&(j^R))+C[4]+4118548399&4294967295,_=I+(S<<7&4294967295|S>>>25),S=R+(j^_&(I^j))+C[5]+1200080426&4294967295,R=_+(S<<12&4294967295|S>>>20),S=j+(I^R&(_^I))+C[6]+2821735955&4294967295,j=R+(S<<17&4294967295|S>>>15),S=I+(_^j&(R^_))+C[7]+4249261313&4294967295,I=j+(S<<22&4294967295|S>>>10),S=_+(R^I&(j^R))+C[8]+1770035416&4294967295,_=I+(S<<7&4294967295|S>>>25),S=R+(j^_&(I^j))+C[9]+2336552879&4294967295,R=_+(S<<12&4294967295|S>>>20),S=j+(I^R&(_^I))+C[10]+4294925233&4294967295,j=R+(S<<17&4294967295|S>>>15),S=I+(_^j&(R^_))+C[11]+2304563134&4294967295,I=j+(S<<22&4294967295|S>>>10),S=_+(R^I&(j^R))+C[12]+1804603682&4294967295,_=I+(S<<7&4294967295|S>>>25),S=R+(j^_&(I^j))+C[13]+4254626195&4294967295,R=_+(S<<12&4294967295|S>>>20),S=j+(I^R&(_^I))+C[14]+2792965006&4294967295,j=R+(S<<17&4294967295|S>>>15),S=I+(_^j&(R^_))+C[15]+1236535329&4294967295,I=j+(S<<22&4294967295|S>>>10),S=_+(j^R&(I^j))+C[1]+4129170786&4294967295,_=I+(S<<5&4294967295|S>>>27),S=R+(I^j&(_^I))+C[6]+3225465664&4294967295,R=_+(S<<9&4294967295|S>>>23),S=j+(_^I&(R^_))+C[11]+643717713&4294967295,j=R+(S<<14&4294967295|S>>>18),S=I+(R^_&(j^R))+C[0]+3921069994&4294967295,I=j+(S<<20&4294967295|S>>>12),S=_+(j^R&(I^j))+C[5]+3593408605&4294967295,_=I+(S<<5&4294967295|S>>>27),S=R+(I^j&(_^I))+C[10]+38016083&4294967295,R=_+(S<<9&4294967295|S>>>23),S=j+(_^I&(R^_))+C[15]+3634488961&4294967295,j=R+(S<<14&4294967295|S>>>18),S=I+(R^_&(j^R))+C[4]+3889429448&4294967295,I=j+(S<<20&4294967295|S>>>12),S=_+(j^R&(I^j))+C[9]+568446438&4294967295,_=I+(S<<5&4294967295|S>>>27),S=R+(I^j&(_^I))+C[14]+3275163606&4294967295,R=_+(S<<9&4294967295|S>>>23),S=j+(_^I&(R^_))+C[3]+4107603335&4294967295,j=R+(S<<14&4294967295|S>>>18),S=I+(R^_&(j^R))+C[8]+1163531501&4294967295,I=j+(S<<20&4294967295|S>>>12),S=_+(j^R&(I^j))+C[13]+2850285829&4294967295,_=I+(S<<5&4294967295|S>>>27),S=R+(I^j&(_^I))+C[2]+4243563512&4294967295,R=_+(S<<9&4294967295|S>>>23),S=j+(_^I&(R^_))+C[7]+1735328473&4294967295,j=R+(S<<14&4294967295|S>>>18),S=I+(R^_&(j^R))+C[12]+2368359562&4294967295,I=j+(S<<20&4294967295|S>>>12),S=_+(I^j^R)+C[5]+4294588738&4294967295,_=I+(S<<4&4294967295|S>>>28),S=R+(_^I^j)+C[8]+2272392833&4294967295,R=_+(S<<11&4294967295|S>>>21),S=j+(R^_^I)+C[11]+1839030562&4294967295,j=R+(S<<16&4294967295|S>>>16),S=I+(j^R^_)+C[14]+4259657740&4294967295,I=j+(S<<23&4294967295|S>>>9),S=_+(I^j^R)+C[1]+2763975236&4294967295,_=I+(S<<4&4294967295|S>>>28),S=R+(_^I^j)+C[4]+1272893353&4294967295,R=_+(S<<11&4294967295|S>>>21),S=j+(R^_^I)+C[7]+4139469664&4294967295,j=R+(S<<16&4294967295|S>>>16),S=I+(j^R^_)+C[10]+3200236656&4294967295,I=j+(S<<23&4294967295|S>>>9),S=_+(I^j^R)+C[13]+681279174&4294967295,_=I+(S<<4&4294967295|S>>>28),S=R+(_^I^j)+C[0]+3936430074&4294967295,R=_+(S<<11&4294967295|S>>>21),S=j+(R^_^I)+C[3]+3572445317&4294967295,j=R+(S<<16&4294967295|S>>>16),S=I+(j^R^_)+C[6]+76029189&4294967295,I=j+(S<<23&4294967295|S>>>9),S=_+(I^j^R)+C[9]+3654602809&4294967295,_=I+(S<<4&4294967295|S>>>28),S=R+(_^I^j)+C[12]+3873151461&4294967295,R=_+(S<<11&4294967295|S>>>21),S=j+(R^_^I)+C[15]+530742520&4294967295,j=R+(S<<16&4294967295|S>>>16),S=I+(j^R^_)+C[2]+3299628645&4294967295,I=j+(S<<23&4294967295|S>>>9),S=_+(j^(I|~R))+C[0]+4096336452&4294967295,_=I+(S<<6&4294967295|S>>>26),S=R+(I^(_|~j))+C[7]+1126891415&4294967295,R=_+(S<<10&4294967295|S>>>22),S=j+(_^(R|~I))+C[14]+2878612391&4294967295,j=R+(S<<15&4294967295|S>>>17),S=I+(R^(j|~_))+C[5]+4237533241&4294967295,I=j+(S<<21&4294967295|S>>>11),S=_+(j^(I|~R))+C[12]+1700485571&4294967295,_=I+(S<<6&4294967295|S>>>26),S=R+(I^(_|~j))+C[3]+2399980690&4294967295,R=_+(S<<10&4294967295|S>>>22),S=j+(_^(R|~I))+C[10]+4293915773&4294967295,j=R+(S<<15&4294967295|S>>>17),S=I+(R^(j|~_))+C[1]+2240044497&4294967295,I=j+(S<<21&4294967295|S>>>11),S=_+(j^(I|~R))+C[8]+1873313359&4294967295,_=I+(S<<6&4294967295|S>>>26),S=R+(I^(_|~j))+C[15]+4264355552&4294967295,R=_+(S<<10&4294967295|S>>>22),S=j+(_^(R|~I))+C[6]+2734768916&4294967295,j=R+(S<<15&4294967295|S>>>17),S=I+(R^(j|~_))+C[13]+1309151649&4294967295,I=j+(S<<21&4294967295|S>>>11),S=_+(j^(I|~R))+C[4]+4149444226&4294967295,_=I+(S<<6&4294967295|S>>>26),S=R+(I^(_|~j))+C[11]+3174756917&4294967295,R=_+(S<<10&4294967295|S>>>22),S=j+(_^(R|~I))+C[2]+718787259&4294967295,j=R+(S<<15&4294967295|S>>>17),S=I+(R^(j|~_))+C[9]+3951481745&4294967295,k.g[0]=k.g[0]+_&4294967295,k.g[1]=k.g[1]+(j+(S<<21&4294967295|S>>>11))&4294967295,k.g[2]=k.g[2]+j&4294967295,k.g[3]=k.g[3]+R&4294967295}r.prototype.u=function(k,_){_===void 0&&(_=k.length);for(var I=_-this.blockSize,C=this.B,j=this.h,R=0;R<_;){if(j==0)for(;R<=I;)i(this,k,R),R+=this.blockSize;if(typeof k=="string"){for(;R<_;)if(C[j++]=k.charCodeAt(R++),j==this.blockSize){i(this,C),j=0;break}}else for(;R<_;)if(C[j++]=k[R++],j==this.blockSize){i(this,C),j=0;break}}this.h=j,this.o+=_},r.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var _=1;_<k.length-8;++_)k[_]=0;var I=8*this.o;for(_=k.length-8;_<k.length;++_)k[_]=I&255,I/=256;for(this.u(k),k=Array(16),_=I=0;4>_;++_)for(var C=0;32>C;C+=8)k[I++]=this.g[_]>>>C&255;return k};function s(k,_){var I=l;return Object.prototype.hasOwnProperty.call(I,k)?I[k]:I[k]=_(k)}function o(k,_){this.h=_;for(var I=[],C=!0,j=k.length-1;0<=j;j--){var R=k[j]|0;C&&R==_||(I[j]=R,C=!1)}this.g=I}var l={};function u(k){return-128<=k&&128>k?s(k,function(_){return new o([_|0],0>_?-1:0)}):new o([k|0],0>k?-1:0)}function d(k){if(isNaN(k)||!isFinite(k))return g;if(0>k)return L(d(-k));for(var _=[],I=1,C=0;k>=I;C++)_[C]=k/I|0,I*=4294967296;return new o(_,0)}function p(k,_){if(k.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(k.charAt(0)=="-")return L(p(k.substring(1),_));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=d(Math.pow(_,8)),C=g,j=0;j<k.length;j+=8){var R=Math.min(8,k.length-j),S=parseInt(k.substring(j,j+R),_);8>R?(R=d(Math.pow(_,R)),C=C.j(R).add(d(S))):(C=C.j(I),C=C.add(d(S)))}return C}var g=u(0),y=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-L(this).m();for(var k=0,_=1,I=0;I<this.g.length;I++){var C=this.i(I);k+=(0<=C?C:4294967296+C)*_,_*=4294967296}return k},t.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(A(this))return"0";if(P(this))return"-"+L(this).toString(k);for(var _=d(Math.pow(k,6)),I=this,C="";;){var j=b(I,_).g;I=w(I,j.j(_));var R=((0<I.g.length?I.g[0]:I.h)>>>0).toString(k);if(I=j,A(I))return R+C;for(;6>R.length;)R="0"+R;C=R+C}},t.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function A(k){if(k.h!=0)return!1;for(var _=0;_<k.g.length;_++)if(k.g[_]!=0)return!1;return!0}function P(k){return k.h==-1}t.l=function(k){return k=w(this,k),P(k)?-1:A(k)?0:1};function L(k){for(var _=k.g.length,I=[],C=0;C<_;C++)I[C]=~k.g[C];return new o(I,~k.h).add(y)}t.abs=function(){return P(this)?L(this):this},t.add=function(k){for(var _=Math.max(this.g.length,k.g.length),I=[],C=0,j=0;j<=_;j++){var R=C+(this.i(j)&65535)+(k.i(j)&65535),S=(R>>>16)+(this.i(j)>>>16)+(k.i(j)>>>16);C=S>>>16,R&=65535,S&=65535,I[j]=S<<16|R}return new o(I,I[I.length-1]&-2147483648?-1:0)};function w(k,_){return k.add(L(_))}t.j=function(k){if(A(this)||A(k))return g;if(P(this))return P(k)?L(this).j(L(k)):L(L(this).j(k));if(P(k))return L(this.j(L(k)));if(0>this.l(E)&&0>k.l(E))return d(this.m()*k.m());for(var _=this.g.length+k.g.length,I=[],C=0;C<2*_;C++)I[C]=0;for(C=0;C<this.g.length;C++)for(var j=0;j<k.g.length;j++){var R=this.i(C)>>>16,S=this.i(C)&65535,ae=k.i(j)>>>16,ee=k.i(j)&65535;I[2*C+2*j]+=S*ee,v(I,2*C+2*j),I[2*C+2*j+1]+=R*ee,v(I,2*C+2*j+1),I[2*C+2*j+1]+=S*ae,v(I,2*C+2*j+1),I[2*C+2*j+2]+=R*ae,v(I,2*C+2*j+2)}for(C=0;C<_;C++)I[C]=I[2*C+1]<<16|I[2*C];for(C=_;C<2*_;C++)I[C]=0;return new o(I,0)};function v(k,_){for(;(k[_]&65535)!=k[_];)k[_+1]+=k[_]>>>16,k[_]&=65535,_++}function x(k,_){this.g=k,this.h=_}function b(k,_){if(A(_))throw Error("division by zero");if(A(k))return new x(g,g);if(P(k))return _=b(L(k),_),new x(L(_.g),L(_.h));if(P(_))return _=b(k,L(_)),new x(L(_.g),_.h);if(30<k.g.length){if(P(k)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var I=y,C=_;0>=C.l(k);)I=M(I),C=M(C);var j=V(I,1),R=V(C,1);for(C=V(C,2),I=V(I,2);!A(C);){var S=R.add(C);0>=S.l(k)&&(j=j.add(I),R=S),C=V(C,1),I=V(I,1)}return _=w(k,j.j(_)),new x(j,_)}for(j=g;0<=k.l(_);){for(I=Math.max(1,Math.floor(k.m()/_.m())),C=Math.ceil(Math.log(I)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),R=d(I),S=R.j(_);P(S)||0<S.l(k);)I-=C,R=d(I),S=R.j(_);A(R)&&(R=y),j=j.add(R),k=w(k,S)}return new x(j,k)}t.A=function(k){return b(this,k).h},t.and=function(k){for(var _=Math.max(this.g.length,k.g.length),I=[],C=0;C<_;C++)I[C]=this.i(C)&k.i(C);return new o(I,this.h&k.h)},t.or=function(k){for(var _=Math.max(this.g.length,k.g.length),I=[],C=0;C<_;C++)I[C]=this.i(C)|k.i(C);return new o(I,this.h|k.h)},t.xor=function(k){for(var _=Math.max(this.g.length,k.g.length),I=[],C=0;C<_;C++)I[C]=this.i(C)^k.i(C);return new o(I,this.h^k.h)};function M(k){for(var _=k.g.length+1,I=[],C=0;C<_;C++)I[C]=k.i(C)<<1|k.i(C-1)>>>31;return new o(I,k.h)}function V(k,_){var I=_>>5;_%=32;for(var C=k.g.length-I,j=[],R=0;R<C;R++)j[R]=0<_?k.i(R+I)>>>_|k.i(R+I+1)<<32-_:k.i(R+I);return new o(j,k.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,mw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=p,Fi=o}).apply(typeof _v<"u"?_v:typeof self<"u"?self:typeof window<"u"?window:{});var Ou=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gw,ba,yw,hc,Hp,vw,_w,kw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,m){return a==Array.prototype||a==Object.prototype||(a[h]=m.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ou=="object"&&Ou];for(var h=0;h<a.length;++h){var m=a[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var m=r;a=a.split(".");for(var T=0;T<a.length-1;T++){var D=a[T];if(!(D in m))break e;m=m[D]}a=a[a.length-1],T=m[a],h=h(T),h!=T&&h!=null&&e(m,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var m=0,T=!1,D={next:function(){if(!T&&m<a.length){var F=m++;return{value:h(F,a[F]),done:!1}}return T=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function p(a,h,m){return a.call.apply(a.bind,arguments)}function g(a,h,m){if(!a)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,T),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function y(a,h,m){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,y.apply(null,arguments)}function E(a,h){var m=Array.prototype.slice.call(arguments,1);return function(){var T=m.slice();return T.push.apply(T,arguments),a.apply(this,T)}}function A(a,h){function m(){}m.prototype=h.prototype,a.aa=h.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(T,D,F){for(var H=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)H[xe-2]=arguments[xe];return h.prototype[D].apply(T,H)}}function P(a){const h=a.length;if(0<h){const m=Array(h);for(let T=0;T<h;T++)m[T]=a[T];return m}return[]}function L(a,h){for(let m=1;m<arguments.length;m++){const T=arguments[m];if(u(T)){const D=a.length||0,F=T.length||0;a.length=D+F;for(let H=0;H<F;H++)a[D+H]=T[H]}else a.push(T)}}class w{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var M=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function V(a,h,m){for(const T in a)h.call(m,a[T],T,a)}function k(a,h){for(const m in a)h.call(void 0,a[m],m,a)}function _(a){const h={};for(const m in a)h[m]=a[m];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(a,h){let m,T;for(let D=1;D<arguments.length;D++){T=arguments[D];for(m in T)a[m]=T[m];for(let F=0;F<I.length;F++)m=I[F],Object.prototype.hasOwnProperty.call(T,m)&&(a[m]=T[m])}}function j(a){var h=1;a=a.split(":");const m=[];for(;0<h&&a.length;)m.push(a.shift()),h--;return a.length&&m.push(a.join(":")),m}function R(a){l.setTimeout(()=>{throw a},0)}function S(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ae{constructor(){this.h=this.g=null}add(h,m){const T=ee.get();T.set(h,m),this.h?this.h.next=T:this.g=T,this.h=T}}var ee=new w(()=>new q,a=>a.reset());class q{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let le,z=!1,Q=new ae,J=()=>{const a=l.Promise.resolve(void 0);le=()=>{a.then(he)}};var he=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(m){R(m)}var h=ee;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var at=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,h),l.removeEventListener("test",m,h)}catch{}return a}();function tt(a,h){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,T=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{b(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else m=="mouseover"?h=a.fromElement:m=="mouseout"&&(h=a.toElement);this.relatedTarget=h,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:nt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&tt.aa.h.call(this)}}A(tt,ke);var nt={2:"touch",3:"pen",4:"mouse"};tt.prototype.h=function(){tt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var yt="closure_listenable_"+(1e6*Math.random()|0),tr=0;function _n(a,h,m,T,D){this.listener=a,this.proxy=null,this.src=h,this.type=m,this.capture=!!T,this.ha=D,this.key=++tr,this.da=this.fa=!1}function Dn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function kn(a){this.src=a,this.g={},this.h=0}kn.prototype.add=function(a,h,m,T,D){var F=a.toString();a=this.g[F],a||(a=this.g[F]=[],this.h++);var H=Jo(a,h,T,D);return-1<H?(h=a[H],m||(h.fa=!1)):(h=new _n(h,this.src,F,!!T,D),h.fa=m,a.push(h)),h};function Vt(a,h){var m=h.type;if(m in a.g){var T=a.g[m],D=Array.prototype.indexOf.call(T,h,void 0),F;(F=0<=D)&&Array.prototype.splice.call(T,D,1),F&&(Dn(h),a.g[m].length==0&&(delete a.g[m],a.h--))}}function Jo(a,h,m,T){for(var D=0;D<a.length;++D){var F=a[D];if(!F.da&&F.listener==h&&F.capture==!!m&&F.ha==T)return D}return-1}var ea="closure_lm_"+(1e6*Math.random()|0),Ns={};function O(a,h,m,T,D){if(Array.isArray(h)){for(var F=0;F<h.length;F++)O(a,h[F],m,T,D);return null}return m=P0(m),a&&a[yt]?a.K(h,m,d(T)?!!T.capture:!1,D):pe(a,h,m,!1,T,D)}function pe(a,h,m,T,D,F){if(!h)throw Error("Invalid event type");var H=d(D)?!!D.capture:!!D,xe=ta(a);if(xe||(a[ea]=xe=new kn(a)),m=xe.add(h,m,T,H,F),m.proxy)return m;if(T=ye(),m.proxy=T,T.src=a,T.listener=m,a.addEventListener)at||(D=H),D===void 0&&(D=!1),a.addEventListener(h.toString(),T,D);else if(a.attachEvent)a.attachEvent(Ke(h.toString()),T);else if(a.addListener&&a.removeListener)a.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return m}function ye(){function a(m){return h.call(a.src,a.listener,m)}const h=eu;return a}function me(a,h,m,T,D){if(Array.isArray(h))for(var F=0;F<h.length;F++)me(a,h[F],m,T,D);else T=d(T)?!!T.capture:!!T,m=P0(m),a&&a[yt]?(a=a.i,h=String(h).toString(),h in a.g&&(F=a.g[h],m=Jo(F,m,T,D),-1<m&&(Dn(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete a.g[h],a.h--)))):a&&(a=ta(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Jo(h,m,T,D)),(m=-1<a?h[a]:null)&&Ee(m))}function Ee(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[yt])Vt(h.i,a);else{var m=a.type,T=a.proxy;h.removeEventListener?h.removeEventListener(m,T,a.capture):h.detachEvent?h.detachEvent(Ke(m),T):h.addListener&&h.removeListener&&h.removeListener(T),(m=ta(h))?(Vt(m,a),m.h==0&&(m.src=null,h[ea]=null)):Dn(a)}}}function Ke(a){return a in Ns?Ns[a]:Ns[a]="on"+a}function eu(a,h){if(a.da)a=!0;else{h=new tt(h,this);var m=a.listener,T=a.ha||a.src;a.fa&&Ee(a),a=m.call(T,h)}return a}function ta(a){return a=a[ea],a instanceof kn?a:null}var Sh="__closure_events_fn_"+(1e9*Math.random()>>>0);function P0(a){return typeof a=="function"?a:(a[Sh]||(a[Sh]=function(h){return a.handleEvent(h)}),a[Sh])}function vt(){oe.call(this),this.i=new kn(this),this.M=this,this.F=null}A(vt,oe),vt.prototype[yt]=!0,vt.prototype.removeEventListener=function(a,h,m,T){me(this,a,h,m,T)};function Pt(a,h){var m,T=a.F;if(T)for(m=[];T;T=T.F)m.push(T);if(a=a.M,T=h.type||h,typeof h=="string")h=new ke(h,a);else if(h instanceof ke)h.target=h.target||a;else{var D=h;h=new ke(T,a),C(h,D)}if(D=!0,m)for(var F=m.length-1;0<=F;F--){var H=h.g=m[F];D=tu(H,T,!0,h)&&D}if(H=h.g=a,D=tu(H,T,!0,h)&&D,D=tu(H,T,!1,h)&&D,m)for(F=0;F<m.length;F++)H=h.g=m[F],D=tu(H,T,!1,h)&&D}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var m=a.g[h],T=0;T<m.length;T++)Dn(m[T]);delete a.g[h],a.h--}}this.F=null},vt.prototype.K=function(a,h,m,T){return this.i.add(String(a),h,!1,m,T)},vt.prototype.L=function(a,h,m,T){return this.i.add(String(a),h,!0,m,T)};function tu(a,h,m,T){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,F=0;F<h.length;++F){var H=h[F];if(H&&!H.da&&H.capture==m){var xe=H.listener,lt=H.ha||H.src;H.fa&&Vt(a.i,H),D=xe.call(lt,T)!==!1&&D}}return D&&!T.defaultPrevented}function L0(a,h,m){if(typeof a=="function")m&&(a=y(a,m));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function b0(a){a.g=L0(()=>{a.g=null,a.i&&(a.i=!1,b0(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class QI extends oe{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:b0(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function na(a){oe.call(this),this.h=a,this.g={}}A(na,oe);var j0=[];function N0(a){V(a.g,function(h,m){this.g.hasOwnProperty(m)&&Ee(h)},a),a.g={}}na.prototype.N=function(){na.aa.N.call(this),N0(this)},na.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ah=l.JSON.stringify,YI=l.JSON.parse,ZI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ch(){}Ch.prototype.h=null;function O0(a){return a.h||(a.h=a.i())}function M0(){}var ra={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rh(){ke.call(this,"d")}A(Rh,ke);function Ph(){ke.call(this,"c")}A(Ph,ke);var ki={},D0=null;function nu(){return D0=D0||new vt}ki.La="serverreachability";function V0(a){ke.call(this,ki.La,a)}A(V0,ke);function ia(a){const h=nu();Pt(h,new V0(h))}ki.STAT_EVENT="statevent";function F0(a,h){ke.call(this,ki.STAT_EVENT,a),this.stat=h}A(F0,ke);function Lt(a){const h=nu();Pt(h,new F0(h,a))}ki.Ma="timingevent";function U0(a,h){ke.call(this,ki.Ma,a),this.size=h}A(U0,ke);function sa(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function oa(){this.g=!0}oa.prototype.xa=function(){this.g=!1};function XI(a,h,m,T,D,F){a.info(function(){if(a.g)if(F)for(var H="",xe=F.split("&"),lt=0;lt<xe.length;lt++){var ve=xe[lt].split("=");if(1<ve.length){var _t=ve[0];ve=ve[1];var kt=_t.split("_");H=2<=kt.length&&kt[1]=="type"?H+(_t+"="+ve+"&"):H+(_t+"=redacted&")}}else H=null;else H=F;return"XMLHTTP REQ ("+T+") [attempt "+D+"]: "+h+`
`+m+`
`+H})}function JI(a,h,m,T,D,F,H){a.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+D+"]: "+h+`
`+m+`
`+F+" "+H})}function Os(a,h,m,T){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+t8(a,m)+(T?" "+T:"")})}function e8(a,h){a.info(function(){return"TIMEOUT: "+h})}oa.prototype.info=function(){};function t8(a,h){if(!a.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var T=m[a];if(!(2>T.length)){var D=T[1];if(Array.isArray(D)&&!(1>D.length)){var F=D[0];if(F!="noop"&&F!="stop"&&F!="close")for(var H=1;H<D.length;H++)D[H]=""}}}}return Ah(m)}catch{return h}}var ru={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$0={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Lh;function iu(){}A(iu,Ch),iu.prototype.g=function(){return new XMLHttpRequest},iu.prototype.i=function(){return{}},Lh=new iu;function Ar(a,h,m,T){this.j=a,this.i=h,this.l=m,this.R=T||1,this.U=new na(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new W0}function W0(){this.i=null,this.g="",this.h=!1}var B0={},bh={};function jh(a,h,m){a.L=1,a.v=lu(nr(h)),a.m=m,a.P=!0,z0(a,null)}function z0(a,h){a.F=Date.now(),su(a),a.A=nr(a.v);var m=a.A,T=a.R;Array.isArray(T)||(T=[String(T)]),i1(m.i,"t",T),a.C=0,m=a.j.J,a.h=new W0,a.g=w1(a.j,m?h:null,!a.m),0<a.O&&(a.M=new QI(y(a.Y,a,a.g),a.O)),h=a.U,m=a.g,T=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(j0[0]=D.toString()),D=j0);for(var F=0;F<D.length;F++){var H=O(m,D[F],T||h.handleEvent,!1,h.h||h);if(!H)break;h.g[H.key]=H}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ia(),XI(a.i,a.u,a.A,a.l,a.R,a.m)}Ar.prototype.ca=function(a){a=a.target;const h=this.M;h&&rr(a)==3?h.j():this.Y(a)},Ar.prototype.Y=function(a){try{if(a==this.g)e:{const kt=rr(this.g);var h=this.g.Ba();const Vs=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||d1(this.g)))){this.J||kt!=4||h==7||(h==8||0>=Vs?ia(3):ia(2)),Nh(this);var m=this.g.Z();this.X=m;t:if(H0(this)){var T=d1(this.g);a="";var D=T.length,F=rr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ei(this),aa(this);var H="";break t}this.h.i=new l.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(T[h],{stream:!(F&&h==D-1)});T.length=0,this.h.g+=a,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=m==200,JI(this.i,this.u,this.A,this.l,this.R,kt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,lt=this.g;if((xe=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(xe)){var ve=xe;break t}}ve=null}if(m=ve)Os(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oh(this,m);else{this.o=!1,this.s=3,Lt(12),Ei(this),aa(this);break e}}if(this.P){m=!0;let En;for(;!this.J&&this.C<H.length;)if(En=n8(this,H),En==bh){kt==4&&(this.s=4,Lt(14),m=!1),Os(this.i,this.l,null,"[Incomplete Response]");break}else if(En==B0){this.s=4,Lt(15),Os(this.i,this.l,H,"[Invalid Chunk]"),m=!1;break}else Os(this.i,this.l,En,null),Oh(this,En);if(H0(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||H.length!=0||this.h.h||(this.s=1,Lt(16),m=!1),this.o=this.o&&m,!m)Os(this.i,this.l,H,"[Invalid Chunked Response]"),Ei(this),aa(this);else if(0<H.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),$h(_t),_t.M=!0,Lt(11))}}else Os(this.i,this.l,H,null),Oh(this,H);kt==4&&Ei(this),this.o&&!this.J&&(kt==4?v1(this.j,this):(this.o=!1,su(this)))}else _8(this.g),m==400&&0<H.indexOf("Unknown SID")?(this.s=3,Lt(12)):(this.s=0,Lt(13)),Ei(this),aa(this)}}}catch{}finally{}};function H0(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function n8(a,h){var m=a.C,T=h.indexOf(`
`,m);return T==-1?bh:(m=Number(h.substring(m,T)),isNaN(m)?B0:(T+=1,T+m>h.length?bh:(h=h.slice(T,T+m),a.C=T+m,h)))}Ar.prototype.cancel=function(){this.J=!0,Ei(this)};function su(a){a.S=Date.now()+a.I,q0(a,a.I)}function q0(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=sa(y(a.ba,a),h)}function Nh(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Ar.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(e8(this.i,this.A),this.L!=2&&(ia(),Lt(17)),Ei(this),this.s=2,aa(this)):q0(this,this.S-a)};function aa(a){a.j.G==0||a.J||v1(a.j,a)}function Ei(a){Nh(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,N0(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Oh(a,h){try{var m=a.j;if(m.G!=0&&(m.g==a||Mh(m.h,a))){if(!a.K&&Mh(m.h,a)&&m.G==3){try{var T=m.Da.g.parse(h)}catch{T=null}if(Array.isArray(T)&&T.length==3){var D=T;if(D[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)pu(m),hu(m);else break e;Uh(m),Lt(18)}}else m.za=D[1],0<m.za-m.T&&37500>D[2]&&m.F&&m.v==0&&!m.C&&(m.C=sa(y(m.Za,m),6e3));if(1>=Q0(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Ti(m,11)}else if((a.K||m.g==a)&&pu(m),!v(h))for(D=m.Da.g.parse(h),h=0;h<D.length;h++){let ve=D[h];if(m.T=ve[0],ve=ve[1],m.G==2)if(ve[0]=="c"){m.K=ve[1],m.ia=ve[2];const _t=ve[3];_t!=null&&(m.la=_t,m.j.info("VER="+m.la));const kt=ve[4];kt!=null&&(m.Aa=kt,m.j.info("SVER="+m.Aa));const Vs=ve[5];Vs!=null&&typeof Vs=="number"&&0<Vs&&(T=1.5*Vs,m.L=T,m.j.info("backChannelRequestTimeoutMs_="+T)),T=m;const En=a.g;if(En){const gu=En.g?En.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gu){var F=T.h;F.g||gu.indexOf("spdy")==-1&&gu.indexOf("quic")==-1&&gu.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Dh(F,F.h),F.h=null))}if(T.D){const Wh=En.g?En.g.getResponseHeader("X-HTTP-Session-Id"):null;Wh&&(T.ya=Wh,Ce(T.I,T.D,Wh))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),T=m;var H=a;if(T.qa=E1(T,T.J?T.ia:null,T.W),H.K){Y0(T.h,H);var xe=H,lt=T.L;lt&&(xe.I=lt),xe.B&&(Nh(xe),su(xe)),T.g=H}else g1(T);0<m.i.length&&fu(m)}else ve[0]!="stop"&&ve[0]!="close"||Ti(m,7);else m.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?Ti(m,7):Fh(m):ve[0]!="noop"&&m.l&&m.l.ta(ve),m.v=0)}}ia(4)}catch{}}var r8=class{constructor(a,h){this.g=a,this.map=h}};function G0(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function K0(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Q0(a){return a.h?1:a.g?a.g.size:0}function Mh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Dh(a,h){a.g?a.g.add(h):a.h=h}function Y0(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}G0.prototype.cancel=function(){if(this.i=Z0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Z0(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const m of a.g.values())h=h.concat(m.D);return h}return P(a.i)}function i8(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],m=a.length,T=0;T<m;T++)h.push(a[T]);return h}h=[],m=0;for(T in a)h[m++]=a[T];return h}function s8(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var m=0;m<a;m++)h.push(m);return h}h=[],m=0;for(const T in a)h[m++]=T;return h}}}function X0(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var m=s8(a),T=i8(a),D=T.length,F=0;F<D;F++)h.call(void 0,T[F],m&&m[F],a)}var J0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function o8(a,h){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var T=a[m].indexOf("="),D=null;if(0<=T){var F=a[m].substring(0,T);D=a[m].substring(T+1)}else F=a[m];h(F,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function wi(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof wi){this.h=a.h,ou(this,a.j),this.o=a.o,this.g=a.g,au(this,a.s),this.l=a.l;var h=a.i,m=new ca;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),e1(this,m),this.m=a.m}else a&&(h=String(a).match(J0))?(this.h=!1,ou(this,h[1]||"",!0),this.o=la(h[2]||""),this.g=la(h[3]||"",!0),au(this,h[4]),this.l=la(h[5]||"",!0),e1(this,h[6]||"",!0),this.m=la(h[7]||"")):(this.h=!1,this.i=new ca(null,this.h))}wi.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ua(h,t1,!0),":");var m=this.g;return(m||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ua(h,t1,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(ua(m,m.charAt(0)=="/"?u8:l8,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",ua(m,d8)),a.join("")};function nr(a){return new wi(a)}function ou(a,h,m){a.j=m?la(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function au(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function e1(a,h,m){h instanceof ca?(a.i=h,h8(a.i,a.h)):(m||(h=ua(h,c8)),a.i=new ca(h,a.h))}function Ce(a,h,m){a.i.set(h,m)}function lu(a){return Ce(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function la(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ua(a,h,m){return typeof a=="string"?(a=encodeURI(a).replace(h,a8),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function a8(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var t1=/[#\/\?@]/g,l8=/[#\?:]/g,u8=/[#\?]/g,c8=/[#\?@]/g,d8=/#/g;function ca(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Cr(a){a.g||(a.g=new Map,a.h=0,a.i&&o8(a.i,function(h,m){a.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=ca.prototype,t.add=function(a,h){Cr(this),this.i=null,a=Ms(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(h),this.h+=1,this};function n1(a,h){Cr(a),h=Ms(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function r1(a,h){return Cr(a),h=Ms(a,h),a.g.has(h)}t.forEach=function(a,h){Cr(this),this.g.forEach(function(m,T){m.forEach(function(D){a.call(h,D,T,this)},this)},this)},t.na=function(){Cr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let T=0;T<h.length;T++){const D=a[T];for(let F=0;F<D.length;F++)m.push(h[T])}return m},t.V=function(a){Cr(this);let h=[];if(typeof a=="string")r1(this,a)&&(h=h.concat(this.g.get(Ms(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)h=h.concat(a[m])}return h},t.set=function(a,h){return Cr(this),this.i=null,a=Ms(this,a),r1(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function i1(a,h,m){n1(a,h),0<m.length&&(a.i=null,a.g.set(Ms(a,h),P(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var T=h[m];const F=encodeURIComponent(String(T)),H=this.V(T);for(T=0;T<H.length;T++){var D=F;H[T]!==""&&(D+="="+encodeURIComponent(String(H[T]))),a.push(D)}}return this.i=a.join("&")};function Ms(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function h8(a,h){h&&!a.j&&(Cr(a),a.i=null,a.g.forEach(function(m,T){var D=T.toLowerCase();T!=D&&(n1(this,T),i1(this,D,m))},a)),a.j=h}function f8(a,h){const m=new oa;if(l.Image){const T=new Image;T.onload=E(Rr,m,"TestLoadImage: loaded",!0,h,T),T.onerror=E(Rr,m,"TestLoadImage: error",!1,h,T),T.onabort=E(Rr,m,"TestLoadImage: abort",!1,h,T),T.ontimeout=E(Rr,m,"TestLoadImage: timeout",!1,h,T),l.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=a}else h(!1)}function p8(a,h){const m=new oa,T=new AbortController,D=setTimeout(()=>{T.abort(),Rr(m,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:T.signal}).then(F=>{clearTimeout(D),F.ok?Rr(m,"TestPingServer: ok",!0,h):Rr(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Rr(m,"TestPingServer: error",!1,h)})}function Rr(a,h,m,T,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),T(m)}catch{}}function m8(){this.g=new ZI}function g8(a,h,m){const T=m||"";try{X0(a,function(D,F){let H=D;d(D)&&(H=Ah(D)),h.push(T+F+"="+encodeURIComponent(H))})}catch(D){throw h.push(T+"type="+encodeURIComponent("_badmap")),D}}function uu(a){this.l=a.Ub||null,this.j=a.eb||!1}A(uu,Ch),uu.prototype.g=function(){return new cu(this.l,this.j)},uu.prototype.i=function(a){return function(){return a}}({});function cu(a,h){vt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(cu,vt),t=cu.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ha(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,da(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ha(this)),this.g&&(this.readyState=3,ha(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;s1(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function s1(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?da(this):ha(this),this.readyState==3&&s1(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,da(this))},t.Qa=function(a){this.g&&(this.response=a,da(this))},t.ga=function(){this.g&&da(this)};function da(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ha(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=h.next();return a.join(`\r
`)};function ha(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(cu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function o1(a){let h="";return V(a,function(m,T){h+=T,h+=":",h+=m,h+=`\r
`}),h}function Vh(a,h,m){e:{for(T in m){var T=!1;break e}T=!0}T||(m=o1(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):Ce(a,h,m))}function $e(a){vt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A($e,vt);var y8=/^https?$/i,v8=["POST","PUT"];t=$e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,m,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Lh.g(),this.v=this.o?O0(this.o):O0(Lh),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(F){a1(this,F);return}if(a=m||"",m=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var D in T)m.set(D,T[D]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const F of T.keys())m.set(F,T.get(F));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(v8,h,void 0))||T||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,H]of m)this.g.setRequestHeader(F,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{c1(this),this.u=!0,this.g.send(a),this.u=!1}catch(F){a1(this,F)}};function a1(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,l1(a),du(a)}function l1(a){a.A||(a.A=!0,Pt(a,"complete"),Pt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Pt(this,"complete"),Pt(this,"abort"),du(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),du(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?u1(this):this.bb())},t.bb=function(){u1(this)};function u1(a){if(a.h&&typeof o<"u"&&(!a.v[1]||rr(a)!=4||a.Z()!=2)){if(a.u&&rr(a)==4)L0(a.Ea,0,a);else if(Pt(a,"readystatechange"),rr(a)==4){a.h=!1;try{const H=a.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var T;if(T=H===0){var D=String(a.D).match(J0)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),T=!y8.test(D?D.toLowerCase():"")}m=T}if(m)Pt(a,"complete"),Pt(a,"success");else{a.m=6;try{var F=2<rr(a)?a.g.statusText:""}catch{F=""}a.l=F+" ["+a.Z()+"]",l1(a)}}finally{du(a)}}}}function du(a,h){if(a.g){c1(a);const m=a.g,T=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Pt(a,"ready");try{m.onreadystatechange=T}catch{}}}function c1(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function rr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<rr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),YI(h)}};function d1(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function _8(a){const h={};a=(a.g&&2<=rr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<a.length;T++){if(v(a[T]))continue;var m=j(a[T]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=h[D]||[];h[D]=F,F.push(m)}k(h,function(T){return T.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fa(a,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||h}function h1(a){this.Aa=0,this.i=[],this.j=new oa,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fa("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fa("baseRetryDelayMs",5e3,a),this.cb=fa("retryDelaySeedMs",1e4,a),this.Wa=fa("forwardChannelMaxRetries",2,a),this.wa=fa("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new G0(a&&a.concurrentRequestLimit),this.Da=new m8,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=h1.prototype,t.la=8,t.G=1,t.connect=function(a,h,m,T){Lt(0),this.W=a,this.H=h||{},m&&T!==void 0&&(this.H.OSID=m,this.H.OAID=T),this.F=this.X,this.I=E1(this,null,this.W),fu(this)};function Fh(a){if(f1(a),a.G==3){var h=a.U++,m=nr(a.I);if(Ce(m,"SID",a.K),Ce(m,"RID",h),Ce(m,"TYPE","terminate"),pa(a,m),h=new Ar(a,a.j,h),h.L=2,h.v=lu(nr(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=h.v,m=!0),m||(h.g=w1(h.j,null),h.g.ea(h.v)),h.F=Date.now(),su(h)}k1(a)}function hu(a){a.g&&($h(a),a.g.cancel(),a.g=null)}function f1(a){hu(a),a.u&&(l.clearTimeout(a.u),a.u=null),pu(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function fu(a){if(!K0(a.h)&&!a.s){a.s=!0;var h=a.Ga;le||J(),z||(le(),z=!0),Q.add(h,a),a.B=0}}function k8(a,h){return Q0(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=sa(y(a.Ga,a,h),_1(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new Ar(this,this.j,a);let F=this.o;if(this.S&&(F?(F=_(F),C(F,this.S)):F=this.S),this.m!==null||this.O||(D.H=F,F=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var T=this.i[m];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(h+=T,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=m1(this,D,h),m=nr(this.I),Ce(m,"RID",a),Ce(m,"CVER",22),this.D&&Ce(m,"X-HTTP-Session-Id",this.D),pa(this,m),F&&(this.O?h="headers="+encodeURIComponent(String(o1(F)))+"&"+h:this.m&&Vh(m,this.m,F)),Dh(this.h,D),this.Ua&&Ce(m,"TYPE","init"),this.P?(Ce(m,"$req",h),Ce(m,"SID","null"),D.T=!0,jh(D,m,null)):jh(D,m,h),this.G=2}}else this.G==3&&(a?p1(this,a):this.i.length==0||K0(this.h)||p1(this))};function p1(a,h){var m;h?m=h.l:m=a.U++;const T=nr(a.I);Ce(T,"SID",a.K),Ce(T,"RID",m),Ce(T,"AID",a.T),pa(a,T),a.m&&a.o&&Vh(T,a.m,a.o),m=new Ar(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),h&&(a.i=h.D.concat(a.i)),h=m1(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Dh(a.h,m),jh(m,T,h)}function pa(a,h){a.H&&V(a.H,function(m,T){Ce(h,T,m)}),a.l&&X0({},function(m,T){Ce(h,T,m)})}function m1(a,h,m){m=Math.min(a.i.length,m);var T=a.l?y(a.l.Na,a.l,a):null;e:{var D=a.i;let F=-1;for(;;){const H=["count="+m];F==-1?0<m?(F=D[0].g,H.push("ofs="+F)):F=0:H.push("ofs="+F);let xe=!0;for(let lt=0;lt<m;lt++){let ve=D[lt].g;const _t=D[lt].map;if(ve-=F,0>ve)F=Math.max(0,D[lt].g-100),xe=!1;else try{g8(_t,H,"req"+ve+"_")}catch{T&&T(_t)}}if(xe){T=H.join("&");break e}}}return a=a.i.splice(0,m),h.D=a,T}function g1(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;le||J(),z||(le(),z=!0),Q.add(h,a),a.v=0}}function Uh(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=sa(y(a.Fa,a),_1(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,y1(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=sa(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Lt(10),hu(this),y1(this))};function $h(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function y1(a){a.g=new Ar(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=nr(a.qa);Ce(h,"RID","rpc"),Ce(h,"SID",a.K),Ce(h,"AID",a.T),Ce(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ce(h,"TO",a.ja),Ce(h,"TYPE","xmlhttp"),pa(a,h),a.m&&a.o&&Vh(h,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=lu(nr(h)),m.m=null,m.P=!0,z0(m,a)}t.Za=function(){this.C!=null&&(this.C=null,hu(this),Uh(this),Lt(19))};function pu(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function v1(a,h){var m=null;if(a.g==h){pu(a),$h(a),a.g=null;var T=2}else if(Mh(a.h,h))m=h.D,Y0(a.h,h),T=1;else return;if(a.G!=0){if(h.o)if(T==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;T=nu(),Pt(T,new U0(T,m)),fu(a)}else g1(a);else if(D=h.s,D==3||D==0&&0<h.X||!(T==1&&k8(a,h)||T==2&&Uh(a)))switch(m&&0<m.length&&(h=a.h,h.i=h.i.concat(m)),D){case 1:Ti(a,5);break;case 4:Ti(a,10);break;case 3:Ti(a,6);break;default:Ti(a,2)}}}function _1(a,h){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*h}function Ti(a,h){if(a.j.info("Error code "+h),h==2){var m=y(a.fb,a),T=a.Xa;const D=!T;T=new wi(T||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ou(T,"https"),lu(T),D?f8(T.toString(),m):p8(T.toString(),m)}else Lt(2);a.G=0,a.l&&a.l.sa(h),k1(a),f1(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function k1(a){if(a.G=0,a.ka=[],a.l){const h=Z0(a.h);(h.length!=0||a.i.length!=0)&&(L(a.ka,h),L(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function E1(a,h,m){var T=m instanceof wi?nr(m):new wi(m);if(T.g!="")h&&(T.g=h+"."+T.g),au(T,T.s);else{var D=l.location;T=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var F=new wi(null);T&&ou(F,T),h&&(F.g=h),D&&au(F,D),m&&(F.l=m),T=F}return m=a.D,h=a.ya,m&&h&&Ce(T,m,h),Ce(T,"VER",a.la),pa(a,T),T}function w1(a,h,m){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new $e(new uu({eb:m})):new $e(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function T1(){}t=T1.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function mu(){}mu.prototype.g=function(a,h){return new Qt(a,h)};function Qt(a,h){vt.call(this),this.g=new h1(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ds(this)}A(Qt,vt),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){Fh(this.g)},Qt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=Ah(a),a=m);h.i.push(new r8(h.Ya++,a)),h.G==3&&fu(h)},Qt.prototype.N=function(){this.g.l=null,delete this.j,Fh(this.g),delete this.g,Qt.aa.N.call(this)};function I1(a){Rh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const m in h){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(I1,Rh);function x1(){Ph.call(this),this.status=1}A(x1,Ph);function Ds(a){this.g=a}A(Ds,T1),Ds.prototype.ua=function(){Pt(this.g,"a")},Ds.prototype.ta=function(a){Pt(this.g,new I1(a))},Ds.prototype.sa=function(a){Pt(this.g,new x1)},Ds.prototype.ra=function(){Pt(this.g,"b")},mu.prototype.createWebChannel=mu.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,kw=function(){return new mu},_w=function(){return nu()},vw=ki,Hp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ru.NO_ERROR=0,ru.TIMEOUT=8,ru.HTTP_ERROR=6,hc=ru,$0.COMPLETE="complete",yw=$0,M0.EventType=ra,ra.OPEN="a",ra.CLOSE="b",ra.ERROR="c",ra.MESSAGE="d",vt.prototype.listen=vt.prototype.K,ba=M0,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,gw=$e}).apply(typeof Ou<"u"?Ou:typeof self<"u"?self:typeof window<"u"?window:{});const kv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ko="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new Bd("@firebase/firestore");function Ta(){return Qi.logLevel}function Z(t,...e){if(Qi.logLevel<=de.DEBUG){const n=e.map(bg);Qi.debug(`Firestore (${Ko}): ${t}`,...n)}}function Tr(t,...e){if(Qi.logLevel<=de.ERROR){const n=e.map(bg);Qi.error(`Firestore (${Ko}): ${t}`,...n)}}function Ro(t,...e){if(Qi.logLevel<=de.WARN){const n=e.map(bg);Qi.warn(`Firestore (${Ko}): ${t}`,...n)}}function bg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${Ko}) INTERNAL ASSERTION FAILED: `+t;throw Tr(e),new Error(e)}function Ie(t,e){t||ne()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Q6{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class Y6{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Z6{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ie(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new gr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new gr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string"),new Ew(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new It(e)}}class X6{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class J6{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new X6(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ie(this.o===void 0);const r=s=>{s.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.R=n.token,new eP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=nP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function Po(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Ge(0,0))}static max(){return new re(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class je extends xl{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new je(n)}static emptyPath(){return new je([])}}const rP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends xl{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return rP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new G($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(je.fromString(e))}static fromName(e){return new X(je.fromString(e).popFirst(5))}static empty(){return new X(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new je(e.slice()))}}function iP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new li(i,X.empty(),e)}function sP(t){return new li(t.readTime,t.key,-1)}class li{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new li(re.min(),X.empty(),-1)}static max(){return new li(re.max(),X.empty(),-1)}}function oP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ql(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==aP)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):W.reject(n)}static resolve(e){return new W((n,r)=>{n(e)})}static reject(e){return new W((n,r)=>{r(e)})}static waitFor(e){return new W((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=W.resolve(!1);for(const r of e)n=n.next(i=>i?W.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new W((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(p=>{o[d]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new W((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function uP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Gl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class jg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}jg.oe=-1;function Kd(t){return t==null}function rd(t){return t===0&&1/t==-1/0}function cP(t){return typeof t=="number"&&Number.isInteger(t)&&!rd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function os(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Tw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mu(this.root,e,this.comparator,!0)}}class Mu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??dt.RED,this.left=i??dt.EMPTY,this.right=s??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new dt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return dt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,i,s){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wv(this.data.getIterator())}getIteratorFrom(e){return new wv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pt(this.comparator);return n.data=e,n}}class wv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new tn([])}unionWith(e){let n=new pt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Po(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Iw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Iw("Invalid base64 string: "+s):s}}(e);return new gt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const dP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ui(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=dP.exec(t);if(Ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yi(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Og(t){const e=t.mapValue.fields.__previous_value__;return Ng(e)?Og(e):e}function Sl(t){const e=ui(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,n,r,i,s,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Al{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Al("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Al&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du={mapValue:{}};function Zi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ng(t)?4:pP(t)?9007199254740991:fP(t)?10:11:ne()}function Zn(t,e){if(t===e)return!0;const n=Zi(t);if(n!==Zi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Sl(t).isEqual(Sl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ui(i.timestampValue),l=ui(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Yi(i.bytesValue).isEqual(Yi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ze(i.geoPointValue.latitude)===ze(s.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ze(i.integerValue)===ze(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ze(i.doubleValue),l=ze(s.doubleValue);return o===l?rd(o)===rd(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Po(t.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ev(o)!==Ev(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Zn(o[u],l[u])))return!1;return!0}(t,e);default:return ne()}}function Cl(t,e){return(t.values||[]).find(n=>Zn(n,e))!==void 0}function Lo(t,e){if(t===e)return 0;const n=Zi(t),r=Zi(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ze(s.integerValue||s.doubleValue),u=ze(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Tv(t.timestampValue,e.timestampValue);case 4:return Tv(Sl(t),Sl(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Yi(s),u=Yi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=_e(l[d],u[d]);if(p!==0)return p}return _e(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=_e(ze(s.latitude),ze(o.latitude));return l!==0?l:_e(ze(s.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Iv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,d,p;const g=s.fields||{},y=o.fields||{},E=(l=g.value)===null||l===void 0?void 0:l.arrayValue,A=(u=y.value)===null||u===void 0?void 0:u.arrayValue,P=_e(((d=E==null?void 0:E.values)===null||d===void 0?void 0:d.length)||0,((p=A==null?void 0:A.values)===null||p===void 0?void 0:p.length)||0);return P!==0?P:Iv(E,A)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Du.mapValue&&o===Du.mapValue)return 0;if(s===Du.mapValue)return 1;if(o===Du.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=o.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const y=_e(u[g],p[g]);if(y!==0)return y;const E=Lo(l[u[g]],d[p[g]]);if(E!==0)return E}return _e(u.length,p.length)}(t.mapValue,e.mapValue);default:throw ne()}}function Tv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=ui(t),r=ui(e),i=_e(n.seconds,r.seconds);return i!==0?i:_e(n.nanos,r.nanos)}function Iv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Lo(n[i],r[i]);if(s)return s}return _e(n.length,r.length)}function bo(t){return qp(t)}function qp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ui(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Yi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=qp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${qp(n.fields[o])}`;return i+"}"}(t.mapValue):ne()}function xv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Gp(t){return!!t&&"integerValue"in t}function Mg(t){return!!t&&"arrayValue"in t}function Sv(t){return!!t&&"nullValue"in t}function Av(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fc(t){return!!t&&"mapValue"in t}function fP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ka(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return os(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ka(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ka(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ka(n)}setAll(e){let n=ht.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ka(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());fc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];fc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){os(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ut(Ka(this.value))}}function xw(t){const e=[];return os(t.fields,(n,r)=>{const i=new ht([n]);if(fc(r)){const s=xw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new tn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new St(e,0,re.min(),re.min(),re.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,i){return new St(e,1,n,re.min(),r,i,0)}static newNoDocument(e,n){return new St(e,2,n,re.min(),re.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new St(e,3,n,re.min(),re.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class id{constructor(e,n){this.position=e,this.inclusive=n}}function Cv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=Lo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Rl{constructor(e,n="asc"){this.field=e,this.dir=n}}function mP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Sw{}class Xe extends Sw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new yP(e,n,r):n==="array-contains"?new kP(e,r):n==="in"?new EP(e,r):n==="not-in"?new wP(e,r):n==="array-contains-any"?new TP(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new vP(e,r):new _P(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Lo(n,this.value)):n!==null&&Zi(this.value)===Zi(n)&&this.matchesComparison(Lo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends Sw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new On(e,n)}matches(e){return Aw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Aw(t){return t.op==="and"}function Cw(t){return gP(t)&&Aw(t)}function gP(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function Kp(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+bo(t.value);if(Cw(t))return t.filters.map(e=>Kp(e)).join(",");{const e=t.filters.map(n=>Kp(n)).join(",");return`${t.op}(${e})`}}function Rw(t,e){return t instanceof Xe?function(r,i){return i instanceof Xe&&r.op===i.op&&r.field.isEqual(i.field)&&Zn(r.value,i.value)}(t,e):t instanceof On?function(r,i){return i instanceof On&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Rw(o,i.filters[l]),!0):!1}(t,e):void ne()}function Pw(t){return t instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${bo(n.value)}`}(t):t instanceof On?function(n){return n.op.toString()+" {"+n.getFilters().map(Pw).join(" ,")+"}"}(t):"Filter"}class yP extends Xe{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class vP extends Xe{constructor(e,n){super(e,"in",n),this.keys=Lw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _P extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=Lw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Lw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class kP extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Mg(n)&&Cl(n.arrayValue,this.value)}}class EP extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Cl(this.value.arrayValue,n)}}class wP extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Cl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Cl(this.value.arrayValue,n)}}class TP extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Mg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Cl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Pv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new IP(t,e,n,r,i,s,o)}function Dg(t){const e=ie(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Kp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Kd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>bo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>bo(r)).join(",")),e.ue=n}return e.ue}function Vg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Rw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rv(t.startAt,e.startAt)&&Rv(t.endAt,e.endAt)}function Qp(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function xP(t,e,n,r,i,s,o,l){return new Qo(t,e,n,r,i,s,o,l)}function Fg(t){return new Qo(t)}function Lv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bw(t){return t.collectionGroup!==null}function Qa(t){const e=ie(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new pt(ht.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Rl(s,r))}),n.has(ht.keyField().canonicalString())||e.ce.push(new Rl(ht.keyField(),r))}return e.ce}function Qn(t){const e=ie(t);return e.le||(e.le=SP(e,Qa(t))),e.le}function SP(t,e){if(t.limitType==="F")return Pv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Rl(i.field,s)});const n=t.endAt?new id(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new id(t.startAt.position,t.startAt.inclusive):null;return Pv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yp(t,e){const n=t.filters.concat([e]);return new Qo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function sd(t,e,n){return new Qo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qd(t,e){return Vg(Qn(t),Qn(e))&&t.limitType===e.limitType}function jw(t){return`${Dg(Qn(t))}|lt:${t.limitType}`}function qs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Pw(i)).join(", ")}]`),Kd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>bo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>bo(i)).join(",")),`Target(${r})`}(Qn(t))}; limitType=${t.limitType})`}function Yd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Qa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const d=Cv(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,Qa(r),i)||r.endAt&&!function(o,l,u){const d=Cv(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,Qa(r),i))}(t,e)}function AP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Nw(t){return(e,n)=>{let r=!1;for(const i of Qa(t)){const s=CP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function CP(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),d=l.data.field(s);return u!==null&&d!==null?Lo(u,d):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){os(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Tw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=new Ue(X.comparator);function Ir(){return RP}const Ow=new Ue(X.comparator);function ja(...t){let e=Ow;for(const n of t)e=e.insert(n.key,n);return e}function Mw(t){let e=Ow;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ni(){return Ya()}function Dw(){return Ya()}function Ya(){return new Yo(t=>t.toString(),(t,e)=>t.isEqual(e))}const PP=new Ue(X.comparator),LP=new pt(X.comparator);function ce(...t){let e=LP;for(const n of t)e=e.add(n);return e}const bP=new pt(_e);function jP(){return bP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rd(e)?"-0":e}}function Vw(t){return{integerValue:""+t}}function NP(t,e){return cP(e)?Vw(e):Ug(t,e)}/**
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
 */class Zd{constructor(){this._=void 0}}function OP(t,e,n){return t instanceof Pl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ng(s)&&(s=Og(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ll?Uw(t,e):t instanceof bl?$w(t,e):function(i,s){const o=Fw(i,s),l=bv(o)+bv(i.Pe);return Gp(o)&&Gp(i.Pe)?Vw(l):Ug(i.serializer,l)}(t,e)}function MP(t,e,n){return t instanceof Ll?Uw(t,e):t instanceof bl?$w(t,e):n}function Fw(t,e){return t instanceof od?function(r){return Gp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Pl extends Zd{}class Ll extends Zd{constructor(e){super(),this.elements=e}}function Uw(t,e){const n=Ww(e);for(const r of t.elements)n.some(i=>Zn(i,r))||n.push(r);return{arrayValue:{values:n}}}class bl extends Zd{constructor(e){super(),this.elements=e}}function $w(t,e){let n=Ww(e);for(const r of t.elements)n=n.filter(i=>!Zn(i,r));return{arrayValue:{values:n}}}class od extends Zd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function bv(t){return ze(t.integerValue||t.doubleValue)}function Ww(t){return Mg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e,n){this.field=e,this.transform=n}}function VP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ll&&i instanceof Ll||r instanceof bl&&i instanceof bl?Po(r.elements,i.elements,Zn):r instanceof od&&i instanceof od?Zn(r.Pe,i.Pe):r instanceof Pl&&i instanceof Pl}(t.transform,e.transform)}class FP{constructor(e,n){this.version=e,this.transformResults=n}}class fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xd{}function Bw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $g(t.key,fn.none()):new Kl(t.key,t.data,fn.none());{const n=t.data,r=Ut.empty();let i=new pt(ht.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new vi(t.key,r,new tn(i.toArray()),fn.none())}}function UP(t,e,n){t instanceof Kl?function(i,s,o){const l=i.value.clone(),u=Nv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof vi?function(i,s,o){if(!pc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Nv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(zw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Za(t,e,n,r){return t instanceof Kl?function(s,o,l,u){if(!pc(s.precondition,o))return l;const d=s.value.clone(),p=Ov(s.fieldTransforms,u,o);return d.setAll(p),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof vi?function(s,o,l,u){if(!pc(s.precondition,o))return l;const d=Ov(s.fieldTransforms,u,o),p=o.data;return p.setAll(zw(s)),p.setAll(d),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,l){return pc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function $P(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Fw(r.transform,i||null);s!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,s))}return n||null}function jv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Po(r,i,(s,o)=>VP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Kl extends Xd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vi extends Xd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function zw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Nv(t,e,n){const r=new Map;Ie(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,MP(o,l,n[i]))}return r}function Ov(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,OP(s,o,e))}return r}class $g extends Xd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class WP extends Xd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&UP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Za(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Za(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Dw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Bw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&Po(this.mutations,e.mutations,(n,r)=>jv(n,r))&&Po(this.baseMutations,e.baseMutations,(n,r)=>jv(n,r))}}class Wg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ie(e.mutations.length===r.length);let i=function(){return PP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Wg(e,n,r,i)}}/**
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
 */class zP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class HP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,fe;function qP(t){switch(t){default:return ne();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function Hw(t){if(t===void 0)return Tr("GRPC error has no .code"),$.UNKNOWN;switch(t){case Qe.OK:return $.OK;case Qe.CANCELLED:return $.CANCELLED;case Qe.UNKNOWN:return $.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return $.INTERNAL;case Qe.UNAVAILABLE:return $.UNAVAILABLE;case Qe.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Qe.NOT_FOUND:return $.NOT_FOUND;case Qe.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Qe.ABORTED:return $.ABORTED;case Qe.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Qe.DATA_LOSS:return $.DATA_LOSS;default:return ne()}}(fe=Qe||(Qe={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function GP(){return new TextEncoder}/**
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
 */const KP=new Fi([4294967295,4294967295],0);function Mv(t){const e=GP().encode(t),n=new mw;return n.update(e),new Uint8Array(n.digest())}function Dv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Fi([n,r],0),new Fi([i,s],0)]}class Bg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Na(`Invalid padding: ${n}`);if(r<0)throw new Na(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Na(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Na(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Fi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Fi.fromNumber(r)));return i.compare(KP)===1&&(i=new Fi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Mv(e),[r,i]=Dv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Bg(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Mv(e),[r,i]=Dv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Na extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ql.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Jd(re.min(),i,new Ue(_e),Ir(),ce())}}class Ql{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ql(r,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class qw{constructor(e,n){this.targetId=e,this.me=n}}class Gw{constructor(e,n,r=gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Vv{constructor(){this.fe=0,this.ge=Uv(),this.pe=gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ce(),n=ce(),r=ce();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne()}}),new Ql(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Uv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ie(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class QP{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ir(),this.qe=Fv(),this.Qe=new Ue(_e)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Qp(s))if(r===0){const o=new X(s.path);this.Ue(n,o,St.newNoDocument(o,re.min()))}else Ie(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Yi(r).toUint8Array()}catch(u){if(u instanceof Iw)return Ro("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Bg(o,i,s)}catch(u){return Ro(u instanceof Na?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Qp(l.target)){const u=new X(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,St.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ce();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Jd(e,n,this.Qe,this.ke,r);return this.ke=Ir(),this.qe=Fv(),this.Qe=new Ue(_e),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Vv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new pt(_e),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Vv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Fv(){return new Ue(X.comparator)}function Uv(){return new Ue(X.comparator)}const YP={asc:"ASCENDING",desc:"DESCENDING"},ZP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XP={and:"AND",or:"OR"};class JP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zp(t,e){return t.useProto3Json||Kd(e)?e:{value:e}}function ad(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function eL(t,e){return ad(t,e.toTimestamp())}function Yn(t){return Ie(!!t),re.fromTimestamp(function(n){const r=ui(n);return new Ge(r.seconds,r.nanos)}(t))}function zg(t,e){return Xp(t,e).canonicalString()}function Xp(t,e){const n=function(i){return new je(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Qw(t){const e=je.fromString(t);return Ie(eT(e)),e}function Jp(t,e){return zg(t.databaseId,e.path)}function If(t,e){const n=Qw(e);if(n.get(1)!==t.databaseId.projectId)throw new G($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(Zw(n))}function Yw(t,e){return zg(t.databaseId,e)}function tL(t){const e=Qw(t);return e.length===4?je.emptyPath():Zw(e)}function em(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Zw(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function $v(t,e,n){return{name:Jp(t,e),fields:n.value.mapValue.fields}}function nL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(Ie(p===void 0||typeof p=="string"),gt.fromBase64String(p||"")):(Ie(p===void 0||p instanceof Buffer||p instanceof Uint8Array),gt.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const p=d.code===void 0?$.UNKNOWN:Hw(d.code);return new G(p,d.message||"")}(o);n=new Gw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=If(t,r.document.name),s=Yn(r.document.updateTime),o=r.document.createTime?Yn(r.document.createTime):re.min(),l=new Ut({mapValue:{fields:r.document.fields}}),u=St.newFoundDocument(i,s,o,l),d=r.targetIds||[],p=r.removedTargetIds||[];n=new mc(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=If(t,r.document),s=r.readTime?Yn(r.readTime):re.min(),o=St.newNoDocument(i,s),l=r.removedTargetIds||[];n=new mc([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=If(t,r.document),s=r.removedTargetIds||[];n=new mc([],s,i,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new HP(i,s),l=r.targetId;n=new qw(l,o)}}return n}function rL(t,e){let n;if(e instanceof Kl)n={update:$v(t,e.key,e.value)};else if(e instanceof $g)n={delete:Jp(t,e.key)};else if(e instanceof vi)n={update:$v(t,e.key,e.data),updateMask:hL(e.fieldMask)};else{if(!(e instanceof WP))return ne();n={verify:Jp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Pl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ll)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof bl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof od)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:eL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ne()}(t,e.precondition)),n}function iL(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Yn(i.updateTime):Yn(s);return o.isEqual(re.min())&&(o=Yn(s)),new FP(o,i.transformResults||[])}(n,e))):[]}function sL(t,e){return{documents:[Yw(t,e.path)]}}function oL(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Yw(t,i);const s=function(d){if(d.length!==0)return Jw(On.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(p=>function(y){return{field:Gs(y.field),direction:uL(y.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Zp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function aL(t){let e=tL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ie(r===1);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(g){const y=Xw(g);return y instanceof On&&Cw(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(y=>function(A){return new Rl(Ks(A.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(g){let y;return y=typeof g=="object"?g.value:g,Kd(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(g){const y=!!g.before,E=g.values||[];return new id(E,y)}(n.startAt));let d=null;return n.endAt&&(d=function(g){const y=!g.before,E=g.values||[];return new id(E,y)}(n.endAt)),xP(e,i,o,s,l,"F",u,d)}function lL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Xw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ks(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ks(n.unaryFilter.field);return Xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ks(n.unaryFilter.field);return Xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ks(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return Xe.create(Ks(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return On.create(n.compositeFilter.filters.map(r=>Xw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function uL(t){return YP[t]}function cL(t){return ZP[t]}function dL(t){return XP[t]}function Gs(t){return{fieldPath:t.canonicalString()}}function Ks(t){return ht.fromServerFormat(t.fieldPath)}function Jw(t){return t instanceof Xe?function(n){if(n.op==="=="){if(Av(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NAN"}};if(Sv(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Av(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NAN"}};if(Sv(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gs(n.field),op:cL(n.op),value:n.value}}}(t):t instanceof On?function(n){const r=n.getFilters().map(i=>Jw(i));return r.length===1?r[0]:{compositeFilter:{op:dL(n.op),filters:r}}}(t):ne()}function hL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function eT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n,r,i,s=re.min(),o=re.min(),l=gt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e){this.ct=e}}function pL(t){const e=aL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(){this.un=new gL}addToCollectionParentIndex(e,n){return this.un.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(li.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(li.min())}updateCollectionGroup(e,n,r){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class gL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new pt(je.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pt(je.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new jo(0)}static kn(){return new jo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(){this.changes=new Yo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?W.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Za(r.mutation,i,tn.empty(),Ge.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const i=Ni();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ja();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ni();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Ir();const o=Ya(),l=function(){return Ya()}();return n.forEach((u,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof vi)?s=s.insert(d.key,d):p!==void 0?(o.set(d.key,p.mutation.getFieldMask()),Za(p.mutation,d,p.mutation.getFieldMask(),Ge.now())):o.set(d.key,tn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,p)=>o.set(d,p)),n.forEach((d,p)=>{var g;return l.set(d,new vL(p,(g=o.get(d))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ya();let i=new Ue((o,l)=>o-l),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let p=r.get(u)||tn.empty();p=l.applyToLocalView(d,p),r.set(u,p);const g=(i.get(l.batchId)||ce()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,g=Dw();p.forEach(y=>{if(!s.has(y)){const E=Bw(n.get(y),r.get(y));E!==null&&g.set(y,E),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,g))}return W.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):W.resolve(Ni());let l=-1,u=s;return o.next(d=>W.forEach(d,(p,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(p)?W.resolve():this.remoteDocumentCache.getEntry(e,p).next(y=>{u=u.insert(p,y)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,ce())).next(p=>({batchId:l,changes:Mw(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=ja();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ja();return this.indexManager.getCollectionParents(e,s).next(l=>W.forEach(l,u=>{const d=function(g,y){return new Qo(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((g,y)=>{o=o.insert(g,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const p=d.getKey();o.get(p)===null&&(o=o.insert(p,St.newInvalidDocument(p)))});let l=ja();return o.forEach((u,d)=>{const p=s.get(u);p!==void 0&&Za(p.mutation,d,tn.empty(),Ge.now()),Yd(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return W.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Yn(i.createTime)}}(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:pL(i.bundledQuery),readTime:Yn(i.readTime)}}(n)),W.resolve()}}/**
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
 */class EL{constructor(){this.overlays=new Ue(X.comparator),this.Ir=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ni();return W.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),W.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),W.resolve()}getOverlaysForCollection(e,n,r){const i=Ni(),s=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return W.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ue((d,p)=>d-p);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=Ni(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Ni(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=i)););return W.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zP(n,r));let s=this.Ir.get(n);s===void 0&&(s=ce(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class wL{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.Tr=new pt(rt.Er),this.dr=new pt(rt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new rt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new je([])),r=new rt(n,e),i=new rt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new je([])),r=new rt(n,e),i=new rt(n,e+1);let s=ce();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new rt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||_e(e.wr,n.wr)}static Ar(e,n){return _e(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new pt(rt.Er)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new BP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new rt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return W.resolve(o)}lookupMutationBatch(e,n){return W.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return W.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),i=new rt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),W.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pt(_e);return n.forEach(i=>{const s=new rt(i,0),o=new rt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),W.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new rt(new X(s),0);let l=new pt(_e);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},o),W.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ie(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return W.forEach(n.mutations,i=>{const s=new rt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new rt(n,0),i=this.br.firstAfterOrEqual(r);return W.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{constructor(e){this.Mr=e,this.docs=function(){return new Ue(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return W.resolve(r?r.document.mutableCopy():St.newInvalidDocument(n))}getEntries(e,n){let r=Ir();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():St.newInvalidDocument(i))}),W.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ir();const o=n.path,l=new X(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||oP(sP(p),r)<=0||(i.has(p.key)||Yd(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return W.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ne()}Or(e,n){return W.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new xL(this)}getSize(e){return W.resolve(this.size)}}class xL extends yL{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),W.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e){this.persistence=e,this.Nr=new Yo(n=>Dg(n),Vg),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Hg,this.targetCount=0,this.kr=jo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),W.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new jo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.Kn(n),W.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),W.waitFor(s).next(()=>i)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return W.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),W.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),W.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),W.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return W.resolve(r)}containsKey(e,n){return W.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(e,n){this.qr={},this.overlays={},this.Qr=new jg(0),this.Kr=!1,this.Kr=!0,this.$r=new wL,this.referenceDelegate=e(this),this.Ur=new SL(this),this.indexManager=new mL,this.remoteDocumentCache=function(i){return new IL(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new fL(n),this.Gr=new kL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new EL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new TL(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const i=new CL(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return W.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class CL extends lP{constructor(e){super(),this.currentSequenceNumber=e}}class qg{constructor(e){this.persistence=e,this.Jr=new Hg,this.Yr=null}static Zr(e){return new qg(e)}get Xr(){if(this.Yr)return this.Yr;throw ne()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),W.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),W.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.Xr,r=>{const i=X.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,re.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return W.or([()=>W.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Gg(e,n.fromCache,r,i)}}/**
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
 */class RL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return cC()?8:uP(Rt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new RL;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ta()<=de.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",qs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),W.resolve()):(Ta()<=de.DEBUG&&Z("QueryEngine","Query:",qs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ta()<=de.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",qs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qn(n))):W.resolve())}Yi(e,n){if(Lv(n))return W.resolve(null);let r=Qn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=sd(n,null,"F"),r=Qn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ce(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,sd(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return Lv(n)||i.isEqual(re.min())?W.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?W.resolve(null):(Ta()<=de.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qs(n)),this.rs(e,o,n,iP(i,-1)).next(l=>l))})}ts(e,n){let r=new pt(Nw(e));return n.forEach((i,s)=>{Yd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ta()<=de.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",qs(n)),this.Ji.getDocumentsMatchingQuery(e,n,li.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LL{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ue(_e),this._s=new Yo(s=>Dg(s),Vg),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _L(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function bL(t,e,n,r){return new LL(t,e,n,r)}async function tT(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ce();for(const d of i){o.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of s){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function jL(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const g=d.batch,y=g.keys();let E=W.resolve();return y.forEach(A=>{E=E.next(()=>p.getEntry(u,A)).next(P=>{const L=d.docVersions.get(A);Ie(L!==null),P.version.compareTo(L)<0&&(g.applyToRemoteDocument(P,d),P.isValidDocument()&&(P.setReadTime(d.commitVersion),p.addEntry(P)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ce();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function nT(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function NL(t,e){const n=ie(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((p,g)=>{const y=i.get(g);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,p.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(s,p.addedDocuments,g)));let E=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?E=E.withResumeToken(gt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):p.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(p.resumeToken,r)),i=i.insert(g,E),function(P,L,w){return P.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(y,E,p)&&l.push(n.Ur.updateTargetData(s,E))});let u=Ir(),d=ce();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(OL(s,o,e.documentUpdates).next(p=>{u=p.Ps,d=p.Is})),!r.isEqual(re.min())){const p=n.Ur.getLastRemoteSnapshotVersion(s).next(g=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return W.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.os=i,s))}function OL(t,e,n){let r=ce(),i=ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ir();return n.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(re.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function ML(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function DL(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,W.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Hr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function tm(t,e,n){const r=ie(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Gl(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Wv(t,e,n){const r=ie(t);let i=re.min(),s=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,p){const g=ie(u),y=g._s.get(p);return y!==void 0?W.resolve(g.os.get(y)):g.Ur.getTargetData(d,p)}(r,o,Qn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?s:ce())).next(l=>(VL(r,AP(e),l),{documents:l,Ts:s})))}function VL(t,e,n){let r=t.us.get(e)||re.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Bv{constructor(){this.activeTargetIds=jP()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FL{constructor(){this.so=new Bv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Bv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vu=null;function xf(){return Vu===null?Vu=function(){return 268435456+Math.round(2147483648*Math.random())}():Vu++,"0x"+Vu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $L={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class BL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=xf(),u=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,o),this.No(n,u,d,i).then(p=>(Z("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw Ro("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",i),p})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ko}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=$L[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=xf();return new Promise((o,l)=>{const u=new gw;u.setWithCredentials(!0),u.listenOnce(yw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case hc.NO_ERROR:const p=u.getResponseJson();Z(Tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),o(p);break;case hc.TIMEOUT:Z(Tt,`RPC '${e}' ${s} timed out`),l(new G($.DEADLINE_EXCEEDED,"Request time out"));break;case hc.HTTP_ERROR:const g=u.getStatus();if(Z(Tt,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const E=y==null?void 0:y.error;if(E&&E.status&&E.message){const A=function(L){const w=L.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(w)>=0?w:$.UNKNOWN}(E.status);l(new G(A,E.message))}else l(new G($.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new G($.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{Z(Tt,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);Z(Tt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=xf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=kw(),l=_w(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=s.join("");Z(Tt,`Creating RPC '${e}' stream ${i}: ${p}`,u);const g=o.createWebChannel(p,u);let y=!1,E=!1;const A=new WL({Io:L=>{E?Z(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(y||(Z(Tt,`Opening RPC '${e}' stream ${i} transport.`),g.open(),y=!0),Z(Tt,`RPC '${e}' stream ${i} sending:`,L),g.send(L))},To:()=>g.close()}),P=(L,w,v)=>{L.listen(w,x=>{try{v(x)}catch(b){setTimeout(()=>{throw b},0)}})};return P(g,ba.EventType.OPEN,()=>{E||(Z(Tt,`RPC '${e}' stream ${i} transport opened.`),A.yo())}),P(g,ba.EventType.CLOSE,()=>{E||(E=!0,Z(Tt,`RPC '${e}' stream ${i} transport closed`),A.So())}),P(g,ba.EventType.ERROR,L=>{E||(E=!0,Ro(Tt,`RPC '${e}' stream ${i} transport errored:`,L),A.So(new G($.UNAVAILABLE,"The operation could not be completed")))}),P(g,ba.EventType.MESSAGE,L=>{var w;if(!E){const v=L.data[0];Ie(!!v);const x=v,b=x.error||((w=x[0])===null||w===void 0?void 0:w.error);if(b){Z(Tt,`RPC '${e}' stream ${i} received error:`,b);const M=b.status;let V=function(I){const C=Qe[I];if(C!==void 0)return Hw(C)}(M),k=b.message;V===void 0&&(V=$.INTERNAL,k="Unknown error status: "+M+" with message "+b.message),E=!0,A.So(new G(V,k)),g.close()}else Z(Tt,`RPC '${e}' stream ${i} received:`,v),A.bo(v)}}),P(l,vw.STAT_EVENT,L=>{L.stat===Hp.PROXY?Z(Tt,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===Hp.NOPROXY&&Z(Tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function Sf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t){return new JP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new rT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Tr(n.toString()),Tr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new G($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zL extends iT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=nL(this.serializer,e),r=function(s){if(!("targetChange"in s))return re.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?Yn(o.readTime):re.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=em(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Qp(u)?{documents:sL(s,u)}:{query:oL(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Kw(s,o.resumeToken);const d=Zp(s,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(re.min())>0){l.readTime=ad(s,o.snapshotVersion.toTimestamp());const d=Zp(s,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=lL(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=em(this.serializer),n.removeTarget=e,this.a_(n)}}class HL extends iT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=iL(e.writeResults,e.commitTime),r=Yn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=em(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>rL(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new G($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Xp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G($.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Xp(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G($.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class GL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Tr(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{as(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=ie(u);d.L_.add(4),await Yl(d),d.q_.set("Unknown"),d.L_.delete(4),await th(d)}(this))})}),this.q_=new GL(r,i)}}async function th(t){if(as(t))for(const e of t.B_)await e(!0)}async function Yl(t){for(const e of t.B_)await e(!1)}function sT(t,e){const n=ie(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Zg(n)?Yg(n):Zo(n).r_()&&Qg(n,e))}function Kg(t,e){const n=ie(t),r=Zo(n);n.N_.delete(e),r.r_()&&oT(n,e),n.N_.size===0&&(r.r_()?r.o_():as(n)&&n.q_.set("Unknown"))}function Qg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Zo(t).A_(e)}function oT(t,e){t.Q_.xe(e),Zo(t).R_(e)}function Yg(t){t.Q_=new QP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Zo(t).start(),t.q_.v_()}function Zg(t){return as(t)&&!Zo(t).n_()&&t.N_.size>0}function as(t){return ie(t).L_.size===0}function aT(t){t.Q_=void 0}async function QL(t){t.q_.set("Online")}async function YL(t){t.N_.forEach((e,n)=>{Qg(t,e)})}async function ZL(t,e){aT(t),Zg(t)?(t.q_.M_(e),Yg(t)):t.q_.set("Unknown")}async function XL(t,e,n){if(t.q_.set("Online"),e instanceof Gw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ld(t,r)}else if(e instanceof mc?t.Q_.Ke(e):e instanceof qw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(re.min()))try{const r=await nT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.N_.get(d);p&&s.N_.set(d,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const p=s.N_.get(u);if(!p)return;s.N_.set(u,p.withResumeToken(gt.EMPTY_BYTE_STRING,p.snapshotVersion)),oT(s,u);const g=new Hr(p.target,u,d,p.sequenceNumber);Qg(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await ld(t,r)}}async function ld(t,e,n){if(!Gl(e))throw e;t.L_.add(1),await Yl(t),t.q_.set("Offline"),n||(n=()=>nT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await th(t)})}function lT(t,e){return e().catch(n=>ld(t,n,e))}async function nh(t){const e=ie(t),n=ci(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;JL(e);)try{const i=await ML(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,eb(e,i)}catch(i){await ld(e,i)}uT(e)&&cT(e)}function JL(t){return as(t)&&t.O_.length<10}function eb(t,e){t.O_.push(e);const n=ci(t);n.r_()&&n.V_&&n.m_(e.mutations)}function uT(t){return as(t)&&!ci(t).n_()&&t.O_.length>0}function cT(t){ci(t).start()}async function tb(t){ci(t).p_()}async function nb(t){const e=ci(t);for(const n of t.O_)e.m_(n.mutations)}async function rb(t,e,n){const r=t.O_.shift(),i=Wg.from(r,e,n);await lT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await nh(t)}async function ib(t,e){e&&ci(t).V_&&await async function(r,i){if(function(o){return qP(o)&&o!==$.ABORTED}(i.code)){const s=r.O_.shift();ci(r).s_(),await lT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await nh(r)}}(t,e),uT(t)&&cT(t)}async function Hv(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=as(n);n.L_.add(3),await Yl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await th(n)}async function sb(t,e){const n=ie(t);e?(n.L_.delete(2),await th(n)):e||(n.L_.add(2),await Yl(n),n.q_.set("Unknown"))}function Zo(t){return t.K_||(t.K_=function(n,r,i){const s=ie(n);return s.w_(),new zL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:QL.bind(null,t),Ro:YL.bind(null,t),mo:ZL.bind(null,t),d_:XL.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Zg(t)?Yg(t):t.q_.set("Unknown")):(await t.K_.stop(),aT(t))})),t.K_}function ci(t){return t.U_||(t.U_=function(n,r,i){const s=ie(n);return s.w_(),new HL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:tb.bind(null,t),mo:ib.bind(null,t),f_:nb.bind(null,t),g_:rb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await nh(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Xg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jg(t,e){if(Tr("AsyncQueue",`${e}: ${t}`),Gl(t))return new G($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=ja(),this.sortedSet=new Ue(this.comparator)}static emptySet(e){return new ko(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ko)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ko;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.W_=new Ue(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ne():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class No{constructor(e,n,r,i,s,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new No(e,n,ko.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class ab{constructor(){this.queries=Gv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ie(n),s=i.queries;i.queries=Gv(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new G($.ABORTED,"Firestore shutting down"))}}function Gv(){return new Yo(t=>jw(t),Qd)}async function dT(t,e){const n=ie(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new ob,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Jg(o,`Initialization of query '${qs(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&e0(n)}async function hT(t,e){const n=ie(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function lb(t,e){const n=ie(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&e0(n)}function ub(t,e,n){const r=ie(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function e0(t){t.Y_.forEach(e=>{e.next()})}var nm,Kv;(Kv=nm||(nm={})).ea="default",Kv.Cache="cache";class fT{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new No(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=No.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==nm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e){this.key=e}}class mT{constructor(e){this.key=e}}class cb{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ce(),this.mutatedKeys=ce(),this.Aa=Nw(e),this.Ra=new ko(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new qv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,g)=>{const y=i.get(p),E=Yd(this.query,g)?g:null,A=!!y&&this.mutatedKeys.has(y.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let L=!1;y&&E?y.data.isEqual(E.data)?A!==P&&(r.track({type:3,doc:E}),L=!0):this.ga(y,E)||(r.track({type:2,doc:E}),L=!0,(u&&this.Aa(E,u)>0||d&&this.Aa(E,d)<0)&&(l=!0)):!y&&E?(r.track({type:0,doc:E}),L=!0):y&&!E&&(r.track({type:1,doc:y}),L=!0,(u||d)&&(l=!0)),L&&(E?(o=o.add(E),s=P?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,g)=>function(E,A){const P=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return P(E)-P(A)}(p.type,g.type)||this.Aa(p.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new No(this.query,e.Ra,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new qv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ce(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new mT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new pT(r))}),n}ba(e){this.Ta=e.Ts,this.da=ce();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return No.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class db{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class hb{constructor(e){this.key=e,this.va=!1}}class fb{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Yo(l=>jw(l),Qd),this.Ma=new Map,this.xa=new Set,this.Oa=new Ue(X.comparator),this.Na=new Map,this.La=new Hg,this.Ba={},this.ka=new Map,this.qa=jo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function pb(t,e,n=!0){const r=ET(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await gT(r,e,n,!0),i}async function mb(t,e){const n=ET(t);await gT(n,e,!0,!1)}async function gT(t,e,n,r){const i=await DL(t.localStore,Qn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await gb(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&sT(t.remoteStore,i),l}async function gb(t,e,n,r,i){t.Ka=(g,y,E)=>async function(P,L,w,v){let x=L.view.ma(w);x.ns&&(x=await Wv(P.localStore,L.query,!1).then(({documents:k})=>L.view.ma(k,x)));const b=v&&v.targetChanges.get(L.targetId),M=v&&v.targetMismatches.get(L.targetId)!=null,V=L.view.applyChanges(x,P.isPrimaryClient,b,M);return Yv(P,L.targetId,V.wa),V.snapshot}(t,g,y,E);const s=await Wv(t.localStore,e,!0),o=new cb(e,s.Ts),l=o.ma(s.documents),u=Ql.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(l,t.isPrimaryClient,u);Yv(t,n,d.wa);const p=new db(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function yb(t,e,n){const r=ie(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Qd(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await tm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Kg(r.remoteStore,i.targetId),rm(r,i.targetId)}).catch(ql)):(rm(r,i.targetId),await tm(r.localStore,i.targetId,!0))}async function vb(t,e){const n=ie(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Kg(n.remoteStore,r.targetId))}async function _b(t,e,n){const r=Sb(t);try{const i=await function(o,l){const u=ie(o),d=Ge.now(),p=l.reduce((E,A)=>E.add(A.key),ce());let g,y;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let A=Ir(),P=ce();return u.cs.getEntries(E,p).next(L=>{A=L,A.forEach((w,v)=>{v.isValidDocument()||(P=P.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,A)).next(L=>{g=L;const w=[];for(const v of l){const x=$P(v,g.get(v.key).overlayedDocument);x!=null&&w.push(new vi(v.key,x,xw(x.value.mapValue),fn.exists(!0)))}return u.mutationQueue.addMutationBatch(E,d,w,l)}).next(L=>{y=L;const w=L.applyToLocalDocumentSet(g,P);return u.documentOverlayCache.saveOverlays(E,L.batchId,w)})}).then(()=>({batchId:y.batchId,changes:Mw(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new Ue(_e)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,i.batchId,n),await Zl(r,i.changes),await nh(r.remoteStore)}catch(i){const s=Jg(i,"Failed to persist write");n.reject(s)}}async function yT(t,e){const n=ie(t);try{const r=await NL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Ie(o.va):i.removedDocuments.size>0&&(Ie(o.va),o.va=!1))}),await Zl(n,r,e)}catch(r){await ql(r)}}function Qv(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ie(o);u.onlineState=l;let d=!1;u.queries.forEach((p,g)=>{for(const y of g.j_)y.Z_(l)&&(d=!0)}),d&&e0(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kb(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ue(X.comparator);o=o.insert(s,St.newNoDocument(s,re.min()));const l=ce().add(s),u=new Jd(re.min(),new Map,new Ue(_e),o,l);await yT(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),t0(r)}else await tm(r.localStore,e,!1).then(()=>rm(r,e,n)).catch(ql)}async function Eb(t,e){const n=ie(t),r=e.batch.batchId;try{const i=await jL(n.localStore,e);_T(n,r,null),vT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zl(n,i)}catch(i){await ql(i)}}async function wb(t,e,n){const r=ie(t);try{const i=await function(o,l){const u=ie(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(g=>(Ie(g!==null),p=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);_T(r,e,n),vT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zl(r,i)}catch(i){await ql(i)}}function vT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function _T(t,e,n){const r=ie(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function rm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||kT(t,r)})}function kT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Kg(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),t0(t))}function Yv(t,e,n){for(const r of n)r instanceof pT?(t.La.addReference(r.key,e),Tb(t,r)):r instanceof mT?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||kT(t,r.key)):ne()}function Tb(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),t0(t))}function t0(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(je.fromString(e)),r=t.qa.next();t.Na.set(r,new hb(n)),t.Oa=t.Oa.insert(n,r),sT(t.remoteStore,new Hr(Qn(Fg(n.path)),r,"TargetPurposeLimboResolution",jg.oe))}}async function Zl(t,e,n){const r=ie(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var p;if((d||n)&&r.isPrimaryClient){const g=d?!d.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){i.push(d);const g=Gg.Wi(u.targetId,d);s.push(g)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,d){const p=ie(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>W.forEach(d,y=>W.forEach(y.$i,E=>p.persistence.referenceDelegate.addReference(g,y.targetId,E)).next(()=>W.forEach(y.Ui,E=>p.persistence.referenceDelegate.removeReference(g,y.targetId,E)))))}catch(g){if(!Gl(g))throw g;Z("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const y=g.targetId;if(!g.fromCache){const E=p.os.get(y),A=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(A);p.os=p.os.insert(y,P)}}}(r.localStore,s))}async function Ib(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await tT(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new G($.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zl(n,r.hs)}}function xb(t,e){const n=ie(t),r=n.Na.get(e);if(r&&r.va)return ce().add(r.key);{let i=ce();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function ET(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kb.bind(null,e),e.Ca.d_=lb.bind(null,e.eventManager),e.Ca.$a=ub.bind(null,e.eventManager),e}function Sb(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Eb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wb.bind(null,e),e}class ud{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=eh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return bL(this.persistence,new PL,e.initialUser,this.serializer)}Ga(e){return new AL(qg.Zr,this.serializer)}Wa(e){return new FL}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ud.provider={build:()=>new ud};class im{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ib.bind(null,this.syncEngine),await sb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ab}()}createDatastore(e){const n=eh(e.databaseInfo.databaseId),r=function(s){return new BL(s)}(e.databaseInfo);return function(s,o,l,u){return new qL(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new KL(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Qv(this.syncEngine,n,0),function(){return zv.D()?new zv:new UL}())}createSyncEngine(e,n){return function(i,s,o,l,u,d,p){const g=new fb(i,s,o,l,u,d);return p&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ie(i);Z("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Yl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}im.provider={build:()=>new im};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Tr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=ww.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Af(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await tT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Cb(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Hv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Hv(e.remoteStore,i)),t._onlineComponents=e}async function Cb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Af(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===$.FAILED_PRECONDITION||i.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ro("Error using user provided cache. Falling back to memory cache: "+n),await Af(t,new ud)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await Af(t,new ud);return t._offlineComponents}async function TT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await Zv(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await Zv(t,new im))),t._onlineComponents}function Rb(t){return TT(t).then(e=>e.syncEngine)}async function IT(t){const e=await TT(t),n=e.eventManager;return n.onListen=pb.bind(null,e.syncEngine),n.onUnlisten=yb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=mb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=vb.bind(null,e.syncEngine),n}function Pb(t,e,n={}){const r=new gr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const p=new wT({next:y=>{p.Za(),o.enqueueAndForget(()=>hT(s,g));const E=y.docs.has(l);!E&&y.fromCache?d.reject(new G($.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&y.fromCache&&u&&u.source==="server"?d.reject(new G($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(y)},error:y=>d.reject(y)}),g=new fT(Fg(l.path),p,{includeMetadataChanges:!0,_a:!0});return dT(s,g)}(await IT(t),t.asyncQueue,e,n,r)),r.promise}function Lb(t,e,n={}){const r=new gr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const p=new wT({next:y=>{p.Za(),o.enqueueAndForget(()=>hT(s,g)),y.fromCache&&u.source==="server"?d.reject(new G($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(y)},error:y=>d.reject(y)}),g=new fT(l,p,{includeMetadataChanges:!0,_a:!0});return dT(s,g)}(await IT(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function xT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t,e,n){if(!n)throw new G($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bb(t,e,n,r){if(e===!0&&r===!0)throw new G($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jv(t){if(!X.isDocumentKey(t))throw new G($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function e_(t){if(X.isDocumentKey(t))throw new G($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function rh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function Mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rh(t);throw new G($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ih{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new t_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new t_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Q6;switch(r.type){case"firstParty":return new J6(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Xv.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Xv.delete(n),r.terminate())}(this),Promise.resolve()}}function jb(t,e,n,r={}){var i;const s=(t=Mn(t,ih))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ro("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=It.MOCK_USER;else{l=x2(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new G($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new It(d)}t._authCredentials=new Y6(new Ew(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _i(this.firestore,e,this._query)}}class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class si extends _i{constructor(e,n,r){super(e,n,Fg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new X(e))}withConverter(e){return new si(this.firestore,e,this._path)}}function Oo(t,e,...n){if(t=Be(t),ST("collection","path",e),t instanceof ih){const r=je.fromString(e,...n);return e_(r),new si(t,null,r)}{if(!(t instanceof Ot||t instanceof si))throw new G($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return e_(r),new si(t.firestore,null,r)}}function An(t,e,...n){if(t=Be(t),arguments.length===1&&(e=ww.newId()),ST("doc","path",e),t instanceof ih){const r=je.fromString(e,...n);return Jv(r),new Ot(t,null,new X(r))}{if(!(t instanceof Ot||t instanceof si))throw new G($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return Jv(r),new Ot(t.firestore,t instanceof si?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new rT(this,"async_queue_retry"),this.Vu=()=>{const r=Sf();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Sf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Sf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new gr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Gl(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Tr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Xg.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ne()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class ls extends ih{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new n_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new n_(e),this._firestoreClient=void 0,await e}}}function Nb(t,e){const n=typeof t=="object"?t:zd(),r=typeof t=="string"?t:"(default)",i=gi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=w2("firestore");s&&jb(i,...s)}return i}function n0(t){if(t._terminated)throw new G($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Ob(t),t._firestoreClient}function Ob(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,p){return new hP(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,xT(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Ab(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mo(gt.fromBase64String(e))}catch(n){throw new G($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mo(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */class i0{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=/^__.*__$/;class Db{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Kl(e,this.data,n,this.fieldTransforms)}}class AT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new vi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function CT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class s0{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new s0(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return cd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(CT(this.Cu)&&Mb.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Vb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||eh(e)}Qu(e,n,r,i=!1){return new s0({Cu:e,methodName:n,qu:r,path:ht.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ah(t){const e=t._freezeSettings(),n=eh(t._databaseId);return new Vb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function RT(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);a0("Data must be an object, but it was:",o,r);const l=PT(r,o);let u,d;if(s.merge)u=new tn(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const g of s.mergeFields){const y=sm(e,g,n);if(!o.contains(y))throw new G($.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);bT(p,y)||p.push(y)}u=new tn(p),d=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=o.fieldTransforms;return new Db(new Ut(l),u,d)}class lh extends oh{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lh}}class o0 extends oh{_toFieldTransform(e){return new DP(e.path,new Pl)}isEqual(e){return e instanceof o0}}function Fb(t,e,n,r){const i=t.Qu(1,e,n);a0("Data must be an object, but it was:",i,r);const s=[],o=Ut.empty();os(r,(u,d)=>{const p=l0(e,u,n);d=Be(d);const g=i.Nu(p);if(d instanceof lh)s.push(p);else{const y=Xl(d,g);y!=null&&(s.push(p),o.set(p,y))}});const l=new tn(s);return new AT(o,l,i.fieldTransforms)}function Ub(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[sm(e,r,n)],u=[i];if(s.length%2!=0)throw new G($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(sm(e,s[y])),u.push(s[y+1]);const d=[],p=Ut.empty();for(let y=l.length-1;y>=0;--y)if(!bT(d,l[y])){const E=l[y];let A=u[y];A=Be(A);const P=o.Nu(E);if(A instanceof lh)d.push(E);else{const L=Xl(A,P);L!=null&&(d.push(E),p.set(E,L))}}const g=new tn(d);return new AT(p,g,o.fieldTransforms)}function $b(t,e,n,r=!1){return Xl(n,t.Qu(r?4:3,e))}function Xl(t,e){if(LT(t=Be(t)))return a0("Unsupported field value:",e,t),PT(t,e);if(t instanceof oh)return function(r,i){if(!CT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Xl(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return NP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ge.fromDate(r);return{timestampValue:ad(i.serializer,s)}}if(r instanceof Ge){const s=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ad(i.serializer,s)}}if(r instanceof r0)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mo)return{bytesValue:Kw(i.serializer,r._byteString)};if(r instanceof Ot){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:zg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof i0)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Ug(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${rh(r)}`)}(t,e)}function PT(t,e){const n={};return Tw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):os(t,(r,i)=>{const s=Xl(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function LT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof r0||t instanceof Mo||t instanceof Ot||t instanceof oh||t instanceof i0)}function a0(t,e,n){if(!LT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=rh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function sm(t,e,n){if((e=Be(e))instanceof sh)return e._internalPath;if(typeof e=="string")return l0(t,e);throw cd("Field path arguments must be of type string or ",t,!1,void 0,n)}const Wb=new RegExp("[~\\*/\\[\\]]");function l0(t,e,n){if(e.search(Wb)>=0)throw cd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sh(...e.split("."))._internalPath}catch{throw cd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G($.INVALID_ARGUMENT,l+t+u)}function bT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Bb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(uh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Bb extends jT{data(){return super.data()}}function uh(t,e){return typeof e=="string"?l0(t,e):e instanceof sh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class u0{}class c0 extends u0{}function om(t,e,...n){let r=[];e instanceof u0&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof d0).length,l=s.filter(u=>u instanceof ch).length;if(o>1||o>0&&l>0)throw new G($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ch extends c0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ch(e,n,r)}_apply(e){const n=this._parse(e);return NT(e._query,n),new _i(e.firestore,e.converter,Yp(e._query,n))}_parse(e){const n=ah(e.firestore);return function(s,o,l,u,d,p,g){let y;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new G($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){i_(g,p);const E=[];for(const A of g)E.push(r_(u,s,A));y={arrayValue:{values:E}}}else y=r_(u,s,g)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||i_(g,p),y=$b(l,o,g,p==="in"||p==="not-in");return Xe.create(d,p,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function am(t,e,n){const r=e,i=uh("where",t);return ch._create(i,r,n)}class d0 extends u0{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new d0(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:On.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)NT(o,u),o=Yp(o,u)}(e._query,n),new _i(e.firestore,e.converter,Yp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class h0 extends c0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new h0(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new G($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new G($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Rl(s,o)}(e._query,this._field,this._direction);return new _i(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Qo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Hb(t,e="asc"){const n=e,r=uh("orderBy",t);return h0._create(r,n)}class f0 extends c0{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new f0(e,n,r)}_apply(e){return new _i(e.firestore,e.converter,sd(e._query,this._limit,this._limitType))}}function qb(t){return f0._create("limit",t,"F")}function r_(t,e,n){if(typeof(n=Be(n))=="string"){if(n==="")throw new G($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bw(e)&&n.indexOf("/")!==-1)throw new G($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(je.fromString(n));if(!X.isDocumentKey(r))throw new G($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xv(t,new X(r))}if(n instanceof Ot)return xv(t,n._key);throw new G($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rh(n)}.`)}function i_(t,e){if(!Array.isArray(t)||t.length===0)throw new G($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function NT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Gb{convertValue(e,n="none"){switch(Zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return os(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ze(o.doubleValue));return new i0(s)}convertGeoPoint(e){return new r0(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Og(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Sl(e));default:return null}}convertTimestamp(e){const n=ui(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);Ie(eT(r));const i=new Al(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||Tr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class MT extends jT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new gc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(uh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class gc extends MT{data(e={}){return super.data(e)}}class Kb{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Oa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new gc(this._firestore,this._userDataWriter,r.key,r,new Oa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new gc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Oa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new gc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Oa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:Qb(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Qb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(t){t=Mn(t,Ot);const e=Mn(t.firestore,ls);return Pb(n0(e),t._key).then(n=>Zb(e,t,n))}class VT extends Gb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function dd(t){t=Mn(t,_i);const e=Mn(t.firestore,ls),n=n0(e),r=new VT(e);return zb(t._query),Lb(n,t._query).then(i=>new Kb(e,r,t,i))}function lm(t,e,n){t=Mn(t,Ot);const r=Mn(t.firestore,ls),i=OT(t.converter,e,n);return dh(r,[RT(ah(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,fn.none())])}function Xa(t,e,n,...r){t=Mn(t,Ot);const i=Mn(t.firestore,ls),s=ah(i);let o;return o=typeof(e=Be(e))=="string"||e instanceof sh?Ub(s,"updateDoc",t._key,e,n,r):Fb(s,"updateDoc",t._key,e),dh(i,[o.toMutation(t._key,fn.exists(!0))])}function Yb(t){return dh(Mn(t.firestore,ls),[new $g(t._key,fn.none())])}function FT(t,e){const n=Mn(t.firestore,ls),r=An(t),i=OT(t.converter,e);return dh(n,[RT(ah(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,fn.exists(!1))]).then(()=>r)}function dh(t,e){return function(r,i){const s=new gr;return r.asyncQueue.enqueueAndForget(async()=>_b(await Rb(r),i,s)),s.promise}(n0(t),e)}function Zb(t,e,n){const r=n.docs.get(e._key),i=new VT(t);return new MT(t,i,e._key,r,new Oa(n.hasPendingWrites,n.fromCache),e.converter)}function UT(){return new o0("serverTimestamp")}(function(e,n=!0){(function(i){Ko=i})(ss),jn(new gn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ls(new Z6(r.getProvider("auth-internal")),new tP(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new G($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Al(d.options.projectId,p)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Gt(kv,"4.7.3",e),Gt(kv,"4.7.3","esm2017")})();const $T="@firebase/installations",p0="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=1e4,BT=`w:${p0}`,zT="FIS_v2",Xb="https://firebaseinstallations.googleapis.com/v1",Jb=60*60*1e3,ej="installations",tj="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nj={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Xi=new is(ej,tj,nj);function HT(t){return t instanceof vn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT({projectId:t}){return`${Xb}/projects/${t}/installations`}function GT(t){return{token:t.token,requestStatus:2,expiresIn:ij(t.expiresIn),creationTime:Date.now()}}async function KT(t,e){const r=(await e.json()).error;return Xi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function QT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function rj(t,{refreshToken:e}){const n=QT(t);return n.append("Authorization",sj(e)),n}async function YT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function ij(t){return Number(t.replace("s","000"))}function sj(t){return`${zT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oj({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=qT(t),i=QT(t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={fid:n,authVersion:zT,appId:t.appId,sdkVersion:BT},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await YT(()=>fetch(r,l));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:GT(d.authToken)}}else throw await KT("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aj(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lj=/^[cdef][\w-]{21}$/,um="";function uj(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=cj(t);return lj.test(n)?n:um}catch{return um}}function cj(t){return aj(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=new Map;function JT(t,e){const n=hh(t);eI(n,e),dj(n,e)}function eI(t,e){const n=XT.get(t);if(n)for(const r of n)r(e)}function dj(t,e){const n=hj();n&&n.postMessage({key:t,fid:e}),fj()}let Oi=null;function hj(){return!Oi&&"BroadcastChannel"in self&&(Oi=new BroadcastChannel("[Firebase] FID Change"),Oi.onmessage=t=>{eI(t.data.key,t.data.fid)}),Oi}function fj(){XT.size===0&&Oi&&(Oi.close(),Oi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pj="firebase-installations-database",mj=1,Ji="firebase-installations-store";let Cf=null;function m0(){return Cf||(Cf=L2(pj,mj,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ji)}}})),Cf}async function hd(t,e){const n=hh(t),i=(await m0()).transaction(Ji,"readwrite"),s=i.objectStore(Ji),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&JT(t,e.fid),e}async function tI(t){const e=hh(t),r=(await m0()).transaction(Ji,"readwrite");await r.objectStore(Ji).delete(e),await r.done}async function fh(t,e){const n=hh(t),i=(await m0()).transaction(Ji,"readwrite"),s=i.objectStore(Ji),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&JT(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g0(t){let e;const n=await fh(t.appConfig,r=>{const i=gj(r),s=yj(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===um?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function gj(t){const e=t||{fid:uj(),registrationStatus:0};return nI(e)}function yj(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Xi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=vj(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_j(t)}:{installationEntry:e}}async function vj(t,e){try{const n=await oj(t,e);return hd(t.appConfig,n)}catch(n){throw HT(n)&&n.customData.serverCode===409?await tI(t.appConfig):await hd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function _j(t){let e=await s_(t.appConfig);for(;e.registrationStatus===1;)await ZT(100),e=await s_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await g0(t);return r||n}return e}function s_(t){return fh(t,e=>{if(!e)throw Xi.create("installation-not-found");return nI(e)})}function nI(t){return kj(t)?{fid:t.fid,registrationStatus:0}:t}function kj(t){return t.registrationStatus===1&&t.registrationTime+WT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ej({appConfig:t,heartbeatServiceProvider:e},n){const r=wj(t,n),i=rj(t,n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={installation:{sdkVersion:BT,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await YT(()=>fetch(r,l));if(u.ok){const d=await u.json();return GT(d)}else throw await KT("Generate Auth Token",u)}function wj(t,{fid:e}){return`${qT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y0(t,e=!1){let n;const r=await fh(t.appConfig,s=>{if(!rI(s))throw Xi.create("not-registered");const o=s.authToken;if(!e&&xj(o))return s;if(o.requestStatus===1)return n=Tj(t,e),s;{if(!navigator.onLine)throw Xi.create("app-offline");const l=Aj(s);return n=Ij(t,l),l}});return n?await n:r.authToken}async function Tj(t,e){let n=await o_(t.appConfig);for(;n.authToken.requestStatus===1;)await ZT(100),n=await o_(t.appConfig);const r=n.authToken;return r.requestStatus===0?y0(t,e):r}function o_(t){return fh(t,e=>{if(!rI(e))throw Xi.create("not-registered");const n=e.authToken;return Cj(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ij(t,e){try{const n=await Ej(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await hd(t.appConfig,r),n}catch(n){if(HT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await tI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await hd(t.appConfig,r)}throw n}}function rI(t){return t!==void 0&&t.registrationStatus===2}function xj(t){return t.requestStatus===2&&!Sj(t)}function Sj(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Jb}function Aj(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Cj(t){return t.requestStatus===1&&t.requestTime+WT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rj(t){const e=t,{installationEntry:n,registrationPromise:r}=await g0(e);return r?r.catch(console.error):y0(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pj(t,e=!1){const n=t;return await Lj(n),(await y0(n,e)).token}async function Lj(t){const{registrationPromise:e}=await g0(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bj(t){if(!t||!t.options)throw Rf("App Configuration");if(!t.name)throw Rf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Rf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Rf(t){return Xi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="installations",jj="installations-internal",Nj=t=>{const e=t.getProvider("app").getImmediate(),n=bj(e),r=gi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Oj=t=>{const e=t.getProvider("app").getImmediate(),n=gi(e,iI).getImmediate();return{getId:()=>Rj(n),getToken:i=>Pj(n,i)}};function Mj(){jn(new gn(iI,Nj,"PUBLIC")),jn(new gn(jj,Oj,"PRIVATE"))}Mj();Gt($T,p0);Gt($T,p0,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="analytics",Dj="firebase_id",Vj="origin",Fj=60*1e3,Uj="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",v0="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new Bd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $j={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},rn=new is("analytics","Analytics",$j);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wj(t){if(!t.startsWith(v0)){const e=rn.create("invalid-gtag-resource",{gtagURL:t});return Kt.warn(e.message),""}return t}function sI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Bj(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function zj(t,e){const n=Bj("firebase-js-sdk-policy",{createScriptURL:Wj}),r=document.createElement("script"),i=`${v0}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Hj(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function qj(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await sI(n)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(l){Kt.error(l)}t("config",i,s)}async function Gj(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await sI(n);for(const u of o){const d=l.find(g=>g.measurementId===u),p=d&&e[d.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Kt.error(s)}}function Kj(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await Gj(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await qj(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,d]=o;t("get",l,u,d)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Kt.error(l)}}return i}function Qj(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Kj(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Yj(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(v0)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zj=30,Xj=1e3;class Jj{constructor(e={},n=Xj){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const oI=new Jj;function eN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function tN(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:eN(r)},s=Uj.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw rn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function nN(t,e=oI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw rn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw rn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new sN;return setTimeout(async()=>{l.abort()},Fj),aI({appId:r,apiKey:i,measurementId:s},o,l,e)}async function aI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=oI){var s;const{appId:o,measurementId:l}=t;try{await rN(r,e)}catch(u){if(l)return Kt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await tN(t);return i.deleteThrottleMetadata(o),u}catch(u){const d=u;if(!iN(d)){if(i.deleteThrottleMetadata(o),l)return Kt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:l};throw u}const p=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?Hy(n,i.intervalMillis,Zj):Hy(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return i.setThrottleMetadata(o,g),Kt.debug(`Calling attemptFetch again in ${p} millis`),aI(t,g,r,i)}}function rN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(rn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function iN(t){if(!(t instanceof vn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class sN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function oN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN(){if(A2())try{await C2()}catch(t){return Kt.warn(rn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Kt.warn(rn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function lN(t,e,n,r,i,s,o){var l;const u=nN(t);u.then(E=>{n[E.measurementId]=E.appId,t.options.measurementId&&E.measurementId!==t.options.measurementId&&Kt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>Kt.error(E)),e.push(u);const d=aN().then(E=>{if(E)return r.getId()}),[p,g]=await Promise.all([u,d]);Yj(s)||zj(s,p.measurementId),i("js",new Date);const y=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return y[Vj]="firebase",y.update=!0,g!=null&&(y[Dj]=g),i("config",p.measurementId,y),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.app=e}_delete(){return delete Ja[this.app.options.appId],Promise.resolve()}}let Ja={},a_=[];const l_={};let Pf="dataLayer",cN="gtag",u_,lI,c_=!1;function dN(){const t=[];if(S2()&&t.push("This is a browser extension environment."),dC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=rn.create("invalid-analytics-context",{errorInfo:e});Kt.warn(n.message)}}function hN(t,e,n){dN();const r=t.options.appId;if(!r)throw rn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Kt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw rn.create("no-api-key");if(Ja[r]!=null)throw rn.create("already-exists",{id:r});if(!c_){Hj(Pf);const{wrappedGtag:s,gtagCore:o}=Qj(Ja,a_,l_,Pf,cN);lI=s,u_=o,c_=!0}return Ja[r]=lN(t,a_,l_,e,u_,Pf,n),new uN(t)}function fN(t=zd()){t=Be(t);const e=gi(t,fd);return e.isInitialized()?e.getImmediate():pN(t)}function pN(t,e={}){const n=gi(t,fd);if(n.isInitialized()){const i=n.getImmediate();if(wl(e,n.getOptions()))return i;throw rn.create("already-initialized")}return n.initialize({options:e})}function mN(t,e,n,r){t=Be(t),oN(lI,Ja[t.app.options.appId],e,n,r).catch(i=>Kt.error(i))}const d_="@firebase/analytics",h_="0.10.8";function gN(){jn(new gn(fd,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return hN(r,i,n)},"PUBLIC")),jn(new gn("analytics-internal",t,"PRIVATE")),Gt(d_,h_),Gt(d_,h_,"esm2017");function t(e){try{const n=e.getProvider(fd).getImmediate();return{logEvent:(r,i,s)=>mN(n,r,i,s)}}catch(n){throw rn.create("interop-component-reg-failed",{reason:n})}}}gN();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="firebasestorage.googleapis.com",yN="storageBucket",vN=2*60*1e3,_N=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends vn{constructor(e,n,r=0){super(Lf(e),`Firebase Storage: ${n} (${Lf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,er.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Lf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Xn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Xn||(Xn={}));function Lf(t){return"storage/"+t}function kN(){const t="An unknown error occurred, please check the error payload for server response.";return new er(Xn.UNKNOWN,t)}function EN(){return new er(Xn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wN(){return new er(Xn.CANCELED,"User canceled the upload/download.")}function TN(t){return new er(Xn.INVALID_URL,"Invalid URL '"+t+"'.")}function IN(t){return new er(Xn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function f_(t){return new er(Xn.INVALID_ARGUMENT,t)}function cI(){return new er(Xn.APP_DELETED,"The Firebase app was deleted.")}function xN(t){return new er(Xn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Cn.makeFromUrl(e,n)}catch{return new Cn(e,"")}if(r.path==="")return r;throw IN(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function d(b){b.path_=decodeURIComponent(b.path)}const p="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",E=new RegExp(`^https?://${g}/${p}/b/${i}/o${y}`,"i"),A={bucket:1,path:3},P=n===uI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,L="([^?#]*)",w=new RegExp(`^https?://${P}/${i}/${L}`,"i"),x=[{regex:l,indices:u,postModify:s},{regex:E,indices:A,postModify:d},{regex:w,indices:{bucket:1,path:2},postModify:d}];for(let b=0;b<x.length;b++){const M=x[b],V=M.regex.exec(e);if(V){const k=V[M.indices.bucket];let _=V[M.indices.path];_||(_=""),r=new Cn(k,_),M.postModify(r);break}}if(r==null)throw TN(e);return r}}class SN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let d=!1;function p(...L){d||(d=!0,e.apply(null,L))}function g(L){i=setTimeout(()=>{i=null,t(E,u())},L)}function y(){s&&clearTimeout(s)}function E(L,...w){if(d){y();return}if(L){y(),p.call(null,L,...w);return}if(u()||o){y(),p.call(null,L,...w);return}r<64&&(r*=2);let x;l===1?(l=2,x=0):x=(r+Math.random())*1e3,g(x)}let A=!1;function P(L){A||(A=!0,y(),!d&&(i!==null?(L||(l=2),clearTimeout(i),g(0)):L||(l=1)))}return g(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function CN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(t){return t!==void 0}function p_(t,e,n,r){if(r<e)throw f_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw f_(`Invalid value for '${t}'. Expected ${n} or less.`)}function PN(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var pd;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(pd||(pd={}));/**
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
 */function LN(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n,r,i,s,o,l,u,d,p,g,y=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=g,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,A)=>{this.resolve_=E,this.reject_=A,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Fu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===pd.NO_ERROR,u=s.getStatus();if(!l||LN(u,this.additionalRetryCodes_)&&this.retry){const p=s.getErrorCode()===pd.ABORT;r(!1,new Fu(!1,null,p));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new Fu(d,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());RN(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=kN();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?cI():wN();o(u)}else{const u=EN();o(u)}};this.canceled_?n(!1,new Fu(!1,null,!0)):this.backoffId_=AN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&CN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function jN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function NN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ON(t,e){e&&(t["X-Firebase-GMPID"]=e)}function MN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function DN(t,e,n,r,i,s,o=!0){const l=PN(t.urlParams),u=t.url+l,d=Object.assign({},t.headers);return ON(d,e),jN(d,n),NN(d,s),MN(d,r),new bN(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function FN(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n){this._service=e,n instanceof Cn?this._location=n:this._location=Cn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new md(e,n)}get root(){const e=new Cn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return FN(this._location.path)}get storage(){return this._service}get parent(){const e=VN(this._location.path);if(e===null)return null;const n=new Cn(this._location.bucket,e);return new md(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw xN(e)}}function m_(t,e){const n=e==null?void 0:e[yN];return n==null?null:Cn.makeFromBucketSpec(n,t)}function UN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:x2(i,t.app.options.projectId))}class $N{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=uI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=vN,this._maxUploadRetryTime=_N,this._requests=new Set,i!=null?this._bucket=Cn.makeFromBucketSpec(i,this._host):this._bucket=m_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Cn.makeFromBucketSpec(this._url,e):this._bucket=m_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){p_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){p_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new md(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new SN(cI());{const o=DN(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const g_="@firebase/storage",y_="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="storage";function WN(t=zd(),e){t=Be(t);const r=gi(t,dI).getImmediate({identifier:e}),i=w2("storage");return i&&BN(r,...i),r}function BN(t,e,n,r={}){UN(t,e,n,r)}function zN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new $N(n,r,i,e,ss)}function HN(){jn(new gn(dI,zN,"PUBLIC").setMultipleInstances(!0)),Gt(g_,y_,""),Gt(g_,y_,"esm2017")}HN();const qN={apiKey:"AIzaSyD7J2eVv6O0M4l39GToo_kVOeQZH8nQW0w",authDomain:"hyacinthattendance.firebaseapp.com",projectId:"hyacinthattendance",storageBucket:"hyacinthattendance.appspot.com",messagingSenderId:"12316915447",appId:"1:12316915447:web:2f8a7daf07918a0c2f45f2",measurementId:"G-040M8BP5NJ"},ph=b2(qN),qr=H6(ph),At=Nb(ph);WN(ph);console.log("Using production Firebase services");let GN=null;try{GN=fN(ph),console.log("Analytics initialized")}catch(t){console.error("Error initializing analytics:",t)}const _0=new lr;_0.setCustomParameters({prompt:"select_account"});_0.addScope("email");_0.addScope("profile");const hI=N.createContext(),k0=()=>N.useContext(hI),KN=({children:t})=>{const[e,n]=N.useState(null),[r,i]=N.useState(!0);N.useEffect(()=>{const o=jR(qr,l=>{n(l),i(!1)});return()=>o()},[]);const s={currentUser:e,loading:r};return f.jsx(hI.Provider,{value:s,children:t})};var Wt=function(){return Wt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Wt.apply(this,arguments)};function gd(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var be="-ms-",el="-moz-",we="-webkit-",fI="comm",mh="rule",E0="decl",QN="@import",pI="@keyframes",YN="@layer",mI=Math.abs,w0=String.fromCharCode,cm=Object.assign;function ZN(t,e){return st(t,0)^45?(((e<<2^st(t,0))<<2^st(t,1))<<2^st(t,2))<<2^st(t,3):0}function gI(t){return t.trim()}function or(t,e){return(t=e.exec(t))?t[0]:t}function se(t,e,n){return t.replace(e,n)}function yc(t,e,n){return t.indexOf(e,n)}function st(t,e){return t.charCodeAt(e)|0}function Do(t,e,n){return t.slice(e,n)}function Wn(t){return t.length}function yI(t){return t.length}function Ma(t,e){return e.push(t),t}function XN(t,e){return t.map(e).join("")}function v_(t,e){return t.filter(function(n){return!or(n,e)})}var gh=1,Vo=1,vI=0,yn=0,Ye=0,Xo="";function yh(t,e,n,r,i,s,o,l){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:gh,column:Vo,length:o,return:"",siblings:l}}function Nr(t,e){return cm(yh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Us(t){for(;t.root;)t=Nr(t.root,{children:[t]});Ma(t,t.siblings)}function JN(){return Ye}function e5(){return Ye=yn>0?st(Xo,--yn):0,Vo--,Ye===10&&(Vo=1,gh--),Ye}function Ln(){return Ye=yn<vI?st(Xo,yn++):0,Vo++,Ye===10&&(Vo=1,gh++),Ye}function Ui(){return st(Xo,yn)}function vc(){return yn}function vh(t,e){return Do(Xo,t,e)}function dm(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function t5(t){return gh=Vo=1,vI=Wn(Xo=t),yn=0,[]}function n5(t){return Xo="",t}function bf(t){return gI(vh(yn-1,hm(t===91?t+2:t===40?t+1:t)))}function r5(t){for(;(Ye=Ui())&&Ye<33;)Ln();return dm(t)>2||dm(Ye)>3?"":" "}function i5(t,e){for(;--e&&Ln()&&!(Ye<48||Ye>102||Ye>57&&Ye<65||Ye>70&&Ye<97););return vh(t,vc()+(e<6&&Ui()==32&&Ln()==32))}function hm(t){for(;Ln();)switch(Ye){case t:return yn;case 34:case 39:t!==34&&t!==39&&hm(Ye);break;case 40:t===41&&hm(t);break;case 92:Ln();break}return yn}function s5(t,e){for(;Ln()&&t+Ye!==57;)if(t+Ye===84&&Ui()===47)break;return"/*"+vh(e,yn-1)+"*"+w0(t===47?t:Ln())}function o5(t){for(;!dm(Ui());)Ln();return vh(t,yn)}function a5(t){return n5(_c("",null,null,null,[""],t=t5(t),0,[0],t))}function _c(t,e,n,r,i,s,o,l,u){for(var d=0,p=0,g=o,y=0,E=0,A=0,P=1,L=1,w=1,v=0,x="",b=i,M=s,V=r,k=x;L;)switch(A=v,v=Ln()){case 40:if(A!=108&&st(k,g-1)==58){yc(k+=se(bf(v),"&","&\f"),"&\f",mI(d?l[d-1]:0))!=-1&&(w=-1);break}case 34:case 39:case 91:k+=bf(v);break;case 9:case 10:case 13:case 32:k+=r5(A);break;case 92:k+=i5(vc()-1,7);continue;case 47:switch(Ui()){case 42:case 47:Ma(l5(s5(Ln(),vc()),e,n,u),u);break;default:k+="/"}break;case 123*P:l[d++]=Wn(k)*w;case 125*P:case 59:case 0:switch(v){case 0:case 125:L=0;case 59+p:w==-1&&(k=se(k,/\f/g,"")),E>0&&Wn(k)-g&&Ma(E>32?k_(k+";",r,n,g-1,u):k_(se(k," ","")+";",r,n,g-2,u),u);break;case 59:k+=";";default:if(Ma(V=__(k,e,n,d,p,i,l,x,b=[],M=[],g,s),s),v===123)if(p===0)_c(k,e,V,V,b,s,g,l,M);else switch(y===99&&st(k,3)===110?100:y){case 100:case 108:case 109:case 115:_c(t,V,V,r&&Ma(__(t,V,V,0,0,i,l,x,i,b=[],g,M),M),i,M,g,l,r?b:M);break;default:_c(k,V,V,V,[""],M,0,l,M)}}d=p=E=0,P=w=1,x=k="",g=o;break;case 58:g=1+Wn(k),E=A;default:if(P<1){if(v==123)--P;else if(v==125&&P++==0&&e5()==125)continue}switch(k+=w0(v),v*P){case 38:w=p>0?1:(k+="\f",-1);break;case 44:l[d++]=(Wn(k)-1)*w,w=1;break;case 64:Ui()===45&&(k+=bf(Ln())),y=Ui(),p=g=Wn(x=k+=o5(vc())),v++;break;case 45:A===45&&Wn(k)==2&&(P=0)}}return s}function __(t,e,n,r,i,s,o,l,u,d,p,g){for(var y=i-1,E=i===0?s:[""],A=yI(E),P=0,L=0,w=0;P<r;++P)for(var v=0,x=Do(t,y+1,y=mI(L=o[P])),b=t;v<A;++v)(b=gI(L>0?E[v]+" "+x:se(x,/&\f/g,E[v])))&&(u[w++]=b);return yh(t,e,n,i===0?mh:l,u,d,p,g)}function l5(t,e,n,r){return yh(t,e,n,fI,w0(JN()),Do(t,2,-2),0,r)}function k_(t,e,n,r,i){return yh(t,e,n,E0,Do(t,0,r),Do(t,r+1,-1),r,i)}function _I(t,e,n){switch(ZN(t,e)){case 5103:return we+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+t+t;case 4789:return el+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return we+t+el+t+be+t+t;case 5936:switch(st(t,e+11)){case 114:return we+t+be+se(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return we+t+be+se(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return we+t+be+se(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return we+t+be+t+t;case 6165:return we+t+be+"flex-"+t+t;case 5187:return we+t+se(t,/(\w+).+(:[^]+)/,we+"box-$1$2"+be+"flex-$1$2")+t;case 5443:return we+t+be+"flex-item-"+se(t,/flex-|-self/g,"")+(or(t,/flex-|baseline/)?"":be+"grid-row-"+se(t,/flex-|-self/g,""))+t;case 4675:return we+t+be+"flex-line-pack"+se(t,/align-content|flex-|-self/g,"")+t;case 5548:return we+t+be+se(t,"shrink","negative")+t;case 5292:return we+t+be+se(t,"basis","preferred-size")+t;case 6060:return we+"box-"+se(t,"-grow","")+we+t+be+se(t,"grow","positive")+t;case 4554:return we+se(t,/([^-])(transform)/g,"$1"+we+"$2")+t;case 6187:return se(se(se(t,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),t,"")+t;case 5495:case 3959:return se(t,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return se(se(t,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+t+t;case 4200:if(!or(t,/flex-|baseline/))return be+"grid-column-align"+Do(t,e)+t;break;case 2592:case 3360:return be+se(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,or(r.props,/grid-\w+-end/)})?~yc(t+(n=n[e].value),"span",0)?t:be+se(t,"-start","")+t+be+"grid-row-span:"+(~yc(n,"span",0)?or(n,/\d+/):+or(n,/\d+/)-+or(t,/\d+/))+";":be+se(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return or(r.props,/grid-\w+-start/)})?t:be+se(se(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return se(t,/(.+)-inline(.+)/,we+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Wn(t)-1-e>6)switch(st(t,e+1)){case 109:if(st(t,e+4)!==45)break;case 102:return se(t,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+el+(st(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~yc(t,"stretch",0)?_I(se(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return se(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,u,d){return be+i+":"+s+d+(o?be+i+"-span:"+(l?u:+u-+s)+d:"")+t});case 4949:if(st(t,e+6)===121)return se(t,":",":"+we)+t;break;case 6444:switch(st(t,st(t,14)===45?18:11)){case 120:return se(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(st(t,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+be+"$2box$3")+t;case 100:return se(t,":",":"+be)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return se(t,"scroll-","scroll-snap-")+t}return t}function yd(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function u5(t,e,n,r){switch(t.type){case YN:if(t.children.length)break;case QN:case E0:return t.return=t.return||t.value;case fI:return"";case pI:return t.return=t.value+"{"+yd(t.children,r)+"}";case mh:if(!Wn(t.value=t.props.join(",")))return""}return Wn(n=yd(t.children,r))?t.return=t.value+"{"+n+"}":""}function c5(t){var e=yI(t);return function(n,r,i,s){for(var o="",l=0;l<e;l++)o+=t[l](n,r,i,s)||"";return o}}function d5(t){return function(e){e.root||(e=e.return)&&t(e)}}function h5(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case E0:t.return=_I(t.value,t.length,n);return;case pI:return yd([Nr(t,{value:se(t.value,"@","@"+we)})],r);case mh:if(t.length)return XN(n=t.props,function(i){switch(or(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Us(Nr(t,{props:[se(i,/:(read-\w+)/,":"+el+"$1")]})),Us(Nr(t,{props:[i]})),cm(t,{props:v_(n,r)});break;case"::placeholder":Us(Nr(t,{props:[se(i,/:(plac\w+)/,":"+we+"input-$1")]})),Us(Nr(t,{props:[se(i,/:(plac\w+)/,":"+el+"$1")]})),Us(Nr(t,{props:[se(i,/:(plac\w+)/,be+"input-$1")]})),Us(Nr(t,{props:[i]})),cm(t,{props:v_(n,r)});break}return""})}}var f5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xt={},Fo=typeof process<"u"&&Xt!==void 0&&(Xt.REACT_APP_SC_ATTR||Xt.SC_ATTR)||"data-styled",kI="active",EI="data-styled-version",_h="6.1.17",T0=`/*!sc*/
`,vd=typeof window<"u"&&"HTMLElement"in window,p5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Xt!==void 0&&Xt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Xt.REACT_APP_SC_DISABLE_SPEEDY!==""?Xt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Xt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Xt!==void 0&&Xt.SC_DISABLE_SPEEDY!==void 0&&Xt.SC_DISABLE_SPEEDY!==""&&Xt.SC_DISABLE_SPEEDY!=="false"&&Xt.SC_DISABLE_SPEEDY),kh=Object.freeze([]),Uo=Object.freeze({});function m5(t,e,n){return n===void 0&&(n=Uo),t.theme!==n.theme&&t.theme||e||n.theme}var wI=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),g5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,y5=/(^-|-$)/g;function E_(t){return t.replace(g5,"-").replace(y5,"")}var v5=/(a)(d)/gi,Uu=52,w_=function(t){return String.fromCharCode(t+(t>25?39:97))};function fm(t){var e,n="";for(e=Math.abs(t);e>Uu;e=e/Uu|0)n=w_(e%Uu)+n;return(w_(e%Uu)+n).replace(v5,"$1-$2")}var jf,TI=5381,uo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},II=function(t){return uo(TI,t)};function _5(t){return fm(II(t)>>>0)}function k5(t){return t.displayName||t.name||"Component"}function Nf(t){return typeof t=="string"&&!0}var xI=typeof Symbol=="function"&&Symbol.for,SI=xI?Symbol.for("react.memo"):60115,E5=xI?Symbol.for("react.forward_ref"):60112,w5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},T5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},AI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},I5=((jf={})[E5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jf[SI]=AI,jf);function T_(t){return("type"in(e=t)&&e.type.$$typeof)===SI?AI:"$$typeof"in t?I5[t.$$typeof]:w5;var e}var x5=Object.defineProperty,S5=Object.getOwnPropertyNames,I_=Object.getOwnPropertySymbols,A5=Object.getOwnPropertyDescriptor,C5=Object.getPrototypeOf,x_=Object.prototype;function CI(t,e,n){if(typeof e!="string"){if(x_){var r=C5(e);r&&r!==x_&&CI(t,r,n)}var i=S5(e);I_&&(i=i.concat(I_(e)));for(var s=T_(t),o=T_(e),l=0;l<i.length;++l){var u=i[l];if(!(u in T5||n&&n[u]||o&&u in o||s&&u in s)){var d=A5(e,u);try{x5(t,u,d)}catch{}}}}return t}function $o(t){return typeof t=="function"}function I0(t){return typeof t=="object"&&"styledComponentId"in t}function Mi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function S_(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function jl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function pm(t,e,n){if(n===void 0&&(n=!1),!n&&!jl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=pm(t[r],e[r]);else if(jl(e))for(var r in e)t[r]=pm(t[r],e[r]);return t}function x0(t,e){Object.defineProperty(t,"toString",{value:e})}function Jl(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var R5=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Jl(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(T0);return n},t}(),kc=new Map,_d=new Map,Ec=1,$u=function(t){if(kc.has(t))return kc.get(t);for(;_d.has(Ec);)Ec++;var e=Ec++;return kc.set(t,e),_d.set(e,t),e},P5=function(t,e){Ec=e+1,kc.set(t,e),_d.set(e,t)},L5="style[".concat(Fo,"][").concat(EI,'="').concat(_h,'"]'),b5=new RegExp("^".concat(Fo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),j5=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},N5=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(T0),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var u=l.match(b5);if(u){var d=0|parseInt(u[1],10),p=u[2];d!==0&&(P5(p,d),j5(t,p,u[3]),t.getTag().insertRules(d,i)),i.length=0}else i.push(l)}}},A_=function(t){for(var e=document.querySelectorAll(L5),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Fo)!==kI&&(N5(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function O5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var RI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(Fo,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Fo,kI),r.setAttribute(EI,_h);var o=O5();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},M5=function(){function t(e){this.element=RI(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Jl(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),D5=function(){function t(e){this.element=RI(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),V5=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),C_=vd,F5={isServer:!vd,useCSSOMInjection:!p5},PI=function(){function t(e,n,r){e===void 0&&(e=Uo),n===void 0&&(n={});var i=this;this.options=Wt(Wt({},F5),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&vd&&C_&&(C_=!1,A_(this)),x0(this,function(){return function(s){for(var o=s.getTag(),l=o.length,u="",d=function(g){var y=function(w){return _d.get(w)}(g);if(y===void 0)return"continue";var E=s.names.get(y),A=o.getGroup(g);if(E===void 0||!E.size||A.length===0)return"continue";var P="".concat(Fo,".g").concat(g,'[id="').concat(y,'"]'),L="";E!==void 0&&E.forEach(function(w){w.length>0&&(L+="".concat(w,","))}),u+="".concat(A).concat(P,'{content:"').concat(L,'"}').concat(T0)},p=0;p<l;p++)d(p);return u}(i)})}return t.registerId=function(e){return $u(e)},t.prototype.rehydrate=function(){!this.server&&vd&&A_(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Wt(Wt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new V5(i):r?new M5(i):new D5(i)}(this.options),new R5(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if($u(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules($u(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup($u(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),U5=/&/g,$5=/^\s*\/\/.*$/gm;function LI(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=LI(n.children,e)),n})}function W5(t){var e,n,r,i=Uo,s=i.options,o=s===void 0?Uo:s,l=i.plugins,u=l===void 0?kh:l,d=function(y,E,A){return A.startsWith(n)&&A.endsWith(n)&&A.replaceAll(n,"").length>0?".".concat(e):y},p=u.slice();p.push(function(y){y.type===mh&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(U5,n).replace(r,d))}),o.prefix&&p.push(h5),p.push(u5);var g=function(y,E,A,P){E===void 0&&(E=""),A===void 0&&(A=""),P===void 0&&(P="&"),e=P,n=E,r=new RegExp("\\".concat(n,"\\b"),"g");var L=y.replace($5,""),w=a5(A||E?"".concat(A," ").concat(E," { ").concat(L," }"):L);o.namespace&&(w=LI(w,o.namespace));var v=[];return yd(w,c5(p.concat(d5(function(x){return v.push(x)})))),v};return g.hash=u.length?u.reduce(function(y,E){return E.name||Jl(15),uo(y,E.name)},TI).toString():"",g}var B5=new PI,mm=W5(),bI=c.createContext({shouldForwardProp:void 0,styleSheet:B5,stylis:mm});bI.Consumer;c.createContext(void 0);function R_(){return N.useContext(bI)}var z5=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=mm);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,x0(this,function(){throw Jl(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=mm),this.name+e.hash},t}(),H5=function(t){return t>="A"&&t<="Z"};function P_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;H5(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var jI=function(t){return t==null||t===!1||t===""},NI=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!jI(s)&&(Array.isArray(s)&&s.isCss||$o(s)?r.push("".concat(P_(i),":"),s,";"):jl(s)?r.push.apply(r,gd(gd(["".concat(i," {")],NI(s),!1),["}"],!1)):r.push("".concat(P_(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in f5||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function $i(t,e,n,r){if(jI(t))return[];if(I0(t))return[".".concat(t.styledComponentId)];if($o(t)){if(!$o(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return $i(i,e,n,r)}var s;return t instanceof z5?n?(t.inject(n,r),[t.getName(r)]):[t]:jl(t)?NI(t):Array.isArray(t)?Array.prototype.concat.apply(kh,t.map(function(o){return $i(o,e,n,r)})):[t.toString()]}function q5(t){for(var e=0;e<t.length;e+=1){var n=t[e];if($o(n)&&!I0(n))return!1}return!0}var G5=II(_h),K5=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&q5(e),this.componentId=n,this.baseHash=uo(G5,n),this.baseStyle=r,PI.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Mi(i,this.staticRulesId);else{var s=S_($i(this.rules,e,n,r)),o=fm(uo(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=Mi(i,o),this.staticRulesId=o}else{for(var u=uo(this.baseHash,r.hash),d="",p=0;p<this.rules.length;p++){var g=this.rules[p];if(typeof g=="string")d+=g;else if(g){var y=S_($i(g,e,n,r));u=uo(u,y+p),d+=y}}if(d){var E=fm(u>>>0);n.hasNameForId(this.componentId,E)||n.insertRules(this.componentId,E,r(d,".".concat(E),void 0,this.componentId)),i=Mi(i,E)}}return i},t}(),OI=c.createContext(void 0);OI.Consumer;var Of={};function Q5(t,e,n){var r=I0(t),i=t,s=!Nf(t),o=e.attrs,l=o===void 0?kh:o,u=e.componentId,d=u===void 0?function(b,M){var V=typeof b!="string"?"sc":E_(b);Of[V]=(Of[V]||0)+1;var k="".concat(V,"-").concat(_5(_h+V+Of[V]));return M?"".concat(M,"-").concat(k):k}(e.displayName,e.parentComponentId):u,p=e.displayName,g=p===void 0?function(b){return Nf(b)?"styled.".concat(b):"Styled(".concat(k5(b),")")}(t):p,y=e.displayName&&e.componentId?"".concat(E_(e.displayName),"-").concat(e.componentId):e.componentId||d,E=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,A=e.shouldForwardProp;if(r&&i.shouldForwardProp){var P=i.shouldForwardProp;if(e.shouldForwardProp){var L=e.shouldForwardProp;A=function(b,M){return P(b,M)&&L(b,M)}}else A=P}var w=new K5(n,y,r?i.componentStyle:void 0);function v(b,M){return function(V,k,_){var I=V.attrs,C=V.componentStyle,j=V.defaultProps,R=V.foldedComponentIds,S=V.styledComponentId,ae=V.target,ee=c.useContext(OI),q=R_(),le=V.shouldForwardProp||q.shouldForwardProp,z=m5(k,ee,j)||Uo,Q=function(tt,nt,yt){for(var tr,_n=Wt(Wt({},nt),{className:void 0,theme:yt}),Dn=0;Dn<tt.length;Dn+=1){var kn=$o(tr=tt[Dn])?tr(_n):tr;for(var Vt in kn)_n[Vt]=Vt==="className"?Mi(_n[Vt],kn[Vt]):Vt==="style"?Wt(Wt({},_n[Vt]),kn[Vt]):kn[Vt]}return nt.className&&(_n.className=Mi(_n.className,nt.className)),_n}(I,k,z),J=Q.as||ae,he={};for(var oe in Q)Q[oe]===void 0||oe[0]==="$"||oe==="as"||oe==="theme"&&Q.theme===z||(oe==="forwardedAs"?he.as=Q.forwardedAs:le&&!le(oe,J)||(he[oe]=Q[oe]));var ke=function(tt,nt){var yt=R_(),tr=tt.generateAndInjectStyles(nt,yt.styleSheet,yt.stylis);return tr}(C,Q),at=Mi(R,S);return ke&&(at+=" "+ke),Q.className&&(at+=" "+Q.className),he[Nf(J)&&!wI.has(J)?"class":"className"]=at,_&&(he.ref=_),N.createElement(J,he)}(x,b,M)}v.displayName=g;var x=c.forwardRef(v);return x.attrs=E,x.componentStyle=w,x.displayName=g,x.shouldForwardProp=A,x.foldedComponentIds=r?Mi(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=y,x.target=r?i.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(M){for(var V=[],k=1;k<arguments.length;k++)V[k-1]=arguments[k];for(var _=0,I=V;_<I.length;_++)pm(M,I[_],!0);return M}({},i.defaultProps,b):b}}),x0(x,function(){return".".concat(x.styledComponentId)}),s&&CI(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function L_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var b_=function(t){return Object.assign(t,{isCss:!0})};function Y5(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if($o(t)||jl(t))return b_($i(L_(kh,gd([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?$i(r):b_($i(L_(r,e)))}function gm(t,e,n){if(n===void 0&&(n=Uo),!e)throw Jl(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Y5.apply(void 0,gd([i],s,!1)))};return r.attrs=function(i){return gm(t,e,Wt(Wt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return gm(t,e,Wt(Wt({},n),i))},r}var MI=function(t){return gm(Q5,t)},U=MI;wI.forEach(function(t){U[t]=MI(t)});function DI(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=DI(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Gr(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=DI(t))&&(r&&(r+=" "),r+=e);return r}const tl=t=>typeof t=="number"&&!isNaN(t),es=t=>typeof t=="string",Bt=t=>typeof t=="function",wc=t=>es(t)||Bt(t)?t:null,Mf=t=>N.isValidElement(t)||es(t)||Bt(t)||tl(t);function Z5(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Eh(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:l,position:u,preventExitTransition:d,done:p,nodeRef:g,isIn:y}=o;const E=r?`${e}--${u}`:e,A=r?`${n}--${u}`:n,P=N.useRef(0);return N.useLayoutEffect(()=>{const L=g.current,w=E.split(" "),v=x=>{x.target===g.current&&(L.dispatchEvent(new Event("d")),L.removeEventListener("animationend",v),L.removeEventListener("animationcancel",v),P.current===0&&x.type!=="animationcancel"&&L.classList.remove(...w))};L.classList.add(...w),L.addEventListener("animationend",v),L.addEventListener("animationcancel",v)},[]),N.useEffect(()=>{const L=g.current,w=()=>{L.removeEventListener("animationend",w),i?Z5(L,p,s):p()};y||(d?w():(P.current=1,L.className+=` ${A}`,L.addEventListener("animationend",w)))},[y]),c.createElement(c.Fragment,null,l)}}function j_(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const ln={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},Wu=t=>{let{theme:e,type:n,...r}=t;return c.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Df={info:function(t){return c.createElement(Wu,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(Wu,{...t},c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(Wu,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(Wu,{...t},c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function X5(t){const[,e]=N.useReducer(E=>E+1,0),[n,r]=N.useState([]),i=N.useRef(null),s=N.useRef(new Map).current,o=E=>n.indexOf(E)!==-1,l=N.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:E=>s.get(E)}).current;function u(E){let{containerId:A}=E;const{limit:P}=l.props;!P||A&&l.containerId!==A||(l.count-=l.queue.length,l.queue=[])}function d(E){r(A=>E==null?[]:A.filter(P=>P!==E))}function p(){const{toastContent:E,toastProps:A,staleId:P}=l.queue.shift();y(E,A,P)}function g(E,A){let{delay:P,staleId:L,...w}=A;if(!Mf(E)||function(R){return!i.current||l.props.enableMultiContainer&&R.containerId!==l.props.containerId||s.has(R.toastId)&&R.updateId==null}(w))return;const{toastId:v,updateId:x,data:b}=w,{props:M}=l,V=()=>d(v),k=x==null;k&&l.count++;const _={...M,style:M.toastStyle,key:l.toastKey++,...Object.fromEntries(Object.entries(w).filter(R=>{let[S,ae]=R;return ae!=null})),toastId:v,updateId:x,data:b,closeToast:V,isIn:!1,className:wc(w.className||M.toastClassName),bodyClassName:wc(w.bodyClassName||M.bodyClassName),progressClassName:wc(w.progressClassName||M.progressClassName),autoClose:!w.isLoading&&(I=w.autoClose,C=M.autoClose,I===!1||tl(I)&&I>0?I:C),deleteToast(){const R=j_(s.get(v),"removed");s.delete(v),ln.emit(4,R);const S=l.queue.length;if(l.count=v==null?l.count-l.displayedToast:l.count-1,l.count<0&&(l.count=0),S>0){const ae=v==null?l.props.limit:1;if(S===1||ae===1)l.displayedToast++,p();else{const ee=ae>S?S:ae;l.displayedToast=ee;for(let q=0;q<ee;q++)p()}}else e()}};var I,C;_.iconOut=function(R){let{theme:S,type:ae,isLoading:ee,icon:q}=R,le=null;const z={theme:S,type:ae};return q===!1||(Bt(q)?le=q(z):N.isValidElement(q)?le=N.cloneElement(q,z):es(q)||tl(q)?le=q:ee?le=Df.spinner():(Q=>Q in Df)(ae)&&(le=Df[ae](z))),le}(_),Bt(w.onOpen)&&(_.onOpen=w.onOpen),Bt(w.onClose)&&(_.onClose=w.onClose),_.closeButton=M.closeButton,w.closeButton===!1||Mf(w.closeButton)?_.closeButton=w.closeButton:w.closeButton===!0&&(_.closeButton=!Mf(M.closeButton)||M.closeButton);let j=E;N.isValidElement(E)&&!es(E.type)?j=N.cloneElement(E,{closeToast:V,toastProps:_,data:b}):Bt(E)&&(j=E({closeToast:V,toastProps:_,data:b})),M.limit&&M.limit>0&&l.count>M.limit&&k?l.queue.push({toastContent:j,toastProps:_,staleId:L}):tl(P)?setTimeout(()=>{y(j,_,L)},P):y(j,_,L)}function y(E,A,P){const{toastId:L}=A;P&&s.delete(P);const w={content:E,props:A};s.set(L,w),r(v=>[...v,L].filter(x=>x!==P)),ln.emit(4,j_(w,w.props.updateId==null?"added":"updated"))}return N.useEffect(()=>(l.containerId=t.containerId,ln.cancelEmit(3).on(0,g).on(1,E=>i.current&&d(E)).on(5,u).emit(2,l),()=>{s.clear(),ln.emit(3,l)}),[]),N.useEffect(()=>{l.props=t,l.isToastActive=o,l.displayedToast=n.length}),{getToastToRender:function(E){const A=new Map,P=Array.from(s.values());return t.newestOnTop&&P.reverse(),P.forEach(L=>{const{position:w}=L.props;A.has(w)||A.set(w,[]),A.get(w).push(L)}),Array.from(A,L=>E(L[0],L[1]))},containerRef:i,isToastActive:o}}function N_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function O_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function J5(t){const[e,n]=N.useState(!1),[r,i]=N.useState(!1),s=N.useRef(null),o=N.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=N.useRef(t),{autoClose:u,pauseOnHover:d,closeToast:p,onClick:g,closeOnClick:y}=t;function E(b){if(t.draggable){b.nativeEvent.type==="touchstart"&&b.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",w),document.addEventListener("mouseup",v),document.addEventListener("touchmove",w),document.addEventListener("touchend",v);const M=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=M.getBoundingClientRect(),M.style.transition="",o.x=N_(b.nativeEvent),o.y=O_(b.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=M.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=M.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function A(b){if(o.boundingRect){const{top:M,bottom:V,left:k,right:_}=o.boundingRect;b.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=k&&o.x<=_&&o.y>=M&&o.y<=V?L():P()}}function P(){n(!0)}function L(){n(!1)}function w(b){const M=s.current;o.canDrag&&M&&(o.didMove=!0,e&&L(),o.x=N_(b),o.y=O_(b),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),M.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,M.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function v(){document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",v),document.removeEventListener("touchmove",w),document.removeEventListener("touchend",v);const b=s.current;if(o.canDrag&&o.didMove&&b){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void t.closeToast();b.style.transition="transform 0.2s, opacity 0.2s",b.style.transform=`translate${t.draggableDirection}(0)`,b.style.opacity="1"}}N.useEffect(()=>{l.current=t}),N.useEffect(()=>(s.current&&s.current.addEventListener("d",P,{once:!0}),Bt(t.onOpen)&&t.onOpen(N.isValidElement(t.children)&&t.children.props),()=>{const b=l.current;Bt(b.onClose)&&b.onClose(N.isValidElement(b.children)&&b.children.props)}),[]),N.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||L(),window.addEventListener("focus",P),window.addEventListener("blur",L)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",P),window.removeEventListener("blur",L))}),[t.pauseOnFocusLoss]);const x={onMouseDown:E,onTouchStart:E,onMouseUp:A,onTouchEnd:A};return u&&d&&(x.onMouseEnter=L,x.onMouseLeave=P),y&&(x.onClick=b=>{g&&g(b),o.canCloseOnClick&&p()}),{playToast:P,pauseToast:L,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:x}}function VI(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return c.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function e3(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:l,controlledProgress:u,progress:d,rtl:p,isIn:g,theme:y}=t;const E=s||u&&d===0,A={...l,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:E?0:1};u&&(A.transform=`scaleX(${d})`);const P=Gr("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${y}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":p}),L=Bt(o)?o({rtl:p,type:i,defaultClassName:P}):Gr(P,o);return c.createElement("div",{role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:L,style:A,[u&&d>=1?"onTransitionEnd":"onAnimationEnd"]:u&&d<1?null:()=>{g&&r()}})}const t3=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=J5(t),{closeButton:s,children:o,autoClose:l,onClick:u,type:d,hideProgressBar:p,closeToast:g,transition:y,position:E,className:A,style:P,bodyClassName:L,bodyStyle:w,progressClassName:v,progressStyle:x,updateId:b,role:M,progress:V,rtl:k,toastId:_,deleteToast:I,isIn:C,isLoading:j,iconOut:R,closeOnClick:S,theme:ae}=t,ee=Gr("Toastify__toast",`Toastify__toast-theme--${ae}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":S}),q=Bt(A)?A({rtl:k,position:E,type:d,defaultClassName:ee}):Gr(ee,A),le=!!V||!l,z={closeToast:g,type:d,theme:ae};let Q=null;return s===!1||(Q=Bt(s)?s(z):N.isValidElement(s)?N.cloneElement(s,z):VI(z)),c.createElement(y,{isIn:C,done:I,position:E,preventExitTransition:n,nodeRef:r},c.createElement("div",{id:_,onClick:u,className:q,...i,style:P,ref:r},c.createElement("div",{...C&&{role:M},className:Bt(L)?L({type:d}):Gr("Toastify__toast-body",L),style:w},R!=null&&c.createElement("div",{className:Gr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!j})},R),c.createElement("div",null,o)),Q,c.createElement(e3,{...b&&!le?{key:`pb-${b}`}:{},rtl:k,theme:ae,delay:l,isRunning:e,isIn:C,closeToast:g,hide:p,type:d,style:x,className:v,controlledProgress:le,progress:V||0})))},wh=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},n3=Eh(wh("bounce",!0));Eh(wh("slide",!0));Eh(wh("zoom"));Eh(wh("flip"));const ym=N.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=X5(t),{className:s,style:o,rtl:l,containerId:u}=t;function d(p){const g=Gr("Toastify__toast-container",`Toastify__toast-container--${p}`,{"Toastify__toast-container--rtl":l});return Bt(s)?s({position:p,rtl:l,defaultClassName:g}):Gr(g,wc(s))}return N.useEffect(()=>{e&&(e.current=r.current)},[]),c.createElement("div",{ref:r,className:"Toastify",id:u},n((p,g)=>{const y=g.length?{...o}:{...o,pointerEvents:"none"};return c.createElement("div",{className:d(p),style:y,key:`container-${p}`},g.map((E,A)=>{let{content:P,props:L}=E;return c.createElement(t3,{...L,isIn:i(L.toastId),style:{...L.style,"--nth":A+1,"--len":g.length},key:`toast-${L.key}`},P)}))}))});ym.displayName="ToastContainer",ym.defaultProps={position:"top-right",transition:n3,autoClose:5e3,closeButton:VI,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Vf,Pi=new Map,Da=[],r3=1;function FI(){return""+r3++}function i3(t){return t&&(es(t.toastId)||tl(t.toastId))?t.toastId:FI()}function nl(t,e){return Pi.size>0?ln.emit(0,t,e):Da.push({content:t,options:e}),e.toastId}function kd(t,e){return{...e,type:e&&e.type||t,toastId:i3(e)}}function Bu(t){return(e,n)=>nl(e,kd(t,n))}function Y(t,e){return nl(t,kd("default",e))}Y.loading=(t,e)=>nl(t,kd("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),Y.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=es(i)?Y.loading(i,n):Y.loading(i.render,{...n,...i}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(p,g,y)=>{if(g==null)return void Y.dismiss(r);const E={type:p,...l,...n,data:y},A=es(g)?{render:g}:g;return r?Y.update(r,{...E,...A}):Y(A.render,{...E,...A}),y},d=Bt(t)?t():t;return d.then(p=>u("success",o,p)).catch(p=>u("error",s,p)),d},Y.success=Bu("success"),Y.info=Bu("info"),Y.error=Bu("error"),Y.warning=Bu("warning"),Y.warn=Y.warning,Y.dark=(t,e)=>nl(t,kd("default",{theme:"dark",...e})),Y.dismiss=t=>{Pi.size>0?ln.emit(1,t):Da=Da.filter(e=>t!=null&&e.options.toastId!==t)},Y.clearWaitingQueue=function(t){return t===void 0&&(t={}),ln.emit(5,t)},Y.isActive=t=>{let e=!1;return Pi.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},Y.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:s}=i;const o=Pi.get(s||Vf);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:FI()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,nl(o,s)}},0)},Y.done=t=>{Y.update(t,{progress:1})},Y.onChange=t=>(ln.on(4,t),()=>{ln.off(4,t)}),Y.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Y.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},ln.on(2,t=>{Vf=t.containerId||t,Pi.set(Vf,t),Da.forEach(e=>{ln.emit(0,e.content,e.options)}),Da=[]}).on(3,t=>{Pi.delete(t.containerId||t),Pi.size===0&&ln.off(0).off(1).off(5)});var s3=N.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Oe=function(e,n,r){var i=r.get(e);return i?i(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function M_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Ae=N.forwardRef(function(t,e){var n=t.alt,r=t.color,i=t.size,s=t.weight,o=t.mirrored,l=t.children,u=t.renderPath,d=M_(t,["alt","color","size","weight","mirrored","children","renderPath"]),p=N.useContext(s3),g=p.color,y=g===void 0?"currentColor":g,E=p.size,A=p.weight,P=A===void 0?"regular":A,L=p.mirrored,w=L===void 0?!1:L,v=M_(p,["color","size","weight","mirrored"]);return c.createElement("svg",Object.assign({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i??E,height:i??E,fill:r??y,viewBox:"0 0 256 256",transform:o||w?"scale(-1, 1)":void 0},v,d),!!n&&c.createElement("title",null,n),l,c.createElement("rect",{width:"256",height:"256",fill:"none"}),u(s??P,r??y))});Ae.displayName="IconBase";var us=new Map;us.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});us.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});us.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))});us.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});us.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});us.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var o3=function(e,n){return Oe(e,n,us)},Ed=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:o3}))});Ed.displayName="ArrowLeft";var cs=new Map;cs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});cs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});cs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"}))});cs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});cs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});cs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var a3=function(e,n){return Oe(e,n,cs)},vm=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:a3}))});vm.displayName="ArrowRight";var ds=new Map;ds.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"176",y1:"20",x2:"176",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"20",x2:"80",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M88,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"148 140 164 128 164 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ds.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ds.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,188a24.2,24.2,0,0,1-17-7,8,8,0,0,1,0-11.3,7.9,7.9,0,0,1,11.3,0A8.3,8.3,0,0,0,104,172a8,8,0,0,0,0-16h-2.5l-.4-.2h-.3l-.5-.2h-.1l-.6-.4h-.2l-.4-.3h0l-.4-.3-.2-.2-.3-.3a8.6,8.6,0,0,1-1.3-2,5.8,5.8,0,0,1-.6-1.7h0c-.1-.1-.1-.2-.1-.4a.4.4,0,0,0-.1-.3V148h0v-.7c0-.2.1-.3.1-.4v-.4a.6.6,0,0,0,.1-.4c.1-.1.1-.2.1-.4l.2-.3c0-.2,0-.3.1-.4l.2-.4v-.3l.2-.4.2-.3.3-.4.2-.2,5.6-7H92a8,8,0,0,1,0-16h28a8,8,0,0,1,6.2,13l-8.8,11.1A24,24,0,0,1,104,188Zm64-8a8,8,0,0,1-16,0V144l-3.2,2.4a8.1,8.1,0,0,1-11.2-1.6,8,8,0,0,1,1.6-11.2l16-12A8,8,0,0,1,168,128ZM208,80H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))});ds.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ds.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ds.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var l3=function(e,n){return Oe(e,n,ds)},Nl=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:l3}))});Nl.displayName="Calendar";var hs=new Map;hs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});hs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});hs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});hs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});hs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});hs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var u3=function(e,n){return Oe(e,n,hs)},UI=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:u3}))});UI.displayName="Check";var fs=new Map;fs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});fs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});fs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"}))});fs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});fs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});fs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var c3=function(e,n){return Oe(e,n,fs)},Qs=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:c3}))});Qs.displayName="CheckCircle";var ps=new Map;ps.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ps.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ps.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))});ps.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ps.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ps.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var d3=function(e,n){return Oe(e,n,ps)},S0=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:d3}))});S0.displayName="Clock";var ms=new Map;ms.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ms.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ms.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm91.2-27.7a8,8,0,0,0-8.7,1.8L204.2,68.4l-8.3-8.3a96,96,0,1,0,0,135.8,8,8,0,0,0,0-11.3,7.9,7.9,0,0,0-11.3,0,80,80,0,1,1,0-113.2l8.3,8.3L178.5,94.1a8,8,0,0,0,5.7,13.6h40a8,8,0,0,0,8-8v-40A8.2,8.2,0,0,0,227.2,52.3Z"}))});ms.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ms.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ms.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var h3=function(e,n){return Oe(e,n,ms)},$I=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:h3}))});$I.displayName="ClockClockwise";var gs=new Map;gs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});gs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});gs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"}))});gs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});gs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});gs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var f3=function(e,n){return Oe(e,n,gs)},A0=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:f3}))});A0.displayName="Envelope";var ys=new Map;ys.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ys.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ys.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,92a36,36,0,1,1-36,36A36,36,0,0,1,128,92Z"}))});ys.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ys.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ys.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var p3=function(e,n){return Oe(e,n,ys)},wd=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:p3}))});wd.displayName="Eye";var vs=new Map;vs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.4,163.6C232.1,145.7,240,128,240,128S208,56,128,56c-3.8,0-7.4.2-11,.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});vs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});vs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48a132.4,132.4,0,0,0-22,1.8,8.1,8.1,0,0,0-4.6,13.3L202.7,174.5a8,8,0,0,0,5.9,2.6,8.6,8.6,0,0,0,5.4-2c22.8-20.5,32.9-42.9,33.3-43.8A8.2,8.2,0,0,0,247.3,124.8Z"}),c.createElement("path",{d:"M53.9,34.6A8,8,0,0,0,42.1,45.4L61.3,66.5C25,88.8,9.4,123.2,8.7,124.8a8.2,8.2,0,0,0,0,6.5c.3.7,8.8,19.5,27.6,38.4C61.4,194.7,93.1,208,128,208a126.9,126.9,0,0,0,52.1-10.8l22,24.2A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3ZM128,164a36,36,0,0,1-29.5-56.6l47.2,51.9A35.4,35.4,0,0,1,128,164Z"}))});vs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});vs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});vs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var m3=function(e,n){return Oe(e,n,vs)},Td=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:m3}))});Td.displayName="EyeSlash";var _s=new Map;_s.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"80",x2:"96",y2:"80",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});_s.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64h32a8,8,0,0,0,8-8V91.3a7.9,7.9,0,0,0-2.3-5.6L170.3,42.3a7.9,7.9,0,0,0-5.6-2.3H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8Z",opacity:"0.2"}),c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});_s.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M219.3,80,176,36.7A15.9,15.9,0,0,0,164.7,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V91.3A15.9,15.9,0,0,0,219.3,80ZM208,91.3V208H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H164.7L208,91.3ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z"}))});_s.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});_s.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});_s.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var g3=function(e,n){return Oe(e,n,_s)},_m=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:g3}))});_m.displayName="FloppyDisk";var ks=new Map;ks.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ks.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M130.2,224a96.3,96.3,0,0,0,84-53.6h0L159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224Z",opacity:"0.2"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1l5.4,1.1,8.3-19.7a8.1,8.1,0,0,1,7.4-4.9h21.4a8.6,8.6,0,0,0,3.8-1l12.3-6.8a7.2,7.2,0,0,0,1.5-1.1l26.9-24.3a8.1,8.1,0,0,0,1.6-9.8l-9.3-16.8h0A98.5,98.5,0,0,0,128,32,95.4,95.4,0,0,0,65,55.6Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ks.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.6,173.3A102.9,102.9,0,0,0,232,128,104.2,104.2,0,0,0,154.8,27.5h-.5A103.8,103.8,0,0,0,60.4,49l-1.3,1.2A103.9,103.9,0,0,0,128,232h2.4A104.3,104.3,0,0,0,221,174.6h0ZM216,128a89.3,89.3,0,0,1-5.5,30.7l-46.4-28.5a16,16,0,0,0-6.3-2.3l-22.8-3a16.1,16.1,0,0,0-15.3,6.8h-8.6l-3.8-7.9a16.2,16.2,0,0,0-11-8.7l-6.6-1.4,2.5-5.9a8.1,8.1,0,0,1,7.4-4.9h16.1a16.1,16.1,0,0,0,7.7-2l12.2-6.8a16.1,16.1,0,0,0,3-2.1l26.9-24.4A15.7,15.7,0,0,0,170,50.7,88,88,0,0,1,216,128ZM40,128a87.1,87.1,0,0,1,9.5-39.7l10.4,27.9a16.1,16.1,0,0,0,11.6,10l5.5,1.2h.1l12,2.6a7.8,7.8,0,0,1,5.5,4.3l2.1,4.4a16.1,16.1,0,0,0,14.4,9h1.2l-7.7,17.2a15.9,15.9,0,0,0,2.8,17.4l16.1,17.4a8.3,8.3,0,0,1,2,6.9l-1.8,9.3A88.1,88.1,0,0,1,40,128Z"}))});ks.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ks.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ks.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var y3=function(e,n){return Oe(e,n,ks)},WI=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:y3}))});WI.displayName="GlobeHemisphereWest";var Es=new Map;Es.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Es.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",opacity:"0.2"}),c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Es.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M218.8,103.7,138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5v92.1a16.4,16.4,0,0,0,4,11A15.9,15.9,0,0,0,48,224H96a8,8,0,0,0,8-8V168a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v48a8,8,0,0,0,8,8h48a15.6,15.6,0,0,0,7.6-1.9A16.1,16.1,0,0,0,224,208V115.5A16,16,0,0,0,218.8,103.7Z"}))});Es.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Es.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Es.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var v3=function(e,n){return Oe(e,n,Es)},C0=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:v3}))});C0.displayName="House";var ws=new Map;ws.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"108",x2:"184",y2:"108",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"148",x2:"184",y2:"148",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"94.1",cy:"116",r:"22",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M72.1,164a22,22,0,0,1,44,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ws.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM92.1,144a24,24,0,1,1,24-24A23.9,23.9,0,0,1,92.1,144Z",opacity:"0.2"}),c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ws.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM125.1,175.7a8,8,0,0,1-9.8-5.7,24,24,0,0,0-46.4,0,8.1,8.1,0,0,1-7.8,6l-2-.3a7.9,7.9,0,0,1-5.7-9.7,40.2,40.2,0,0,1,16.3-23.2,32,32,0,1,1,44.8,0A40.2,40.2,0,0,1,130.8,166,7.9,7.9,0,0,1,125.1,175.7ZM192,152H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"16"}))});ws.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ws.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ws.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var _3=function(e,n){return Oe(e,n,ws)},BI=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:_3}))});BI.displayName="IdentificationCard";var Ts=new Map;Ts.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"152",r:"16"}))});Ts.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});Ts.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"}))});Ts.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"152",r:"10"}))});Ts.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"152",r:"8"}))});Ts.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});var k3=function(e,n){return Oe(e,n,Ts)},Id=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:k3}))});Id.displayName="Lock";var Is=new Map;Is.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Is.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,64l56,56,26.3-26.3a8,8,0,0,0,0-11.4L173.7,37.7a8,8,0,0,0-11.4,0Z",opacity:"0.2"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Is.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"}))});Is.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Is.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Is.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var E3=function(e,n){return Oe(e,n,Is)},km=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:E3}))});km.displayName="PencilSimple";var xs=new Map;xs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});xs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});xs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M141.7,133.7l-42,42A8.3,8.3,0,0,1,94,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H24a8,8,0,0,1,0-16H86V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,141.7,133.7ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"}))});xs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});xs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});xs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var w3=function(e,n){return Oe(e,n,xs)},R0=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:w3}))});R0.displayName="SignIn";var Ss=new Map;Ss.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ss.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ss.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-42,42A8.3,8.3,0,0,1,174,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H104a8,8,0,0,1,0-16h62V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,221.7,133.7ZM104,208H48V48h56a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16h56a8,8,0,0,0,0-16Z"}))});Ss.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ss.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ss.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var T3=function(e,n){return Oe(e,n,Ss)},Tc=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:T3}))});Tc.displayName="SignOut";var As=new Map;As.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});As.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});As.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"}))});As.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});As.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});As.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var I3=function(e,n){return Oe(e,n,As)},zI=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:I3}))});zI.displayName="SpinnerGap";var Cs=new Map;Cs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"60",x2:"40",y2:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Cs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Cs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))});Cs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Cs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Cs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var x3=function(e,n){return Oe(e,n,Cs)},Em=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:x3}))});Em.displayName="Trash";var Rs=new Map;Rs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Rs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Rs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});Rs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Rs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Rs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var S3=function(e,n){return Oe(e,n,Rs)},Th=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:S3}))});Th.displayName="User";var Ps=new Map;Ps.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ps.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,32A96,96,0,0,0,63.8,199.4h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.4A96,96,0,0,0,128,32Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ps.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"120",r:"44"}),c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm65.8,162.4a81.3,81.3,0,0,0-24.5-23,59.7,59.7,0,0,1-82.6,0,81.3,81.3,0,0,0-24.5,23,88,88,0,1,1,131.6,0Z"}))});Ps.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ps.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ps.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var A3=function(e,n){return Oe(e,n,Ps)},wm=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:A3}))});wm.displayName="UserCircle";var Ls=new Map;Ls.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"204",y1:"136",x2:"244",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"116",x2:"224",y2:"156",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ls.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"108",cy:"100",r:"60",opacity:"0.2"}),c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ls.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144.1,157.6a68,68,0,1,0-72.2,0,118.4,118.4,0,0,0-55.8,37.3,7.8,7.8,0,0,0-1.1,8.5,7.9,7.9,0,0,0,7.2,4.6H193.8a7.9,7.9,0,0,0,7.2-4.6,7.8,7.8,0,0,0-1.1-8.5A118.4,118.4,0,0,0,144.1,157.6Z"}))});Ls.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ls.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ls.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var C3=function(e,n){return Oe(e,n,Ls)},Ih=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:C3}))});Ih.displayName="UserPlus";var bs=new Map;bs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});bs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",opacity:"0.2"}),c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});bs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M121.2,157.9a60,60,0,1,0-66.4,0A95.5,95.5,0,0,0,9.5,192.8a7.8,7.8,0,0,0-.6,8.3,8.1,8.1,0,0,0,7.1,4.3H160a8.1,8.1,0,0,0,7.1-4.3,7.8,7.8,0,0,0-.6-8.3A95.5,95.5,0,0,0,121.2,157.9Z"}),c.createElement("path",{d:"M248.1,192.8a96.3,96.3,0,0,0-45.4-34.9A59.9,59.9,0,0,0,169.5,48a64,64,0,0,0-16.3,2.2,8.2,8.2,0,0,0-5.4,5.2,8,8,0,0,0,1.2,7.3,75.8,75.8,0,0,1,3.8,84.9,8.1,8.1,0,0,0,2.1,10.6q4.5,3.5,8.7,7.2l.5.5a112.6,112.6,0,0,1,25.5,34.9,7.9,7.9,0,0,0,7.2,4.6h44.7a8.1,8.1,0,0,0,7.1-4.3A8,8,0,0,0,248.1,192.8Z"}))});bs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});bs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});bs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var R3=function(e,n){return Oe(e,n,bs)},xh=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:R3}))});xh.displayName="Users";var js=new Map;js.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});js.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});js.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"}))});js.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});js.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});js.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var P3=function(e,n){return Oe(e,n,js)},HI=N.forwardRef(function(t,e){return c.createElement(Ae,Object.assign({ref:e},t,{renderPath:P3}))});HI.displayName="X";const L3=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #000000 0%, #801100 100%);
`,b3=U.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`,j3=U.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,N3=U.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,D_=U.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,V_=U.label`
  font-size: 0.9rem;
  color: #555;
`,F_=U.div`
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
`,zu=U.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #800000;
  margin-right: 0.5rem;
`,U_=U.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #e74c3c;
  
  &:focus {
    outline: none;
  }
`,O3=U.button`
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
`,M3=U.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,D3=U(Eg)`
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
`,V3=U.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,F3=U.button`
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
`,U3=U.button`
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
`,$3=U.div`
  font-size: 2rem;
  font-weight: bold;
  color: #800000;
  text-align: center;
  margin-bottom: 0.5rem;
`;function W3(){const[t,e]=N.useState(""),[n,r]=N.useState(""),[i,s]=N.useState(""),[o,l]=N.useState(!1),[u,d]=N.useState(!1),[p,g]=N.useState(!1),[y,E]=N.useState(!1),A=Ul(),P=rs();N.useEffect(()=>{var v;(v=P.state)!=null&&v.message&&(Y.info(P.state.message),A(P.pathname,{replace:!0,state:{}}))},[P,A]),N.useEffect(()=>{i&&s("")},[t,n]);const L=async()=>{var x,b;if(!t){s("Please enter your email address to reset your password"),(x=document.getElementById("email"))==null||x.focus();return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){s("Please enter a valid email address"),(b=document.getElementById("email"))==null||b.focus();return}try{E(!0),await SR(qr,t),g(!0),Y.success("Password reset email sent! Check your inbox.")}catch(M){console.error("Password reset error:",M),M.code==="auth/user-not-found"?s("No account found with this email address"):s("Failed to send password reset email. Please try again.")}finally{E(!1)}},w=async v=>{var b,M,V;if(v.preventDefault(),!t||!n){s("Please enter both email and password");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){s("Please enter a valid email address"),(b=document.getElementById("email"))==null||b.focus();return}try{s(""),l(!0);try{const _=(await CR(qr,t,n)).user,I=om(Oo(At,"declined_registrations"),am("userId","==",_.uid));if(!(await dd(I)).empty){await qr.signOut(),s("Your registration request has been declined. Please contact an administrator."),Y.error("Access denied: Registration declined");return}const j=om(Oo(At,"registration_requests"),am("userId","==",_.uid));if(!(await dd(j)).empty){await qr.signOut(),s("Your registration request is pending approval. You will be notified when approved."),Y.info("Registration pending approval");return}const S=!1;Y.success("Login successful!"),A("/dashboard")}catch(k){if(console.error("Firebase auth error:",k),!(!1&&(k.code==="auth/network-request-failed"||(M=k.message)!=null&&M.includes("network")))){if(k.code==="auth/invalid-credential"||k.code==="auth/invalid-email"||k.code==="auth/user-not-found"||k.code==="auth/wrong-password"){console.log("Authentication failed:",k.code,k.message);const I=k.code==="auth/user-not-found"||k.code==="auth/invalid-credential"&&t.includes("@");s(I?f.jsxs("span",{children:["Account not found. Please check your email or",f.jsx("a",{href:"/register",style:{color:"#800000",marginLeft:"4px",textDecoration:"underline"},children:"register here"})]}):"Invalid email or password. Please check your credentials and try again."),(V=document.getElementById("email"))==null||V.focus()}else k.code==="auth/network-request-failed"?s("Network error. Please check your connection and try again."):k.code==="auth/too-many-requests"?s("Too many failed login attempts. Please try again later or reset your password."):k.code==="auth/operation-not-allowed"?(s("Email/password sign-in is not enabled. Please contact the administrator."),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(console.error("Login error details:",k),s("Failed to log in. Please try again."));Y.error("Login failed")}}}catch(k){console.error("Unexpected login error:",k),s("An unexpected error occurred. Please try again."),Y.error("Login failed")}finally{l(!1)}};return f.jsx(L3,{children:f.jsxs(b3,{children:[f.jsx($3,{children:"Hyacinth"}),f.jsx(j3,{children:"Attendance System"}),f.jsxs(N3,{onSubmit:w,children:[f.jsxs(D_,{children:[f.jsx(V_,{htmlFor:"email",children:"Email"}),f.jsxs(F_,{children:[f.jsx(zu,{children:f.jsx(A0,{size:18})}),f.jsx(U_,{id:"email",type:"email",value:t,onChange:v=>e(v.target.value),placeholder:"Enter your email",required:!0})]})]}),f.jsxs(D_,{children:[f.jsx(V_,{htmlFor:"password",children:"Password"}),f.jsxs(F_,{children:[f.jsx(zu,{children:f.jsx(Id,{size:18})}),f.jsx(U_,{id:"password",type:u?"text":"password",value:n,onChange:v=>r(v.target.value),placeholder:"Enter your password",required:!0}),f.jsx(U3,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?f.jsx(Td,{size:18}):f.jsx(wd,{size:18})})]}),f.jsx(F3,{type:"button",onClick:L,disabled:y,tabIndex:"-1",children:y?"Sending...":p?"Email sent!":"Forgot password?"})]}),i&&f.jsx(M3,{children:i}),f.jsxs(V3,{children:[f.jsx(O3,{type:"submit",disabled:o,onClick:w,children:o?"Logging in...":f.jsxs(f.Fragment,{children:[f.jsx(zu,{children:f.jsx(R0,{size:18})}),"Login"]})}),f.jsxs(D3,{to:"/register",children:[f.jsx(zu,{children:f.jsx(Ih,{size:18})}),"Register"]})]})]})]})})}const B3=async t=>{try{const e={...t,createdAt:UT(),status:"pending"};return(await FT(Oo(At,"registration_requests"),e)).id}catch(e){throw console.error("Error submitting registration request:",e),e}},z3=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
  padding: 2rem 1rem;
`,H3=U.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 550px;
  animation: fadeIn 0.3s ease-in-out;
`,q3=U.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,G3=U.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Ia=U.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,K3=U.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,Ff=U.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${t=>t.flex||1};
  min-width: ${t=>t.minWidth||"0"};
`,br=U.label`
  font-size: 0.9rem;
  color: #555;
`,Ii=U.div`
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
`,Tn=U.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  color: #800000;
`,$s=U.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`,Q3=U.select`
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
`,Y3=U.button`
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
`,Uf=U.button`
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
`,$_=U(zI)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,Z3=U(Eg)`
  display: flex;
  align-items: center;
  color: #800000;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`,Ws=U.div`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`,X3=U.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;
`,xa=U.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  color: ${t=>t.met?"#000000":"#666"};
`;function J3(){const[t,e]=N.useState({lastName:"",firstName:"",middleInitial:"",email:"",password:"",confirmPassword:"",position:""}),[n,r]=N.useState({}),[i,s]=N.useState(!1),[o,l]=N.useState(!1),[u,d]=N.useState(!1),[p,g]=N.useState(!1),y=Ul();N.useEffect(()=>{Object.keys(n).length>0&&r({})},[t]);const E={length:t.password.length>=4,validChars:/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(t.password),hasLetter:/[a-zA-Z]/.test(t.password),hasNumber:/[0-9]/.test(t.password),match:t.password===t.confirmPassword&&t.confirmPassword!==""},A=v=>{const{name:x,value:b}=v.target;if(e(x==="middleInitial"?M=>({...M,[x]:b.toUpperCase()}):M=>({...M,[x]:b})),x==="email"&&b.includes("@")&&b.includes(".")){g(!0);const M=setTimeout(()=>{P(b)},800);return()=>clearTimeout(M)}},P=async v=>{try{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){g(!1);return}(await fetch("https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=undefined",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({continueUri:window.location.href,identifier:v})}).then(M=>M.json())).registered&&r(M=>({...M,email:"This email is already registered. Please use a different email or login instead."}))}catch(x){console.error("Error checking email:",x)}finally{g(!1)}},L=()=>{const v={};return t.lastName.trim()||(v.lastName="Last name is required"),t.firstName.trim()||(v.firstName="First name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(v.email="Email is invalid"):v.email="Email is required",t.password?E.length?E.validChars?E.hasLetter?E.hasNumber||(v.password="Password must contain at least one number"):v.password="Password must contain at least one letter":v.password="Password contains invalid characters":v.password="Password must be at least 4 characters":v.password="Password is required",t.confirmPassword?t.password!==t.confirmPassword&&(v.confirmPassword="Passwords do not match"):v.confirmPassword="Please confirm your password",t.position||(v.position="Please select your position"),r(v),Object.keys(v).length===0},w=async v=>{var x,b,M,V;if(v.preventDefault(),!!L())try{s(!0);const k=!1;let _,I;try{I=await AR(qr,t.email,t.password),_=I.user.uid}catch(S){if(console.error("Auth error:",S),S.code==="auth/email-already-in-use")console.log("Email already exists in Auth but proceeding with registration request"),_=`temp_${Date.now()}_${Math.random().toString(36).substring(2,7)}`;else if(!(k&&(S.code==="auth/network-request-failed"||(x=S.message)!=null&&x.includes("network"))))throw S}const C=`${t.lastName}, ${t.firstName}${t.middleInitial?" "+t.middleInitial+".":""}`;if(I!=null&&I.user)try{await PR(I.user,{displayName:C})}catch(S){console.warn("Could not update profile, continuing with registration:",S)}let j="Asia/Manila";try{j=Intl.DateTimeFormat().resolvedOptions().timeZone,console.log("Detected device time zone during registration:",j)}catch(S){console.error("Error detecting time zone during registration:",S)}const R={userId:_,lastName:t.lastName,firstName:t.firstName,middleInitial:t.middleInitial,name:C,email:t.email,position:t.position,role:"user",status:"pending",timeRegion:j,userID:`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`};try{await B3(R)}catch(S){if(console.error("Firestore error:",S),!k)throw S}Y.success("Registration request submitted! An administrator will review your request."),k&&!I||y("/login",{state:{message:"Your registration request has been submitted. You will be notified when your account is approved."}})}catch(k){if(console.error("Registration error:",k),k.code==="auth/email-already-in-use"||typeof k=="object"&&k.code==="auth/email-already-in-use"){const _=k.message||"Email is already registered. Please use a different email or login instead.";r(I=>({...I,email:_})),Y.error(f.jsxs("div",{children:["Email already exists. ",f.jsx("a",{href:"/",style:{color:"white",textDecoration:"underline"},children:"Login instead?"})]}),{autoClose:5e3}),(b=document.getElementById("email"))==null||b.scrollIntoView({behavior:"smooth",block:"center"}),(M=document.getElementById("email"))==null||M.focus()}else k.code==="auth/network-request-failed"?Y.error("Network error. Please check your connection and try again."):k.code==="auth/operation-not-allowed"?(r(_=>({..._,email:"Email/password registration is not enabled. Please contact the administrator."})),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(V=k.code)!=null&&V.includes("auth/")?Y.error(`Authentication error: ${k.message||"Please try again later"}`):(console.error("Registration error details:",k),Y.error("Registration failed. Please try again."))}finally{s(!1)}};return f.jsx(z3,{children:f.jsxs(H3,{children:[f.jsxs(Z3,{to:"/",children:[f.jsx(Tn,{children:f.jsx(Ed,{size:16})}),"Back to Login"]}),f.jsx(q3,{children:"Create Account"}),f.jsxs(G3,{onSubmit:w,children:[f.jsxs(Ia,{children:[f.jsx(br,{children:"Full Name"}),f.jsxs(K3,{children:[f.jsxs(Ff,{flex:"2",minWidth:"150px",children:[f.jsx(br,{htmlFor:"lastName",children:"Last Name"}),f.jsxs(Ii,{children:[f.jsx(Tn,{children:f.jsx(Th,{size:18})}),f.jsx($s,{id:"lastName",name:"lastName",type:"text",value:t.lastName,onChange:A,placeholder:"Last name"})]}),n.lastName&&f.jsx(Ws,{children:n.lastName})]}),f.jsxs(Ff,{flex:"2",minWidth:"150px",children:[f.jsx(br,{htmlFor:"firstName",children:"First Name"}),f.jsx(Ii,{children:f.jsx($s,{id:"firstName",name:"firstName",type:"text",value:t.firstName,onChange:A,placeholder:"First name"})}),n.firstName&&f.jsx(Ws,{children:n.firstName})]}),f.jsxs(Ff,{flex:"1",minWidth:"80px",children:[f.jsx(br,{htmlFor:"middleInitial",children:"M.I."}),f.jsx(Ii,{children:f.jsx($s,{id:"middleInitial",name:"middleInitial",type:"text",value:t.middleInitial,onChange:A,placeholder:"M.I.",maxLength:"1"})})]})]})]}),f.jsxs(Ia,{children:[f.jsx(br,{htmlFor:"email",children:"Email"}),f.jsxs(Ii,{children:[f.jsx(Tn,{children:f.jsx(A0,{size:18})}),f.jsx($s,{id:"email",name:"email",type:"email",value:t.email,onChange:A,placeholder:"Enter your email"}),p&&f.jsx(Uf,{as:"span","aria-label":"Checking email",children:f.jsx($_,{size:18})})]}),n.email&&f.jsx(Ws,{children:n.email})]}),f.jsxs(Ia,{children:[f.jsx(br,{htmlFor:"position",children:"Position"}),f.jsxs(Ii,{children:[f.jsx(Tn,{children:f.jsx(BI,{size:18})}),f.jsxs(Q3,{id:"position",name:"position",value:t.position,onChange:A,children:[f.jsx("option",{value:"",disabled:!0,children:"Select your position"}),f.jsx("option",{value:"Intern/OJT",children:"Intern/OJT"}),f.jsx("option",{value:"Employed/Onboarded",children:"Employed/Onboarded"})]})]}),n.position&&f.jsx(Ws,{children:n.position})]}),f.jsxs(Ia,{children:[f.jsx(br,{htmlFor:"password",children:"Password"}),f.jsxs(Ii,{children:[f.jsx(Tn,{children:f.jsx(Id,{size:18})}),f.jsx($s,{id:"password",name:"password",type:o?"text":"password",value:t.password,onChange:A,placeholder:"Create a password"}),f.jsx(Uf,{type:"button",onClick:()=>l(!o),"aria-label":o?"Hide password":"Show password",children:o?f.jsx(Td,{size:18}):f.jsx(wd,{size:18})})]}),n.password&&f.jsx(Ws,{children:n.password}),f.jsxs(X3,{children:[f.jsxs(xa,{met:E.length,children:[f.jsx(Tn,{children:f.jsx(Qs,{size:14,weight:E.length?"fill":"regular"})}),"At least 4 characters"]}),f.jsxs(xa,{met:E.validChars,children:[f.jsx(Tn,{children:f.jsx(Qs,{size:14,weight:E.validChars?"fill":"regular"})}),"Valid characters (letters, numbers, and special characters)"]}),f.jsxs(xa,{met:E.hasLetter,children:[f.jsx(Tn,{children:f.jsx(Qs,{size:14,weight:E.hasLetter?"fill":"regular"})}),"At least one letter"]}),f.jsxs(xa,{met:E.hasNumber,children:[f.jsx(Tn,{children:f.jsx(Qs,{size:14,weight:E.hasNumber?"fill":"regular"})}),"At least one number"]})]})]}),f.jsxs(Ia,{children:[f.jsx(br,{htmlFor:"confirmPassword",children:"Confirm Password"}),f.jsxs(Ii,{children:[f.jsx(Tn,{children:f.jsx(Id,{size:18})}),f.jsx($s,{id:"confirmPassword",name:"confirmPassword",type:u?"text":"password",value:t.confirmPassword,onChange:A,placeholder:"Confirm your password"}),f.jsx(Uf,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?f.jsx(Td,{size:18}):f.jsx(wd,{size:18})})]}),n.confirmPassword&&f.jsx(Ws,{children:n.confirmPassword}),t.confirmPassword&&f.jsxs(xa,{met:E.match,children:[f.jsx(Tn,{children:f.jsx(Qs,{size:14,weight:E.match?"fill":"regular"})}),"Passwords match"]})]}),f.jsx(Y3,{type:"submit",disabled:i||p,children:i?f.jsxs(f.Fragment,{children:[f.jsx($_,{size:18}),"Creating Account..."]}):p?"Checking email...":"Register"})]})]})})}const eO=U.div`
  padding: 1rem;
`,tO=U.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`,nO=U.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,rO=U.p`
  color: #666;
  line-height: 1.6;
`,iO=({userData:t})=>f.jsx(eO,{children:f.jsxs(tO,{children:[f.jsxs(nO,{children:[f.jsx(C0,{size:24}),"Welcome, ",(t==null?void 0:t.firstName)||"User","!"]}),f.jsx(rO,{children:"This is your dashboard home page. You can view your schedule, manage your attendance, and access your profile from the navigation menu."})]})}),sO=U.div`
  padding: 1rem;
`,oO=U.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`,aO=U.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,lO=U.p`
  color: #666;
  line-height: 1.6;
`,uO=()=>f.jsx(sO,{children:f.jsxs(oO,{children:[f.jsxs(aO,{children:[f.jsx(Nl,{size:24}),"Schedule"]}),f.jsx(lO,{children:"View and manage your schedule here. This page will display your upcoming shifts and events."})]})}),cO=U.div`
  padding: 1rem;
`,W_=U.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`,B_=U.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,z_=U.p`
  color: #666;
  line-height: 1.6;
`,dO=({attendanceStatus:t,lastRecord:e,use24HourFormat:n})=>f.jsxs(cO,{children:[f.jsxs(W_,{children:[f.jsxs(B_,{children:[f.jsx(S0,{size:24}),"Attendance"]}),f.jsx(z_,{children:"View and manage your attendance records here. You can see your current status and recent attendance history."}),f.jsxs("div",{style:{marginTop:"1.5rem"},children:[f.jsx("h3",{children:"Current Status"}),t?f.jsxs("div",{children:[f.jsxs("p",{children:["You are currently ",f.jsx("strong",{children:t})]}),e&&f.jsxs("p",{children:["Last action at: ",e.timestamp.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!n})]})]}):f.jsx("p",{children:"You are not currently clocked in."})]})]}),f.jsxs(W_,{children:[f.jsxs(B_,{children:[f.jsx($I,{size:24}),"Recent Attendance History"]}),f.jsx(z_,{children:"Your recent attendance records will be displayed here."})]})]}),hO=U.div`
  padding: 1rem;
`,fO=U.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`,pO=U.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Yt=U.div`
  margin-bottom: 1.5rem;
`,Zt=U.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #555;
`,ir=U.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #800000;
    box-shadow: 0 0 0 2px rgba(128, 0, 0, 0.1);
  }
`,mO=U.button`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: none;
  background-color: #800000;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #600000;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Hu=U.div`
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
  font-size: 1rem;
  color: #666;
`,gO=({user:t,userData:e,setUserData:n})=>{const[r,i]=N.useState({firstName:(e==null?void 0:e.firstName)||"",lastName:(e==null?void 0:e.lastName)||"",middleInitial:(e==null?void 0:e.middleInitial)||"",phoneNumber:(e==null?void 0:e.phoneNumber)||"",address:(e==null?void 0:e.address)||"",dateOfBirth:(e==null?void 0:e.dateOfBirth)||"",emergencyContactName:(e==null?void 0:e.emergencyContactName)||"",emergencyContactPhone:(e==null?void 0:e.emergencyContactPhone)||"",emergencyContactRelationship:(e==null?void 0:e.emergencyContactRelationship)||""}),[s,o]=N.useState(!1),l=d=>{const{name:p,value:g}=d.target;i(y=>({...y,[p]:g}))},u=async d=>{if(d.preventDefault(),!(!(t!=null&&t.uid)||s))try{o(!0);const p=An(At,"users",t.uid);await Xa(p,{firstName:r.firstName,lastName:r.lastName,middleInitial:r.middleInitial,phoneNumber:r.phoneNumber,address:r.address,dateOfBirth:r.dateOfBirth,emergencyContactName:r.emergencyContactName,emergencyContactPhone:r.emergencyContactPhone,emergencyContactRelationship:r.emergencyContactRelationship}),n(g=>({...g,...r})),Y.success("Profile updated successfully")}catch(p){console.error("Error updating profile:",p),Y.error("Failed to update profile")}finally{o(!1)}};return f.jsx(hO,{children:f.jsxs(fO,{children:[f.jsxs(pO,{children:[f.jsx(Th,{size:24}),"My Profile"]}),f.jsxs("form",{onSubmit:u,children:[f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1rem"},children:[f.jsxs(Yt,{children:[f.jsx(Zt,{children:"First Name"}),f.jsx(ir,{type:"text",name:"firstName",value:r.firstName,onChange:l,required:!0})]}),f.jsxs(Yt,{children:[f.jsx(Zt,{children:"Middle Initial"}),f.jsx(ir,{type:"text",name:"middleInitial",value:r.middleInitial,onChange:l,maxLength:1})]}),f.jsxs(Yt,{children:[f.jsx(Zt,{children:"Last Name"}),f.jsx(ir,{type:"text",name:"lastName",value:r.lastName,onChange:l,required:!0})]}),f.jsxs(Yt,{children:[f.jsx(Zt,{children:"Email"}),f.jsx(Hu,{children:(t==null?void 0:t.email)||"No email provided"})]}),f.jsxs(Yt,{children:[f.jsx(Zt,{children:"User ID (Non-editable)"}),f.jsx(Hu,{children:(e==null?void 0:e.userId)||"Not available"})]}),f.jsxs(Yt,{children:[f.jsx(Zt,{children:"Position"}),f.jsx(Hu,{children:(e==null?void 0:e.position)||"Not specified"})]}),f.jsxs(Yt,{children:[f.jsx(Zt,{children:"Role"}),f.jsx(Hu,{children:(e==null?void 0:e.role)||"member"})]}),f.jsxs(Yt,{children:[f.jsx(Zt,{children:"Date of Birth"}),f.jsx(ir,{type:"date",name:"dateOfBirth",value:r.dateOfBirth,onChange:l})]}),f.jsxs(Yt,{children:[f.jsx(Zt,{children:"Phone Number"}),f.jsx(ir,{type:"tel",name:"phoneNumber",value:r.phoneNumber,onChange:l})]}),f.jsxs(Yt,{children:[f.jsx(Zt,{children:"Address"}),f.jsx(ir,{type:"text",name:"address",value:r.address,onChange:l})]})]}),f.jsxs("div",{style:{marginTop:"2rem"},children:[f.jsx("h3",{children:"Emergency Contact Information"}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1rem"},children:[f.jsxs(Yt,{children:[f.jsx(Zt,{children:"Emergency Contact Name"}),f.jsx(ir,{type:"text",name:"emergencyContactName",value:r.emergencyContactName,onChange:l})]}),f.jsxs(Yt,{children:[f.jsx(Zt,{children:"Emergency Contact Phone"}),f.jsx(ir,{type:"tel",name:"emergencyContactPhone",value:r.emergencyContactPhone,onChange:l})]}),f.jsxs(Yt,{children:[f.jsx(Zt,{children:"Relationship"}),f.jsx(ir,{type:"text",name:"emergencyContactRelationship",value:r.emergencyContactRelationship,onChange:l})]})]})]}),f.jsx("div",{style:{marginTop:"2rem"},children:f.jsx(mO,{type:"submit",disabled:s,children:s?"Updating...":"Update Profile"})})]})]})})},yO=U.div`
  padding: 1rem;
`,vO=U.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`,_O=U.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,kO=U.p`
  color: #666;
  line-height: 1.6;
`,EO=()=>f.jsx(yO,{children:f.jsxs(vO,{children:[f.jsxs(_O,{children:[f.jsx(Ih,{size:24}),"Registration Requests"]}),f.jsx(kO,{children:"Manage user registration requests here. You can approve or reject pending registration requests."})]})}),wO=U.div`
  padding: 2rem;
`,TO=U.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,IO=U.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,xO=U.thead`
  background-color: #f5f5f5;
`,$f=U.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`,xi=U.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`,jr=U.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`,Bs=U.button`
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
`,SO=U.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.role){case"admin":return"#800000";case"superadmin":return"#000000";default:return"#555555"}}};
  color: white;
`,AO=U.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.status){case"active":return"#4caf50";case"inactive":return"#f44336";case"pending":return"#ff9800";default:return"#9e9e9e"}}};
  color: white;
`,CO=U.input`
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
`,qu=U.div`
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
`,Gu=U.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,Ku=U.h3`
  margin-top: 0;
  color: #333;
`,RO=U.p`
  margin-bottom: 1.5rem;
  color: #666;
`,Qu=U.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,bt=U.button`
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
`,Re=U.div`
  margin-bottom: 1rem;
`,PO=U.div`
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
`,Pe=U.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,ut=U.input`
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
`,Si=U.select`
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
`,LO=U.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,bO=U.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,jO=U.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,NO=U.h4`
  margin: 0;
  color: #333;
`,OO=U.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;U.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;const MO=U.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,zs=U.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;function DO(){const[t,e]=N.useState([]),[n,r]=N.useState(!0),[i,s]=N.useState(""),[o,l]=N.useState(!1),[u,d]=N.useState(null),[p,g]=N.useState(!1),[y,E]=N.useState(!1),[A,P]=N.useState(!1),[L,w]=N.useState(1),[v,x]=N.useState(null),[b,M]=N.useState([]),[V,k]=N.useState({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),[_,I]=N.useState(null),[C,j]=N.useState(!1),[R,S]=N.useState({firstName:"",lastName:"",middleInitial:"",email:"",position:"regular",role:"member",dateOfBirth:"",phoneNumber:"",emergencyContactName:"",emergencyContactPhone:"",emergencyContactRelationship:""}),[ae,ee]=N.useState(1),[q,le]=N.useState({firstName:"",lastName:"",middleInitial:"",email:"",position:"regular",role:"member",status:"active",address:"",contactNumber:"",employeeStatus:"regular"}),z=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Q=O=>!O||!Array.isArray(O)||O.length===0?0:O.reduce((ye,me)=>ye+(parseInt(me.shiftDuration,10)||0),0);N.useEffect(()=>{J()},[]);const J=async()=>{try{r(!0);const O=Oo(At,"users"),ye=(await dd(O)).docs.map(me=>{const Ee=me.data();return{id:me.id,userId:Ee.userId||me.id,...Ee,schedule:Ee.schedule||[]}});e(ye),r(!1)}catch(O){console.error("Error fetching users:",O),Y.error("Failed to load users"),r(!1)}},he=O=>{d(O),l(!0)},oe=O=>{let pe="",ye="",me="";if(O.name){const Ee=O.name.trim().split(" ");Ee.length===1?pe=Ee[0]:Ee.length===2?(pe=Ee[0],ye=Ee[1]):Ee.length>=3&&(pe=Ee[0],Ee[1].length===2&&Ee[1].endsWith(".")?(me=Ee[1].charAt(0),ye=Ee.slice(2).join(" ")):(me=Ee[1],ye=Ee.slice(2).join(" ")))}S({firstName:pe,lastName:ye,middleInitial:me,email:O.email||"",position:O.position||"",role:O.role||"member",dateOfBirth:O.dateOfBirth||"",phoneNumber:O.phoneNumber||"",emergencyContactName:O.emergencyContactName||"",emergencyContactPhone:O.emergencyContactPhone||"",emergencyContactRelationship:O.emergencyContactRelationship||""}),x(O),ee(1),E(!0)},ke=async()=>{if(u)try{const O=u.userId||u.id;await Yb(An(At,"users",O)),e(t.filter(pe=>!(pe.userId===u.userId||pe.id===u.id))),Y.success(`User ${u.name||u.email} has been deleted`),l(!1),d(null)}catch(O){console.error("Error deleting user:",O),Y.error(`Failed to delete user: ${O.message}`)}},at=()=>{l(!1),d(null)},tt=async(O,pe)=>{const ye=pe==="active"?"inactive":"active";try{const me=O.userId||O.id,Ee=An(At,"users",me);await Xa(Ee,{status:ye}),e(t.map(Ke=>Ke.userId&&Ke.userId===O.userId||Ke.id===O.id?{...Ke,status:ye}:Ke)),Y.success(`User status updated to ${ye}`)}catch(me){console.error("Error updating user status:",me),Y.error(`Failed to update user status: ${me.message}`)}},nt=O=>{x(O),M(O.schedule||[]),g(!0),j(!1),I(null)},yt=async()=>{if(v)try{let O=R.firstName;if(R.middleInitial&&(O+=` ${R.middleInitial}.`),R.lastName&&(O+=` ${R.lastName}`),!O.trim()||!R.email.trim()){Y.error("Name and email are required");return}const pe=v.userId||v.id,ye=An(At,"users",pe);await Xa(ye,{name:O.trim(),email:R.email.trim(),position:R.position.trim(),role:R.role,dateOfBirth:R.dateOfBirth,phoneNumber:R.phoneNumber,emergencyContactName:R.emergencyContactName,emergencyContactPhone:R.emergencyContactPhone,emergencyContactRelationship:R.emergencyContactRelationship}),e(t.map(me=>me.userId&&me.userId===v.userId||me.id===v.id?{...me,name:O.trim(),email:R.email.trim(),position:R.position.trim(),role:R.role,dateOfBirth:R.dateOfBirth,phoneNumber:R.phoneNumber,emergencyContactName:R.emergencyContactName,emergencyContactPhone:R.emergencyContactPhone,emergencyContactRelationship:R.emergencyContactRelationship}:me)),Y.success("User information updated successfully"),E(!1),ee(1)}catch(O){console.error("Error updating user:",O),Y.error(`Failed to update user: ${O.message}`)}},tr=async()=>{try{let O=q.firstName;if(q.middleInitial&&(O+=` ${q.middleInitial}.`),q.lastName&&(O+=` ${q.lastName}`),!O.trim()||!q.email.trim()){Y.error("Name and email are required");return}const pe=Date.now(),ye=Math.random().toString(36).substring(2,8),me=`uid_${pe}_${ye}`,Ee=O.trim().toLowerCase().replace(/\s+/g,"_"),Ke=`${q.role}_${Ee}_${pe}`,eu=An(At,"users",Ke);await lm(eu,{userId:me,name:O.trim(),email:q.email.trim(),position:q.position.trim(),role:q.role,status:q.status,address:q.address.trim(),contactNumber:q.contactNumber.trim(),employeeStatus:q.employeeStatus,createdAt:UT(),schedule:[]});const ta={id:Ke,userId:me,name:O.trim(),email:q.email.trim(),position:q.position.trim(),role:q.role,status:q.status,address:q.address.trim(),contactNumber:q.contactNumber.trim(),employeeStatus:q.employeeStatus,schedule:[],createdAt:new Date};e([...t,ta]),Y.success(`User ${O.trim()} added successfully`),P(!1),w(1),le({firstName:"",lastName:"",middleInitial:"",email:"",position:"",role:"member",status:"active",address:"",contactNumber:"",employeeStatus:"regular"})}catch(O){console.error("Error adding user:",O),Y.error(`Failed to add user: ${O.message}`)}},_n=()=>{if(V.selectedDays.length===0){Y.warning("Please select at least one day of the week");return}const O=new Date,[pe,ye]=V.timeIn.split(":").map(Number);O.setHours(pe,ye,0,0);const me=V.selectedDays.map(Ke=>({id:`${Date.now()}-${Ke}`,dayOfWeek:Ke,timeIn:V.timeIn,timeRegion:V.timeRegion,shiftDuration:parseInt(V.shiftDuration,10),utcTimeIn:O.toISOString()})),Ee=[...b,...me];M(Ee),Y.success(`Added schedule for ${V.selectedDays.length} day(s)`),k({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},Dn=async()=>{if(v)try{const O=v.userId||v.id;console.log("Updating schedule for user with document ID:",O);const pe=An(At,"users",O);await Xa(pe,{schedule:b}),e(t.map(ye=>ye.userId&&ye.userId===v.userId||ye.id===v.id?{...ye,schedule:b}:ye)),Y.success("Schedule updated successfully"),g(!1)}catch(O){console.error("Error updating schedule:",O),Y.error(`Failed to update schedule: ${O.message}`)}},kn=O=>{const pe=b.filter(ye=>ye.id!==O);M(pe)},Vt=O=>{I(O),j(!0),k({selectedDays:[O.dayOfWeek],timeIn:O.timeIn,timeRegion:O.timeRegion,shiftDuration:O.shiftDuration.toString()})},Jo=()=>{if(!_)return;if(V.selectedDays.length===0){Y.warning("Please select at least one day of the week");return}const O=new Date,[pe,ye]=V.timeIn.split(":").map(Number);O.setHours(pe,ye,0,0);let me=b.filter(Ke=>Ke.id!==_.id);const Ee=V.selectedDays.map(Ke=>({id:Ke===_.dayOfWeek?_.id:`${Date.now()}-${Ke}`,dayOfWeek:Ke,timeIn:V.timeIn,timeRegion:V.timeRegion,shiftDuration:parseInt(V.shiftDuration,10),utcTimeIn:O.toISOString()}));me=[...me,...Ee],M(me),Y.success(`Updated schedule for ${V.selectedDays.length} day(s)`),k({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),j(!1),I(null)},ea=()=>{j(!1),I(null),k({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},Ns=t.filter(O=>{const pe=i.toLowerCase();return O.name&&O.name.toLowerCase().includes(pe)||O.email&&O.email.toLowerCase().includes(pe)||O.role&&O.role.toLowerCase().includes(pe)||O.position&&O.position.toLowerCase().includes(pe)});return f.jsxs(wO,{children:[f.jsxs(TO,{children:[f.jsx(xh,{size:24,weight:"bold"}),"User Management"]}),f.jsx(MO,{children:f.jsx(CO,{type:"text",placeholder:"Search users...",value:i,onChange:O=>s(O.target.value)})}),n?f.jsx("p",{children:"Loading users..."}):f.jsxs(IO,{children:[f.jsx(xO,{children:f.jsxs($f,{children:[f.jsx(xi,{children:"Name"}),f.jsx(xi,{children:"Email"}),f.jsx(xi,{children:"Position"}),f.jsx(xi,{children:"Role"}),f.jsx(xi,{children:"Status"}),f.jsx(xi,{children:"Shifts"}),f.jsx(xi,{children:"Actions"})]})}),f.jsx("tbody",{children:Ns.length>0?Ns.map(O=>f.jsxs($f,{children:[f.jsx(jr,{children:O.name||"N/A"}),f.jsx(jr,{children:O.email}),f.jsx(jr,{children:O.position||"N/A"}),f.jsx(jr,{children:f.jsx(SO,{role:O.role,children:O.role||"member"})}),f.jsx(jr,{children:f.jsx(AO,{status:O.status||"active",children:O.status||"active"})}),f.jsx(jr,{children:O.schedule&&Array.isArray(O.schedule)?f.jsxs("div",{children:[f.jsxs("div",{children:[f.jsx("strong",{children:O.schedule.length})," shifts"]}),f.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[Q(O.schedule)," total hours"]})]}):"No shifts"}),f.jsxs(jr,{children:[f.jsx(Bs,{color:"#000000",onClick:()=>nt(O),title:"Manage Schedule",children:f.jsx(Nl,{size:20})}),f.jsx(Bs,{color:"#1a73e8",onClick:()=>oe(O),title:"Edit User",children:f.jsx(km,{size:20})}),f.jsx(Bs,{color:O.status==="active"?"#f44336":"#4caf50",onClick:()=>tt(O,O.status||"active"),title:O.status==="active"?"Deactivate user":"Activate user",children:O.status==="active"?f.jsx(HI,{size:20}):f.jsx(UI,{size:20})}),f.jsx(Bs,{color:"#f44336",onClick:()=>he(O),title:"Delete user",children:f.jsx(Em,{size:20})})]})]},O.id)):f.jsx($f,{children:f.jsx(jr,{colSpan:6,style:{textAlign:"center"},children:"No users found"})})})]}),o&&f.jsx(qu,{children:f.jsxs(Gu,{children:[f.jsx(Ku,{children:"Confirm Deletion"}),f.jsxs(RO,{children:["Are you sure you want to delete the user ",(u==null?void 0:u.name)||(u==null?void 0:u.email),"? This action cannot be undone."]}),f.jsxs(Qu,{children:[f.jsx(bt,{onClick:at,children:"Cancel"}),f.jsx(bt,{primary:!0,onClick:ke,children:"Delete"})]})]})}),y&&v&&f.jsx(qu,{children:f.jsxs(Gu,{style:{maxWidth:"500px",width:"100%"},children:[f.jsx(Ku,{children:f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[f.jsx(wm,{size:24}),"Edit User: ",v.name||v.email," ",ae>1&&`- Page ${ae} of 2`]})}),ae===1&&f.jsxs("div",{style:{marginBottom:"1.5rem"},children:[f.jsxs(Re,{children:[f.jsx(Pe,{children:"First Name"}),f.jsx(ut,{type:"text",value:R.firstName,onChange:O=>S({...R,firstName:O.target.value}),placeholder:"First Name"})]}),f.jsxs(Re,{children:[f.jsx(Pe,{children:"Middle Initial"}),f.jsx(ut,{type:"text",value:R.middleInitial,onChange:O=>S({...R,middleInitial:O.target.value}),placeholder:"Middle Initial",maxLength:1}),f.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Just the first letter, without period"})]}),f.jsxs(Re,{children:[f.jsx(Pe,{children:"Last Name"}),f.jsx(ut,{type:"text",value:R.lastName,onChange:O=>S({...R,lastName:O.target.value}),placeholder:"Last Name"})]}),f.jsxs(Re,{children:[f.jsx(Pe,{children:"Email"}),f.jsx(ut,{type:"email",value:R.email,onChange:O=>S({...R,email:O.target.value}),placeholder:"Email Address"})]}),f.jsxs(Re,{children:[f.jsx(Pe,{children:"Position"}),f.jsxs(Si,{value:R.position,onChange:O=>S({...R,position:O.target.value}),children:[f.jsx("option",{value:"regular",children:"Regular"}),f.jsx("option",{value:"probationary",children:"Probationary"}),f.jsx("option",{value:"intern",children:"Intern"})]})]}),f.jsxs(Re,{children:[f.jsx(Pe,{children:"Role"}),f.jsxs(Si,{value:R.role,onChange:O=>S({...R,role:O.target.value}),children:[f.jsx("option",{value:"member",children:"Member"}),f.jsx("option",{value:"admin",children:"Admin"}),f.jsx("option",{value:"super_admin",children:"Super Admin"})]})]})]}),ae===2&&f.jsxs("div",{style:{marginBottom:"1.5rem"},children:[f.jsxs(Re,{children:[f.jsx(Pe,{children:"Date of Birth"}),f.jsx(ut,{type:"date",value:R.dateOfBirth,onChange:O=>S({...R,dateOfBirth:O.target.value})})]}),f.jsxs(Re,{children:[f.jsx(Pe,{children:"Phone #"}),f.jsx(ut,{type:"text",value:R.phoneNumber,onChange:O=>S({...R,phoneNumber:O.target.value}),placeholder:"Phone Number"})]}),f.jsxs(Re,{children:[f.jsx(Pe,{children:"Emergency Contact Name"}),f.jsx(ut,{type:"text",value:R.emergencyContactName,onChange:O=>S({...R,emergencyContactName:O.target.value}),placeholder:"Emergency Contact Name"})]}),f.jsxs(Re,{children:[f.jsx(Pe,{children:"Emergency Contact Phone"}),f.jsx(ut,{type:"text",value:R.emergencyContactPhone,onChange:O=>S({...R,emergencyContactPhone:O.target.value}),placeholder:"Emergency Contact Phone"})]}),f.jsxs(Re,{children:[f.jsx(Pe,{children:"Relationship"}),f.jsx(ut,{type:"text",value:R.emergencyContactRelationship,onChange:O=>S({...R,emergencyContactRelationship:O.target.value}),placeholder:"Relationship to Employee"})]})]}),f.jsx(Qu,{children:ae===1?f.jsxs(f.Fragment,{children:[f.jsx(bt,{onClick:()=>E(!1),children:"Cancel"}),f.jsxs(bt,{primary:!0,onClick:()=>ee(2),children:[f.jsx(zs,{children:f.jsx(vm,{size:16})}),"Next"]})]}):f.jsxs(f.Fragment,{children:[f.jsxs(bt,{onClick:()=>ee(1),children:[f.jsx(zs,{children:f.jsx(Ed,{size:16})}),"Back"]}),f.jsxs(bt,{primary:!0,onClick:yt,children:[f.jsx(zs,{children:f.jsx(_m,{size:16})}),"Save Changes"]})]})})]})}),A&&f.jsx(qu,{children:f.jsxs(Gu,{style:{maxWidth:"500px",width:"100%"},children:[f.jsx(Ku,{children:f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[f.jsx(wm,{size:24}),"Add New User ",L>1&&`- Page ${L} of 2`]})}),L===1&&f.jsxs("div",{style:{marginBottom:"1.5rem"},children:[f.jsxs(Re,{children:[f.jsxs(Pe,{children:["First Name ",f.jsx("span",{style:{color:"red"},children:"*"})]}),f.jsx(ut,{type:"text",value:q.firstName,onChange:O=>le({...q,firstName:O.target.value}),placeholder:"First Name",required:!0})]}),f.jsxs(Re,{children:[f.jsx(Pe,{children:"Middle Initial"}),f.jsx(ut,{type:"text",value:q.middleInitial,onChange:O=>le({...q,middleInitial:O.target.value}),placeholder:"Middle Initial",maxLength:1}),f.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Just the first letter, without period"})]}),f.jsxs(Re,{children:[f.jsxs(Pe,{children:["Last Name ",f.jsx("span",{style:{color:"red"},children:"*"})]}),f.jsx(ut,{type:"text",value:q.lastName,onChange:O=>le({...q,lastName:O.target.value}),placeholder:"Last Name",required:!0})]}),f.jsxs(Re,{children:[f.jsxs(Pe,{children:["Email ",f.jsx("span",{style:{color:"red"},children:"*"})]}),f.jsx(ut,{type:"email",value:q.email,onChange:O=>le({...q,email:O.target.value}),placeholder:"Email Address",required:!0})]}),f.jsxs(Re,{children:[f.jsx(Pe,{children:"Position"}),f.jsxs(Si,{value:q.position,onChange:O=>le({...q,position:O.target.value}),children:[f.jsx("option",{value:"regular",children:"Regular"}),f.jsx("option",{value:"probationary",children:"Probationary"}),f.jsx("option",{value:"intern",children:"Intern"})]})]}),f.jsxs(Re,{children:[f.jsx(Pe,{children:"Role"}),f.jsxs(Si,{value:q.role,onChange:O=>le({...q,role:O.target.value}),children:[f.jsx("option",{value:"member",children:"Member"}),f.jsx("option",{value:"admin",children:"Admin"}),f.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),f.jsxs(Re,{children:[f.jsx(Pe,{children:"Status"}),f.jsxs(Si,{value:q.status,onChange:O=>le({...q,status:O.target.value}),children:[f.jsx("option",{value:"active",children:"Active"}),f.jsx("option",{value:"inactive",children:"Inactive"}),f.jsx("option",{value:"pending",children:"Pending"})]})]})]}),L===2&&f.jsxs("div",{style:{marginBottom:"1.5rem"},children:[f.jsxs(Re,{children:[f.jsx(Pe,{children:"Address"}),f.jsx(ut,{type:"text",value:q.address,onChange:O=>le({...q,address:O.target.value}),placeholder:"Complete Address"})]}),f.jsxs(Re,{children:[f.jsx(Pe,{children:"Contact Number"}),f.jsx(ut,{type:"text",value:q.contactNumber,onChange:O=>le({...q,contactNumber:O.target.value}),placeholder:"Contact Number"})]}),f.jsxs(Re,{children:[f.jsx(Pe,{children:"Employee Status"}),f.jsxs(Si,{value:q.employeeStatus,onChange:O=>le({...q,employeeStatus:O.target.value}),children:[f.jsx("option",{value:"regular",children:"Regular"}),f.jsx("option",{value:"probationary",children:"Probationary"}),f.jsx("option",{value:"intern",children:"Intern"})]})]})]}),f.jsx(Qu,{children:L===1?f.jsxs(f.Fragment,{children:[f.jsx(bt,{onClick:()=>P(!1),children:"Cancel"}),f.jsxs(bt,{primary:!0,onClick:()=>w(2),children:[f.jsx(zs,{children:f.jsx(vm,{size:16})}),"Next"]})]}):f.jsxs(f.Fragment,{children:[f.jsxs(bt,{onClick:()=>w(1),children:[f.jsx(zs,{children:f.jsx(Ed,{size:16})}),"Back"]}),f.jsxs(bt,{primary:!0,onClick:tr,children:[f.jsx(zs,{children:f.jsx(_m,{size:16})}),"Add User"]})]})})]})}),p&&v&&f.jsx(qu,{children:f.jsxs(Gu,{style:{maxWidth:"600px",width:"100%"},children:[f.jsx(Ku,{children:f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[f.jsx(Nl,{size:24}),"Manage Schedule for ",v.name||v.email]})}),f.jsx("div",{style:{marginBottom:"1rem",background:"#f5f9ff",padding:"0.75rem",borderRadius:"6px"},children:f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[f.jsxs("div",{children:[f.jsx("strong",{children:"Total Shifts:"})," ",b.length]}),f.jsxs("div",{children:[f.jsx("strong",{children:"Total Hours:"})," ",Q(b)," hours/week"]})]})}),f.jsxs("div",{style:{marginBottom:"1.5rem"},children:[f.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Current Schedule"}),b.length>0?f.jsx(LO,{children:b.map(O=>f.jsxs(bO,{children:[f.jsxs(jO,{children:[f.jsx(NO,{children:O.dayOfWeek}),f.jsxs("div",{children:[f.jsx(Bs,{color:"#000000",onClick:()=>Vt(O),title:"Edit schedule",style:{marginRight:"4px"},children:f.jsx(km,{size:16})}),f.jsx(Bs,{color:"#f44336",onClick:()=>kn(O.id),title:"Delete schedule",children:f.jsx(Em,{size:16})})]})]}),f.jsxs(OO,{children:[f.jsxs("div",{children:[f.jsx("strong",{children:"Time In:"})," ",O.timeIn]}),f.jsxs("div",{children:[f.jsx("strong",{children:"Region:"})," ",O.timeRegion]}),f.jsxs("div",{children:[f.jsx("strong",{children:"Duration:"})," ",O.shiftDuration," hours"]})]})]},O.id))}):f.jsx("p",{children:"No schedules found. Add a new schedule below."})]}),f.jsxs("div",{style:{marginBottom:"1.5rem"},children:[f.jsx("h4",{style:{marginBottom:"0.5rem"},children:C?"Edit Schedule":"Add New Schedule"}),f.jsxs(Re,{children:[f.jsx(Pe,{children:"Days of Week (select multiple)"}),f.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:z.map(O=>f.jsxs(PO,{children:[f.jsx("input",{type:"checkbox",id:`day-${O}`,checked:V.selectedDays.includes(O),onChange:()=>{const pe=V.selectedDays.includes(O)?V.selectedDays.filter(ye=>ye!==O):[...V.selectedDays,O];k({...V,selectedDays:pe})}}),f.jsx("label",{htmlFor:`day-${O}`,children:O})]},O))})]}),f.jsxs(Re,{children:[f.jsx(Pe,{children:"Time In"}),f.jsx(ut,{type:"time",value:V.timeIn,onChange:O=>k({...V,timeIn:O.target.value})})]}),f.jsxs(Re,{children:[f.jsx(Pe,{children:"Time Region"}),f.jsxs(Si,{value:V.timeRegion,onChange:O=>k({...V,timeRegion:O.target.value}),children:[f.jsxs("optgroup",{label:"Asia & Pacific",children:[f.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT)"}),f.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore (SGT)"}),f.jsx("option",{value:"Asia/Tokyo",children:"Asia/Tokyo (JST)"}),f.jsx("option",{value:"Australia/Sydney",children:"Australia/Sydney (AEST/AEDT)"})]}),f.jsxs("optgroup",{label:"Americas",children:[f.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern)"}),f.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central)"}),f.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain)"}),f.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific)"}),f.jsx("option",{value:"America/Anchorage",children:"America/Anchorage (Alaska)"}),f.jsx("option",{value:"America/Adak",children:"America/Adak (Hawaii-Aleutian)"}),f.jsx("option",{value:"Pacific/Honolulu",children:"Pacific/Honolulu (Hawaii)"}),f.jsx("option",{value:"America/Phoenix",children:"America/Phoenix (Arizona)"}),f.jsx("option",{value:"America/Toronto",children:"America/Toronto (Eastern Canada)"}),f.jsx("option",{value:"America/Vancouver",children:"America/Vancouver (Pacific Canada)"})]}),f.jsxs("optgroup",{label:"Europe & Africa",children:[f.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST)"}),f.jsx("option",{value:"Europe/Paris",children:"Europe/Paris (CET/CEST)"}),f.jsx("option",{value:"Europe/Berlin",children:"Europe/Berlin (CET/CEST)"}),f.jsx("option",{value:"Europe/Moscow",children:"Europe/Moscow (MSK)"})]})]})]}),f.jsxs(Re,{children:[f.jsx(Pe,{children:"Shift Duration (hours)"}),f.jsx(ut,{type:"number",min:"1",max:"24",value:V.shiftDuration,onChange:O=>k({...V,shiftDuration:O.target.value})})]}),f.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:C?f.jsxs(f.Fragment,{children:[f.jsx(bt,{primary:!0,onClick:Jo,children:"Update Schedule"}),f.jsx(bt,{onClick:ea,children:"Cancel Edit"})]}):f.jsx(bt,{primary:!0,onClick:_n,children:"Add Schedule"})})]}),f.jsxs(Qu,{children:[f.jsx(bt,{onClick:()=>g(!1),children:"Cancel"}),f.jsx(bt,{primary:!0,onClick:Dn,children:"Save Changes"})]})]})})]})}const VO=U.div`
  padding: 1rem;
`,FO=U.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`,UO=U.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,$O=()=>f.jsx(VO,{children:f.jsxs(FO,{children:[f.jsxs(UO,{children:[f.jsx(xh,{size:24}),"User Management"]}),f.jsx(DO,{})]})}),qI=N.createContext(),WO=()=>N.useContext(qI),BO=({children:t})=>{const{currentUser:e}=k0(),[n,r]=N.useState(!1),[i,s]=N.useState(!0);N.useEffect(()=>{(async()=>{if(!(e!=null&&e.uid)){s(!1);return}try{const d=An(At,"users_settings",e.uid),p=await DT(d);if(p.exists()){const g=p.data();g.use24HourFormat!==void 0&&r(g.use24HourFormat)}else await lm(d,{use24HourFormat:!1,userId:e.uid})}catch(d){console.error("Error fetching user settings:",d)}finally{s(!1)}})()},[e]);const l={use24HourFormat:n,toggleTimeFormat:async()=>{if(e!=null&&e.uid)try{const u=An(At,"users_settings",e.uid);return await lm(u,{use24HourFormat:!n,userId:e.uid},{merge:!0}),r(!n),!0}catch(u){return console.error("Error updating time format:",u),!1}},loading:i};return f.jsx(qI.Provider,{value:l,children:t})},zO=U.div`
  display: flex;
  height: 100vh; /* Lock to viewport height */
  overflow: hidden; /* Prevent overall page scrolling */
`,HO=U.div`
  width: 250px;
  background: linear-gradient(180deg, #000000 0%, #800000 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Allow sidebar to scroll if needed */
`,qO=U.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`,Hs=U(Eg)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  color: white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: bold;
  }
`,H_=U.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  color: white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,q_=U.button`
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
`,GI=U.button`
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
`,GO=U(GI)`
  background-color: #4caf50;
  color: white;
  
  &:hover:not(:disabled) {
    background-color: #43a047;
  }
`,KO=U(GI)`
  background-color: #f44336;
  color: white;
  
  &:hover:not(:disabled) {
    background-color: #e53935;
  }
`,QO=U.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Prevent content scrolling */
`,YO=U.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  border-bottom: 1px solid #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`,ZO=U.h1`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
`,XO=U.div`
  display: flex;
  align-items: center;
`,JO=U.span`
  margin-right: 1rem;
  font-weight: 500;
`,eM=U.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  border: none;
  background-color: #f5f5f5;
  color: #666;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #eee;
  }
`,tM=U.main`
  flex: 1;
  padding: 2rem;
  overflow-y: auto; /* Allow content area to scroll */
  background-color: #f9f9f9;
`,nM=U.div`
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
`,rM=U.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
`,iM=U.div`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,sM=U.h3`
  margin: 0;
  color: #333;
`,oM=U.div`
  padding: 1rem;
  max-height: 60vh;
  overflow-y: auto;
`,aM=U.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #eee;
`,G_=U.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: ${t=>t.primary?"#800000":"white"};
  color: ${t=>t.primary?"white":"#333"};
  margin-left: 0.5rem;
  cursor: pointer;
  
  &:hover {
    background-color: ${t=>t.primary?"#600000":"#f5f5f5"};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Fn=U.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`,lM=({user:t,userData:e,setUserData:n,attendanceStatus:r,loading:i,handleTimeInOut:s,lastRecord:o,children:l})=>{var ae;const u=Ul(),d=rs(),{currentUser:p}=k0(),{use24HourFormat:g,toggleTimeFormat:y}=WO(),[E,A]=N.useState(!1),[P,L]=N.useState((e==null?void 0:e.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila"),[w,v]=N.useState(!1),[x,b]=N.useState(""),[M,V]=N.useState(!1),k=ee=>{try{const q=new Date,le={timeZone:ee,timeZoneName:"short"},J=new Intl.DateTimeFormat("en-US",le).format(q).match(/GMT([+-]\d+)/);if(J&&J[1])return`UTC${J[1]}`;const he=new Date,ke=(new Date(he.toLocaleString("en-US",{timeZone:ee}))-he)/6e4,at=Math.floor(Math.abs(ke)/60),tt=Math.abs(ke)%60;return`UTC${ke>=0?"+":"-"}${at.toString().padStart(2,"0")}:${tt.toString().padStart(2,"0")}`}catch(q){return console.error("Error calculating UTC offset:",q),""}};N.useEffect(()=>{try{const ee=Intl.DateTimeFormat().resolvedOptions().timeZone;b(ee),console.log("Detected device time zone:",ee)}catch(ee){console.error("Error detecting time zone:",ee),b("Unable to detect")}},[]),N.useEffect(()=>{e!=null&&e.timeRegion?L(e.timeRegion):x&&!(e!=null&&e.timeRegion)&&L(x)},[e,x]);const _=async()=>{if(!(!(t!=null&&t.uid)||w))try{v(!0);const ee=An(At,"users",t.uid);await Xa(ee,{timeRegion:P}),n(q=>({...q,timeRegion:P})),Y.success("Time region updated successfully"),A(!1)}catch(ee){console.error("Error updating time region:",ee),Y.error("Failed to update time region")}finally{v(!1)}},I=async()=>{if(!M)try{V(!0),await y()?Y.success(`Time format updated to ${g?"12-hour":"24-hour"} format`):Y.error("Failed to update time format")}catch(ee){console.error("Error updating time format:",ee),Y.error("Failed to update time format")}finally{V(!1)}},C=async()=>{try{await NR(qr),u("/login")}catch(ee){console.error("Error signing out:",ee),Y.error("Failed to sign out")}},j=ee=>d.pathname===ee,R=()=>{const ee=d.pathname;return ee==="/dashboard"?"Dashboard":ee==="/schedule"?"Schedule":ee==="/attendance"?"Attendance":ee==="/profile"?"Profile":ee==="/registration-requests"?"Registration Requests":ee==="/user-management"?"User Management":"Hyacinth Attendance"},S=(e==null?void 0:e.role)==="super_admin";return f.jsxs(zO,{children:[f.jsxs(HO,{children:[f.jsx(qO,{children:"Hyacinth"}),f.jsxs(Hs,{to:"/dashboard",className:j("/dashboard")?"active":"",children:[f.jsx(Fn,{children:f.jsx(C0,{size:16})}),"Dashboard"]}),f.jsxs(Hs,{to:"/schedule",className:j("/schedule")?"active":"",children:[f.jsx(Fn,{children:f.jsx(Nl,{size:16})}),"Schedule"]}),f.jsxs(Hs,{to:"/attendance",className:j("/attendance")?"active":"",children:[f.jsx(Fn,{children:f.jsx(S0,{size:16})}),"Attendance"]}),f.jsxs(Hs,{to:"/profile",className:j("/profile")?"active":"",children:[f.jsx(Fn,{children:f.jsx(Th,{size:16})}),"Profile"]}),S&&f.jsxs(f.Fragment,{children:[f.jsxs(Hs,{to:"/registration-requests",className:j("/registration-requests")?"active":"",children:[f.jsx(Fn,{children:f.jsx(Ih,{size:16})}),"Registration Requests"]}),f.jsxs(Hs,{to:"/user-management",className:j("/user-management")?"active":"",children:[f.jsx(Fn,{children:f.jsx(xh,{size:16})}),"User Management"]})]}),f.jsxs("div",{style:{marginTop:"auto"},children:[f.jsxs("div",{style:{marginBottom:"1.5rem"},children:[f.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"User Settings"}),f.jsxs(H_,{onClick:()=>A(!0),children:[f.jsx(Fn,{children:f.jsx(WI,{size:16})}),"Change Time Region",f.jsxs("div",{style:{fontSize:"0.75rem",marginLeft:"auto",opacity:.7},children:[((ae=e==null?void 0:e.timeRegion)==null?void 0:ae.replace("_"," "))||"Asia/Manila",f.jsx("div",{style:{fontSize:"0.7rem",marginTop:"2px"},children:k((e==null?void 0:e.timeRegion)||"Asia/Manila")})]})]})]}),f.jsxs("div",{style:{marginBottom:"1.5rem"},children:[f.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"Attendance Actions"}),f.jsxs(GO,{onClick:()=>s("In"),disabled:i||r==="In",children:[f.jsx(Fn,{children:f.jsx(R0,{size:16})}),"Time In"]}),f.jsxs(KO,{onClick:()=>s("Out"),disabled:i||r==="Out"||!r,children:[f.jsx(Fn,{children:f.jsx(Tc,{size:16})}),"Time Out"]}),r&&f.jsxs("div",{style:{padding:"0.5rem 0",textAlign:"center",fontSize:"0.85rem"},children:["Current status: ",f.jsx("strong",{children:r}),o&&f.jsx("div",{style:{marginTop:"0.25rem",fontSize:"0.75rem",opacity:.8},children:o.timestamp.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!g})})]})]}),f.jsxs(H_,{onClick:C,children:[f.jsx(Fn,{children:f.jsx(Tc,{size:16})}),"Logout"]})]})]}),f.jsxs(QO,{children:[f.jsxs(YO,{children:[f.jsx(ZO,{children:R()}),f.jsxs(XO,{children:[f.jsx(JO,{children:t==null?void 0:t.displayName}),f.jsxs(eM,{onClick:C,children:[f.jsx(Tc,{size:16}),"Logout"]})]})]}),f.jsx(tM,{children:l})]}),E&&f.jsx(nM,{children:f.jsxs(rM,{children:[f.jsx(iM,{children:f.jsx(sM,{children:"Change Time Region"})}),f.jsxs(oM,{children:[f.jsx("p",{children:"Select your time region to ensure accurate time tracking."}),f.jsxs("div",{style:{marginBottom:"1rem"},children:[f.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Your Device Time Zone:"}),f.jsx("div",{style:{padding:"0.5rem",background:"#f5f5f5",borderRadius:"4px"},children:x||"Unable to detect"})]}),f.jsxs("div",{style:{marginBottom:"1rem"},children:[f.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Select Time Region:"}),f.jsxs("select",{value:P,onChange:ee=>L(ee.target.value),style:{width:"100%",padding:"0.5rem",borderRadius:"4px",border:"1px solid #ddd"},children:[f.jsxs("optgroup",{label:"Asia & Pacific",children:[f.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT)"}),f.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore (SGT)"}),f.jsx("option",{value:"Asia/Tokyo",children:"Asia/Tokyo (JST)"}),f.jsx("option",{value:"Australia/Sydney",children:"Australia/Sydney (AEST/AEDT)"})]}),f.jsxs("optgroup",{label:"Americas",children:[f.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern)"}),f.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central)"}),f.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain)"}),f.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific)"}),f.jsx("option",{value:"America/Anchorage",children:"America/Anchorage (Alaska)"}),f.jsx("option",{value:"America/Adak",children:"America/Adak (Hawaii-Aleutian)"}),f.jsx("option",{value:"Pacific/Honolulu",children:"Pacific/Honolulu (Hawaii)"}),f.jsx("option",{value:"America/Phoenix",children:"America/Phoenix (Arizona)"}),f.jsx("option",{value:"America/Toronto",children:"America/Toronto (Eastern Canada)"}),f.jsx("option",{value:"America/Vancouver",children:"America/Vancouver (Pacific Canada)"})]}),f.jsxs("optgroup",{label:"Europe & Africa",children:[f.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST)"}),f.jsx("option",{value:"Europe/Paris",children:"Europe/Paris (CET/CEST)"}),f.jsx("option",{value:"Europe/Berlin",children:"Europe/Berlin (CET/CEST)"}),f.jsx("option",{value:"Europe/Moscow",children:"Europe/Moscow (MSK)"})]})]})]}),f.jsxs("div",{style:{marginBottom:"1rem"},children:[f.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Time Format:"}),f.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[f.jsx(q_,{active:!g,onClick:I,disabled:M,children:"12-hour"}),f.jsx(q_,{active:g,onClick:I,disabled:M,children:"24-hour"})]})]})]}),f.jsxs(aM,{children:[f.jsx(G_,{onClick:()=>A(!1),children:"Cancel"}),f.jsx(G_,{primary:!0,onClick:_,disabled:w,children:w?"Saving...":"Save Changes"})]})]})})]})},uM=({children:t})=>{const{currentUser:e,loading:n}=k0();return n?f.jsx(cM,{children:"Loading..."}):e?t:f.jsx(y2,{to:"/",replace:!0})},cM=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #6e8efb;
  background-color: #f5f5f5;
`,dM=U.div`
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
`,hM=U.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 400px;
  padding: 1.5rem;
`,fM=U.h3`
  color: #333;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
`,pM=U.div`
  margin-bottom: 1.5rem;
`,mM=U.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`,KI=U.button`
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
`,gM=U(KI)`
  background-color: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #eee;
  }
`,yM=U(KI)`
  background-color: #4caf50;
  color: white;
  border: 1px solid #43a047;
  
  &:hover {
    background-color: #43a047;
  }
`,vM=U.textarea`
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
`;function _M(){const[t,e]=N.useState(null),[n,r]=N.useState(null),[i,s]=N.useState(null),[o,l]=N.useState(!1),[u,d]=N.useState(null),[p,g]=N.useState(!1),[y,E]=N.useState(!1),[A,P]=N.useState(null),[L,w]=N.useState(""),[v,x]=N.useState(!1);N.useEffect(()=>{const I=qr.currentUser;if(I){const C={uid:I.uid,email:I.email,displayName:I.displayName||I.email.split("@")[0]};e(C),b(I.uid)}},[]);const b=async I=>{if(I)try{g(!0);const C=An(At,"users",I),j=await DT(C);if(j.exists()){const R=j.data();d(R),await M(I)}else console.log("No user data found!")}catch(C){console.error("Error fetching user data:",C)}finally{g(!1)}},M=async I=>{try{const C=Oo(At,"attendance"),j=om(C,am("userId","==",I),Hb("timestamp","desc"),qb(1)),R=await dd(j);if(R.empty)r(null);else{const S=R.docs[0].data();s(S),S.type==="In"?r("In"):r("Out")}}catch(C){console.error("Error checking attendance status:",C)}},V=async I=>{o||(P(I),E(!0))},k=async()=>{if(v||!(t!=null&&t.uid))return;const I=A;try{x(!0);const C=Oo(At,"attendance");await FT(C,{userId:t.uid,type:I,timestamp:Ge.now(),note:L.trim()||null}),r(I),s({type:I,timestamp:Ge.now(),note:L.trim()||null}),Y.success(`Time ${I} recorded successfully`),E(!1),w(""),P(null)}catch(C){console.error(`Error recording time ${I}:`,C),Y.error(`Failed to record time ${I}`)}finally{x(!1)}},_=({children:I})=>f.jsx(uM,{children:f.jsxs(lM,{user:t,userData:u,setUserData:d,attendanceStatus:n,loading:o,handleTimeInOut:V,lastRecord:i,children:[I,y&&f.jsx(dM,{children:f.jsxs(hM,{children:[f.jsxs(fM,{children:["Confirm Time ",A]}),f.jsxs(pM,{children:[f.jsxs("p",{children:["Are you sure you want to record Time ",A,"?"]}),f.jsx(vM,{placeholder:"Add a note (optional)",value:L,onChange:C=>w(C.target.value)})]}),f.jsxs(mM,{children:[f.jsx(gM,{onClick:()=>{E(!1),w(""),P(null)},disabled:v,children:"Cancel"}),f.jsx(yM,{onClick:k,disabled:v,children:v?"Processing...":"Confirm"})]})]})})]})});return f.jsx(f.Fragment,{children:f.jsx(KN,{children:f.jsxs(BO,{children:[f.jsx(GA,{children:f.jsxs(UA,{children:[f.jsx(Un,{path:"/",element:f.jsx(W3,{})}),f.jsx(Un,{path:"/register",element:f.jsx(J3,{})}),f.jsx(Un,{path:"/dashboard",element:f.jsx(_,{children:f.jsx(iO,{userData:u})})}),f.jsx(Un,{path:"/schedule",element:f.jsx(_,{children:f.jsx(uO,{})})}),f.jsx(Un,{path:"/attendance",element:f.jsx(_,{children:f.jsx(dO,{attendanceStatus:n,lastRecord:i})})}),f.jsx(Un,{path:"/profile",element:f.jsx(_,{children:f.jsx(gO,{user:t,userData:u,setUserData:d})})}),f.jsx(Un,{path:"/registration-requests",element:f.jsx(_,{children:f.jsx(EO,{})})}),f.jsx(Un,{path:"/user-management",element:f.jsx(_,{children:f.jsx($O,{})})}),f.jsx(Un,{path:"*",element:f.jsx(y2,{to:"/dashboard",replace:!0})})]})}),f.jsx(ym,{position:"top-right",autoClose:3e3})]})})})}o2(document.getElementById("root")).render(f.jsx(N.StrictMode,{children:f.jsx(_M,{})}));
