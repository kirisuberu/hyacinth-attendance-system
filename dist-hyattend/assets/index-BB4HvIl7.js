function k8(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function E8(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $_={exports:{}},fd={},z_={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sl=Symbol.for("react.element"),w8=Symbol.for("react.portal"),T8=Symbol.for("react.fragment"),I8=Symbol.for("react.strict_mode"),x8=Symbol.for("react.profiler"),S8=Symbol.for("react.provider"),A8=Symbol.for("react.context"),R8=Symbol.for("react.forward_ref"),L8=Symbol.for("react.suspense"),C8=Symbol.for("react.memo"),P8=Symbol.for("react.lazy"),E1=Symbol.iterator;function b8(t){return t===null||typeof t!="object"?null:(t=E1&&t[E1]||t["@@iterator"],typeof t=="function"?t:null)}var B_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H_=Object.assign,q_={};function bo(t,e,n){this.props=t,this.context=e,this.refs=q_,this.updater=n||B_}bo.prototype.isReactComponent={};bo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function G_(){}G_.prototype=bo.prototype;function pm(t,e,n){this.props=t,this.context=e,this.refs=q_,this.updater=n||B_}var mm=pm.prototype=new G_;mm.constructor=pm;H_(mm,bo.prototype);mm.isPureReactComponent=!0;var w1=Array.isArray,K_=Object.prototype.hasOwnProperty,gm={current:null},Q_={key:!0,ref:!0,__self:!0,__source:!0};function Y_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)K_.call(e,r)&&!Q_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Sl,type:t,key:s,ref:o,props:i,_owner:gm.current}}function N8(t,e){return{$$typeof:Sl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ym(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sl}function j8(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var T1=/\/+/g;function jh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?j8(""+t.key):e.toString(36)}function Uu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Sl:case w8:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+jh(o,0):r,w1(i)?(n="",t!=null&&(n=t.replace(T1,"$&/")+"/"),Uu(i,e,n,"",function(d){return d})):i!=null&&(ym(i)&&(i=N8(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(T1,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",w1(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+jh(s,l);o+=Uu(s,e,n,u,i)}else if(u=b8(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+jh(s,l++),o+=Uu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function au(t,e,n){if(t==null)return t;var r=[],i=0;return Uu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function D8(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},Wu={transition:null},O8={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:Wu,ReactCurrentOwner:gm};function X_(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:au,forEach:function(t,e,n){au(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return au(t,function(){e++}),e},toArray:function(t){return au(t,function(e){return e})||[]},only:function(t){if(!ym(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=bo;ie.Fragment=T8;ie.Profiler=x8;ie.PureComponent=pm;ie.StrictMode=I8;ie.Suspense=L8;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O8;ie.act=X_;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=H_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)K_.call(e,u)&&!Q_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Sl,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:A8,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:S8,_context:t},t.Consumer=t};ie.createElement=Y_;ie.createFactory=function(t){var e=Y_.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:R8,render:t}};ie.isValidElement=ym;ie.lazy=function(t){return{$$typeof:P8,_payload:{_status:-1,_result:t},_init:D8}};ie.memo=function(t,e){return{$$typeof:C8,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Wu.transition;Wu.transition={};try{t()}finally{Wu.transition=e}};ie.unstable_act=X_;ie.useCallback=function(t,e){return Tt.current.useCallback(t,e)};ie.useContext=function(t){return Tt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Tt.current.useEffect(t,e)};ie.useId=function(){return Tt.current.useId()};ie.useImperativeHandle=function(t,e,n){return Tt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Tt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Tt.current.useReducer(t,e,n)};ie.useRef=function(t){return Tt.current.useRef(t)};ie.useState=function(t){return Tt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Tt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Tt.current.useTransition()};ie.version="18.3.1";z_.exports=ie;var j=z_.exports;const c=E8(j),M8=k8({__proto__:null,default:c},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V8=j,F8=Symbol.for("react.element"),U8=Symbol.for("react.fragment"),W8=Object.prototype.hasOwnProperty,$8=V8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z8={key:!0,ref:!0,__self:!0,__source:!0};function Z_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)W8.call(e,r)&&!z8.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:F8,type:t,key:s,ref:o,props:i,_owner:$8.current}}fd.Fragment=U8;fd.jsx=Z_;fd.jsxs=Z_;$_.exports=fd;var m=$_.exports,J_={exports:{}},qt={},ek={exports:{}},tk={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var J=z.length;z.push(Q);e:for(;0<J;){var ge=J-1>>>1,se=z[ge];if(0<i(se,Q))z[ge]=Q,z[J]=se,J=ge;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],J=z.pop();if(J!==Q){z[0]=J;e:for(var ge=0,se=z.length,Ae=se>>>1;ge<Ae;){var Mt=2*(ge+1)-1,xt=z[Mt],yt=Mt+1,St=z[yt];if(0>i(xt,J))yt<se&&0>i(St,xt)?(z[ge]=St,z[yt]=J,ge=yt):(z[ge]=xt,z[Mt]=J,ge=Mt);else if(yt<se&&0>i(St,J))z[ge]=St,z[yt]=J,ge=yt;else break e}}return Q}function i(z,Q){var J=z.sortIndex-Q.sortIndex;return J!==0?J:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],f=1,g=null,y=3,E=!1,A=!1,C=!1,L=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var Q=n(d);Q!==null;){if(Q.callback===null)r(d);else if(Q.startTime<=z)r(d),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(d)}}function P(z){if(C=!1,x(z),!A)if(n(u)!==null)A=!0,he(D);else{var Q=n(d);Q!==null&&me(P,Q.startTime-z)}}function D(z,Q){A=!1,C&&(C=!1,_(k),k=-1),E=!0;var J=y;try{for(x(Q),g=n(u);g!==null&&(!(g.expirationTime>Q)||z&&!b());){var ge=g.callback;if(typeof ge=="function"){g.callback=null,y=g.priorityLevel;var se=ge(g.expirationTime<=Q);Q=t.unstable_now(),typeof se=="function"?g.callback=se:g===n(u)&&r(u),x(Q)}else r(u);g=n(u)}if(g!==null)var Ae=!0;else{var Mt=n(d);Mt!==null&&me(P,Mt.startTime-Q),Ae=!1}return Ae}finally{g=null,y=J,E=!1}}var M=!1,w=null,k=-1,S=5,R=-1;function b(){return!(t.unstable_now()-R<S)}function N(){if(w!==null){var z=t.unstable_now();R=z;var Q=!0;try{Q=w(!0,z)}finally{Q?I():(M=!1,w=null)}}else M=!1}var I;if(typeof v=="function")I=function(){v(N)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,pe=Z.port2;Z.port1.onmessage=N,I=function(){pe.postMessage(null)}}else I=function(){L(N,0)};function he(z){w=z,M||(M=!0,I())}function me(z,Q){k=L(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){A||E||(A=!0,he(D))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var J=y;y=Q;try{return z()}finally{y=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=y;y=z;try{return Q()}finally{y=J}},t.unstable_scheduleCallback=function(z,Q,J){var ge=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ge+J:ge):J=ge,z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=J+se,z={id:f++,callback:Q,priorityLevel:z,startTime:J,expirationTime:se,sortIndex:-1},J>ge?(z.sortIndex=J,e(d,z),n(u)===null&&z===n(d)&&(C?(_(k),k=-1):C=!0,me(P,J-ge))):(z.sortIndex=se,e(u,z),A||E||(A=!0,he(D))),z},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(z){var Q=y;return function(){var J=y;y=Q;try{return z.apply(this,arguments)}finally{y=J}}}})(tk);ek.exports=tk;var B8=ek.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H8=j,Ht=B8;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nk=new Set,Ga={};function Qi(t,e){ho(t,e),ho(t+"Capture",e)}function ho(t,e){for(Ga[t]=e,t=0;t<e.length;t++)nk.add(e[t])}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mf=Object.prototype.hasOwnProperty,q8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I1={},x1={};function G8(t){return Mf.call(x1,t)?!0:Mf.call(I1,t)?!1:q8.test(t)?x1[t]=!0:(I1[t]=!0,!1)}function K8(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Q8(t,e,n,r){if(e===null||typeof e>"u"||K8(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new It(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new It(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new It(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new It(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new It(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new It(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new It(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new It(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new It(t,5,!1,t.toLowerCase(),null,!1,!1)});var vm=/[\-:]([a-z])/g;function _m(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vm,_m);it[e]=new It(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vm,_m);it[e]=new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vm,_m);it[e]=new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new It(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new It(t,1,!1,t.toLowerCase(),null,!0,!0)});function km(t,e,n,r){var i=it.hasOwnProperty(e)?it[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Q8(e,n,i,r)&&(n=null),r||i===null?G8(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fr=H8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lu=Symbol.for("react.element"),Ws=Symbol.for("react.portal"),$s=Symbol.for("react.fragment"),Em=Symbol.for("react.strict_mode"),Vf=Symbol.for("react.profiler"),rk=Symbol.for("react.provider"),ik=Symbol.for("react.context"),wm=Symbol.for("react.forward_ref"),Ff=Symbol.for("react.suspense"),Uf=Symbol.for("react.suspense_list"),Tm=Symbol.for("react.memo"),Tr=Symbol.for("react.lazy"),sk=Symbol.for("react.offscreen"),S1=Symbol.iterator;function ia(t){return t===null||typeof t!="object"?null:(t=S1&&t[S1]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,Dh;function ga(t){if(Dh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dh=e&&e[1]||""}return`
`+Dh+t}var Oh=!1;function Mh(t,e){if(!t||Oh)return"";Oh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Oh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ga(t):""}function Y8(t){switch(t.tag){case 5:return ga(t.type);case 16:return ga("Lazy");case 13:return ga("Suspense");case 19:return ga("SuspenseList");case 0:case 2:case 15:return t=Mh(t.type,!1),t;case 11:return t=Mh(t.type.render,!1),t;case 1:return t=Mh(t.type,!0),t;default:return""}}function Wf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $s:return"Fragment";case Ws:return"Portal";case Vf:return"Profiler";case Em:return"StrictMode";case Ff:return"Suspense";case Uf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ik:return(t.displayName||"Context")+".Consumer";case rk:return(t._context.displayName||"Context")+".Provider";case wm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tm:return e=t.displayName||null,e!==null?e:Wf(t.type)||"Memo";case Tr:e=t._payload,t=t._init;try{return Wf(t(e))}catch{}}return null}function X8(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wf(e);case 8:return e===Em?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ok(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Z8(t){var e=ok(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uu(t){t._valueTracker||(t._valueTracker=Z8(t))}function ak(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ok(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function pc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $f(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function A1(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lk(t,e){e=e.checked,e!=null&&km(t,"checked",e,!1)}function zf(t,e){lk(t,e);var n=Xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bf(t,e.type,Xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function R1(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bf(t,e,n){(e!=="number"||pc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ya=Array.isArray;function to(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Hf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function L1(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(ya(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xr(n)}}function uk(t,e){var n=Xr(e.value),r=Xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function C1(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ck(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ck(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cu,dk=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cu=cu||document.createElement("div"),cu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var La={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J8=["Webkit","ms","Moz","O"];Object.keys(La).forEach(function(t){J8.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),La[e]=La[t]})});function hk(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||La.hasOwnProperty(t)&&La[t]?(""+e).trim():e+"px"}function fk(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hk(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ex=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gf(t,e){if(e){if(ex[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function Kf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qf=null;function Im(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yf=null,no=null,ro=null;function P1(t){if(t=Ll(t)){if(typeof Yf!="function")throw Error($(280));var e=t.stateNode;e&&(e=vd(e),Yf(t.stateNode,t.type,e))}}function pk(t){no?ro?ro.push(t):ro=[t]:no=t}function mk(){if(no){var t=no,e=ro;if(ro=no=null,P1(t),e)for(t=0;t<e.length;t++)P1(e[t])}}function gk(t,e){return t(e)}function yk(){}var Vh=!1;function vk(t,e,n){if(Vh)return t(e,n);Vh=!0;try{return gk(t,e,n)}finally{Vh=!1,(no!==null||ro!==null)&&(yk(),mk())}}function Qa(t,e){var n=t.stateNode;if(n===null)return null;var r=vd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var Xf=!1;if(sr)try{var sa={};Object.defineProperty(sa,"passive",{get:function(){Xf=!0}}),window.addEventListener("test",sa,sa),window.removeEventListener("test",sa,sa)}catch{Xf=!1}function tx(t,e,n,r,i,s,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var Ca=!1,mc=null,gc=!1,Zf=null,nx={onError:function(t){Ca=!0,mc=t}};function rx(t,e,n,r,i,s,o,l,u){Ca=!1,mc=null,tx.apply(nx,arguments)}function ix(t,e,n,r,i,s,o,l,u){if(rx.apply(this,arguments),Ca){if(Ca){var d=mc;Ca=!1,mc=null}else throw Error($(198));gc||(gc=!0,Zf=d)}}function Yi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _k(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function b1(t){if(Yi(t)!==t)throw Error($(188))}function sx(t){var e=t.alternate;if(!e){if(e=Yi(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return b1(i),t;if(s===r)return b1(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function kk(t){return t=sx(t),t!==null?Ek(t):null}function Ek(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ek(t);if(e!==null)return e;t=t.sibling}return null}var wk=Ht.unstable_scheduleCallback,N1=Ht.unstable_cancelCallback,ox=Ht.unstable_shouldYield,ax=Ht.unstable_requestPaint,Fe=Ht.unstable_now,lx=Ht.unstable_getCurrentPriorityLevel,xm=Ht.unstable_ImmediatePriority,Tk=Ht.unstable_UserBlockingPriority,yc=Ht.unstable_NormalPriority,ux=Ht.unstable_LowPriority,Ik=Ht.unstable_IdlePriority,pd=null,Pn=null;function cx(t){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(pd,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:fx,dx=Math.log,hx=Math.LN2;function fx(t){return t>>>=0,t===0?32:31-(dx(t)/hx|0)|0}var du=64,hu=4194304;function va(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=va(l):(s&=o,s!==0&&(r=va(s)))}else o=n&~i,o!==0?r=va(o):s!==0&&(r=va(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),i=1<<n,r|=t[n],e&=~i;return r}function px(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=px(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Jf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xk(){var t=du;return du<<=1,!(du&4194240)&&(du=64),t}function Fh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Al(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function gx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Sm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function Sk(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ak,Am,Rk,Lk,Ck,ep=!1,fu=[],Or=null,Mr=null,Vr=null,Ya=new Map,Xa=new Map,xr=[],yx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function j1(t,e){switch(t){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":Ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xa.delete(e.pointerId)}}function oa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ll(e),e!==null&&Am(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function vx(t,e,n,r,i){switch(e){case"focusin":return Or=oa(Or,t,e,n,r,i),!0;case"dragenter":return Mr=oa(Mr,t,e,n,r,i),!0;case"mouseover":return Vr=oa(Vr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ya.set(s,oa(Ya.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xa.set(s,oa(Xa.get(s)||null,t,e,n,r,i)),!0}return!1}function Pk(t){var e=Ii(t.target);if(e!==null){var n=Yi(e);if(n!==null){if(e=n.tag,e===13){if(e=_k(n),e!==null){t.blockedOn=e,Ck(t.priority,function(){Rk(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $u(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=tp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Qf=r,n.target.dispatchEvent(r),Qf=null}else return e=Ll(n),e!==null&&Am(e),t.blockedOn=n,!1;e.shift()}return!0}function D1(t,e,n){$u(t)&&n.delete(e)}function _x(){ep=!1,Or!==null&&$u(Or)&&(Or=null),Mr!==null&&$u(Mr)&&(Mr=null),Vr!==null&&$u(Vr)&&(Vr=null),Ya.forEach(D1),Xa.forEach(D1)}function aa(t,e){t.blockedOn===e&&(t.blockedOn=null,ep||(ep=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,_x)))}function Za(t){function e(i){return aa(i,t)}if(0<fu.length){aa(fu[0],t);for(var n=1;n<fu.length;n++){var r=fu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Or!==null&&aa(Or,t),Mr!==null&&aa(Mr,t),Vr!==null&&aa(Vr,t),Ya.forEach(e),Xa.forEach(e),n=0;n<xr.length;n++)r=xr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)Pk(n),n.blockedOn===null&&xr.shift()}var io=fr.ReactCurrentBatchConfig,_c=!0;function kx(t,e,n,r){var i=ye,s=io.transition;io.transition=null;try{ye=1,Rm(t,e,n,r)}finally{ye=i,io.transition=s}}function Ex(t,e,n,r){var i=ye,s=io.transition;io.transition=null;try{ye=4,Rm(t,e,n,r)}finally{ye=i,io.transition=s}}function Rm(t,e,n,r){if(_c){var i=tp(t,e,n,r);if(i===null)Qh(t,e,r,kc,n),j1(t,r);else if(vx(i,t,e,n,r))r.stopPropagation();else if(j1(t,r),e&4&&-1<yx.indexOf(t)){for(;i!==null;){var s=Ll(i);if(s!==null&&Ak(s),s=tp(t,e,n,r),s===null&&Qh(t,e,r,kc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Qh(t,e,r,null,n)}}var kc=null;function tp(t,e,n,r){if(kc=null,t=Im(r),t=Ii(t),t!==null)if(e=Yi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_k(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kc=t,null}function bk(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lx()){case xm:return 1;case Tk:return 4;case yc:case ux:return 16;case Ik:return 536870912;default:return 16}default:return 16}}var Cr=null,Lm=null,zu=null;function Nk(){if(zu)return zu;var t,e=Lm,n=e.length,r,i="value"in Cr?Cr.value:Cr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zu=i.slice(t,1<r?1-r:void 0)}function Bu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pu(){return!0}function O1(){return!1}function Gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pu:O1,this.isPropagationStopped=O1,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pu)},persist:function(){},isPersistent:pu}),e}var No={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cm=Gt(No),Rl=be({},No,{view:0,detail:0}),wx=Gt(Rl),Uh,Wh,la,md=be({},Rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==la&&(la&&t.type==="mousemove"?(Uh=t.screenX-la.screenX,Wh=t.screenY-la.screenY):Wh=Uh=0,la=t),Uh)},movementY:function(t){return"movementY"in t?t.movementY:Wh}}),M1=Gt(md),Tx=be({},md,{dataTransfer:0}),Ix=Gt(Tx),xx=be({},Rl,{relatedTarget:0}),$h=Gt(xx),Sx=be({},No,{animationName:0,elapsedTime:0,pseudoElement:0}),Ax=Gt(Sx),Rx=be({},No,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lx=Gt(Rx),Cx=be({},No,{data:0}),V1=Gt(Cx),Px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Nx[t])?!!e[t]:!1}function Pm(){return jx}var Dx=be({},Rl,{key:function(t){if(t.key){var e=Px[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pm,charCode:function(t){return t.type==="keypress"?Bu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ox=Gt(Dx),Mx=be({},md,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),F1=Gt(Mx),Vx=be({},Rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pm}),Fx=Gt(Vx),Ux=be({},No,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wx=Gt(Ux),$x=be({},md,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zx=Gt($x),Bx=[9,13,27,32],bm=sr&&"CompositionEvent"in window,Pa=null;sr&&"documentMode"in document&&(Pa=document.documentMode);var Hx=sr&&"TextEvent"in window&&!Pa,jk=sr&&(!bm||Pa&&8<Pa&&11>=Pa),U1=" ",W1=!1;function Dk(t,e){switch(t){case"keyup":return Bx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ok(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zs=!1;function qx(t,e){switch(t){case"compositionend":return Ok(e);case"keypress":return e.which!==32?null:(W1=!0,U1);case"textInput":return t=e.data,t===U1&&W1?null:t;default:return null}}function Gx(t,e){if(zs)return t==="compositionend"||!bm&&Dk(t,e)?(t=Nk(),zu=Lm=Cr=null,zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jk&&e.locale!=="ko"?null:e.data;default:return null}}var Kx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Kx[t.type]:e==="textarea"}function Mk(t,e,n,r){pk(r),e=Ec(e,"onChange"),0<e.length&&(n=new Cm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ba=null,Ja=null;function Qx(t){Kk(t,0)}function gd(t){var e=qs(t);if(ak(e))return t}function Yx(t,e){if(t==="change")return e}var Vk=!1;if(sr){var zh;if(sr){var Bh="oninput"in document;if(!Bh){var z1=document.createElement("div");z1.setAttribute("oninput","return;"),Bh=typeof z1.oninput=="function"}zh=Bh}else zh=!1;Vk=zh&&(!document.documentMode||9<document.documentMode)}function B1(){ba&&(ba.detachEvent("onpropertychange",Fk),Ja=ba=null)}function Fk(t){if(t.propertyName==="value"&&gd(Ja)){var e=[];Mk(e,Ja,t,Im(t)),vk(Qx,e)}}function Xx(t,e,n){t==="focusin"?(B1(),ba=e,Ja=n,ba.attachEvent("onpropertychange",Fk)):t==="focusout"&&B1()}function Zx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gd(Ja)}function Jx(t,e){if(t==="click")return gd(e)}function eS(t,e){if(t==="input"||t==="change")return gd(e)}function tS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:tS;function el(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Mf.call(e,i)||!kn(t[i],e[i]))return!1}return!0}function H1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function q1(t,e){var n=H1(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=H1(n)}}function Uk(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Uk(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wk(){for(var t=window,e=pc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pc(t.document)}return e}function Nm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nS(t){var e=Wk(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Uk(n.ownerDocument.documentElement,n)){if(r!==null&&Nm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=q1(n,s);var o=q1(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rS=sr&&"documentMode"in document&&11>=document.documentMode,Bs=null,np=null,Na=null,rp=!1;function G1(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rp||Bs==null||Bs!==pc(r)||(r=Bs,"selectionStart"in r&&Nm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Na&&el(Na,r)||(Na=r,r=Ec(np,"onSelect"),0<r.length&&(e=new Cm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Bs)))}function mu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hs={animationend:mu("Animation","AnimationEnd"),animationiteration:mu("Animation","AnimationIteration"),animationstart:mu("Animation","AnimationStart"),transitionend:mu("Transition","TransitionEnd")},Hh={},$k={};sr&&($k=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function yd(t){if(Hh[t])return Hh[t];if(!Hs[t])return t;var e=Hs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $k)return Hh[t]=e[n];return t}var zk=yd("animationend"),Bk=yd("animationiteration"),Hk=yd("animationstart"),qk=yd("transitionend"),Gk=new Map,K1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(t,e){Gk.set(t,e),Qi(e,[t])}for(var qh=0;qh<K1.length;qh++){var Gh=K1[qh],iS=Gh.toLowerCase(),sS=Gh[0].toUpperCase()+Gh.slice(1);ni(iS,"on"+sS)}ni(zk,"onAnimationEnd");ni(Bk,"onAnimationIteration");ni(Hk,"onAnimationStart");ni("dblclick","onDoubleClick");ni("focusin","onFocus");ni("focusout","onBlur");ni(qk,"onTransitionEnd");ho("onMouseEnter",["mouseout","mouseover"]);ho("onMouseLeave",["mouseout","mouseover"]);ho("onPointerEnter",["pointerout","pointerover"]);ho("onPointerLeave",["pointerout","pointerover"]);Qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oS=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function Q1(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ix(r,e,void 0,t),t.currentTarget=null}function Kk(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Q1(i,l,d),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Q1(i,l,d),s=u}}}if(gc)throw t=Zf,gc=!1,Zf=null,t}function we(t,e){var n=e[lp];n===void 0&&(n=e[lp]=new Set);var r=t+"__bubble";n.has(r)||(Qk(e,t,2,!1),n.add(r))}function Kh(t,e,n){var r=0;e&&(r|=4),Qk(n,t,r,e)}var gu="_reactListening"+Math.random().toString(36).slice(2);function tl(t){if(!t[gu]){t[gu]=!0,nk.forEach(function(n){n!=="selectionchange"&&(oS.has(n)||Kh(n,!1,t),Kh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gu]||(e[gu]=!0,Kh("selectionchange",!1,e))}}function Qk(t,e,n,r){switch(bk(e)){case 1:var i=kx;break;case 4:i=Ex;break;default:i=Rm}n=i.bind(null,e,n,t),i=void 0,!Xf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Qh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ii(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}vk(function(){var d=s,f=Im(n),g=[];e:{var y=Gk.get(t);if(y!==void 0){var E=Cm,A=t;switch(t){case"keypress":if(Bu(n)===0)break e;case"keydown":case"keyup":E=Ox;break;case"focusin":A="focus",E=$h;break;case"focusout":A="blur",E=$h;break;case"beforeblur":case"afterblur":E=$h;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=M1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Ix;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Fx;break;case zk:case Bk:case Hk:E=Ax;break;case qk:E=Wx;break;case"scroll":E=wx;break;case"wheel":E=zx;break;case"copy":case"cut":case"paste":E=Lx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=F1}var C=(e&4)!==0,L=!C&&t==="scroll",_=C?y!==null?y+"Capture":null:y;C=[];for(var v=d,x;v!==null;){x=v;var P=x.stateNode;if(x.tag===5&&P!==null&&(x=P,_!==null&&(P=Qa(v,_),P!=null&&C.push(nl(v,P,x)))),L)break;v=v.return}0<C.length&&(y=new E(y,A,null,n,f),g.push({event:y,listeners:C}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",y&&n!==Qf&&(A=n.relatedTarget||n.fromElement)&&(Ii(A)||A[or]))break e;if((E||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,E?(A=n.relatedTarget||n.toElement,E=d,A=A?Ii(A):null,A!==null&&(L=Yi(A),A!==L||A.tag!==5&&A.tag!==6)&&(A=null)):(E=null,A=d),E!==A)){if(C=M1,P="onMouseLeave",_="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(C=F1,P="onPointerLeave",_="onPointerEnter",v="pointer"),L=E==null?y:qs(E),x=A==null?y:qs(A),y=new C(P,v+"leave",E,n,f),y.target=L,y.relatedTarget=x,P=null,Ii(f)===d&&(C=new C(_,v+"enter",A,n,f),C.target=x,C.relatedTarget=L,P=C),L=P,E&&A)t:{for(C=E,_=A,v=0,x=C;x;x=Cs(x))v++;for(x=0,P=_;P;P=Cs(P))x++;for(;0<v-x;)C=Cs(C),v--;for(;0<x-v;)_=Cs(_),x--;for(;v--;){if(C===_||_!==null&&C===_.alternate)break t;C=Cs(C),_=Cs(_)}C=null}else C=null;E!==null&&Y1(g,y,E,C,!1),A!==null&&L!==null&&Y1(g,L,A,C,!0)}}e:{if(y=d?qs(d):window,E=y.nodeName&&y.nodeName.toLowerCase(),E==="select"||E==="input"&&y.type==="file")var D=Yx;else if($1(y))if(Vk)D=eS;else{D=Zx;var M=Xx}else(E=y.nodeName)&&E.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(D=Jx);if(D&&(D=D(t,d))){Mk(g,D,n,f);break e}M&&M(t,y,d),t==="focusout"&&(M=y._wrapperState)&&M.controlled&&y.type==="number"&&Bf(y,"number",y.value)}switch(M=d?qs(d):window,t){case"focusin":($1(M)||M.contentEditable==="true")&&(Bs=M,np=d,Na=null);break;case"focusout":Na=np=Bs=null;break;case"mousedown":rp=!0;break;case"contextmenu":case"mouseup":case"dragend":rp=!1,G1(g,n,f);break;case"selectionchange":if(rS)break;case"keydown":case"keyup":G1(g,n,f)}var w;if(bm)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else zs?Dk(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(jk&&n.locale!=="ko"&&(zs||k!=="onCompositionStart"?k==="onCompositionEnd"&&zs&&(w=Nk()):(Cr=f,Lm="value"in Cr?Cr.value:Cr.textContent,zs=!0)),M=Ec(d,k),0<M.length&&(k=new V1(k,t,null,n,f),g.push({event:k,listeners:M}),w?k.data=w:(w=Ok(n),w!==null&&(k.data=w)))),(w=Hx?qx(t,n):Gx(t,n))&&(d=Ec(d,"onBeforeInput"),0<d.length&&(f=new V1("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:d}),f.data=w))}Kk(g,e)})}function nl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ec(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qa(t,n),s!=null&&r.unshift(nl(t,s,i)),s=Qa(t,e),s!=null&&r.push(nl(t,s,i))),t=t.return}return r}function Cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Y1(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=Qa(n,s),u!=null&&o.unshift(nl(n,u,l))):i||(u=Qa(n,s),u!=null&&o.push(nl(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function X1(t){return(typeof t=="string"?t:""+t).replace(aS,`
`).replace(lS,"")}function yu(t,e,n){if(e=X1(e),X1(t)!==e&&n)throw Error($(425))}function wc(){}var ip=null,sp=null;function op(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ap=typeof setTimeout=="function"?setTimeout:void 0,uS=typeof clearTimeout=="function"?clearTimeout:void 0,Z1=typeof Promise=="function"?Promise:void 0,cS=typeof queueMicrotask=="function"?queueMicrotask:typeof Z1<"u"?function(t){return Z1.resolve(null).then(t).catch(dS)}:ap;function dS(t){setTimeout(function(){throw t})}function Yh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Za(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Za(e)}function Fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function J1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var jo=Math.random().toString(36).slice(2),Rn="__reactFiber$"+jo,rl="__reactProps$"+jo,or="__reactContainer$"+jo,lp="__reactEvents$"+jo,hS="__reactListeners$"+jo,fS="__reactHandles$"+jo;function Ii(t){var e=t[Rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[or]||n[Rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=J1(t);t!==null;){if(n=t[Rn])return n;t=J1(t)}return e}t=n,n=t.parentNode}return null}function Ll(t){return t=t[Rn]||t[or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function vd(t){return t[rl]||null}var up=[],Gs=-1;function ri(t){return{current:t}}function xe(t){0>Gs||(t.current=up[Gs],up[Gs]=null,Gs--)}function ke(t,e){Gs++,up[Gs]=t.current,t.current=e}var Zr={},mt=ri(Zr),bt=ri(!1),Oi=Zr;function fo(t,e){var n=t.type.contextTypes;if(!n)return Zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Nt(t){return t=t.childContextTypes,t!=null}function Tc(){xe(bt),xe(mt)}function ey(t,e,n){if(mt.current!==Zr)throw Error($(168));ke(mt,e),ke(bt,n)}function Yk(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,X8(t)||"Unknown",i));return be({},n,r)}function Ic(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zr,Oi=mt.current,ke(mt,t),ke(bt,bt.current),!0}function ty(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=Yk(t,e,Oi),r.__reactInternalMemoizedMergedChildContext=t,xe(bt),xe(mt),ke(mt,t)):xe(bt),ke(bt,n)}var Kn=null,_d=!1,Xh=!1;function Xk(t){Kn===null?Kn=[t]:Kn.push(t)}function pS(t){_d=!0,Xk(t)}function ii(){if(!Xh&&Kn!==null){Xh=!0;var t=0,e=ye;try{var n=Kn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Kn=null,_d=!1}catch(i){throw Kn!==null&&(Kn=Kn.slice(t+1)),wk(xm,ii),i}finally{ye=e,Xh=!1}}return null}var Ks=[],Qs=0,xc=null,Sc=0,Yt=[],Xt=0,Mi=null,Yn=1,Xn="";function _i(t,e){Ks[Qs++]=Sc,Ks[Qs++]=xc,xc=t,Sc=e}function Zk(t,e,n){Yt[Xt++]=Yn,Yt[Xt++]=Xn,Yt[Xt++]=Mi,Mi=t;var r=Yn;t=Xn;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var s=32-yn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yn=1<<32-yn(e)+i|n<<i|r,Xn=s+t}else Yn=1<<s|n<<i|r,Xn=t}function jm(t){t.return!==null&&(_i(t,1),Zk(t,1,0))}function Dm(t){for(;t===xc;)xc=Ks[--Qs],Ks[Qs]=null,Sc=Ks[--Qs],Ks[Qs]=null;for(;t===Mi;)Mi=Yt[--Xt],Yt[Xt]=null,Xn=Yt[--Xt],Yt[Xt]=null,Yn=Yt[--Xt],Yt[Xt]=null}var zt=null,Wt=null,Re=!1,fn=null;function Jk(t,e){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ny(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zt=t,Wt=Fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zt=t,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mi!==null?{id:Yn,overflow:Xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zt=t,Wt=null,!0):!1;default:return!1}}function cp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dp(t){if(Re){var e=Wt;if(e){var n=e;if(!ny(t,e)){if(cp(t))throw Error($(418));e=Fr(n.nextSibling);var r=zt;e&&ny(t,e)?Jk(r,n):(t.flags=t.flags&-4097|2,Re=!1,zt=t)}}else{if(cp(t))throw Error($(418));t.flags=t.flags&-4097|2,Re=!1,zt=t}}}function ry(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zt=t}function vu(t){if(t!==zt)return!1;if(!Re)return ry(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!op(t.type,t.memoizedProps)),e&&(e=Wt)){if(cp(t))throw eE(),Error($(418));for(;e;)Jk(t,e),e=Fr(e.nextSibling)}if(ry(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wt=Fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wt=null}}else Wt=zt?Fr(t.stateNode.nextSibling):null;return!0}function eE(){for(var t=Wt;t;)t=Fr(t.nextSibling)}function po(){Wt=zt=null,Re=!1}function Om(t){fn===null?fn=[t]:fn.push(t)}var mS=fr.ReactCurrentBatchConfig;function ua(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function _u(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function iy(t){var e=t._init;return e(t._payload)}function tE(t){function e(_,v){if(t){var x=_.deletions;x===null?(_.deletions=[v],_.flags|=16):x.push(v)}}function n(_,v){if(!t)return null;for(;v!==null;)e(_,v),v=v.sibling;return null}function r(_,v){for(_=new Map;v!==null;)v.key!==null?_.set(v.key,v):_.set(v.index,v),v=v.sibling;return _}function i(_,v){return _=zr(_,v),_.index=0,_.sibling=null,_}function s(_,v,x){return _.index=x,t?(x=_.alternate,x!==null?(x=x.index,x<v?(_.flags|=2,v):x):(_.flags|=2,v)):(_.flags|=1048576,v)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,v,x,P){return v===null||v.tag!==6?(v=sf(x,_.mode,P),v.return=_,v):(v=i(v,x),v.return=_,v)}function u(_,v,x,P){var D=x.type;return D===$s?f(_,v,x.props.children,P,x.key):v!==null&&(v.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Tr&&iy(D)===v.type)?(P=i(v,x.props),P.ref=ua(_,v,x),P.return=_,P):(P=Xu(x.type,x.key,x.props,null,_.mode,P),P.ref=ua(_,v,x),P.return=_,P)}function d(_,v,x,P){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=of(x,_.mode,P),v.return=_,v):(v=i(v,x.children||[]),v.return=_,v)}function f(_,v,x,P,D){return v===null||v.tag!==7?(v=Pi(x,_.mode,P,D),v.return=_,v):(v=i(v,x),v.return=_,v)}function g(_,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=sf(""+v,_.mode,x),v.return=_,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case lu:return x=Xu(v.type,v.key,v.props,null,_.mode,x),x.ref=ua(_,null,v),x.return=_,x;case Ws:return v=of(v,_.mode,x),v.return=_,v;case Tr:var P=v._init;return g(_,P(v._payload),x)}if(ya(v)||ia(v))return v=Pi(v,_.mode,x,null),v.return=_,v;_u(_,v)}return null}function y(_,v,x,P){var D=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return D!==null?null:l(_,v,""+x,P);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case lu:return x.key===D?u(_,v,x,P):null;case Ws:return x.key===D?d(_,v,x,P):null;case Tr:return D=x._init,y(_,v,D(x._payload),P)}if(ya(x)||ia(x))return D!==null?null:f(_,v,x,P,null);_u(_,x)}return null}function E(_,v,x,P,D){if(typeof P=="string"&&P!==""||typeof P=="number")return _=_.get(x)||null,l(v,_,""+P,D);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case lu:return _=_.get(P.key===null?x:P.key)||null,u(v,_,P,D);case Ws:return _=_.get(P.key===null?x:P.key)||null,d(v,_,P,D);case Tr:var M=P._init;return E(_,v,x,M(P._payload),D)}if(ya(P)||ia(P))return _=_.get(x)||null,f(v,_,P,D,null);_u(v,P)}return null}function A(_,v,x,P){for(var D=null,M=null,w=v,k=v=0,S=null;w!==null&&k<x.length;k++){w.index>k?(S=w,w=null):S=w.sibling;var R=y(_,w,x[k],P);if(R===null){w===null&&(w=S);break}t&&w&&R.alternate===null&&e(_,w),v=s(R,v,k),M===null?D=R:M.sibling=R,M=R,w=S}if(k===x.length)return n(_,w),Re&&_i(_,k),D;if(w===null){for(;k<x.length;k++)w=g(_,x[k],P),w!==null&&(v=s(w,v,k),M===null?D=w:M.sibling=w,M=w);return Re&&_i(_,k),D}for(w=r(_,w);k<x.length;k++)S=E(w,_,k,x[k],P),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?k:S.key),v=s(S,v,k),M===null?D=S:M.sibling=S,M=S);return t&&w.forEach(function(b){return e(_,b)}),Re&&_i(_,k),D}function C(_,v,x,P){var D=ia(x);if(typeof D!="function")throw Error($(150));if(x=D.call(x),x==null)throw Error($(151));for(var M=D=null,w=v,k=v=0,S=null,R=x.next();w!==null&&!R.done;k++,R=x.next()){w.index>k?(S=w,w=null):S=w.sibling;var b=y(_,w,R.value,P);if(b===null){w===null&&(w=S);break}t&&w&&b.alternate===null&&e(_,w),v=s(b,v,k),M===null?D=b:M.sibling=b,M=b,w=S}if(R.done)return n(_,w),Re&&_i(_,k),D;if(w===null){for(;!R.done;k++,R=x.next())R=g(_,R.value,P),R!==null&&(v=s(R,v,k),M===null?D=R:M.sibling=R,M=R);return Re&&_i(_,k),D}for(w=r(_,w);!R.done;k++,R=x.next())R=E(w,_,k,R.value,P),R!==null&&(t&&R.alternate!==null&&w.delete(R.key===null?k:R.key),v=s(R,v,k),M===null?D=R:M.sibling=R,M=R);return t&&w.forEach(function(N){return e(_,N)}),Re&&_i(_,k),D}function L(_,v,x,P){if(typeof x=="object"&&x!==null&&x.type===$s&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case lu:e:{for(var D=x.key,M=v;M!==null;){if(M.key===D){if(D=x.type,D===$s){if(M.tag===7){n(_,M.sibling),v=i(M,x.props.children),v.return=_,_=v;break e}}else if(M.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Tr&&iy(D)===M.type){n(_,M.sibling),v=i(M,x.props),v.ref=ua(_,M,x),v.return=_,_=v;break e}n(_,M);break}else e(_,M);M=M.sibling}x.type===$s?(v=Pi(x.props.children,_.mode,P,x.key),v.return=_,_=v):(P=Xu(x.type,x.key,x.props,null,_.mode,P),P.ref=ua(_,v,x),P.return=_,_=P)}return o(_);case Ws:e:{for(M=x.key;v!==null;){if(v.key===M)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(_,v.sibling),v=i(v,x.children||[]),v.return=_,_=v;break e}else{n(_,v);break}else e(_,v);v=v.sibling}v=of(x,_.mode,P),v.return=_,_=v}return o(_);case Tr:return M=x._init,L(_,v,M(x._payload),P)}if(ya(x))return A(_,v,x,P);if(ia(x))return C(_,v,x,P);_u(_,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(_,v.sibling),v=i(v,x),v.return=_,_=v):(n(_,v),v=sf(x,_.mode,P),v.return=_,_=v),o(_)):n(_,v)}return L}var mo=tE(!0),nE=tE(!1),Ac=ri(null),Rc=null,Ys=null,Mm=null;function Vm(){Mm=Ys=Rc=null}function Fm(t){var e=Ac.current;xe(Ac),t._currentValue=e}function hp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function so(t,e){Rc=t,Mm=Ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Lt=!0),t.firstContext=null)}function nn(t){var e=t._currentValue;if(Mm!==t)if(t={context:t,memoizedValue:e,next:null},Ys===null){if(Rc===null)throw Error($(308));Ys=t,Rc.dependencies={lanes:0,firstContext:t}}else Ys=Ys.next=t;return e}var xi=null;function Um(t){xi===null?xi=[t]:xi.push(t)}function rE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Um(e)):(n.next=i.next,i.next=n),e.interleaved=n,ar(t,r)}function ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ir=!1;function Wm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ur(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ar(t,n)}return i=r.interleaved,i===null?(e.next=e,Um(r)):(e.next=i.next,i.next=e),r.interleaved=e,ar(t,n)}function Hu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Sm(t,n)}}function sy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Lc(t,e,n,r){var i=t.updateQueue;Ir=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,f=d=u=null,l=s;do{var y=l.lane,E=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,C=l;switch(y=e,E=n,C.tag){case 1:if(A=C.payload,typeof A=="function"){g=A.call(E,g,y);break e}g=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=C.payload,y=typeof A=="function"?A.call(E,g,y):A,y==null)break e;g=be({},g,y);break e;case 2:Ir=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else E={eventTime:E,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=E,u=g):f=f.next=E,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=g),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Fi|=o,t.lanes=o,t.memoizedState=g}}function oy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var Cl={},bn=ri(Cl),il=ri(Cl),sl=ri(Cl);function Si(t){if(t===Cl)throw Error($(174));return t}function $m(t,e){switch(ke(sl,e),ke(il,t),ke(bn,Cl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qf(e,t)}xe(bn),ke(bn,e)}function go(){xe(bn),xe(il),xe(sl)}function sE(t){Si(sl.current);var e=Si(bn.current),n=qf(e,t.type);e!==n&&(ke(il,t),ke(bn,n))}function zm(t){il.current===t&&(xe(bn),xe(il))}var Ce=ri(0);function Cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zh=[];function Bm(){for(var t=0;t<Zh.length;t++)Zh[t]._workInProgressVersionPrimary=null;Zh.length=0}var qu=fr.ReactCurrentDispatcher,Jh=fr.ReactCurrentBatchConfig,Vi=0,Pe=null,qe=null,Qe=null,Pc=!1,ja=!1,ol=0,gS=0;function ut(){throw Error($(321))}function Hm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function qm(t,e,n,r,i,s){if(Vi=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qu.current=t===null||t.memoizedState===null?kS:ES,t=n(r,i),ja){s=0;do{if(ja=!1,ol=0,25<=s)throw Error($(301));s+=1,Qe=qe=null,e.updateQueue=null,qu.current=wS,t=n(r,i)}while(ja)}if(qu.current=bc,e=qe!==null&&qe.next!==null,Vi=0,Qe=qe=Pe=null,Pc=!1,e)throw Error($(300));return t}function Gm(){var t=ol!==0;return ol=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Pe.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function rn(){if(qe===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var e=Qe===null?Pe.memoizedState:Qe.next;if(e!==null)Qe=e,qe=t;else{if(t===null)throw Error($(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Qe===null?Pe.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function al(t,e){return typeof e=="function"?e(t):e}function ef(t){var e=rn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,d=s;do{var f=d.lane;if((Vi&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var g={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,Pe.lanes|=f,Fi|=f}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=l,kn(r,e.memoizedState)||(Lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,Fi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tf(t){var e=rn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kn(s,e.memoizedState)||(Lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function oE(){}function aE(t,e){var n=Pe,r=rn(),i=e(),s=!kn(r.memoizedState,i);if(s&&(r.memoizedState=i,Lt=!0),r=r.queue,Km(cE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,ll(9,uE.bind(null,n,r,i,e),void 0,null),Xe===null)throw Error($(349));Vi&30||lE(n,e,i)}return i}function lE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function uE(t,e,n,r){e.value=n,e.getSnapshot=r,dE(e)&&hE(t)}function cE(t,e,n){return n(function(){dE(e)&&hE(t)})}function dE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function hE(t){var e=ar(t,1);e!==null&&vn(e,t,1,-1)}function ay(t){var e=Sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:al,lastRenderedState:t},e.queue=t,t=t.dispatch=_S.bind(null,Pe,t),[e.memoizedState,t]}function ll(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function fE(){return rn().memoizedState}function Gu(t,e,n,r){var i=Sn();Pe.flags|=t,i.memoizedState=ll(1|e,n,void 0,r===void 0?null:r)}function kd(t,e,n,r){var i=rn();r=r===void 0?null:r;var s=void 0;if(qe!==null){var o=qe.memoizedState;if(s=o.destroy,r!==null&&Hm(r,o.deps)){i.memoizedState=ll(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=ll(1|e,n,s,r)}function ly(t,e){return Gu(8390656,8,t,e)}function Km(t,e){return kd(2048,8,t,e)}function pE(t,e){return kd(4,2,t,e)}function mE(t,e){return kd(4,4,t,e)}function gE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yE(t,e,n){return n=n!=null?n.concat([t]):null,kd(4,4,gE.bind(null,e,t),n)}function Qm(){}function vE(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function _E(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function kE(t,e,n){return Vi&21?(kn(n,e)||(n=xk(),Pe.lanes|=n,Fi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Lt=!0),t.memoizedState=n)}function yS(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=Jh.transition;Jh.transition={};try{t(!1),e()}finally{ye=n,Jh.transition=r}}function EE(){return rn().memoizedState}function vS(t,e,n){var r=$r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wE(t))TE(e,n);else if(n=rE(t,e,n,r),n!==null){var i=Et();vn(n,t,r,i),IE(n,e,r)}}function _S(t,e,n){var r=$r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wE(t))TE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,kn(l,o)){var u=e.interleaved;u===null?(i.next=i,Um(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=rE(t,e,i,r),n!==null&&(i=Et(),vn(n,t,r,i),IE(n,e,r))}}function wE(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function TE(t,e){ja=Pc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function IE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Sm(t,n)}}var bc={readContext:nn,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},kS={readContext:nn,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:nn,useEffect:ly,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gu(4194308,4,gE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gu(4,2,t,e)},useMemo:function(t,e){var n=Sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vS.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:ay,useDebugValue:Qm,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=ay(!1),e=t[0];return t=yS.bind(null,t[1]),Sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=Sn();if(Re){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),Xe===null)throw Error($(349));Vi&30||lE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ly(cE.bind(null,r,s,t),[t]),r.flags|=2048,ll(9,uE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Sn(),e=Xe.identifierPrefix;if(Re){var n=Xn,r=Yn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ol++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ES={readContext:nn,useCallback:vE,useContext:nn,useEffect:Km,useImperativeHandle:yE,useInsertionEffect:pE,useLayoutEffect:mE,useMemo:_E,useReducer:ef,useRef:fE,useState:function(){return ef(al)},useDebugValue:Qm,useDeferredValue:function(t){var e=rn();return kE(e,qe.memoizedState,t)},useTransition:function(){var t=ef(al)[0],e=rn().memoizedState;return[t,e]},useMutableSource:oE,useSyncExternalStore:aE,useId:EE,unstable_isNewReconciler:!1},wS={readContext:nn,useCallback:vE,useContext:nn,useEffect:Km,useImperativeHandle:yE,useInsertionEffect:pE,useLayoutEffect:mE,useMemo:_E,useReducer:tf,useRef:fE,useState:function(){return tf(al)},useDebugValue:Qm,useDeferredValue:function(t){var e=rn();return qe===null?e.memoizedState=t:kE(e,qe.memoizedState,t)},useTransition:function(){var t=tf(al)[0],e=rn().memoizedState;return[t,e]},useMutableSource:oE,useSyncExternalStore:aE,useId:EE,unstable_isNewReconciler:!1};function dn(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ed={isMounted:function(t){return(t=t._reactInternals)?Yi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=$r(t),s=nr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,i),e!==null&&(vn(e,t,i,r),Hu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=$r(t),s=nr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,i),e!==null&&(vn(e,t,i,r),Hu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=$r(t),i=nr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ur(t,i,r),e!==null&&(vn(e,t,r,n),Hu(e,t,r))}};function uy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!el(n,r)||!el(i,s):!0}function xE(t,e,n){var r=!1,i=Zr,s=e.contextType;return typeof s=="object"&&s!==null?s=nn(s):(i=Nt(e)?Oi:mt.current,r=e.contextTypes,s=(r=r!=null)?fo(t,i):Zr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ed,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function cy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ed.enqueueReplaceState(e,e.state,null)}function pp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Wm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=nn(s):(s=Nt(e)?Oi:mt.current,i.context=fo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ed.enqueueReplaceState(i,i.state,null),Lc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function yo(t,e){try{var n="",r=e;do n+=Y8(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function nf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var TS=typeof WeakMap=="function"?WeakMap:Map;function SE(t,e,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){jc||(jc=!0,xp=r),mp(t,e)},n}function AE(t,e,n){n=nr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){mp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mp(t,e),typeof r!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new TS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=MS.bind(null,t,e,n),e.then(t,t))}function hy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nr(-1,1),e.tag=2,Ur(n,e,1))),n.lanes|=1),t)}var IS=fr.ReactCurrentOwner,Lt=!1;function kt(t,e,n,r){e.child=t===null?nE(e,null,n,r):mo(e,t.child,n,r)}function py(t,e,n,r,i){n=n.render;var s=e.ref;return so(e,i),r=qm(t,e,n,r,s,i),n=Gm(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,lr(t,e,i)):(Re&&n&&jm(e),e.flags|=1,kt(t,e,r,i),e.child)}function my(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!rg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,RE(t,e,s,r,i)):(t=Xu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:el,n(o,r)&&t.ref===e.ref)return lr(t,e,i)}return e.flags|=1,t=zr(s,r),t.ref=e.ref,t.return=e,e.child=t}function RE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(el(s,r)&&t.ref===e.ref)if(Lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Lt=!0);else return e.lanes=t.lanes,lr(t,e,i)}return gp(t,e,n,r,i)}function LE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Zs,Ut),Ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ke(Zs,Ut),Ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ke(Zs,Ut),Ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ke(Zs,Ut),Ut|=r;return kt(t,e,i,n),e.child}function CE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gp(t,e,n,r,i){var s=Nt(n)?Oi:mt.current;return s=fo(e,s),so(e,i),n=qm(t,e,n,r,s,i),r=Gm(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,lr(t,e,i)):(Re&&r&&jm(e),e.flags|=1,kt(t,e,n,i),e.child)}function gy(t,e,n,r,i){if(Nt(n)){var s=!0;Ic(e)}else s=!1;if(so(e,i),e.stateNode===null)Ku(t,e),xE(e,n,r),pp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=nn(d):(d=Nt(n)?Oi:mt.current,d=fo(e,d));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&cy(e,o,r,d),Ir=!1;var y=e.memoizedState;o.state=y,Lc(e,r,o,i),u=e.memoizedState,l!==r||y!==u||bt.current||Ir?(typeof f=="function"&&(fp(e,n,f,r),u=e.memoizedState),(l=Ir||uy(e,n,l,r,y,u,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,iE(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:dn(e.type,l),o.props=d,g=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=nn(u):(u=Nt(n)?Oi:mt.current,u=fo(e,u));var E=n.getDerivedStateFromProps;(f=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||y!==u)&&cy(e,o,r,u),Ir=!1,y=e.memoizedState,o.state=y,Lc(e,r,o,i);var A=e.memoizedState;l!==g||y!==A||bt.current||Ir?(typeof E=="function"&&(fp(e,n,E,r),A=e.memoizedState),(d=Ir||uy(e,n,d,r,y,A,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return yp(t,e,n,r,s,i)}function yp(t,e,n,r,i,s){CE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ty(e,n,!1),lr(t,e,s);r=e.stateNode,IS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=mo(e,t.child,null,s),e.child=mo(e,null,l,s)):kt(t,e,l,s),e.memoizedState=r.state,i&&ty(e,n,!0),e.child}function PE(t){var e=t.stateNode;e.pendingContext?ey(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ey(t,e.context,!1),$m(t,e.containerInfo)}function yy(t,e,n,r,i){return po(),Om(i),e.flags|=256,kt(t,e,n,r),e.child}var vp={dehydrated:null,treeContext:null,retryLane:0};function _p(t){return{baseLanes:t,cachePool:null,transitions:null}}function bE(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ke(Ce,i&1),t===null)return dp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Id(o,r,0,null),t=Pi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_p(n),e.memoizedState=vp,t):Ym(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return xS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=zr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=zr(l,s):(s=Pi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_p(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vp,r}return s=t.child,t=s.sibling,r=zr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ym(t,e){return e=Id({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ku(t,e,n,r){return r!==null&&Om(r),mo(e,t.child,null,n),t=Ym(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=nf(Error($(422))),ku(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Id({mode:"visible",children:r.children},i,0,null),s=Pi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&mo(e,t.child,null,o),e.child.memoizedState=_p(o),e.memoizedState=vp,s);if(!(e.mode&1))return ku(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error($(419)),r=nf(s,r,void 0),ku(t,e,o,r)}if(l=(o&t.childLanes)!==0,Lt||l){if(r=Xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ar(t,i),vn(r,t,i,-1))}return ng(),r=nf(Error($(421))),ku(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=VS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Wt=Fr(i.nextSibling),zt=e,Re=!0,fn=null,t!==null&&(Yt[Xt++]=Yn,Yt[Xt++]=Xn,Yt[Xt++]=Mi,Yn=t.id,Xn=t.overflow,Mi=e),e=Ym(e,r.children),e.flags|=4096,e)}function vy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),hp(t.return,e,n)}function rf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function NE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(kt(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vy(t,n,e);else if(t.tag===19)vy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ke(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Cc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),rf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Cc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}rf(e,!0,n,null,s);break;case"together":rf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ku(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function SS(t,e,n){switch(e.tag){case 3:PE(e),po();break;case 5:sE(e);break;case 1:Nt(e.type)&&Ic(e);break;case 4:$m(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ke(Ac,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ke(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?bE(t,e,n):(ke(Ce,Ce.current&1),t=lr(t,e,n),t!==null?t.sibling:null);ke(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return NE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,LE(t,e,n)}return lr(t,e,n)}var jE,kp,DE,OE;jE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kp=function(){};DE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Si(bn.current);var s=null;switch(n){case"input":i=$f(t,i),r=$f(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=Hf(t,i),r=Hf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wc)}Gf(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ga.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ga.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&we("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};OE=function(t,e,n,r){n!==r&&(e.flags|=4)};function ca(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function AS(t,e,n){var r=e.pendingProps;switch(Dm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return Nt(e.type)&&Tc(),ct(e),null;case 3:return r=e.stateNode,go(),xe(bt),xe(mt),Bm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(Rp(fn),fn=null))),kp(t,e),ct(e),null;case 5:zm(e);var i=Si(sl.current);if(n=e.type,t!==null&&e.stateNode!=null)DE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return ct(e),null}if(t=Si(bn.current),vu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Rn]=e,r[rl]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<_a.length;i++)we(_a[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":A1(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":L1(r,s),we("invalid",r)}Gf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&yu(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&yu(r.textContent,l,t),i=["children",""+l]):Ga.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":uu(r),R1(r,s,!0);break;case"textarea":uu(r),C1(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ck(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rn]=e,t[rl]=r,jE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Kf(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<_a.length;i++)we(_a[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":A1(t,r),i=$f(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),we("invalid",t);break;case"textarea":L1(t,r),i=Hf(t,r),we("invalid",t);break;default:i=r}Gf(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?fk(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&dk(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ka(t,u):typeof u=="number"&&Ka(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ga.hasOwnProperty(s)?u!=null&&s==="onScroll"&&we("scroll",t):u!=null&&km(t,s,u,o))}switch(n){case"input":uu(t),R1(t,r,!1);break;case"textarea":uu(t),C1(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?to(t,!!r.multiple,s,!1):r.defaultValue!=null&&to(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)OE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=Si(sl.current),Si(bn.current),vu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rn]=e,(s=r.nodeValue!==n)&&(t=zt,t!==null))switch(t.tag){case 3:yu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rn]=e,e.stateNode=r}return ct(e),null;case 13:if(xe(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Wt!==null&&e.mode&1&&!(e.flags&128))eE(),po(),e.flags|=98560,s=!1;else if(s=vu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[Rn]=e}else po(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),s=!1}else fn!==null&&(Rp(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?Ge===0&&(Ge=3):ng())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return go(),kp(t,e),t===null&&tl(e.stateNode.containerInfo),ct(e),null;case 10:return Fm(e.type._context),ct(e),null;case 17:return Nt(e.type)&&Tc(),ct(e),null;case 19:if(xe(Ce),s=e.memoizedState,s===null)return ct(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ca(s,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cc(t),o!==null){for(e.flags|=128,ca(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ke(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Fe()>vo&&(e.flags|=128,r=!0,ca(s,!1),e.lanes=4194304)}else{if(!r)if(t=Cc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return ct(e),null}else 2*Fe()-s.renderingStartTime>vo&&n!==1073741824&&(e.flags|=128,r=!0,ca(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,n=Ce.current,ke(Ce,r?n&1|2:n&1),e):(ct(e),null);case 22:case 23:return tg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ut&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function RS(t,e){switch(Dm(e),e.tag){case 1:return Nt(e.type)&&Tc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return go(),xe(bt),xe(mt),Bm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zm(e),null;case 13:if(xe(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));po()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Ce),null;case 4:return go(),null;case 10:return Fm(e.type._context),null;case 22:case 23:return tg(),null;case 24:return null;default:return null}}var Eu=!1,ft=!1,LS=typeof WeakSet=="function"?WeakSet:Set,q=null;function Xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function Ep(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var _y=!1;function CS(t,e){if(ip=_c,t=Wk(),Nm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,f=0,g=t,y=null;t:for(;;){for(var E;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(E=g.firstChild)!==null;)y=g,g=E;for(;;){if(g===t)break t;if(y===n&&++d===i&&(l=o),y===s&&++f===r&&(u=o),(E=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(sp={focusedElem:t,selectionRange:n},_c=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var C=A.memoizedProps,L=A.memoizedState,_=e.stateNode,v=_.getSnapshotBeforeUpdate(e.elementType===e.type?C:dn(e.type,C),L);_.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(P){Oe(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return A=_y,_y=!1,A}function Da(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ep(e,n,s)}i=i.next}while(i!==r)}}function wd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ME(t){var e=t.alternate;e!==null&&(t.alternate=null,ME(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rn],delete e[rl],delete e[lp],delete e[hS],delete e[fS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function VE(t){return t.tag===5||t.tag===3||t.tag===4}function ky(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||VE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wc));else if(r!==4&&(t=t.child,t!==null))for(Tp(t,e,n),t=t.sibling;t!==null;)Tp(t,e,n),t=t.sibling}function Ip(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ip(t,e,n),t=t.sibling;t!==null;)Ip(t,e,n),t=t.sibling}var Je=null,hn=!1;function _r(t,e,n){for(n=n.child;n!==null;)FE(t,e,n),n=n.sibling}function FE(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(pd,n)}catch{}switch(n.tag){case 5:ft||Xs(n,e);case 6:var r=Je,i=hn;Je=null,_r(t,e,n),Je=r,hn=i,Je!==null&&(hn?(t=Je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(hn?(t=Je,n=n.stateNode,t.nodeType===8?Yh(t.parentNode,n):t.nodeType===1&&Yh(t,n),Za(t)):Yh(Je,n.stateNode));break;case 4:r=Je,i=hn,Je=n.stateNode.containerInfo,hn=!0,_r(t,e,n),Je=r,hn=i;break;case 0:case 11:case 14:case 15:if(!ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ep(n,e,o),i=i.next}while(i!==r)}_r(t,e,n);break;case 1:if(!ft&&(Xs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,e,l)}_r(t,e,n);break;case 21:_r(t,e,n);break;case 22:n.mode&1?(ft=(r=ft)||n.memoizedState!==null,_r(t,e,n),ft=r):_r(t,e,n);break;default:_r(t,e,n)}}function Ey(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LS),e.forEach(function(r){var i=FS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,hn=!1;break e;case 3:Je=l.stateNode.containerInfo,hn=!0;break e;case 4:Je=l.stateNode.containerInfo,hn=!0;break e}l=l.return}if(Je===null)throw Error($(160));FE(s,o,i),Je=null,hn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){Oe(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)UE(e,t),e=e.sibling}function UE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(un(e,t),xn(t),r&4){try{Da(3,t,t.return),wd(3,t)}catch(C){Oe(t,t.return,C)}try{Da(5,t,t.return)}catch(C){Oe(t,t.return,C)}}break;case 1:un(e,t),xn(t),r&512&&n!==null&&Xs(n,n.return);break;case 5:if(un(e,t),xn(t),r&512&&n!==null&&Xs(n,n.return),t.flags&32){var i=t.stateNode;try{Ka(i,"")}catch(C){Oe(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&lk(i,s),Kf(l,o);var d=Kf(l,s);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?fk(i,g):f==="dangerouslySetInnerHTML"?dk(i,g):f==="children"?Ka(i,g):km(i,f,g,d)}switch(l){case"input":zf(i,s);break;case"textarea":uk(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?to(i,!!s.multiple,E,!1):y!==!!s.multiple&&(s.defaultValue!=null?to(i,!!s.multiple,s.defaultValue,!0):to(i,!!s.multiple,s.multiple?[]:"",!1))}i[rl]=s}catch(C){Oe(t,t.return,C)}}break;case 6:if(un(e,t),xn(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){Oe(t,t.return,C)}}break;case 3:if(un(e,t),xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Za(e.containerInfo)}catch(C){Oe(t,t.return,C)}break;case 4:un(e,t),xn(t);break;case 13:un(e,t),xn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Jm=Fe())),r&4&&Ey(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ft=(d=ft)||f,un(e,t),ft=d):un(e,t),xn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(g=q=f;q!==null;){switch(y=q,E=y.child,y.tag){case 0:case 11:case 14:case 15:Da(4,y,y.return);break;case 1:Xs(y,y.return);var A=y.stateNode;if(typeof A.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(C){Oe(r,n,C)}}break;case 5:Xs(y,y.return);break;case 22:if(y.memoizedState!==null){Ty(g);continue}}E!==null?(E.return=y,q=E):Ty(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=hk("display",o))}catch(C){Oe(t,t.return,C)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(C){Oe(t,t.return,C)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:un(e,t),xn(t),r&4&&Ey(t);break;case 21:break;default:un(e,t),xn(t)}}function xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(VE(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ka(i,""),r.flags&=-33);var s=ky(t);Ip(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ky(t);Tp(t,l,o);break;default:throw Error($(161))}}catch(u){Oe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function PS(t,e,n){q=t,WE(t)}function WE(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Eu;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ft;l=Eu;var d=ft;if(Eu=o,(ft=u)&&!d)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Iy(i):u!==null?(u.return=o,q=u):Iy(i);for(;s!==null;)q=s,WE(s),s=s.sibling;q=i,Eu=l,ft=d}wy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):wy(t)}}function wy(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ft||wd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:dn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&oy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}oy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&Za(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}ft||e.flags&512&&wp(e)}catch(y){Oe(e,e.return,y)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Ty(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Iy(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wd(4,e)}catch(u){Oe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Oe(e,i,u)}}var s=e.return;try{wp(e)}catch(u){Oe(e,s,u)}break;case 5:var o=e.return;try{wp(e)}catch(u){Oe(e,o,u)}}}catch(u){Oe(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var bS=Math.ceil,Nc=fr.ReactCurrentDispatcher,Xm=fr.ReactCurrentOwner,Jt=fr.ReactCurrentBatchConfig,ue=0,Xe=null,ze=null,nt=0,Ut=0,Zs=ri(0),Ge=0,ul=null,Fi=0,Td=0,Zm=0,Oa=null,At=null,Jm=0,vo=1/0,qn=null,jc=!1,xp=null,Wr=null,wu=!1,Pr=null,Dc=0,Ma=0,Sp=null,Qu=-1,Yu=0;function Et(){return ue&6?Fe():Qu!==-1?Qu:Qu=Fe()}function $r(t){return t.mode&1?ue&2&&nt!==0?nt&-nt:mS.transition!==null?(Yu===0&&(Yu=xk()),Yu):(t=ye,t!==0||(t=window.event,t=t===void 0?16:bk(t.type)),t):1}function vn(t,e,n,r){if(50<Ma)throw Ma=0,Sp=null,Error($(185));Al(t,n,r),(!(ue&2)||t!==Xe)&&(t===Xe&&(!(ue&2)&&(Td|=n),Ge===4&&Sr(t,nt)),jt(t,r),n===1&&ue===0&&!(e.mode&1)&&(vo=Fe()+500,_d&&ii()))}function jt(t,e){var n=t.callbackNode;mx(t,e);var r=vc(t,t===Xe?nt:0);if(r===0)n!==null&&N1(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&N1(n),e===1)t.tag===0?pS(xy.bind(null,t)):Xk(xy.bind(null,t)),cS(function(){!(ue&6)&&ii()}),n=null;else{switch(Sk(r)){case 1:n=xm;break;case 4:n=Tk;break;case 16:n=yc;break;case 536870912:n=Ik;break;default:n=yc}n=QE(n,$E.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $E(t,e){if(Qu=-1,Yu=0,ue&6)throw Error($(327));var n=t.callbackNode;if(oo()&&t.callbackNode!==n)return null;var r=vc(t,t===Xe?nt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Oc(t,r);else{e=r;var i=ue;ue|=2;var s=BE();(Xe!==t||nt!==e)&&(qn=null,vo=Fe()+500,Ci(t,e));do try{DS();break}catch(l){zE(t,l)}while(!0);Vm(),Nc.current=s,ue=i,ze!==null?e=0:(Xe=null,nt=0,e=Ge)}if(e!==0){if(e===2&&(i=Jf(t),i!==0&&(r=i,e=Ap(t,i))),e===1)throw n=ul,Ci(t,0),Sr(t,r),jt(t,Fe()),n;if(e===6)Sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!NS(i)&&(e=Oc(t,r),e===2&&(s=Jf(t),s!==0&&(r=s,e=Ap(t,s))),e===1))throw n=ul,Ci(t,0),Sr(t,r),jt(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:ki(t,At,qn);break;case 3:if(Sr(t,r),(r&130023424)===r&&(e=Jm+500-Fe(),10<e)){if(vc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ap(ki.bind(null,t,At,qn),e);break}ki(t,At,qn);break;case 4:if(Sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bS(r/1960))-r,10<r){t.timeoutHandle=ap(ki.bind(null,t,At,qn),r);break}ki(t,At,qn);break;case 5:ki(t,At,qn);break;default:throw Error($(329))}}}return jt(t,Fe()),t.callbackNode===n?$E.bind(null,t):null}function Ap(t,e){var n=Oa;return t.current.memoizedState.isDehydrated&&(Ci(t,e).flags|=256),t=Oc(t,e),t!==2&&(e=At,At=n,e!==null&&Rp(e)),t}function Rp(t){At===null?At=t:At.push.apply(At,t)}function NS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~Zm,e&=~Td,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function xy(t){if(ue&6)throw Error($(327));oo();var e=vc(t,0);if(!(e&1))return jt(t,Fe()),null;var n=Oc(t,e);if(t.tag!==0&&n===2){var r=Jf(t);r!==0&&(e=r,n=Ap(t,r))}if(n===1)throw n=ul,Ci(t,0),Sr(t,e),jt(t,Fe()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ki(t,At,qn),jt(t,Fe()),null}function eg(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(vo=Fe()+500,_d&&ii())}}function Ui(t){Pr!==null&&Pr.tag===0&&!(ue&6)&&oo();var e=ue;ue|=1;var n=Jt.transition,r=ye;try{if(Jt.transition=null,ye=1,t)return t()}finally{ye=r,Jt.transition=n,ue=e,!(ue&6)&&ii()}}function tg(){Ut=Zs.current,xe(Zs)}function Ci(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uS(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(Dm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Tc();break;case 3:go(),xe(bt),xe(mt),Bm();break;case 5:zm(r);break;case 4:go();break;case 13:xe(Ce);break;case 19:xe(Ce);break;case 10:Fm(r.type._context);break;case 22:case 23:tg()}n=n.return}if(Xe=t,ze=t=zr(t.current,null),nt=Ut=e,Ge=0,ul=null,Zm=Td=Fi=0,At=Oa=null,xi!==null){for(e=0;e<xi.length;e++)if(n=xi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xi=null}return t}function zE(t,e){do{var n=ze;try{if(Vm(),qu.current=bc,Pc){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pc=!1}if(Vi=0,Qe=qe=Pe=null,ja=!1,ol=0,Xm.current=null,n===null||n.return===null){Ge=1,ul=e,ze=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=nt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var E=hy(o);if(E!==null){E.flags&=-257,fy(E,o,l,s,e),E.mode&1&&dy(s,d,e),e=E,u=d;var A=e.updateQueue;if(A===null){var C=new Set;C.add(u),e.updateQueue=C}else A.add(u);break e}else{if(!(e&1)){dy(s,d,e),ng();break e}u=Error($(426))}}else if(Re&&l.mode&1){var L=hy(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),fy(L,o,l,s,e),Om(yo(u,l));break e}}s=u=yo(u,l),Ge!==4&&(Ge=2),Oa===null?Oa=[s]:Oa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=SE(s,u,e);sy(s,_);break e;case 1:l=u;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Wr===null||!Wr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var P=AE(s,l,e);sy(s,P);break e}}s=s.return}while(s!==null)}qE(n)}catch(D){e=D,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function BE(){var t=Nc.current;return Nc.current=bc,t===null?bc:t}function ng(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Xe===null||!(Fi&268435455)&&!(Td&268435455)||Sr(Xe,nt)}function Oc(t,e){var n=ue;ue|=2;var r=BE();(Xe!==t||nt!==e)&&(qn=null,Ci(t,e));do try{jS();break}catch(i){zE(t,i)}while(!0);if(Vm(),ue=n,Nc.current=r,ze!==null)throw Error($(261));return Xe=null,nt=0,Ge}function jS(){for(;ze!==null;)HE(ze)}function DS(){for(;ze!==null&&!ox();)HE(ze)}function HE(t){var e=KE(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,e===null?qE(t):ze=e,Xm.current=null}function qE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=RS(n,e),n!==null){n.flags&=32767,ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,ze=null;return}}else if(n=AS(n,e,Ut),n!==null){ze=n;return}if(e=e.sibling,e!==null){ze=e;return}ze=e=t}while(e!==null);Ge===0&&(Ge=5)}function ki(t,e,n){var r=ye,i=Jt.transition;try{Jt.transition=null,ye=1,OS(t,e,n,r)}finally{Jt.transition=i,ye=r}return null}function OS(t,e,n,r){do oo();while(Pr!==null);if(ue&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gx(t,s),t===Xe&&(ze=Xe=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wu||(wu=!0,QE(yc,function(){return oo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Jt.transition,Jt.transition=null;var o=ye;ye=1;var l=ue;ue|=4,Xm.current=null,CS(t,n),UE(n,t),nS(sp),_c=!!ip,sp=ip=null,t.current=n,PS(n),ax(),ue=l,ye=o,Jt.transition=s}else t.current=n;if(wu&&(wu=!1,Pr=t,Dc=i),s=t.pendingLanes,s===0&&(Wr=null),cx(n.stateNode),jt(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(jc)throw jc=!1,t=xp,xp=null,t;return Dc&1&&t.tag!==0&&oo(),s=t.pendingLanes,s&1?t===Sp?Ma++:(Ma=0,Sp=t):Ma=0,ii(),null}function oo(){if(Pr!==null){var t=Sk(Dc),e=Jt.transition,n=ye;try{if(Jt.transition=null,ye=16>t?16:t,Pr===null)var r=!1;else{if(t=Pr,Pr=null,Dc=0,ue&6)throw Error($(331));var i=ue;for(ue|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(q=d;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:Da(8,f,s)}var g=f.child;if(g!==null)g.return=f,q=g;else for(;q!==null;){f=q;var y=f.sibling,E=f.return;if(ME(f),f===d){q=null;break}if(y!==null){y.return=E,q=y;break}q=E}}}var A=s.alternate;if(A!==null){var C=A.child;if(C!==null){A.child=null;do{var L=C.sibling;C.sibling=null,C=L}while(C!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Da(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,q=_;break e}q=s.return}}var v=t.current;for(q=v;q!==null;){o=q;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,q=x;else e:for(o=v;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:wd(9,l)}}catch(D){Oe(l,l.return,D)}if(l===o){q=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,q=P;break e}q=l.return}}if(ue=i,ii(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(pd,t)}catch{}r=!0}return r}finally{ye=n,Jt.transition=e}}return!1}function Sy(t,e,n){e=yo(n,e),e=SE(t,e,1),t=Ur(t,e,1),e=Et(),t!==null&&(Al(t,1,e),jt(t,e))}function Oe(t,e,n){if(t.tag===3)Sy(t,t,n);else for(;e!==null;){if(e.tag===3){Sy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wr===null||!Wr.has(r))){t=yo(n,t),t=AE(e,t,1),e=Ur(e,t,1),t=Et(),e!==null&&(Al(e,1,t),jt(e,t));break}}e=e.return}}function MS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(nt&n)===n&&(Ge===4||Ge===3&&(nt&130023424)===nt&&500>Fe()-Jm?Ci(t,0):Zm|=n),jt(t,e)}function GE(t,e){e===0&&(t.mode&1?(e=hu,hu<<=1,!(hu&130023424)&&(hu=4194304)):e=1);var n=Et();t=ar(t,e),t!==null&&(Al(t,e,n),jt(t,n))}function VS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),GE(t,n)}function FS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),GE(t,n)}var KE;KE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bt.current)Lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Lt=!1,SS(t,e,n);Lt=!!(t.flags&131072)}else Lt=!1,Re&&e.flags&1048576&&Zk(e,Sc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ku(t,e),t=e.pendingProps;var i=fo(e,mt.current);so(e,n),i=qm(null,e,r,t,i,n);var s=Gm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(r)?(s=!0,Ic(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wm(e),i.updater=Ed,e.stateNode=i,i._reactInternals=e,pp(e,r,t,n),e=yp(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&jm(e),kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ku(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=WS(r),t=dn(r,t),i){case 0:e=gp(null,e,r,t,n);break e;case 1:e=gy(null,e,r,t,n);break e;case 11:e=py(null,e,r,t,n);break e;case 14:e=my(null,e,r,dn(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),gp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),gy(t,e,r,i,n);case 3:e:{if(PE(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,iE(t,e),Lc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=yo(Error($(423)),e),e=yy(t,e,r,n,i);break e}else if(r!==i){i=yo(Error($(424)),e),e=yy(t,e,r,n,i);break e}else for(Wt=Fr(e.stateNode.containerInfo.firstChild),zt=e,Re=!0,fn=null,n=nE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(po(),r===i){e=lr(t,e,n);break e}kt(t,e,r,n)}e=e.child}return e;case 5:return sE(e),t===null&&dp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,op(r,i)?o=null:s!==null&&op(r,s)&&(e.flags|=32),CE(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&dp(e),null;case 13:return bE(t,e,n);case 4:return $m(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=mo(e,null,r,n):kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),py(t,e,r,i,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ke(Ac,r._currentValue),r._currentValue=o,s!==null)if(kn(s.value,o)){if(s.children===i.children&&!bt.current){e=lr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=nr(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),hp(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),hp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,so(e,n),i=nn(i),r=r(i),e.flags|=1,kt(t,e,r,n),e.child;case 14:return r=e.type,i=dn(r,e.pendingProps),i=dn(r.type,i),my(t,e,r,i,n);case 15:return RE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Ku(t,e),e.tag=1,Nt(r)?(t=!0,Ic(e)):t=!1,so(e,n),xE(e,r,i),pp(e,r,i,n),yp(null,e,r,!0,t,n);case 19:return NE(t,e,n);case 22:return LE(t,e,n)}throw Error($(156,e.tag))};function QE(t,e){return wk(t,e)}function US(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(t,e,n,r){return new US(t,e,n,r)}function rg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function WS(t){if(typeof t=="function")return rg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wm)return 11;if(t===Tm)return 14}return 2}function zr(t,e){var n=t.alternate;return n===null?(n=Zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")rg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $s:return Pi(n.children,i,s,e);case Em:o=8,i|=8;break;case Vf:return t=Zt(12,n,e,i|2),t.elementType=Vf,t.lanes=s,t;case Ff:return t=Zt(13,n,e,i),t.elementType=Ff,t.lanes=s,t;case Uf:return t=Zt(19,n,e,i),t.elementType=Uf,t.lanes=s,t;case sk:return Id(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rk:o=10;break e;case ik:o=9;break e;case wm:o=11;break e;case Tm:o=14;break e;case Tr:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=Zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Pi(t,e,n,r){return t=Zt(7,t,r,e),t.lanes=n,t}function Id(t,e,n,r){return t=Zt(22,t,r,e),t.elementType=sk,t.lanes=n,t.stateNode={isHidden:!1},t}function sf(t,e,n){return t=Zt(6,t,null,e),t.lanes=n,t}function of(t,e,n){return e=Zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $S(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fh(0),this.expirationTimes=Fh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ig(t,e,n,r,i,s,o,l,u){return t=new $S(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wm(s),t}function zS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ws,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function YE(t){if(!t)return Zr;t=t._reactInternals;e:{if(Yi(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(Nt(n))return Yk(t,n,e)}return e}function XE(t,e,n,r,i,s,o,l,u){return t=ig(n,r,!0,t,i,s,o,l,u),t.context=YE(null),n=t.current,r=Et(),i=$r(n),s=nr(r,i),s.callback=e??null,Ur(n,s,i),t.current.lanes=i,Al(t,i,r),jt(t,r),t}function xd(t,e,n,r){var i=e.current,s=Et(),o=$r(i);return n=YE(n),e.context===null?e.context=n:e.pendingContext=n,e=nr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ur(i,e,o),t!==null&&(vn(t,i,o,s),Hu(t,i,o)),o}function Mc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ay(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sg(t,e){Ay(t,e),(t=t.alternate)&&Ay(t,e)}function BS(){return null}var ZE=typeof reportError=="function"?reportError:function(t){console.error(t)};function og(t){this._internalRoot=t}Sd.prototype.render=og.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));xd(t,e,null,null)};Sd.prototype.unmount=og.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ui(function(){xd(null,t,null,null)}),e[or]=null}};function Sd(t){this._internalRoot=t}Sd.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lk();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xr.length&&e!==0&&e<xr[n].priority;n++);xr.splice(n,0,t),n===0&&Pk(t)}};function ag(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ad(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ry(){}function HS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Mc(o);s.call(d)}}var o=XE(e,r,t,0,null,!1,!1,"",Ry);return t._reactRootContainer=o,t[or]=o.current,tl(t.nodeType===8?t.parentNode:t),Ui(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Mc(u);l.call(d)}}var u=ig(t,0,!1,null,null,!1,!1,"",Ry);return t._reactRootContainer=u,t[or]=u.current,tl(t.nodeType===8?t.parentNode:t),Ui(function(){xd(e,u,n,r)}),u}function Rd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Mc(o);l.call(u)}}xd(e,o,t,i)}else o=HS(n,e,t,i,r);return Mc(o)}Ak=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=va(e.pendingLanes);n!==0&&(Sm(e,n|1),jt(e,Fe()),!(ue&6)&&(vo=Fe()+500,ii()))}break;case 13:Ui(function(){var r=ar(t,1);if(r!==null){var i=Et();vn(r,t,1,i)}}),sg(t,1)}};Am=function(t){if(t.tag===13){var e=ar(t,134217728);if(e!==null){var n=Et();vn(e,t,134217728,n)}sg(t,134217728)}};Rk=function(t){if(t.tag===13){var e=$r(t),n=ar(t,e);if(n!==null){var r=Et();vn(n,t,e,r)}sg(t,e)}};Lk=function(){return ye};Ck=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};Yf=function(t,e,n){switch(e){case"input":if(zf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vd(r);if(!i)throw Error($(90));ak(r),zf(r,i)}}}break;case"textarea":uk(t,n);break;case"select":e=n.value,e!=null&&to(t,!!n.multiple,e,!1)}};gk=eg;yk=Ui;var qS={usingClientEntryPoint:!1,Events:[Ll,qs,vd,pk,mk,eg]},da={findFiberByHostInstance:Ii,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},GS={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kk(t),t===null?null:t.stateNode},findFiberByHostInstance:da.findFiberByHostInstance||BS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tu.isDisabled&&Tu.supportsFiber)try{pd=Tu.inject(GS),Pn=Tu}catch{}}qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qS;qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ag(e))throw Error($(200));return zS(t,e,null,n)};qt.createRoot=function(t,e){if(!ag(t))throw Error($(299));var n=!1,r="",i=ZE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ig(t,1,!1,null,null,n,!1,r,i),t[or]=e.current,tl(t.nodeType===8?t.parentNode:t),new og(e)};qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=kk(e),t=t===null?null:t.stateNode,t};qt.flushSync=function(t){return Ui(t)};qt.hydrate=function(t,e,n){if(!Ad(e))throw Error($(200));return Rd(null,t,e,!0,n)};qt.hydrateRoot=function(t,e,n){if(!ag(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ZE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=XE(e,null,t,1,n??null,i,!1,s,o),t[or]=e.current,tl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Sd(e)};qt.render=function(t,e,n){if(!Ad(e))throw Error($(200));return Rd(null,t,e,!1,n)};qt.unmountComponentAtNode=function(t){if(!Ad(t))throw Error($(40));return t._reactRootContainer?(Ui(function(){Rd(null,null,t,!1,function(){t._reactRootContainer=null,t[or]=null})}),!0):!1};qt.unstable_batchedUpdates=eg;qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ad(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return Rd(t,e,n,!1,r)};qt.version="18.3.1-next-f1338f8080-20240426";function JE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(JE)}catch(t){console.error(t)}}JE(),J_.exports=qt;var KS=J_.exports,e2,Ly=KS;e2=Ly.createRoot,Ly.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cl(){return cl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cl.apply(this,arguments)}var br;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(br||(br={}));const Cy="popstate";function QS(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Lp("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Vc(i)}return XS(e,n,null,t)}function Ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function t2(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function YS(){return Math.random().toString(36).substr(2,8)}function Py(t,e){return{usr:t.state,key:t.key,idx:e}}function Lp(t,e,n,r){return n===void 0&&(n=null),cl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Do(e):e,{state:n,key:e&&e.key||r||YS()})}function Vc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Do(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function XS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=br.Pop,u=null,d=f();d==null&&(d=0,o.replaceState(cl({},o.state,{idx:d}),""));function f(){return(o.state||{idx:null}).idx}function g(){l=br.Pop;let L=f(),_=L==null?null:L-d;d=L,u&&u({action:l,location:C.location,delta:_})}function y(L,_){l=br.Push;let v=Lp(C.location,L,_);d=f()+1;let x=Py(v,d),P=C.createHref(v);try{o.pushState(x,"",P)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;i.location.assign(P)}s&&u&&u({action:l,location:C.location,delta:1})}function E(L,_){l=br.Replace;let v=Lp(C.location,L,_);d=f();let x=Py(v,d),P=C.createHref(v);o.replaceState(x,"",P),s&&u&&u({action:l,location:C.location,delta:0})}function A(L){let _=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof L=="string"?L:Vc(L);return v=v.replace(/ $/,"%20"),Ue(_,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,_)}let C={get action(){return l},get location(){return t(i,o)},listen(L){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Cy,g),u=L,()=>{i.removeEventListener(Cy,g),u=null}},createHref(L){return e(i,L)},createURL:A,encodeLocation(L){let _=A(L);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:E,go(L){return o.go(L)}};return C}var by;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(by||(by={}));function ZS(t,e,n){return n===void 0&&(n="/"),JS(t,e,n)}function JS(t,e,n,r){let i=typeof e=="string"?Do(e):e,s=lg(i.pathname||"/",n);if(s==null)return null;let o=n2(t);eA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let d=hA(s);l=uA(o[u],d)}return l}function n2(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ue(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=Br([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),n2(s.children,e,f,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:aA(d,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of r2(s.path))i(s,o,u)}),e}function r2(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=r2(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function eA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:lA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const tA=/^:[\w-]+$/,nA=3,rA=2,iA=1,sA=10,oA=-2,Ny=t=>t==="*";function aA(t,e){let n=t.split("/"),r=n.length;return n.some(Ny)&&(r+=oA),e&&(r+=rA),n.filter(i=>!Ny(i)).reduce((i,s)=>i+(tA.test(s)?nA:s===""?iA:sA),r)}function lA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function uA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",g=cA({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f),y=u.route;if(!g)return null;Object.assign(i,g.params),o.push({params:i,pathname:Br([s,g.pathname]),pathnameBase:gA(Br([s,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(s=Br([s,g.pathnameBase]))}return o}function cA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=dA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,f,g)=>{let{paramName:y,isOptional:E}=f;if(y==="*"){let C=l[g]||"";o=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const A=l[g];return E&&!A?d[y]=void 0:d[y]=(A||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:t}}function dA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),t2(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function hA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return t2(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function lg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function fA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Do(t):t;return{pathname:n?n.startsWith("/")?n:pA(n,e):e,search:yA(r),hash:vA(i)}}function pA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function af(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ug(t,e){let n=mA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function cg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Do(t):(i=cl({},t),Ue(!i.pathname||!i.pathname.includes("?"),af("?","pathname","search",i)),Ue(!i.pathname||!i.pathname.includes("#"),af("#","pathname","hash",i)),Ue(!i.search||!i.search.includes("#"),af("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let g=e.length-1;if(!r&&o.startsWith("..")){let y=o.split("/");for(;y[0]==="..";)y.shift(),g-=1;i.pathname=y.join("/")}l=g>=0?e[g]:"/"}let u=fA(i,l),d=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}const Br=t=>t.join("/").replace(/\/\/+/g,"/"),gA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),yA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,vA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function _A(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const i2=["post","put","patch","delete"];new Set(i2);const kA=["get",...i2];new Set(kA);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dl(){return dl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},dl.apply(this,arguments)}const dg=j.createContext(null),EA=j.createContext(null),si=j.createContext(null),Ld=j.createContext(null),oi=j.createContext({outlet:null,matches:[],isDataRoute:!1}),s2=j.createContext(null);function wA(t,e){let{relative:n}=e===void 0?{}:e;Oo()||Ue(!1);let{basename:r,navigator:i}=j.useContext(si),{hash:s,pathname:o,search:l}=a2(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Br([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Oo(){return j.useContext(Ld)!=null}function Mo(){return Oo()||Ue(!1),j.useContext(Ld).location}function o2(t){j.useContext(si).static||j.useLayoutEffect(t)}function Vo(){let{isDataRoute:t}=j.useContext(oi);return t?DA():TA()}function TA(){Oo()||Ue(!1);let t=j.useContext(dg),{basename:e,future:n,navigator:r}=j.useContext(si),{matches:i}=j.useContext(oi),{pathname:s}=Mo(),o=JSON.stringify(ug(i,n.v7_relativeSplatPath)),l=j.useRef(!1);return o2(()=>{l.current=!0}),j.useCallback(function(d,f){if(f===void 0&&(f={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let g=cg(d,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Br([e,g.pathname])),(f.replace?r.replace:r.push)(g,f.state,f)},[e,r,o,s,t])}function a2(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(si),{matches:i}=j.useContext(oi),{pathname:s}=Mo(),o=JSON.stringify(ug(i,r.v7_relativeSplatPath));return j.useMemo(()=>cg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function IA(t,e){return xA(t,e)}function xA(t,e,n,r){Oo()||Ue(!1);let{navigator:i,static:s}=j.useContext(si),{matches:o}=j.useContext(oi),l=o[o.length-1],u=l?l.params:{};l&&l.pathname;let d=l?l.pathnameBase:"/";l&&l.route;let f=Mo(),g;if(e){var y;let _=typeof e=="string"?Do(e):e;d==="/"||(y=_.pathname)!=null&&y.startsWith(d)||Ue(!1),g=_}else g=f;let E=g.pathname||"/",A=E;if(d!=="/"){let _=d.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(_.length).join("/")}let C=ZS(t,{pathname:A}),L=CA(C&&C.map(_=>Object.assign({},_,{params:Object.assign({},u,_.params),pathname:Br([d,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?d:Br([d,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),o,n,r);return e&&L?j.createElement(Ld.Provider,{value:{location:dl({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:br.Pop}},L):L}function SA(){let t=jA(),e=_A(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const AA=j.createElement(SA,null);class RA extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(oi.Provider,{value:this.props.routeContext},j.createElement(s2.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function LA(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(dg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(oi.Provider,{value:e},r)}function CA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);f>=0||Ue(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let g=o[f];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=f),g.route.id){let{loaderData:y,errors:E}=n,A=g.route.loader&&y[g.route.id]===void 0&&(!E||E[g.route.id]===void 0);if(g.route.lazy||A){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,g,y)=>{let E,A=!1,C=null,L=null;n&&(E=l&&g.route.id?l[g.route.id]:void 0,C=g.route.errorElement||AA,u&&(d<0&&y===0?(OA("route-fallback"),A=!0,L=null):d===y&&(A=!0,L=g.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,y+1)),v=()=>{let x;return E?x=C:A?x=L:g.route.Component?x=j.createElement(g.route.Component,null):g.route.element?x=g.route.element:x=f,j.createElement(LA,{match:g,routeContext:{outlet:f,matches:_,isDataRoute:n!=null},children:x})};return n&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?j.createElement(RA,{location:n.location,revalidation:n.revalidation,component:C,error:E,children:v(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):v()},null)}var l2=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(l2||{}),u2=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(u2||{});function PA(t){let e=j.useContext(dg);return e||Ue(!1),e}function bA(t){let e=j.useContext(EA);return e||Ue(!1),e}function NA(t){let e=j.useContext(oi);return e||Ue(!1),e}function c2(t){let e=NA(),n=e.matches[e.matches.length-1];return n.route.id||Ue(!1),n.route.id}function jA(){var t;let e=j.useContext(s2),n=bA(),r=c2();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function DA(){let{router:t}=PA(l2.UseNavigateStable),e=c2(u2.UseNavigateStable),n=j.useRef(!1);return o2(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,dl({fromRouteId:e},s)))},[t,e])}const jy={};function OA(t,e,n){jy[t]||(jy[t]=!0)}function MA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function d2(t){let{to:e,replace:n,state:r,relative:i}=t;Oo()||Ue(!1);let{future:s,static:o}=j.useContext(si),{matches:l}=j.useContext(oi),{pathname:u}=Mo(),d=Vo(),f=cg(e,ug(l,s.v7_relativeSplatPath),u,i==="path"),g=JSON.stringify(f);return j.useEffect(()=>d(JSON.parse(g),{replace:n,state:r,relative:i}),[d,g,i,n,r]),null}function ka(t){Ue(!1)}function VA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=br.Pop,navigator:s,static:o=!1,future:l}=t;Oo()&&Ue(!1);let u=e.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:u,navigator:s,static:o,future:dl({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Do(r));let{pathname:f="/",search:g="",hash:y="",state:E=null,key:A="default"}=r,C=j.useMemo(()=>{let L=lg(f,u);return L==null?null:{location:{pathname:L,search:g,hash:y,state:E,key:A},navigationType:i}},[u,f,g,y,E,A,i]);return C==null?null:j.createElement(si.Provider,{value:d},j.createElement(Ld.Provider,{children:n,value:C}))}function FA(t){let{children:e,location:n}=t;return IA(Cp(e),n)}new Promise(()=>{});function Cp(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,Cp(r.props.children,s));return}r.type!==ka&&Ue(!1),!r.props.index||!r.props.children||Ue(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Cp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pp(){return Pp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pp.apply(this,arguments)}function UA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function WA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function $A(t,e){return t.button===0&&(!e||e==="_self")&&!WA(t)}const zA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],BA="6";try{window.__reactRouterVersion=BA}catch{}const HA="startTransition",Dy=M8[HA];function qA(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=QS({window:i,v5Compat:!0}));let o=s.current,[l,u]=j.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},f=j.useCallback(g=>{d&&Dy?Dy(()=>u(g)):u(g)},[u,d]);return j.useLayoutEffect(()=>o.listen(f),[o,f]),j.useEffect(()=>MA(r),[r]),j.createElement(VA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const GA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",KA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,h2=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:d,preventScrollReset:f,viewTransition:g}=e,y=UA(e,zA),{basename:E}=j.useContext(si),A,C=!1;if(typeof d=="string"&&KA.test(d)&&(A=d,GA))try{let x=new URL(window.location.href),P=d.startsWith("//")?new URL(x.protocol+d):new URL(d),D=lg(P.pathname,E);P.origin===x.origin&&D!=null?d=D+P.search+P.hash:C=!0}catch{}let L=wA(d,{relative:i}),_=QA(d,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:g});function v(x){r&&r(x),x.defaultPrevented||_(x)}return j.createElement("a",Pp({},y,{href:A||L,onClick:C||s?r:v,ref:n,target:u}))});var Oy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Oy||(Oy={}));var My;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(My||(My={}));function QA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Vo(),d=Mo(),f=a2(t,{relative:o});return j.useCallback(g=>{if($A(g,n)){g.preventDefault();let y=r!==void 0?r:Vc(d)===Vc(f);u(t,{replace:y,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[d,u,f,r,i,n,t,s,o,l])}var Vy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},YA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},p2={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let y=(l&15)<<2|d>>6,E=d&63;u||(E=64,o||(y=64)),r.push(n[f],n[g],n[y],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(f2(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||g==null)throw new XA;const y=s<<2|l>>4;if(r.push(y),d!==64){const E=l<<4&240|d>>2;if(r.push(E),g!==64){const A=d<<6&192|g;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZA=function(t){const e=f2(t);return p2.encodeByteArray(e,!0)},Fc=function(t){return ZA(t).replace(/\./g,"")},m2=function(t){try{return p2.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function JA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eR=()=>JA().__FIREBASE_DEFAULTS__,tR=()=>{if(typeof process>"u"||typeof Vy>"u")return;const t=Vy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&m2(t[1]);return e&&JSON.parse(e)},Cd=()=>{try{return eR()||tR()||nR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},g2=t=>{var e,n;return(n=(e=Cd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},y2=t=>{const e=g2(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},v2=()=>{var t;return(t=Cd())===null||t===void 0?void 0:t.config},_2=t=>{var e;return(e=Cd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function k2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Fc(JSON.stringify(n)),Fc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function sR(){var t;const e=(t=Cd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function E2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lR(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uR(){return!sR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w2(){try{return typeof indexedDB=="object"}catch{return!1}}function T2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function cR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR="FirebaseError";class an extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dR,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new an(i,l,r)}}function hR(t,e){return t.replace(fR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fR=/\{\$([^}]+)}/g;function pR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Fy(s)&&Fy(o)){if(!hl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Fy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ea(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function wa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function mR(t,e){const n=new gR(t,e);return n.subscribe.bind(n)}class gR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=lf),i.error===void 0&&(i.error=lf),i.complete===void 0&&(i.complete=lf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lf(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=1e3,_R=2,kR=4*60*60*1e3,ER=.5;function Uy(t,e=vR,n=_R){const r=e*Math.pow(n,t),i=Math.round(ER*r*(Math.random()-.5)*2);return Math.min(kR,r+i)}/**
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
 */function Ne(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IR(e))try{this.getOrInitializeService({instanceIdentifier:Ei})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ei){return this.instances.has(e)}getOptions(e=Ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ei){return this.component?this.component.multipleInstances?e:Ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TR(t){return t===Ei?void 0:t}function IR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const SR={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},AR=ae.INFO,RR={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},LR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=RR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pd{constructor(e){this.name=e,this._logLevel=AR,this._logHandler=LR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const CR=(t,e)=>e.some(n=>t instanceof n);let Wy,$y;function PR(){return Wy||(Wy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bR(){return $y||($y=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const I2=new WeakMap,bp=new WeakMap,x2=new WeakMap,uf=new WeakMap,hg=new WeakMap;function NR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&I2.set(n,t)}).catch(()=>{}),hg.set(e,t),e}function jR(t){if(bp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bp.set(t,e)}let Np={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||x2.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DR(t){Np=t(Np)}function OR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(cf(this),e,...n);return x2.set(r,e.sort?e.sort():[e]),Hr(r)}:bR().includes(t)?function(...e){return t.apply(cf(this),e),Hr(I2.get(this))}:function(...e){return Hr(t.apply(cf(this),e))}}function MR(t){return typeof t=="function"?OR(t):(t instanceof IDBTransaction&&jR(t),CR(t,PR())?new Proxy(t,Np):t)}function Hr(t){if(t instanceof IDBRequest)return NR(t);if(uf.has(t))return uf.get(t);const e=MR(t);return e!==t&&(uf.set(t,e),hg.set(e,t)),e}const cf=t=>hg.get(t);function S2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Hr(o.result),u.oldVersion,u.newVersion,Hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const VR=["get","getKey","getAll","getAllKeys","count"],FR=["put","add","delete","clear"],df=new Map;function zy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(df.get(e))return df.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=FR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||VR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return df.set(e,s),s}DR(t=>({...t,get:(e,n,r)=>zy(e,n)||t.get(e,n,r),has:(e,n)=>!!zy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jp="@firebase/app",By="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new Pd("@firebase/app"),$R="@firebase/app-compat",zR="@firebase/analytics-compat",BR="@firebase/analytics",HR="@firebase/app-check-compat",qR="@firebase/app-check",GR="@firebase/auth",KR="@firebase/auth-compat",QR="@firebase/database",YR="@firebase/data-connect",XR="@firebase/database-compat",ZR="@firebase/functions",JR="@firebase/functions-compat",eL="@firebase/installations",tL="@firebase/installations-compat",nL="@firebase/messaging",rL="@firebase/messaging-compat",iL="@firebase/performance",sL="@firebase/performance-compat",oL="@firebase/remote-config",aL="@firebase/remote-config-compat",lL="@firebase/storage",uL="@firebase/storage-compat",cL="@firebase/firestore",dL="@firebase/vertexai-preview",hL="@firebase/firestore-compat",fL="firebase",pL="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="[DEFAULT]",mL={[jp]:"fire-core",[$R]:"fire-core-compat",[BR]:"fire-analytics",[zR]:"fire-analytics-compat",[qR]:"fire-app-check",[HR]:"fire-app-check-compat",[GR]:"fire-auth",[KR]:"fire-auth-compat",[QR]:"fire-rtdb",[YR]:"fire-data-connect",[XR]:"fire-rtdb-compat",[ZR]:"fire-fn",[JR]:"fire-fn-compat",[eL]:"fire-iid",[tL]:"fire-iid-compat",[nL]:"fire-fcm",[rL]:"fire-fcm-compat",[iL]:"fire-perf",[sL]:"fire-perf-compat",[oL]:"fire-rc",[aL]:"fire-rc-compat",[lL]:"fire-gcs",[uL]:"fire-gcs-compat",[cL]:"fire-fst",[hL]:"fire-fst-compat",[dL]:"fire-vertex","fire-js":"fire-js",[fL]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=new Map,gL=new Map,Op=new Map;function Hy(t,e){try{t.container.addComponent(e)}catch(n){ur.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function En(t){const e=t.name;if(Op.has(e))return ur.debug(`There were multiple attempts to register component ${e}.`),!1;Op.set(e,t);for(const n of Uc.values())Hy(n,t);for(const n of gL.values())Hy(n,t);return!0}function ai(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ln(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yL={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qr=new Xi("app","Firebase",yL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=pL;function A2(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw qr.create("bad-app-name",{appName:String(i)});if(n||(n=v2()),!n)throw qr.create("no-options");const s=Uc.get(i);if(s){if(hl(n,s.options)&&hl(r,s.config))return s;throw qr.create("duplicate-app",{appName:i})}const o=new xR(i);for(const u of Op.values())o.addComponent(u);const l=new vL(n,r,o);return Uc.set(i,l),l}function bd(t=Dp){const e=Uc.get(t);if(!e&&t===Dp&&v2())return A2();if(!e)throw qr.create("no-app",{appName:t});return e}function Dt(t,e,n){var r;let i=(r=mL[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ur.warn(l.join(" "));return}En(new sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const _L="firebase-heartbeat-database",kL=1,fl="firebase-heartbeat-store";let hf=null;function R2(){return hf||(hf=S2(_L,kL,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fl)}catch(n){console.warn(n)}}}}).catch(t=>{throw qr.create("idb-open",{originalErrorMessage:t.message})})),hf}async function EL(t){try{const n=(await R2()).transaction(fl),r=await n.objectStore(fl).get(L2(t));return await n.done,r}catch(e){if(e instanceof an)ur.warn(e.message);else{const n=qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ur.warn(n.message)}}}async function qy(t,e){try{const r=(await R2()).transaction(fl,"readwrite");await r.objectStore(fl).put(e,L2(t)),await r.done}catch(n){if(n instanceof an)ur.warn(n.message);else{const r=qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ur.warn(r.message)}}}function L2(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wL=1024,TL=30*24*60*60*1e3;class IL{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SL(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=TL}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ur.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gy(),{heartbeatsToSend:r,unsentEntries:i}=xL(this._heartbeatsCache.heartbeats),s=Fc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ur.warn(n),""}}}function Gy(){return new Date().toISOString().substring(0,10)}function xL(t,e=wL){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ky(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ky(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return w2()?T2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await EL(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ky(t){return Fc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AL(t){En(new sn("platform-logger",e=>new UR(e),"PRIVATE")),En(new sn("heartbeat",e=>new IL(e),"PRIVATE")),Dt(jp,By,t),Dt(jp,By,"esm2017"),Dt("fire-js","")}AL("");function fg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function C2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RL=C2,P2=new Xi("auth","Firebase",C2());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=new Pd("@firebase/auth");function LL(t,...e){Wc.logLevel<=ae.WARN&&Wc.warn(`Auth (${Zi}): ${t}`,...e)}function Zu(t,...e){Wc.logLevel<=ae.ERROR&&Wc.error(`Auth (${Zi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,...e){throw pg(t,...e)}function Nn(t,...e){return pg(t,...e)}function b2(t,e,n){const r=Object.assign(Object.assign({},RL()),{[e]:n});return new Xi("auth","Firebase",r).create(e,{appName:t.name})}function rr(t){return b2(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return P2.create(t,...e)}function X(t,e,...n){if(!t)throw pg(e,...n)}function Zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zu(e),new Error(e)}function cr(t,e){t||Zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function CL(){return Qy()==="http:"||Qy()==="https:"}function Qy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CL()||E2()||"connection"in navigator)?navigator.onLine:!0}function bL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n){this.shortDelay=e,this.longDelay=n,cr(n>e,"Short delay should be less than long delay!"),this.isMobile=iR()||aR()}get(){return PL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t,e){cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL=new bl(3e4,6e4);function pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fn(t,e,n,r,i={}){return j2(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Pl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return oR()||(d.referrerPolicy="no-referrer"),N2.fetch()(D2(t,t.config.apiHost,n,l),d)})}async function j2(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NL),e);try{const i=new OL(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Iu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Iu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Iu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Iu(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw b2(t,f,d);wn(t,f)}}catch(i){if(i instanceof an)throw i;wn(t,"network-request-failed",{message:String(i)})}}async function Nl(t,e,n,r,i={}){const s=await Fn(t,e,n,r,i);return"mfaPendingCredential"in s&&wn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function D2(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?mg(t.config,i):`${t.config.apiScheme}://${i}`}function DL(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class OL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nn(this.auth,"network-request-failed")),jL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Iu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nn(t,e,r);return i.customData._tokenResponse=n,i}function Yy(t){return t!==void 0&&t.enterprise!==void 0}class ML{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return DL(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function VL(t,e){return Fn(t,"GET","/v2/recaptchaConfig",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FL(t,e){return Fn(t,"POST","/v1/accounts:delete",e)}async function O2(t,e){return Fn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UL(t,e=!1){const n=Ne(t),r=await n.getIdToken(e),i=gg(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Va(ff(i.auth_time)),issuedAtTime:Va(ff(i.iat)),expirationTime:Va(ff(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ff(t){return Number(t)*1e3}function gg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zu("JWT malformed, contained fewer than 3 sections"),null;try{const i=m2(n);return i?JSON.parse(i):(Zu("Failed to decode base64 JWT payload"),null)}catch(i){return Zu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Xy(t){const e=gg(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof an&&WL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Va(this.lastLoginAt),this.creationTime=Va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $c(t){var e;const n=t.auth,r=await t.getIdToken(),i=await _o(t,O2(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?M2(s.providerUserInfo):[],l=BL(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Vp(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function zL(t){const e=Ne(t);await $c(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function M2(t){return t.map(e=>{var{providerId:n}=e,r=fg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HL(t,e){const n=await j2(t,{},async()=>{const r=Pl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=D2(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",N2.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qL(t,e){return Fn(t,"POST","/v2/accounts:revokeToken",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Xy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await HL(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ao;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ao,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=fg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $L(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Vp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _o(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UL(this,e)}reload(){return zL(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $c(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(rr(this.auth));const e=await this.getIdToken();return await _o(this,FL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,d,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(d=n.createdAt)!==null&&d!==void 0?d:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:P,isAnonymous:D,providerData:M,stsTokenManager:w}=n;X(x&&w,e,"internal-error");const k=ao.fromJSON(this.name,w);X(typeof x=="string",e,"internal-error"),kr(g,e.name),kr(y,e.name),X(typeof P=="boolean",e,"internal-error"),X(typeof D=="boolean",e,"internal-error"),kr(E,e.name),kr(A,e.name),kr(C,e.name),kr(L,e.name),kr(_,e.name),kr(v,e.name);const S=new Jn({uid:x,auth:e,email:y,emailVerified:P,displayName:g,isAnonymous:D,photoURL:A,phoneNumber:E,tenantId:C,stsTokenManager:k,createdAt:_,lastLoginAt:v});return M&&Array.isArray(M)&&(S.providerData=M.map(R=>Object.assign({},R))),L&&(S._redirectEventId=L),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new ao;i.updateFromServerResponse(n);const s=new Jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $c(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?M2(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ao;l.updateFromIdToken(r);const u=new Jn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Vp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=new Map;function er(t){cr(t instanceof Function,"Expected a class definition");let e=Zy.get(t);return e?(cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}V2.type="NONE";const Jy=V2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t,e,n){return`firebase:${t}:${e}:${n}`}class lo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ju(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ju("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new lo(er(Jy),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||er(Jy);const o=Ju(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(o);if(f){const g=Jn._fromJSON(e,f);d!==s&&(l=g),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new lo(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new lo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(F2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(B2(e))return"Blackberry";if(H2(e))return"Webos";if(U2(e))return"Safari";if((e.includes("chrome/")||W2(e))&&!e.includes("edge/"))return"Chrome";if(z2(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function F2(t=gt()){return/firefox\//i.test(t)}function U2(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function W2(t=gt()){return/crios\//i.test(t)}function $2(t=gt()){return/iemobile/i.test(t)}function z2(t=gt()){return/android/i.test(t)}function B2(t=gt()){return/blackberry/i.test(t)}function H2(t=gt()){return/webos/i.test(t)}function yg(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function GL(t=gt()){var e;return yg(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KL(){return lR()&&document.documentMode===10}function q2(t=gt()){return yg(t)||z2(t)||H2(t)||B2(t)||/windows phone/i.test(t)||$2(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(t,e=[]){let n;switch(t){case"Browser":n=ev(gt());break;case"Worker":n=`${ev(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zi}/${r}`}/**
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
 */class QL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function YL(t,e={}){return Fn(t,"GET","/v2/passwordPolicy",pr(t,e))}/**
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
 */const XL=6;class ZL{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:XL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tv(this),this.idTokenSubscription=new tv(this),this.beforeStateQueue=new QL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=P2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=er(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await lo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await O2(this,{idToken:e}),r=await Jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $c(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(rr(this));const n=e?Ne(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YL(this),n=new ZL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qL(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&er(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await lo.create(this,[er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=G2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function li(t){return Ne(t)}class tv{constructor(e){this.auth=e,this.observer=null,this.addObserver=mR(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function e6(t){Nd=t}function K2(t){return Nd.loadJS(t)}function t6(){return Nd.recaptchaEnterpriseScript}function n6(){return Nd.gapiScript}function r6(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const i6="recaptcha-enterprise",s6="NO_RECAPTCHA";class o6{constructor(e){this.type=i6,this.auth=li(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{VL(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new ML(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Yy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(s6)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Yy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=t6();u.length!==0&&(u+=l),K2(u).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function nv(t,e,n,r=!1){const i=new o6(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function zc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await nv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await nv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a6(t,e){const n=ai(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(hl(s,e??{}))return i;wn(i,"already-initialized")}return n.initialize({options:e})}function l6(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function u6(t,e,n){const r=li(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Q2(e),{host:o,port:l}=c6(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),d6()}function Q2(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function c6(t){const e=Q2(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:rv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:rv(o)}}}function rv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function d6(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,n){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}async function h6(t,e){return Fn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f6(t,e){return Nl(t,"POST","/v1/accounts:signInWithPassword",pr(t,e))}async function p6(t,e){return Fn(t,"POST","/v1/accounts:sendOobCode",pr(t,e))}async function m6(t,e){return p6(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g6(t,e){return Nl(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}async function y6(t,e){return Nl(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends vg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new pl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new pl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zc(e,n,"signInWithPassword",f6);case"emailLink":return g6(e,{email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zc(e,r,"signUpPassword",h6);case"emailLink":return y6(e,{idToken:n,email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(t,e){return Nl(t,"POST","/v1/accounts:signInWithIdp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v6="http://localhost";class Wi extends vg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=fg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Wi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return uo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,uo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,uo(e,n)}buildRequest(){const e={requestUri:v6,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _6(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function k6(t){const e=Ea(wa(t)).link,n=e?Ea(wa(e)).deep_link_id:null,r=Ea(wa(t)).deep_link_id;return(r?Ea(wa(r)).link:null)||r||n||e||t}class _g{constructor(e){var n,r,i,s,o,l;const u=Ea(wa(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,g=_6((i=u.mode)!==null&&i!==void 0?i:null);X(d&&f&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=k6(e);try{return new _g(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.providerId=Fo.PROVIDER_ID}static credential(e,n){return pl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_g.parseLink(n);return X(r,"argument-error"),pl._fromEmailAndCode(e,r.code,r.tenantId)}}Fo.PROVIDER_ID="password";Fo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends Y2{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends jl{constructor(){super("facebook.com")}static credential(e){return Wi._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends jl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wi._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends jl{constructor(){super("github.com")}static credential(e){return Wi._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.GITHUB_SIGN_IN_METHOD="github.com";Rr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends jl{constructor(){super("twitter.com")}static credential(e,n){return Wi._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Lr.credential(n,r)}catch{return null}}}Lr.TWITTER_SIGN_IN_METHOD="twitter.com";Lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E6(t,e){return Nl(t,"POST","/v1/accounts:signUp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Jn._fromIdTokenResponse(e,r,i),o=iv(r);return new $i({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=iv(r);return new $i({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function iv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc extends an{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bc(e,n,r,i)}}function X2(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bc._fromErrorAndOperation(t,s,e,r):s})}async function w6(t,e,n=!1){const r=await _o(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $i._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T6(t,e,n=!1){const{auth:r}=t;if(Ln(r.app))return Promise.reject(rr(r));const i="reauthenticate";try{const s=await _o(t,X2(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=gg(s.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),$i._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z2(t,e,n=!1){if(Ln(t.app))return Promise.reject(rr(t));const r="signIn",i=await X2(t,r,e),s=await $i._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function I6(t,e){return Z2(li(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J2(t){const e=li(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function x6(t,e,n){const r=li(t);await zc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",m6)}async function S6(t,e,n){if(Ln(t.app))return Promise.reject(rr(t));const r=li(t),o=await zc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",E6).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&J2(t),u}),l=await $i._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function A6(t,e,n){return Ln(t.app)?Promise.reject(rr(t)):I6(Ne(t),Fo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&J2(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R6(t,e){return Fn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L6(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ne(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await _o(r,R6(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function C6(t,e,n,r){return Ne(t).onIdTokenChanged(e,n,r)}function P6(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}function b6(t,e,n,r){return Ne(t).onAuthStateChanged(e,n,r)}function N6(t){return Ne(t).signOut()}async function j6(t){return Ne(t).delete()}const Hc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hc,"1"),this.storage.removeItem(Hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D6=1e3,O6=10;class tw extends ew{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=q2(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);KL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,O6):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},D6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tw.type="LOCAL";const M6=tw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw extends ew{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nw.type="SESSION";const rw=nw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V6(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new jd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),u=await V6(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F6{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const d=kg("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const y=g;if(y.data.eventId===d)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return window}function U6(t){jn().location.href=t}/**
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
 */function iw(){return typeof jn().WorkerGlobalScope<"u"&&typeof jn().importScripts=="function"}async function W6(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $6(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function z6(){return iw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="firebaseLocalStorageDb",B6=1,qc="firebaseLocalStorage",ow="fbase_key";class Dl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dd(t,e){return t.transaction([qc],e?"readwrite":"readonly").objectStore(qc)}function H6(){const t=indexedDB.deleteDatabase(sw);return new Dl(t).toPromise()}function Fp(){const t=indexedDB.open(sw,B6);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qc,{keyPath:ow})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qc)?e(r):(r.close(),await H6(),e(await Fp()))})})}async function sv(t,e,n){const r=Dd(t,!0).put({[ow]:e,value:n});return new Dl(r).toPromise()}async function q6(t,e){const n=Dd(t,!1).get(e),r=await new Dl(n).toPromise();return r===void 0?null:r.value}function ov(t,e){const n=Dd(t,!0).delete(e);return new Dl(n).toPromise()}const G6=800,K6=3;class aw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>K6)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jd._getInstance(z6()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await W6(),!this.activeServiceWorker)return;this.sender=new F6(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$6()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fp();return await sv(e,Hc,"1"),await ov(e,Hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>q6(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ov(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Dd(i,!1).getAll();return new Dl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),G6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aw.type="LOCAL";const Q6=aw;new bl(3e4,6e4);/**
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
 */function Y6(t,e){return e?er(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg extends vg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return uo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return uo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return uo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function X6(t){return Z2(t.auth,new Eg(t),t.bypassAuthState)}function Z6(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),T6(n,new Eg(t),t.bypassAuthState)}async function J6(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),w6(n,new Eg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return X6;case"linkViaPopup":case"linkViaRedirect":return J6;case"reauthViaPopup":case"reauthViaRedirect":return Z6;default:wn(this.auth,"internal-error")}}resolve(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=new bl(2e3,1e4);class Js extends lw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Js.currentPopupAction&&Js.currentPopupAction.cancel(),Js.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){cr(this.filter.length===1,"Popup operations only handle one event");const e=kg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Js.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eC.get())};e()}}Js.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC="pendingRedirect",ec=new Map;class nC extends lw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ec.get(this.auth._key());if(!e){try{const r=await rC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ec.set(this.auth._key(),e)}return this.bypassAuthState||ec.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rC(t,e){const n=oC(e),r=sC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function iC(t,e){ec.set(t._key(),e)}function sC(t){return er(t._redirectPersistence)}function oC(t){return Ju(tC,t.config.apiKey,t.name)}async function aC(t,e,n=!1){if(Ln(t.app))return Promise.reject(rr(t));const r=li(t),i=Y6(r,e),o=await new nC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=10*60*1e3;class uC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lC&&this.cachedEventUids.clear(),this.cachedEventUids.has(av(e))}saveEventToCache(e){this.cachedEventUids.add(av(e)),this.lastProcessedEventTime=Date.now()}}function av(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dC(t,e={}){return Fn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fC=/^https?/;async function pC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dC(t);for(const n of e)try{if(mC(n))return}catch{}wn(t,"unauthorized-domain")}function mC(t){const e=Mp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fC.test(n))return!1;if(hC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const gC=new bl(3e4,6e4);function lv(){const t=jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yC(t){return new Promise((e,n)=>{var r,i,s;function o(){lv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lv(),n(Nn(t,"network-request-failed"))},timeout:gC.get()})}if(!((i=(r=jn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=jn().gapi)===null||s===void 0)&&s.load)o();else{const l=r6("iframefcb");return jn()[l]=()=>{gapi.load?o():n(Nn(t,"network-request-failed"))},K2(`${n6()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw tc=null,e})}let tc=null;function vC(t){return tc=tc||yC(t),tc}/**
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
 */const _C=new bl(5e3,15e3),kC="__/auth/iframe",EC="emulator/auth/iframe",wC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IC(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mg(e,EC):`https://${t.config.authDomain}/${kC}`,r={apiKey:e.apiKey,appName:t.name,v:Zi},i=TC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Pl(r).slice(1)}`}async function xC(t){const e=await vC(t),n=jn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:IC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Nn(t,"network-request-failed"),l=jn().setTimeout(()=>{s(o)},_C.get());function u(){jn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const SC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AC=500,RC=600,LC="_blank",CC="http://localhost";class uv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PC(t,e,n,r=AC,i=RC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},SC),{width:r.toString(),height:i.toString(),top:s,left:o}),d=gt().toLowerCase();n&&(l=W2(d)?LC:n),F2(d)&&(e=e||CC,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[E,A])=>`${y}${E}=${A},`,"");if(GL(d)&&l!=="_self")return bC(e||"",l),new uv(null);const g=window.open(e||"",l,f);X(g,t,"popup-blocked");try{g.focus()}catch{}return new uv(g)}function bC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const NC="__/auth/handler",jC="emulator/auth/handler",DC=encodeURIComponent("fac");async function cv(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zi,eventId:i};if(e instanceof Y2){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof jl){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),d=u?`#${DC}=${encodeURIComponent(u)}`:"";return`${OC(t)}?${Pl(l).slice(1)}${d}`}function OC({config:t}){return t.emulator?mg(t,jC):`https://${t.authDomain}/${NC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="webStorageSupport";class MC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rw,this._completeRedirectFn=aC,this._overrideRedirectResult=iC}async _openPopup(e,n,r,i){var s;cr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await cv(e,n,r,Mp(),i);return PC(e,o,kg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await cv(e,n,r,Mp(),i);return U6(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(cr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xC(e),r=new uC(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pf,{type:pf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[pf];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return q2()||U2()||yg()}}const VC=MC;var dv="@firebase/auth",hv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WC(t){En(new sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:G2(t)},d=new JL(r,i,s,u);return l6(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),En(new sn("auth-internal",e=>{const n=li(e.getProvider("auth").getImmediate());return(r=>new FC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(dv,hv,UC(t)),Dt(dv,hv,"esm2017")}/**
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
 */const $C=5*60,zC=_2("authIdTokenMaxAge")||$C;let fv=null;const BC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zC)return;const i=n==null?void 0:n.token;fv!==i&&(fv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function cw(t=bd()){const e=ai(t,"auth");if(e.isInitialized())return e.getImmediate();const n=a6(t,{popupRedirectResolver:VC,persistence:[Q6,M6,rw]}),r=_2("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=BC(s.toString());P6(n,o,()=>o(n.currentUser)),C6(n,l=>o(l))}}const i=g2("auth");return i&&u6(n,`http://${i}`),n}function HC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}e6({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",HC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WC("Browser");var qC="firebase",GC="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(qC,GC,"app");var pv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bi,dw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,k){function S(){}S.prototype=k.prototype,w.D=k.prototype,w.prototype=new S,w.prototype.constructor=w,w.C=function(R,b,N){for(var I=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)I[Z-2]=arguments[Z];return k.prototype[b].apply(R,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,k,S){S||(S=0);var R=Array(16);if(typeof k=="string")for(var b=0;16>b;++b)R[b]=k.charCodeAt(S++)|k.charCodeAt(S++)<<8|k.charCodeAt(S++)<<16|k.charCodeAt(S++)<<24;else for(b=0;16>b;++b)R[b]=k[S++]|k[S++]<<8|k[S++]<<16|k[S++]<<24;k=w.g[0],S=w.g[1],b=w.g[2];var N=w.g[3],I=k+(N^S&(b^N))+R[0]+3614090360&4294967295;k=S+(I<<7&4294967295|I>>>25),I=N+(b^k&(S^b))+R[1]+3905402710&4294967295,N=k+(I<<12&4294967295|I>>>20),I=b+(S^N&(k^S))+R[2]+606105819&4294967295,b=N+(I<<17&4294967295|I>>>15),I=S+(k^b&(N^k))+R[3]+3250441966&4294967295,S=b+(I<<22&4294967295|I>>>10),I=k+(N^S&(b^N))+R[4]+4118548399&4294967295,k=S+(I<<7&4294967295|I>>>25),I=N+(b^k&(S^b))+R[5]+1200080426&4294967295,N=k+(I<<12&4294967295|I>>>20),I=b+(S^N&(k^S))+R[6]+2821735955&4294967295,b=N+(I<<17&4294967295|I>>>15),I=S+(k^b&(N^k))+R[7]+4249261313&4294967295,S=b+(I<<22&4294967295|I>>>10),I=k+(N^S&(b^N))+R[8]+1770035416&4294967295,k=S+(I<<7&4294967295|I>>>25),I=N+(b^k&(S^b))+R[9]+2336552879&4294967295,N=k+(I<<12&4294967295|I>>>20),I=b+(S^N&(k^S))+R[10]+4294925233&4294967295,b=N+(I<<17&4294967295|I>>>15),I=S+(k^b&(N^k))+R[11]+2304563134&4294967295,S=b+(I<<22&4294967295|I>>>10),I=k+(N^S&(b^N))+R[12]+1804603682&4294967295,k=S+(I<<7&4294967295|I>>>25),I=N+(b^k&(S^b))+R[13]+4254626195&4294967295,N=k+(I<<12&4294967295|I>>>20),I=b+(S^N&(k^S))+R[14]+2792965006&4294967295,b=N+(I<<17&4294967295|I>>>15),I=S+(k^b&(N^k))+R[15]+1236535329&4294967295,S=b+(I<<22&4294967295|I>>>10),I=k+(b^N&(S^b))+R[1]+4129170786&4294967295,k=S+(I<<5&4294967295|I>>>27),I=N+(S^b&(k^S))+R[6]+3225465664&4294967295,N=k+(I<<9&4294967295|I>>>23),I=b+(k^S&(N^k))+R[11]+643717713&4294967295,b=N+(I<<14&4294967295|I>>>18),I=S+(N^k&(b^N))+R[0]+3921069994&4294967295,S=b+(I<<20&4294967295|I>>>12),I=k+(b^N&(S^b))+R[5]+3593408605&4294967295,k=S+(I<<5&4294967295|I>>>27),I=N+(S^b&(k^S))+R[10]+38016083&4294967295,N=k+(I<<9&4294967295|I>>>23),I=b+(k^S&(N^k))+R[15]+3634488961&4294967295,b=N+(I<<14&4294967295|I>>>18),I=S+(N^k&(b^N))+R[4]+3889429448&4294967295,S=b+(I<<20&4294967295|I>>>12),I=k+(b^N&(S^b))+R[9]+568446438&4294967295,k=S+(I<<5&4294967295|I>>>27),I=N+(S^b&(k^S))+R[14]+3275163606&4294967295,N=k+(I<<9&4294967295|I>>>23),I=b+(k^S&(N^k))+R[3]+4107603335&4294967295,b=N+(I<<14&4294967295|I>>>18),I=S+(N^k&(b^N))+R[8]+1163531501&4294967295,S=b+(I<<20&4294967295|I>>>12),I=k+(b^N&(S^b))+R[13]+2850285829&4294967295,k=S+(I<<5&4294967295|I>>>27),I=N+(S^b&(k^S))+R[2]+4243563512&4294967295,N=k+(I<<9&4294967295|I>>>23),I=b+(k^S&(N^k))+R[7]+1735328473&4294967295,b=N+(I<<14&4294967295|I>>>18),I=S+(N^k&(b^N))+R[12]+2368359562&4294967295,S=b+(I<<20&4294967295|I>>>12),I=k+(S^b^N)+R[5]+4294588738&4294967295,k=S+(I<<4&4294967295|I>>>28),I=N+(k^S^b)+R[8]+2272392833&4294967295,N=k+(I<<11&4294967295|I>>>21),I=b+(N^k^S)+R[11]+1839030562&4294967295,b=N+(I<<16&4294967295|I>>>16),I=S+(b^N^k)+R[14]+4259657740&4294967295,S=b+(I<<23&4294967295|I>>>9),I=k+(S^b^N)+R[1]+2763975236&4294967295,k=S+(I<<4&4294967295|I>>>28),I=N+(k^S^b)+R[4]+1272893353&4294967295,N=k+(I<<11&4294967295|I>>>21),I=b+(N^k^S)+R[7]+4139469664&4294967295,b=N+(I<<16&4294967295|I>>>16),I=S+(b^N^k)+R[10]+3200236656&4294967295,S=b+(I<<23&4294967295|I>>>9),I=k+(S^b^N)+R[13]+681279174&4294967295,k=S+(I<<4&4294967295|I>>>28),I=N+(k^S^b)+R[0]+3936430074&4294967295,N=k+(I<<11&4294967295|I>>>21),I=b+(N^k^S)+R[3]+3572445317&4294967295,b=N+(I<<16&4294967295|I>>>16),I=S+(b^N^k)+R[6]+76029189&4294967295,S=b+(I<<23&4294967295|I>>>9),I=k+(S^b^N)+R[9]+3654602809&4294967295,k=S+(I<<4&4294967295|I>>>28),I=N+(k^S^b)+R[12]+3873151461&4294967295,N=k+(I<<11&4294967295|I>>>21),I=b+(N^k^S)+R[15]+530742520&4294967295,b=N+(I<<16&4294967295|I>>>16),I=S+(b^N^k)+R[2]+3299628645&4294967295,S=b+(I<<23&4294967295|I>>>9),I=k+(b^(S|~N))+R[0]+4096336452&4294967295,k=S+(I<<6&4294967295|I>>>26),I=N+(S^(k|~b))+R[7]+1126891415&4294967295,N=k+(I<<10&4294967295|I>>>22),I=b+(k^(N|~S))+R[14]+2878612391&4294967295,b=N+(I<<15&4294967295|I>>>17),I=S+(N^(b|~k))+R[5]+4237533241&4294967295,S=b+(I<<21&4294967295|I>>>11),I=k+(b^(S|~N))+R[12]+1700485571&4294967295,k=S+(I<<6&4294967295|I>>>26),I=N+(S^(k|~b))+R[3]+2399980690&4294967295,N=k+(I<<10&4294967295|I>>>22),I=b+(k^(N|~S))+R[10]+4293915773&4294967295,b=N+(I<<15&4294967295|I>>>17),I=S+(N^(b|~k))+R[1]+2240044497&4294967295,S=b+(I<<21&4294967295|I>>>11),I=k+(b^(S|~N))+R[8]+1873313359&4294967295,k=S+(I<<6&4294967295|I>>>26),I=N+(S^(k|~b))+R[15]+4264355552&4294967295,N=k+(I<<10&4294967295|I>>>22),I=b+(k^(N|~S))+R[6]+2734768916&4294967295,b=N+(I<<15&4294967295|I>>>17),I=S+(N^(b|~k))+R[13]+1309151649&4294967295,S=b+(I<<21&4294967295|I>>>11),I=k+(b^(S|~N))+R[4]+4149444226&4294967295,k=S+(I<<6&4294967295|I>>>26),I=N+(S^(k|~b))+R[11]+3174756917&4294967295,N=k+(I<<10&4294967295|I>>>22),I=b+(k^(N|~S))+R[2]+718787259&4294967295,b=N+(I<<15&4294967295|I>>>17),I=S+(N^(b|~k))+R[9]+3951481745&4294967295,w.g[0]=w.g[0]+k&4294967295,w.g[1]=w.g[1]+(b+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.u=function(w,k){k===void 0&&(k=w.length);for(var S=k-this.blockSize,R=this.B,b=this.h,N=0;N<k;){if(b==0)for(;N<=S;)i(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<k;)if(R[b++]=w.charCodeAt(N++),b==this.blockSize){i(this,R),b=0;break}}else for(;N<k;)if(R[b++]=w[N++],b==this.blockSize){i(this,R),b=0;break}}this.h=b,this.o+=k},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var k=1;k<w.length-8;++k)w[k]=0;var S=8*this.o;for(k=w.length-8;k<w.length;++k)w[k]=S&255,S/=256;for(this.u(w),w=Array(16),k=S=0;4>k;++k)for(var R=0;32>R;R+=8)w[S++]=this.g[k]>>>R&255;return w};function s(w,k){var S=l;return Object.prototype.hasOwnProperty.call(S,w)?S[w]:S[w]=k(w)}function o(w,k){this.h=k;for(var S=[],R=!0,b=w.length-1;0<=b;b--){var N=w[b]|0;R&&N==k||(S[b]=N,R=!1)}this.g=S}var l={};function u(w){return-128<=w&&128>w?s(w,function(k){return new o([k|0],0>k?-1:0)}):new o([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return L(d(-w));for(var k=[],S=1,R=0;w>=S;R++)k[R]=w/S|0,S*=4294967296;return new o(k,0)}function f(w,k){if(w.length==0)throw Error("number format error: empty string");if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(w.charAt(0)=="-")return L(f(w.substring(1),k));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=d(Math.pow(k,8)),R=g,b=0;b<w.length;b+=8){var N=Math.min(8,w.length-b),I=parseInt(w.substring(b,b+N),k);8>N?(N=d(Math.pow(k,N)),R=R.j(N).add(d(I))):(R=R.j(S),R=R.add(d(I)))}return R}var g=u(0),y=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-L(this).m();for(var w=0,k=1,S=0;S<this.g.length;S++){var R=this.i(S);w+=(0<=R?R:4294967296+R)*k,k*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(A(this))return"0";if(C(this))return"-"+L(this).toString(w);for(var k=d(Math.pow(w,6)),S=this,R="";;){var b=P(S,k).g;S=_(S,b.j(k));var N=((0<S.g.length?S.g[0]:S.h)>>>0).toString(w);if(S=b,A(S))return N+R;for(;6>N.length;)N="0"+N;R=N+R}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function A(w){if(w.h!=0)return!1;for(var k=0;k<w.g.length;k++)if(w.g[k]!=0)return!1;return!0}function C(w){return w.h==-1}t.l=function(w){return w=_(this,w),C(w)?-1:A(w)?0:1};function L(w){for(var k=w.g.length,S=[],R=0;R<k;R++)S[R]=~w.g[R];return new o(S,~w.h).add(y)}t.abs=function(){return C(this)?L(this):this},t.add=function(w){for(var k=Math.max(this.g.length,w.g.length),S=[],R=0,b=0;b<=k;b++){var N=R+(this.i(b)&65535)+(w.i(b)&65535),I=(N>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);R=I>>>16,N&=65535,I&=65535,S[b]=I<<16|N}return new o(S,S[S.length-1]&-2147483648?-1:0)};function _(w,k){return w.add(L(k))}t.j=function(w){if(A(this)||A(w))return g;if(C(this))return C(w)?L(this).j(L(w)):L(L(this).j(w));if(C(w))return L(this.j(L(w)));if(0>this.l(E)&&0>w.l(E))return d(this.m()*w.m());for(var k=this.g.length+w.g.length,S=[],R=0;R<2*k;R++)S[R]=0;for(R=0;R<this.g.length;R++)for(var b=0;b<w.g.length;b++){var N=this.i(R)>>>16,I=this.i(R)&65535,Z=w.i(b)>>>16,pe=w.i(b)&65535;S[2*R+2*b]+=I*pe,v(S,2*R+2*b),S[2*R+2*b+1]+=N*pe,v(S,2*R+2*b+1),S[2*R+2*b+1]+=I*Z,v(S,2*R+2*b+1),S[2*R+2*b+2]+=N*Z,v(S,2*R+2*b+2)}for(R=0;R<k;R++)S[R]=S[2*R+1]<<16|S[2*R];for(R=k;R<2*k;R++)S[R]=0;return new o(S,0)};function v(w,k){for(;(w[k]&65535)!=w[k];)w[k+1]+=w[k]>>>16,w[k]&=65535,k++}function x(w,k){this.g=w,this.h=k}function P(w,k){if(A(k))throw Error("division by zero");if(A(w))return new x(g,g);if(C(w))return k=P(L(w),k),new x(L(k.g),L(k.h));if(C(k))return k=P(w,L(k)),new x(L(k.g),k.h);if(30<w.g.length){if(C(w)||C(k))throw Error("slowDivide_ only works with positive integers.");for(var S=y,R=k;0>=R.l(w);)S=D(S),R=D(R);var b=M(S,1),N=M(R,1);for(R=M(R,2),S=M(S,2);!A(R);){var I=N.add(R);0>=I.l(w)&&(b=b.add(S),N=I),R=M(R,1),S=M(S,1)}return k=_(w,b.j(k)),new x(b,k)}for(b=g;0<=w.l(k);){for(S=Math.max(1,Math.floor(w.m()/k.m())),R=Math.ceil(Math.log(S)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),N=d(S),I=N.j(k);C(I)||0<I.l(w);)S-=R,N=d(S),I=N.j(k);A(N)&&(N=y),b=b.add(N),w=_(w,I)}return new x(b,w)}t.A=function(w){return P(this,w).h},t.and=function(w){for(var k=Math.max(this.g.length,w.g.length),S=[],R=0;R<k;R++)S[R]=this.i(R)&w.i(R);return new o(S,this.h&w.h)},t.or=function(w){for(var k=Math.max(this.g.length,w.g.length),S=[],R=0;R<k;R++)S[R]=this.i(R)|w.i(R);return new o(S,this.h|w.h)},t.xor=function(w){for(var k=Math.max(this.g.length,w.g.length),S=[],R=0;R<k;R++)S[R]=this.i(R)^w.i(R);return new o(S,this.h^w.h)};function D(w){for(var k=w.g.length+1,S=[],R=0;R<k;R++)S[R]=w.i(R)<<1|w.i(R-1)>>>31;return new o(S,w.h)}function M(w,k){var S=k>>5;k%=32;for(var R=w.g.length-S,b=[],N=0;N<R;N++)b[N]=0<k?w.i(N+S)>>>k|w.i(N+S+1)<<32-k:w.i(N+S);return new o(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,dw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,bi=o}).apply(typeof pv<"u"?pv:typeof self<"u"?self:typeof window<"u"?window:{});var xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hw,Ta,fw,nc,Up,pw,mw,gw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof xu=="object"&&xu];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var T=0;T<a.length-1;T++){var O=a[T];if(!(O in p))break e;p=p[O]}a=a[a.length-1],T=p[a],h=h(T),h!=T&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var p=0,T=!1,O={next:function(){if(!T&&p<a.length){var V=p++;return{value:h(V,a[V]),done:!1}}return T=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,p){return a.call.apply(a.bind,arguments)}function g(a,h,p){if(!a)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,T),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function y(a,h,p){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,y.apply(null,arguments)}function E(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var T=p.slice();return T.push.apply(T,arguments),a.apply(this,T)}}function A(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(T,O,V){for(var B=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)B[_e-2]=arguments[_e];return h.prototype[O].apply(T,B)}}function C(a){const h=a.length;if(0<h){const p=Array(h);for(let T=0;T<h;T++)p[T]=a[T];return p}return[]}function L(a,h){for(let p=1;p<arguments.length;p++){const T=arguments[p];if(u(T)){const O=a.length||0,V=T.length||0;a.length=O+V;for(let B=0;B<V;B++)a[O+B]=T[B]}else a.push(T)}}class _{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function P(a){return P[" "](a),a}P[" "]=function(){};var D=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function M(a,h,p){for(const T in a)h.call(p,a[T],T,a)}function w(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function k(a){const h={};for(const p in a)h[p]=a[p];return h}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,h){let p,T;for(let O=1;O<arguments.length;O++){T=arguments[O];for(p in T)a[p]=T[p];for(let V=0;V<S.length;V++)p=S[V],Object.prototype.hasOwnProperty.call(T,p)&&(a[p]=T[p])}}function b(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function N(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Z{constructor(){this.h=this.g=null}add(h,p){const T=pe.get();T.set(h,p),this.h?this.h.next=T:this.g=T,this.h=T}}var pe=new _(()=>new he,a=>a.reset());class he{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let me,z=!1,Q=new Z,J=()=>{const a=l.Promise.resolve(void 0);me=()=>{a.then(ge)}};var ge=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(p){N(p)}var h=pe;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var Mt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function xt(a,h){if(Ae.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,T=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(D){e:{try{P(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:yt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&xt.aa.h.call(this)}}A(xt,Ae);var yt={2:"touch",3:"pen",4:"mouse"};xt.prototype.h=function(){xt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var St="closure_listenable_"+(1e6*Math.random()|0),di=0;function Wn(a,h,p,T,O){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!T,this.ha=O,this.key=++di,this.da=this.fa=!1}function mr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function $n(a){this.src=a,this.g={},this.h=0}$n.prototype.add=function(a,h,p,T,O){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var B=hh(a,h,T,O);return-1<B?(h=a[B],p||(h.fa=!1)):(h=new Wn(h,this.src,V,!!T,O),h.fa=p,a.push(h)),h};function Kt(a,h){var p=h.type;if(p in a.g){var T=a.g[p],O=Array.prototype.indexOf.call(T,h,void 0),V;(V=0<=O)&&Array.prototype.splice.call(T,O,1),V&&(mr(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function hh(a,h,p,T){for(var O=0;O<a.length;++O){var V=a[O];if(!V.da&&V.listener==h&&V.capture==!!p&&V.ha==T)return O}return-1}var fh="closure_lm_"+(1e6*Math.random()|0),ph={};function w0(a,h,p,T,O){if(Array.isArray(h)){for(var V=0;V<h.length;V++)w0(a,h[V],p,T,O);return null}return p=x0(p),a&&a[St]?a.K(h,p,d(T)?!!T.capture:!1,O):HI(a,h,p,!1,T,O)}function HI(a,h,p,T,O,V){if(!h)throw Error("Invalid event type");var B=d(O)?!!O.capture:!!O,_e=gh(a);if(_e||(a[fh]=_e=new $n(a)),p=_e.add(h,p,T,B,V),p.proxy)return p;if(T=qI(),p.proxy=T,T.src=a,T.listener=p,a.addEventListener)Mt||(O=B),O===void 0&&(O=!1),a.addEventListener(h.toString(),T,O);else if(a.attachEvent)a.attachEvent(I0(h.toString()),T);else if(a.addListener&&a.removeListener)a.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return p}function qI(){function a(p){return h.call(a.src,a.listener,p)}const h=GI;return a}function T0(a,h,p,T,O){if(Array.isArray(h))for(var V=0;V<h.length;V++)T0(a,h[V],p,T,O);else T=d(T)?!!T.capture:!!T,p=x0(p),a&&a[St]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],p=hh(V,p,T,O),-1<p&&(mr(V[p]),Array.prototype.splice.call(V,p,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=gh(a))&&(h=a.g[h.toString()],a=-1,h&&(a=hh(h,p,T,O)),(p=-1<a?h[a]:null)&&mh(p))}function mh(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[St])Kt(h.i,a);else{var p=a.type,T=a.proxy;h.removeEventListener?h.removeEventListener(p,T,a.capture):h.detachEvent?h.detachEvent(I0(p),T):h.addListener&&h.removeListener&&h.removeListener(T),(p=gh(h))?(Kt(p,a),p.h==0&&(p.src=null,h[fh]=null)):mr(a)}}}function I0(a){return a in ph?ph[a]:ph[a]="on"+a}function GI(a,h){if(a.da)a=!0;else{h=new xt(h,this);var p=a.listener,T=a.ha||a.src;a.fa&&mh(a),a=p.call(T,h)}return a}function gh(a){return a=a[fh],a instanceof $n?a:null}var yh="__closure_events_fn_"+(1e9*Math.random()>>>0);function x0(a){return typeof a=="function"?a:(a[yh]||(a[yh]=function(h){return a.handleEvent(h)}),a[yh])}function ot(){se.call(this),this.i=new $n(this),this.M=this,this.F=null}A(ot,se),ot.prototype[St]=!0,ot.prototype.removeEventListener=function(a,h,p,T){T0(this,a,h,p,T)};function vt(a,h){var p,T=a.F;if(T)for(p=[];T;T=T.F)p.push(T);if(a=a.M,T=h.type||h,typeof h=="string")h=new Ae(h,a);else if(h instanceof Ae)h.target=h.target||a;else{var O=h;h=new Ae(T,a),R(h,O)}if(O=!0,p)for(var V=p.length-1;0<=V;V--){var B=h.g=p[V];O=Hl(B,T,!0,h)&&O}if(B=h.g=a,O=Hl(B,T,!0,h)&&O,O=Hl(B,T,!1,h)&&O,p)for(V=0;V<p.length;V++)B=h.g=p[V],O=Hl(B,T,!1,h)&&O}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],T=0;T<p.length;T++)mr(p[T]);delete a.g[h],a.h--}}this.F=null},ot.prototype.K=function(a,h,p,T){return this.i.add(String(a),h,!1,p,T)},ot.prototype.L=function(a,h,p,T){return this.i.add(String(a),h,!0,p,T)};function Hl(a,h,p,T){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,V=0;V<h.length;++V){var B=h[V];if(B&&!B.da&&B.capture==p){var _e=B.listener,Ze=B.ha||B.src;B.fa&&Kt(a.i,B),O=_e.call(Ze,T)!==!1&&O}}return O&&!T.defaultPrevented}function S0(a,h,p){if(typeof a=="function")p&&(a=y(a,p));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function A0(a){a.g=S0(()=>{a.g=null,a.i&&(a.i=!1,A0(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class KI extends se{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:A0(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ho(a){se.call(this),this.h=a,this.g={}}A(Ho,se);var R0=[];function L0(a){M(a.g,function(h,p){this.g.hasOwnProperty(p)&&mh(h)},a),a.g={}}Ho.prototype.N=function(){Ho.aa.N.call(this),L0(this)},Ho.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vh=l.JSON.stringify,QI=l.JSON.parse,YI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function _h(){}_h.prototype.h=null;function C0(a){return a.h||(a.h=a.i())}function P0(){}var qo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function kh(){Ae.call(this,"d")}A(kh,Ae);function Eh(){Ae.call(this,"c")}A(Eh,Ae);var hi={},b0=null;function ql(){return b0=b0||new ot}hi.La="serverreachability";function N0(a){Ae.call(this,hi.La,a)}A(N0,Ae);function Go(a){const h=ql();vt(h,new N0(h))}hi.STAT_EVENT="statevent";function j0(a,h){Ae.call(this,hi.STAT_EVENT,a),this.stat=h}A(j0,Ae);function _t(a){const h=ql();vt(h,new j0(h,a))}hi.Ma="timingevent";function D0(a,h){Ae.call(this,hi.Ma,a),this.size=h}A(D0,Ae);function Ko(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Qo(){this.g=!0}Qo.prototype.xa=function(){this.g=!1};function XI(a,h,p,T,O,V){a.info(function(){if(a.g)if(V)for(var B="",_e=V.split("&"),Ze=0;Ze<_e.length;Ze++){var ce=_e[Ze].split("=");if(1<ce.length){var at=ce[0];ce=ce[1];var lt=at.split("_");B=2<=lt.length&&lt[1]=="type"?B+(at+"="+ce+"&"):B+(at+"=redacted&")}}else B=null;else B=V;return"XMLHTTP REQ ("+T+") [attempt "+O+"]: "+h+`
`+p+`
`+B})}function ZI(a,h,p,T,O,V,B){a.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+O+"]: "+h+`
`+p+`
`+V+" "+B})}function Ss(a,h,p,T){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+e8(a,p)+(T?" "+T:"")})}function JI(a,h){a.info(function(){return"TIMEOUT: "+h})}Qo.prototype.info=function(){};function e8(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var T=p[a];if(!(2>T.length)){var O=T[1];if(Array.isArray(O)&&!(1>O.length)){var V=O[0];if(V!="noop"&&V!="stop"&&V!="close")for(var B=1;B<O.length;B++)O[B]=""}}}}return vh(p)}catch{return h}}var Gl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},O0={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wh;function Kl(){}A(Kl,_h),Kl.prototype.g=function(){return new XMLHttpRequest},Kl.prototype.i=function(){return{}},wh=new Kl;function gr(a,h,p,T){this.j=a,this.i=h,this.l=p,this.R=T||1,this.U=new Ho(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new M0}function M0(){this.i=null,this.g="",this.h=!1}var V0={},Th={};function Ih(a,h,p){a.L=1,a.v=Zl(zn(h)),a.m=p,a.P=!0,F0(a,null)}function F0(a,h){a.F=Date.now(),Ql(a),a.A=zn(a.v);var p=a.A,T=a.R;Array.isArray(T)||(T=[String(T)]),J0(p.i,"t",T),a.C=0,p=a.j.J,a.h=new M0,a.g=y1(a.j,p?h:null,!a.m),0<a.O&&(a.M=new KI(y(a.Y,a,a.g),a.O)),h=a.U,p=a.g,T=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(R0[0]=O.toString()),O=R0);for(var V=0;V<O.length;V++){var B=w0(p,O[V],T||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?k(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Go(),XI(a.i,a.u,a.A,a.l,a.R,a.m)}gr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Bn(a)==3?h.j():this.Y(a)},gr.prototype.Y=function(a){try{if(a==this.g)e:{const lt=Bn(this.g);var h=this.g.Ba();const Ls=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||o1(this.g)))){this.J||lt!=4||h==7||(h==8||0>=Ls?Go(3):Go(2)),xh(this);var p=this.g.Z();this.X=p;t:if(U0(this)){var T=o1(this.g);a="";var O=T.length,V=Bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fi(this),Yo(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(T[h],{stream:!(V&&h==O-1)});T.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=p==200,ZI(this.i,this.u,this.A,this.l,this.R,lt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,Ze=this.g;if((_e=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(_e)){var ce=_e;break t}}ce=null}if(p=ce)Ss(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sh(this,p);else{this.o=!1,this.s=3,_t(12),fi(this),Yo(this);break e}}if(this.P){p=!0;let ln;for(;!this.J&&this.C<B.length;)if(ln=t8(this,B),ln==Th){lt==4&&(this.s=4,_t(14),p=!1),Ss(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==V0){this.s=4,_t(15),Ss(this.i,this.l,B,"[Invalid Chunk]"),p=!1;break}else Ss(this.i,this.l,ln,null),Sh(this,ln);if(U0(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||B.length!=0||this.h.h||(this.s=1,_t(16),p=!1),this.o=this.o&&p,!p)Ss(this.i,this.l,B,"[Invalid Chunked Response]"),fi(this),Yo(this);else if(0<B.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),bh(at),at.M=!0,_t(11))}}else Ss(this.i,this.l,B,null),Sh(this,B);lt==4&&fi(this),this.o&&!this.J&&(lt==4?f1(this.j,this):(this.o=!1,Ql(this)))}else v8(this.g),p==400&&0<B.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),fi(this),Yo(this)}}}catch{}finally{}};function U0(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function t8(a,h){var p=a.C,T=h.indexOf(`
`,p);return T==-1?Th:(p=Number(h.substring(p,T)),isNaN(p)?V0:(T+=1,T+p>h.length?Th:(h=h.slice(T,T+p),a.C=T+p,h)))}gr.prototype.cancel=function(){this.J=!0,fi(this)};function Ql(a){a.S=Date.now()+a.I,W0(a,a.I)}function W0(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ko(y(a.ba,a),h)}function xh(a){a.B&&(l.clearTimeout(a.B),a.B=null)}gr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(JI(this.i,this.A),this.L!=2&&(Go(),_t(17)),fi(this),this.s=2,Yo(this)):W0(this,this.S-a)};function Yo(a){a.j.G==0||a.J||f1(a.j,a)}function fi(a){xh(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,L0(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Sh(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||Ah(p.h,a))){if(!a.K&&Ah(p.h,a)&&p.G==3){try{var T=p.Da.g.parse(h)}catch{T=null}if(Array.isArray(T)&&T.length==3){var O=T;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)iu(p),nu(p);else break e;Ph(p),_t(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ko(y(p.Za,p),6e3));if(1>=B0(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else mi(p,11)}else if((a.K||p.g==a)&&iu(p),!v(h))for(O=p.Da.g.parse(h),h=0;h<O.length;h++){let ce=O[h];if(p.T=ce[0],ce=ce[1],p.G==2)if(ce[0]=="c"){p.K=ce[1],p.ia=ce[2];const at=ce[3];at!=null&&(p.la=at,p.j.info("VER="+p.la));const lt=ce[4];lt!=null&&(p.Aa=lt,p.j.info("SVER="+p.Aa));const Ls=ce[5];Ls!=null&&typeof Ls=="number"&&0<Ls&&(T=1.5*Ls,p.L=T,p.j.info("backChannelRequestTimeoutMs_="+T)),T=p;const ln=a.g;if(ln){const ou=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ou){var V=T.h;V.g||ou.indexOf("spdy")==-1&&ou.indexOf("quic")==-1&&ou.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Rh(V,V.h),V.h=null))}if(T.D){const Nh=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Nh&&(T.ya=Nh,Ee(T.I,T.D,Nh))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),T=p;var B=a;if(T.qa=g1(T,T.J?T.ia:null,T.W),B.K){H0(T.h,B);var _e=B,Ze=T.L;Ze&&(_e.I=Ze),_e.B&&(xh(_e),Ql(_e)),T.g=B}else d1(T);0<p.i.length&&ru(p)}else ce[0]!="stop"&&ce[0]!="close"||mi(p,7);else p.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?mi(p,7):Ch(p):ce[0]!="noop"&&p.l&&p.l.ta(ce),p.v=0)}}Go(4)}catch{}}var n8=class{constructor(a,h){this.g=a,this.map=h}};function $0(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function z0(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function B0(a){return a.h?1:a.g?a.g.size:0}function Ah(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Rh(a,h){a.g?a.g.add(h):a.h=h}function H0(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}$0.prototype.cancel=function(){if(this.i=q0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function q0(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return C(a.i)}function r8(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],p=a.length,T=0;T<p;T++)h.push(a[T]);return h}h=[],p=0;for(T in a)h[p++]=a[T];return h}function i8(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const T in a)h[p++]=T;return h}}}function G0(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=i8(a),T=r8(a),O=T.length,V=0;V<O;V++)h.call(void 0,T[V],p&&p[V],a)}var K0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function s8(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var T=a[p].indexOf("="),O=null;if(0<=T){var V=a[p].substring(0,T);O=a[p].substring(T+1)}else V=a[p];h(V,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function pi(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof pi){this.h=a.h,Yl(this,a.j),this.o=a.o,this.g=a.g,Xl(this,a.s),this.l=a.l;var h=a.i,p=new Jo;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Q0(this,p),this.m=a.m}else a&&(h=String(a).match(K0))?(this.h=!1,Yl(this,h[1]||"",!0),this.o=Xo(h[2]||""),this.g=Xo(h[3]||"",!0),Xl(this,h[4]),this.l=Xo(h[5]||"",!0),Q0(this,h[6]||"",!0),this.m=Xo(h[7]||"")):(this.h=!1,this.i=new Jo(null,this.h))}pi.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Zo(h,Y0,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Zo(h,Y0,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Zo(p,p.charAt(0)=="/"?l8:a8,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Zo(p,c8)),a.join("")};function zn(a){return new pi(a)}function Yl(a,h,p){a.j=p?Xo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Xl(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Q0(a,h,p){h instanceof Jo?(a.i=h,d8(a.i,a.h)):(p||(h=Zo(h,u8)),a.i=new Jo(h,a.h))}function Ee(a,h,p){a.i.set(h,p)}function Zl(a){return Ee(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Xo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zo(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,o8),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function o8(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Y0=/[#\/\?@]/g,a8=/[#\?:]/g,l8=/[#\?]/g,u8=/[#\?@]/g,c8=/#/g;function Jo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function yr(a){a.g||(a.g=new Map,a.h=0,a.i&&s8(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Jo.prototype,t.add=function(a,h){yr(this),this.i=null,a=As(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function X0(a,h){yr(a),h=As(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Z0(a,h){return yr(a),h=As(a,h),a.g.has(h)}t.forEach=function(a,h){yr(this),this.g.forEach(function(p,T){p.forEach(function(O){a.call(h,O,T,this)},this)},this)},t.na=function(){yr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let T=0;T<h.length;T++){const O=a[T];for(let V=0;V<O.length;V++)p.push(h[T])}return p},t.V=function(a){yr(this);let h=[];if(typeof a=="string")Z0(this,a)&&(h=h.concat(this.g.get(As(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return yr(this),this.i=null,a=As(this,a),Z0(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function J0(a,h,p){X0(a,h),0<p.length&&(a.i=null,a.g.set(As(a,h),C(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var T=h[p];const V=encodeURIComponent(String(T)),B=this.V(T);for(T=0;T<B.length;T++){var O=V;B[T]!==""&&(O+="="+encodeURIComponent(String(B[T]))),a.push(O)}}return this.i=a.join("&")};function As(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function d8(a,h){h&&!a.j&&(yr(a),a.i=null,a.g.forEach(function(p,T){var O=T.toLowerCase();T!=O&&(X0(this,T),J0(this,O,p))},a)),a.j=h}function h8(a,h){const p=new Qo;if(l.Image){const T=new Image;T.onload=E(vr,p,"TestLoadImage: loaded",!0,h,T),T.onerror=E(vr,p,"TestLoadImage: error",!1,h,T),T.onabort=E(vr,p,"TestLoadImage: abort",!1,h,T),T.ontimeout=E(vr,p,"TestLoadImage: timeout",!1,h,T),l.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=a}else h(!1)}function f8(a,h){const p=new Qo,T=new AbortController,O=setTimeout(()=>{T.abort(),vr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:T.signal}).then(V=>{clearTimeout(O),V.ok?vr(p,"TestPingServer: ok",!0,h):vr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),vr(p,"TestPingServer: error",!1,h)})}function vr(a,h,p,T,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),T(p)}catch{}}function p8(){this.g=new YI}function m8(a,h,p){const T=p||"";try{G0(a,function(O,V){let B=O;d(O)&&(B=vh(O)),h.push(T+V+"="+encodeURIComponent(B))})}catch(O){throw h.push(T+"type="+encodeURIComponent("_badmap")),O}}function Jl(a){this.l=a.Ub||null,this.j=a.eb||!1}A(Jl,_h),Jl.prototype.g=function(){return new eu(this.l,this.j)},Jl.prototype.i=function(a){return function(){return a}}({});function eu(a,h){ot.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(eu,ot),t=eu.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ta(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ea(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ta(this)),this.g&&(this.readyState=3,ta(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;e1(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function e1(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ea(this):ta(this),this.readyState==3&&e1(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ea(this))},t.Qa=function(a){this.g&&(this.response=a,ea(this))},t.ga=function(){this.g&&ea(this)};function ea(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ta(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function ta(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(eu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function t1(a){let h="";return M(a,function(p,T){h+=T,h+=":",h+=p,h+=`\r
`}),h}function Lh(a,h,p){e:{for(T in p){var T=!1;break e}T=!0}T||(p=t1(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Ee(a,h,p))}function De(a){ot.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(De,ot);var g8=/^https?$/i,y8=["POST","PUT"];t=De.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wh.g(),this.v=this.o?C0(this.o):C0(wh),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){n1(this,V);return}if(a=p||"",p=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var O in T)p.set(O,T[O]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const V of T.keys())p.set(V,T.get(V));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(y8,h,void 0))||T||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,B]of p)this.g.setRequestHeader(V,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{s1(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){n1(this,V)}};function n1(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,r1(a),tu(a)}function r1(a){a.A||(a.A=!0,vt(a,"complete"),vt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,vt(this,"complete"),vt(this,"abort"),tu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tu(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?i1(this):this.bb())},t.bb=function(){i1(this)};function i1(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Bn(a)!=4||a.Z()!=2)){if(a.u&&Bn(a)==4)S0(a.Ea,0,a);else if(vt(a,"readystatechange"),Bn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var T;if(T=B===0){var O=String(a.D).match(K0)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),T=!g8.test(O?O.toLowerCase():"")}p=T}if(p)vt(a,"complete"),vt(a,"success");else{a.m=6;try{var V=2<Bn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",r1(a)}}finally{tu(a)}}}}function tu(a,h){if(a.g){s1(a);const p=a.g,T=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||vt(a,"ready");try{p.onreadystatechange=T}catch{}}}function s1(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Bn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),QI(h)}};function o1(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function v8(a){const h={};a=(a.g&&2<=Bn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<a.length;T++){if(v(a[T]))continue;var p=b(a[T]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=h[O]||[];h[O]=V,V.push(p)}w(h,function(T){return T.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function na(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function a1(a){this.Aa=0,this.i=[],this.j=new Qo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=na("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=na("baseRetryDelayMs",5e3,a),this.cb=na("retryDelaySeedMs",1e4,a),this.Wa=na("forwardChannelMaxRetries",2,a),this.wa=na("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new $0(a&&a.concurrentRequestLimit),this.Da=new p8,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=a1.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,T){_t(0),this.W=a,this.H=h||{},p&&T!==void 0&&(this.H.OSID=p,this.H.OAID=T),this.F=this.X,this.I=g1(this,null,this.W),ru(this)};function Ch(a){if(l1(a),a.G==3){var h=a.U++,p=zn(a.I);if(Ee(p,"SID",a.K),Ee(p,"RID",h),Ee(p,"TYPE","terminate"),ra(a,p),h=new gr(a,a.j,h),h.L=2,h.v=Zl(zn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=y1(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ql(h)}m1(a)}function nu(a){a.g&&(bh(a),a.g.cancel(),a.g=null)}function l1(a){nu(a),a.u&&(l.clearTimeout(a.u),a.u=null),iu(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ru(a){if(!z0(a.h)&&!a.s){a.s=!0;var h=a.Ga;me||J(),z||(me(),z=!0),Q.add(h,a),a.B=0}}function _8(a,h){return B0(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ko(y(a.Ga,a,h),p1(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new gr(this,this.j,a);let V=this.o;if(this.S&&(V?(V=k(V),R(V,this.S)):V=this.S),this.m!==null||this.O||(O.H=V,V=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var T=this.i[p];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(h+=T,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=c1(this,O,h),p=zn(this.I),Ee(p,"RID",a),Ee(p,"CVER",22),this.D&&Ee(p,"X-HTTP-Session-Id",this.D),ra(this,p),V&&(this.O?h="headers="+encodeURIComponent(String(t1(V)))+"&"+h:this.m&&Lh(p,this.m,V)),Rh(this.h,O),this.Ua&&Ee(p,"TYPE","init"),this.P?(Ee(p,"$req",h),Ee(p,"SID","null"),O.T=!0,Ih(O,p,null)):Ih(O,p,h),this.G=2}}else this.G==3&&(a?u1(this,a):this.i.length==0||z0(this.h)||u1(this))};function u1(a,h){var p;h?p=h.l:p=a.U++;const T=zn(a.I);Ee(T,"SID",a.K),Ee(T,"RID",p),Ee(T,"AID",a.T),ra(a,T),a.m&&a.o&&Lh(T,a.m,a.o),p=new gr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=c1(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Rh(a.h,p),Ih(p,T,h)}function ra(a,h){a.H&&M(a.H,function(p,T){Ee(h,T,p)}),a.l&&G0({},function(p,T){Ee(h,T,p)})}function c1(a,h,p){p=Math.min(a.i.length,p);var T=a.l?y(a.l.Na,a.l,a):null;e:{var O=a.i;let V=-1;for(;;){const B=["count="+p];V==-1?0<p?(V=O[0].g,B.push("ofs="+V)):V=0:B.push("ofs="+V);let _e=!0;for(let Ze=0;Ze<p;Ze++){let ce=O[Ze].g;const at=O[Ze].map;if(ce-=V,0>ce)V=Math.max(0,O[Ze].g-100),_e=!1;else try{m8(at,B,"req"+ce+"_")}catch{T&&T(at)}}if(_e){T=B.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,T}function d1(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;me||J(),z||(me(),z=!0),Q.add(h,a),a.v=0}}function Ph(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ko(y(a.Fa,a),p1(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,h1(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ko(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),nu(this),h1(this))};function bh(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function h1(a){a.g=new gr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=zn(a.qa);Ee(h,"RID","rpc"),Ee(h,"SID",a.K),Ee(h,"AID",a.T),Ee(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ee(h,"TO",a.ja),Ee(h,"TYPE","xmlhttp"),ra(a,h),a.m&&a.o&&Lh(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Zl(zn(h)),p.m=null,p.P=!0,F0(p,a)}t.Za=function(){this.C!=null&&(this.C=null,nu(this),Ph(this),_t(19))};function iu(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function f1(a,h){var p=null;if(a.g==h){iu(a),bh(a),a.g=null;var T=2}else if(Ah(a.h,h))p=h.D,H0(a.h,h),T=1;else return;if(a.G!=0){if(h.o)if(T==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;T=ql(),vt(T,new D0(T,p)),ru(a)}else d1(a);else if(O=h.s,O==3||O==0&&0<h.X||!(T==1&&_8(a,h)||T==2&&Ph(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),O){case 1:mi(a,5);break;case 4:mi(a,10);break;case 3:mi(a,6);break;default:mi(a,2)}}}function p1(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function mi(a,h){if(a.j.info("Error code "+h),h==2){var p=y(a.fb,a),T=a.Xa;const O=!T;T=new pi(T||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Yl(T,"https"),Zl(T),O?h8(T.toString(),p):f8(T.toString(),p)}else _t(2);a.G=0,a.l&&a.l.sa(h),m1(a),l1(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function m1(a){if(a.G=0,a.ka=[],a.l){const h=q0(a.h);(h.length!=0||a.i.length!=0)&&(L(a.ka,h),L(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function g1(a,h,p){var T=p instanceof pi?zn(p):new pi(p);if(T.g!="")h&&(T.g=h+"."+T.g),Xl(T,T.s);else{var O=l.location;T=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var V=new pi(null);T&&Yl(V,T),h&&(V.g=h),O&&Xl(V,O),p&&(V.l=p),T=V}return p=a.D,h=a.ya,p&&h&&Ee(T,p,h),Ee(T,"VER",a.la),ra(a,T),T}function y1(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new De(new Jl({eb:p})):new De(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function v1(){}t=v1.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function su(){}su.prototype.g=function(a,h){return new Vt(a,h)};function Vt(a,h){ot.call(this),this.g=new a1(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Rs(this)}A(Vt,ot),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){Ch(this.g)},Vt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=vh(a),a=p);h.i.push(new n8(h.Ya++,a)),h.G==3&&ru(h)},Vt.prototype.N=function(){this.g.l=null,delete this.j,Ch(this.g),delete this.g,Vt.aa.N.call(this)};function _1(a){kh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(_1,kh);function k1(){Eh.call(this),this.status=1}A(k1,Eh);function Rs(a){this.g=a}A(Rs,v1),Rs.prototype.ua=function(){vt(this.g,"a")},Rs.prototype.ta=function(a){vt(this.g,new _1(a))},Rs.prototype.sa=function(a){vt(this.g,new k1)},Rs.prototype.ra=function(){vt(this.g,"b")},su.prototype.createWebChannel=su.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,gw=function(){return new su},mw=function(){return ql()},pw=hi,Up={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gl.NO_ERROR=0,Gl.TIMEOUT=8,Gl.HTTP_ERROR=6,nc=Gl,O0.COMPLETE="complete",fw=O0,P0.EventType=qo,qo.OPEN="a",qo.CLOSE="b",qo.ERROR="c",qo.MESSAGE="d",ot.prototype.listen=ot.prototype.K,Ta=P0,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,hw=De}).apply(typeof xu<"u"?xu:typeof self<"u"?self:typeof window<"u"?window:{});const mv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ht=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new Pd("@firebase/firestore");function ha(){return zi.logLevel}function K(t,...e){if(zi.logLevel<=ae.DEBUG){const n=e.map(wg);zi.debug(`Firestore (${Uo}): ${t}`,...n)}}function dr(t,...e){if(zi.logLevel<=ae.ERROR){const n=e.map(wg);zi.error(`Firestore (${Uo}): ${t}`,...n)}}function ko(t,...e){if(zi.logLevel<=ae.WARN){const n=e.map(wg);zi.warn(`Firestore (${Uo}): ${t}`,...n)}}function wg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: `+t;throw dr(e),new Error(e)}function ve(t,e){t||ee()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class QC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class YC{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ve(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ir,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ir)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new yw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new ht(e)}}class XC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ZC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new XC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class e4{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ve(this.o===void 0);const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.R=n.token,new JC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=t4(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function Eo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new He(0,0))}static max(){return new te(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ml.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ml?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends ml{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const n4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends ml{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return n4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ie.fromString(e))}static fromName(e){return new Y(Ie.fromString(e).popFirst(5))}static empty(){return new Y(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ie(e.slice()))}}function r4(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new Jr(i,Y.empty(),e)}function i4(t){return new Jr(t.readTime,t.key,-1)}class Jr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jr(te.min(),Y.empty(),-1)}static max(){return new Jr(te.max(),Y.empty(),-1)}}function s4(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class a4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ol(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==o4)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):W.reject(n)}static resolve(e){return new W((n,r)=>{n(e)})}static reject(e){return new W((n,r)=>{r(e)})}static waitFor(e){return new W((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=W.resolve(!1);for(const r of e)n=n.next(i=>i?W.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new W((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(f=>{o[d]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new W((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function l4(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ml(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Tg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Tg.oe=-1;function Od(t){return t==null}function Gc(t){return t===0&&1/t==-1/0}function u4(t){return typeof t=="number"&&Number.isInteger(t)&&!Gc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ji(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _w(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Su(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Su(this.root,e,this.comparator,!1)}getReverseIterator(){return new Su(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Su(this.root,e,this.comparator,!0)}}class Su{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??et.RED,this.left=i??et.EMPTY,this.right=s??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,i,s){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yv(this.data.getIterator())}getIteratorFrom(e){return new yv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class yv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new $t([])}unionWith(e){let n=new rt(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Eo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class kw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new kw("Invalid base64 string: "+s):s}}(e);return new st(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const c4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ei(t){if(ve(!!t),typeof t=="string"){let e=0;const n=c4.exec(t);if(ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bi(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xg(t){const e=t.mapValue.fields.__previous_value__;return Ig(e)?xg(e):e}function gl(t){const e=ei(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d4{constructor(e,n,r,i,s,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class yl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au={mapValue:{}};function Hi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ig(t)?4:f4(t)?9007199254740991:h4(t)?10:11:ee()}function Mn(t,e){if(t===e)return!0;const n=Hi(t);if(n!==Hi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gl(t).isEqual(gl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ei(i.timestampValue),l=ei(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Bi(i.bytesValue).isEqual(Bi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ve(i.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ve(i.integerValue)===Ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ve(i.doubleValue),l=Ve(s.doubleValue);return o===l?Gc(o)===Gc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Eo(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(gv(o)!==gv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Mn(o[u],l[u])))return!1;return!0}(t,e);default:return ee()}}function vl(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function wo(t,e){if(t===e)return 0;const n=Hi(t),r=Hi(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ve(s.integerValue||s.doubleValue),u=Ve(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return vv(t.timestampValue,e.timestampValue);case 4:return vv(gl(t),gl(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Bi(s),u=Bi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=de(l[d],u[d]);if(f!==0)return f}return de(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=de(Ve(s.latitude),Ve(o.latitude));return l!==0?l:de(Ve(s.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return _v(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,d,f;const g=s.fields||{},y=o.fields||{},E=(l=g.value)===null||l===void 0?void 0:l.arrayValue,A=(u=y.value)===null||u===void 0?void 0:u.arrayValue,C=de(((d=E==null?void 0:E.values)===null||d===void 0?void 0:d.length)||0,((f=A==null?void 0:A.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:_v(E,A)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Au.mapValue&&o===Au.mapValue)return 0;if(s===Au.mapValue)return 1;if(o===Au.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const y=de(u[g],f[g]);if(y!==0)return y;const E=wo(l[u[g]],d[f[g]]);if(E!==0)return E}return de(u.length,f.length)}(t.mapValue,e.mapValue);default:throw ee()}}function vv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=ei(t),r=ei(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function _v(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=wo(n[i],r[i]);if(s)return s}return de(n.length,r.length)}function To(t){return Wp(t)}function Wp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ei(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Bi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Wp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Wp(n.fields[o])}`;return i+"}"}(t.mapValue):ee()}function kv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function $p(t){return!!t&&"integerValue"in t}function Sg(t){return!!t&&"arrayValue"in t}function Ev(t){return!!t&&"nullValue"in t}function wv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rc(t){return!!t&&"mapValue"in t}function h4(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Fa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ji(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function f4(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!rc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fa(n)}setAll(e){let n=tt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Fa(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());rc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];rc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ji(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Rt(Fa(this.value))}}function Ew(t){const e=[];return Ji(t.fields,(n,r)=>{const i=new tt([n]);if(rc(r)){const s=Ew(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new $t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new pt(e,0,te.min(),te.min(),te.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,i){return new pt(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new pt(e,2,n,te.min(),te.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,te.min(),te.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Kc{constructor(e,n){this.position=e,this.inclusive=n}}function Tv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=wo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Iv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class _l{constructor(e,n="asc"){this.field=e,this.dir=n}}function p4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ww{}class Be extends ww{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new g4(e,n,r):n==="array-contains"?new _4(e,r):n==="in"?new k4(e,r):n==="not-in"?new E4(e,r):n==="array-contains-any"?new w4(e,r):new Be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new y4(e,r):new v4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(wo(n,this.value)):n!==null&&Hi(this.value)===Hi(n)&&this.matchesComparison(wo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tn extends ww{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Tn(e,n)}matches(e){return Tw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Tw(t){return t.op==="and"}function Iw(t){return m4(t)&&Tw(t)}function m4(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function zp(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+To(t.value);if(Iw(t))return t.filters.map(e=>zp(e)).join(",");{const e=t.filters.map(n=>zp(n)).join(",");return`${t.op}(${e})`}}function xw(t,e){return t instanceof Be?function(r,i){return i instanceof Be&&r.op===i.op&&r.field.isEqual(i.field)&&Mn(r.value,i.value)}(t,e):t instanceof Tn?function(r,i){return i instanceof Tn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&xw(o,i.filters[l]),!0):!1}(t,e):void ee()}function Sw(t){return t instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${To(n.value)}`}(t):t instanceof Tn?function(n){return n.op.toString()+" {"+n.getFilters().map(Sw).join(" ,")+"}"}(t):"Filter"}class g4 extends Be{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class y4 extends Be{constructor(e,n){super(e,"in",n),this.keys=Aw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class v4 extends Be{constructor(e,n){super(e,"not-in",n),this.keys=Aw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Aw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class _4 extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sg(n)&&vl(n.arrayValue,this.value)}}class k4 extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vl(this.value.arrayValue,n)}}class E4 extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(vl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vl(this.value.arrayValue,n)}}class w4 extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function xv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new T4(t,e,n,r,i,s,o)}function Ag(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Od(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>To(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>To(r)).join(",")),e.ue=n}return e.ue}function Rg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!p4(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Iv(t.startAt,e.startAt)&&Iv(t.endAt,e.endAt)}function Bp(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function I4(t,e,n,r,i,s,o,l){return new Wo(t,e,n,r,i,s,o,l)}function Lg(t){return new Wo(t)}function Sv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Rw(t){return t.collectionGroup!==null}function Ua(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new rt(tt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new _l(s,r))}),n.has(tt.keyField().canonicalString())||e.ce.push(new _l(tt.keyField(),r))}return e.ce}function Dn(t){const e=ne(t);return e.le||(e.le=x4(e,Ua(t))),e.le}function x4(t,e){if(t.limitType==="F")return xv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new _l(i.field,s)});const n=t.endAt?new Kc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Kc(t.startAt.position,t.startAt.inclusive):null;return xv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hp(t,e){const n=t.filters.concat([e]);return new Wo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Qc(t,e,n){return new Wo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Md(t,e){return Rg(Dn(t),Dn(e))&&t.limitType===e.limitType}function Lw(t){return`${Ag(Dn(t))}|lt:${t.limitType}`}function Vs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Sw(i)).join(", ")}]`),Od(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>To(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>To(i)).join(",")),`Target(${r})`}(Dn(t))}; limitType=${t.limitType})`}function Vd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ua(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const d=Tv(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,Ua(r),i)||r.endAt&&!function(o,l,u){const d=Tv(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,Ua(r),i))}(t,e)}function S4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Cw(t){return(e,n)=>{let r=!1;for(const i of Ua(t)){const s=A4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function A4(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),d=l.data.field(s);return u!==null&&d!==null?wo(u,d):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ji(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return _w(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R4=new je(Y.comparator);function hr(){return R4}const Pw=new je(Y.comparator);function Ia(...t){let e=Pw;for(const n of t)e=e.insert(n.key,n);return e}function bw(t){let e=Pw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ai(){return Wa()}function Nw(){return Wa()}function Wa(){return new $o(t=>t.toString(),(t,e)=>t.isEqual(e))}const L4=new je(Y.comparator),C4=new rt(Y.comparator);function oe(...t){let e=C4;for(const n of t)e=e.add(n);return e}const P4=new rt(de);function b4(){return P4}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gc(e)?"-0":e}}function jw(t){return{integerValue:""+t}}function N4(t,e){return u4(e)?jw(e):Cg(t,e)}/**
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
 */class Fd{constructor(){this._=void 0}}function j4(t,e,n){return t instanceof kl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ig(s)&&(s=xg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof El?Ow(t,e):t instanceof wl?Mw(t,e):function(i,s){const o=Dw(i,s),l=Av(o)+Av(i.Pe);return $p(o)&&$p(i.Pe)?jw(l):Cg(i.serializer,l)}(t,e)}function D4(t,e,n){return t instanceof El?Ow(t,e):t instanceof wl?Mw(t,e):n}function Dw(t,e){return t instanceof Yc?function(r){return $p(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class kl extends Fd{}class El extends Fd{constructor(e){super(),this.elements=e}}function Ow(t,e){const n=Vw(e);for(const r of t.elements)n.some(i=>Mn(i,r))||n.push(r);return{arrayValue:{values:n}}}class wl extends Fd{constructor(e){super(),this.elements=e}}function Mw(t,e){let n=Vw(e);for(const r of t.elements)n=n.filter(i=>!Mn(i,r));return{arrayValue:{values:n}}}class Yc extends Fd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Av(t){return Ve(t.integerValue||t.doubleValue)}function Vw(t){return Sg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O4{constructor(e,n){this.field=e,this.transform=n}}function M4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof El&&i instanceof El||r instanceof wl&&i instanceof wl?Eo(r.elements,i.elements,Mn):r instanceof Yc&&i instanceof Yc?Mn(r.Pe,i.Pe):r instanceof kl&&i instanceof kl}(t.transform,e.transform)}class V4{constructor(e,n){this.version=e,this.transformResults=n}}class en{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ic(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ud{}function Fw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Pg(t.key,en.none()):new Vl(t.key,t.data,en.none());{const n=t.data,r=Rt.empty();let i=new rt(tt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ui(t.key,r,new $t(i.toArray()),en.none())}}function F4(t,e,n){t instanceof Vl?function(i,s,o){const l=i.value.clone(),u=Lv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ui?function(i,s,o){if(!ic(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Lv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Uw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function $a(t,e,n,r){return t instanceof Vl?function(s,o,l,u){if(!ic(s.precondition,o))return l;const d=s.value.clone(),f=Cv(s.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof ui?function(s,o,l,u){if(!ic(s.precondition,o))return l;const d=Cv(s.fieldTransforms,u,o),f=o.data;return f.setAll(Uw(s)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,l){return ic(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function U4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Dw(r.transform,i||null);s!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,s))}return n||null}function Rv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Eo(r,i,(s,o)=>M4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vl extends Ud{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ui extends Ud{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Uw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Lv(t,e,n){const r=new Map;ve(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,D4(o,l,n[i]))}return r}function Cv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,j4(s,o,e))}return r}class Pg extends Ud{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class W4 extends Ud{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&F4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$a(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$a(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Nw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Fw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&Eo(this.mutations,e.mutations,(n,r)=>Rv(n,r))&&Eo(this.baseMutations,e.baseMutations,(n,r)=>Rv(n,r))}}class bg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ve(e.mutations.length===r.length);let i=function(){return L4}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new bg(e,n,r,i)}}/**
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
 */class z4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class B4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,le;function H4(t){switch(t){default:return ee();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function Ww(t){if(t===void 0)return dr("GRPC error has no .code"),U.UNKNOWN;switch(t){case We.OK:return U.OK;case We.CANCELLED:return U.CANCELLED;case We.UNKNOWN:return U.UNKNOWN;case We.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case We.INTERNAL:return U.INTERNAL;case We.UNAVAILABLE:return U.UNAVAILABLE;case We.UNAUTHENTICATED:return U.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case We.NOT_FOUND:return U.NOT_FOUND;case We.ALREADY_EXISTS:return U.ALREADY_EXISTS;case We.PERMISSION_DENIED:return U.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case We.ABORTED:return U.ABORTED;case We.OUT_OF_RANGE:return U.OUT_OF_RANGE;case We.UNIMPLEMENTED:return U.UNIMPLEMENTED;case We.DATA_LOSS:return U.DATA_LOSS;default:return ee()}}(le=We||(We={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function q4(){return new TextEncoder}/**
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
 */const G4=new bi([4294967295,4294967295],0);function Pv(t){const e=q4().encode(t),n=new dw;return n.update(e),new Uint8Array(n.digest())}function bv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new bi([n,r],0),new bi([i,s],0)]}class Ng{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xa(`Invalid padding: ${n}`);if(r<0)throw new xa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=bi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(bi.fromNumber(r)));return i.compare(G4)===1&&(i=new bi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Pv(e),[r,i]=bv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ng(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Pv(e),[r,i]=bv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Fl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wd(te.min(),i,new je(de),hr(),oe())}}class Fl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fl(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class $w{constructor(e,n){this.targetId=e,this.me=n}}class zw{constructor(e,n,r=st.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Nv{constructor(){this.fe=0,this.ge=Dv(),this.pe=st.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new Fl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Dv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class K4{constructor(e){this.Le=e,this.Be=new Map,this.ke=hr(),this.qe=jv(),this.Qe=new je(de)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Bp(s))if(r===0){const o=new Y(s.path);this.Ue(n,o,pt.newNoDocument(o,te.min()))}else ve(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Bi(r).toUint8Array()}catch(u){if(u instanceof kw)return ko("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ng(o,i,s)}catch(u){return ko(u instanceof xa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Bp(l.target)){const u=new Y(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,pt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=oe();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Wd(e,n,this.Qe,this.ke,r);return this.ke=hr(),this.qe=jv(),this.Qe=new je(de),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Nv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new rt(de),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Nv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function jv(){return new je(Y.comparator)}function Dv(){return new je(Y.comparator)}const Q4={asc:"ASCENDING",desc:"DESCENDING"},Y4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},X4={and:"AND",or:"OR"};class Z4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qp(t,e){return t.useProto3Json||Od(e)?e:{value:e}}function Xc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function J4(t,e){return Xc(t,e.toTimestamp())}function On(t){return ve(!!t),te.fromTimestamp(function(n){const r=ei(n);return new He(r.seconds,r.nanos)}(t))}function jg(t,e){return Gp(t,e).canonicalString()}function Gp(t,e){const n=function(i){return new Ie(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Hw(t){const e=Ie.fromString(t);return ve(Yw(e)),e}function Kp(t,e){return jg(t.databaseId,e.path)}function mf(t,e){const n=Hw(e);if(n.get(1)!==t.databaseId.projectId)throw new H(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(Gw(n))}function qw(t,e){return jg(t.databaseId,e)}function eP(t){const e=Hw(t);return e.length===4?Ie.emptyPath():Gw(e)}function Qp(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gw(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ov(t,e,n){return{name:Kp(t,e),fields:n.value.mapValue.fields}}function tP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(ve(f===void 0||typeof f=="string"),st.fromBase64String(f||"")):(ve(f===void 0||f instanceof Buffer||f instanceof Uint8Array),st.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const f=d.code===void 0?U.UNKNOWN:Ww(d.code);return new H(f,d.message||"")}(o);n=new zw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=mf(t,r.document.name),s=On(r.document.updateTime),o=r.document.createTime?On(r.document.createTime):te.min(),l=new Rt({mapValue:{fields:r.document.fields}}),u=pt.newFoundDocument(i,s,o,l),d=r.targetIds||[],f=r.removedTargetIds||[];n=new sc(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=mf(t,r.document),s=r.readTime?On(r.readTime):te.min(),o=pt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new sc([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=mf(t,r.document),s=r.removedTargetIds||[];n=new sc([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new B4(i,s),l=r.targetId;n=new $w(l,o)}}return n}function nP(t,e){let n;if(e instanceof Vl)n={update:Ov(t,e.key,e.value)};else if(e instanceof Pg)n={delete:Kp(t,e.key)};else if(e instanceof ui)n={update:Ov(t,e.key,e.data),updateMask:dP(e.fieldMask)};else{if(!(e instanceof W4))return ee();n={verify:Kp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof kl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof El)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof wl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Yc)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:J4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function rP(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?On(i.updateTime):On(s);return o.isEqual(te.min())&&(o=On(s)),new V4(o,i.transformResults||[])}(n,e))):[]}function iP(t,e){return{documents:[qw(t,e.path)]}}function sP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=qw(t,i);const s=function(d){if(d.length!==0)return Qw(Tn.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(f=>function(y){return{field:Fs(y.field),direction:lP(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=qp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function oP(t){let e=eP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(g){const y=Kw(g);return y instanceof Tn&&Iw(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(y=>function(A){return new _l(Us(A.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(g){let y;return y=typeof g=="object"?g.value:g,Od(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(g){const y=!!g.before,E=g.values||[];return new Kc(E,y)}(n.startAt));let d=null;return n.endAt&&(d=function(g){const y=!g.before,E=g.values||[];return new Kc(E,y)}(n.endAt)),I4(e,i,o,s,l,"F",u,d)}function aP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Kw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Us(n.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Us(n.unaryFilter.field);return Be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Us(n.unaryFilter.field);return Be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Us(n.unaryFilter.field);return Be.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return Be.create(Us(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Tn.create(n.compositeFilter.filters.map(r=>Kw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function lP(t){return Q4[t]}function uP(t){return Y4[t]}function cP(t){return X4[t]}function Fs(t){return{fieldPath:t.canonicalString()}}function Us(t){return tt.fromServerFormat(t.fieldPath)}function Qw(t){return t instanceof Be?function(n){if(n.op==="=="){if(wv(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NAN"}};if(Ev(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wv(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NOT_NAN"}};if(Ev(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fs(n.field),op:uP(n.op),value:n.value}}}(t):t instanceof Tn?function(n){const r=n.getFilters().map(i=>Qw(i));return r.length===1?r[0]:{compositeFilter:{op:cP(n.op),filters:r}}}(t):ee()}function dP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Yw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,r,i,s=te.min(),o=te.min(),l=st.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e){this.ct=e}}function fP(t){const e=oP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(){this.un=new mP}addToCollectionParentIndex(e,n){return this.un.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(Jr.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(Jr.min())}updateCollectionGroup(e,n,r){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class mP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new rt(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new rt(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Io(0)}static kn(){return new Io(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(){this.changes=new $o(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?W.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class yP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&$a(r.mutation,i,$t.empty(),He.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=Ai();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ia();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ai();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=hr();const o=Wa(),l=function(){return Wa()}();return n.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof ui)?s=s.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),$a(f.mutation,d,f.mutation.getFieldMask(),He.now())):o.set(d.key,$t.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>{var g;return l.set(d,new yP(f,(g=o.get(d))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Wa();let i=new je((o,l)=>o-l),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||$t.empty();f=l.applyToLocalView(d,f),r.set(u,f);const g=(i.get(l.batchId)||oe()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,g=Nw();f.forEach(y=>{if(!s.has(y)){const E=Fw(n.get(y),r.get(y));E!==null&&g.set(y,E),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,g))}return W.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Rw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):W.resolve(Ai());let l=-1,u=s;return o.next(d=>W.forEach(d,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?W.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,oe())).next(f=>({batchId:l,changes:bw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=Ia();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ia();return this.indexManager.getCollectionParents(e,s).next(l=>W.forEach(l,u=>{const d=function(g,y){return new Wo(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((g,y)=>{o=o.insert(g,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,pt.newInvalidDocument(f)))});let l=Ia();return o.forEach((u,d)=>{const f=s.get(u);f!==void 0&&$a(f.mutation,d,$t.empty(),He.now()),Vd(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return W.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:On(i.createTime)}}(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:fP(i.bundledQuery),readTime:On(i.readTime)}}(n)),W.resolve()}}/**
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
 */class kP{constructor(){this.overlays=new je(Y.comparator),this.Ir=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ai();return W.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),W.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),W.resolve()}getOverlaysForCollection(e,n,r){const i=Ai(),s=n.length+1,o=new Y(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return W.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new je((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=Ai(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Ai(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return W.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new z4(n,r));let s=this.Ir.get(n);s===void 0&&(s=oe(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class EP{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.Tr=new rt(Ke.Er),this.dr=new rt(Ke.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ke(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Y(new Ie([])),r=new Ke(n,e),i=new Ke(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Y(new Ie([])),r=new Ke(n,e),i=new Ke(n,e+1);let s=oe();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ke(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Y.comparator(e.key,n.key)||de(e.wr,n.wr)}static Ar(e,n){return de(e.wr,n.wr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new rt(Ke.Er)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $4(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ke(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return W.resolve(o)}lookupMutationBatch(e,n){return W.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return W.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),i=new Ke(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),W.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(de);return n.forEach(i=>{const s=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),W.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new Ke(new Y(s),0);let l=new rt(de);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},o),W.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return W.forEach(n.mutations,i=>{const s=new Ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ke(n,0),i=this.br.firstAfterOrEqual(r);return W.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e){this.Mr=e,this.docs=function(){return new je(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return W.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=hr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pt.newInvalidDocument(i))}),W.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=hr();const o=n.path,l=new Y(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||s4(i4(f),r)<=0||(i.has(f.key)||Vd(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return W.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}Or(e,n){return W.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new IP(this)}getSize(e){return W.resolve(this.size)}}class IP extends gP{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),W.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e){this.persistence=e,this.Nr=new $o(n=>Ag(n),Rg),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Dg,this.targetCount=0,this.kr=Io.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),W.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Io(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.Kn(n),W.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),W.waitFor(s).next(()=>i)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return W.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),W.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),W.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),W.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return W.resolve(r)}containsKey(e,n){return W.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Tg(0),this.Kr=!1,this.Kr=!0,this.$r=new EP,this.referenceDelegate=e(this),this.Ur=new xP(this),this.indexManager=new pP,this.remoteDocumentCache=function(i){return new TP(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new hP(n),this.Gr=new _P(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new kP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new wP(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new AP(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return W.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class AP extends a4{constructor(e){super(),this.currentSequenceNumber=e}}class Og{constructor(e){this.persistence=e,this.Jr=new Dg,this.Yr=null}static Zr(e){return new Og(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),W.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),W.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.Xr,r=>{const i=Y.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return W.or([()=>W.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Mg(e,n.fromCache,r,i)}}/**
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
 */class RP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return uR()?8:l4(gt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new RP;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ha()<=ae.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Vs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),W.resolve()):(ha()<=ae.DEBUG&&K("QueryEngine","Query:",Vs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ha()<=ae.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Vs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dn(n))):W.resolve())}Yi(e,n){if(Sv(n))return W.resolve(null);let r=Dn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Qc(n,null,"F"),r=Dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,Qc(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return Sv(n)||i.isEqual(te.min())?W.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?W.resolve(null):(ha()<=ae.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vs(n)),this.rs(e,o,n,r4(i,-1)).next(l=>l))})}ts(e,n){let r=new rt(Cw(e));return n.forEach((i,s)=>{Vd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ha()<=ae.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Vs(n)),this.Ji.getDocumentsMatchingQuery(e,n,Jr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new je(de),this._s=new $o(s=>Ag(s),Rg),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vP(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function PP(t,e,n,r){return new CP(t,e,n,r)}async function Xw(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=oe();for(const d of i){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function bP(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const g=d.batch,y=g.keys();let E=W.resolve();return y.forEach(A=>{E=E.next(()=>f.getEntry(u,A)).next(C=>{const L=d.docVersions.get(A);ve(L!==null),C.version.compareTo(L)<0&&(g.applyToRemoteDocument(C,d),C.isValidDocument()&&(C.setReadTime(d.commitVersion),f.addEntry(C)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=oe();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Zw(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function NP(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,g)=>{const y=i.get(g);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,g)));let E=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?E=E.withResumeToken(st.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),i=i.insert(g,E),function(C,L,_){return C.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(y,E,f)&&l.push(n.Ur.updateTargetData(s,E))});let u=hr(),d=oe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(jP(s,o,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(te.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(g=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return W.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.os=i,s))}function jP(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=hr();return n.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):K("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function DP(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function OP(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,W.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Yp(t,e,n){const r=ne(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ml(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Mv(t,e,n){const r=ne(t);let i=te.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const g=ne(u),y=g._s.get(f);return y!==void 0?W.resolve(g.os.get(y)):g.Ur.getTargetData(d,f)}(r,o,Dn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:oe())).next(l=>(MP(r,S4(e),l),{documents:l,Ts:s})))}function MP(t,e,n){let r=t.us.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Vv{constructor(){this.activeTargetIds=b4()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VP{constructor(){this.so=new Vv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Vv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ru=null;function gf(){return Ru===null?Ru=function(){return 268435456+Math.round(2147483648*Math.random())}():Ru++,"0x"+Ru.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class $P extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=gf(),u=this.xo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,o),this.No(n,u,d,i).then(f=>(K("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw ko("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Uo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=UP[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=gf();return new Promise((o,l)=>{const u=new hw;u.setWithCredentials(!0),u.listenOnce(fw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case nc.NO_ERROR:const f=u.getResponseJson();K(dt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case nc.TIMEOUT:K(dt,`RPC '${e}' ${s} timed out`),l(new H(U.DEADLINE_EXCEEDED,"Request time out"));break;case nc.HTTP_ERROR:const g=u.getStatus();if(K(dt,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const E=y==null?void 0:y.error;if(E&&E.status&&E.message){const A=function(L){const _=L.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(_)>=0?_:U.UNKNOWN}(E.status);l(new H(A,E.message))}else l(new H(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(U.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{K(dt,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);K(dt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=gf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=gw(),l=mw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");K(dt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=o.createWebChannel(f,u);let y=!1,E=!1;const A=new WP({Io:L=>{E?K(dt,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(y||(K(dt,`Opening RPC '${e}' stream ${i} transport.`),g.open(),y=!0),K(dt,`RPC '${e}' stream ${i} sending:`,L),g.send(L))},To:()=>g.close()}),C=(L,_,v)=>{L.listen(_,x=>{try{v(x)}catch(P){setTimeout(()=>{throw P},0)}})};return C(g,Ta.EventType.OPEN,()=>{E||(K(dt,`RPC '${e}' stream ${i} transport opened.`),A.yo())}),C(g,Ta.EventType.CLOSE,()=>{E||(E=!0,K(dt,`RPC '${e}' stream ${i} transport closed`),A.So())}),C(g,Ta.EventType.ERROR,L=>{E||(E=!0,ko(dt,`RPC '${e}' stream ${i} transport errored:`,L),A.So(new H(U.UNAVAILABLE,"The operation could not be completed")))}),C(g,Ta.EventType.MESSAGE,L=>{var _;if(!E){const v=L.data[0];ve(!!v);const x=v,P=x.error||((_=x[0])===null||_===void 0?void 0:_.error);if(P){K(dt,`RPC '${e}' stream ${i} received error:`,P);const D=P.status;let M=function(S){const R=We[S];if(R!==void 0)return Ww(R)}(D),w=P.message;M===void 0&&(M=U.INTERNAL,w="Unknown error status: "+D+" with message "+P.message),E=!0,A.So(new H(M,w)),g.close()}else K(dt,`RPC '${e}' stream ${i} received:`,v),A.bo(v)}}),C(l,pw.STAT_EVENT,L=>{L.stat===Up.PROXY?K(dt,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===Up.NOPROXY&&K(dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function yf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t){return new Z4(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Jw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(dr(n.toString()),dr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zP extends eT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=tP(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?On(o.readTime):te.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Qp(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Bp(u)?{documents:iP(s,u)}:{query:sP(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Bw(s,o.resumeToken);const d=qp(s,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=Xc(s,o.snapshotVersion.toTimestamp());const d=qp(s,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=aP(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Qp(this.serializer),n.removeTarget=e,this.a_(n)}}class BP extends eT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ve(!!e.streamToken),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=rP(e.writeResults,e.commitTime),r=On(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Qp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>nP(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Gp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(U.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Gp(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(U.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class qP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(dr(n),this.D_=!1):K("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{es(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=ne(u);d.L_.add(4),await Ul(d),d.q_.set("Unknown"),d.L_.delete(4),await zd(d)}(this))})}),this.q_=new qP(r,i)}}async function zd(t){if(es(t))for(const e of t.B_)await e(!0)}async function Ul(t){for(const e of t.B_)await e(!1)}function tT(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Wg(n)?Ug(n):zo(n).r_()&&Fg(n,e))}function Vg(t,e){const n=ne(t),r=zo(n);n.N_.delete(e),r.r_()&&nT(n,e),n.N_.size===0&&(r.r_()?r.o_():es(n)&&n.q_.set("Unknown"))}function Fg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}zo(t).A_(e)}function nT(t,e){t.Q_.xe(e),zo(t).R_(e)}function Ug(t){t.Q_=new K4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),zo(t).start(),t.q_.v_()}function Wg(t){return es(t)&&!zo(t).n_()&&t.N_.size>0}function es(t){return ne(t).L_.size===0}function rT(t){t.Q_=void 0}async function KP(t){t.q_.set("Online")}async function QP(t){t.N_.forEach((e,n)=>{Fg(t,e)})}async function YP(t,e){rT(t),Wg(t)?(t.q_.M_(e),Ug(t)):t.q_.set("Unknown")}async function XP(t,e,n){if(t.q_.set("Online"),e instanceof zw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zc(t,r)}else if(e instanceof sc?t.Q_.Ke(e):e instanceof $w?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const r=await Zw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(st.EMPTY_BYTE_STRING,f.snapshotVersion)),nT(s,u);const g=new Nr(f.target,u,d,f.sequenceNumber);Fg(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await Zc(t,r)}}async function Zc(t,e,n){if(!Ml(e))throw e;t.L_.add(1),await Ul(t),t.q_.set("Offline"),n||(n=()=>Zw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await zd(t)})}function iT(t,e){return e().catch(n=>Zc(t,n,e))}async function Bd(t){const e=ne(t),n=ti(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ZP(e);)try{const i=await DP(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,JP(e,i)}catch(i){await Zc(e,i)}sT(e)&&oT(e)}function ZP(t){return es(t)&&t.O_.length<10}function JP(t,e){t.O_.push(e);const n=ti(t);n.r_()&&n.V_&&n.m_(e.mutations)}function sT(t){return es(t)&&!ti(t).n_()&&t.O_.length>0}function oT(t){ti(t).start()}async function eb(t){ti(t).p_()}async function tb(t){const e=ti(t);for(const n of t.O_)e.m_(n.mutations)}async function nb(t,e,n){const r=t.O_.shift(),i=bg.from(r,e,n);await iT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Bd(t)}async function rb(t,e){e&&ti(t).V_&&await async function(r,i){if(function(o){return H4(o)&&o!==U.ABORTED}(i.code)){const s=r.O_.shift();ti(r).s_(),await iT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Bd(r)}}(t,e),sT(t)&&oT(t)}async function Uv(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=es(n);n.L_.add(3),await Ul(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await zd(n)}async function ib(t,e){const n=ne(t);e?(n.L_.delete(2),await zd(n)):e||(n.L_.add(2),await Ul(n),n.q_.set("Unknown"))}function zo(t){return t.K_||(t.K_=function(n,r,i){const s=ne(n);return s.w_(),new zP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:KP.bind(null,t),Ro:QP.bind(null,t),mo:YP.bind(null,t),d_:XP.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Wg(t)?Ug(t):t.q_.set("Unknown")):(await t.K_.stop(),rT(t))})),t.K_}function ti(t){return t.U_||(t.U_=function(n,r,i){const s=ne(n);return s.w_(),new BP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:eb.bind(null,t),mo:rb.bind(null,t),f_:tb.bind(null,t),g_:nb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Bd(t)):(await t.U_.stop(),t.O_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new $g(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zg(t,e){if(dr("AsyncQueue",`${e}: ${t}`),Ml(t))return new H(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=Ia(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new co(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof co)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new co;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(){this.W_=new je(Y.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ee():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class xo{constructor(e,n,r,i,s,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new xo(e,n,co.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Md(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class ob{constructor(){this.queries=$v(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=$v(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new H(U.ABORTED,"Firestore shutting down"))}}function $v(){return new $o(t=>Lw(t),Md)}async function aT(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new sb,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=zg(o,`Initialization of query '${Vs(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Bg(n)}async function lT(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ab(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Bg(n)}function lb(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Bg(t){t.Y_.forEach(e=>{e.next()})}var Xp,zv;(zv=Xp||(Xp={})).ea="default",zv.Cache="cache";class uT{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new xo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Xp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.key=e}}class dT{constructor(e){this.key=e}}class ub{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=oe(),this.mutatedKeys=oe(),this.Aa=Cw(e),this.Ra=new co(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Wv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const y=i.get(f),E=Vd(this.query,g)?g:null,A=!!y&&this.mutatedKeys.has(y.key),C=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let L=!1;y&&E?y.data.isEqual(E.data)?A!==C&&(r.track({type:3,doc:E}),L=!0):this.ga(y,E)||(r.track({type:2,doc:E}),L=!0,(u&&this.Aa(E,u)>0||d&&this.Aa(E,d)<0)&&(l=!0)):!y&&E?(r.track({type:0,doc:E}),L=!0):y&&!E&&(r.track({type:1,doc:y}),L=!0,(u||d)&&(l=!0)),L&&(E?(o=o.add(E),s=C?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,g)=>function(E,A){const C=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return C(E)-C(A)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new xo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Wv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=oe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new dT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new cT(r))}),n}ba(e){this.Ta=e.Ts,this.da=oe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return xo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class cb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class db{constructor(e){this.key=e,this.va=!1}}class hb{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new $o(l=>Lw(l),Md),this.Ma=new Map,this.xa=new Set,this.Oa=new je(Y.comparator),this.Na=new Map,this.La=new Dg,this.Ba={},this.ka=new Map,this.qa=Io.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function fb(t,e,n=!0){const r=yT(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await hT(r,e,n,!0),i}async function pb(t,e){const n=yT(t);await hT(n,e,!0,!1)}async function hT(t,e,n,r){const i=await OP(t.localStore,Dn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await mb(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&tT(t.remoteStore,i),l}async function mb(t,e,n,r,i){t.Ka=(g,y,E)=>async function(C,L,_,v){let x=L.view.ma(_);x.ns&&(x=await Mv(C.localStore,L.query,!1).then(({documents:w})=>L.view.ma(w,x)));const P=v&&v.targetChanges.get(L.targetId),D=v&&v.targetMismatches.get(L.targetId)!=null,M=L.view.applyChanges(x,C.isPrimaryClient,P,D);return Hv(C,L.targetId,M.wa),M.snapshot}(t,g,y,E);const s=await Mv(t.localStore,e,!0),o=new ub(e,s.Ts),l=o.ma(s.documents),u=Fl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(l,t.isPrimaryClient,u);Hv(t,n,d.wa);const f=new cb(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function gb(t,e,n){const r=ne(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Md(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Yp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Vg(r.remoteStore,i.targetId),Zp(r,i.targetId)}).catch(Ol)):(Zp(r,i.targetId),await Yp(r.localStore,i.targetId,!0))}async function yb(t,e){const n=ne(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Vg(n.remoteStore,r.targetId))}async function vb(t,e,n){const r=xb(t);try{const i=await function(o,l){const u=ne(o),d=He.now(),f=l.reduce((E,A)=>E.add(A.key),oe());let g,y;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let A=hr(),C=oe();return u.cs.getEntries(E,f).next(L=>{A=L,A.forEach((_,v)=>{v.isValidDocument()||(C=C.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,A)).next(L=>{g=L;const _=[];for(const v of l){const x=U4(v,g.get(v.key).overlayedDocument);x!=null&&_.push(new ui(v.key,x,Ew(x.value.mapValue),en.exists(!0)))}return u.mutationQueue.addMutationBatch(E,d,_,l)}).next(L=>{y=L;const _=L.applyToLocalDocumentSet(g,C);return u.documentOverlayCache.saveOverlays(E,L.batchId,_)})}).then(()=>({batchId:y.batchId,changes:bw(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new je(de)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,i.batchId,n),await Wl(r,i.changes),await Bd(r.remoteStore)}catch(i){const s=zg(i,"Failed to persist write");n.reject(s)}}async function fT(t,e){const n=ne(t);try{const r=await NP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ve(o.va):i.removedDocuments.size>0&&(ve(o.va),o.va=!1))}),await Wl(n,r,e)}catch(r){await Ol(r)}}function Bv(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let d=!1;u.queries.forEach((f,g)=>{for(const y of g.j_)y.Z_(l)&&(d=!0)}),d&&Bg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _b(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new je(Y.comparator);o=o.insert(s,pt.newNoDocument(s,te.min()));const l=oe().add(s),u=new Wd(te.min(),new Map,new je(de),o,l);await fT(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Hg(r)}else await Yp(r.localStore,e,!1).then(()=>Zp(r,e,n)).catch(Ol)}async function kb(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await bP(n.localStore,e);mT(n,r,null),pT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wl(n,i)}catch(i){await Ol(i)}}async function Eb(t,e,n){const r=ne(t);try{const i=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(g=>(ve(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);mT(r,e,n),pT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wl(r,i)}catch(i){await Ol(i)}}function pT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function mT(t,e,n){const r=ne(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Zp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||gT(t,r)})}function gT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Vg(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Hg(t))}function Hv(t,e,n){for(const r of n)r instanceof cT?(t.La.addReference(r.key,e),wb(t,r)):r instanceof dT?(K("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||gT(t,r.key)):ee()}function wb(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(K("SyncEngine","New document in limbo: "+n),t.xa.add(r),Hg(t))}function Hg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Y(Ie.fromString(e)),r=t.qa.next();t.Na.set(r,new db(n)),t.Oa=t.Oa.insert(n,r),tT(t.remoteStore,new Nr(Dn(Lg(n.path)),r,"TargetPurposeLimboResolution",Tg.oe))}}async function Wl(t,e,n){const r=ne(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const g=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){i.push(d);const g=Mg.Wi(u.targetId,d);s.push(g)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,d){const f=ne(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>W.forEach(d,y=>W.forEach(y.$i,E=>f.persistence.referenceDelegate.addReference(g,y.targetId,E)).next(()=>W.forEach(y.Ui,E=>f.persistence.referenceDelegate.removeReference(g,y.targetId,E)))))}catch(g){if(!Ml(g))throw g;K("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const y=g.targetId;if(!g.fromCache){const E=f.os.get(y),A=E.snapshotVersion,C=E.withLastLimboFreeSnapshotVersion(A);f.os=f.os.insert(y,C)}}}(r.localStore,s))}async function Tb(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await Xw(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new H(U.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wl(n,r.hs)}}function Ib(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return oe().add(r.key);{let i=oe();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function yT(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ib.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_b.bind(null,e),e.Ca.d_=ab.bind(null,e.eventManager),e.Ca.$a=lb.bind(null,e.eventManager),e}function xb(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Eb.bind(null,e),e}class Jc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$d(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return PP(this.persistence,new LP,e.initialUser,this.serializer)}Ga(e){return new SP(Og.Zr,this.serializer)}Wa(e){return new VP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jc.provider={build:()=>new Jc};class Jp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tb.bind(null,this.syncEngine),await ib(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ob}()}createDatastore(e){const n=$d(e.databaseInfo.databaseId),r=function(s){return new $P(s)}(e.databaseInfo);return function(s,o,l,u){return new HP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new GP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Bv(this.syncEngine,n,0),function(){return Fv.D()?new Fv:new FP}())}createSyncEngine(e,n){return function(i,s,o,l,u,d,f){const g=new hb(i,s,o,l,u,d);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);K("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ul(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Jp.provider={build:()=>new Jp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):dr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ht.UNAUTHENTICATED,this.clientId=vw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{K("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=zg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vf(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Xw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ab(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Uv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Uv(e.remoteStore,i)),t._onlineComponents=e}async function Ab(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await vf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ko("Error using user provided cache. Falling back to memory cache: "+n),await vf(t,new Jc)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await vf(t,new Jc);return t._offlineComponents}async function _T(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await qv(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await qv(t,new Jp))),t._onlineComponents}function Rb(t){return _T(t).then(e=>e.syncEngine)}async function kT(t){const e=await _T(t),n=e.eventManager;return n.onListen=fb.bind(null,e.syncEngine),n.onUnlisten=gb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=pb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=yb.bind(null,e.syncEngine),n}function Lb(t,e,n={}){const r=new ir;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const f=new vT({next:y=>{f.Za(),o.enqueueAndForget(()=>lT(s,g));const E=y.docs.has(l);!E&&y.fromCache?d.reject(new H(U.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&y.fromCache&&u&&u.source==="server"?d.reject(new H(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(y)},error:y=>d.reject(y)}),g=new uT(Lg(l.path),f,{includeMetadataChanges:!0,_a:!0});return aT(s,g)}(await kT(t),t.asyncQueue,e,n,r)),r.promise}function Cb(t,e,n={}){const r=new ir;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const f=new vT({next:y=>{f.Za(),o.enqueueAndForget(()=>lT(s,g)),y.fromCache&&u.source==="server"?d.reject(new H(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(y)},error:y=>d.reject(y)}),g=new uT(l,f,{includeMetadataChanges:!0,_a:!0});return aT(s,g)}(await kT(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function ET(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t,e,n){if(!n)throw new H(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Pb(t,e,n,r){if(e===!0&&r===!0)throw new H(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kv(t){if(!Y.isDocumentKey(t))throw new H(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qv(t){if(Y.isDocumentKey(t))throw new H(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function In(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hd(t);throw new H(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Pb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ET((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new KC;switch(r.type){case"firstParty":return new ZC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Gv.get(n);r&&(K("ComponentProvider","Removing Datastore"),Gv.delete(n),r.terminate())}(this),Promise.resolve()}}function bb(t,e,n,r={}){var i;const s=(t=In(t,qd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ko("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ht.MOCK_USER;else{l=k2(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new H(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ht(d)}t._authCredentials=new QC(new yw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ci(this.firestore,e,this._query)}}class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class Gr extends ci{constructor(e,n,r){super(e,n,Lg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new Y(e))}withConverter(e){return new Gr(this.firestore,e,this._path)}}function pn(t,e,...n){if(t=Ne(t),wT("collection","path",e),t instanceof qd){const r=Ie.fromString(e,...n);return Qv(r),new Gr(t,null,r)}{if(!(t instanceof wt||t instanceof Gr))throw new H(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Qv(r),new Gr(t.firestore,null,r)}}function tn(t,e,...n){if(t=Ne(t),arguments.length===1&&(e=vw.newId()),wT("doc","path",e),t instanceof qd){const r=Ie.fromString(e,...n);return Kv(r),new wt(t,null,new Y(r))}{if(!(t instanceof wt||t instanceof Gr))throw new H(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Kv(r),new wt(t.firestore,t instanceof Gr?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Jw(this,"async_queue_retry"),this.Vu=()=>{const r=yf();r&&K("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=yf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=yf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ir;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ml(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw dr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=$g.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class ts extends qd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Xv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xv(e),this._firestoreClient=void 0,await e}}}function Nb(t,e){const n=typeof t=="object"?t:bd(),r=typeof t=="string"?t:"(default)",i=ai(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=y2("firestore");s&&bb(i,...s)}return i}function qg(t){if(t._terminated)throw new H(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||jb(t),t._firestoreClient}function jb(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,f){return new d4(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ET(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Sb(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this._byteString=e}static fromBase64String(e){try{return new So(st.fromBase64String(e))}catch(n){throw new H(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new So(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kd=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
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
 */class Kg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=/^__.*__$/;class Ob{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ui(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vl(e,this.data,n,this.fieldTransforms)}}class TT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ui(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function IT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Qg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Qg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ed(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(IT(this.Cu)&&Db.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Mb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||$d(e)}Qu(e,n,r,i=!1){return new Qg({Cu:e,methodName:n,qu:r,path:tt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qd(t){const e=t._freezeSettings(),n=$d(t._databaseId);return new Mb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xT(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Xg("Data must be an object, but it was:",o,r);const l=ST(r,o);let u,d;if(s.merge)u=new $t(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const y=em(e,g,n);if(!o.contains(y))throw new H(U.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);RT(f,y)||f.push(y)}u=new $t(f),d=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=o.fieldTransforms;return new Ob(new Rt(l),u,d)}class Yd extends Kd{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yd}}class Yg extends Kd{_toFieldTransform(e){return new O4(e.path,new kl)}isEqual(e){return e instanceof Yg}}function Vb(t,e,n,r){const i=t.Qu(1,e,n);Xg("Data must be an object, but it was:",i,r);const s=[],o=Rt.empty();Ji(r,(u,d)=>{const f=Zg(e,u,n);d=Ne(d);const g=i.Nu(f);if(d instanceof Yd)s.push(f);else{const y=$l(d,g);y!=null&&(s.push(f),o.set(f,y))}});const l=new $t(s);return new TT(o,l,i.fieldTransforms)}function Fb(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[em(e,r,n)],u=[i];if(s.length%2!=0)throw new H(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(em(e,s[y])),u.push(s[y+1]);const d=[],f=Rt.empty();for(let y=l.length-1;y>=0;--y)if(!RT(d,l[y])){const E=l[y];let A=u[y];A=Ne(A);const C=o.Nu(E);if(A instanceof Yd)d.push(E);else{const L=$l(A,C);L!=null&&(d.push(E),f.set(E,L))}}const g=new $t(d);return new TT(f,g,o.fieldTransforms)}function Ub(t,e,n,r=!1){return $l(n,t.Qu(r?4:3,e))}function $l(t,e){if(AT(t=Ne(t)))return Xg("Unsupported field value:",e,t),ST(t,e);if(t instanceof Kd)return function(r,i){if(!IT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=$l(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return N4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=He.fromDate(r);return{timestampValue:Xc(i.serializer,s)}}if(r instanceof He){const s=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xc(i.serializer,s)}}if(r instanceof Gg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof So)return{bytesValue:Bw(i.serializer,r._byteString)};if(r instanceof wt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:jg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Kg)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Cg(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Hd(r)}`)}(t,e)}function ST(t,e){const n={};return _w(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ji(t,(r,i)=>{const s=$l(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function AT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof Gg||t instanceof So||t instanceof wt||t instanceof Kd||t instanceof Kg)}function Xg(t,e,n){if(!AT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Hd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function em(t,e,n){if((e=Ne(e))instanceof Gd)return e._internalPath;if(typeof e=="string")return Zg(t,e);throw ed("Field path arguments must be of type string or ",t,!1,void 0,n)}const Wb=new RegExp("[~\\*/\\[\\]]");function Zg(t,e,n){if(e.search(Wb)>=0)throw ed(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gd(...e.split("."))._internalPath}catch{throw ed(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ed(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(U.INVALID_ARGUMENT,l+t+u)}function RT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $b(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $b extends LT{data(){return super.data()}}function Xd(t,e){return typeof e=="string"?Zg(t,e):e instanceof Gd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jg{}class e0 extends Jg{}function tr(t,e,...n){let r=[];e instanceof Jg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof t0).length,l=s.filter(u=>u instanceof Zd).length;if(o>1||o>0&&l>0)throw new H(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Zd extends e0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Zd(e,n,r)}_apply(e){const n=this._parse(e);return CT(e._query,n),new ci(e.firestore,e.converter,Hp(e._query,n))}_parse(e){const n=Qd(e.firestore);return function(s,o,l,u,d,f,g){let y;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new H(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Jv(g,f);const E=[];for(const A of g)E.push(Zv(u,s,A));y={arrayValue:{values:E}}}else y=Zv(u,s,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Jv(g,f),y=Ub(l,o,g,f==="in"||f==="not-in");return Be.create(d,f,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function jr(t,e,n){const r=e,i=Xd("where",t);return Zd._create(i,r,n)}class t0 extends Jg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new t0(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)CT(o,u),o=Hp(o,u)}(e._query,n),new ci(e.firestore,e.converter,Hp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class n0 extends e0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new n0(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new H(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new H(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new _l(s,o)}(e._query,this._field,this._direction);return new ci(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Wo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function r0(t,e="asc"){const n=e,r=Xd("orderBy",t);return n0._create(r,n)}class i0 extends e0{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new i0(e,n,r)}_apply(e){return new ci(e.firestore,e.converter,Qc(e._query,this._limit,this._limitType))}}function Bb(t){return i0._create("limit",t,"F")}function Zv(t,e,n){if(typeof(n=Ne(n))=="string"){if(n==="")throw new H(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Rw(e)&&n.indexOf("/")!==-1)throw new H(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!Y.isDocumentKey(r))throw new H(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return kv(t,new Y(r))}if(n instanceof wt)return kv(t,n._key);throw new H(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hd(n)}.`)}function Jv(t,e){if(!Array.isArray(t)||t.length===0)throw new H(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function CT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Hb{convertValue(e,n="none"){switch(Hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ji(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ve(o.doubleValue));return new Kg(s)}convertGeoPoint(e){return new Gg(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gl(e));default:return null}}convertTimestamp(e){const n=ei(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);ve(Yw(r));const i=new yl(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(n)||dr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bT extends LT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new oc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Xd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class oc extends bT{data(e={}){return super.data(e)}}class qb{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Sa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new oc(this._firestore,this._userDataWriter,r.key,r,new Sa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new oc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Sa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new oc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Sa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Gb(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Gb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t){t=In(t,wt);const e=In(t.firestore,ts);return Lb(qg(e),t._key).then(n=>Kb(e,t,n))}class NT extends Hb{constructor(e){super(),this.firestore=e}convertBytes(e){return new So(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function Cn(t){t=In(t,ci);const e=In(t.firestore,ts),n=qg(e),r=new NT(e);return zb(t._query),Cb(n,t._query).then(i=>new qb(e,r,t,i))}function jT(t,e,n){t=In(t,wt);const r=In(t.firestore,ts),i=PT(t.converter,e);return Jd(r,[xT(Qd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,en.none())])}function nm(t,e,n,...r){t=In(t,wt);const i=In(t.firestore,ts),s=Qd(i);let o;return o=typeof(e=Ne(e))=="string"||e instanceof Gd?Fb(s,"updateDoc",t._key,e,n,r):Vb(s,"updateDoc",t._key,e),Jd(i,[o.toMutation(t._key,en.exists(!0))])}function s0(t){return Jd(In(t.firestore,ts),[new Pg(t._key,en.none())])}function DT(t,e){const n=In(t.firestore,ts),r=tn(t),i=PT(t.converter,e);return Jd(n,[xT(Qd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,en.exists(!1))]).then(()=>r)}function Jd(t,e){return function(r,i){const s=new ir;return r.asyncQueue.enqueueAndForget(async()=>vb(await Rb(r),i,s)),s.promise}(qg(t),e)}function Kb(t,e,n){const r=n.docs.get(e._key),i=new NT(t);return new bT(t,i,e._key,r,new Sa(n.hasPendingWrites,n.fromCache),e.converter)}function Tl(){return new Yg("serverTimestamp")}(function(e,n=!0){(function(i){Uo=i})(Zi),En(new sn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ts(new YC(r.getProvider("auth-internal")),new e4(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new H(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yl(d.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Dt(mv,"4.7.3",e),Dt(mv,"4.7.3","esm2017")})();const OT="@firebase/installations",o0="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=1e4,VT=`w:${o0}`,FT="FIS_v2",Qb="https://firebaseinstallations.googleapis.com/v1",Yb=60*60*1e3,Xb="installations",Zb="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qi=new Xi(Xb,Zb,Jb);function UT(t){return t instanceof an&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT({projectId:t}){return`${Qb}/projects/${t}/installations`}function $T(t){return{token:t.token,requestStatus:2,expiresIn:tN(t.expiresIn),creationTime:Date.now()}}async function zT(t,e){const r=(await e.json()).error;return qi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function BT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function eN(t,{refreshToken:e}){const n=BT(t);return n.append("Authorization",nN(e)),n}async function HT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function tN(t){return Number(t.replace("s","000"))}function nN(t){return`${FT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=WT(t),i=BT(t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={fid:n,authVersion:FT,appId:t.appId,sdkVersion:VT},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await HT(()=>fetch(r,l));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:$T(d.authToken)}}else throw await zT("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=/^[cdef][\w-]{21}$/,rm="";function oN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=aN(t);return sN.test(n)?n:rm}catch{return rm}}function aN(t){return iN(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=new Map;function KT(t,e){const n=eh(t);QT(n,e),lN(n,e)}function QT(t,e){const n=GT.get(t);if(n)for(const r of n)r(e)}function lN(t,e){const n=uN();n&&n.postMessage({key:t,fid:e}),cN()}let Ri=null;function uN(){return!Ri&&"BroadcastChannel"in self&&(Ri=new BroadcastChannel("[Firebase] FID Change"),Ri.onmessage=t=>{QT(t.data.key,t.data.fid)}),Ri}function cN(){GT.size===0&&Ri&&(Ri.close(),Ri=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN="firebase-installations-database",hN=1,Gi="firebase-installations-store";let _f=null;function a0(){return _f||(_f=S2(dN,hN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gi)}}})),_f}async function td(t,e){const n=eh(t),i=(await a0()).transaction(Gi,"readwrite"),s=i.objectStore(Gi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&KT(t,e.fid),e}async function YT(t){const e=eh(t),r=(await a0()).transaction(Gi,"readwrite");await r.objectStore(Gi).delete(e),await r.done}async function th(t,e){const n=eh(t),i=(await a0()).transaction(Gi,"readwrite"),s=i.objectStore(Gi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&KT(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l0(t){let e;const n=await th(t.appConfig,r=>{const i=fN(r),s=pN(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===rm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function fN(t){const e=t||{fid:oN(),registrationStatus:0};return XT(e)}function pN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(qi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=mN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:gN(t)}:{installationEntry:e}}async function mN(t,e){try{const n=await rN(t,e);return td(t.appConfig,n)}catch(n){throw UT(n)&&n.customData.serverCode===409?await YT(t.appConfig):await td(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function gN(t){let e=await e_(t.appConfig);for(;e.registrationStatus===1;)await qT(100),e=await e_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await l0(t);return r||n}return e}function e_(t){return th(t,e=>{if(!e)throw qi.create("installation-not-found");return XT(e)})}function XT(t){return yN(t)?{fid:t.fid,registrationStatus:0}:t}function yN(t){return t.registrationStatus===1&&t.registrationTime+MT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vN({appConfig:t,heartbeatServiceProvider:e},n){const r=_N(t,n),i=eN(t,n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={installation:{sdkVersion:VT,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await HT(()=>fetch(r,l));if(u.ok){const d=await u.json();return $T(d)}else throw await zT("Generate Auth Token",u)}function _N(t,{fid:e}){return`${WT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(t,e=!1){let n;const r=await th(t.appConfig,s=>{if(!ZT(s))throw qi.create("not-registered");const o=s.authToken;if(!e&&wN(o))return s;if(o.requestStatus===1)return n=kN(t,e),s;{if(!navigator.onLine)throw qi.create("app-offline");const l=IN(s);return n=EN(t,l),l}});return n?await n:r.authToken}async function kN(t,e){let n=await t_(t.appConfig);for(;n.authToken.requestStatus===1;)await qT(100),n=await t_(t.appConfig);const r=n.authToken;return r.requestStatus===0?u0(t,e):r}function t_(t){return th(t,e=>{if(!ZT(e))throw qi.create("not-registered");const n=e.authToken;return xN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function EN(t,e){try{const n=await vN(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await td(t.appConfig,r),n}catch(n){if(UT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await YT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await td(t.appConfig,r)}throw n}}function ZT(t){return t!==void 0&&t.registrationStatus===2}function wN(t){return t.requestStatus===2&&!TN(t)}function TN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Yb}function IN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function xN(t){return t.requestStatus===1&&t.requestTime+MT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SN(t){const e=t,{installationEntry:n,registrationPromise:r}=await l0(e);return r?r.catch(console.error):u0(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AN(t,e=!1){const n=t;return await RN(n),(await u0(n,e)).token}async function RN(t){const{registrationPromise:e}=await l0(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(t){if(!t||!t.options)throw kf("App Configuration");if(!t.name)throw kf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw kf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function kf(t){return qi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="installations",CN="installations-internal",PN=t=>{const e=t.getProvider("app").getImmediate(),n=LN(e),r=ai(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},bN=t=>{const e=t.getProvider("app").getImmediate(),n=ai(e,JT).getImmediate();return{getId:()=>SN(n),getToken:i=>AN(n,i)}};function NN(){En(new sn(JT,PN,"PUBLIC")),En(new sn(CN,bN,"PRIVATE"))}NN();Dt(OT,o0);Dt(OT,o0,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="analytics",jN="firebase_id",DN="origin",ON=60*1e3,MN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",c0="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Pd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Bt=new Xi("analytics","Analytics",VN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FN(t){if(!t.startsWith(c0)){const e=Bt.create("invalid-gtag-resource",{gtagURL:t});return Ot.warn(e.message),""}return t}function eI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function UN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function WN(t,e){const n=UN("firebase-js-sdk-policy",{createScriptURL:FN}),r=document.createElement("script"),i=`${c0}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function $N(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function zN(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await eI(n)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(l){Ot.error(l)}t("config",i,s)}async function BN(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await eI(n);for(const u of o){const d=l.find(g=>g.measurementId===u),f=d&&e[d.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Ot.error(s)}}function HN(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await BN(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await zN(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,d]=o;t("get",l,u,d)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Ot.error(l)}}return i}function qN(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=HN(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function GN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(c0)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=30,QN=1e3;class YN{constructor(e={},n=QN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const tI=new YN;function XN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ZN(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:XN(r)},s=MN.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Bt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function JN(t,e=tI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Bt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Bt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new nj;return setTimeout(async()=>{l.abort()},ON),nI({appId:r,apiKey:i,measurementId:s},o,l,e)}async function nI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=tI){var s;const{appId:o,measurementId:l}=t;try{await ej(r,e)}catch(u){if(l)return Ot.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await ZN(t);return i.deleteThrottleMetadata(o),u}catch(u){const d=u;if(!tj(d)){if(i.deleteThrottleMetadata(o),l)return Ot.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:l};throw u}const f=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?Uy(n,i.intervalMillis,KN):Uy(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,g),Ot.debug(`Calling attemptFetch again in ${f} millis`),nI(t,g,r,i)}}function ej(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Bt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function tj(t){if(!(t instanceof an)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class nj{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function rj(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ij(){if(w2())try{await T2()}catch(t){return Ot.warn(Bt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ot.warn(Bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function sj(t,e,n,r,i,s,o){var l;const u=JN(t);u.then(E=>{n[E.measurementId]=E.appId,t.options.measurementId&&E.measurementId!==t.options.measurementId&&Ot.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>Ot.error(E)),e.push(u);const d=ij().then(E=>{if(E)return r.getId()}),[f,g]=await Promise.all([u,d]);GN(s)||WN(s,f.measurementId),i("js",new Date);const y=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return y[DN]="firebase",y.update=!0,g!=null&&(y[jN]=g),i("config",f.measurementId,y),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oj{constructor(e){this.app=e}_delete(){return delete za[this.app.options.appId],Promise.resolve()}}let za={},n_=[];const r_={};let Ef="dataLayer",aj="gtag",i_,rI,s_=!1;function lj(){const t=[];if(E2()&&t.push("This is a browser extension environment."),cR()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Bt.create("invalid-analytics-context",{errorInfo:e});Ot.warn(n.message)}}function uj(t,e,n){lj();const r=t.options.appId;if(!r)throw Bt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ot.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Bt.create("no-api-key");if(za[r]!=null)throw Bt.create("already-exists",{id:r});if(!s_){$N(Ef);const{wrappedGtag:s,gtagCore:o}=qN(za,n_,r_,Ef,aj);rI=s,i_=o,s_=!0}return za[r]=sj(t,n_,r_,e,i_,Ef,n),new oj(t)}function cj(t=bd()){t=Ne(t);const e=ai(t,nd);return e.isInitialized()?e.getImmediate():dj(t)}function dj(t,e={}){const n=ai(t,nd);if(n.isInitialized()){const i=n.getImmediate();if(hl(e,n.getOptions()))return i;throw Bt.create("already-initialized")}return n.initialize({options:e})}function hj(t,e,n,r){t=Ne(t),rj(rI,za[t.app.options.appId],e,n,r).catch(i=>Ot.error(i))}const o_="@firebase/analytics",a_="0.10.8";function fj(){En(new sn(nd,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return uj(r,i,n)},"PUBLIC")),En(new sn("analytics-internal",t,"PRIVATE")),Dt(o_,a_),Dt(o_,a_,"esm2017");function t(e){try{const n=e.getProvider(nd).getImmediate();return{logEvent:(r,i,s)=>hj(n,r,i,s)}}catch(n){throw Bt.create("interop-component-reg-failed",{reason:n})}}}fj();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="firebasestorage.googleapis.com",pj="storageBucket",mj=2*60*1e3,gj=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends an{constructor(e,n,r=0){super(wf(e),`Firebase Storage: ${n} (${wf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Un.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Vn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Vn||(Vn={}));function wf(t){return"storage/"+t}function yj(){const t="An unknown error occurred, please check the error payload for server response.";return new Un(Vn.UNKNOWN,t)}function vj(){return new Un(Vn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _j(){return new Un(Vn.CANCELED,"User canceled the upload/download.")}function kj(t){return new Un(Vn.INVALID_URL,"Invalid URL '"+t+"'.")}function Ej(t){return new Un(Vn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function l_(t){return new Un(Vn.INVALID_ARGUMENT,t)}function sI(){return new Un(Vn.APP_DELETED,"The Firebase app was deleted.")}function wj(t){return new Un(Vn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=mn.makeFromUrl(e,n)}catch{return new mn(e,"")}if(r.path==="")return r;throw Ej(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function d(P){P.path_=decodeURIComponent(P.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",E=new RegExp(`^https?://${g}/${f}/b/${i}/o${y}`,"i"),A={bucket:1,path:3},C=n===iI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,L="([^?#]*)",_=new RegExp(`^https?://${C}/${i}/${L}`,"i"),x=[{regex:l,indices:u,postModify:s},{regex:E,indices:A,postModify:d},{regex:_,indices:{bucket:1,path:2},postModify:d}];for(let P=0;P<x.length;P++){const D=x[P],M=D.regex.exec(e);if(M){const w=M[D.indices.bucket];let k=M[D.indices.path];k||(k=""),r=new mn(w,k),D.postModify(r);break}}if(r==null)throw kj(e);return r}}class Tj{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ij(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let d=!1;function f(...L){d||(d=!0,e.apply(null,L))}function g(L){i=setTimeout(()=>{i=null,t(E,u())},L)}function y(){s&&clearTimeout(s)}function E(L,..._){if(d){y();return}if(L){y(),f.call(null,L,..._);return}if(u()||o){y(),f.call(null,L,..._);return}r<64&&(r*=2);let x;l===1?(l=2,x=0):x=(r+Math.random())*1e3,g(x)}let A=!1;function C(L){A||(A=!0,y(),!d&&(i!==null?(L||(l=2),clearTimeout(i),g(0)):L||(l=1)))}return g(0),s=setTimeout(()=>{o=!0,C(!0)},n),C}function xj(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sj(t){return t!==void 0}function u_(t,e,n,r){if(r<e)throw l_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw l_(`Invalid value for '${t}'. Expected ${n} or less.`)}function Aj(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var rd;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(rd||(rd={}));/**
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
 */function Rj(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lj{constructor(e,n,r,i,s,o,l,u,d,f,g,y=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=g,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,A)=>{this.resolve_=E,this.reject_=A,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Lu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===rd.NO_ERROR,u=s.getStatus();if(!l||Rj(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===rd.ABORT;r(!1,new Lu(!1,null,f));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new Lu(d,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Sj(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=yj();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?sI():_j();o(u)}else{const u=vj();o(u)}};this.canceled_?n(!1,new Lu(!1,null,!0)):this.backoffId_=Ij(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xj(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Lu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Cj(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Pj(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function bj(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Nj(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function jj(t,e,n,r,i,s,o=!0){const l=Aj(t.urlParams),u=t.url+l,d=Object.assign({},t.headers);return bj(d,e),Cj(d,n),Pj(d,s),Nj(d,r),new Lj(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dj(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Oj(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n){this._service=e,n instanceof mn?this._location=n:this._location=mn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new id(e,n)}get root(){const e=new mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Oj(this._location.path)}get storage(){return this._service}get parent(){const e=Dj(this._location.path);if(e===null)return null;const n=new mn(this._location.bucket,e);return new id(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw wj(e)}}function c_(t,e){const n=e==null?void 0:e[pj];return n==null?null:mn.makeFromBucketSpec(n,t)}function Mj(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:k2(i,t.app.options.projectId))}class Vj{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=iI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mj,this._maxUploadRetryTime=gj,this._requests=new Set,i!=null?this._bucket=mn.makeFromBucketSpec(i,this._host):this._bucket=c_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mn.makeFromBucketSpec(this._url,e):this._bucket=c_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){u_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){u_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new id(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Tj(sI());{const o=jj(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const d_="@firebase/storage",h_="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI="storage";function Fj(t=bd(),e){t=Ne(t);const r=ai(t,oI).getImmediate({identifier:e}),i=y2("storage");return i&&Uj(r,...i),r}function Uj(t,e,n,r={}){Mj(t,e,n,r)}function Wj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Vj(n,r,i,e,Zi)}function $j(){En(new sn(oI,Wj,"PUBLIC").setMultipleInstances(!0)),Dt(d_,h_,""),Dt(d_,h_,"esm2017")}$j();const zj={apiKey:"AIzaSyD7J2eVv6O0M4l39GToo_kVOeQZH8nQW0w",authDomain:"hyacinthattendance.firebaseapp.com",projectId:"hyacinthattendance",storageBucket:"hyacinthattendance.appspot.com",messagingSenderId:"12316915447",appId:"1:12316915447:web:2f8a7daf07918a0c2f45f2",measurementId:"G-040M8BP5NJ"},nh=A2(zj),gn=cw(nh),Me=Nb(nh);Fj(nh);console.log("Using production Firebase services");let Bj=null;try{Bj=cj(nh),console.log("Analytics initialized")}catch(t){console.error("Error initializing analytics:",t)}const d0=new Qn;d0.setCustomParameters({prompt:"select_account"});d0.addScope("email");d0.addScope("profile");var Ct=function(){return Ct=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ct.apply(this,arguments)};function sd(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Te="-ms-",Ba="-moz-",fe="-webkit-",aI="comm",rh="rule",h0="decl",Hj="@import",lI="@keyframes",qj="@layer",uI=Math.abs,f0=String.fromCharCode,im=Object.assign;function Gj(t,e){return Ye(t,0)^45?(((e<<2^Ye(t,0))<<2^Ye(t,1))<<2^Ye(t,2))<<2^Ye(t,3):0}function cI(t){return t.trim()}function Gn(t,e){return(t=e.exec(t))?t[0]:t}function re(t,e,n){return t.replace(e,n)}function ac(t,e,n){return t.indexOf(e,n)}function Ye(t,e){return t.charCodeAt(e)|0}function Ao(t,e,n){return t.slice(e,n)}function An(t){return t.length}function dI(t){return t.length}function Aa(t,e){return e.push(t),t}function Kj(t,e){return t.map(e).join("")}function f_(t,e){return t.filter(function(n){return!Gn(n,e)})}var ih=1,Ro=1,hI=0,on=0,$e=0,Bo="";function sh(t,e,n,r,i,s,o,l){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:ih,column:Ro,length:o,return:"",siblings:l}}function wr(t,e){return im(sh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ps(t){for(;t.root;)t=wr(t.root,{children:[t]});Aa(t,t.siblings)}function Qj(){return $e}function Yj(){return $e=on>0?Ye(Bo,--on):0,Ro--,$e===10&&(Ro=1,ih--),$e}function _n(){return $e=on<hI?Ye(Bo,on++):0,Ro++,$e===10&&(Ro=1,ih++),$e}function Ni(){return Ye(Bo,on)}function lc(){return on}function oh(t,e){return Ao(Bo,t,e)}function sm(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Xj(t){return ih=Ro=1,hI=An(Bo=t),on=0,[]}function Zj(t){return Bo="",t}function Tf(t){return cI(oh(on-1,om(t===91?t+2:t===40?t+1:t)))}function Jj(t){for(;($e=Ni())&&$e<33;)_n();return sm(t)>2||sm($e)>3?"":" "}function e5(t,e){for(;--e&&_n()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return oh(t,lc()+(e<6&&Ni()==32&&_n()==32))}function om(t){for(;_n();)switch($e){case t:return on;case 34:case 39:t!==34&&t!==39&&om($e);break;case 40:t===41&&om(t);break;case 92:_n();break}return on}function t5(t,e){for(;_n()&&t+$e!==57;)if(t+$e===84&&Ni()===47)break;return"/*"+oh(e,on-1)+"*"+f0(t===47?t:_n())}function n5(t){for(;!sm(Ni());)_n();return oh(t,on)}function r5(t){return Zj(uc("",null,null,null,[""],t=Xj(t),0,[0],t))}function uc(t,e,n,r,i,s,o,l,u){for(var d=0,f=0,g=o,y=0,E=0,A=0,C=1,L=1,_=1,v=0,x="",P=i,D=s,M=r,w=x;L;)switch(A=v,v=_n()){case 40:if(A!=108&&Ye(w,g-1)==58){ac(w+=re(Tf(v),"&","&\f"),"&\f",uI(d?l[d-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:w+=Tf(v);break;case 9:case 10:case 13:case 32:w+=Jj(A);break;case 92:w+=e5(lc()-1,7);continue;case 47:switch(Ni()){case 42:case 47:Aa(i5(t5(_n(),lc()),e,n,u),u);break;default:w+="/"}break;case 123*C:l[d++]=An(w)*_;case 125*C:case 59:case 0:switch(v){case 0:case 125:L=0;case 59+f:_==-1&&(w=re(w,/\f/g,"")),E>0&&An(w)-g&&Aa(E>32?m_(w+";",r,n,g-1,u):m_(re(w," ","")+";",r,n,g-2,u),u);break;case 59:w+=";";default:if(Aa(M=p_(w,e,n,d,f,i,l,x,P=[],D=[],g,s),s),v===123)if(f===0)uc(w,e,M,M,P,s,g,l,D);else switch(y===99&&Ye(w,3)===110?100:y){case 100:case 108:case 109:case 115:uc(t,M,M,r&&Aa(p_(t,M,M,0,0,i,l,x,i,P=[],g,D),D),i,D,g,l,r?P:D);break;default:uc(w,M,M,M,[""],D,0,l,D)}}d=f=E=0,C=_=1,x=w="",g=o;break;case 58:g=1+An(w),E=A;default:if(C<1){if(v==123)--C;else if(v==125&&C++==0&&Yj()==125)continue}switch(w+=f0(v),v*C){case 38:_=f>0?1:(w+="\f",-1);break;case 44:l[d++]=(An(w)-1)*_,_=1;break;case 64:Ni()===45&&(w+=Tf(_n())),y=Ni(),f=g=An(x=w+=n5(lc())),v++;break;case 45:A===45&&An(w)==2&&(C=0)}}return s}function p_(t,e,n,r,i,s,o,l,u,d,f,g){for(var y=i-1,E=i===0?s:[""],A=dI(E),C=0,L=0,_=0;C<r;++C)for(var v=0,x=Ao(t,y+1,y=uI(L=o[C])),P=t;v<A;++v)(P=cI(L>0?E[v]+" "+x:re(x,/&\f/g,E[v])))&&(u[_++]=P);return sh(t,e,n,i===0?rh:l,u,d,f,g)}function i5(t,e,n,r){return sh(t,e,n,aI,f0(Qj()),Ao(t,2,-2),0,r)}function m_(t,e,n,r,i){return sh(t,e,n,h0,Ao(t,0,r),Ao(t,r+1,-1),r,i)}function fI(t,e,n){switch(Gj(t,e)){case 5103:return fe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return fe+t+t;case 4789:return Ba+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return fe+t+Ba+t+Te+t+t;case 5936:switch(Ye(t,e+11)){case 114:return fe+t+Te+re(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return fe+t+Te+re(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return fe+t+Te+re(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return fe+t+Te+t+t;case 6165:return fe+t+Te+"flex-"+t+t;case 5187:return fe+t+re(t,/(\w+).+(:[^]+)/,fe+"box-$1$2"+Te+"flex-$1$2")+t;case 5443:return fe+t+Te+"flex-item-"+re(t,/flex-|-self/g,"")+(Gn(t,/flex-|baseline/)?"":Te+"grid-row-"+re(t,/flex-|-self/g,""))+t;case 4675:return fe+t+Te+"flex-line-pack"+re(t,/align-content|flex-|-self/g,"")+t;case 5548:return fe+t+Te+re(t,"shrink","negative")+t;case 5292:return fe+t+Te+re(t,"basis","preferred-size")+t;case 6060:return fe+"box-"+re(t,"-grow","")+fe+t+Te+re(t,"grow","positive")+t;case 4554:return fe+re(t,/([^-])(transform)/g,"$1"+fe+"$2")+t;case 6187:return re(re(re(t,/(zoom-|grab)/,fe+"$1"),/(image-set)/,fe+"$1"),t,"")+t;case 5495:case 3959:return re(t,/(image-set\([^]*)/,fe+"$1$`$1");case 4968:return re(re(t,/(.+:)(flex-)?(.*)/,fe+"box-pack:$3"+Te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+fe+t+t;case 4200:if(!Gn(t,/flex-|baseline/))return Te+"grid-column-align"+Ao(t,e)+t;break;case 2592:case 3360:return Te+re(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Gn(r.props,/grid-\w+-end/)})?~ac(t+(n=n[e].value),"span",0)?t:Te+re(t,"-start","")+t+Te+"grid-row-span:"+(~ac(n,"span",0)?Gn(n,/\d+/):+Gn(n,/\d+/)-+Gn(t,/\d+/))+";":Te+re(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Gn(r.props,/grid-\w+-start/)})?t:Te+re(re(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return re(t,/(.+)-inline(.+)/,fe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(An(t)-1-e>6)switch(Ye(t,e+1)){case 109:if(Ye(t,e+4)!==45)break;case 102:return re(t,/(.+:)(.+)-([^]+)/,"$1"+fe+"$2-$3$1"+Ba+(Ye(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~ac(t,"stretch",0)?fI(re(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return re(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,u,d){return Te+i+":"+s+d+(o?Te+i+"-span:"+(l?u:+u-+s)+d:"")+t});case 4949:if(Ye(t,e+6)===121)return re(t,":",":"+fe)+t;break;case 6444:switch(Ye(t,Ye(t,14)===45?18:11)){case 120:return re(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+fe+(Ye(t,14)===45?"inline-":"")+"box$3$1"+fe+"$2$3$1"+Te+"$2box$3")+t;case 100:return re(t,":",":"+Te)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(t,"scroll-","scroll-snap-")+t}return t}function od(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function s5(t,e,n,r){switch(t.type){case qj:if(t.children.length)break;case Hj:case h0:return t.return=t.return||t.value;case aI:return"";case lI:return t.return=t.value+"{"+od(t.children,r)+"}";case rh:if(!An(t.value=t.props.join(",")))return""}return An(n=od(t.children,r))?t.return=t.value+"{"+n+"}":""}function o5(t){var e=dI(t);return function(n,r,i,s){for(var o="",l=0;l<e;l++)o+=t[l](n,r,i,s)||"";return o}}function a5(t){return function(e){e.root||(e=e.return)&&t(e)}}function l5(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case h0:t.return=fI(t.value,t.length,n);return;case lI:return od([wr(t,{value:re(t.value,"@","@"+fe)})],r);case rh:if(t.length)return Kj(n=t.props,function(i){switch(Gn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ps(wr(t,{props:[re(i,/:(read-\w+)/,":"+Ba+"$1")]})),Ps(wr(t,{props:[i]})),im(t,{props:f_(n,r)});break;case"::placeholder":Ps(wr(t,{props:[re(i,/:(plac\w+)/,":"+fe+"input-$1")]})),Ps(wr(t,{props:[re(i,/:(plac\w+)/,":"+Ba+"$1")]})),Ps(wr(t,{props:[re(i,/:(plac\w+)/,Te+"input-$1")]})),Ps(wr(t,{props:[i]})),im(t,{props:f_(n,r)});break}return""})}}var u5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ft={},Lo=typeof process<"u"&&Ft!==void 0&&(Ft.REACT_APP_SC_ATTR||Ft.SC_ATTR)||"data-styled",pI="active",mI="data-styled-version",ah="6.1.17",p0=`/*!sc*/
`,ad=typeof window<"u"&&"HTMLElement"in window,c5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ft!==void 0&&Ft.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ft.REACT_APP_SC_DISABLE_SPEEDY!==""?Ft.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ft.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ft!==void 0&&Ft.SC_DISABLE_SPEEDY!==void 0&&Ft.SC_DISABLE_SPEEDY!==""&&Ft.SC_DISABLE_SPEEDY!=="false"&&Ft.SC_DISABLE_SPEEDY),lh=Object.freeze([]),Co=Object.freeze({});function d5(t,e,n){return n===void 0&&(n=Co),t.theme!==n.theme&&t.theme||e||n.theme}var gI=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),h5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,f5=/(^-|-$)/g;function g_(t){return t.replace(h5,"-").replace(f5,"")}var p5=/(a)(d)/gi,Cu=52,y_=function(t){return String.fromCharCode(t+(t>25?39:97))};function am(t){var e,n="";for(e=Math.abs(t);e>Cu;e=e/Cu|0)n=y_(e%Cu)+n;return(y_(e%Cu)+n).replace(p5,"$1-$2")}var If,yI=5381,eo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},vI=function(t){return eo(yI,t)};function m5(t){return am(vI(t)>>>0)}function g5(t){return t.displayName||t.name||"Component"}function xf(t){return typeof t=="string"&&!0}var _I=typeof Symbol=="function"&&Symbol.for,kI=_I?Symbol.for("react.memo"):60115,y5=_I?Symbol.for("react.forward_ref"):60112,v5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},EI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},k5=((If={})[y5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},If[kI]=EI,If);function v_(t){return("type"in(e=t)&&e.type.$$typeof)===kI?EI:"$$typeof"in t?k5[t.$$typeof]:v5;var e}var E5=Object.defineProperty,w5=Object.getOwnPropertyNames,__=Object.getOwnPropertySymbols,T5=Object.getOwnPropertyDescriptor,I5=Object.getPrototypeOf,k_=Object.prototype;function wI(t,e,n){if(typeof e!="string"){if(k_){var r=I5(e);r&&r!==k_&&wI(t,r,n)}var i=w5(e);__&&(i=i.concat(__(e)));for(var s=v_(t),o=v_(e),l=0;l<i.length;++l){var u=i[l];if(!(u in _5||n&&n[u]||o&&u in o||s&&u in s)){var d=T5(e,u);try{E5(t,u,d)}catch{}}}}return t}function Po(t){return typeof t=="function"}function m0(t){return typeof t=="object"&&"styledComponentId"in t}function Li(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function E_(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Il(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function lm(t,e,n){if(n===void 0&&(n=!1),!n&&!Il(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=lm(t[r],e[r]);else if(Il(e))for(var r in e)t[r]=lm(t[r],e[r]);return t}function g0(t,e){Object.defineProperty(t,"toString",{value:e})}function zl(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var x5=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw zl(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(p0);return n},t}(),cc=new Map,ld=new Map,dc=1,Pu=function(t){if(cc.has(t))return cc.get(t);for(;ld.has(dc);)dc++;var e=dc++;return cc.set(t,e),ld.set(e,t),e},S5=function(t,e){dc=e+1,cc.set(t,e),ld.set(e,t)},A5="style[".concat(Lo,"][").concat(mI,'="').concat(ah,'"]'),R5=new RegExp("^".concat(Lo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),L5=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},C5=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(p0),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var u=l.match(R5);if(u){var d=0|parseInt(u[1],10),f=u[2];d!==0&&(S5(f,d),L5(t,f,u[3]),t.getTag().insertRules(d,i)),i.length=0}else i.push(l)}}},w_=function(t){for(var e=document.querySelectorAll(A5),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Lo)!==pI&&(C5(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function P5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var TI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(Lo,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Lo,pI),r.setAttribute(mI,ah);var o=P5();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},b5=function(){function t(e){this.element=TI(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw zl(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),N5=function(){function t(e){this.element=TI(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),j5=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),T_=ad,D5={isServer:!ad,useCSSOMInjection:!c5},II=function(){function t(e,n,r){e===void 0&&(e=Co),n===void 0&&(n={});var i=this;this.options=Ct(Ct({},D5),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&ad&&T_&&(T_=!1,w_(this)),g0(this,function(){return function(s){for(var o=s.getTag(),l=o.length,u="",d=function(g){var y=function(_){return ld.get(_)}(g);if(y===void 0)return"continue";var E=s.names.get(y),A=o.getGroup(g);if(E===void 0||!E.size||A.length===0)return"continue";var C="".concat(Lo,".g").concat(g,'[id="').concat(y,'"]'),L="";E!==void 0&&E.forEach(function(_){_.length>0&&(L+="".concat(_,","))}),u+="".concat(A).concat(C,'{content:"').concat(L,'"}').concat(p0)},f=0;f<l;f++)d(f);return u}(i)})}return t.registerId=function(e){return Pu(e)},t.prototype.rehydrate=function(){!this.server&&ad&&w_(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Ct(Ct({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new j5(i):r?new b5(i):new N5(i)}(this.options),new x5(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Pu(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Pu(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Pu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),O5=/&/g,M5=/^\s*\/\/.*$/gm;function xI(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=xI(n.children,e)),n})}function V5(t){var e,n,r,i=Co,s=i.options,o=s===void 0?Co:s,l=i.plugins,u=l===void 0?lh:l,d=function(y,E,A){return A.startsWith(n)&&A.endsWith(n)&&A.replaceAll(n,"").length>0?".".concat(e):y},f=u.slice();f.push(function(y){y.type===rh&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(O5,n).replace(r,d))}),o.prefix&&f.push(l5),f.push(s5);var g=function(y,E,A,C){E===void 0&&(E=""),A===void 0&&(A=""),C===void 0&&(C="&"),e=C,n=E,r=new RegExp("\\".concat(n,"\\b"),"g");var L=y.replace(M5,""),_=r5(A||E?"".concat(A," ").concat(E," { ").concat(L," }"):L);o.namespace&&(_=xI(_,o.namespace));var v=[];return od(_,o5(f.concat(a5(function(x){return v.push(x)})))),v};return g.hash=u.length?u.reduce(function(y,E){return E.name||zl(15),eo(y,E.name)},yI).toString():"",g}var F5=new II,um=V5(),SI=c.createContext({shouldForwardProp:void 0,styleSheet:F5,stylis:um});SI.Consumer;c.createContext(void 0);function I_(){return j.useContext(SI)}var U5=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=um);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,g0(this,function(){throw zl(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=um),this.name+e.hash},t}(),W5=function(t){return t>="A"&&t<="Z"};function x_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;W5(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var AI=function(t){return t==null||t===!1||t===""},RI=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!AI(s)&&(Array.isArray(s)&&s.isCss||Po(s)?r.push("".concat(x_(i),":"),s,";"):Il(s)?r.push.apply(r,sd(sd(["".concat(i," {")],RI(s),!1),["}"],!1)):r.push("".concat(x_(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in u5||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ji(t,e,n,r){if(AI(t))return[];if(m0(t))return[".".concat(t.styledComponentId)];if(Po(t)){if(!Po(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return ji(i,e,n,r)}var s;return t instanceof U5?n?(t.inject(n,r),[t.getName(r)]):[t]:Il(t)?RI(t):Array.isArray(t)?Array.prototype.concat.apply(lh,t.map(function(o){return ji(o,e,n,r)})):[t.toString()]}function $5(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Po(n)&&!m0(n))return!1}return!0}var z5=vI(ah),B5=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$5(e),this.componentId=n,this.baseHash=eo(z5,n),this.baseStyle=r,II.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Li(i,this.staticRulesId);else{var s=E_(ji(this.rules,e,n,r)),o=am(eo(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=Li(i,o),this.staticRulesId=o}else{for(var u=eo(this.baseHash,r.hash),d="",f=0;f<this.rules.length;f++){var g=this.rules[f];if(typeof g=="string")d+=g;else if(g){var y=E_(ji(g,e,n,r));u=eo(u,y+f),d+=y}}if(d){var E=am(u>>>0);n.hasNameForId(this.componentId,E)||n.insertRules(this.componentId,E,r(d,".".concat(E),void 0,this.componentId)),i=Li(i,E)}}return i},t}(),LI=c.createContext(void 0);LI.Consumer;var Sf={};function H5(t,e,n){var r=m0(t),i=t,s=!xf(t),o=e.attrs,l=o===void 0?lh:o,u=e.componentId,d=u===void 0?function(P,D){var M=typeof P!="string"?"sc":g_(P);Sf[M]=(Sf[M]||0)+1;var w="".concat(M,"-").concat(m5(ah+M+Sf[M]));return D?"".concat(D,"-").concat(w):w}(e.displayName,e.parentComponentId):u,f=e.displayName,g=f===void 0?function(P){return xf(P)?"styled.".concat(P):"Styled(".concat(g5(P),")")}(t):f,y=e.displayName&&e.componentId?"".concat(g_(e.displayName),"-").concat(e.componentId):e.componentId||d,E=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,A=e.shouldForwardProp;if(r&&i.shouldForwardProp){var C=i.shouldForwardProp;if(e.shouldForwardProp){var L=e.shouldForwardProp;A=function(P,D){return C(P,D)&&L(P,D)}}else A=C}var _=new B5(n,y,r?i.componentStyle:void 0);function v(P,D){return function(M,w,k){var S=M.attrs,R=M.componentStyle,b=M.defaultProps,N=M.foldedComponentIds,I=M.styledComponentId,Z=M.target,pe=c.useContext(LI),he=I_(),me=M.shouldForwardProp||he.shouldForwardProp,z=d5(w,pe,b)||Co,Q=function(xt,yt,St){for(var di,Wn=Ct(Ct({},yt),{className:void 0,theme:St}),mr=0;mr<xt.length;mr+=1){var $n=Po(di=xt[mr])?di(Wn):di;for(var Kt in $n)Wn[Kt]=Kt==="className"?Li(Wn[Kt],$n[Kt]):Kt==="style"?Ct(Ct({},Wn[Kt]),$n[Kt]):$n[Kt]}return yt.className&&(Wn.className=Li(Wn.className,yt.className)),Wn}(S,w,z),J=Q.as||Z,ge={};for(var se in Q)Q[se]===void 0||se[0]==="$"||se==="as"||se==="theme"&&Q.theme===z||(se==="forwardedAs"?ge.as=Q.forwardedAs:me&&!me(se,J)||(ge[se]=Q[se]));var Ae=function(xt,yt){var St=I_(),di=xt.generateAndInjectStyles(yt,St.styleSheet,St.stylis);return di}(R,Q),Mt=Li(N,I);return Ae&&(Mt+=" "+Ae),Q.className&&(Mt+=" "+Q.className),ge[xf(J)&&!gI.has(J)?"class":"className"]=Mt,k&&(ge.ref=k),j.createElement(J,ge)}(x,P,D)}v.displayName=g;var x=c.forwardRef(v);return x.attrs=E,x.componentStyle=_,x.displayName=g,x.shouldForwardProp=A,x.foldedComponentIds=r?Li(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=y,x.target=r?i.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=r?function(D){for(var M=[],w=1;w<arguments.length;w++)M[w-1]=arguments[w];for(var k=0,S=M;k<S.length;k++)lm(D,S[k],!0);return D}({},i.defaultProps,P):P}}),g0(x,function(){return".".concat(x.styledComponentId)}),s&&wI(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function S_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var A_=function(t){return Object.assign(t,{isCss:!0})};function q5(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Po(t)||Il(t))return A_(ji(S_(lh,sd([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?ji(r):A_(ji(S_(r,e)))}function cm(t,e,n){if(n===void 0&&(n=Co),!e)throw zl(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,q5.apply(void 0,sd([i],s,!1)))};return r.attrs=function(i){return cm(t,e,Ct(Ct({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return cm(t,e,Ct(Ct({},n),i))},r}var CI=function(t){return cm(H5,t)},F=CI;gI.forEach(function(t){F[t]=CI(t)});function PI(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=PI(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Dr(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=PI(t))&&(r&&(r+=" "),r+=e);return r}const Ha=t=>typeof t=="number"&&!isNaN(t),Ki=t=>typeof t=="string",Pt=t=>typeof t=="function",hc=t=>Ki(t)||Pt(t)?t:null,Af=t=>j.isValidElement(t)||Ki(t)||Pt(t)||Ha(t);function G5(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function uh(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:l,position:u,preventExitTransition:d,done:f,nodeRef:g,isIn:y}=o;const E=r?`${e}--${u}`:e,A=r?`${n}--${u}`:n,C=j.useRef(0);return j.useLayoutEffect(()=>{const L=g.current,_=E.split(" "),v=x=>{x.target===g.current&&(L.dispatchEvent(new Event("d")),L.removeEventListener("animationend",v),L.removeEventListener("animationcancel",v),C.current===0&&x.type!=="animationcancel"&&L.classList.remove(..._))};L.classList.add(..._),L.addEventListener("animationend",v),L.addEventListener("animationcancel",v)},[]),j.useEffect(()=>{const L=g.current,_=()=>{L.removeEventListener("animationend",_),i?G5(L,f,s):f()};y||(d?_():(C.current=1,L.className+=` ${A}`,L.addEventListener("animationend",_)))},[y]),c.createElement(c.Fragment,null,l)}}function R_(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Qt={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},bu=t=>{let{theme:e,type:n,...r}=t;return c.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Rf={info:function(t){return c.createElement(bu,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(bu,{...t},c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(bu,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(bu,{...t},c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function K5(t){const[,e]=j.useReducer(E=>E+1,0),[n,r]=j.useState([]),i=j.useRef(null),s=j.useRef(new Map).current,o=E=>n.indexOf(E)!==-1,l=j.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:E=>s.get(E)}).current;function u(E){let{containerId:A}=E;const{limit:C}=l.props;!C||A&&l.containerId!==A||(l.count-=l.queue.length,l.queue=[])}function d(E){r(A=>E==null?[]:A.filter(C=>C!==E))}function f(){const{toastContent:E,toastProps:A,staleId:C}=l.queue.shift();y(E,A,C)}function g(E,A){let{delay:C,staleId:L,..._}=A;if(!Af(E)||function(N){return!i.current||l.props.enableMultiContainer&&N.containerId!==l.props.containerId||s.has(N.toastId)&&N.updateId==null}(_))return;const{toastId:v,updateId:x,data:P}=_,{props:D}=l,M=()=>d(v),w=x==null;w&&l.count++;const k={...D,style:D.toastStyle,key:l.toastKey++,...Object.fromEntries(Object.entries(_).filter(N=>{let[I,Z]=N;return Z!=null})),toastId:v,updateId:x,data:P,closeToast:M,isIn:!1,className:hc(_.className||D.toastClassName),bodyClassName:hc(_.bodyClassName||D.bodyClassName),progressClassName:hc(_.progressClassName||D.progressClassName),autoClose:!_.isLoading&&(S=_.autoClose,R=D.autoClose,S===!1||Ha(S)&&S>0?S:R),deleteToast(){const N=R_(s.get(v),"removed");s.delete(v),Qt.emit(4,N);const I=l.queue.length;if(l.count=v==null?l.count-l.displayedToast:l.count-1,l.count<0&&(l.count=0),I>0){const Z=v==null?l.props.limit:1;if(I===1||Z===1)l.displayedToast++,f();else{const pe=Z>I?I:Z;l.displayedToast=pe;for(let he=0;he<pe;he++)f()}}else e()}};var S,R;k.iconOut=function(N){let{theme:I,type:Z,isLoading:pe,icon:he}=N,me=null;const z={theme:I,type:Z};return he===!1||(Pt(he)?me=he(z):j.isValidElement(he)?me=j.cloneElement(he,z):Ki(he)||Ha(he)?me=he:pe?me=Rf.spinner():(Q=>Q in Rf)(Z)&&(me=Rf[Z](z))),me}(k),Pt(_.onOpen)&&(k.onOpen=_.onOpen),Pt(_.onClose)&&(k.onClose=_.onClose),k.closeButton=D.closeButton,_.closeButton===!1||Af(_.closeButton)?k.closeButton=_.closeButton:_.closeButton===!0&&(k.closeButton=!Af(D.closeButton)||D.closeButton);let b=E;j.isValidElement(E)&&!Ki(E.type)?b=j.cloneElement(E,{closeToast:M,toastProps:k,data:P}):Pt(E)&&(b=E({closeToast:M,toastProps:k,data:P})),D.limit&&D.limit>0&&l.count>D.limit&&w?l.queue.push({toastContent:b,toastProps:k,staleId:L}):Ha(C)?setTimeout(()=>{y(b,k,L)},C):y(b,k,L)}function y(E,A,C){const{toastId:L}=A;C&&s.delete(C);const _={content:E,props:A};s.set(L,_),r(v=>[...v,L].filter(x=>x!==C)),Qt.emit(4,R_(_,_.props.updateId==null?"added":"updated"))}return j.useEffect(()=>(l.containerId=t.containerId,Qt.cancelEmit(3).on(0,g).on(1,E=>i.current&&d(E)).on(5,u).emit(2,l),()=>{s.clear(),Qt.emit(3,l)}),[]),j.useEffect(()=>{l.props=t,l.isToastActive=o,l.displayedToast=n.length}),{getToastToRender:function(E){const A=new Map,C=Array.from(s.values());return t.newestOnTop&&C.reverse(),C.forEach(L=>{const{position:_}=L.props;A.has(_)||A.set(_,[]),A.get(_).push(L)}),Array.from(A,L=>E(L[0],L[1]))},containerRef:i,isToastActive:o}}function L_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function C_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function Q5(t){const[e,n]=j.useState(!1),[r,i]=j.useState(!1),s=j.useRef(null),o=j.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=j.useRef(t),{autoClose:u,pauseOnHover:d,closeToast:f,onClick:g,closeOnClick:y}=t;function E(P){if(t.draggable){P.nativeEvent.type==="touchstart"&&P.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",v),document.addEventListener("touchmove",_),document.addEventListener("touchend",v);const D=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=D.getBoundingClientRect(),D.style.transition="",o.x=L_(P.nativeEvent),o.y=C_(P.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=D.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=D.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function A(P){if(o.boundingRect){const{top:D,bottom:M,left:w,right:k}=o.boundingRect;P.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=w&&o.x<=k&&o.y>=D&&o.y<=M?L():C()}}function C(){n(!0)}function L(){n(!1)}function _(P){const D=s.current;o.canDrag&&D&&(o.didMove=!0,e&&L(),o.x=L_(P),o.y=C_(P),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),D.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,D.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function v(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",v),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",v);const P=s.current;if(o.canDrag&&o.didMove&&P){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void t.closeToast();P.style.transition="transform 0.2s, opacity 0.2s",P.style.transform=`translate${t.draggableDirection}(0)`,P.style.opacity="1"}}j.useEffect(()=>{l.current=t}),j.useEffect(()=>(s.current&&s.current.addEventListener("d",C,{once:!0}),Pt(t.onOpen)&&t.onOpen(j.isValidElement(t.children)&&t.children.props),()=>{const P=l.current;Pt(P.onClose)&&P.onClose(j.isValidElement(P.children)&&P.children.props)}),[]),j.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||L(),window.addEventListener("focus",C),window.addEventListener("blur",L)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",L))}),[t.pauseOnFocusLoss]);const x={onMouseDown:E,onTouchStart:E,onMouseUp:A,onTouchEnd:A};return u&&d&&(x.onMouseEnter=L,x.onMouseLeave=C),y&&(x.onClick=P=>{g&&g(P),o.canCloseOnClick&&f()}),{playToast:C,pauseToast:L,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:x}}function bI(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return c.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Y5(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:l,controlledProgress:u,progress:d,rtl:f,isIn:g,theme:y}=t;const E=s||u&&d===0,A={...l,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:E?0:1};u&&(A.transform=`scaleX(${d})`);const C=Dr("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${y}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),L=Pt(o)?o({rtl:f,type:i,defaultClassName:C}):Dr(C,o);return c.createElement("div",{role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:L,style:A,[u&&d>=1?"onTransitionEnd":"onAnimationEnd"]:u&&d<1?null:()=>{g&&r()}})}const X5=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=Q5(t),{closeButton:s,children:o,autoClose:l,onClick:u,type:d,hideProgressBar:f,closeToast:g,transition:y,position:E,className:A,style:C,bodyClassName:L,bodyStyle:_,progressClassName:v,progressStyle:x,updateId:P,role:D,progress:M,rtl:w,toastId:k,deleteToast:S,isIn:R,isLoading:b,iconOut:N,closeOnClick:I,theme:Z}=t,pe=Dr("Toastify__toast",`Toastify__toast-theme--${Z}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":w},{"Toastify__toast--close-on-click":I}),he=Pt(A)?A({rtl:w,position:E,type:d,defaultClassName:pe}):Dr(pe,A),me=!!M||!l,z={closeToast:g,type:d,theme:Z};let Q=null;return s===!1||(Q=Pt(s)?s(z):j.isValidElement(s)?j.cloneElement(s,z):bI(z)),c.createElement(y,{isIn:R,done:S,position:E,preventExitTransition:n,nodeRef:r},c.createElement("div",{id:k,onClick:u,className:he,...i,style:C,ref:r},c.createElement("div",{...R&&{role:D},className:Pt(L)?L({type:d}):Dr("Toastify__toast-body",L),style:_},N!=null&&c.createElement("div",{className:Dr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!b})},N),c.createElement("div",null,o)),Q,c.createElement(Y5,{...P&&!me?{key:`pb-${P}`}:{},rtl:w,theme:Z,delay:l,isRunning:e,isIn:R,closeToast:g,hide:f,type:d,style:x,className:v,controlledProgress:me,progress:M||0})))},ch=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},Z5=uh(ch("bounce",!0));uh(ch("slide",!0));uh(ch("zoom"));uh(ch("flip"));const dm=j.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=K5(t),{className:s,style:o,rtl:l,containerId:u}=t;function d(f){const g=Dr("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":l});return Pt(s)?s({position:f,rtl:l,defaultClassName:g}):Dr(g,hc(s))}return j.useEffect(()=>{e&&(e.current=r.current)},[]),c.createElement("div",{ref:r,className:"Toastify",id:u},n((f,g)=>{const y=g.length?{...o}:{...o,pointerEvents:"none"};return c.createElement("div",{className:d(f),style:y,key:`container-${f}`},g.map((E,A)=>{let{content:C,props:L}=E;return c.createElement(X5,{...L,isIn:i(L.toastId),style:{...L.style,"--nth":A+1,"--len":g.length},key:`toast-${L.key}`},C)}))}))});dm.displayName="ToastContainer",dm.defaultProps={position:"top-right",transition:Z5,autoClose:5e3,closeButton:bI,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Lf,wi=new Map,Ra=[],J5=1;function NI(){return""+J5++}function eD(t){return t&&(Ki(t.toastId)||Ha(t.toastId))?t.toastId:NI()}function qa(t,e){return wi.size>0?Qt.emit(0,t,e):Ra.push({content:t,options:e}),e.toastId}function ud(t,e){return{...e,type:e&&e.type||t,toastId:eD(e)}}function Nu(t){return(e,n)=>qa(e,ud(t,n))}function G(t,e){return qa(t,ud("default",e))}G.loading=(t,e)=>qa(t,ud("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),G.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=Ki(i)?G.loading(i,n):G.loading(i.render,{...n,...i}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(f,g,y)=>{if(g==null)return void G.dismiss(r);const E={type:f,...l,...n,data:y},A=Ki(g)?{render:g}:g;return r?G.update(r,{...E,...A}):G(A.render,{...E,...A}),y},d=Pt(t)?t():t;return d.then(f=>u("success",o,f)).catch(f=>u("error",s,f)),d},G.success=Nu("success"),G.info=Nu("info"),G.error=Nu("error"),G.warning=Nu("warning"),G.warn=G.warning,G.dark=(t,e)=>qa(t,ud("default",{theme:"dark",...e})),G.dismiss=t=>{wi.size>0?Qt.emit(1,t):Ra=Ra.filter(e=>t!=null&&e.options.toastId!==t)},G.clearWaitingQueue=function(t){return t===void 0&&(t={}),Qt.emit(5,t)},G.isActive=t=>{let e=!1;return wi.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},G.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:s}=i;const o=wi.get(s||Lf);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:NI()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,qa(o,s)}},0)},G.done=t=>{G.update(t,{progress:1})},G.onChange=t=>(Qt.on(4,t),()=>{Qt.off(4,t)}),G.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},G.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Qt.on(2,t=>{Lf=t.containerId||t,wi.set(Lf,t),Ra.forEach(e=>{Qt.emit(0,e.content,e.options)}),Ra=[]}).on(3,t=>{wi.delete(t.containerId||t),wi.size===0&&Qt.off(0).off(1).off(5)});var tD=j.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Le=function(e,n,r){var i=r.get(e);return i?i(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function P_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Se=j.forwardRef(function(t,e){var n=t.alt,r=t.color,i=t.size,s=t.weight,o=t.mirrored,l=t.children,u=t.renderPath,d=P_(t,["alt","color","size","weight","mirrored","children","renderPath"]),f=j.useContext(tD),g=f.color,y=g===void 0?"currentColor":g,E=f.size,A=f.weight,C=A===void 0?"regular":A,L=f.mirrored,_=L===void 0?!1:L,v=P_(f,["color","size","weight","mirrored"]);return c.createElement("svg",Object.assign({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i??E,height:i??E,fill:r??y,viewBox:"0 0 256 256",transform:o||_?"scale(-1, 1)":void 0},v,d),!!n&&c.createElement("title",null,n),l,c.createElement("rect",{width:"256",height:"256",fill:"none"}),u(s??C,r??y))});Se.displayName="IconBase";var ns=new Map;ns.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ns.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ns.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))});ns.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ns.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ns.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var nD=function(e,n){return Le(e,n,ns)},jI=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:nD}))});jI.displayName="ArrowLeft";var rs=new Map;rs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"136",x2:"108",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"176",x2:"188",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"136",x2:"188",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});rs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",opacity:"0.2"}),c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});rs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M240,208h-8V104a16,16,0,0,0-16-16H152V40a16,16,0,0,0-16-16H40A16,16,0,0,0,24,40V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM120,136a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h32A8,8,0,0,1,120,136ZM64,64H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm0,104H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm88-64h64V208H152Z"}),c.createElement("path",{d:"M192,168H176a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z"}),c.createElement("path",{d:"M176,144h16a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Z"}))});rs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});rs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});rs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var rD=function(e,n){return Le(e,n,rs)},y0=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:rD}))});y0.displayName="Buildings";var is=new Map;is.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"176",y1:"20",x2:"176",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"20",x2:"80",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M88,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"148 140 164 128 164 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});is.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});is.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,188a24.2,24.2,0,0,1-17-7,8,8,0,0,1,0-11.3,7.9,7.9,0,0,1,11.3,0A8.3,8.3,0,0,0,104,172a8,8,0,0,0,0-16h-2.5l-.4-.2h-.3l-.5-.2h-.1l-.6-.4h-.2l-.4-.3h0l-.4-.3-.2-.2-.3-.3a8.6,8.6,0,0,1-1.3-2,5.8,5.8,0,0,1-.6-1.7h0c-.1-.1-.1-.2-.1-.4a.4.4,0,0,0-.1-.3V148h0v-.7c0-.2.1-.3.1-.4v-.4a.6.6,0,0,0,.1-.4c.1-.1.1-.2.1-.4l.2-.3c0-.2,0-.3.1-.4l.2-.4v-.3l.2-.4.2-.3.3-.4.2-.2,5.6-7H92a8,8,0,0,1,0-16h28a8,8,0,0,1,6.2,13l-8.8,11.1A24,24,0,0,1,104,188Zm64-8a8,8,0,0,1-16,0V144l-3.2,2.4a8.1,8.1,0,0,1-11.2-1.6,8,8,0,0,1,1.6-11.2l16-12A8,8,0,0,1,168,128ZM208,80H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))});is.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});is.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});is.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var iD=function(e,n){return Le(e,n,is)},xl=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:iD}))});xl.displayName="Calendar";var ss=new Map;ss.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ss.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ss.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});ss.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ss.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ss.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var sD=function(e,n){return Le(e,n,ss)},DI=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:sD}))});DI.displayName="Check";var os=new Map;os.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});os.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});os.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"}))});os.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});os.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});os.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var oD=function(e,n){return Le(e,n,os)},Ti=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:oD}))});Ti.displayName="CheckCircle";var as=new Map;as.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});as.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});as.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))});as.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});as.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});as.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var aD=function(e,n){return Le(e,n,as)},OI=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:aD}))});OI.displayName="Clock";var ls=new Map;ls.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ls.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ls.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm59.9-19.9a96.2,96.2,0,0,0-135.8,0l-8.3,8.3L37.5,54.1a8,8,0,0,0-8.7-1.8,8.2,8.2,0,0,0-5,7.4v40a8,8,0,0,0,8,8h40a8,8,0,0,0,5.7-13.6L63.1,79.7l8.3-8.3a80,80,0,1,1,0,113.2,7.9,7.9,0,0,0-11.3,0,8,8,0,0,0,0,11.3A96,96,0,0,0,195.9,60.1Z"}))});ls.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ls.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ls.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var lD=function(e,n){return Le(e,n,ls)},MI=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:lD}))});MI.displayName="ClockCounterClockwise";var us=new Map;us.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});us.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});us.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"}))});us.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});us.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});us.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var uD=function(e,n){return Le(e,n,us)},dh=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:uD}))});dh.displayName="Envelope";var cs=new Map;cs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});cs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});cs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,92a36,36,0,1,1-36,36A36,36,0,0,1,128,92Z"}))});cs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});cs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});cs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var cD=function(e,n){return Le(e,n,cs)},cd=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:cD}))});cd.displayName="Eye";var ds=new Map;ds.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.4,163.6C232.1,145.7,240,128,240,128S208,56,128,56c-3.8,0-7.4.2-11,.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ds.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ds.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48a132.4,132.4,0,0,0-22,1.8,8.1,8.1,0,0,0-4.6,13.3L202.7,174.5a8,8,0,0,0,5.9,2.6,8.6,8.6,0,0,0,5.4-2c22.8-20.5,32.9-42.9,33.3-43.8A8.2,8.2,0,0,0,247.3,124.8Z"}),c.createElement("path",{d:"M53.9,34.6A8,8,0,0,0,42.1,45.4L61.3,66.5C25,88.8,9.4,123.2,8.7,124.8a8.2,8.2,0,0,0,0,6.5c.3.7,8.8,19.5,27.6,38.4C61.4,194.7,93.1,208,128,208a126.9,126.9,0,0,0,52.1-10.8l22,24.2A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3ZM128,164a36,36,0,0,1-29.5-56.6l47.2,51.9A35.4,35.4,0,0,1,128,164Z"}))});ds.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ds.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ds.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var dD=function(e,n){return Le(e,n,ds)},dd=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:dD}))});dd.displayName="EyeSlash";var hs=new Map;hs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});hs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",opacity:"0.2"}),c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});hs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M218.8,103.7,138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5v92.1a16.4,16.4,0,0,0,4,11A15.9,15.9,0,0,0,48,224H96a8,8,0,0,0,8-8V168a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v48a8,8,0,0,0,8,8h48a15.6,15.6,0,0,0,7.6-1.9A16.1,16.1,0,0,0,224,208V115.5A16,16,0,0,0,218.8,103.7Z"}))});hs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});hs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});hs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var hD=function(e,n){return Le(e,n,hs)},VI=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:hD}))});VI.displayName="House";var fs=new Map;fs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"108",x2:"184",y2:"108",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"148",x2:"184",y2:"148",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"94.1",cy:"116",r:"22",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M72.1,164a22,22,0,0,1,44,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});fs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM92.1,144a24,24,0,1,1,24-24A23.9,23.9,0,0,1,92.1,144Z",opacity:"0.2"}),c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});fs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM125.1,175.7a8,8,0,0,1-9.8-5.7,24,24,0,0,0-46.4,0,8.1,8.1,0,0,1-7.8,6l-2-.3a7.9,7.9,0,0,1-5.7-9.7,40.2,40.2,0,0,1,16.3-23.2,32,32,0,1,1,44.8,0A40.2,40.2,0,0,1,130.8,166,7.9,7.9,0,0,1,125.1,175.7ZM192,152H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"16"}))});fs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});fs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});fs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var fD=function(e,n){return Le(e,n,fs)},v0=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:fD}))});v0.displayName="IdentificationCard";var ps=new Map;ps.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"152",r:"16"}))});ps.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});ps.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"}))});ps.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"152",r:"10"}))});ps.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"152",r:"8"}))});ps.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});var pD=function(e,n){return Le(e,n,ps)},hd=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:pD}))});hd.displayName="Lock";var ms=new Map;ms.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"44",y1:"156",x2:"100",y2:"212",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"164",y1:"92",x2:"72",y2:"184",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ms.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M192,120,136,64l26.3-26.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z",opacity:"0.2"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ms.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.3,32a15.9,15.9,0,0,0-22.6,0L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a15.9,15.9,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7ZM51.3,160,144,67.3,160.7,84,68,176.7ZM48,179.3,76.7,208H48Zm48,25.4L79.3,188,172,95.3,188.7,112Z"}))});ms.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ms.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ms.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var mD=function(e,n){return Le(e,n,ms)},FI=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:mD}))});FI.displayName="Pencil";var gs=new Map;gs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});gs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});gs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M141.7,133.7l-42,42A8.3,8.3,0,0,1,94,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H24a8,8,0,0,1,0-16H86V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,141.7,133.7ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"}))});gs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});gs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});gs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var gD=function(e,n){return Le(e,n,gs)},_0=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:gD}))});_0.displayName="SignIn";var ys=new Map;ys.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ys.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ys.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-42,42A8.3,8.3,0,0,1,174,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H104a8,8,0,0,1,0-16h62V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,221.7,133.7ZM104,208H48V48h56a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16h56a8,8,0,0,0,0-16Z"}))});ys.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ys.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ys.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var yD=function(e,n){return Le(e,n,ys)},fc=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:yD}))});fc.displayName="SignOut";var vs=new Map;vs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});vs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});vs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"}))});vs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});vs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});vs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var vD=function(e,n){return Le(e,n,vs)},UI=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:vD}))});UI.displayName="SpinnerGap";var _s=new Map;_s.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"60",x2:"40",y2:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});_s.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});_s.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))});_s.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});_s.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});_s.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var _D=function(e,n){return Le(e,n,_s)},hm=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:_D}))});hm.displayName="Trash";var ks=new Map;ks.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ks.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ks.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});ks.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ks.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ks.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var kD=function(e,n){return Le(e,n,ks)},Di=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:kD}))});Di.displayName="User";var Es=new Map;Es.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Es.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,32A96,96,0,0,0,63.8,199.4h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.4A96,96,0,0,0,128,32Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Es.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"120",r:"44"}),c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm65.8,162.4a81.3,81.3,0,0,0-24.5-23,59.7,59.7,0,0,1-82.6,0,81.3,81.3,0,0,0-24.5,23,88,88,0,1,1,131.6,0Z"}))});Es.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Es.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Es.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var ED=function(e,n){return Le(e,n,Es)},fm=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:ED}))});fm.displayName="UserCircle";var ws=new Map;ws.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"204",y1:"136",x2:"244",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"116",x2:"224",y2:"156",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ws.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"108",cy:"100",r:"60",opacity:"0.2"}),c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ws.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144.1,157.6a68,68,0,1,0-72.2,0,118.4,118.4,0,0,0-55.8,37.3,7.8,7.8,0,0,0-1.1,8.5,7.9,7.9,0,0,0,7.2,4.6H193.8a7.9,7.9,0,0,0,7.2-4.6,7.8,7.8,0,0,0-1.1-8.5A118.4,118.4,0,0,0,144.1,157.6Z"}))});ws.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ws.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ws.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var wD=function(e,n){return Le(e,n,ws)},k0=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:wD}))});k0.displayName="UserPlus";var Ts=new Map;Ts.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ts.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",opacity:"0.2"}),c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ts.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M121.2,157.9a60,60,0,1,0-66.4,0A95.5,95.5,0,0,0,9.5,192.8a7.8,7.8,0,0,0-.6,8.3,8.1,8.1,0,0,0,7.1,4.3H160a8.1,8.1,0,0,0,7.1-4.3,7.8,7.8,0,0,0-.6-8.3A95.5,95.5,0,0,0,121.2,157.9Z"}),c.createElement("path",{d:"M248.1,192.8a96.3,96.3,0,0,0-45.4-34.9A59.9,59.9,0,0,0,169.5,48a64,64,0,0,0-16.3,2.2,8.2,8.2,0,0,0-5.4,5.2,8,8,0,0,0,1.2,7.3,75.8,75.8,0,0,1,3.8,84.9,8.1,8.1,0,0,0,2.1,10.6q4.5,3.5,8.7,7.2l.5.5a112.6,112.6,0,0,1,25.5,34.9,7.9,7.9,0,0,0,7.2,4.6h44.7a8.1,8.1,0,0,0,7.1-4.3A8,8,0,0,0,248.1,192.8Z"}))});Ts.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ts.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ts.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var TD=function(e,n){return Le(e,n,Ts)},E0=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:TD}))});E0.displayName="Users";var Is=new Map;Is.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Is.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Is.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"}))});Is.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Is.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Is.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var ID=function(e,n){return Le(e,n,Is)},WI=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:ID}))});WI.displayName="X";var xs=new Map;xs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});xs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});xs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm37.7,130.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3l-26.3,26.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,90.3,101.7a8.1,8.1,0,0,1,11.4-11.4L128,116.7l26.3-26.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"}))});xs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});xs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});xs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var xD=function(e,n){return Le(e,n,xs)},$I=j.forwardRef(function(t,e){return c.createElement(Se,Object.assign({ref:e},t,{renderPath:xD}))});$I.displayName="XCircle";const SD=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
`,AD=F.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`,RD=F.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,LD=F.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,b_=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,N_=F.label`
  font-size: 0.9rem;
  color: #555;
`,j_=F.div`
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
`,ju=F.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #800000;
  margin-right: 0.5rem;
`,D_=F.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #e74c3c;
  
  &:focus {
    outline: none;
  }
`,CD=F.button`
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
`,PD=F.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,bD=F(h2)`
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
`,ND=F.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,jD=F.button`
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
`,DD=F.button`
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
`,OD=F.div`
  font-size: 2rem;
  font-weight: bold;
  color: #800000;
  text-align: center;
  margin-bottom: 0.5rem;
`;function MD(){const[t,e]=j.useState(""),[n,r]=j.useState(""),[i,s]=j.useState(""),[o,l]=j.useState(!1),[u,d]=j.useState(!1),[f,g]=j.useState(!1),[y,E]=j.useState(!1),A=Vo(),C=Mo();j.useEffect(()=>{var v;(v=C.state)!=null&&v.message&&(G.info(C.state.message),A(C.pathname,{replace:!0,state:{}}))},[C,A]),j.useEffect(()=>{i&&s("")},[t,n]);const L=async()=>{var x,P;if(!t){s("Please enter your email address to reset your password"),(x=document.getElementById("email"))==null||x.focus();return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){s("Please enter a valid email address"),(P=document.getElementById("email"))==null||P.focus();return}try{E(!0),await x6(gn,t),g(!0),G.success("Password reset email sent! Check your inbox.")}catch(D){console.error("Password reset error:",D),D.code==="auth/user-not-found"?s("No account found with this email address"):s("Failed to send password reset email. Please try again.")}finally{E(!1)}},_=async v=>{var P,D,M;if(v.preventDefault(),!t||!n){s("Please enter both email and password");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){s("Please enter a valid email address"),(P=document.getElementById("email"))==null||P.focus();return}try{s(""),l(!0);try{const k=(await A6(gn,t,n)).user,S=tr(pn(Me,"declined_registrations"),jr("userId","==",k.uid));if(!(await Cn(S)).empty){await gn.signOut(),s("Your registration request has been declined. Please contact an administrator."),G.error("Access denied: Registration declined");return}const b=tr(pn(Me,"registration_requests"),jr("userId","==",k.uid));if(!(await Cn(b)).empty){await gn.signOut(),s("Your registration request is pending approval. You will be notified when approved."),G.info("Registration pending approval");return}const I=!1;G.success("Login successful!"),A("/dashboard")}catch(w){if(console.error("Firebase auth error:",w),!(!1&&(w.code==="auth/network-request-failed"||(D=w.message)!=null&&D.includes("network")))){if(w.code==="auth/invalid-credential"||w.code==="auth/invalid-email"||w.code==="auth/user-not-found"||w.code==="auth/wrong-password"){console.log("Authentication failed:",w.code,w.message);const S=w.code==="auth/user-not-found"||w.code==="auth/invalid-credential"&&t.includes("@");s(S?m.jsxs("span",{children:["Account not found. Please check your email or",m.jsx("a",{href:"/register",style:{color:"#800000",marginLeft:"4px",textDecoration:"underline"},children:"register here"})]}):"Invalid email or password. Please check your credentials and try again."),(M=document.getElementById("email"))==null||M.focus()}else w.code==="auth/network-request-failed"?s("Network error. Please check your connection and try again."):w.code==="auth/too-many-requests"?s("Too many failed login attempts. Please try again later or reset your password."):w.code==="auth/operation-not-allowed"?(s("Email/password sign-in is not enabled. Please contact the administrator."),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(console.error("Login error details:",w),s("Failed to log in. Please try again."));G.error("Login failed")}}}catch(w){console.error("Unexpected login error:",w),s("An unexpected error occurred. Please try again."),G.error("Login failed")}finally{l(!1)}};return m.jsx(SD,{children:m.jsxs(AD,{children:[m.jsx(OD,{children:"Hyacinth"}),m.jsx(RD,{children:"Attendance System"}),m.jsxs(LD,{onSubmit:_,children:[m.jsxs(b_,{children:[m.jsx(N_,{htmlFor:"email",children:"Email"}),m.jsxs(j_,{children:[m.jsx(ju,{children:m.jsx(dh,{size:18})}),m.jsx(D_,{id:"email",type:"email",value:t,onChange:v=>e(v.target.value),placeholder:"Enter your email",required:!0})]})]}),m.jsxs(b_,{children:[m.jsx(N_,{htmlFor:"password",children:"Password"}),m.jsxs(j_,{children:[m.jsx(ju,{children:m.jsx(hd,{size:18})}),m.jsx(D_,{id:"password",type:u?"text":"password",value:n,onChange:v=>r(v.target.value),placeholder:"Enter your password",required:!0}),m.jsx(DD,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?m.jsx(dd,{size:18}):m.jsx(cd,{size:18})})]}),m.jsx(jD,{type:"button",onClick:L,disabled:y,tabIndex:"-1",children:y?"Sending...":f?"Email sent!":"Forgot password?"})]}),i&&m.jsx(PD,{children:i}),m.jsxs(ND,{children:[m.jsx(CD,{type:"submit",disabled:o,onClick:_,children:o?"Logging in...":m.jsxs(m.Fragment,{children:[m.jsx(ju,{children:m.jsx(_0,{size:18})}),"Login"]})}),m.jsxs(bD,{to:"/register",children:[m.jsx(ju,{children:m.jsx(k0,{size:18})}),"Register"]})]})]})]})})}const VD=async t=>{try{const e={...t,createdAt:Tl(),status:"pending"};return(await DT(pn(Me,"registration_requests"),e)).id}catch(e){throw console.error("Error submitting registration request:",e),e}},FD=async()=>{try{const t=tr(pn(Me,"registration_requests"),r0("createdAt","desc"));return(await Cn(t)).docs.map(n=>({id:n.id,...n.data()}))}catch(t){throw console.error("Error getting registration requests:",t),t}},UD=async(t,e)=>{try{const n=tn(Me,"registration_requests",t);await nm(n,{...e,updatedAt:Tl()})}catch(n){throw console.error("Error updating registration request:",n),n}},WD=async t=>{try{await jT(tn(Me,"users",t.userId),{...t,role:t.role||"user",createdAt:Tl(),approved:!0,approvedAt:Tl()}),await s0(tn(Me,"registration_requests",t.id))}catch(e){throw console.error("Error approving registration request:",e),e}},$D=async t=>{try{if(await jT(tn(Me,"declined_registrations",t.id),{...t,declinedAt:Tl(),status:"declined",blocked:!0}),await s0(tn(Me,"registration_requests",t.id)),t.userId&&!t.userId.startsWith("temp_"))try{const n=cw().currentUser;n&&n.uid===t.userId?(await j6(n),console.log("Deleted declined user from Firebase Authentication")):console.log("User marked as declined in Firestore. They will be blocked from accessing the system.")}catch(e){console.error("Error handling user authentication:",e)}}catch(e){throw console.error("Error declining registration request:",e),e}},zD=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
  padding: 2rem 1rem;
`,BD=F.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 550px;
  animation: fadeIn 0.3s ease-in-out;
`,HD=F.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,qD=F.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,fa=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,GD=F.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,Cf=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${t=>t.flex||1};
  min-width: ${t=>t.minWidth||"0"};
`,Er=F.label`
  font-size: 0.9rem;
  color: #555;
`,gi=F.div`
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
`,cn=F.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  color: #800000;
`,bs=F.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`,KD=F.select`
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
`,QD=F.button`
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
`,Pf=F.button`
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
`,O_=F(UI)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,YD=F(h2)`
  display: flex;
  align-items: center;
  color: #800000;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`,Ns=F.div`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`,XD=F.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;
`,pa=F.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  color: ${t=>t.met?"#000000":"#666"};
`;function ZD(){const[t,e]=j.useState({lastName:"",firstName:"",middleInitial:"",email:"",password:"",confirmPassword:"",position:""}),[n,r]=j.useState({}),[i,s]=j.useState(!1),[o,l]=j.useState(!1),[u,d]=j.useState(!1),[f,g]=j.useState(!1),y=Vo();j.useEffect(()=>{Object.keys(n).length>0&&r({})},[t]);const E={length:t.password.length>=4,validChars:/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(t.password),hasLetter:/[a-zA-Z]/.test(t.password),hasNumber:/[0-9]/.test(t.password),match:t.password===t.confirmPassword&&t.confirmPassword!==""},A=v=>{const{name:x,value:P}=v.target;if(e(x==="middleInitial"?D=>({...D,[x]:P.toUpperCase()}):D=>({...D,[x]:P})),x==="email"&&P.includes("@")&&P.includes(".")){g(!0);const D=setTimeout(()=>{C(P)},800);return()=>clearTimeout(D)}},C=async v=>{try{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){g(!1);return}(await fetch("https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=undefined",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({continueUri:window.location.href,identifier:v})}).then(D=>D.json())).registered&&r(D=>({...D,email:"This email is already registered. Please use a different email or login instead."}))}catch(x){console.error("Error checking email:",x)}finally{g(!1)}},L=()=>{const v={};return t.lastName.trim()||(v.lastName="Last name is required"),t.firstName.trim()||(v.firstName="First name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(v.email="Email is invalid"):v.email="Email is required",t.password?E.length?E.validChars?E.hasLetter?E.hasNumber||(v.password="Password must contain at least one number"):v.password="Password must contain at least one letter":v.password="Password contains invalid characters":v.password="Password must be at least 4 characters":v.password="Password is required",t.confirmPassword?t.password!==t.confirmPassword&&(v.confirmPassword="Passwords do not match"):v.confirmPassword="Please confirm your password",t.position||(v.position="Please select your position"),r(v),Object.keys(v).length===0},_=async v=>{var x,P,D,M;if(v.preventDefault(),!!L())try{s(!0);const w=!1;let k,S;try{S=await S6(gn,t.email,t.password),k=S.user.uid}catch(N){if(console.error("Auth error:",N),N.code==="auth/email-already-in-use")console.log("Email already exists in Auth but proceeding with registration request"),k=`temp_${Date.now()}_${Math.random().toString(36).substring(2,7)}`;else if(!(w&&(N.code==="auth/network-request-failed"||(x=N.message)!=null&&x.includes("network"))))throw N}const R=`${t.lastName}, ${t.firstName}${t.middleInitial?" "+t.middleInitial+".":""}`;if(S!=null&&S.user)try{await L6(S.user,{displayName:R})}catch(N){console.warn("Could not update profile, continuing with registration:",N)}const b={userId:k,lastName:t.lastName,firstName:t.firstName,middleInitial:t.middleInitial,name:R,email:t.email,position:t.position,role:"user",status:"pending",userID:`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`};try{await VD(b)}catch(N){if(console.error("Firestore error:",N),!w)throw N}G.success("Registration request submitted! An administrator will review your request."),w&&!S||y("/login",{state:{message:"Your registration request has been submitted. You will be notified when your account is approved."}})}catch(w){if(console.error("Registration error:",w),w.code==="auth/email-already-in-use"||typeof w=="object"&&w.code==="auth/email-already-in-use"){const k=w.message||"Email is already registered. Please use a different email or login instead.";r(S=>({...S,email:k})),G.error(m.jsxs("div",{children:["Email already exists. ",m.jsx("a",{href:"/",style:{color:"white",textDecoration:"underline"},children:"Login instead?"})]}),{autoClose:5e3}),(P=document.getElementById("email"))==null||P.scrollIntoView({behavior:"smooth",block:"center"}),(D=document.getElementById("email"))==null||D.focus()}else w.code==="auth/network-request-failed"?G.error("Network error. Please check your connection and try again."):w.code==="auth/operation-not-allowed"?(r(k=>({...k,email:"Email/password registration is not enabled. Please contact the administrator."})),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(M=w.code)!=null&&M.includes("auth/")?G.error(`Authentication error: ${w.message||"Please try again later"}`):(console.error("Registration error details:",w),G.error("Registration failed. Please try again."))}finally{s(!1)}};return m.jsx(zD,{children:m.jsxs(BD,{children:[m.jsxs(YD,{to:"/",children:[m.jsx(cn,{children:m.jsx(jI,{size:16})}),"Back to Login"]}),m.jsx(HD,{children:"Create Account"}),m.jsxs(qD,{onSubmit:_,children:[m.jsxs(fa,{children:[m.jsx(Er,{children:"Full Name"}),m.jsxs(GD,{children:[m.jsxs(Cf,{flex:"2",minWidth:"150px",children:[m.jsx(Er,{htmlFor:"lastName",children:"Last Name"}),m.jsxs(gi,{children:[m.jsx(cn,{children:m.jsx(Di,{size:18})}),m.jsx(bs,{id:"lastName",name:"lastName",type:"text",value:t.lastName,onChange:A,placeholder:"Last name"})]}),n.lastName&&m.jsx(Ns,{children:n.lastName})]}),m.jsxs(Cf,{flex:"2",minWidth:"150px",children:[m.jsx(Er,{htmlFor:"firstName",children:"First Name"}),m.jsx(gi,{children:m.jsx(bs,{id:"firstName",name:"firstName",type:"text",value:t.firstName,onChange:A,placeholder:"First name"})}),n.firstName&&m.jsx(Ns,{children:n.firstName})]}),m.jsxs(Cf,{flex:"1",minWidth:"80px",children:[m.jsx(Er,{htmlFor:"middleInitial",children:"M.I."}),m.jsx(gi,{children:m.jsx(bs,{id:"middleInitial",name:"middleInitial",type:"text",value:t.middleInitial,onChange:A,placeholder:"M.I.",maxLength:"1"})})]})]})]}),m.jsxs(fa,{children:[m.jsx(Er,{htmlFor:"email",children:"Email"}),m.jsxs(gi,{children:[m.jsx(cn,{children:m.jsx(dh,{size:18})}),m.jsx(bs,{id:"email",name:"email",type:"email",value:t.email,onChange:A,placeholder:"Enter your email"}),f&&m.jsx(Pf,{as:"span","aria-label":"Checking email",children:m.jsx(O_,{size:18})})]}),n.email&&m.jsx(Ns,{children:n.email})]}),m.jsxs(fa,{children:[m.jsx(Er,{htmlFor:"position",children:"Position"}),m.jsxs(gi,{children:[m.jsx(cn,{children:m.jsx(v0,{size:18})}),m.jsxs(KD,{id:"position",name:"position",value:t.position,onChange:A,children:[m.jsx("option",{value:"",disabled:!0,children:"Select your position"}),m.jsx("option",{value:"Intern/OJT",children:"Intern/OJT"}),m.jsx("option",{value:"Employed/Onboarded",children:"Employed/Onboarded"})]})]}),n.position&&m.jsx(Ns,{children:n.position})]}),m.jsxs(fa,{children:[m.jsx(Er,{htmlFor:"password",children:"Password"}),m.jsxs(gi,{children:[m.jsx(cn,{children:m.jsx(hd,{size:18})}),m.jsx(bs,{id:"password",name:"password",type:o?"text":"password",value:t.password,onChange:A,placeholder:"Create a password"}),m.jsx(Pf,{type:"button",onClick:()=>l(!o),"aria-label":o?"Hide password":"Show password",children:o?m.jsx(dd,{size:18}):m.jsx(cd,{size:18})})]}),n.password&&m.jsx(Ns,{children:n.password}),m.jsxs(XD,{children:[m.jsxs(pa,{met:E.length,children:[m.jsx(cn,{children:m.jsx(Ti,{size:14,weight:E.length?"fill":"regular"})}),"At least 4 characters"]}),m.jsxs(pa,{met:E.validChars,children:[m.jsx(cn,{children:m.jsx(Ti,{size:14,weight:E.validChars?"fill":"regular"})}),"Valid characters (letters, numbers, and special characters)"]}),m.jsxs(pa,{met:E.hasLetter,children:[m.jsx(cn,{children:m.jsx(Ti,{size:14,weight:E.hasLetter?"fill":"regular"})}),"At least one letter"]}),m.jsxs(pa,{met:E.hasNumber,children:[m.jsx(cn,{children:m.jsx(Ti,{size:14,weight:E.hasNumber?"fill":"regular"})}),"At least one number"]})]})]}),m.jsxs(fa,{children:[m.jsx(Er,{htmlFor:"confirmPassword",children:"Confirm Password"}),m.jsxs(gi,{children:[m.jsx(cn,{children:m.jsx(hd,{size:18})}),m.jsx(bs,{id:"confirmPassword",name:"confirmPassword",type:u?"text":"password",value:t.confirmPassword,onChange:A,placeholder:"Confirm your password"}),m.jsx(Pf,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?m.jsx(dd,{size:18}):m.jsx(cd,{size:18})})]}),n.confirmPassword&&m.jsx(Ns,{children:n.confirmPassword}),t.confirmPassword&&m.jsxs(pa,{met:E.match,children:[m.jsx(cn,{children:m.jsx(Ti,{size:14,weight:E.match?"fill":"regular"})}),"Passwords match"]})]}),m.jsx(QD,{type:"submit",disabled:i||f,children:i?m.jsxs(m.Fragment,{children:[m.jsx(O_,{size:18}),"Creating Account..."]}):f?"Checking email...":"Register"})]})]})})}const JD=F.div`
  display: flex;
  min-height: 100vh;
`,eO=F.div`
  width: 250px;
  background: linear-gradient(180deg, #000000 0%, #800000 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
`,tO=F.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`,yi=F.div`
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
`,zI=F.button`
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
`,nO=F(zI)`
  background-color: #111111;
  color: #76da7c;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,rO=F(zI)`
  background-color: #111111;
  color: #e67979;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,Hn=F.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`,iO=F.div`
  flex: 1;
  padding: 2rem;
  background-color: #f5f5f5;
  overflow-y: auto;
`,sO=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,oO=F.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,aO=F.div`
  display: flex;
  align-items: center;
`,lO=F.span`
  margin-right: 1rem;
  font-weight: 500;
`,uO=F.button`
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
`,cO=({user:t,activeTab:e,setActiveTab:n,attendanceStatus:r,loading:i,handleTimeInOut:s,lastRecord:o,isSuperAdmin:l,children:u})=>{const d=Vo(),f=async()=>{try{await N6(gn),d("/login")}catch(g){console.error("Error signing out:",g),G.error("Failed to sign out")}};return m.jsxs(JD,{children:[m.jsxs(eO,{children:[m.jsx(tO,{children:"HyAttend"}),m.jsxs(yi,{className:e==="dashboard"?"active":"",onClick:()=>n("dashboard"),children:[m.jsx(Hn,{children:m.jsx(VI,{size:16})}),"Dashboard"]}),m.jsxs(yi,{className:e==="attendance"?"active":"",onClick:()=>n("attendance"),children:[m.jsx(Hn,{children:m.jsx(OI,{size:16})}),"Attendance"]}),m.jsxs(yi,{className:e==="schedule"?"active":"",onClick:()=>n("schedule"),children:[m.jsx(Hn,{children:m.jsx(xl,{size:16})}),"Schedule"]}),m.jsxs(yi,{className:e==="profile"?"active":"",onClick:()=>n("profile"),children:[m.jsx(Hn,{children:m.jsx(Di,{size:16})}),"Profile"]}),l&&m.jsxs(m.Fragment,{children:[m.jsxs(yi,{className:e==="registration_requests"?"active":"",onClick:()=>n("registration_requests"),children:[m.jsx(Hn,{children:m.jsx(k0,{size:16})}),"Registration Requests"]}),m.jsxs(yi,{className:e==="user_management"?"active":"",onClick:()=>n("user_management"),children:[m.jsx(Hn,{children:m.jsx(E0,{size:16})}),"User Management"]})]}),m.jsxs("div",{style:{marginTop:"auto"},children:[m.jsxs("div",{style:{marginBottom:"1.5rem"},children:[m.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"Attendance Actions"}),m.jsxs(nO,{onClick:()=>s("In"),disabled:i||r==="In",children:[m.jsx(Hn,{children:m.jsx(_0,{size:16})}),"Time In"]}),m.jsxs(rO,{onClick:()=>s("Out"),disabled:i||r==="Out"||!r,children:[m.jsx(Hn,{children:m.jsx(fc,{size:16})}),"Time Out"]}),r&&m.jsxs("div",{style:{padding:"0.5rem 0",textAlign:"center",fontSize:"0.85rem"},children:["Status: ",m.jsx("strong",{children:r==="In"?"Clocked In":"Clocked Out"})]})]}),m.jsxs(yi,{onClick:f,children:[m.jsx(Hn,{children:m.jsx(fc,{size:16})}),"Logout"]})]})]}),m.jsxs(iO,{children:[m.jsxs(sO,{children:[m.jsxs(oO,{children:[e==="dashboard"&&"Dashboard",e==="attendance"&&"Attendance",e==="schedule"&&"Schedule",e==="profile"&&"Profile",e==="registration_requests"&&"Registration Requests",e==="user_management"&&"User Management"]}),m.jsxs(aO,{children:[m.jsx(lO,{children:t==null?void 0:t.displayName}),m.jsxs(uO,{onClick:f,children:[m.jsx(fc,{size:16}),"Logout"]})]})]}),u]})]})},Kr=F.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1.5rem;
`,Qr=F.h2`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1.25rem;
  margin: 0;
  border-bottom: 1px solid #eee;
`,Yr=F.div`
  padding: 1.25rem;
`,dO=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,BI=F.span`
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
`;const hO=({attendanceStatus:t,lastRecord:e})=>m.jsx(m.Fragment,{children:m.jsxs(dO,{children:[m.jsxs(Kr,{children:[m.jsx(Qr,{children:"Today's Schedule"}),m.jsx(Yr,{children:m.jsx("p",{children:"No schedule for today"})})]}),m.jsxs(Kr,{children:[m.jsx(Qr,{children:"Attendance Status"}),m.jsx(Yr,{children:t?m.jsxs(m.Fragment,{children:[m.jsxs("p",{children:["Current Status:",m.jsx(BI,{status:t,children:t==="In"?"Clocked In":"Clocked Out"})]}),e&&m.jsxs("p",{children:["Last action: ",new Date(e.timestamp.toDate()).toLocaleString()]})]}):m.jsx("p",{children:"You haven't clocked in today"})})]}),m.jsxs(Kr,{children:[m.jsx(Qr,{children:"Recent Activity"}),m.jsx(Yr,{children:e?m.jsxs("p",{children:["Last ",e.type==="In"?"Time In":"Time Out",": ",new Date(e.timestamp.toDate()).toLocaleString()]}):m.jsx("p",{children:"No recent activity"})})]})]})}),fO=F.table`
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
`,pO=F.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,mO=({user:t})=>{const[e,n]=j.useState([]),[r,i]=j.useState(!0);j.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{i(!0);const u=pn(Me,"attendance"),d=tr(u,jr("userId","==",t.uid),r0("timestamp","desc")),f=await Cn(d),g=[];f.forEach(y=>{g.push({id:y.id,...y.data()})}),n(g)}catch(u){console.error("Error fetching attendance records:",u)}finally{i(!1)}})()},[t]);const s=l=>l?l.toDate().toLocaleDateString():"N/A",o=l=>l?l.toDate().toLocaleTimeString():"N/A";return m.jsxs(Kr,{children:[m.jsx(Qr,{children:"Attendance Records"}),m.jsx(Yr,{children:r?m.jsx("p",{children:"Loading attendance records..."}):e.length>0?m.jsxs(fO,{children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"Date"}),m.jsx("th",{children:"Time"}),m.jsx("th",{children:"Type"}),m.jsx("th",{children:"Status"}),m.jsx("th",{children:"Notes"})]})}),m.jsx("tbody",{children:e.map(l=>m.jsxs("tr",{children:[m.jsx("td",{children:s(l.timestamp)}),m.jsx("td",{children:o(l.timestamp)}),m.jsx("td",{children:l.type}),m.jsx("td",{children:m.jsx(BI,{status:l.type,children:l.type==="In"?"Clocked In":"Clocked Out"})}),m.jsx("td",{children:l.notes||"-"})]},l.id))})]}):m.jsx(pO,{children:m.jsx("p",{children:"No attendance records found"})})})]})},gO=F.table`
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
`,yO=F.div`
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
`,vO=F.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,_O=({user:t})=>{const[e,n]=j.useState(null),[r,i]=j.useState(!0);j.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{i(!0);const d=tn(Me,"users",t.uid),f=await tm(d);if(f.exists()&&f.data().scheduleId){const g=f.data().scheduleId,y=tn(Me,"schedules",g),E=await tm(y);E.exists()&&n(E.data())}else{const g=pn(Me,"schedules"),y=tr(g,jr("isDefault","==",!0)),E=await Cn(y);E.empty||n(E.docs[0].data())}}catch(d){console.error("Error fetching schedule:",d)}finally{i(!1)}})()},[t]);const s=u=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][u],o=u=>{if(!u)return"N/A";try{const[d,f]=u.split(":"),g=new Date;return g.setHours(parseInt(d,10)),g.setMinutes(parseInt(f,10)),g.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}catch{return u}},l=()=>new Date().getDay();return m.jsxs(Kr,{children:[m.jsx(Qr,{children:"Your Schedule"}),m.jsx(Yr,{children:r?m.jsx("p",{children:"Loading schedule..."}):e?m.jsxs(m.Fragment,{children:[m.jsxs("p",{children:[m.jsx("strong",{children:"Schedule Name:"})," ",e.name||"Regular Schedule"]}),e.days&&Object.keys(e.days).length>0?Object.entries(e.days).map(([u,d])=>{const f=parseInt(u,10),g=f===l();return m.jsxs(yO,{isToday:g,children:[m.jsxs("h3",{children:[s(f)," ",g&&"(Today)"]}),d.shifts&&d.shifts.length>0?m.jsxs(gO,{children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"Shift"}),m.jsx("th",{children:"Start Time"}),m.jsx("th",{children:"End Time"})]})}),m.jsx("tbody",{children:d.shifts.map((y,E)=>m.jsxs("tr",{children:[m.jsxs("td",{children:["Shift ",E+1]}),m.jsx("td",{children:o(y.startTime)}),m.jsx("td",{children:o(y.endTime)})]},E))})]}):m.jsx("p",{children:"No shifts scheduled"})]},u)}):m.jsx("p",{children:"No daily schedule defined"})]}):m.jsx(vO,{children:m.jsx("p",{children:"No schedule assigned yet"})})})]})},kO=F.div`
  margin-bottom: 1.5rem;
`,js=F.p`
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`,Ds=F.strong`
  min-width: 120px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
`,EO=F.h3`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,Os=F.span`
  color: #333;
  word-break: break-word;
`,wO=({user:t,userData:e,loadingUserData:n})=>m.jsxs(Kr,{children:[m.jsx(Qr,{children:"User Profile"}),m.jsx(Yr,{children:n?m.jsx("p",{children:"Loading user data..."}):m.jsx(m.Fragment,{children:m.jsxs(kO,{children:[m.jsxs(EO,{children:[m.jsx(fm,{size:20,weight:"bold"}),"User Information"]}),m.jsxs(js,{children:[m.jsxs(Ds,{children:[m.jsx(dh,{size:18}),"Email:"]}),m.jsx(Os,{children:t==null?void 0:t.email})]}),m.jsxs(js,{children:[m.jsxs(Ds,{children:[m.jsx(Di,{size:18}),"Name:"]}),m.jsx(Os,{children:t==null?void 0:t.displayName})]}),m.jsxs(js,{children:[m.jsxs(Ds,{children:[m.jsx(v0,{size:18}),"User ID:"]}),m.jsx(Os,{children:t==null?void 0:t.uid})]}),m.jsxs(js,{children:[m.jsxs(Ds,{children:[m.jsx(y0,{size:18}),"Position:"]}),m.jsx(Os,{children:(e==null?void 0:e.position)||"Not specified"})]}),m.jsxs(js,{children:[m.jsxs(Ds,{children:[m.jsx(fm,{size:18}),"Role:"]}),m.jsx(Os,{children:(e==null?void 0:e.role)||"Not specified"})]}),e&&m.jsxs(js,{children:[m.jsxs(Ds,{children:[m.jsx(xl,{size:18}),"Created At:"]}),m.jsx(Os,{children:(()=>{var r,i;try{return(r=e.createdAt)!=null&&r.seconds?new Date(e.createdAt.seconds*1e3).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):(i=e.createdAt)!=null&&i.toDate?e.createdAt.toDate().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):e.createdAt instanceof Date?e.createdAt.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):typeof e.createdAt=="string"?new Date(e.createdAt).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):`${new Date().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})} (Current)`}catch(s){return console.error("Error formatting timestamp:",s,e.createdAt),"April 26, 2025, 04:27 AM"}})()})]})]})})})]}),TO=F.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,IO=F.div`
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
`,xO=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,SO=F.h3`
  font-size: 1.1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,AO=F.span`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,RO=F.div`
  margin-bottom: 1.5rem;
`,bf=F.div`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
`,Nf=F.span`
  font-weight: 500;
  width: 120px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
`,jf=F.span`
  color: #333;
`,LO=F.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`,Bl=F.button`
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
`,CO=F(Bl)`
  background-color: #4caf50;
  color: white;
  
  &:hover {
    background-color: #43a047;
  }
`,PO=F(Bl)`
  background-color: #f44336;
  color: white;
  
  &:hover {
    background-color: #e53935;
  }
`,bO=F(Bl)`
  background-color: #2196f3;
  color: white;
  
  &:hover {
    background-color: #1e88e5;
  }
`,NO=F.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`,jO=F.div`
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
`,DO=F.div`
  background-color: white;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,OO=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,MO=F.h3`
  margin: 0;
  font-size: 1.2rem;
`,VO=F.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`,FO=F.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Du=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Ou=F.label`
  font-weight: 500;
  color: #555;
`,Df=F.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,UO=F.select`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,WO=F.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`,$O=F(Bl)`
  background-color: #6e8efb;
  color: white;
  
  &:hover {
    background-color: #5a7df9;
  }
`,zO=F(Bl)`
  background-color: #e0e0e0;
  color: #333;
  
  &:hover {
    background-color: #d5d5d5;
  }
`,BO=F.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #666;
`,HO=t=>{if(!t)return"N/A";try{let e;if(t!=null&&t.seconds)e=new Date(t.seconds*1e3);else if(t!=null&&t.toDate)e=t.toDate();else if(t instanceof Date)e=t;else if(typeof t=="string")e=new Date(t);else return"Invalid date";return e.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}catch(e){return console.error("Error formatting timestamp:",e),"Invalid date"}},qO=()=>{const[t,e]=j.useState([]),[n,r]=j.useState(!0),[i,s]=j.useState(null),[o,l]=j.useState({name:"",email:"",position:"",role:""}),[u,d]=j.useState(!1);j.useEffect(()=>{f()},[]);const f=async()=>{try{r(!0);const _=await FD();e(_)}catch(_){console.error("Error fetching registration requests:",_),G.error("Failed to load registration requests")}finally{r(!1)}},g=async _=>{try{d(!0),await WD(_),G.success(`Registration for ${_.name||_.email} approved`),f()}catch(v){console.error("Error approving registration:",v),G.error("Failed to approve registration")}finally{d(!1)}},y=async _=>{try{d(!0),await $D(_),G.success(`Registration for ${_.name||_.email} declined`),G.warning("Note: The user may still exist in Firebase Authentication. They will be blocked from accessing the system, but the account still exists."),f()}catch(v){console.error("Error declining registration:",v),G.error("Failed to decline registration")}finally{d(!1)}},E=_=>{s(_),l({name:_.name||"",email:_.email||"",position:_.position||"",role:_.role||"user"})},A=()=>{s(null)},C=_=>{const{name:v,value:x}=_.target;l(P=>({...P,[v]:x}))},L=async _=>{_.preventDefault();try{d(!0),await UD(i.id,{name:o.name,email:o.email,position:o.position,role:o.role}),G.success("Registration request updated"),s(null),f()}catch(v){console.error("Error updating registration request:",v),G.error("Failed to update registration request")}finally{d(!1)}};return n?m.jsxs(Kr,{children:[m.jsx(Qr,{children:"Registration Requests"}),m.jsx(Yr,{children:m.jsx(BO,{children:"Loading registration requests..."})})]}):m.jsxs(Kr,{children:[m.jsx(Qr,{children:"Registration Requests"}),m.jsxs(Yr,{children:[m.jsx(TO,{children:t.length===0?m.jsx(NO,{children:m.jsx("p",{children:"No pending registration requests"})}):t.map(_=>m.jsxs(IO,{children:[m.jsxs(xO,{children:[m.jsxs(SO,{children:[m.jsx(Di,{size:18,weight:"bold"}),_.name||_.email]}),m.jsxs(AO,{children:[m.jsx(MI,{size:14}),HO(_.createdAt)]})]}),m.jsxs(RO,{children:[m.jsxs(bf,{children:[m.jsxs(Nf,{children:[m.jsx(Di,{size:16}),"Email:"]}),m.jsx(jf,{children:_.email})]}),m.jsxs(bf,{children:[m.jsxs(Nf,{children:[m.jsx(y0,{size:16}),"Position:"]}),m.jsx(jf,{children:_.position||"Not specified"})]}),m.jsxs(bf,{children:[m.jsxs(Nf,{children:[m.jsx(Di,{size:16}),"Role:"]}),m.jsx(jf,{children:_.role||"user"})]})]}),m.jsxs(LO,{children:[m.jsxs(bO,{onClick:()=>E(_),disabled:u,children:[m.jsx(FI,{size:16}),"Edit"]}),m.jsxs(CO,{onClick:()=>g(_),disabled:u,children:[m.jsx(Ti,{size:16}),"Accept"]}),m.jsxs(PO,{onClick:()=>y(_),disabled:u,children:[m.jsx($I,{size:16}),"Decline"]})]})]},_.id))}),i&&m.jsx(jO,{children:m.jsxs(DO,{children:[m.jsxs(OO,{children:[m.jsx(MO,{children:"Edit Registration Request"}),m.jsx(VO,{onClick:A,children:"×"})]}),m.jsxs(FO,{onSubmit:L,children:[m.jsxs(Du,{children:[m.jsx(Ou,{htmlFor:"name",children:"Name"}),m.jsx(Df,{type:"text",id:"name",name:"name",value:o.name,onChange:C,placeholder:"Enter name"})]}),m.jsxs(Du,{children:[m.jsx(Ou,{htmlFor:"email",children:"Email"}),m.jsx(Df,{type:"email",id:"email",name:"email",value:o.email,onChange:C,placeholder:"Enter email",required:!0})]}),m.jsxs(Du,{children:[m.jsx(Ou,{htmlFor:"position",children:"Position"}),m.jsx(Df,{type:"text",id:"position",name:"position",value:o.position,onChange:C,placeholder:"Enter position"})]}),m.jsxs(Du,{children:[m.jsx(Ou,{htmlFor:"role",children:"Role"}),m.jsxs(UO,{id:"role",name:"role",value:o.role,onChange:C,children:[m.jsx("option",{value:"user",children:"User"}),m.jsx("option",{value:"admin",children:"Admin"}),m.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),m.jsxs(WO,{children:[m.jsx(zO,{type:"button",onClick:A,children:"Cancel"}),m.jsx($O,{type:"submit",disabled:u,children:"Save Changes"})]})]})]})})]})]})},GO=F.div`
  padding: 2rem;
`,KO=F.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,QO=F.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,YO=F.thead`
  background-color: #f5f5f5;
`,Of=F.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`,Ms=F.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`,vi=F.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`,Mu=F.button`
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
`,XO=F.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.role){case"admin":return"#800000";case"superadmin":return"#000000";default:return"#555555"}}};
  color: white;
`,ZO=F.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.status){case"active":return"#4caf50";case"inactive":return"#f44336";case"pending":return"#ff9800";default:return"#9e9e9e"}}};
  color: white;
`,JO=F.input`
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
`,M_=F.div`
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
`,V_=F.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,F_=F.h3`
  margin-top: 0;
  color: #333;
`,e3=F.p`
  margin-bottom: 1.5rem;
  color: #666;
`,U_=F.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,ma=F.button`
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
`,Vu=F.div`
  margin-bottom: 1rem;
`,t3=F.div`
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
`,Fu=F.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,W_=F.input`
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
`,n3=F.select`
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
`,r3=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,i3=F.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,s3=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,o3=F.h4`
  margin: 0;
  color: #333;
`,a3=F.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;F.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;function l3(){const[t,e]=j.useState([]),[n,r]=j.useState(!0),[i,s]=j.useState(""),[o,l]=j.useState(!1),[u,d]=j.useState(null),[f,g]=j.useState(!1),[y,E]=j.useState(null),[A,C]=j.useState([]),[L,_]=j.useState({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),v=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];j.useEffect(()=>{x()},[]);const x=async()=>{try{r(!0);const I=pn(Me,"users"),pe=(await Cn(I)).docs.map(he=>({id:he.id,...he.data(),schedule:he.data().schedule||[]}));e(pe),r(!1)}catch(I){console.error("Error fetching users:",I),G.error("Failed to load users"),r(!1)}},P=I=>{d(I),l(!0)},D=async()=>{if(u)try{await s0(tn(Me,"users",u.id)),e(t.filter(I=>I.id!==u.id)),G.success(`User ${u.name||u.email} has been deleted`),l(!1),d(null)}catch(I){console.error("Error deleting user:",I),G.error("Failed to delete user")}},M=()=>{l(!1),d(null)},w=async(I,Z)=>{const pe=Z==="active"?"inactive":"active";try{const he=tn(Me,"users",I);await nm(he,{status:pe}),e(t.map(me=>me.id===I?{...me,status:pe}:me)),G.success(`User status updated to ${pe}`)}catch(he){console.error("Error updating user status:",he),G.error("Failed to update user status")}},k=I=>{E(I),C(I.schedule||[]),g(!0)},S=()=>{if(L.selectedDays.length===0){G.warning("Please select at least one day of the week");return}const I=new Date,[Z,pe]=L.timeIn.split(":").map(Number);I.setHours(Z,pe,0,0);const he=L.selectedDays.map(z=>({id:`${Date.now()}-${z}`,dayOfWeek:z,timeIn:L.timeIn,timeRegion:L.timeRegion,shiftDuration:parseInt(L.shiftDuration,10),utcTimeIn:I.toISOString()})),me=[...A,...he];C(me),G.success(`Added schedule for ${L.selectedDays.length} day(s)`),_({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},R=async()=>{if(y)try{const I=tn(Me,"users",y.id);await nm(I,{schedule:A}),e(t.map(Z=>Z.id===y.id?{...Z,schedule:A}:Z)),G.success("Schedule updated successfully"),g(!1)}catch(I){console.error("Error updating schedule:",I),G.error("Failed to update schedule")}},b=I=>{const Z=A.filter(pe=>pe.id!==I);C(Z)},N=t.filter(I=>{const Z=i.toLowerCase();return I.name&&I.name.toLowerCase().includes(Z)||I.email&&I.email.toLowerCase().includes(Z)||I.role&&I.role.toLowerCase().includes(Z)||I.position&&I.position.toLowerCase().includes(Z)});return m.jsxs(GO,{children:[m.jsxs(KO,{children:[m.jsx(E0,{size:24,weight:"bold"}),"User Management"]}),m.jsx(JO,{type:"text",placeholder:"Search users...",value:i,onChange:I=>s(I.target.value)}),n?m.jsx("p",{children:"Loading users..."}):m.jsxs(QO,{children:[m.jsx(YO,{children:m.jsxs(Of,{children:[m.jsx(Ms,{children:"Name"}),m.jsx(Ms,{children:"Email"}),m.jsx(Ms,{children:"Position"}),m.jsx(Ms,{children:"Role"}),m.jsx(Ms,{children:"Status"}),m.jsx(Ms,{children:"Actions"})]})}),m.jsx("tbody",{children:N.length>0?N.map(I=>m.jsxs(Of,{children:[m.jsx(vi,{children:I.name||"N/A"}),m.jsx(vi,{children:I.email}),m.jsx(vi,{children:I.position||"N/A"}),m.jsx(vi,{children:m.jsx(XO,{role:I.role,children:I.role||"member"})}),m.jsx(vi,{children:m.jsx(ZO,{status:I.status||"active",children:I.status||"active"})}),m.jsxs(vi,{children:[m.jsx(Mu,{color:"#000000",onClick:()=>k(I),title:"Manage Schedule",children:m.jsx(xl,{size:20})}),m.jsx(Mu,{color:I.status==="active"?"#f44336":"#4caf50",onClick:()=>w(I.id,I.status||"active"),title:I.status==="active"?"Deactivate user":"Activate user",children:I.status==="active"?m.jsx(WI,{size:20}):m.jsx(DI,{size:20})}),m.jsx(Mu,{color:"#f44336",onClick:()=>P(I),title:"Delete user",children:m.jsx(hm,{size:20})})]})]},I.id)):m.jsx(Of,{children:m.jsx(vi,{colSpan:6,style:{textAlign:"center"},children:"No users found"})})})]}),o&&m.jsx(M_,{children:m.jsxs(V_,{children:[m.jsx(F_,{children:"Confirm Deletion"}),m.jsxs(e3,{children:["Are you sure you want to delete the user ",(u==null?void 0:u.name)||(u==null?void 0:u.email),"? This action cannot be undone."]}),m.jsxs(U_,{children:[m.jsx(ma,{onClick:M,children:"Cancel"}),m.jsx(ma,{primary:!0,onClick:D,children:"Delete"})]})]})}),f&&y&&m.jsx(M_,{children:m.jsxs(V_,{style:{maxWidth:"600px",width:"100%"},children:[m.jsx(F_,{children:m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[m.jsx(xl,{size:24}),"Manage Schedule for ",y.name||y.email]})}),m.jsxs("div",{style:{marginBottom:"1.5rem"},children:[m.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Current Schedule"}),A.length>0?m.jsx(r3,{children:A.map(I=>m.jsxs(i3,{children:[m.jsxs(s3,{children:[m.jsx(o3,{children:I.dayOfWeek}),m.jsx(Mu,{color:"#f44336",onClick:()=>b(I.id),title:"Delete schedule",children:m.jsx(hm,{size:16})})]}),m.jsxs(a3,{children:[m.jsxs("div",{children:[m.jsx("strong",{children:"Time In:"})," ",I.timeIn]}),m.jsxs("div",{children:[m.jsx("strong",{children:"Region:"})," ",I.timeRegion]}),m.jsxs("div",{children:[m.jsx("strong",{children:"Duration:"})," ",I.shiftDuration," hours"]})]})]},I.id))}):m.jsx("p",{children:"No schedules found. Add a new schedule below."})]}),m.jsxs("div",{style:{marginBottom:"1.5rem"},children:[m.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Add New Schedule"}),m.jsxs(Vu,{children:[m.jsx(Fu,{children:"Days of Week (select multiple)"}),m.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:v.map(I=>m.jsxs(t3,{children:[m.jsx("input",{type:"checkbox",id:`day-${I}`,checked:L.selectedDays.includes(I),onChange:()=>{const Z=L.selectedDays.includes(I)?L.selectedDays.filter(pe=>pe!==I):[...L.selectedDays,I];_({...L,selectedDays:Z})}}),m.jsx("label",{htmlFor:`day-${I}`,children:I})]},I))})]}),m.jsxs(Vu,{children:[m.jsx(Fu,{children:"Time In"}),m.jsx(W_,{type:"time",value:L.timeIn,onChange:I=>_({...L,timeIn:I.target.value})})]}),m.jsxs(Vu,{children:[m.jsx(Fu,{children:"Time Region"}),m.jsxs(n3,{value:L.timeRegion,onChange:I=>_({...L,timeRegion:I.target.value}),children:[m.jsxs("optgroup",{label:"Asia & Pacific",children:[m.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT)"}),m.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore (SGT)"}),m.jsx("option",{value:"Asia/Tokyo",children:"Asia/Tokyo (JST)"}),m.jsx("option",{value:"Australia/Sydney",children:"Australia/Sydney (AEST/AEDT)"})]}),m.jsxs("optgroup",{label:"Americas",children:[m.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern)"}),m.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central)"}),m.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain)"}),m.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific)"}),m.jsx("option",{value:"America/Anchorage",children:"America/Anchorage (Alaska)"}),m.jsx("option",{value:"America/Adak",children:"America/Adak (Hawaii-Aleutian)"}),m.jsx("option",{value:"Pacific/Honolulu",children:"Pacific/Honolulu (Hawaii)"}),m.jsx("option",{value:"America/Phoenix",children:"America/Phoenix (Arizona)"}),m.jsx("option",{value:"America/Toronto",children:"America/Toronto (Eastern Canada)"}),m.jsx("option",{value:"America/Vancouver",children:"America/Vancouver (Pacific Canada)"})]}),m.jsxs("optgroup",{label:"Europe & Africa",children:[m.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST)"}),m.jsx("option",{value:"Europe/Paris",children:"Europe/Paris (CET/CEST)"}),m.jsx("option",{value:"Europe/Berlin",children:"Europe/Berlin (CET/CEST)"}),m.jsx("option",{value:"Europe/Moscow",children:"Europe/Moscow (MSK)"})]})]})]}),m.jsxs(Vu,{children:[m.jsx(Fu,{children:"Shift Duration (hours)"}),m.jsx(W_,{type:"number",min:"1",max:"24",value:L.shiftDuration,onChange:I=>_({...L,shiftDuration:I.target.value})})]}),m.jsx(ma,{primary:!0,onClick:S,style:{marginTop:"0.5rem"},children:"Add Schedule"})]}),m.jsxs(U_,{children:[m.jsx(ma,{onClick:()=>g(!1),children:"Cancel"}),m.jsx(ma,{primary:!0,onClick:R,children:"Save Changes"})]})]})})]})}function u3(){const[t,e]=j.useState(null),[n,r]=j.useState("dashboard"),[i,s]=j.useState(null),[o,l]=j.useState(null),[u,d]=j.useState(!1),[f,g]=j.useState(null),[y,E]=j.useState(!1),A=Vo();j.useEffect(()=>{const v=gn.currentUser;if(v){const x={uid:v.uid,email:v.email,displayName:v.displayName||v.email.split("@")[0]};e(x),C(v.uid)}},[]);const C=async v=>{if(v)try{E(!0);try{const D=tr(pn(Me,"declined_registrations"),jr("userId","==",v));if(!(await Cn(D)).empty){G.error("Your registration request has been declined. Please contact an administrator."),await gn.signOut(),A("/login");return}}catch(D){console.error("Error checking declined status:",D)}try{const D=tr(pn(Me,"registration_requests"),jr("userId","==",v));if(!(await Cn(D)).empty){G.info("Your registration request is pending approval. You will be notified when approved."),await gn.signOut(),A("/login");return}}catch(D){console.error("Error checking pending status:",D)}const x=tn(Me,"users",v),P=await tm(x);if(P.exists()){const D=P.data();g(D)}else console.log("No user data found in Firestore"),G.error("Your account is not properly set up. Please contact an administrator."),await gn.signOut(),A("/login")}catch(x){console.error("Error fetching user data:",x),G.error("Error loading user data. Please try again later.")}finally{E(!1)}};j.useEffect(()=>{t!=null&&t.uid&&L()},[t]);const L=async()=>{try{const v=pn(Me,"attendance");try{const x=tr(v,jr("userId","==",t.uid),r0("timestamp","desc"),Bb(1)),P=await Cn(x);if(P.empty)s(null),l(null);else{const D=P.docs[0].data();l(D),s(D.type)}}catch(x){if(x.message&&x.message.includes("index is currently building")){console.log("Index is still building, using fallback method");const P=tr(v,jr("userId","==",t.uid)),D=await Cn(P);if(D.empty)s(null),l(null);else{let M=null,w=new Date(0);D.forEach(k=>{var b;const S=k.data(),R=((b=S.timestamp)==null?void 0:b.toDate())||new Date(0);R>w&&(w=R,M=S)}),M?(l(M),s(M.type)):(s(null),l(null))}G.info("System is updating. Some features may be temporarily limited.",{autoClose:5e3,hideProgressBar:!1})}else throw x}}catch(v){console.error("Error fetching attendance status:",v),v.message&&v.message.includes("index")?G.warning("System is updating attendance records. Please try again in a few minutes."):G.error("Unable to fetch your attendance status. Please refresh the page.")}},_=async v=>{if(t){d(!0);try{const x=He.now(),P=v==="In"?"On Time":"",D={userId:t.uid,email:t.email,name:t.displayName,type:v,status:P,timestamp:x,notes:""};await DT(pn(Me,"attendance"),D),G.success(`Time ${v} recorded successfully!`),s(v),l(D)}catch(x){console.error(`Error recording time ${v}:`,x),G.error(`Failed to record time ${v}`)}finally{d(!1)}}};return m.jsxs(cO,{user:t,activeTab:n,setActiveTab:r,attendanceStatus:i,loading:u,handleTimeInOut:_,lastRecord:o,isSuperAdmin:(f==null?void 0:f.role)==="super_admin",children:[n==="dashboard"&&m.jsx(hO,{attendanceStatus:i,lastRecord:o}),n==="attendance"&&m.jsx(mO,{user:t}),n==="schedule"&&m.jsx(_O,{user:t}),n==="profile"&&m.jsx(wO,{user:t,userData:f,loadingUserData:y}),n==="registration_requests"&&(f==null?void 0:f.role)==="super_admin"&&m.jsx(qO,{}),n==="user_management"&&(f==null?void 0:f.role)==="super_admin"&&m.jsx(l3,{})]})}const c3=({children:t})=>{const[e,n]=j.useState(!0),[r,i]=j.useState(null);return j.useEffect(()=>{const s=b6(gn,o=>{i(o),n(!1)});return()=>s()},[]),e?m.jsx(d3,{children:"Loading..."}):r?t:m.jsx(d2,{to:"/",replace:!0})},d3=F.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #6e8efb;
  background-color: #f5f5f5;
`;function h3(){return m.jsxs(m.Fragment,{children:[m.jsx(qA,{children:m.jsxs(FA,{children:[m.jsx(ka,{path:"/",element:m.jsx(MD,{})}),m.jsx(ka,{path:"/register",element:m.jsx(ZD,{})}),m.jsx(ka,{path:"/dashboard",element:m.jsx(c3,{children:m.jsx(u3,{})})}),m.jsx(ka,{path:"*",element:m.jsx(d2,{to:"/",replace:!0})})]})}),m.jsx(dm,{position:"top-right",autoClose:3e3})]})}e2(document.getElementById("root")).render(m.jsx(j.StrictMode,{children:m.jsx(h3,{})}));
