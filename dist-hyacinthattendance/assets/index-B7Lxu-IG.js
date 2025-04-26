function AI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function LI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var G_={exports:{}},gd={},K_={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rl=Symbol.for("react.element"),RI=Symbol.for("react.portal"),CI=Symbol.for("react.fragment"),PI=Symbol.for("react.strict_mode"),bI=Symbol.for("react.profiler"),jI=Symbol.for("react.provider"),NI=Symbol.for("react.context"),DI=Symbol.for("react.forward_ref"),OI=Symbol.for("react.suspense"),MI=Symbol.for("react.memo"),VI=Symbol.for("react.lazy"),T1=Symbol.iterator;function FI(t){return t===null||typeof t!="object"?null:(t=T1&&t[T1]||t["@@iterator"],typeof t=="function"?t:null)}var Q_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y_=Object.assign,Z_={};function Do(t,e,n){this.props=t,this.context=e,this.refs=Z_,this.updater=n||Q_}Do.prototype.isReactComponent={};Do.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Do.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function X_(){}X_.prototype=Do.prototype;function gm(t,e,n){this.props=t,this.context=e,this.refs=Z_,this.updater=n||Q_}var ym=gm.prototype=new X_;ym.constructor=gm;Y_(ym,Do.prototype);ym.isPureReactComponent=!0;var I1=Array.isArray,J_=Object.prototype.hasOwnProperty,vm={current:null},ek={key:!0,ref:!0,__self:!0,__source:!0};function tk(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)J_.call(e,r)&&!ek.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Rl,type:t,key:s,ref:o,props:i,_owner:vm.current}}function UI(t,e){return{$$typeof:Rl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _m(t){return typeof t=="object"&&t!==null&&t.$$typeof===Rl}function WI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var x1=/\/+/g;function Mh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?WI(""+t.key):e.toString(36)}function $u(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Rl:case RI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Mh(o,0):r,I1(i)?(n="",t!=null&&(n=t.replace(x1,"$&/")+"/"),$u(i,e,n,"",function(d){return d})):i!=null&&(_m(i)&&(i=UI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(x1,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",I1(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Mh(s,l);o+=$u(s,e,n,u,i)}else if(u=FI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Mh(s,l++),o+=$u(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function cu(t,e,n){if(t==null)return t;var r=[],i=0;return $u(t,r,"","",function(s){return e.call(n,s,i++)}),r}function $I(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xt={current:null},Bu={transition:null},BI={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:Bu,ReactCurrentOwner:vm};function nk(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:cu,forEach:function(t,e,n){cu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return cu(t,function(){e++}),e},toArray:function(t){return cu(t,function(e){return e})||[]},only:function(t){if(!_m(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=Do;oe.Fragment=CI;oe.Profiler=bI;oe.PureComponent=gm;oe.StrictMode=PI;oe.Suspense=OI;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BI;oe.act=nk;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Y_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)J_.call(e,u)&&!ek.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Rl,type:t.type,key:i,ref:s,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:NI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jI,_context:t},t.Consumer=t};oe.createElement=tk;oe.createFactory=function(t){var e=tk.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:DI,render:t}};oe.isValidElement=_m;oe.lazy=function(t){return{$$typeof:VI,_payload:{_status:-1,_result:t},_init:$I}};oe.memo=function(t,e){return{$$typeof:MI,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=Bu.transition;Bu.transition={};try{t()}finally{Bu.transition=e}};oe.unstable_act=nk;oe.useCallback=function(t,e){return xt.current.useCallback(t,e)};oe.useContext=function(t){return xt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return xt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return xt.current.useEffect(t,e)};oe.useId=function(){return xt.current.useId()};oe.useImperativeHandle=function(t,e,n){return xt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return xt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return xt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return xt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return xt.current.useReducer(t,e,n)};oe.useRef=function(t){return xt.current.useRef(t)};oe.useState=function(t){return xt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return xt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return xt.current.useTransition()};oe.version="18.3.1";K_.exports=oe;var D=K_.exports;const c=LI(D),zI=AI({__proto__:null,default:c},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HI=D,qI=Symbol.for("react.element"),GI=Symbol.for("react.fragment"),KI=Object.prototype.hasOwnProperty,QI=HI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,YI={key:!0,ref:!0,__self:!0,__source:!0};function rk(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)KI.call(e,r)&&!YI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qI,type:t,key:s,ref:o,props:i,_owner:QI.current}}gd.Fragment=GI;gd.jsx=rk;gd.jsxs=rk;G_.exports=gd;var p=G_.exports,ik={exports:{}},Gt={},sk={exports:{}},ok={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var F=z.length;z.push(Q);e:for(;0<F;){var J=F-1>>>1,Z=z[J];if(0<i(Z,Q))z[J]=Q,z[F]=Z,F=J;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],F=z.pop();if(F!==Q){z[0]=F;e:for(var J=0,Z=z.length,ie=Z>>>1;J<ie;){var Ce=2*(J+1)-1,me=z[Ce],lt=Ce+1,At=z[lt];if(0>i(me,F))lt<Z&&0>i(At,me)?(z[J]=At,z[lt]=F,J=lt):(z[J]=me,z[Ce]=F,J=Ce);else if(lt<Z&&0>i(At,F))z[J]=At,z[lt]=F,J=lt;else break e}}return Q}function i(z,Q){var F=z.sortIndex-Q.sortIndex;return F!==0?F:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],f=1,g=null,y=3,k=!1,x=!1,R=!1,A=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(z){for(var Q=n(d);Q!==null;){if(Q.callback===null)r(d);else if(Q.startTime<=z)r(d),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(d)}}function P(z){if(R=!1,I(z),!x)if(n(u)!==null)x=!0,Re(N);else{var Q=n(d);Q!==null&&we(P,Q.startTime-z)}}function N(z,Q){x=!1,R&&(R=!1,_(E),E=-1),k=!0;var F=y;try{for(I(Q),g=n(u);g!==null&&(!(g.expirationTime>Q)||z&&!b());){var J=g.callback;if(typeof J=="function"){g.callback=null,y=g.priorityLevel;var Z=J(g.expirationTime<=Q);Q=t.unstable_now(),typeof Z=="function"?g.callback=Z:g===n(u)&&r(u),I(Q)}else r(u);g=n(u)}if(g!==null)var ie=!0;else{var Ce=n(d);Ce!==null&&we(P,Ce.startTime-Q),ie=!1}return ie}finally{g=null,y=F,k=!1}}var V=!1,w=null,E=-1,S=5,L=-1;function b(){return!(t.unstable_now()-L<S)}function j(){if(w!==null){var z=t.unstable_now();L=z;var Q=!0;try{Q=w(!0,z)}finally{Q?C():(V=!1,w=null)}}else V=!1}var C;if(typeof v=="function")C=function(){v(j)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,Ge=fe.port2;fe.port1.onmessage=j,C=function(){Ge.postMessage(null)}}else C=function(){A(j,0)};function Re(z){w=z,V||(V=!0,C())}function we(z,Q){E=A(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){x||k||(x=!0,Re(N))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var F=y;y=Q;try{return z()}finally{y=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var F=y;y=z;try{return Q()}finally{y=F}},t.unstable_scheduleCallback=function(z,Q,F){var J=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?J+F:J):F=J,z){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=F+Z,z={id:f++,callback:Q,priorityLevel:z,startTime:F,expirationTime:Z,sortIndex:-1},F>J?(z.sortIndex=F,e(d,z),n(u)===null&&z===n(d)&&(R?(_(E),E=-1):R=!0,we(P,F-J))):(z.sortIndex=Z,e(u,z),x||k||(x=!0,Re(N))),z},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(z){var Q=y;return function(){var F=y;y=Q;try{return z.apply(this,arguments)}finally{y=F}}}})(ok);sk.exports=ok;var ZI=sk.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XI=D,qt=ZI;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ak=new Set,Ya={};function Yi(t,e){mo(t,e),mo(t+"Capture",e)}function mo(t,e){for(Ya[t]=e,t=0;t<e.length;t++)ak.add(e[t])}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=Object.prototype.hasOwnProperty,JI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S1={},A1={};function ex(t){return Uf.call(A1,t)?!0:Uf.call(S1,t)?!1:JI.test(t)?A1[t]=!0:(S1[t]=!0,!1)}function tx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nx(t,e,n,r){if(e===null||typeof e>"u"||tx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var km=/[\-:]([a-z])/g;function Em(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(km,Em);ot[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(km,Em);ot[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(km,Em);ot[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function wm(t,e,n,r){var i=ot.hasOwnProperty(e)?ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nx(e,n,i,r)&&(n=null),r||i===null?ex(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fr=XI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,du=Symbol.for("react.element"),zs=Symbol.for("react.portal"),Hs=Symbol.for("react.fragment"),Tm=Symbol.for("react.strict_mode"),Wf=Symbol.for("react.profiler"),lk=Symbol.for("react.provider"),uk=Symbol.for("react.context"),Im=Symbol.for("react.forward_ref"),$f=Symbol.for("react.suspense"),Bf=Symbol.for("react.suspense_list"),xm=Symbol.for("react.memo"),Ir=Symbol.for("react.lazy"),ck=Symbol.for("react.offscreen"),L1=Symbol.iterator;function aa(t){return t===null||typeof t!="object"?null:(t=L1&&t[L1]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,Vh;function _a(t){if(Vh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vh=e&&e[1]||""}return`
`+Vh+t}var Fh=!1;function Uh(t,e){if(!t||Fh)return"";Fh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Fh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_a(t):""}function rx(t){switch(t.tag){case 5:return _a(t.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 2:case 15:return t=Uh(t.type,!1),t;case 11:return t=Uh(t.type.render,!1),t;case 1:return t=Uh(t.type,!0),t;default:return""}}function zf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hs:return"Fragment";case zs:return"Portal";case Wf:return"Profiler";case Tm:return"StrictMode";case $f:return"Suspense";case Bf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case uk:return(t.displayName||"Context")+".Consumer";case lk:return(t._context.displayName||"Context")+".Provider";case Im:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xm:return e=t.displayName||null,e!==null?e:zf(t.type)||"Memo";case Ir:e=t._payload,t=t._init;try{return zf(t(e))}catch{}}return null}function ix(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zf(e);case 8:return e===Tm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dk(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sx(t){var e=dk(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function hu(t){t._valueTracker||(t._valueTracker=sx(t))}function hk(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dk(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hf(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function R1(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fk(t,e){e=e.checked,e!=null&&wm(t,"checked",e,!1)}function qf(t,e){fk(t,e);var n=Xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gf(t,e.type,Xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function C1(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gf(t,e,n){(e!=="number"||gc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ka=Array.isArray;function io(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Kf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function P1(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(ka(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xr(n)}}function pk(t,e){var n=Xr(e.value),r=Xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function b1(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mk(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mk(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fu,gk=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fu=fu||document.createElement("div"),fu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ox=["Webkit","ms","Moz","O"];Object.keys(ba).forEach(function(t){ox.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ba[e]=ba[t]})});function yk(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ba.hasOwnProperty(t)&&ba[t]?(""+e).trim():e+"px"}function vk(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yk(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ax=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yf(t,e){if(e){if(ax[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Zf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xf=null;function Sm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jf=null,so=null,oo=null;function j1(t){if(t=bl(t)){if(typeof Jf!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Ed(e),Jf(t.stateNode,t.type,e))}}function _k(t){so?oo?oo.push(t):oo=[t]:so=t}function kk(){if(so){var t=so,e=oo;if(oo=so=null,j1(t),e)for(t=0;t<e.length;t++)j1(e[t])}}function Ek(t,e){return t(e)}function wk(){}var Wh=!1;function Tk(t,e,n){if(Wh)return t(e,n);Wh=!0;try{return Ek(t,e,n)}finally{Wh=!1,(so!==null||oo!==null)&&(wk(),kk())}}function Xa(t,e){var n=t.stateNode;if(n===null)return null;var r=Ed(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var ep=!1;if(sr)try{var la={};Object.defineProperty(la,"passive",{get:function(){ep=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{ep=!1}function lx(t,e,n,r,i,s,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var ja=!1,yc=null,vc=!1,tp=null,ux={onError:function(t){ja=!0,yc=t}};function cx(t,e,n,r,i,s,o,l,u){ja=!1,yc=null,lx.apply(ux,arguments)}function dx(t,e,n,r,i,s,o,l,u){if(cx.apply(this,arguments),ja){if(ja){var d=yc;ja=!1,yc=null}else throw Error(B(198));vc||(vc=!0,tp=d)}}function Zi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ik(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function N1(t){if(Zi(t)!==t)throw Error(B(188))}function hx(t){var e=t.alternate;if(!e){if(e=Zi(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return N1(i),t;if(s===r)return N1(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function xk(t){return t=hx(t),t!==null?Sk(t):null}function Sk(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sk(t);if(e!==null)return e;t=t.sibling}return null}var Ak=qt.unstable_scheduleCallback,D1=qt.unstable_cancelCallback,fx=qt.unstable_shouldYield,px=qt.unstable_requestPaint,Ue=qt.unstable_now,mx=qt.unstable_getCurrentPriorityLevel,Am=qt.unstable_ImmediatePriority,Lk=qt.unstable_UserBlockingPriority,_c=qt.unstable_NormalPriority,gx=qt.unstable_LowPriority,Rk=qt.unstable_IdlePriority,yd=null,bn=null;function yx(t){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(yd,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:kx,vx=Math.log,_x=Math.LN2;function kx(t){return t>>>=0,t===0?32:31-(vx(t)/_x|0)|0}var pu=64,mu=4194304;function Ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ea(l):(s&=o,s!==0&&(r=Ea(s)))}else o=n&~i,o!==0?r=Ea(o):s!==0&&(r=Ea(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),i=1<<n,r|=t[n],e&=~i;return r}function Ex(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=Ex(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function np(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ck(){var t=pu;return pu<<=1,!(pu&4194240)&&(pu=64),t}function $h(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Cl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function Tx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Lm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ge=0;function Pk(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bk,Rm,jk,Nk,Dk,rp=!1,gu=[],Mr=null,Vr=null,Fr=null,Ja=new Map,el=new Map,Sr=[],Ix="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function O1(t,e){switch(t){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":Ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(e.pointerId)}}function ua(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=bl(e),e!==null&&Rm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function xx(t,e,n,r,i){switch(e){case"focusin":return Mr=ua(Mr,t,e,n,r,i),!0;case"dragenter":return Vr=ua(Vr,t,e,n,r,i),!0;case"mouseover":return Fr=ua(Fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ja.set(s,ua(Ja.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,el.set(s,ua(el.get(s)||null,t,e,n,r,i)),!0}return!1}function Ok(t){var e=xi(t.target);if(e!==null){var n=Zi(e);if(n!==null){if(e=n.tag,e===13){if(e=Ik(n),e!==null){t.blockedOn=e,Dk(t.priority,function(){jk(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ip(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xf=r,n.target.dispatchEvent(r),Xf=null}else return e=bl(n),e!==null&&Rm(e),t.blockedOn=n,!1;e.shift()}return!0}function M1(t,e,n){zu(t)&&n.delete(e)}function Sx(){rp=!1,Mr!==null&&zu(Mr)&&(Mr=null),Vr!==null&&zu(Vr)&&(Vr=null),Fr!==null&&zu(Fr)&&(Fr=null),Ja.forEach(M1),el.forEach(M1)}function ca(t,e){t.blockedOn===e&&(t.blockedOn=null,rp||(rp=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,Sx)))}function tl(t){function e(i){return ca(i,t)}if(0<gu.length){ca(gu[0],t);for(var n=1;n<gu.length;n++){var r=gu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Mr!==null&&ca(Mr,t),Vr!==null&&ca(Vr,t),Fr!==null&&ca(Fr,t),Ja.forEach(e),el.forEach(e),n=0;n<Sr.length;n++)r=Sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Sr.length&&(n=Sr[0],n.blockedOn===null);)Ok(n),n.blockedOn===null&&Sr.shift()}var ao=fr.ReactCurrentBatchConfig,Ec=!0;function Ax(t,e,n,r){var i=ge,s=ao.transition;ao.transition=null;try{ge=1,Cm(t,e,n,r)}finally{ge=i,ao.transition=s}}function Lx(t,e,n,r){var i=ge,s=ao.transition;ao.transition=null;try{ge=4,Cm(t,e,n,r)}finally{ge=i,ao.transition=s}}function Cm(t,e,n,r){if(Ec){var i=ip(t,e,n,r);if(i===null)Xh(t,e,r,wc,n),O1(t,r);else if(xx(i,t,e,n,r))r.stopPropagation();else if(O1(t,r),e&4&&-1<Ix.indexOf(t)){for(;i!==null;){var s=bl(i);if(s!==null&&bk(s),s=ip(t,e,n,r),s===null&&Xh(t,e,r,wc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Xh(t,e,r,null,n)}}var wc=null;function ip(t,e,n,r){if(wc=null,t=Sm(r),t=xi(t),t!==null)if(e=Zi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ik(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wc=t,null}function Mk(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mx()){case Am:return 1;case Lk:return 4;case _c:case gx:return 16;case Rk:return 536870912;default:return 16}default:return 16}}var Pr=null,Pm=null,Hu=null;function Vk(){if(Hu)return Hu;var t,e=Pm,n=e.length,r,i="value"in Pr?Pr.value:Pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Hu=i.slice(t,1<r?1-r:void 0)}function qu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yu(){return!0}function V1(){return!1}function Kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yu:V1,this.isPropagationStopped=V1,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yu)},persist:function(){},isPersistent:yu}),e}var Oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bm=Kt(Oo),Pl=Ne({},Oo,{view:0,detail:0}),Rx=Kt(Pl),Bh,zh,da,vd=Ne({},Pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==da&&(da&&t.type==="mousemove"?(Bh=t.screenX-da.screenX,zh=t.screenY-da.screenY):zh=Bh=0,da=t),Bh)},movementY:function(t){return"movementY"in t?t.movementY:zh}}),F1=Kt(vd),Cx=Ne({},vd,{dataTransfer:0}),Px=Kt(Cx),bx=Ne({},Pl,{relatedTarget:0}),Hh=Kt(bx),jx=Ne({},Oo,{animationName:0,elapsedTime:0,pseudoElement:0}),Nx=Kt(jx),Dx=Ne({},Oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ox=Kt(Dx),Mx=Ne({},Oo,{data:0}),U1=Kt(Mx),Vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ux[t])?!!e[t]:!1}function jm(){return Wx}var $x=Ne({},Pl,{key:function(t){if(t.key){var e=Vx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jm,charCode:function(t){return t.type==="keypress"?qu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bx=Kt($x),zx=Ne({},vd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),W1=Kt(zx),Hx=Ne({},Pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jm}),qx=Kt(Hx),Gx=Ne({},Oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kx=Kt(Gx),Qx=Ne({},vd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=Kt(Qx),Zx=[9,13,27,32],Nm=sr&&"CompositionEvent"in window,Na=null;sr&&"documentMode"in document&&(Na=document.documentMode);var Xx=sr&&"TextEvent"in window&&!Na,Fk=sr&&(!Nm||Na&&8<Na&&11>=Na),$1=" ",B1=!1;function Uk(t,e){switch(t){case"keyup":return Zx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wk(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qs=!1;function Jx(t,e){switch(t){case"compositionend":return Wk(e);case"keypress":return e.which!==32?null:(B1=!0,$1);case"textInput":return t=e.data,t===$1&&B1?null:t;default:return null}}function eS(t,e){if(qs)return t==="compositionend"||!Nm&&Uk(t,e)?(t=Vk(),Hu=Pm=Pr=null,qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fk&&e.locale!=="ko"?null:e.data;default:return null}}var tS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function z1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tS[t.type]:e==="textarea"}function $k(t,e,n,r){_k(r),e=Tc(e,"onChange"),0<e.length&&(n=new bm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Da=null,nl=null;function nS(t){Jk(t,0)}function _d(t){var e=Qs(t);if(hk(e))return t}function rS(t,e){if(t==="change")return e}var Bk=!1;if(sr){var qh;if(sr){var Gh="oninput"in document;if(!Gh){var H1=document.createElement("div");H1.setAttribute("oninput","return;"),Gh=typeof H1.oninput=="function"}qh=Gh}else qh=!1;Bk=qh&&(!document.documentMode||9<document.documentMode)}function q1(){Da&&(Da.detachEvent("onpropertychange",zk),nl=Da=null)}function zk(t){if(t.propertyName==="value"&&_d(nl)){var e=[];$k(e,nl,t,Sm(t)),Tk(nS,e)}}function iS(t,e,n){t==="focusin"?(q1(),Da=e,nl=n,Da.attachEvent("onpropertychange",zk)):t==="focusout"&&q1()}function sS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _d(nl)}function oS(t,e){if(t==="click")return _d(e)}function aS(t,e){if(t==="input"||t==="change")return _d(e)}function lS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:lS;function rl(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Uf.call(e,i)||!kn(t[i],e[i]))return!1}return!0}function G1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function K1(t,e){var n=G1(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=G1(n)}}function Hk(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hk(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function qk(){for(var t=window,e=gc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gc(t.document)}return e}function Dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uS(t){var e=qk(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hk(n.ownerDocument.documentElement,n)){if(r!==null&&Dm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=K1(n,s);var o=K1(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cS=sr&&"documentMode"in document&&11>=document.documentMode,Gs=null,sp=null,Oa=null,op=!1;function Q1(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;op||Gs==null||Gs!==gc(r)||(r=Gs,"selectionStart"in r&&Dm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oa&&rl(Oa,r)||(Oa=r,r=Tc(sp,"onSelect"),0<r.length&&(e=new bm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Gs)))}function vu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ks={animationend:vu("Animation","AnimationEnd"),animationiteration:vu("Animation","AnimationIteration"),animationstart:vu("Animation","AnimationStart"),transitionend:vu("Transition","TransitionEnd")},Kh={},Gk={};sr&&(Gk=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function kd(t){if(Kh[t])return Kh[t];if(!Ks[t])return t;var e=Ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gk)return Kh[t]=e[n];return t}var Kk=kd("animationend"),Qk=kd("animationiteration"),Yk=kd("animationstart"),Zk=kd("transitionend"),Xk=new Map,Y1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ri(t,e){Xk.set(t,e),Yi(e,[t])}for(var Qh=0;Qh<Y1.length;Qh++){var Yh=Y1[Qh],dS=Yh.toLowerCase(),hS=Yh[0].toUpperCase()+Yh.slice(1);ri(dS,"on"+hS)}ri(Kk,"onAnimationEnd");ri(Qk,"onAnimationIteration");ri(Yk,"onAnimationStart");ri("dblclick","onDoubleClick");ri("focusin","onFocus");ri("focusout","onBlur");ri(Zk,"onTransitionEnd");mo("onMouseEnter",["mouseout","mouseover"]);mo("onMouseLeave",["mouseout","mouseover"]);mo("onPointerEnter",["pointerout","pointerover"]);mo("onPointerLeave",["pointerout","pointerover"]);Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fS=new Set("cancel close invalid load scroll toggle".split(" ").concat(wa));function Z1(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dx(r,e,void 0,t),t.currentTarget=null}function Jk(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Z1(i,l,d),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Z1(i,l,d),s=u}}}if(vc)throw t=tp,vc=!1,tp=null,t}function Ie(t,e){var n=e[dp];n===void 0&&(n=e[dp]=new Set);var r=t+"__bubble";n.has(r)||(e2(e,t,2,!1),n.add(r))}function Zh(t,e,n){var r=0;e&&(r|=4),e2(n,t,r,e)}var _u="_reactListening"+Math.random().toString(36).slice(2);function il(t){if(!t[_u]){t[_u]=!0,ak.forEach(function(n){n!=="selectionchange"&&(fS.has(n)||Zh(n,!1,t),Zh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_u]||(e[_u]=!0,Zh("selectionchange",!1,e))}}function e2(t,e,n,r){switch(Mk(e)){case 1:var i=Ax;break;case 4:i=Lx;break;default:i=Cm}n=i.bind(null,e,n,t),i=void 0,!ep||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Xh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=xi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Tk(function(){var d=s,f=Sm(n),g=[];e:{var y=Xk.get(t);if(y!==void 0){var k=bm,x=t;switch(t){case"keypress":if(qu(n)===0)break e;case"keydown":case"keyup":k=Bx;break;case"focusin":x="focus",k=Hh;break;case"focusout":x="blur",k=Hh;break;case"beforeblur":case"afterblur":k=Hh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=F1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=qx;break;case Kk:case Qk:case Yk:k=Nx;break;case Zk:k=Kx;break;case"scroll":k=Rx;break;case"wheel":k=Yx;break;case"copy":case"cut":case"paste":k=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=W1}var R=(e&4)!==0,A=!R&&t==="scroll",_=R?y!==null?y+"Capture":null:y;R=[];for(var v=d,I;v!==null;){I=v;var P=I.stateNode;if(I.tag===5&&P!==null&&(I=P,_!==null&&(P=Xa(v,_),P!=null&&R.push(sl(v,P,I)))),A)break;v=v.return}0<R.length&&(y=new k(y,x,null,n,f),g.push({event:y,listeners:R}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",y&&n!==Xf&&(x=n.relatedTarget||n.fromElement)&&(xi(x)||x[or]))break e;if((k||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,k?(x=n.relatedTarget||n.toElement,k=d,x=x?xi(x):null,x!==null&&(A=Zi(x),x!==A||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=d),k!==x)){if(R=F1,P="onMouseLeave",_="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(R=W1,P="onPointerLeave",_="onPointerEnter",v="pointer"),A=k==null?y:Qs(k),I=x==null?y:Qs(x),y=new R(P,v+"leave",k,n,f),y.target=A,y.relatedTarget=I,P=null,xi(f)===d&&(R=new R(_,v+"enter",x,n,f),R.target=I,R.relatedTarget=A,P=R),A=P,k&&x)t:{for(R=k,_=x,v=0,I=R;I;I=js(I))v++;for(I=0,P=_;P;P=js(P))I++;for(;0<v-I;)R=js(R),v--;for(;0<I-v;)_=js(_),I--;for(;v--;){if(R===_||_!==null&&R===_.alternate)break t;R=js(R),_=js(_)}R=null}else R=null;k!==null&&X1(g,y,k,R,!1),x!==null&&A!==null&&X1(g,A,x,R,!0)}}e:{if(y=d?Qs(d):window,k=y.nodeName&&y.nodeName.toLowerCase(),k==="select"||k==="input"&&y.type==="file")var N=rS;else if(z1(y))if(Bk)N=aS;else{N=sS;var V=iS}else(k=y.nodeName)&&k.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(N=oS);if(N&&(N=N(t,d))){$k(g,N,n,f);break e}V&&V(t,y,d),t==="focusout"&&(V=y._wrapperState)&&V.controlled&&y.type==="number"&&Gf(y,"number",y.value)}switch(V=d?Qs(d):window,t){case"focusin":(z1(V)||V.contentEditable==="true")&&(Gs=V,sp=d,Oa=null);break;case"focusout":Oa=sp=Gs=null;break;case"mousedown":op=!0;break;case"contextmenu":case"mouseup":case"dragend":op=!1,Q1(g,n,f);break;case"selectionchange":if(cS)break;case"keydown":case"keyup":Q1(g,n,f)}var w;if(Nm)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else qs?Uk(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Fk&&n.locale!=="ko"&&(qs||E!=="onCompositionStart"?E==="onCompositionEnd"&&qs&&(w=Vk()):(Pr=f,Pm="value"in Pr?Pr.value:Pr.textContent,qs=!0)),V=Tc(d,E),0<V.length&&(E=new U1(E,t,null,n,f),g.push({event:E,listeners:V}),w?E.data=w:(w=Wk(n),w!==null&&(E.data=w)))),(w=Xx?Jx(t,n):eS(t,n))&&(d=Tc(d,"onBeforeInput"),0<d.length&&(f=new U1("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:d}),f.data=w))}Jk(g,e)})}function sl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xa(t,n),s!=null&&r.unshift(sl(t,s,i)),s=Xa(t,e),s!=null&&r.push(sl(t,s,i))),t=t.return}return r}function js(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function X1(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=Xa(n,s),u!=null&&o.unshift(sl(n,u,l))):i||(u=Xa(n,s),u!=null&&o.push(sl(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pS=/\r\n?/g,mS=/\u0000|\uFFFD/g;function J1(t){return(typeof t=="string"?t:""+t).replace(pS,`
`).replace(mS,"")}function ku(t,e,n){if(e=J1(e),J1(t)!==e&&n)throw Error(B(425))}function Ic(){}var ap=null,lp=null;function up(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cp=typeof setTimeout=="function"?setTimeout:void 0,gS=typeof clearTimeout=="function"?clearTimeout:void 0,ey=typeof Promise=="function"?Promise:void 0,yS=typeof queueMicrotask=="function"?queueMicrotask:typeof ey<"u"?function(t){return ey.resolve(null).then(t).catch(vS)}:cp;function vS(t){setTimeout(function(){throw t})}function Jh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),tl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);tl(e)}function Ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ty(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Mo=Math.random().toString(36).slice(2),Rn="__reactFiber$"+Mo,ol="__reactProps$"+Mo,or="__reactContainer$"+Mo,dp="__reactEvents$"+Mo,_S="__reactListeners$"+Mo,kS="__reactHandles$"+Mo;function xi(t){var e=t[Rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[or]||n[Rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ty(t);t!==null;){if(n=t[Rn])return n;t=ty(t)}return e}t=n,n=t.parentNode}return null}function bl(t){return t=t[Rn]||t[or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Ed(t){return t[ol]||null}var hp=[],Ys=-1;function ii(t){return{current:t}}function Ae(t){0>Ys||(t.current=hp[Ys],hp[Ys]=null,Ys--)}function ke(t,e){Ys++,hp[Ys]=t.current,t.current=e}var Jr={},vt=ii(Jr),jt=ii(!1),Mi=Jr;function go(t,e){var n=t.type.contextTypes;if(!n)return Jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Nt(t){return t=t.childContextTypes,t!=null}function xc(){Ae(jt),Ae(vt)}function ny(t,e,n){if(vt.current!==Jr)throw Error(B(168));ke(vt,e),ke(jt,n)}function t2(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,ix(t)||"Unknown",i));return Ne({},n,r)}function Sc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jr,Mi=vt.current,ke(vt,t),ke(jt,jt.current),!0}function ry(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=t2(t,e,Mi),r.__reactInternalMemoizedMergedChildContext=t,Ae(jt),Ae(vt),ke(vt,t)):Ae(jt),ke(jt,n)}var Kn=null,wd=!1,ef=!1;function n2(t){Kn===null?Kn=[t]:Kn.push(t)}function ES(t){wd=!0,n2(t)}function si(){if(!ef&&Kn!==null){ef=!0;var t=0,e=ge;try{var n=Kn;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Kn=null,wd=!1}catch(i){throw Kn!==null&&(Kn=Kn.slice(t+1)),Ak(Am,si),i}finally{ge=e,ef=!1}}return null}var Zs=[],Xs=0,Ac=null,Lc=0,Zt=[],Xt=0,Vi=null,Yn=1,Zn="";function ki(t,e){Zs[Xs++]=Lc,Zs[Xs++]=Ac,Ac=t,Lc=e}function r2(t,e,n){Zt[Xt++]=Yn,Zt[Xt++]=Zn,Zt[Xt++]=Vi,Vi=t;var r=Yn;t=Zn;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var s=32-yn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yn=1<<32-yn(e)+i|n<<i|r,Zn=s+t}else Yn=1<<s|n<<i|r,Zn=t}function Om(t){t.return!==null&&(ki(t,1),r2(t,1,0))}function Mm(t){for(;t===Ac;)Ac=Zs[--Xs],Zs[Xs]=null,Lc=Zs[--Xs],Zs[Xs]=null;for(;t===Vi;)Vi=Zt[--Xt],Zt[Xt]=null,Zn=Zt[--Xt],Zt[Xt]=null,Yn=Zt[--Xt],Zt[Xt]=null}var Bt=null,Wt=null,Le=!1,fn=null;function i2(t,e){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function iy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,Wt=Ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vi!==null?{id:Yn,overflow:Zn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,Wt=null,!0):!1;default:return!1}}function fp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pp(t){if(Le){var e=Wt;if(e){var n=e;if(!iy(t,e)){if(fp(t))throw Error(B(418));e=Ur(n.nextSibling);var r=Bt;e&&iy(t,e)?i2(r,n):(t.flags=t.flags&-4097|2,Le=!1,Bt=t)}}else{if(fp(t))throw Error(B(418));t.flags=t.flags&-4097|2,Le=!1,Bt=t}}}function sy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function Eu(t){if(t!==Bt)return!1;if(!Le)return sy(t),Le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!up(t.type,t.memoizedProps)),e&&(e=Wt)){if(fp(t))throw s2(),Error(B(418));for(;e;)i2(t,e),e=Ur(e.nextSibling)}if(sy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wt=Ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wt=null}}else Wt=Bt?Ur(t.stateNode.nextSibling):null;return!0}function s2(){for(var t=Wt;t;)t=Ur(t.nextSibling)}function yo(){Wt=Bt=null,Le=!1}function Vm(t){fn===null?fn=[t]:fn.push(t)}var wS=fr.ReactCurrentBatchConfig;function ha(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function wu(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function oy(t){var e=t._init;return e(t._payload)}function o2(t){function e(_,v){if(t){var I=_.deletions;I===null?(_.deletions=[v],_.flags|=16):I.push(v)}}function n(_,v){if(!t)return null;for(;v!==null;)e(_,v),v=v.sibling;return null}function r(_,v){for(_=new Map;v!==null;)v.key!==null?_.set(v.key,v):_.set(v.index,v),v=v.sibling;return _}function i(_,v){return _=zr(_,v),_.index=0,_.sibling=null,_}function s(_,v,I){return _.index=I,t?(I=_.alternate,I!==null?(I=I.index,I<v?(_.flags|=2,v):I):(_.flags|=2,v)):(_.flags|=1048576,v)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,v,I,P){return v===null||v.tag!==6?(v=lf(I,_.mode,P),v.return=_,v):(v=i(v,I),v.return=_,v)}function u(_,v,I,P){var N=I.type;return N===Hs?f(_,v,I.props.children,P,I.key):v!==null&&(v.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ir&&oy(N)===v.type)?(P=i(v,I.props),P.ref=ha(_,v,I),P.return=_,P):(P=Ju(I.type,I.key,I.props,null,_.mode,P),P.ref=ha(_,v,I),P.return=_,P)}function d(_,v,I,P){return v===null||v.tag!==4||v.stateNode.containerInfo!==I.containerInfo||v.stateNode.implementation!==I.implementation?(v=uf(I,_.mode,P),v.return=_,v):(v=i(v,I.children||[]),v.return=_,v)}function f(_,v,I,P,N){return v===null||v.tag!==7?(v=bi(I,_.mode,P,N),v.return=_,v):(v=i(v,I),v.return=_,v)}function g(_,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return v=lf(""+v,_.mode,I),v.return=_,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case du:return I=Ju(v.type,v.key,v.props,null,_.mode,I),I.ref=ha(_,null,v),I.return=_,I;case zs:return v=uf(v,_.mode,I),v.return=_,v;case Ir:var P=v._init;return g(_,P(v._payload),I)}if(ka(v)||aa(v))return v=bi(v,_.mode,I,null),v.return=_,v;wu(_,v)}return null}function y(_,v,I,P){var N=v!==null?v.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return N!==null?null:l(_,v,""+I,P);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case du:return I.key===N?u(_,v,I,P):null;case zs:return I.key===N?d(_,v,I,P):null;case Ir:return N=I._init,y(_,v,N(I._payload),P)}if(ka(I)||aa(I))return N!==null?null:f(_,v,I,P,null);wu(_,I)}return null}function k(_,v,I,P,N){if(typeof P=="string"&&P!==""||typeof P=="number")return _=_.get(I)||null,l(v,_,""+P,N);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case du:return _=_.get(P.key===null?I:P.key)||null,u(v,_,P,N);case zs:return _=_.get(P.key===null?I:P.key)||null,d(v,_,P,N);case Ir:var V=P._init;return k(_,v,I,V(P._payload),N)}if(ka(P)||aa(P))return _=_.get(I)||null,f(v,_,P,N,null);wu(v,P)}return null}function x(_,v,I,P){for(var N=null,V=null,w=v,E=v=0,S=null;w!==null&&E<I.length;E++){w.index>E?(S=w,w=null):S=w.sibling;var L=y(_,w,I[E],P);if(L===null){w===null&&(w=S);break}t&&w&&L.alternate===null&&e(_,w),v=s(L,v,E),V===null?N=L:V.sibling=L,V=L,w=S}if(E===I.length)return n(_,w),Le&&ki(_,E),N;if(w===null){for(;E<I.length;E++)w=g(_,I[E],P),w!==null&&(v=s(w,v,E),V===null?N=w:V.sibling=w,V=w);return Le&&ki(_,E),N}for(w=r(_,w);E<I.length;E++)S=k(w,_,E,I[E],P),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?E:S.key),v=s(S,v,E),V===null?N=S:V.sibling=S,V=S);return t&&w.forEach(function(b){return e(_,b)}),Le&&ki(_,E),N}function R(_,v,I,P){var N=aa(I);if(typeof N!="function")throw Error(B(150));if(I=N.call(I),I==null)throw Error(B(151));for(var V=N=null,w=v,E=v=0,S=null,L=I.next();w!==null&&!L.done;E++,L=I.next()){w.index>E?(S=w,w=null):S=w.sibling;var b=y(_,w,L.value,P);if(b===null){w===null&&(w=S);break}t&&w&&b.alternate===null&&e(_,w),v=s(b,v,E),V===null?N=b:V.sibling=b,V=b,w=S}if(L.done)return n(_,w),Le&&ki(_,E),N;if(w===null){for(;!L.done;E++,L=I.next())L=g(_,L.value,P),L!==null&&(v=s(L,v,E),V===null?N=L:V.sibling=L,V=L);return Le&&ki(_,E),N}for(w=r(_,w);!L.done;E++,L=I.next())L=k(w,_,E,L.value,P),L!==null&&(t&&L.alternate!==null&&w.delete(L.key===null?E:L.key),v=s(L,v,E),V===null?N=L:V.sibling=L,V=L);return t&&w.forEach(function(j){return e(_,j)}),Le&&ki(_,E),N}function A(_,v,I,P){if(typeof I=="object"&&I!==null&&I.type===Hs&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case du:e:{for(var N=I.key,V=v;V!==null;){if(V.key===N){if(N=I.type,N===Hs){if(V.tag===7){n(_,V.sibling),v=i(V,I.props.children),v.return=_,_=v;break e}}else if(V.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ir&&oy(N)===V.type){n(_,V.sibling),v=i(V,I.props),v.ref=ha(_,V,I),v.return=_,_=v;break e}n(_,V);break}else e(_,V);V=V.sibling}I.type===Hs?(v=bi(I.props.children,_.mode,P,I.key),v.return=_,_=v):(P=Ju(I.type,I.key,I.props,null,_.mode,P),P.ref=ha(_,v,I),P.return=_,_=P)}return o(_);case zs:e:{for(V=I.key;v!==null;){if(v.key===V)if(v.tag===4&&v.stateNode.containerInfo===I.containerInfo&&v.stateNode.implementation===I.implementation){n(_,v.sibling),v=i(v,I.children||[]),v.return=_,_=v;break e}else{n(_,v);break}else e(_,v);v=v.sibling}v=uf(I,_.mode,P),v.return=_,_=v}return o(_);case Ir:return V=I._init,A(_,v,V(I._payload),P)}if(ka(I))return x(_,v,I,P);if(aa(I))return R(_,v,I,P);wu(_,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,v!==null&&v.tag===6?(n(_,v.sibling),v=i(v,I),v.return=_,_=v):(n(_,v),v=lf(I,_.mode,P),v.return=_,_=v),o(_)):n(_,v)}return A}var vo=o2(!0),a2=o2(!1),Rc=ii(null),Cc=null,Js=null,Fm=null;function Um(){Fm=Js=Cc=null}function Wm(t){var e=Rc.current;Ae(Rc),t._currentValue=e}function mp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function lo(t,e){Cc=t,Fm=Js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ct=!0),t.firstContext=null)}function nn(t){var e=t._currentValue;if(Fm!==t)if(t={context:t,memoizedValue:e,next:null},Js===null){if(Cc===null)throw Error(B(308));Js=t,Cc.dependencies={lanes:0,firstContext:t}}else Js=Js.next=t;return e}var Si=null;function $m(t){Si===null?Si=[t]:Si.push(t)}function l2(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$m(e)):(n.next=i.next,i.next=n),e.interleaved=n,ar(t,r)}function ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xr=!1;function Bm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u2(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ar(t,n)}return i=r.interleaved,i===null?(e.next=e,$m(r)):(e.next=i.next,i.next=e),r.interleaved=e,ar(t,n)}function Gu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lm(t,n)}}function ay(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pc(t,e,n,r){var i=t.updateQueue;xr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,f=d=u=null,l=s;do{var y=l.lane,k=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,R=l;switch(y=e,k=n,R.tag){case 1:if(x=R.payload,typeof x=="function"){g=x.call(k,g,y);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=R.payload,y=typeof x=="function"?x.call(k,g,y):x,y==null)break e;g=Ne({},g,y);break e;case 2:xr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else k={eventTime:k,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=k,u=g):f=f.next=k,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=g),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ui|=o,t.lanes=o,t.memoizedState=g}}function ly(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var jl={},jn=ii(jl),al=ii(jl),ll=ii(jl);function Ai(t){if(t===jl)throw Error(B(174));return t}function zm(t,e){switch(ke(ll,e),ke(al,t),ke(jn,jl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qf(e,t)}Ae(jn),ke(jn,e)}function _o(){Ae(jn),Ae(al),Ae(ll)}function c2(t){Ai(ll.current);var e=Ai(jn.current),n=Qf(e,t.type);e!==n&&(ke(al,t),ke(jn,n))}function Hm(t){al.current===t&&(Ae(jn),Ae(al))}var Pe=ii(0);function bc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tf=[];function qm(){for(var t=0;t<tf.length;t++)tf[t]._workInProgressVersionPrimary=null;tf.length=0}var Ku=fr.ReactCurrentDispatcher,nf=fr.ReactCurrentBatchConfig,Fi=0,je=null,Ke=null,Ze=null,jc=!1,Ma=!1,ul=0,TS=0;function ht(){throw Error(B(321))}function Gm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function Km(t,e,n,r,i,s){if(Fi=s,je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ku.current=t===null||t.memoizedState===null?AS:LS,t=n(r,i),Ma){s=0;do{if(Ma=!1,ul=0,25<=s)throw Error(B(301));s+=1,Ze=Ke=null,e.updateQueue=null,Ku.current=RS,t=n(r,i)}while(Ma)}if(Ku.current=Nc,e=Ke!==null&&Ke.next!==null,Fi=0,Ze=Ke=je=null,jc=!1,e)throw Error(B(300));return t}function Qm(){var t=ul!==0;return ul=0,t}function An(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?je.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function rn(){if(Ke===null){var t=je.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var e=Ze===null?je.memoizedState:Ze.next;if(e!==null)Ze=e,Ke=t;else{if(t===null)throw Error(B(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Ze===null?je.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function cl(t,e){return typeof e=="function"?e(t):e}function rf(t){var e=rn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,d=s;do{var f=d.lane;if((Fi&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var g={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,je.lanes|=f,Ui|=f}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=l,kn(r,e.memoizedState)||(Ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,je.lanes|=s,Ui|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sf(t){var e=rn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kn(s,e.memoizedState)||(Ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function d2(){}function h2(t,e){var n=je,r=rn(),i=e(),s=!kn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ct=!0),r=r.queue,Ym(m2.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,dl(9,p2.bind(null,n,r,i,e),void 0,null),Je===null)throw Error(B(349));Fi&30||f2(n,e,i)}return i}function f2(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function p2(t,e,n,r){e.value=n,e.getSnapshot=r,g2(e)&&y2(t)}function m2(t,e,n){return n(function(){g2(e)&&y2(t)})}function g2(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function y2(t){var e=ar(t,1);e!==null&&vn(e,t,1,-1)}function uy(t){var e=An();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cl,lastRenderedState:t},e.queue=t,t=t.dispatch=SS.bind(null,je,t),[e.memoizedState,t]}function dl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function v2(){return rn().memoizedState}function Qu(t,e,n,r){var i=An();je.flags|=t,i.memoizedState=dl(1|e,n,void 0,r===void 0?null:r)}function Td(t,e,n,r){var i=rn();r=r===void 0?null:r;var s=void 0;if(Ke!==null){var o=Ke.memoizedState;if(s=o.destroy,r!==null&&Gm(r,o.deps)){i.memoizedState=dl(e,n,s,r);return}}je.flags|=t,i.memoizedState=dl(1|e,n,s,r)}function cy(t,e){return Qu(8390656,8,t,e)}function Ym(t,e){return Td(2048,8,t,e)}function _2(t,e){return Td(4,2,t,e)}function k2(t,e){return Td(4,4,t,e)}function E2(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function w2(t,e,n){return n=n!=null?n.concat([t]):null,Td(4,4,E2.bind(null,e,t),n)}function Zm(){}function T2(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function I2(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function x2(t,e,n){return Fi&21?(kn(n,e)||(n=Ck(),je.lanes|=n,Ui|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=n)}function IS(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=nf.transition;nf.transition={};try{t(!1),e()}finally{ge=n,nf.transition=r}}function S2(){return rn().memoizedState}function xS(t,e,n){var r=Br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},A2(t))L2(e,n);else if(n=l2(t,e,n,r),n!==null){var i=Tt();vn(n,t,r,i),R2(n,e,r)}}function SS(t,e,n){var r=Br(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(A2(t))L2(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,kn(l,o)){var u=e.interleaved;u===null?(i.next=i,$m(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=l2(t,e,i,r),n!==null&&(i=Tt(),vn(n,t,r,i),R2(n,e,r))}}function A2(t){var e=t.alternate;return t===je||e!==null&&e===je}function L2(t,e){Ma=jc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function R2(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lm(t,n)}}var Nc={readContext:nn,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},AS={readContext:nn,useCallback:function(t,e){return An().memoizedState=[t,e===void 0?null:e],t},useContext:nn,useEffect:cy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qu(4194308,4,E2.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qu(4,2,t,e)},useMemo:function(t,e){var n=An();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=An();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xS.bind(null,je,t),[r.memoizedState,t]},useRef:function(t){var e=An();return t={current:t},e.memoizedState=t},useState:uy,useDebugValue:Zm,useDeferredValue:function(t){return An().memoizedState=t},useTransition:function(){var t=uy(!1),e=t[0];return t=IS.bind(null,t[1]),An().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=je,i=An();if(Le){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),Je===null)throw Error(B(349));Fi&30||f2(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,cy(m2.bind(null,r,s,t),[t]),r.flags|=2048,dl(9,p2.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=An(),e=Je.identifierPrefix;if(Le){var n=Zn,r=Yn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ul++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},LS={readContext:nn,useCallback:T2,useContext:nn,useEffect:Ym,useImperativeHandle:w2,useInsertionEffect:_2,useLayoutEffect:k2,useMemo:I2,useReducer:rf,useRef:v2,useState:function(){return rf(cl)},useDebugValue:Zm,useDeferredValue:function(t){var e=rn();return x2(e,Ke.memoizedState,t)},useTransition:function(){var t=rf(cl)[0],e=rn().memoizedState;return[t,e]},useMutableSource:d2,useSyncExternalStore:h2,useId:S2,unstable_isNewReconciler:!1},RS={readContext:nn,useCallback:T2,useContext:nn,useEffect:Ym,useImperativeHandle:w2,useInsertionEffect:_2,useLayoutEffect:k2,useMemo:I2,useReducer:sf,useRef:v2,useState:function(){return sf(cl)},useDebugValue:Zm,useDeferredValue:function(t){var e=rn();return Ke===null?e.memoizedState=t:x2(e,Ke.memoizedState,t)},useTransition:function(){var t=sf(cl)[0],e=rn().memoizedState;return[t,e]},useMutableSource:d2,useSyncExternalStore:h2,useId:S2,unstable_isNewReconciler:!1};function dn(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Id={isMounted:function(t){return(t=t._reactInternals)?Zi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=Br(t),s=nr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Wr(t,s,i),e!==null&&(vn(e,t,i,r),Gu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=Br(t),s=nr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wr(t,s,i),e!==null&&(vn(e,t,i,r),Gu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Tt(),r=Br(t),i=nr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Wr(t,i,r),e!==null&&(vn(e,t,r,n),Gu(e,t,r))}};function dy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!rl(n,r)||!rl(i,s):!0}function C2(t,e,n){var r=!1,i=Jr,s=e.contextType;return typeof s=="object"&&s!==null?s=nn(s):(i=Nt(e)?Mi:vt.current,r=e.contextTypes,s=(r=r!=null)?go(t,i):Jr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Id,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Id.enqueueReplaceState(e,e.state,null)}function yp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Bm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=nn(s):(s=Nt(e)?Mi:vt.current,i.context=go(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Id.enqueueReplaceState(i,i.state,null),Pc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ko(t,e){try{var n="",r=e;do n+=rx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function of(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var CS=typeof WeakMap=="function"?WeakMap:Map;function P2(t,e,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Oc||(Oc=!0,Lp=r),vp(t,e)},n}function b2(t,e,n){n=nr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){vp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vp(t,e),typeof r!="function"&&($r===null?$r=new Set([this]):$r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new CS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=zS.bind(null,t,e,n),e.then(t,t))}function py(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function my(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nr(-1,1),e.tag=2,Wr(n,e,1))),n.lanes|=1),t)}var PS=fr.ReactCurrentOwner,Ct=!1;function wt(t,e,n,r){e.child=t===null?a2(e,null,n,r):vo(e,t.child,n,r)}function gy(t,e,n,r,i){n=n.render;var s=e.ref;return lo(e,i),r=Km(t,e,n,r,s,i),n=Qm(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,lr(t,e,i)):(Le&&n&&Om(e),e.flags|=1,wt(t,e,r,i),e.child)}function yy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,j2(t,e,s,r,i)):(t=Ju(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:rl,n(o,r)&&t.ref===e.ref)return lr(t,e,i)}return e.flags|=1,t=zr(s,r),t.ref=e.ref,t.return=e,e.child=t}function j2(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(rl(s,r)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ct=!0);else return e.lanes=t.lanes,lr(t,e,i)}return _p(t,e,n,r,i)}function N2(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(to,Ut),Ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ke(to,Ut),Ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ke(to,Ut),Ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ke(to,Ut),Ut|=r;return wt(t,e,i,n),e.child}function D2(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _p(t,e,n,r,i){var s=Nt(n)?Mi:vt.current;return s=go(e,s),lo(e,i),n=Km(t,e,n,r,s,i),r=Qm(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,lr(t,e,i)):(Le&&r&&Om(e),e.flags|=1,wt(t,e,n,i),e.child)}function vy(t,e,n,r,i){if(Nt(n)){var s=!0;Sc(e)}else s=!1;if(lo(e,i),e.stateNode===null)Yu(t,e),C2(e,n,r),yp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=nn(d):(d=Nt(n)?Mi:vt.current,d=go(e,d));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&hy(e,o,r,d),xr=!1;var y=e.memoizedState;o.state=y,Pc(e,r,o,i),u=e.memoizedState,l!==r||y!==u||jt.current||xr?(typeof f=="function"&&(gp(e,n,f,r),u=e.memoizedState),(l=xr||dy(e,n,l,r,y,u,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,u2(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:dn(e.type,l),o.props=d,g=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=nn(u):(u=Nt(n)?Mi:vt.current,u=go(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||y!==u)&&hy(e,o,r,u),xr=!1,y=e.memoizedState,o.state=y,Pc(e,r,o,i);var x=e.memoizedState;l!==g||y!==x||jt.current||xr?(typeof k=="function"&&(gp(e,n,k,r),x=e.memoizedState),(d=xr||dy(e,n,d,r,y,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return kp(t,e,n,r,s,i)}function kp(t,e,n,r,i,s){D2(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ry(e,n,!1),lr(t,e,s);r=e.stateNode,PS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=vo(e,t.child,null,s),e.child=vo(e,null,l,s)):wt(t,e,l,s),e.memoizedState=r.state,i&&ry(e,n,!0),e.child}function O2(t){var e=t.stateNode;e.pendingContext?ny(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ny(t,e.context,!1),zm(t,e.containerInfo)}function _y(t,e,n,r,i){return yo(),Vm(i),e.flags|=256,wt(t,e,n,r),e.child}var Ep={dehydrated:null,treeContext:null,retryLane:0};function wp(t){return{baseLanes:t,cachePool:null,transitions:null}}function M2(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ke(Pe,i&1),t===null)return pp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ad(o,r,0,null),t=bi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wp(n),e.memoizedState=Ep,t):Xm(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return bS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=zr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=zr(l,s):(s=bi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?wp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ep,r}return s=t.child,t=s.sibling,r=zr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xm(t,e){return e=Ad({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tu(t,e,n,r){return r!==null&&Vm(r),vo(e,t.child,null,n),t=Xm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=of(Error(B(422))),Tu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ad({mode:"visible",children:r.children},i,0,null),s=bi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&vo(e,t.child,null,o),e.child.memoizedState=wp(o),e.memoizedState=Ep,s);if(!(e.mode&1))return Tu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(B(419)),r=of(s,r,void 0),Tu(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ct||l){if(r=Je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ar(t,i),vn(r,t,i,-1))}return ig(),r=of(Error(B(421))),Tu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=HS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Wt=Ur(i.nextSibling),Bt=e,Le=!0,fn=null,t!==null&&(Zt[Xt++]=Yn,Zt[Xt++]=Zn,Zt[Xt++]=Vi,Yn=t.id,Zn=t.overflow,Vi=e),e=Xm(e,r.children),e.flags|=4096,e)}function ky(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mp(t.return,e,n)}function af(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function V2(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(wt(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ky(t,n,e);else if(t.tag===19)ky(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ke(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&bc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),af(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}af(e,!0,n,null,s);break;case"together":af(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ui|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jS(t,e,n){switch(e.tag){case 3:O2(e),yo();break;case 5:c2(e);break;case 1:Nt(e.type)&&Sc(e);break;case 4:zm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ke(Rc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ke(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?M2(t,e,n):(ke(Pe,Pe.current&1),t=lr(t,e,n),t!==null?t.sibling:null);ke(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return V2(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,N2(t,e,n)}return lr(t,e,n)}var F2,Tp,U2,W2;F2=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tp=function(){};U2=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ai(jn.current);var s=null;switch(n){case"input":i=Hf(t,i),r=Hf(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=Kf(t,i),r=Kf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ic)}Yf(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ya.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ya.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Ie("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};W2=function(t,e,n,r){n!==r&&(e.flags|=4)};function fa(t,e){if(!Le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function NS(t,e,n){var r=e.pendingProps;switch(Mm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return Nt(e.type)&&xc(),ft(e),null;case 3:return r=e.stateNode,_o(),Ae(jt),Ae(vt),qm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Eu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(Pp(fn),fn=null))),Tp(t,e),ft(e),null;case 5:Hm(e);var i=Ai(ll.current);if(n=e.type,t!==null&&e.stateNode!=null)U2(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return ft(e),null}if(t=Ai(jn.current),Eu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Rn]=e,r[ol]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<wa.length;i++)Ie(wa[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":R1(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":P1(r,s),Ie("invalid",r)}Yf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ku(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ku(r.textContent,l,t),i=["children",""+l]):Ya.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":hu(r),C1(r,s,!0);break;case"textarea":hu(r),b1(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ic)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mk(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rn]=e,t[ol]=r,F2(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zf(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<wa.length;i++)Ie(wa[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":R1(t,r),i=Hf(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":P1(t,r),i=Kf(t,r),Ie("invalid",t);break;default:i=r}Yf(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?vk(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&gk(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Za(t,u):typeof u=="number"&&Za(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ya.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ie("scroll",t):u!=null&&wm(t,s,u,o))}switch(n){case"input":hu(t),C1(t,r,!1);break;case"textarea":hu(t),b1(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?io(t,!!r.multiple,s,!1):r.defaultValue!=null&&io(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ic)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)W2(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Ai(ll.current),Ai(jn.current),Eu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rn]=e,(s=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:ku(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ku(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rn]=e,e.stateNode=r}return ft(e),null;case 13:if(Ae(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Le&&Wt!==null&&e.mode&1&&!(e.flags&128))s2(),yo(),e.flags|=98560,s=!1;else if(s=Eu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[Rn]=e}else yo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),s=!1}else fn!==null&&(Pp(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Qe===0&&(Qe=3):ig())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return _o(),Tp(t,e),t===null&&il(e.stateNode.containerInfo),ft(e),null;case 10:return Wm(e.type._context),ft(e),null;case 17:return Nt(e.type)&&xc(),ft(e),null;case 19:if(Ae(Pe),s=e.memoizedState,s===null)return ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)fa(s,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bc(t),o!==null){for(e.flags|=128,fa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ke(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>Eo&&(e.flags|=128,r=!0,fa(s,!1),e.lanes=4194304)}else{if(!r)if(t=bc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Le)return ft(e),null}else 2*Ue()-s.renderingStartTime>Eo&&n!==1073741824&&(e.flags|=128,r=!0,fa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=Pe.current,ke(Pe,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return rg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ut&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function DS(t,e){switch(Mm(e),e.tag){case 1:return Nt(e.type)&&xc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _o(),Ae(jt),Ae(vt),qm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hm(e),null;case 13:if(Ae(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));yo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(Pe),null;case 4:return _o(),null;case 10:return Wm(e.type._context),null;case 22:case 23:return rg(),null;case 24:return null;default:return null}}var Iu=!1,gt=!1,OS=typeof WeakSet=="function"?WeakSet:Set,G=null;function eo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function Ip(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var Ey=!1;function MS(t,e){if(ap=Ec,t=qk(),Dm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,f=0,g=t,y=null;t:for(;;){for(var k;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(k=g.firstChild)!==null;)y=g,g=k;for(;;){if(g===t)break t;if(y===n&&++d===i&&(l=o),y===s&&++f===r&&(u=o),(k=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(lp={focusedElem:t,selectionRange:n},Ec=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var R=x.memoizedProps,A=x.memoizedState,_=e.stateNode,v=_.getSnapshotBeforeUpdate(e.elementType===e.type?R:dn(e.type,R),A);_.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(P){Ve(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return x=Ey,Ey=!1,x}function Va(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ip(e,n,s)}i=i.next}while(i!==r)}}function xd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function xp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $2(t){var e=t.alternate;e!==null&&(t.alternate=null,$2(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rn],delete e[ol],delete e[dp],delete e[_S],delete e[kS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function B2(t){return t.tag===5||t.tag===3||t.tag===4}function wy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||B2(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ic));else if(r!==4&&(t=t.child,t!==null))for(Sp(t,e,n),t=t.sibling;t!==null;)Sp(t,e,n),t=t.sibling}function Ap(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ap(t,e,n),t=t.sibling;t!==null;)Ap(t,e,n),t=t.sibling}var tt=null,hn=!1;function _r(t,e,n){for(n=n.child;n!==null;)z2(t,e,n),n=n.sibling}function z2(t,e,n){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(yd,n)}catch{}switch(n.tag){case 5:gt||eo(n,e);case 6:var r=tt,i=hn;tt=null,_r(t,e,n),tt=r,hn=i,tt!==null&&(hn?(t=tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(hn?(t=tt,n=n.stateNode,t.nodeType===8?Jh(t.parentNode,n):t.nodeType===1&&Jh(t,n),tl(t)):Jh(tt,n.stateNode));break;case 4:r=tt,i=hn,tt=n.stateNode.containerInfo,hn=!0,_r(t,e,n),tt=r,hn=i;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ip(n,e,o),i=i.next}while(i!==r)}_r(t,e,n);break;case 1:if(!gt&&(eo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ve(n,e,l)}_r(t,e,n);break;case 21:_r(t,e,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,_r(t,e,n),gt=r):_r(t,e,n);break;default:_r(t,e,n)}}function Ty(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new OS),e.forEach(function(r){var i=qS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:tt=l.stateNode,hn=!1;break e;case 3:tt=l.stateNode.containerInfo,hn=!0;break e;case 4:tt=l.stateNode.containerInfo,hn=!0;break e}l=l.return}if(tt===null)throw Error(B(160));z2(s,o,i),tt=null,hn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){Ve(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)H2(e,t),e=e.sibling}function H2(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(un(e,t),xn(t),r&4){try{Va(3,t,t.return),xd(3,t)}catch(R){Ve(t,t.return,R)}try{Va(5,t,t.return)}catch(R){Ve(t,t.return,R)}}break;case 1:un(e,t),xn(t),r&512&&n!==null&&eo(n,n.return);break;case 5:if(un(e,t),xn(t),r&512&&n!==null&&eo(n,n.return),t.flags&32){var i=t.stateNode;try{Za(i,"")}catch(R){Ve(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&fk(i,s),Zf(l,o);var d=Zf(l,s);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?vk(i,g):f==="dangerouslySetInnerHTML"?gk(i,g):f==="children"?Za(i,g):wm(i,f,g,d)}switch(l){case"input":qf(i,s);break;case"textarea":pk(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?io(i,!!s.multiple,k,!1):y!==!!s.multiple&&(s.defaultValue!=null?io(i,!!s.multiple,s.defaultValue,!0):io(i,!!s.multiple,s.multiple?[]:"",!1))}i[ol]=s}catch(R){Ve(t,t.return,R)}}break;case 6:if(un(e,t),xn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){Ve(t,t.return,R)}}break;case 3:if(un(e,t),xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tl(e.containerInfo)}catch(R){Ve(t,t.return,R)}break;case 4:un(e,t),xn(t);break;case 13:un(e,t),xn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tg=Ue())),r&4&&Ty(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(gt=(d=gt)||f,un(e,t),gt=d):un(e,t),xn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(G=t,f=t.child;f!==null;){for(g=G=f;G!==null;){switch(y=G,k=y.child,y.tag){case 0:case 11:case 14:case 15:Va(4,y,y.return);break;case 1:eo(y,y.return);var x=y.stateNode;if(typeof x.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(R){Ve(r,n,R)}}break;case 5:eo(y,y.return);break;case 22:if(y.memoizedState!==null){xy(g);continue}}k!==null?(k.return=y,G=k):xy(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=yk("display",o))}catch(R){Ve(t,t.return,R)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(R){Ve(t,t.return,R)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:un(e,t),xn(t),r&4&&Ty(t);break;case 21:break;default:un(e,t),xn(t)}}function xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(B2(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Za(i,""),r.flags&=-33);var s=wy(t);Ap(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=wy(t);Sp(t,l,o);break;default:throw Error(B(161))}}catch(u){Ve(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function VS(t,e,n){G=t,q2(t)}function q2(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Iu;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||gt;l=Iu;var d=gt;if(Iu=o,(gt=u)&&!d)for(G=i;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?Sy(i):u!==null?(u.return=o,G=u):Sy(i);for(;s!==null;)G=s,q2(s),s=s.sibling;G=i,Iu=l,gt=d}Iy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,G=s):Iy(t)}}function Iy(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gt||xd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!gt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:dn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ly(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ly(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&tl(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}gt||e.flags&512&&xp(e)}catch(y){Ve(e,e.return,y)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function xy(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function Sy(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xd(4,e)}catch(u){Ve(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ve(e,i,u)}}var s=e.return;try{xp(e)}catch(u){Ve(e,s,u)}break;case 5:var o=e.return;try{xp(e)}catch(u){Ve(e,o,u)}}}catch(u){Ve(e,e.return,u)}if(e===t){G=null;break}var l=e.sibling;if(l!==null){l.return=e.return,G=l;break}G=e.return}}var FS=Math.ceil,Dc=fr.ReactCurrentDispatcher,Jm=fr.ReactCurrentOwner,en=fr.ReactCurrentBatchConfig,ce=0,Je=null,ze=null,it=0,Ut=0,to=ii(0),Qe=0,hl=null,Ui=0,Sd=0,eg=0,Fa=null,Lt=null,tg=0,Eo=1/0,qn=null,Oc=!1,Lp=null,$r=null,xu=!1,br=null,Mc=0,Ua=0,Rp=null,Zu=-1,Xu=0;function Tt(){return ce&6?Ue():Zu!==-1?Zu:Zu=Ue()}function Br(t){return t.mode&1?ce&2&&it!==0?it&-it:wS.transition!==null?(Xu===0&&(Xu=Ck()),Xu):(t=ge,t!==0||(t=window.event,t=t===void 0?16:Mk(t.type)),t):1}function vn(t,e,n,r){if(50<Ua)throw Ua=0,Rp=null,Error(B(185));Cl(t,n,r),(!(ce&2)||t!==Je)&&(t===Je&&(!(ce&2)&&(Sd|=n),Qe===4&&Ar(t,it)),Dt(t,r),n===1&&ce===0&&!(e.mode&1)&&(Eo=Ue()+500,wd&&si()))}function Dt(t,e){var n=t.callbackNode;wx(t,e);var r=kc(t,t===Je?it:0);if(r===0)n!==null&&D1(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&D1(n),e===1)t.tag===0?ES(Ay.bind(null,t)):n2(Ay.bind(null,t)),yS(function(){!(ce&6)&&si()}),n=null;else{switch(Pk(r)){case 1:n=Am;break;case 4:n=Lk;break;case 16:n=_c;break;case 536870912:n=Rk;break;default:n=_c}n=eE(n,G2.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function G2(t,e){if(Zu=-1,Xu=0,ce&6)throw Error(B(327));var n=t.callbackNode;if(uo()&&t.callbackNode!==n)return null;var r=kc(t,t===Je?it:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Vc(t,r);else{e=r;var i=ce;ce|=2;var s=Q2();(Je!==t||it!==e)&&(qn=null,Eo=Ue()+500,Pi(t,e));do try{$S();break}catch(l){K2(t,l)}while(!0);Um(),Dc.current=s,ce=i,ze!==null?e=0:(Je=null,it=0,e=Qe)}if(e!==0){if(e===2&&(i=np(t),i!==0&&(r=i,e=Cp(t,i))),e===1)throw n=hl,Pi(t,0),Ar(t,r),Dt(t,Ue()),n;if(e===6)Ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!US(i)&&(e=Vc(t,r),e===2&&(s=np(t),s!==0&&(r=s,e=Cp(t,s))),e===1))throw n=hl,Pi(t,0),Ar(t,r),Dt(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Ei(t,Lt,qn);break;case 3:if(Ar(t,r),(r&130023424)===r&&(e=tg+500-Ue(),10<e)){if(kc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=cp(Ei.bind(null,t,Lt,qn),e);break}Ei(t,Lt,qn);break;case 4:if(Ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*FS(r/1960))-r,10<r){t.timeoutHandle=cp(Ei.bind(null,t,Lt,qn),r);break}Ei(t,Lt,qn);break;case 5:Ei(t,Lt,qn);break;default:throw Error(B(329))}}}return Dt(t,Ue()),t.callbackNode===n?G2.bind(null,t):null}function Cp(t,e){var n=Fa;return t.current.memoizedState.isDehydrated&&(Pi(t,e).flags|=256),t=Vc(t,e),t!==2&&(e=Lt,Lt=n,e!==null&&Pp(e)),t}function Pp(t){Lt===null?Lt=t:Lt.push.apply(Lt,t)}function US(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ar(t,e){for(e&=~eg,e&=~Sd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function Ay(t){if(ce&6)throw Error(B(327));uo();var e=kc(t,0);if(!(e&1))return Dt(t,Ue()),null;var n=Vc(t,e);if(t.tag!==0&&n===2){var r=np(t);r!==0&&(e=r,n=Cp(t,r))}if(n===1)throw n=hl,Pi(t,0),Ar(t,e),Dt(t,Ue()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ei(t,Lt,qn),Dt(t,Ue()),null}function ng(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(Eo=Ue()+500,wd&&si())}}function Wi(t){br!==null&&br.tag===0&&!(ce&6)&&uo();var e=ce;ce|=1;var n=en.transition,r=ge;try{if(en.transition=null,ge=1,t)return t()}finally{ge=r,en.transition=n,ce=e,!(ce&6)&&si()}}function rg(){Ut=to.current,Ae(to)}function Pi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gS(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(Mm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xc();break;case 3:_o(),Ae(jt),Ae(vt),qm();break;case 5:Hm(r);break;case 4:_o();break;case 13:Ae(Pe);break;case 19:Ae(Pe);break;case 10:Wm(r.type._context);break;case 22:case 23:rg()}n=n.return}if(Je=t,ze=t=zr(t.current,null),it=Ut=e,Qe=0,hl=null,eg=Sd=Ui=0,Lt=Fa=null,Si!==null){for(e=0;e<Si.length;e++)if(n=Si[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Si=null}return t}function K2(t,e){do{var n=ze;try{if(Um(),Ku.current=Nc,jc){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}jc=!1}if(Fi=0,Ze=Ke=je=null,Ma=!1,ul=0,Jm.current=null,n===null||n.return===null){Qe=1,hl=e,ze=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=it,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=py(o);if(k!==null){k.flags&=-257,my(k,o,l,s,e),k.mode&1&&fy(s,d,e),e=k,u=d;var x=e.updateQueue;if(x===null){var R=new Set;R.add(u),e.updateQueue=R}else x.add(u);break e}else{if(!(e&1)){fy(s,d,e),ig();break e}u=Error(B(426))}}else if(Le&&l.mode&1){var A=py(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),my(A,o,l,s,e),Vm(ko(u,l));break e}}s=u=ko(u,l),Qe!==4&&(Qe=2),Fa===null?Fa=[s]:Fa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=P2(s,u,e);ay(s,_);break e;case 1:l=u;var v=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&($r===null||!$r.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var P=b2(s,l,e);ay(s,P);break e}}s=s.return}while(s!==null)}Z2(n)}catch(N){e=N,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function Q2(){var t=Dc.current;return Dc.current=Nc,t===null?Nc:t}function ig(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),Je===null||!(Ui&268435455)&&!(Sd&268435455)||Ar(Je,it)}function Vc(t,e){var n=ce;ce|=2;var r=Q2();(Je!==t||it!==e)&&(qn=null,Pi(t,e));do try{WS();break}catch(i){K2(t,i)}while(!0);if(Um(),ce=n,Dc.current=r,ze!==null)throw Error(B(261));return Je=null,it=0,Qe}function WS(){for(;ze!==null;)Y2(ze)}function $S(){for(;ze!==null&&!fx();)Y2(ze)}function Y2(t){var e=J2(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,e===null?Z2(t):ze=e,Jm.current=null}function Z2(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=DS(n,e),n!==null){n.flags&=32767,ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,ze=null;return}}else if(n=NS(n,e,Ut),n!==null){ze=n;return}if(e=e.sibling,e!==null){ze=e;return}ze=e=t}while(e!==null);Qe===0&&(Qe=5)}function Ei(t,e,n){var r=ge,i=en.transition;try{en.transition=null,ge=1,BS(t,e,n,r)}finally{en.transition=i,ge=r}return null}function BS(t,e,n,r){do uo();while(br!==null);if(ce&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Tx(t,s),t===Je&&(ze=Je=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xu||(xu=!0,eE(_c,function(){return uo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=en.transition,en.transition=null;var o=ge;ge=1;var l=ce;ce|=4,Jm.current=null,MS(t,n),H2(n,t),uS(lp),Ec=!!ap,lp=ap=null,t.current=n,VS(n),px(),ce=l,ge=o,en.transition=s}else t.current=n;if(xu&&(xu=!1,br=t,Mc=i),s=t.pendingLanes,s===0&&($r=null),yx(n.stateNode),Dt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Oc)throw Oc=!1,t=Lp,Lp=null,t;return Mc&1&&t.tag!==0&&uo(),s=t.pendingLanes,s&1?t===Rp?Ua++:(Ua=0,Rp=t):Ua=0,si(),null}function uo(){if(br!==null){var t=Pk(Mc),e=en.transition,n=ge;try{if(en.transition=null,ge=16>t?16:t,br===null)var r=!1;else{if(t=br,br=null,Mc=0,ce&6)throw Error(B(331));var i=ce;for(ce|=4,G=t.current;G!==null;){var s=G,o=s.child;if(G.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(G=d;G!==null;){var f=G;switch(f.tag){case 0:case 11:case 15:Va(8,f,s)}var g=f.child;if(g!==null)g.return=f,G=g;else for(;G!==null;){f=G;var y=f.sibling,k=f.return;if($2(f),f===d){G=null;break}if(y!==null){y.return=k,G=y;break}G=k}}}var x=s.alternate;if(x!==null){var R=x.child;if(R!==null){x.child=null;do{var A=R.sibling;R.sibling=null,R=A}while(R!==null)}}G=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,G=o;else e:for(;G!==null;){if(s=G,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Va(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,G=_;break e}G=s.return}}var v=t.current;for(G=v;G!==null;){o=G;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,G=I;else e:for(o=v;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xd(9,l)}}catch(N){Ve(l,l.return,N)}if(l===o){G=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,G=P;break e}G=l.return}}if(ce=i,si(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(yd,t)}catch{}r=!0}return r}finally{ge=n,en.transition=e}}return!1}function Ly(t,e,n){e=ko(n,e),e=P2(t,e,1),t=Wr(t,e,1),e=Tt(),t!==null&&(Cl(t,1,e),Dt(t,e))}function Ve(t,e,n){if(t.tag===3)Ly(t,t,n);else for(;e!==null;){if(e.tag===3){Ly(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($r===null||!$r.has(r))){t=ko(n,t),t=b2(e,t,1),e=Wr(e,t,1),t=Tt(),e!==null&&(Cl(e,1,t),Dt(e,t));break}}e=e.return}}function zS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Tt(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(it&n)===n&&(Qe===4||Qe===3&&(it&130023424)===it&&500>Ue()-tg?Pi(t,0):eg|=n),Dt(t,e)}function X2(t,e){e===0&&(t.mode&1?(e=mu,mu<<=1,!(mu&130023424)&&(mu=4194304)):e=1);var n=Tt();t=ar(t,e),t!==null&&(Cl(t,e,n),Dt(t,n))}function HS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),X2(t,n)}function qS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),X2(t,n)}var J2;J2=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||jt.current)Ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ct=!1,jS(t,e,n);Ct=!!(t.flags&131072)}else Ct=!1,Le&&e.flags&1048576&&r2(e,Lc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Yu(t,e),t=e.pendingProps;var i=go(e,vt.current);lo(e,n),i=Km(null,e,r,t,i,n);var s=Qm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(r)?(s=!0,Sc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bm(e),i.updater=Id,e.stateNode=i,i._reactInternals=e,yp(e,r,t,n),e=kp(null,e,r,!0,s,n)):(e.tag=0,Le&&s&&Om(e),wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Yu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=KS(r),t=dn(r,t),i){case 0:e=_p(null,e,r,t,n);break e;case 1:e=vy(null,e,r,t,n);break e;case 11:e=gy(null,e,r,t,n);break e;case 14:e=yy(null,e,r,dn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),_p(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),vy(t,e,r,i,n);case 3:e:{if(O2(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,u2(t,e),Pc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ko(Error(B(423)),e),e=_y(t,e,r,n,i);break e}else if(r!==i){i=ko(Error(B(424)),e),e=_y(t,e,r,n,i);break e}else for(Wt=Ur(e.stateNode.containerInfo.firstChild),Bt=e,Le=!0,fn=null,n=a2(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yo(),r===i){e=lr(t,e,n);break e}wt(t,e,r,n)}e=e.child}return e;case 5:return c2(e),t===null&&pp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,up(r,i)?o=null:s!==null&&up(r,s)&&(e.flags|=32),D2(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&pp(e),null;case 13:return M2(t,e,n);case 4:return zm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vo(e,null,r,n):wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),gy(t,e,r,i,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ke(Rc,r._currentValue),r._currentValue=o,s!==null)if(kn(s.value,o)){if(s.children===i.children&&!jt.current){e=lr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=nr(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),mp(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),mp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,lo(e,n),i=nn(i),r=r(i),e.flags|=1,wt(t,e,r,n),e.child;case 14:return r=e.type,i=dn(r,e.pendingProps),i=dn(r.type,i),yy(t,e,r,i,n);case 15:return j2(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Yu(t,e),e.tag=1,Nt(r)?(t=!0,Sc(e)):t=!1,lo(e,n),C2(e,r,i),yp(e,r,i,n),kp(null,e,r,!0,t,n);case 19:return V2(t,e,n);case 22:return N2(t,e,n)}throw Error(B(156,e.tag))};function eE(t,e){return Ak(t,e)}function GS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,e,n,r){return new GS(t,e,n,r)}function sg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function KS(t){if(typeof t=="function")return sg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Im)return 11;if(t===xm)return 14}return 2}function zr(t,e){var n=t.alternate;return n===null?(n=Jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ju(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hs:return bi(n.children,i,s,e);case Tm:o=8,i|=8;break;case Wf:return t=Jt(12,n,e,i|2),t.elementType=Wf,t.lanes=s,t;case $f:return t=Jt(13,n,e,i),t.elementType=$f,t.lanes=s,t;case Bf:return t=Jt(19,n,e,i),t.elementType=Bf,t.lanes=s,t;case ck:return Ad(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lk:o=10;break e;case uk:o=9;break e;case Im:o=11;break e;case xm:o=14;break e;case Ir:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function bi(t,e,n,r){return t=Jt(7,t,r,e),t.lanes=n,t}function Ad(t,e,n,r){return t=Jt(22,t,r,e),t.elementType=ck,t.lanes=n,t.stateNode={isHidden:!1},t}function lf(t,e,n){return t=Jt(6,t,null,e),t.lanes=n,t}function uf(t,e,n){return e=Jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function QS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$h(0),this.expirationTimes=$h(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$h(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function og(t,e,n,r,i,s,o,l,u){return t=new QS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bm(s),t}function YS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function tE(t){if(!t)return Jr;t=t._reactInternals;e:{if(Zi(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Nt(n))return t2(t,n,e)}return e}function nE(t,e,n,r,i,s,o,l,u){return t=og(n,r,!0,t,i,s,o,l,u),t.context=tE(null),n=t.current,r=Tt(),i=Br(n),s=nr(r,i),s.callback=e??null,Wr(n,s,i),t.current.lanes=i,Cl(t,i,r),Dt(t,r),t}function Ld(t,e,n,r){var i=e.current,s=Tt(),o=Br(i);return n=tE(n),e.context===null?e.context=n:e.pendingContext=n,e=nr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wr(i,e,o),t!==null&&(vn(t,i,o,s),Gu(t,i,o)),o}function Fc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ry(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ag(t,e){Ry(t,e),(t=t.alternate)&&Ry(t,e)}function ZS(){return null}var rE=typeof reportError=="function"?reportError:function(t){console.error(t)};function lg(t){this._internalRoot=t}Rd.prototype.render=lg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Ld(t,e,null,null)};Rd.prototype.unmount=lg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wi(function(){Ld(null,t,null,null)}),e[or]=null}};function Rd(t){this._internalRoot=t}Rd.prototype.unstable_scheduleHydration=function(t){if(t){var e=Nk();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Sr.length&&e!==0&&e<Sr[n].priority;n++);Sr.splice(n,0,t),n===0&&Ok(t)}};function ug(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cy(){}function XS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Fc(o);s.call(d)}}var o=nE(e,r,t,0,null,!1,!1,"",Cy);return t._reactRootContainer=o,t[or]=o.current,il(t.nodeType===8?t.parentNode:t),Wi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Fc(u);l.call(d)}}var u=og(t,0,!1,null,null,!1,!1,"",Cy);return t._reactRootContainer=u,t[or]=u.current,il(t.nodeType===8?t.parentNode:t),Wi(function(){Ld(e,u,n,r)}),u}function Pd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Fc(o);l.call(u)}}Ld(e,o,t,i)}else o=XS(n,e,t,i,r);return Fc(o)}bk=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ea(e.pendingLanes);n!==0&&(Lm(e,n|1),Dt(e,Ue()),!(ce&6)&&(Eo=Ue()+500,si()))}break;case 13:Wi(function(){var r=ar(t,1);if(r!==null){var i=Tt();vn(r,t,1,i)}}),ag(t,1)}};Rm=function(t){if(t.tag===13){var e=ar(t,134217728);if(e!==null){var n=Tt();vn(e,t,134217728,n)}ag(t,134217728)}};jk=function(t){if(t.tag===13){var e=Br(t),n=ar(t,e);if(n!==null){var r=Tt();vn(n,t,e,r)}ag(t,e)}};Nk=function(){return ge};Dk=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};Jf=function(t,e,n){switch(e){case"input":if(qf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ed(r);if(!i)throw Error(B(90));hk(r),qf(r,i)}}}break;case"textarea":pk(t,n);break;case"select":e=n.value,e!=null&&io(t,!!n.multiple,e,!1)}};Ek=ng;wk=Wi;var JS={usingClientEntryPoint:!1,Events:[bl,Qs,Ed,_k,kk,ng]},pa={findFiberByHostInstance:xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e6={bundleType:pa.bundleType,version:pa.version,rendererPackageName:pa.rendererPackageName,rendererConfig:pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xk(t),t===null?null:t.stateNode},findFiberByHostInstance:pa.findFiberByHostInstance||ZS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{yd=Su.inject(e6),bn=Su}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JS;Gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ug(e))throw Error(B(200));return YS(t,e,null,n)};Gt.createRoot=function(t,e){if(!ug(t))throw Error(B(299));var n=!1,r="",i=rE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=og(t,1,!1,null,null,n,!1,r,i),t[or]=e.current,il(t.nodeType===8?t.parentNode:t),new lg(e)};Gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=xk(e),t=t===null?null:t.stateNode,t};Gt.flushSync=function(t){return Wi(t)};Gt.hydrate=function(t,e,n){if(!Cd(e))throw Error(B(200));return Pd(null,t,e,!0,n)};Gt.hydrateRoot=function(t,e,n){if(!ug(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=rE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=nE(e,null,t,1,n??null,i,!1,s,o),t[or]=e.current,il(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Rd(e)};Gt.render=function(t,e,n){if(!Cd(e))throw Error(B(200));return Pd(null,t,e,!1,n)};Gt.unmountComponentAtNode=function(t){if(!Cd(t))throw Error(B(40));return t._reactRootContainer?(Wi(function(){Pd(null,null,t,!1,function(){t._reactRootContainer=null,t[or]=null})}),!0):!1};Gt.unstable_batchedUpdates=ng;Gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cd(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Pd(t,e,n,!1,r)};Gt.version="18.3.1-next-f1338f8080-20240426";function iE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iE)}catch(t){console.error(t)}}iE(),ik.exports=Gt;var t6=ik.exports,sE,Py=t6;sE=Py.createRoot,Py.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fl.apply(this,arguments)}var jr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(jr||(jr={}));const by="popstate";function n6(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return bp("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Uc(i)}return i6(e,n,null,t)}function We(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function oE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function r6(){return Math.random().toString(36).substr(2,8)}function jy(t,e){return{usr:t.state,key:t.key,idx:e}}function bp(t,e,n,r){return n===void 0&&(n=null),fl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Vo(e):e,{state:n,key:e&&e.key||r||r6()})}function Uc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Vo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function i6(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=jr.Pop,u=null,d=f();d==null&&(d=0,o.replaceState(fl({},o.state,{idx:d}),""));function f(){return(o.state||{idx:null}).idx}function g(){l=jr.Pop;let A=f(),_=A==null?null:A-d;d=A,u&&u({action:l,location:R.location,delta:_})}function y(A,_){l=jr.Push;let v=bp(R.location,A,_);d=f()+1;let I=jy(v,d),P=R.createHref(v);try{o.pushState(I,"",P)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(P)}s&&u&&u({action:l,location:R.location,delta:1})}function k(A,_){l=jr.Replace;let v=bp(R.location,A,_);d=f();let I=jy(v,d),P=R.createHref(v);o.replaceState(I,"",P),s&&u&&u({action:l,location:R.location,delta:0})}function x(A){let _=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof A=="string"?A:Uc(A);return v=v.replace(/ $/,"%20"),We(_,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,_)}let R={get action(){return l},get location(){return t(i,o)},listen(A){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(by,g),u=A,()=>{i.removeEventListener(by,g),u=null}},createHref(A){return e(i,A)},createURL:x,encodeLocation(A){let _=x(A);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:k,go(A){return o.go(A)}};return R}var Ny;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ny||(Ny={}));function s6(t,e,n){return n===void 0&&(n="/"),o6(t,e,n)}function o6(t,e,n,r){let i=typeof e=="string"?Vo(e):e,s=cg(i.pathname||"/",n);if(s==null)return null;let o=aE(t);a6(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let d=_6(s);l=g6(o[u],d)}return l}function aE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(We(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=Hr([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(We(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),aE(s.children,e,f,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:p6(d,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of lE(s.path))i(s,o,u)}),e}function lE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=lE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function a6(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:m6(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const l6=/^:[\w-]+$/,u6=3,c6=2,d6=1,h6=10,f6=-2,Dy=t=>t==="*";function p6(t,e){let n=t.split("/"),r=n.length;return n.some(Dy)&&(r+=f6),e&&(r+=c6),n.filter(i=>!Dy(i)).reduce((i,s)=>i+(l6.test(s)?u6:s===""?d6:h6),r)}function m6(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function g6(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",g=y6({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f),y=u.route;if(!g)return null;Object.assign(i,g.params),o.push({params:i,pathname:Hr([s,g.pathname]),pathnameBase:T6(Hr([s,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(s=Hr([s,g.pathnameBase]))}return o}function y6(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=v6(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,f,g)=>{let{paramName:y,isOptional:k}=f;if(y==="*"){let R=l[g]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const x=l[g];return k&&!x?d[y]=void 0:d[y]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:t}}function v6(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),oE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function _6(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return oE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function cg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function k6(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Vo(t):t;return{pathname:n?n.startsWith("/")?n:E6(n,e):e,search:I6(r),hash:x6(i)}}function E6(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function cf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function w6(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function dg(t,e){let n=w6(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function hg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Vo(t):(i=fl({},t),We(!i.pathname||!i.pathname.includes("?"),cf("?","pathname","search",i)),We(!i.pathname||!i.pathname.includes("#"),cf("#","pathname","hash",i)),We(!i.search||!i.search.includes("#"),cf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let g=e.length-1;if(!r&&o.startsWith("..")){let y=o.split("/");for(;y[0]==="..";)y.shift(),g-=1;i.pathname=y.join("/")}l=g>=0?e[g]:"/"}let u=k6(i,l),d=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}const Hr=t=>t.join("/").replace(/\/\/+/g,"/"),T6=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),I6=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,x6=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function S6(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const uE=["post","put","patch","delete"];new Set(uE);const A6=["get",...uE];new Set(A6);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pl(){return pl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pl.apply(this,arguments)}const fg=D.createContext(null),L6=D.createContext(null),oi=D.createContext(null),bd=D.createContext(null),ai=D.createContext({outlet:null,matches:[],isDataRoute:!1}),cE=D.createContext(null);function R6(t,e){let{relative:n}=e===void 0?{}:e;Fo()||We(!1);let{basename:r,navigator:i}=D.useContext(oi),{hash:s,pathname:o,search:l}=hE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Hr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Fo(){return D.useContext(bd)!=null}function Uo(){return Fo()||We(!1),D.useContext(bd).location}function dE(t){D.useContext(oi).static||D.useLayoutEffect(t)}function Wo(){let{isDataRoute:t}=D.useContext(ai);return t?$6():C6()}function C6(){Fo()||We(!1);let t=D.useContext(fg),{basename:e,future:n,navigator:r}=D.useContext(oi),{matches:i}=D.useContext(ai),{pathname:s}=Uo(),o=JSON.stringify(dg(i,n.v7_relativeSplatPath)),l=D.useRef(!1);return dE(()=>{l.current=!0}),D.useCallback(function(d,f){if(f===void 0&&(f={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let g=hg(d,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Hr([e,g.pathname])),(f.replace?r.replace:r.push)(g,f.state,f)},[e,r,o,s,t])}function hE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(oi),{matches:i}=D.useContext(ai),{pathname:s}=Uo(),o=JSON.stringify(dg(i,r.v7_relativeSplatPath));return D.useMemo(()=>hg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function P6(t,e){return b6(t,e)}function b6(t,e,n,r){Fo()||We(!1);let{navigator:i,static:s}=D.useContext(oi),{matches:o}=D.useContext(ai),l=o[o.length-1],u=l?l.params:{};l&&l.pathname;let d=l?l.pathnameBase:"/";l&&l.route;let f=Uo(),g;if(e){var y;let _=typeof e=="string"?Vo(e):e;d==="/"||(y=_.pathname)!=null&&y.startsWith(d)||We(!1),g=_}else g=f;let k=g.pathname||"/",x=k;if(d!=="/"){let _=d.replace(/^\//,"").split("/");x="/"+k.replace(/^\//,"").split("/").slice(_.length).join("/")}let R=s6(t,{pathname:x}),A=M6(R&&R.map(_=>Object.assign({},_,{params:Object.assign({},u,_.params),pathname:Hr([d,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?d:Hr([d,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),o,n,r);return e&&A?D.createElement(bd.Provider,{value:{location:pl({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:jr.Pop}},A):A}function j6(){let t=W6(),e=S6(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,null)}const N6=D.createElement(j6,null);class D6 extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(ai.Provider,{value:this.props.routeContext},D.createElement(cE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function O6(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(fg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(ai.Provider,{value:e},r)}function M6(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);f>=0||We(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let g=o[f];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=f),g.route.id){let{loaderData:y,errors:k}=n,x=g.route.loader&&y[g.route.id]===void 0&&(!k||k[g.route.id]===void 0);if(g.route.lazy||x){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,g,y)=>{let k,x=!1,R=null,A=null;n&&(k=l&&g.route.id?l[g.route.id]:void 0,R=g.route.errorElement||N6,u&&(d<0&&y===0?(B6("route-fallback"),x=!0,A=null):d===y&&(x=!0,A=g.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,y+1)),v=()=>{let I;return k?I=R:x?I=A:g.route.Component?I=D.createElement(g.route.Component,null):g.route.element?I=g.route.element:I=f,D.createElement(O6,{match:g,routeContext:{outlet:f,matches:_,isDataRoute:n!=null},children:I})};return n&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?D.createElement(D6,{location:n.location,revalidation:n.revalidation,component:R,error:k,children:v(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):v()},null)}var fE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(fE||{}),pE=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(pE||{});function V6(t){let e=D.useContext(fg);return e||We(!1),e}function F6(t){let e=D.useContext(L6);return e||We(!1),e}function U6(t){let e=D.useContext(ai);return e||We(!1),e}function mE(t){let e=U6(),n=e.matches[e.matches.length-1];return n.route.id||We(!1),n.route.id}function W6(){var t;let e=D.useContext(cE),n=F6(),r=mE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function $6(){let{router:t}=V6(fE.UseNavigateStable),e=mE(pE.UseNavigateStable),n=D.useRef(!1);return dE(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,pl({fromRouteId:e},s)))},[t,e])}const Oy={};function B6(t,e,n){Oy[t]||(Oy[t]=!0)}function z6(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function gE(t){let{to:e,replace:n,state:r,relative:i}=t;Fo()||We(!1);let{future:s,static:o}=D.useContext(oi),{matches:l}=D.useContext(ai),{pathname:u}=Uo(),d=Wo(),f=hg(e,dg(l,s.v7_relativeSplatPath),u,i==="path"),g=JSON.stringify(f);return D.useEffect(()=>d(JSON.parse(g),{replace:n,state:r,relative:i}),[d,g,i,n,r]),null}function Ta(t){We(!1)}function H6(t){let{basename:e="/",children:n=null,location:r,navigationType:i=jr.Pop,navigator:s,static:o=!1,future:l}=t;Fo()&&We(!1);let u=e.replace(/^\/*/,"/"),d=D.useMemo(()=>({basename:u,navigator:s,static:o,future:pl({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Vo(r));let{pathname:f="/",search:g="",hash:y="",state:k=null,key:x="default"}=r,R=D.useMemo(()=>{let A=cg(f,u);return A==null?null:{location:{pathname:A,search:g,hash:y,state:k,key:x},navigationType:i}},[u,f,g,y,k,x,i]);return R==null?null:D.createElement(oi.Provider,{value:d},D.createElement(bd.Provider,{children:n,value:R}))}function q6(t){let{children:e,location:n}=t;return P6(jp(e),n)}new Promise(()=>{});function jp(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,jp(r.props.children,s));return}r.type!==Ta&&We(!1),!r.props.index||!r.props.children||We(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=jp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Np(){return Np=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Np.apply(this,arguments)}function G6(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function K6(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Q6(t,e){return t.button===0&&(!e||e==="_self")&&!K6(t)}const Y6=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Z6="6";try{window.__reactRouterVersion=Z6}catch{}const X6="startTransition",My=zI[X6];function J6(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=n6({window:i,v5Compat:!0}));let o=s.current,[l,u]=D.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},f=D.useCallback(g=>{d&&My?My(()=>u(g)):u(g)},[u,d]);return D.useLayoutEffect(()=>o.listen(f),[o,f]),D.useEffect(()=>z6(r),[r]),D.createElement(H6,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const eA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yE=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:d,preventScrollReset:f,viewTransition:g}=e,y=G6(e,Y6),{basename:k}=D.useContext(oi),x,R=!1;if(typeof d=="string"&&tA.test(d)&&(x=d,eA))try{let I=new URL(window.location.href),P=d.startsWith("//")?new URL(I.protocol+d):new URL(d),N=cg(P.pathname,k);P.origin===I.origin&&N!=null?d=N+P.search+P.hash:R=!0}catch{}let A=R6(d,{relative:i}),_=nA(d,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:g});function v(I){r&&r(I),I.defaultPrevented||_(I)}return D.createElement("a",Np({},y,{href:x||A,onClick:R||s?r:v,ref:n,target:u}))});var Vy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Vy||(Vy={}));var Fy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Fy||(Fy={}));function nA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Wo(),d=Uo(),f=hE(t,{relative:o});return D.useCallback(g=>{if(Q6(g,n)){g.preventDefault();let y=r!==void 0?r:Uc(d)===Uc(f);u(t,{replace:y,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[d,u,f,r,i,n,t,s,o,l])}var Uy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_E={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let y=(l&15)<<2|d>>6,k=d&63;u||(k=64,o||(y=64)),r.push(n[f],n[g],n[y],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||g==null)throw new iA;const y=s<<2|l>>4;if(r.push(y),d!==64){const k=l<<4&240|d>>2;if(r.push(k),g!==64){const x=d<<6&192|g;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sA=function(t){const e=vE(t);return _E.encodeByteArray(e,!0)},Wc=function(t){return sA(t).replace(/\./g,"")},kE=function(t){try{return _E.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function oA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aA=()=>oA().__FIREBASE_DEFAULTS__,lA=()=>{if(typeof process>"u"||typeof Uy>"u")return;const t=Uy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kE(t[1]);return e&&JSON.parse(e)},jd=()=>{try{return aA()||lA()||uA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},EE=t=>{var e,n;return(n=(e=jd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wE=t=>{const e=EE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},TE=()=>{var t;return(t=jd())===null||t===void 0?void 0:t.config},IE=t=>{var e;return(e=jd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function xE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wc(JSON.stringify(n)),Wc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function hA(){var t;const e=(t=jd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mA(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gA(){return!hA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function AE(){try{return typeof indexedDB=="object"}catch{return!1}}function LE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function yA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="FirebaseError";class an extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vA,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_A(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new an(i,l,r)}}function _A(t,e){return t.replace(kA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const kA=/\{\$([^}]+)}/g;function EA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ml(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Wy(s)&&Wy(o)){if(!ml(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ia(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wA(t,e){const n=new TA(t,e);return n.subscribe.bind(n)}class TA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");IA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=df),i.error===void 0&&(i.error=df),i.complete===void 0&&(i.complete=df);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function df(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=1e3,SA=2,AA=4*60*60*1e3,LA=.5;function $y(t,e=xA,n=SA){const r=e*Math.pow(n,t),i=Math.round(LA*r*(Math.random()-.5)*2);return Math.min(AA,r+i)}/**
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
 */function De(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PA(e))try{this.getOrInitializeService({instanceIdentifier:wi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wi){return this.instances.has(e)}getOptions(e=wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wi){return this.component?this.component.multipleInstances?e:wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CA(t){return t===wi?void 0:t}function PA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const jA={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},NA=le.INFO,DA={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},OA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=DA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nd{constructor(e){this.name=e,this._logLevel=NA,this._logHandler=OA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const MA=(t,e)=>e.some(n=>t instanceof n);let By,zy;function VA(){return By||(By=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FA(){return zy||(zy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const RE=new WeakMap,Dp=new WeakMap,CE=new WeakMap,hf=new WeakMap,pg=new WeakMap;function UA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(qr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&RE.set(n,t)}).catch(()=>{}),pg.set(e,t),e}function WA(t){if(Dp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Dp.set(t,e)}let Op={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||CE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $A(t){Op=t(Op)}function BA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ff(this),e,...n);return CE.set(r,e.sort?e.sort():[e]),qr(r)}:FA().includes(t)?function(...e){return t.apply(ff(this),e),qr(RE.get(this))}:function(...e){return qr(t.apply(ff(this),e))}}function zA(t){return typeof t=="function"?BA(t):(t instanceof IDBTransaction&&WA(t),MA(t,VA())?new Proxy(t,Op):t)}function qr(t){if(t instanceof IDBRequest)return UA(t);if(hf.has(t))return hf.get(t);const e=zA(t);return e!==t&&(hf.set(t,e),pg.set(e,t)),e}const ff=t=>pg.get(t);function PE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=qr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(qr(o.result),u.oldVersion,u.newVersion,qr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const HA=["get","getKey","getAll","getAllKeys","count"],qA=["put","add","delete","clear"],pf=new Map;function Hy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pf.get(e))return pf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||HA.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return pf.set(e,s),s}$A(t=>({...t,get:(e,n,r)=>Hy(e,n)||t.get(e,n,r),has:(e,n)=>!!Hy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mp="@firebase/app",qy="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new Nd("@firebase/app"),QA="@firebase/app-compat",YA="@firebase/analytics-compat",ZA="@firebase/analytics",XA="@firebase/app-check-compat",JA="@firebase/app-check",e4="@firebase/auth",t4="@firebase/auth-compat",n4="@firebase/database",r4="@firebase/data-connect",i4="@firebase/database-compat",s4="@firebase/functions",o4="@firebase/functions-compat",a4="@firebase/installations",l4="@firebase/installations-compat",u4="@firebase/messaging",c4="@firebase/messaging-compat",d4="@firebase/performance",h4="@firebase/performance-compat",f4="@firebase/remote-config",p4="@firebase/remote-config-compat",m4="@firebase/storage",g4="@firebase/storage-compat",y4="@firebase/firestore",v4="@firebase/vertexai-preview",_4="@firebase/firestore-compat",k4="firebase",E4="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="[DEFAULT]",w4={[Mp]:"fire-core",[QA]:"fire-core-compat",[ZA]:"fire-analytics",[YA]:"fire-analytics-compat",[JA]:"fire-app-check",[XA]:"fire-app-check-compat",[e4]:"fire-auth",[t4]:"fire-auth-compat",[n4]:"fire-rtdb",[r4]:"fire-data-connect",[i4]:"fire-rtdb-compat",[s4]:"fire-fn",[o4]:"fire-fn-compat",[a4]:"fire-iid",[l4]:"fire-iid-compat",[u4]:"fire-fcm",[c4]:"fire-fcm-compat",[d4]:"fire-perf",[h4]:"fire-perf-compat",[f4]:"fire-rc",[p4]:"fire-rc-compat",[m4]:"fire-gcs",[g4]:"fire-gcs-compat",[y4]:"fire-fst",[_4]:"fire-fst-compat",[v4]:"fire-vertex","fire-js":"fire-js",[k4]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new Map,T4=new Map,Fp=new Map;function Gy(t,e){try{t.container.addComponent(e)}catch(n){ur.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function En(t){const e=t.name;if(Fp.has(e))return ur.debug(`There were multiple attempts to register component ${e}.`),!1;Fp.set(e,t);for(const n of $c.values())Gy(n,t);for(const n of T4.values())Gy(n,t);return!0}function li(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Cn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new Xi("app","Firebase",I4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=E4;function bE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gr.create("bad-app-name",{appName:String(i)});if(n||(n=TE()),!n)throw Gr.create("no-options");const s=$c.get(i);if(s){if(ml(n,s.options)&&ml(r,s.config))return s;throw Gr.create("duplicate-app",{appName:i})}const o=new bA(i);for(const u of Fp.values())o.addComponent(u);const l=new x4(n,r,o);return $c.set(i,l),l}function Dd(t=Vp){const e=$c.get(t);if(!e&&t===Vp&&TE())return bE();if(!e)throw Gr.create("no-app",{appName:t});return e}function Ot(t,e,n){var r;let i=(r=w4[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ur.warn(l.join(" "));return}En(new sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const S4="firebase-heartbeat-database",A4=1,gl="firebase-heartbeat-store";let mf=null;function jE(){return mf||(mf=PE(S4,A4,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gr.create("idb-open",{originalErrorMessage:t.message})})),mf}async function L4(t){try{const n=(await jE()).transaction(gl),r=await n.objectStore(gl).get(NE(t));return await n.done,r}catch(e){if(e instanceof an)ur.warn(e.message);else{const n=Gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ur.warn(n.message)}}}async function Ky(t,e){try{const r=(await jE()).transaction(gl,"readwrite");await r.objectStore(gl).put(e,NE(t)),await r.done}catch(n){if(n instanceof an)ur.warn(n.message);else{const r=Gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ur.warn(r.message)}}}function NE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const R4=1024,C4=30*24*60*60*1e3;class P4{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new j4(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=C4}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ur.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qy(),{heartbeatsToSend:r,unsentEntries:i}=b4(this._heartbeatsCache.heartbeats),s=Wc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ur.warn(n),""}}}function Qy(){return new Date().toISOString().substring(0,10)}function b4(t,e=R4){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Yy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class j4{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AE()?LE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await L4(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ky(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ky(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yy(t){return Wc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N4(t){En(new sn("platform-logger",e=>new GA(e),"PRIVATE")),En(new sn("heartbeat",e=>new P4(e),"PRIVATE")),Ot(Mp,qy,t),Ot(Mp,qy,"esm2017"),Ot("fire-js","")}N4("");function mg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function DE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const D4=DE,OE=new Xi("auth","Firebase",DE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=new Nd("@firebase/auth");function O4(t,...e){Bc.logLevel<=le.WARN&&Bc.warn(`Auth (${Ji}): ${t}`,...e)}function ec(t,...e){Bc.logLevel<=le.ERROR&&Bc.error(`Auth (${Ji}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,...e){throw gg(t,...e)}function Nn(t,...e){return gg(t,...e)}function ME(t,e,n){const r=Object.assign(Object.assign({},D4()),{[e]:n});return new Xi("auth","Firebase",r).create(e,{appName:t.name})}function rr(t){return ME(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return OE.create(t,...e)}function ee(t,e,...n){if(!t)throw gg(e,...n)}function Xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ec(e),new Error(e)}function cr(t,e){t||Xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function M4(){return Zy()==="http:"||Zy()==="https:"}function Zy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(M4()||SE()||"connection"in navigator)?navigator.onLine:!0}function F4(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n){this.shortDelay=e,this.longDelay=n,cr(n>e,"Short delay should be less than long delay!"),this.isMobile=dA()||pA()}get(){return V4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t,e){cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W4=new Dl(3e4,6e4);function pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Un(t,e,n,r,i={}){return FE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Nl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return fA()||(d.referrerPolicy="no-referrer"),VE.fetch()(UE(t,t.config.apiHost,n,l),d)})}async function FE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},U4),e);try{const i=new B4(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Au(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Au(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Au(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Au(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ME(t,f,d);wn(t,f)}}catch(i){if(i instanceof an)throw i;wn(t,"network-request-failed",{message:String(i)})}}async function Ol(t,e,n,r,i={}){const s=await Un(t,e,n,r,i);return"mfaPendingCredential"in s&&wn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function UE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?yg(t.config,i):`${t.config.apiScheme}://${i}`}function $4(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class B4{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nn(this.auth,"network-request-failed")),W4.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Au(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nn(t,e,r);return i.customData._tokenResponse=n,i}function Xy(t){return t!==void 0&&t.enterprise!==void 0}class z4{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $4(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function H4(t,e){return Un(t,"GET","/v2/recaptchaConfig",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q4(t,e){return Un(t,"POST","/v1/accounts:delete",e)}async function WE(t,e){return Un(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function G4(t,e=!1){const n=De(t),r=await n.getIdToken(e),i=vg(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Wa(gf(i.auth_time)),issuedAtTime:Wa(gf(i.iat)),expirationTime:Wa(gf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gf(t){return Number(t)*1e3}function vg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ec("JWT malformed, contained fewer than 3 sections"),null;try{const i=kE(n);return i?JSON.parse(i):(ec("Failed to decode base64 JWT payload"),null)}catch(i){return ec("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Jy(t){const e=vg(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof an&&K4(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function K4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wa(this.lastLoginAt),this.creationTime=Wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await wo(t,WE(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$E(s.providerUserInfo):[],l=Z4(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Wp(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function Y4(t){const e=De(t);await zc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Z4(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $E(t){return t.map(e=>{var{providerId:n}=e,r=mg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X4(t,e){const n=await FE(t,{},async()=>{const r=Nl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=UE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",VE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function J4(t,e){return Un(t,"POST","/v2/accounts:revokeToken",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Jy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await X4(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new co;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=mg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Wp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await wo(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return G4(this,e)}reload(){return Y4(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(rr(this.auth));const e=await this.getIdToken();return await wo(this,q4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,d,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,k=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(l=n.tenantId)!==null&&l!==void 0?l:void 0,A=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(d=n.createdAt)!==null&&d!==void 0?d:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:I,emailVerified:P,isAnonymous:N,providerData:V,stsTokenManager:w}=n;ee(I&&w,e,"internal-error");const E=co.fromJSON(this.name,w);ee(typeof I=="string",e,"internal-error"),kr(g,e.name),kr(y,e.name),ee(typeof P=="boolean",e,"internal-error"),ee(typeof N=="boolean",e,"internal-error"),kr(k,e.name),kr(x,e.name),kr(R,e.name),kr(A,e.name),kr(_,e.name),kr(v,e.name);const S=new Jn({uid:I,auth:e,email:y,emailVerified:P,displayName:g,isAnonymous:N,photoURL:x,phoneNumber:k,tenantId:R,stsTokenManager:E,createdAt:_,lastLoginAt:v});return V&&Array.isArray(V)&&(S.providerData=V.map(L=>Object.assign({},L))),A&&(S._redirectEventId=A),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new co;i.updateFromServerResponse(n);const s=new Jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ee(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?$E(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new co;l.updateFromIdToken(r);const u=new Jn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Wp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=new Map;function er(t){cr(t instanceof Function,"Expected a class definition");let e=ev.get(t);return e?(cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ev.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}BE.type="NONE";const tv=BE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t,e,n){return`firebase:${t}:${e}:${n}`}class ho{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=tc(this.userKey,i.apiKey,s),this.fullPersistenceKey=tc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ho(er(tv),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||er(tv);const o=tc(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(o);if(f){const g=Jn._fromJSON(e,f);d!==s&&(l=g),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ho(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new ho(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(GE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(QE(e))return"Blackberry";if(YE(e))return"Webos";if(HE(e))return"Safari";if((e.includes("chrome/")||qE(e))&&!e.includes("edge/"))return"Chrome";if(KE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zE(t=_t()){return/firefox\//i.test(t)}function HE(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qE(t=_t()){return/crios\//i.test(t)}function GE(t=_t()){return/iemobile/i.test(t)}function KE(t=_t()){return/android/i.test(t)}function QE(t=_t()){return/blackberry/i.test(t)}function YE(t=_t()){return/webos/i.test(t)}function _g(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eL(t=_t()){var e;return _g(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tL(){return mA()&&document.documentMode===10}function ZE(t=_t()){return _g(t)||KE(t)||YE(t)||QE(t)||/windows phone/i.test(t)||GE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t,e=[]){let n;switch(t){case"Browser":n=nv(_t());break;case"Worker":n=`${nv(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ji}/${r}`}/**
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
 */class nL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function rL(t,e={}){return Un(t,"GET","/v2/passwordPolicy",pr(t,e))}/**
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
 */const iL=6;class sL{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:iL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rv(this),this.idTokenSubscription=new rv(this),this.beforeStateQueue=new nL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=OE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=er(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await WE(this,{idToken:e}),r=await Jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=F4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cn(this.app))return Promise.reject(rr(this));const n=e?De(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cn(this.app)?Promise.reject(rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rL(this),n=new sL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await J4(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&er(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=XE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&O4(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ui(t){return De(t)}class rv{constructor(e){this.auth=e,this.observer=null,this.addObserver=wA(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Od={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aL(t){Od=t}function JE(t){return Od.loadJS(t)}function lL(){return Od.recaptchaEnterpriseScript}function uL(){return Od.gapiScript}function cL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const dL="recaptcha-enterprise",hL="NO_RECAPTCHA";class fL{constructor(e){this.type=dL,this.auth=ui(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{H4(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new z4(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Xy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(hL)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Xy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=lL();u.length!==0&&(u+=l),JE(u).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function iv(t,e,n,r=!1){const i=new fL(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Hc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await iv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await iv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pL(t,e){const n=li(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ml(s,e??{}))return i;wn(i,"already-initialized")}return n.initialize({options:e})}function mL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gL(t,e,n){const r=ui(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ew(e),{host:o,port:l}=yL(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),vL()}function ew(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yL(t){const e=ew(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:sv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:sv(o)}}}function sv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,n){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}async function _L(t,e){return Un(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kL(t,e){return Ol(t,"POST","/v1/accounts:signInWithPassword",pr(t,e))}async function EL(t,e){return Un(t,"POST","/v1/accounts:sendOobCode",pr(t,e))}async function wL(t,e){return EL(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TL(t,e){return Ol(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}async function IL(t,e){return Ol(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends kg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new yl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new yl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hc(e,n,"signInWithPassword",kL);case"emailLink":return TL(e,{email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hc(e,r,"signUpPassword",_L);case"emailLink":return IL(e,{idToken:n,email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(t,e){return Ol(t,"POST","/v1/accounts:signInWithIdp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xL="http://localhost";class $i extends kg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $i(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=mg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $i(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fo(e,n)}buildRequest(){const e={requestUri:xL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Nl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AL(t){const e=Ia(xa(t)).link,n=e?Ia(xa(e)).deep_link_id:null,r=Ia(xa(t)).deep_link_id;return(r?Ia(xa(r)).link:null)||r||n||e||t}class Eg{constructor(e){var n,r,i,s,o,l;const u=Ia(xa(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,g=SL((i=u.mode)!==null&&i!==void 0?i:null);ee(d&&f&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=AL(e);try{return new Eg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.providerId=$o.PROVIDER_ID}static credential(e,n){return yl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Eg.parseLink(n);return ee(r,"argument-error"),yl._fromEmailAndCode(e,r.code,r.tenantId)}}$o.PROVIDER_ID="password";$o.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$o.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ml extends tw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Ml{constructor(){super("facebook.com")}static credential(e){return $i._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lr.credential(e.oauthAccessToken)}catch{return null}}}Lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Ml{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $i._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Ml{constructor(){super("github.com")}static credential(e){return $i._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.GITHUB_SIGN_IN_METHOD="github.com";Rr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Ml{constructor(){super("twitter.com")}static credential(e,n){return $i._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cr.credential(n,r)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LL(t,e){return Ol(t,"POST","/v1/accounts:signUp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Jn._fromIdTokenResponse(e,r,i),o=ov(r);return new Bi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ov(r);return new Bi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ov(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends an{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qc(e,n,r,i)}}function nw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qc._fromErrorAndOperation(t,s,e,r):s})}async function RL(t,e,n=!1){const r=await wo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CL(t,e,n=!1){const{auth:r}=t;if(Cn(r.app))return Promise.reject(rr(r));const i="reauthenticate";try{const s=await wo(t,nw(r,i,e,t),n);ee(s.idToken,r,"internal-error");const o=vg(s.idToken);ee(o,r,"internal-error");const{sub:l}=o;return ee(t.uid===l,r,"user-mismatch"),Bi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw(t,e,n=!1){if(Cn(t.app))return Promise.reject(rr(t));const r="signIn",i=await nw(t,r,e),s=await Bi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function PL(t,e){return rw(ui(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iw(t){const e=ui(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bL(t,e,n){const r=ui(t);await Hc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",wL)}async function jL(t,e,n){if(Cn(t.app))return Promise.reject(rr(t));const r=ui(t),o=await Hc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",LL).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&iw(t),u}),l=await Bi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function NL(t,e,n){return Cn(t.app)?Promise.reject(rr(t)):PL(De(t),$o.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DL(t,e){return Un(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OL(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=De(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await wo(r,DL(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ML(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function VL(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function FL(t,e,n,r){return De(t).onAuthStateChanged(e,n,r)}function UL(t){return De(t).signOut()}async function WL(t){return De(t).delete()}const Gc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gc,"1"),this.storage.removeItem(Gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $L=1e3,BL=10;class ow extends sw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ZE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,BL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$L)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ow.type="LOCAL";const zL=ow;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function HL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Md(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),u=await HL(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Md.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const d=wg("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const y=g;if(y.data.eventId===d)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(){return window}function GL(t){Dn().location.href=t}/**
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
 */function uw(){return typeof Dn().WorkerGlobalScope<"u"&&typeof Dn().importScripts=="function"}async function KL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YL(){return uw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="firebaseLocalStorageDb",ZL=1,Kc="firebaseLocalStorage",dw="fbase_key";class Vl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vd(t,e){return t.transaction([Kc],e?"readwrite":"readonly").objectStore(Kc)}function XL(){const t=indexedDB.deleteDatabase(cw);return new Vl(t).toPromise()}function $p(){const t=indexedDB.open(cw,ZL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kc,{keyPath:dw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kc)?e(r):(r.close(),await XL(),e(await $p()))})})}async function av(t,e,n){const r=Vd(t,!0).put({[dw]:e,value:n});return new Vl(r).toPromise()}async function JL(t,e){const n=Vd(t,!1).get(e),r=await new Vl(n).toPromise();return r===void 0?null:r.value}function lv(t,e){const n=Vd(t,!0).delete(e);return new Vl(n).toPromise()}const eR=800,tR=3;class hw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $p(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Md._getInstance(YL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KL(),!this.activeServiceWorker)return;this.sender=new qL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $p();return await av(e,Gc,"1"),await lv(e,Gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>av(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>JL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vd(i,!1).getAll();return new Vl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hw.type="LOCAL";const nR=hw;new Dl(3e4,6e4);/**
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
 */function rR(t,e){return e?er(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg extends kg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iR(t){return rw(t.auth,new Tg(t),t.bypassAuthState)}function sR(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),CL(n,new Tg(t),t.bypassAuthState)}async function oR(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),RL(n,new Tg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iR;case"linkViaPopup":case"linkViaRedirect":return oR;case"reauthViaPopup":case"reauthViaRedirect":return sR;default:wn(this.auth,"internal-error")}}resolve(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=new Dl(2e3,1e4);class no extends fw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,no.currentPopupAction&&no.currentPopupAction.cancel(),no.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){cr(this.filter.length===1,"Popup operations only handle one event");const e=wg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,no.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aR.get())};e()}}no.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR="pendingRedirect",nc=new Map;class uR extends fw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=nc.get(this.auth._key());if(!e){try{const r=await cR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}nc.set(this.auth._key(),e)}return this.bypassAuthState||nc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cR(t,e){const n=fR(e),r=hR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function dR(t,e){nc.set(t._key(),e)}function hR(t){return er(t._redirectPersistence)}function fR(t){return tc(lR,t.config.apiKey,t.name)}async function pR(t,e,n=!1){if(Cn(t.app))return Promise.reject(rr(t));const r=ui(t),i=rR(r,e),o=await new uR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=10*60*1e3;class gR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mR&&this.cachedEventUids.clear(),this.cachedEventUids.has(uv(e))}saveEventToCache(e){this.cachedEventUids.add(uv(e)),this.lastProcessedEventTime=Date.now()}}function uv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vR(t,e={}){return Un(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kR=/^https?/;async function ER(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vR(t);for(const n of e)try{if(wR(n))return}catch{}wn(t,"unauthorized-domain")}function wR(t){const e=Up(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kR.test(n))return!1;if(_R.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const TR=new Dl(3e4,6e4);function cv(){const t=Dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IR(t){return new Promise((e,n)=>{var r,i,s;function o(){cv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cv(),n(Nn(t,"network-request-failed"))},timeout:TR.get()})}if(!((i=(r=Dn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Dn().gapi)===null||s===void 0)&&s.load)o();else{const l=cL("iframefcb");return Dn()[l]=()=>{gapi.load?o():n(Nn(t,"network-request-failed"))},JE(`${uL()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw rc=null,e})}let rc=null;function xR(t){return rc=rc||IR(t),rc}/**
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
 */const SR=new Dl(5e3,15e3),AR="__/auth/iframe",LR="emulator/auth/iframe",RR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PR(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yg(e,LR):`https://${t.config.authDomain}/${AR}`,r={apiKey:e.apiKey,appName:t.name,v:Ji},i=CR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Nl(r).slice(1)}`}async function bR(t){const e=await xR(t),n=Dn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:PR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Nn(t,"network-request-failed"),l=Dn().setTimeout(()=>{s(o)},SR.get());function u(){Dn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const jR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NR=500,DR=600,OR="_blank",MR="http://localhost";class dv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VR(t,e,n,r=NR,i=DR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},jR),{width:r.toString(),height:i.toString(),top:s,left:o}),d=_t().toLowerCase();n&&(l=qE(d)?OR:n),zE(d)&&(e=e||MR,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[k,x])=>`${y}${k}=${x},`,"");if(eL(d)&&l!=="_self")return FR(e||"",l),new dv(null);const g=window.open(e||"",l,f);ee(g,t,"popup-blocked");try{g.focus()}catch{}return new dv(g)}function FR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const UR="__/auth/handler",WR="emulator/auth/handler",$R=encodeURIComponent("fac");async function hv(t,e,n,r,i,s){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ji,eventId:i};if(e instanceof tw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof Ml){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),d=u?`#${$R}=${encodeURIComponent(u)}`:"";return`${BR(t)}?${Nl(l).slice(1)}${d}`}function BR({config:t}){return t.emulator?yg(t,WR):`https://${t.authDomain}/${UR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="webStorageSupport";class zR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lw,this._completeRedirectFn=pR,this._overrideRedirectResult=dR}async _openPopup(e,n,r,i){var s;cr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await hv(e,n,r,Up(),i);return VR(e,o,wg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await hv(e,n,r,Up(),i);return GL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(cr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bR(e),r=new gR(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yf,{type:yf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[yf];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ER(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ZE()||HE()||_g()}}const HR=zR;var fv="@firebase/auth",pv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function KR(t){En(new sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:XE(t)},d=new oL(r,i,s,u);return mL(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),En(new sn("auth-internal",e=>{const n=ui(e.getProvider("auth").getImmediate());return(r=>new qR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(fv,pv,GR(t)),Ot(fv,pv,"esm2017")}/**
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
 */const QR=5*60,YR=IE("authIdTokenMaxAge")||QR;let mv=null;const ZR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>YR)return;const i=n==null?void 0:n.token;mv!==i&&(mv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mw(t=Dd()){const e=li(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pL(t,{popupRedirectResolver:HR,persistence:[nR,zL,lw]}),r=IE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=ZR(s.toString());VL(n,o,()=>o(n.currentUser)),ML(n,l=>o(l))}}const i=EE("auth");return i&&gL(n,`http://${i}`),n}function XR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}aL({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",XR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});KR("Browser");var JR="firebase",eC="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(JR,eC,"app");var gv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ji,gw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,E){function S(){}S.prototype=E.prototype,w.D=E.prototype,w.prototype=new S,w.prototype.constructor=w,w.C=function(L,b,j){for(var C=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)C[fe-2]=arguments[fe];return E.prototype[b].apply(L,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,E,S){S||(S=0);var L=Array(16);if(typeof E=="string")for(var b=0;16>b;++b)L[b]=E.charCodeAt(S++)|E.charCodeAt(S++)<<8|E.charCodeAt(S++)<<16|E.charCodeAt(S++)<<24;else for(b=0;16>b;++b)L[b]=E[S++]|E[S++]<<8|E[S++]<<16|E[S++]<<24;E=w.g[0],S=w.g[1],b=w.g[2];var j=w.g[3],C=E+(j^S&(b^j))+L[0]+3614090360&4294967295;E=S+(C<<7&4294967295|C>>>25),C=j+(b^E&(S^b))+L[1]+3905402710&4294967295,j=E+(C<<12&4294967295|C>>>20),C=b+(S^j&(E^S))+L[2]+606105819&4294967295,b=j+(C<<17&4294967295|C>>>15),C=S+(E^b&(j^E))+L[3]+3250441966&4294967295,S=b+(C<<22&4294967295|C>>>10),C=E+(j^S&(b^j))+L[4]+4118548399&4294967295,E=S+(C<<7&4294967295|C>>>25),C=j+(b^E&(S^b))+L[5]+1200080426&4294967295,j=E+(C<<12&4294967295|C>>>20),C=b+(S^j&(E^S))+L[6]+2821735955&4294967295,b=j+(C<<17&4294967295|C>>>15),C=S+(E^b&(j^E))+L[7]+4249261313&4294967295,S=b+(C<<22&4294967295|C>>>10),C=E+(j^S&(b^j))+L[8]+1770035416&4294967295,E=S+(C<<7&4294967295|C>>>25),C=j+(b^E&(S^b))+L[9]+2336552879&4294967295,j=E+(C<<12&4294967295|C>>>20),C=b+(S^j&(E^S))+L[10]+4294925233&4294967295,b=j+(C<<17&4294967295|C>>>15),C=S+(E^b&(j^E))+L[11]+2304563134&4294967295,S=b+(C<<22&4294967295|C>>>10),C=E+(j^S&(b^j))+L[12]+1804603682&4294967295,E=S+(C<<7&4294967295|C>>>25),C=j+(b^E&(S^b))+L[13]+4254626195&4294967295,j=E+(C<<12&4294967295|C>>>20),C=b+(S^j&(E^S))+L[14]+2792965006&4294967295,b=j+(C<<17&4294967295|C>>>15),C=S+(E^b&(j^E))+L[15]+1236535329&4294967295,S=b+(C<<22&4294967295|C>>>10),C=E+(b^j&(S^b))+L[1]+4129170786&4294967295,E=S+(C<<5&4294967295|C>>>27),C=j+(S^b&(E^S))+L[6]+3225465664&4294967295,j=E+(C<<9&4294967295|C>>>23),C=b+(E^S&(j^E))+L[11]+643717713&4294967295,b=j+(C<<14&4294967295|C>>>18),C=S+(j^E&(b^j))+L[0]+3921069994&4294967295,S=b+(C<<20&4294967295|C>>>12),C=E+(b^j&(S^b))+L[5]+3593408605&4294967295,E=S+(C<<5&4294967295|C>>>27),C=j+(S^b&(E^S))+L[10]+38016083&4294967295,j=E+(C<<9&4294967295|C>>>23),C=b+(E^S&(j^E))+L[15]+3634488961&4294967295,b=j+(C<<14&4294967295|C>>>18),C=S+(j^E&(b^j))+L[4]+3889429448&4294967295,S=b+(C<<20&4294967295|C>>>12),C=E+(b^j&(S^b))+L[9]+568446438&4294967295,E=S+(C<<5&4294967295|C>>>27),C=j+(S^b&(E^S))+L[14]+3275163606&4294967295,j=E+(C<<9&4294967295|C>>>23),C=b+(E^S&(j^E))+L[3]+4107603335&4294967295,b=j+(C<<14&4294967295|C>>>18),C=S+(j^E&(b^j))+L[8]+1163531501&4294967295,S=b+(C<<20&4294967295|C>>>12),C=E+(b^j&(S^b))+L[13]+2850285829&4294967295,E=S+(C<<5&4294967295|C>>>27),C=j+(S^b&(E^S))+L[2]+4243563512&4294967295,j=E+(C<<9&4294967295|C>>>23),C=b+(E^S&(j^E))+L[7]+1735328473&4294967295,b=j+(C<<14&4294967295|C>>>18),C=S+(j^E&(b^j))+L[12]+2368359562&4294967295,S=b+(C<<20&4294967295|C>>>12),C=E+(S^b^j)+L[5]+4294588738&4294967295,E=S+(C<<4&4294967295|C>>>28),C=j+(E^S^b)+L[8]+2272392833&4294967295,j=E+(C<<11&4294967295|C>>>21),C=b+(j^E^S)+L[11]+1839030562&4294967295,b=j+(C<<16&4294967295|C>>>16),C=S+(b^j^E)+L[14]+4259657740&4294967295,S=b+(C<<23&4294967295|C>>>9),C=E+(S^b^j)+L[1]+2763975236&4294967295,E=S+(C<<4&4294967295|C>>>28),C=j+(E^S^b)+L[4]+1272893353&4294967295,j=E+(C<<11&4294967295|C>>>21),C=b+(j^E^S)+L[7]+4139469664&4294967295,b=j+(C<<16&4294967295|C>>>16),C=S+(b^j^E)+L[10]+3200236656&4294967295,S=b+(C<<23&4294967295|C>>>9),C=E+(S^b^j)+L[13]+681279174&4294967295,E=S+(C<<4&4294967295|C>>>28),C=j+(E^S^b)+L[0]+3936430074&4294967295,j=E+(C<<11&4294967295|C>>>21),C=b+(j^E^S)+L[3]+3572445317&4294967295,b=j+(C<<16&4294967295|C>>>16),C=S+(b^j^E)+L[6]+76029189&4294967295,S=b+(C<<23&4294967295|C>>>9),C=E+(S^b^j)+L[9]+3654602809&4294967295,E=S+(C<<4&4294967295|C>>>28),C=j+(E^S^b)+L[12]+3873151461&4294967295,j=E+(C<<11&4294967295|C>>>21),C=b+(j^E^S)+L[15]+530742520&4294967295,b=j+(C<<16&4294967295|C>>>16),C=S+(b^j^E)+L[2]+3299628645&4294967295,S=b+(C<<23&4294967295|C>>>9),C=E+(b^(S|~j))+L[0]+4096336452&4294967295,E=S+(C<<6&4294967295|C>>>26),C=j+(S^(E|~b))+L[7]+1126891415&4294967295,j=E+(C<<10&4294967295|C>>>22),C=b+(E^(j|~S))+L[14]+2878612391&4294967295,b=j+(C<<15&4294967295|C>>>17),C=S+(j^(b|~E))+L[5]+4237533241&4294967295,S=b+(C<<21&4294967295|C>>>11),C=E+(b^(S|~j))+L[12]+1700485571&4294967295,E=S+(C<<6&4294967295|C>>>26),C=j+(S^(E|~b))+L[3]+2399980690&4294967295,j=E+(C<<10&4294967295|C>>>22),C=b+(E^(j|~S))+L[10]+4293915773&4294967295,b=j+(C<<15&4294967295|C>>>17),C=S+(j^(b|~E))+L[1]+2240044497&4294967295,S=b+(C<<21&4294967295|C>>>11),C=E+(b^(S|~j))+L[8]+1873313359&4294967295,E=S+(C<<6&4294967295|C>>>26),C=j+(S^(E|~b))+L[15]+4264355552&4294967295,j=E+(C<<10&4294967295|C>>>22),C=b+(E^(j|~S))+L[6]+2734768916&4294967295,b=j+(C<<15&4294967295|C>>>17),C=S+(j^(b|~E))+L[13]+1309151649&4294967295,S=b+(C<<21&4294967295|C>>>11),C=E+(b^(S|~j))+L[4]+4149444226&4294967295,E=S+(C<<6&4294967295|C>>>26),C=j+(S^(E|~b))+L[11]+3174756917&4294967295,j=E+(C<<10&4294967295|C>>>22),C=b+(E^(j|~S))+L[2]+718787259&4294967295,b=j+(C<<15&4294967295|C>>>17),C=S+(j^(b|~E))+L[9]+3951481745&4294967295,w.g[0]=w.g[0]+E&4294967295,w.g[1]=w.g[1]+(b+(C<<21&4294967295|C>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+j&4294967295}r.prototype.u=function(w,E){E===void 0&&(E=w.length);for(var S=E-this.blockSize,L=this.B,b=this.h,j=0;j<E;){if(b==0)for(;j<=S;)i(this,w,j),j+=this.blockSize;if(typeof w=="string"){for(;j<E;)if(L[b++]=w.charCodeAt(j++),b==this.blockSize){i(this,L),b=0;break}}else for(;j<E;)if(L[b++]=w[j++],b==this.blockSize){i(this,L),b=0;break}}this.h=b,this.o+=E},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var E=1;E<w.length-8;++E)w[E]=0;var S=8*this.o;for(E=w.length-8;E<w.length;++E)w[E]=S&255,S/=256;for(this.u(w),w=Array(16),E=S=0;4>E;++E)for(var L=0;32>L;L+=8)w[S++]=this.g[E]>>>L&255;return w};function s(w,E){var S=l;return Object.prototype.hasOwnProperty.call(S,w)?S[w]:S[w]=E(w)}function o(w,E){this.h=E;for(var S=[],L=!0,b=w.length-1;0<=b;b--){var j=w[b]|0;L&&j==E||(S[b]=j,L=!1)}this.g=S}var l={};function u(w){return-128<=w&&128>w?s(w,function(E){return new o([E|0],0>E?-1:0)}):new o([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return A(d(-w));for(var E=[],S=1,L=0;w>=S;L++)E[L]=w/S|0,S*=4294967296;return new o(E,0)}function f(w,E){if(w.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(w.charAt(0)=="-")return A(f(w.substring(1),E));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=d(Math.pow(E,8)),L=g,b=0;b<w.length;b+=8){var j=Math.min(8,w.length-b),C=parseInt(w.substring(b,b+j),E);8>j?(j=d(Math.pow(E,j)),L=L.j(j).add(d(C))):(L=L.j(S),L=L.add(d(C)))}return L}var g=u(0),y=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-A(this).m();for(var w=0,E=1,S=0;S<this.g.length;S++){var L=this.i(S);w+=(0<=L?L:4294967296+L)*E,E*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(x(this))return"0";if(R(this))return"-"+A(this).toString(w);for(var E=d(Math.pow(w,6)),S=this,L="";;){var b=P(S,E).g;S=_(S,b.j(E));var j=((0<S.g.length?S.g[0]:S.h)>>>0).toString(w);if(S=b,x(S))return j+L;for(;6>j.length;)j="0"+j;L=j+L}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function x(w){if(w.h!=0)return!1;for(var E=0;E<w.g.length;E++)if(w.g[E]!=0)return!1;return!0}function R(w){return w.h==-1}t.l=function(w){return w=_(this,w),R(w)?-1:x(w)?0:1};function A(w){for(var E=w.g.length,S=[],L=0;L<E;L++)S[L]=~w.g[L];return new o(S,~w.h).add(y)}t.abs=function(){return R(this)?A(this):this},t.add=function(w){for(var E=Math.max(this.g.length,w.g.length),S=[],L=0,b=0;b<=E;b++){var j=L+(this.i(b)&65535)+(w.i(b)&65535),C=(j>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);L=C>>>16,j&=65535,C&=65535,S[b]=C<<16|j}return new o(S,S[S.length-1]&-2147483648?-1:0)};function _(w,E){return w.add(A(E))}t.j=function(w){if(x(this)||x(w))return g;if(R(this))return R(w)?A(this).j(A(w)):A(A(this).j(w));if(R(w))return A(this.j(A(w)));if(0>this.l(k)&&0>w.l(k))return d(this.m()*w.m());for(var E=this.g.length+w.g.length,S=[],L=0;L<2*E;L++)S[L]=0;for(L=0;L<this.g.length;L++)for(var b=0;b<w.g.length;b++){var j=this.i(L)>>>16,C=this.i(L)&65535,fe=w.i(b)>>>16,Ge=w.i(b)&65535;S[2*L+2*b]+=C*Ge,v(S,2*L+2*b),S[2*L+2*b+1]+=j*Ge,v(S,2*L+2*b+1),S[2*L+2*b+1]+=C*fe,v(S,2*L+2*b+1),S[2*L+2*b+2]+=j*fe,v(S,2*L+2*b+2)}for(L=0;L<E;L++)S[L]=S[2*L+1]<<16|S[2*L];for(L=E;L<2*E;L++)S[L]=0;return new o(S,0)};function v(w,E){for(;(w[E]&65535)!=w[E];)w[E+1]+=w[E]>>>16,w[E]&=65535,E++}function I(w,E){this.g=w,this.h=E}function P(w,E){if(x(E))throw Error("division by zero");if(x(w))return new I(g,g);if(R(w))return E=P(A(w),E),new I(A(E.g),A(E.h));if(R(E))return E=P(w,A(E)),new I(A(E.g),E.h);if(30<w.g.length){if(R(w)||R(E))throw Error("slowDivide_ only works with positive integers.");for(var S=y,L=E;0>=L.l(w);)S=N(S),L=N(L);var b=V(S,1),j=V(L,1);for(L=V(L,2),S=V(S,2);!x(L);){var C=j.add(L);0>=C.l(w)&&(b=b.add(S),j=C),L=V(L,1),S=V(S,1)}return E=_(w,b.j(E)),new I(b,E)}for(b=g;0<=w.l(E);){for(S=Math.max(1,Math.floor(w.m()/E.m())),L=Math.ceil(Math.log(S)/Math.LN2),L=48>=L?1:Math.pow(2,L-48),j=d(S),C=j.j(E);R(C)||0<C.l(w);)S-=L,j=d(S),C=j.j(E);x(j)&&(j=y),b=b.add(j),w=_(w,C)}return new I(b,w)}t.A=function(w){return P(this,w).h},t.and=function(w){for(var E=Math.max(this.g.length,w.g.length),S=[],L=0;L<E;L++)S[L]=this.i(L)&w.i(L);return new o(S,this.h&w.h)},t.or=function(w){for(var E=Math.max(this.g.length,w.g.length),S=[],L=0;L<E;L++)S[L]=this.i(L)|w.i(L);return new o(S,this.h|w.h)},t.xor=function(w){for(var E=Math.max(this.g.length,w.g.length),S=[],L=0;L<E;L++)S[L]=this.i(L)^w.i(L);return new o(S,this.h^w.h)};function N(w){for(var E=w.g.length+1,S=[],L=0;L<E;L++)S[L]=w.i(L)<<1|w.i(L-1)>>>31;return new o(S,w.h)}function V(w,E){var S=E>>5;E%=32;for(var L=w.g.length-S,b=[],j=0;j<L;j++)b[j]=0<E?w.i(j+S)>>>E|w.i(j+S+1)<<32-E:w.i(j+S);return new o(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,gw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,ji=o}).apply(typeof gv<"u"?gv:typeof self<"u"?self:typeof window<"u"?window:{});var Lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yw,Sa,vw,ic,Bp,_w,kw,Ew;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,m){return a==Array.prototype||a==Object.prototype||(a[h]=m.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Lu=="object"&&Lu];for(var h=0;h<a.length;++h){var m=a[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var m=r;a=a.split(".");for(var T=0;T<a.length-1;T++){var O=a[T];if(!(O in m))break e;m=m[O]}a=a[a.length-1],T=m[a],h=h(T),h!=T&&h!=null&&e(m,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var m=0,T=!1,O={next:function(){if(!T&&m<a.length){var U=m++;return{value:h(U,a[U]),done:!1}}return T=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,m){return a.call.apply(a.bind,arguments)}function g(a,h,m){if(!a)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,T),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function y(a,h,m){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,y.apply(null,arguments)}function k(a,h){var m=Array.prototype.slice.call(arguments,1);return function(){var T=m.slice();return T.push.apply(T,arguments),a.apply(this,T)}}function x(a,h){function m(){}m.prototype=h.prototype,a.aa=h.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(T,O,U){for(var H=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)H[ve-2]=arguments[ve];return h.prototype[O].apply(T,H)}}function R(a){const h=a.length;if(0<h){const m=Array(h);for(let T=0;T<h;T++)m[T]=a[T];return m}return[]}function A(a,h){for(let m=1;m<arguments.length;m++){const T=arguments[m];if(u(T)){const O=a.length||0,U=T.length||0;a.length=O+U;for(let H=0;H<U;H++)a[O+H]=T[H]}else a.push(T)}}class _{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function P(a){return P[" "](a),a}P[" "]=function(){};var N=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function V(a,h,m){for(const T in a)h.call(m,a[T],T,a)}function w(a,h){for(const m in a)h.call(void 0,a[m],m,a)}function E(a){const h={};for(const m in a)h[m]=a[m];return h}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function L(a,h){let m,T;for(let O=1;O<arguments.length;O++){T=arguments[O];for(m in T)a[m]=T[m];for(let U=0;U<S.length;U++)m=S[U],Object.prototype.hasOwnProperty.call(T,m)&&(a[m]=T[m])}}function b(a){var h=1;a=a.split(":");const m=[];for(;0<h&&a.length;)m.push(a.shift()),h--;return a.length&&m.push(a.join(":")),m}function j(a){l.setTimeout(()=>{throw a},0)}function C(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class fe{constructor(){this.h=this.g=null}add(h,m){const T=Ge.get();T.set(h,m),this.h?this.h.next=T:this.g=T,this.h=T}}var Ge=new _(()=>new Re,a=>a.reset());class Re{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let we,z=!1,Q=new fe,F=()=>{const a=l.Promise.resolve(void 0);we=()=>{a.then(J)}};var J=()=>{for(var a;a=C();){try{a.h.call(a.g)}catch(m){j(m)}var h=Ge;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function Z(){this.s=this.s,this.C=this.C}Z.prototype.s=!1,Z.prototype.ma=function(){this.s||(this.s=!0,this.N())},Z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var Ce=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,h),l.removeEventListener("test",m,h)}catch{}return a}();function me(a,h){if(ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,T=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(N){e:{try{P(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else m=="mouseover"?h=a.fromElement:m=="mouseout"&&(h=a.toElement);this.relatedTarget=h,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:lt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&me.aa.h.call(this)}}x(me,ie);var lt={2:"touch",3:"pen",4:"mouse"};me.prototype.h=function(){me.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var At="closure_listenable_"+(1e6*Math.random()|0),hi=0;function $n(a,h,m,T,O){this.listener=a,this.proxy=null,this.src=h,this.type=m,this.capture=!!T,this.ha=O,this.key=++hi,this.da=this.fa=!1}function mr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Bn(a){this.src=a,this.g={},this.h=0}Bn.prototype.add=function(a,h,m,T,O){var U=a.toString();a=this.g[U],a||(a=this.g[U]=[],this.h++);var H=mh(a,h,T,O);return-1<H?(h=a[H],m||(h.fa=!1)):(h=new $n(h,this.src,U,!!T,O),h.fa=m,a.push(h)),h};function Qt(a,h){var m=h.type;if(m in a.g){var T=a.g[m],O=Array.prototype.indexOf.call(T,h,void 0),U;(U=0<=O)&&Array.prototype.splice.call(T,O,1),U&&(mr(h),a.g[m].length==0&&(delete a.g[m],a.h--))}}function mh(a,h,m,T){for(var O=0;O<a.length;++O){var U=a[O];if(!U.da&&U.listener==h&&U.capture==!!m&&U.ha==T)return O}return-1}var gh="closure_lm_"+(1e6*Math.random()|0),yh={};function I0(a,h,m,T,O){if(Array.isArray(h)){for(var U=0;U<h.length;U++)I0(a,h[U],m,T,O);return null}return m=A0(m),a&&a[At]?a.K(h,m,d(T)?!!T.capture:!1,O):XT(a,h,m,!1,T,O)}function XT(a,h,m,T,O,U){if(!h)throw Error("Invalid event type");var H=d(O)?!!O.capture:!!O,ve=_h(a);if(ve||(a[gh]=ve=new Bn(a)),m=ve.add(h,m,T,H,U),m.proxy)return m;if(T=JT(),m.proxy=T,T.src=a,T.listener=m,a.addEventListener)Ce||(O=H),O===void 0&&(O=!1),a.addEventListener(h.toString(),T,O);else if(a.attachEvent)a.attachEvent(S0(h.toString()),T);else if(a.addListener&&a.removeListener)a.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return m}function JT(){function a(m){return h.call(a.src,a.listener,m)}const h=eI;return a}function x0(a,h,m,T,O){if(Array.isArray(h))for(var U=0;U<h.length;U++)x0(a,h[U],m,T,O);else T=d(T)?!!T.capture:!!T,m=A0(m),a&&a[At]?(a=a.i,h=String(h).toString(),h in a.g&&(U=a.g[h],m=mh(U,m,T,O),-1<m&&(mr(U[m]),Array.prototype.splice.call(U,m,1),U.length==0&&(delete a.g[h],a.h--)))):a&&(a=_h(a))&&(h=a.g[h.toString()],a=-1,h&&(a=mh(h,m,T,O)),(m=-1<a?h[a]:null)&&vh(m))}function vh(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[At])Qt(h.i,a);else{var m=a.type,T=a.proxy;h.removeEventListener?h.removeEventListener(m,T,a.capture):h.detachEvent?h.detachEvent(S0(m),T):h.addListener&&h.removeListener&&h.removeListener(T),(m=_h(h))?(Qt(m,a),m.h==0&&(m.src=null,h[gh]=null)):mr(a)}}}function S0(a){return a in yh?yh[a]:yh[a]="on"+a}function eI(a,h){if(a.da)a=!0;else{h=new me(h,this);var m=a.listener,T=a.ha||a.src;a.fa&&vh(a),a=m.call(T,h)}return a}function _h(a){return a=a[gh],a instanceof Bn?a:null}var kh="__closure_events_fn_"+(1e9*Math.random()>>>0);function A0(a){return typeof a=="function"?a:(a[kh]||(a[kh]=function(h){return a.handleEvent(h)}),a[kh])}function ut(){Z.call(this),this.i=new Bn(this),this.M=this,this.F=null}x(ut,Z),ut.prototype[At]=!0,ut.prototype.removeEventListener=function(a,h,m,T){x0(this,a,h,m,T)};function kt(a,h){var m,T=a.F;if(T)for(m=[];T;T=T.F)m.push(T);if(a=a.M,T=h.type||h,typeof h=="string")h=new ie(h,a);else if(h instanceof ie)h.target=h.target||a;else{var O=h;h=new ie(T,a),L(h,O)}if(O=!0,m)for(var U=m.length-1;0<=U;U--){var H=h.g=m[U];O=Kl(H,T,!0,h)&&O}if(H=h.g=a,O=Kl(H,T,!0,h)&&O,O=Kl(H,T,!1,h)&&O,m)for(U=0;U<m.length;U++)H=h.g=m[U],O=Kl(H,T,!1,h)&&O}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var m=a.g[h],T=0;T<m.length;T++)mr(m[T]);delete a.g[h],a.h--}}this.F=null},ut.prototype.K=function(a,h,m,T){return this.i.add(String(a),h,!1,m,T)},ut.prototype.L=function(a,h,m,T){return this.i.add(String(a),h,!0,m,T)};function Kl(a,h,m,T){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,U=0;U<h.length;++U){var H=h[U];if(H&&!H.da&&H.capture==m){var ve=H.listener,et=H.ha||H.src;H.fa&&Qt(a.i,H),O=ve.call(et,T)!==!1&&O}}return O&&!T.defaultPrevented}function L0(a,h,m){if(typeof a=="function")m&&(a=y(a,m));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function R0(a){a.g=L0(()=>{a.g=null,a.i&&(a.i=!1,R0(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class tI extends Z{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:R0(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ko(a){Z.call(this),this.h=a,this.g={}}x(Ko,Z);var C0=[];function P0(a){V(a.g,function(h,m){this.g.hasOwnProperty(m)&&vh(h)},a),a.g={}}Ko.prototype.N=function(){Ko.aa.N.call(this),P0(this)},Ko.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Eh=l.JSON.stringify,nI=l.JSON.parse,rI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function wh(){}wh.prototype.h=null;function b0(a){return a.h||(a.h=a.i())}function j0(){}var Qo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Th(){ie.call(this,"d")}x(Th,ie);function Ih(){ie.call(this,"c")}x(Ih,ie);var fi={},N0=null;function Ql(){return N0=N0||new ut}fi.La="serverreachability";function D0(a){ie.call(this,fi.La,a)}x(D0,ie);function Yo(a){const h=Ql();kt(h,new D0(h))}fi.STAT_EVENT="statevent";function O0(a,h){ie.call(this,fi.STAT_EVENT,a),this.stat=h}x(O0,ie);function Et(a){const h=Ql();kt(h,new O0(h,a))}fi.Ma="timingevent";function M0(a,h){ie.call(this,fi.Ma,a),this.size=h}x(M0,ie);function Zo(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Xo(){this.g=!0}Xo.prototype.xa=function(){this.g=!1};function iI(a,h,m,T,O,U){a.info(function(){if(a.g)if(U)for(var H="",ve=U.split("&"),et=0;et<ve.length;et++){var de=ve[et].split("=");if(1<de.length){var ct=de[0];de=de[1];var dt=ct.split("_");H=2<=dt.length&&dt[1]=="type"?H+(ct+"="+de+"&"):H+(ct+"=redacted&")}}else H=null;else H=U;return"XMLHTTP REQ ("+T+") [attempt "+O+"]: "+h+`
`+m+`
`+H})}function sI(a,h,m,T,O,U,H){a.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+O+"]: "+h+`
`+m+`
`+U+" "+H})}function Rs(a,h,m,T){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+aI(a,m)+(T?" "+T:"")})}function oI(a,h){a.info(function(){return"TIMEOUT: "+h})}Xo.prototype.info=function(){};function aI(a,h){if(!a.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var T=m[a];if(!(2>T.length)){var O=T[1];if(Array.isArray(O)&&!(1>O.length)){var U=O[0];if(U!="noop"&&U!="stop"&&U!="close")for(var H=1;H<O.length;H++)O[H]=""}}}}return Eh(m)}catch{return h}}var Yl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},V0={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xh;function Zl(){}x(Zl,wh),Zl.prototype.g=function(){return new XMLHttpRequest},Zl.prototype.i=function(){return{}},xh=new Zl;function gr(a,h,m,T){this.j=a,this.i=h,this.l=m,this.R=T||1,this.U=new Ko(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new F0}function F0(){this.i=null,this.g="",this.h=!1}var U0={},Sh={};function Ah(a,h,m){a.L=1,a.v=tu(zn(h)),a.m=m,a.P=!0,W0(a,null)}function W0(a,h){a.F=Date.now(),Xl(a),a.A=zn(a.v);var m=a.A,T=a.R;Array.isArray(T)||(T=[String(T)]),t1(m.i,"t",T),a.C=0,m=a.j.J,a.h=new F0,a.g=_1(a.j,m?h:null,!a.m),0<a.O&&(a.M=new tI(y(a.Y,a,a.g),a.O)),h=a.U,m=a.g,T=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(C0[0]=O.toString()),O=C0);for(var U=0;U<O.length;U++){var H=I0(m,O[U],T||h.handleEvent,!1,h.h||h);if(!H)break;h.g[H.key]=H}h=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Yo(),iI(a.i,a.u,a.A,a.l,a.R,a.m)}gr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Hn(a)==3?h.j():this.Y(a)},gr.prototype.Y=function(a){try{if(a==this.g)e:{const dt=Hn(this.g);var h=this.g.Ba();const bs=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||l1(this.g)))){this.J||dt!=4||h==7||(h==8||0>=bs?Yo(3):Yo(2)),Lh(this);var m=this.g.Z();this.X=m;t:if($0(this)){var T=l1(this.g);a="";var O=T.length,U=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pi(this),Jo(this);var H="";break t}this.h.i=new l.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(T[h],{stream:!(U&&h==O-1)});T.length=0,this.h.g+=a,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=m==200,sI(this.i,this.u,this.A,this.l,this.R,dt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,et=this.g;if((ve=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ve)){var de=ve;break t}}de=null}if(m=de)Rs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rh(this,m);else{this.o=!1,this.s=3,Et(12),pi(this),Jo(this);break e}}if(this.P){m=!0;let ln;for(;!this.J&&this.C<H.length;)if(ln=lI(this,H),ln==Sh){dt==4&&(this.s=4,Et(14),m=!1),Rs(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==U0){this.s=4,Et(15),Rs(this.i,this.l,H,"[Invalid Chunk]"),m=!1;break}else Rs(this.i,this.l,ln,null),Rh(this,ln);if($0(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||H.length!=0||this.h.h||(this.s=1,Et(16),m=!1),this.o=this.o&&m,!m)Rs(this.i,this.l,H,"[Invalid Chunked Response]"),pi(this),Jo(this);else if(0<H.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Dh(ct),ct.M=!0,Et(11))}}else Rs(this.i,this.l,H,null),Rh(this,H);dt==4&&pi(this),this.o&&!this.J&&(dt==4?m1(this.j,this):(this.o=!1,Xl(this)))}else xI(this.g),m==400&&0<H.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),pi(this),Jo(this)}}}catch{}finally{}};function $0(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function lI(a,h){var m=a.C,T=h.indexOf(`
`,m);return T==-1?Sh:(m=Number(h.substring(m,T)),isNaN(m)?U0:(T+=1,T+m>h.length?Sh:(h=h.slice(T,T+m),a.C=T+m,h)))}gr.prototype.cancel=function(){this.J=!0,pi(this)};function Xl(a){a.S=Date.now()+a.I,B0(a,a.I)}function B0(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Zo(y(a.ba,a),h)}function Lh(a){a.B&&(l.clearTimeout(a.B),a.B=null)}gr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(oI(this.i,this.A),this.L!=2&&(Yo(),Et(17)),pi(this),this.s=2,Jo(this)):B0(this,this.S-a)};function Jo(a){a.j.G==0||a.J||m1(a.j,a)}function pi(a){Lh(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,P0(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Rh(a,h){try{var m=a.j;if(m.G!=0&&(m.g==a||Ch(m.h,a))){if(!a.K&&Ch(m.h,a)&&m.G==3){try{var T=m.Da.g.parse(h)}catch{T=null}if(Array.isArray(T)&&T.length==3){var O=T;if(O[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)au(m),su(m);else break e;Nh(m),Et(18)}}else m.za=O[1],0<m.za-m.T&&37500>O[2]&&m.F&&m.v==0&&!m.C&&(m.C=Zo(y(m.Za,m),6e3));if(1>=q0(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else gi(m,11)}else if((a.K||m.g==a)&&au(m),!v(h))for(O=m.Da.g.parse(h),h=0;h<O.length;h++){let de=O[h];if(m.T=de[0],de=de[1],m.G==2)if(de[0]=="c"){m.K=de[1],m.ia=de[2];const ct=de[3];ct!=null&&(m.la=ct,m.j.info("VER="+m.la));const dt=de[4];dt!=null&&(m.Aa=dt,m.j.info("SVER="+m.Aa));const bs=de[5];bs!=null&&typeof bs=="number"&&0<bs&&(T=1.5*bs,m.L=T,m.j.info("backChannelRequestTimeoutMs_="+T)),T=m;const ln=a.g;if(ln){const uu=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(uu){var U=T.h;U.g||uu.indexOf("spdy")==-1&&uu.indexOf("quic")==-1&&uu.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Ph(U,U.h),U.h=null))}if(T.D){const Oh=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Oh&&(T.ya=Oh,Te(T.I,T.D,Oh))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),T=m;var H=a;if(T.qa=v1(T,T.J?T.ia:null,T.W),H.K){G0(T.h,H);var ve=H,et=T.L;et&&(ve.I=et),ve.B&&(Lh(ve),Xl(ve)),T.g=H}else f1(T);0<m.i.length&&ou(m)}else de[0]!="stop"&&de[0]!="close"||gi(m,7);else m.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?gi(m,7):jh(m):de[0]!="noop"&&m.l&&m.l.ta(de),m.v=0)}}Yo(4)}catch{}}var uI=class{constructor(a,h){this.g=a,this.map=h}};function z0(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function H0(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function q0(a){return a.h?1:a.g?a.g.size:0}function Ch(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ph(a,h){a.g?a.g.add(h):a.h=h}function G0(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}z0.prototype.cancel=function(){if(this.i=K0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function K0(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const m of a.g.values())h=h.concat(m.D);return h}return R(a.i)}function cI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],m=a.length,T=0;T<m;T++)h.push(a[T]);return h}h=[],m=0;for(T in a)h[m++]=a[T];return h}function dI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var m=0;m<a;m++)h.push(m);return h}h=[],m=0;for(const T in a)h[m++]=T;return h}}}function Q0(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var m=dI(a),T=cI(a),O=T.length,U=0;U<O;U++)h.call(void 0,T[U],m&&m[U],a)}var Y0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hI(a,h){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var T=a[m].indexOf("="),O=null;if(0<=T){var U=a[m].substring(0,T);O=a[m].substring(T+1)}else U=a[m];h(U,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function mi(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof mi){this.h=a.h,Jl(this,a.j),this.o=a.o,this.g=a.g,eu(this,a.s),this.l=a.l;var h=a.i,m=new na;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),Z0(this,m),this.m=a.m}else a&&(h=String(a).match(Y0))?(this.h=!1,Jl(this,h[1]||"",!0),this.o=ea(h[2]||""),this.g=ea(h[3]||"",!0),eu(this,h[4]),this.l=ea(h[5]||"",!0),Z0(this,h[6]||"",!0),this.m=ea(h[7]||"")):(this.h=!1,this.i=new na(null,this.h))}mi.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ta(h,X0,!0),":");var m=this.g;return(m||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ta(h,X0,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(ta(m,m.charAt(0)=="/"?mI:pI,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",ta(m,yI)),a.join("")};function zn(a){return new mi(a)}function Jl(a,h,m){a.j=m?ea(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function eu(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Z0(a,h,m){h instanceof na?(a.i=h,vI(a.i,a.h)):(m||(h=ta(h,gI)),a.i=new na(h,a.h))}function Te(a,h,m){a.i.set(h,m)}function tu(a){return Te(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ea(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ta(a,h,m){return typeof a=="string"?(a=encodeURI(a).replace(h,fI),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function fI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var X0=/[#\/\?@]/g,pI=/[#\?:]/g,mI=/[#\?]/g,gI=/[#\?@]/g,yI=/#/g;function na(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function yr(a){a.g||(a.g=new Map,a.h=0,a.i&&hI(a.i,function(h,m){a.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=na.prototype,t.add=function(a,h){yr(this),this.i=null,a=Cs(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(h),this.h+=1,this};function J0(a,h){yr(a),h=Cs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function e1(a,h){return yr(a),h=Cs(a,h),a.g.has(h)}t.forEach=function(a,h){yr(this),this.g.forEach(function(m,T){m.forEach(function(O){a.call(h,O,T,this)},this)},this)},t.na=function(){yr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let T=0;T<h.length;T++){const O=a[T];for(let U=0;U<O.length;U++)m.push(h[T])}return m},t.V=function(a){yr(this);let h=[];if(typeof a=="string")e1(this,a)&&(h=h.concat(this.g.get(Cs(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)h=h.concat(a[m])}return h},t.set=function(a,h){return yr(this),this.i=null,a=Cs(this,a),e1(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function t1(a,h,m){J0(a,h),0<m.length&&(a.i=null,a.g.set(Cs(a,h),R(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var T=h[m];const U=encodeURIComponent(String(T)),H=this.V(T);for(T=0;T<H.length;T++){var O=U;H[T]!==""&&(O+="="+encodeURIComponent(String(H[T]))),a.push(O)}}return this.i=a.join("&")};function Cs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function vI(a,h){h&&!a.j&&(yr(a),a.i=null,a.g.forEach(function(m,T){var O=T.toLowerCase();T!=O&&(J0(this,T),t1(this,O,m))},a)),a.j=h}function _I(a,h){const m=new Xo;if(l.Image){const T=new Image;T.onload=k(vr,m,"TestLoadImage: loaded",!0,h,T),T.onerror=k(vr,m,"TestLoadImage: error",!1,h,T),T.onabort=k(vr,m,"TestLoadImage: abort",!1,h,T),T.ontimeout=k(vr,m,"TestLoadImage: timeout",!1,h,T),l.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=a}else h(!1)}function kI(a,h){const m=new Xo,T=new AbortController,O=setTimeout(()=>{T.abort(),vr(m,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:T.signal}).then(U=>{clearTimeout(O),U.ok?vr(m,"TestPingServer: ok",!0,h):vr(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),vr(m,"TestPingServer: error",!1,h)})}function vr(a,h,m,T,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),T(m)}catch{}}function EI(){this.g=new rI}function wI(a,h,m){const T=m||"";try{Q0(a,function(O,U){let H=O;d(O)&&(H=Eh(O)),h.push(T+U+"="+encodeURIComponent(H))})}catch(O){throw h.push(T+"type="+encodeURIComponent("_badmap")),O}}function nu(a){this.l=a.Ub||null,this.j=a.eb||!1}x(nu,wh),nu.prototype.g=function(){return new ru(this.l,this.j)},nu.prototype.i=function(a){return function(){return a}}({});function ru(a,h){ut.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(ru,ut),t=ru.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ia(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ra(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ia(this)),this.g&&(this.readyState=3,ia(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;n1(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function n1(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ra(this):ia(this),this.readyState==3&&n1(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ra(this))},t.Qa=function(a){this.g&&(this.response=a,ra(this))},t.ga=function(){this.g&&ra(this)};function ra(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ia(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=h.next();return a.join(`\r
`)};function ia(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ru.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function r1(a){let h="";return V(a,function(m,T){h+=T,h+=":",h+=m,h+=`\r
`}),h}function bh(a,h,m){e:{for(T in m){var T=!1;break e}T=!0}T||(m=r1(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):Te(a,h,m))}function Me(a){ut.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Me,ut);var TI=/^https?$/i,II=["POST","PUT"];t=Me.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,m,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xh.g(),this.v=this.o?b0(this.o):b0(xh),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(U){i1(this,U);return}if(a=m||"",m=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var O in T)m.set(O,T[O]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const U of T.keys())m.set(U,T.get(U));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(m.keys()).find(U=>U.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(II,h,void 0))||T||O||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,H]of m)this.g.setRequestHeader(U,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{a1(this),this.u=!0,this.g.send(a),this.u=!1}catch(U){i1(this,U)}};function i1(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,s1(a),iu(a)}function s1(a){a.A||(a.A=!0,kt(a,"complete"),kt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,kt(this,"complete"),kt(this,"abort"),iu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),iu(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?o1(this):this.bb())},t.bb=function(){o1(this)};function o1(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Hn(a)!=4||a.Z()!=2)){if(a.u&&Hn(a)==4)L0(a.Ea,0,a);else if(kt(a,"readystatechange"),Hn(a)==4){a.h=!1;try{const H=a.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var T;if(T=H===0){var O=String(a.D).match(Y0)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),T=!TI.test(O?O.toLowerCase():"")}m=T}if(m)kt(a,"complete"),kt(a,"success");else{a.m=6;try{var U=2<Hn(a)?a.g.statusText:""}catch{U=""}a.l=U+" ["+a.Z()+"]",s1(a)}}finally{iu(a)}}}}function iu(a,h){if(a.g){a1(a);const m=a.g,T=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||kt(a,"ready");try{m.onreadystatechange=T}catch{}}}function a1(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Hn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),nI(h)}};function l1(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function xI(a){const h={};a=(a.g&&2<=Hn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<a.length;T++){if(v(a[T]))continue;var m=b(a[T]);const O=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const U=h[O]||[];h[O]=U,U.push(m)}w(h,function(T){return T.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sa(a,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||h}function u1(a){this.Aa=0,this.i=[],this.j=new Xo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sa("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sa("baseRetryDelayMs",5e3,a),this.cb=sa("retryDelaySeedMs",1e4,a),this.Wa=sa("forwardChannelMaxRetries",2,a),this.wa=sa("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new z0(a&&a.concurrentRequestLimit),this.Da=new EI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=u1.prototype,t.la=8,t.G=1,t.connect=function(a,h,m,T){Et(0),this.W=a,this.H=h||{},m&&T!==void 0&&(this.H.OSID=m,this.H.OAID=T),this.F=this.X,this.I=v1(this,null,this.W),ou(this)};function jh(a){if(c1(a),a.G==3){var h=a.U++,m=zn(a.I);if(Te(m,"SID",a.K),Te(m,"RID",h),Te(m,"TYPE","terminate"),oa(a,m),h=new gr(a,a.j,h),h.L=2,h.v=tu(zn(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=h.v,m=!0),m||(h.g=_1(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Xl(h)}y1(a)}function su(a){a.g&&(Dh(a),a.g.cancel(),a.g=null)}function c1(a){su(a),a.u&&(l.clearTimeout(a.u),a.u=null),au(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ou(a){if(!H0(a.h)&&!a.s){a.s=!0;var h=a.Ga;we||F(),z||(we(),z=!0),Q.add(h,a),a.B=0}}function SI(a,h){return q0(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Zo(y(a.Ga,a,h),g1(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new gr(this,this.j,a);let U=this.o;if(this.S&&(U?(U=E(U),L(U,this.S)):U=this.S),this.m!==null||this.O||(O.H=U,U=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var T=this.i[m];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(h+=T,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=h1(this,O,h),m=zn(this.I),Te(m,"RID",a),Te(m,"CVER",22),this.D&&Te(m,"X-HTTP-Session-Id",this.D),oa(this,m),U&&(this.O?h="headers="+encodeURIComponent(String(r1(U)))+"&"+h:this.m&&bh(m,this.m,U)),Ph(this.h,O),this.Ua&&Te(m,"TYPE","init"),this.P?(Te(m,"$req",h),Te(m,"SID","null"),O.T=!0,Ah(O,m,null)):Ah(O,m,h),this.G=2}}else this.G==3&&(a?d1(this,a):this.i.length==0||H0(this.h)||d1(this))};function d1(a,h){var m;h?m=h.l:m=a.U++;const T=zn(a.I);Te(T,"SID",a.K),Te(T,"RID",m),Te(T,"AID",a.T),oa(a,T),a.m&&a.o&&bh(T,a.m,a.o),m=new gr(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),h&&(a.i=h.D.concat(a.i)),h=h1(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ph(a.h,m),Ah(m,T,h)}function oa(a,h){a.H&&V(a.H,function(m,T){Te(h,T,m)}),a.l&&Q0({},function(m,T){Te(h,T,m)})}function h1(a,h,m){m=Math.min(a.i.length,m);var T=a.l?y(a.l.Na,a.l,a):null;e:{var O=a.i;let U=-1;for(;;){const H=["count="+m];U==-1?0<m?(U=O[0].g,H.push("ofs="+U)):U=0:H.push("ofs="+U);let ve=!0;for(let et=0;et<m;et++){let de=O[et].g;const ct=O[et].map;if(de-=U,0>de)U=Math.max(0,O[et].g-100),ve=!1;else try{wI(ct,H,"req"+de+"_")}catch{T&&T(ct)}}if(ve){T=H.join("&");break e}}}return a=a.i.splice(0,m),h.D=a,T}function f1(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;we||F(),z||(we(),z=!0),Q.add(h,a),a.v=0}}function Nh(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Zo(y(a.Fa,a),g1(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,p1(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Zo(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),su(this),p1(this))};function Dh(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function p1(a){a.g=new gr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=zn(a.qa);Te(h,"RID","rpc"),Te(h,"SID",a.K),Te(h,"AID",a.T),Te(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Te(h,"TO",a.ja),Te(h,"TYPE","xmlhttp"),oa(a,h),a.m&&a.o&&bh(h,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=tu(zn(h)),m.m=null,m.P=!0,W0(m,a)}t.Za=function(){this.C!=null&&(this.C=null,su(this),Nh(this),Et(19))};function au(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function m1(a,h){var m=null;if(a.g==h){au(a),Dh(a),a.g=null;var T=2}else if(Ch(a.h,h))m=h.D,G0(a.h,h),T=1;else return;if(a.G!=0){if(h.o)if(T==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;T=Ql(),kt(T,new M0(T,m)),ou(a)}else f1(a);else if(O=h.s,O==3||O==0&&0<h.X||!(T==1&&SI(a,h)||T==2&&Nh(a)))switch(m&&0<m.length&&(h=a.h,h.i=h.i.concat(m)),O){case 1:gi(a,5);break;case 4:gi(a,10);break;case 3:gi(a,6);break;default:gi(a,2)}}}function g1(a,h){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*h}function gi(a,h){if(a.j.info("Error code "+h),h==2){var m=y(a.fb,a),T=a.Xa;const O=!T;T=new mi(T||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Jl(T,"https"),tu(T),O?_I(T.toString(),m):kI(T.toString(),m)}else Et(2);a.G=0,a.l&&a.l.sa(h),y1(a),c1(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function y1(a){if(a.G=0,a.ka=[],a.l){const h=K0(a.h);(h.length!=0||a.i.length!=0)&&(A(a.ka,h),A(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function v1(a,h,m){var T=m instanceof mi?zn(m):new mi(m);if(T.g!="")h&&(T.g=h+"."+T.g),eu(T,T.s);else{var O=l.location;T=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var U=new mi(null);T&&Jl(U,T),h&&(U.g=h),O&&eu(U,O),m&&(U.l=m),T=U}return m=a.D,h=a.ya,m&&h&&Te(T,m,h),Te(T,"VER",a.la),oa(a,T),T}function _1(a,h,m){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Me(new nu({eb:m})):new Me(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function k1(){}t=k1.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function lu(){}lu.prototype.g=function(a,h){return new Vt(a,h)};function Vt(a,h){ut.call(this),this.g=new u1(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ps(this)}x(Vt,ut),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){jh(this.g)},Vt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=Eh(a),a=m);h.i.push(new uI(h.Ya++,a)),h.G==3&&ou(h)},Vt.prototype.N=function(){this.g.l=null,delete this.j,jh(this.g),delete this.g,Vt.aa.N.call(this)};function E1(a){Th.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const m in h){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}x(E1,Th);function w1(){Ih.call(this),this.status=1}x(w1,Ih);function Ps(a){this.g=a}x(Ps,k1),Ps.prototype.ua=function(){kt(this.g,"a")},Ps.prototype.ta=function(a){kt(this.g,new E1(a))},Ps.prototype.sa=function(a){kt(this.g,new w1)},Ps.prototype.ra=function(){kt(this.g,"b")},lu.prototype.createWebChannel=lu.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,Ew=function(){return new lu},kw=function(){return Ql()},_w=fi,Bp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yl.NO_ERROR=0,Yl.TIMEOUT=8,Yl.HTTP_ERROR=6,ic=Yl,V0.COMPLETE="complete",vw=V0,j0.EventType=Qo,Qo.OPEN="a",Qo.CLOSE="b",Qo.ERROR="c",Qo.MESSAGE="d",ut.prototype.listen=ut.prototype.K,Sa=j0,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,yw=Me}).apply(typeof Lu<"u"?Lu:typeof self<"u"?self:typeof window<"u"?window:{});const yv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new Nd("@firebase/firestore");function ma(){return zi.logLevel}function Y(t,...e){if(zi.logLevel<=le.DEBUG){const n=e.map(Ig);zi.debug(`Firestore (${Bo}): ${t}`,...n)}}function dr(t,...e){if(zi.logLevel<=le.ERROR){const n=e.map(Ig);zi.error(`Firestore (${Bo}): ${t}`,...n)}}function To(t,...e){if(zi.logLevel<=le.WARN){const n=e.map(Ig);zi.warn(`Firestore (${Bo}): ${t}`,...n)}}function Ig(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${Bo}) INTERNAL ASSERTION FAILED: `+t;throw dr(e),new Error(e)}function ye(t,e){t||te()}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ww{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class nC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rC{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ye(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ir,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ir)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new ww(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new mt(e)}}class iC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new iC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ye(this.o===void 0);const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.R=n.token,new oC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=lC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function Io(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new qe(0,0))}static max(){return new ne(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends vl{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const uC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends vl{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return uC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Se.fromString(e))}static fromName(e){return new X(Se.fromString(e).popFirst(5))}static empty(){return new X(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Se(e.slice()))}}function cC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new ei(i,X.empty(),e)}function dC(t){return new ei(t.readTime,t.key,-1)}class ei{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ei(ne.min(),X.empty(),-1)}static max(){return new ei(ne.max(),X.empty(),-1)}}function hC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==fC)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(f=>{o[d]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function mC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ul(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class xg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}xg.oe=-1;function Fd(t){return t==null}function Qc(t){return t===0&&1/t==-1/0}function gC(t){return typeof t=="number"&&Number.isInteger(t)&&!Qc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Iw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||nt.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ru(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ru(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ru(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ru(this.root,e,this.comparator,!0)}}class Ru{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??nt.RED,this.left=i??nt.EMPTY,this.right=s??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new nt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return nt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,n,r,i,s){return this}insert(e,n,r){return new nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _v(this.data.getIterator())}getIteratorFrom(e){return new _v(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class _v{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new $t([])}unionWith(e){let n=new st(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Io(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class xw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new xw("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const yC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ti(t){if(ye(!!t),typeof t=="string"){let e=0;const n=yC.exec(t);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hi(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ag(t){const e=t.mapValue.fields.__previous_value__;return Sg(e)?Ag(e):e}function _l(t){const e=ti(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n,r,i,s,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class kl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new kl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof kl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu={mapValue:{}};function qi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sg(t)?4:kC(t)?9007199254740991:_C(t)?10:11:te()}function Vn(t,e){if(t===e)return!0;const n=qi(t);if(n!==qi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _l(t).isEqual(_l(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ti(i.timestampValue),l=ti(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Hi(i.bytesValue).isEqual(Hi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Fe(i.geoPointValue.latitude)===Fe(s.geoPointValue.latitude)&&Fe(i.geoPointValue.longitude)===Fe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Fe(i.integerValue)===Fe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Fe(i.doubleValue),l=Fe(s.doubleValue);return o===l?Qc(o)===Qc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Io(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(vv(o)!==vv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Vn(o[u],l[u])))return!1;return!0}(t,e);default:return te()}}function El(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function xo(t,e){if(t===e)return 0;const n=qi(t),r=qi(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Fe(s.integerValue||s.doubleValue),u=Fe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return kv(t.timestampValue,e.timestampValue);case 4:return kv(_l(t),_l(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Hi(s),u=Hi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=he(l[d],u[d]);if(f!==0)return f}return he(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=he(Fe(s.latitude),Fe(o.latitude));return l!==0?l:he(Fe(s.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ev(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,d,f;const g=s.fields||{},y=o.fields||{},k=(l=g.value)===null||l===void 0?void 0:l.arrayValue,x=(u=y.value)===null||u===void 0?void 0:u.arrayValue,R=he(((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return R!==0?R:Ev(k,x)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Cu.mapValue&&o===Cu.mapValue)return 0;if(s===Cu.mapValue)return 1;if(o===Cu.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const y=he(u[g],f[g]);if(y!==0)return y;const k=xo(l[u[g]],d[f[g]]);if(k!==0)return k}return he(u.length,f.length)}(t.mapValue,e.mapValue);default:throw te()}}function kv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=ti(t),r=ti(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function Ev(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=xo(n[i],r[i]);if(s)return s}return he(n.length,r.length)}function So(t){return zp(t)}function zp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ti(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Hi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=zp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${zp(n.fields[o])}`;return i+"}"}(t.mapValue):te()}function wv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Hp(t){return!!t&&"integerValue"in t}function Lg(t){return!!t&&"arrayValue"in t}function Tv(t){return!!t&&"nullValue"in t}function Iv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sc(t){return!!t&&"mapValue"in t}function _C(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function $a(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$a(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$a(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!sc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$a(n)}setAll(e){let n=rt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=$a(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());sc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];sc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){es(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Rt($a(this.value))}}function Sw(t){const e=[];return es(t.fields,(n,r)=>{const i=new rt([n]);if(sc(r)){const s=Sw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new $t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new yt(e,0,ne.min(),ne.min(),ne.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,i){return new yt(e,1,n,ne.min(),r,i,0)}static newNoDocument(e,n){return new yt(e,2,n,ne.min(),ne.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,ne.min(),ne.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yc{constructor(e,n){this.position=e,this.inclusive=n}}function xv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=xo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class wl{constructor(e,n="asc"){this.field=e,this.dir=n}}function EC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Aw{}class He extends Aw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new TC(e,n,r):n==="array-contains"?new SC(e,r):n==="in"?new AC(e,r):n==="not-in"?new LC(e,r):n==="array-contains-any"?new RC(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new IC(e,r):new xC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(xo(n,this.value)):n!==null&&qi(this.value)===qi(n)&&this.matchesComparison(xo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tn extends Aw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Tn(e,n)}matches(e){return Lw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Lw(t){return t.op==="and"}function Rw(t){return wC(t)&&Lw(t)}function wC(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function qp(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+So(t.value);if(Rw(t))return t.filters.map(e=>qp(e)).join(",");{const e=t.filters.map(n=>qp(n)).join(",");return`${t.op}(${e})`}}function Cw(t,e){return t instanceof He?function(r,i){return i instanceof He&&r.op===i.op&&r.field.isEqual(i.field)&&Vn(r.value,i.value)}(t,e):t instanceof Tn?function(r,i){return i instanceof Tn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Cw(o,i.filters[l]),!0):!1}(t,e):void te()}function Pw(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${So(n.value)}`}(t):t instanceof Tn?function(n){return n.op.toString()+" {"+n.getFilters().map(Pw).join(" ,")+"}"}(t):"Filter"}class TC extends He{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class IC extends He{constructor(e,n){super(e,"in",n),this.keys=bw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xC extends He{constructor(e,n){super(e,"not-in",n),this.keys=bw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function bw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class SC extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Lg(n)&&El(n.arrayValue,this.value)}}class AC extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&El(this.value.arrayValue,n)}}class LC extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(El(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!El(this.value.arrayValue,n)}}class RC extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Lg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>El(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Av(t,e=null,n=[],r=[],i=null,s=null,o=null){return new CC(t,e,n,r,i,s,o)}function Rg(t){const e=re(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>qp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Fd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>So(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>So(r)).join(",")),e.ue=n}return e.ue}function Cg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!EC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Cw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sv(t.startAt,e.startAt)&&Sv(t.endAt,e.endAt)}function Gp(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function PC(t,e,n,r,i,s,o,l){return new zo(t,e,n,r,i,s,o,l)}function Pg(t){return new zo(t)}function Lv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jw(t){return t.collectionGroup!==null}function Ba(t){const e=re(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new st(rt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new wl(s,r))}),n.has(rt.keyField().canonicalString())||e.ce.push(new wl(rt.keyField(),r))}return e.ce}function On(t){const e=re(t);return e.le||(e.le=bC(e,Ba(t))),e.le}function bC(t,e){if(t.limitType==="F")return Av(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new wl(i.field,s)});const n=t.endAt?new Yc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Yc(t.startAt.position,t.startAt.inclusive):null;return Av(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Kp(t,e){const n=t.filters.concat([e]);return new zo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Zc(t,e,n){return new zo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ud(t,e){return Cg(On(t),On(e))&&t.limitType===e.limitType}function Nw(t){return`${Rg(On(t))}|lt:${t.limitType}`}function Ws(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Pw(i)).join(", ")}]`),Fd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>So(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>So(i)).join(",")),`Target(${r})`}(On(t))}; limitType=${t.limitType})`}function Wd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ba(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const d=xv(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,Ba(r),i)||r.endAt&&!function(o,l,u){const d=xv(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,Ba(r),i))}(t,e)}function jC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Dw(t){return(e,n)=>{let r=!1;for(const i of Ba(t)){const s=NC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function NC(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),d=l.data.field(s);return u!==null&&d!==null?xo(u,d):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Iw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=new Oe(X.comparator);function hr(){return DC}const Ow=new Oe(X.comparator);function Aa(...t){let e=Ow;for(const n of t)e=e.insert(n.key,n);return e}function Mw(t){let e=Ow;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Li(){return za()}function Vw(){return za()}function za(){return new Ho(t=>t.toString(),(t,e)=>t.isEqual(e))}const OC=new Oe(X.comparator),MC=new st(X.comparator);function ae(...t){let e=MC;for(const n of t)e=e.add(n);return e}const VC=new st(he);function FC(){return VC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qc(e)?"-0":e}}function Fw(t){return{integerValue:""+t}}function UC(t,e){return gC(e)?Fw(e):bg(t,e)}/**
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
 */class $d{constructor(){this._=void 0}}function WC(t,e,n){return t instanceof Tl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Sg(s)&&(s=Ag(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Il?Ww(t,e):t instanceof xl?$w(t,e):function(i,s){const o=Uw(i,s),l=Rv(o)+Rv(i.Pe);return Hp(o)&&Hp(i.Pe)?Fw(l):bg(i.serializer,l)}(t,e)}function $C(t,e,n){return t instanceof Il?Ww(t,e):t instanceof xl?$w(t,e):n}function Uw(t,e){return t instanceof Xc?function(r){return Hp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Tl extends $d{}class Il extends $d{constructor(e){super(),this.elements=e}}function Ww(t,e){const n=Bw(e);for(const r of t.elements)n.some(i=>Vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class xl extends $d{constructor(e){super(),this.elements=e}}function $w(t,e){let n=Bw(e);for(const r of t.elements)n=n.filter(i=>!Vn(i,r));return{arrayValue:{values:n}}}class Xc extends $d{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Rv(t){return Fe(t.integerValue||t.doubleValue)}function Bw(t){return Lg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n){this.field=e,this.transform=n}}function zC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Il&&i instanceof Il||r instanceof xl&&i instanceof xl?Io(r.elements,i.elements,Vn):r instanceof Xc&&i instanceof Xc?Vn(r.Pe,i.Pe):r instanceof Tl&&i instanceof Tl}(t.transform,e.transform)}class HC{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Bd{}function zw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jg(t.key,tn.none()):new Wl(t.key,t.data,tn.none());{const n=t.data,r=Rt.empty();let i=new st(rt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ci(t.key,r,new $t(i.toArray()),tn.none())}}function qC(t,e,n){t instanceof Wl?function(i,s,o){const l=i.value.clone(),u=Pv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ci?function(i,s,o){if(!oc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Pv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Hw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ha(t,e,n,r){return t instanceof Wl?function(s,o,l,u){if(!oc(s.precondition,o))return l;const d=s.value.clone(),f=bv(s.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof ci?function(s,o,l,u){if(!oc(s.precondition,o))return l;const d=bv(s.fieldTransforms,u,o),f=o.data;return f.setAll(Hw(s)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,l){return oc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function GC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Uw(r.transform,i||null);s!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,s))}return n||null}function Cv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Io(r,i,(s,o)=>zC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wl extends Bd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ci extends Bd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Hw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Pv(t,e,n){const r=new Map;ye(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,$C(o,l,n[i]))}return r}function bv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,WC(s,o,e))}return r}class jg extends Bd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KC extends Bd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&qC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ha(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ha(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Vw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=zw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&Io(this.mutations,e.mutations,(n,r)=>Cv(n,r))&&Io(this.baseMutations,e.baseMutations,(n,r)=>Cv(n,r))}}class Ng{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length);let i=function(){return OC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ng(e,n,r,i)}}/**
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
 */class YC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ZC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,ue;function XC(t){switch(t){default:return te();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function qw(t){if(t===void 0)return dr("GRPC error has no .code"),W.UNKNOWN;switch(t){case $e.OK:return W.OK;case $e.CANCELLED:return W.CANCELLED;case $e.UNKNOWN:return W.UNKNOWN;case $e.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case $e.INTERNAL:return W.INTERNAL;case $e.UNAVAILABLE:return W.UNAVAILABLE;case $e.UNAUTHENTICATED:return W.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case $e.NOT_FOUND:return W.NOT_FOUND;case $e.ALREADY_EXISTS:return W.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return W.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case $e.ABORTED:return W.ABORTED;case $e.OUT_OF_RANGE:return W.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return W.UNIMPLEMENTED;case $e.DATA_LOSS:return W.DATA_LOSS;default:return te()}}(ue=$e||($e={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function JC(){return new TextEncoder}/**
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
 */const eP=new ji([4294967295,4294967295],0);function jv(t){const e=JC().encode(t),n=new gw;return n.update(e),new Uint8Array(n.digest())}function Nv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ji([n,r],0),new ji([i,s],0)]}class Dg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new La(`Invalid padding: ${n}`);if(r<0)throw new La(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new La(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new La(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ji.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ji.fromNumber(r)));return i.compare(eP)===1&&(i=new ji([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=jv(e),[r,i]=Nv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Dg(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=jv(e),[r,i]=Nv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class La extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,$l.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new zd(ne.min(),i,new Oe(he),hr(),ae())}}class $l{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $l(r,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Gw{constructor(e,n){this.targetId=e,this.me=n}}class Kw{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Dv{constructor(){this.fe=0,this.ge=Mv(),this.pe=at.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ae(),n=ae(),r=ae();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:te()}}),new $l(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Mv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ye(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class tP{constructor(e){this.Le=e,this.Be=new Map,this.ke=hr(),this.qe=Ov(),this.Qe=new Oe(he)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Gp(s))if(r===0){const o=new X(s.path);this.Ue(n,o,yt.newNoDocument(o,ne.min()))}else ye(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Hi(r).toUint8Array()}catch(u){if(u instanceof xw)return To("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Dg(o,i,s)}catch(u){return To(u instanceof La?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Gp(l.target)){const u=new X(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,yt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ae();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new zd(e,n,this.Qe,this.ke,r);return this.ke=hr(),this.qe=Ov(),this.Qe=new Oe(he),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Dv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new st(he),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Dv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ov(){return new Oe(X.comparator)}function Mv(){return new Oe(X.comparator)}const nP={asc:"ASCENDING",desc:"DESCENDING"},rP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iP={and:"AND",or:"OR"};class sP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qp(t,e){return t.useProto3Json||Fd(e)?e:{value:e}}function Jc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function oP(t,e){return Jc(t,e.toTimestamp())}function Mn(t){return ye(!!t),ne.fromTimestamp(function(n){const r=ti(n);return new qe(r.seconds,r.nanos)}(t))}function Og(t,e){return Yp(t,e).canonicalString()}function Yp(t,e){const n=function(i){return new Se(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Yw(t){const e=Se.fromString(t);return ye(t8(e)),e}function Zp(t,e){return Og(t.databaseId,e.path)}function vf(t,e){const n=Yw(e);if(n.get(1)!==t.databaseId.projectId)throw new q(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(Xw(n))}function Zw(t,e){return Og(t.databaseId,e)}function aP(t){const e=Yw(t);return e.length===4?Se.emptyPath():Xw(e)}function Xp(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xw(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Vv(t,e,n){return{name:Zp(t,e),fields:n.value.mapValue.fields}}function lP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(ye(f===void 0||typeof f=="string"),at.fromBase64String(f||"")):(ye(f===void 0||f instanceof Buffer||f instanceof Uint8Array),at.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const f=d.code===void 0?W.UNKNOWN:qw(d.code);return new q(f,d.message||"")}(o);n=new Kw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=vf(t,r.document.name),s=Mn(r.document.updateTime),o=r.document.createTime?Mn(r.document.createTime):ne.min(),l=new Rt({mapValue:{fields:r.document.fields}}),u=yt.newFoundDocument(i,s,o,l),d=r.targetIds||[],f=r.removedTargetIds||[];n=new ac(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=vf(t,r.document),s=r.readTime?Mn(r.readTime):ne.min(),o=yt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ac([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=vf(t,r.document),s=r.removedTargetIds||[];n=new ac([],s,i,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ZC(i,s),l=r.targetId;n=new Gw(l,o)}}return n}function uP(t,e){let n;if(e instanceof Wl)n={update:Vv(t,e.key,e.value)};else if(e instanceof jg)n={delete:Zp(t,e.key)};else if(e instanceof ci)n={update:Vv(t,e.key,e.data),updateMask:vP(e.fieldMask)};else{if(!(e instanceof KC))return te();n={verify:Zp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Tl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Il)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof xl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Xc)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:oP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:te()}(t,e.precondition)),n}function cP(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Mn(i.updateTime):Mn(s);return o.isEqual(ne.min())&&(o=Mn(s)),new HC(o,i.transformResults||[])}(n,e))):[]}function dP(t,e){return{documents:[Zw(t,e.path)]}}function hP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Zw(t,i);const s=function(d){if(d.length!==0)return e8(Tn.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(f=>function(y){return{field:$s(y.field),direction:mP(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Qp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function fP(t){let e=aP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(g){const y=Jw(g);return y instanceof Tn&&Rw(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(y=>function(x){return new wl(Bs(x.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(g){let y;return y=typeof g=="object"?g.value:g,Fd(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(g){const y=!!g.before,k=g.values||[];return new Yc(k,y)}(n.startAt));let d=null;return n.endAt&&(d=function(g){const y=!g.before,k=g.values||[];return new Yc(k,y)}(n.endAt)),PC(e,i,o,s,l,"F",u,d)}function pP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Jw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Bs(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Bs(n.unaryFilter.field);return He.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Bs(n.unaryFilter.field);return He.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Bs(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(n){return He.create(Bs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Tn.create(n.compositeFilter.filters.map(r=>Jw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return te()}}(n.compositeFilter.op))}(t):te()}function mP(t){return nP[t]}function gP(t){return rP[t]}function yP(t){return iP[t]}function $s(t){return{fieldPath:t.canonicalString()}}function Bs(t){return rt.fromServerFormat(t.fieldPath)}function e8(t){return t instanceof He?function(n){if(n.op==="=="){if(Iv(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NAN"}};if(Tv(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Iv(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NOT_NAN"}};if(Tv(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$s(n.field),op:gP(n.op),value:n.value}}}(t):t instanceof Tn?function(n){const r=n.getFilters().map(i=>e8(i));return r.length===1?r[0]:{compositeFilter:{op:yP(n.op),filters:r}}}(t):te()}function vP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function t8(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,r,i,s=ne.min(),o=ne.min(),l=at.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e){this.ct=e}}function kP(t){const e=fP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(){this.un=new wP}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(ei.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(ei.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class wP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new st(Se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new st(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ao(0)}static kn(){return new Ao(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(){this.changes=new Ho(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class IP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ha(r.mutation,i,$t.empty(),qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const i=Li();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Aa();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Li();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=hr();const o=za(),l=function(){return za()}();return n.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof ci)?s=s.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),Ha(f.mutation,d,f.mutation.getFieldMask(),qe.now())):o.set(d.key,$t.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>{var g;return l.set(d,new IP(f,(g=o.get(d))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=za();let i=new Oe((o,l)=>o-l),s=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||$t.empty();f=l.applyToLocalView(d,f),r.set(u,f);const g=(i.get(l.batchId)||ae()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,g=Vw();f.forEach(y=>{if(!s.has(y)){const k=zw(n.get(y),r.get(y));k!==null&&g.set(y,k),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,g))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(Li());let l=-1,u=s;return o.next(d=>$.forEach(d,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,ae())).next(f=>({batchId:l,changes:Mw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=Aa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Aa();return this.indexManager.getCollectionParents(e,s).next(l=>$.forEach(l,u=>{const d=function(g,y){return new zo(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((g,y)=>{o=o.insert(g,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,yt.newInvalidDocument(f)))});let l=Aa();return o.forEach((u,d)=>{const f=s.get(u);f!==void 0&&Ha(f.mutation,d,$t.empty(),qe.now()),Wd(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Mn(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:kP(i.bundledQuery),readTime:Mn(i.readTime)}}(n)),$.resolve()}}/**
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
 */class AP{constructor(){this.overlays=new Oe(X.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Li();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Li(),s=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Oe((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=Li(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Li(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return $.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new YC(n,r));let s=this.Ir.get(n);s===void 0&&(s=ae(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class LP{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.Tr=new st(Ye.Er),this.dr=new st(Ye.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ye(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new Se([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new Se([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=ae();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||he(e.wr,n.wr)}static Ar(e,n){return he(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new st(Ye.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new QC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ye(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(he);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new X(s),0);let l=new st(he);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},o),$.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ye(n,0),i=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e){this.Mr=e,this.docs=function(){return new Oe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=hr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():yt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=hr();const o=n.path,l=new X(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||hC(dC(f),r)<=0||(i.has(f.key)||Wd(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){te()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new PP(this)}getSize(e){return $.resolve(this.size)}}class PP extends TP{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e){this.persistence=e,this.Nr=new Ho(n=>Rg(n),Cg),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Mg,this.targetCount=0,this.kr=Ao.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ao(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e,n){this.qr={},this.overlays={},this.Qr=new xg(0),this.Kr=!1,this.Kr=!0,this.$r=new LP,this.referenceDelegate=e(this),this.Ur=new bP(this),this.indexManager=new EP,this.remoteDocumentCache=function(i){return new CP(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new _P(n),this.Gr=new SP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new RP(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new NP(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class NP extends pC{constructor(e){super(),this.currentSequenceNumber=e}}class Vg{constructor(e){this.persistence=e,this.Jr=new Mg,this.Yr=null}static Zr(e){return new Vg(e)}get Xr(){if(this.Yr)return this.Yr;throw te()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const i=X.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ne.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ae(),i=ae();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Fg(e,n.fromCache,r,i)}}/**
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
 */class DP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return gA()?8:mC(_t())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new DP;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ma()<=le.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Ws(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(ma()<=le.DEBUG&&Y("QueryEngine","Query:",Ws(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ma()<=le.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Ws(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(n))):$.resolve())}Yi(e,n){if(Lv(n))return $.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Zc(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ae(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,Zc(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return Lv(n)||i.isEqual(ne.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?$.resolve(null):(ma()<=le.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ws(n)),this.rs(e,o,n,cC(i,-1)).next(l=>l))})}ts(e,n){let r=new st(Dw(e));return n.forEach((i,s)=>{Wd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ma()<=le.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Ws(n)),this.Ji.getDocumentsMatchingQuery(e,n,ei.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Oe(he),this._s=new Ho(s=>Rg(s),Cg),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xP(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function VP(t,e,n,r){return new MP(t,e,n,r)}async function n8(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ae();for(const d of i){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function FP(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const g=d.batch,y=g.keys();let k=$.resolve();return y.forEach(x=>{k=k.next(()=>f.getEntry(u,x)).next(R=>{const A=d.docVersions.get(x);ye(A!==null),R.version.compareTo(A)<0&&(g.applyToRemoteDocument(R,d),R.isValidDocument()&&(R.setReadTime(d.commitVersion),f.addEntry(R)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ae();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function r8(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function UP(t,e){const n=re(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,g)=>{const y=i.get(g);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,g)));let k=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?k=k.withResumeToken(at.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),i=i.insert(g,k),function(R,A,_){return R.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(y,k,f)&&l.push(n.Ur.updateTargetData(s,k))});let u=hr(),d=ae();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(WP(s,o,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(ne.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(g=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return $.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.os=i,s))}function WP(t,e,n){let r=ae(),i=ae();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=hr();return n.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):Y("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function $P(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function BP(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Jp(t,e,n){const r=re(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ul(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Fv(t,e,n){const r=re(t);let i=ne.min(),s=ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const g=re(u),y=g._s.get(f);return y!==void 0?$.resolve(g.os.get(y)):g.Ur.getTargetData(d,f)}(r,o,On(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ne.min(),n?s:ae())).next(l=>(zP(r,jC(e),l),{documents:l,Ts:s})))}function zP(t,e,n){let r=t.us.get(e)||ne.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Uv{constructor(){this.activeTargetIds=FC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class HP{constructor(){this.so=new Uv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Uv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pu=null;function _f(){return Pu===null?Pu=function(){return 268435456+Math.round(2147483648*Math.random())}():Pu++,"0x"+Pu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class QP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=_f(),u=this.xo(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,o),this.No(n,u,d,i).then(f=>(Y("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw To("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=GP[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=_f();return new Promise((o,l)=>{const u=new yw;u.setWithCredentials(!0),u.listenOnce(vw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ic.NO_ERROR:const f=u.getResponseJson();Y(pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case ic.TIMEOUT:Y(pt,`RPC '${e}' ${s} timed out`),l(new q(W.DEADLINE_EXCEEDED,"Request time out"));break;case ic.HTTP_ERROR:const g=u.getStatus();if(Y(pt,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const k=y==null?void 0:y.error;if(k&&k.status&&k.message){const x=function(A){const _=A.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(_)>=0?_:W.UNKNOWN}(k.status);l(new q(x,k.message))}else l(new q(W.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(W.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{Y(pt,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);Y(pt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=_f(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ew(),l=kw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");Y(pt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=o.createWebChannel(f,u);let y=!1,k=!1;const x=new KP({Io:A=>{k?Y(pt,`Not sending because RPC '${e}' stream ${i} is closed:`,A):(y||(Y(pt,`Opening RPC '${e}' stream ${i} transport.`),g.open(),y=!0),Y(pt,`RPC '${e}' stream ${i} sending:`,A),g.send(A))},To:()=>g.close()}),R=(A,_,v)=>{A.listen(_,I=>{try{v(I)}catch(P){setTimeout(()=>{throw P},0)}})};return R(g,Sa.EventType.OPEN,()=>{k||(Y(pt,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),R(g,Sa.EventType.CLOSE,()=>{k||(k=!0,Y(pt,`RPC '${e}' stream ${i} transport closed`),x.So())}),R(g,Sa.EventType.ERROR,A=>{k||(k=!0,To(pt,`RPC '${e}' stream ${i} transport errored:`,A),x.So(new q(W.UNAVAILABLE,"The operation could not be completed")))}),R(g,Sa.EventType.MESSAGE,A=>{var _;if(!k){const v=A.data[0];ye(!!v);const I=v,P=I.error||((_=I[0])===null||_===void 0?void 0:_.error);if(P){Y(pt,`RPC '${e}' stream ${i} received error:`,P);const N=P.status;let V=function(S){const L=$e[S];if(L!==void 0)return qw(L)}(N),w=P.message;V===void 0&&(V=W.INTERNAL,w="Unknown error status: "+N+" with message "+P.message),k=!0,x.So(new q(V,w)),g.close()}else Y(pt,`RPC '${e}' stream ${i} received:`,v),x.bo(v)}}),R(l,_w.STAT_EVENT,A=>{A.stat===Bp.PROXY?Y(pt,`RPC '${e}' stream ${i} detected buffering proxy`):A.stat===Bp.NOPROXY&&Y(pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function kf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t){return new sP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i8{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s8{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new i8(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(dr(n.toString()),dr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class YP extends s8{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=lP(this.serializer,e),r=function(s){if(!("targetChange"in s))return ne.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?Mn(o.readTime):ne.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Xp(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Gp(u)?{documents:dP(s,u)}:{query:hP(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Qw(s,o.resumeToken);const d=Qp(s,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(ne.min())>0){l.readTime=Jc(s,o.snapshotVersion.toTimestamp());const d=Qp(s,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=pP(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Xp(this.serializer),n.removeTarget=e,this.a_(n)}}class ZP extends s8{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ye(!!e.streamToken),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=cP(e.writeResults,e.commitTime),r=Mn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Xp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>uP(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Yp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(W.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Yp(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(W.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class JP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(dr(n),this.D_=!1):Y("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ts(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=re(u);d.L_.add(4),await Bl(d),d.q_.set("Unknown"),d.L_.delete(4),await qd(d)}(this))})}),this.q_=new JP(r,i)}}async function qd(t){if(ts(t))for(const e of t.B_)await e(!0)}async function Bl(t){for(const e of t.B_)await e(!1)}function o8(t,e){const n=re(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Bg(n)?$g(n):qo(n).r_()&&Wg(n,e))}function Ug(t,e){const n=re(t),r=qo(n);n.N_.delete(e),r.r_()&&a8(n,e),n.N_.size===0&&(r.r_()?r.o_():ts(n)&&n.q_.set("Unknown"))}function Wg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qo(t).A_(e)}function a8(t,e){t.Q_.xe(e),qo(t).R_(e)}function $g(t){t.Q_=new tP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),qo(t).start(),t.q_.v_()}function Bg(t){return ts(t)&&!qo(t).n_()&&t.N_.size>0}function ts(t){return re(t).L_.size===0}function l8(t){t.Q_=void 0}async function tb(t){t.q_.set("Online")}async function nb(t){t.N_.forEach((e,n)=>{Wg(t,e)})}async function rb(t,e){l8(t),Bg(t)?(t.q_.M_(e),$g(t)):t.q_.set("Unknown")}async function ib(t,e,n){if(t.q_.set("Online"),e instanceof Kw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ed(t,r)}else if(e instanceof ac?t.Q_.Ke(e):e instanceof Gw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ne.min()))try{const r=await r8(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(at.EMPTY_BYTE_STRING,f.snapshotVersion)),a8(s,u);const g=new Nr(f.target,u,d,f.sequenceNumber);Wg(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await ed(t,r)}}async function ed(t,e,n){if(!Ul(e))throw e;t.L_.add(1),await Bl(t),t.q_.set("Offline"),n||(n=()=>r8(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await qd(t)})}function u8(t,e){return e().catch(n=>ed(t,n,e))}async function Gd(t){const e=re(t),n=ni(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;sb(e);)try{const i=await $P(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,ob(e,i)}catch(i){await ed(e,i)}c8(e)&&d8(e)}function sb(t){return ts(t)&&t.O_.length<10}function ob(t,e){t.O_.push(e);const n=ni(t);n.r_()&&n.V_&&n.m_(e.mutations)}function c8(t){return ts(t)&&!ni(t).n_()&&t.O_.length>0}function d8(t){ni(t).start()}async function ab(t){ni(t).p_()}async function lb(t){const e=ni(t);for(const n of t.O_)e.m_(n.mutations)}async function ub(t,e,n){const r=t.O_.shift(),i=Ng.from(r,e,n);await u8(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Gd(t)}async function cb(t,e){e&&ni(t).V_&&await async function(r,i){if(function(o){return XC(o)&&o!==W.ABORTED}(i.code)){const s=r.O_.shift();ni(r).s_(),await u8(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Gd(r)}}(t,e),c8(t)&&d8(t)}async function $v(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=ts(n);n.L_.add(3),await Bl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await qd(n)}async function db(t,e){const n=re(t);e?(n.L_.delete(2),await qd(n)):e||(n.L_.add(2),await Bl(n),n.q_.set("Unknown"))}function qo(t){return t.K_||(t.K_=function(n,r,i){const s=re(n);return s.w_(),new YP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:tb.bind(null,t),Ro:nb.bind(null,t),mo:rb.bind(null,t),d_:ib.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Bg(t)?$g(t):t.q_.set("Unknown")):(await t.K_.stop(),l8(t))})),t.K_}function ni(t){return t.U_||(t.U_=function(n,r,i){const s=re(n);return s.w_(),new ZP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:ab.bind(null,t),mo:cb.bind(null,t),f_:lb.bind(null,t),g_:ub.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Gd(t)):(await t.U_.stop(),t.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new zg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hg(t,e){if(dr("AsyncQueue",`${e}: ${t}`),Ul(t))return new q(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=Aa(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new po(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof po)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new po;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(){this.W_=new Oe(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):te():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Lo{constructor(e,n,r,i,s,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Lo(e,n,po.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ud(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class fb{constructor(){this.queries=zv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=re(n),s=i.queries;i.queries=zv(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new q(W.ABORTED,"Firestore shutting down"))}}function zv(){return new Ho(t=>Nw(t),Ud)}async function h8(t,e){const n=re(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new hb,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Hg(o,`Initialization of query '${Ws(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&qg(n)}async function f8(t,e){const n=re(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function pb(t,e){const n=re(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&qg(n)}function mb(t,e,n){const r=re(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function qg(t){t.Y_.forEach(e=>{e.next()})}var em,Hv;(Hv=em||(em={})).ea="default",Hv.Cache="cache";class p8{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Lo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==em.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m8{constructor(e){this.key=e}}class g8{constructor(e){this.key=e}}class gb{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ae(),this.mutatedKeys=ae(),this.Aa=Dw(e),this.Ra=new po(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Bv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const y=i.get(f),k=Wd(this.query,g)?g:null,x=!!y&&this.mutatedKeys.has(y.key),R=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let A=!1;y&&k?y.data.isEqual(k.data)?x!==R&&(r.track({type:3,doc:k}),A=!0):this.ga(y,k)||(r.track({type:2,doc:k}),A=!0,(u&&this.Aa(k,u)>0||d&&this.Aa(k,d)<0)&&(l=!0)):!y&&k?(r.track({type:0,doc:k}),A=!0):y&&!k&&(r.track({type:1,doc:y}),A=!0,(u||d)&&(l=!0)),A&&(k?(o=o.add(k),s=R?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,g)=>function(k,x){const R=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return R(k)-R(x)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new Lo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Bv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ae(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new g8(r))}),this.da.forEach(r=>{e.has(r)||n.push(new m8(r))}),n}ba(e){this.Ta=e.Ts,this.da=ae();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Lo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class yb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class vb{constructor(e){this.key=e,this.va=!1}}class _b{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ho(l=>Nw(l),Ud),this.Ma=new Map,this.xa=new Set,this.Oa=new Oe(X.comparator),this.Na=new Map,this.La=new Mg,this.Ba={},this.ka=new Map,this.qa=Ao.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function kb(t,e,n=!0){const r=w8(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await y8(r,e,n,!0),i}async function Eb(t,e){const n=w8(t);await y8(n,e,!0,!1)}async function y8(t,e,n,r){const i=await BP(t.localStore,On(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await wb(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&o8(t.remoteStore,i),l}async function wb(t,e,n,r,i){t.Ka=(g,y,k)=>async function(R,A,_,v){let I=A.view.ma(_);I.ns&&(I=await Fv(R.localStore,A.query,!1).then(({documents:w})=>A.view.ma(w,I)));const P=v&&v.targetChanges.get(A.targetId),N=v&&v.targetMismatches.get(A.targetId)!=null,V=A.view.applyChanges(I,R.isPrimaryClient,P,N);return Gv(R,A.targetId,V.wa),V.snapshot}(t,g,y,k);const s=await Fv(t.localStore,e,!0),o=new gb(e,s.Ts),l=o.ma(s.documents),u=$l.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(l,t.isPrimaryClient,u);Gv(t,n,d.wa);const f=new yb(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function Tb(t,e,n){const r=re(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Ud(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Jp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ug(r.remoteStore,i.targetId),tm(r,i.targetId)}).catch(Fl)):(tm(r,i.targetId),await Jp(r.localStore,i.targetId,!0))}async function Ib(t,e){const n=re(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ug(n.remoteStore,r.targetId))}async function xb(t,e,n){const r=bb(t);try{const i=await function(o,l){const u=re(o),d=qe.now(),f=l.reduce((k,x)=>k.add(x.key),ae());let g,y;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let x=hr(),R=ae();return u.cs.getEntries(k,f).next(A=>{x=A,x.forEach((_,v)=>{v.isValidDocument()||(R=R.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,x)).next(A=>{g=A;const _=[];for(const v of l){const I=GC(v,g.get(v.key).overlayedDocument);I!=null&&_.push(new ci(v.key,I,Sw(I.value.mapValue),tn.exists(!0)))}return u.mutationQueue.addMutationBatch(k,d,_,l)}).next(A=>{y=A;const _=A.applyToLocalDocumentSet(g,R);return u.documentOverlayCache.saveOverlays(k,A.batchId,_)})}).then(()=>({batchId:y.batchId,changes:Mw(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new Oe(he)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,i.batchId,n),await zl(r,i.changes),await Gd(r.remoteStore)}catch(i){const s=Hg(i,"Failed to persist write");n.reject(s)}}async function v8(t,e){const n=re(t);try{const r=await UP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ye(o.va):i.removedDocuments.size>0&&(ye(o.va),o.va=!1))}),await zl(n,r,e)}catch(r){await Fl(r)}}function qv(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=re(o);u.onlineState=l;let d=!1;u.queries.forEach((f,g)=>{for(const y of g.j_)y.Z_(l)&&(d=!0)}),d&&qg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Sb(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Oe(X.comparator);o=o.insert(s,yt.newNoDocument(s,ne.min()));const l=ae().add(s),u=new zd(ne.min(),new Map,new Oe(he),o,l);await v8(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Gg(r)}else await Jp(r.localStore,e,!1).then(()=>tm(r,e,n)).catch(Fl)}async function Ab(t,e){const n=re(t),r=e.batch.batchId;try{const i=await FP(n.localStore,e);k8(n,r,null),_8(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zl(n,i)}catch(i){await Fl(i)}}async function Lb(t,e,n){const r=re(t);try{const i=await function(o,l){const u=re(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(g=>(ye(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);k8(r,e,n),_8(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zl(r,i)}catch(i){await Fl(i)}}function _8(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function k8(t,e,n){const r=re(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function tm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||E8(t,r)})}function E8(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Ug(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Gg(t))}function Gv(t,e,n){for(const r of n)r instanceof m8?(t.La.addReference(r.key,e),Rb(t,r)):r instanceof g8?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||E8(t,r.key)):te()}function Rb(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.xa.add(r),Gg(t))}function Gg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(Se.fromString(e)),r=t.qa.next();t.Na.set(r,new vb(n)),t.Oa=t.Oa.insert(n,r),o8(t.remoteStore,new Nr(On(Pg(n.path)),r,"TargetPurposeLimboResolution",xg.oe))}}async function zl(t,e,n){const r=re(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const g=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){i.push(d);const g=Fg.Wi(u.targetId,d);s.push(g)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,d){const f=re(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>$.forEach(d,y=>$.forEach(y.$i,k=>f.persistence.referenceDelegate.addReference(g,y.targetId,k)).next(()=>$.forEach(y.Ui,k=>f.persistence.referenceDelegate.removeReference(g,y.targetId,k)))))}catch(g){if(!Ul(g))throw g;Y("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const y=g.targetId;if(!g.fromCache){const k=f.os.get(y),x=k.snapshotVersion,R=k.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(y,R)}}}(r.localStore,s))}async function Cb(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await n8(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new q(W.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zl(n,r.hs)}}function Pb(t,e){const n=re(t),r=n.Na.get(e);if(r&&r.va)return ae().add(r.key);{let i=ae();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function w8(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=v8.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Sb.bind(null,e),e.Ca.d_=pb.bind(null,e.eventManager),e.Ca.$a=mb.bind(null,e.eventManager),e}function bb(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ab.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Lb.bind(null,e),e}class td{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return VP(this.persistence,new OP,e.initialUser,this.serializer)}Ga(e){return new jP(Vg.Zr,this.serializer)}Wa(e){return new HP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}td.provider={build:()=>new td};class nm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cb.bind(null,this.syncEngine),await db(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new fb}()}createDatastore(e){const n=Hd(e.databaseInfo.databaseId),r=function(s){return new QP(s)}(e.databaseInfo);return function(s,o,l,u){return new XP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new eb(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>qv(this.syncEngine,n,0),function(){return Wv.D()?new Wv:new qP}())}createSyncEngine(e,n){return function(i,s,o,l,u,d,f){const g=new _b(i,s,o,l,u,d);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=re(i);Y("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Bl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}nm.provider={build:()=>new nm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class T8{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):dr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=Tw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Hg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ef(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await n8(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Kv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Nb(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$v(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>$v(e.remoteStore,i)),t._onlineComponents=e}async function Nb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ef(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;To("Error using user provided cache. Falling back to memory cache: "+n),await Ef(t,new td)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await Ef(t,new td);return t._offlineComponents}async function I8(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await Kv(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await Kv(t,new nm))),t._onlineComponents}function Db(t){return I8(t).then(e=>e.syncEngine)}async function x8(t){const e=await I8(t),n=e.eventManager;return n.onListen=kb.bind(null,e.syncEngine),n.onUnlisten=Tb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Eb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Ib.bind(null,e.syncEngine),n}function Ob(t,e,n={}){const r=new ir;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const f=new T8({next:y=>{f.Za(),o.enqueueAndForget(()=>f8(s,g));const k=y.docs.has(l);!k&&y.fromCache?d.reject(new q(W.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&y.fromCache&&u&&u.source==="server"?d.reject(new q(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(y)},error:y=>d.reject(y)}),g=new p8(Pg(l.path),f,{includeMetadataChanges:!0,_a:!0});return h8(s,g)}(await x8(t),t.asyncQueue,e,n,r)),r.promise}function Mb(t,e,n={}){const r=new ir;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const f=new T8({next:y=>{f.Za(),o.enqueueAndForget(()=>f8(s,g)),y.fromCache&&u.source==="server"?d.reject(new q(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(y)},error:y=>d.reject(y)}),g=new p8(l,f,{includeMetadataChanges:!0,_a:!0});return h8(s,g)}(await x8(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function S8(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A8(t,e,n){if(!n)throw new q(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Vb(t,e,n,r){if(e===!0&&r===!0)throw new q(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yv(t){if(!X.isDocumentKey(t))throw new q(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zv(t){if(X.isDocumentKey(t))throw new q(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function In(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kd(t);throw new q(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Vb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=S8((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tC;switch(r.type){case"firstParty":return new sC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Qv.get(n);r&&(Y("ComponentProvider","Removing Datastore"),Qv.delete(n),r.terminate())}(this),Promise.resolve()}}function Fb(t,e,n,r={}){var i;const s=(t=In(t,Qd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&To("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=mt.MOCK_USER;else{l=xE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new q(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new mt(d)}t._authCredentials=new nC(new ww(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new di(this.firestore,e,this._query)}}class It{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class Kr extends di{constructor(e,n,r){super(e,n,Pg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new X(e))}withConverter(e){return new Kr(this.firestore,e,this._path)}}function pn(t,e,...n){if(t=De(t),A8("collection","path",e),t instanceof Qd){const r=Se.fromString(e,...n);return Zv(r),new Kr(t,null,r)}{if(!(t instanceof It||t instanceof Kr))throw new q(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Zv(r),new Kr(t.firestore,null,r)}}function zt(t,e,...n){if(t=De(t),arguments.length===1&&(e=Tw.newId()),A8("doc","path",e),t instanceof Qd){const r=Se.fromString(e,...n);return Yv(r),new It(t,null,new X(r))}{if(!(t instanceof It||t instanceof Kr))throw new q(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Yv(r),new It(t.firestore,t instanceof Kr?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new i8(this,"async_queue_retry"),this.Vu=()=>{const r=kf();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=kf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=kf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ir;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ul(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw dr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=zg.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&te()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class ns extends Qd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Jv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jv(e),this._firestoreClient=void 0,await e}}}function Ub(t,e){const n=typeof t=="object"?t:Dd(),r=typeof t=="string"?t:"(default)",i=li(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=wE("firestore");s&&Fb(i,...s)}return i}function Kg(t){if(t._terminated)throw new q(W.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Wb(t),t._firestoreClient}function Wb(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,f){return new vC(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,S8(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new jb(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ro(at.fromBase64String(e))}catch(n){throw new q(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ro(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zd=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
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
 */class Yg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=/^__.*__$/;class Bb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ci(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wl(e,this.data,n,this.fieldTransforms)}}class L8{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ci(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function R8(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class Zg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Zg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return nd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(R8(this.Cu)&&$b.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class zb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Hd(e)}Qu(e,n,r,i=!1){return new Zg({Cu:e,methodName:n,qu:r,path:rt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xd(t){const e=t._freezeSettings(),n=Hd(t._databaseId);return new zb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function C8(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Jg("Data must be an object, but it was:",o,r);const l=P8(r,o);let u,d;if(s.merge)u=new $t(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const y=rm(e,g,n);if(!o.contains(y))throw new q(W.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);j8(f,y)||f.push(y)}u=new $t(f),d=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=o.fieldTransforms;return new Bb(new Rt(l),u,d)}class Jd extends Zd{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jd}}class Xg extends Zd{_toFieldTransform(e){return new BC(e.path,new Tl)}isEqual(e){return e instanceof Xg}}function Hb(t,e,n,r){const i=t.Qu(1,e,n);Jg("Data must be an object, but it was:",i,r);const s=[],o=Rt.empty();es(r,(u,d)=>{const f=e0(e,u,n);d=De(d);const g=i.Nu(f);if(d instanceof Jd)s.push(f);else{const y=Hl(d,g);y!=null&&(s.push(f),o.set(f,y))}});const l=new $t(s);return new L8(o,l,i.fieldTransforms)}function qb(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[rm(e,r,n)],u=[i];if(s.length%2!=0)throw new q(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(rm(e,s[y])),u.push(s[y+1]);const d=[],f=Rt.empty();for(let y=l.length-1;y>=0;--y)if(!j8(d,l[y])){const k=l[y];let x=u[y];x=De(x);const R=o.Nu(k);if(x instanceof Jd)d.push(k);else{const A=Hl(x,R);A!=null&&(d.push(k),f.set(k,A))}}const g=new $t(d);return new L8(f,g,o.fieldTransforms)}function Gb(t,e,n,r=!1){return Hl(n,t.Qu(r?4:3,e))}function Hl(t,e){if(b8(t=De(t)))return Jg("Unsupported field value:",e,t),P8(t,e);if(t instanceof Zd)return function(r,i){if(!R8(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Hl(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return UC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=qe.fromDate(r);return{timestampValue:Jc(i.serializer,s)}}if(r instanceof qe){const s=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jc(i.serializer,s)}}if(r instanceof Qg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ro)return{bytesValue:Qw(i.serializer,r._byteString)};if(r instanceof It){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Og(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Yg)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return bg(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Kd(r)}`)}(t,e)}function P8(t,e){const n={};return Iw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(t,(r,i)=>{const s=Hl(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function b8(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof Qg||t instanceof Ro||t instanceof It||t instanceof Zd||t instanceof Yg)}function Jg(t,e,n){if(!b8(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Kd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function rm(t,e,n){if((e=De(e))instanceof Yd)return e._internalPath;if(typeof e=="string")return e0(t,e);throw nd("Field path arguments must be of type string or ",t,!1,void 0,n)}const Kb=new RegExp("[~\\*/\\[\\]]");function e0(t,e,n){if(e.search(Kb)>=0)throw nd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yd(...e.split("."))._internalPath}catch{throw nd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(W.INVALID_ARGUMENT,l+t+u)}function j8(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N8{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Qb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(eh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Qb extends N8{data(){return super.data()}}function eh(t,e){return typeof e=="string"?e0(t,e):e instanceof Yd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class t0{}class n0 extends t0{}function tr(t,e,...n){let r=[];e instanceof t0&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof r0).length,l=s.filter(u=>u instanceof th).length;if(o>1||o>0&&l>0)throw new q(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class th extends n0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new th(e,n,r)}_apply(e){const n=this._parse(e);return D8(e._query,n),new di(e.firestore,e.converter,Kp(e._query,n))}_parse(e){const n=Xd(e.firestore);return function(s,o,l,u,d,f,g){let y;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new q(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){t_(g,f);const k=[];for(const x of g)k.push(e_(u,s,x));y={arrayValue:{values:k}}}else y=e_(u,s,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||t_(g,f),y=Gb(l,o,g,f==="in"||f==="not-in");return He.create(d,f,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Dr(t,e,n){const r=e,i=eh("where",t);return th._create(i,r,n)}class r0 extends t0{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new r0(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)D8(o,u),o=Kp(o,u)}(e._query,n),new di(e.firestore,e.converter,Kp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class i0 extends n0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new i0(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new q(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new wl(s,o)}(e._query,this._field,this._direction);return new di(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new zo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function s0(t,e="asc"){const n=e,r=eh("orderBy",t);return i0._create(r,n)}class o0 extends n0{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new o0(e,n,r)}_apply(e){return new di(e.firestore,e.converter,Zc(e._query,this._limit,this._limitType))}}function Zb(t){return o0._create("limit",t,"F")}function e_(t,e,n){if(typeof(n=De(n))=="string"){if(n==="")throw new q(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jw(e)&&n.indexOf("/")!==-1)throw new q(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!X.isDocumentKey(r))throw new q(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wv(t,new X(r))}if(n instanceof It)return wv(t,n._key);throw new q(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kd(n)}.`)}function t_(t,e){if(!Array.isArray(t)||t.length===0)throw new q(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function D8(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Xb{convertValue(e,n="none"){switch(qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw te()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return es(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Fe(o.doubleValue));return new Yg(s)}convertGeoPoint(e){return new Qg(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ag(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_l(e));default:return null}}convertTimestamp(e){const n=ti(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);ye(t8(r));const i=new kl(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||dr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O8(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class M8 extends N8{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(eh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class lc extends M8{data(e={}){return super.data(e)}}class Jb{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ra(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new lc(this._firestore,this._userDataWriter,r.key,r,new Ra(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new lc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ra(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new lc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ra(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:e5(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function e5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t){t=In(t,It);const e=In(t.firestore,ns);return Ob(Kg(e),t._key).then(n=>t5(e,t,n))}class V8 extends Xb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ro(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function Pn(t){t=In(t,di);const e=In(t.firestore,ns),n=Kg(e),r=new V8(e);return Yb(t._query),Mb(n,t._query).then(i=>new Jb(e,r,t,i))}function F8(t,e,n){t=In(t,It);const r=In(t.firestore,ns),i=O8(t.converter,e);return nh(r,[C8(Xd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,tn.none())])}function rd(t,e,n,...r){t=In(t,It);const i=In(t.firestore,ns),s=Xd(i);let o;return o=typeof(e=De(e))=="string"||e instanceof Yd?qb(s,"updateDoc",t._key,e,n,r):Hb(s,"updateDoc",t._key,e),nh(i,[o.toMutation(t._key,tn.exists(!0))])}function a0(t){return nh(In(t.firestore,ns),[new jg(t._key,tn.none())])}function U8(t,e){const n=In(t.firestore,ns),r=zt(t),i=O8(t.converter,e);return nh(n,[C8(Xd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,tn.exists(!1))]).then(()=>r)}function nh(t,e){return function(r,i){const s=new ir;return r.asyncQueue.enqueueAndForget(async()=>xb(await Db(r),i,s)),s.promise}(Kg(t),e)}function t5(t,e,n){const r=n.docs.get(e._key),i=new V8(t);return new M8(t,i,e._key,r,new Ra(n.hasPendingWrites,n.fromCache),e.converter)}function Sl(){return new Xg("serverTimestamp")}(function(e,n=!0){(function(i){Bo=i})(Ji),En(new sn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ns(new rC(r.getProvider("auth-internal")),new aC(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new q(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kl(d.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ot(yv,"4.7.3",e),Ot(yv,"4.7.3","esm2017")})();const W8="@firebase/installations",l0="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $8=1e4,B8=`w:${l0}`,z8="FIS_v2",n5="https://firebaseinstallations.googleapis.com/v1",r5=60*60*1e3,i5="installations",s5="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o5={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Gi=new Xi(i5,s5,o5);function H8(t){return t instanceof an&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q8({projectId:t}){return`${n5}/projects/${t}/installations`}function G8(t){return{token:t.token,requestStatus:2,expiresIn:l5(t.expiresIn),creationTime:Date.now()}}async function K8(t,e){const r=(await e.json()).error;return Gi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Q8({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function a5(t,{refreshToken:e}){const n=Q8(t);return n.append("Authorization",u5(e)),n}async function Y8(t){const e=await t();return e.status>=500&&e.status<600?t():e}function l5(t){return Number(t.replace("s","000"))}function u5(t){return`${z8} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c5({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=q8(t),i=Q8(t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={fid:n,authVersion:z8,appId:t.appId,sdkVersion:B8},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await Y8(()=>fetch(r,l));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:G8(d.authToken)}}else throw await K8("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z8(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d5(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h5=/^[cdef][\w-]{21}$/,sm="";function f5(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=p5(t);return h5.test(n)?n:sm}catch{return sm}}function p5(t){return d5(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X8=new Map;function J8(t,e){const n=rh(t);eT(n,e),m5(n,e)}function eT(t,e){const n=X8.get(t);if(n)for(const r of n)r(e)}function m5(t,e){const n=g5();n&&n.postMessage({key:t,fid:e}),y5()}let Ri=null;function g5(){return!Ri&&"BroadcastChannel"in self&&(Ri=new BroadcastChannel("[Firebase] FID Change"),Ri.onmessage=t=>{eT(t.data.key,t.data.fid)}),Ri}function y5(){X8.size===0&&Ri&&(Ri.close(),Ri=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v5="firebase-installations-database",_5=1,Ki="firebase-installations-store";let wf=null;function u0(){return wf||(wf=PE(v5,_5,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ki)}}})),wf}async function id(t,e){const n=rh(t),i=(await u0()).transaction(Ki,"readwrite"),s=i.objectStore(Ki),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&J8(t,e.fid),e}async function tT(t){const e=rh(t),r=(await u0()).transaction(Ki,"readwrite");await r.objectStore(Ki).delete(e),await r.done}async function ih(t,e){const n=rh(t),i=(await u0()).transaction(Ki,"readwrite"),s=i.objectStore(Ki),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&J8(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c0(t){let e;const n=await ih(t.appConfig,r=>{const i=k5(r),s=E5(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===sm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function k5(t){const e=t||{fid:f5(),registrationStatus:0};return nT(e)}function E5(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Gi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=w5(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:T5(t)}:{installationEntry:e}}async function w5(t,e){try{const n=await c5(t,e);return id(t.appConfig,n)}catch(n){throw H8(n)&&n.customData.serverCode===409?await tT(t.appConfig):await id(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function T5(t){let e=await n_(t.appConfig);for(;e.registrationStatus===1;)await Z8(100),e=await n_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await c0(t);return r||n}return e}function n_(t){return ih(t,e=>{if(!e)throw Gi.create("installation-not-found");return nT(e)})}function nT(t){return I5(t)?{fid:t.fid,registrationStatus:0}:t}function I5(t){return t.registrationStatus===1&&t.registrationTime+$8<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x5({appConfig:t,heartbeatServiceProvider:e},n){const r=S5(t,n),i=a5(t,n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={installation:{sdkVersion:B8,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await Y8(()=>fetch(r,l));if(u.ok){const d=await u.json();return G8(d)}else throw await K8("Generate Auth Token",u)}function S5(t,{fid:e}){return`${q8(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(t,e=!1){let n;const r=await ih(t.appConfig,s=>{if(!rT(s))throw Gi.create("not-registered");const o=s.authToken;if(!e&&R5(o))return s;if(o.requestStatus===1)return n=A5(t,e),s;{if(!navigator.onLine)throw Gi.create("app-offline");const l=P5(s);return n=L5(t,l),l}});return n?await n:r.authToken}async function A5(t,e){let n=await r_(t.appConfig);for(;n.authToken.requestStatus===1;)await Z8(100),n=await r_(t.appConfig);const r=n.authToken;return r.requestStatus===0?d0(t,e):r}function r_(t){return ih(t,e=>{if(!rT(e))throw Gi.create("not-registered");const n=e.authToken;return b5(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function L5(t,e){try{const n=await x5(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await id(t.appConfig,r),n}catch(n){if(H8(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await tT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await id(t.appConfig,r)}throw n}}function rT(t){return t!==void 0&&t.registrationStatus===2}function R5(t){return t.requestStatus===2&&!C5(t)}function C5(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+r5}function P5(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function b5(t){return t.requestStatus===1&&t.requestTime+$8<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j5(t){const e=t,{installationEntry:n,registrationPromise:r}=await c0(e);return r?r.catch(console.error):d0(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N5(t,e=!1){const n=t;return await D5(n),(await d0(n,e)).token}async function D5(t){const{registrationPromise:e}=await c0(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O5(t){if(!t||!t.options)throw Tf("App Configuration");if(!t.name)throw Tf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Tf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Tf(t){return Gi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="installations",M5="installations-internal",V5=t=>{const e=t.getProvider("app").getImmediate(),n=O5(e),r=li(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},F5=t=>{const e=t.getProvider("app").getImmediate(),n=li(e,iT).getImmediate();return{getId:()=>j5(n),getToken:i=>N5(n,i)}};function U5(){En(new sn(iT,V5,"PUBLIC")),En(new sn(M5,F5,"PRIVATE"))}U5();Ot(W8,l0);Ot(W8,l0,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="analytics",W5="firebase_id",$5="origin",B5=60*1e3,z5="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",h0="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new Nd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H5={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ht=new Xi("analytics","Analytics",H5);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q5(t){if(!t.startsWith(h0)){const e=Ht.create("invalid-gtag-resource",{gtagURL:t});return Mt.warn(e.message),""}return t}function sT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function G5(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function K5(t,e){const n=G5("firebase-js-sdk-policy",{createScriptURL:q5}),r=document.createElement("script"),i=`${h0}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Q5(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Y5(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await sT(n)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(l){Mt.error(l)}t("config",i,s)}async function Z5(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await sT(n);for(const u of o){const d=l.find(g=>g.measurementId===u),f=d&&e[d.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Mt.error(s)}}function X5(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await Z5(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await Y5(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,d]=o;t("get",l,u,d)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Mt.error(l)}}return i}function J5(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=X5(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function ej(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(h0)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tj=30,nj=1e3;class rj{constructor(e={},n=nj){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const oT=new rj;function ij(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function sj(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:ij(r)},s=z5.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Ht.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function oj(t,e=oT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ht.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ht.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new uj;return setTimeout(async()=>{l.abort()},B5),aT({appId:r,apiKey:i,measurementId:s},o,l,e)}async function aT(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=oT){var s;const{appId:o,measurementId:l}=t;try{await aj(r,e)}catch(u){if(l)return Mt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await sj(t);return i.deleteThrottleMetadata(o),u}catch(u){const d=u;if(!lj(d)){if(i.deleteThrottleMetadata(o),l)return Mt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:l};throw u}const f=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?$y(n,i.intervalMillis,tj):$y(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,g),Mt.debug(`Calling attemptFetch again in ${f} millis`),aT(t,g,r,i)}}function aj(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ht.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function lj(t){if(!(t instanceof an)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class uj{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function cj(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dj(){if(AE())try{await LE()}catch(t){return Mt.warn(Ht.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Mt.warn(Ht.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function hj(t,e,n,r,i,s,o){var l;const u=oj(t);u.then(k=>{n[k.measurementId]=k.appId,t.options.measurementId&&k.measurementId!==t.options.measurementId&&Mt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>Mt.error(k)),e.push(u);const d=dj().then(k=>{if(k)return r.getId()}),[f,g]=await Promise.all([u,d]);ej(s)||K5(s,f.measurementId),i("js",new Date);const y=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return y[$5]="firebase",y.update=!0,g!=null&&(y[W5]=g),i("config",f.measurementId,y),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fj{constructor(e){this.app=e}_delete(){return delete qa[this.app.options.appId],Promise.resolve()}}let qa={},i_=[];const s_={};let If="dataLayer",pj="gtag",o_,lT,a_=!1;function mj(){const t=[];if(SE()&&t.push("This is a browser extension environment."),yA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ht.create("invalid-analytics-context",{errorInfo:e});Mt.warn(n.message)}}function gj(t,e,n){mj();const r=t.options.appId;if(!r)throw Ht.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Mt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ht.create("no-api-key");if(qa[r]!=null)throw Ht.create("already-exists",{id:r});if(!a_){Q5(If);const{wrappedGtag:s,gtagCore:o}=J5(qa,i_,s_,If,pj);lT=s,o_=o,a_=!0}return qa[r]=hj(t,i_,s_,e,o_,If,n),new fj(t)}function yj(t=Dd()){t=De(t);const e=li(t,sd);return e.isInitialized()?e.getImmediate():vj(t)}function vj(t,e={}){const n=li(t,sd);if(n.isInitialized()){const i=n.getImmediate();if(ml(e,n.getOptions()))return i;throw Ht.create("already-initialized")}return n.initialize({options:e})}function _j(t,e,n,r){t=De(t),cj(lT,qa[t.app.options.appId],e,n,r).catch(i=>Mt.error(i))}const l_="@firebase/analytics",u_="0.10.8";function kj(){En(new sn(sd,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return gj(r,i,n)},"PUBLIC")),En(new sn("analytics-internal",t,"PRIVATE")),Ot(l_,u_),Ot(l_,u_,"esm2017");function t(e){try{const n=e.getProvider(sd).getImmediate();return{logEvent:(r,i,s)=>_j(n,r,i,s)}}catch(n){throw Ht.create("interop-component-reg-failed",{reason:n})}}}kj();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="firebasestorage.googleapis.com",Ej="storageBucket",wj=2*60*1e3,Tj=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends an{constructor(e,n,r=0){super(xf(e),`Firebase Storage: ${n} (${xf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Wn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fn||(Fn={}));function xf(t){return"storage/"+t}function Ij(){const t="An unknown error occurred, please check the error payload for server response.";return new Wn(Fn.UNKNOWN,t)}function xj(){return new Wn(Fn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Sj(){return new Wn(Fn.CANCELED,"User canceled the upload/download.")}function Aj(t){return new Wn(Fn.INVALID_URL,"Invalid URL '"+t+"'.")}function Lj(t){return new Wn(Fn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function c_(t){return new Wn(Fn.INVALID_ARGUMENT,t)}function cT(){return new Wn(Fn.APP_DELETED,"The Firebase app was deleted.")}function Rj(t){return new Wn(Fn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=mn.makeFromUrl(e,n)}catch{return new mn(e,"")}if(r.path==="")return r;throw Lj(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function d(P){P.path_=decodeURIComponent(P.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",k=new RegExp(`^https?://${g}/${f}/b/${i}/o${y}`,"i"),x={bucket:1,path:3},R=n===uT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",_=new RegExp(`^https?://${R}/${i}/${A}`,"i"),I=[{regex:l,indices:u,postModify:s},{regex:k,indices:x,postModify:d},{regex:_,indices:{bucket:1,path:2},postModify:d}];for(let P=0;P<I.length;P++){const N=I[P],V=N.regex.exec(e);if(V){const w=V[N.indices.bucket];let E=V[N.indices.path];E||(E=""),r=new mn(w,E),N.postModify(r);break}}if(r==null)throw Aj(e);return r}}class Cj{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pj(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let d=!1;function f(...A){d||(d=!0,e.apply(null,A))}function g(A){i=setTimeout(()=>{i=null,t(k,u())},A)}function y(){s&&clearTimeout(s)}function k(A,..._){if(d){y();return}if(A){y(),f.call(null,A,..._);return}if(u()||o){y(),f.call(null,A,..._);return}r<64&&(r*=2);let I;l===1?(l=2,I=0):I=(r+Math.random())*1e3,g(I)}let x=!1;function R(A){x||(x=!0,y(),!d&&(i!==null?(A||(l=2),clearTimeout(i),g(0)):A||(l=1)))}return g(0),s=setTimeout(()=>{o=!0,R(!0)},n),R}function bj(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jj(t){return t!==void 0}function d_(t,e,n,r){if(r<e)throw c_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw c_(`Invalid value for '${t}'. Expected ${n} or less.`)}function Nj(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var od;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(od||(od={}));/**
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
 */function Dj(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oj{constructor(e,n,r,i,s,o,l,u,d,f,g,y=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=g,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,x)=>{this.resolve_=k,this.reject_=x,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new bu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===od.NO_ERROR,u=s.getStatus();if(!l||Dj(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===od.ABORT;r(!1,new bu(!1,null,f));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new bu(d,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());jj(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Ij();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?cT():Sj();o(u)}else{const u=xj();o(u)}};this.canceled_?n(!1,new bu(!1,null,!0)):this.backoffId_=Pj(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bj(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Mj(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Vj(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Fj(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Uj(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Wj(t,e,n,r,i,s,o=!0){const l=Nj(t.urlParams),u=t.url+l,d=Object.assign({},t.headers);return Fj(d,e),Mj(d,n),Vj(d,s),Uj(d,r),new Oj(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $j(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Bj(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n){this._service=e,n instanceof mn?this._location=n:this._location=mn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ad(e,n)}get root(){const e=new mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Bj(this._location.path)}get storage(){return this._service}get parent(){const e=$j(this._location.path);if(e===null)return null;const n=new mn(this._location.bucket,e);return new ad(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Rj(e)}}function h_(t,e){const n=e==null?void 0:e[Ej];return n==null?null:mn.makeFromBucketSpec(n,t)}function zj(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:xE(i,t.app.options.projectId))}class Hj{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=uT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wj,this._maxUploadRetryTime=Tj,this._requests=new Set,i!=null?this._bucket=mn.makeFromBucketSpec(i,this._host):this._bucket=h_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mn.makeFromBucketSpec(this._url,e):this._bucket=h_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){d_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){d_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ad(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Cj(cT());{const o=Wj(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const f_="@firebase/storage",p_="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="storage";function qj(t=Dd(),e){t=De(t);const r=li(t,dT).getImmediate({identifier:e}),i=wE("storage");return i&&Gj(r,...i),r}function Gj(t,e,n,r={}){zj(t,e,n,r)}function Kj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Hj(n,r,i,e,Ji)}function Qj(){En(new sn(dT,Kj,"PUBLIC").setMultipleInstances(!0)),Ot(f_,p_,""),Ot(f_,p_,"esm2017")}Qj();const Yj={apiKey:"AIzaSyD7J2eVv6O0M4l39GToo_kVOeQZH8nQW0w",authDomain:"hyacinthattendance.firebaseapp.com",projectId:"hyacinthattendance",storageBucket:"hyacinthattendance.appspot.com",messagingSenderId:"12316915447",appId:"1:12316915447:web:2f8a7daf07918a0c2f45f2",measurementId:"G-040M8BP5NJ"},sh=bE(Yj),gn=mw(sh),be=Ub(sh);qj(sh);console.log("Using production Firebase services");let Zj=null;try{Zj=yj(sh),console.log("Analytics initialized")}catch(t){console.error("Error initializing analytics:",t)}const f0=new Qn;f0.setCustomParameters({prompt:"select_account"});f0.addScope("email");f0.addScope("profile");var Pt=function(){return Pt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Pt.apply(this,arguments)};function ld(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var xe="-ms-",Ga="-moz-",pe="-webkit-",hT="comm",oh="rule",p0="decl",Xj="@import",fT="@keyframes",Jj="@layer",pT=Math.abs,m0=String.fromCharCode,om=Object.assign;function e3(t,e){return Xe(t,0)^45?(((e<<2^Xe(t,0))<<2^Xe(t,1))<<2^Xe(t,2))<<2^Xe(t,3):0}function mT(t){return t.trim()}function Gn(t,e){return(t=e.exec(t))?t[0]:t}function se(t,e,n){return t.replace(e,n)}function uc(t,e,n){return t.indexOf(e,n)}function Xe(t,e){return t.charCodeAt(e)|0}function Co(t,e,n){return t.slice(e,n)}function Ln(t){return t.length}function gT(t){return t.length}function Ca(t,e){return e.push(t),t}function t3(t,e){return t.map(e).join("")}function m_(t,e){return t.filter(function(n){return!Gn(n,e)})}var ah=1,Po=1,yT=0,on=0,Be=0,Go="";function lh(t,e,n,r,i,s,o,l){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:ah,column:Po,length:o,return:"",siblings:l}}function Tr(t,e){return om(lh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ns(t){for(;t.root;)t=Tr(t.root,{children:[t]});Ca(t,t.siblings)}function n3(){return Be}function r3(){return Be=on>0?Xe(Go,--on):0,Po--,Be===10&&(Po=1,ah--),Be}function _n(){return Be=on<yT?Xe(Go,on++):0,Po++,Be===10&&(Po=1,ah++),Be}function Ni(){return Xe(Go,on)}function cc(){return on}function uh(t,e){return Co(Go,t,e)}function am(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function i3(t){return ah=Po=1,yT=Ln(Go=t),on=0,[]}function s3(t){return Go="",t}function Sf(t){return mT(uh(on-1,lm(t===91?t+2:t===40?t+1:t)))}function o3(t){for(;(Be=Ni())&&Be<33;)_n();return am(t)>2||am(Be)>3?"":" "}function a3(t,e){for(;--e&&_n()&&!(Be<48||Be>102||Be>57&&Be<65||Be>70&&Be<97););return uh(t,cc()+(e<6&&Ni()==32&&_n()==32))}function lm(t){for(;_n();)switch(Be){case t:return on;case 34:case 39:t!==34&&t!==39&&lm(Be);break;case 40:t===41&&lm(t);break;case 92:_n();break}return on}function l3(t,e){for(;_n()&&t+Be!==57;)if(t+Be===84&&Ni()===47)break;return"/*"+uh(e,on-1)+"*"+m0(t===47?t:_n())}function u3(t){for(;!am(Ni());)_n();return uh(t,on)}function c3(t){return s3(dc("",null,null,null,[""],t=i3(t),0,[0],t))}function dc(t,e,n,r,i,s,o,l,u){for(var d=0,f=0,g=o,y=0,k=0,x=0,R=1,A=1,_=1,v=0,I="",P=i,N=s,V=r,w=I;A;)switch(x=v,v=_n()){case 40:if(x!=108&&Xe(w,g-1)==58){uc(w+=se(Sf(v),"&","&\f"),"&\f",pT(d?l[d-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:w+=Sf(v);break;case 9:case 10:case 13:case 32:w+=o3(x);break;case 92:w+=a3(cc()-1,7);continue;case 47:switch(Ni()){case 42:case 47:Ca(d3(l3(_n(),cc()),e,n,u),u);break;default:w+="/"}break;case 123*R:l[d++]=Ln(w)*_;case 125*R:case 59:case 0:switch(v){case 0:case 125:A=0;case 59+f:_==-1&&(w=se(w,/\f/g,"")),k>0&&Ln(w)-g&&Ca(k>32?y_(w+";",r,n,g-1,u):y_(se(w," ","")+";",r,n,g-2,u),u);break;case 59:w+=";";default:if(Ca(V=g_(w,e,n,d,f,i,l,I,P=[],N=[],g,s),s),v===123)if(f===0)dc(w,e,V,V,P,s,g,l,N);else switch(y===99&&Xe(w,3)===110?100:y){case 100:case 108:case 109:case 115:dc(t,V,V,r&&Ca(g_(t,V,V,0,0,i,l,I,i,P=[],g,N),N),i,N,g,l,r?P:N);break;default:dc(w,V,V,V,[""],N,0,l,N)}}d=f=k=0,R=_=1,I=w="",g=o;break;case 58:g=1+Ln(w),k=x;default:if(R<1){if(v==123)--R;else if(v==125&&R++==0&&r3()==125)continue}switch(w+=m0(v),v*R){case 38:_=f>0?1:(w+="\f",-1);break;case 44:l[d++]=(Ln(w)-1)*_,_=1;break;case 64:Ni()===45&&(w+=Sf(_n())),y=Ni(),f=g=Ln(I=w+=u3(cc())),v++;break;case 45:x===45&&Ln(w)==2&&(R=0)}}return s}function g_(t,e,n,r,i,s,o,l,u,d,f,g){for(var y=i-1,k=i===0?s:[""],x=gT(k),R=0,A=0,_=0;R<r;++R)for(var v=0,I=Co(t,y+1,y=pT(A=o[R])),P=t;v<x;++v)(P=mT(A>0?k[v]+" "+I:se(I,/&\f/g,k[v])))&&(u[_++]=P);return lh(t,e,n,i===0?oh:l,u,d,f,g)}function d3(t,e,n,r){return lh(t,e,n,hT,m0(n3()),Co(t,2,-2),0,r)}function y_(t,e,n,r,i){return lh(t,e,n,p0,Co(t,0,r),Co(t,r+1,-1),r,i)}function vT(t,e,n){switch(e3(t,e)){case 5103:return pe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pe+t+t;case 4789:return Ga+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+t+Ga+t+xe+t+t;case 5936:switch(Xe(t,e+11)){case 114:return pe+t+xe+se(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return pe+t+xe+se(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return pe+t+xe+se(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return pe+t+xe+t+t;case 6165:return pe+t+xe+"flex-"+t+t;case 5187:return pe+t+se(t,/(\w+).+(:[^]+)/,pe+"box-$1$2"+xe+"flex-$1$2")+t;case 5443:return pe+t+xe+"flex-item-"+se(t,/flex-|-self/g,"")+(Gn(t,/flex-|baseline/)?"":xe+"grid-row-"+se(t,/flex-|-self/g,""))+t;case 4675:return pe+t+xe+"flex-line-pack"+se(t,/align-content|flex-|-self/g,"")+t;case 5548:return pe+t+xe+se(t,"shrink","negative")+t;case 5292:return pe+t+xe+se(t,"basis","preferred-size")+t;case 6060:return pe+"box-"+se(t,"-grow","")+pe+t+xe+se(t,"grow","positive")+t;case 4554:return pe+se(t,/([^-])(transform)/g,"$1"+pe+"$2")+t;case 6187:return se(se(se(t,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),t,"")+t;case 5495:case 3959:return se(t,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return se(se(t,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pe+t+t;case 4200:if(!Gn(t,/flex-|baseline/))return xe+"grid-column-align"+Co(t,e)+t;break;case 2592:case 3360:return xe+se(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Gn(r.props,/grid-\w+-end/)})?~uc(t+(n=n[e].value),"span",0)?t:xe+se(t,"-start","")+t+xe+"grid-row-span:"+(~uc(n,"span",0)?Gn(n,/\d+/):+Gn(n,/\d+/)-+Gn(t,/\d+/))+";":xe+se(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Gn(r.props,/grid-\w+-start/)})?t:xe+se(se(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return se(t,/(.+)-inline(.+)/,pe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ln(t)-1-e>6)switch(Xe(t,e+1)){case 109:if(Xe(t,e+4)!==45)break;case 102:return se(t,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+Ga+(Xe(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~uc(t,"stretch",0)?vT(se(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return se(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,u,d){return xe+i+":"+s+d+(o?xe+i+"-span:"+(l?u:+u-+s)+d:"")+t});case 4949:if(Xe(t,e+6)===121)return se(t,":",":"+pe)+t;break;case 6444:switch(Xe(t,Xe(t,14)===45?18:11)){case 120:return se(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pe+(Xe(t,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+xe+"$2box$3")+t;case 100:return se(t,":",":"+xe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return se(t,"scroll-","scroll-snap-")+t}return t}function ud(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function h3(t,e,n,r){switch(t.type){case Jj:if(t.children.length)break;case Xj:case p0:return t.return=t.return||t.value;case hT:return"";case fT:return t.return=t.value+"{"+ud(t.children,r)+"}";case oh:if(!Ln(t.value=t.props.join(",")))return""}return Ln(n=ud(t.children,r))?t.return=t.value+"{"+n+"}":""}function f3(t){var e=gT(t);return function(n,r,i,s){for(var o="",l=0;l<e;l++)o+=t[l](n,r,i,s)||"";return o}}function p3(t){return function(e){e.root||(e=e.return)&&t(e)}}function m3(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case p0:t.return=vT(t.value,t.length,n);return;case fT:return ud([Tr(t,{value:se(t.value,"@","@"+pe)})],r);case oh:if(t.length)return t3(n=t.props,function(i){switch(Gn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ns(Tr(t,{props:[se(i,/:(read-\w+)/,":"+Ga+"$1")]})),Ns(Tr(t,{props:[i]})),om(t,{props:m_(n,r)});break;case"::placeholder":Ns(Tr(t,{props:[se(i,/:(plac\w+)/,":"+pe+"input-$1")]})),Ns(Tr(t,{props:[se(i,/:(plac\w+)/,":"+Ga+"$1")]})),Ns(Tr(t,{props:[se(i,/:(plac\w+)/,xe+"input-$1")]})),Ns(Tr(t,{props:[i]})),om(t,{props:m_(n,r)});break}return""})}}var g3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ft={},bo=typeof process<"u"&&Ft!==void 0&&(Ft.REACT_APP_SC_ATTR||Ft.SC_ATTR)||"data-styled",_T="active",kT="data-styled-version",ch="6.1.17",g0=`/*!sc*/
`,cd=typeof window<"u"&&"HTMLElement"in window,y3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ft!==void 0&&Ft.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ft.REACT_APP_SC_DISABLE_SPEEDY!==""?Ft.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ft.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ft!==void 0&&Ft.SC_DISABLE_SPEEDY!==void 0&&Ft.SC_DISABLE_SPEEDY!==""&&Ft.SC_DISABLE_SPEEDY!=="false"&&Ft.SC_DISABLE_SPEEDY),dh=Object.freeze([]),jo=Object.freeze({});function v3(t,e,n){return n===void 0&&(n=jo),t.theme!==n.theme&&t.theme||e||n.theme}var ET=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,k3=/(^-|-$)/g;function v_(t){return t.replace(_3,"-").replace(k3,"")}var E3=/(a)(d)/gi,ju=52,__=function(t){return String.fromCharCode(t+(t>25?39:97))};function um(t){var e,n="";for(e=Math.abs(t);e>ju;e=e/ju|0)n=__(e%ju)+n;return(__(e%ju)+n).replace(E3,"$1-$2")}var Af,wT=5381,ro=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},TT=function(t){return ro(wT,t)};function w3(t){return um(TT(t)>>>0)}function T3(t){return t.displayName||t.name||"Component"}function Lf(t){return typeof t=="string"&&!0}var IT=typeof Symbol=="function"&&Symbol.for,xT=IT?Symbol.for("react.memo"):60115,I3=IT?Symbol.for("react.forward_ref"):60112,x3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},S3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ST={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},A3=((Af={})[I3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Af[xT]=ST,Af);function k_(t){return("type"in(e=t)&&e.type.$$typeof)===xT?ST:"$$typeof"in t?A3[t.$$typeof]:x3;var e}var L3=Object.defineProperty,R3=Object.getOwnPropertyNames,E_=Object.getOwnPropertySymbols,C3=Object.getOwnPropertyDescriptor,P3=Object.getPrototypeOf,w_=Object.prototype;function AT(t,e,n){if(typeof e!="string"){if(w_){var r=P3(e);r&&r!==w_&&AT(t,r,n)}var i=R3(e);E_&&(i=i.concat(E_(e)));for(var s=k_(t),o=k_(e),l=0;l<i.length;++l){var u=i[l];if(!(u in S3||n&&n[u]||o&&u in o||s&&u in s)){var d=C3(e,u);try{L3(t,u,d)}catch{}}}}return t}function No(t){return typeof t=="function"}function y0(t){return typeof t=="object"&&"styledComponentId"in t}function Ci(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function T_(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Al(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function cm(t,e,n){if(n===void 0&&(n=!1),!n&&!Al(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=cm(t[r],e[r]);else if(Al(e))for(var r in e)t[r]=cm(t[r],e[r]);return t}function v0(t,e){Object.defineProperty(t,"toString",{value:e})}function ql(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var b3=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw ql(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(g0);return n},t}(),hc=new Map,dd=new Map,fc=1,Nu=function(t){if(hc.has(t))return hc.get(t);for(;dd.has(fc);)fc++;var e=fc++;return hc.set(t,e),dd.set(e,t),e},j3=function(t,e){fc=e+1,hc.set(t,e),dd.set(e,t)},N3="style[".concat(bo,"][").concat(kT,'="').concat(ch,'"]'),D3=new RegExp("^".concat(bo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),O3=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},M3=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(g0),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var u=l.match(D3);if(u){var d=0|parseInt(u[1],10),f=u[2];d!==0&&(j3(f,d),O3(t,f,u[3]),t.getTag().insertRules(d,i)),i.length=0}else i.push(l)}}},I_=function(t){for(var e=document.querySelectorAll(N3),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(bo)!==_T&&(M3(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function V3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var LT=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(bo,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(bo,_T),r.setAttribute(kT,ch);var o=V3();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},F3=function(){function t(e){this.element=LT(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw ql(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),U3=function(){function t(e){this.element=LT(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),W3=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),x_=cd,$3={isServer:!cd,useCSSOMInjection:!y3},RT=function(){function t(e,n,r){e===void 0&&(e=jo),n===void 0&&(n={});var i=this;this.options=Pt(Pt({},$3),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&cd&&x_&&(x_=!1,I_(this)),v0(this,function(){return function(s){for(var o=s.getTag(),l=o.length,u="",d=function(g){var y=function(_){return dd.get(_)}(g);if(y===void 0)return"continue";var k=s.names.get(y),x=o.getGroup(g);if(k===void 0||!k.size||x.length===0)return"continue";var R="".concat(bo,".g").concat(g,'[id="').concat(y,'"]'),A="";k!==void 0&&k.forEach(function(_){_.length>0&&(A+="".concat(_,","))}),u+="".concat(x).concat(R,'{content:"').concat(A,'"}').concat(g0)},f=0;f<l;f++)d(f);return u}(i)})}return t.registerId=function(e){return Nu(e)},t.prototype.rehydrate=function(){!this.server&&cd&&I_(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Pt(Pt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new W3(i):r?new F3(i):new U3(i)}(this.options),new b3(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Nu(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Nu(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Nu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),B3=/&/g,z3=/^\s*\/\/.*$/gm;function CT(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=CT(n.children,e)),n})}function H3(t){var e,n,r,i=jo,s=i.options,o=s===void 0?jo:s,l=i.plugins,u=l===void 0?dh:l,d=function(y,k,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(e):y},f=u.slice();f.push(function(y){y.type===oh&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(B3,n).replace(r,d))}),o.prefix&&f.push(m3),f.push(h3);var g=function(y,k,x,R){k===void 0&&(k=""),x===void 0&&(x=""),R===void 0&&(R="&"),e=R,n=k,r=new RegExp("\\".concat(n,"\\b"),"g");var A=y.replace(z3,""),_=c3(x||k?"".concat(x," ").concat(k," { ").concat(A," }"):A);o.namespace&&(_=CT(_,o.namespace));var v=[];return ud(_,f3(f.concat(p3(function(I){return v.push(I)})))),v};return g.hash=u.length?u.reduce(function(y,k){return k.name||ql(15),ro(y,k.name)},wT).toString():"",g}var q3=new RT,dm=H3(),PT=c.createContext({shouldForwardProp:void 0,styleSheet:q3,stylis:dm});PT.Consumer;c.createContext(void 0);function S_(){return D.useContext(PT)}var G3=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=dm);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,v0(this,function(){throw ql(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=dm),this.name+e.hash},t}(),K3=function(t){return t>="A"&&t<="Z"};function A_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;K3(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var bT=function(t){return t==null||t===!1||t===""},jT=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!bT(s)&&(Array.isArray(s)&&s.isCss||No(s)?r.push("".concat(A_(i),":"),s,";"):Al(s)?r.push.apply(r,ld(ld(["".concat(i," {")],jT(s),!1),["}"],!1)):r.push("".concat(A_(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in g3||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Di(t,e,n,r){if(bT(t))return[];if(y0(t))return[".".concat(t.styledComponentId)];if(No(t)){if(!No(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Di(i,e,n,r)}var s;return t instanceof G3?n?(t.inject(n,r),[t.getName(r)]):[t]:Al(t)?jT(t):Array.isArray(t)?Array.prototype.concat.apply(dh,t.map(function(o){return Di(o,e,n,r)})):[t.toString()]}function Q3(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(No(n)&&!y0(n))return!1}return!0}var Y3=TT(ch),Z3=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Q3(e),this.componentId=n,this.baseHash=ro(Y3,n),this.baseStyle=r,RT.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ci(i,this.staticRulesId);else{var s=T_(Di(this.rules,e,n,r)),o=um(ro(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=Ci(i,o),this.staticRulesId=o}else{for(var u=ro(this.baseHash,r.hash),d="",f=0;f<this.rules.length;f++){var g=this.rules[f];if(typeof g=="string")d+=g;else if(g){var y=T_(Di(g,e,n,r));u=ro(u,y+f),d+=y}}if(d){var k=um(u>>>0);n.hasNameForId(this.componentId,k)||n.insertRules(this.componentId,k,r(d,".".concat(k),void 0,this.componentId)),i=Ci(i,k)}}return i},t}(),NT=c.createContext(void 0);NT.Consumer;var Rf={};function X3(t,e,n){var r=y0(t),i=t,s=!Lf(t),o=e.attrs,l=o===void 0?dh:o,u=e.componentId,d=u===void 0?function(P,N){var V=typeof P!="string"?"sc":v_(P);Rf[V]=(Rf[V]||0)+1;var w="".concat(V,"-").concat(w3(ch+V+Rf[V]));return N?"".concat(N,"-").concat(w):w}(e.displayName,e.parentComponentId):u,f=e.displayName,g=f===void 0?function(P){return Lf(P)?"styled.".concat(P):"Styled(".concat(T3(P),")")}(t):f,y=e.displayName&&e.componentId?"".concat(v_(e.displayName),"-").concat(e.componentId):e.componentId||d,k=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,x=e.shouldForwardProp;if(r&&i.shouldForwardProp){var R=i.shouldForwardProp;if(e.shouldForwardProp){var A=e.shouldForwardProp;x=function(P,N){return R(P,N)&&A(P,N)}}else x=R}var _=new Z3(n,y,r?i.componentStyle:void 0);function v(P,N){return function(V,w,E){var S=V.attrs,L=V.componentStyle,b=V.defaultProps,j=V.foldedComponentIds,C=V.styledComponentId,fe=V.target,Ge=c.useContext(NT),Re=S_(),we=V.shouldForwardProp||Re.shouldForwardProp,z=v3(w,Ge,b)||jo,Q=function(me,lt,At){for(var hi,$n=Pt(Pt({},lt),{className:void 0,theme:At}),mr=0;mr<me.length;mr+=1){var Bn=No(hi=me[mr])?hi($n):hi;for(var Qt in Bn)$n[Qt]=Qt==="className"?Ci($n[Qt],Bn[Qt]):Qt==="style"?Pt(Pt({},$n[Qt]),Bn[Qt]):Bn[Qt]}return lt.className&&($n.className=Ci($n.className,lt.className)),$n}(S,w,z),F=Q.as||fe,J={};for(var Z in Q)Q[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&Q.theme===z||(Z==="forwardedAs"?J.as=Q.forwardedAs:we&&!we(Z,F)||(J[Z]=Q[Z]));var ie=function(me,lt){var At=S_(),hi=me.generateAndInjectStyles(lt,At.styleSheet,At.stylis);return hi}(L,Q),Ce=Ci(j,C);return ie&&(Ce+=" "+ie),Q.className&&(Ce+=" "+Q.className),J[Lf(F)&&!ET.has(F)?"class":"className"]=Ce,E&&(J.ref=E),D.createElement(F,J)}(I,P,N)}v.displayName=g;var I=c.forwardRef(v);return I.attrs=k,I.componentStyle=_,I.displayName=g,I.shouldForwardProp=x,I.foldedComponentIds=r?Ci(i.foldedComponentIds,i.styledComponentId):"",I.styledComponentId=y,I.target=r?i.target:t,Object.defineProperty(I,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=r?function(N){for(var V=[],w=1;w<arguments.length;w++)V[w-1]=arguments[w];for(var E=0,S=V;E<S.length;E++)cm(N,S[E],!0);return N}({},i.defaultProps,P):P}}),v0(I,function(){return".".concat(I.styledComponentId)}),s&&AT(I,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),I}function L_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var R_=function(t){return Object.assign(t,{isCss:!0})};function J3(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(No(t)||Al(t))return R_(Di(L_(dh,ld([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Di(r):R_(Di(L_(r,e)))}function hm(t,e,n){if(n===void 0&&(n=jo),!e)throw ql(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,J3.apply(void 0,ld([i],s,!1)))};return r.attrs=function(i){return hm(t,e,Pt(Pt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return hm(t,e,Pt(Pt({},n),i))},r}var DT=function(t){return hm(X3,t)},M=DT;ET.forEach(function(t){M[t]=DT(t)});function OT(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=OT(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Or(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=OT(t))&&(r&&(r+=" "),r+=e);return r}const Ka=t=>typeof t=="number"&&!isNaN(t),Qi=t=>typeof t=="string",bt=t=>typeof t=="function",pc=t=>Qi(t)||bt(t)?t:null,Cf=t=>D.isValidElement(t)||Qi(t)||bt(t)||Ka(t);function eN(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function hh(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:l,position:u,preventExitTransition:d,done:f,nodeRef:g,isIn:y}=o;const k=r?`${e}--${u}`:e,x=r?`${n}--${u}`:n,R=D.useRef(0);return D.useLayoutEffect(()=>{const A=g.current,_=k.split(" "),v=I=>{I.target===g.current&&(A.dispatchEvent(new Event("d")),A.removeEventListener("animationend",v),A.removeEventListener("animationcancel",v),R.current===0&&I.type!=="animationcancel"&&A.classList.remove(..._))};A.classList.add(..._),A.addEventListener("animationend",v),A.addEventListener("animationcancel",v)},[]),D.useEffect(()=>{const A=g.current,_=()=>{A.removeEventListener("animationend",_),i?eN(A,f,s):f()};y||(d?_():(R.current=1,A.className+=` ${x}`,A.addEventListener("animationend",_)))},[y]),c.createElement(c.Fragment,null,l)}}function C_(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Yt={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},Du=t=>{let{theme:e,type:n,...r}=t;return c.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Pf={info:function(t){return c.createElement(Du,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(Du,{...t},c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(Du,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(Du,{...t},c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function tN(t){const[,e]=D.useReducer(k=>k+1,0),[n,r]=D.useState([]),i=D.useRef(null),s=D.useRef(new Map).current,o=k=>n.indexOf(k)!==-1,l=D.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:k=>s.get(k)}).current;function u(k){let{containerId:x}=k;const{limit:R}=l.props;!R||x&&l.containerId!==x||(l.count-=l.queue.length,l.queue=[])}function d(k){r(x=>k==null?[]:x.filter(R=>R!==k))}function f(){const{toastContent:k,toastProps:x,staleId:R}=l.queue.shift();y(k,x,R)}function g(k,x){let{delay:R,staleId:A,..._}=x;if(!Cf(k)||function(j){return!i.current||l.props.enableMultiContainer&&j.containerId!==l.props.containerId||s.has(j.toastId)&&j.updateId==null}(_))return;const{toastId:v,updateId:I,data:P}=_,{props:N}=l,V=()=>d(v),w=I==null;w&&l.count++;const E={...N,style:N.toastStyle,key:l.toastKey++,...Object.fromEntries(Object.entries(_).filter(j=>{let[C,fe]=j;return fe!=null})),toastId:v,updateId:I,data:P,closeToast:V,isIn:!1,className:pc(_.className||N.toastClassName),bodyClassName:pc(_.bodyClassName||N.bodyClassName),progressClassName:pc(_.progressClassName||N.progressClassName),autoClose:!_.isLoading&&(S=_.autoClose,L=N.autoClose,S===!1||Ka(S)&&S>0?S:L),deleteToast(){const j=C_(s.get(v),"removed");s.delete(v),Yt.emit(4,j);const C=l.queue.length;if(l.count=v==null?l.count-l.displayedToast:l.count-1,l.count<0&&(l.count=0),C>0){const fe=v==null?l.props.limit:1;if(C===1||fe===1)l.displayedToast++,f();else{const Ge=fe>C?C:fe;l.displayedToast=Ge;for(let Re=0;Re<Ge;Re++)f()}}else e()}};var S,L;E.iconOut=function(j){let{theme:C,type:fe,isLoading:Ge,icon:Re}=j,we=null;const z={theme:C,type:fe};return Re===!1||(bt(Re)?we=Re(z):D.isValidElement(Re)?we=D.cloneElement(Re,z):Qi(Re)||Ka(Re)?we=Re:Ge?we=Pf.spinner():(Q=>Q in Pf)(fe)&&(we=Pf[fe](z))),we}(E),bt(_.onOpen)&&(E.onOpen=_.onOpen),bt(_.onClose)&&(E.onClose=_.onClose),E.closeButton=N.closeButton,_.closeButton===!1||Cf(_.closeButton)?E.closeButton=_.closeButton:_.closeButton===!0&&(E.closeButton=!Cf(N.closeButton)||N.closeButton);let b=k;D.isValidElement(k)&&!Qi(k.type)?b=D.cloneElement(k,{closeToast:V,toastProps:E,data:P}):bt(k)&&(b=k({closeToast:V,toastProps:E,data:P})),N.limit&&N.limit>0&&l.count>N.limit&&w?l.queue.push({toastContent:b,toastProps:E,staleId:A}):Ka(R)?setTimeout(()=>{y(b,E,A)},R):y(b,E,A)}function y(k,x,R){const{toastId:A}=x;R&&s.delete(R);const _={content:k,props:x};s.set(A,_),r(v=>[...v,A].filter(I=>I!==R)),Yt.emit(4,C_(_,_.props.updateId==null?"added":"updated"))}return D.useEffect(()=>(l.containerId=t.containerId,Yt.cancelEmit(3).on(0,g).on(1,k=>i.current&&d(k)).on(5,u).emit(2,l),()=>{s.clear(),Yt.emit(3,l)}),[]),D.useEffect(()=>{l.props=t,l.isToastActive=o,l.displayedToast=n.length}),{getToastToRender:function(k){const x=new Map,R=Array.from(s.values());return t.newestOnTop&&R.reverse(),R.forEach(A=>{const{position:_}=A.props;x.has(_)||x.set(_,[]),x.get(_).push(A)}),Array.from(x,A=>k(A[0],A[1]))},containerRef:i,isToastActive:o}}function P_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function b_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function nN(t){const[e,n]=D.useState(!1),[r,i]=D.useState(!1),s=D.useRef(null),o=D.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=D.useRef(t),{autoClose:u,pauseOnHover:d,closeToast:f,onClick:g,closeOnClick:y}=t;function k(P){if(t.draggable){P.nativeEvent.type==="touchstart"&&P.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",v),document.addEventListener("touchmove",_),document.addEventListener("touchend",v);const N=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=N.getBoundingClientRect(),N.style.transition="",o.x=P_(P.nativeEvent),o.y=b_(P.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=N.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=N.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function x(P){if(o.boundingRect){const{top:N,bottom:V,left:w,right:E}=o.boundingRect;P.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=w&&o.x<=E&&o.y>=N&&o.y<=V?A():R()}}function R(){n(!0)}function A(){n(!1)}function _(P){const N=s.current;o.canDrag&&N&&(o.didMove=!0,e&&A(),o.x=P_(P),o.y=b_(P),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),N.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,N.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function v(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",v),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",v);const P=s.current;if(o.canDrag&&o.didMove&&P){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void t.closeToast();P.style.transition="transform 0.2s, opacity 0.2s",P.style.transform=`translate${t.draggableDirection}(0)`,P.style.opacity="1"}}D.useEffect(()=>{l.current=t}),D.useEffect(()=>(s.current&&s.current.addEventListener("d",R,{once:!0}),bt(t.onOpen)&&t.onOpen(D.isValidElement(t.children)&&t.children.props),()=>{const P=l.current;bt(P.onClose)&&P.onClose(D.isValidElement(P.children)&&P.children.props)}),[]),D.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||A(),window.addEventListener("focus",R),window.addEventListener("blur",A)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",R),window.removeEventListener("blur",A))}),[t.pauseOnFocusLoss]);const I={onMouseDown:k,onTouchStart:k,onMouseUp:x,onTouchEnd:x};return u&&d&&(I.onMouseEnter=A,I.onMouseLeave=R),y&&(I.onClick=P=>{g&&g(P),o.canCloseOnClick&&f()}),{playToast:R,pauseToast:A,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:I}}function MT(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return c.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function rN(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:l,controlledProgress:u,progress:d,rtl:f,isIn:g,theme:y}=t;const k=s||u&&d===0,x={...l,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:k?0:1};u&&(x.transform=`scaleX(${d})`);const R=Or("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${y}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),A=bt(o)?o({rtl:f,type:i,defaultClassName:R}):Or(R,o);return c.createElement("div",{role:"progressbar","aria-hidden":k?"true":"false","aria-label":"notification timer",className:A,style:x,[u&&d>=1?"onTransitionEnd":"onAnimationEnd"]:u&&d<1?null:()=>{g&&r()}})}const iN=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=nN(t),{closeButton:s,children:o,autoClose:l,onClick:u,type:d,hideProgressBar:f,closeToast:g,transition:y,position:k,className:x,style:R,bodyClassName:A,bodyStyle:_,progressClassName:v,progressStyle:I,updateId:P,role:N,progress:V,rtl:w,toastId:E,deleteToast:S,isIn:L,isLoading:b,iconOut:j,closeOnClick:C,theme:fe}=t,Ge=Or("Toastify__toast",`Toastify__toast-theme--${fe}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":w},{"Toastify__toast--close-on-click":C}),Re=bt(x)?x({rtl:w,position:k,type:d,defaultClassName:Ge}):Or(Ge,x),we=!!V||!l,z={closeToast:g,type:d,theme:fe};let Q=null;return s===!1||(Q=bt(s)?s(z):D.isValidElement(s)?D.cloneElement(s,z):MT(z)),c.createElement(y,{isIn:L,done:S,position:k,preventExitTransition:n,nodeRef:r},c.createElement("div",{id:E,onClick:u,className:Re,...i,style:R,ref:r},c.createElement("div",{...L&&{role:N},className:bt(A)?A({type:d}):Or("Toastify__toast-body",A),style:_},j!=null&&c.createElement("div",{className:Or("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!b})},j),c.createElement("div",null,o)),Q,c.createElement(rN,{...P&&!we?{key:`pb-${P}`}:{},rtl:w,theme:fe,delay:l,isRunning:e,isIn:L,closeToast:g,hide:f,type:d,style:I,className:v,controlledProgress:we,progress:V||0})))},fh=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},sN=hh(fh("bounce",!0));hh(fh("slide",!0));hh(fh("zoom"));hh(fh("flip"));const fm=D.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=tN(t),{className:s,style:o,rtl:l,containerId:u}=t;function d(f){const g=Or("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":l});return bt(s)?s({position:f,rtl:l,defaultClassName:g}):Or(g,pc(s))}return D.useEffect(()=>{e&&(e.current=r.current)},[]),c.createElement("div",{ref:r,className:"Toastify",id:u},n((f,g)=>{const y=g.length?{...o}:{...o,pointerEvents:"none"};return c.createElement("div",{className:d(f),style:y,key:`container-${f}`},g.map((k,x)=>{let{content:R,props:A}=k;return c.createElement(iN,{...A,isIn:i(A.toastId),style:{...A.style,"--nth":x+1,"--len":g.length},key:`toast-${A.key}`},R)}))}))});fm.displayName="ToastContainer",fm.defaultProps={position:"top-right",transition:sN,autoClose:5e3,closeButton:MT,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let bf,Ti=new Map,Pa=[],oN=1;function VT(){return""+oN++}function aN(t){return t&&(Qi(t.toastId)||Ka(t.toastId))?t.toastId:VT()}function Qa(t,e){return Ti.size>0?Yt.emit(0,t,e):Pa.push({content:t,options:e}),e.toastId}function hd(t,e){return{...e,type:e&&e.type||t,toastId:aN(e)}}function Ou(t){return(e,n)=>Qa(e,hd(t,n))}function K(t,e){return Qa(t,hd("default",e))}K.loading=(t,e)=>Qa(t,hd("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),K.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=Qi(i)?K.loading(i,n):K.loading(i.render,{...n,...i}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(f,g,y)=>{if(g==null)return void K.dismiss(r);const k={type:f,...l,...n,data:y},x=Qi(g)?{render:g}:g;return r?K.update(r,{...k,...x}):K(x.render,{...k,...x}),y},d=bt(t)?t():t;return d.then(f=>u("success",o,f)).catch(f=>u("error",s,f)),d},K.success=Ou("success"),K.info=Ou("info"),K.error=Ou("error"),K.warning=Ou("warning"),K.warn=K.warning,K.dark=(t,e)=>Qa(t,hd("default",{theme:"dark",...e})),K.dismiss=t=>{Ti.size>0?Yt.emit(1,t):Pa=Pa.filter(e=>t!=null&&e.options.toastId!==t)},K.clearWaitingQueue=function(t){return t===void 0&&(t={}),Yt.emit(5,t)},K.isActive=t=>{let e=!1;return Ti.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},K.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:s}=i;const o=Ti.get(s||bf);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:VT()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,Qa(o,s)}},0)},K.done=t=>{K.update(t,{progress:1})},K.onChange=t=>(Yt.on(4,t),()=>{Yt.off(4,t)}),K.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},K.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Yt.on(2,t=>{bf=t.containerId||t,Ti.set(bf,t),Pa.forEach(e=>{Yt.emit(0,e.content,e.options)}),Pa=[]}).on(3,t=>{Ti.delete(t.containerId||t),Ti.size===0&&Yt.off(0).off(1).off(5)});var lN=D.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Ee=function(e,n,r){var i=r.get(e);return i?i(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function j_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var _e=D.forwardRef(function(t,e){var n=t.alt,r=t.color,i=t.size,s=t.weight,o=t.mirrored,l=t.children,u=t.renderPath,d=j_(t,["alt","color","size","weight","mirrored","children","renderPath"]),f=D.useContext(lN),g=f.color,y=g===void 0?"currentColor":g,k=f.size,x=f.weight,R=x===void 0?"regular":x,A=f.mirrored,_=A===void 0?!1:A,v=j_(f,["color","size","weight","mirrored"]);return c.createElement("svg",Object.assign({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i??k,height:i??k,fill:r??y,viewBox:"0 0 256 256",transform:o||_?"scale(-1, 1)":void 0},v,d),!!n&&c.createElement("title",null,n),l,c.createElement("rect",{width:"256",height:"256",fill:"none"}),u(s??R,r??y))});_e.displayName="IconBase";var rs=new Map;rs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});rs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});rs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))});rs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});rs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});rs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var uN=function(e,n){return Ee(e,n,rs)},FT=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:uN}))});FT.displayName="ArrowLeft";var is=new Map;is.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"136",x2:"108",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"176",x2:"188",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"136",x2:"188",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});is.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",opacity:"0.2"}),c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});is.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M240,208h-8V104a16,16,0,0,0-16-16H152V40a16,16,0,0,0-16-16H40A16,16,0,0,0,24,40V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM120,136a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h32A8,8,0,0,1,120,136ZM64,64H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm0,104H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm88-64h64V208H152Z"}),c.createElement("path",{d:"M192,168H176a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z"}),c.createElement("path",{d:"M176,144h16a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Z"}))});is.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});is.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});is.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var cN=function(e,n){return Ee(e,n,is)},_0=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:cN}))});_0.displayName="Buildings";var ss=new Map;ss.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"176",y1:"20",x2:"176",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"20",x2:"80",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M88,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"148 140 164 128 164 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ss.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ss.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,188a24.2,24.2,0,0,1-17-7,8,8,0,0,1,0-11.3,7.9,7.9,0,0,1,11.3,0A8.3,8.3,0,0,0,104,172a8,8,0,0,0,0-16h-2.5l-.4-.2h-.3l-.5-.2h-.1l-.6-.4h-.2l-.4-.3h0l-.4-.3-.2-.2-.3-.3a8.6,8.6,0,0,1-1.3-2,5.8,5.8,0,0,1-.6-1.7h0c-.1-.1-.1-.2-.1-.4a.4.4,0,0,0-.1-.3V148h0v-.7c0-.2.1-.3.1-.4v-.4a.6.6,0,0,0,.1-.4c.1-.1.1-.2.1-.4l.2-.3c0-.2,0-.3.1-.4l.2-.4v-.3l.2-.4.2-.3.3-.4.2-.2,5.6-7H92a8,8,0,0,1,0-16h28a8,8,0,0,1,6.2,13l-8.8,11.1A24,24,0,0,1,104,188Zm64-8a8,8,0,0,1-16,0V144l-3.2,2.4a8.1,8.1,0,0,1-11.2-1.6,8,8,0,0,1,1.6-11.2l16-12A8,8,0,0,1,168,128ZM208,80H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))});ss.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ss.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ss.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var dN=function(e,n){return Ee(e,n,ss)},Ll=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:dN}))});Ll.displayName="Calendar";var os=new Map;os.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});os.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});os.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});os.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});os.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});os.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var hN=function(e,n){return Ee(e,n,os)},UT=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:hN}))});UT.displayName="Check";var as=new Map;as.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});as.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});as.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"}))});as.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});as.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});as.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var fN=function(e,n){return Ee(e,n,as)},Ii=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:fN}))});Ii.displayName="CheckCircle";var ls=new Map;ls.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ls.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ls.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))});ls.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ls.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ls.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var pN=function(e,n){return Ee(e,n,ls)},WT=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:pN}))});WT.displayName="Clock";var us=new Map;us.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});us.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});us.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm59.9-19.9a96.2,96.2,0,0,0-135.8,0l-8.3,8.3L37.5,54.1a8,8,0,0,0-8.7-1.8,8.2,8.2,0,0,0-5,7.4v40a8,8,0,0,0,8,8h40a8,8,0,0,0,5.7-13.6L63.1,79.7l8.3-8.3a80,80,0,1,1,0,113.2,7.9,7.9,0,0,0-11.3,0,8,8,0,0,0,0,11.3A96,96,0,0,0,195.9,60.1Z"}))});us.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});us.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});us.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var mN=function(e,n){return Ee(e,n,us)},$T=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:mN}))});$T.displayName="ClockCounterClockwise";var cs=new Map;cs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});cs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});cs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"}))});cs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});cs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});cs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var gN=function(e,n){return Ee(e,n,cs)},ph=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:gN}))});ph.displayName="Envelope";var ds=new Map;ds.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ds.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ds.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,92a36,36,0,1,1-36,36A36,36,0,0,1,128,92Z"}))});ds.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ds.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ds.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var yN=function(e,n){return Ee(e,n,ds)},fd=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:yN}))});fd.displayName="Eye";var hs=new Map;hs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.4,163.6C232.1,145.7,240,128,240,128S208,56,128,56c-3.8,0-7.4.2-11,.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});hs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});hs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48a132.4,132.4,0,0,0-22,1.8,8.1,8.1,0,0,0-4.6,13.3L202.7,174.5a8,8,0,0,0,5.9,2.6,8.6,8.6,0,0,0,5.4-2c22.8-20.5,32.9-42.9,33.3-43.8A8.2,8.2,0,0,0,247.3,124.8Z"}),c.createElement("path",{d:"M53.9,34.6A8,8,0,0,0,42.1,45.4L61.3,66.5C25,88.8,9.4,123.2,8.7,124.8a8.2,8.2,0,0,0,0,6.5c.3.7,8.8,19.5,27.6,38.4C61.4,194.7,93.1,208,128,208a126.9,126.9,0,0,0,52.1-10.8l22,24.2A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3ZM128,164a36,36,0,0,1-29.5-56.6l47.2,51.9A35.4,35.4,0,0,1,128,164Z"}))});hs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});hs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});hs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var vN=function(e,n){return Ee(e,n,hs)},pd=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:vN}))});pd.displayName="EyeSlash";var fs=new Map;fs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});fs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M130.2,224a96.3,96.3,0,0,0,84-53.6h0L159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224Z",opacity:"0.2"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1l5.4,1.1,8.3-19.7a8.1,8.1,0,0,1,7.4-4.9h21.4a8.6,8.6,0,0,0,3.8-1l12.3-6.8a7.2,7.2,0,0,0,1.5-1.1l26.9-24.3a8.1,8.1,0,0,0,1.6-9.8l-9.3-16.8h0A98.5,98.5,0,0,0,128,32,95.4,95.4,0,0,0,65,55.6Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});fs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.6,173.3A102.9,102.9,0,0,0,232,128,104.2,104.2,0,0,0,154.8,27.5h-.5A103.8,103.8,0,0,0,60.4,49l-1.3,1.2A103.9,103.9,0,0,0,128,232h2.4A104.3,104.3,0,0,0,221,174.6h0ZM216,128a89.3,89.3,0,0,1-5.5,30.7l-46.4-28.5a16,16,0,0,0-6.3-2.3l-22.8-3a16.1,16.1,0,0,0-15.3,6.8h-8.6l-3.8-7.9a16.2,16.2,0,0,0-11-8.7l-6.6-1.4,2.5-5.9a8.1,8.1,0,0,1,7.4-4.9h16.1a16.1,16.1,0,0,0,7.7-2l12.2-6.8a16.1,16.1,0,0,0,3-2.1l26.9-24.4A15.7,15.7,0,0,0,170,50.7,88,88,0,0,1,216,128ZM40,128a87.1,87.1,0,0,1,9.5-39.7l10.4,27.9a16.1,16.1,0,0,0,11.6,10l5.5,1.2h.1l12,2.6a7.8,7.8,0,0,1,5.5,4.3l2.1,4.4a16.1,16.1,0,0,0,14.4,9h1.2l-7.7,17.2a15.9,15.9,0,0,0,2.8,17.4l16.1,17.4a8.3,8.3,0,0,1,2,6.9l-1.8,9.3A88.1,88.1,0,0,1,40,128Z"}))});fs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});fs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});fs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var _N=function(e,n){return Ee(e,n,fs)},BT=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:_N}))});BT.displayName="GlobeHemisphereWest";var ps=new Map;ps.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ps.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",opacity:"0.2"}),c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ps.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M218.8,103.7,138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5v92.1a16.4,16.4,0,0,0,4,11A15.9,15.9,0,0,0,48,224H96a8,8,0,0,0,8-8V168a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v48a8,8,0,0,0,8,8h48a15.6,15.6,0,0,0,7.6-1.9A16.1,16.1,0,0,0,224,208V115.5A16,16,0,0,0,218.8,103.7Z"}))});ps.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ps.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ps.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var kN=function(e,n){return Ee(e,n,ps)},zT=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:kN}))});zT.displayName="House";var ms=new Map;ms.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"108",x2:"184",y2:"108",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"148",x2:"184",y2:"148",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"94.1",cy:"116",r:"22",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M72.1,164a22,22,0,0,1,44,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ms.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM92.1,144a24,24,0,1,1,24-24A23.9,23.9,0,0,1,92.1,144Z",opacity:"0.2"}),c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ms.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM125.1,175.7a8,8,0,0,1-9.8-5.7,24,24,0,0,0-46.4,0,8.1,8.1,0,0,1-7.8,6l-2-.3a7.9,7.9,0,0,1-5.7-9.7,40.2,40.2,0,0,1,16.3-23.2,32,32,0,1,1,44.8,0A40.2,40.2,0,0,1,130.8,166,7.9,7.9,0,0,1,125.1,175.7ZM192,152H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"16"}))});ms.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ms.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ms.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var EN=function(e,n){return Ee(e,n,ms)},k0=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:EN}))});k0.displayName="IdentificationCard";var gs=new Map;gs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"152",r:"16"}))});gs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});gs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"}))});gs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"152",r:"10"}))});gs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"152",r:"8"}))});gs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});var wN=function(e,n){return Ee(e,n,gs)},md=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:wN}))});md.displayName="Lock";var ys=new Map;ys.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"44",y1:"156",x2:"100",y2:"212",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"164",y1:"92",x2:"72",y2:"184",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ys.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M192,120,136,64l26.3-26.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z",opacity:"0.2"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ys.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.3,32a15.9,15.9,0,0,0-22.6,0L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a15.9,15.9,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7ZM51.3,160,144,67.3,160.7,84,68,176.7ZM48,179.3,76.7,208H48Zm48,25.4L79.3,188,172,95.3,188.7,112Z"}))});ys.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ys.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ys.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var TN=function(e,n){return Ee(e,n,ys)},HT=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:TN}))});HT.displayName="Pencil";var vs=new Map;vs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});vs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,64l56,56,26.3-26.3a8,8,0,0,0,0-11.4L173.7,37.7a8,8,0,0,0-11.4,0Z",opacity:"0.2"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});vs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"}))});vs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});vs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});vs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var IN=function(e,n){return Ee(e,n,vs)},qT=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:IN}))});qT.displayName="PencilSimple";var _s=new Map;_s.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});_s.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});_s.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M141.7,133.7l-42,42A8.3,8.3,0,0,1,94,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H24a8,8,0,0,1,0-16H86V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,141.7,133.7ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"}))});_s.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});_s.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});_s.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var xN=function(e,n){return Ee(e,n,_s)},E0=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:xN}))});E0.displayName="SignIn";var ks=new Map;ks.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ks.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ks.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-42,42A8.3,8.3,0,0,1,174,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H104a8,8,0,0,1,0-16h62V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,221.7,133.7ZM104,208H48V48h56a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16h56a8,8,0,0,0,0-16Z"}))});ks.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ks.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ks.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var SN=function(e,n){return Ee(e,n,ks)},mc=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:SN}))});mc.displayName="SignOut";var Es=new Map;Es.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Es.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Es.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"}))});Es.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Es.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Es.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var AN=function(e,n){return Ee(e,n,Es)},GT=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:AN}))});GT.displayName="SpinnerGap";var ws=new Map;ws.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"60",x2:"40",y2:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ws.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ws.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))});ws.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ws.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ws.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var LN=function(e,n){return Ee(e,n,ws)},pm=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:LN}))});pm.displayName="Trash";var Ts=new Map;Ts.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ts.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ts.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});Ts.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ts.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ts.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var RN=function(e,n){return Ee(e,n,Ts)},Oi=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:RN}))});Oi.displayName="User";var Is=new Map;Is.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Is.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,32A96,96,0,0,0,63.8,199.4h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.4A96,96,0,0,0,128,32Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Is.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"120",r:"44"}),c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm65.8,162.4a81.3,81.3,0,0,0-24.5-23,59.7,59.7,0,0,1-82.6,0,81.3,81.3,0,0,0-24.5,23,88,88,0,1,1,131.6,0Z"}))});Is.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Is.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Is.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var CN=function(e,n){return Ee(e,n,Is)},mm=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:CN}))});mm.displayName="UserCircle";var xs=new Map;xs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"204",y1:"136",x2:"244",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"116",x2:"224",y2:"156",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});xs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"108",cy:"100",r:"60",opacity:"0.2"}),c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});xs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144.1,157.6a68,68,0,1,0-72.2,0,118.4,118.4,0,0,0-55.8,37.3,7.8,7.8,0,0,0-1.1,8.5,7.9,7.9,0,0,0,7.2,4.6H193.8a7.9,7.9,0,0,0,7.2-4.6,7.8,7.8,0,0,0-1.1-8.5A118.4,118.4,0,0,0,144.1,157.6Z"}))});xs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});xs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});xs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var PN=function(e,n){return Ee(e,n,xs)},w0=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:PN}))});w0.displayName="UserPlus";var Ss=new Map;Ss.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ss.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",opacity:"0.2"}),c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ss.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M121.2,157.9a60,60,0,1,0-66.4,0A95.5,95.5,0,0,0,9.5,192.8a7.8,7.8,0,0,0-.6,8.3,8.1,8.1,0,0,0,7.1,4.3H160a8.1,8.1,0,0,0,7.1-4.3,7.8,7.8,0,0,0-.6-8.3A95.5,95.5,0,0,0,121.2,157.9Z"}),c.createElement("path",{d:"M248.1,192.8a96.3,96.3,0,0,0-45.4-34.9A59.9,59.9,0,0,0,169.5,48a64,64,0,0,0-16.3,2.2,8.2,8.2,0,0,0-5.4,5.2,8,8,0,0,0,1.2,7.3,75.8,75.8,0,0,1,3.8,84.9,8.1,8.1,0,0,0,2.1,10.6q4.5,3.5,8.7,7.2l.5.5a112.6,112.6,0,0,1,25.5,34.9,7.9,7.9,0,0,0,7.2,4.6h44.7a8.1,8.1,0,0,0,7.1-4.3A8,8,0,0,0,248.1,192.8Z"}))});Ss.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ss.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ss.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var bN=function(e,n){return Ee(e,n,Ss)},T0=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:bN}))});T0.displayName="Users";var As=new Map;As.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});As.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});As.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"}))});As.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});As.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});As.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var jN=function(e,n){return Ee(e,n,As)},KT=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:jN}))});KT.displayName="X";var Ls=new Map;Ls.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ls.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ls.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm37.7,130.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3l-26.3,26.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,90.3,101.7a8.1,8.1,0,0,1,11.4-11.4L128,116.7l26.3-26.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"}))});Ls.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ls.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ls.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var NN=function(e,n){return Ee(e,n,Ls)},QT=D.forwardRef(function(t,e){return c.createElement(_e,Object.assign({ref:e},t,{renderPath:NN}))});QT.displayName="XCircle";const DN=M.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
`,ON=M.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`,MN=M.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,VN=M.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,N_=M.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,D_=M.label`
  font-size: 0.9rem;
  color: #555;
`,O_=M.div`
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
`,Mu=M.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #800000;
  margin-right: 0.5rem;
`,M_=M.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #e74c3c;
  
  &:focus {
    outline: none;
  }
`,FN=M.button`
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
`,UN=M.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,WN=M(yE)`
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
`,$N=M.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,BN=M.button`
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
`,zN=M.button`
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
`,HN=M.div`
  font-size: 2rem;
  font-weight: bold;
  color: #800000;
  text-align: center;
  margin-bottom: 0.5rem;
`;function qN(){const[t,e]=D.useState(""),[n,r]=D.useState(""),[i,s]=D.useState(""),[o,l]=D.useState(!1),[u,d]=D.useState(!1),[f,g]=D.useState(!1),[y,k]=D.useState(!1),x=Wo(),R=Uo();D.useEffect(()=>{var v;(v=R.state)!=null&&v.message&&(K.info(R.state.message),x(R.pathname,{replace:!0,state:{}}))},[R,x]),D.useEffect(()=>{i&&s("")},[t,n]);const A=async()=>{var I,P;if(!t){s("Please enter your email address to reset your password"),(I=document.getElementById("email"))==null||I.focus();return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){s("Please enter a valid email address"),(P=document.getElementById("email"))==null||P.focus();return}try{k(!0),await bL(gn,t),g(!0),K.success("Password reset email sent! Check your inbox.")}catch(N){console.error("Password reset error:",N),N.code==="auth/user-not-found"?s("No account found with this email address"):s("Failed to send password reset email. Please try again.")}finally{k(!1)}},_=async v=>{var P,N,V;if(v.preventDefault(),!t||!n){s("Please enter both email and password");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){s("Please enter a valid email address"),(P=document.getElementById("email"))==null||P.focus();return}try{s(""),l(!0);try{const E=(await NL(gn,t,n)).user,S=tr(pn(be,"declined_registrations"),Dr("userId","==",E.uid));if(!(await Pn(S)).empty){await gn.signOut(),s("Your registration request has been declined. Please contact an administrator."),K.error("Access denied: Registration declined");return}const b=tr(pn(be,"registration_requests"),Dr("userId","==",E.uid));if(!(await Pn(b)).empty){await gn.signOut(),s("Your registration request is pending approval. You will be notified when approved."),K.info("Registration pending approval");return}const C=!1;K.success("Login successful!"),x("/dashboard")}catch(w){if(console.error("Firebase auth error:",w),!(!1&&(w.code==="auth/network-request-failed"||(N=w.message)!=null&&N.includes("network")))){if(w.code==="auth/invalid-credential"||w.code==="auth/invalid-email"||w.code==="auth/user-not-found"||w.code==="auth/wrong-password"){console.log("Authentication failed:",w.code,w.message);const S=w.code==="auth/user-not-found"||w.code==="auth/invalid-credential"&&t.includes("@");s(S?p.jsxs("span",{children:["Account not found. Please check your email or",p.jsx("a",{href:"/register",style:{color:"#800000",marginLeft:"4px",textDecoration:"underline"},children:"register here"})]}):"Invalid email or password. Please check your credentials and try again."),(V=document.getElementById("email"))==null||V.focus()}else w.code==="auth/network-request-failed"?s("Network error. Please check your connection and try again."):w.code==="auth/too-many-requests"?s("Too many failed login attempts. Please try again later or reset your password."):w.code==="auth/operation-not-allowed"?(s("Email/password sign-in is not enabled. Please contact the administrator."),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(console.error("Login error details:",w),s("Failed to log in. Please try again."));K.error("Login failed")}}}catch(w){console.error("Unexpected login error:",w),s("An unexpected error occurred. Please try again."),K.error("Login failed")}finally{l(!1)}};return p.jsx(DN,{children:p.jsxs(ON,{children:[p.jsx(HN,{children:"Hyacinth"}),p.jsx(MN,{children:"Attendance System"}),p.jsxs(VN,{onSubmit:_,children:[p.jsxs(N_,{children:[p.jsx(D_,{htmlFor:"email",children:"Email"}),p.jsxs(O_,{children:[p.jsx(Mu,{children:p.jsx(ph,{size:18})}),p.jsx(M_,{id:"email",type:"email",value:t,onChange:v=>e(v.target.value),placeholder:"Enter your email",required:!0})]})]}),p.jsxs(N_,{children:[p.jsx(D_,{htmlFor:"password",children:"Password"}),p.jsxs(O_,{children:[p.jsx(Mu,{children:p.jsx(md,{size:18})}),p.jsx(M_,{id:"password",type:u?"text":"password",value:n,onChange:v=>r(v.target.value),placeholder:"Enter your password",required:!0}),p.jsx(zN,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?p.jsx(pd,{size:18}):p.jsx(fd,{size:18})})]}),p.jsx(BN,{type:"button",onClick:A,disabled:y,tabIndex:"-1",children:y?"Sending...":f?"Email sent!":"Forgot password?"})]}),i&&p.jsx(UN,{children:i}),p.jsxs($N,{children:[p.jsx(FN,{type:"submit",disabled:o,onClick:_,children:o?"Logging in...":p.jsxs(p.Fragment,{children:[p.jsx(Mu,{children:p.jsx(E0,{size:18})}),"Login"]})}),p.jsxs(WN,{to:"/register",children:[p.jsx(Mu,{children:p.jsx(w0,{size:18})}),"Register"]})]})]})]})})}const GN=async t=>{try{const e={...t,createdAt:Sl(),status:"pending"};return(await U8(pn(be,"registration_requests"),e)).id}catch(e){throw console.error("Error submitting registration request:",e),e}},KN=async()=>{try{const t=tr(pn(be,"registration_requests"),s0("createdAt","desc"));return(await Pn(t)).docs.map(n=>({id:n.id,...n.data()}))}catch(t){throw console.error("Error getting registration requests:",t),t}},QN=async(t,e)=>{try{const n=zt(be,"registration_requests",t);await rd(n,{...e,updatedAt:Sl()})}catch(n){throw console.error("Error updating registration request:",n),n}},YN=async t=>{try{await F8(zt(be,"users",t.userId),{...t,role:t.role||"user",createdAt:Sl(),approved:!0,approvedAt:Sl()}),await a0(zt(be,"registration_requests",t.id))}catch(e){throw console.error("Error approving registration request:",e),e}},ZN=async t=>{try{if(await F8(zt(be,"declined_registrations",t.id),{...t,declinedAt:Sl(),status:"declined",blocked:!0}),await a0(zt(be,"registration_requests",t.id)),t.userId&&!t.userId.startsWith("temp_"))try{const n=mw().currentUser;n&&n.uid===t.userId?(await WL(n),console.log("Deleted declined user from Firebase Authentication")):console.log("User marked as declined in Firestore. They will be blocked from accessing the system.")}catch(e){console.error("Error handling user authentication:",e)}}catch(e){throw console.error("Error declining registration request:",e),e}},XN=M.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
  padding: 2rem 1rem;
`,JN=M.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 550px;
  animation: fadeIn 0.3s ease-in-out;
`,e9=M.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,t9=M.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,ga=M.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,n9=M.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,jf=M.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${t=>t.flex||1};
  min-width: ${t=>t.minWidth||"0"};
`,Er=M.label`
  font-size: 0.9rem;
  color: #555;
`,yi=M.div`
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
`,cn=M.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  color: #800000;
`,Ds=M.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`,r9=M.select`
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
`,i9=M.button`
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
`,Nf=M.button`
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
`,V_=M(GT)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,s9=M(yE)`
  display: flex;
  align-items: center;
  color: #800000;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`,Os=M.div`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`,o9=M.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;
`,ya=M.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  color: ${t=>t.met?"#000000":"#666"};
`;function a9(){const[t,e]=D.useState({lastName:"",firstName:"",middleInitial:"",email:"",password:"",confirmPassword:"",position:""}),[n,r]=D.useState({}),[i,s]=D.useState(!1),[o,l]=D.useState(!1),[u,d]=D.useState(!1),[f,g]=D.useState(!1),y=Wo();D.useEffect(()=>{Object.keys(n).length>0&&r({})},[t]);const k={length:t.password.length>=4,validChars:/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(t.password),hasLetter:/[a-zA-Z]/.test(t.password),hasNumber:/[0-9]/.test(t.password),match:t.password===t.confirmPassword&&t.confirmPassword!==""},x=v=>{const{name:I,value:P}=v.target;if(e(I==="middleInitial"?N=>({...N,[I]:P.toUpperCase()}):N=>({...N,[I]:P})),I==="email"&&P.includes("@")&&P.includes(".")){g(!0);const N=setTimeout(()=>{R(P)},800);return()=>clearTimeout(N)}},R=async v=>{try{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){g(!1);return}(await fetch("https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=undefined",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({continueUri:window.location.href,identifier:v})}).then(N=>N.json())).registered&&r(N=>({...N,email:"This email is already registered. Please use a different email or login instead."}))}catch(I){console.error("Error checking email:",I)}finally{g(!1)}},A=()=>{const v={};return t.lastName.trim()||(v.lastName="Last name is required"),t.firstName.trim()||(v.firstName="First name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(v.email="Email is invalid"):v.email="Email is required",t.password?k.length?k.validChars?k.hasLetter?k.hasNumber||(v.password="Password must contain at least one number"):v.password="Password must contain at least one letter":v.password="Password contains invalid characters":v.password="Password must be at least 4 characters":v.password="Password is required",t.confirmPassword?t.password!==t.confirmPassword&&(v.confirmPassword="Passwords do not match"):v.confirmPassword="Please confirm your password",t.position||(v.position="Please select your position"),r(v),Object.keys(v).length===0},_=async v=>{var I,P,N,V;if(v.preventDefault(),!!A())try{s(!0);const w=!1;let E,S;try{S=await jL(gn,t.email,t.password),E=S.user.uid}catch(j){if(console.error("Auth error:",j),j.code==="auth/email-already-in-use")console.log("Email already exists in Auth but proceeding with registration request"),E=`temp_${Date.now()}_${Math.random().toString(36).substring(2,7)}`;else if(!(w&&(j.code==="auth/network-request-failed"||(I=j.message)!=null&&I.includes("network"))))throw j}const L=`${t.lastName}, ${t.firstName}${t.middleInitial?" "+t.middleInitial+".":""}`;if(S!=null&&S.user)try{await OL(S.user,{displayName:L})}catch(j){console.warn("Could not update profile, continuing with registration:",j)}const b={userId:E,lastName:t.lastName,firstName:t.firstName,middleInitial:t.middleInitial,name:L,email:t.email,position:t.position,role:"user",status:"pending",userID:`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`};try{await GN(b)}catch(j){if(console.error("Firestore error:",j),!w)throw j}K.success("Registration request submitted! An administrator will review your request."),w&&!S||y("/login",{state:{message:"Your registration request has been submitted. You will be notified when your account is approved."}})}catch(w){if(console.error("Registration error:",w),w.code==="auth/email-already-in-use"||typeof w=="object"&&w.code==="auth/email-already-in-use"){const E=w.message||"Email is already registered. Please use a different email or login instead.";r(S=>({...S,email:E})),K.error(p.jsxs("div",{children:["Email already exists. ",p.jsx("a",{href:"/",style:{color:"white",textDecoration:"underline"},children:"Login instead?"})]}),{autoClose:5e3}),(P=document.getElementById("email"))==null||P.scrollIntoView({behavior:"smooth",block:"center"}),(N=document.getElementById("email"))==null||N.focus()}else w.code==="auth/network-request-failed"?K.error("Network error. Please check your connection and try again."):w.code==="auth/operation-not-allowed"?(r(E=>({...E,email:"Email/password registration is not enabled. Please contact the administrator."})),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(V=w.code)!=null&&V.includes("auth/")?K.error(`Authentication error: ${w.message||"Please try again later"}`):(console.error("Registration error details:",w),K.error("Registration failed. Please try again."))}finally{s(!1)}};return p.jsx(XN,{children:p.jsxs(JN,{children:[p.jsxs(s9,{to:"/",children:[p.jsx(cn,{children:p.jsx(FT,{size:16})}),"Back to Login"]}),p.jsx(e9,{children:"Create Account"}),p.jsxs(t9,{onSubmit:_,children:[p.jsxs(ga,{children:[p.jsx(Er,{children:"Full Name"}),p.jsxs(n9,{children:[p.jsxs(jf,{flex:"2",minWidth:"150px",children:[p.jsx(Er,{htmlFor:"lastName",children:"Last Name"}),p.jsxs(yi,{children:[p.jsx(cn,{children:p.jsx(Oi,{size:18})}),p.jsx(Ds,{id:"lastName",name:"lastName",type:"text",value:t.lastName,onChange:x,placeholder:"Last name"})]}),n.lastName&&p.jsx(Os,{children:n.lastName})]}),p.jsxs(jf,{flex:"2",minWidth:"150px",children:[p.jsx(Er,{htmlFor:"firstName",children:"First Name"}),p.jsx(yi,{children:p.jsx(Ds,{id:"firstName",name:"firstName",type:"text",value:t.firstName,onChange:x,placeholder:"First name"})}),n.firstName&&p.jsx(Os,{children:n.firstName})]}),p.jsxs(jf,{flex:"1",minWidth:"80px",children:[p.jsx(Er,{htmlFor:"middleInitial",children:"M.I."}),p.jsx(yi,{children:p.jsx(Ds,{id:"middleInitial",name:"middleInitial",type:"text",value:t.middleInitial,onChange:x,placeholder:"M.I.",maxLength:"1"})})]})]})]}),p.jsxs(ga,{children:[p.jsx(Er,{htmlFor:"email",children:"Email"}),p.jsxs(yi,{children:[p.jsx(cn,{children:p.jsx(ph,{size:18})}),p.jsx(Ds,{id:"email",name:"email",type:"email",value:t.email,onChange:x,placeholder:"Enter your email"}),f&&p.jsx(Nf,{as:"span","aria-label":"Checking email",children:p.jsx(V_,{size:18})})]}),n.email&&p.jsx(Os,{children:n.email})]}),p.jsxs(ga,{children:[p.jsx(Er,{htmlFor:"position",children:"Position"}),p.jsxs(yi,{children:[p.jsx(cn,{children:p.jsx(k0,{size:18})}),p.jsxs(r9,{id:"position",name:"position",value:t.position,onChange:x,children:[p.jsx("option",{value:"",disabled:!0,children:"Select your position"}),p.jsx("option",{value:"Intern/OJT",children:"Intern/OJT"}),p.jsx("option",{value:"Employed/Onboarded",children:"Employed/Onboarded"})]})]}),n.position&&p.jsx(Os,{children:n.position})]}),p.jsxs(ga,{children:[p.jsx(Er,{htmlFor:"password",children:"Password"}),p.jsxs(yi,{children:[p.jsx(cn,{children:p.jsx(md,{size:18})}),p.jsx(Ds,{id:"password",name:"password",type:o?"text":"password",value:t.password,onChange:x,placeholder:"Create a password"}),p.jsx(Nf,{type:"button",onClick:()=>l(!o),"aria-label":o?"Hide password":"Show password",children:o?p.jsx(pd,{size:18}):p.jsx(fd,{size:18})})]}),n.password&&p.jsx(Os,{children:n.password}),p.jsxs(o9,{children:[p.jsxs(ya,{met:k.length,children:[p.jsx(cn,{children:p.jsx(Ii,{size:14,weight:k.length?"fill":"regular"})}),"At least 4 characters"]}),p.jsxs(ya,{met:k.validChars,children:[p.jsx(cn,{children:p.jsx(Ii,{size:14,weight:k.validChars?"fill":"regular"})}),"Valid characters (letters, numbers, and special characters)"]}),p.jsxs(ya,{met:k.hasLetter,children:[p.jsx(cn,{children:p.jsx(Ii,{size:14,weight:k.hasLetter?"fill":"regular"})}),"At least one letter"]}),p.jsxs(ya,{met:k.hasNumber,children:[p.jsx(cn,{children:p.jsx(Ii,{size:14,weight:k.hasNumber?"fill":"regular"})}),"At least one number"]})]})]}),p.jsxs(ga,{children:[p.jsx(Er,{htmlFor:"confirmPassword",children:"Confirm Password"}),p.jsxs(yi,{children:[p.jsx(cn,{children:p.jsx(md,{size:18})}),p.jsx(Ds,{id:"confirmPassword",name:"confirmPassword",type:u?"text":"password",value:t.confirmPassword,onChange:x,placeholder:"Confirm your password"}),p.jsx(Nf,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?p.jsx(pd,{size:18}):p.jsx(fd,{size:18})})]}),n.confirmPassword&&p.jsx(Os,{children:n.confirmPassword}),t.confirmPassword&&p.jsxs(ya,{met:k.match,children:[p.jsx(cn,{children:p.jsx(Ii,{size:14,weight:k.match?"fill":"regular"})}),"Passwords match"]})]}),p.jsx(i9,{type:"submit",disabled:i||f,children:i?p.jsxs(p.Fragment,{children:[p.jsx(V_,{size:18}),"Creating Account..."]}):f?"Checking email...":"Register"})]})]})})}const l9=M.div`
  display: flex;
  min-height: 100vh;
`,u9=M.div`
  width: 250px;
  background: linear-gradient(180deg, #000000 0%, #800000 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
`,c9=M.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`,wr=M.div`
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
`,YT=M.button`
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
`,d9=M(YT)`
  background-color: #111111;
  color: #76da7c;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,h9=M(YT)`
  background-color: #111111;
  color: #e67979;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,Sn=M.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,f9=M.div`
  flex: 1;
  padding: 2rem;
  background-color: #f5f5f5;
  overflow-y: auto;
`,p9=M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,m9=M.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,g9=M.div`
  display: flex;
  align-items: center;
`,y9=M.span`
  margin-right: 1rem;
  font-weight: 500;
`,v9=M.button`
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
`,_9=M.div`
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
`,k9=M.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`,E9=M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
`,w9=M.div`
  padding: 1rem;
  overflow-y: auto;
`,T9=M.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #eee;
  gap: 0.5rem;
`,I9=M.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`,x9=M.div`
  margin-bottom: 1rem;
`,S9=M.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,A9=M.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`,F_=M.button`
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
`,L9=({user:t,activeTab:e,setActiveTab:n,attendanceStatus:r,loading:i,handleTimeInOut:s,lastRecord:o,isSuperAdmin:l,userData:u,setUserData:d,children:f})=>{var P;const g=Wo(),[y,k]=D.useState(!1),[x,R]=D.useState((u==null?void 0:u.timeRegion)||"Asia/Manila"),[A,_]=D.useState(!1);D.useEffect(()=>{u!=null&&u.timeRegion&&R(u.timeRegion)},[u]);const v=async()=>{if(!(!(t!=null&&t.uid)||A))try{_(!0);const N=zt(be,"users",t.uid);await rd(N,{timeRegion:x}),d(V=>({...V,timeRegion:x})),K.success("Time region updated successfully"),k(!1)}catch(N){console.error("Error updating time region:",N),K.error("Failed to update time region")}finally{_(!1)}},I=async()=>{try{await UL(gn),g("/login")}catch(N){console.error("Error signing out:",N),K.error("Failed to sign out")}};return p.jsxs(l9,{children:[p.jsxs(u9,{children:[p.jsx(c9,{children:"HyAttend"}),p.jsxs(wr,{className:e==="dashboard"?"active":"",onClick:()=>n("dashboard"),children:[p.jsx(Sn,{children:p.jsx(zT,{size:16})}),"Dashboard"]}),p.jsxs(wr,{className:e==="attendance"?"active":"",onClick:()=>n("attendance"),children:[p.jsx(Sn,{children:p.jsx(WT,{size:16})}),"Attendance"]}),p.jsxs(wr,{className:e==="schedule"?"active":"",onClick:()=>n("schedule"),children:[p.jsx(Sn,{children:p.jsx(Ll,{size:16})}),"Schedule"]}),p.jsxs(wr,{className:e==="profile"?"active":"",onClick:()=>n("profile"),children:[p.jsx(Sn,{children:p.jsx(Oi,{size:16})}),"Profile"]}),l&&p.jsxs(p.Fragment,{children:[p.jsxs(wr,{className:e==="registration_requests"?"active":"",onClick:()=>n("registration_requests"),children:[p.jsx(Sn,{children:p.jsx(w0,{size:16})}),"Registration Requests"]}),p.jsxs(wr,{className:e==="user_management"?"active":"",onClick:()=>n("user_management"),children:[p.jsx(Sn,{children:p.jsx(T0,{size:16})}),"User Management"]})]}),p.jsxs("div",{style:{marginTop:"auto"},children:[p.jsxs("div",{style:{marginBottom:"1.5rem"},children:[p.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"User Settings"}),p.jsxs(wr,{onClick:()=>k(!0),children:[p.jsx(Sn,{children:p.jsx(BT,{size:16})}),"Change Time Region",p.jsx("div",{style:{fontSize:"0.75rem",marginLeft:"auto",opacity:.7},children:((P=u==null?void 0:u.timeRegion)==null?void 0:P.replace("_"," "))||"Asia/Manila"})]})]}),p.jsxs("div",{style:{marginBottom:"1.5rem"},children:[p.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"Attendance Actions"}),p.jsxs(d9,{onClick:()=>s("In"),disabled:i||r==="In",children:[p.jsx(Sn,{children:p.jsx(E0,{size:16})}),"Time In"]}),p.jsxs(h9,{onClick:()=>s("Out"),disabled:i||r==="Out"||!r,children:[p.jsx(Sn,{children:p.jsx(mc,{size:16})}),"Time Out"]}),r&&p.jsxs("div",{style:{padding:"0.5rem 0",textAlign:"center",fontSize:"0.85rem"},children:["Status: ",p.jsx("strong",{children:r==="In"?"Clocked In":"Clocked Out"})]})]}),p.jsxs(wr,{onClick:I,children:[p.jsx(Sn,{children:p.jsx(mc,{size:16})}),"Logout"]})]})]}),p.jsxs(f9,{children:[p.jsxs(p9,{children:[p.jsxs(m9,{children:[e==="dashboard"&&"Dashboard",e==="attendance"&&"Attendance",e==="schedule"&&"Schedule",e==="profile"&&"Profile",e==="registration_requests"&&"Registration Requests",e==="user_management"&&"User Management"]}),p.jsxs(g9,{children:[p.jsx(y9,{children:t==null?void 0:t.displayName}),p.jsxs(v9,{onClick:I,children:[p.jsx(mc,{size:16}),"Logout"]})]})]}),f]}),y&&p.jsx(_9,{children:p.jsxs(k9,{children:[p.jsxs(E9,{children:[p.jsx("h3",{children:"Change Time Region"}),p.jsx(I9,{onClick:()=>k(!1),children:"×"})]}),p.jsxs(w9,{children:[p.jsx("p",{style:{marginBottom:"1rem"},children:"Changing your time region will affect how times are displayed throughout the application and how your attendance is recorded."}),p.jsxs(x9,{children:[p.jsx(S9,{children:"Select Time Region"}),p.jsxs(A9,{value:x,onChange:N=>R(N.target.value),children:[p.jsxs("optgroup",{label:"Asia & Pacific",children:[p.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT)"}),p.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore (SGT)"}),p.jsx("option",{value:"Asia/Tokyo",children:"Asia/Tokyo (JST)"}),p.jsx("option",{value:"Australia/Sydney",children:"Australia/Sydney (AEST/AEDT)"})]}),p.jsxs("optgroup",{label:"Americas",children:[p.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern)"}),p.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central)"}),p.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain)"}),p.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific)"}),p.jsx("option",{value:"America/Anchorage",children:"America/Anchorage (Alaska)"}),p.jsx("option",{value:"America/Adak",children:"America/Adak (Hawaii-Aleutian)"}),p.jsx("option",{value:"Pacific/Honolulu",children:"Pacific/Honolulu (Hawaii)"}),p.jsx("option",{value:"America/Phoenix",children:"America/Phoenix (Arizona)"}),p.jsx("option",{value:"America/Toronto",children:"America/Toronto (Eastern Canada)"}),p.jsx("option",{value:"America/Vancouver",children:"America/Vancouver (Pacific Canada)"})]}),p.jsxs("optgroup",{label:"Europe & Africa",children:[p.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST)"}),p.jsx("option",{value:"Europe/Paris",children:"Europe/Paris (CET/CEST)"}),p.jsx("option",{value:"Europe/Berlin",children:"Europe/Berlin (CET/CEST)"}),p.jsx("option",{value:"Europe/Moscow",children:"Europe/Moscow (MSK)"})]})]})]})]}),p.jsxs(T9,{children:[p.jsx(F_,{onClick:()=>k(!1),children:"Cancel"}),p.jsx(F_,{primary:!0,onClick:v,disabled:A,children:A?"Updating...":"Save Changes"})]})]})})]})},Qr=M.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1.5rem;
`,Yr=M.h2`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1.25rem;
  margin: 0;
  border-bottom: 1px solid #eee;
`,Zr=M.div`
  padding: 1.25rem;
`,R9=M.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,ZT=M.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="In"?"#e8f5e9":t.status==="Out"?"#ffebee":t.status==="Late"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="In"?"#2e7d32":t.status==="Out"?"#c62828":t.status==="Late"?"#f57f17":"#757575"};
`;M.button`
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
`;M.div`
  margin-bottom: 1.5rem;
`;M.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;M.input`
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
`;M.select`
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
`;M.div`
  color: #d32f2f;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;M.div`
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
`;const C9=({attendanceStatus:t,lastRecord:e})=>p.jsx(p.Fragment,{children:p.jsxs(R9,{children:[p.jsxs(Qr,{children:[p.jsx(Yr,{children:"Today's Schedule"}),p.jsx(Zr,{children:p.jsx("p",{children:"No schedule for today"})})]}),p.jsxs(Qr,{children:[p.jsx(Yr,{children:"Attendance Status"}),p.jsx(Zr,{children:t?p.jsxs(p.Fragment,{children:[p.jsxs("p",{children:["Current Status:",p.jsx(ZT,{status:t,children:t==="In"?"Clocked In":"Clocked Out"})]}),e&&p.jsxs("p",{children:["Last action: ",new Date(e.timestamp.toDate()).toLocaleString()]})]}):p.jsx("p",{children:"You haven't clocked in today"})})]}),p.jsxs(Qr,{children:[p.jsx(Yr,{children:"Recent Activity"}),p.jsx(Zr,{children:e?p.jsxs("p",{children:["Last ",e.type==="In"?"Time In":"Time Out",": ",new Date(e.timestamp.toDate()).toLocaleString()]}):p.jsx("p",{children:"No recent activity"})})]})]})}),P9=M.table`
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
`,b9=M.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,j9=({user:t})=>{const[e,n]=D.useState([]),[r,i]=D.useState(!0);D.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{i(!0);const u=pn(be,"attendance"),d=tr(u,Dr("userId","==",t.uid),s0("timestamp","desc")),f=await Pn(d),g=[];f.forEach(y=>{g.push({id:y.id,...y.data()})}),n(g)}catch(u){console.error("Error fetching attendance records:",u)}finally{i(!1)}})()},[t]);const s=l=>l?l.toDate().toLocaleDateString():"N/A",o=l=>l?l.toDate().toLocaleTimeString():"N/A";return p.jsxs(Qr,{children:[p.jsx(Yr,{children:"Attendance Records"}),p.jsx(Zr,{children:r?p.jsx("p",{children:"Loading attendance records..."}):e.length>0?p.jsxs(P9,{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Date"}),p.jsx("th",{children:"Time"}),p.jsx("th",{children:"Type"}),p.jsx("th",{children:"Status"}),p.jsx("th",{children:"Notes"})]})}),p.jsx("tbody",{children:e.map(l=>p.jsxs("tr",{children:[p.jsx("td",{children:s(l.timestamp)}),p.jsx("td",{children:o(l.timestamp)}),p.jsx("td",{children:l.type}),p.jsx("td",{children:p.jsx(ZT,{status:l.type,children:l.type==="In"?"Clocked In":"Clocked Out"})}),p.jsx("td",{children:l.notes||"-"})]},l.id))})]}):p.jsx(b9,{children:p.jsx("p",{children:"No attendance records found"})})})]})},U_=M.table`
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
`,W_=M.div`
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
`,N9=M.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,D9=({user:t})=>{const[e,n]=D.useState(null),[r,i]=D.useState(!0);D.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{i(!0);const u=zt(be,"users",t.uid),d=await im(u);if(d.exists()){const f=d.data();if(f.schedule&&Array.isArray(f.schedule)&&f.schedule.length>0)console.log("Found user schedule:",f.schedule),n(f.schedule);else if(f.scheduleId){const g=f.scheduleId,y=zt(be,"schedules",g),k=await im(y);k.exists()&&n(k.data())}else{const g=pn(be,"schedules"),y=tr(g,Dr("isDefault","==",!0)),k=await Pn(y);k.empty||n(k.docs[0].data())}}}catch(u){console.error("Error fetching schedule:",u)}finally{i(!1)}})()},[t]);const s=l=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][l],o=l=>{if(!l)return"N/A";try{const[u,d]=l.split(":"),f=new Date;return f.setHours(parseInt(u,10)),f.setMinutes(parseInt(d,10)),f.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}catch{return l}};return p.jsxs(Qr,{children:[p.jsx(Yr,{children:"My Schedule"}),p.jsx(Zr,{children:r?p.jsx("p",{children:"Loading your schedule..."}):e?p.jsx("div",{children:Array.isArray(e)?p.jsxs(p.Fragment,{children:[p.jsx("p",{children:p.jsx("strong",{children:"Your Schedule"})}),e.map((l,u)=>{const d=new Date,g=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(l.dayOfWeek),y=d.getDay()===g,k=l.timeIn,x=l.shiftDuration||8;let[R,A]=k.split(":").map(Number);const v=`${((R+x)%24).toString().padStart(2,"0")}:${A.toString().padStart(2,"0")}`;return p.jsxs(W_,{isToday:y,children:[p.jsx("h3",{children:l.dayOfWeek}),p.jsxs("p",{children:[p.jsx("strong",{children:"Time In:"})," ",l.timeIn," |",p.jsx("strong",{children:"Duration:"})," ",l.shiftDuration," hours"]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Estimated Time Out:"})," ",v]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Time Region:"})," ",l.timeRegion]})]},u)}),p.jsxs(U_,{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Day"}),p.jsx("th",{children:"Time In"}),p.jsx("th",{children:"Time Out (Est.)"}),p.jsx("th",{children:"Duration"}),p.jsx("th",{children:"Region"})]})}),p.jsx("tbody",{children:e.map((l,u)=>{const d=l.timeIn,f=l.shiftDuration||8;let[g,y]=d.split(":").map(Number);const x=`${((g+f)%24).toString().padStart(2,"0")}:${y.toString().padStart(2,"0")}`;return p.jsxs("tr",{children:[p.jsx("td",{children:l.dayOfWeek}),p.jsx("td",{children:l.timeIn}),p.jsx("td",{children:x}),p.jsxs("td",{children:[l.shiftDuration," hours"]}),p.jsx("td",{children:l.timeRegion})]},u)})})]})]}):p.jsxs(p.Fragment,{children:[p.jsxs("p",{children:["Your assigned schedule: ",p.jsx("strong",{children:e.name||"Standard Schedule"})]}),e.shifts&&e.shifts.map((l,u)=>{const f=new Date().getDay()===l.day;return p.jsxs(W_,{isToday:f,children:[p.jsx("h3",{children:s(l.day)}),p.jsxs("p",{children:[p.jsx("strong",{children:"Start:"})," ",o(l.startTime)," |",p.jsx("strong",{children:"End:"})," ",o(l.endTime)]}),l.breakStart&&l.breakEnd&&p.jsxs("p",{children:[p.jsx("strong",{children:"Break:"})," ",o(l.breakStart)," - ",o(l.breakEnd)]})]},u)}),p.jsxs(U_,{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Day"}),p.jsx("th",{children:"Start Time"}),p.jsx("th",{children:"End Time"}),p.jsx("th",{children:"Break"})]})}),p.jsx("tbody",{children:e.shifts&&e.shifts.map((l,u)=>p.jsxs("tr",{children:[p.jsx("td",{children:s(l.day)}),p.jsx("td",{children:o(l.startTime)}),p.jsx("td",{children:o(l.endTime)}),p.jsx("td",{children:l.breakStart&&l.breakEnd?`${o(l.breakStart)} - ${o(l.breakEnd)}`:"None"})]},u))})]})]})}):p.jsx(N9,{children:p.jsx("p",{children:"No schedule has been assigned to you yet."})})})]})},O9=M.div`
  margin-bottom: 1.5rem;
`,Ms=M.p`
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`,Vs=M.strong`
  min-width: 120px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
`,M9=M.h3`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,Fs=M.span`
  color: #333;
  word-break: break-word;
`,V9=({user:t,userData:e,loadingUserData:n})=>p.jsxs(Qr,{children:[p.jsx(Yr,{children:"User Profile"}),p.jsx(Zr,{children:n?p.jsx("p",{children:"Loading user data..."}):p.jsx(p.Fragment,{children:p.jsxs(O9,{children:[p.jsxs(M9,{children:[p.jsx(mm,{size:20,weight:"bold"}),"User Information"]}),p.jsxs(Ms,{children:[p.jsxs(Vs,{children:[p.jsx(ph,{size:18}),"Email:"]}),p.jsx(Fs,{children:t==null?void 0:t.email})]}),p.jsxs(Ms,{children:[p.jsxs(Vs,{children:[p.jsx(Oi,{size:18}),"Name:"]}),p.jsx(Fs,{children:t==null?void 0:t.displayName})]}),p.jsxs(Ms,{children:[p.jsxs(Vs,{children:[p.jsx(k0,{size:18}),"User ID:"]}),p.jsx(Fs,{children:t==null?void 0:t.uid})]}),p.jsxs(Ms,{children:[p.jsxs(Vs,{children:[p.jsx(_0,{size:18}),"Position:"]}),p.jsx(Fs,{children:(e==null?void 0:e.position)||"Not specified"})]}),p.jsxs(Ms,{children:[p.jsxs(Vs,{children:[p.jsx(mm,{size:18}),"Role:"]}),p.jsx(Fs,{children:(e==null?void 0:e.role)||"Not specified"})]}),e&&p.jsxs(Ms,{children:[p.jsxs(Vs,{children:[p.jsx(Ll,{size:18}),"Created At:"]}),p.jsx(Fs,{children:(()=>{var r,i;try{return(r=e.createdAt)!=null&&r.seconds?new Date(e.createdAt.seconds*1e3).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):(i=e.createdAt)!=null&&i.toDate?e.createdAt.toDate().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):e.createdAt instanceof Date?e.createdAt.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):typeof e.createdAt=="string"?new Date(e.createdAt).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):`${new Date().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})} (Current)`}catch(s){return console.error("Error formatting timestamp:",s,e.createdAt),"April 26, 2025, 04:27 AM"}})()})]})]})})})]}),F9=M.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,U9=M.div`
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
`,W9=M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,$9=M.h3`
  font-size: 1.1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,B9=M.span`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,z9=M.div`
  margin-bottom: 1.5rem;
`,Df=M.div`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
`,Of=M.span`
  font-weight: 500;
  width: 120px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
`,Mf=M.span`
  color: #333;
`,H9=M.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`,Gl=M.button`
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
`,q9=M(Gl)`
  background-color: #4caf50;
  color: white;
  
  &:hover {
    background-color: #43a047;
  }
`,G9=M(Gl)`
  background-color: #f44336;
  color: white;
  
  &:hover {
    background-color: #e53935;
  }
`,K9=M(Gl)`
  background-color: #2196f3;
  color: white;
  
  &:hover {
    background-color: #1e88e5;
  }
`,Q9=M.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`,Y9=M.div`
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
`,Z9=M.div`
  background-color: white;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,X9=M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,J9=M.h3`
  margin: 0;
  font-size: 1.2rem;
`,eD=M.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`,tD=M.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Vu=M.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Fu=M.label`
  font-weight: 500;
  color: #555;
`,Vf=M.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,nD=M.select`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,rD=M.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`,iD=M(Gl)`
  background-color: #6e8efb;
  color: white;
  
  &:hover {
    background-color: #5a7df9;
  }
`,sD=M(Gl)`
  background-color: #e0e0e0;
  color: #333;
  
  &:hover {
    background-color: #d5d5d5;
  }
`,oD=M.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #666;
`,aD=t=>{if(!t)return"N/A";try{let e;if(t!=null&&t.seconds)e=new Date(t.seconds*1e3);else if(t!=null&&t.toDate)e=t.toDate();else if(t instanceof Date)e=t;else if(typeof t=="string")e=new Date(t);else return"Invalid date";return e.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}catch(e){return console.error("Error formatting timestamp:",e),"Invalid date"}},lD=()=>{const[t,e]=D.useState([]),[n,r]=D.useState(!0),[i,s]=D.useState(null),[o,l]=D.useState({name:"",email:"",position:"",role:""}),[u,d]=D.useState(!1);D.useEffect(()=>{f()},[]);const f=async()=>{try{r(!0);const _=await KN();e(_)}catch(_){console.error("Error fetching registration requests:",_),K.error("Failed to load registration requests")}finally{r(!1)}},g=async _=>{try{d(!0),await YN(_),K.success(`Registration for ${_.name||_.email} approved`),f()}catch(v){console.error("Error approving registration:",v),K.error("Failed to approve registration")}finally{d(!1)}},y=async _=>{try{d(!0),await ZN(_),K.success(`Registration for ${_.name||_.email} declined`),K.warning("Note: The user may still exist in Firebase Authentication. They will be blocked from accessing the system, but the account still exists."),f()}catch(v){console.error("Error declining registration:",v),K.error("Failed to decline registration")}finally{d(!1)}},k=_=>{s(_),l({name:_.name||"",email:_.email||"",position:_.position||"",role:_.role||"user"})},x=()=>{s(null)},R=_=>{const{name:v,value:I}=_.target;l(P=>({...P,[v]:I}))},A=async _=>{_.preventDefault();try{d(!0),await QN(i.id,{name:o.name,email:o.email,position:o.position,role:o.role}),K.success("Registration request updated"),s(null),f()}catch(v){console.error("Error updating registration request:",v),K.error("Failed to update registration request")}finally{d(!1)}};return n?p.jsxs(Qr,{children:[p.jsx(Yr,{children:"Registration Requests"}),p.jsx(Zr,{children:p.jsx(oD,{children:"Loading registration requests..."})})]}):p.jsxs(Qr,{children:[p.jsx(Yr,{children:"Registration Requests"}),p.jsxs(Zr,{children:[p.jsx(F9,{children:t.length===0?p.jsx(Q9,{children:p.jsx("p",{children:"No pending registration requests"})}):t.map(_=>p.jsxs(U9,{children:[p.jsxs(W9,{children:[p.jsxs($9,{children:[p.jsx(Oi,{size:18,weight:"bold"}),_.name||_.email]}),p.jsxs(B9,{children:[p.jsx($T,{size:14}),aD(_.createdAt)]})]}),p.jsxs(z9,{children:[p.jsxs(Df,{children:[p.jsxs(Of,{children:[p.jsx(Oi,{size:16}),"Email:"]}),p.jsx(Mf,{children:_.email})]}),p.jsxs(Df,{children:[p.jsxs(Of,{children:[p.jsx(_0,{size:16}),"Position:"]}),p.jsx(Mf,{children:_.position||"Not specified"})]}),p.jsxs(Df,{children:[p.jsxs(Of,{children:[p.jsx(Oi,{size:16}),"Role:"]}),p.jsx(Mf,{children:_.role||"user"})]})]}),p.jsxs(H9,{children:[p.jsxs(K9,{onClick:()=>k(_),disabled:u,children:[p.jsx(HT,{size:16}),"Edit"]}),p.jsxs(q9,{onClick:()=>g(_),disabled:u,children:[p.jsx(Ii,{size:16}),"Accept"]}),p.jsxs(G9,{onClick:()=>y(_),disabled:u,children:[p.jsx(QT,{size:16}),"Decline"]})]})]},_.id))}),i&&p.jsx(Y9,{children:p.jsxs(Z9,{children:[p.jsxs(X9,{children:[p.jsx(J9,{children:"Edit Registration Request"}),p.jsx(eD,{onClick:x,children:"×"})]}),p.jsxs(tD,{onSubmit:A,children:[p.jsxs(Vu,{children:[p.jsx(Fu,{htmlFor:"name",children:"Name"}),p.jsx(Vf,{type:"text",id:"name",name:"name",value:o.name,onChange:R,placeholder:"Enter name"})]}),p.jsxs(Vu,{children:[p.jsx(Fu,{htmlFor:"email",children:"Email"}),p.jsx(Vf,{type:"email",id:"email",name:"email",value:o.email,onChange:R,placeholder:"Enter email",required:!0})]}),p.jsxs(Vu,{children:[p.jsx(Fu,{htmlFor:"position",children:"Position"}),p.jsx(Vf,{type:"text",id:"position",name:"position",value:o.position,onChange:R,placeholder:"Enter position"})]}),p.jsxs(Vu,{children:[p.jsx(Fu,{htmlFor:"role",children:"Role"}),p.jsxs(nD,{id:"role",name:"role",value:o.role,onChange:R,children:[p.jsx("option",{value:"user",children:"User"}),p.jsx("option",{value:"admin",children:"Admin"}),p.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),p.jsxs(rD,{children:[p.jsx(sD,{type:"button",onClick:x,children:"Cancel"}),p.jsx(iD,{type:"submit",disabled:u,children:"Save Changes"})]})]})]})})]})]})},uD=M.div`
  padding: 2rem;
`,cD=M.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,dD=M.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,hD=M.thead`
  background-color: #f5f5f5;
`,Ff=M.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`,Us=M.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`,vi=M.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`,va=M.button`
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
`,fD=M.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.role){case"admin":return"#800000";case"superadmin":return"#000000";default:return"#555555"}}};
  color: white;
`,pD=M.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.status){case"active":return"#4caf50";case"inactive":return"#f44336";case"pending":return"#ff9800";default:return"#9e9e9e"}}};
  color: white;
`,mD=M.input`
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
`,$_=M.div`
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
`,B_=M.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,z_=M.h3`
  margin-top: 0;
  color: #333;
`,gD=M.p`
  margin-bottom: 1.5rem;
  color: #666;
`,H_=M.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,_i=M.button`
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
`,Uu=M.div`
  margin-bottom: 1rem;
`,yD=M.div`
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
`,Wu=M.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,q_=M.input`
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
`,vD=M.select`
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
`,_D=M.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,kD=M.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,ED=M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,wD=M.h4`
  margin: 0;
  color: #333;
`,TD=M.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;M.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;function ID(){const[t,e]=D.useState([]),[n,r]=D.useState(!0),[i,s]=D.useState(""),[o,l]=D.useState(!1),[u,d]=D.useState(null),[f,g]=D.useState(!1),[y,k]=D.useState(null),[x,R]=D.useState([]),[A,_]=D.useState({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),[v,I]=D.useState(null),[P,N]=D.useState(!1),V=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];D.useEffect(()=>{w()},[]);const w=async()=>{try{r(!0);const F=pn(be,"users"),Z=(await Pn(F)).docs.map(ie=>{const Ce=ie.data();return{id:ie.id,userId:Ce.userId||ie.id,...Ce,schedule:Ce.schedule||[]}});e(Z),r(!1)}catch(F){console.error("Error fetching users:",F),K.error("Failed to load users"),r(!1)}},E=F=>{d(F),l(!0)},S=async()=>{if(u)try{const F=u.userId||u.id;await a0(zt(be,"users",F)),e(t.filter(J=>!(J.userId===u.userId||J.id===u.id))),K.success(`User ${u.name||u.email} has been deleted`),l(!1),d(null)}catch(F){console.error("Error deleting user:",F),K.error(`Failed to delete user: ${F.message}`)}},L=()=>{l(!1),d(null)},b=async(F,J)=>{const Z=J==="active"?"inactive":"active";try{const ie=F.userId||F.id,Ce=zt(be,"users",ie);await rd(Ce,{status:Z}),e(t.map(me=>me.userId&&me.userId===F.userId||me.id===F.id?{...me,status:Z}:me)),K.success(`User status updated to ${Z}`)}catch(ie){console.error("Error updating user status:",ie),K.error(`Failed to update user status: ${ie.message}`)}},j=F=>{k(F),R(F.schedule||[]),g(!0),N(!1),I(null)},C=()=>{if(A.selectedDays.length===0){K.warning("Please select at least one day of the week");return}const F=new Date,[J,Z]=A.timeIn.split(":").map(Number);F.setHours(J,Z,0,0);const ie=A.selectedDays.map(me=>({id:`${Date.now()}-${me}`,dayOfWeek:me,timeIn:A.timeIn,timeRegion:A.timeRegion,shiftDuration:parseInt(A.shiftDuration,10),utcTimeIn:F.toISOString()})),Ce=[...x,...ie];R(Ce),K.success(`Added schedule for ${A.selectedDays.length} day(s)`),_({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},fe=async()=>{if(y)try{const F=y.userId||y.id;console.log("Updating schedule for user with document ID:",F);const J=zt(be,"users",F);await rd(J,{schedule:x}),e(t.map(Z=>Z.userId&&Z.userId===y.userId||Z.id===y.id?{...Z,schedule:x}:Z)),K.success("Schedule updated successfully"),g(!1)}catch(F){console.error("Error updating schedule:",F),K.error(`Failed to update schedule: ${F.message}`)}},Ge=F=>{const J=x.filter(Z=>Z.id!==F);R(J)},Re=F=>{I(F),N(!0),_({selectedDays:[F.dayOfWeek],timeIn:F.timeIn,timeRegion:F.timeRegion,shiftDuration:F.shiftDuration.toString()})},we=()=>{if(!v)return;if(A.selectedDays.length===0){K.warning("Please select at least one day of the week");return}const F=new Date,[J,Z]=A.timeIn.split(":").map(Number);F.setHours(J,Z,0,0);let ie=x.filter(me=>me.id!==v.id);const Ce=A.selectedDays.map(me=>({id:me===v.dayOfWeek?v.id:`${Date.now()}-${me}`,dayOfWeek:me,timeIn:A.timeIn,timeRegion:A.timeRegion,shiftDuration:parseInt(A.shiftDuration,10),utcTimeIn:F.toISOString()}));ie=[...ie,...Ce],R(ie),K.success(`Updated schedule for ${A.selectedDays.length} day(s)`),_({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),N(!1),I(null)},z=()=>{N(!1),I(null),_({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},Q=t.filter(F=>{const J=i.toLowerCase();return F.name&&F.name.toLowerCase().includes(J)||F.email&&F.email.toLowerCase().includes(J)||F.role&&F.role.toLowerCase().includes(J)||F.position&&F.position.toLowerCase().includes(J)});return p.jsxs(uD,{children:[p.jsxs(cD,{children:[p.jsx(T0,{size:24,weight:"bold"}),"User Management"]}),p.jsx(mD,{type:"text",placeholder:"Search users...",value:i,onChange:F=>s(F.target.value)}),n?p.jsx("p",{children:"Loading users..."}):p.jsxs(dD,{children:[p.jsx(hD,{children:p.jsxs(Ff,{children:[p.jsx(Us,{children:"Name"}),p.jsx(Us,{children:"Email"}),p.jsx(Us,{children:"Position"}),p.jsx(Us,{children:"Role"}),p.jsx(Us,{children:"Status"}),p.jsx(Us,{children:"Actions"})]})}),p.jsx("tbody",{children:Q.length>0?Q.map(F=>p.jsxs(Ff,{children:[p.jsx(vi,{children:F.name||"N/A"}),p.jsx(vi,{children:F.email}),p.jsx(vi,{children:F.position||"N/A"}),p.jsx(vi,{children:p.jsx(fD,{role:F.role,children:F.role||"member"})}),p.jsx(vi,{children:p.jsx(pD,{status:F.status||"active",children:F.status||"active"})}),p.jsxs(vi,{children:[p.jsx(va,{color:"#000000",onClick:()=>j(F),title:"Manage Schedule",children:p.jsx(Ll,{size:20})}),p.jsx(va,{color:F.status==="active"?"#f44336":"#4caf50",onClick:()=>b(F,F.status||"active"),title:F.status==="active"?"Deactivate user":"Activate user",children:F.status==="active"?p.jsx(KT,{size:20}):p.jsx(UT,{size:20})}),p.jsx(va,{color:"#f44336",onClick:()=>E(F),title:"Delete user",children:p.jsx(pm,{size:20})})]})]},F.id)):p.jsx(Ff,{children:p.jsx(vi,{colSpan:6,style:{textAlign:"center"},children:"No users found"})})})]}),o&&p.jsx($_,{children:p.jsxs(B_,{children:[p.jsx(z_,{children:"Confirm Deletion"}),p.jsxs(gD,{children:["Are you sure you want to delete the user ",(u==null?void 0:u.name)||(u==null?void 0:u.email),"? This action cannot be undone."]}),p.jsxs(H_,{children:[p.jsx(_i,{onClick:L,children:"Cancel"}),p.jsx(_i,{primary:!0,onClick:S,children:"Delete"})]})]})}),f&&y&&p.jsx($_,{children:p.jsxs(B_,{style:{maxWidth:"600px",width:"100%"},children:[p.jsx(z_,{children:p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[p.jsx(Ll,{size:24}),"Manage Schedule for ",y.name||y.email]})}),p.jsxs("div",{style:{marginBottom:"1.5rem"},children:[p.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Current Schedule"}),x.length>0?p.jsx(_D,{children:x.map(F=>p.jsxs(kD,{children:[p.jsxs(ED,{children:[p.jsx(wD,{children:F.dayOfWeek}),p.jsxs("div",{children:[p.jsx(va,{color:"#000000",onClick:()=>Re(F),title:"Edit schedule",style:{marginRight:"4px"},children:p.jsx(qT,{size:16})}),p.jsx(va,{color:"#f44336",onClick:()=>Ge(F.id),title:"Delete schedule",children:p.jsx(pm,{size:16})})]})]}),p.jsxs(TD,{children:[p.jsxs("div",{children:[p.jsx("strong",{children:"Time In:"})," ",F.timeIn]}),p.jsxs("div",{children:[p.jsx("strong",{children:"Region:"})," ",F.timeRegion]}),p.jsxs("div",{children:[p.jsx("strong",{children:"Duration:"})," ",F.shiftDuration," hours"]})]})]},F.id))}):p.jsx("p",{children:"No schedules found. Add a new schedule below."})]}),p.jsxs("div",{style:{marginBottom:"1.5rem"},children:[p.jsx("h4",{style:{marginBottom:"0.5rem"},children:P?"Edit Schedule":"Add New Schedule"}),p.jsxs(Uu,{children:[p.jsx(Wu,{children:"Days of Week (select multiple)"}),p.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:V.map(F=>p.jsxs(yD,{children:[p.jsx("input",{type:"checkbox",id:`day-${F}`,checked:A.selectedDays.includes(F),onChange:()=>{const J=A.selectedDays.includes(F)?A.selectedDays.filter(Z=>Z!==F):[...A.selectedDays,F];_({...A,selectedDays:J})}}),p.jsx("label",{htmlFor:`day-${F}`,children:F})]},F))})]}),p.jsxs(Uu,{children:[p.jsx(Wu,{children:"Time In"}),p.jsx(q_,{type:"time",value:A.timeIn,onChange:F=>_({...A,timeIn:F.target.value})})]}),p.jsxs(Uu,{children:[p.jsx(Wu,{children:"Time Region"}),p.jsxs(vD,{value:A.timeRegion,onChange:F=>_({...A,timeRegion:F.target.value}),children:[p.jsxs("optgroup",{label:"Asia & Pacific",children:[p.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT)"}),p.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore (SGT)"}),p.jsx("option",{value:"Asia/Tokyo",children:"Asia/Tokyo (JST)"}),p.jsx("option",{value:"Australia/Sydney",children:"Australia/Sydney (AEST/AEDT)"})]}),p.jsxs("optgroup",{label:"Americas",children:[p.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern)"}),p.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central)"}),p.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain)"}),p.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific)"}),p.jsx("option",{value:"America/Anchorage",children:"America/Anchorage (Alaska)"}),p.jsx("option",{value:"America/Adak",children:"America/Adak (Hawaii-Aleutian)"}),p.jsx("option",{value:"Pacific/Honolulu",children:"Pacific/Honolulu (Hawaii)"}),p.jsx("option",{value:"America/Phoenix",children:"America/Phoenix (Arizona)"}),p.jsx("option",{value:"America/Toronto",children:"America/Toronto (Eastern Canada)"}),p.jsx("option",{value:"America/Vancouver",children:"America/Vancouver (Pacific Canada)"})]}),p.jsxs("optgroup",{label:"Europe & Africa",children:[p.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST)"}),p.jsx("option",{value:"Europe/Paris",children:"Europe/Paris (CET/CEST)"}),p.jsx("option",{value:"Europe/Berlin",children:"Europe/Berlin (CET/CEST)"}),p.jsx("option",{value:"Europe/Moscow",children:"Europe/Moscow (MSK)"})]})]})]}),p.jsxs(Uu,{children:[p.jsx(Wu,{children:"Shift Duration (hours)"}),p.jsx(q_,{type:"number",min:"1",max:"24",value:A.shiftDuration,onChange:F=>_({...A,shiftDuration:F.target.value})})]}),p.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:P?p.jsxs(p.Fragment,{children:[p.jsx(_i,{primary:!0,onClick:we,children:"Update Schedule"}),p.jsx(_i,{onClick:z,children:"Cancel Edit"})]}):p.jsx(_i,{primary:!0,onClick:C,children:"Add Schedule"})})]}),p.jsxs(H_,{children:[p.jsx(_i,{onClick:()=>g(!1),children:"Cancel"}),p.jsx(_i,{primary:!0,onClick:fe,children:"Save Changes"})]})]})})]})}function xD(){const[t,e]=D.useState(null),[n,r]=D.useState("dashboard"),[i,s]=D.useState(null),[o,l]=D.useState(null),[u,d]=D.useState(!1),[f,g]=D.useState(null),[y,k]=D.useState(!1),x=Wo();D.useEffect(()=>{const v=gn.currentUser;if(v){const I={uid:v.uid,email:v.email,displayName:v.displayName||v.email.split("@")[0]};e(I),R(v.uid)}},[]);const R=async v=>{if(v)try{k(!0);try{const N=tr(pn(be,"declined_registrations"),Dr("userId","==",v));if(!(await Pn(N)).empty){K.error("Your registration request has been declined. Please contact an administrator."),await gn.signOut(),x("/login");return}}catch(N){console.error("Error checking declined status:",N)}try{const N=tr(pn(be,"registration_requests"),Dr("userId","==",v));if(!(await Pn(N)).empty){K.info("Your registration request is pending approval. You will be notified when approved."),await gn.signOut(),x("/login");return}}catch(N){console.error("Error checking pending status:",N)}const I=zt(be,"users",v),P=await im(I);if(P.exists()){const N=P.data();g(N)}else console.log("No user data found in Firestore"),K.error("Your account is not properly set up. Please contact an administrator."),await gn.signOut(),x("/login")}catch(I){console.error("Error fetching user data:",I),K.error("Error loading user data. Please try again later.")}finally{k(!1)}};D.useEffect(()=>{t!=null&&t.uid&&A()},[t]);const A=async()=>{try{const v=pn(be,"attendance");try{const I=tr(v,Dr("userId","==",t.uid),s0("timestamp","desc"),Zb(1)),P=await Pn(I);if(P.empty)s(null),l(null);else{const N=P.docs[0].data();l(N),s(N.type)}}catch(I){if(I.message&&I.message.includes("index is currently building")){console.log("Index is still building, using fallback method");const P=tr(v,Dr("userId","==",t.uid)),N=await Pn(P);if(N.empty)s(null),l(null);else{let V=null,w=new Date(0);N.forEach(E=>{var b;const S=E.data(),L=((b=S.timestamp)==null?void 0:b.toDate())||new Date(0);L>w&&(w=L,V=S)}),V?(l(V),s(V.type)):(s(null),l(null))}K.info("System is updating. Some features may be temporarily limited.",{autoClose:5e3,hideProgressBar:!1})}else throw I}}catch(v){console.error("Error fetching attendance status:",v),v.message&&v.message.includes("index")?K.warning("System is updating attendance records. Please try again in a few minutes."):K.error("Unable to fetch your attendance status. Please refresh the page.")}},_=async v=>{if(t){d(!0);try{const I=qe.now(),P=v==="In"?"On Time":"",N={userId:t.uid,email:t.email,name:t.displayName,type:v,status:P,timestamp:I,notes:""};await U8(pn(be,"attendance"),N),K.success(`Time ${v} recorded successfully!`),s(v),l(N)}catch(I){console.error(`Error recording time ${v}:`,I),K.error(`Failed to record time ${v}`)}finally{d(!1)}}};return p.jsxs(L9,{user:t,activeTab:n,setActiveTab:r,attendanceStatus:i,loading:u,handleTimeInOut:_,lastRecord:o,isSuperAdmin:(f==null?void 0:f.role)==="super_admin",userData:f,setUserData:g,children:[n==="dashboard"&&p.jsx(C9,{attendanceStatus:i,lastRecord:o}),n==="attendance"&&p.jsx(j9,{user:t}),n==="schedule"&&p.jsx(D9,{user:t}),n==="profile"&&p.jsx(V9,{user:t,userData:f,loadingUserData:y}),n==="registration_requests"&&(f==null?void 0:f.role)==="super_admin"&&p.jsx(lD,{}),n==="user_management"&&(f==null?void 0:f.role)==="super_admin"&&p.jsx(ID,{})]})}const SD=({children:t})=>{const[e,n]=D.useState(!0),[r,i]=D.useState(null);return D.useEffect(()=>{const s=FL(gn,o=>{i(o),n(!1)});return()=>s()},[]),e?p.jsx(AD,{children:"Loading..."}):r?t:p.jsx(gE,{to:"/",replace:!0})},AD=M.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #6e8efb;
  background-color: #f5f5f5;
`;function LD(){return p.jsxs(p.Fragment,{children:[p.jsx(J6,{children:p.jsxs(q6,{children:[p.jsx(Ta,{path:"/",element:p.jsx(qN,{})}),p.jsx(Ta,{path:"/register",element:p.jsx(a9,{})}),p.jsx(Ta,{path:"/dashboard",element:p.jsx(SD,{children:p.jsx(xD,{})})}),p.jsx(Ta,{path:"*",element:p.jsx(gE,{to:"/",replace:!0})})]})}),p.jsx(fm,{position:"top-right",autoClose:3e3})]})}sE(document.getElementById("root")).render(p.jsx(D.StrictMode,{children:p.jsx(LD,{})}));
